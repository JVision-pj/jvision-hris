import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jvision 人資薪酬招募管理平台",
  description: "員工名冊、招募流程、薪資試算、請假核准與 AI 人資摘要 Demo",
  openGraph: {
    title: "Jvision 人資薪酬招募管理平台",
    description: "可互動展示的 HRIS Demo，整合員工資料、招募、薪酬、請假與 AI 摘要。",
    images: ["https://www.jvision-ai.com/public/logo.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
