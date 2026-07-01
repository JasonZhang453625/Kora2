"use client";

import { useLocale } from "@/lib/context";
import Button from "./Button";

export default function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent-muted/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent-muted/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl flex flex-col items-center text-center gap-10">
        <div className="space-y-4">
          <h1 className="font-mono font-bold text-text-primary leading-tight text-[clamp(1.8rem,4.5vw,3.5rem)]">
            {t.hero.title}
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
        </div>

        {/* Telegram chat preview */}
        <div className="w-full max-w-md rounded-xl border border-border bg-white shadow-xl p-5 text-left">
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm">
              K
            </div>
            <div>
              <div className="font-semibold text-text-primary text-sm">KORA</div>
              <div className="text-xs text-text-secondary">Online 🇨🇳</div>
            </div>
            <div className="ml-auto">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-start">
              <div className="bg-accent/10 text-text-primary rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm max-w-[85%] leading-relaxed">
                {t.hero.chatPreview.user1}
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-accent text-white rounded-2xl rounded-br-sm px-4 py-2.5 text-sm max-w-[85%] leading-relaxed">
                {t.hero.chatPreview.bot1}
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-accent/10 text-text-primary rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm max-w-[85%] leading-relaxed">
                {t.hero.chatPreview.user2}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap justify-center">
          <Button variant="primary" href="https://t.me/KORA_bot">
            {t.hero.cta} ↗
          </Button>
          <Button variant="ghost" href="#screenshots">
            {t.hero.viewScreenshots} ↓
          </Button>
        </div>
      </div>
    </section>
  );
}
