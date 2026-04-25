import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

const projectRoot = process.cwd();
const championsDir = path.join(projectRoot, "src", "data", "champions");
const augmentsDir = path.join(projectRoot, "src", "data", "augments");

async function loadTsModule(relativePath) {
  const fullPath = path.join(projectRoot, relativePath);
  const source = await readFile(fullPath, "utf8");
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
    fileName: fullPath,
  }).outputText;

  const cjsModule = { exports: {} };
  const context = {
    module: cjsModule,
    exports: cjsModule.exports,
  };

  vm.runInNewContext(transpiled, context, { filename: fullPath });
  return cjsModule.exports;
}

async function readJson(relativePath) {
  return JSON.parse(await readFile(path.join(projectRoot, relativePath), "utf8"));
}

function cleanMarkup(value) {
  return value
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/?[^>]+>/g, " ")
    .replace(/\{\{\s*([^}]+)\s*\}\}/g, "数值")
    .replace(/@[^@]+@/g, "数值")
    .replace(/\s+/g, " ")
    .trim();
}

function formatValue(value, indent = 0) {
  const pad = " ".repeat(indent);
  const nextPad = " ".repeat(indent + 2);

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return "[]";
    }

    return `[\n${value
      .map((item) => `${nextPad}${formatValue(item, indent + 2)}`)
      .join(",\n")}\n${pad}]`;
  }

  if (value && typeof value === "object") {
    const entries = Object.entries(value);
    if (entries.length === 0) {
      return "{}";
    }

    return `{\n${entries
      .map(
        ([key, item]) =>
          `${nextPad}${JSON.stringify(key)}: ${formatValue(item, indent + 2)}`,
      )
      .join(",\n")}\n${pad}}`;
  }

  return JSON.stringify(value);
}

function buildChampionFactsMap(facts) {
  const map = new Map();

  for (const item of facts) {
    const abilities = [
      {
        slot: "passive",
        name: item.zh.passive.name,
        summary: cleanMarkup(item.zh.passive.description),
      },
      ...item.zh.spells.slice(0, 4).map((spell, index) => ({
        slot: ["q", "w", "e", "r"][index],
        name: spell.name,
        summary: cleanMarkup(spell.description),
      })),
    ];

    map.set(item.id, {
      name: item.name,
      title: item.title,
      abilities,
    });
  }

  return map;
}

function buildAugmentFactsMap(facts) {
  return new Map(facts.map((item) => [item.id, item]));
}

const augmentSummaryOverrides = {
  "46": "获得炼狱龙魂；技能或攻击命中敌人时会触发额外爆发伤害。",
  "48": "你的技能可以以 155% 总伤害暴击。获得 25% 暴击率，并按每 1 点法术强度额外转化 0.045% 暴击率。",
  "51": "每第 4 次攻击额外造成 44 到 320 魔法伤害，并享受 140% 额外攻击力与 76% 法术强度加成。",
  "54": "每次普攻提供 6 到 18 法术强度，每次技能提供 3 到 9 攻击力，持续到回合结束并可无限叠加。",
  "58": "攻击特效会使你的各项冷却时间缩短 1.25 秒。",
  "60": "获得海洋龙魂；对敌方英雄造成伤害后会获得高额生命与法力回复。",
  "64": "获得 800% 基础生命回复；生命值低于 25% 时提升至 1600%。",
  "76": "为友军提供增益、治疗或护盾时，会对其附近敌人造成 30 到 150 真实伤害，并减速 30%，持续 2 秒。",
  "84": "获得 20% 护甲穿透和 20% 法术穿透。",
  "87": "你的攻击会对额外目标发射一根弩箭，造成 30% 伤害并附带攻击特效。",
  "97": "获得 70 法术强度。",
  "103": "你的 Q 技能获得 200 技能急速。",
  "113": "用非终极技能在 700 码外命中敌人时，该技能冷却缩短至 0.5 秒；周期性技能则重置为 3 秒。",
  "136": "每当你定身或缚地一个敌人时，都会获得 20 适应之力，持续到回合结束，并可无限叠加。",
  "138": "获得 20% 全能吸血。",
  "141": "你对友军施加的治疗和护盾效果提高 30%。",
  "180": "每个回合开始时，获得一个相当于 3 倍法术强度的护盾。",
  "205": "将额外攻击力按每 0.6 攻击力转化 1 点法术强度，并额外获得 15% 法术强度。",
  "206": "将法术强度按每 1 点法强转化 0.6 点额外攻击力，并额外获得 10% 攻击力。",
  "214": "你的旋转类技能获得 30 技能急速，并额外造成 30% 伤害。",
};

const championCoreMechanicOverrides = {
  Ahri: [
    "Q 是最稳定的清线与消耗手段，来回两段命中决定她的换血上限。",
    "E 命中后更容易接满 Q、W 和后续爆发，是主要的先手与斩杀起点。",
    "R 提供三段位移与追击空间，适合先拉扯找角度，再进场完成收尾。",
  ],
  Alistar: [
    "WQ 二连是最稳定的开团与控场手段，命中后能快速帮队友接伤害。",
    "被动依赖击飞、击退和附近单位阵亡叠层，混战越久回复价值越高。",
    "R 提供高额减伤，决定他能否顶着火力把先手窗口撑住。",
  ],
  Amumu: [
    "Q 命中后才能把 W 和 E 的贴身持续伤害与控制链完整打出来。",
    "W+E 让他更擅长近身站场与群体磨血，越能黏住人越容易打满价值。",
    "R 是团战翻盘核心，更适合在多人站位重叠时先手锁场。",
  ],
  Ashe: [
    "普攻减速是拉扯核心，决定她能否稳定续上风筝和追击节奏。",
    "Q 需要靠持续普攻叠层启动，一旦开起来就是主要持续输出来源。",
    "R 提供远距离先手和补控制，适合先定点开团再接队友火力。",
  ],
  Brand: [
    "被动三层爆炸是主要伤害放大器，技能命中顺序决定整套爆发上限。",
    "Q 只有在目标已被点燃时才会稳定眩晕，常先用 W 或 E 铺被动再接控制。",
    "R 在近身或多人环境里弹射更稳定，适合团战和狭窄地形快速灌满伤害。",
  ],
  Darius: [
    "外圈 Q 是换血和续航核心，命中外刃越稳定，站场能力越强。",
    "流血层数越高，W、E 接普攻与追击的压制力越强。",
    "R 依赖血怒与斩杀线，击杀刷新后能连续收割残局。",
  ],
  Ezreal: [
    "Q 是最主要输出点，也是技能循环发动机，命中率直接决定强度上限。",
    "W 接普攻或技能能抬高一轮爆发，适合在拉扯中穿插打出短连招。",
    "E 是安全位移与追击工具，保住 E 往往比贪一段输出更重要。",
  ],
  Janna: [
    "Q 的蓄风与击飞决定她的反开和拆火质量，越晚交越容易打断关键进场。",
    "E 护盾既能保人也能抬高队友输出，是她最重要的资源分配技能。",
    "R 更偏救场与重置站位，适合在对手强开后把节奏强行拉回。",
  ],
  Jinx: [
    "机枪与火箭的切换决定输出形态：机枪打持续，火箭打范围与远距离压制。",
    "Q 启动后需要稳定站位输出，一旦被频繁打断，伤害会明显缩水。",
    "被动击杀刷新后会大幅抬高收割能力，最强的时间点通常在残局追击。",
  ],
  Karma: [
    "RQ 是最稳定的消耗与压血手段，决定她前中期的对线和拉扯上限。",
    "E 不只是护盾，还负责给自己或队友创造进退场节奏，是最关键的保人与提速工具。",
    "梵咒资源怎么分配决定玩法重心：想打消耗看 RQ，想保人拉扯看 RE，想单抓反打看 RW。",
  ],
  Katarina: [
    "匕首落点就是输出路线，进场前先看能否安全吃到匕首，比盲目突脸更重要。",
    "E 负责重置位移与贴脸收刀，击杀或助攻后的刷新决定她的连杀能力。",
    "R 需要相对完整的站桩窗口，进场时机不对很容易被控制直接打断。",
  ],
  Leona: [
    "E 命中后接 Q 是最稳定的开团链，单点锁人能力很强。",
    "W 决定她能站多久，开团前能不能先开 W 往往直接影响成败。",
    "被动更依赖队友补伤害，因此她最怕先手到了但队友跟不上。",
  ],
  Lulu: [
    "E+Q 是最稳的消耗和留人起手，换血时既能打伤害也能兼顾保护。",
    "W 的目标选择决定玩法：给队友是提速增伤，给敌人是反手断节奏。",
    "R 更像救场和反开技能，适合等对手真正贴脸后再抬血线和击飞。",
  ],
  Lux: [
    "Q 命中是整套爆发的起点，没中时更适合继续用 E 拉扯和消耗。",
    "E 是主要清线与远程压血工具，也是她最稳定的探草和控区手段。",
    "R 更适合接在控制或被动铺垫之后补斩杀，而不是盲狙当唯一输出来源。",
  ],
  Malphite: [
    "对线期更多靠 Q 偷移速做换血，真正决定强度的是能否平稳等到团战。",
    "W 和 E 让他更擅长贴身短换和前排站场，面对物理近战时收益更高。",
    "R 是最关键的先手按钮，命中多人时价值远高于单纯拿来补伤害。",
  ],
  Maokai: [
    "W 指向突进保证了他先手和保排都很稳定，适合抓关键位开节奏。",
    "Q 负责短位移打断和拉开身位，是近身拉扯与反开核心。",
    "E 和 R 更偏控区与封路，团战里能持续逼位置，而不是只看瞬间爆发。",
  ],
  MasterYi: [
    "普攻与双重打击是持续输出核心，能否稳定站住决定上限。",
    "Q 既是躲技能手段也是切入补伤害工具，乱交会让后续追击断档。",
    "R 一旦配合击杀刷新就能连续滚雪球，因此最看残局收割和进场时机。",
  ],
  Milio: [
    "E 和 W 是主要保人来源，重点不是自己打多少伤害，而是把队友输出窗口抬起来。",
    "Q 负责击退和减速，是他最重要的反开与救场按钮。",
    "R 适合在队友被强控或准备反打时交，不是单纯见残血就放。",
  ],
  Nami: [
    "E 强化普攻和技能是她最稳定的对拼增伤点，谁拿到 E 很关键。",
    "W 在近距离反复弹跳时收益最高，适合打短线消耗和保血线。",
    "Q 和 R 都偏预判控制，更适合接队友先手或封走位，而不是纯拼手速硬丢。",
  ],
  Nautilus: [
    "Q 是最主要的开团手段，但乱出钩会让自己和队友都失去节奏。",
    "被动定身加 R 指向击飞，让他在单点锁人和连控上非常稳定。",
    "W 开启后的普攻压制很强，适合贴身黏住核心目标打持续干扰。",
  ],
  Rell: [
    "W 两种形态切换决定她是开团还是撤退，不能只把它当成单纯位移。",
    "E 和 Q 让她更擅长打多人控制与破盾，团战人越密越容易打出上限。",
    "R 更像吸附留人和配合队友补控，不是单独进场就能秒人的技能。",
  ],
  Renata: [
    "W 是最关键的保核技能，给得太早容易浪费，给得太晚又救不回来。",
    "Q 和 E 负责拉扯与反开，重心是帮队友创造输出空间而不是自己灌爆发。",
    "R 更适合在对手抱团冲脸时反手扭转团战，越多人吃到价值越高。",
  ],
  Sejuani: [
    "被动与近身连招让她更擅长先手吃伤害，越能稳住第一波越容易赢。",
    "Q 进场后要尽快接 W 和 E 叠层，不然控制链和爆发都会掉很多。",
    "R 的远距离先手很强，但近身时留作补控往往更稳定。",
  ],
  Seraphine: [
    "被动双重施法决定她的技能节奏，提前规划哪一发要强化很重要。",
    "Q 和 E 负责远程消耗与连控，命中率决定她能否稳定打出团队价值。",
    "W 与 R 是团战胜负手，前者保队友续航，后者负责先手或反手扩大控制链。",
  ],
  Sett: [
    "Q 和连续普攻是贴脸压制核心，近身站稳后持续输出很高。",
    "W 的豪意管理决定他能不能打出关键反杀，越吃到集火越要留好出手窗口。",
    "E 和 R 都是强开与反开工具，更适合围绕关键前排或核心位打阵型破坏。",
  ],
  Sona: [
    "技能循环越不断档，她的团队增益和消耗就越稳定，是典型的节奏型辅助。",
    "Q、W、E 不是单看单次效果，而是看光环与能量和弦如何连续交替。",
    "R 是唯一硬控，更多用来定关键反打或保命，而不是随手先手开团。",
  ],
  Soraka: [
    "Q 命中后续航会明显提升，所以能不能稳中 Q 决定她能站多久。",
    "W 是最直接的保核手段，但会消耗自己血线，资源分配非常关键。",
    "E 和 R 都偏救场，前者断连招，后者抬全队血线，适合处理突发爆发。",
  ],
  Swain: [
    "E 命中拉回后是最稳的连招起点，决定他能否打出完整持续伤害。",
    "Q 贴脸时伤害最高，因此他越能黏住目标，回合压制越强。",
    "R 开启后要尽量延长站场时间，站得越久越能把回复和范围伤害打满。",
  ],
  Syndra: [
    "Q 是最主要的消耗、清线和铺球手段，地上的法球数量决定她后续控制与爆发上限。",
    "W 能抓起法球或小兵补第二段伤害与减速，常和 Q 连用抬高一轮瞬间爆发。",
    "R 会把场上所有法球一起打向目标，球越多伤害越高，是最核心的单点斩杀手段。",
  ],
  Vayne: [
    "三环是主要持续伤害来源，能否持续对同一目标输出决定上限。",
    "Q 是核心拉扯与补伤害技能，翻滚后的位置往往比那一下额外伤害更重要。",
    "R 开启后更适合围绕隐身和短位移反复换角度，打残局时最强。",
  ],
  Velkoz: [
    "被动三层解构是真实伤害核心，技能命中顺序决定爆发质量。",
    "Q 和 E 更偏消耗与控场，先逼走位再接 W 或 R 更容易打满。",
    "R 需要相对稳定的输出窗口，最好在队友或自己先控住人后再交。",
  ],
  Xerath: [
    "Q 是最主要的清线和远程消耗手段，命中率直接决定存在感。",
    "W 和 E 用来补控制和自保，通常先逼走位再接 E 会更稳定。",
    "R 更像远距离收割和压残血，不适合在正面没人帮你控的时候硬灌。",
  ],
  Ziggs: [
    "Q 是最稳定的远程消耗技能，持续命中才能真正压出血线优势。",
    "W 不只是位移和击退，还关系到拆塔与自保，是最关键的功能技能之一。",
    "E 与 R 更适合封走位和补范围伤害，团战重心是控空间而不是贴脸硬拼。",
  ],
};

function buildChampionAntiPatterns(profile) {
  const texts = [];

  if (
    profile.rangeType === "melee" ||
    profile.survivalStyles.includes("frontline") ||
    profile.utilityTags.includes("engage")
  ) {
    texts.push("如果关键进场或控制没有命中，近身站场后的承伤压力会明显上升。");
    texts.push("面对持续拉扯和远程消耗时，进场窗口被拖慢后较难稳定兑现整套技能。");
  } else if (
    profile.scalingTags.includes("heal_shield") ||
    profile.utilityTags.includes("peel")
  ) {
    texts.push("如果关键保护技能交得过早，后续保人与拉扯价值会明显下降。");
    texts.push("面对强开或连续突进时，站位被压缩后很难完整打出保护与反手节奏。");
  } else if (profile.damagePatterns.includes("attack")) {
    texts.push("如果输出环境被持续打断，普攻节奏和持续伤害会明显下滑。");
    texts.push("面对高强度控制或强开时，缺少安全输出空间会让主要收益更难兑现。");
  } else {
    texts.push("如果关键技能命中率不足，英雄的主要伤害与控制价值会明显下降。");
    texts.push("面对高强度突进或拉扯时，技能循环被打断后很难稳定兑现回合强度。");
  }

  return texts;
}

function buildAugmentPositiveSignals(profile) {
  const signals = [];

  if (profile.triggerTypes.includes("on_attack")) {
    signals.push("适合能稳定用普攻或攻击特效反复触发收益的英雄。");
  } else if (profile.triggerTypes.includes("on_skill")) {
    signals.push("适合能稳定用技能循环触发收益的英雄。");
  } else if (profile.triggerTypes.includes("on_cc")) {
    signals.push("适合能频繁打出控制并把触发窗口稳定兑现的英雄。");
  } else {
    signals.push("适合能把常驻或被动收益稳定转成回合强度的英雄。");
  }

  if (profile.rewardTypes.includes("damage")) {
    signals.push("当英雄能把额外伤害或成长稳定转成压制与击杀时，这类收益最容易兑现。");
  } else if (profile.rewardTypes.includes("survival")) {
    signals.push("当英雄需要更长站场或更高容错来兑现输出与控制时，这类收益更稳定。");
  } else if (profile.rewardTypes.includes("utility")) {
    signals.push("当英雄能把保护、控制或团队增益持续传递给队友时，这类收益更稳定。");
  } else {
    signals.push("当英雄能把额外资源稳定转成节奏优势时，这类收益更容易发挥。");
  }

  return signals;
}

function buildAugmentTrapSignals(profile) {
  const signals = [];

  if (profile.triggerTypes.includes("on_attack")) {
    signals.push("如果英雄难以持续普攻或很难稳定触发攻击特效，这类收益就容易空转。");
  } else if (profile.triggerTypes.includes("on_skill")) {
    signals.push("如果英雄技能命中率不足或触发窗口太短，这类收益很难稳定兑现。");
  } else if (profile.triggerTypes.includes("on_cc")) {
    signals.push("如果英雄控制频率不足或很难抓到触发窗口，这类收益就会明显下滑。");
  } else {
    signals.push("如果英雄无法把被动收益稳定转成回合表现，这类海克斯的价值会明显缩水。");
  }

  if (profile.riskTags.includes("high_condition")) {
    signals.push("这类海克斯本身条件较高，命中、构筑或站场窗口不够稳定时很容易空转。");
  } else if (profile.riskTags.includes("team_comp_dependent")) {
    signals.push("如果队友无法稳定承接增益或阵容缺少配合点，这类团队向收益会变弱。");
  } else {
    signals.push("如果对局节奏和英雄玩法与收益方向不匹配，整体性价比通常不如更泛用的选项。");
  }

  return signals;
}

function normalizeChampionProfile(profile, factsMap, championDisplayOverrides) {
  const fact = factsMap.get(profile.id);
  const display = championDisplayOverrides[profile.id];

  const abilities = profile.abilities.map((ability, index) => {
    const factAbility = fact?.abilities[index];
    return factAbility
      ? {
          ...ability,
          name: factAbility.name,
          summary: factAbility.summary,
        }
      : ability;
  });

  return {
    ...profile,
    name: display?.name ?? fact?.name ?? profile.name,
    title: display?.title ?? fact?.title ?? profile.title,
    coreMechanics:
      championCoreMechanicOverrides[profile.id] ??
      (display?.highlights?.length >= 3
        ? [...display.highlights]
        : profile.coreMechanics),
    antiPatterns: buildChampionAntiPatterns(profile),
    abilities,
    verification: {
      ...profile.verification,
      evidence: profile.verification.evidence.map((item) => {
        if (item.sourceType === "riot-ddragon" && item.locale === "zh_CN") {
          return {
            ...item,
            note: "英雄中文名、称号、技能名与技能描述的权威来源。",
          };
        }

        if (item.sourceType === "riot-ddragon" && item.locale === "en_US") {
          return {
            ...item,
            note: "英文技能描述与机制边界的辅助校对来源。",
          };
        }

        return item;
      }),
      notes: ["画像标签依据官方技能文本与机制特征整理。"],
    },
  };
}

function normalizeAugmentProfile(profile, factsMap, augmentDisplayOverrides) {
  const fact = factsMap.get(profile.id);
  const display = augmentDisplayOverrides[profile.id];

  return {
    ...profile,
    localizedName:
      display?.localizedName ?? fact?.localizedName ?? profile.localizedName,
    summary:
      augmentSummaryOverrides[profile.id] ??
      display?.summary ??
      fact?.localizedSummary ??
      profile.summary,
    positiveSignals: buildAugmentPositiveSignals(profile),
    trapSignals: buildAugmentTrapSignals(profile),
    verification: {
      ...profile.verification,
      evidence: profile.verification.evidence.map((item) => {
        if (item.sourceType === "official-client") {
          return {
            ...item,
            note: "客户端导出的 Arena 强化符文名称、描述、图标与数值字段。",
          };
        }

        if (item.sourceType === "community-mirror") {
          return {
            ...item,
            note: "条目 ID、英文名、稀有度与图标路径的辅助校对来源。",
          };
        }

        if (item.sourceType === "riot-support") {
          return {
            ...item,
            note: "用于确认 Arena 模式与强化符文规则语义的官方说明。",
          };
        }

        return item;
      }),
      notes: ["已用客户端导出、条目清单与 Riot 模式说明交叉验证。"],
    },
  };
}

async function rewriteChampionFiles(championFactsMap, championDisplayOverrides) {
  const entries = await readdir(championsDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith(".ts") || entry.name === "index.ts") {
      continue;
    }

    const relativePath = path.join("src", "data", "champions", entry.name);
    const source = await readFile(path.join(championsDir, entry.name), "utf8");
    const exportMatch = source.match(/export const (\w+): ChampionProfile\[\]/);

    if (!exportMatch) {
      throw new Error(`无法解析导出名: ${relativePath}`);
    }

    const moduleExports = await loadTsModule(relativePath);
    const exportName = exportMatch[1];
    const profiles = moduleExports[exportName];
    const normalizedProfiles = profiles.map((profile) =>
      normalizeChampionProfile(profile, championFactsMap, championDisplayOverrides),
    );

    const output = [
      'import type { ChampionProfile } from "@/lib/recommendation/types";',
      "",
      'const ddragonVersion = "16.8.1";',
      'const reviewedAt = "2026-04-25";',
      "",
      `export const ${exportName}: ChampionProfile[] = ${formatValue(normalizedProfiles)};`,
      "",
    ].join("\n");

    await writeFile(path.join(championsDir, entry.name), output, "utf8");
  }
}

async function rewriteAugmentFiles(augmentFactsMap, augmentDisplayOverrides) {
  const entries = await readdir(augmentsDir, { withFileTypes: true });

  for (const entry of entries) {
    if (
      !entry.isFile() ||
      !entry.name.endsWith(".ts") ||
      entry.name === "index.ts" ||
      entry.name === "allowlist.ts"
    ) {
      continue;
    }

    const relativePath = path.join("src", "data", "augments", entry.name);
    const source = await readFile(path.join(augmentsDir, entry.name), "utf8");
    const exportMatch = source.match(/export const (\w+): AugmentProfile\[\]/);

    if (!exportMatch) {
      throw new Error(`无法解析导出名: ${relativePath}`);
    }

    const moduleExports = await loadTsModule(relativePath);
    const exportName = exportMatch[1];
    const profiles = moduleExports[exportName];
    const normalizedProfiles = profiles.map((profile) =>
      normalizeAugmentProfile(profile, augmentFactsMap, augmentDisplayOverrides),
    );

    const output = [
      'import type { AugmentProfile } from "@/lib/recommendation/types";',
      "",
      'const reviewedAt = "2026-04-25";',
      "",
      `export const ${exportName}: AugmentProfile[] = ${formatValue(normalizedProfiles)};`,
      "",
    ].join("\n");

    await writeFile(path.join(augmentsDir, entry.name), output, "utf8");
  }
}

async function main() {
  const [championFacts, augmentFacts, displayOverrides] = await Promise.all([
    readJson("tmp/intake-batches/full-facts-intake-2026-04-25/champion-facts.json"),
    readJson("tmp/intake-batches/full-facts-intake-2026-04-25/augment-facts.json"),
    loadTsModule("src/data/display-overrides.ts"),
  ]);

  const championFactsMap = buildChampionFactsMap(championFacts);
  const augmentFactsMap = buildAugmentFactsMap(augmentFacts);

  await rewriteChampionFiles(
    championFactsMap,
    displayOverrides.championDisplayOverrides ?? {},
  );
  await rewriteAugmentFiles(
    augmentFactsMap,
    displayOverrides.augmentDisplayOverrides ?? {},
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
