import { Clock, FileCheck2, HeartHandshake, ShieldCheck, type LucideIcon } from "lucide-react";
import { site, type WhyUsItem } from "@/lib/site";
import SectionHeading from "./SectionHeading";

const icons: Record<WhyUsItem["icon"], LucideIcon> = {
  shield: ShieldCheck,
  heart: HeartHandshake,
  licence: FileCheck2,
  clock: Clock,
};

export default function WhyUs() {
  return (
    <section id="why-us" aria-labelledby="why-us-title" className="section bg-white">
      <div className="container-site">
        <SectionHeading
          id="why-us-title"
          eyebrow="Kyun Hum"
          title="Kyun Ustaad Ji?"
          subtitle="Pehli baar steering pakad rahe hain? Ghabraiye mat, hum hain na."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {site.whyUs.map((item) => {
            const Icon = icons[item.icon];
            return (
              <li key={item.title} className="card p-6 sm:p-7">
                <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-card bg-accent text-navy">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-navy/80">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
