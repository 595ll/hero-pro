import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hero Pro",
  description: "海克斯大乱斗候选强化推荐工具。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
