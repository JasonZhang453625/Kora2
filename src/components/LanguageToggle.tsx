"use client";

import { useLocale } from "@/lib/context";

export default function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <button
      onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
      className="font-mono text-sm text-text-secondary hover:text-accent transition-colors"
    >
      {locale === "zh" ? "EN" : "中"}
    </button>
  );
}
