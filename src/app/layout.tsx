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
  title: "KORA — Your AI Companion in China",
  description:
    "Chat with KORA on Telegram for the best food, travel, and daily life recommendations across China.",
  openGraph: {
    title: "KORA — Your AI Companion in China",
    description:
      "Chat on Telegram to discover the best food, travel spots, and everyday essentials across China.",
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
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
