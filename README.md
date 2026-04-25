# Hero Pro

这是一个基于 Next.js App Router 的基础项目骨架，包含：

- TypeScript
- ESLint
- `src/` 目录结构
- `@/*` 路径别名

## 开始使用

1. 安装 Node.js 20.9 或更高版本
2. 在项目根目录安装依赖
3. 启动开发服务器

```bash
npm install
npm run dev
```

默认访问地址：

[http://localhost:3000](http://localhost:3000)

## 数据同步

项目提供了一个本地数据同步脚本，用于抓取英雄官方静态数据和 Arena 客户端导出数据：

```bash
npm run sync:sources
```

更详细的说明见 [source-sync.md](file:///c:/Users/29403/Documents/trae_projects/hero-pro/docs/source-sync.md)。
