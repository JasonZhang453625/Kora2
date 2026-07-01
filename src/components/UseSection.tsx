"use client";

import { useLocale } from "@/lib/context";

export default function UseSection() {
  const { t } = useLocale();

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-mono font-bold text-2xl md:text-3xl text-text-primary mb-3">
            {t.usage.title}
          </h2>
          <p className="text-text-secondary">{t.usage.subtitle}</p>
        </div>

        <div className="max-w-2xl mx-auto rounded-xl border border-border bg-bg-tertiary p-6 font-mono text-sm leading-relaxed">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div>
            <span className="text-accent">$</span>{" "}
            <span className="text-text-primary">{t.usage.example}</span>
          </div>
          <div className="mt-2 text-text-secondary">{t.usage.exampleDesc}</div>
        </div>
      </div>
    </section>
  );
}
