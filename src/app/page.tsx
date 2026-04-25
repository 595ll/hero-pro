export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "24px",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "720px",
          padding: "32px",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.08)",
          border: "1px solid rgba(255, 255, 255, 0.14)",
        }}
      >
        <p style={{ margin: 0, opacity: 0.8 }}>Next.js App Router</p>
        <h1 style={{ margin: "12px 0 16px", fontSize: "40px" }}>Hero Pro</h1>
        <p style={{ margin: 0, lineHeight: 1.7 }}>
          项目已经完成基础初始化。安装依赖后，运行 <code>npm run dev</code> 即可开始开发。
        </p>
      </section>
    </main>
  );
}
