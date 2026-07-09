# IGO Pharmacy — Landing Page

A premium, single-page static website for IGO Pharmacy (agri-input retail arm of IGO Precision Farming Pvt. Ltd), inspired by the layout/UX patterns of enterprise agri-companies (Bayer Crop Science, Syngenta, UPL, BASF, Corteva, Coromandel, PI Industries, etc.) — no branding, text, or assets copied from them.

## How to view it

Open `index.html` in any browser (double-click it). No build step, server, or install required.

## File structure

```
IGO-Pharmacy/
├── index.html        the whole page
├── css/style.css      all styles
├── js/main.js         all interactivity (FAQ accordion, mobile nav, chip tabs, scroll reveal, counters)
└── README.md          this file
```

## What's real vs. placeholder

**Real / working:**
- Fully responsive layout, tested down to mobile widths
- Working FAQ accordion, mobile nav drawer, "Shop by Crop / Shop by Problem" tabs, scroll-reveal animations, animated stat counters
- Click-to-call, WhatsApp deep-links (pre-filled message), floating WhatsApp button
- Contact details (phone, email, address, business hours) — currently copied from IGO Agritech Farms; confirm if IGO Pharmacy should use its own
- Stock photography — 7 real, freely-licensed photos from Wikimedia Commons/USDA, credited in the footer

**Placeholder — needs your input before launch:**
- Logo (currently a text badge "IGO PHARMA")
- Brand/supplier chips in the "Brands we stock" section
- Testimonials (currently generic placeholder quotes, no real customer names/photos used)
- Blog post content (titles/teasers are illustrative, not real articles)
- Enquiry form and newsletter form submit to a JS `alert()` only — they are **not connected to email, a CRM, or a database**. Wire them up to a service like Formspree, Google Sheets, or your own backend before relying on them for real leads.

## What was intentionally left out (and why)

Your master prompt described a full enterprise platform: dealer/distributor logins, an admin panel, a live product catalog with search/filter/cart, AI crop-disease detection via image upload, payment gateway integration, and a Supabase/PostgreSQL backend on Next.js.

None of that is included here. Building it would require:
- A real backend (database, authentication, APIs) and hosting (e.g. Vercel + Supabase)
- Payment gateway merchant accounts (Razorpay/PhonePe) — cannot be set up on your behalf
- A trained image-classification model (or a paid AI vision API) for crop-disease detection, plus a review process before showing farmers a diagnosis
- Ongoing engineering/maintenance once live

This page is deliberately scoped as a **marketing/lead-generation landing page** — it looks and reads like a real product, but doesn't pretend to have backend functionality it doesn't have. If you want to move toward the fuller platform, the natural next step is a dealer/product database + a simple enquiry-to-CRM pipeline, then layering features in from there.

## Image credits

All photos are from Wikimedia Commons / USDA (public domain or Creative Commons), hotlinked directly — no local image files needed. See the footer of the page for the credit line.
