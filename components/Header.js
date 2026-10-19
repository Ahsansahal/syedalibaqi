"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/data/site";

function isActive(pathname, item) {
  if (item.href === "/") return pathname === "/";
  return [item, ...(item.children ?? [])].some((i) => pathname.startsWith(i.href));
}

/** Fixed, centered text-only menu like the original Wix header. */
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "bg-ink/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-28 max-w-[1440px] items-center justify-end px-6 lg:justify-center">
        {/* Desktop menu */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-10 font-display text-[13px] tracking-wide">
            {navigation.map((item) => (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  aria-haspopup={item.children ? "true" : undefined}
                  className={`inline-block py-3 transition-colors hover:text-accent ${
                    isActive(pathname, item) ? "text-accent" : "text-paper"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="invisible absolute top-full left-1/2 min-w-64 -translate-x-1/2 translate-y-2 bg-ink/95 py-3 opacity-0 shadow-2xl ring-1 ring-line transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={`block px-6 py-2.5 whitespace-nowrap transition-colors hover:text-accent ${
                            pathname === child.href ? "text-accent" : ""
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-7 bg-paper transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-7 bg-paper transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-7 bg-paper transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <nav
        aria-label="Mobile"
        className={`fixed inset-0 top-28 overflow-y-auto bg-ink px-8 pb-12 transition-opacity duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="space-y-1 pt-4">
          {navigation.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`block py-3 font-display text-2xl ${isActive(pathname, item) ? "text-accent" : ""}`}
              >
                {item.label}
              </Link>
              {item.children && (
                <ul className="mb-2 border-l border-line pl-5">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className={`block py-2 text-lg ${pathname === child.href ? "text-accent" : "text-muted"}`}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
