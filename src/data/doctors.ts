import { Doctor, TraditionalSystem } from "../types";

export const DOCTORS: Doctor[] = [
  {
    id: "doc-001",
    name: "Dr. Vasudevan Namboothiri",
    system: TraditionalSystem.AYURVEDA,
    specialty: "Panchakarma & Chronic Spine Care",
    qualification: "BAMS, MD (Ayurveda) - BHU",
    experience: "18 Years",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
    languages: ["English", "Malayalam", "Hindi", "Sanskrit"],
    fee: 450,
    bio: "Ex-Professor at Government Ayurveda College, Trivandrum. Specializes in treating chronic degenerative spine disorders, sciatica, rheumatoid arthritis, and formulating specialized Panchakarma detox therapies tailored to individual body constitution (Prakriti).",
    hospital: "Kerala Ayurveda Nilayam, Kochi, Kerala",
    slots: ["09:00 AM", "11:00 AM", "03:00 PM", "05:00 PM"]
  },
  {
    id: "doc-002",
    name: "Dr. Soundarapandian Swamy",
    system: TraditionalSystem.SIDDHA,
    specialty: "Siddha Toxicology & Musculoskeletal Diseases",
    qualification: "BSMS, MD (Siddha) - National Institute of Siddha",
    experience: "22 Years",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600",
    languages: ["Tamil", "English"],
    fee: 350,
    bio: "Prominent Siddha physician and researcher of Kayakalpa (rejuvenation science) and Varmam (energy keys). Dr. Soundarapandian utilizes traditional pulse diagnosis (Naadi Paarpar) and herbal bhasmas to treat metabolic syndromes, joint degeneration, and autoimmune skin ailments.",
    hospital: "Agathiyar Siddha Vaidyasalai, Madurai, Tamil Nadu",
    slots: ["10:00 AM", "12:00 PM", "04:00 PM", "06:00 PM"]
  },
  {
    id: "doc-003",
    name: "Dr. Arundhati Roy (Ayurveda)",
    system: TraditionalSystem.AYURVEDA,
    specialty: "Gynaecology & Skin Health",
    qualification: "BAMS (Gold Medalist), PG Diploma in Ayurvedic Cosmetology",
    experience: "12 Years",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=600",
    languages: ["English", "Hindi", "Bengali"],
    fee: 400,
    bio: "Highly praised Ayurvedic practitioner focused on women's endocrine wellness, PCOS management, metabolic hair loss, and traditional herbal dermo-therapies for acne, eczema, and psoriasis.",
    hospital: "IGO Pharma Wellness Center, Chennai",
    slots: ["09:30 AM", "11:30 AM", "02:30 PM", "04:30 PM"]
  }
];
