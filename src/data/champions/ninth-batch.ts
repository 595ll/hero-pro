import type { ChampionProfile } from "@/lib/recommendation/types";

const ddragonVersion = "16.8.1";
const reviewedAt = "2026-04-25";

export const ninthBatchChampionProfiles: ChampionProfile[] = [
  {
    "id": "Xerath",
    "key": "101",
    "name": "泽拉斯",
    "iconPath": "/icons/champions/Xerath.png",
    "title": "远古巫灵",
    "rangeType": "ranged",
    "damagePatterns": [
      "skill"
    ],
    "combatTempos": [
      "poke",
      "burst"
    ],
    "scalingTags": [
      "ap",
      "haste"
    ],
    "triggerTraits": [
      "high_cast_frequency",
      "cc_chain"
    ],
    "survivalStyles": [],
    "utilityTags": [
      "lockdown"
    ],
    "coreMechanics": [
      "Q 是最主要的清线和远程消耗手段，命中率直接决定存在感。",
      "W 和 E 用来补控制和自保，通常先逼走位再接 E 会更稳定。",
      "R 更像远距离收割和压残血，不适合在正面没人帮你控的时候硬灌。"
    ],
    "antiPatterns": [
      "如果关键技能命中率不足，英雄的主要伤害与控制价值会明显下降。",
      "面对高强度突进或拉扯时，技能循环被打断后很难稳定兑现回合强度。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "法力澎湃",
        "summary": "泽拉斯的普通攻击会周期性地恢复法力值。每当泽拉斯击杀了一个单位时，这个冷却时间就会缩短。",
        "mechanics": [
          "resource_restore",
          "lane_sustain"
        ]
      },
      {
        "slot": "q",
        "name": "奥能脉冲",
        "summary": "泽拉斯聚集能量，随后发射出一道射程很远的能量光束，对所有命中的目标造成魔法伤害。",
        "mechanics": [
          "long_range",
          "poke",
          "skillshot"
        ]
      },
      {
        "slot": "w",
        "name": "毁灭之眼",
        "summary": "在目标区域降下奥术能量的弹幕，对一个区域内的所有敌人造成减速效果和魔法伤害。区域中心的目标会受到额外伤害和一个更强大的减速效果。",
        "mechanics": [
          "long_range",
          "slow",
          "aoe_damage"
        ]
      },
      {
        "slot": "e",
        "name": "冲击法球",
        "summary": "对单个敌人造成魔法伤害和晕眩效果。",
        "mechanics": [
          "skillshot",
          "stun",
          "pick"
        ]
      },
      {
        "slot": "r",
        "name": "奥术仪式",
        "summary": "泽拉斯将自己固定在一处魔力之源上，并获得数次远程施法的机会。",
        "mechanics": [
          "long_range",
          "burst_window",
          "channel"
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
          "sourceName": "Data Dragon zh_CN Xerath",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Xerath.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Xerath",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Xerath.json",
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
    "id": "Velkoz",
    "key": "161",
    "name": "维克兹",
    "iconPath": "/icons/champions/Velkoz.png",
    "title": "虚空之眼",
    "rangeType": "ranged",
    "damagePatterns": [
      "skill"
    ],
    "combatTempos": [
      "poke",
      "burst"
    ],
    "scalingTags": [
      "ap",
      "haste"
    ],
    "triggerTraits": [
      "multi_hit",
      "high_cast_frequency",
      "cc_chain"
    ],
    "survivalStyles": [],
    "utilityTags": [
      "lockdown"
    ],
    "coreMechanics": [
      "被动三层解构是真实伤害核心，技能命中顺序决定爆发质量。",
      "Q 和 E 更偏消耗与控场，先逼走位再接 W 或 R 更容易打满。",
      "R 需要相对稳定的输出窗口，最好在队友或自己先控住人后再交。"
    ],
    "antiPatterns": [
      "如果关键技能命中率不足，英雄的主要伤害与控制价值会明显下降。",
      "面对高强度突进或拉扯时，技能循环被打断后很难稳定兑现回合强度。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "有机体解构",
        "summary": "维克兹的技能会对命中的敌人施加 有机体解构 效果。如果累积到3层效果，敌人就会受到爆发性的真实伤害。",
        "mechanics": [
          "stacking",
          "true_damage",
          "multi_hit"
        ]
      },
      {
        "slot": "q",
        "name": "等离子裂变",
        "summary": "维克兹发射一束等离子，再次施放此技能或在命中一名敌人后，等离子束会一分为二。等离子束在命中时会造成伤害和减速效果。",
        "mechanics": [
          "long_range",
          "slow",
          "skillshot"
        ]
      },
      {
        "slot": "w",
        "name": "虚空裂隙",
        "summary": "维克兹开启一道虚空裂隙，造成初始爆发伤害，并在短暂的延迟后爆炸，造成第二段爆发伤害。",
        "mechanics": [
          "aoe_damage",
          "multi_hit",
          "poke"
        ]
      },
      {
        "slot": "e",
        "name": "构造分解",
        "summary": "维克兹让一个区域爆炸，击飞敌人，并将近处的敌人略微击退。",
        "mechanics": [
          "knockup",
          "peel",
          "aoe_control"
        ]
      },
      {
        "slot": "r",
        "name": "生命形态瓦解射线",
        "summary": "维克兹释放一束被引导的光线跟随鼠标指针，可造成魔法伤害，持续2.5秒。【有机体解构】效果会研究敌方英雄，从而使他们受到真实伤害。",
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
          "sourceName": "Data Dragon zh_CN Velkoz",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Velkoz.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Velkoz",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Velkoz.json",
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
    "id": "Ziggs",
    "key": "115",
    "name": "吉格斯",
    "iconPath": "/icons/champions/Ziggs.png",
    "title": "爆破鬼才",
    "rangeType": "ranged",
    "damagePatterns": [
      "skill"
    ],
    "combatTempos": [
      "poke",
      "burst"
    ],
    "scalingTags": [
      "ap",
      "haste"
    ],
    "triggerTraits": [
      "high_cast_frequency",
      "zone_control"
    ],
    "survivalStyles": [],
    "utilityTags": [
      "peel"
    ],
    "coreMechanics": [
      "Q 是最稳定的远程消耗技能，持续命中才能真正压出血线优势。",
      "W 不只是位移和击退，还关系到拆塔与自保，是最关键的功能技能之一。",
      "E 与 R 更适合封走位和补范围伤害，团战重心是控空间而不是贴脸硬拼。"
    ],
    "antiPatterns": [
      "如果关键保护技能交得过早，后续保人与拉扯价值会明显下降。",
      "面对强开或连续突进时，站位被压缩后很难完整打出保护与反手节奏。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "一触即发",
        "summary": "每过一段时间，吉格斯的下次普通攻击就会造成额外的魔法伤害。这个冷却时间会在吉格斯每用一次技能时得到减少。",
        "mechanics": [
          "enhanced_attack",
          "skill_cycle",
          "bonus_damage"
        ]
      },
      {
        "slot": "q",
        "name": "弹跳炸弹",
        "summary": "吉格斯扔出一个会弹跳的炸弹，对敌人造成魔法伤害。",
        "mechanics": [
          "long_range",
          "poke",
          "skillshot"
        ]
      },
      {
        "slot": "w",
        "name": "定点爆破",
        "summary": "吉格斯扔出一个炸药包，会在一段延迟后爆炸，或者在再次施放该技能后爆炸。爆炸会对敌人造成魔法伤害，并将他们击退。吉格斯也会被击退，但不会受到伤害。 吉格斯可以用这个技能来爆破敌方摇摇欲坠的防御塔。",
        "mechanics": [
          "knockback",
          "peel",
          "reposition"
        ]
      },
      {
        "slot": "e",
        "name": "海克斯爆破雷区",
        "summary": "吉格斯布下敌人一踩就炸的感应雷区，对踩中地雷的敌人造成魔法伤害和减速效果。对相同目标的后续爆炸将造成较少伤害。",
        "mechanics": [
          "zone_control",
          "slow",
          "poke"
        ]
      },
      {
        "slot": "r",
        "name": "科学的地狱火炮",
        "summary": "吉格斯部署他的尖端发明，科学的地狱火炮，将它推送一段极远的距离。在主要爆炸区域里的敌人会比在其它爆炸区域里的敌人受到更多的伤害。",
        "mechanics": [
          "long_range",
          "aoe_damage",
          "burst"
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
          "sourceName": "Data Dragon zh_CN Ziggs",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Ziggs.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Ziggs",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Ziggs.json",
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
