import { Check, Clock, MessageCircle } from "lucide-react";
import { formatPrice, site } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";
import SectionHeading from "./SectionHeading";

export default function Courses() {
  return (
    <section id="courses" aria-labelledby="courses-title" className="section bg-light">
      <div className="container-site">
        <SectionHeading
          id="courses-title"
          eyebrow="Courses & Fees"
          title="Apna course chuniye"
          subtitle="Saaf fees, koi chhupa charge nahi. Pehle free demo class lijiye."
        />

        <ul id="fees" className="grid scroll-mt-28 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {site.courses.map((course) => {
            const hl = course.highlighted;
            return (
              <li
                key={course.name}
                className={`relative flex flex-col rounded-xl2 p-6 sm:p-7 ${
                  hl ? "bg-primary text-white shadow-lift ring-4 ring-accent" : "card text-navy"
                }`}
              >
                {hl && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-4 py-1.5 text-sm font-bold text-navy shadow-soft">
                    Most Popular
                  </span>
                )}

                <h3 className="text-2xl font-extrabold">{course.name}</h3>
                <p
                  className={`mt-1 flex items-center gap-1.5 text-sm font-medium ${
                    hl ? "text-white/90" : "text-navy/80"
                  }`}
                >
                  <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {course.days} · {course.duration}
                </p>

                <p className={`mt-5 text-4xl font-extrabold ${hl ? "text-accent" : "text-primary"}`}>
                  {formatPrice(course.price)}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {course.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          hl ? "bg-accent text-navy" : "bg-primary text-white"
                        }`}
                      >
                        <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappLink(course.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 w-full ${hl ? "btn-primary" : "btn-dark"}`}
                  aria-label={`${course.name} course – WhatsApp par Book Now`}
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Book Now
                </a>
              </li>
            );
          })}
        </ul>

        <p className="mt-10 text-center font-medium text-navy/80">{site.feesNote}</p>
      </div>
    </section>
  );
}
