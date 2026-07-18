export enum TraditionalSystem {
  AYURVEDA = "Ayurveda",
  SIDDHA = "Siddha",
  UNANI = "Unani",
  HERBAL = "Herbal"
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface QA {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  system: TraditionalSystem;
  category: string;
  healthConcern: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  images: string[];
  description: string;
  ingredients: string[];
  benefits: string[];
  usage: string;
  dosage: string;
  safetyInfo: string;
  contraindications: string[];
  storage: string;
  shelfLife: string;
  manufacturer: string;
  certifications: string[];
  labReportUrl?: string;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  isDoctorRecommended?: boolean;
  isSeasonal?: boolean;
  isTodayDeal?: boolean;
  stock: number;
  faqs: FAQ[];
  reviewsList: Review[];
  qaList: QA[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  subscriptionType: "once" | "monthly" | "bi-monthly";
}

export interface Doctor {
  id: string;
  name: string;
  system: TraditionalSystem;
  specialty: string;
  qualification: string;
  experience: string;
  rating: number;
  image: string;
  languages: string[];
  fee: number;
  bio: string;
  hospital: string;
  slots: string[];
}

export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  system: TraditionalSystem;
  date: string;
  timeSlot: string;
  type: "video" | "whatsapp";
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  prescriptionFile?: string;
  notes?: string;
  status: "Scheduled" | "Completed" | "Cancelled";
  paymentStatus: "Pending" | "Paid";
  meetingLink?: string;
}

export interface Blog {
  id: string;
  title: string;
  category: "Ayurveda" | "Siddha" | "Lifestyle" | "Remedies" | "Research";
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}

export interface Ingredient {
  id: string;
  name: string;
  botanicalName: string;
  sanskritName?: string;
  tamilName?: string;
  properties: string; // Rasa, Guna, Virya, etc.
  description: string;
  benefits: string[];
  usage: string;
}

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  addresses: Address[];
  rewardPoints: number;
  walletBalance: number;
  orders: Order[];
}

export interface Address {
  id: string;
  type: "Home" | "Work" | "Other";
  street: string;
  city: string;
  state: string;
  zip: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  status: "Processing" | "Shipped" | "Out for Delivery" | "Delivered";
  paymentMethod: string;
  address: Address;
  trackingNumber?: string;
  carrier?: string;
}
