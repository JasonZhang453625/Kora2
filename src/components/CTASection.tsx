"use client";

import Image from "next/image";
import { useLocale } from "@/lib/context";
import Button from "./Button";

export default function CTASection() {
  const { t } = useLocale();

  return (
    <section className="min-h-screen flex items-center px-6 py-24 bg-accent/5 border-t border-border">
      <div className="mx-auto max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <h2 className="font-mono font-bold text-2xl md:text-3xl text-text-primary mb-4">
              {t.cta.title}
            </h2>
            <p className="text-text-secondary mb-8 text-lg">{t.cta.subtitle}</p>
            <Button variant="primary" href="https://t.me/KORA_bot">
              {t.cta.button} ↗
            </Button>
          </div>

          {/* Right: screenshot */}
          <div className="rounded-xl border border-border overflow-hidden shadow-lg">
            <Image
              src="/images/3.jpg"
              alt="KORA conversation"
              width={600}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
