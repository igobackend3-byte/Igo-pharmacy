const fs = require('fs');
let content = fs.readFileSync('src/data/products.ts', 'utf8');

// ============================================================
// IMAGE + NAME CORRECTIONS based on actual Desktop/images files
// ============================================================
// Available prod-* images in public/images:
//   prod-alovera-gel.png        => Aloe Vera Gel
//   prod-amla-capsule.png       => Amla Capsules (Vitamin C)
//   prod-amla-oil.png           => Amla Oil
//   prod-chyawanprash.png       => Premium Chyawanprash (Amla & Gold)
//   prod-eucalyptus-oil.png     => Eucalyptus Oil
//   prod-eye-care1.png          => Eye Care Product 1 (Aloe Eye Mask)
//   prod-eye-care2.png          => Eye Care Product 2 (Iris Eye Drops)
//   prod-eye-care3.png          => Eye Care Product 3 (Under Eye Brightener)
//   prod-gut-health1.png        => Gut Health Product 1
//   prod-gut-health2.png        => Gut Health Product 2 (Triphala)
//   prod-gut-health3.png        => Gut Health Product 3
//   prod-hair-oil.png           => Hair Fall Control Oil
//   prod-herbal-facewash.png    => Herbal Face Wash
//   prod-herbal-toothpaste.png  => Herbal Toothpaste
//   prod-hibiscus-powder.png    => Hibiscus Powder
//   prod-kumkumadi-tailam.png   => Kumkumadi Tailam
//   prod-multanimeti-1.png      => Multani Mitti Powder
//   prod-multanimeti-2.png      => Multani Mitti Powder (variant 2)
//   prod-neem-oil.png           => Neem Oil
//   prod-neem-toothpaste.png    => Neem Toothpaste
//   prod-rosewater.png          => Rose Water
//   prod-tulsi-syrup.png        => Tulsi Syrup
//   prod-womens-health1.png     => Women's Health Product 1
//   prod-womens-health2.png     => Women's Health Product 2
//   prod-womens-health3.png     => Women's Health Product 3

const fixes = [
  // ---- Products still using Unsplash (replace with real local images) ----
  {
    id: 'ayur-002',
    name: 'Amla Capsules – Natural Vitamin C Boost',
    image: '/images/prod-amla-capsule.png',
    healthConcern: 'Immunity',
    description: 'IGO Pharma\'s Amla (Indian Gooseberry) Capsules are nature\'s richest source of natural Vitamin C, essential for immunity, collagen synthesis, and antioxidant protection.',
  },
  {
    id: 'sid-001',
    name: 'IGO Pharma Tulsi Syrup',
    image: '/images/prod-tulsi-syrup.png',
    healthConcern: 'Immunity',
    description: 'IGO Pharma\'s Tulsi (Holy Basil) Syrup is a traditional herbal immunity booster. Made from fresh Tulsi leaves, it supports respiratory health, combats seasonal infections, and promotes overall vitality.',
  },
  {
    id: 'sid-002',
    name: 'IGO Pharma Herbal Toothpaste',
    image: '/images/prod-herbal-toothpaste.png',
    healthConcern: 'Dental Care',
    description: 'IGO Pharma\'s Herbal Toothpaste is a traditional Ayurvedic dental care formula with natural herbs for strong teeth, healthy gums, and fresh breath. Free from fluoride, SLS, and artificial colors.',
  },
  {
    id: 'herb-001',
    name: 'IGO Pharma Neem Toothpaste',
    image: '/images/prod-neem-toothpaste.png',
    healthConcern: 'Dental Care',
    description: 'IGO Pharma\'s Neem Toothpaste harnesses the ancient antibacterial power of Neem (Azadirachta indica) for superior oral hygiene. Eliminates cavity-causing bacteria, strengthens enamel, and refreshes breath naturally.',
  },
  {
    id: 'herb-002',
    name: 'IGO Pharma Eucalyptus Essential Oil',
    image: '/images/prod-eucalyptus-oil.png',
    healthConcern: 'Immunity',
    description: 'IGO Pharma\'s 100% Pure Eucalyptus Oil is a versatile essential oil with powerful antimicrobial and respiratory-clearing properties. Ideal for steam inhalation, aromatherapy, and topical use when diluted.',
  },
  {
    id: 'ayur-004',
    name: 'IGO Pharma Hair Fall Control Oil',
    image: '/images/prod-hair-oil.png',
    healthConcern: 'Hair Care',
    description: 'IGO Pharma\'s Hair Fall Control Oil is a potent herbal blend featuring Hibiscus, Amla, Bhringaraj, and other botanical extracts. Strengthens hair from root to tip, nourishes the scalp, and reduces hair fall naturally.',
  },

  // ---- Products with wrong/mismatched images ----
  // skin-006 was named Red Sandalwood but uses multanimeti-2 image
  {
    id: 'skin-006',
    name: 'Multani Mitti Powder – Pore Cleansing Clay',
    image: '/images/prod-multanimeti-2.png',
    healthConcern: 'Skin Care',
    description: 'IGO Pharma\'s premium Multani Mitti (Fuller\'s Earth) Powder for deep pore cleansing and oil control. This natural clay powerfully absorbs excess sebum, removes dirt and toxins, and leaves skin feeling refreshed and clean.',
  },
  // skin-007 was "Turmeric Capsules" but uses amla-capsule image
  {
    id: 'skin-007',
    name: 'Amla Capsules – Vitamin C Skin Boost',
    image: '/images/prod-amla-capsule.png',
    healthConcern: 'Skin Care',
    description: 'IGO Pharma\'s Amla Capsules deliver concentrated natural Vitamin C for glowing skin, stronger immunity, and healthy hair. Each capsule contains potent Emblica officinalis extract for visible results from within.',
  },
  // skin-009 uses wrong path
  {
    id: 'skin-009',
    name: 'Eucalyptus Oil – Skin & Wellness',
    image: '/images/prod-eucalyptus-oil.png',
    healthConcern: 'Skin Care',
    description: 'IGO Pharma\'s Pure Eucalyptus Oil is a versatile essential oil known for its refreshing, antimicrobial, and healing properties. A natural solution for skin blemishes, minor infections, and aromatic wellness.',
  },
  // ayur-003 (Triphala) -> use gut-health2 image (correctly done already)
  // gut-001: rename to match what the image actually shows
  {
    id: 'gut-001',
    name: 'IGO Pharma Herbal Gut Health Formula',
    image: '/images/prod-gut-health1.png',
    healthConcern: 'Detox & Gut Health',
    description: 'IGO Pharma\'s Herbal Gut Health Formula is a carefully crafted blend of traditional herbs that supports comfortable digestion, healthy gut microbiome, and overall digestive wellness.',
  },
  // gut-002: rename to match image
  {
    id: 'gut-002',
    name: 'IGO Pharma Triphala Detox Tablets',
    image: '/images/prod-gut-health2.png',
    healthConcern: 'Detox & Gut Health',
    description: 'IGO Pharma\'s Triphala Detox Tablets are a modern take on the classic three-fruit Ayurvedic formula. These convenient tablets support gentle colon cleansing, liver detox, and digestive regularity.',
  },
  // ayur-003 already has gut-health2, update to gut-health3 to avoid duplicate
  {
    id: 'ayur-003',
    name: 'Triphala Chooranam (Digestive Cleanse)',
    image: '/images/prod-gut-health3.png',
    healthConcern: 'Detox & Gut Health',
    description: 'Classic Ayurvedic tri-herb detoxifying blend of Amalaki, Bibhitaki, and Haritaki. Gentle colon cleanser, mild laxative, and digestive stimulator which purges systemic accumulation of Ama (undigested toxins).',
  },
];

for (const fix of fixes) {
  // Update image
  const imgRegex = new RegExp(
    `(id:\\s*"${fix.id}"[\\s\\S]*?\\n\\s*image:\\s*)"[^"]+"`,
    'm'
  );
  if (imgRegex.test(content)) {
    content = content.replace(imgRegex, `$1"${fix.image}"`);
    console.log(`✅ Updated image for ${fix.id}: ${fix.image}`);
  } else {
    console.log(`❌ Could not find image field for ${fix.id}`);
  }

  // Update name
  const nameRegex = new RegExp(
    `(id:\\s*"${fix.id}"[\\s\\S]*?\\n\\s*name:\\s*)"[^"]+"`,
    'm'
  );
  if (nameRegex.test(content)) {
    content = content.replace(nameRegex, `$1"${fix.name}"`);
    console.log(`✅ Updated name for ${fix.id}: ${fix.name}`);
  } else {
    console.log(`❌ Could not find name field for ${fix.id}`);
  }

  // Update description
  if (fix.description) {
    const descRegex = new RegExp(
      `(id:\\s*"${fix.id}"[\\s\\S]*?\\n\\s*description:\\s*)"[^"]*"`,
      'm'
    );
    if (descRegex.test(content)) {
      content = content.replace(descRegex, `$1"${fix.description}"`);
      console.log(`✅ Updated description for ${fix.id}`);
    }
  }

  // Update healthConcern if specified
  if (fix.healthConcern) {
    const hcRegex = new RegExp(
      `(id:\\s*"${fix.id}"[\\s\\S]*?\\n\\s*healthConcern:\\s*)"[^"]+"`,
      'm'
    );
    if (hcRegex.test(content)) {
      content = content.replace(hcRegex, `$1"${fix.healthConcern}"`);
      console.log(`✅ Updated healthConcern for ${fix.id}: ${fix.healthConcern}`);
    }
  }
}

// Also fix the `images` arrays that still point to unsplash for the updated products
const unsplashFixes = [
  { id: 'ayur-002', newImages: ['/images/prod-amla-capsule.png'] },
  { id: 'sid-001', newImages: ['/images/prod-tulsi-syrup.png'] },
  { id: 'sid-002', newImages: ['/images/prod-herbal-toothpaste.png'] },
  { id: 'herb-001', newImages: ['/images/prod-neem-toothpaste.png'] },
  { id: 'herb-002', newImages: ['/images/prod-eucalyptus-oil.png'] },
  { id: 'ayur-004', newImages: ['/images/prod-hair-oil.png'] },
];

for (const fix of unsplashFixes) {
  // Replace the images: [...] array for each product
  const arrRegex = new RegExp(
    `(id:\\s*"${fix.id}"[\\s\\S]*?\\n\\s*images:\\s*)\\[[\\s\\S]*?\\]`,
    'm'
  );
  const newArr = `[${fix.newImages.map(i => `"${i}"`).join(', ')}]`;
  if (arrRegex.test(content)) {
    content = content.replace(arrRegex, `$1${newArr}`);
    console.log(`✅ Updated images[] for ${fix.id}`);
  } else {
    console.log(`⚠️  Could not update images[] for ${fix.id}`);
  }
}

fs.writeFileSync('src/data/products.ts', content, 'utf8');
console.log('\n✅ All done! Products updated.');
