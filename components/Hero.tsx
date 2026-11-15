import Image from "next/image";
import { Clock, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { telLink, whatsappLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="bg-primary text-white">
      <div className="container-site grid items-center gap-10 py-12 sm:py-16 md:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-accent">
            {site.tagline}
          </p>
          <h1
            id="hero-title"
            className="text-4xl font-extrabold leading-[1.15] sm:text-5xl lg:text-6xl"
          >
            {site.hero.headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
            {site.hero.subline} – {site.area}, {site.city}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink(site.messages.demo)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Free Demo Class Book Karein
            </a>
            <a href={telLink()} className="btn-outline-light text-lg">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Karein
            </a>
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm text-white/90 sm:text-base">
            <Clock className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            {site.timings.short}
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl2 bg-white shadow-lift">
            <Image
              src={site.hero.image}
              alt={site.hero.imageAlt}
              fill
              priority
              sizes="(min-width: 1200px) 560px, (min-width: 768px) 50vw, 100vw"
              className="object-contain p-4 sm:p-6"
            />
          </div>
          <div className="absolute -top-4 right-4 rounded-card bg-accent px-5 py-3 text-navy shadow-lift sm:right-6">
            <p className="text-2xl font-extrabold leading-none">21 din</p>
            <p className="mt-1 text-sm font-medium">mein pakka driver</p>
          </div>
        </div>
      </div>
    </section>
  );
}
