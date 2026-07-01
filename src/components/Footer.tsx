"use client";

import { useLocale } from "@/lib/context";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <a
            href="https://commandcode.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-bold text-text-primary hover:text-accent transition-colors"
          >
            {t.footer.madeBy}
          </a>
          <p className="text-sm text-text-secondary mt-1">{t.footer.desc}</p>
        </div>

        <div className="flex items-center gap-6 text-sm font-mono text-text-secondary">
          <a
            href="https://github.com/JasonZhang453625/KORA2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <span>{t.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
