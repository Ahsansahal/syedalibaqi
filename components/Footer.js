import Link from "next/link";
import { site } from "@/data/site";

/** Matches the original Wix footer: rule, copyright left, name link right. */
export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1440px] px-6 pt-16 pb-10 md:px-24">
      <hr className="border-t border-paper/80" />
      <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-[13px]">{site.copyright}</p>
        <Link href="/" className="font-display text-2xl hover:underline md:text-[33px]">
          {site.name}
        </Link>
      </div>
    </footer>
  );
}
