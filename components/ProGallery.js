"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import Lightbox from "./Lightbox";
import VideoPlayer from "./VideoPlayer";

/**
 * Recreates the Wix Pro Gallery layouts used on the site.
 *
 * layout:
 *  - "masonry": CSS columns, natural aspect ratios (Home "Glimpse", Generative AI)
 *  - "grid":    fixed columns, square crops (Album art, Clients, Case study)
 *  - "stack":   one item per row, full width (Animation & Video work)
 *  - "row":     single horizontal row of equal-height items (Projects strips)
 */
export default function ProGallery({
  items,
  layout = "masonry",
  columns = 3,
  gap = 24,
  radius = 0,
  showInfo = "hover", // "hover" | "below" | "none"
  ratio, // forced aspect ratio for grid, e.g. "1 / 1" or "4 / 5"
  lightbox = true,
  className = "",
}) {
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);
  const step = useCallback((d) => setActive((i) => (i + d + items.length) % items.length), [items.length]);

  const colClass = { 1: "", 2: "sm:columns-2", 3: "sm:columns-2 lg:columns-3", 4: "sm:columns-2 lg:columns-4", 5: "sm:columns-3 lg:columns-5" }[columns];
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-3",
    4: "grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
  }[columns];

  const renderItem = (item, i, extra = {}) => {
    const aspect = extra.aspect ?? (item.w && item.h ? `${item.w} / ${item.h}` : "1 / 1");
    const media =
      item.type === "video" ? (
        <VideoPlayer ambient src={item.src} poster={item.poster} title={item.title || "Video"} aspect={aspect} />
      ) : (
        <div className="relative" style={{ aspectRatio: aspect }}>
          <Image
            src={item.src}
            alt={item.title || item.description || ""}
            fill
            sizes={extra.sizes ?? `(min-width: 1024px) ${Math.round(100 / columns)}vw, 100vw`}
            className={`${extra.fit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-700 group-hover:scale-[1.04]`}
          />
        </div>
      );
    const hasInfo = showInfo !== "none" && (item.title || item.description);
    const Wrapper = lightbox ? "button" : "div";
    return (
      <figure key={i} className={`group relative block w-full break-inside-avoid ${extra.className ?? ""}`} style={{ marginBottom: layout === "masonry" ? gap : 0 }}>
        <Wrapper
          {...(lightbox ? { type: "button", onClick: () => setActive(i), "aria-label": `Open ${item.title || "item"} ${i + 1}` } : {})}
          className="relative block w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-accent"
          style={{ borderRadius: radius }}
        >
          {media}
          {hasInfo && showInfo === "hover" && (
            <span className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              {item.title && <span className="font-display text-base md:text-lg">{item.title}</span>}
              {item.description && <span className="mt-1 text-sm whitespace-pre-line text-muted">{item.description}</span>}
            </span>
          )}
        </Wrapper>
        {hasInfo && showInfo === "below" && (
          <figcaption className="mt-3 text-center">
            {item.title && <p className="font-display text-sm">{item.title}</p>}
            {item.description && <p className="mt-1 text-sm text-muted">{item.description}</p>}
          </figcaption>
        )}
      </figure>
    );
  };

  let body;
  if (layout === "masonry") {
    body = (
      <div className={`columns-1 ${colClass}`} style={{ columnGap: gap }}>
        {items.map((it, i) => renderItem(it, i))}
      </div>
    );
  } else if (layout === "grid") {
    body = (
      <div className={`grid ${gridCols}`} style={{ gap }}>
        {items.map((it, i) => renderItem(it, i, { aspect: ratio ?? "1 / 1" }))}
      </div>
    );
  } else if (layout === "stack") {
    body = (
      <div className="flex flex-col items-center" style={{ gap }}>
        {items.map((it, i) =>
          renderItem(it, i, {
            className: it.h > it.w ? "max-w-md" : it.h === it.w ? "max-w-3xl" : "max-w-6xl",
            sizes: "(min-width: 1024px) 70vw, 100vw",
          })
        )}
      </div>
    );
  } else if (layout === "row") {
    body = (
      <div className="flex snap-x snap-mandatory gap-[var(--g)] overflow-x-auto pb-2 md:grid md:overflow-visible" style={{ "--g": `${gap}px`, gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}>
        {items.map((it, i) => renderItem(it, i, { className: "w-[70vw] shrink-0 snap-center md:w-auto", sizes: `(min-width: 768px) ${Math.round(100 / items.length)}vw, 70vw` }))}
      </div>
    );
  }

  return (
    <div className={className}>
      {body}
      {lightbox && active !== null && <Lightbox items={items} index={active} onClose={close} onStep={step} />}
    </div>
  );
}
