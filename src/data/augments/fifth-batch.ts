import type { AugmentProfile } from "@/lib/recommendation/types";

const reviewedAt = "2026-04-25";

export const fifthBatchAugmentProfiles: AugmentProfile[] = [
  {
    "id": "141",
    "name": "All For You",
    "localizedName": "全心为你",
    "iconPath": "/icons/augments/141.png",
    "rarity": "gold",
    "summary": "你对友军施加的治疗和护盾效果提高 30%。",
    "officialDescription": "Your Heals and Shields are 30% stronger when used on an ally.",
    "rewardTypes": [
      "utility",
      "survival"
    ],
    "triggerTypes": [
      "passive",
      "on_skill"
    ],
    "preferredUsers": [
      "caster"
    ],
    "playstyleFits": [
      "utility"
    ],
    "riskTags": [
      "team_comp_dependent"
    ],
    "positiveSignals": [
      "适合能稳定用技能循环触发收益的英雄。",
      "当英雄需要更长站场或更高容错来兑现输出与控制时，这类收益更稳定。"
    ],
    "trapSignals": [
      "如果英雄技能命中率不足或触发窗口太短，这类收益很难稳定兑现。",
      "如果队友无法稳定承接增益或阵容缺少配合点，这类团队向收益会变弱。"
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
    "id": "180",
    "name": "Big Brain",
    "localizedName": "超强大脑",
    "iconPath": "/icons/augments/180.png",
    "rarity": "gold",
    "summary": "每个回合开始时，获得一个相当于 3 倍法术强度的护盾。",
    "officialDescription": "At the start of each round, gain Shield for every 1 Ability Power.",
    "rewardTypes": [
      "survival"
    ],
    "triggerTypes": [
      "passive"
    ],
    "preferredUsers": [
      "caster",
      "tank"
    ],
    "playstyleFits": [
      "dps",
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
  },
  {
    "id": "87",
    "name": "Typhoon",
    "localizedName": "台风",
    "iconPath": "/icons/augments/87.png",
    "rarity": "silver",
    "summary": "你的攻击会对额外目标发射一根弩箭，造成 30% 伤害并附带攻击特效。",
    "officialDescription": "Your Attacks fire a bolt at an additional target dealing reduced damage and applying on-hit effects.",
    "rewardTypes": [
      "damage",
      "utility"
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
  }
];
