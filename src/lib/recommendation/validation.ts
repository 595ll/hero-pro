import type {
  AugmentProfile,
  ChampionProfile,
  EvidenceRecord,
  VerificationMeta,
} from "./types";

function hasEvidenceSource(evidence: EvidenceRecord[], sourceType: string) {
  return evidence.some((item) => item.sourceType === sourceType);
}

function isVerified(meta: VerificationMeta) {
  return meta.status === "verified" && meta.evidence.length > 0;
}

function hasChampionProductionEvidence(meta: VerificationMeta) {
  return isVerified(meta) && hasEvidenceSource(meta.evidence, "riot-ddragon");
}

function hasAugmentProductionEvidence(meta: VerificationMeta) {
  return (
    isVerified(meta) &&
    hasEvidenceSource(meta.evidence, "official-client") &&
    hasEvidenceSource(meta.evidence, "riot-support") &&
    hasEvidenceSource(meta.evidence, "community-mirror")
  );
}

function championHasMechanicSupport(profile: ChampionProfile) {
  const abilityMechanics = profile.abilities.flatMap((ability) => ability.mechanics);

  if (
    profile.scalingTags.includes("heal_shield") &&
    !abilityMechanics.some((item) =>
      ["heal", "shield", "ally_protect", "buff"].includes(item),
    ) &&
    !profile.survivalStyles.some((item) => ["heal", "shield"].includes(item)) &&
    !profile.utilityTags.includes("peel")
  ) {
    return false;
  }

  if (
    (profile.scalingTags.includes("attack_speed") ||
      profile.scalingTags.includes("crit")) &&
    !profile.damagePatterns.includes("attack") &&
    !profile.triggerTraits.includes("enhanced_attack")
  ) {
    return false;
  }

  if (
    profile.survivalStyles.includes("frontline") &&
    !profile.scalingTags.includes("tank") &&
    !profile.damagePatterns.includes("attack") &&
    !profile.utilityTags.includes("engage")
  ) {
    return false;
  }

  return true;
}

function augmentHasMechanicSupport(profile: AugmentProfile) {
  const positiveText = profile.positiveSignals.join(" ");
  const trapText = profile.trapSignals.join(" ");

  if (
    profile.triggerTypes.includes("on_attack") &&
    !profile.preferredUsers.some((item) => item === "attacker" || item === "ranged") &&
    !/普攻|攻击|on-hit|攻速/i.test(positiveText)
  ) {
    return false;
  }

  if (
    (profile.rewardTypes.includes("utility") ||
      profile.rewardTypes.includes("survival")) &&
    profile.positiveSignals.length === 0
  ) {
    return false;
  }

  if (
    profile.riskTags.includes("high_condition") &&
    !/很难|条件|命中|触发|窗口|叠层|空转|构筑/i.test(trapText)
  ) {
    return false;
  }

  return true;
}

function hasEnoughEvidence(meta: VerificationMeta) {
  if (meta.status !== "verified") {
    return false;
  }

  if (meta.evidence.length === 0) {
    return false;
  }

  return true;
}

export function isChampionReadyForProduction(profile: ChampionProfile) {
  return (
    hasEnoughEvidence(profile.verification) &&
    hasChampionProductionEvidence(profile.verification) &&
    championHasMechanicSupport(profile)
  );
}

export function isAugmentReadyForProduction(profile: AugmentProfile) {
  return (
    hasEnoughEvidence(profile.verification) &&
    hasAugmentProductionEvidence(profile.verification) &&
    augmentHasMechanicSupport(profile)
  );
}

export function canScoreInProduction(
  champion: ChampionProfile,
  augment: AugmentProfile,
) {
  return (
    isChampionReadyForProduction(champion) &&
    isAugmentReadyForProduction(augment)
  );
}
