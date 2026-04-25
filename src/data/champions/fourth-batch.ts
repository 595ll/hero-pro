import type { ChampionProfile } from "@/lib/recommendation/types";

const ddragonVersion = "16.8.1";
const reviewedAt = "2026-04-25";

export const fourthBatchChampionProfiles: ChampionProfile[] = [
  {
    "id": "Ashe",
    "key": "22",
    "name": "艾希",
    "iconPath": "/icons/champions/Ashe.png",
    "title": "寒冰射手",
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
      "attack_speed",
      "crit"
    ],
    "triggerTraits": [
      "enhanced_attack",
      "multi_hit",
      "cc_chain"
    ],
    "survivalStyles": [],
    "utilityTags": [
      "vision",
      "lockdown",
      "peel"
    ],
    "coreMechanics": [
      "普攻减速是拉扯核心，决定她能否稳定续上风筝和追击节奏。",
      "Q 需要靠持续普攻叠层启动，一旦开起来就是主要持续输出来源。",
      "R 提供远距离先手和补控制，适合先定点开团再接队友火力。"
    ],
    "antiPatterns": [
      "如果关键保护技能交得过早，后续保人与拉扯价值会明显下降。",
      "面对强开或连续突进时，站位被压缩后很难完整打出保护与反手节奏。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "冰霜射击",
        "summary": "艾希的攻击会让目标减速，并使艾希对这些目标造成更高伤害。 艾希的暴击不会造成额外伤害，但会对目标施加一个强化版减速效果。",
        "mechanics": [
          "slow",
          "enhanced_attack",
          "kite"
        ]
      },
      {
        "slot": "q",
        "name": "射手的专注",
        "summary": "艾希会在攻击时聚集【全神贯注】效果。在【全神贯注】到达最大值时，艾希就能施放【射手的专注】来消耗掉所有【全神贯注】效果，以临时提升她的攻击速度，并在持续期间将她的普攻转变为一阵强力的飓风箭阵。",
        "mechanics": [
          "attack_speed",
          "enhanced_attack",
          "dps_window"
        ]
      },
      {
        "slot": "w",
        "name": "万箭齐发",
        "summary": "艾希向前方的锥形范围射出多支箭，对敌人造成额外伤害。也会触发冰霜射击的效果。",
        "mechanics": [
          "multi_hit",
          "poke",
          "slow"
        ]
      },
      {
        "slot": "e",
        "name": "鹰击长空",
        "summary": "艾希将她的猎鹰之灵派去执行侦查任务，可派往地图上的任意地点。",
        "mechanics": [
          "vision",
          "map_control"
        ]
      },
      {
        "slot": "r",
        "name": "魔法水晶箭",
        "summary": "艾希射出一支沿直线飞行的魔法水晶箭。如果水晶箭命中了一名敌方英雄，那么它会对该英雄造成伤害和晕眩效果，晕眩时长取决于水晶箭的飞行距离。此外，该英雄附近的敌方单位会受到伤害和减速效果。",
        "mechanics": [
          "stun",
          "long_range",
          "engage_followup"
        ]
      }
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-04-25",
      "reviewedBy": "GPT-5.4",
      "evidence": [
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon zh_CN Ashe",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Ashe.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Ashe",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Ashe.json",
          "version": "16.8.1",
          "locale": "en_US",
          "retrievedAt": "2026-04-25",
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
    "id": "Leona",
    "key": "89",
    "name": "蕾欧娜",
    "iconPath": "/icons/champions/Leona.png",
    "title": "曙光女神",
    "rangeType": "melee",
    "damagePatterns": [
      "skill"
    ],
    "combatTempos": [
      "burst"
    ],
    "scalingTags": [
      "tank"
    ],
    "triggerTraits": [
      "all_in",
      "cc_chain"
    ],
    "survivalStyles": [
      "frontline"
    ],
    "utilityTags": [
      "engage",
      "lockdown",
      "peel"
    ],
    "coreMechanics": [
      "E 命中后接 Q 是最稳定的开团链，单点锁人能力很强。",
      "W 决定她能站多久，开团前能不能先开 W 往往直接影响成败。",
      "被动更依赖队友补伤害，因此她最怕先手到了但队友跟不上。"
    ],
    "antiPatterns": [
      "如果关键进场或控制没有命中，近身站场后的承伤压力会明显上升。",
      "面对持续拉扯和远程消耗时，进场窗口被拖慢后较难稳定兑现整套技能。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "日光",
        "summary": "技能会在敌人身上施加【日光】效果，持续1.5秒。在此期间，蕾欧娜友军对这些目标造成伤害时，会触发【日光】，使目标受到额外的魔法伤害。",
        "mechanics": [
          "ally_synergy",
          "skill_mark",
          "team_setup"
        ]
      },
      {
        "slot": "q",
        "name": "破晓之盾",
        "summary": "蕾欧娜用盾进行下次普通攻击，造成额外魔法伤害并晕眩目标。",
        "mechanics": [
          "enhanced_attack",
          "stun",
          "pick"
        ]
      },
      {
        "slot": "w",
        "name": "日蚀",
        "summary": "蕾欧娜举起盾牌，提供伤害减免、护甲和魔法抗性。当持续时间首次结束时，如果附近有敌人，那么她会对其造成魔法伤害并延长效果的持续时间。",
        "mechanics": [
          "frontline",
          "damage_reduction",
          "aoe_damage"
        ]
      },
      {
        "slot": "e",
        "name": "天顶之刃",
        "summary": "蕾欧娜投掷一束日光，对直线上的所有敌人造成魔法伤害。当效果消失时，蕾欧娜会冲向最后一个被击中的敌人并使其无法移动。",
        "mechanics": [
          "root",
          "dash",
          "engage"
        ]
      },
      {
        "slot": "r",
        "name": "日炎耀斑",
        "summary": "蕾欧娜召唤一道太阳光束，对区域内的敌人造成伤害。区域中心的敌人会被晕眩，并且外围的敌人会被减速。",
        "mechanics": [
          "stun",
          "slow",
          "aoe_control"
        ]
      }
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-04-25",
      "reviewedBy": "GPT-5.4",
      "evidence": [
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon zh_CN Leona",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Leona.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Leona",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Leona.json",
          "version": "16.8.1",
          "locale": "en_US",
          "retrievedAt": "2026-04-25",
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
    "id": "Katarina",
    "key": "55",
    "name": "不祥之刃",
    "iconPath": "/icons/champions/Katarina.png",
    "title": "卡特琳娜",
    "rangeType": "melee",
    "damagePatterns": [
      "hybrid"
    ],
    "combatTempos": [
      "burst",
      "dps"
    ],
    "scalingTags": [
      "ap"
    ],
    "triggerTraits": [
      "reset",
      "all_in",
      "multi_hit"
    ],
    "survivalStyles": [
      "dash"
    ],
    "utilityTags": [
      "mobility"
    ],
    "coreMechanics": [
      "匕首落点就是输出路线，进场前先看能否安全吃到匕首，比盲目突脸更重要。",
      "E 负责重置位移与贴脸收刀，击杀或助攻后的刷新决定她的连杀能力。",
      "R 需要相对完整的站桩窗口，进场时机不对很容易被控制直接打断。"
    ],
    "antiPatterns": [
      "如果关键进场或控制没有命中，近身站场后的承伤压力会明显上升。",
      "面对持续拉扯和远程消耗时，进场窗口被拖慢后较难稳定兑现整套技能。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "贪婪",
        "summary": "每当一名在过去3秒被卡特琳娜所伤害的敌方英雄阵亡时，卡特琳娜的技能的冷却时间就会显著减少。 如果卡特琳娜拾起一把 匕首 ，她会用它来斩击附近的所有敌人以造成魔法伤害。",
        "mechanics": [
          "reset",
          "aoe_damage",
          "combo_reset"
        ]
      },
      {
        "slot": "q",
        "name": "弹射之刃",
        "summary": "卡特琳娜朝敌人扔出一把 匕首 ， 匕首 会弹射到附近敌人身上，然后落到地面上。",
        "mechanics": [
          "multi_hit",
          "dagger_setup",
          "poke"
        ]
      },
      {
        "slot": "w",
        "name": "伺机待发",
        "summary": "卡特琳娜获得爆发性的移动速度加成，同时投掷一把 匕首 到她正上方的空中。",
        "mechanics": [
          "move_speed",
          "dagger_setup",
          "reposition"
        ]
      },
      {
        "slot": "e",
        "name": "瞬步",
        "summary": "卡特琳娜立刻闪烁到目标处，如果目标是敌人，则她会对目标造成伤害，否则会对距她最近的敌人造成伤害。",
        "mechanics": [
          "dash",
          "all_in",
          "reposition"
        ]
      },
      {
        "slot": "r",
        "name": "死亡莲华",
        "summary": "卡特琳娜化身为一道剑刃飓风，以无与伦比的速度对周围最多三个敌方英雄造成巨量魔法伤害。",
        "mechanics": [
          "channel",
          "multi_hit",
          "burst_window"
        ]
      }
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-04-25",
      "reviewedBy": "GPT-5.4",
      "evidence": [
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon zh_CN Katarina",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Katarina.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Katarina",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Katarina.json",
          "version": "16.8.1",
          "locale": "en_US",
          "retrievedAt": "2026-04-25",
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
