import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import VideoPlayer from "@/components/VideoPlayer";
import { CvButton } from "@/components/ui";
import { about, marquees, site } from "@/data/site";

export const metadata = { title: "About Ali" };

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-[1116px] px-6 pt-10">
        <Reveal as="blockquote" className="font-display text-[clamp(3rem,12vw,150px)] leading-[0.8] tracking-[-0.03em]">
          {about.quote}
        </Reveal>
        <Reveal delay={150} className="mt-6 text-right font-display text-xl md:text-[30px]">
          {about.author}
        </Reveal>
      </section>

      <section className="mt-12 text-center">
        <Reveal as="h1" className="font-display text-5xl md:text-[83px]">
          {about.storyHeading}
        </Reveal>
        <Reveal className="mx-auto mt-10 max-w-[1239px] px-4">
          <VideoPlayer ambient src={about.storyVideo.src} poster={about.storyVideo.poster} title={about.storyHeading} aspect="1239 / 552" />
        </Reveal>
      </section>

      <section className="py-20 text-center">
        <CvButton href={site.cvUrl} />
      </section>

      <section className="pb-24">
        {marquees.map((m) => (
          <Marquee key={m.text} text={m.text} direction={m.direction} />
        ))}
      </section>
    </>
  );
}
