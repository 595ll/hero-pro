# 推荐回归校验

## 目标

- 为推荐规则提供一套固定、可重复运行的稳定性闸门。
- 在继续扩英雄和海克斯、或调整 `rules.ts` 后，快速发现排序回归。

## 脚本

- 运行命令：`npm run audit:recommendations`
- 脚本文件：`scripts/audit-recommendations.mjs`

## 当前基准样例

- `Lulu` 在 `All For You / Sonic Boom / Typhoon` 中，优先 `All For You`
- `Vayne` 在 `Typhoon / Mystic Punch / All For You` 中，优先 `Typhoon`
- `Swain` 在 `Big Brain / Jeweled Gauntlet / Goredrink` 中，优先 `Big Brain`
- `Leona` 在 `Slap Around / Goredrink / Skilled Sniper` 中，不应把 `Skilled Sniper` 排到第一
- `Lux` 在 `Skilled Sniper / All For You / Goredrink` 中，优先 `Skilled Sniper`
- `Soraka` 在 `All For You / Sonic Boom / Big Brain` 中，优先 `All For You` 或 `Sonic Boom`
- `Brand` 在 `Jeweled Gauntlet / Bread And Butter / Witchful Thinking` 中，优先 `Jeweled Gauntlet`
- `Master Yi` 在 `Master of Duality / Mystic Punch / All For You` 中，优先 `Master of Duality`
- `Darius` 在 `Spin To Win / All For You / Skilled Sniper` 中，优先 `Spin To Win`
- `Ezreal` 在 `Bread And Butter / All For You / Perseverance` 中，优先 `Bread And Butter`
- `Janna` 在 `All For You / Sonic Boom / Typhoon` 中，优先 `All For You` 或 `Sonic Boom`
- `Milio` 在 `All For You / Sonic Boom / Typhoon` 中，优先 `All For You` 或 `Sonic Boom`
- `Nami` 在 `All For You / Sonic Boom / Skilled Sniper` 中，优先 `All For You` 或 `Sonic Boom`
- `Karma / Seraphine / Renata` 在 `Master of Duality / Spin To Win` 中，`Spin To Win` 不应高于 `Master of Duality`
- `Renata` 在 `Bread And Butter / All For You / Sonic Boom` 中，`Bread And Butter` 不应排第一
- `Karma` 在 `ADAPt / escAPADe / All For You` 中，优先 `All For You`
- `Alistar / Rell / Amumu / Maokai / Sejuani` 在 `Slap Around / Perseverance / Goredrink` 中，优先 `Slap Around`
- `Nautilus` 在 `Slap Around / Perseverance / Skilled Sniper` 中，优先 `Slap Around`

## 使用原则

- 该脚本是稳定性闸门，不是完整真值系统。
- 如果断言失败，优先判断是：
  - 规则误判
  - 新增数据画像改变了原有关系
  - 基准样例本身需要升级
- 在没有解释清楚原因前，不应直接放行规则改动。
