
const fs = require("fs");
const path = require("path");

const productsPath = path.join(__dirname, "src", "data", "products.ts");

const productsList = [
  // Hair Care
  { id: "prod-3", name: "Amla Oil", category: "Hair Care", healthConcern: "Hair Care", price: 348, originalPrice: 1019, rating: 4.5, reviewsCount: 166, image: "/images/amla oil.png" },
  { id: "prod-15", name: "Hair Oil", category: "Hair Care", healthConcern: "Hair Care", price: 173, originalPrice: 846, rating: 4.5, reviewsCount: 139, image: "/images/hair oil.png" },
  { id: "prod-14", name: "Hair Serum", category: "Hair Care", healthConcern: "Hair Care", price: 202, originalPrice: 676, rating: 4.5, reviewsCount: 102, image: "/images/hair serum.png" },
  { id: "prod-18", name: "Hibiscus Powder", category: "Hair Care", healthConcern: "Hair Care", price: 332, originalPrice: 755, rating: 4.5, reviewsCount: 183, image: "/images/hibiscus powder.png" },
  { id: "prod-23", name: "Neem Oil", category: "Hair Care", healthConcern: "Hair Care", price: 477, originalPrice: 612, rating: 4.5, reviewsCount: 29, image: "/images/neem oil.png" },

  // Skin Care
  { id: "prod-1", name: "Aloe Vera Gel", category: "Skin Care", healthConcern: "Skin Care", price: 475, originalPrice: 606, rating: 4.5, reviewsCount: 85, image: "/images/alovera gel.png" },
  { id: "prod-16", name: "Herbal Facewash", category: "Skin Care", healthConcern: "Skin Care", price: 296, originalPrice: 721, rating: 4.5, reviewsCount: 183, image: "/images/herbal facewash.png" },
  { id: "prod-20", name: "Kumkumadi Tailam", category: "Skin Care", healthConcern: "Skin Care", price: 120, originalPrice: 631, rating: 4.5, reviewsCount: 100, image: "/images/kumkumadi tailam.png" },
  { id: "prod-21", name: "Multani Mitti Powder", category: "Skin Care", healthConcern: "Skin Care", price: 146, originalPrice: 755, rating: 4.5, reviewsCount: 53, image: "/images/multanimeti powder (1).png" },
  { id: "prod-26", name: "Rosewater", category: "Skin Care", healthConcern: "Skin Care", price: 107, originalPrice: 679, rating: 4.5, reviewsCount: 45, image: "/images/rosewater.png" },

  // Eye Care
  { id: "prod-7", name: "Aloe Eye Mask", category: "Eye Care", healthConcern: "Eye Care", price: 577, originalPrice: 713, rating: 4.5, reviewsCount: 106, image: "/images/eye care1.png" },
  { id: "prod-8", name: "Iris Eye Drops", category: "Eye Care", healthConcern: "Eye Care", price: 562, originalPrice: 687, rating: 4.5, reviewsCount: 103, image: "/images/eye care2.png" },
  { id: "prod-9", name: "Under Eye Brightener", category: "Eye Care", healthConcern: "Eye Care", price: 484, originalPrice: 1001, rating: 4.5, reviewsCount: 43, image: "/images/eye care3.png" },

  // Detox & Gut Health
  { id: "prod-11", name: "Turmeric Gummies", category: "Detox & Gut Health", healthConcern: "Detox & Gut Health", price: 156, originalPrice: 729, rating: 4.5, reviewsCount: 138, image: "/images/gut health1.png" },
  { id: "prod-12", name: "Triphala Powder", category: "Detox & Gut Health", healthConcern: "Detox & Gut Health", price: 479, originalPrice: 736, rating: 4.5, reviewsCount: 190, image: "/images/gut health2.png" },
  { id: "prod-13", name: "Herbal Detox", category: "Detox & Gut Health", healthConcern: "Detox & Gut Health", price: 445, originalPrice: 661, rating: 4.5, reviewsCount: 103, image: "/images/gut health3.png" },

  // Women`s Health
  { id: "prod-30", name: "Probiotics", category: "Women\"s Health", healthConcern: "Women\"s Health", price: 357, originalPrice: 772, rating: 4.5, reviewsCount: 16, image: "/images/women\"s health1.png" },
  { id: "prod-31", name: "Iron Energy", category: "Women\"s Health", healthConcern: "Women\"s Health", price: 242, originalPrice: 671, rating: 4.5, reviewsCount: 71, image: "/images/women\"s health2.png" },
  { id: "prod-32", name: "Energy Tea", category: "Women\"s Health", healthConcern: "Women\"s Health", price: 525, originalPrice: 781, rating: 4.5, reviewsCount: 105, image: "/images/women\"s health3.png" },

  // Immunity
  { id: "prod-2", name: "Amla Capsule", category: "Immunity", healthConcern: "Immunity", price: 290, originalPrice: 988, rating: 4.5, reviewsCount: 57, image: "/images/amla capsule.png" },
  { id: "prod-25", name: "Premium Chyawanprash", category: "Immunity", healthConcern: "Immunity", price: 250, originalPrice: 1041, rating: 4.5, reviewsCount: 118, image: "/images/premium chyawanprash(amla & gold).png" },
  { id: "prod-28", name: "Tulsi Syrup", category: "Immunity", healthConcern: "Immunity", price: 201, originalPrice: 624, rating: 4.5, reviewsCount: 200, image: "/images/tulsi syrup.png" }
];

let fileContent = `import { Product, TraditionalSystem } from "../types";

export const PRODUCTS: Product[] = [
`;

productsList.forEach((p, idx) => {
  fileContent += `  {
    "id": "${p.id}",
    "name": "${p.name}",
    "brand": "IGO Pharma",
    "system": TraditionalSystem.HERBAL,
    "category": "${p.category}",
    "healthConcern": "${p.healthConcern}",
    "price": ${p.price},
    "originalPrice": ${p.originalPrice},
    "rating": ${p.rating},
    "reviewsCount": ${p.reviewsCount},
    "image": "${p.image}",
    "images": ["${p.image}"],
    "description": "High quality ${p.name} from IGO Pharma.",
    "ingredients": ["Natural Ingredients"],
    "benefits": ["Promotes wellness and health."],
    "usage": "Use as directed.",
    "dosage": "As required.",
    "safetyInfo": "Store in a cool dry place.",
    "contraindications": [],
    "storage": "Cool dry place.",
    "shelfLife": "24 Months",
    "manufacturer": "IGO Pharma",
    "certifications": ["ISO Certified"],
    "stock": 100,
    "faqs": [],
    "reviewsList": [],
    "qaList": []
  }${idx < productsList.length - 1 ? "," : ""}
`;
});

fileContent += `];\n`;

fs.writeFileSync(productsPath, fileContent);
console.log("Rewrote products.ts");

