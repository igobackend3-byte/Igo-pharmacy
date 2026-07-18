# IGO Pharmacy — Image Audit & Fix Report
Date: 2026-07-14

## Note on katyayanicrop.com
The reference site publishes `noai, noimageai` directives and a TDM reservation, which block AI access to its content and images. No content or imagery was taken from it; this audit covers the IGO Pharmacy site only, with fixes done using IGO's own assets.

## Audit scope
32 HTML pages, css/, js/, and 67 image files scanned for broken paths, external hotlinks, missing alt text, oversized files, and unused assets.

## Findings and fixes

### 1. External hotlinked images — 16 found, all replaced
Every Wikimedia hotlink (index, membership, shop-pesticides, shop-veterinary, service-dealer-support, dealer, all 3 blogs) was swapped for a local IGO asset with corrected, descriptive alt text. This removes third-party dependency, mixed-source loading, and the risk of images disappearing if Wikimedia URLs change. og:image and twitter:image meta tags on 4 pages now point to `https://www.igopharmacy.in/img/...` instead of Wikimedia. Three remote `onerror` fallbacks in dealer.html were removed.

### 2. Oversized product images — 10 fixed
Ten liquid-fertilizer PNGs at ~2 MB each (≈20.7 MB combined) were converted to WebP at max 800px, quality 82 — now 63–95 KB each (≈0.75 MB combined, ~96% smaller). References updated in shop-fertilizers.html and js/products.js; old PNGs deleted. The img folder dropped from 27 MB to 5.8 MB.

### 3. Unused images — 4 put to work or noted
`real-storage-warehouse.jpg`, `real-packhouse.webp` (partly), and `real-agri-advisory-team.jpg` are now used as hotlink replacements. `igo-group-logo.png`, `igo-cropcare-brand.jpg`, and `igo-organic-pharmacy-brand.jpg` remain unused — keep if planned for future brand pages, otherwise removable.

### 4. Truncated file repaired
`service-farm-advisory.html` was cut off mid-footer (missing footer links, script tags, and `</body></html>`). Restored from the sibling service-page footer.

### 5. Copy fixes (index.html)
- Stat inconsistency fixed: "15,000+ projects" → "6,000+" to match the hero and about.html.
- Hero H1 rephrased to lead with the farmer benefit: "Genuine Inputs. Expert Advice. Every Season."
- Removed the hard-coded "59-product catalog" claim (goes stale as the catalog grows).
- Category subtitle sharpened to a concrete benefit.

### Final verification
Re-scan after fixes: 0 broken references, 0 external image dependencies, 0 missing alt attributes, all 32 pages structurally valid.

## Recommendations
- The footer credit "Stock imagery courtesy of Wikimedia Commons" is now obsolete on most pages since no Wikimedia images remain — update once you confirm the provenance of the remaining hero/category images.
- Replace the reused stock-style hero/category images with real IGO field photography as it becomes available; several sections currently share the same 6 images.
- `real-agri-advisory-team.jpg` (356 KB JPG) could be converted to WebP for a further ~60% saving.
