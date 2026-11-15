import { site } from "./site";

/** Sirf last 10 digits rakhta hai (+91, 0, spaces sab hata deta hai). */
export function cleanIndianNumber(input: string): string {
  return input.replace(/\D/g, "").slice(-10);
}

/** Valid Indian mobile: 10 digit, 6/7/8/9 se shuru. */
export function isValidIndianMobile(input: string): boolean {
  const digits = input.replace(/\D/g, "");
  const normalized =
    digits.length === 12 && digits.startsWith("91")
      ? digits.slice(2)
      : digits.length === 11 && digits.startsWith("0")
        ? digits.slice(1)
        : digits;
  return /^[6-9]\d{9}$/.test(normalized);
}

/** https://wa.me/91<number>?text=<encoded message> */
export function whatsappLink(message?: string, number: string = site.whatsapp): string {
  const base = `https://wa.me/91${cleanIndianNumber(number)}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** tel:+91XXXXXXXXXX */
export function telLink(number: string = site.phone): string {
  return `tel:+91${cleanIndianNumber(number)}`;
}

/** 98765 43210 style display */
export function formatPhone(number: string = site.phone): string {
  const d = cleanIndianNumber(number);
  return `+91 ${d.slice(0, 5)} ${d.slice(5)}`;
}
