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
  },
  {
    id: "hair-001",
    name: "IGO Pharma Hibiscus Powder",
    brand: "IGO Pharma",
    system: TraditionalSystem.HERBAL,
    category: "Hair Care",
    healthConcern: "Hair Care",
    price: 299,
    originalPrice: 369,
    rating: 4.8,
    reviewsCount: 152,
    image: "/images/hair-001.png",
    images: [
      "/images/hair-001.png"
    ],
    description: "100% Pure & Natural Hibiscus Powder formulated for hair and skin care. Rich in antioxidants, this chemical-free botanical powder nourishes, revives, and adds a natural glow. Made with care — no additives, no chemicals, just pure hibiscus goodness.",
    ingredients: ["Pure Hibiscus Flower Powder (Hibiscus rosa-sinensis)"],
    benefits: [
      "Rich in antioxidants — supports healthy skin & hair",
      "Strengthens hair and promotes thicker, stronger strands",
      "Enhances natural skin radiance and glow",
      "100% Natural, Chemical-Free, No Additives"
    ],
    usage: "For hair: Mix 2 tablespoons with water or coconut oil to form a paste. Apply to scalp and hair. Leave for 20-30 minutes then rinse. For skin: Mix with rose water and apply as a face mask.",
    dosage: "Use 2-3 tablespoons per application as needed.",
    safetyInfo: "For external use only. Avoid contact with eyes. Patch test recommended for sensitive skin.",
    contraindications: [],
    storage: "Store in a cool, dry, airtight container away from direct sunlight.",
    shelfLife: "24 Months",
    manufacturer: "IGO Pharma Natural Botanicals, Tamil Nadu, India",
    certifications: ["100% Natural", "Chemical Free", "No Additives"],
    stock: 75,
    faqs: [],
    reviewsList: [
      { id: "rev-hair-1", name: "Aishwarya R.", rating: 5, comment: "Amazing powder! Pure hibiscus with no additives. My hair feels so much thicker and my skin glows.", date: "2026-07-10", verified: true }
    ],
    qaList: []
  },
  {
    id: "hair-002",
    name: "IGO Pharma Hair Fall Control Oil",
    brand: "IGO Pharma",
    system: TraditionalSystem.HERBAL,
    category: "Hair Care",
    healthConcern: "Hair Care",
    price: 349,
    originalPrice: 429,
    rating: 4.7,
    reviewsCount: 88,
    image: "/images/hair-002.png",
    images: [
      "/images/hair-002.png"
    ],
    description: "IGO Pharma's Hair Fall Control Oil is a potent herbal blend featuring Hibiscus and nature's finest botanical extracts. This 100 mL oil strengthens hair from root to tip, nourishes the scalp deeply, and is completely natural and safe for regular use.",
    ingredients: ["Hibiscus flower extract", "Amla (Gooseberry) oil", "Bhringaraj oil", "Coconut oil base", "Sesame oil", "Fenugreek extract"],
    benefits: [
      "Strengthens hair from roots, reducing hair fall",
      "Deeply nourishes and conditions the scalp",
      "Promotes healthier, thicker hair growth",
      "100% Natural & Safe for all hair types"
    ],
    usage: "Apply generously to scalp and hair. Massage gently in circular motions for 5-10 minutes. Leave for at least 1 hour or overnight. Wash off with a mild cleanser.",
    dosage: "10-15 ml per application. Use 2-3 times a week for best results.",
    safetyInfo: "For external scalp application only. Avoid contact with eyes.",
    contraindications: [],
    storage: "Store in a cool, dry place. Keep bottle tightly closed.",
    shelfLife: "36 Months",
    manufacturer: "IGO Pharma GMP Pharmacy, Tamil Nadu, India",
    certifications: ["Natural & Safe", "No Harmful Chemicals"],
    stock: 110,
    faqs: [],
    reviewsList: [
      { id: "rev-hair-2", name: "Ramesh K.", rating: 5, comment: "My hair fall has reduced drastically after using this oil consistently. Highly recommended!", date: "2026-07-12", verified: true }
    ],
    qaList: []
  },
  {
    id: "hair-003",
    name: "IGO Pharma Amla Oil",
    brand: "IGO Pharma",
    system: TraditionalSystem.AYURVEDA,
    category: "Hair Care",
    healthConcern: "Hair Care",
    price: 349,
    originalPrice: 429,
    rating: 4.9,
    reviewsCount: 112,
    image: "/images/hair-003.png",
    images: [
      "/images/hair-003.png"
    ],
    description: "IGO Pharma's 100% Natural Amla Oil is your ultimate solution for naturally beautiful hair. Enriched with the goodness of pure Indian Gooseberry (Amla), this oil makes your hair thicker, longer, and stronger while adding incredible shine and softness.",
    ingredients: ["Pure Amla (Emblica officinalis) fruit extract", "Cold-pressed Coconut Oil", "Sesame Oil"],
    benefits: [
      "Strengthens hair from the roots, reducing breakage",
      "Reduces hair fall and prevents thinning",
      "Promotes new hair growth for thicker, fuller hair",
      "Adds natural shine and softness to dull, lifeless hair"
    ],
    usage: "Warm the oil slightly. Apply to scalp and hair strands. Massage gently for 5-10 minutes. Leave for 1 hour or overnight. Shampoo as usual.",
    dosage: "15-20 ml per application. Use 3 times a week for visible results.",
    safetyInfo: "For external use only. 100% Natural. Made with natural ingredients.",
    contraindications: [],
    storage: "Store at room temperature in a cool, dry place away from sunlight.",
    shelfLife: "36 Months",
    manufacturer: "IGO Pharma Natural Botanicals, Tamil Nadu, India",
    certifications: ["100% Natural", "Made with Natural Ingredients"],
    isBestSeller: true,
    stock: 60,
    faqs: [],
    reviewsList: [
      { id: "rev-hair-3", name: "Suresh P.", rating: 5, comment: "Best Amla oil I've ever used! My hair has become visibly thicker and shinier within a month.", date: "2026-07-08", verified: true }
    ],
    qaList: []
  },
  {
    id: "hair-004",
    name: "IGO Pharma Neem Oil",
    brand: "IGO Pharma",
    system: TraditionalSystem.HERBAL,
    category: "Hair Care",
    healthConcern: "Hair Care",
    price: 299,
    originalPrice: 369,
    rating: 4.8,
    reviewsCount: 94,
    image: "/images/hair-004.png",
    images: [
      "/images/hair-004.png"
    ],
    description: "IGO Pharma's Cold Pressed Neem Oil is nature's shield for healthy hair and skin. Pure, Natural, and Effective — this 100 mL oil deeply cleanses and purifies the scalp, eliminates dandruff and itching, and protects hair naturally for healthy, strong growth.",
    ingredients: ["Cold Pressed Neem Oil (Azadirachta indica) - 100%"],
    benefits: [
      "Deeply cleans and purifies the scalp from impurities",
      "Reduces dandruff and relieves scalp itching",
      "Protects hair naturally with antimicrobial properties",
      "Promotes healthy, strong hair growth"
    ],
    usage: "Mix a few drops of Neem Oil with a carrier oil (coconut or sesame). Apply to scalp and massage. Leave for 30 minutes to 1 hour. Rinse with mild shampoo. Use 1-2 times per week.",
    dosage: "5-10 ml mixed with carrier oil per application.",
    safetyInfo: "For external use only. Neem oil has a strong natural odor — blending with coconut oil reduces the scent. Avoid direct contact with eyes.",
    contraindications: ["Not recommended for pregnant women without physician consultation"],
    storage: "Store in a cool, dry, dark place. Natural solidification may occur in cold weather — warm gently before use.",
    shelfLife: "24 Months",
    manufacturer: "IGO Pharma Natural Botanicals, Tamil Nadu, India",
    certifications: ["Cold Pressed", "100% Pure & Natural"],
    stock: 40,
    faqs: [],
    reviewsList: [
      { id: "rev-hair-4", name: "Anjali S.", rating: 4, comment: "Pure neem oil that completely got rid of my dandruff. My scalp feels so clean and healthy now.", date: "2026-07-14", verified: true }
    ],
    qaList: []
  },
  {
    id: "skin-001",
    name: "Aloe Vera Gel",
    brand: "IGO Pharma",
    system: TraditionalSystem.HERBAL,
    category: "Skin Care",
    healthConcern: "Skin Care",
    price: 249,
    originalPrice: 299,
    rating: 4.8,
    reviewsCount: 185,
    image: "/images/skin-alovera-gel.png",
    images: ["/images/skin-alovera-gel.png"],
    description: "IGO Pharma's Pure Aloe Vera Gel is a multi-purpose natural skincare essential. Packed with vitamins, minerals, and antioxidants, it deeply hydrates, soothes, and heals the skin naturally. 100% Natural, Chemical-Free, and suitable for all skin types.",
    ingredients: ["Pure Aloe Vera (Aloe barbadensis miller) Gel - 99%", "Natural Preservative (Vitamin E)"],
    benefits: [
      "Deeply hydrates and moisturises skin",
      "Soothes sunburn, redness, and irritation",
      "Reduces acne and blemishes naturally",
      "Acts as a lightweight daily moisturiser"
    ],
    usage: "Apply a thin layer of Aloe Vera Gel to clean skin. Gently massage until absorbed. Use twice daily on face and body.",
    dosage: "Apply as required. Suitable for daily use.",
    safetyInfo: "For external use only. Avoid contact with eyes. Patch test recommended for sensitive skin.",
    contraindications: [],
    storage: "Store in a cool, dry place away from direct sunlight.",
    shelfLife: "24 Months",
    manufacturer: "IGO Pharma Natural Botanicals, Tamil Nadu, India",
    certifications: ["100% Natural", "Chemical Free", "Paraben Free"],
    isBestSeller: true,
    stock: 120,
    faqs: [],
    reviewsList: [
      { id: "rev-skin-1", name: "Priya M.", rating: 5, comment: "Best aloe vera gel! Skin feels so soft and hydrated. No stickiness at all.", date: "2026-07-10", verified: true }
    ],
    qaList: []
  },
  {
    id: "skin-002",
    name: "Kumkumadi Tailam – Glow Boosting Face Oil",
    brand: "IGO Pharma",
    system: TraditionalSystem.AYURVEDA,
    category: "Skin Care",
    healthConcern: "Skin Care",
    price: 799,
    originalPrice: 999,
    rating: 4.9,
    reviewsCount: 220,
    image: "/images/skin-kumkumadi-tailam.png",
    images: ["/images/skin-kumkumadi-tailam.png"],
    description: "IGO Pharma's Kumkumadi Tailam is an authentic Ayurvedic glow-boosting face oil enriched with Saffron, Lotus, and 16 precious herbs. It enhances your natural glow, deeply nourishes and hydrates, and is completely paraben and chemical free.",
    ingredients: ["Kashmiri Saffron (Kesar)", "Lotus Extract", "Red Sandalwood", "Manjistha", "Sesame Oil Base", "16 Precious Ayurvedic Herbs"],
    benefits: [
      "Enhances natural skin glow and radiance",
      "Deeply nourishes and hydrates the skin",
      "Reduces dark spots, blemishes, and pigmentation",
      "Paraben & Chemical Free — safe for all skin types"
    ],
    usage: "Apply 3-4 drops on cleansed face at night. Gently massage in upward circular motions. Leave overnight for best results.",
    dosage: "3-5 drops daily as a night serum.",
    safetyInfo: "For external use only. Patch test recommended before use.",
    contraindications: ["Active pustular acne"],
    storage: "Store in a cool, dry place. Keep cap tightly closed to avoid oxidation.",
    shelfLife: "36 Months",
    manufacturer: "IGO Pharma Natural Botanicals, Tamil Nadu, India",
    certifications: ["Authentic Ayurvedic", "Natural Ingredients", "Cruelty Free"],
    isBestSeller: true,
    isNewArrival: true,
    stock: 50,
    faqs: [],
    reviewsList: [
      { id: "rev-skin-2", name: "Deepa R.", rating: 5, comment: "My skin glows like never before. The saffron scent is divine and results are visible within 2 weeks!", date: "2026-07-12", verified: true }
    ],
    qaList: []
  },
  {
    id: "skin-003",
    name: "Multani Mitti Powder – Natural Skin Care",
    brand: "IGO Pharma",
    system: TraditionalSystem.HERBAL,
    category: "Skin Care",
    healthConcern: "Skin Care",
    price: 149,
    originalPrice: 199,
    rating: 4.7,
    reviewsCount: 310,
    image: "/images/skin-multani-mitti-1.png",
    images: ["/images/skin-multani-mitti-1.png", "/images/skin-multani-mitti-2.png"],
    description: "IGO Pharma's 100% Herbal & Natural Multani Mitti (Fuller's Earth) Powder for glowing and healthy skin. Deep cleansing, chemical-free, with no additives or preservatives. Suitable for all skin types.",
    ingredients: ["Pure Multani Mitti (Fuller's Earth) - 100%"],
    benefits: [
      "Deep cleanses and removes dirt, oil & impurities",
      "Helps achieve natural glow and radiance",
      "Tightens pores and controls excess sebum",
      "100% Natural, Chemical Free, No Additives"
    ],
    usage: "Mix 2-3 tablespoons of Multani Mitti with rose water or plain water to form a smooth paste. Apply evenly on face and neck. Leave for 15-20 minutes until dry. Rinse with cool water.",
    dosage: "Use 2-3 tablespoons per face mask. Use 1-2 times per week.",
    safetyInfo: "For external use only. Avoid contact with eyes. Not for very dry or flaky skin types without adding moisturising agents.",
    contraindications: [],
    storage: "Store in a cool, dry, airtight container away from moisture.",
    shelfLife: "24 Months",
    manufacturer: "IGO Pharma Natural Botanicals, Tamil Nadu, India",
    certifications: ["100% Natural", "Chemical Free", "Sustainably Sourced"],
    stock: 200,
    faqs: [],
    reviewsList: [
      { id: "rev-skin-3", name: "Sneha V.", rating: 5, comment: "Pure and fine quality Multani Mitti. My skin feels amazing after each use. The best in class.", date: "2026-07-08", verified: true }
    ],
    qaList: []
  },
  {
    id: "skin-004",
    name: "Rose Water – Natural Skin Toner",
    brand: "IGO Pharma",
    system: TraditionalSystem.HERBAL,
    category: "Skin Care",
    healthConcern: "Skin Care",
    price: 199,
    originalPrice: 249,
    rating: 4.8,
    reviewsCount: 178,
    image: "/images/skin-rosewater.png",
    images: ["/images/skin-rosewater.png"],
    description: "IGO Pharma's Pure Rose Water is a natural skin toner distilled from fresh rose petals. It hydrates, refreshes, and balances skin pH while providing a subtle floral fragrance. Perfect as a daily toner, facial mist, or ingredient in DIY face masks.",
    ingredients: ["Pure Rose Water (Rosa damascena) - 100%"],
    benefits: [
      "Balances skin pH and acts as a natural toner",
      "Soothes and hydrates skin instantly",
      "Reduces redness and inflammation",
      "Refreshes and brightens the complexion"
    ],
    usage: "Apply on cotton pad and wipe over clean face as a toner. Or use as a facial mist. Can be mixed with Multani Mitti or other powders for face masks.",
    dosage: "Apply as required. Suitable for daily use morning and evening.",
    safetyInfo: "For external use only. Avoid direct contact with eyes.",
    contraindications: [],
    storage: "Store in a cool, dry place. Refrigerate after opening for extended freshness.",
    shelfLife: "24 Months",
    manufacturer: "IGO Pharma Natural Botanicals, Tamil Nadu, India",
    certifications: ["100% Pure", "Chemical Free", "No Additives"],
    stock: 150,
    faqs: [],
    reviewsList: [
      { id: "rev-skin-4", name: "Ananya K.", rating: 5, comment: "Smells amazing and works wonderfully as a toner. My skin feels so refreshed and soft.", date: "2026-07-09", verified: true }
    ],
    qaList: []
  },
  {
    id: "skin-005",
    name: "Herbal Face Wash",
    brand: "IGO Pharma",
    system: TraditionalSystem.HERBAL,
    category: "Skin Care",
    healthConcern: "Skin Care",
    price: 199,
    originalPrice: 249,
    rating: 4.7,
    reviewsCount: 143,
    image: "/images/skin-herbal-facewash.png",
    images: ["/images/skin-herbal-facewash.png"],
    description: "IGO Pharma's Herbal Face Wash is a gentle yet effective cleanser formulated with nature's finest botanicals. Free from harsh chemicals, it deeply cleanses, removes impurities, and leaves your skin feeling fresh, soft, and radiant.",
    ingredients: ["Neem Extract", "Tulsi (Holy Basil) Extract", "Aloe Vera Gel", "Turmeric Extract", "Glycerin (Plant-derived)"],
    benefits: [
      "Deeply cleanses without stripping natural moisture",
      "Controls acne and prevents breakouts",
      "Brightens and evens out skin tone",
      "Suitable for all skin types including sensitive skin"
    ],
    usage: "Apply a small amount on wet face. Lather gently in circular motions. Rinse thoroughly with water. Use twice daily.",
    dosage: "Use twice daily — morning and evening.",
    safetyInfo: "For external use only. Avoid contact with eyes. Rinse immediately if contact occurs.",
    contraindications: [],
    storage: "Store in a cool, dry place with cap tightly closed.",
    shelfLife: "24 Months",
    manufacturer: "IGO Pharma GMP Facility, Tamil Nadu, India",
    certifications: ["Herbal Formula", "Paraben Free", "SLS Free"],
    stock: 80,
    faqs: [],
    reviewsList: [
      { id: "rev-skin-5", name: "Kavitha L.", rating: 5, comment: "Best face wash I've used. My skin doesn't feel dry or tight after washing. Love the herbal scent.", date: "2026-07-11", verified: true }
    ],
    qaList: []
  },
  {
    id: "skin-006",
    name: "Red Sandalwood Powder (Rakta Chandan)",
    brand: "IGO Pharma",
    system: TraditionalSystem.AYURVEDA,
    category: "Skin Care",
    healthConcern: "Skin Care",
    price: 249,
    originalPrice: 299,
    rating: 4.8,
    reviewsCount: 96,
    image: "/images/skin-multani-mitti-2.png",
    images: ["/images/skin-multani-mitti-2.png"],
    description: "IGO Pharma's 100% Natural Red Sandalwood Powder (Rakta Chandan / Pterocarpus Santalinus) for glowing, healthy skin. Chemical-free with no additives or preservatives. USDA Organic and sustainably sourced.",
    ingredients: ["Pure Red Sandalwood Powder (Pterocarpus Santalinus) - 100%"],
    benefits: [
      "Brightens and evens skin tone naturally",
      "Reduces acne, blemishes, and dark spots",
      "Provides cooling and soothing effect on skin",
      "100% Natural, Chemical Free, No Preservatives"
    ],
    usage: "Mix 1-2 teaspoons with rose water or milk to form a paste. Apply on face and neck. Leave for 15-20 minutes. Rinse with cool water.",
    dosage: "Use 1-2 teaspoons per application, 2-3 times a week.",
    safetyInfo: "For external use only. May cause temporary reddish tint — this is natural. Rinse thoroughly.",
    contraindications: [],
    storage: "Store in a cool, dry, airtight container away from direct sunlight.",
    shelfLife: "24 Months",
    manufacturer: "IGO Pharma Natural Botanicals, Tamil Nadu, India",
    certifications: ["USDA Organic", "100% Natural", "Sustainably Sourced"],
    stock: 90,
    faqs: [],
    reviewsList: [
      { id: "rev-skin-6", name: "Meena S.", rating: 5, comment: "Authentic red sandalwood powder. My complexion has improved noticeably. Pure and effective.", date: "2026-07-06", verified: true }
    ],
    qaList: []
  },
  {
    id: "skin-007",
    name: "Turmeric Capsules – Skin Glow & Immunity",
    brand: "IGO Pharma",
    system: TraditionalSystem.AYURVEDA,
    category: "Skin Care",
    healthConcern: "Skin Care",
    price: 349,
    originalPrice: 429,
    rating: 4.8,
    reviewsCount: 132,
    image: "/images/skin-turmeric-capsule.png",
    images: ["/images/skin-turmeric-capsule.png"],
    description: "IGO Pharma's Turmeric Capsules are formulated with pure, high-potency curcumin extract to deliver powerful anti-inflammatory, antioxidant, and skin-brightening benefits from within. A natural inside-out approach to glowing, healthy skin.",
    ingredients: ["Curcumin (Turmeric Extract) - 500mg", "Piperine (Black Pepper Extract) - 5mg for enhanced absorption"],
    benefits: [
      "Promotes glowing, radiant skin from within",
      "Powerful anti-inflammatory and antioxidant properties",
      "Boosts immunity and supports overall health",
      "Reduces acne, skin irritation, and pigmentation"
    ],
    usage: "Take 1 capsule twice daily with warm water or milk, after meals.",
    dosage: "1 capsule twice daily, or as directed by a physician.",
    safetyInfo: "Consult a physician before use if pregnant, nursing, or on blood-thinning medications.",
    contraindications: ["Pregnancy (consult doctor)", "Bleeding disorders"],
    storage: "Store in a cool, dry place away from sunlight. Keep container tightly closed.",
    shelfLife: "24 Months",
    manufacturer: "IGO Pharma GMP Pharmacy, Tamil Nadu, India",
    certifications: ["AYUSH Certified", "GMP Approved", "FSSAI Registered"],
    isBestSeller: true,
    stock: 95,
    faqs: [],
    reviewsList: [
      { id: "rev-skin-7", name: "Nithya P.", rating: 5, comment: "My skin has a visible glow since I started taking these. Great quality turmeric capsules!", date: "2026-07-13", verified: true }
    ],
    qaList: []
  },
  {
    id: "skin-008",
    name: "Amla Capsules – Vitamin C Skin Boost",
    brand: "IGO Pharma",
    system: TraditionalSystem.AYURVEDA,
    category: "Skin Care",
    healthConcern: "Skin Care",
    price: 299,
    originalPrice: 369,
    rating: 4.7,
    reviewsCount: 108,
    image: "/images/skin-amla-capsule.png",
    images: ["/images/skin-amla-capsule.png"],
    description: "IGO Pharma's Amla (Indian Gooseberry) Capsules are nature's richest source of Vitamin C, essential for collagen synthesis, skin brightening, and anti-aging. Supports radiant, youthful skin from the inside out.",
    ingredients: ["Amla Extract (Emblica officinalis) - 500mg", "Natural Vitamin C - 600mg equivalent"],
    benefits: [
      "Rich natural source of Vitamin C for skin health",
      "Boosts collagen synthesis for youthful, firm skin",
      "Brightens complexion and reduces dark spots",
      "Strengthens immunity and promotes hair growth"
    ],
    usage: "Take 1 capsule twice daily with water or juice, after meals.",
    dosage: "1 capsule twice daily, or as directed.",
    safetyInfo: "Safe for regular use. Consult a physician if pregnant or on anticoagulant medication.",
    contraindications: [],
    storage: "Store in a cool, dry place with container tightly closed.",
    shelfLife: "24 Months",
    manufacturer: "IGO Pharma GMP Pharmacy, Tamil Nadu, India",
    certifications: ["AYUSH Certified", "GMP Approved", "Non-GMO"],
    stock: 110,
    faqs: [],
    reviewsList: [
      { id: "rev-skin-8", name: "Lakshmi R.", rating: 5, comment: "My skin is brighter and hair stronger after using Amla capsules. Amazing natural Vitamin C source!", date: "2026-07-07", verified: true }
    ],
    qaList: []
  },
  {
    id: "skin-009",
    name: "Eucalyptus Oil – Skin & Wellness",
    brand: "IGO Pharma",
    system: TraditionalSystem.HERBAL,
    category: "Skin Care",
    healthConcern: "Skin Care",
    price: 249,
    originalPrice: 299,
    rating: 4.6,
    reviewsCount: 77,
    image: "/images/skin-eucalyptus-oil.png",
    images: ["/images/skin-eucalyptus-oil.png"],
    description: "IGO Pharma's Pure Eucalyptus Oil is a versatile essential oil known for its refreshing, antimicrobial, and healing properties. A natural solution for skin blemishes, minor infections, and aromatic wellness.",
    ingredients: ["100% Pure Eucalyptus Essential Oil (Eucalyptus globulus)"],
    benefits: [
      "Antimicrobial — helps prevent and treat skin infections",
      "Soothes blemishes, insect bites, and minor skin irritations",
      "Refreshing aroma for mental clarity and wellness",
      "Cooling effect — ideal for sunburned or inflamed skin"
    ],
    usage: "Always dilute with a carrier oil (coconut or almond oil) — 2-3 drops per tablespoon. Apply on affected skin areas. Can also be used in steam inhalation or diffuser.",
    dosage: "2-3 drops diluted per application. Do not apply undiluted directly to skin.",
    safetyInfo: "Always dilute before skin application. Not for children under 2 years. Avoid contact with eyes.",
    contraindications: ["Children under 2 years", "Not for undiluted topical use"],
    storage: "Store in a cool, dark place with cap tightly sealed.",
    shelfLife: "24 Months",
    manufacturer: "IGO Pharma Natural Botanicals, Tamil Nadu, India",
    certifications: ["100% Pure Essential Oil", "Chemical Free"],
    stock: 60,
    faqs: [],
    reviewsList: [
      { id: "rev-skin-9", name: "Arjun S.", rating: 4, comment: "Great quality eucalyptus oil. Very fresh and pure scent. Works well diluted on skin blemishes.", date: "2026-07-05", verified: true }
    ],
    qaList: []
  },
  {
    id: "skin-012",
    name: "Hibiscus Powder – Skin & Hair Care",
    brand: "IGO Pharma",
    system: TraditionalSystem.HERBAL,
    category: "Skin Care",
    healthConcern: "Skin Care",
    price: 199,
    originalPrice: 249,
    rating: 4.7,
    reviewsCount: 124,
    image: "/images/skin-hibiscus-powder.png",
    images: ["/images/skin-hibiscus-powder.png"],
    description: "IGO Pharma's Pure Hibiscus Powder is a versatile beauty ingredient rich in AHAs and antioxidants that naturally exfoliates, brightens, and revitalises the skin. Also supports healthy hair growth when used as a hair mask.",
    ingredients: ["Pure Hibiscus Flower Powder (Hibiscus rosa-sinensis) - 100%"],
    benefits: [
      "Natural AHAs gently exfoliate and brighten skin",
      "Rich in antioxidants — fights free radical damage",
      "Improves skin elasticity and reduces fine lines",
      "Can be used for both skin and hair care"
    ],
    usage: "For face: Mix 1 tablespoon with honey or yogurt to form a paste. Apply for 15 minutes, then rinse. For hair: Mix with oil or water and apply as a hair mask.",
    dosage: "1-2 tablespoons per application, 1-2 times per week.",
    safetyInfo: "For external use only. Avoid contact with eyes. May leave a temporary pinkish tint — rinse thoroughly.",
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
  }
];

