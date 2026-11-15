import { Star } from "lucide-react";
import { isPlaceholder, site } from "@/lib/site";
import SectionHeading from "./SectionHeading";

export default function Reviews() {
  const reviewsUrl = site.links.googleReviews;
  const hasUrl = !isPlaceholder(reviewsUrl);

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="section bg-light">
      <div className="container-site">
        <SectionHeading id="reviews-title" eyebrow="Reviews" title="Students kya kehte hain" />

        <ul className="grid gap-6 md:grid-cols-3">
          {site.reviews.map((r, i) => (
            <li key={i} className="card p-6 sm:p-7">
              <figure className="flex h-full flex-col">
                <div className="flex gap-1" role="img" aria-label={`${r.rating} mein se 5 star`}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      aria-hidden="true"
                      className={`h-5 w-5 ${
                        s < r.rating ? "fill-accent text-accent" : "text-primary/20"
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed">
                  <p>&ldquo;{r.text}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white"
                  >
                    {r.name.replace(/[^A-Za-z]/g, "").charAt(0).toUpperCase() || "S"}
                  </span>
                  <span>
                    <span className="block font-semibold">{r.name}</span>
                    <span className="block text-sm text-navy/80">
                      {r.area}, {site.city}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a
            href={hasUrl ? reviewsUrl : "#reviews"}
            {...(hasUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="btn-dark"
          >
            Google par saare reviews dekhein
          </a>
        </div>
      </div>
    </section>
  );
}
