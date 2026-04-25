# Hero Pro 数据审计

## 目标

- 在扩充英雄画像和海克斯画像前，先自动检查数据底座是否仍然干净。
- 避免出现重复 ID、证据链缺失、已验证状态与真实来源不匹配等问题。

## 命令

```bash
npm run audit:data
```

## 当前审计范围

- 自动扫描 `src/data/champions` 和 `src/data/augments` 下的 `*-batch.ts`
- 英雄 `id / key` 唯一性
- 海克斯 `id / name` 唯一性
- 核心字段完整性
- 已验证条目的最低证据要求

## 当前规则

### 英雄画像

- 必须有中文名、称号、技能条目、核心机制、反模式提示
- `abilities` 必须为 5 个
- `verified` 条目必须带 `riot-ddragon` 证据

### 海克斯画像

- 必须有英文名、中文名、摘要、正式描述、收益类型、触发类型
- 必须有正向信号和避坑信号
- `verified` 条目必须同时带：
  - `official-client`
  - `riot-support`
  - `community-mirror`

## 使用原则

- 扩新批次前先跑一次
- 改证据链或验证状态后再跑一次
- 若审计失败，先修数据，再继续扩量
- 新增批次文件只要遵循 `*-batch.ts` 命名，就会被审计自动纳入
