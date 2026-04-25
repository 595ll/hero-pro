import type { ChampionProfile } from "@/lib/recommendation/types";

export const fourteenthBatchChampionProfiles: ChampionProfile[] = [
  {
    "id": "Pyke",
    "key": "555",
    "name": "派克",
    "title": "血港鬼影",
    "rangeType": "melee",
    "damagePatterns": [
      "skill"
    ],
    "combatTempos": [
      "burst",
      "poke"
    ],
    "scalingTags": [
      "ad",
      "haste"
    ],
    "triggerTraits": [
      "reset",
      "all_in",
      "cc_chain"
    ],
    "survivalStyles": [
      "heal",
      "dash",
      "stealth"
    ],
    "utilityTags": [
      "engage",
      "lockdown",
      "mobility"
    ],
    "coreMechanics": [
      "Q 的拉拽与 E 的眩晕决定他能否先手抓到人，命中率比单次伤害数字更重要。",
      "W 的伪装与移速让他可以反复找角度，真正强势点在于进场、撤出、再进场的节奏循环。",
      "R 低血线处决是整套画像核心，越能把敌人压进斩杀线并连续收尾，越容易滚起残局。"
    ],
    "antiPatterns": [
      "如果 Q 和 E 频繁空掉，他会同时失去开团稳定性和处决前的压血能力。",
      "面对持续前排站场或反手保护很强的阵容时，过早进场会让他还没完成处决就先被集火。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "溺水之幸",
        "summary": "当派克消失在敌人视野外时，他可从所受的来自敌方英雄的伤害中回复显著的生命值。派克无法从任何来源（装备、符文等）中获得额外最大生命值加成，而是会获得攻击力作为替代。",
        "mechanics": [
          "heal",
          "stealth",
          "attack_damage"
        ]
      },
      {
        "slot": "q",
        "name": "透骨尖钉",
        "summary": "派克要么戳刺他前方的一名敌人，要么将一名敌人拽向他。",
        "mechanics": [
          "pull",
          "pick",
          "poke"
        ]
      },
      {
        "slot": "w",
        "name": "幽潭潜行",
        "summary": "派克进入伪装状态并获得显著的移动速度加成，此移速加成会逐渐衰减。",
        "mechanics": [
          "stealth",
          "move_speed",
          "reposition"
        ]
      },
      {
        "slot": "e",
        "name": "魅影浪洄",
        "summary": "派克突进并在身后留下一个幻影。幻影将会返回派克身边，并晕眩沿途的敌人。",
        "mechanics": [
          "dash",
          "stun",
          "engage"
        ]
      },
      {
        "slot": "r",
        "name": "涌泉之恨",
        "summary": "派克进行闪烁以处决低血量的敌人，并且如果处决成功还能再次施放此技能并为一名助攻的友军提供额外的金币。",
        "mechanics": [
          "blink",
          "execute",
          "reset"
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
          "sourceName": "Data Dragon zh_CN Pyke",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Pyke.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-26",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Pyke",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Pyke.json",
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
    "id": "Qiyana",
    "key": "246",
    "name": "奇亚娜",
    "title": "元素女皇",
    "rangeType": "melee",
    "damagePatterns": [
      "skill"
    ],
    "combatTempos": [
      "burst",
      "poke"
    ],
    "scalingTags": [
      "ad"
    ],
    "triggerTraits": [
      "all_in",
      "high_cast_frequency",
      "cc_chain"
    ],
    "survivalStyles": [
      "dash",
      "stealth"
    ],
    "utilityTags": [
      "mobility",
      "lockdown"
    ],
    "coreMechanics": [
      "W 抓取元素并重置武器状态，决定她能否在一次进场里连续打出多段技能和被动额外伤害。",
      "Q 会随元素改变收益边界，草元素偏拉扯与隐身，岩元素偏低血收尾，冰元素偏先手控制。",
      "E 与 R 负责进场和墙体爆发，只要切入角度正确，她就能很快把目标压进斩杀线。"
    ],
    "antiPatterns": [
      "如果元素切换与进场顺序混乱，她会从高机动收割手变成一次性进场后真空期很长的刺客。",
      "面对没有地形可借或反手保护很足的阵容时，R 的爆发与控制很难稳定打满。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "凌人贵气",
        "summary": "奇亚娜对每名敌人发起的第一次普攻或技能会造成额外伤害。",
        "mechanics": [
          "burst_followup",
          "mark",
          "enhanced_attack"
        ]
      },
      {
        "slot": "q",
        "name": "元素之怒 / 以绪塔尔之锋",
        "summary": "奇亚娜挥舞她的武器，造成伤害和基于她元素的额外效果。",
        "mechanics": [
          "poke",
          "root",
          "execute"
        ]
      },
      {
        "slot": "w",
        "name": "方圆塑令",
        "summary": "奇亚娜冲向一个目标位置来从墙体、河流或草丛中汲取元素。位于元素附近时，她会获得移速和额外攻击/技能伤害。",
        "mechanics": [
          "dash",
          "move_speed",
          "burst_followup"
        ]
      },
      {
        "slot": "e",
        "name": "天纵之勇",
        "summary": "奇亚娜冲向一名敌人，对其造成物理伤害。",
        "mechanics": [
          "dash",
          "engage",
          "all_in"
        ]
      },
      {
        "slot": "r",
        "name": "惊才绝景",
        "summary": "奇亚娜挥舞武器来召唤一道冲击波，击退敌人并使墙体、河流和草丛爆炸，从而伤害并晕眩附近敌人。",
        "mechanics": [
          "knockback",
          "stun",
          "burst_window"
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
          "sourceName": "Data Dragon zh_CN Qiyana",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Qiyana.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-26",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Qiyana",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Qiyana.json",
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
    "id": "Akali",
    "key": "84",
    "name": "阿卡丽",
    "title": "离群之刺",
    "rangeType": "melee",
    "damagePatterns": [
      "skill",
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
      "all_in",
      "enhanced_attack",
      "high_cast_frequency"
    ],
    "survivalStyles": [
      "dash",
      "stealth"
    ],
    "utilityTags": [
      "mobility"
    ],
    "coreMechanics": [
      "被动与 Q 形成高频拉扯循环，她不是打一套就走，而是要靠反复进出圈打满持续爆发。",
      "W 烟幕决定她的容错和重置站位能力，越能借隐身拖出下一轮技能，她的收割线越稳定。",
      "E 和 R 让她能够二次贴脸并在残局收尾，进场时机不对就会把最关键的再进场工具一起交掉。"
    ],
    "antiPatterns": [
      "如果进场后没有空间拉扯或烟幕被迫早交，她会迅速失去持续压血和二次收尾的能力。",
      "面对长手点控或稳定群控时，过早交二段位移会让她还没完成斩杀就被反手带走。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "我流忍法！潜龙印",
        "summary": "对一个英雄造成技能伤害时，会在其周围创造一个能量圆环。穿过该圆环时，会增强阿卡丽的下一个攻击的距离和伤害。",
        "mechanics": [
          "enhanced_attack",
          "move_speed",
          "attack_skill_loop"
        ]
      },
      {
        "slot": "q",
        "name": "我流奥义！寒影",
        "summary": "阿卡丽掷出五枚苦无，基于她的额外攻击力和法术强度来造成伤害，并造成减速效果。",
        "mechanics": [
          "poke",
          "slow",
          "high_cast_frequency"
        ]
      },
      {
        "slot": "w",
        "name": "我流奥义！霞阵",
        "summary": "阿卡丽扔下一颗烟幕弹并暂时提供移动速度。在烟幕中时，阿卡丽会变为隐形状态并且不会被敌方的技能和攻击所选中。进行攻击或使用技能都将使阿卡丽短暂显形。",
        "mechanics": [
          "stealth",
          "move_speed",
          "reposition"
        ]
      },
      {
        "slot": "e",
        "name": "我流奥义！隼舞",
        "summary": "进行后空翻并向前掷出一枚手里剑，造成魔法伤害，并标记命中的第一个敌人或【我流奥义！霞阵】。再次施放可突进至被标记的目标处，并造成额外伤害。",
        "mechanics": [
          "dash",
          "mark",
          "burst_followup"
        ]
      },
      {
        "slot": "r",
        "name": "我流秘奥义！表里杀缭乱",
        "summary": "阿卡丽朝着一个方向跃出，伤害被她击中的敌人。再次施放：阿卡丽朝着一个方向突进，处决所有被她击中的敌人。",
        "mechanics": [
          "dash",
          "execute",
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
          "sourceName": "Data Dragon zh_CN Akali",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Akali.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-26",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Akali",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Akali.json",
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
    "id": "Khazix",
    "key": "121",
    "name": "卡兹克",
    "title": "虚空掠夺者",
    "rangeType": "melee",
    "damagePatterns": [
      "skill"
    ],
    "combatTempos": [
      "burst"
    ],
    "scalingTags": [
      "ad"
    ],
    "triggerTraits": [
      "reset",
      "all_in"
    ],
    "survivalStyles": [
      "dash",
      "stealth",
      "heal"
    ],
    "utilityTags": [
      "mobility"
    ],
    "coreMechanics": [
      "孤立无援是整套画像核心，同样的技能命中率下，他对落单目标的压制会明显高于正面团战。",
      "E 的跃击和 R 的隐身共同决定他能否完成进场、斩杀、脱离或继续追击的循环。",
      "一旦拿到击杀或助攻并重置位移，他就能迅速把残局滚成连续收割。"
    ],
    "antiPatterns": [
      "如果目标始终抱团站位，他很难稳定打出孤立伤害与连续收割收益。",
      "面对真眼、稳定控制链或强保护后排时，贸然先手跳入会让他很难安全打完第二轮。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "无形威胁",
        "summary": "附近陷入孤立无援状态的敌人会被标记出来。卡兹克的技能会与孤立无援的目标产生交互作用。当卡兹克没有被敌方队伍所看见时，他会获得无形威胁，使他的下次对敌方英雄发动的普通攻击造成额外魔法伤害，并使目标减速数秒。",
        "mechanics": [
          "enhanced_attack",
          "slow",
          "stealth"
        ]
      },
      {
        "slot": "q",
        "name": "品尝恐惧",
        "summary": "对目标造成物理伤害。对孤立无援的目标造成的伤害会提高。如果他选择进化收割利爪的话，这个技能会在对抗孤立无援的目标时返还一部分冷却时间。卡兹克也会提升他的普通攻击和品尝恐惧的距离。",
        "mechanics": [
          "execute",
          "pick",
          "cooldown_cycle"
        ]
      },
      {
        "slot": "w",
        "name": "虚空突刺",
        "summary": "卡兹克发射爆炸性的尖刺，对命中的敌人造成物理伤害。卡兹克如果在爆炸范围内，则会回复生命值。如果他选择进化刺鞘的话，虚空突刺现在会呈锥形发射三个尖刺，减速被命中的敌人并使被命中的敌方英雄显形2秒。孤立无援的目标会被减速额外的幅度。",
        "mechanics": [
          "poke",
          "heal",
          "slow"
        ]
      },
      {
        "slot": "e",
        "name": "跃击",
        "summary": "卡兹克跳向一个区域，在着陆时造成物理伤害。如果他选择进化虫翼的话，跃击的距离会提升200并在击杀和助攻时重置冷却时间。",
        "mechanics": [
          "dash",
          "engage",
          "reset"
        ]
      },
      {
        "slot": "r",
        "name": "虚空来袭",
        "summary": "每升一级此技能都会允许卡兹克进化他的一项技能，给予该技能独特的附加效果。在激活【虚空来袭】时，会使卡兹克变成隐形状态，触发无形威胁并提升移动速度。",
        "mechanics": [
          "stealth",
          "move_speed",
          "reposition"
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
          "sourceName": "Data Dragon zh_CN Khazix",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Khazix.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-26",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Khazix",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Khazix.json",
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
    "id": "Zed",
    "key": "238",
    "name": "劫",
    "title": "影流之主",
    "rangeType": "melee",
    "damagePatterns": [
      "skill"
    ],
    "combatTempos": [
      "burst",
      "poke"
    ],
    "scalingTags": [
      "ad"
    ],
    "triggerTraits": [
      "all_in",
      "high_cast_frequency",
      "multi_hit"
    ],
    "survivalStyles": [
      "dash"
    ],
    "utilityTags": [
      "mobility"
    ],
    "coreMechanics": [
      "W 影分身决定他能否从安全角度消耗、补伤害并保留退路，影子位置比单次技能命中更关键。",
      "R 让他可以贴脸挂印记后再用影子换位完成二段收尾，越能把目标压进低血线，残局价值越高。",
      "Q 与 E 的多影命中会明显放大爆发上限，因此他更像技能连段收割者，而不是持续平 A 的刺客。"
    ],
    "antiPatterns": [
      "如果影子位置被迫提前交掉或多影命中率不足，他会从高压刺客退化成一次性进场后伤害不够的近战。",
      "面对稳定反手控制或护盾链时，过早交 R 深入会让他很难安全完成印记爆发。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "影忍法！灭魂劫",
        "summary": "劫的普通攻击会对低生命值的目标造成额外魔法伤害。这个特效在数秒内只能对相同的敌方英雄生效一次。",
        "mechanics": [
          "execute",
          "enhanced_attack",
          "burst_followup"
        ]
      },
      {
        "slot": "q",
        "name": "影奥义！诸刃",
        "summary": "劫和他的影分身一起将他们的手里剑向前方掷出。每支手里剑都会对命中的每个敌人造成伤害。",
        "mechanics": [
          "poke",
          "multi_hit",
          "line_damage"
        ]
      },
      {
        "slot": "w",
        "name": "影奥义！分身",
        "summary": "劫的影分身会向前冲刺并留在原地数秒。再次施放可与影分身交换位置。",
        "mechanics": [
          "dash",
          "reposition",
          "shadow_swap"
        ]
      },
      {
        "slot": "e",
        "name": "影奥义！鬼斩",
        "summary": "劫和他的影分身旋转他们的刀刃，对附近的敌人造成伤害并减速。",
        "mechanics": [
          "multi_hit",
          "slow",
          "burst_followup"
        ]
      },
      {
        "slot": "r",
        "name": "禁奥义！瞬狱影杀阵",
        "summary": "劫变得无法被选取并冲刺到目标敌方英雄身前，在其身上留下印记。短暂延迟后，印记会根据劫在期间造成的伤害再次爆发。劫可以与留下的影子换位。",
        "mechanics": [
          "dash",
          "mark",
          "reposition"
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
          "sourceName": "Data Dragon zh_CN Zed",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Zed.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-26",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Zed",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Zed.json",
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
