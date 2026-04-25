import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const outputRoot = path.join(projectRoot, "source-cache");

function parseArgs(argv) {
  const options = {
    arenaVersion: "15.11",
    ddragonVersion: "",
    champions: ["Lux", "Ezreal", "Darius"],
    allChampions: false,
  };

  for (const arg of argv) {
    if (arg.startsWith("--arena-version=")) {
      options.arenaVersion = arg.split("=")[1] || options.arenaVersion;
    }

    if (arg.startsWith("--ddragon-version=")) {
      options.ddragonVersion = arg.split("=")[1] || options.ddragonVersion;
    }

    if (arg.startsWith("--champions=")) {
      const value = arg.split("=")[1] || "";
      options.champions = value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    }

    if (arg === "--all-champions") {
      options.allChampions = true;
      options.champions = [];
    }
  }

  return options;
}

async function fetchJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.json();
}

async function writeJson(filePath, data) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

async function syncData() {
  const options = parseArgs(process.argv.slice(2));
  const versions = await fetchJson("https://ddragon.leagueoflegends.com/api/versions.json");
  const ddragonVersion = options.ddragonVersion || versions[0];
  const fetchedAt = new Date().toISOString();
  const championLocales = ["zh_CN", "en_US"];
  const championCatalogs = {};

  for (const locale of championLocales) {
    championCatalogs[locale] = await fetchJson(
      `https://ddragon.leagueoflegends.com/cdn/${ddragonVersion}/data/${locale}/champion.json`,
    );
  }

  const championIds = options.allChampions
    ? Object.keys(championCatalogs.en_US.data).sort((left, right) =>
        left.localeCompare(right),
      )
    : options.champions;
  let arenaRawAugmentCount = 0;

  const manifest = {
    fetchedAt,
    ddragonVersion,
    arenaVersion: options.arenaVersion,
    arenaDatasetMode: "raw-client-export",
    arenaRawAugmentCount,
    allChampions: options.allChampions,
    championCount: championIds.length,
    champions: championIds,
  };

  await writeJson(path.join(outputRoot, "ddragon", "versions.json"), versions);

  for (const locale of championLocales) {
    await writeJson(
      path.join(outputRoot, "ddragon", ddragonVersion, locale, "champion-summary.json"),
      championCatalogs[locale],
    );

    for (const champion of championIds) {
      const championJson = await fetchJson(
        `https://ddragon.leagueoflegends.com/cdn/${ddragonVersion}/data/${locale}/champion/${champion}.json`,
      );

      await writeJson(
        path.join(
          outputRoot,
          "ddragon",
          ddragonVersion,
          locale,
          "champions",
          `${champion}.json`,
        ),
        championJson,
      );
    }
  }

  const arenaLocales = ["en_us", "zh_cn"];
  for (const locale of arenaLocales) {
    const arenaJson = await fetchJson(
      `https://raw.communitydragon.org/${options.arenaVersion}/cdragon/arena/${locale}.json`,
    );

    if (locale === "en_us") {
      arenaRawAugmentCount = arenaJson.augments?.length ?? 0;
      manifest.arenaRawAugmentCount = arenaRawAugmentCount;
    }

    await writeJson(
      path.join(outputRoot, "arena", options.arenaVersion, `${locale}.json`),
      arenaJson,
    );
  }

  const cherryLocales = ["en_gb", "zh_cn"];
  for (const locale of cherryLocales) {
    const cherryJson = await fetchJson(
      `https://raw.communitydragon.org/14.14/plugins/rcp-be-lol-game-data/global/${locale}/v1/cherry-augments.json`,
    );

    await writeJson(
      path.join(outputRoot, "arena", options.arenaVersion, `cherry-augments-${locale}.json`),
      cherryJson,
    );
  }

  await writeJson(path.join(outputRoot, "manifest.json"), manifest);

  console.log(
    `Source sync complete. DDragon ${ddragonVersion}, Arena ${options.arenaVersion}, Champions ${championIds.length}, Raw augments ${arenaRawAugmentCount}`,
  );
}

syncData().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
