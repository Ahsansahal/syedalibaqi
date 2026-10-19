import ProGallery from "@/components/ProGallery";
import Reveal from "@/components/Reveal";
import galleries from "@/data/galleries";
import { generativeAI } from "@/data/site";

export const metadata = { title: "Generative AI" };

export default function GenerativeAIPage() {
  return (
    <>
      <section className="mx-auto max-w-[1124px] px-6 pt-20 pb-20 text-center">
        <Reveal as="h1" className="font-display text-page-title" style={{ letterSpacing: "normal" }}>
          {generativeAI.title.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </Reveal>
        <Reveal delay={150} className="mx-auto mt-12 max-w-[890px] space-y-1 font-display text-base leading-[1.8] md:text-xl">
          {generativeAI.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
      </section>
      <section className="mx-auto max-w-[1628px] px-4 pb-16 md:px-10">
        <ProGallery items={galleries.generativeAI} layout="masonry" columns={3} gap={20} radius={30} showInfo="none" />
      </section>
    </>
  );
}
