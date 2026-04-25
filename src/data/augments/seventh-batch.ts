import type { AugmentProfile } from "@/lib/recommendation/types";

const reviewedAt = "2026-04-26";

export const seventhBatchAugmentProfiles: AugmentProfile[] = [
  {
    id: "18",
    name: "Courage of the Colossus",
    localizedName: "巨像的勇气",
    rarity: "prismatic",
    summary:
      "定身或缚地敌方英雄后，获得一个持续 3 秒、可吸收 100 到 300（基于等级）加 5% 最大生命值伤害的护盾。",
    officialDescription:
      "Immobilizing or grounding an enemy champion grants a shield for 3 seconds that absorbs 100 to 300 (based on level) (+5% maximum health) damage.",
    rewardTypes: ["survival"],
    triggerTypes: ["on_cc"],
    preferredUsers: ["melee", "tank"],
    playstyleFits: ["frontline", "utility"],
    riskTags: [],
    positiveSignals: [
      "适合能稳定先手控制或连续限制敌人的前排与开团英雄。",
      "当英雄本身需要贴脸吃伤害并反复开团时，这类护盾收益最容易直接兑现为容错。",
    ],
    trapSignals: [
      "如果英雄几乎没有稳定定身、击飞、压制或缚地手段，这类护盾很难高频触发。",
      "若英雄主要是远程消耗或不承担正面进场，这类前排容错收益通常不如更直接的输出选项。",
    ],
    ruleHints: {
      requiredAbilityMechanicsAny: ["stun", "root", "knockup", "taunt", "pull", "ground"],
      requiredRangeType: "melee",
    },
    verification: {
      status: "verified",
      reviewedAt,
      reviewedBy: "GPT-5.4",
      evidence: [
        {
          sourceType: "official-client",
          sourceName: "CommunityDragon cdragon arena export",
          sourceUrl: "https://raw.communitydragon.org/15.11/cdragon/arena/en_us.json",
          version: "15.11",
          locale: "en_us",
          retrievedAt: reviewedAt,
          confidence: "high",
          note: "客户端导出的 Arena 强化符文名称、模板描述与条目标识。",
        },
        {
          sourceType: "community-mirror",
          sourceName: "CommunityDragon cherry-augments en_gb",
          sourceUrl:
            "https://raw.communitydragon.org/14.14/plugins/rcp-be-lol-game-data/global/en_gb/v1/cherry-augments.json",
          version: "14.14",
          locale: "en_gb",
          retrievedAt: reviewedAt,
          confidence: "medium",
          note: "条目 ID、英文名、稀有度与原始图标路径的辅助校对来源。",
        },
        {
          sourceType: "riot-support",
          sourceName: "Arena Game Mode",
          sourceUrl:
            "https://support-leagueoflegends.riotgames.com/hc/en-us/articles/17211075407635-League-of-Legends-Arena-Game-Mode",
          locale: "en_us",
          retrievedAt: reviewedAt,
          confidence: "high",
          note: "用于确认 Arena 模式与强化符文规则语义的官方说明。",
        },
        {
          sourceType: "community-site",
          sourceName: "Backdash Arena patch 14.11 notes",
          sourceUrl:
            "https://thebackdash.com/gaming/league-of-legends/all-arena-changes-in-patch-14-11/",
          retrievedAt: reviewedAt,
          confidence: "medium",
          note: "用于还原 14.11 后的护盾数值区间与最大生命值系数。",
        },
      ],
      notes: [
        "已用客户端导出、条目清单、Riot Arena 说明与社区公开补丁记录交叉校对。",
      ],
    },
  },
  {
    id: "19",
    name: "Dashing",
    localizedName: "全凭身法",
    rarity: "prismatic",
    summary: "你的冲刺、跳跃、闪烁或传送类技能获得 250 技能急速。",
    officialDescription:
      "Abilities with dashes or blinks gain 250 ability haste.",
    rewardTypes: ["damage"],
    triggerTypes: ["on_engage"],
    preferredUsers: ["attacker", "caster"],
    playstyleFits: ["burst", "dps"],
    riskTags: ["high_condition"],
    positiveSignals: [
      "适合把位移技能当作进场、追击、换位或持续输出节奏支点的英雄。",
      "当英雄的关键伤害窗口依赖位移技能频率时，这类技能急速最容易直接转成压制和击杀。",
    ],
    trapSignals: [
      "如果英雄没有稳定的冲刺、跳跃、闪烁或传送技能，这条海克斯几乎无法触发，收益很容易空转。",
      "若位移技能只是偶发保命手段而非核心节奏，过高的技能急速会明显溢出，构筑与收益窗口也会错位。",
    ],
    ruleHints: {
      requiredAbilityMechanicsAny: ["dash", "blink", "teleport", "reposition"],
    },
    verification: {
      status: "verified",
      reviewedAt,
      reviewedBy: "GPT-5.4",
      evidence: [
        {
          sourceType: "official-client",
          sourceName: "CommunityDragon cdragon arena export",
          sourceUrl: "https://raw.communitydragon.org/15.11/cdragon/arena/en_us.json",
          version: "15.11",
          locale: "en_us",
          retrievedAt: reviewedAt,
          confidence: "high",
          note: "客户端导出的 Arena 强化符文名称、模板描述与条目标识。",
        },
        {
          sourceType: "community-mirror",
          sourceName: "CommunityDragon cherry-augments en_gb",
          sourceUrl:
            "https://raw.communitydragon.org/14.14/plugins/rcp-be-lol-game-data/global/en_gb/v1/cherry-augments.json",
          version: "14.14",
          locale: "en_gb",
          retrievedAt: reviewedAt,
          confidence: "medium",
          note: "条目 ID、英文名、稀有度与原始图标路径的辅助校对来源。",
        },
        {
          sourceType: "riot-support",
          sourceName: "Arena Game Mode",
          sourceUrl:
            "https://support-leagueoflegends.riotgames.com/hc/en-us/articles/17211075407635-League-of-Legends-Arena-Game-Mode",
          locale: "en_us",
          retrievedAt: reviewedAt,
          confidence: "high",
          note: "用于确认 Arena 模式与强化符文规则语义的官方说明。",
        },
        {
          sourceType: "community-site",
          sourceName: "League of Legends Wiki Arena augments",
          sourceUrl: "https://wiki.leagueoflegends.com/en-us/Arena/Augments",
          retrievedAt: reviewedAt,
          confidence: "medium",
          note: "用于还原 Dashing 的已展开英文描述与当前数值口径。",
        },
      ],
      notes: [
        "已用客户端导出、条目清单、Riot Arena 说明与社区公开条目页交叉校对。",
      ],
    },
  },
  {
    id: "32",
    name: "Executioner",
    localizedName: "裁决使",
    rarity: "silver",
    summary:
      "对生命值低于 50% 的敌人多造成 15% 伤害，并在参与击杀后重置基础技能冷却。",
    officialDescription:
      "Deal 15% more damage to enemies below 50% health. Reset your basic abilities on takedown.",
    rewardTypes: ["damage"],
    triggerTypes: ["on_kill", "on_low_hp"],
    preferredUsers: ["attacker", "caster", "resetter"],
    playstyleFits: ["burst", "snowball"],
    riskTags: ["snowball_only"],
    positiveSignals: [
      "适合能快速收残、频繁参与击杀并在刷新后继续追击的英雄。",
      "当英雄的基础技能本身就是伤害与再进场核心时，参与击杀后的刷新收益最容易直接滚起雪球。",
    ],
    trapSignals: [
      "如果英雄很难稳定参与击杀或难以把低血斩杀兑现成连锁回合，这类收益就会明显打折。",
      "若英雄更依赖长回合站场而不是收割与刷新，这条海克斯往往不如更稳定的常驻收益。",
    ],
    verification: {
      status: "verified",
      reviewedAt,
      reviewedBy: "GPT-5.4",
      evidence: [
        {
          sourceType: "official-client",
          sourceName: "CommunityDragon cdragon arena export",
          sourceUrl: "https://raw.communitydragon.org/15.11/cdragon/arena/en_us.json",
          version: "15.11",
          locale: "en_us",
          retrievedAt: reviewedAt,
          confidence: "high",
          note: "客户端导出的 Arena 强化符文名称、模板描述与条目标识。",
        },
        {
          sourceType: "community-mirror",
          sourceName: "CommunityDragon cherry-augments en_gb",
          sourceUrl:
            "https://raw.communitydragon.org/14.14/plugins/rcp-be-lol-game-data/global/en_gb/v1/cherry-augments.json",
          version: "14.14",
          locale: "en_gb",
          retrievedAt: reviewedAt,
          confidence: "medium",
          note: "条目 ID、英文名、稀有度与原始图标路径的辅助校对来源。",
        },
        {
          sourceType: "riot-support",
          sourceName: "Arena Game Mode",
          sourceUrl:
            "https://support-leagueoflegends.riotgames.com/hc/en-us/articles/17211075407635-League-of-Legends-Arena-Game-Mode",
          locale: "en_us",
          retrievedAt: reviewedAt,
          confidence: "high",
          note: "用于确认 Arena 模式与强化符文规则语义的官方说明。",
        },
        {
          sourceType: "community-site",
          sourceName: "Blitz Arena augment listing",
          sourceUrl: "https://blitz.gg/lol/champions/Sett/arena/?queue=CHERRY&region=WORLD",
          retrievedAt: reviewedAt,
          confidence: "medium",
          note: "用于还原 Executioner 的已展开英文描述与阈值数值。",
        },
      ],
      notes: [
        "已用客户端导出、条目清单、Riot Arena 说明与社区公开条目页交叉校对。",
      ],
    },
  },
];
