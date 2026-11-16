/**
 * ============================================================
 *  USTAAD JI DRIVING SCHOOL – SITE CONFIG
 *  Saari business details yahin badlein. Har component yahin se padhta hai.
 *  Jahan [BRACKETS] hain, wahan apni asli details daalein.
 * ============================================================
 */

export type Course = {
  name: string;
  days: string;
  duration: string;
  features: string[];
  price: number;
  highlighted?: boolean;
  whatsappMessage: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Review = {
  name: string;
  area: string;
  text: string;
  rating: number;
};

export type WhyUsItem = {
  icon: "shield" | "heart" | "licence" | "clock";
  title: string;
  text: string;
};

export const site = {
  // ---------- Basic info ----------
  name: "Ustaad Ji Driving School",
  shortName: "Ustaad Ji",
  tagline: "Steering pe haath, Ustaad Ji ka saath",

  // Logo (round badge) – header, footer aur Google structured data
  logo: {
    src: "/images/logo-badge.png",
    large: "/images/logo-512.png",
    alt: "Ustaad Ji Driving School logo",
  },

  // Live website ka URL (domain lene ke baad badlein). Sitemap, SEO aur OG image ke liye zaroori.
  url: "https://ustaadjidriving.in",

  // ---------- Location ----------
  city: "Bhopal",
  state: "Madhya Pradesh",
  area: "Pushpa Nagar",
  address: {
    full: "Gali No. 1, Pushpa Nagar, Santoshi Mata Mandir, Bagh Roshan",
    street: "Gali No. 1, Pushpa Nagar, Santoshi Mata Mandir, Bagh Roshan",
    locality: "Bhopal",
    region: "Madhya Pradesh",
    postalCode: "462010",
    country: "IN",
  },
  // Google Maps par apni location ke coordinates daalein (abhi Bhopal center hai).
  geo: {
    latitude: 23.2599,
    longitude: 77.4126,
  },

  // ---------- Contact ----------
  // Sirf 10 digit number, bina +91 ke.
  phone: "7697708777",
  whatsapp: "7697708777",

  timings: {
    label: "Subah 6:00 – Raat 9:00, har din",
    short: "Subah 6 se raat 9 tak · Har din classes",
    opens: "06:00",
    closes: "21:00",
  },

  // ---------- Links ----------
  links: {
    googleReviews: "[GOOGLE REVIEW LINK]",
    // Google Maps > Share > Embed a map > iframe ka "src" URL yahan daalein.
    mapsEmbed: "[MAPS EMBED URL]",
    instagram: "[INSTAGRAM LINK]",
    facebook: "https://www.facebook.com/profile.php?id=61596423458833",
  },

  // ---------- Tracking ----------
  // Meta Pixel ID (sirf numbers). Khaali chhodenge to Pixel load nahi hoga.
  metaPixelId: "", // e.g. "123456789012345"  → [META_PIXEL_ID]

  priceRange: "₹2,999 – ₹6,999",

  // ---------- SEO ----------
  seo: {
    title: "Ustaad Ji Driving School – Car Driving Classes in Bhopal",
    description:
      "Bhopal mein sirf 7 din mein car chalana seekhein. Dual-control car, experienced instructor, licence help. Free demo class. Call now.",
    ogImage: "/images/og-image.jpg",
  },

  // ---------- Navigation ----------
  nav: [
    { label: "Courses", href: "#courses" },
    { label: "Fees", href: "#fees" },
    { label: "Kyun Hum", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ],

  // ---------- WhatsApp messages ----------
  messages: {
    general: "Namaste Ustaad Ji, mujhe driving classes ke baare mein jaankari chahiye.",
    demo: "Namaste Ustaad Ji, mujhe free demo class book karni hai.",
  },

  // ---------- Hero ----------
  hero: {
    headline: "Sirf 7 din mein car chalana seekhein",
    subline:
      "Dual-control safe car, experienced instructor aur licence mein poori madad",
    image: "/images/hero-car.jpg",
    imageAlt: "Ustaad Ji – white training car mein thumbs up karte hue instructor",
  },

  // ---------- Kyun Ustaad Ji ----------
  whyUs: [
    {
      icon: "shield",
      title: "Dual-control safe car",
      text: "Instructor ke paas bhi brake, aap hamesha safe",
    },
    {
      icon: "heart",
      title: "Patient instructors",
      text: "Na daant, na tension – aaram se seekhein",
    },
    {
      icon: "licence",
      title: "Licence mein madad",
      text: "Learner aur permanent DL, poori process mein saath",
    },
    {
      icon: "clock",
      title: "Flexible timing",
      text: "Subah ya shaam, jo aapko suit kare",
    },
  ] satisfies WhyUsItem[],

  // ---------- Courses & Fees ----------
  courses: [
    {
      name: "Basic",
      days: "15 din",
      duration: "30–40 min daily",
      price: 4999,
      features: [
        "15 din ki practical training",
        "Roz 30–40 min driving",
        "Steering, clutch, gear aur brake basics",
        "Traffic rules ki jaankari",
      ],
      whatsappMessage:
        "Namaste Ustaad Ji, mujhe Basic course ke baare mein jaankari chahiye.",
    },
    {
      name: "Standard",
      days: "7 din",
      duration: "Roz 1 class",
      price: 5999,
      highlighted: true,
      features: [
        "7 din ki complete training",
        "Theory class",
        "Parking aur reverse",
        "Hill start practice",
        "RTO test practice",
      ],
      whatsappMessage:
        "Namaste Ustaad Ji, mujhe Standard course ke baare mein jaankari chahiye.",
    },
    {
      name: "Ladies Special",
      days: "7 din",
      duration: "Roz 1 class",
      price: 6999,
      features: [
        "7 din ki complete training",
        "Female instructor",
        "Ghar se pick-up & drop",
        "Parking, reverse aur RTO test practice",
      ],
      whatsappMessage:
        "Namaste Ustaad Ji, mujhe Ladies Special course ke baare mein jaankari chahiye.",
    },
    {
      name: "Refresher",
      days: "5–7 din",
      duration: "Apni car mein",
      price: 2999,
      features: [
        "5–7 din ki practice",
        "Apni car mein practice",
        "Licence holders ke liye",
        "City traffic mein confidence",
      ],
      whatsappMessage:
        "Namaste Ustaad Ji, mujhe Refresher course ke baare mein jaankari chahiye.",
    },
  ] satisfies Course[] as Course[],

  feesNote: "RTO ki sarkari fees alag se, bina kisi hidden charge ke.",

  // ---------- Kaise shuru karein ----------
  steps: [
    { title: "Call/WhatsApp karein", text: "Ek message bhejiye, hum turant reply karenge." },
    { title: "Free demo class", text: "Pehle car mein baith kar dekhiye, phir decide kijiye." },
    { title: "Course shuru", text: "Apne time par roz class, aaram se." },
    { title: "Licence ke saath pakka driver", text: "Test pass, licence haath mein, aap ready." },
  ],

  // ---------- Reviews (PLACEHOLDERS – asli Google reviews se badlein) ----------
  reviews: [
    { name: "[STUDENT NAME]", area: "[AREA]", text: "[REVIEW TEXT]", rating: 5 },
    { name: "[STUDENT NAME]", area: "[AREA]", text: "[REVIEW TEXT]", rating: 5 },
    { name: "[STUDENT NAME]", area: "[AREA]", text: "[REVIEW TEXT]", rating: 5 },
  ] satisfies Review[] as Review[],

  // ---------- FAQ ----------
  faqs: [
    {
      question: "Kitne din mein car chalana seekh jaunga?",
      answer:
        "Sirf 7 din mein aap aaram se car chalana seekh sakte hain. Agar aap bilkul naye hain, to 7 din ka Standard course best rahega. Zyada practice chahiye to 15 din ka Basic course bhi hai.",
    },
    {
      question: "Kya licence banwane mein madad milegi?",
      answer:
        "Haan, bilkul. Learner licence se le kar permanent DL tak – form, slot booking aur RTO test ki taiyaari – har step par hum saath hain. RTO ki sarkari fees alag se lagti hai.",
    },
    {
      question: "Kya ladies ke liye female instructor hai?",
      answer:
        "Haan. Ladies Special course mein female instructor milti hain, aur ghar se pick-up & drop bhi milta hai.",
    },
    {
      question: "Fees kaise pay kar sakte hain?",
      answer:
        "Aap UPI ya cash se pay kar sakte hain. Seat book karne ke liye sirf ₹500 booking amount dena hota hai. Baaki details call par bata denge.",
    },
    {
      question: "Kya main apni car mein bhi seekh sakta hoon?",
      answer:
        "Haan. Refresher course mein aap apni car mein practice kar sakte hain. Ye un logon ke liye hai jinke paas licence hai, bas confidence chahiye.",
    },
    {
      question: "Agar ek din class miss ho jaaye to?",
      answer:
        "Koi tension nahi. Bas pehle se bata dijiye, hum woh class kisi aur din adjust kar denge.",
    },
  ] satisfies Faq[] as Faq[],

  // ---------- Contact form ----------
  timeSlots: ["Subah", "Dopahar", "Shaam"],

  copyright: "© 2026 Ustaad Ji Driving School, Bhopal",
};

/** ₹4,999 style price */
export function formatPrice(value: number): string {
  return `₹${value.toLocaleString("en-IN")}`;
}

/** Placeholder ("[...]") abhi bhara nahi gaya hai? */
export function isPlaceholder(value: string): boolean {
  return value.trim() === "" || value.trim().startsWith("[");
}
