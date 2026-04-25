import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

const projectRoot = process.cwd();
const sourceCacheRoot = path.join(projectRoot, "source-cache");
const outputRoot = path.join(projectRoot, "tmp", "intake-batches");

function parseArgs(argv) {
  const options = {
    batchName: `batch-${new Date().toISOString().slice(0, 10)}`,
    champions: [],
    augments: [],
    allChampions: false,
    allAugments: false,
    allAugmentsRaw: false,
  };

  for (const arg of argv) {
    if (arg.startsWith("--batch-name=")) {
      options.batchName = arg.split("=")[1] || options.batchName;
    }

    if (arg.startsWith("--champions=")) {
      options.champions = (arg.split("=")[1] || "")
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    }

    if (arg.startsWith("--augments=")) {
      options.augments = (arg.split("=")[1] || "")
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    }

    if (arg === "--all-champions") {
      options.allChampions = true;
    }

    if (arg === "--all-augments") {
      options.allAugments = true;
    }

    if (arg === "--all-augments-raw") {
      options.allAugments = true;
      options.allAugmentsRaw = true;
    }
  }

  return options;
}

async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, "utf8"));
}

async function loadTsModule(relativePath) {
  const fullPath = path.join(projectRoot, relativePath);
  const source = await readFile(fullPath, "utf8");
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
    fileName: fullPath,
  }).outputText;

  const cjsModule = { exports: {} };
  const context = {
    module: cjsModule,
    exports: cjsModule.exports,
  };

  vm.runInNewContext(transpiled, context, { filename: fullPath });
  return cjsModule.exports;
}

async function loadAugmentProductionPolicy() {
  const allowlistModule = await loadTsModule("src/data/augments/allowlist.ts");
  const allowlistIds = new Set(allowlistModule.arenaProductionAllowlistIds ?? []);
  const blockedAugments = allowlistModule.blockedArenaAugments ?? [];

  return {
    allowlistIds,
    blockedAugments,
  };
}

function escapeText(value) {
  return value.replaceAll("\\", "\\\\").replaceAll("`", "\\`").replaceAll("${", "\\${");
}

function cleanMarkup(value) {
  return value
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/?[^>]+>/g, " ")
    .replace(/\{\{\s*([^}]+)\s*\}\}/g, (_, token) =>
      token
        .split("_")
        .slice(-2)
        .join(" ")
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase(),
    )
    .replace(/@[^@]+@/g, "数值")
    .replace(/\bDamage this round: 数值\b/gi, "")
    .replace(/\bDamage this game: 数值\b/gi, "")
    .replace(/\b这个回合的伤害：数值\b/gi, "")
    .replace(/\b这局游戏的伤害：数值\b/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

function toRangeType(attackRange) {
  return attackRange > 250 ? "ranged" : "melee";
}

function toAugmentRarity(rawRarity) {
  if (rawRarity === "kGold" || rawRarity === 1) {
    return "gold";
  }

  if (rawRarity === "kPrismatic" || rawRarity === 2) {
    return "prismatic";
  }

  return "silver";
}

function normalizeChampionNameFields(rawName, rawTitle) {
  if (rawTitle.length <= 6 && rawName.length > rawTitle.length) {
    return {
      name: rawTitle,
      title: rawName,
    };
  }

  return {
    name: rawName,
    title: rawTitle,
  };
}

function pickReadableArenaText(primaryText, fallbackText) {
  const primary = cleanMarkup(primaryText || "");
  const fallback = cleanMarkup(fallbackText || "");

  if (
    primary.length === 0 ||
    /(^[a-z0-9]+ summary\b)|\bcherry_/i.test(primary)
  ) {
    return fallback;
  }

  return primary;
}

function buildChampionDraft(profile, ddragonVersion, reviewedAt) {
  const abilities = [
    {
      slot: "passive",
      name: profile.zh.passive.name,
      summary: cleanMarkup(profile.zh.passive.description),
    },
    ...profile.zh.spells.map((spell, index) => ({
      slot: ["q", "w", "e", "r"][index],
      name: spell.name,
      summary: cleanMarkup(spell.description),
    })),
  ];

  const abilityLines = abilities
    .map(
      (ability) => `      {
        slot: "${ability.slot}",
        name: "${escapeText(ability.name)}",
        summary: "${escapeText(ability.summary)}",
        mechanics: [],
      },`,
    )
    .join("\n");

  return `  {
    id: "${profile.id}",
    key: "${profile.key}",
    name: "${escapeText(profile.name)}",
    title: "${escapeText(profile.title)}",
    rangeType: "${toRangeType(profile.attackRange)}",
    damagePatterns: [],
    combatTempos: [],
    scalingTags: [],
    triggerTraits: [],
    survivalStyles: [],
    utilityTags: [],
    coreMechanics: [],
    antiPatterns: [],
    abilities: [
${abilityLines}
    ],
    verification: {
      status: "provisional",
      evidence: [
        {
          sourceType: "riot-ddragon",
          sourceName: "Data Dragon zh_CN ${profile.id}",
          sourceUrl:
            "https://ddragon.leagueoflegends.com/cdn/${ddragonVersion}/data/zh_CN/champion/${profile.id}.json",
          version: "${ddragonVersion}",
          locale: "zh_CN",
          retrievedAt: "${reviewedAt}",
          confidence: "high",
          note: "自动填充的事实层证据，待人工补画像与放行判断",
        },
        {
          sourceType: "riot-ddragon",
          sourceName: "Data Dragon en_US ${profile.id}",
          sourceUrl:
            "https://ddragon.leagueoflegends.com/cdn/${ddragonVersion}/data/en_US/champion/${profile.id}.json",
          version: "${ddragonVersion}",
          locale: "en_US",
          retrievedAt: "${reviewedAt}",
          confidence: "high",
          note: "自动填充的事实层证据，待人工补画像与放行判断",
        },
      ],
      notes: ["事实层自动生成：需人工补完画像标签、核心机制、反模式与最终验证状态"],
    },
  },`;
}

function buildAugmentDraft(profile, arenaVersion, reviewedAt) {
  return `  {
    id: "${profile.id}",
    name: "${escapeText(profile.name)}",
    localizedName: "${escapeText(profile.localizedName)}",
    rarity: "${profile.rarity}",
    summary: "${escapeText(profile.localizedSummary)}",
    officialDescription: "${escapeText(profile.officialDescription)}",
    rewardTypes: [],
    triggerTypes: [],
    preferredUsers: [],
    playstyleFits: [],
    riskTags: [],
    positiveSignals: [],
    trapSignals: [],
    verification: {
      status: "provisional",
      evidence: [
        {
          sourceType: "official-client",
          sourceName: "CommunityDragon cdragon arena export",
          sourceUrl:
            "https://raw.communitydragon.org/${arenaVersion}/cdragon/arena/en_us.json",
          version: "${arenaVersion}",
          locale: "en_us",
          retrievedAt: "${reviewedAt}",
          confidence: "high",
          note: "自动填充的事实层证据，待人工补画像与放行判断",
        },
        {
          sourceType: "community-mirror",
          sourceName: "CommunityDragon cherry-augments zh_cn",
          sourceUrl:
            "https://raw.communitydragon.org/14.14/plugins/rcp-be-lol-game-data/global/zh_cn/v1/cherry-augments.json",
          version: "14.14",
          locale: "zh_cn",
          retrievedAt: "${reviewedAt}",
          confidence: "medium",
          note: "自动填充的中文名与稀有度辅助证据，待人工补画像与放行判断",
        },
        {
          sourceType: "riot-support",
          sourceName: "Arena Game Mode",
          sourceUrl:
            "https://support-leagueoflegends.riotgames.com/hc/en-us/articles/17211075407635-League-of-Legends-Arena-Game-Mode",
          locale: "en_us",
          retrievedAt: "${reviewedAt}",
          confidence: "high",
          note: "自动填充的模式级证据，待人工补画像与放行判断",
        },
      ],
      notes: ["事实层自动生成：需人工补完收益类型、触发方式、风险边界与最终验证状态"],
    },
  },`;
}

function buildReviewManifest(options, versions, champions, augments) {
  const championLines = champions.map((item) => `- ${item.name} (\`${item.id}\`)`).join("\n");
  const augmentLines = augments
    .map((item) => `- ${item.localizedName} / ${item.name} (\`${item.id}\`)`)
    .join("\n");

  return `# ${options.batchName} 录入审查包

## 批次信息

- 生成时间：${versions.reviewedAt}
- Data Dragon 版本：${versions.ddragonVersion}
- Arena 版本：${versions.arenaVersion}

## 英雄候选

${championLines || "- 无"}

## 海克斯候选

${augmentLines || "- 无"}

## 产物

- \`champion-facts.json\`
- \`augment-facts.json\`
- \`champion-drafts.ts\`
- \`augment-drafts.ts\`

## 使用方式

1. 先核对 \`*-facts.json\` 中的事实字段是否与官方缓存一致
2. 再在 \`*-drafts.ts\` 上补画像标签、核心机制、反模式与风险边界
3. 初始状态保持 \`provisional\`，未审完成前不要接入生产索引
4. 只有通过 \`audit:data\`、\`audit:recommendations\` 和人工抽样复核后，才允许改为 \`verified\`
5. \`--all-augments\` 只代表生产候选全量；若需要研究原始客户端导出池，必须显式使用 \`--all-augments-raw\`

## 审查清单

- 英雄：补齐 \`damagePatterns / combatTempos / scalingTags / triggerTraits / survivalStyles / utilityTags\`
- 海克斯：补齐 \`rewardTypes / triggerTypes / preferredUsers / playstyleFits / riskTags\`
- 新 archetype：至少补 1 组推荐回归样例
- 严禁把自动生成草稿直接并入 \`src/data/*/index.ts\`
`;
}

async function loadChampionFact(championId, ddragonVersion) {
  const zhPath = path.join(
    sourceCacheRoot,
    "ddragon",
    ddragonVersion,
    "zh_CN",
    "champions",
    `${championId}.json`,
  );
  const enPath = path.join(
    sourceCacheRoot,
    "ddragon",
    ddragonVersion,
    "en_US",
    "champions",
    `${championId}.json`,
  );

  const zhData = await readJson(zhPath);
  const enData = await readJson(enPath);
  const zh = zhData.data[championId];
  const en = enData.data[championId];

  if (!zh || !en) {
    throw new Error(`Champion cache missing or malformed for ${championId}`);
  }

  const normalizedFields = normalizeChampionNameFields(zh.name, zh.title);

  return {
    id: championId,
    key: zh.key,
    name: normalizedFields.name,
    title: normalizedFields.title,
    attackRange: Number(zh.stats?.attackrange ?? 125),
    tags: zh.tags ?? [],
    zh: {
      passive: zh.passive,
      spells: zh.spells,
    },
    en: {
      passive: en.passive,
      spells: en.spells,
    },
  };
}

async function loadAugmentDatasets(arenaVersion) {
  const [arenaEn, arenaZh, cherryZh] = await Promise.all([
    readJson(path.join(sourceCacheRoot, "arena", arenaVersion, "en_us.json")),
    readJson(path.join(sourceCacheRoot, "arena", arenaVersion, "zh_cn.json")),
    readJson(
      path.join(sourceCacheRoot, "arena", arenaVersion, "cherry-augments-zh_cn.json"),
    ),
  ]);

  return { arenaEn, arenaZh, cherryZh };
}

function resolveChampionIds(options, manifest) {
  if (options.allChampions) {
    if (!manifest.allChampions) {
      throw new Error(
        "Champion cache is not full yet. Please run `npm run sync:sources -- --all-champions` first.",
      );
    }

    return manifest.champions;
  }

  return options.champions;
}

function resolveAugmentIdentifiers(options, datasets, allowlistIds) {
  if (options.allAugmentsRaw) {
    return datasets.arenaEn.augments
      .map((item) => String(item.id))
      .sort((left, right) => Number(left) - Number(right));
  }

  if (options.allAugments) {
    return [...allowlistIds].sort((left, right) => Number(left) - Number(right));
  }

  return options.augments;
}

function findAugmentFact(identifier, datasets, policy, options) {
  const normalized = identifier.toLowerCase();
  const enAugment = datasets.arenaEn.augments.find((item) => {
    return (
      String(item.id) === identifier ||
      item.name.toLowerCase() === normalized ||
      item.apiName.toLowerCase() === normalized
    );
  });

  if (!enAugment) {
    throw new Error(`Augment not found in arena cache: ${identifier}`);
  }

  const augmentId = String(enAugment.id);
  if (!options.allAugmentsRaw && !policy.allowlistIds.has(augmentId)) {
    const blocked = policy.blockedAugments.find((item) => item.id === augmentId);
    const reason = blocked?.reason ?? "该条目不在生产海克斯 allowlist 中";
    throw new Error(
      `Augment ${augmentId} (${enAugment.name}) is not allowed in production intake: ${reason}`,
    );
  }

  const zhAugment = datasets.arenaZh.augments.find((item) => item.id === enAugment.id);
  const cherryAugment = datasets.cherryZh.find((item) => item.id === enAugment.id);

  return {
    id: augmentId,
    name: enAugment.name,
    localizedName: cherryAugment?.nameTRA || zhAugment?.name || enAugment.name,
    rarity: toAugmentRarity(cherryAugment?.rarity ?? enAugment.rarity),
    officialDescription: pickReadableArenaText(
      enAugment.tooltip,
      enAugment.desc || "",
    ),
    localizedSummary: pickReadableArenaText(
      zhAugment?.tooltip,
      zhAugment?.desc || "",
    ),
    apiName: enAugment.apiName,
    iconPath: cherryAugment?.augmentSmallIconPath || enAugment.iconSmall || "",
  };
}

async function main() {
  const options = parseArgs(process.argv.slice(2));

  if (
    options.champions.length === 0 &&
    options.augments.length === 0 &&
    !options.allChampions &&
    !options.allAugments
  ) {
    throw new Error(
      "At least one of --champions / --augments / --all-champions / --all-augments is required.",
    );
  }

  const manifest = await readJson(path.join(sourceCacheRoot, "manifest.json"));
  const augmentPolicy = await loadAugmentProductionPolicy();
  const reviewedAt = new Date().toISOString().slice(0, 10);
  const versions = {
    reviewedAt,
    ddragonVersion: manifest.ddragonVersion,
    arenaVersion: manifest.arenaVersion,
  };

  const augmentDatasets = await loadAugmentDatasets(versions.arenaVersion);
  const championIds = resolveChampionIds(options, manifest);
  const augmentIdentifiers = resolveAugmentIdentifiers(
    options,
    augmentDatasets,
    augmentPolicy.allowlistIds,
  );

  const champions = await Promise.all(
    championIds.map((item) => loadChampionFact(item, versions.ddragonVersion)),
  );

  const augments = augmentIdentifiers.map((item) =>
    findAugmentFact(item, augmentDatasets, augmentPolicy, options),
  );

  const batchDir = path.join(outputRoot, options.batchName);
  await mkdir(batchDir, { recursive: true });

  await writeFile(
    path.join(batchDir, "champion-facts.json"),
    `${JSON.stringify(champions, null, 2)}\n`,
    "utf8",
  );
  await writeFile(
    path.join(batchDir, "augment-facts.json"),
    `${JSON.stringify(augments, null, 2)}\n`,
    "utf8",
  );

  const championDraftModule = `import type { ChampionProfile } from "@/lib/recommendation/types";

export const ${options.batchName.replace(/[^a-zA-Z0-9]/g, "")}ChampionDrafts: ChampionProfile[] = [
${champions.map((item) => buildChampionDraft(item, versions.ddragonVersion, reviewedAt)).join("\n")}
];
`;

  const augmentDraftModule = `import type { AugmentProfile } from "@/lib/recommendation/types";

export const ${options.batchName.replace(/[^a-zA-Z0-9]/g, "")}AugmentDrafts: AugmentProfile[] = [
${augments.map((item) => buildAugmentDraft(item, versions.arenaVersion, reviewedAt)).join("\n")}
];
`;

  await writeFile(path.join(batchDir, "champion-drafts.ts"), championDraftModule, "utf8");
  await writeFile(path.join(batchDir, "augment-drafts.ts"), augmentDraftModule, "utf8");
  await writeFile(
    path.join(batchDir, "README.md"),
    buildReviewManifest(options, versions, champions, augments),
    "utf8",
  );

  console.log(`Intake batch ready: ${batchDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
