import ProGallery from "@/components/ProGallery";
import Reveal from "@/components/Reveal";
import galleries from "@/data/galleries";
import { clients } from "@/data/site";

export const metadata = { title: "Clients" };

export default function ClientsPage() {
  return (
    <>
      <section className="mx-auto max-w-[980px] px-6 pt-16 pb-20 text-center">
        <Reveal as="h1" className="font-display text-[clamp(2.2rem,7.5vw,98px)] leading-[0.95] tracking-[-0.04em]">
          {clients.title.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </Reveal>
      </section>
      <section className="mx-auto max-w-[1628px] px-6 pb-16 md:px-16">
        <ProGallery items={galleries.clients} layout="grid" columns={5} gap={48} ratio="1 / 1" showInfo="hover" lightbox={false} />
      </section>
    </>
  );
}
