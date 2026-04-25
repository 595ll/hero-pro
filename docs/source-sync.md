# Hero Pro 数据同步

## 目标

- 把权威源和客户端导出源同步到本地缓存目录。
- 避免后续扩全量英雄和海克斯时重复手工抓取。
- 固定版本、固定目录、固定文件结构，便于复核。

## 命令

```bash
npm run sync:sources
```

可选参数：

```bash
npm run sync:sources -- --champions=Lux,Ezreal,Darius
npm run sync:sources -- --all-champions
npm run sync:sources -- --ddragon-version=16.8.1 --arena-version=15.11
```

## 当前同步内容

- Data Dragon 版本列表
- 指定英雄或全量英雄的 `zh_CN / en_US` 官方静态数据
- 对应 locale 的 `champion-summary.json`
- Arena 的 `en_us / zh_cn` 客户端导出 JSON
- `cherry-augments.json` 条目清单镜像

## 输出目录

- `source-cache/manifest.json`
- `source-cache/ddragon/...`
- `source-cache/arena/...`

## 使用原则

- 缓存目录只作为采集与复核材料，不直接作为前台生产数据。
- 进入生产的数据仍然要经过画像整理、证据记录和验证状态判断。
- 若版本升级，优先重新同步，再决定是否批量更新已有画像。
- `--all-champions` 只代表缓存补齐，不代表这些英雄已经具备生产画像质量。
