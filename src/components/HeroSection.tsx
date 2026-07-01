"use client";

import Image from "next/image";
import { useLocale } from "@/lib/context";
import Button from "./Button";

export default function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-20 pb-24">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-bg-primary/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative mx-auto max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text + chat preview */}
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <h1 className="font-mono font-bold text-text-primary leading-tight text-[clamp(1.8rem,4.5vw,3.5rem)]">
                {t.hero.title}
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed">
                {t.hero.subtitle}
              </p>
            </div>

            {/* Telegram chat preview */}
            <div className="rounded-xl border border-border bg-white/95 backdrop-blur shadow-xl p-5 text-left">
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

            <div>
              <Button variant="primary" href="https://t.me/KORA_bot">
                {t.hero.cta} ↗
              </Button>
            </div>
          </div>

          {/* Right: screenshot 1 */}
          <div className="rounded-xl border border-border overflow-hidden shadow-lg max-w-sm mx-auto lg:mx-0 lg:ml-auto">
            <Image
              src="/images/1.jpg"
              alt="KORA Telegram chat"
              width={400}
              height={533}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
