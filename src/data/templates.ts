import type {
  AugmentProfile,
  ChampionProfile,
  VerificationMeta,
} from "@/lib/recommendation/types";

function createDraftVerification(): VerificationMeta {
  return {
    status: "provisional",
    evidence: [],
    notes: ["待补充权威来源与版本信息"],
  };
}

export function createChampionDraft(
  id: string,
  key: string,
  name: string,
): ChampionProfile {
  return {
    id,
    key,
    name,
    rangeType: "melee",
    damagePatterns: [],
    combatTempos: [],
    scalingTags: [],
    triggerTraits: [],
    survivalStyles: [],
    utilityTags: [],
    coreMechanics: [],
    antiPatterns: [],
    abilities: [
      { slot: "passive", name: "", summary: "", mechanics: [] },
      { slot: "q", name: "", summary: "", mechanics: [] },
      { slot: "w", name: "", summary: "", mechanics: [] },
      { slot: "e", name: "", summary: "", mechanics: [] },
      { slot: "r", name: "", summary: "", mechanics: [] },
    ],
    verification: createDraftVerification(),
  };
}

export function createAugmentDraft(
  id: string,
  name: string,
  localizedName: string,
): AugmentProfile {
  return {
    id,
    name,
    localizedName,
    rarity: "silver",
    summary: "",
    officialDescription: "",
    rewardTypes: [],
    triggerTypes: [],
    preferredUsers: [],
    playstyleFits: [],
    riskTags: [],
    positiveSignals: [],
    trapSignals: [],
    verification: createDraftVerification(),
  };
}
