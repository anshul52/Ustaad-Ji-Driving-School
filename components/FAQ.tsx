"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { site } from "@/lib/site";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" aria-labelledby="faq-title" className="section bg-white">
      <div className="container-site max-w-3xl">
        <SectionHeading
          id="faq-title"
          eyebrow="FAQ"
          title="Aapke sawaal, hamare jawaab"
        />

        <div className="space-y-4">
          {site.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const buttonId = `${baseId}-q-${i}`;
            const panelId = `${baseId}-a-${i}`;
            return (
              <div
                key={faq.question}
                className={`rounded-card border-2 transition-colors ${
                  isOpen ? "border-primary bg-light" : "border-primary/10 bg-white"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold sm:px-6 sm:text-lg"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 pb-5 leading-relaxed text-navy/80 sm:px-6"
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
