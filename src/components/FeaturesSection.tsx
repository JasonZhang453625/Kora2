"use client";

import { useLocale } from "@/lib/context";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  const { t } = useLocale();

  const features = [
    { emoji: "🧠", key: "taste" as const },
    { emoji: "🔒", key: "privacy" as const },
    { emoji: "🤖", key: "models" as const },
    { emoji: "🔧", key: "mcp" as const },
  ];

  return (
    <section className="px-6 py-24 bg-bg-secondary">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-mono font-bold text-2xl md:text-3xl text-text-primary mb-3">
            {t.features.title}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => {
            const titleKey = f.key as keyof typeof t.features;
            const descKey = `${f.key}Desc` as keyof typeof t.features;
            return (
              <FeatureCard
                key={f.key}
                emoji={f.emoji}
                title={t.features[titleKey] as unknown as string}
                description={t.features[descKey] as unknown as string}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
