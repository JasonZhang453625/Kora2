"use client";

import { useLocale } from "@/lib/context";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <span className="font-mono font-bold text-text-primary">KORA</span>
          <p className="text-sm text-text-secondary mt-1">{t.footer.tagline}</p>
        </div>

        <div className="flex items-center gap-6 text-sm font-mono text-text-secondary">
          <a
            href="https://t.me/Kora_china_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Telegram
          </a>
          <span>{t.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
