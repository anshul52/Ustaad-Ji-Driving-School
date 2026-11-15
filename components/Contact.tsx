import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { isPlaceholder, site } from "@/lib/site";
import { formatPhone, telLink, whatsappLink } from "@/lib/whatsapp";
import ContactForm from "./ContactForm";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const mapUrl = site.links.mapsEmbed;
  const hasMap = !isPlaceholder(mapUrl) && mapUrl.startsWith("https://");

  const rows = [
    {
      icon: MapPin,
      label: "Address",
      value: site.address.full,
      href: undefined as string | undefined,
    },
    { icon: Phone, label: "Phone", value: formatPhone(site.phone), href: telLink(site.phone) },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: formatPhone(site.whatsapp),
      href: whatsappLink(site.messages.general),
    },
    { icon: Clock, label: "Timings", value: site.timings.label, href: undefined },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="section bg-light">
      <div className="container-site">
        <SectionHeading
          id="contact-title"
          eyebrow="Contact"
          title="Aaj hi free demo class book karein"
          subtitle="Form bhariye ya seedha call karein. Hum jaldi reply karte hain."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: details + map */}
          <div className="flex flex-col gap-6">
            <address className="card not-italic">
              <ul className="divide-y divide-primary/10">
                {rows.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4 p-5 sm:p-6">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-primary text-accent">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-navy/80">{label}</span>
                      {href ? (
                        <a
                          href={href}
                          {...(href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="block break-words text-lg font-semibold text-primary underline-offset-4 hover:underline"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="block break-words text-lg font-semibold">
                          {value}
                          {label === "Address" && `, ${site.city}, ${site.state}`}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </address>

            <div className="card overflow-hidden">
              {hasMap ? (
                <iframe
                  src={mapUrl}
                  title={`${site.name} ki location Google Map par`}
                  className="h-72 w-full border-0 sm:h-80"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-72 flex-col items-center justify-center gap-2 bg-white p-6 text-center sm:h-80">
                  <MapPin className="h-10 w-10 text-primary" aria-hidden="true" />
                  <p className="font-semibold">Google Map yahan dikhega</p>
                  <p className="text-sm text-navy/80">
                    lib/site.ts mein <code>links.mapsEmbed</code> set karein
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right: form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
