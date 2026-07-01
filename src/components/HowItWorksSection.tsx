"use client";

import { useLocale } from "@/lib/context";

export default function HowItWorksSection() {
  const { t } = useLocale();

  const steps = [
    { num: "01", key: "step1" as const },
    { num: "02", key: "step2" as const },
    { num: "03", key: "step3" as const },
  ];

  return (
    <section className="min-h-screen flex items-center px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-mono font-bold text-2xl md:text-3xl text-text-primary mb-3">
            {t.howItWorks.title}
          </h2>
          <p className="text-text-secondary">{t.howItWorks.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => {
            const titleKey = step.key;
            const descKey = `${step.key}Desc` as keyof typeof t.howItWorks;
            return (
              <div key={step.num} className="relative text-center">
                <div className="font-mono text-4xl font-bold text-accent-muted mb-4">
                  {step.num}
                </div>
                <h3 className="font-mono font-bold text-lg text-text-primary mb-2">
                  {t.howItWorks[titleKey]}
                </h3>
                <p className="text-text-secondary">
                  {t.howItWorks[descKey]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
