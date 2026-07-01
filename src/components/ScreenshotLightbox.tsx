"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

interface Props {
  images: { src: string; alt: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function ScreenshotLightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: Props) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  const img = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl w-10 h-10 flex items-center justify-center rounded-full bg-black/30"
      >
        ✕
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl w-12 h-12 flex items-center justify-center rounded-full bg-black/30"
          >
            ‹
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl w-12 h-12 flex items-center justify-center rounded-full bg-black/30"
          >
            ›
          </button>
        </>
      )}

      <div
        className="relative max-w-[90vw] max-h-[85vh] animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={img.src}
          alt={img.alt}
          width={1200}
          height={800}
          className="rounded-lg object-contain max-h-[85vh] w-auto"
        />
        <p className="text-white/60 text-sm text-center mt-2 font-mono">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}
