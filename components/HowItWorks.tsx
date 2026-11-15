import { site } from "@/lib/site";
import SectionHeading from "./SectionHeading";

export default function HowItWorks() {
  const last = site.steps.length - 1;

  return (
    <section id="how-it-works" aria-labelledby="how-title" className="section bg-white">
      <div className="container-site">
        <SectionHeading
          id="how-title"
          eyebrow="Bahut aasaan"
          title="Kaise shuru karein"
          subtitle="Sirf 4 steps, aur aap road par."
        />

        <ol className="grid gap-8 md:grid-cols-4 md:gap-6">
          {site.steps.map((step, i) => (
            <li
              key={step.title}
              className="relative flex gap-5 md:flex-col md:items-center md:text-center"
            >
              {i < last && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-[-2rem] left-7 top-14 w-0.5 -translate-x-1/2 bg-primary/15 md:bottom-auto md:left-[calc(50%+1.75rem)] md:right-[calc(-50%+1.75rem-1.5rem)] md:top-7 md:h-0.5 md:w-auto md:translate-x-0"
                />
              )}
              <span className="relative z-10 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-extrabold text-accent shadow-soft">
                {i + 1}
              </span>
              <div className="pt-2 md:pt-5">
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="mt-1.5 leading-relaxed text-navy/80">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
