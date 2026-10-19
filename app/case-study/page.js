import Image from "next/image";
import ProGallery from "@/components/ProGallery";
import Reveal from "@/components/Reveal";
import VideoPlayer from "@/components/VideoPlayer";
import { PrimaryButton } from "@/components/ui";
import galleries from "@/data/galleries";
import { caseStudy as cs } from "@/data/site";

export const metadata = { title: "Case Study" };

export default function CaseStudyPage() {
  return (
    <article className="-mt-28">
      {/* Banner image with the title overlaid */}
      <header className="relative h-[298px] w-full overflow-hidden">
        <Image src={cs.headerImage} alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <h1 className="absolute inset-x-0 top-[150px] px-6 text-center font-display text-3xl md:text-[56px]">{cs.title}</h1>
      </header>

      <div className="mx-auto max-w-[980px] px-6">
        <Reveal className="mt-20 text-center">
          <p className="font-display text-lg md:text-xl">{cs.subtitle}</p>
        </Reveal>
        <Reveal className="mx-auto mt-8 max-w-[755px] space-y-6 text-center text-lg leading-[1.4]">
          {cs.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
      </div>

      <div className="mx-auto mt-16 max-w-[1000px] px-6">
        <ProGallery items={galleries.caseStudySegments} layout="grid" columns={3} gap={20} ratio="1080 / 1350" />
      </div>

      <div className="mx-auto max-w-[980px] px-6">
        <Reveal className="mx-auto mt-16 max-w-[755px] text-center">
          <h2 className="font-display text-2xl md:text-[30px]">{cs.heroFilm.heading}</h2>
          <p className="mt-6 text-lg leading-[1.4]">{cs.heroFilm.body}</p>
        </Reveal>
      </div>

      <Reveal className="mx-auto mt-14 max-w-[1029px] px-4">
        <VideoPlayer src={cs.heroFilm.video.src} poster={cs.heroFilm.video.poster} title={cs.heroFilm.heading} aspect="1029 / 560" />
      </Reveal>

      <Reveal className="mx-auto mt-20 max-w-[755px] px-6 text-center">
        <p className="text-xl leading-[1.4]">{cs.partnership.heading}</p>
      </Reveal>
      <Reveal className="mx-auto mt-16 max-w-[1029px] px-4">
        <VideoPlayer src={cs.partnership.video.src} poster={cs.partnership.video.poster} title={cs.partnership.heading} aspect="1029 / 560" />
      </Reveal>
      <Reveal className="mx-auto mt-16 max-w-[755px] px-6 text-center">
        <p className="text-xl leading-[1.4]">{cs.partnership.body}</p>
      </Reveal>

      <div className="mt-20 text-center">
        <PrimaryButton href={cs.cta.href}>{cs.cta.label}</PrimaryButton>
      </div>
    </article>
  );
}
