# Connecting IGO Pharmacy to Firebase

The site already ships with a Firebase-ready data layer. Nothing is required for it to work today — it runs on the static catalog (`js/products.js`). When you're ready to go live with a database, follow these steps.

## 1. Create the Firebase project

1. Go to [console.firebase.google.com](https://console.firebase.google.com) → **Add project** (e.g. `igo-pharmacy`).
2. Add a **Web app** (</> icon) → copy the `firebaseConfig` object.
3. Enable **Cloud Firestore** (production mode, region `asia-south1` for India).

## 2. Paste your config

Open `js/firebase-config.js` and replace `null` with your config object. That's the only code change needed — the data layer (`js/firebase.js`) detects it and activates automatically on every page.

## 3. What activates

| Collection | Direction | What it does |
|---|---|---|
| `products` | read | If documents exist, they replace the static catalog — shop, trending and search re-render live |
| `leads` | write | Every enquiry + newsletter submission is saved (in addition to the WhatsApp handoff) |
| `orders` | write | Ready for checkout logging via `IGO_DB.saveOrder(items, total)` |

## 4. Product document shape

Create documents in `products` matching this shape (same as `js/products.js`):

```json
{
  "name": "Chemica Wheat Seeds (HD-3086 Improved)",
  "price": 320,
  "mrp": 420,
  "img": "img/products/wheat-seeds-hd3086.webp",
  "cat": "seeds",
  "catLabel": "Seeds",
  "mode": "cart",
  "hot": true
}
```

- `cat` must be one of: `seeds`, `fertilizers`, `pesticides`, `equipment`, `veterinary`
- Omit `price` (or set `mode: "enquire"`) for price-on-request / bulk items
- `hot: true` puts the product in the homepage Trending section

Tip: to bulk-import the current 59 products, copy the array from `js/products.js` and import it with a small Node script or the Firebase console.

## 5. Security rules (starting point)

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /products/{id} { allow read: if true; allow write: if false; }
    match /leads/{id}    { allow create: if true; allow read, update, delete: if false; }
    match /orders/{id}   { allow create: if true; allow read, update, delete: if false; }
  }
}
```

Manage products through the Firebase console (or later an admin panel with Firebase Auth).

## 6. Next steps when you want more

- **Firebase Hosting** — deploy the whole folder with `firebase deploy`; free SSL + CDN.
- **Firebase Auth** — customer login / order history (requires UI work).
- **Cloud Functions** — email/WhatsApp alerts when a new lead arrives.
