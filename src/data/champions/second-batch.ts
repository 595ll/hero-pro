import type { ChampionProfile } from "@/lib/recommendation/types";

const ddragonVersion = "16.8.1";
const reviewedAt = "2026-04-25";

export const secondBatchChampionProfiles: ChampionProfile[] = [
  {
    "id": "Ahri",
    "key": "103",
    "name": "阿狸",
    "iconPath": "/icons/champions/Ahri.png",
    "title": "九尾妖狐",
    "rangeType": "ranged",
    "damagePatterns": [
      "hybrid"
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
      "all_in",
      "reset",
      "high_cast_frequency"
    ],
    "survivalStyles": [
      "dash",
      "heal"
    ],
    "utilityTags": [
      "mobility",
      "lockdown"
    ],
    "coreMechanics": [
      "Q 是最稳定的清线与消耗手段，来回两段命中决定她的换血上限。",
      "E 命中后更容易接满 Q、W 和后续爆发，是主要的先手与斩杀起点。",
      "R 提供三段位移与追击空间，适合先拉扯找角度，再进场完成收尾。"
    ],
    "antiPatterns": [
      "如果关键技能命中率不足，英雄的主要伤害与控制价值会明显下降。",
      "面对高强度突进或拉扯时，技能循环被打断后很难稳定兑现回合强度。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "摄魂夺魄",
        "summary": "在击杀9个小兵或野怪后，阿狸会治疗自身。 在参与击杀一名敌方英雄后，阿狸会以一个更高的治疗效果来治疗自身。",
        "mechanics": [
          "heal",
          "takedown_reward"
        ]
      },
      {
        "slot": "q",
        "name": "欺诈宝珠",
        "summary": "阿狸放出并收回她的宝珠，在放出时会沿途对敌人造成魔法伤害，在收回时则会沿途对敌人造成真实伤害。",
        "mechanics": [
          "skillshot",
          "return_path",
          "true_damage"
        ]
      },
      {
        "slot": "w",
        "name": "妖异狐火",
        "summary": "阿狸获得短暂的爆发性移动速度加成，并放出三团狐火，锁定附近的敌人进行攻击。",
        "mechanics": [
          "move_speed",
          "targeting",
          "burst_followup"
        ]
      },
      {
        "slot": "e",
        "name": "魅惑妖术",
        "summary": "阿狸献出红唇热吻，对命中的第一个敌人造成伤害并将目标魅惑，并且立刻终止目标的移动技能并使目标无恶意地走向她。",
        "mechanics": [
          "charm",
          "interrupt",
          "pick"
        ]
      },
      {
        "slot": "r",
        "name": "灵魄突袭",
        "summary": "阿狸向前猛冲，并放出元气弹，对周围的数个敌人造成伤害。灵魄突袭在进入冷却阶段以前最多可被施放三次，并在参与击杀敌方英雄后获得额外的再次施放次数。",
        "mechanics": [
          "dash",
          "recast",
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
          "sourceName": "Data Dragon zh_CN Ahri",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Ahri.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Ahri",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Ahri.json",
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
    "id": "Jinx",
    "key": "222",
    "name": "金克丝",
    "iconPath": "/icons/champions/Jinx.png",
    "title": "暴走萝莉",
    "rangeType": "ranged",
    "damagePatterns": [
      "attack"
    ],
    "combatTempos": [
      "dps",
      "poke"
    ],
    "scalingTags": [
      "ad",
      "attack_speed",
      "crit"
    ],
    "triggerTraits": [
      "reset",
      "enhanced_attack",
      "multi_hit"
    ],
    "survivalStyles": [],
    "utilityTags": [],
    "coreMechanics": [
      "机枪与火箭的切换决定输出形态：机枪打持续，火箭打范围与远距离压制。",
      "Q 启动后需要稳定站位输出，一旦被频繁打断，伤害会明显缩水。",
      "被动击杀刷新后会大幅抬高收割能力，最强的时间点通常在残局追击。"
    ],
    "antiPatterns": [
      "如果输出环境被持续打断，普攻节奏和持续伤害会明显下滑。",
      "面对高强度控制或强开时，缺少安全输出空间会让主要收益更难兑现。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "罪恶快感",
        "summary": "金克丝每当参与击杀或摧毁一名英雄、一个史诗级野怪或一座建筑物后，她的移动速度和攻击速度就会得到显著提升。",
        "mechanics": [
          "reset",
          "move_speed",
          "attack_speed"
        ]
      },
      {
        "slot": "q",
        "name": "枪炮交响曲！",
        "summary": "金克丝可以通过切换武器来改变普通攻击的方式。在用她的轻机枪“砰砰”攻击时，她的攻击速度会提升。在用她的火箭发射器“鱼骨头”攻击时，她的普通攻击会造成范围伤害，攻击距离提升，但会消耗法力值并且攻击得更慢。",
        "mechanics": [
          "stance_swap",
          "attack_speed",
          "aoe_attack"
        ]
      },
      {
        "slot": "w",
        "name": "震荡电磁波！",
        "summary": "金克丝使用她的震荡手枪“电磁器”来发射震荡波，让被命中的第一个敌人暴露在己方视野中（可使隐形英雄现形），并对其造成伤害和减速效果。",
        "mechanics": [
          "skillshot",
          "slow",
          "reveal"
        ]
      },
      {
        "slot": "e",
        "name": "嚼火者手雷！",
        "summary": "金克丝扔出一串陷阱手雷。手雷会在5秒后爆炸，让敌人着火。嚼火者手雷将会袭击路过的敌方英雄，并将他们束缚在原地。",
        "mechanics": [
          "trap",
          "root",
          "zone_control"
        ]
      },
      {
        "slot": "r",
        "name": "超究极死神飞弹！",
        "summary": "金克丝发射一枚能够跨越整个地图的飞弹，并且飞行的时间越长，伤害值越高。飞弹会在命中一名敌方英雄后爆炸，对目标和目标附近的敌人造成伤害，且目标的生命值越低，所受的伤害值越高。",
        "mechanics": [
          "long_range",
          "execute",
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
          "sourceName": "Data Dragon zh_CN Jinx",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Jinx.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Jinx",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Jinx.json",
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
    "id": "Malphite",
    "key": "54",
    "name": "墨菲特",
    "iconPath": "/icons/champions/Malphite.png",
    "title": "熔岩巨兽",
    "rangeType": "melee",
    "damagePatterns": [
      "hybrid"
    ],
    "combatTempos": [
      "burst",
      "poke"
    ],
    "scalingTags": [
      "ap",
      "tank"
    ],
    "triggerTraits": [
      "all_in",
      "enhanced_attack",
      "cc_chain"
    ],
    "survivalStyles": [
      "shield",
      "frontline"
    ],
    "utilityTags": [
      "engage",
      "lockdown"
    ],
    "coreMechanics": [
      "对线期更多靠 Q 偷移速做换血，真正决定强度的是能否平稳等到团战。",
      "W 和 E 让他更擅长贴身短换和前排站场，面对物理近战时收益更高。",
      "R 是最关键的先手按钮，命中多人时价值远高于单纯拿来补伤害。"
    ],
    "antiPatterns": [
      "如果关键进场或控制没有命中，近身站场后的承伤压力会明显上升。",
      "面对持续拉扯和远程消耗时，进场窗口被拖慢后较难稳定兑现整套技能。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "花岗岩护盾",
        "summary": "墨菲特被岩石护盾保护，最多吸收10%最大生命值的伤害，若数秒内墨菲特未受到攻击，护盾将重置。",
        "mechanics": [
          "shield",
          "recharge"
        ]
      },
      {
        "slot": "q",
        "name": "地震碎片",
        "summary": "墨菲特发出一块大地碎片穿过他敌人处的地面，在碰撞时造成伤害并且偷取移动速度3秒。",
        "mechanics": [
          "skillshot",
          "move_speed_steal",
          "poke"
        ]
      },
      {
        "slot": "w",
        "name": "雷霆拍击",
        "summary": "墨菲特的攻击蕴含着如此惊人的力道以至于它引发了一次音爆。在接下来的数秒里，他的攻击会在他面前引发余波。",
        "mechanics": [
          "enhanced_attack",
          "cleave"
        ]
      },
      {
        "slot": "e",
        "name": "大地震颤",
        "summary": "墨菲特锤击地面，放射出冲击波对目标造成基于他护甲值的魔法伤害，同时暂时降低目标攻击速度。",
        "mechanics": [
          "aoe_damage",
          "attack_speed_slow"
        ]
      },
      {
        "slot": "r",
        "name": "势不可挡",
        "summary": "墨菲特自身高速冲向一个区域，对区域内的敌人们造成伤害和击飞效果。",
        "mechanics": [
          "dash",
          "knockup",
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
          "sourceName": "Data Dragon zh_CN Malphite",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Malphite.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Malphite",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Malphite.json",
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
