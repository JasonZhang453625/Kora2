"use client";

import { useLocale } from "@/lib/context";
import Button from "./Button";

export default function CTASection() {
  const { t } = useLocale();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-accent/5 border-t border-border">
      <div className="max-w-2xl text-center">
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
