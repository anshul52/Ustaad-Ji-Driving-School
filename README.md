# Ustaad Ji Driving School – Website

One-page website for **Ustaad Ji Driving School, Bhopal**.
Built with Next.js 15 (App Router), TypeScript, Tailwind CSS and lucide-react. It has no database or backend and builds to a fully static site.

---

## 1. Run locally

You need **Node.js 18.18 or newer** (Node 20 or 22 recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production build check:

```bash
npm run build
npm start
```

---

## 2. Change business details and images

### All details live in one file: `lib/site.ts`

Every section reads from this file. Replace everything in `[BRACKETS]`:

| Field | What to put |
|---|---|
| `url` | Your live domain, e.g. `https://ustaadjidriving.in` (used for SEO, sitemap, OG image) |
| `area`, `address.full`, `address.street`, `address.postalCode` | Your area, full address and PIN code |
| `geo.latitude`, `geo.longitude` | Right-click your location in Google Maps to copy the coordinates |
| `phone`, `whatsapp` | **10 digits only**, without +91 |
| `links.googleReviews` | Your Google Business Profile review link |
| `links.mapsEmbed` | Google Maps → Share → *Embed a map* → copy only the `src="..."` URL |
| `links.instagram`, `links.facebook` | Your social profile URLs |
| `metaPixelId` | Your Meta Pixel ID (numbers only). If left empty, the Pixel does not load. |
| `courses` | Name, days, duration, features, price, `highlighted`, WhatsApp message |
| `reviews` | Replace the placeholders with **real** student reviews (copy them from Google) |
| `faqs` | Questions and answers |

### Images: `public/images/`

Replace these files, keeping the **same file names**:

| File | Size | Used for |
|---|---|---|
| `hero-car.jpg` | 4:3, e.g. 1200 × 900 | Hero image (currently the Ustaad Ji mascot in the car; swap for a real car + instructor photo anytime) |
| `og-image.jpg` | 1200 × 630 | Preview image shown when the link is shared on WhatsApp/Facebook (wide logo) |
| `logo-badge.png` | 256 × 256 | Round logo in the header and footer |
| `logo-512.png` | 512 × 512 | Logo for Google (structured data) |

Keep images under ~200 KB (compress them at https://squoosh.app). Next.js serves them as WebP/AVIF automatically.
The browser tab icons are `app/icon.png` (192 × 192) and `app/favicon.ico` (48 × 48); the iPhone home-screen icon is `app/apple-icon.png` (180 × 180).

Note: if you use a real photo for the hero, change `object-contain p-4 sm:p-6` to `object-cover` in `components/Hero.tsx` so it fills the frame.

### Colors

The brand colors are defined in `tailwind.config.ts` (`primary`, `primary-dark`, `accent`, `navy`, `light`).

---

## 3. Deploy free on Vercel and add a custom domain

### Deploy

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Ustaad Ji website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/ustaad-ji-website.git
   git push -u origin main
   ```
2. Go to https://vercel.com and sign in with GitHub (the free **Hobby** plan is enough).
3. Click **Add New → Project**, pick the repository, and click **Deploy**. No settings need changing.
4. After about a minute your site is live at `https://<project-name>.vercel.app`.

From then on, every `git push` to `main` redeploys automatically.

### Connect a custom domain

1. Buy a domain (GoDaddy, Hostinger, Namecheap, etc.), for example `ustaadjidriving.in`.
2. In Vercel: **Project → Settings → Domains → Add**, then enter both `ustaadjidriving.in` and `www.ustaadjidriving.in`.
3. Vercel shows the DNS records. Add them in your domain provider's DNS settings:
   - `A` record: host `@` → `76.76.21.21`
   - `CNAME` record: host `www` → `cname.vercel-dns.com`

   (Always use the exact values Vercel shows you.)
4. DNS takes anywhere from a few minutes to a few hours. Vercel adds HTTPS (SSL) for free.
5. Update `url` in `lib/site.ts` to the new domain and push again.

### After going live

- Submit `https://<your-domain>/sitemap.xml` in Google Search Console.
- Add your website link to your Google Business Profile.
- Test the structured data with Google's Rich Results Test: https://search.google.com/test/rich-results
- Use Meta Events Manager → Test Events to confirm the **Lead** event fires when the contact form is submitted.

---

## Project structure

```
app/
  layout.tsx      Font, SEO metadata, Meta Pixel
  page.tsx        Assembles the sections + JSON-LD (DrivingSchool / LocalBusiness)
  globals.css     Tailwind + shared button/card styles
  sitemap.ts      /sitemap.xml
  robots.ts       /robots.txt
  icon.svg        Favicon
components/
  Header.tsx      Sticky header + mobile menu (client)
  Hero.tsx
  WhyUs.tsx
  Courses.tsx
  HowItWorks.tsx
  Reviews.tsx
  FAQ.tsx         Accessible accordion (client)
  Contact.tsx     Details + map
  ContactForm.tsx WhatsApp form + Meta Pixel Lead (client)
  Footer.tsx
  WhatsAppButton.tsx
  SectionHeading.tsx, icons.tsx
lib/
  site.ts         ALL business details
  whatsapp.ts     wa.me link + phone helpers
public/images/    Replaceable images
```
