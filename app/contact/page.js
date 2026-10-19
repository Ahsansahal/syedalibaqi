import Image from "next/image";
import Reveal from "@/components/Reveal";
import { CvButton } from "@/components/ui";
import { contact, site } from "@/data/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-[980px] px-6 pt-16 pb-20">
      <Reveal as="h1" className="font-display text-[clamp(2.5rem,7vw,89px)] leading-[0.9] tracking-[-0.05em]">
        {contact.heading}
      </Reveal>

      <div className="mt-24 md:pl-[132px]">
        <Reveal className="font-display text-2xl leading-none tracking-[-0.05em] md:text-[38px]">
          <p>{contact.taglineTop}</p>
          <p className="mt-2">{contact.taglineBottom}</p>
        </Reveal>

        <Reveal delay={100} className="mt-14 space-y-4 text-xl">
          <a href={`mailto:${site.email}`} className="block font-display text-lg hover:text-accent md:text-xl">
            {site.email}
          </a>
          <div className="space-y-1 leading-[1.5]">
            {site.phones.map((p) => (
              <div key={p.label} className="flex items-center gap-3">
                <a href={`tel:${p.tel}`} className="hover:text-accent">
                  {p.label}
                </a>
                <a href={`https://wa.me/${p.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp ${p.label}`}>
                  <Image src={contact.whatsappIcon} alt="" width={28} height={28} className="h-7 w-7 transition-transform hover:scale-110" />
                </a>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-14">
          <CvButton href={site.cvContactUrl} />
        </Reveal>
      </div>
    </section>
  );
}
