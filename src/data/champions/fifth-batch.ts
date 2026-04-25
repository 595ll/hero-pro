import type { ChampionProfile } from "@/lib/recommendation/types";

const ddragonVersion = "16.8.1";
const reviewedAt = "2026-04-25";

export const fifthBatchChampionProfiles: ChampionProfile[] = [
  {
    "id": "Lulu",
    "key": "117",
    "name": "璐璐",
    "iconPath": "/icons/champions/Lulu.png",
    "title": "仙灵女巫",
    "rangeType": "ranged",
    "damagePatterns": [
      "hybrid"
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
      "enhanced_attack",
      "cc_chain"
    ],
    "survivalStyles": [
      "shield"
    ],
    "utilityTags": [
      "peel",
      "mobility",
      "lockdown"
    ],
    "coreMechanics": [
      "E+Q 是最稳的消耗和留人起手，换血时既能打伤害也能兼顾保护。",
      "W 的目标选择决定玩法：给队友是提速增伤，给敌人是反手断节奏。",
      "R 更像救场和反开技能，适合等对手真正贴脸后再抬血线和击飞。"
    ],
    "antiPatterns": [
      "如果关键保护技能交得过早，后续保人与拉扯价值会明显下降。",
      "面对强开或连续突进时，站位被压缩后很难完整打出保护与反手节奏。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "皮克斯，仙灵伙伴",
        "summary": "每当皮克斯正在跟随的英雄进行攻击时，皮克斯就会发射魔法飞弹。这些飞弹会自动寻敌，但也会被其它单位所拦截。",
        "mechanics": [
          "enhanced_attack",
          "bonus_damage",
          "ally_synergy"
        ]
      },
      {
        "slot": "q",
        "name": "闪耀长枪",
        "summary": "璐璐和皮克斯各自发射一个穿刺飞弹，对命中的所有敌人造成伤害和重度减速效果。",
        "mechanics": [
          "skillshot",
          "poke",
          "slow"
        ]
      },
      {
        "slot": "w",
        "name": "奇思妙想",
        "summary": "如果对友军施放，会暂时增加目标友军的攻击速度和移动速度。如果对敌人施放，会将一名敌方英雄变成可爱的动物，使其无法攻击或施法。",
        "mechanics": [
          "buff",
          "polymorph",
          "move_speed"
        ]
      },
      {
        "slot": "e",
        "name": "帮忙，皮克斯！",
        "summary": "如果对友军施放，会命令皮克斯跳到一名友军身上进行保护，之后会跟随并协助目标（而不是璐璐）进行攻击。如果对敌人施放，皮克斯会跳到敌人身上造成伤害，之后会跟随并提供目标的视野。",
        "mechanics": [
          "shield",
          "ally_protect",
          "vision"
        ]
      },
      {
        "slot": "r",
        "name": "狂野生长",
        "summary": "璐璐让她的友军变大，击飞目标附近的敌人，同时为她的友军提供大量生命值加成。接下来的数秒内，该友军会获得一个减少附近敌人速度的光环。",
        "mechanics": [
          "knockup",
          "bonus_health",
          "peel"
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
          "sourceName": "Data Dragon zh_CN Lulu",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Lulu.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Lulu",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Lulu.json",
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
    "id": "Swain",
    "key": "50",
    "name": "斯维因",
    "iconPath": "/icons/champions/Swain.png",
    "title": "诺克萨斯统领",
    "rangeType": "ranged",
    "damagePatterns": [
      "skill"
    ],
    "combatTempos": [
      "dps",
      "poke"
    ],
    "scalingTags": [
      "ap",
      "haste",
      "tank"
    ],
    "triggerTraits": [
      "high_cast_frequency",
      "multi_hit",
      "cc_chain"
    ],
    "survivalStyles": [
      "heal",
      "frontline"
    ],
    "utilityTags": [
      "lockdown",
      "vision"
    ],
    "coreMechanics": [
      "E 命中拉回后是最稳的连招起点，决定他能否打出完整持续伤害。",
      "Q 贴脸时伤害最高，因此他越能黏住目标，回合压制越强。",
      "R 开启后要尽量延长站场时间，站得越久越能把回复和范围伤害打满。"
    ],
    "antiPatterns": [
      "如果关键进场或控制没有命中，近身站场后的承伤压力会明显上升。",
      "面对持续拉扯和远程消耗时，进场窗口被拖慢后较难稳定兑现整套技能。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "狂食鸦群",
        "summary": "斯维因的鸦群会收集 魂屑 来治疗斯维因并永久提升他的最大生命值。",
        "mechanics": [
          "heal",
          "stacking",
          "max_health"
        ]
      },
      {
        "slot": "q",
        "name": "解脱之触",
        "summary": "斯维因释放多道恶魔之力，这种力量可以穿透命中的目标。被一道以上的恶魔之力所命中的敌人，会受到基于恶魔之力数量的更多伤害。",
        "mechanics": [
          "multi_hit",
          "burst_window",
          "dps_window"
        ]
      },
      {
        "slot": "w",
        "name": "帝国视界",
        "summary": "斯维因睁开恶魔之眼来对敌人造成伤害和减速效果。在命中敌方英雄时会使该英雄显形，并为斯维因提供一片魂屑。",
        "mechanics": [
          "vision",
          "slow",
          "long_range"
        ]
      },
      {
        "slot": "e",
        "name": "永不复行",
        "summary": "斯维因释放一道恶魔之手向前击出。手臂随后会返回至斯维因处，并禁锢它命中的敌人。斯维因之后可以选择将所有被禁锢的英雄们拉拽得更靠近他。这个技能在【恶魔升华】期间会有一个更短的冷却时间。",
        "mechanics": [
          "root",
          "pull",
          "pick"
        ]
      },
      {
        "slot": "r",
        "name": "恶魔升华",
        "summary": "斯维因变身为恶魔并从附近的敌方英雄、小兵和中立野怪身上汲取生命值。斯维因能施放【恶魔耀光】来用一道魂焰新星残害并减速附近的敌人们。这个形态可以在斯维因汲取敌方英雄时无限持续。",
        "mechanics": [
          "drain",
          "aoe_damage",
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
          "sourceName": "Data Dragon zh_CN Swain",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Swain.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Swain",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Swain.json",
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
    "id": "Vayne",
    "key": "67",
    "name": "薇恩",
    "iconPath": "/icons/champions/Vayne.png",
    "title": "暗夜猎手",
    "rangeType": "ranged",
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
      "all_in"
    ],
    "survivalStyles": [
      "dash",
      "stealth"
    ],
    "utilityTags": [
      "mobility"
    ],
    "coreMechanics": [
      "三环是主要持续伤害来源，能否持续对同一目标输出决定上限。",
      "Q 是核心拉扯与补伤害技能，翻滚后的位置往往比那一下额外伤害更重要。",
      "R 开启后更适合围绕隐身和短位移反复换角度，打残局时最强。"
    ],
    "antiPatterns": [
      "如果输出环境被持续打断，普攻节奏和持续伤害会明显下滑。",
      "面对高强度控制或强开时，缺少安全输出空间会让主要收益更难兑现。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "暗夜猎手",
        "summary": "薇恩毫不留情的猎杀世间邪恶，向附近敌方英雄移动时会获得移动速度。",
        "mechanics": [
          "move_speed",
          "chase",
          "kite"
        ]
      },
      {
        "slot": "q",
        "name": "闪避突袭",
        "summary": "薇恩进行翻滚，并小心地填充她的下一发射击。她的下次攻击造成额外伤害。",
        "mechanics": [
          "dash",
          "enhanced_attack",
          "reposition"
        ]
      },
      {
        "slot": "w",
        "name": "圣银弩箭",
        "summary": "薇恩用稀有金属制作弩箭，让邪恶敌人中毒。对同一目标的第3次攻击或技能施放会对其造成额外真实伤害，数值相当于目标最大生命值的一定百分比。",
        "mechanics": [
          "on_hit",
          "true_damage",
          "tank_shred"
        ]
      },
      {
        "slot": "e",
        "name": "恶魔审判",
        "summary": "薇恩从背部展开一张重弩，并且朝她的目标发射一根巨型弩箭，将目标击退并造成伤害。如果目标与地形产生碰撞，那么目标会被贯穿，对其造成额外伤害和晕眩效果。",
        "mechanics": [
          "stun",
          "knockback",
          "pick"
        ]
      },
      {
        "slot": "r",
        "name": "终极时刻",
        "summary": "薇恩准备进行史诗般的对决，她的攻击力得到提高，能在闪避突袭期间进入隐形状态，闪避突袭的冷却时间缩短，并且暗夜猎手（被动）提供更多移动速度。",
        "mechanics": [
          "stealth",
          "attack_damage",
          "all_in"
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
          "sourceName": "Data Dragon zh_CN Vayne",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Vayne.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Vayne",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Vayne.json",
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
