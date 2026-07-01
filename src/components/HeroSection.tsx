"use client";

import { useLocale } from "@/lib/context";
import TerminalPrompt from "./TerminalPrompt";
import CodeBlock from "./CodeBlock";
import Button from "./Button";

export default function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent-muted/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent-muted/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl flex flex-col items-center text-center gap-10">
        <div className="space-y-4">
          <h1 className="font-mono font-bold text-text-primary leading-tight text-[clamp(2rem,5vw,4rem)]">
            {t.hero.title}
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
        </div>

        <TerminalPrompt />

        <div className="w-full max-w-lg">
          <CodeBlock code={t.hero.install} />
        </div>

        <div className="flex items-center gap-4 flex-wrap justify-center">
          <Button
            variant="secondary"
            href="https://github.com/JasonZhang453625/KORA2"
          >
            {t.hero.viewGithub}
          </Button>
          <Button variant="ghost" href="#screenshots">
            {t.hero.viewScreenshots} ↓
          </Button>
        </div>
      </div>
    </section>
  );
}
