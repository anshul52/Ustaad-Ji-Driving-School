import Image from "next/image";
import { Clock, MapPin, Phone } from "lucide-react";
import { isPlaceholder, site } from "@/lib/site";
import { formatPhone, telLink } from "@/lib/whatsapp";
import { FacebookIcon, InstagramIcon } from "./icons";

export default function Footer() {
  const socials = [
    { label: "Instagram par follow karein", href: site.links.instagram, Icon: InstagramIcon },
    { label: "Facebook par follow karein", href: site.links.facebook, Icon: FacebookIcon },
  ].filter((s) => !isPlaceholder(s.href));

  return (
    <footer className="bg-primary-dark pb-24 pt-14 text-white sm:pb-14">
      <div className="container-site grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-4">
            <Image
              src={site.logo.src}
              alt={site.logo.alt}
              width={72}
              height={72}
              className="h-[72px] w-[72px] rounded-full bg-white"
            />
            <div>
              <p className="text-2xl font-extrabold">{site.shortName}</p>
              <p className="text-sm font-medium text-accent">Driving School</p>
            </div>
          </div>
          <p className="mt-4 text-white/90">{site.tagline}</p>
          <ul className="mt-5 flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent hover:text-navy"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-accent">Contact</h2>
          <ul className="mt-4 space-y-3 text-white/90">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <span>
                {site.address.full}, {site.city}, {site.state}
                {site.address.postalCode && ` – ${site.address.postalCode}`}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <a href={telLink()} className="hover:text-accent">
                {formatPhone()}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <span>{site.timings.label}</span>
            </li>
          </ul>
        </div>

        <nav aria-label="Footer links">
          <h2 className="text-lg font-bold text-accent">Quick Links</h2>
          <ul className="mt-2 grid grid-cols-2 gap-x-4 md:grid-cols-1">
            {[...site.nav, { label: "FAQ", href: "#faq" }].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-[44px] items-center text-white/90 hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="container-site mt-10 border-t border-white/15 pt-6">
        <p className="text-center text-sm text-white/80">{site.copyright}</p>
      </div>
    </footer>
  );
}
