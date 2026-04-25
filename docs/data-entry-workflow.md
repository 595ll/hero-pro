# Hero Pro 数据录入流程

## 目标

- 为英雄画像和海克斯画像建立统一录入流程。
- 保证每条数据都能回溯到来源与版本。
- 让后续批量扩展时不需要反复修改字段结构。

## 录入顺序

### 1. 先确认资料来源

- 英雄资料优先使用 Riot Data Dragon 与官方文本。
- 海克斯资料优先使用 Riot 官方模式说明、客户端文本与可验证资源。
- 社区站点只做条目核对与图标中文名辅助比对。

### 1.5 先生成事实层审查包

- 推荐先执行批量事实导入，而不是直接手写最终画像。
- 使用：
  - `npm run intake:batch -- --batch-name=<批次名> --champions=A,B --augments=1,2,3`
  - `npm run intake:batch -- --batch-name=<批次名> --all-champions --all-augments`
  - `npm run intake:batch -- --batch-name=<批次名> --all-augments-raw`
- 产物会生成到 `tmp/intake-batches/<批次名>/`
- 自动生成内容仅限：
  - 官方事实字段
  - 基础证据骨架
  - `provisional` 草稿模块
- `--all-augments` 只导出当前生产候选海克斯 allowlist
- `--all-augments-raw` 才表示导出原始客户端 augment 池，且仅用于事实层研究，不可直接接入生产
- 使用 `--all-champions` 前，必须先完成：
  - `npm run sync:sources -- --all-champions`
- 严禁把自动生成草稿直接接入生产索引

### 2. 再录基础事实

英雄：

- `id`
- `key`
- `name`
- `rangeType`
- 技能名称与技能简述

海克斯：

- `id`
- `name`
- `localizedName`
- `rarity`
- `officialDescription`

### 3. 最后补解释性标签

英雄：

- `damagePatterns`
- `combatTempos`
- `triggerTraits`
- `survivalStyles`
- `utilityTags`

海克斯：

- `rewardTypes`
- `triggerTypes`
- `preferredUsers`
- `playstyleFits`
- `riskTags`

## 证据要求

- 正式推荐的英雄画像必须：
  - `verification.status = verified`
  - 包含 `riot-ddragon` 证据
- 正式推荐的海克斯画像必须：
  - `verification.status = verified`
  - 同时包含 `official-client / riot-support / community-mirror`
  - `id` 已存在于 `src/data/augments/allowlist.ts`
- 无法确认的字段先标 `provisional`
- 有冲突或待确认项标 `needs_review`
- 新增关键 archetype 后，需要同步补至少 1 组推荐回归样例
- 全量事实层导入后，优先放行能直接由技能文本解释画像的英雄 archetype
- 描述仍带 `数值` 或其他未还原占位的海克斯，继续保留在 `provisional`

## 当前目录约定

- `src/data/champions`
  - 存放英雄画像数据
- `src/data/augments`
  - 存放海克斯画像数据
- `tmp/intake-batches`
  - 存放批量录入生成的事实层审查包与待审草稿
- `src/data/templates.ts`
  - 存放录入模板工厂
- `src/lib/recommendation/catalog.ts`
  - 聚合数据并提供推荐入口

## 当前录入原则

- 先做少量高质量样本，再做批量扩展
- 录入提效优先做在“事实层自动生成”，不做在“verified 自动放行”
- 一个条目录完后，立即检查证据、验证状态和字段完整性
- 不允许把“待确认”数据伪装成正式生产数据
- 不允许把原始客户端导出池直接等同于生产海克斯池
- 继续扩数时，优先补能提升回归基准覆盖面的 archetype，而不是纯追求数量
- 每新增一批关键 archetype，都要同步补回归样例，而不是只加条目
