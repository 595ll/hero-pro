import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hero Pro",
  description: "A Next.js app bootstrapped for hero-pro.",
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
