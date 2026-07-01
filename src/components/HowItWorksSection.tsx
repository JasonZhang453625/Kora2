"use client";

import { useLocale } from "@/lib/context";

const steps = [
  { num: "01", key: "step1" as const },
  { num: "02", key: "step2" as const },
  { num: "03", key: "step3" as const },
];

export default function HowItWorksSection() {
  const { t } = useLocale();

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-mono font-bold text-2xl md:text-3xl text-text-primary mb-3">
            {t.howItWorks.title}
          </h2>
          <p className="text-text-secondary">{t.howItWorks.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const s = t.howItWorks[step.key as keyof typeof t.howItWorks] as unknown as string;
            const descKey = `${step.key}Desc` as keyof typeof t.howItWorks;
            const desc = t.howItWorks[descKey] as unknown as string;
            return (
              <div key={step.num} className="relative text-center">
                <div className="font-mono text-4xl font-bold text-accent-muted mb-4">
                  {step.num}
                </div>
                <h3 className="font-mono font-bold text-lg text-text-primary mb-2">
                  {s}
                </h3>
                <p className="font-mono text-sm text-accent mb-3">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
