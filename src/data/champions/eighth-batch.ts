import type { ChampionProfile } from "@/lib/recommendation/types";

const ddragonVersion = "16.8.1";
const reviewedAt = "2026-04-25";

export const eighthBatchChampionProfiles: ChampionProfile[] = [
  {
    "id": "Alistar",
    "key": "12",
    "name": "牛头酋长",
    "iconPath": "/icons/champions/Alistar.png",
    "title": "阿利斯塔",
    "rangeType": "melee",
    "damagePatterns": [
      "skill"
    ],
    "combatTempos": [
      "burst"
    ],
    "scalingTags": [
      "tank",
      "heal_shield"
    ],
    "triggerTraits": [
      "cc_chain",
      "all_in"
    ],
    "survivalStyles": [
      "frontline",
      "heal"
    ],
    "utilityTags": [
      "engage",
      "peel",
      "lockdown"
    ],
    "coreMechanics": [
      "WQ 二连是最稳定的开团与控场手段，命中后能快速帮队友接伤害。",
      "被动依赖击飞、击退和附近单位阵亡叠层，混战越久回复价值越高。",
      "R 提供高额减伤，决定他能否顶着火力把先手窗口撑住。"
    ],
    "antiPatterns": [
      "如果关键进场或控制没有命中，近身站场后的承伤压力会明显上升。",
      "面对持续拉扯和远程消耗时，进场窗口被拖慢后较难稳定兑现整套技能。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "凯旋怒吼",
        "summary": "阿利斯塔在对敌方英雄造成晕眩或强制位移时，或附近有敌人阵亡时，会积攒他的怒吼层数。在层数攒满后，他会治疗他自己和所有附近的友方英雄。",
        "mechanics": [
          "heal",
          "ally_protect",
          "frontline"
        ]
      },
      {
        "slot": "q",
        "name": "大地粉碎",
        "summary": "阿利斯塔锤击地面，对附近的敌人造成魔法伤害并使他们浮空。",
        "mechanics": [
          "knockup",
          "aoe_control",
          "engage"
        ]
      },
      {
        "slot": "w",
        "name": "野蛮冲撞",
        "summary": "阿利斯塔冲撞目标，对其造成伤害并击退目标。",
        "mechanics": [
          "knockback",
          "dash",
          "pick"
        ]
      },
      {
        "slot": "e",
        "name": "践踏",
        "summary": "阿利斯塔践踏附近的敌方单位，无视单位的碰撞体积并在他伤害到一名敌方英雄时获得一层充能。在满层充能时，阿利斯塔的下次对敌方英雄发起的普攻将造成额外魔法伤害和晕眩效果。",
        "mechanics": [
          "stun",
          "aoe_damage",
          "frontline"
        ]
      },
      {
        "slot": "r",
        "name": "坚定意志",
        "summary": "阿利斯塔发出野性的咆哮，移除身上所有控制效果，并且持续时间内所受的物理和魔法伤害将减少。",
        "mechanics": [
          "cleanse",
          "damage_reduction",
          "frontline"
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
          "sourceName": "Data Dragon zh_CN Alistar",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Alistar.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Alistar",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Alistar.json",
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
    "id": "Nautilus",
    "key": "111",
    "name": "深海泰坦",
    "iconPath": "/icons/champions/Nautilus.png",
    "title": "诺提勒斯",
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
      "cc_chain",
      "all_in"
    ],
    "survivalStyles": [
      "frontline",
      "shield"
    ],
    "utilityTags": [
      "engage",
      "peel",
      "lockdown"
    ],
    "coreMechanics": [
      "Q 是最主要的开团手段，但乱出钩会让自己和队友都失去节奏。",
      "被动定身加 R 指向击飞，让他在单点锁人和连控上非常稳定。",
      "W 开启后的普攻压制很强，适合贴身黏住核心目标打持续干扰。"
    ],
    "antiPatterns": [
      "如果关键进场或控制没有命中，近身站场后的承伤压力会明显上升。",
      "面对持续拉扯和远程消耗时，进场窗口被拖慢后较难稳定兑现整套技能。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "排山倒海",
        "summary": "诺提勒斯对一名目标发起的第一次攻击会造成提升过的物理伤害并将其暂时禁锢。",
        "mechanics": [
          "root",
          "pick",
          "enhanced_attack"
        ]
      },
      {
        "slot": "q",
        "name": "疏通航道",
        "summary": "诺提勒斯向前抛出他的船锚。在与敌人碰撞后，船锚会将目标与诺提勒斯拉到一起，并造成魔法伤害。与地形碰撞时会将诺提勒斯拉向它。",
        "mechanics": [
          "hook",
          "engage",
          "pick"
        ]
      },
      {
        "slot": "w",
        "name": "泰坦之怒",
        "summary": "诺提勒斯获得一个临时护盾。当护盾存在时，他的攻击会对目标及目标周围的敌人造成持续伤害。",
        "mechanics": [
          "shield",
          "frontline",
          "aoe_damage"
        ]
      },
      {
        "slot": "e",
        "name": "暗流涌动",
        "summary": "诺提勒斯在他身边生成3道爆炸波纹。每道爆炸波纹都会伤害并减速敌人。",
        "mechanics": [
          "slow",
          "aoe_damage",
          "zone_control"
        ]
      },
      {
        "slot": "r",
        "name": "深海冲击",
        "summary": "诺提勒斯将一束冲击波打进土里，来追击敌方目标。这束冲击波会撕裂它上面的地表，将敌人震到半空中。当它命中目标时，冲击波会喷发，将他的目标震到半空中，并使目标晕眩。",
        "mechanics": [
          "knockup",
          "stun",
          "engage"
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
          "sourceName": "Data Dragon zh_CN Nautilus",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Nautilus.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Nautilus",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Nautilus.json",
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
    "id": "Rell",
    "key": "526",
    "name": "芮尔",
    "iconPath": "/icons/champions/Rell.png",
    "title": "镕铁少女",
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
      "cc_chain",
      "all_in"
    ],
    "survivalStyles": [
      "frontline",
      "shield"
    ],
    "utilityTags": [
      "engage",
      "peel",
      "lockdown",
      "mobility"
    ],
    "coreMechanics": [
      "W 两种形态切换决定她是开团还是撤退，不能只把它当成单纯位移。",
      "E 和 Q 让她更擅长打多人控制与破盾，团战人越密越容易打出上限。",
      "R 更像吸附留人和配合队友补控，不是单独进场就能秒人的技能。"
    ],
    "antiPatterns": [
      "如果关键进场或控制没有命中，近身站场后的承伤压力会明显上升。",
      "面对持续拉扯和远程消耗时，进场窗口被拖慢后较难稳定兑现整套技能。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "溃敌沉力",
        "summary": "芮尔的攻击和技能在命中时会造成额外魔法伤害并窃取护甲和魔法抗性。",
        "mechanics": [
          "frontline",
          "resist_shred",
          "enhanced_attack"
        ]
      },
      {
        "slot": "q",
        "name": "裂阵",
        "summary": "芮尔对一条直线上的单位们造成魔法伤害，打破他们的护盾并造成晕眩效果。",
        "mechanics": [
          "stun",
          "shield_break",
          "pick"
        ]
      },
      {
        "slot": "w",
        "name": "驭铁术：轰落",
        "summary": "骑乘状态：芮尔化马为甲，以披甲状态向下轰落，击飞敌人们并获得高额护盾值。在披甲状态下，她获得护甲、魔法抗性、攻击速度和攻击距离，但移动速度缓慢。 披甲状态：芮尔化甲为马，提供爆发性的移动速度并且她的下一次攻击会对敌人造成击飞效果。",
        "mechanics": [
          "knockup",
          "shield",
          "engage"
        ]
      },
      {
        "slot": "e",
        "name": "全速冲锋",
        "summary": "被动：芮尔获得非战斗状态下的移动速度。 主动：芮尔和一名友军获得不断升温的移动速度，这个加成会在朝着敌人们和彼此移动时提升至双倍。她的下次攻击会爆炸，造成魔法伤害。",
        "mechanics": [
          "move_speed",
          "ally_protect",
          "engage"
        ]
      },
      {
        "slot": "r",
        "name": "极涌",
        "summary": "芮尔喷发出有磁性的怒火，粗暴地将附近敌方英雄向她拉拽。随后芮尔会持续将附近敌人向她拖曳一小段时间，并持续造成魔法伤害。",
        "mechanics": [
          "pull",
          "aoe_control",
          "engage"
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
          "sourceName": "Data Dragon zh_CN Rell",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Rell.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Rell",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Rell.json",
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
