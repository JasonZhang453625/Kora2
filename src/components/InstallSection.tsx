"use client";

import { useLocale } from "@/lib/context";
import CodeBlock from "./CodeBlock";

export default function InstallSection() {
  const { t } = useLocale();

  return (
    <section id="install" className="px-6 py-24 bg-bg-secondary">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-mono font-bold text-2xl md:text-3xl text-text-primary mb-3">
            {t.install.title}
          </h2>
          <p className="text-text-secondary">{t.install.subtitle}</p>
        </div>

        <div className="max-w-lg mx-auto">
          <CodeBlock code="npm i -g command-code" />
          <div className="mt-4 text-center">
            <span className="inline-flex items-center gap-2 font-mono text-xs text-text-secondary">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              v1.0.0
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
