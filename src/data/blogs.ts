import { Blog, Ingredient } from "../types";

export const BLOGS: Blog[] = [
  {
    id: "blog-001",
    title: "Understanding Ritucharya: The Ayurvedic Guide to Seasonal Wellness",
    category: "Ayurveda",
    excerpt: "Learn how aligning your diet, yoga practice, and daily rhythms with the cycles of nature can prevent seasonal imbalances and build year-round immunity.",
    content: `In Ayurveda, health is defined as a harmonious flow between our internal state and the external environment. Ritucharya (derived from 'Ritu' meaning season and 'Charya' meaning regimen) is the ancient science of adjusting our diet, lifestyle, and activities to match the changing weather.

Our bodies contain three fundamental energies or bio-forces: Vata (air/space), Pitta (fire/water), and Kapha (water/earth). As seasons change, these doshas expand and contract in nature, directly impacting our internal state.

For example, during Monsoon (Varsha Ritu), Vata dosha accumulates, leading to joint stiffness, poor digestion, and low energy. Taking warming foods, avoiding raw vegetables, and drinking herbal teas like ginger and tulsi can restore equilibrium. 

Similarly, in Winter (Hemanta), our digestive fire (Agni) is exceptionally strong, meaning we can digest heavier, nourishing foods such as nuts, dairy, ghee, and whole grains to fuel our cells.

By practicing Ritucharya, you don't just survive seasonal changes—you thrive by using nature's own wisdom to reset your health.`,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600",
    author: "Dr. Vasudevan Namboothiri",
    date: "2026-07-12",
    readTime: "5 mins read",
    tags: ["Ritucharya", "Seasonal Wellness", "Doshas", "Agni"]
  },
  {
    id: "blog-002",
    title: "Naadi Paritchai: The Siddha Art of Pulse Diagnosis",
    category: "Siddha",
    excerpt: "Discover how traditional Siddha physicians read the pulse to assess the status of the three bodily humors (Vadham, Pittham, Kabham) and detect pre-clinical imbalances.",
    content: `Naadi Paritchai (pulse diagnosis) is one of the pillars of the eight-fold examination (En-vakai Thervu) in traditional Siddha medicine. Unlike modern clinical testing which looks at established physical abnormalities, Naadi Paritchai assesses the subtle energetic flow through 72,000 psychic nerves (naadis).

A qualified Siddha doctor places three fingers (index, middle, and ring) on the patient's radial artery to gauge the movement of Vadham (wind), Pittham (heat), and Kabham (water/phlegm).

- Vadham pulse feels like the movement of a swan, leech, or snake. It governs nervous activity and movement.
- Pittham pulse moves like a frog or sparrow. It governs heat, digestion, and chemical conversions.
- Kabham pulse resembles a peacock, elephant, or pigeon. It governs structural integrity and cooling functions.

By observing the combination and force of these pulses, the physician can identify exactly which organs are under stress and prescribe Kayakalpa therapies or metal-mineral chooranams long before structural damage occurs.`,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600",
    author: "Dr. Soundarapandian Swamy",
    date: "2026-06-28",
    readTime: "7 mins read",
    tags: ["Pulse Diagnosis", "Naadi Paritchai", "Vadham", "Siddha Science"]
  },
  {
    id: "blog-003",
    title: "5 Simple Kitchen Remedies for Hyperacidity and Indigestion",
    category: "Remedies",
    excerpt: "Before reaching for synthetic antacids, try these time-tested, gentle kitchen herbs to instantly cool your stomach and optimize digestive enzyme secretion.",
    content: `In our fast-paced lives, hyperacidity and heartburn have become incredibly common. Traditional medicine warns that suppressing stomach acid with artificial pills damages long-term digestive fire (Agni), leading to toxic accumulation (Ama).

Instead, try these natural kitchen-cabinet remedies:

1. Fennel Seed Chew (Saunf): Chew a teaspoon of organic fennel seeds after meals. Fennel contains volatile oils that soothe stomach muscles, reduce gas, and prevent acid regurgitation.
2. Cumin-Coriander Tea: Boil 1/2 tsp cumin seeds and 1/2 tsp coriander seeds in 2 cups of water. Filter and drink warm. This tea is a powerful Pitta pacifier and instantly cools gastric heat.
3. Fresh Mint Juice: Mint is naturally cooling and has spasmolytic properties. Mix fresh mint juice with a squeeze of lime and pinch of pink salt for fast relief.
4. Cold Milk with Cardamom: Warm milk contains calcium which buffers acid, while Cardamom (Elaichi) provides gastroprotective benefits.
5. Soaked Raisins: Soak 10-15 black raisins overnight. Eat them on empty stomach in the morning. Raisins are highly alkaline and reduce hyper-acidity beautifully.`,
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&q=80&w=600",
    author: "Dr. Arundhati Roy",
    date: "2026-07-08",
    readTime: "4 mins read",
    tags: ["Home Remedies", "Digestion", "Acidity", "Kitchen Herbs"]
  }
];

export const INGREDIENTS: Ingredient[] = [
  {
    id: "ing-001",
    name: "Ashwagandha (Indian Ginseng)",
    botanicalName: "Withania somnifera",
    sanskritName: "Ashwagandha (Smell of a Horse)",
    tamilName: "Amukkara Ver",
    properties: "Rasa: Tikta, Kashaya | Virya: Ushna | Vipaka: Madhura | Dosha: Pacifies Vata & Kapha",
    description: "Ashwagandha is arguably the most famous adaptogenic herb in classical medicine. Its roots contain a group of active steroidal lactones called Withanolides which soothe the central nervous system.",
    benefits: [
      "Lowers stress and cortisol hormone levels significantly",
      "Improves endurance, cellular energy, and athletic performance",
      "Supports male reproductive health and healthy testosterone",
      "Increases deep sleep patterns by boosting GABA receptor activation"
    ],
    usage: "Best taken as standardized capsule extracts or 3-5g of Amukkara Chooranam powder mixed in hot organic milk at bedtime."
  },
  {
    id: "ing-002",
    name: "Amla (Indian Gooseberry)",
    botanicalName: "Phyllanthus emblica",
    sanskritName: "Amalaki",
    tamilName: "Nellikai",
    properties: "Rasa: Five tastes (except Salty) | Virya: Sheeta (Cooling) | Vipaka: Madhura | Dosha: Pacifies all 3 Doshas (Tridoshara)",
    description: "Amla is an ultra-rich source of heat-stable Vitamin C and polyphenols. It is the core ingredient in Rasayanas (rejuvenating formulas) like Chyawanprash due to its cell-reconstituting powers.",
    benefits: [
      "Extremely high antioxidant index, fighting oxidative stress",
      "Stimulates hair follicles, preventing premature graying and fall",
      "Improves skin collagen synthesis, leading to youthful skin",
      "Improves iron absorption from foods and strengthens liver function"
    ],
    usage: "Consume fresh juice on empty stomach, or take 1 teaspoon of Amalaki powder daily in warm water, or consume premium gold Chyawanprash."
  },
  {
    id: "ing-003",
    name: "Turmeric (Golden Spice)",
    botanicalName: "Curcuma longa",
    sanskritName: "Haridra",
    tamilName: "Manjal",
    properties: "Rasa: Tikta, Katu | Virya: Ushna | Vipaka: Katu | Dosha: Pacifies Kapha & Vata, elevates Pitta if overused",
    description: "The ultimate natural anti-inflammatory and antiseptic herb. Classical scriptures describe turmeric as a purifier of blood and skin, heavily backed by modern research on its active compound curcumin.",
    benefits: [
      "Relieves joint pain and systemic arthritis-related inflammation",
      "Powerfully enhances skin radiance and combats acne microbes",
      "Clears respiratory tracts and builds acute immune defense",
      "Promotes brain-derived neurotrophic factor (BDNF) for cognitive longevity"
    ],
    usage: "Add to curries, drink Golden Milk (warmed milk with turmeric, black pepper, and honey), or apply as face masks for skin problems."
  }
];
