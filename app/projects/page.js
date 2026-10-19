import Image from "next/image";
import ProGallery from "@/components/ProGallery";
import Reveal from "@/components/Reveal";
import ThumbnailGallery from "@/components/ThumbnailGallery";
import VideoPlayer from "@/components/VideoPlayer";
import galleries from "@/data/galleries";
import { projects } from "@/data/site";

export const metadata = { title: "Projects" };

function ProjectVideo({ video, title }) {
  return (
    <div className="mx-auto mt-6 max-w-[980px]">
      <VideoPlayer src={video.src} poster={video.poster} title={title} aspect="16 / 9" />
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      {/* Header banner with title + intro overlaid */}
      <header className="relative -mt-28 flex min-h-[583px] flex-col items-center justify-center overflow-hidden px-6 pt-28 text-center">
        <Image src={projects.headerImage} alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative">
          <Reveal as="h1" className="font-display text-page-title" style={{ letterSpacing: "-0.06em" }}>
            {projects.title}
          </Reveal>
          <Reveal delay={150} className="mx-auto mt-10 max-w-[822px] text-lg leading-[1.4] md:text-xl">
            <p>{projects.intro}</p>
          </Reveal>
        </div>
      </header>
      <div className="mt-8 flex justify-center">
        <svg viewBox="0 0 40 21" className="animate-nudge h-[21px] w-10" aria-hidden="true">
          <path d="M2 2l18 17L38 2" fill="none" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      </div>

      <div className="mx-auto max-w-[980px] space-y-28 px-6 pt-24 pb-16">
        {projects.items.map((p) => {
          const items = galleries[p.gallery];
          return (
            <section key={p.title}>
              <Reveal className="text-center">
                <h2 className="font-display text-2xl leading-tight md:text-[40px]">{p.title}</h2>
                {p.subtitle && <p className="mt-4 font-display text-lg md:text-[22px]">{p.subtitle}</p>}
              </Reveal>
              <Reveal className="mx-auto mt-10 max-w-[843px] space-y-5 text-center text-lg leading-[1.4]">
                {p.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </Reveal>

              <div className="mt-12">
                {p.video && p.videoPosition === "before" && <ProjectVideo video={p.video} title={p.title} />}
                {items &&
                  (p.galleryStyle === "row" ? (
                    <div className="mt-6">
                      <ProGallery items={items} layout="row" gap={12} />
                    </div>
                  ) : (
                    <ThumbnailGallery items={items} ratio={items[0]?.w && items[0]?.h && items[0].h > items[0].w ? "4 / 5" : "16 / 9"} className="mt-6" />
                  ))}
                {p.video && p.videoPosition === "after" && <ProjectVideo video={p.video} title={p.title} />}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
