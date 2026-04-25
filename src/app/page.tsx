import { QueryPanel } from "@/components/query-panel";

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <div className="hero-badge">海克斯大乱斗候选强化推荐</div>
        <h1>Hero Pro</h1>
        <p className="hero-lead">
          帮助玩家在海克斯大乱斗里，面对陌生候选强化时快速看懂优先级、适配原因和风险点。
        </p>

        <div className="hero-actions">
          <span className="status-pill status-pill-active">当前阶段：数据底座搭建</span>
          <span className="status-pill">只允许已验证资料进入正式推荐</span>
        </div>
      </section>

      <section className="grid-section">
        <article className="info-card">
          <h2>用户只做三步</h2>
          <ol>
            <li>选择当前英雄</li>
            <li>勾选本局出现的候选强化</li>
            <li>直接查看排序、理由和避坑提示</li>
          </ol>
        </article>

        <article className="info-card">
          <h2>推荐必须可信</h2>
          <ul>
            <li>英雄机制画像优先使用 Riot 权威静态数据</li>
            <li>强化符文机制需要官方说明与客户端文本交叉验证</li>
            <li>未验证完成的条目不会进入生产推荐</li>
          </ul>
        </article>
      </section>

      <section className="grid-section">
        <article className="info-card">
          <h2>当前建设重点</h2>
          <ul>
            <li>建立全量英雄机制画像字段</li>
            <li>建立全量强化符文机制画像字段</li>
            <li>完成可解释推荐规则和证据校验</li>
          </ul>
        </article>

        <article className="info-card">
          <h2>产品原则</h2>
          <ul>
            <li>不瞎编机制</li>
            <li>不堆砌无关信息</li>
            <li>不做看不懂的黑盒结论</li>
          </ul>
        </article>
      </section>

      <QueryPanel />

      <section className="notice-card">
        <h2>非官方声明</h2>
        <p>
          Hero Pro is not endorsed by Riot Games and does not reflect the views
          or opinions of Riot Games or anyone officially involved in producing
          or managing Riot Games properties. Riot Games and all associated
          properties are trademarks or registered trademarks of Riot Games, Inc.
        </p>
      </section>
    </main>
  );
}
