import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

const projectRoot = process.cwd();

async function loadExportArray(relativePath, exportName) {
  const fullPath = path.join(projectRoot, relativePath);
  const source = await readFile(fullPath, "utf8");
  const sanitized = source
    .replace(/^import type .*?;\r?\n/gm, "")
    .replace(
      new RegExp(`export const ${exportName}[^=]*=`, "g"),
      `const ${exportName} =`,
    )
    .concat(`\nmodule.exports = { ${exportName} };\n`);

  const context = {
    module: { exports: {} },
    exports: {},
  };

  vm.runInNewContext(sanitized, context, { filename: fullPath });
  return context.module.exports[exportName];
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

async function loadAugmentProductionAllowlistIds() {
  const allowlistModule = await loadTsModule("src/data/augments/allowlist.ts");
  return new Set(allowlistModule.arenaProductionAllowlistIds ?? []);
}

async function discoverBatchFiles(relativeDirectory) {
  const directory = path.join(projectRoot, relativeDirectory);
  const entries = await readdir(directory, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith("-batch.ts"))
    .map((entry) => path.join(relativeDirectory, entry.name))
    .sort();
}

async function loadProfilesFromBatchDirectory(relativeDirectory) {
  const batchFiles = await discoverBatchFiles(relativeDirectory);
  const collections = [];

  for (const file of batchFiles) {
    const source = await readFile(path.join(projectRoot, file), "utf8");
    const exportMatch = source.match(/export const (\w+)[^=]*=/);

    if (!exportMatch) {
      throw new Error(`Unable to find exported profile array in ${file}`);
    }

    collections.push(await loadExportArray(file, exportMatch[1]));
  }

  return collections.flat();
}

function assert(condition, message, errors) {
  if (!condition) {
    errors.push(message);
  }
}

function hasEvidenceSource(profile, sourceType) {
  return profile.verification.evidence.some((item) => item.sourceType === sourceType);
}

function hasAbilityMechanic(profile, mechanics) {
  const mechanicSet = new Set(mechanics);
  return profile.abilities.some((ability) =>
    ability.mechanics.some((item) => mechanicSet.has(item)),
  );
}

function hasUnresolvedText(text) {
  return (
    !text ||
    text.trim().length === 0 ||
    /数值|@\w+@|summary\b|description\b/i.test(text)
  );
}

function auditChampion(profile, errors) {
  const prefix = `Champion ${profile.id}`;

  assert(profile.name, `${prefix}: 缺少中文名`, errors);
  assert(profile.title, `${prefix}: 缺少称号`, errors);
  assert(profile.coreMechanics.length >= 3, `${prefix}: 核心机制过少`, errors);
  assert(profile.antiPatterns.length >= 1, `${prefix}: 缺少反模式提示`, errors);
  assert(profile.abilities.length === 5, `${prefix}: 技能条目必须为 5 个`, errors);
  assert(profile.verification.evidence.length >= 2, `${prefix}: 证据链不足`, errors);

  for (const ability of profile.abilities) {
    assert(ability.name, `${prefix}: ${ability.slot} 缺少技能名`, errors);
    assert(ability.summary, `${prefix}: ${ability.slot} 缺少技能摘要`, errors);
    assert(ability.mechanics.length >= 1, `${prefix}: ${ability.slot} 缺少机制标签`, errors);
  }

  if (profile.verification.status === "verified") {
    assert(
      hasEvidenceSource(profile, "riot-ddragon"),
      `${prefix}: verified 但缺少 riot-ddragon 证据`,
      errors,
    );
  }

  if (profile.scalingTags.includes("heal_shield")) {
    assert(
      hasAbilityMechanic(profile, ["heal", "shield", "ally_protect", "buff"]) ||
        profile.survivalStyles.includes("heal") ||
        profile.survivalStyles.includes("shield") ||
        profile.utilityTags.includes("peel"),
      `${prefix}: heal_shield 缺少技能或生存/功能支撑`,
      errors,
    );
  }

  if (
    profile.scalingTags.includes("attack_speed") ||
    profile.scalingTags.includes("crit")
  ) {
    assert(
      profile.damagePatterns.includes("attack") ||
        profile.triggerTraits.includes("enhanced_attack"),
      `${prefix}: attack_speed/crit 缺少普攻画像支撑`,
      errors,
    );
  }

  if (profile.survivalStyles.includes("frontline")) {
    assert(
      profile.scalingTags.includes("tank") ||
        profile.utilityTags.includes("engage") ||
        profile.coreMechanics.some((item) => /前排|站场|近身/.test(item)),
      `${prefix}: frontline 缺少前排站场支撑`,
      errors,
    );
  }
}

function auditAugment(profile, allowlistIds, errors) {
  const prefix = `Augment ${profile.id}`;

  assert(profile.name, `${prefix}: 缺少英文名`, errors);
  assert(profile.localizedName, `${prefix}: 缺少中文名`, errors);
  assert(profile.summary, `${prefix}: 缺少摘要`, errors);
  assert(profile.officialDescription, `${prefix}: 缺少正式描述`, errors);
  assert(profile.rewardTypes.length >= 1, `${prefix}: 缺少收益类型`, errors);
  assert(profile.triggerTypes.length >= 1, `${prefix}: 缺少触发类型`, errors);
  assert(profile.positiveSignals.length >= 1, `${prefix}: 缺少正向信号`, errors);
  assert(profile.trapSignals.length >= 1, `${prefix}: 缺少避坑信号`, errors);
  assert(profile.verification.evidence.length >= 3, `${prefix}: 证据链不足`, errors);

  if (profile.verification.status === "verified") {
    assert(
      allowlistIds.has(profile.id),
      `${prefix}: verified 但不在 Arena production allowlist 中`,
      errors,
    );
    assert(
      hasEvidenceSource(profile, "official-client"),
      `${prefix}: verified 但缺少 official-client 证据`,
      errors,
    );
    assert(
      hasEvidenceSource(profile, "riot-support"),
      `${prefix}: verified 但缺少 riot-support 证据`,
      errors,
    );
    assert(
      hasEvidenceSource(profile, "community-mirror"),
      `${prefix}: verified 但缺少 community-mirror 证据`,
      errors,
    );
    assert(
      !hasUnresolvedText(profile.summary),
      `${prefix}: verified 但摘要仍含未还原占位或模板文本`,
      errors,
    );
    assert(
      !hasUnresolvedText(profile.officialDescription),
      `${prefix}: verified 但正式描述仍含未还原占位或模板文本`,
      errors,
    );
  }

  if (profile.triggerTypes.includes("on_attack")) {
    const positiveText = profile.positiveSignals.join(" ");
    assert(
      profile.preferredUsers.includes("attacker") ||
        profile.preferredUsers.includes("ranged") ||
        /普攻|攻击|on-hit|攻速/i.test(positiveText),
      `${prefix}: on_attack 缺少攻击触发导向支撑`,
      errors,
    );
  }

  if (
    profile.rewardTypes.includes("utility") ||
    profile.rewardTypes.includes("survival")
  ) {
    assert(
      profile.positiveSignals.length >= 1,
      `${prefix}: utility/survival 缺少收益兑现说明`,
      errors,
    );
  }

  if (profile.riskTags.includes("high_condition")) {
    const trapText = profile.trapSignals.join(" ");
    assert(
      /很难|条件|命中|触发|窗口|叠层|空转|构筑/i.test(trapText),
      `${prefix}: high_condition 缺少高条件风险说明`,
      errors,
    );
  }
}

async function main() {
  const championProfiles = await loadProfilesFromBatchDirectory(
    "src/data/champions",
  );
  const augmentProfiles = await loadProfilesFromBatchDirectory(
    "src/data/augments",
  );
  const augmentAllowlistIds = await loadAugmentProductionAllowlistIds();

  const errors = [];
  const championIds = new Set();
  const championKeys = new Set();
  const augmentIds = new Set();
  const augmentNames = new Set();

  for (const champion of championProfiles) {
    assert(!championIds.has(champion.id), `Champion ${champion.id}: id 重复`, errors);
    assert(!championKeys.has(champion.key), `Champion ${champion.id}: key 重复`, errors);
    championIds.add(champion.id);
    championKeys.add(champion.key);
    auditChampion(champion, errors);
  }

  for (const augment of augmentProfiles) {
    assert(!augmentIds.has(augment.id), `Augment ${augment.id}: id 重复`, errors);
    assert(!augmentNames.has(augment.name), `Augment ${augment.id}: name 重复`, errors);
    augmentIds.add(augment.id);
    augmentNames.add(augment.name);
    auditAugment(augment, augmentAllowlistIds, errors);
  }

  if (errors.length > 0) {
    console.error("Data audit failed:");
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log(
    `Data audit passed: ${championProfiles.length} champions, ${augmentProfiles.length} augments`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
