"use client";

import Image from "next/image";
import { useLocale } from "@/lib/context";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  const { t } = useLocale();

  const features = [
    { emoji: "🍜", key: "food" as const },
    { emoji: "🍸", key: "nightlife" as const },
    { emoji: "🚕", key: "navigation" as const },
    { emoji: "💳", key: "survival" as const },
  ];

  return (
    <section className="min-h-screen flex items-center px-6 py-24 bg-bg-secondary">
      <div className="mx-auto max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text + feature cards */}
          <div>
            <h2 className="font-mono font-bold text-2xl md:text-3xl text-text-primary mb-4">
              {t.features.title}
            </h2>
            <p className="text-text-secondary mb-10">{t.features.subtitle}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f) => {
                const titleKey = f.key;
                const descKey = `${f.key}Desc` as keyof typeof t.features;
                return (
                  <FeatureCard
                    key={f.key}
                    emoji={f.emoji}
                    title={t.features[titleKey]}
                    description={t.features[descKey]}
                  />
                );
              })}
            </div>
          </div>

          {/* Right: screenshot 3 */}
          <div className="rounded-xl border border-border overflow-hidden shadow-2xl max-w-sm mx-auto lg:mx-0 lg:ml-auto">
            <Image
              src="/images/3.jpg"
              alt="KORA recommendations"
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
