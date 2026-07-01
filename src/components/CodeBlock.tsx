"use client";

import { useState } from "react";
import { useLocale } from "@/lib/context";

interface Props {
  code: string;
  lang?: string;
  prompt?: string;
}

export default function CodeBlock({ code, lang = "bash", prompt = "$" }: Props) {
  const { t, locale } = useLocale();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-bg-tertiary">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border">
        <span className="text-xs font-mono text-text-secondary">{lang}</span>
        <button
          onClick={copy}
          className="text-xs font-mono text-text-secondary hover:text-accent transition-colors"
        >
          {copied ? `✓ ${t.hero.copied}` : locale === "zh" ? "复制" : "Copy"}
        </button>
      </div>
      <div className="relative">
        <pre className="overflow-x-auto p-4 text-sm font-mono leading-relaxed">
          <code>
            <span className="text-accent">{prompt}</span>{" "}
            <span className="text-text-primary">{code}</span>
          </code>
        </pre>
      </div>
    </div>
  );
}
