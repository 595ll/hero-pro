import type { ChampionProfile } from "@/lib/recommendation/types";

const ddragonVersion = "16.8.1";
const reviewedAt = "2026-04-25";

export const tenthBatchChampionProfiles: ChampionProfile[] = [
  {
    "id": "Amumu",
    "key": "32",
    "name": "阿木木",
    "iconPath": "/icons/champions/Amumu.png",
    "title": "殇之木乃伊",
    "rangeType": "melee",
    "damagePatterns": [
      "skill"
    ],
    "combatTempos": [
      "burst"
    ],
    "scalingTags": [
      "ap",
      "tank"
    ],
    "triggerTraits": [
      "cc_chain",
      "all_in",
      "multi_hit"
    ],
    "survivalStyles": [
      "frontline"
    ],
    "utilityTags": [
      "engage",
      "lockdown"
    ],
    "coreMechanics": [
      "Q 命中后才能把 W 和 E 的贴身持续伤害与控制链完整打出来。",
      "W+E 让他更擅长近身站场与群体磨血，越能黏住人越容易打满价值。",
      "R 是团战翻盘核心，更适合在多人站位重叠时先手锁场。"
    ],
    "antiPatterns": [
      "如果关键进场或控制没有命中，近身站场后的承伤压力会明显上升。",
      "面对持续拉扯和远程消耗时，进场窗口被拖慢后较难稳定兑现整套技能。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "诅咒之触",
        "summary": "阿木木的普通攻击会 诅咒 他的敌人，使敌人会从即将到来的魔法伤害中承受额外真实伤害。",
        "mechanics": [
          "enhanced_attack",
          "magic_amp",
          "mark"
        ]
      },
      {
        "slot": "q",
        "name": "绷带牵引",
        "summary": "阿木木向目标投掷粘稠的绷带，将自己拉向目标，并对目标造成伤害和眩晕效果。",
        "mechanics": [
          "hook",
          "stun",
          "engage"
        ]
      },
      {
        "slot": "w",
        "name": "绝望光环",
        "summary": "附近的敌人陷入绝望，每秒损失一定百分比的最大生命值并刷新身上的 诅咒 效果。",
        "mechanics": [
          "aoe_damage",
          "frontline",
          "tank_shred"
        ]
      },
      {
        "slot": "e",
        "name": "阿木木的愤怒",
        "summary": "永久减少阿木木所受的物理伤害。主动施放时，阿木木可以发泄他的怒火，对周围的敌人造成伤害。阿木木每被攻击一次，该技能的冷却时间就会缩短。",
        "mechanics": [
          "aoe_damage",
          "damage_reduction",
          "spell_cycle"
        ]
      },
      {
        "slot": "r",
        "name": "木乃伊之咒",
        "summary": "阿木木用绷带将附近敌方单位通通缠住，对他们施加 诅咒 效果，并造成伤害和晕眩效果。",
        "mechanics": [
          "stun",
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
          "sourceName": "Data Dragon zh_CN Amumu",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Amumu.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Amumu",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Amumu.json",
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
    "id": "Maokai",
    "key": "57",
    "name": "茂凯",
    "iconPath": "/icons/champions/Maokai.png",
    "title": "扭曲树精",
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
      "all_in",
      "zone_control"
    ],
    "survivalStyles": [
      "frontline",
      "heal"
    ],
    "utilityTags": [
      "engage",
      "peel",
      "lockdown",
      "vision"
    ],
    "coreMechanics": [
      "W 指向突进保证了他先手和保排都很稳定，适合抓关键位开节奏。",
      "Q 负责短位移打断和拉开身位，是近身拉扯与反开核心。",
      "E 和 R 更偏控区与封路，团战里能持续逼位置，而不是只看瞬间爆发。"
    ],
    "antiPatterns": [
      "如果关键进场或控制没有命中，近身站场后的承伤压力会明显上升。",
      "面对持续拉扯和远程消耗时，进场窗口被拖慢后较难稳定兑现整套技能。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "吸元秘术",
        "summary": "茂凯的普通攻击也会治疗自身并造成额外伤害，此效果拥有一个中等的冷却时间。每当茂凯施放一次技能或被一个敌方技能击中时，这个冷却时间都会缩短。",
        "mechanics": [
          "heal",
          "enhanced_attack",
          "frontline"
        ]
      },
      {
        "slot": "q",
        "name": "荆棘重击",
        "summary": "茂凯用一记冲击波击退附近的敌人，造成魔法伤害和减速效果。",
        "mechanics": [
          "knockback",
          "slow",
          "peel"
        ]
      },
      {
        "slot": "w",
        "name": "扭曲突刺",
        "summary": "茂凯扭曲为一团移动根须，不可被选取并且向目标突进。在抵达后，他会禁锢住目标。",
        "mechanics": [
          "dash",
          "root",
          "engage"
        ]
      },
      {
        "slot": "e",
        "name": "树苗投掷",
        "summary": "茂凯投出一颗树苗去目标地区戒备。在草丛中更加有效。",
        "mechanics": [
          "zone_control",
          "vision",
          "slow"
        ]
      },
      {
        "slot": "r",
        "name": "自然之握",
        "summary": "茂凯召唤一道荆棘和尖刺灌木组成的巨墙缓慢向前行进，对沿途的敌人造成伤害和禁锢效果。",
        "mechanics": [
          "root",
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
          "sourceName": "Data Dragon zh_CN Maokai",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Maokai.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Maokai",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Maokai.json",
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
    "id": "Sejuani",
    "key": "113",
    "name": "瑟庄妮",
    "iconPath": "/icons/champions/Sejuani.png",
    "title": "北地之怒",
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
      "frontline"
    ],
    "utilityTags": [
      "engage",
      "peel",
      "lockdown"
    ],
    "coreMechanics": [
      "被动与近身连招让她更擅长先手吃伤害，越能稳住第一波越容易赢。",
      "Q 进场后要尽快接 W 和 E 叠层，不然控制链和爆发都会掉很多。",
      "R 的远距离先手很强，但近身时留作补控往往更稳定。"
    ],
    "antiPatterns": [
      "如果关键进场或控制没有命中，近身站场后的承伤压力会明显上升。",
      "面对持续拉扯和远程消耗时，进场窗口被拖慢后较难稳定兑现整套技能。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "北地之怒",
        "summary": "在脱离战斗后，瑟庄妮会获得冰霜护甲，冰川护甲可提供护甲、魔法抗性和免疫减速。当瑟庄妮受到伤害后，冰霜护甲会存留一小段时间。瑟庄妮可以伤害一名被晕眩的敌人来击碎它，从而造成巨量魔法伤害。",
        "mechanics": [
          "frontline",
          "resist_boost",
          "slow_immune"
        ]
      },
      {
        "slot": "q",
        "name": "极寒突袭",
        "summary": "瑟庄妮向前冲锋，将敌人击飞至空中。冲锋会在命中一名敌方英雄后停止。",
        "mechanics": [
          "dash",
          "knockup",
          "engage"
        ]
      },
      {
        "slot": "w",
        "name": "凛冬之怒",
        "summary": "瑟庄妮两次挥舞她的链枷，造成伤害、减速敌人并施加霜冻层数。",
        "mechanics": [
          "aoe_damage",
          "slow",
          "frontline"
        ]
      },
      {
        "slot": "e",
        "name": "永冻领域",
        "summary": "瑟庄妮冻结并晕眩一名叠满了霜冻层数的敌方英雄。",
        "mechanics": [
          "stun",
          "pick",
          "setup"
        ]
      },
      {
        "slot": "r",
        "name": "极冰寒狱",
        "summary": "瑟庄妮投出她的套索来冻结并击晕命中的第一名敌方英雄，并创造一次冰风暴来减速其它敌人。",
        "mechanics": [
          "stun",
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
          "sourceName": "Data Dragon zh_CN Sejuani",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Sejuani.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Sejuani",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Sejuani.json",
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
