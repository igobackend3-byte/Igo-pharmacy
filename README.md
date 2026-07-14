# IGO Pharmacy — v3 (Premium Rebuild)

The agri-input retail website of the IGO Group of Companies. Static site — open `index.html` in any browser, or host anywhere (Firebase Hosting recommended, see `FIREBASE-SETUP.md`).

## What's in v3

- **Complete shop engine** — all 59 products in one catalog (`js/products.js`) with live search, 6 category tabs, 5 sort options, WhatsApp quotes for bulk items, and a WhatsApp-checkout cart.
- **IGO Group ecosystem** — homepage section + footer links to the group's live brands (Agritech Farms, CropCare, Farmers Factory, Protein Cuts, Nursery, Academy, Farmgate Mandi, Agri Estates, Valluvam, Farm Loans, Exports & Imports).
- **Real company details sitewide** — Chennai head office, all three phone lines, both business emails, group vision/mission on the About page (sourced from igoagritechfarms.com).
- **Working lead capture** — every form opens WhatsApp with the details pre-filled; when Firebase is connected, leads are also saved to Firestore automatically.
- **Firebase-ready** — paste your config into `js/firebase-config.js` and the site loads products from Firestore and logs leads/orders. Full guide: `FIREBASE-SETUP.md`.

## File map

```
index.html            homepage (hero, categories, trending, group, contact)
shop.html             full storefront (search / filter / sort)
shop-*.html           category guides with usage details
service-*.html        12 service pages
about, dealer, membership, for-farmers, blog-*, cart, legal pages
css/style.css         design system (v3 premium layer at the bottom)
js/products.js        THE product catalog — edit products here
js/shop.js            shop renderer
js/cart.js            WhatsApp cart
js/main.js            nav, search, forms
js/firebase-config.js paste Firebase config here to go live
js/firebase.js        Firestore data layer (auto-activates)
```

## Still placeholder (needs real data)

Testimonials, blog teasers, and illustrative pricing — replace when real content exists. Hero/blog photos are credited Wikimedia stock; swap for brand photography when available.
