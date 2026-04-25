import { readFileSync } from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";
import ts from "typescript";

const projectRoot = process.cwd();
const requireFromProject = createRequire(path.join(projectRoot, "package.json"));
const moduleCache = new Map();

function resolveModulePath(specifier, fromFile) {
  if (!specifier.startsWith(".") && !specifier.startsWith("@/")) {
    return null;
  }

  const basePath = specifier.startsWith("@/")
    ? path.join(projectRoot, "src", specifier.slice(2))
    : path.resolve(path.dirname(fromFile), specifier);

  const candidates = [
    basePath,
    `${basePath}.ts`,
    `${basePath}.tsx`,
    `${basePath}.js`,
    path.join(basePath, "index.ts"),
    path.join(basePath, "index.tsx"),
    path.join(basePath, "index.js"),
  ];

  for (const candidate of candidates) {
    try {
      return requireFromProject.resolve(candidate);
    } catch {}
  }

  throw new Error(`Unable to resolve module "${specifier}" from ${fromFile}`);
}

function loadModule(filePath) {
  const resolvedPath = path.resolve(filePath);

  if (moduleCache.has(resolvedPath)) {
    return moduleCache.get(resolvedPath);
  }

  const source = readFileSync(resolvedPath, "utf8");
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
      moduleResolution: ts.ModuleResolutionKind.NodeJs,
    },
    fileName: resolvedPath,
  }).outputText;

  const cjsModule = { exports: {} };
  moduleCache.set(resolvedPath, cjsModule.exports);

  const context = {
    module: cjsModule,
    exports: cjsModule.exports,
    __filename: resolvedPath,
    __dirname: path.dirname(resolvedPath),
    console,
    process,
    Buffer,
    setTimeout,
    clearTimeout,
  };

  context.require = (specifier) => {
    const nestedPath = resolveModulePath(specifier, resolvedPath);
    if (!nestedPath) {
      return requireFromProject(specifier);
    }
    return loadModule(nestedPath);
  };

  vm.runInNewContext(transpiled, context, { filename: resolvedPath });
  moduleCache.set(resolvedPath, cjsModule.exports);
  return cjsModule.exports;
}

const verdictRank = {
  avoid: 0,
  situational: 1,
  good_pick: 2,
  strong_pick: 3,
};

const auditCases = [
  {
    label: "Lulu support baseline",
    championId: "Lulu",
    augmentIds: ["141", "76", "87"],
    expectedTopAugmentId: "141",
    minimumVerdict: "strong_pick",
  },
  {
    label: "Vayne on-hit baseline",
    championId: "Vayne",
    augmentIds: ["87", "58", "141"],
    expectedTopAugmentId: "87",
    minimumVerdict: "strong_pick",
  },
  {
    label: "Swain survivability baseline",
    championId: "Swain",
    augmentIds: ["180", "48", "138"],
    expectedTopAugmentId: "180",
    minimumVerdict: "strong_pick",
  },
  {
    label: "Leona anti-sniper baseline",
    championId: "Leona",
    augmentIds: ["136", "138", "113"],
    expectedTopAugmentId: "136",
    minimumVerdict: "strong_pick",
  },
  {
    label: "Lux sniper baseline",
    championId: "Lux",
    augmentIds: ["113", "141", "138"],
    expectedTopAugmentId: "113",
    minimumVerdict: "strong_pick",
  },
  {
    label: "Soraka support amplification baseline",
    championId: "Soraka",
    augmentIds: ["141", "76", "180"],
    expectedTopAugmentIds: ["141", "76"],
    disallowedTopAugmentIds: ["180"],
    minimumVerdict: "strong_pick",
  },
  {
    label: "Brand combo baseline",
    championId: "Brand",
    augmentIds: ["48", "103", "97"],
    expectedTopAugmentId: "48",
    minimumVerdict: "strong_pick",
  },
  {
    label: "Master Yi duality baseline",
    championId: "MasterYi",
    augmentIds: ["54", "58", "141"],
    expectedTopAugmentId: "54",
    minimumVerdict: "strong_pick",
  },
  {
    label: "Darius spin baseline",
    championId: "Darius",
    augmentIds: ["214", "141", "113"],
    expectedTopAugmentId: "214",
    minimumVerdict: "good_pick",
  },
  {
    label: "Ezreal q-core baseline",
    championId: "Ezreal",
    augmentIds: ["103", "141", "64"],
    expectedTopAugmentId: "103",
    minimumVerdict: "good_pick",
  },
  {
    label: "Janna support baseline",
    championId: "Janna",
    augmentIds: ["141", "76", "87"],
    expectedTopAugmentIds: ["141", "76"],
    disallowedTopAugmentIds: ["87"],
    minimumVerdict: "good_pick",
  },
  {
    label: "Milio enchanter baseline",
    championId: "Milio",
    augmentIds: ["141", "76", "87"],
    expectedTopAugmentIds: ["141", "76"],
    disallowedTopAugmentIds: ["87"],
    minimumVerdict: "good_pick",
  },
  {
    label: "Nami utility baseline",
    championId: "Nami",
    augmentIds: ["141", "76", "113"],
    expectedTopAugmentIds: ["141", "76"],
    disallowedTopAugmentIds: ["113"],
    minimumVerdict: "good_pick",
  },
  {
    label: "Karma duality vs spin mismatch",
    championId: "Karma",
    augmentIds: ["54", "214"],
    expectedTopAugmentId: "54",
    disallowedTopAugmentIds: ["214"],
    minimumVerdict: "avoid",
  },
  {
    label: "Seraphine duality vs spin mismatch",
    championId: "Seraphine",
    augmentIds: ["54", "214"],
    expectedTopAugmentId: "54",
    disallowedTopAugmentIds: ["214"],
    minimumVerdict: "avoid",
  },
  {
    label: "Renata duality vs spin mismatch",
    championId: "Renata",
    augmentIds: ["54", "214"],
    expectedTopAugmentId: "54",
    disallowedTopAugmentIds: ["214"],
    minimumVerdict: "avoid",
  },
  {
    label: "Karma support baseline",
    championId: "Karma",
    augmentIds: ["141", "76", "180"],
    expectedTopAugmentIds: ["141", "76"],
    disallowedTopAugmentIds: ["180"],
    minimumVerdict: "good_pick",
  },
  {
    label: "Renata bread-and-butter mismatch",
    championId: "Renata",
    augmentIds: ["103", "141", "76"],
    expectedTopAugmentIds: ["141", "76"],
    disallowedTopAugmentIds: ["103"],
    minimumVerdict: "good_pick",
  },
  {
    label: "Karma conversion mismatch",
    championId: "Karma",
    augmentIds: ["205", "206", "141"],
    expectedTopAugmentId: "141",
    minimumVerdict: "good_pick",
  },
  {
    label: "Seraphine support baseline",
    championId: "Seraphine",
    augmentIds: ["141", "76", "180"],
    expectedTopAugmentIds: ["141", "76"],
    disallowedTopAugmentIds: ["180"],
    minimumVerdict: "good_pick",
  },
  {
    label: "Renata support baseline",
    championId: "Renata",
    augmentIds: ["141", "76", "180"],
    expectedTopAugmentIds: ["141", "76"],
    disallowedTopAugmentIds: ["180"],
    minimumVerdict: "good_pick",
  },
  {
    label: "Alistar frontline cc baseline",
    championId: "Alistar",
    augmentIds: ["136", "64", "138"],
    expectedTopAugmentId: "136",
    minimumVerdict: "strong_pick",
  },
  {
    label: "Nautilus frontline cc baseline",
    championId: "Nautilus",
    augmentIds: ["136", "64", "113"],
    expectedTopAugmentId: "136",
    minimumVerdict: "strong_pick",
  },
  {
    label: "Rell frontline cc baseline",
    championId: "Rell",
    augmentIds: ["136", "64", "138"],
    expectedTopAugmentId: "136",
    minimumVerdict: "strong_pick",
  },
  {
    label: "Amumu frontline cc baseline",
    championId: "Amumu",
    augmentIds: ["136", "64", "138"],
    expectedTopAugmentId: "136",
    minimumVerdict: "strong_pick",
  },
  {
    label: "Maokai frontline cc baseline",
    championId: "Maokai",
    augmentIds: ["136", "64", "138"],
    expectedTopAugmentId: "136",
    minimumVerdict: "strong_pick",
  },
  {
    label: "Sejuani frontline cc baseline",
    championId: "Sejuani",
    augmentIds: ["136", "64", "138"],
    expectedTopAugmentId: "136",
    minimumVerdict: "strong_pick",
  },
  {
    label: "Xerath artillery baseline",
    championId: "Xerath",
    augmentIds: ["113", "48", "97"],
    expectedTopAugmentId: "113",
    minimumVerdict: "strong_pick",
  },
  {
    label: "Velkoz artillery baseline",
    championId: "Velkoz",
    augmentIds: ["113", "48", "97"],
    expectedTopAugmentId: "113",
    minimumVerdict: "strong_pick",
  },
  {
    label: "Ziggs artillery baseline",
    championId: "Ziggs",
    augmentIds: ["113", "103", "48"],
    expectedTopAugmentIds: ["113", "103"],
    minimumVerdict: "good_pick",
  },
];

function formatTopResults(results) {
  return results
    .slice(0, 3)
    .map((item) => `${item.augmentId}:${item.verdict}:${item.totalScore}`)
    .join(" | ");
}

function main() {
  const catalogModule = loadModule(
    path.join(projectRoot, "src/lib/recommendation/catalog.ts"),
  );

  const { recommendForAugmentCandidates } = catalogModule;
  const failures = [];

  for (const auditCase of auditCases) {
    const results = recommendForAugmentCandidates(
      auditCase.championId,
      auditCase.augmentIds,
    );

    if (results.length === 0) {
      failures.push(`${auditCase.label}: 未返回推荐结果`);
      continue;
    }

    const top = results[0];
    const allowedTopAugmentIds =
      auditCase.expectedTopAugmentIds ?? [auditCase.expectedTopAugmentId];
    const disallowedTopAugmentIds = auditCase.disallowedTopAugmentIds ?? [];

    if (!allowedTopAugmentIds.includes(top.augmentId)) {
      failures.push(
        `${auditCase.label}: 第一名应为 ${allowedTopAugmentIds.join(" 或 ")}，实际为 ${top.augmentId}；实际排序 ${formatTopResults(results)}`,
      );
    }

    if (verdictRank[top.verdict] < verdictRank[auditCase.minimumVerdict]) {
      failures.push(
        `${auditCase.label}: 第一名结论至少应为 ${auditCase.minimumVerdict}，实际为 ${top.verdict}；实际排序 ${formatTopResults(results)}`,
      );
    }

    if (disallowedTopAugmentIds.includes(top.augmentId)) {
      failures.push(
        `${auditCase.label}: ${top.augmentId} 不应排到第一；实际排序 ${formatTopResults(results)}`,
      );
    }
  }

  if (failures.length > 0) {
    console.error("Recommendation audit failed:");
    for (const failure of failures) {
      console.error(`- ${failure}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log(`Recommendation audit passed: ${auditCases.length} scenarios`);
}

try {
  main();
} catch (error) {
  console.error(error);
  process.exitCode = 1;
}
