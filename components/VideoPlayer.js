"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Local MP4 player.
 * - Default: click-to-play with poster + native controls (like Wix VideoPlayer).
 * - `ambient`: muted, looping autoplay while on screen (gallery / background use).
 */
export default function VideoPlayer({ src, poster, title = "Video", ambient = false, className = "", aspect, fit = "cover" }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!ambient) return;
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? el.play().catch(() => {}) : el.pause()),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ambient]);

  const style = aspect ? { aspectRatio: aspect } : undefined;
  const fitClass = fit === "contain" ? "object-contain" : "object-cover";

  if (ambient) {
    return (
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={title}
        className={`block h-full w-full bg-black ${fitClass} ${className}`}
        style={style}
      />
    );
  }

  return (
    <div className={`group relative overflow-hidden bg-black ${className}`} style={style}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        controls={started}
        playsInline
        preload="metadata"
        aria-label={title}
        className={`block h-full w-full ${fitClass}`}
        onPlay={() => setStarted(true)}
      />
      {!started && (
        <button
          type="button"
          onClick={() => {
            setStarted(true);
            ref.current?.play();
          }}
          aria-label={`Play ${title}`}
          className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/30"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-black/60 ring-1 ring-white/40 transition-transform group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8 fill-white" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
