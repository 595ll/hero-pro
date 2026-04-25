import type { AugmentProfile } from "@/lib/recommendation/types";

const reviewedAt = "2026-04-25";

export const fourthBatchAugmentProfiles: AugmentProfile[] = [
  {
    "id": "46",
    "name": "Infernal Soul",
    "localizedName": "炼狱龙魂",
    "iconPath": "/icons/augments/46.png",
    "rarity": "silver",
    "summary": "获得炼狱龙魂；技能或攻击命中敌人时会触发额外爆发伤害。",
    "officialDescription": "Gain the Infernal Soul, dealing bonus damage when you hit enemies with abilities or attacks.",
    "rewardTypes": [
      "damage"
    ],
    "triggerTypes": [
      "on_attack",
      "on_skill"
    ],
    "preferredUsers": [
      "attacker",
      "caster",
      "melee",
      "ranged"
    ],
    "playstyleFits": [
      "burst",
      "dps",
      "poke"
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
    "id": "60",
    "name": "Ocean Soul",
    "localizedName": "海洋龙魂",
    "iconPath": "/icons/augments/60.png",
    "rarity": "silver",
    "summary": "获得海洋龙魂；对敌方英雄造成伤害后会获得高额生命与法力回复。",
    "officialDescription": "Gain the Ocean Soul, granting high health and mana regeneration after damaging enemies.",
    "rewardTypes": [
      "survival"
    ],
    "triggerTypes": [
      "passive",
      "on_attack",
      "on_skill"
    ],
    "preferredUsers": [
      "caster",
      "attacker",
      "ranged",
      "melee"
    ],
    "playstyleFits": [
      "dps",
      "poke",
      "frontline"
    ],
    "riskTags": [],
    "positiveSignals": [
      "适合能稳定用普攻或攻击特效反复触发收益的英雄。",
      "当英雄需要更长站场或更高容错来兑现输出与控制时，这类收益更稳定。"
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
    "id": "206",
    "name": "escAPADe",
    "localizedName": "魔法转物理",
    "iconPath": "/icons/augments/206.png",
    "rarity": "silver",
    "summary": "将法术强度按每 1 点法强转化 0.6 点额外攻击力，并额外获得 10% 攻击力。",
    "officialDescription": "Convert ability power into bonus attack damage and gain 10% attack damage.",
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
      "dps"
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
      "requiresApSource": true,
      "requiresAdPayoff": true
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
  }
];
