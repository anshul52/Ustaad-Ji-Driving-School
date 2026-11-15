import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(site.messages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp par Ustaad Ji se baat karein"
      className="fixed bottom-5 right-5 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-white shadow-lift transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-8 w-8" aria-hidden="true" />
    </a>
  );
}
