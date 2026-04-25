import type { AugmentProfile } from "@/lib/recommendation/types";

const reviewedAt = "2026-04-25";

export const sixthBatchAugmentProfiles: AugmentProfile[] = [
  {
    "id": "54",
    "name": "Master of Duality",
    "localizedName": "物法皆修",
    "iconPath": "/icons/augments/54.png",
    "rarity": "prismatic",
    "summary": "每次普攻提供 6 到 18 法术强度，每次技能提供 3 到 9 攻击力，持续到回合结束并可无限叠加。",
    "officialDescription": "Your Attacks grant you stacking Ability Power and your Abilities grant you Attack Damage.",
    "rewardTypes": [
      "damage"
    ],
    "triggerTypes": [
      "on_attack",
      "on_skill"
    ],
    "preferredUsers": [
      "melee",
      "attacker",
      "caster"
    ],
    "playstyleFits": [
      "dps",
      "burst"
    ],
    "riskTags": [
      "high_condition"
    ],
    "positiveSignals": [
      "适合能稳定用普攻或攻击特效反复触发收益的英雄。",
      "当英雄能把额外伤害或成长稳定转成压制与击杀时，这类收益最容易兑现。"
    ],
    "trapSignals": [
      "如果英雄难以持续普攻或很难稳定触发攻击特效，这类收益就容易空转。",
      "这类海克斯本身条件较高，命中、构筑或站场窗口不够稳定时很容易空转。"
    ],
    "ruleHints": {
      "requiresAttackSkillLoop": true,
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
    "id": "214",
    "name": "Spin To Win",
    "localizedName": "旋转至胜",
    "iconPath": "/icons/augments/214.png",
    "rarity": "silver",
    "summary": "你的旋转类技能获得 30 技能急速，并额外造成 30% 伤害。",
    "officialDescription": "Your spin Abilities gain Ability Haste and deal more damage.",
    "rewardTypes": [
      "damage"
    ],
    "triggerTypes": [
      "on_skill"
    ],
    "preferredUsers": [
      "melee",
      "attacker"
    ],
    "playstyleFits": [
      "dps",
      "frontline"
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
        "spin"
      ],
      "requiredRangeType": "melee",
      "requiresAttackPattern": true
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
