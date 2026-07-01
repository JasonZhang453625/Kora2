"use client";

import Image from "next/image";
import { useLocale } from "@/lib/context";
import Button from "./Button";

export default function CTASection() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 border-t border-border">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-bg-primary/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative max-w-2xl text-center">
        <h2 className="font-mono font-bold text-2xl md:text-3xl text-text-primary mb-4">
          {t.cta.title}
        </h2>
        <p className="text-text-secondary mb-8 text-lg">{t.cta.subtitle}</p>
        <Button variant="primary" href="https://t.me/KORA_bot">
          {t.cta.button} ↗
        </Button>
      </div>
    </section>
  );
}
