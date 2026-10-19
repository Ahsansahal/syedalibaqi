import Image from "next/image";
import ProGallery from "@/components/ProGallery";
import Reveal from "@/components/Reveal";
import VideoPlayer from "@/components/VideoPlayer";
import galleries from "@/data/galleries";
import { albumArt } from "@/data/site";

export const metadata = { title: "Album art" };

export default function AlbumArtPage() {
  return (
    <>
      {/* Hero: "Album" top-left, 4 phone tiles, "Art" bottom-right (overlapping, like the original) */}
      <section className="relative mx-auto max-w-[1126px] px-6 pt-10 pb-24">
        <Reveal as="h1" className="relative z-10 font-display text-[clamp(3.5rem,13vw,176px)] leading-[0.85]">
          {albumArt.titleTop}
        </Reveal>
        <div className="relative z-0 -mt-4 grid grid-cols-2 gap-5 md:-mt-6 md:grid-cols-4">
          {albumArt.phones.map((p, i) => (
            <Reveal key={p.src} delay={i * 100} className="relative overflow-hidden rounded-[28px]" style={{ aspectRatio: "267 / 443" }}>
              {p.type === "video" ? (
                <VideoPlayer ambient src={p.src} poster={p.poster} title="Album art animation" />
              ) : (
                <Image src={p.src} alt="Album art on phone" fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
              )}
            </Reveal>
          ))}
        </div>
        <Reveal className="relative z-10 -mt-10 text-right font-display text-[clamp(3.5rem,13vw,176px)] leading-[0.85] md:-mt-16" aria-hidden="true">
          {albumArt.titleBottom}
        </Reveal>
      </section>

      <section className="mx-auto max-w-[980px] px-6 pb-16">
        <ProGallery items={galleries.albumArt} layout="grid" columns={4} gap={16} ratio="1 / 1" />
      </section>
    </>
  );
}
