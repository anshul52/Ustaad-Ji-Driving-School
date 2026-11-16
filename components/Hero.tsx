import Image from "next/image";
import { Check, Clock, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";
import { telLink, whatsappLink } from "@/lib/whatsapp";

/** Headline ka highlight wala hissa (e.g. "7 din") yellow mein dikhata hai. */
function Headline() {
  const { headline, highlight } = site.hero;
  const i = highlight ? headline.indexOf(highlight) : -1;
  if (i === -1) return <>{headline}</>;
  return (
    <>
      {headline.slice(0, i)}
      <span className="text-accent">{highlight}</span>
      {headline.slice(i + highlight.length)}
    </>
  );
}

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="flex min-h-[calc(100svh-4rem)] items-center bg-primary text-white sm:min-h-[calc(100svh-72px)]">
      <div className="container-site grid items-center gap-12 py-10 sm:py-14 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:py-16 xl:py-20 2xl:gap-20">
        {/* Text */}
        <div className="max-w-2xl 2xl:max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-accent 2xl:text-base">
            <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
            {site.tagline}
          </p>

          <h1
            id="hero-title"
            className="text-[2.25rem] font-extrabold leading-[1.12] tracking-tight sm:text-5xl xl:text-[3.5rem] 2xl:text-[4.25rem]"
          >
            <Headline />
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-white/90 sm:text-xl 2xl:mt-6 2xl:text-[1.4rem]">
            {site.hero.subline} – {site.area}, {site.city}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap 2xl:mt-10 2xl:gap-4">
            <a
              href={whatsappLink(site.messages.demo)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary min-h-[56px] whitespace-nowrap px-7 text-lg 2xl:min-h-[64px] 2xl:px-9 2xl:text-xl"
            >
              <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
              Free Demo Class Book Karein
            </a>
            <a
              href={telLink()}
              className="btn-outline-light min-h-[56px] whitespace-nowrap px-7 text-lg 2xl:min-h-[64px] 2xl:px-9 2xl:text-xl"
            >
              <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
              Call Karein
            </a>
          </div>

          <ul className="mt-8 grid gap-x-6 gap-y-3 text-[15px] text-white sm:grid-cols-2 2xl:mt-10 2xl:gap-y-4 2xl:text-lg">
            {site.hero.points.map((point) => (
              <li key={point} className="flex items-center gap-2.5">
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-navy">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
            <li className="flex items-center gap-2.5 sm:col-span-2">
              <Clock className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              {site.timings.short}
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl2 bg-white shadow-lift">
            <Image
              src={site.hero.image}
              alt={site.hero.imageAlt}
              fill
              priority
              sizes="(min-width: 1536px) 640px, (min-width: 1200px) 540px, (min-width: 1024px) 45vw, (min-width: 640px) 576px, 100vw"
              className="object-contain p-5 sm:p-8"
            />
          </div>

          <div className="absolute -top-4 right-4 rounded-card bg-accent px-5 py-3 text-navy shadow-lift sm:-right-4">
            <p className="text-2xl font-extrabold leading-none">{site.hero.badge.title}</p>
            <p className="mt-1 text-sm font-semibold">{site.hero.badge.text}</p>
          </div>

          <div className="absolute -bottom-5 left-4 hidden items-center sm:flex gap-3 rounded-card bg-white px-4 py-3 text-navy shadow-lift sm:-left-4">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-accent">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold">Dual-control car</span>
              <span className="block text-xs font-medium text-navy/80">Instructor ke paas bhi brake</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
