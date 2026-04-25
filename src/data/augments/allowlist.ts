export interface ArenaProductionAllowlistEntry {
  id: string;
  name: string;
  sourceOfTruth: "production-batch";
  allowedInProduction: true;
}

export interface BlockedArenaAugmentEntry {
  id: string;
  name: string;
  reason: string;
}

export const arenaProductionAllowlist: ArenaProductionAllowlistEntry[] = [
  { id: "205", name: "ADAPt", sourceOfTruth: "production-batch", allowedInProduction: true },
  { id: "113", name: "Skilled Sniper", sourceOfTruth: "production-batch", allowedInProduction: true },
  { id: "51", name: "Light 'em Up!", sourceOfTruth: "production-batch", allowedInProduction: true },
  { id: "64", name: "Perseverance", sourceOfTruth: "production-batch", allowedInProduction: true },
  { id: "141", name: "All For You", sourceOfTruth: "production-batch", allowedInProduction: true },
  { id: "180", name: "Big Brain", sourceOfTruth: "production-batch", allowedInProduction: true },
  { id: "87", name: "Typhoon", sourceOfTruth: "production-batch", allowedInProduction: true },
  { id: "48", name: "Jeweled Gauntlet", sourceOfTruth: "production-batch", allowedInProduction: true },
  { id: "138", name: "Goredrink", sourceOfTruth: "production-batch", allowedInProduction: true },
  { id: "103", name: "Bread And Butter", sourceOfTruth: "production-batch", allowedInProduction: true },
  { id: "84", name: "Thread the Needle", sourceOfTruth: "production-batch", allowedInProduction: true },
  { id: "46", name: "Infernal Soul", sourceOfTruth: "production-batch", allowedInProduction: true },
  { id: "60", name: "Ocean Soul", sourceOfTruth: "production-batch", allowedInProduction: true },
  { id: "206", name: "escAPADe", sourceOfTruth: "production-batch", allowedInProduction: true },
  { id: "97", name: "Witchful Thinking", sourceOfTruth: "production-batch", allowedInProduction: true },
  { id: "76", name: "Sonic Boom", sourceOfTruth: "production-batch", allowedInProduction: true },
  { id: "136", name: "Slap Around", sourceOfTruth: "production-batch", allowedInProduction: true },
  { id: "58", name: "Mystic Punch", sourceOfTruth: "production-batch", allowedInProduction: true },
  { id: "54", name: "Master of Duality", sourceOfTruth: "production-batch", allowedInProduction: true },
  { id: "214", name: "Spin To Win", sourceOfTruth: "production-batch", allowedInProduction: true },
  { id: "18", name: "Courage of the Colossus", sourceOfTruth: "production-batch", allowedInProduction: true },
  { id: "19", name: "Dashing", sourceOfTruth: "production-batch", allowedInProduction: true },
  { id: "32", name: "Executioner", sourceOfTruth: "production-batch", allowedInProduction: true },
];

export const blockedArenaAugments: BlockedArenaAugmentEntry[] = [
  {
    id: "1",
    name: "Accelerating Sorcery",
    reason: "用户确认不属于当前项目应收录的海克斯大乱斗候选符文，禁止进入生产池。",
  },
  {
    id: "5",
    name: "Banner of Command",
    reason: "用户确认不属于当前项目应收录的海克斯大乱斗候选符文，禁止进入生产池。",
  },
  {
    id: "14",
    name: "Chauffeur",
    reason: "用户确认不属于当前项目应收录的海克斯大乱斗候选符文，禁止进入生产池。",
  },
  {
    id: "16",
    name: "Combo Master",
    reason: "用户确认不属于当前项目应收录的海克斯大乱斗候选符文，禁止进入生产池。",
  },
];

export const arenaProductionAllowlistIds = arenaProductionAllowlist.map(
  (entry) => entry.id,
);
