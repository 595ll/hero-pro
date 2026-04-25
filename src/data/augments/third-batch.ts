import type { AugmentProfile } from "@/lib/recommendation/types";

const reviewedAt = "2026-04-25";

export const thirdBatchAugmentProfiles: AugmentProfile[] = [
  {
    "id": "97",
    "name": "Witchful Thinking",
    "localizedName": "巫师式思考",
    "iconPath": "/icons/augments/97.png",
    "rarity": "silver",
    "summary": "获得 70 法术强度。",
    "officialDescription": "Gain 70 ability power.",
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
    "id": "76",
    "name": "Sonic Boom",
    "localizedName": "天音爆",
    "iconPath": "/icons/augments/76.png",
    "rarity": "silver",
    "summary": "为友军提供增益、治疗或护盾时，会对其附近敌人造成 30 到 150 真实伤害，并减速 30%，持续 2 秒。",
    "officialDescription": "Buffing, healing, or shielding your ally deals damage to nearby enemies and slows them.",
    "rewardTypes": [
      "utility",
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
      "utility"
    ],
    "riskTags": [
      "team_comp_dependent"
    ],
    "positiveSignals": [
      "适合能稳定用技能循环触发收益的英雄。",
      "当英雄能把额外伤害或成长稳定转成压制与击杀时，这类收益最容易兑现。"
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
    "id": "136",
    "name": "Slap Around",
    "localizedName": "扇巴掌",
    "iconPath": "/icons/augments/136.png",
    "rarity": "silver",
    "summary": "每当你定身或缚地一个敌人时，都会获得 20 适应之力，持续到回合结束，并可无限叠加。",
    "officialDescription": "Each time you immobilize or ground an enemy, gain 20 adaptive force for the round, stacking infinitely.",
    "rewardTypes": [
      "damage"
    ],
    "triggerTypes": [
      "on_cc"
    ],
    "preferredUsers": [
      "caster",
      "tank",
      "melee",
      "ranged"
    ],
    "playstyleFits": [
      "burst",
      "utility"
    ],
    "riskTags": [],
    "positiveSignals": [
      "适合能频繁打出控制并把触发窗口稳定兑现的英雄。",
      "当英雄能把额外伤害或成长稳定转成压制与击杀时，这类收益最容易兑现。"
    ],
    "trapSignals": [
      "如果英雄控制频率不足或很难抓到触发窗口，这类收益就会明显下滑。",
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
    "id": "58",
    "name": "Mystic Punch",
    "localizedName": "秘术冲拳",
    "iconPath": "/icons/augments/58.png",
    "rarity": "prismatic",
    "summary": "攻击特效会使你的各项冷却时间缩短 1.25 秒。",
    "officialDescription": "On-hit effects reduce your cooldowns by 1.25 seconds.",
    "rewardTypes": [
      "damage",
      "utility"
    ],
    "triggerTypes": [
      "on_attack"
    ],
    "preferredUsers": [
      "attacker",
      "melee"
    ],
    "playstyleFits": [
      "dps",
      "burst"
    ],
    "riskTags": [
      "execution_heavy"
    ],
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
