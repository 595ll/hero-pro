import type { ChampionProfile } from "@/lib/recommendation/types";

const ddragonVersion = "16.8.1";
const reviewedAt = "2026-04-25";

export const firstBatchChampionProfiles: ChampionProfile[] = [
  {
    "id": "Lux",
    "key": "99",
    "name": "拉克丝",
    "iconPath": "/icons/champions/Lux.png",
    "title": "光辉女郎",
    "rangeType": "ranged",
    "damagePatterns": [
      "skill"
    ],
    "combatTempos": [
      "burst",
      "poke"
    ],
    "scalingTags": [
      "ap",
      "haste"
    ],
    "triggerTraits": [
      "multi_hit",
      "cc_chain",
      "zone_control"
    ],
    "survivalStyles": [
      "shield"
    ],
    "utilityTags": [
      "lockdown",
      "peel"
    ],
    "coreMechanics": [
      "Q 命中是整套爆发的起点，没中时更适合继续用 E 拉扯和消耗。",
      "E 是主要清线与远程压血工具，也是她最稳定的探草和控区手段。",
      "R 更适合接在控制或被动铺垫之后补斩杀，而不是盲狙当唯一输出来源。"
    ],
    "antiPatterns": [
      "如果关键保护技能交得过早，后续保人与拉扯价值会明显下降。",
      "面对强开或连续突进时，站位被压缩后很难完整打出保护与反手节奏。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "光芒四射",
        "summary": "拉克丝的伤害类技能会对敌人施加【启明】效果，持续若干秒。拉克丝的下一次攻击将会消耗【启明】效果，来对目标造成额外魔法伤害（基于拉克丝等级）。",
        "mechanics": [
          "skill_mark",
          "bonus_damage"
        ]
      },
      {
        "slot": "q",
        "name": "光之束缚",
        "summary": "拉克丝释放一个光球，束缚并伤害最多两个敌方单位。",
        "mechanics": [
          "skillshot",
          "root",
          "multi_target"
        ]
      },
      {
        "slot": "w",
        "name": "曲光屏障",
        "summary": "拉克丝掷出她的魔杖，魔杖所触及的友方单位会有光环环绕，保护他们免受敌方伤害。",
        "mechanics": [
          "shield",
          "ally_protect"
        ]
      },
      {
        "slot": "e",
        "name": "透光奇点",
        "summary": "朝一个区域发射一个不规则的扭曲之光，减速附近敌人。拉克丝可以引爆它，对敌人造成区域性伤害。",
        "mechanics": [
          "zone_control",
          "slow",
          "aoe_damage"
        ]
      },
      {
        "slot": "r",
        "name": "终极闪光",
        "summary": "在积蓄能量之后，拉克丝发射一束光波，对该区域所有目标造成伤害。此外，该技能触发拉克丝的被动技能并刷新光芒四射减益的持续时间。",
        "mechanics": [
          "long_range",
          "burst",
          "execute_followup"
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
          "sourceName": "Data Dragon zh_CN Lux",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Lux.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Lux",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Lux.json",
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
    "id": "Ezreal",
    "key": "81",
    "name": "探险家",
    "iconPath": "/icons/champions/Ezreal.png",
    "title": "伊泽瑞尔",
    "rangeType": "ranged",
    "damagePatterns": [
      "hybrid"
    ],
    "combatTempos": [
      "poke",
      "dps"
    ],
    "scalingTags": [
      "ad",
      "ap",
      "haste"
    ],
    "triggerTraits": [
      "high_cast_frequency",
      "enhanced_attack",
      "multi_hit"
    ],
    "survivalStyles": [
      "dash"
    ],
    "utilityTags": [
      "mobility"
    ],
    "coreMechanics": [
      "Q 是最主要输出点，也是技能循环发动机，命中率直接决定强度上限。",
      "W 接普攻或技能能抬高一轮爆发，适合在拉扯中穿插打出短连招。",
      "E 是安全位移与追击工具，保住 E 往往比贪一段输出更重要。"
    ],
    "antiPatterns": [
      "如果关键技能命中率不足，英雄的主要伤害与控制价值会明显下降。",
      "面对高强度突进或拉扯时，技能循环被打断后很难稳定兑现回合强度。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "咒能高涨",
        "summary": "伊泽瑞尔的任何技能在击中目标后，都会提升他的攻击速度（最多可叠加5次）。",
        "mechanics": [
          "stacking",
          "attack_speed"
        ]
      },
      {
        "slot": "q",
        "name": "秘术射击",
        "summary": "伊泽瑞尔发射一枚能量弹，如果它击中一个敌方单位，那么它将略微减少伊泽瑞尔所有技能的冷却时间。",
        "mechanics": [
          "skillshot",
          "cooldown_refund",
          "spam_spell",
          "q_core"
        ]
      },
      {
        "slot": "w",
        "name": "精华跃动",
        "summary": "伊泽瑞尔发射一个法球，法球会附着在命中的第一个敌方英雄或战略点上。如果伊泽瑞尔用技能或攻击命中一个法球时，会将它引爆来造成伤害。",
        "mechanics": [
          "mark",
          "detonation",
          "combo_setup"
        ]
      },
      {
        "slot": "e",
        "name": "奥术跃迁",
        "summary": "伊泽瑞尔传送到附近的目标区域，并向最近的敌人发射一束自动寻敌的魔法箭。优先选择被【精华跃动】击中的敌人。",
        "mechanics": [
          "dash",
          "targeting",
          "reposition"
        ]
      },
      {
        "slot": "r",
        "name": "精准弹幕",
        "summary": "伊泽瑞尔蓄力然后向目标区域释放长程能量波，对穿过的敌人造成高额伤害（对小兵和非史诗级野怪的伤害会减少）。",
        "mechanics": [
          "long_range",
          "aoe_damage",
          "poke_finisher"
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
          "sourceName": "Data Dragon zh_CN Ezreal",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Ezreal.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Ezreal",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Ezreal.json",
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
    "id": "Darius",
    "key": "122",
    "name": "德莱厄斯",
    "iconPath": "/icons/champions/Darius.png",
    "title": "诺克萨斯之手",
    "rangeType": "melee",
    "damagePatterns": [
      "hybrid"
    ],
    "combatTempos": [
      "burst",
      "dps"
    ],
    "scalingTags": [
      "ad",
      "tank"
    ],
    "triggerTraits": [
      "all_in",
      "reset",
      "enhanced_attack"
    ],
    "survivalStyles": [
      "heal",
      "frontline"
    ],
    "utilityTags": [
      "engage",
      "lockdown"
    ],
    "coreMechanics": [
      "外圈 Q 是换血和续航核心，命中外刃越稳定，站场能力越强。",
      "流血层数越高，W、E 接普攻与追击的压制力越强。",
      "R 依赖血怒与斩杀线，击杀刷新后能连续收割残局。"
    ],
    "antiPatterns": [
      "如果关键进场或控制没有命中，近身站场后的承伤压力会明显上升。",
      "面对持续拉扯和远程消耗时，进场窗口被拖慢后较难稳定兑现整套技能。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "出血",
        "summary": "德莱厄斯的攻击和伤害技能会导致敌人流血，在5秒里持续造成物理伤害，最多叠加5次。在他的目标达到最大层数后，德莱厄斯会进入激怒状态并获得巨额攻击力。",
        "mechanics": [
          "bleed",
          "stacking",
          "attack_damage_gain"
        ]
      },
      {
        "slot": "q",
        "name": "大杀四方",
        "summary": "德莱厄斯蓄力然后将他的斧头挥舞成一个大圈。被斧刃击中的敌人会比被斧柄击中的敌人受到更多伤害。德莱厄斯会基于被斧刃击中的敌方英雄或大型野怪的数量来获得治疗效果。",
        "mechanics": [
          "aoe_damage",
          "heal",
          "outer_hit_bonus",
          "spin"
        ]
      },
      {
        "slot": "w",
        "name": "致残打击",
        "summary": "德莱厄斯的下一次攻击会打向敌人的大动脉。在目标流血不止的同时，目标的移动速度也会被减缓。",
        "mechanics": [
          "enhanced_attack",
          "slow"
        ]
      },
      {
        "slot": "e",
        "name": "无情铁手",
        "summary": "德莱厄斯磨利他的巨斧，被动地让他的物理伤害无视目标一部分护甲。在主动施放时，德莱厄斯会用斧头上的钩子横扫他的敌人，并将他们拉到德莱厄斯身边。",
        "mechanics": [
          "armor_penetration",
          "pull",
          "engage"
        ]
      },
      {
        "slot": "r",
        "name": "诺克萨斯断头台",
        "summary": "德莱厄斯跃向目标英雄并进行致命打击，造成真实伤害。目标身上的每层出血效果都会提升这个技能的伤害。如果诺克萨斯断头台完成了一次击杀，那么它的冷却时间会暂时被重置。",
        "mechanics": [
          "execute",
          "true_damage",
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
          "sourceName": "Data Dragon zh_CN Darius",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Darius.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Darius",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Darius.json",
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
