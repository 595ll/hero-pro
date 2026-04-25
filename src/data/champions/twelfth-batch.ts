import type { ChampionProfile } from "@/lib/recommendation/types";

export const twelfthBatchChampionProfiles: ChampionProfile[] = [
  {
    "id": "Jax",
    "key": "24",
    "name": "贾克斯",
    "title": "武器大师",
    "rangeType": "melee",
    "damagePatterns": [
      "attack",
      "hybrid"
    ],
    "combatTempos": [
      "dps",
      "burst"
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
      "frontline"
    ],
    "utilityTags": [
      "mobility",
      "lockdown"
    ],
    "coreMechanics": [
      "被动与 W 强化普攻决定他必须持续贴身穿插平 A，越能稳住攻技循环，伤害兑现越快。",
      "Q 是追击、换位和补刀口的关键位移，何时跳进场比单次爆发本身更重要。",
      "E 与 R 共同决定站场上限，能否卡住对手普攻窗口并顶住第一波集火，直接影响后续输出。"
    ],
    "antiPatterns": [
      "如果输出环境被持续打断，普攻节奏和持续伤害会明显下滑。",
      "面对远程拉扯或强控链时，进场过早会让他很难真正打满被动层数和强化普攻。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "无情连打",
        "summary": "贾克斯连续的普通攻击，会持续地提高他的攻击速度。",
        "mechanics": [
          "attack_speed",
          "enhanced_attack",
          "dps_window"
        ]
      },
      {
        "slot": "q",
        "name": "跳斩",
        "summary": "贾克斯跳向一个单位。如果目标是敌人，贾克斯会用他的武器狠狠地抽打敌人的脸，造成额外伤害。",
        "mechanics": [
          "dash",
          "engage",
          "gap_close"
        ]
      },
      {
        "slot": "w",
        "name": "蓄力一击",
        "summary": "贾克斯为武器充能，使他的下次攻击能造成额外伤害。",
        "mechanics": [
          "enhanced_attack",
          "burst_followup",
          "attack_skill_loop"
        ]
      },
      {
        "slot": "e",
        "name": "反击风暴",
        "summary": "贾克斯的武艺让他能够在短时间里躲闪掉所有即将到来的普通攻击，随后对所有周围的敌人快速发起反击，并将他们击晕。",
        "mechanics": [
          "dodge",
          "stun",
          "frontline"
        ]
      },
      {
        "slot": "r",
        "name": "武器大师",
        "summary": "每连续攻击2次，第3次攻击就会造成额外的魔法伤害。另外，贾克斯可以激活这个技能来在他周围造成伤害并增强他的决心，从而暂时性地提升他的护甲和魔法抗性。",
        "mechanics": [
          "multi_hit",
          "resist_boost",
          "frontline"
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
          "sourceName": "Data Dragon zh_CN Jax",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Jax.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-26",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Jax",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Jax.json",
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
    "id": "Lucian",
    "key": "236",
    "name": "卢锡安",
    "title": "圣枪游侠",
    "rangeType": "ranged",
    "damagePatterns": [
      "hybrid"
    ],
    "combatTempos": [
      "burst",
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
      "high_cast_frequency"
    ],
    "survivalStyles": [
      "dash"
    ],
    "utilityTags": [
      "mobility"
    ],
    "coreMechanics": [
      "被动双枪让他必须在技能和普攻之间高速穿插，整局上限都建立在攻技循环是否流畅。",
      "Q 是最稳定的中距离压血点，卡好兵线或前排角度时能持续逼站位。",
      "E 既是保命也是输出续航按钮，越能通过被动连射快速返冷却，越容易滚起追击节奏。"
    ],
    "antiPatterns": [
      "如果输出环境被持续打断，普攻节奏和持续伤害会明显下滑。",
      "面对硬控或长手消耗时，过早交 E 会让他失去最关键的拉扯和补枪空间。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "圣光银弹",
        "summary": "每使用一个技能时，卢锡安的下次普通攻击都会连射2次。当卢锡安从另一位友军处获得治疗或护盾、或者有一名附近的敌方英雄被定身时，他的下2次普通攻击造成额外魔法伤害。",
        "mechanics": [
          "enhanced_attack",
          "multi_hit",
          "attack_skill_loop"
        ]
      },
      {
        "slot": "q",
        "name": "透体圣光",
        "summary": "卢锡安射出一束穿透性的圣光穿过他的目标。",
        "mechanics": [
          "poke",
          "burst_followup",
          "line_damage"
        ]
      },
      {
        "slot": "w",
        "name": "热诚烈弹",
        "summary": "卢锡安发射一个会呈星形爆炸的飞弹，标记并暂时显形敌人。在卢锡安攻击被标记的敌人时，会获得移动速度加成。",
        "mechanics": [
          "mark",
          "move_speed",
          "poke"
        ]
      },
      {
        "slot": "e",
        "name": "冷酷追击",
        "summary": "卢锡安冲刺一小段距离。【圣光银弹】的攻击会减少【冷酷追击】的冷却时间。",
        "mechanics": [
          "dash",
          "reposition",
          "cooldown_cycle"
        ]
      },
      {
        "slot": "r",
        "name": "圣枪洗礼",
        "summary": "卢锡安的武器释放出大量的子弹。",
        "mechanics": [
          "channel",
          "multi_hit",
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
          "sourceName": "Data Dragon zh_CN Lucian",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Lucian.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-26",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Lucian",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Lucian.json",
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
    "id": "Kaisa",
    "key": "145",
    "name": "卡莎",
    "title": "虚空之女",
    "rangeType": "ranged",
    "damagePatterns": [
      "hybrid"
    ],
    "combatTempos": [
      "dps",
      "burst"
    ],
    "scalingTags": [
      "ad",
      "ap",
      "attack_speed"
    ],
    "triggerTraits": [
      "enhanced_attack",
      "multi_hit",
      "all_in"
    ],
    "survivalStyles": [
      "dash",
      "shield",
      "stealth"
    ],
    "utilityTags": [
      "mobility"
    ],
    "coreMechanics": [
      "被动电浆和技能进化共同决定她的混伤上限，越能把普攻、Q 和 W 交替接满，兑现越快。",
      "Q 贴近单目标时爆发最高，因此她很看切入角度和对孤立目标的压制窗口。",
      "E 与 R 负责重新站位和找收割线，进场时机不对就会把核心保命工具一起交掉。"
    ],
    "antiPatterns": [
      "如果输出环境被持续打断，普攻节奏和持续伤害会明显下滑。",
      "面对稳定控场或反手爆发时，贸然用 R 深入后排很容易让她来不及打出电浆斩杀。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "体表活肤",
        "summary": "卡莎的普通攻击会叠加电浆，造成不断提升的额外魔法伤害。友军的定身效果也可以帮忙叠加电浆。此外，卡莎可通过购买装备来升级她的基础技能，让它们拥有更多强大的属性。",
        "mechanics": [
          "on_hit",
          "stacking",
          "enhanced_attack"
        ]
      },
      {
        "slot": "q",
        "name": "艾卡西亚暴雨",
        "summary": "卡莎发射一大堆弹体来搜寻附近的目标。活体武器：这个技能得到升级，可发射更多弹体。",
        "mechanics": [
          "multi_hit",
          "burst_window",
          "all_in"
        ]
      },
      {
        "slot": "w",
        "name": "虚空索敌",
        "summary": "卡莎发射一束长程弹体，并用她的被动来标记敌人。活体武器：这个技能得到升级，可施加更多被动标记并在命中英雄时减少冷却时间。",
        "mechanics": [
          "long_range",
          "mark",
          "poke"
        ]
      },
      {
        "slot": "e",
        "name": "极限超载",
        "summary": "卡莎暂时提升移动速度，随后提升攻击速度。活体武器：这个技能得到升级，可短暂提供隐形效果。",
        "mechanics": [
          "attack_speed",
          "stealth",
          "reposition"
        ]
      },
      {
        "slot": "r",
        "name": "猎手本能",
        "summary": "卡莎突进到一个敌方英雄身边。",
        "mechanics": [
          "dash",
          "shield",
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
          "sourceName": "Data Dragon zh_CN Kaisa",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Kaisa.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-26",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Kaisa",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Kaisa.json",
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
