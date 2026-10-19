import Marquee from "@/components/Marquee";
import ProGallery from "@/components/ProGallery";
import Reveal from "@/components/Reveal";
import VideoPlayer from "@/components/VideoPlayer";
import { PrimaryButton, SectionMarker } from "@/components/ui";
import galleries from "@/data/galleries";
import { home, marquees } from "@/data/site";

export default function HomePage() {
  return (
    <>
      {/* Hero – oversized stacked name, bleeding past the 980px grid like the original */}
      <section className="mx-auto max-w-[1440px] px-6 pt-6 md:px-12">
        <Reveal as="h1" className="font-display text-hero uppercase">
          {home.heroLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </Reveal>
      </section>

      {/* Showreel */}
      <section className="mt-12 flex flex-col items-center md:mt-12">
        <SectionMarker label={home.showreel.label} href="#showreel" />
        <Reveal id="showreel" className="mt-24 w-full max-w-[1191px] scroll-mt-32 px-4 md:px-0">
          <VideoPlayer src={home.showreel.src} poster={home.showreel.poster} title={home.showreel.title} aspect="1191 / 671" />
        </Reveal>
        <Reveal className="mt-36">
          <PrimaryButton href={home.projectsButton.href}>{home.projectsButton.label}</PrimaryButton>
        </Reveal>
      </section>

      {/* Glimpse gallery */}
      <section className="mt-32 flex flex-col items-center">
        <SectionMarker label={home.glimpseLabel} href="#glimpse" />
        <div id="glimpse" className="mx-auto mt-24 w-full max-w-[1611px] scroll-mt-32 px-4 md:px-10">
          <ProGallery items={galleries.homeGlimpse} layout="masonry" columns={3} gap={35} radius={30} showInfo="hover" />
        </div>
      </section>

      {/* Scrolling service marquees */}
      <section className="mt-16 space-y-0 pb-32">
        {marquees.map((m) => (
          <Marquee key={m.text} text={m.text} direction={m.direction} />
        ))}
      </section>
    </>
  );
}
