/** Infinite scrolling text row (Wix TextMarquee equivalent). Pauses on hover. */
export default function Marquee({ text, direction = "rtl", duration = 30 }) {
  const items = Array.from({ length: 8 }, (_, i) => i);
  return (
    <div className="marquee overflow-hidden py-1" aria-label={text}>
      <div
        className="marquee-track flex w-max"
        data-direction={direction}
        style={{ "--marquee-duration": `${duration}s` }}
        aria-hidden="true"
      >
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0">
            {items.map((i) => (
              <span key={i} className="flex items-center font-display text-3xl whitespace-nowrap md:text-[44px]">
                <span className="px-6">{text}</span>
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-accent md:h-8 md:w-8">
                  <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
                </svg>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
