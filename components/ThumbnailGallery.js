"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Lightbox from "./Lightbox";

/**
 * Wix "Thumbnails" gallery: a large slideshow image with a scrollable thumbnail
 * strip underneath. Used for each project on the Projects page.
 */
export default function ThumbnailGallery({ items, ratio = "16 / 9", className = "" }) {
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const stripRef = useRef(null);
  const step = useCallback((d) => setIndex((i) => (i + d + items.length) % items.length), [items.length]);

  useEffect(() => {
    const thumb = stripRef.current?.children[index];
    thumb?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [index]);

  const item = items[index];
  return (
    <div className={className}>
      <div className="group relative overflow-hidden bg-neutral-950" style={{ aspectRatio: ratio }}>
        {items.map((it, i) => (
          <Image
            key={it.src}
            src={it.src}
            alt={it.title || `Slide ${i + 1}`}
            fill
            sizes="(min-width: 1024px) 980px, 100vw"
            priority={i === 0}
            className={`object-contain transition-opacity duration-500 ${i === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <button type="button" onClick={() => setZoom(true)} aria-label="View full screen" className="absolute inset-0 cursor-zoom-in" />
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous slide"
          className="absolute top-1/2 left-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-2xl opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next slide"
          className="absolute top-1/2 right-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-2xl opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
        >
          ›
        </button>
      </div>

      <div ref={stripRef} className="mt-3 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:thin]">
        {items.map((it, i) => (
          <button
            key={it.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === index}
            className={`relative h-16 shrink-0 overflow-hidden transition-opacity md:h-20 ${i === index ? "opacity-100 ring-2 ring-paper" : "opacity-50 hover:opacity-90"}`}
            style={{ aspectRatio: it.w && it.h ? `${it.w} / ${it.h}` : "16 / 9" }}
          >
            <Image src={it.src} alt="" fill sizes="160px" className="object-cover" />
          </button>
        ))}
      </div>
      {item.description && <p className="mt-2 text-center text-sm text-muted">{item.description}</p>}

      {zoom && <Lightbox items={items} index={index} onClose={() => setZoom(false)} onStep={step} />}
    </div>
  );
}
