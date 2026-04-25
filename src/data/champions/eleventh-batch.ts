import type { ChampionProfile } from "@/lib/recommendation/types";

const ddragonVersion = "16.8.1";
const reviewedAt = "2026-04-25";

export const eleventhBatchChampionProfiles: ChampionProfile[] = [
  {
    "id": "Karma",
    "key": "43",
    "name": "天启者",
    "iconPath": "/icons/champions/Karma.png",
    "title": "卡尔玛",
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
      "RQ 是最稳定的消耗与压血手段，决定她前中期的对线和拉扯上限。",
      "E 不只是护盾，还负责给自己或队友创造进退场节奏，是最关键的保人与提速工具。",
      "梵咒资源怎么分配决定玩法重心：想打消耗看 RQ，想保人拉扯看 RE，想单抓反打看 RW。"
    ],
    "antiPatterns": [
      "如果关键保护技能交得过早，后续保人与拉扯价值会明显下降。",
      "面对强开或连续突进时，站位被压缩后很难完整打出保护与反手节奏。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "聚能之炎",
        "summary": "卡尔玛的伤害型技能将缩短梵咒的冷却时间。",
        "mechanics": [
          "skill_cycle",
          "high_cast_frequency",
          "poke"
        ]
      },
      {
        "slot": "q",
        "name": "心灵烈焰",
        "summary": "卡尔玛向前方发射一枚灵能法球。这枚法球会在命中第一个敌人时爆炸，并造成伤害。 梵咒增效：除爆炸之外，梵咒还会提升她的心灵烈焰的破坏力，同时创造出一个火环，火环会在短暂的延时后造成伤害。",
        "mechanics": [
          "poke",
          "aoe_damage",
          "skillshot"
        ]
      },
      {
        "slot": "w",
        "name": "坚定不移",
        "summary": "卡尔玛在她和目标敌人之间产生一条灵链，同时造成伤害，并使目标暴露。如果灵链在一段时间内没有被破坏，那么目标敌人就会被束缚在原地并再次受到伤害。 梵咒增效：卡尔玛强化灵链，治疗自身并延长禁锢时长。",
        "mechanics": [
          "root",
          "heal",
          "lockdown"
        ]
      },
      {
        "slot": "e",
        "name": "鼓舞",
        "summary": "卡尔玛召唤一个防御性的护盾来吸收即将到来的伤害，并为目标友军提升移动速度。 梵咒增效：能量从目标处向外辐射，强化初始护盾，并对附近的友方英雄施加鼓舞效果。",
        "mechanics": [
          "shield",
          "move_speed",
          "ally_protect",
          "buff"
        ]
      },
      {
        "slot": "r",
        "name": "梵咒",
        "summary": "卡尔玛的下个技能会获得强化，造成额外特效。梵咒在1级时就可以使用，并且不需要投入技能点。",
        "mechanics": [
          "spell_amp",
          "skill_cycle",
          "high_cast_frequency"
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
          "sourceName": "Data Dragon zh_CN Karma",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Karma.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Karma",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Karma.json",
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
    "id": "Seraphine",
    "key": "147",
    "name": "星籁歌姬",
    "iconPath": "/icons/champions/Seraphine.png",
    "title": "萨勒芬妮",
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
      "multi_hit"
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
      "被动双重施法决定她的技能节奏，提前规划哪一发要强化很重要。",
      "Q 和 E 负责远程消耗与连控，命中率决定她能否稳定打出团队价值。",
      "W 与 R 是团战胜负手，前者保队友续航，后者负责先手或反手扩大控制链。"
    ],
    "antiPatterns": [
      "如果关键保护技能交得过早，后续保人与拉扯价值会明显下降。",
      "面对强开或连续突进时，站位被压缩后很难完整打出保护与反手节奏。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "星光漫射",
        "summary": "萨勒芬妮施放的每第三个技能将进行双重施放。此外，施放技能时，附近的友军会为她的下一次普通攻击提供额外魔法伤害和攻击距离。",
        "mechanics": [
          "skill_cycle",
          "multi_hit",
          "buff"
        ]
      },
      {
        "slot": "q",
        "name": "清籁穿云",
        "summary": "萨勒芬妮在一个区域内造成伤害。",
        "mechanics": [
          "poke",
          "aoe_damage",
          "skillshot"
        ]
      },
      {
        "slot": "w",
        "name": "聚和心声",
        "summary": "萨勒芬妮为附近的友军提供护盾和急速。如果她身上已有护盾，那么还会治疗附近的友军。",
        "mechanics": [
          "shield",
          "heal",
          "move_speed",
          "ally_protect"
        ]
      },
      {
        "slot": "e",
        "name": "增幅节拍",
        "summary": "萨勒芬妮对一条直线上的敌人们造成伤害和移动受损效果。",
        "mechanics": [
          "slow",
          "root",
          "lockdown",
          "skillshot"
        ]
      },
      {
        "slot": "r",
        "name": "炫音返场",
        "summary": "萨勒芬妮对命中的敌人们造成伤害和魅惑效果，会在每次命中友方英雄或敌方英雄时刷新距离。",
        "mechanics": [
          "charm",
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
          "sourceName": "Data Dragon zh_CN Seraphine",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Seraphine.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Seraphine",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Seraphine.json",
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
    "id": "Renata",
    "key": "888",
    "name": "炼金男爵",
    "iconPath": "/icons/champions/Renata.png",
    "title": "烈娜塔 · 戈拉斯克",
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
      "shield"
    ],
    "utilityTags": [
      "peel",
      "lockdown"
    ],
    "coreMechanics": [
      "W 是最关键的保核技能，给得太早容易浪费，给得太晚又救不回来。",
      "Q 和 E 负责拉扯与反开，重心是帮队友创造输出空间而不是自己灌爆发。",
      "R 更适合在对手抱团冲脸时反手扭转团战，越多人吃到价值越高。"
    ],
    "antiPatterns": [
      "如果关键保护技能交得过早，后续保人与拉扯价值会明显下降。",
      "面对强开或连续突进时，站位被压缩后很难完整打出保护与反手节奏。"
    ],
    "abilities": [
      {
        "slot": "passive",
        "name": "物尽其用",
        "summary": "烈娜塔的攻击会造成额外伤害并标记敌人。烈娜塔的队友在对被标记的敌人造成伤害时可以造成额外伤害。",
        "mechanics": [
          "damage_amp",
          "buff",
          "mark"
        ]
      },
      {
        "slot": "q",
        "name": "铁腕竞合",
        "summary": "烈娜塔发射一颗飞弹来禁锢命中的第一个敌人，并且可以再次施放这个技能来将该目标朝一个方向投掷。",
        "mechanics": [
          "root",
          "displacement",
          "lockdown"
        ]
      },
      {
        "slot": "w",
        "name": "及时救难",
        "summary": "烈娜塔增益一名友方英雄，让其打得更猛，延缓其死亡并且在其参与一次击杀后将其救活。",
        "mechanics": [
          "buff",
          "move_speed",
          "team_save",
          "ally_protect"
        ]
      },
      {
        "slot": "e",
        "name": "忠诚激励",
        "summary": "烈娜塔发射一对炼金科技飞弹，在命中时为友军提供护盾并对敌人造成伤害和减速。",
        "mechanics": [
          "shield",
          "slow",
          "ally_protect",
          "poke"
        ]
      },
      {
        "slot": "r",
        "name": "恶意收购",
        "summary": "烈娜塔发射一道炼金波纹，使命中的敌人们都陷入狂暴状态。",
        "mechanics": [
          "aoe_control",
          "engage",
          "lockdown"
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
          "sourceName": "Data Dragon zh_CN Renata",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/zh_CN/champion/Renata.json",
          "version": "16.8.1",
          "locale": "zh_CN",
          "retrievedAt": "2026-04-25",
          "confidence": "high",
          "note": "英雄中文名、称号、技能名与技能描述的权威来源。"
        },
        {
          "sourceType": "riot-ddragon",
          "sourceName": "Data Dragon en_US Renata",
          "sourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/Renata.json",
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
