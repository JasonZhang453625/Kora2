"use client";

import { useLocale } from "@/lib/context";

export default function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <button
      onClick={() => setLocale(locale === "en" ? "zh" : "en")}
      className="font-mono text-sm text-text-secondary hover:text-accent transition-colors"
    >
      {locale === "en" ? "中" : "EN"}
    </button>
  );
}
