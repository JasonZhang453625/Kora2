"use client";

import { useState } from "react";
import { useLocale } from "@/lib/context";
import Image from "next/image";
import ScreenshotLightbox from "./ScreenshotLightbox";

const images = [
  { src: "/images/1.jpg", alt: "KORA Telegram chat screenshot 1" },
  { src: "/images/2.jpg", alt: "KORA Telegram chat screenshot 2" },
  { src: "/images/3.jpg", alt: "KORA Telegram chat screenshot 3" },
];

export default function ScreenshotsSection() {
  const { t } = useLocale();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="screenshots" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-mono font-bold text-2xl md:text-3xl text-text-primary mb-3">
            {t.screenshots.title}
          </h2>
          <p className="text-text-secondary">{t.screenshots.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="group relative overflow-hidden rounded-xl border border-border bg-bg-secondary transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <ScreenshotLightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((prev) =>
              prev !== null ? (prev - 1 + images.length) % images.length : 0
            )
          }
          onNext={() =>
            setLightboxIndex((prev) =>
              prev !== null ? (prev + 1) % images.length : 0
            )
          }
        />
      )}
    </section>
  );
}
