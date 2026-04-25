import type { AugmentProfile } from "@/lib/recommendation/types";

const reviewedAt = "2026-04-25";

export const firstBatchAugmentProfiles: AugmentProfile[] = [
  {
    "id": "205",
    "name": "ADAPt",
    "localizedName": "物理转魔法",
    "iconPath": "/icons/augments/205.png",
    "rarity": "silver",
    "summary": "将额外攻击力按每 0.6 攻击力转化 1 点法术强度，并额外获得 15% 法术强度。",
    "officialDescription": "Convert bonus attack damage into ability power at a rate of 1 ability power per 0.6 bonus attack damage, then gain 15% increased ability power.",
    "rewardTypes": [
      "damage"
    ],
    "triggerTypes": [
      "passive"
    ],
    "preferredUsers": [
      "caster"
    ],
    "playstyleFits": [
      "burst",
      "poke"
    ],
    "riskTags": [
      "high_condition"
    ],
    "positiveSignals": [
      "适合能把常驻或被动收益稳定转成回合强度的英雄。",
      "当英雄能把额外伤害或成长稳定转成压制与击杀时，这类收益最容易兑现。"
    ],
    "trapSignals": [
      "如果英雄无法把被动收益稳定转成回合表现，这类海克斯的价值会明显缩水。",
      "这类海克斯本身条件较高，命中、构筑或站场窗口不够稳定时很容易空转。"
    ],
    "ruleHints": {
      "requiresAdSource": true,
      "requiresApPayoff": true
    },
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-04-25",
      "reviewedBy": "GPT-5.4",
      "evidence": [
        {
          "sourceType": "official-client",
          "sourceName": "CommunityDragon cdragon arena export",
          "sourceUrl": "https://raw.communitydragon.org/15.11/cdragon/arena/en_us.json",
          "version": "15.11",
          "locale": "en_us",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "客户端导出的 Arena 强化符文名称、描述、图标与数值字段。"
        },
        {
          "sourceType": "community-mirror",
          "sourceName": "CommunityDragon cherry-augments en_gb",
          "sourceUrl": "https://raw.communitydragon.org/14.14/plugins/rcp-be-lol-game-data/global/en_gb/v1/cherry-augments.json",
          "version": "14.14",
          "locale": "en_gb",
          "retrievedAt": "2026-04-25",
          "confidence": "medium",
          "note": "条目 ID、英文名、稀有度与图标路径的辅助校对来源。"
        },
        {
          "sourceType": "riot-support",
          "sourceName": "Arena Game Mode",
          "sourceUrl": "https://support-leagueoflegends.riotgames.com/hc/en-us/articles/17211075407635-League-of-Legends-Arena-Game-Mode",
          "locale": "en_us",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "用于确认 Arena 模式与强化符文规则语义的官方说明。"
        }
      ],
      "notes": [
        "已用客户端导出、条目清单与 Riot 模式说明交叉验证。"
      ]
    }
  },
  {
    "id": "113",
    "name": "Skilled Sniper",
    "localizedName": "老练狙神",
    "iconPath": "/icons/augments/113.png",
    "rarity": "gold",
    "summary": "用非终极技能在 700 码外命中敌人时，该技能冷却缩短至 0.5 秒；周期性技能则重置为 3 秒。",
    "officialDescription": "Hitting an enemy with a non-ultimate ability at over 700 range reduces its cooldown to 0.5 seconds; periodic abilities are instead reset to 3 seconds.",
    "rewardTypes": [
      "damage",
      "utility"
    ],
    "triggerTypes": [
      "on_skill"
    ],
    "preferredUsers": [
      "ranged",
      "caster"
    ],
    "playstyleFits": [
      "poke"
    ],
    "riskTags": [
      "high_condition"
    ],
    "positiveSignals": [
      "适合能稳定用技能循环触发收益的英雄。",
      "当英雄能把额外伤害或成长稳定转成压制与击杀时，这类收益最容易兑现。"
    ],
    "trapSignals": [
      "如果英雄技能命中率不足或触发窗口太短，这类收益很难稳定兑现。",
      "这类海克斯本身条件较高，命中、构筑或站场窗口不够稳定时很容易空转。"
    ],
    "ruleHints": {
      "requiredAbilityMechanicsAny": [
        "long_range"
      ],
      "requiredRangeType": "ranged"
    },
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-04-25",
      "reviewedBy": "GPT-5.4",
      "evidence": [
        {
          "sourceType": "official-client",
          "sourceName": "CommunityDragon cdragon arena export",
          "sourceUrl": "https://raw.communitydragon.org/15.11/cdragon/arena/en_us.json",
          "version": "15.11",
          "locale": "en_us",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "客户端导出的 Arena 强化符文名称、描述、图标与数值字段。"
        },
        {
          "sourceType": "community-mirror",
          "sourceName": "CommunityDragon cherry-augments en_gb",
          "sourceUrl": "https://raw.communitydragon.org/14.14/plugins/rcp-be-lol-game-data/global/en_gb/v1/cherry-augments.json",
          "version": "14.14",
          "locale": "en_gb",
          "retrievedAt": "2026-04-25",
          "confidence": "medium",
          "note": "条目 ID、英文名、稀有度与图标路径的辅助校对来源。"
        },
        {
          "sourceType": "riot-support",
          "sourceName": "Arena Game Mode",
          "sourceUrl": "https://support-leagueoflegends.riotgames.com/hc/en-us/articles/17211075407635-League-of-Legends-Arena-Game-Mode",
          "locale": "en_us",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "用于确认 Arena 模式与强化符文规则语义的官方说明。"
        }
      ],
      "notes": [
        "已用客户端导出、条目清单与 Riot 模式说明交叉验证。"
      ]
    }
  },
  {
    "id": "51",
    "name": "Light 'em Up!",
    "localizedName": "点亮他们！",
    "iconPath": "/icons/augments/51.png",
    "rarity": "silver",
    "summary": "每第 4 次攻击额外造成 44 到 320 魔法伤害，并享受 140% 额外攻击力与 76% 法术强度加成。",
    "officialDescription": "Every 4th attack deals 44 to 320 bonus magic damage, scaling with bonus attack damage and ability power.",
    "rewardTypes": [
      "damage"
    ],
    "triggerTypes": [
      "on_attack"
    ],
    "preferredUsers": [
      "ranged",
      "attacker"
    ],
    "playstyleFits": [
      "dps"
    ],
    "riskTags": [],
    "positiveSignals": [
      "适合能稳定用普攻或攻击特效反复触发收益的英雄。",
      "当英雄能把额外伤害或成长稳定转成压制与击杀时，这类收益最容易兑现。"
    ],
    "trapSignals": [
      "如果英雄难以持续普攻或很难稳定触发攻击特效，这类收益就容易空转。",
      "如果对局节奏和英雄玩法与收益方向不匹配，整体性价比通常不如更泛用的选项。"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-04-25",
      "reviewedBy": "GPT-5.4",
      "evidence": [
        {
          "sourceType": "official-client",
          "sourceName": "CommunityDragon cdragon arena export",
          "sourceUrl": "https://raw.communitydragon.org/15.11/cdragon/arena/en_us.json",
          "version": "15.11",
          "locale": "en_us",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "客户端导出的 Arena 强化符文名称、描述、图标与数值字段。"
        },
        {
          "sourceType": "community-mirror",
          "sourceName": "CommunityDragon cherry-augments en_gb",
          "sourceUrl": "https://raw.communitydragon.org/14.14/plugins/rcp-be-lol-game-data/global/en_gb/v1/cherry-augments.json",
          "version": "14.14",
          "locale": "en_gb",
          "retrievedAt": "2026-04-25",
          "confidence": "medium",
          "note": "条目 ID、英文名、稀有度与图标路径的辅助校对来源。"
        },
        {
          "sourceType": "riot-support",
          "sourceName": "Arena Game Mode",
          "sourceUrl": "https://support-leagueoflegends.riotgames.com/hc/en-us/articles/17211075407635-League-of-Legends-Arena-Game-Mode",
          "locale": "en_us",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "用于确认 Arena 模式与强化符文规则语义的官方说明。"
        }
      ],
      "notes": [
        "已用客户端导出、条目清单与 Riot 模式说明交叉验证。"
      ]
    }
  },
  {
    "id": "64",
    "name": "Perseverance",
    "localizedName": "坚韧",
    "iconPath": "/icons/augments/64.png",
    "rarity": "gold",
    "summary": "获得 800% 基础生命回复；生命值低于 25% 时提升至 1600%。",
    "officialDescription": "Gain 800% base health regeneration, increased to 1600% below 25% health.",
    "rewardTypes": [
      "survival"
    ],
    "triggerTypes": [
      "passive",
      "on_low_hp"
    ],
    "preferredUsers": [
      "melee",
      "tank"
    ],
    "playstyleFits": [
      "frontline"
    ],
    "riskTags": [],
    "positiveSignals": [
      "适合能把常驻或被动收益稳定转成回合强度的英雄。",
      "当英雄需要更长站场或更高容错来兑现输出与控制时，这类收益更稳定。"
    ],
    "trapSignals": [
      "如果英雄无法把被动收益稳定转成回合表现，这类海克斯的价值会明显缩水。",
      "如果对局节奏和英雄玩法与收益方向不匹配，整体性价比通常不如更泛用的选项。"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-04-25",
      "reviewedBy": "GPT-5.4",
      "evidence": [
        {
          "sourceType": "official-client",
          "sourceName": "CommunityDragon cdragon arena export",
          "sourceUrl": "https://raw.communitydragon.org/15.11/cdragon/arena/en_us.json",
          "version": "15.11",
          "locale": "en_us",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "客户端导出的 Arena 强化符文名称、描述、图标与数值字段。"
        },
        {
          "sourceType": "community-mirror",
          "sourceName": "CommunityDragon cherry-augments en_gb",
          "sourceUrl": "https://raw.communitydragon.org/14.14/plugins/rcp-be-lol-game-data/global/en_gb/v1/cherry-augments.json",
          "version": "14.14",
          "locale": "en_gb",
          "retrievedAt": "2026-04-25",
          "confidence": "medium",
          "note": "条目 ID、英文名、稀有度与图标路径的辅助校对来源。"
        },
        {
          "sourceType": "riot-support",
          "sourceName": "Arena Game Mode",
          "sourceUrl": "https://support-leagueoflegends.riotgames.com/hc/en-us/articles/17211075407635-League-of-Legends-Arena-Game-Mode",
          "locale": "en_us",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "用于确认 Arena 模式与强化符文规则语义的官方说明。"
        }
      ],
      "notes": [
        "已用客户端导出、条目清单与 Riot 模式说明交叉验证。"
      ]
    }
  }
];
