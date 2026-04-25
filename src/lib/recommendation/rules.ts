import type {
  AugmentProfile,
  ChampionProfile,
  RecommendationBreakdown,
  RecommendationResult,
  RuleReason,
} from "./types";
import { canScoreInProduction } from "./validation";

function intersectCount(left: string[], right: string[]) {
  const rightSet = new Set(right);
  return left.filter((item) => rightSet.has(item)).length;
}

function hasAbilityMechanic(champion: ChampionProfile, mechanics: string[]) {
  const mechanicSet = new Set(mechanics);
  return champion.abilities.some((ability) =>
    ability.mechanics.some((item) => mechanicSet.has(item)),
  );
}

function hasAbilityMechanicOnSlot(
  champion: ChampionProfile,
  slot: "q" | "w" | "e" | "r" | "passive",
  mechanics: string[],
) {
  const mechanicSet = new Set(mechanics);
  return champion.abilities.some(
    (ability) =>
      ability.slot === slot &&
      ability.mechanics.some((item) => mechanicSet.has(item)),
  );
}

function hasAttackPattern(champion: ChampionProfile) {
  return (
    champion.damagePatterns.includes("attack") ||
    champion.damagePatterns.includes("hybrid") ||
    champion.triggerTraits.includes("enhanced_attack") ||
    champion.scalingTags.includes("attack_speed") ||
    champion.scalingTags.includes("crit")
  );
}

function hasSkillPattern(champion: ChampionProfile) {
  return (
    champion.damagePatterns.includes("skill") ||
    champion.damagePatterns.includes("hybrid") ||
    champion.triggerTraits.includes("high_cast_frequency") ||
    champion.scalingTags.includes("haste")
  );
}

function hasApSource(champion: ChampionProfile) {
  return (
    champion.scalingTags.includes("ap") ||
    champion.scalingTags.includes("haste") ||
    champion.damagePatterns.includes("skill") ||
    champion.damagePatterns.includes("hybrid")
  );
}

function hasApPayoff(champion: ChampionProfile) {
  return (
    champion.scalingTags.includes("ap") ||
    champion.scalingTags.includes("heal_shield") ||
    champion.damagePatterns.includes("skill") ||
    champion.damagePatterns.includes("hybrid")
  );
}

function hasAdSource(champion: ChampionProfile) {
  return (
    champion.scalingTags.includes("ad") ||
    champion.scalingTags.includes("attack_speed") ||
    champion.scalingTags.includes("crit") ||
    champion.damagePatterns.includes("attack") ||
    champion.damagePatterns.includes("hybrid") ||
    champion.triggerTraits.includes("enhanced_attack")
  );
}

function hasAdPayoff(champion: ChampionProfile) {
  return (
    champion.scalingTags.includes("ad") ||
    champion.scalingTags.includes("attack_speed") ||
    champion.scalingTags.includes("crit") ||
    champion.damagePatterns.includes("attack") ||
    champion.damagePatterns.includes("hybrid") ||
    champion.triggerTraits.includes("enhanced_attack") ||
    champion.triggerTraits.includes("reset")
  );
}

function isAttackSkillLoopChampion(champion: ChampionProfile) {
  return (
    hasAttackPattern(champion) &&
    (hasSkillPattern(champion) ||
      hasAbilityMechanic(champion, ["attack_skill_loop", "cooldown_cycle"]))
  );
}

function isQCoreChampion(champion: ChampionProfile) {
  return hasAbilityMechanicOnSlot(champion, "q", ["q_core", "spam_spell"]);
}

function evaluateAugmentRuleHints(
  champion: ChampionProfile,
  augment: AugmentProfile,
) {
  const hints = augment.ruleHints;

  if (!hints) {
    return {
      matchedSignals: 0,
      mismatchPenalty: 0,
      mismatchReasons: [] as RuleReason[],
    };
  }

  let matchedSignals = 0;
  let mismatchPenalty = 0;
  const mismatchReasons: RuleReason[] = [];

  if (hints.requiredRangeType) {
    if (champion.rangeType === hints.requiredRangeType) {
      matchedSignals += 1;
    } else {
      mismatchPenalty += 12;
      mismatchReasons.push({
        label: "射程门槛不符",
        detail: `该海克斯更偏 ${hints.requiredRangeType === "melee" ? "近战" : "远程"} 英雄，当前英雄的基础射程画像不符合。`,
        impact: -12,
      });
    }
  }

  if (hints.requiredAbilityMechanicsAny?.length) {
    if (hasAbilityMechanic(champion, hints.requiredAbilityMechanicsAny)) {
      matchedSignals += 1;
    } else {
      mismatchPenalty += 18;
      mismatchReasons.push({
        label: "专属技能机制缺失",
        detail: "英雄没有这条海克斯要求的专属技能机制，核心收益几乎空转。",
        impact: -18,
      });
    }
  }

  if (hints.requiresAttackPattern) {
    if (hasAttackPattern(champion)) {
      matchedSignals += 1;
    } else {
      mismatchPenalty += 10;
      mismatchReasons.push({
        label: "普攻兑现路径不足",
        detail: "英雄不靠稳定普攻输出，难以兑现这条海克斯要求的近身持续收益。",
        impact: -10,
      });
    }
  }

  if (hints.requiresAttackSkillLoop) {
    if (isAttackSkillLoopChampion(champion)) {
      matchedSignals += 1;
    } else {
      mismatchPenalty += 18;
      mismatchReasons.push({
        label: "攻技循环不成立",
        detail: "英雄缺少稳定的普攻与技能双循环，只能吃到一半双修成长。",
        impact: -18,
      });
    }
  }

  if (hints.requiresQCore) {
    if (isQCoreChampion(champion)) {
      matchedSignals += 1;
    } else {
      mismatchPenalty += 16;
      mismatchReasons.push({
        label: "Q 核心门槛不符",
        detail: "英雄的 Q 不是主要输出或循环支点，这条 Q 专属海克斯很容易高估。",
        impact: -16,
      });
    }
  }

  if (hints.requiresAdSource) {
    if (hasAdSource(champion)) {
      matchedSignals += 1;
    } else {
      mismatchPenalty += 12;
      mismatchReasons.push({
        label: "攻击力来源不足",
        detail: "英雄缺少稳定额外攻击力来源，转化海克斯的前半段条件不成立。",
        impact: -12,
      });
    }
  }

  if (hints.requiresApSource) {
    if (hasApSource(champion)) {
      matchedSignals += 1;
    } else {
      mismatchPenalty += 12;
      mismatchReasons.push({
        label: "法强来源不足",
        detail: "英雄缺少稳定法强来源，转化海克斯的前半段条件不成立。",
        impact: -12,
      });
    }
  }

  if (hints.requiresAdPayoff) {
    if (hasAdPayoff(champion)) {
      matchedSignals += 1;
    } else {
      mismatchPenalty += 14;
      mismatchReasons.push({
        label: "攻击力兑现路径不足",
        detail: "英雄拿到攻击力后缺少稳定输出承接，这类反向转化收益会明显空转。",
        impact: -14,
      });
    }
  }

  if (hints.requiresApPayoff) {
    if (hasApPayoff(champion)) {
      matchedSignals += 1;
    } else {
      mismatchPenalty += 14;
      mismatchReasons.push({
        label: "法强兑现路径不足",
        detail: "英雄拿到法强后缺少稳定收益承接，这类转化收益会明显空转。",
        impact: -14,
      });
    }
  }

  return {
    matchedSignals,
    mismatchPenalty,
    mismatchReasons,
  };
}

function isSupportChampion(champion: ChampionProfile) {
  return (
    champion.scalingTags.includes("heal_shield") &&
    (champion.utilityTags.includes("peel") ||
      champion.utilityTags.includes("disengage") ||
      hasAbilityMechanic(champion, ["heal", "buff"])) &&
    !champion.combatTempos.includes("burst")
  );
}

function isTankCcChampion(champion: ChampionProfile) {
  return (
    (champion.scalingTags.includes("tank") ||
      champion.survivalStyles.includes("frontline")) &&
    (champion.triggerTraits.includes("cc_chain") ||
      champion.utilityTags.includes("lockdown")) &&
    (champion.utilityTags.includes("engage") || champion.utilityTags.includes("peel"))
  );
}

function isArtilleryMage(champion: ChampionProfile) {
  return (
    champion.rangeType === "ranged" &&
    champion.damagePatterns.includes("skill") &&
    champion.combatTempos.includes("poke") &&
    champion.scalingTags.includes("ap") &&
    hasAbilityMechanic(champion, ["long_range"])
  );
}

function isLongRangeSkillResetAugment(augment: AugmentProfile) {
  return (
    augment.triggerTypes.includes("on_skill") &&
    augment.preferredUsers.includes("ranged") &&
    augment.preferredUsers.includes("caster") &&
    augment.playstyleFits.includes("poke") &&
    augment.riskTags.includes("high_condition")
  );
}

function getPreferredUserSignals(champion: ChampionProfile) {
  const signals: string[] = [champion.rangeType, ...champion.damagePatterns];

  if (
    champion.damagePatterns.includes("skill") ||
    champion.scalingTags.includes("ap") ||
    champion.scalingTags.includes("haste")
  ) {
    signals.push("caster");
  }

  if (
    champion.damagePatterns.includes("attack") ||
    champion.scalingTags.includes("ad") ||
    champion.scalingTags.includes("attack_speed") ||
    champion.scalingTags.includes("crit")
  ) {
    signals.push("attacker");
  }

  if (
    champion.scalingTags.includes("tank") ||
    champion.survivalStyles.includes("frontline")
  ) {
    signals.push("tank");
  }

  if (champion.triggerTraits.includes("reset")) {
    signals.push("resetter");
  }

  return signals;
}

function buildVerdict(totalScore: number): RecommendationResult["verdict"] {
  if (totalScore >= 80) {
    return "strong_pick";
  }

  if (totalScore >= 62) {
    return "good_pick";
  }

  if (totalScore >= 45) {
    return "situational";
  }

  return "avoid";
}

export function scoreChampionAugment(
  champion: ChampionProfile,
  augment: AugmentProfile,
): RecommendationResult {
  if (!canScoreInProduction(champion, augment)) {
    return {
      championId: champion.id,
      augmentId: augment.id,
      totalScore: 0,
      verdict: "avoid",
      breakdown: [
        {
          dimension: "baseline_match",
          score: 0,
          reasons: [
            {
              label: "资料未完成验证",
              detail: "当前英雄或海克斯画像尚未达到生产推荐的证据要求。",
              impact: 0,
            },
          ],
        },
      ],
      summary: "该组合暂不参与正式推荐，等待机制资料完成验证。",
      warnings: ["资料尚未完成验证"],
    };
  }

  const breakdown: RecommendationBreakdown[] = [];

  const baselineReasons: RuleReason[] = [];
  let baselineScore = 40;
  const augmentRuleHints = evaluateAugmentRuleHints(champion, augment);

  if (augmentRuleHints.matchedSignals > 0) {
    const ruleHintBonus = Math.min(12, augmentRuleHints.matchedSignals * 4);
    baselineScore += ruleHintBonus;
    baselineReasons.push({
      label: "专属门槛满足",
      detail: "英雄满足这条海克斯的关键机制门槛，不只是泛用画像接近。",
      impact: ruleHintBonus,
    });
  }

  const sharedTempoCount = intersectCount(
    champion.combatTempos,
    augment.playstyleFits,
  );
  if (sharedTempoCount > 0) {
    baselineScore += sharedTempoCount * 8;
    baselineReasons.push({
      label: "节奏匹配",
      detail: "英雄输出节奏和海克斯适配玩法一致。",
      impact: sharedTempoCount * 8,
    });
  }

  const sharedPreferredUsers = intersectCount(
    getPreferredUserSignals(champion),
    augment.preferredUsers,
  );
  if (sharedPreferredUsers > 0) {
    baselineScore += sharedPreferredUsers * 6;
    baselineReasons.push({
      label: "使用者画像匹配",
      detail: "英雄定位和海克斯偏好的使用者画像接近。",
      impact: sharedPreferredUsers * 6,
    });
  }

  if (
    augment.preferredUsers.includes("caster") &&
    (champion.scalingTags.includes("ap") || champion.scalingTags.includes("haste"))
  ) {
    baselineScore += 6;
    baselineReasons.push({
      label: "法术画像贴合",
      detail: "英雄本身依赖法强或技能循环，能更稳定兑现法术类海克斯。",
      impact: 6,
    });
  }

  if (
    augment.preferredUsers.includes("attacker") &&
    (champion.scalingTags.includes("attack_speed") ||
      champion.scalingTags.includes("crit") ||
      champion.triggerTraits.includes("enhanced_attack"))
  ) {
    baselineScore += 6;
    baselineReasons.push({
      label: "普攻画像贴合",
      detail: "英雄能通过普攻节奏持续兑现这类海克斯收益。",
      impact: 6,
    });
  }

  if (
    augment.preferredUsers.includes("tank") &&
    (champion.scalingTags.includes("tank") ||
      champion.survivalStyles.includes("frontline"))
  ) {
    baselineScore += 5;
    baselineReasons.push({
      label: "前排画像贴合",
      detail: "英雄具备前排承伤或近身站场能力，适合吃坦度类收益。",
      impact: 5,
    });
  }

  if (
    augment.rewardTypes.includes("utility") &&
    (augment.playstyleFits.includes("utility") ||
      augment.triggerTypes.includes("on_skill")) &&
    (champion.scalingTags.includes("heal_shield") ||
      hasAbilityMechanic(champion, ["ally_protect", "buff", "shield"])) &&
    champion.utilityTags.includes("peel")
  ) {
    baselineScore += 7;
    baselineReasons.push({
      label: "附魔辅助画像贴合",
      detail: "英雄能频繁给队友提供保护和增益，更容易把辅助类海克斯稳定兑现出来。",
      impact: 7,
    });
  }

  if (
    isSupportChampion(champion) &&
    augment.rewardTypes.includes("utility") &&
    augment.playstyleFits.includes("utility")
  ) {
    baselineScore += 6;
    baselineReasons.push({
      label: "纯辅助玩法贴合",
      detail: "英雄核心价值更偏保护、拆火和增益传递，适合把功能类海克斯转成团队收益。",
      impact: 6,
    });
  }

  if (
    augment.riskTags.includes("team_comp_dependent") &&
    augment.rewardTypes.includes("utility") &&
    champion.scalingTags.includes("heal_shield") &&
    hasAbilityMechanic(champion, ["heal", "ally_protect", "buff"])
  ) {
    baselineScore += 6;
    baselineReasons.push({
      label: "增益传递画像贴合",
      detail: "英雄能稳定把强化窗口交给队友，适合吃依赖联动承接的增益海克斯。",
      impact: 6,
    });
  }

  if (
    isSupportChampion(champion) &&
    hasAbilityMechanic(champion, ["move_speed", "ally_protect", "buff"]) &&
    augment.rewardTypes.includes("utility") &&
    augment.triggerTypes.includes("on_skill")
  ) {
    baselineScore += 5;
    baselineReasons.push({
      label: "保人与拉扯画像贴合",
      detail: "英雄能反复给队友提供移速、保护或增益，更适合把辅助型海克斯持续打满。",
      impact: 5,
    });
  }

  if (
    augment.triggerTypes.includes("on_skill") &&
    champion.triggerTraits.includes("high_cast_frequency") &&
    (champion.scalingTags.includes("haste") || champion.scalingTags.includes("ap"))
  ) {
    baselineScore += 5;
    baselineReasons.push({
      label: "高频施法画像贴合",
      detail: "英雄本身依赖高频施法和技能循环，能更快吃满这类海克斯的价值。",
      impact: 5,
    });
  }

  if (
    augment.triggerTypes.includes("on_skill") &&
    augment.rewardTypes.includes("damage") &&
    champion.triggerTraits.includes("multi_hit") &&
    champion.damagePatterns.includes("skill")
  ) {
    baselineScore += 5;
    baselineReasons.push({
      label: "连段法师画像贴合",
      detail: "英雄擅长多段技能和连续命中，能更稳定触发连招型海克斯收益。",
      impact: 5,
    });
  }

  if (
    augment.triggerTypes.includes("on_attack") &&
    champion.damagePatterns.includes("attack") &&
    (champion.scalingTags.includes("attack_speed") ||
      champion.triggerTraits.includes("enhanced_attack"))
  ) {
    baselineScore += 5;
    baselineReasons.push({
      label: "普攻联动画像贴合",
      detail: "英雄能以高频普攻稳定触发额外攻击目标和攻击特效类收益。",
      impact: 5,
    });
  }

  if (
    augment.triggerTypes.includes("on_attack") &&
    augment.triggerTypes.includes("on_skill") &&
    champion.damagePatterns.includes("attack") &&
    champion.triggerTraits.includes("reset")
  ) {
    baselineScore += 6;
    baselineReasons.push({
      label: "攻技循环画像贴合",
      detail: "英雄会在普攻和技能之间持续循环，更适合吃双向成长或攻技混合收益。",
      impact: 6,
    });
  }

  if (
    augment.riskTags.includes("high_condition") &&
    augment.triggerTypes.includes("on_skill") &&
    augment.preferredUsers.includes("melee") &&
    champion.survivalStyles.includes("frontline") &&
    hasAbilityMechanic(champion, ["aoe_damage"])
  ) {
    baselineScore += 4;
    baselineReasons.push({
      label: "近身范围技能贴合",
      detail: "英雄能贴身反复打出范围技能，更容易兑现高条件近战技能型海克斯。",
      impact: 4,
    });
  }

  if (
    isTankCcChampion(champion) &&
    augment.triggerTypes.includes("on_cc") &&
    augment.rewardTypes.includes("damage")
  ) {
    baselineScore += 6;
    baselineReasons.push({
      label: "硬控前排画像贴合",
      detail: "英雄能稳定打出连续控制并贴身站场，更适合把控制转伤害类海克斯持续叠高。",
      impact: 6,
    });
  }

  if (
    isTankCcChampion(champion) &&
    augment.rewardTypes.includes("survival") &&
    augment.playstyleFits.includes("frontline")
  ) {
    baselineScore += 5;
    baselineReasons.push({
      label: "前排坦辅画像贴合",
      detail: "英雄需要近身承伤和反复控场，前排生存类海克斯更容易稳定兑现。",
      impact: 5,
    });
  }

  if (
    isArtilleryMage(champion) &&
    augment.triggerTypes.includes("on_skill") &&
    augment.playstyleFits.includes("poke")
  ) {
    baselineScore += 6;
    baselineReasons.push({
      label: "炮台法师画像贴合",
      detail: "英雄更依赖长手基础技能反复压血，远程技能收益类海克斯更容易稳定兑现。",
      impact: 6,
    });
  }

  if (isArtilleryMage(champion) && isLongRangeSkillResetAugment(augment)) {
    baselineScore += 12;
    baselineReasons.push({
      label: "超远距离返还画像贴合",
      detail:
        "英雄能稳定在安全距离命中基础技能，这类远距返还海克斯比泛用伤害海克斯更容易成为主轴。",
      impact: 12,
    });
  }

  if (
    augment.rewardTypes.includes("survival") &&
    champion.scalingTags.includes("ap") &&
    (champion.survivalStyles.includes("shield") ||
      champion.survivalStyles.includes("frontline"))
  ) {
    baselineScore += 5;
    baselineReasons.push({
      label: "法强容错画像贴合",
      detail: "英雄既有法强收益又需要容错，适合把法强转成护盾或站场能力。",
      impact: 5,
    });
  }

  if (
    augment.rewardTypes.includes("survival") &&
    augment.preferredUsers.includes("caster") &&
    augment.preferredUsers.includes("tank") &&
    augment.playstyleFits.includes("frontline") &&
    champion.scalingTags.includes("ap") &&
    champion.survivalStyles.includes("frontline")
  ) {
    baselineScore += 8;
    baselineReasons.push({
      label: "法坦开局容错贴合",
      detail:
        "英雄既吃法强又要近身站场，开局护盾这类法坦向生存收益更容易直接转成持续压制。",
      impact: 8,
    });
  }

  breakdown.push({
    dimension: "baseline_match",
    score: baselineScore,
    reasons: baselineReasons,
  });

  const triggerReasons: RuleReason[] = [];
  let triggerScore = 0;

  const triggerMap: Record<string, string[]> = {
    on_attack: ["attack", "hybrid", "enhanced_attack", "attack_speed"],
    on_skill: ["skill", "hybrid", "high_cast_frequency", "multi_hit", "haste"],
    on_kill: ["reset", "all_in"],
    on_engage: ["all_in", "engage", "dash"],
    on_cc: ["cc_chain", "lockdown"],
    passive: [],
    on_move: ["mobility"],
    on_low_hp: ["frontline", "heal", "shield"],
  };

  for (const triggerType of augment.triggerTypes) {
    const signals = triggerMap[triggerType] ?? [];
    const signalMatches = intersectCount(
      [
        ...champion.damagePatterns,
        ...champion.triggerTraits,
        ...champion.survivalStyles,
        ...champion.utilityTags,
        ...champion.scalingTags,
      ],
      signals,
    );

    if (signalMatches > 0) {
      const impact = Math.min(12, signalMatches * 4);
      triggerScore += impact;
      triggerReasons.push({
        label: `触发稳定性：${triggerType}`,
        detail: "英雄具备较稳定的触发条件。",
        impact,
      });
    }
  }

  breakdown.push({
    dimension: "trigger_reliability",
    score: triggerScore,
    reasons: triggerReasons,
  });

  const rewardReasons: RuleReason[] = [];
  let rewardScore = 0;

  if (augment.ruleHints && augmentRuleHints.matchedSignals > 0) {
    const ruleHintReward = Math.min(8, augmentRuleHints.matchedSignals * 2);
    rewardScore += ruleHintReward;
    rewardReasons.push({
      label: "专属收益可兑现",
      detail: "英雄不仅画像接近，还具备这条专属海克斯真正需要的兑现路径。",
      impact: ruleHintReward,
    });
  }

  if (
    augment.rewardTypes.includes("damage") &&
    (champion.damagePatterns.length > 0 || champion.scalingTags.length > 0)
  ) {
    rewardScore += 10;
    rewardReasons.push({
      label: "伤害收益可兑现",
      detail: "该英雄具备将额外伤害收益转化为回合胜率的基础。",
      impact: 10,
    });
  }

  if (
    augment.rewardTypes.includes("survival") &&
    champion.survivalStyles.length > 0
  ) {
    rewardScore += 8;
    rewardReasons.push({
      label: "容错收益可兑现",
      detail: "该英雄能把生存收益转化为更稳定的回合表现。",
      impact: 8,
    });
  }

  if (
    augment.rewardTypes.includes("survival") &&
    augment.playstyleFits.includes("frontline") &&
    champion.survivalStyles.includes("frontline")
  ) {
    rewardScore += 7;
    rewardReasons.push({
      label: "前排站场收益",
      detail: "英雄本身要靠近身站场拉长回合，更容易把生存型海克斯转成正面压制。",
      impact: 7,
    });
  }

  if (
    augment.rewardTypes.includes("survival") &&
    champion.survivalStyles.includes("frontline") &&
    hasAbilityMechanic(champion, ["drain", "heal"])
  ) {
    rewardScore += 6;
    rewardReasons.push({
      label: "站场回复收益",
      detail: "英雄能在贴身站场时持续回血，更容易把生存型海克斯转成长回合压制力。",
      impact: 6,
    });
  }

  if (
    augment.rewardTypes.includes("utility") &&
    (champion.scalingTags.includes("heal_shield") ||
      champion.utilityTags.includes("peel") ||
      champion.utilityTags.includes("engage") ||
      champion.utilityTags.includes("disengage") ||
      hasAbilityMechanic(champion, ["ally_protect", "buff"]))
  ) {
    rewardScore += 8;
    rewardReasons.push({
      label: "功能收益可兑现",
      detail: "该英雄本身具备控制、增益或保人能力，能把功能类海克斯稳定转成团战价值。",
      impact: 8,
    });
  }

  if (
    isSupportChampion(champion) &&
    augment.rewardTypes.includes("utility") &&
    hasAbilityMechanic(champion, ["ally_protect", "buff", "move_speed", "shield"])
  ) {
    rewardScore += 7;
    rewardReasons.push({
      label: "附魔辅助收益",
      detail: "英雄能把保护、强化和移速窗口稳定交给队友，功能类收益更容易直接兑现。",
      impact: 7,
    });
  }

  if (
    augment.rewardTypes.includes("utility") &&
    champion.scalingTags.includes("heal_shield") &&
    hasAbilityMechanic(champion, ["ally_protect", "buff", "shield"])
  ) {
    rewardScore += 8;
    rewardReasons.push({
      label: "治疗护盾收益可兑现",
      detail: "英雄能持续把治疗、护盾或单点保护转成稳定的团队收益。",
      impact: 8,
    });
  }

  if (
    isSupportChampion(champion) &&
    augment.rewardTypes.includes("survival") &&
    hasAbilityMechanic(champion, ["heal", "shield", "ally_protect"])
  ) {
    rewardScore += 6;
    rewardReasons.push({
      label: "保核容错收益",
      detail: "英雄会把治疗、护盾和保人技能交给队友，因此更能把容错收益转成团战续航。",
      impact: 6,
    });
  }

  if (
    augment.riskTags.includes("team_comp_dependent") &&
    augment.rewardTypes.includes("utility") &&
    champion.scalingTags.includes("heal_shield") &&
    hasAbilityMechanic(champion, ["heal", "ally_protect", "buff"])
  ) {
    rewardScore += 7;
    rewardReasons.push({
      label: "联动增益收益",
      detail: "英雄能稳定围绕队友提供治疗和增益，适合把短时强化直接转成实战优势。",
      impact: 7,
    });
  }

  if (
    augment.triggerTypes.includes("on_skill") &&
    champion.triggerTraits.includes("high_cast_frequency") &&
    (augment.rewardTypes.includes("damage") || augment.rewardTypes.includes("utility"))
  ) {
    rewardScore += 5;
    rewardReasons.push({
      label: "技能循环收益",
      detail: "高频施法能让技能急速或施法触发类海克斯更快滚起收益。",
      impact: 5,
    });
  }

  if (
    augment.rewardTypes.includes("damage") &&
    augment.triggerTypes.includes("on_cc") &&
    (champion.triggerTraits.includes("cc_chain") ||
      champion.utilityTags.includes("lockdown"))
  ) {
    rewardScore += 6;
    rewardReasons.push({
      label: "控制转伤害收益",
      detail: "英雄控制覆盖稳定，能把控制型增伤海克斯叠起来。",
      impact: 6,
    });
  }

  if (
    isTankCcChampion(champion) &&
    augment.triggerTypes.includes("on_cc")
  ) {
    rewardScore += 7;
    rewardReasons.push({
      label: "连续控场收益",
      detail: "英雄能反复靠硬控触发收益，控制型海克斯不会只打一轮就空转。",
      impact: 7,
    });
  }

  if (
    isArtilleryMage(champion) &&
    augment.triggerTypes.includes("on_skill") &&
    hasAbilityMechanic(champion, ["long_range"])
  ) {
    rewardScore += 7;
    rewardReasons.push({
      label: "长手技能兑现",
      detail: "英雄拥有稳定超远距离技能，更容易把技能返还或远程消耗收益持续滚高。",
      impact: 7,
    });
  }

  if (isArtilleryMage(champion) && isLongRangeSkillResetAugment(augment)) {
    rewardScore += 10;
    rewardReasons.push({
      label: "远距技能循环收益",
      detail:
        "英雄会反复用长手基础技能压血，返还同一技能冷却能直接扩大安全消耗和控距优势。",
      impact: 10,
    });
  }

  if (
    augment.rewardTypes.includes("damage") &&
    augment.triggerTypes.includes("on_attack") &&
    (champion.damagePatterns.includes("attack") ||
      champion.triggerTraits.includes("enhanced_attack"))
  ) {
    rewardScore += 6;
    rewardReasons.push({
      label: "普攻联动收益",
      detail: "英雄能稳定打出普攻触发，把海克斯冷却返还或增伤持续兑现。",
      impact: 6,
    });
  }

  if (
    augment.triggerTypes.includes("on_attack") &&
    champion.damagePatterns.includes("attack") &&
    (champion.scalingTags.includes("attack_speed") ||
      champion.triggerTraits.includes("enhanced_attack"))
  ) {
    rewardScore += 5;
    rewardReasons.push({
      label: "高频普攻收益",
      detail: "英雄普攻密度高，能把额外攻击目标和攻击特效类收益持续打出来。",
      impact: 5,
    });
  }

  if (
    augment.triggerTypes.includes("on_attack") &&
    augment.triggerTypes.includes("on_skill") &&
    champion.damagePatterns.includes("attack") &&
    champion.triggerTraits.includes("reset")
  ) {
    rewardScore += 6;
    rewardReasons.push({
      label: "攻技混合收益",
      detail: "英雄既能高频平 A 又能循环技能，更容易把双向成长收益拉满。",
      impact: 6,
    });
  }

  if (
    augment.rewardTypes.includes("survival") &&
    champion.scalingTags.includes("ap") &&
    (champion.survivalStyles.includes("shield") ||
      champion.survivalStyles.includes("frontline"))
  ) {
    rewardScore += 6;
    rewardReasons.push({
      label: "法强转容错收益",
      detail: "英雄既吃法强又需要站场容错，能把护盾类收益稳定换成回合生存空间。",
      impact: 6,
    });
  }

  if (
    augment.rewardTypes.includes("survival") &&
    augment.preferredUsers.includes("caster") &&
    augment.preferredUsers.includes("tank") &&
    champion.scalingTags.includes("ap") &&
    champion.survivalStyles.includes("frontline") &&
    hasAbilityMechanic(champion, ["drain", "heal", "shield"])
  ) {
    rewardScore += 8;
    rewardReasons.push({
      label: "法坦续航收益",
      detail:
        "英雄会把法强和额外护盾一起转成更长的前排站场时间，比纯技能急速更稳定地补足赢法。",
      impact: 8,
    });
  }

  breakdown.push({
    dimension: "reward_conversion",
    score: rewardScore,
    reasons: rewardReasons,
  });

  const riskReasons: RuleReason[] = [];
  let riskPenalty = 0;

  if (augment.riskTags.includes("high_condition")) {
    riskPenalty += 10;
    riskReasons.push({
      label: "高条件触发",
      detail: "该海克斯启动条件偏苛刻，需要额外关注稳定性。",
      impact: -10,
    });
  }

  if (augment.riskTags.includes("execution_heavy")) {
    riskPenalty += 8;
    riskReasons.push({
      label: "执行难度高",
      detail: "该海克斯需要更高操作质量或更明确的对局策略。",
      impact: -8,
    });
  }

  if (augment.riskTags.includes("team_comp_dependent")) {
    riskPenalty += 6;
    riskReasons.push({
      label: "阵容依赖",
      detail: "该海克斯可能需要队友或对手构成配合才能稳定发挥。",
      impact: -6,
    });
  }

  if (
    augment.riskTags.includes("team_comp_dependent") &&
    !champion.scalingTags.includes("heal_shield") &&
    !champion.utilityTags.includes("peel") &&
    !champion.utilityTags.includes("engage") &&
    !champion.utilityTags.includes("disengage") &&
    !hasAbilityMechanic(champion, ["ally_protect", "buff"])
  ) {
    riskPenalty += 6;
    riskReasons.push({
      label: "联动承接不足",
      detail: "英雄偏单兵作战，较难把强依赖搭档配合的海克斯稳定打满。",
      impact: -6,
    });
  }

  if (
    augment.triggerTypes.includes("on_attack") &&
    champion.damagePatterns.includes("skill") &&
    !champion.triggerTraits.includes("enhanced_attack") &&
    !champion.scalingTags.includes("attack_speed")
  ) {
    riskPenalty += 8;
    riskReasons.push({
      label: "普攻触发不稳定",
      detail: "英雄核心输出不靠普攻，攻击触发类海克斯容易出现明显空转。",
      impact: -8,
    });
  }

  if (
    isSupportChampion(champion) &&
    augment.triggerTypes.includes("on_attack") &&
    !champion.damagePatterns.includes("attack")
  ) {
    riskPenalty += 10;
    riskReasons.push({
      label: "输出向海克斯错位",
      detail: "英雄主要靠技能保护和增益影响对局，普攻触发类海克斯很难成为稳定主收益。",
      impact: -10,
    });
  }

  if (
    isSupportChampion(champion) &&
    augment.playstyleFits.includes("dps") &&
    augment.rewardTypes.includes("damage")
  ) {
    riskPenalty += 6;
    riskReasons.push({
      label: "持续输出收益错位",
      detail: "英雄不是靠长时间站桩输出赢回合，纯输出导向收益容易高估。",
      impact: -6,
    });
  }

  if (
    (augment.rewardTypes.includes("utility") ||
      augment.riskTags.includes("team_comp_dependent")) &&
    !champion.scalingTags.includes("heal_shield") &&
    !champion.utilityTags.includes("peel") &&
    !champion.utilityTags.includes("engage") &&
    !champion.utilityTags.includes("disengage") &&
    !hasAbilityMechanic(champion, ["ally_protect", "buff"])
  ) {
    riskPenalty += 6;
    riskReasons.push({
      label: "辅助收益错位",
      detail: "英雄缺少保人或联动支点，功能型海克斯未必能转成有效战力。",
      impact: -6,
    });
  }

  if (
    augment.riskTags.includes("high_condition") &&
    !augment.triggerTypes.some((triggerType) => {
      const triggerMap = {
        on_attack: ["attack", "hybrid", "enhanced_attack", "attack_speed"],
        on_skill: ["skill", "hybrid", "high_cast_frequency", "multi_hit", "haste"],
        on_kill: ["reset", "all_in"],
        on_engage: ["all_in", "engage", "dash"],
        on_cc: ["cc_chain", "lockdown"],
        passive: [],
        on_move: ["mobility"],
        on_low_hp: ["frontline", "heal", "shield"],
      } as const;

      const signals = triggerMap[triggerType] ?? [];
      return intersectCount(
        [
          ...champion.damagePatterns,
          ...champion.triggerTraits,
          ...champion.survivalStyles,
          ...champion.utilityTags,
          ...champion.scalingTags,
        ],
        [...signals],
      ) > 0;
    })
  ) {
    riskPenalty += 6;
    riskReasons.push({
      label: "高条件且难兑现",
      detail: "这类海克斯需要更明确的触发支点，而当前英雄的稳定兑现路径不足。",
      impact: -6,
    });
  }

  if (augmentRuleHints.mismatchPenalty > 0) {
    riskPenalty += augmentRuleHints.mismatchPenalty;
    riskReasons.push(...augmentRuleHints.mismatchReasons);
  }

  breakdown.push({
    dimension: "risk_penalty",
    score: -riskPenalty,
    reasons: riskReasons,
  });

  const styleReasons: RuleReason[] = [];
  let styleBonus = 0;

  if (
    champion.combatTempos.includes("burst") &&
    augment.playstyleFits.includes("burst")
  ) {
    styleBonus += 6;
    styleReasons.push({
      label: "爆发玩法加成",
      detail: "更适合用来打先手秒杀或短时间内压制对手。",
      impact: 6,
    });
  }

  if (
    champion.combatTempos.includes("dps") &&
    augment.playstyleFits.includes("dps")
  ) {
    styleBonus += 6;
    styleReasons.push({
      label: "持续输出加成",
      detail: "更适合长回合持续输出的作战方式。",
      impact: 6,
    });
  }

  if (
    champion.combatTempos.includes("poke") &&
    augment.playstyleFits.includes("poke")
  ) {
    styleBonus += 5;
    styleReasons.push({
      label: "消耗玩法加成",
      detail: "更适合拉扯和远程消耗的回合节奏。",
      impact: 5,
    });
  }

  breakdown.push({
    dimension: "playstyle_bonus",
    score: styleBonus,
    reasons: styleReasons,
  });

  const totalScore = breakdown.reduce((sum, item) => sum + item.score, 0);
  const verdict = buildVerdict(totalScore);
  const warnings = augment.trapSignals.slice(0, 2);

  return {
    championId: champion.id,
    augmentId: augment.id,
    totalScore,
    verdict,
    breakdown,
    summary: `${champion.name} 对 ${augment.name} 的匹配结果为 ${verdict}。`,
    warnings,
  };
}
