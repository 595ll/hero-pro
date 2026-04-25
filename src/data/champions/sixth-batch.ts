import type { ChampionProfile } from "@/lib/recommendation/types";

const ddragonVersion = "16.8.1";
const reviewedAt = "2026-04-25";

export const sixthBatchChampionProfiles: ChampionProfile[] = [
  {
    "id": "Soraka",
    "key": "16",
    "name": "索拉卡",
    "iconPath": "/icons/champions/Soraka.png",
    "title": "众星之子",
    "rangeType": "ranged",
    "damagePatterns": [
      "skill"
    ],
    "combatTempos": [
      "poke"
    ],
    "scalingTags": [
      "ap",
      "haste",
      "heal_shield"
    ],
    "triggerTraits": [
      "high_cast_frequency",
      "cc_chain"
    ],
    "survivalStyles": [
      "heal"
    ],
    "utilityTags": [
      "peel",
      "lockdown"
    ],
    "coreMechanics": [
      "Q 命中后续航会明显提升，所以能不能稳中 Q 决定她能站多久。",
      "W 是最直接的保核手段，但会消耗自己血线，资源分配非常关键。",
      "E 和 R 都偏救场，前者断连招，后者抬全队血线，适合处理突发爆发。"
    ],
    "antiPatterns": [
      "如果关键保护技能交得过早，后续保人与拉扯价值会明显下降。",
      "面对强开或连续突进时，站位被压缩后很难完整打出保护与反手节奏。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "拯救",
        "summary": "索拉卡在朝着附近低血量的友方英雄移动时会提升移动速度。",
        "mechanics": [
          "move_speed",
          "ally_protect",
          "peel"
        ]
      },
      {
        "slot": "q",
        "name": "流星坠落",
        "summary": "一颗流星从天而降，落在目标地点，造成魔法伤害，并对区域中心的敌人造成减速效果。如果一名敌人被此技能命中，那么索拉卡就会回复生命值。",
        "mechanics": [
          "poke",
          "slow",
          "heal"
        ]
      },
      {
        "slot": "w",
        "name": "星之灌注",
        "summary": "索拉卡牺牲自己的一部分生命值来治疗一个友方英雄。",
        "mechanics": [
          "heal",
          "ally_protect",
          "single_target_support"
        ]
      },
      {
        "slot": "e",
        "name": "星体结界",
        "summary": "在目标区域创造一个结界，沉默结界中的所有敌人。当结界消散时，仍在结界内的敌人会被禁锢。",
        "mechanics": [
          "silence",
          "root",
          "zone_control"
        ]
      },
      {
        "slot": "r",
        "name": "祈愿",
        "summary": "索拉卡让友军充满希望，立刻使她和所有友方英雄回复生命值。",
        "mechanics": [
          "heal",
          "global_support",
          "team_save"
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
          "sourceName": "Data Dragon zh_CN Soraka",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Soraka.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Soraka",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Soraka.json",
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
    "id": "Brand",
    "key": "63",
    "name": "布兰德",
    "iconPath": "/icons/champions/Brand.png",
    "title": "复仇焰魂",
    "rangeType": "ranged",
    "damagePatterns": [
      "skill"
    ],
    "combatTempos": [
      "burst",
      "dps",
      "poke"
    ],
    "scalingTags": [
      "ap",
      "haste"
    ],
    "triggerTraits": [
      "multi_hit",
      "high_cast_frequency"
    ],
    "survivalStyles": [],
    "utilityTags": [
      "lockdown"
    ],
    "coreMechanics": [
      "被动三层爆炸是主要伤害放大器，技能命中顺序决定整套爆发上限。",
      "Q 只有在目标已被点燃时才会稳定眩晕，常先用 W 或 E 铺被动再接控制。",
      "R 在近身或多人环境里弹射更稳定，适合团战和狭窄地形快速灌满伤害。"
    ],
    "antiPatterns": [
      "如果关键技能命中率不足，英雄的主要伤害与控制价值会明显下降。",
      "面对高强度突进或拉扯时，技能循环被打断后很难稳定兑现回合强度。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "炽热之焰",
        "summary": "布兰德的技能会对他的目标施加【烈焰焚身】效果，在4秒里持续造成伤害，最多可叠加3次。如果布兰德击杀了身上带有【烈焰焚身】的敌人，那么他会回复法力值。当【炽热之焰】在一名英雄或大型野怪身上叠至满层时，它会变得不稳定。它会在2秒内爆炸，在目标附近的区域施加法术特效并造成大量伤害。",
        "mechanics": [
          "damage_over_time",
          "stacking",
          "aoe_damage"
        ]
      },
      {
        "slot": "q",
        "name": "火焰烙印",
        "summary": "布兰德向前方放出一团可造成魔法伤害的火球。如果目标带有【烈焰焚身】效果，那么【Q火焰烙印】将使目标晕眩。",
        "mechanics": [
          "skillshot",
          "stun",
          "combo_setup"
        ]
      },
      {
        "slot": "w",
        "name": "烈焰之柱",
        "summary": "在短暂的延迟后，布兰德会在目标区域创造一根烈焰之柱，来对范围内的敌方单位造成魔法伤害。带有【烈焰焚身】效果的单位会额外受到25%伤害。",
        "mechanics": [
          "aoe_damage",
          "burst_window",
          "zone_control"
        ]
      },
      {
        "slot": "e",
        "name": "烈火燃烧",
        "summary": "布兰德在目标身上引发一阵强力的爆裂至附近的敌人处，造成魔法伤害。如果目标带有【烈焰焚身】效果，那么【E烈火燃烧】的扩散距离翻倍。",
        "mechanics": [
          "spread",
          "multi_hit",
          "combo_setup"
        ]
      },
      {
        "slot": "r",
        "name": "烈焰风暴",
        "summary": "布兰德释放一颗破坏力极强的火焰之种，火焰之种会在布兰德和附近敌人之间弹跳至多5次，每次弹跳时对敌人造成魔法伤害。弹跳会优先以带有即将满层的【炽热之焰】效果的英雄为目标。如果目标带有【烈焰焚身】效果，那么【R烈焰风暴】将使目标短暂减速。",
        "mechanics": [
          "bounce",
          "multi_hit",
          "aoe_damage"
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
          "sourceName": "Data Dragon zh_CN Brand",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Brand.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Brand",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Brand.json",
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
    "id": "MasterYi",
    "key": "11",
    "name": "易",
    "iconPath": "/icons/champions/MasterYi.png",
    "title": "无极剑圣",
    "rangeType": "melee",
    "damagePatterns": [
      "attack"
    ],
    "combatTempos": [
      "dps"
    ],
    "scalingTags": [
      "ad",
      "attack_speed"
    ],
    "triggerTraits": [
      "enhanced_attack",
      "multi_hit",
      "reset",
      "all_in"
    ],
    "survivalStyles": [
      "heal"
    ],
    "utilityTags": [
      "mobility"
    ],
    "coreMechanics": [
      "普攻与双重打击是持续输出核心，能否稳定站住决定上限。",
      "Q 既是躲技能手段也是切入补伤害工具，乱交会让后续追击断档。",
      "R 一旦配合击杀刷新就能连续滚雪球，因此最看残局收割和进场时机。"
    ],
    "antiPatterns": [
      "如果关键进场或控制没有命中，近身站场后的承伤压力会明显上升。",
      "面对持续拉扯和远程消耗时，进场窗口被拖慢后较难稳定兑现整套技能。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "双重打击",
        "summary": "易大师每攻击数次，就会同时对目标进行2次打击。",
        "mechanics": [
          "enhanced_attack",
          "multi_hit",
          "dps_window"
        ]
      },
      {
        "slot": "q",
        "name": "阿尔法突袭",
        "summary": "易以肉眼难以发觉的速度穿梭于战场，对多个敌人造成物理伤害，同时处于不可被选取的状态下。阿尔法突袭可以暴击，并对野怪造成额外物理伤害。普通攻击可以减少阿尔法突袭的冷却时间。",
        "mechanics": [
          "multi_hit",
          "untargetable",
          "cooldown_cycle",
          "attack_skill_loop"
        ]
      },
      {
        "slot": "w",
        "name": "冥想",
        "summary": "易通过集中念力来活化他的身体，从而回复生命值，并暂时减少所受的伤害。此外，易还会为双重打击充能，并暂停无极剑道和高原血统的持续时长。",
        "mechanics": [
          "heal",
          "damage_reduction",
          "channel"
        ]
      },
      {
        "slot": "e",
        "name": "无极剑道",
        "summary": "提供额外真实伤害至普攻",
        "mechanics": [
          "enhanced_attack",
          "true_damage",
          "all_in"
        ]
      },
      {
        "slot": "r",
        "name": "高原血统",
        "summary": "易以超乎想象的身法进行移动，短时间内提升移动速度和攻击速度，并免疫减速效果。该技能激活期间，易在参与击杀一名敌方英雄的同时，会延长该技能的持续时间。在击杀和助攻后，也会被动地减少易其它技能的冷却时间。",
        "mechanics": [
          "attack_speed",
          "move_speed",
          "reset"
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
          "sourceName": "Data Dragon zh_CN Master Yi",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/MasterYi.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Master Yi",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/MasterYi.json",
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
