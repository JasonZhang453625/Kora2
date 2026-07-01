"use client";

import Image from "next/image";
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
      <div className="mx-auto max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <h2 className="font-mono font-bold text-2xl md:text-3xl text-text-primary mb-4">
              {t.howItWorks.title}
            </h2>
            <p className="text-text-secondary mb-12">{t.howItWorks.subtitle}</p>

            <div className="space-y-10">
              {steps.map((step) => {
                const titleKey = step.key;
                const descKey = `${step.key}Desc` as keyof typeof t.howItWorks;
                return (
                  <div key={step.num} className="flex gap-5">
                    <div className="font-mono text-2xl font-bold text-accent shrink-0 w-8">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-mono font-bold text-lg text-text-primary mb-1">
                        {t.howItWorks[titleKey]}
                      </h3>
                      <p className="text-text-secondary">
                        {t.howItWorks[descKey]}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: screenshot */}
          <div className="rounded-xl border border-border overflow-hidden shadow-lg">
            <Image
              src="/images/1.jpg"
              alt="KORA Telegram chat"
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
