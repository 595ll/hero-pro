export type EvidenceSourceType =
  | "riot-ddragon"
  | "riot-support"
  | "official-client"
  | "community-mirror"
  | "community-site"
  | "manual-test";

export type ConfidenceLevel = "high" | "medium" | "low";
export type VerificationStatus = "verified" | "provisional" | "needs_review";

export type ChampionRangeType = "melee" | "ranged";
export type DamagePattern = "attack" | "skill" | "hybrid";
export type CombatTempo = "burst" | "dps" | "poke";
export type ScalingTag =
  | "ad"
  | "ap"
  | "attack_speed"
  | "crit"
  | "haste"
  | "tank"
  | "heal_shield";

export type TriggerTrait =
  | "multi_hit"
  | "high_cast_frequency"
  | "reset"
  | "cc_chain"
  | "all_in"
  | "enhanced_attack"
  | "summon"
  | "zone_control";

export type SurvivalStyle =
  | "shield"
  | "heal"
  | "dash"
  | "stealth"
  | "frontline"
  | "revive";

export type UtilityTag =
  | "engage"
  | "disengage"
  | "peel"
  | "lockdown"
  | "mobility"
  | "vision";

export type AugmentRarity = "silver" | "gold" | "prismatic";
export type RewardType = "damage" | "survival" | "utility" | "economy";
export type TriggerType =
  | "on_attack"
  | "on_skill"
  | "on_kill"
  | "on_low_hp"
  | "on_engage"
  | "passive"
  | "on_move"
  | "on_cc";

export type PreferredUserTag =
  | "melee"
  | "ranged"
  | "caster"
  | "attacker"
  | "tank"
  | "resetter";

export type PlaystyleFit =
  | "burst"
  | "dps"
  | "poke"
  | "frontline"
  | "snowball"
  | "utility";

export type RiskTag =
  | "high_condition"
  | "low_stability"
  | "snowball_only"
  | "team_comp_dependent"
  | "execution_heavy";

export interface EvidenceRecord {
  sourceType: EvidenceSourceType;
  sourceName: string;
  sourceUrl?: string;
  version?: string;
  locale?: string;
  retrievedAt: string;
  confidence: ConfidenceLevel;
  note?: string;
}

export interface VerificationMeta {
  status: VerificationStatus;
  reviewedAt?: string;
  reviewedBy?: string;
  evidence: EvidenceRecord[];
  notes?: string[];
}

export interface ChampionAbilityDescriptor {
  slot: "passive" | "q" | "w" | "e" | "r";
  name: string;
  summary: string;
  mechanics: string[];
}

export interface ChampionProfile {
  id: string;
  key: string;
  name: string;
  iconPath?: string;
  title?: string;
  rangeType: ChampionRangeType;
  damagePatterns: DamagePattern[];
  combatTempos: CombatTempo[];
  scalingTags: ScalingTag[];
  triggerTraits: TriggerTrait[];
  survivalStyles: SurvivalStyle[];
  utilityTags: UtilityTag[];
  coreMechanics: string[];
  antiPatterns: string[];
  abilities: ChampionAbilityDescriptor[];
  verification: VerificationMeta;
}

export interface AugmentRuleHints {
  requiredAbilityMechanicsAny?: string[];
  requiredRangeType?: ChampionRangeType;
  requiresAttackPattern?: boolean;
  requiresAttackSkillLoop?: boolean;
  requiresQCore?: boolean;
  requiresAdSource?: boolean;
  requiresApSource?: boolean;
  requiresAdPayoff?: boolean;
  requiresApPayoff?: boolean;
}

export interface AugmentProfile {
  id: string;
  name: string;
  localizedName?: string;
  iconPath?: string;
  rarity: AugmentRarity;
  summary: string;
  officialDescription: string;
  rewardTypes: RewardType[];
  triggerTypes: TriggerType[];
  preferredUsers: PreferredUserTag[];
  playstyleFits: PlaystyleFit[];
  riskTags: RiskTag[];
  positiveSignals: string[];
  trapSignals: string[];
  ruleHints?: AugmentRuleHints;
  verification: VerificationMeta;
}

export type RuleDimension =
  | "baseline_match"
  | "trigger_reliability"
  | "reward_conversion"
  | "risk_penalty"
  | "playstyle_bonus";

export interface RuleReason {
  label: string;
  detail: string;
  impact: number;
}

export interface RecommendationBreakdown {
  dimension: RuleDimension;
  score: number;
  reasons: RuleReason[];
}

export interface RecommendationResult {
  championId: string;
  augmentId: string;
  totalScore: number;
  verdict: "strong_pick" | "good_pick" | "situational" | "avoid";
  breakdown: RecommendationBreakdown[];
  summary: string;
  warnings: string[];
}
