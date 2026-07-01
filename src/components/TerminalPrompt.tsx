"use client";

import { useState, useEffect } from "react";

const lines = [
  { prompt: "$", text: "cmdc", color: "text-text-primary" },
  { prompt: "○", text: "KORA is ready", color: "text-accent" },
];

export default function TerminalPrompt() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typing, setTyping] = useState(true);
  const [typedText, setTypedText] = useState("");
  const fullText = lines[0].text;

  useEffect(() => {
    if (visibleLines === 0) {
      if (typedText.length < fullText.length) {
        const t = setTimeout(
          () => setTypedText(fullText.slice(0, typedText.length + 1)),
          80
        );
        return () => clearTimeout(t);
      }
      setTyping(false);
      const t = setTimeout(() => setVisibleLines(1), 600);
      return () => clearTimeout(t);
    }
  }, [typedText, visibleLines, fullText]);

  return (
    <div className="w-full max-w-lg rounded-xl border border-border bg-bg-tertiary p-4 font-mono text-sm leading-relaxed shadow-xl">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-amber-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
      </div>
      <div>
        <span className="text-accent">{lines[0].prompt}</span>{" "}
        <span className={lines[0].color}>{typedText}</span>
        {visibleLines === 0 && typing && (
          <span className="inline-block w-2 h-4 bg-accent ml-0.5 animate-blink" />
        )}
        {visibleLines === 0 && !typing && (
          <span className="inline-block w-2 h-4 bg-accent ml-0.5 animate-blink" />
        )}
      </div>
      {visibleLines >= 1 && (
        <div className="animate-fade-in mt-1">
          <span className="text-accent">{lines[1].prompt}</span>{" "}
          <span className={lines[1].color}>{lines[1].text}</span>
          <span className="inline-block w-2 h-4 bg-accent ml-0.5 animate-blink" />
        </div>
      )}
    </div>
  );
}
