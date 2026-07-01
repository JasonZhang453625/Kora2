import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import { LocaleProvider } from "@/lib/context";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KORA — 真正懂你品味的 AI 编程助手",
  description:
    "KORA (Command Code) 是首个会学习你编程品味的 AI 终端代理。安装后输入 cmdc 即可使用。",
  openGraph: {
    title: "KORA — AI Coding Agent That Learns Your Taste",
    description:
      "The first coding agent that learns your taste. Meta neuro-symbolic AI with continuous RL.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
