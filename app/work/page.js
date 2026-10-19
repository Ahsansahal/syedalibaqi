import ProGallery from "@/components/ProGallery";
import Reveal from "@/components/Reveal";
import galleries from "@/data/galleries";
import { work } from "@/data/site";

export const metadata = { title: "Animation and Motion Graphics" };

export default function WorkPage() {
  return (
    <>
      <section className="mx-auto max-w-[980px] px-6 pt-16 pb-20 text-center">
        <Reveal as="h1" className="font-display text-page-title">
          {work.title.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </Reveal>
        <Reveal delay={150} className="mx-auto mt-12 max-w-[792px] text-lg leading-[1.4] md:text-xl">
          <p>{work.intro}</p>
        </Reveal>
      </section>
      <section className="mx-auto max-w-[1494px] px-4 pb-16 md:px-10">
        <ProGallery items={galleries.animationWork} layout="stack" columns={1} gap={0} showInfo="none" />
      </section>
    </>
  );
}
