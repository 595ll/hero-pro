import type { ChampionProfile } from "@/lib/recommendation/types";

const ddragonVersion = "16.8.1";
const reviewedAt = "2026-04-25";

export const seventhBatchChampionProfiles: ChampionProfile[] = [
  {
    "id": "Janna",
    "key": "40",
    "name": "迦娜",
    "iconPath": "/icons/champions/Janna.png",
    "title": "风暴之怒",
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
      "cc_chain",
      "zone_control"
    ],
    "survivalStyles": [
      "shield"
    ],
    "utilityTags": [
      "disengage",
      "peel",
      "lockdown",
      "mobility"
    ],
    "coreMechanics": [
      "Q 的蓄风与击飞决定她的反开和拆火质量，越晚交越容易打断关键进场。",
      "E 护盾既能保人也能抬高队友输出，是她最重要的资源分配技能。",
      "R 更偏救场与重置站位，适合在对手强开后把节奏强行拉回。"
    ],
    "antiPatterns": [
      "如果关键保护技能交得过早，后续保人与拉扯价值会明显下降。",
      "面对强开或连续突进时，站位被压缩后很难完整打出保护与反手节奏。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "顺风而行",
        "summary": "迦娜的友军在朝她移动时获得移动速度。 迦娜的普攻和【和风守护】会附带一部分额外移动速度的额外魔法伤害。",
        "mechanics": [
          "move_speed",
          "ally_protect",
          "buff"
        ]
      },
      {
        "slot": "q",
        "name": "飓风呼啸",
        "summary": "迦娜改变气压和温度，在目标区域召唤小型风暴，风暴体积随时间增大。她可以再次施放该技能来释放风暴。风暴会朝向施放方向飞行，对沿途的所有单位造成伤害和击飞效果。",
        "mechanics": [
          "knockup",
          "zone_control",
          "disengage"
        ]
      },
      {
        "slot": "w",
        "name": "和风守护",
        "summary": "迦娜召唤出一个空气元素灵体，来被动地提升她的移动速度，并使她能够穿越单位。她也可以主动激活这个技能，来对一个敌人造成伤害和减速效果。",
        "mechanics": [
          "move_speed",
          "slow",
          "poke"
        ]
      },
      {
        "slot": "e",
        "name": "风暴之眼",
        "summary": "迦娜制造出一阵防御性的气旋，来为目标友军或防御塔吸收即将到来的伤害，并提高目标的攻击力。",
        "mechanics": [
          "shield",
          "ally_protect",
          "buff"
        ]
      },
      {
        "slot": "r",
        "name": "复苏季风",
        "summary": "迦娜召唤魔法风暴围绕自己，将敌人击退。在风暴平息后，当技能仍处在激活状态时，和风将治疗附近的友军。",
        "mechanics": [
          "knockback",
          "heal",
          "disengage"
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
          "sourceName": "Data Dragon zh_CN Janna",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Janna.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Janna",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Janna.json",
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
    "id": "Milio",
    "key": "902",
    "name": "明烛",
    "iconPath": "/icons/champions/Milio.png",
    "title": "米利欧",
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
      "heal",
      "shield"
    ],
    "utilityTags": [
      "peel",
      "lockdown",
      "mobility"
    ],
    "coreMechanics": [
      "E 和 W 是主要保人来源，重点不是自己打多少伤害，而是把队友输出窗口抬起来。",
      "Q 负责击退和减速，是他最重要的反开与救场按钮。",
      "R 适合在队友被强控或准备反打时交，不是单纯见残血就放。"
    ],
    "antiPatterns": [
      "如果关键保护技能交得过早，后续保人与拉扯价值会明显下降。",
      "面对强开或连续突进时，站位被压缩后很难完整打出保护与反手节奏。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "热情洋溢！",
        "summary": "米利欧的技能可以为队友提供增益，让他们下一次伤害造成更多伤害，并点燃目标。",
        "mechanics": [
          "buff",
          "ally_protect",
          "damage_amp"
        ]
      },
      {
        "slot": "q",
        "name": "火爆飞踢",
        "summary": "踢出一团火球，这个火球可击退一名敌人。火球在击中敌人时会弹至目标身后，对落地范围内的所有敌人造成伤害和减速效果。",
        "mechanics": [
          "knockback",
          "slow",
          "peel"
        ]
      },
      {
        "slot": "w",
        "name": "依依不舍",
        "summary": "创造一个强化地带，为地带中的友军们提供治疗效果并提升攻击距离。地带会跟随距离施法点最近的那名友方英雄。",
        "mechanics": [
          "heal",
          "buff",
          "ally_protect"
        ]
      },
      {
        "slot": "e",
        "name": "融融情谊",
        "summary": "米利欧为一名队友提供护盾，并暂时提升队友的移动速度。这个技能有2层充能。",
        "mechanics": [
          "shield",
          "move_speed",
          "ally_protect"
        ]
      },
      {
        "slot": "r",
        "name": "生生不息",
        "summary": "米利欧释放一道舒心火焰波纹，治疗范围内的队友并净化他们身上的控制效果。",
        "mechanics": [
          "heal",
          "cleanse",
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
          "sourceName": "Data Dragon zh_CN Milio",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Milio.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Milio",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Milio.json",
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
    "id": "Nami",
    "key": "267",
    "name": "娜美",
    "iconPath": "/icons/champions/Nami.png",
    "title": "唤潮鲛姬",
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
      "lockdown",
      "mobility"
    ],
    "coreMechanics": [
      "E 强化普攻和技能是她最稳定的对拼增伤点，谁拿到 E 很关键。",
      "W 在近距离反复弹跳时收益最高，适合打短线消耗和保血线。",
      "Q 和 R 都偏预判控制，更适合接队友先手或封走位，而不是纯拼手速硬丢。"
    ],
    "antiPatterns": [
      "如果关键保护技能交得过早，后续保人与拉扯价值会明显下降。",
      "面对强开或连续突进时，站位被压缩后很难完整打出保护与反手节奏。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "踏浪之行",
        "summary": "每当娜美的技能命中友方英雄时，他们都会暂时获得移动速度加成。",
        "mechanics": [
          "move_speed",
          "buff",
          "ally_protect"
        ]
      },
      {
        "slot": "q",
        "name": "碧波之牢",
        "summary": "朝着目标区域放出一个泡泡，对命中的所有敌人造成伤害和晕眩效果。",
        "mechanics": [
          "stun",
          "lockdown",
          "skillshot"
        ]
      },
      {
        "slot": "w",
        "name": "冲击之潮",
        "summary": "释放一股在友方英雄和敌方英雄之间交替流动的水流，治疗友军并伤害敌军。",
        "mechanics": [
          "heal",
          "poke",
          "ally_protect"
        ]
      },
      {
        "slot": "e",
        "name": "唤潮之佑",
        "summary": "短时间里强化一个友军英雄。友军的普通攻击和技能会对其目标造成额外伤害和减速效果。",
        "mechanics": [
          "buff",
          "slow",
          "ally_protect"
        ]
      },
      {
        "slot": "r",
        "name": "怒涛之啸",
        "summary": "召唤一阵巨大的怒涛，击飞、减速并伤害沿途的所有敌人。被怒涛命中的友方英雄会获得【踏浪之行】的双倍加速效果。",
        "mechanics": [
          "knockup",
          "slow",
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
          "sourceName": "Data Dragon zh_CN Nami",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Nami.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Nami",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Nami.json",
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
