import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-8xl font-extrabold text-accent">404</p>
      <p className="mt-4 text-lg text-muted">This page doesn&apos;t exist.</p>
      <Link href="/" className="mt-8 border border-paper px-8 py-3 text-sm tracking-widest uppercase hover:border-accent hover:text-accent">
        Back home
      </Link>
    </section>
  );
}
