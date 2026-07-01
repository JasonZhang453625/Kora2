"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Locale, TranslationDict } from "./i18n";
import { dictionaries, defaultLocale } from "./i18n";

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationDict;
};

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const stored = localStorage.getItem("kora-locale") as Locale | null;
    if (stored && (stored === "en" || stored === "zh")) {
      setLocale(stored);
    } else {
      const navLang = navigator.language.toLowerCase();
      if (navLang.startsWith("zh")) setLocale("zh");
      else setLocale("en");
    }
  }, []);

  const setAndStore = (l: Locale) => {
    setLocale(l);
    localStorage.setItem("kora-locale", l);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale: setAndStore, t: dictionaries[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
