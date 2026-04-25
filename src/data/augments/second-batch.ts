import type { AugmentProfile } from "@/lib/recommendation/types";

const reviewedAt = "2026-04-25";

export const secondBatchAugmentProfiles: AugmentProfile[] = [
  {
    "id": "48",
    "name": "Jeweled Gauntlet",
    "localizedName": "珠光护手",
    "iconPath": "/icons/augments/48.png",
    "rarity": "prismatic",
    "summary": "你的技能可以以 155% 总伤害暴击。获得 25% 暴击率，并按每 1 点法术强度额外转化 0.045% 暴击率。",
    "officialDescription": "Your abilities can critically strike for 155% total damage. Gain 25% critical strike chance.",
    "rewardTypes": [
      "damage"
    ],
    "triggerTypes": [
      "passive",
      "on_skill"
    ],
    "preferredUsers": [
      "caster"
    ],
    "playstyleFits": [
      "burst",
      "poke"
    ],
    "riskTags": [],
    "positiveSignals": [
      "适合能稳定用技能循环触发收益的英雄。",
      "当英雄能把额外伤害或成长稳定转成压制与击杀时，这类收益最容易兑现。"
    ],
    "trapSignals": [
      "如果英雄技能命中率不足或触发窗口太短，这类收益很难稳定兑现。",
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
    "id": "138",
    "name": "Goredrink",
    "localizedName": "渴血",
    "iconPath": "/icons/augments/138.png",
    "rarity": "silver",
    "summary": "获得 20% 全能吸血。",
    "officialDescription": "Gain 20% omnivamp.",
    "rewardTypes": [
      "survival",
      "damage"
    ],
    "triggerTypes": [
      "passive"
    ],
    "preferredUsers": [
      "melee",
      "attacker",
      "tank"
    ],
    "playstyleFits": [
      "dps",
      "frontline"
    ],
    "riskTags": [],
    "positiveSignals": [
      "适合能把常驻或被动收益稳定转成回合强度的英雄。",
      "当英雄能把额外伤害或成长稳定转成压制与击杀时，这类收益最容易兑现。"
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
  },
  {
    "id": "103",
    "name": "Bread And Butter",
    "localizedName": "面包和黄油",
    "iconPath": "/icons/augments/103.png",
    "rarity": "gold",
    "summary": "你的 Q 技能获得 200 技能急速。",
    "officialDescription": "Your Q gains 200 ability haste.",
    "rewardTypes": [
      "damage",
      "utility"
    ],
    "triggerTypes": [
      "passive",
      "on_skill"
    ],
    "preferredUsers": [
      "caster",
      "attacker"
    ],
    "playstyleFits": [
      "dps",
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
      "requiresQCore": true
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
    "id": "84",
    "name": "Thread the Needle",
    "localizedName": "穿针引线",
    "iconPath": "/icons/augments/84.png",
    "rarity": "gold",
    "summary": "获得 20% 护甲穿透和 20% 法术穿透。",
    "officialDescription": "Gain 20% armor penetration and 20% magic penetration.",
    "rewardTypes": [
      "damage"
    ],
    "triggerTypes": [
      "passive"
    ],
    "preferredUsers": [
      "caster",
      "attacker",
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
      "适合能把常驻或被动收益稳定转成回合强度的英雄。",
      "当英雄能把额外伤害或成长稳定转成压制与击杀时，这类收益最容易兑现。"
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
