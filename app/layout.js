import { Barlow, Unbounded } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";
import "./globals.css";

// Barlow (ExtraLight) is the body font on the original site. Headings use the
// commercial "Benzin" font; Unbounded is a close free substitute. If you have a
// Benzin licence, add the files and switch to next/font/local.
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-barlow",
});
const display = Unbounded({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
});

export const metadata = {
  title: { default: `Work | ${site.name}`, template: `%s | ${site.name}` },
  description: `${site.name} – ${site.role}, ${site.location}. Animation, motion design, brand identity and generative AI.`,
  // Development build: keep out of search engines. Remove when going live.
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${barlow.variable} ${display.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
