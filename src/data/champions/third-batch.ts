import type { ChampionProfile } from "@/lib/recommendation/types";

const ddragonVersion = "16.8.1";
const reviewedAt = "2026-04-25";

export const thirdBatchChampionProfiles: ChampionProfile[] = [
  {
    "id": "Sona",
    "key": "37",
    "name": "娑娜",
    "iconPath": "/icons/champions/Sona.png",
    "title": "琴瑟仙女",
    "rangeType": "ranged",
    "damagePatterns": [
      "hybrid"
    ],
    "combatTempos": [
      "poke",
      "dps"
    ],
    "scalingTags": [
      "ap",
      "haste",
      "heal_shield"
    ],
    "triggerTraits": [
      "high_cast_frequency",
      "enhanced_attack"
    ],
    "survivalStyles": [
      "heal",
      "shield"
    ],
    "utilityTags": [
      "peel",
      "mobility"
    ],
    "coreMechanics": [
      "技能循环越不断档，她的团队增益和消耗就越稳定，是典型的节奏型辅助。",
      "Q、W、E 不是单看单次效果，而是看光环与能量和弦如何连续交替。",
      "R 是唯一硬控，更多用来定关键反打或保命，而不是随手先手开团。"
    ],
    "antiPatterns": [
      "如果关键保护技能交得过早，后续保人与拉扯价值会明显下降。",
      "面对强开或连续突进时，站位被压缩后很难完整打出保护与反手节奏。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "能量和弦",
        "summary": "渐入佳音 ：娑娜在出色地使用她的技能时，会获得非终极技能的技能急速，直到达到上限为止。在达到上限之后，后续的成功使用将转而缩短她终极技能的冷却时间。 能量和弦 ：每施放若干次技能，娑娜的下次攻击将造成额外魔法伤害并基于最新激活的基础技能施加一个额外效果。",
        "mechanics": [
          "high_cast_frequency",
          "enhanced_attack",
          "haste_scaling"
        ]
      },
      {
        "slot": "q",
        "name": "英勇赞美诗",
        "summary": "娑娜弹奏英勇赞美诗，弹出音波，对附近的两名敌人造成魔法伤害，优先选取英雄和野怪为目标。娑娜会暂时获得一个光环，为附近友军的下一次攻击提供额外魔法伤害。",
        "mechanics": [
          "poke",
          "buff",
          "multi_target"
        ]
      },
      {
        "slot": "w",
        "name": "坚毅咏叹调",
        "summary": "娑娜弹奏坚毅咏叹调，弹出保护性的旋律，治疗娑娜和附近的一个受伤的友军。娑娜会暂时获得一个光环，为附近的友军提供一层护盾。",
        "mechanics": [
          "heal",
          "shield",
          "ally_protect"
        ]
      },
      {
        "slot": "e",
        "name": "迅捷奏鸣曲",
        "summary": "娑娜弹奏迅捷奏鸣曲，为她自己提供移动速度加成。娑娜会暂时获得一个光环，为进入区域的友方英雄提供移动速度加成。",
        "mechanics": [
          "move_speed",
          "buff",
          "team_support"
        ]
      },
      {
        "slot": "r",
        "name": "狂舞终乐章",
        "summary": "娑娜弹奏她的终极和弦，对敌方英雄造成魔法伤害，并晕眩他们，强制他们开始跳舞。",
        "mechanics": [
          "stun",
          "aoe_damage",
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
          "sourceName": "Data Dragon zh_CN Sona",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Sona.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Sona",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Sona.json",
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
    "id": "Sett",
    "key": "875",
    "name": "腕豪",
    "iconPath": "/icons/champions/Sett.png",
    "title": "瑟提",
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
      "enhanced_attack",
      "cc_chain"
    ],
    "survivalStyles": [
      "heal",
      "shield",
      "frontline"
    ],
    "utilityTags": [
      "engage",
      "lockdown"
    ],
    "coreMechanics": [
      "Q 和连续普攻是贴脸压制核心，近身站稳后持续输出很高。",
      "W 的豪意管理决定他能不能打出关键反杀，越吃到集火越要留好出手窗口。",
      "E 和 R 都是强开与反开工具，更适合围绕关键前排或核心位打阵型破坏。"
    ],
    "antiPatterns": [
      "如果关键进场或控制没有命中，近身站场后的承伤压力会明显上升。",
      "面对持续拉扯和远程消耗时，进场窗口被拖慢后较难稳定兑现整套技能。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "沙场豪情",
        "summary": "瑟提的普通攻击会交替使用左重拳和右重拳。右重拳稍微强一些和快一些。瑟提还很讨厌失败，因此会基于他的已损失生命值而获得额外的生命回复。",
        "mechanics": [
          "enhanced_attack",
          "heal",
          "frontline"
        ]
      },
      {
        "slot": "q",
        "name": "屈人之威",
        "summary": "瑟提的下两次攻击将基于目标的最大生命值来造成额外伤害。瑟提也会在朝着敌方英雄移动时获得移动速度加成。",
        "mechanics": [
          "enhanced_attack",
          "move_speed",
          "all_in"
        ]
      },
      {
        "slot": "w",
        "name": "蓄意轰拳",
        "summary": "瑟提会被动地将他受到的伤害储存为豪意。在施放时，瑟提会释放所有已储存的豪意来提供一层护盾并且重击一个区域，在区域中心造成真实伤害并在区域边缘造成物理伤害。",
        "mechanics": [
          "shield",
          "true_damage",
          "burst"
        ]
      },
      {
        "slot": "e",
        "name": "强手裂颅",
        "summary": "瑟提将他两侧的所有敌人猛撞到一起，对他们造成伤害和晕眩效果。如果敌人仅位于他的一侧，那么他们只会被减速而不会被晕眩。",
        "mechanics": [
          "pull",
          "stun",
          "cc_chain"
        ]
      },
      {
        "slot": "r",
        "name": "叹为观止",
        "summary": "瑟提将一名敌方英雄带到空中，然后将其猛砸到地上，在该英雄着陆后对其附近的所有敌人造成伤害和减速效果。",
        "mechanics": [
          "engage",
          "aoe_damage",
          "slow"
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
          "sourceName": "Data Dragon zh_CN Sett",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Sett.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Sett",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Sett.json",
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
    "id": "Syndra",
    "key": "134",
    "name": "辛德拉",
    "iconPath": "/icons/champions/Syndra.png",
    "title": "暗黑元首",
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
    "survivalStyles": [],
    "utilityTags": [
      "lockdown"
    ],
    "coreMechanics": [
      "Q 是最主要的消耗、清线和铺球手段，地上的法球数量决定她后续控制与爆发上限。",
      "W 能抓起法球或小兵补第二段伤害与减速，常和 Q 连用抬高一轮瞬间爆发。",
      "R 会把场上所有法球一起打向目标，球越多伤害越高，是最核心的单点斩杀手段。"
    ],
    "antiPatterns": [
      "如果关键技能命中率不足，英雄的主要伤害与控制价值会明显下降。",
      "面对高强度突进或拉扯时，技能循环被打断后很难稳定兑现回合强度。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "卓尔不凡",
        "summary": "辛德拉可通过提升等级和伤害敌人来收集【怒法碎晶】，用来使她的各技能获得强化。 暗黑法球 ：辛德拉可以持有额外一层充能。 驱使念力 ：额外真实伤害。 弱者退散 ：提升宽度并减速所有目标。 能量倾泻 ：处决低生命值的目标。",
        "mechanics": [
          "scaling",
          "execute_followup",
          "zone_control"
        ]
      },
      {
        "slot": "q",
        "name": "暗黑法球",
        "summary": "辛德拉幻化出一个造成魔法伤害的暗黑法球。法球会存留，并且被她的其它能力所操纵。",
        "mechanics": [
          "zone_control",
          "multi_hit",
          "skillshot"
        ]
      },
      {
        "slot": "w",
        "name": "驱使念力",
        "summary": "辛德拉抓取并投掷一名敌方小兵或者暗黑法球，来对敌人造成魔法伤害，并减少他们的移动速度。",
        "mechanics": [
          "pickup_throw",
          "slow",
          "combo_setup"
        ]
      },
      {
        "slot": "e",
        "name": "弱者退散",
        "summary": "辛德拉将敌人和暗黑法球击退，并造成魔法伤害。被暗黑法球命中的敌人会被晕眩。",
        "mechanics": [
          "knockback",
          "stun",
          "cc_chain"
        ]
      },
      {
        "slot": "r",
        "name": "能量倾泻",
        "summary": "辛德拉用她的所有暗黑法球来轰击一名敌方英雄。",
        "mechanics": [
          "burst",
          "single_target",
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
          "sourceName": "Data Dragon zh_CN Syndra",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Syndra.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Syndra",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Syndra.json",
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
