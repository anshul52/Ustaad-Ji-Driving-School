"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, MessageCircle, X } from "lucide-react";
import { site } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-primary text-white shadow-lift">
      <div className="container-site flex h-16 items-center justify-between gap-4 sm:h-[72px]">
        <a
          href="#top"
          onClick={close}
          className="flex items-center gap-3"
          aria-label={`${site.name} – Home`}
        >
          <Image
            src={site.logo.src}
            alt=""
            width={52}
            height={52}
            priority
            className="h-11 w-11 rounded-full bg-white sm:h-[52px] sm:w-[52px]"
          />
          <span className="flex flex-col leading-none">
            <span className="text-xl font-extrabold tracking-tight sm:text-2xl">{site.shortName}</span>
            <span className="mt-1 text-xs font-medium text-accent">Driving School</span>
          </span>
        </a>

        <nav aria-label="Main menu" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-lg px-4 py-3 text-[15px] font-medium text-white/90 transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink(site.messages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden px-5 sm:inline-flex"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            WhatsApp Karein
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menu band karein" : "Menu kholein"}
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-white hover:bg-white/10 md:hidden"
          >
            {open ? <X className="h-7 w-7" aria-hidden="true" /> : <Menu className="h-7 w-7" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-white/15 bg-primary-dark md:hidden"
      >
        <nav aria-label="Mobile menu" className="container-site py-4">
          <ul className="flex flex-col">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={close}
                  className="flex min-h-[48px] items-center rounded-lg px-2 text-lg font-medium text-white hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink(site.messages.general)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="btn-primary mt-4 w-full"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            WhatsApp Karein
          </a>
        </nav>
      </div>
    </header>
  );
}
