import Link from "next/link";

/** Small helpers for the recurring UI bits of the original design. */

export function ArrowDown({ className = "" }) {
  return (
    <svg viewBox="0 0 39 71" className={`h-[71px] w-[39px] ${className}`} aria-hidden="true">
      <path d="M19.5 0v66M3 50l16.5 17L36 50" fill="none" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

/** Arrow + small label used as section markers ("Showreel", "Glimpse"). */
export function SectionMarker({ label, href }) {
  const inner = (
    <>
      <ArrowDown className="animate-nudge text-paper" />
      <span className="mt-10 font-display text-[15px] tracking-[0.01em]">{label}</span>
    </>
  );
  return href ? (
    <a href={href} className="flex flex-col items-center">
      {inner}
    </a>
  ) : (
    <div className="flex flex-col items-center">{inner}</div>
  );
}

/** Theme primary button: red fill / black text, inverts on hover. */
export function PrimaryButton({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center border-2 border-accent bg-accent px-12 py-6 font-display text-lg text-ink transition-colors duration-200 hover:bg-ink hover:text-accent md:min-w-[332px] ${className}`}
    >
      {children}
    </Link>
  );
}

/** "Download CV" pill button (brown border, morphs radius on hover). */
export function CvButton({ href, children = "Download CV", className = "" }) {
  return (
    <a
      href={href}
      download
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center gap-3 rounded-[50px] border-2 border-brown bg-ink px-8 py-2.5 font-display text-base text-muted transition-all duration-200 hover:rounded-[20px] hover:bg-paper hover:text-ink ${className}`}
    >
      {children}
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-brown" aria-hidden="true">
        <path d="M12 16l-5-5h3V4h4v7h3l-5 5zM5 18h14v2H5z" />
      </svg>
    </a>
  );
}
