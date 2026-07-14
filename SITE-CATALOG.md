# IGO Pharmacy — Full Site Catalog & Content Memory

*Compiled from a full crawl of all 33 HTML pages, `css/style.css`, and `js/products.js`. This is the reference record — every page's purpose, sections, image count, and the site's visual-effects inventory.*

## 1. Site structure at a glance

- **33 HTML pages** total, all sharing one header/footer template, one stylesheet (`css/style.css`, ~31KB, un-minified by design), and `js/main.js` for nav/search/forms.
- **Product data lives in `js/products.js`**, not in the HTML — 59 products as a single JS array (`window.IGO_PRODUCTS`), rendered client-side into `shop.html` and the homepage "Trending" strip. Category split: Seeds 18, Fertilizers 11, Liquid Fertilizer 11, Powder Fertilizer 11, Agri Equipment 3, Crop Protection 3, Cattle Supplements 1, Poultry Medicines 1.
- Static per-category shop pages (`shop-seeds.html`, `shop-fertilizers.html`, `shop-equipment.html`, `shop-pesticides.html`, `shop-veterinary.html`) hard-code their own product cards separately from `products.js` — two parallel product sources, not one shared feed.

## 2. Every page — title, description, sections, images

| Page | Title | H1 | H2 sections | Images |
|---|---|---|---|---|
| `index.html` | IGO Pharmacy \| Genuine Agri-Inputs Across India | The Agri-Input Pharmacy of the IGO Group — Genuine Inputs, Expert Advice | 13: Everything your farm needs / Trending Farm Inputs / Solutions by crop-problem / Membership Levels / Why farmers choose us / Core services / Quality & Standards / Testimonials / Blog / FAQ / Newsletter / Dealer CTA / Contact | 20 |
| `about.html` | About Us | Connecting Farmers to Genuine Inputs and Real Advice | 5: Honest enquiry-first / Core Pillars / Vision / Mission / Part of IGO Group | 3 |
| `wellness.html` | IGO Organic Pharmacy — Siddha & Ayurveda Wellness | (same) | 1: About IGO Organic Pharmacy (+ stats, offerings, sourcing strip, roadmap — added this session) | 1 static img + 1 custom inline SVG illustration |
| `for-farmers.html` | For Farmers | Everything You Need, In One Place | 1: Three ways to get help | 2 |
| `dealer.html` | Become a Dealer | From Farmer to Entrepreneur | 6: Why partner / What it covers / Ideal Partner Profile / We Provide / Application flow / Before You Apply | 6 |
| `membership.html` | Membership Levels | Grow From Farmer to Agri-Entrepreneur | 0 (5 tier cards instead, no H2s) | 7 |
| `cart.html` | Your Cart | Shopping Cart | 0 (JS-rendered cart content) | 2 |
| `shop.html` | Shop — Seeds, Fertilizers & Equipment | **none** | 0 | 2 (rest JS-rendered from `products.js`) |
| `shop-seeds.html` | Seeds | **none** | 4: Field / Vegetable / Fruit / Flower seeds | 20 |
| `shop-fertilizers.html` | Fertilizers | **none** | 4: Chemical / Bio-Organic / Liquid / Powder | 35 |
| `shop-equipment.html` | Equipment | **none** | 0 | 5 |
| `shop-pesticides.html` | Crop Protection & Pesticides | Crop Protection & Pesticides | 4: sub-categories / pricing / enquiry model / not just a list | 11 |
| `shop-veterinary.html` | Veterinary & Animal Husbandry | Veterinary & Animal Husbandry | 4: sub-categories / pricing / enquiry model / not just a list | 9 |
| `service-input-supply.html` | Agri Inputs Supply Service | Agri Inputs Supply | 4 | 3 |
| `service-farm-advisory.html` | Farmer Advisory Service | Farmer Advisory | 4 | 3 |
| `service-soil-testing.html` | Soil Testing Guidance | Soil Testing Guidance | 4 | 3 |
| `service-equipment-rental.html` | Equipment Rental | Equipment Rental | 4 | 3 |
| `service-storage-warehousing.html` | Storage & Warehousing Guidance | Storage & Warehousing Guidance | 4 | 3 |
| `service-market-linkage.html` | Market Linkage Guidance | Market Linkage Guidance | 4 | 3 |
| `service-export-import.html` | Export/Import Guidance | Export/Import Guidance | 4 | 3 |
| `service-pest-disease.html` | Pest & Disease Guidance | Pest & Disease Guidance | 3 | 3 |
| `service-crop-consultation.html` | Crop Consultation | Crop Consultation | 3 | 3 |
| `service-crop-planning.html` | Crop Planning Support | Crop Planning Support | 3 | 3 |
| `service-soil-guidance.html` | Soil & Input Guidance | Soil & Input Guidance | 3 | 3 |
| `service-dealer-support.html` | Dealer & Distributor Support | Dealer & Distributor Support | 3 | 3 |
| `blog-fall-armyworm-maize.html` | Managing Fall Armyworm in Maize | (same) | 4 | 3 |
| `blog-npk-ratio.html` | Choosing the Right NPK Ratio | (same) | 4 | 3 |
| `blog-battery-vs-manual-sprayer.html` | Battery Sprayer vs Manual Sprayer | (same) | 4 | 3 |
| `privacy.html` | Privacy Policy | (same) | 6 | 2 |
| `terms.html` | Terms of Use | (same) | 8 | 2 |
| `refund-policy.html` | Refund Policy | (same) | 6 | 2 |
| `shipping-policy.html` | Shipping Policy | (same) | 7 | 2 |
| `grievance-redressal.html` | Grievance Redressal | (same) | 5 | 2 |

*Note: the 4 pages with "none" under H1 are a known gap (flagged separately below) — `shop.html`, `shop-seeds.html`, `shop-fertilizers.html`, `shop-equipment.html` currently have no `<h1>` anywhere on the page.*

## 3. Navigation — every option in the header

**Main nav (8 items, identical on all 32 pages except `cart.html`):** Home · Shop (dropdown: All Products / Seeds / Fertilizers / Equipment / Crop Protection / Veterinary) · Services (dropdown, 8 items: Agri Inputs Supply / Farmer Advisory / Soil Testing / Equipment Rental / Storage & Warehousing / Market Linkage / Export Import / Agri Entrepreneurship→dealer.html) · About (dropdown: About Us / Why Choose IGO / Quality & Standards / What Farmers Say) · For Farmers (dropdown: Hub / Shop by Crop & Problem / Blog / FAQs) · Membership (dropdown: 5 tiers + Compare) · Wellness · Franchise · Contact.

**Orphaned pages that exist but aren't in this nav or the homepage services grid:** `service-pest-disease.html`, `service-crop-consultation.html`, `service-soil-guidance.html`, `service-crop-planning.html`, `service-dealer-support.html` (last 4 intentionally retired per project history; the first one appears to be an accidental miss).

## 4. Visual effects inventory — "3D effects" audit

Checked `css/style.css` specifically for 3D transform properties: `perspective`, `rotateX/Y/Z`, `rotate3d`, `translateZ`, `transform-style: preserve-3d`.

**Result: none exist anywhere on the site.** There are no true 3D effects — no tilt-on-hover cards, no parallax scrolling, no rotating elements, no depth-axis transforms. Everything is flat, 2D CSS.

What the site *does* have (2D animation/motion inventory):
- **Card hover-lift** — 11 component classes (`.opt-card`, `.prod-card`, `.cat-card`, `.service-card`, `.pillar-card`, `.why-card`, `.quality-card`, `.brand-chip`, `.blog-card`, `.chip`, buttons) use `transform: translateY(-2px to -6px)` + a bigger box-shadow on hover — a flat "lift toward the viewer" illusion, not real 3D.
- **`@keyframes scroll`** — horizontal marquee/ticker (`translateX`), used for a scrolling trust-badge/brand strip.
- **`@keyframes searchPulse`** — highlight pulse used when the on-page search jumps to and highlights a matched result.
- **`@keyframes pulse`** — the floating WhatsApp button's glowing box-shadow pulse (2.4s loop).
- **`scroll-behavior: smooth`** on `<html>` for anchor-link scrolling.
- **`reveal` / `reveal-visible` classes** — scroll-triggered fade/slide-in on section headings and cards (seen throughout, e.g. `reveal reveal-d1` through `d4` stagger delays).

If you want real 3D (product cards that tilt toward the cursor, a rotating hero graphic, parallax depth on the hero background), that would be new work — nothing currently in the codebase does this.

## 5. Content/image gaps carried over from prior audits (still open)

- `service-pest-disease.html` fully orphaned — not linked from any nav, homepage grid, or `sitemap.xml`.
- 4 pages have zero `<h1>` (`shop.html`, `shop-seeds.html`, `shop-fertilizers.html`, `shop-equipment.html`) — page title is a plain `<span>`, not a heading.
- Homepage testimonials show literal "Placeholder Farmer" ×3 as the displayed name.
- `sitemap.xml` missing `wellness.html` and `service-pest-disease.html`.
- Forms (`enquiryForm`, newsletter) only show a "thanks" popup — `js/firebase-config.js` is still `null`, so nothing is actually sent/stored anywhere.
- 22 liquid/powder fertilizer products still marked "Price on Enquiry" — no real prices supplied yet.
- Business identity (phone/email/address) still borrowed from IGO Agritech Farms — never confirmed as IGO Pharmacy's own.
- Legal pages (`privacy.html`, `terms.html`) are generic templates — need real legal review (India's DPDP Act, 2023).
- No domain/hosting/Analytics/Search Console — site currently only exists as local files.
- Real supplier/brand names and named farmer testimonials still not supplied.

---
*This file is a point-in-time snapshot (compiled during this audit session) — re-run the crawl if pages change significantly.*
