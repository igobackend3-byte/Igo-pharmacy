const fs = require('fs');
let c = fs.readFileSync('src/data/products.ts', 'utf8');

const blockStart = c.indexOf('  {\n    id: "skin-012"');
const blockEnd = c.indexOf('  {\n    id: "gut-001"');

if (blockStart === -1 || blockEnd === -1) {
  console.error('Could not find block boundaries!');
  process.exit(1);
}

console.log(`Block starts at: ${blockStart}, ends at: ${blockEnd}`);

const replacement = `  {
    id: "skin-012",
    name: "Hibiscus Powder \u2013 Skin & Hair Care",
    brand: "IGO Pharma",
    system: TraditionalSystem.HERBAL,
    category: "Skin Care",
    healthConcern: "Skin Care",
    price: 199,
    originalPrice: 249,
    rating: 4.7,
    reviewsCount: 124,
    image: "/images/prod-hibiscus-powder.png",
    images: ["/images/prod-hibiscus-powder.png"],
    description: "IGO Pharma's Pure Hibiscus Powder is a versatile beauty ingredient rich in AHAs and antioxidants that naturally exfoliates, brightens, and revitalises the skin. Also supports healthy hair growth when used as a hair mask.",
    ingredients: ["Pure Hibiscus Flower Powder (Hibiscus rosa-sinensis) - 100%"],
    benefits: [
      "Natural AHAs gently exfoliate and brighten skin",
      "Rich in antioxidants \u2014 fights free radical damage",
      "Improves skin elasticity and reduces fine lines",
      "Can be used for both skin and hair care"
    ],
    usage: "For face: Mix 1 tablespoon with honey or yogurt to form a paste. Apply for 15 minutes, then rinse. For hair: Mix with oil or water and apply as a hair mask.",
    dosage: "1-2 tablespoons per application, 1-2 times per week.",
    safetyInfo: "For external use only. Avoid contact with eyes. May leave a temporary pinkish tint \u2014 rinse thoroughly.",
    contraindications: [],
    storage: "Store in a cool, dry, airtight container.",
    shelfLife: "24 Months",
    manufacturer: "IGO Pharma Natural Botanicals, Tamil Nadu, India",
    certifications: ["100% Natural", "Chemical Free", "No Additives"],
    stock: 85,
    faqs: [],
    reviewsList: [
      { id: "rev-skin-12", name: "Kavitha B.", rating: 5, comment: "Love this hibiscus powder for my skin! It naturally exfoliates and my skin glows beautifully.", date: "2026-07-09", verified: true }
    ],
    qaList: []
  },
  {
    id: "gut-001"`;

const before = c.substring(0, blockStart);
const after = c.substring(blockEnd + '  {\n    id: "gut-001"'.length);
c = before + replacement + after;

fs.writeFileSync('src/data/products.ts', c, 'utf8');
console.log('✅ skin-012 block fully restored!');
