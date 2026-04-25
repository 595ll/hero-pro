import type { ChampionProfile } from "@/lib/recommendation/types";

export const thirteenthBatchChampionProfiles: ChampionProfile[] = [
  {
    "id": "Aatrox",
    "key": "266",
    "name": "亚托克斯",
    "title": "暗裔剑魔",
    "rangeType": "melee",
    "damagePatterns": [
      "attack",
      "skill"
    ],
    "combatTempos": [
      "dps",
      "burst"
    ],
    "scalingTags": [
      "ad",
      "tank"
    ],
    "triggerTraits": [
      "multi_hit",
      "all_in"
    ],
    "survivalStyles": [
      "heal",
      "dash",
      "frontline"
    ],
    "utilityTags": [
      "engage",
      "lockdown",
      "mobility"
    ],
    "coreMechanics": [
      "Q 三段与甜点位决定他的主要伤害和压制区间，能否持续贴脸连段比单次爆发更关键。",
      "被动、E 被动和 R 增益共同把伤害转成回复，他越能在近身长回合里持续命中，就越能兑现站场上限。",
      "W 与位移衔接决定他能否把目标留在剑锋范围内，进场角度和拉扯路线直接影响整套命中率。"
    ],
    "antiPatterns": [
      "如果 Q 连段频繁空掉或被位移拉开，他的回复和持续压制都会明显下滑。",
      "面对高机动远程或稳定反手控制时，过早开 R 深入会让他还没打出回复就先被集火。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "赐死剑气",
        "summary": "每过一段时间，亚托克斯的下次普攻会造成额外 魔法伤害 ，并治疗亚托克斯，治疗量基于目标的最大生命值。",
        "mechanics": [
          "enhanced_attack",
          "heal",
          "tank_shred"
        ]
      },
      {
        "slot": "q",
        "name": "暗裔利刃",
        "summary": "亚托克斯向下猛砸他的巨剑，并造成物理伤害。他可以挥击三次，每次都有一个不同的范围效果。",
        "mechanics": [
          "multi_hit",
          "knockup",
          "dps_window"
        ]
      },
      {
        "slot": "w",
        "name": "恶火束链",
        "summary": "亚托克斯猛砸地面，对命中的第一个敌人造成伤害。英雄和大型野怪需要快速离开被影响的区域，否则就会被拖拽到中心并再次受到伤害。",
        "mechanics": [
          "pull",
          "pick",
          "zone_control"
        ]
      },
      {
        "slot": "e",
        "name": "暗影冲决",
        "summary": "被动效果：亚托克斯会在对敌方英雄造成伤害时治疗自身。主动效果：他会朝一个方向突进。",
        "mechanics": [
          "heal",
          "dash",
          "reposition"
        ]
      },
      {
        "slot": "r",
        "name": "大灭",
        "summary": "亚托克斯现出他的恶魔形态，恐惧附近的敌方小兵，并获得攻击力、治疗效果提升、以及移动速度。如果他参与了一次击杀，这个效果就会延长。",
        "mechanics": [
          "move_speed",
          "attack_damage",
          "all_in"
        ]
      }
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-04-26",
      "reviewedBy": "GPT-5.4",
      "evidence": [
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon zh_CN Aatrox",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Aatrox.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-26",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Aatrox",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Aatrox.json",
          "version": "16.8.1",
          "locale": "en_US",
          "retrievedAt": "2026-04-26",
          "confidence": "high",
          "note": "英文技能描述与机制边界的辅助校对来源。"
        }
      ],
      "notes": [
        "画像标签依据官方技能文本与机制特征整理。"
      ]
    }
  },
  {
    "id": "KogMaw",
    "key": "96",
    "name": "克格莫",
    "title": "深渊巨口",
    "rangeType": "ranged",
    "damagePatterns": [
      "attack"
    ],
    "combatTempos": [
      "dps",
      "poke"
    ],
    "scalingTags": [
      "ad",
      "attack_speed"
    ],
    "triggerTraits": [
      "enhanced_attack"
    ],
    "survivalStyles": [],
    "utilityTags": [
      "vision"
    ],
    "coreMechanics": [
      "W 强化普攻是整套画像核心，能否在安全距离内持续平 A 决定他的主要输出上限。",
      "Q 的双抗削减与额外攻速会显著放大长回合收益，因此他很吃前排牵制和持续开火时间。",
      "R 更像远程补伤害与收尾工具，真正强势区间仍来自站桩输出而不是远距离单点消耗。"
    ],
    "antiPatterns": [
      "如果输出环境被持续打断或被迫频繁走位，他最关键的持续普攻收益会明显缩水。",
      "面对强开和高爆发时，缺少保护会让他很难把 W 的射程和 on-hit 价值稳定打满。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "来自艾卡西亚的惊喜",
        "summary": "在死后4秒，克格莫会爆炸，对周围的敌人造成真实伤害。",
        "mechanics": [
          "true_damage",
          "death_effect",
          "aoe_damage"
        ]
      },
      {
        "slot": "q",
        "name": "腐蚀唾液",
        "summary": "克格莫发射一团腐蚀性物质，对目标造成魔法伤害，并暂时腐蚀目标的护甲和魔法抗性。克格莫还会获得额外攻速。",
        "mechanics": [
          "attack_speed",
          "armor_shred",
          "magic_shred"
        ]
      },
      {
        "slot": "w",
        "name": "生化弹幕",
        "summary": "克格莫的攻击距离得到了提升，并且能够对目标造成额外的魔法伤害，伤害值基于目标的最大生命值。",
        "mechanics": [
          "on_hit",
          "attack_range",
          "tank_shred"
        ]
      },
      {
        "slot": "e",
        "name": "虚空淤泥",
        "summary": "克格莫抛射出一团特殊的分泌物，对经过或停留在分泌物上的敌人造成伤害和减速效果。",
        "mechanics": [
          "slow",
          "zone_control",
          "poke"
        ]
      },
      {
        "slot": "r",
        "name": "活体大炮",
        "summary": "克格莫发射一枚射程极远的活体炮弹，让被命中的敌人暴露在己方视野中，并对目标造成魔法伤害（对低血量目标的伤害会显著提升）。 在短时间内连续使用活体大炮，将消耗额外的法力值。",
        "mechanics": [
          "long_range",
          "execute",
          "vision"
        ]
      }
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-04-26",
      "reviewedBy": "GPT-5.4",
      "evidence": [
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon zh_CN KogMaw",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/KogMaw.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-26",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US KogMaw",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/KogMaw.json",
          "version": "16.8.1",
          "locale": "en_US",
          "retrievedAt": "2026-04-26",
          "confidence": "high",
          "note": "英文技能描述与机制边界的辅助校对来源。"
        }
      ],
      "notes": [
        "画像标签依据官方技能文本与机制特征整理。"
      ]
    }
  }
];
