"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/lib/context";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16">
        <a href="#" className="font-mono font-bold text-lg text-text-primary">
          KORA
        </a>

        <nav className="flex items-center gap-6">
          <LanguageToggle />
          <a
            href="https://github.com/JasonZhang453625/KORA2"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-text-secondary hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="#install"
            className="font-mono text-sm font-semibold px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent-light transition-colors"
          >
            {t.header.install}
          </a>
        </nav>
      </div>
    </header>
  );
}
