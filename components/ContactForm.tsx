"use client";

import { useState, type FormEvent } from "react";
import { CircleCheck, Send } from "lucide-react";
import { site } from "@/lib/site";
import { cleanIndianNumber, isValidIndianMobile, whatsappLink } from "@/lib/whatsapp";

type Errors = Partial<Record<"name" | "phone", string>>;

const inputClass =
  "block min-h-[48px] w-full rounded-xl border-2 border-primary/15 bg-white px-4 py-3 text-base text-navy placeholder:text-navy/50 focus:border-primary focus:outline-none";

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const area = String(data.get("area") ?? "").trim();
    const time = String(data.get("time") ?? "").trim();
    const course = String(data.get("course") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Kripya apna naam likhein.";
    if (!isValidIndianMobile(phone)) next.phone = "Sahi 10-digit mobile number daalein (6, 7, 8 ya 9 se shuru).";
    setErrors(next);

    if (Object.keys(next).length > 0) {
      const firstField = next.name ? "name" : "phone";
      (e.currentTarget.elements.namedItem(firstField) as HTMLInputElement | null)?.focus();
      return;
    }

    const message = [
      "Namaste Ustaad Ji, mujhe driving class join karni hai.",
      "",
      `Naam: ${name}`,
      `Phone: ${cleanIndianNumber(phone)}`,
      `Area: ${area || "-"}`,
      `Pasand ka time: ${time || "-"}`,
      `Course: ${course || "Abhi decide nahi kiya"}`,
    ].join("\n");

    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Lead", { content_name: course || "General enquiry" });
    }

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSubmittedName(name);
    e.currentTarget.reset();
  }

  if (submittedName) {
    return (
      <div className="card flex flex-col items-center justify-center p-8 text-center sm:p-10" role="status" aria-live="polite">
        <CircleCheck className="h-16 w-16 text-whatsapp" aria-hidden="true" />
        <h3 className="mt-5 text-2xl font-extrabold">Shukriya, {submittedName}!</h3>
        <p className="mt-3 max-w-sm text-lg leading-relaxed text-navy/80">
          WhatsApp khul gaya hoga. Bas message <strong>Send</strong> kar dijiye, Ustaad Ji jaldi aapse
          baat karenge.
        </p>
        <p className="mt-2 text-sm text-navy/80">WhatsApp nahi khula? Upar diye number par call karein.</p>
        <button type="button" onClick={() => setSubmittedName(null)} className="btn-dark mt-6">
          Naya form bharein
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8" aria-labelledby="form-title">
      <h3 id="form-title" className="text-2xl font-extrabold">
        Free demo class book karein
      </h3>
      <p className="mt-1 text-navy/80">Sirf 30 second lagenge.</p>

      <div className="mt-6 space-y-5">
        <div>
          <label htmlFor="name" className="mb-1.5 block font-semibold">
            Naam <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Apna naam likhein"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-sm font-medium text-danger">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block font-semibold">
            Phone <span aria-hidden="true">*</span>
          </label>
          <div className="flex">
            <span className="inline-flex items-center rounded-l-xl border-2 border-r-0 border-primary/15 bg-light px-3 font-medium">
              +91
            </span>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              required
              maxLength={14}
              placeholder="10-digit mobile number"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={`${inputClass} rounded-l-none`}
            />
          </div>
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-sm font-medium text-danger">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="area" className="mb-1.5 block font-semibold">
            Area
          </label>
          <input
            id="area"
            name="area"
            type="text"
            autoComplete="address-level3"
            placeholder="Jaise: MP Nagar, Kolar, Arera Colony"
            className={inputClass}
          />
        </div>

        <fieldset>
          <legend className="mb-1.5 block font-semibold">Pasand ka time</legend>
          <div className="grid grid-cols-3 gap-2">
            {site.timeSlots.map((slot, i) => (
              <label key={slot} className="relative">
                <input
                  type="radio"
                  name="time"
                  value={slot}
                  defaultChecked={i === 0}
                  className="peer sr-only"
                />
                <span className="flex min-h-[48px] cursor-pointer items-center justify-center rounded-xl border-2 border-primary/15 bg-white px-2 text-center font-medium transition-colors peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent">
                  {slot}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="course" className="mb-1.5 block font-semibold">
            Course
          </label>
          <select id="course" name="course" defaultValue="" className={inputClass}>
            <option value="">Abhi decide nahi kiya</option>
            {site.courses.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name} – {c.days}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button type="submit" className="btn-primary mt-8 w-full text-lg">
        <Send className="h-5 w-5" aria-hidden="true" />
        WhatsApp par bhejein
      </button>
      <p className="mt-3 text-center text-sm text-navy/80">
        Aapki details sirf WhatsApp par Ustaad Ji ko jaayengi.
      </p>
    </form>
  );
}
