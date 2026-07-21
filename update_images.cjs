const fs = require('fs');
let content = fs.readFileSync('src/data/products.ts', 'utf8');

// Map of product ID -> new image path (based on images available from Desktop/images folder)
const imageUpdates = {
  // Premium Chyawanprash
  'ayur-001': '/images/prod-chyawanprash.png',
  // Hair products
  'hair-001': '/images/prod-hibiscus-powder.png',    // hibiscus powder.png = IGO Pharma Hibiscus Powder
  'hair-002': '/images/prod-hair-oil.png',            // hair oil.png = Hair Fall Control Oil
  'hair-003': '/images/prod-amla-oil.png',            // amla oil.png = Amla Oil
  'hair-004': '/images/prod-neem-oil.png',            // neem oil.png = Neem Oil
  // Skin products
  'skin-001': '/images/prod-alovera-gel.png',         // alovera gel.png = Aloe Vera Gel
  'skin-002': '/images/prod-kumkumadi-tailam.png',    // kumkumadi tailam.png = Kumkumadi Tailam
  'skin-003': '/images/prod-multanimeti-1.png',       // multanimeti powder (1).png = Multani Mitti
  'skin-004': '/images/prod-rosewater.png',           // rosewater.png = Rose Water
  'skin-005': '/images/prod-herbal-facewash.png',     // herbal facewash.png = Herbal Face Wash
  'skin-006': '/images/prod-multanimeti-2.png',       // multanimeti powder (2).png = Red Sandalwood Powder
  'skin-007': '/images/prod-amla-capsule.png',        // amla capsule.png = Turmeric/Amla Capsules
  'skin-008': '/images/prod-amla-capsule.png',        // amla capsule.png
  // Gut health products
  'ayur-003': '/images/prod-gut-health2.png',         // gut health2.png = Triphala
  // Eye care products
  'eye-001': '/images/prod-eye-care1.png',
  'eye-002': '/images/prod-eye-care2.png',
  'eye-003': '/images/prod-eye-care3.png',
  // Gut health detailed
  'gut-001': '/images/prod-gut-health1.png',
  'gut-002': '/images/prod-gut-health2.png',
  'gut-003': '/images/prod-gut-health3.png',
  // Women's health
  'women-001': '/images/prod-womens-health1.png',
  'women-002': '/images/prod-womens-health2.png',
  'women-003': '/images/prod-womens-health3.png',
  // Herbal toothpaste products
  'herb-003': '/images/prod-herbal-toothpaste.png',
  'herb-004': '/images/prod-neem-toothpaste.png',
  // Tulsi syrup
  'herb-005': '/images/prod-tulsi-syrup.png',
  // Eucalyptus
  'herb-006': '/images/prod-eucalyptus-oil.png',
};

for (const [id, imgPath] of Object.entries(imageUpdates)) {
  // Match the product block and update the first `image:` field after the id
  const regex = new RegExp(
    `(id:\\s*"${id}"[\\s\\S]*?\\n\\s*image:\\s*)"[^"]+"`,
    'm'
  );
  if (regex.test(content)) {
    content = content.replace(regex, `$1"${imgPath}"`);
    console.log(`Updated image for ${id}: ${imgPath}`);
  } else {
    console.log(`Product ${id} not found`);
  }
}

fs.writeFileSync('src/data/products.ts', content, 'utf8');
console.log('\nDone! All product images updated.');
