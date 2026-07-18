import { Product, TraditionalSystem } from "../types";

export const PRODUCTS: Product[] = [
  {
    id: "ayur-001",
    name: "Premium Chyawanprash (Amla & Gold)",
    brand: "IGO Pharma",
    system: TraditionalSystem.AYURVEDA,
    category: "Kashayam & Rasayanam",
    healthConcern: "Immunity",
    price: 499,
    originalPrice: 599,
    rating: 4.8,
    reviewsCount: 142,
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=600",
    images: [
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Authentic Vedic formulation with premium organic Amla (Gooseberry), real Gold dust, Saffron, and 45+ therapeutic herbs. Prepared via traditional slow-cook copper vessel method to preserve bio-active compounds.",
    ingredients: ["Fresh Amla Pulp (Organic)", "Saffron (Kesar)", "Gold Bhasma (Swarna Bhasma)", "Ashwagandha", "Guduchi (Giloy)", "Shatavari", "Cardamom", "Pure Honey", "A2 Cow Ghee"],
    benefits: [
      "Boosts absolute immunity and respiratory strength",
      "Improves cognitive performance, memory, and concentration",
      "Aids cell renewal, acts as a powerful anti-aging Rasayana",
      "Optimizes digestion and absorption of trace minerals"
    ],
    usage: "Take 1-2 teaspoons twice a day before meals. Best consumed on an empty stomach with warm organic milk or lukewarm water.",
    dosage: "Adults: 1-2 teaspoons (12g-24g) daily. Children (above 5 years): 1/2 teaspoon (6g) daily.",
    safetyInfo: "100% safe for long-term daily use. Diabetics should consult their physician before taking Swarna Chyawanprash containing natural jaggery/honey.",
    contraindications: ["Extreme burning sensation in stomach", "Active acute gastritis"],
    storage: "Store in a cool, dry place away from direct sunlight. Ensure the safety seal under the lid is intact after each use. Do not refrigerate.",
    shelfLife: "36 Months from the date of manufacture.",
    manufacturer: "IGO Pharma GMP Certified Pharmacy, Chennai, Tamil Nadu, India",
    certifications: ["AYUSH Premium Certified", "WHO-GMP Certified", "NPOP Organic India", "USDA Organic"],
    labReportUrl: "/docs/lab_report_chyawanprash_batch_120.pdf",
    isBestSeller: true,
    isDoctorRecommended: true,
    isSeasonal: true,
    stock: 45,
    faqs: [
      { question: "Is this safe for children?", answer: "Yes, children above 5 years can consume half a teaspoon daily under parental supervision." },
      { question: "Does it contain added refined sugar?", answer: "No, it is sweetened with natural wild forest honey and organic palm sugar (Khandasari)." }
    ],
    reviewsList: [
      { id: "rev-1", name: "Ananth Raman", rating: 5, comment: "Exceptional quality. Unlike other commercial brands, this is thick, less sweet, and has a strong herbal spice feel. My energy levels have drastically improved.", date: "2026-06-15", verified: true },
      { id: "rev-2", name: "Sarah Jenkins", rating: 4, comment: "I love the warm spices. It really helped my winter respiratory issues. Highly recommended.", date: "2026-07-02", verified: true }
    ],
    qaList: [
      { question: "Is this suitable for vegans?", answer: "It contains A2 Cow Ghee (clarified butter), so it is vegetarian but not strictly vegan." },
      { question: "Can I take this in summer?", answer: "Yes, Chyawanprash can be taken year-round, although dosage can be reduced to 1 teaspoon in peak summer." }
    ]
  },
  {
    id: "ayur-002",
    name: "KSM-66 Organic Ashwagandha Capsules",
    brand: "IGO Pharma",
    system: TraditionalSystem.AYURVEDA,
    category: "Tablets & Capsules",
    healthConcern: "Stress Relief",
    price: 380,
    originalPrice: 450,
    rating: 4.7,
    reviewsCount: 310,
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=600",
    images: [
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Highly bioavailable, clinically-proven KSM-66 Ashwagandha root extract capsules. Formulated to reduce cortisol, combat physical fatigue, improve sleep latency, and strengthen vitality.",
    ingredients: ["KSM-66 Ashwagandha Extract (5% Withanolides) - 500mg", "Piperine Extract (BioPerine) - 5mg"],
    benefits: [
      "Reduces chronic stress levels and balances high cortisol",
      "Promotes deep, restorative REM sleep patterns",
      "Increases muscle endurance, recovery, and oxygenation",
      "Nourishes the nervous system as an Adaptogenic tonic"
    ],
    usage: "Take 1 capsule twice daily with warm water or milk, preferably 30 minutes after your morning and evening meals.",
    dosage: "1 Capsule (505mg) twice daily or as directed by an Ayurvedic physician.",
    safetyInfo: "Do not exceed recommended dosage. Pregnant women should avoid Ashwagandha due to uterine-stimulating potential.",
    contraindications: ["Pregnancy", "Autoimmune thyroid conditions (requires physician consultation)"],
    storage: "Store in a cool, dry, dark place below 25°C. Keep container tightly closed.",
    shelfLife: "24 Months",
    manufacturer: "IGO Pharma GMP Pharmacy, Madurai, Tamil Nadu, India",
    certifications: ["AYUSH Certified", "GMP Approved", "FSSAI Registered", "Non-GMO Verified"],
    labReportUrl: "/docs/ashwagandha_lab_ksm66.pdf",
    isBestSeller: true,
    isDoctorRecommended: true,
    stock: 120,
    faqs: [
      { question: "How long until I see stress reduction?", answer: "Most users experience noticeable stress reduction and sleep improvement within 10 to 14 days of consistent usage." },
      { question: "Is this standardized?", answer: "Yes, it is standardized to contain exactly 5% Withanolides, the active therapeutic compound of Ashwagandha." }
    ],
    reviewsList: [
      { id: "rev-3", name: "Priya Chandran", rating: 5, comment: "I have tried many stress supplements. IGO Pharma's KSM-66 is by far the most potent. My sleep quality went from terrible to waking up fully refreshed.", date: "2026-05-18", verified: true }
    ],
    qaList: [
      { question: "Does it cause drowsiness?", answer: "No, Ashwagandha is an adaptogen. It calms you if you are stressed, but provides natural cellular energy during active hours without sedating effects." }
    ]
  },
  {
    id: "sid-001",
    name: "Siddha Nilavembu Kudineer Chooranam",
    brand: "IGO Pharma",
    system: TraditionalSystem.SIDDHA,
    category: "Churnam & Powders",
    healthConcern: "Immunity",
    price: 180,
    originalPrice: 220,
    rating: 4.9,
    reviewsCount: 420,
    image: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?auto=format&fit=crop&q=80&w=600",
    images: [
      "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Traditional Siddha decoction powder consisting of nine therapeutic herbs. Renowned for its powerful antipyretic, anti-inflammatory, and antiviral properties, helping against viral fevers, dengue, and joint stiffness.",
    ingredients: [
      "Nilavembu (Andrographis paniculata) - 11.1%",
      "Vettiver (Vetiveria zizanioides) - 11.1%",
      "Vilamichai Ver (Plectranthus vettiveroides) - 11.1%",
      "Chandan (Santalum album) - 11.1%",
      "Koraikizhangu (Cyperus rotundus) - 11.1%",
      "Sukku (Zingiber officinale) - 11.1%",
      "Milagu (Piper nigrum) - 11.1%",
      "Parpatagam (Mollugo cerviana) - 11.1%",
      "Peyputtal (Trichosanthes cucumerina) - 11.1%"
    ],
    benefits: [
      "Combats viral fevers, body aches, and joint stiffness",
      "Boosts platelet count naturally during seasonal viral outbreaks",
      "Purifies blood and flushes out circulating viral toxins",
      "Improves overall cellular immunity and metabolic rate"
    ],
    usage: "Boil 5-10g (2 teaspoons) of Chooranam in 200ml of water until it reduces to 50ml. Filter and consume warm.",
    dosage: "Adults: 30-50ml of decoction twice a day. Children: 10-15ml of decoction twice a day. Consume before food.",
    safetyInfo: "Nilavembu Kudineer should be taken for a maximum of 5-7 days consecutively during viral illness. Avoid continuous long-term overuse without Siddha physician guidance.",
    contraindications: ["Extreme low blood pressure", "Active acute gastric ulcer"],
    storage: "Store in a dry airtight container to avoid moisture absorption.",
    shelfLife: "18 Months",
    manufacturer: "IGO Pharma Siddha Facility, Madurai, Tamil Nadu, India",
    certifications: ["Siddha AYUSH Certified", "GMP Certified Laboratory", "100% Pure Raw Herbs Certified"],
    labReportUrl: "/docs/nilavembu_heavy_metals_test.pdf",
    isBestSeller: true,
    isDoctorRecommended: true,
    isSeasonal: true,
    stock: 85,
    faqs: [
      { question: "Should I drink it hot or cold?", answer: "It is best consumed lukewarm or warm, as the warm liquid helps expand throat vessels and aids faster gastrointestinal absorption." },
      { question: "Is it bitter?", answer: "Yes, Andrographis paniculata is known as 'King of Bitters'. You can add a few drops of organic honey if the bitterness is difficult to tolerate." }
    ],
    reviewsList: [
      { id: "rev-4", name: "Muthu Kumar", rating: 5, comment: "Authentic bitter taste. This is the real deal. Cleared my chronic seasonal cold and body pain in 3 days flat.", date: "2026-06-29", verified: true }
    ],
    qaList: [
      { question: "Is this the exact formula approved by the government?", answer: "Yes, this matches the classical Siddha literature formulation prescribed by the Department of AYUSH during dengue/chikungunya viral outbreaks." }
    ]
  },
  {
    id: "sid-002",
    name: "Amukkara Chooranam (Siddha Ashwagandha)",
    brand: "IGO Pharma",
    system: TraditionalSystem.SIDDHA,
    category: "Churnam & Powders",
    healthConcern: "Stress Relief",
    price: 150,
    originalPrice: 180,
    rating: 4.6,
    reviewsCount: 95,
    image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&q=80&w=600",
    images: [
      "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Classic Siddha formulation combining Amukkara (Ashwagandha root) with purifying spices. Celebrated for reinforcing nervous system tone, addressing musculoskeletal pain, insomnia, and nervous debility.",
    ingredients: ["Amukkara Root (Withania somnifera)", "Milagu (Black pepper)", "Sukku (Ginger)", "Thippili (Long pepper)", "Elam (Cardamom)", "Cinnamon", "Sugar"],
    benefits: [
      "Excellent treatment for high Vata (muscular pain, tremors, insomnia)",
      "Strengthens sexual vitality, vigor, and overall physical stamina",
      "Calms hyperactive thoughts, reducing anxiety and chronic stress",
      "Increases hemoglobin levels and treats nutritional anemia"
    ],
    usage: "Mix 1-2g of powder with warm milk or organic ghee and take after dinner before sleeping.",
    dosage: "1 to 2 grams, twice daily, after meals with milk or warm water.",
    safetyInfo: "Safe for kids under physician guidance. Pregnant women should avoid it.",
    contraindications: ["Pregnancy", "Extreme hot-flushes (high Pitta)"],
    storage: "Store in a dry airtight jar.",
    shelfLife: "24 Months",
    manufacturer: "IGO Pharma Siddha Facility, Tirunelveli, Tamil Nadu, India",
    certifications: ["AYUSH Certified Siddha Pharmacy", "ISO 9001:2015 Approved"],
    stock: 140,
    faqs: [],
    reviewsList: [
      { id: "rev-5", name: "Suresh Pillai", rating: 4, comment: "Very soothing. Taking this with warm milk at night has completely resolved my lower back pain and chronic fatigue.", date: "2026-07-01", verified: true }
    ],
    qaList: []
  },
  {
    id: "herb-001",
    name: "Therapeutic Kumkumadi Saffron Facial Oil",
    brand: "IGO Pharma",
    system: TraditionalSystem.HERBAL,
    category: "Thailam & Oils",
    healthConcern: "Skin Problems",
    price: 850,
    originalPrice: 1100,
    rating: 4.9,
    reviewsCount: 220,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=600",
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Miraculous 100% natural Ayurvedic night serum. Handcrafted using premium Kashmiri Saffron, Sandalwood, Licorice, and fresh goat's milk boiled over weeks to create an unmatched skin brightening, spot reducing nectar.",
    ingredients: ["Kashmiri Saffron (Kesar)", "Red Sandalwood", "Manjistha", "Yashtimadhu (Licorice)", "Vetiver", "Blue Lotus", "Fresh Goat Milk", "Pure Sesame Oil base"],
    benefits: [
      "Illuminates facial complexion and corrects hyperpigmentation",
      "Fades dark circles, stubborn acne spots, and fine age lines",
      "Replenishes cellular hydration, balancing dry and oily zones",
      "Acts as a rich anti-microbial shield against blackheads"
    ],
    usage: "After night cleansing, apply 3-4 drops of Kumkumadi Tailam on damp face. Massage gently using upward circular strokes. Leave overnight.",
    dosage: "3-5 drops daily as a night serum.",
    safetyInfo: "For external cosmetic use only. If you have active pustular acne, avoid oil application and use IGO Pharma Herbal Gel instead.",
    contraindications: ["Extremely active oily pustular acne conditions"],
    storage: "Store in a cool dry place, secure gold dropper tight to avoid oxidation.",
    shelfLife: "36 Months",
    manufacturer: "IGO Pharma Natural Botanicals, Coimbatore, Tamil Nadu, India",
    certifications: ["AYUSH Premium Certified", "100% Ayurvedic Formulation", "Cruelty-Free, Vegan Safe base"],
    labReportUrl: "/docs/kumkumadi_purity_index.pdf",
    isBestSeller: true,
    isNewArrival: true,
    stock: 30,
    faqs: [
      { question: "Can oily skin use this?", answer: "Yes, but restrict application to only 1 or 2 drops rubbed onto a damp face at night, or wash off after 30 minutes of massage." }
    ],
    reviewsList: [
      { id: "rev-6", name: "Deepika Sharma", rating: 5, comment: "Pure magic. My dark spots from pregnancy acne have lightened by 80% in one month. The saffron scent is authentic and beautiful.", date: "2026-06-10", verified: true }
    ],
    qaList: []
  },
  {
    id: "herb-002",
    name: "Premium Himalayan Wild Forest Honey",
    brand: "IGO Pharma",
    system: TraditionalSystem.HERBAL,
    category: "Traditional Foods",
    healthConcern: "Digestion",
    price: 320,
    originalPrice: 380,
    rating: 4.8,
    reviewsCount: 195,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=600",
    images: [
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Unfiltered, unpasteurized raw honey responsibly harvested from high-altitude wild beehives in Himalayan oak forests. Contains active medicinal enzymes, trace pollens, and organic healing properties.",
    ingredients: ["100% Pure Raw Himalayan Wild Honey"],
    benefits: [
      "Rich source of bio-active enzymes, antioxidants, and minerals",
      "Soothes sore throats, chronic cough, and bronchial irritation",
      "Acts as a prebiotic, improving digestive flora and gut lining",
      "Excellent carrier (Anupana) for consuming herbal chooranams"
    ],
    usage: "Consume daily as a natural sweetener or mix with warm water and lemon in the morning. Note: Never boil honey or mix in boiling liquids.",
    dosage: "1-2 tablespoons daily as desired.",
    safetyInfo: "Do not feed raw honey to infants below 12 months. Natural crystallization is proof of 100% pure raw honey - place jar in warm water to liquefy.",
    contraindications: ["Infants below 1 year", "Uncontrolled severe diabetic conditions"],
    storage: "Store at room temperature. Natural honey never spoils.",
    shelfLife: "Indefinite (Best used within 36 months for premium aroma)",
    manufacturer: "IGO Pharma Bee Farms, The Nilgiris, Tamil Nadu, India",
    certifications: ["FSSAI Organic Certified", "NPOP Organic India", "Intertek NMR Tested for 100% Purity"],
    labReportUrl: "/docs/honey_nmr_test_purity.pdf",
    isBestSeller: true,
    isSeasonal: true,
    stock: 90,
    faqs: [],
    reviewsList: [
      { id: "rev-7", name: "Robert Taylor", rating: 5, comment: "Incredible dark rich flavor with woody undertones. It has that authentic scratchy throat feel that genuine unfiltered honey is supposed to have.", date: "2026-07-10", verified: true }
    ],
    qaList: []
  },
  {
    id: "ayur-003",
    name: "Triphala Chooranam (Digestive Cleanse)",
    brand: "IGO Pharma",
    system: TraditionalSystem.AYURVEDA,
    category: "Churnam & Powders",
    healthConcern: "Digestion",
    price: 120,
    originalPrice: 150,
    rating: 4.7,
    reviewsCount: 250,
    image: "https://images.unsplash.com/photo-1512207128881-1b3072c6f6e2?auto=format&fit=crop&q=80&w=600",
    images: [
      "https://images.unsplash.com/photo-1512207128881-1b3072c6f6e2?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Classic Ayurvedic tri-herb detoxifying blend of Amalaki, Bibhitaki, and Haritaki. Gentle colon cleanser, mild laxative, and digestive stimulator which purges systemic accumulation of Ama (undigested toxins).",
    ingredients: [
      "Amalaki (Emblica officinalis) - 33.3%",
      "Bibhitaki (Terminalia bellirica) - 33.3%",
      "Haritaki (Terminalia chebula) - 33.3%"
    ],
    benefits: [
      "Provides relief from chronic constipation and sluggish bowel",
      "Supports liver detox, purifying blood and clearing skin",
      "Assists in weight management by optimizing fat metabolism",
      "Provides rich prebiotic fibers to nurture gut microbiome"
    ],
    usage: "Mix 1 teaspoon (5g) of Triphala powder with a cup of warm water and drink right before going to bed.",
    dosage: "3 to 6 grams, once daily, at bedtime.",
    safetyInfo: "Do not consume during active diarrhea or loose stools.",
    contraindications: ["Acute diarrhea", "Pregnancy (unless advised by your doctor)"],
    storage: "Keep in dry, cool conditions in an airtight container.",
    shelfLife: "24 Months",
    manufacturer: "IGO Pharma GMP Pharmacy, Chennai, Tamil Nadu, India",
    certifications: ["AYUSH Certified", "GMP Quality assured", "FSSAI Food Grade Certified"],
    stock: 200,
    faqs: [],
    reviewsList: [
      { id: "rev-8", name: "Nandini Rajan", rating: 5, comment: "Essential part of my health routine. Helps digestion and keeps my stomach incredibly light. IGO Pharma's Triphala is finely ground and high quality.", date: "2026-07-05", verified: true }
    ],
    qaList: []
  },
  {
    id: "ayur-004",
    name: "Brahmi Ghrita (Cognitive Vitality Ghee)",
    brand: "Kerala Ayurveda",
    system: TraditionalSystem.AYURVEDA,
    category: "Kashayam & Rasayanam",
    healthConcern: "Stress Relief",
    price: 520,
    originalPrice: 620,
    rating: 4.8,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600",
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Therapeutic medicated ghee infused with Brahmi, Shankhapushpi, Vacha, and other memory-rejuvenating herbs. Perfect Medhya Rasayana to optimize intelligence, memory, speech fluency, and mental calmness.",
    ingredients: ["Brahmi (Bacopa monnieri)", "Shankhapushpi", "Vacha (Acorus calamus)", "Saraswatha Chooranam herbs", "A2 Cow Ghee (Base)"],
    benefits: [
      "Maximizes cognitive retention, logic, and rapid recall",
      "Treats mental exhaustion, high anxiety, and ADD/ADHD symptoms",
      "Deeply nourishes nervous system synapses",
      "Soothes speech issues and improves voice clarity"
    ],
    usage: "Take 1/2 to 1 teaspoon on empty stomach in the morning followed by warm water, or as directed by an Ayurvedic doctor.",
    dosage: "5g to 10g once a day on empty stomach.",
    safetyInfo: "Use under doctor recommendation if you have high cholesterol or cardiovascular issues.",
    contraindications: ["Severe cardiac issues with high lipid profiles (consult doctor first)"],
    storage: "Store in a warm dry cabinet. Do not use wet spoon.",
    shelfLife: "24 Months",
    manufacturer: "Kerala Ayurvedic Pharmacy Ltd, Aluva, Kerala, India",
    certifications: ["AYUSH Certified", "ISO GMP Pharmacy Approved"],
    stock: 35,
    faqs: [],
    reviewsList: [
      { id: "rev-9", name: "Vikram Sen", rating: 5, comment: "I feel a distinct clarity of mind when I take this with warm water in the morning. Incredible product from Kerala Ayurveda.", date: "2026-06-20", verified: true }
    ],
    qaList: []
  }
];
