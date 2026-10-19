"use client";

import { useEffect } from "react";

/** Full-screen viewer for gallery items (images + videos) with keyboard nav. */
export default function Lightbox({ items, index, onClose, onStep }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onStep]);

  const item = items[index];
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-[100] flex flex-col bg-black/95" onClick={onClose}>
      <div className="flex items-center justify-between p-5 text-sm text-muted">
        <span>
          {index + 1} / {items.length}
        </span>
        <button type="button" onClick={onClose} aria-label="Close" className="text-4xl leading-none text-paper hover:text-accent">
          ×
        </button>
      </div>
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-14 md:px-20" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          aria-label="Previous"
          onClick={() => onStep(-1)}
          className="absolute left-2 text-5xl text-paper hover:text-accent md:left-6"
        >
          ‹
        </button>
        {item.type === "video" ? (
          <video key={item.src} src={item.src} poster={item.poster} controls autoPlay playsInline className="max-h-full max-w-full" />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={item.src} src={item.src} alt={item.title || ""} className="max-h-full max-w-full object-contain" />
        )}
        <button
          type="button"
          aria-label="Next"
          onClick={() => onStep(1)}
          className="absolute right-2 text-5xl text-paper hover:text-accent md:right-6"
        >
          ›
        </button>
      </div>
      {(item.title || item.description) && (
        <div className="p-6 text-center" onClick={(e) => e.stopPropagation()}>
          {item.title && <p className="font-display text-lg">{item.title}</p>}
          {item.description && <p className="mt-1 whitespace-pre-line text-muted">{item.description}</p>}
        </div>
      )}
    </div>
  );
}
