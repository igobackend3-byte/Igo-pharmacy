import React, { createContext, useContext, useState, useMemo, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, onSnapshot, doc, setDoc, updateDoc, deleteDoc, writeBatch } from "firebase/firestore";
//import { PRODUCTS } from "../data/products";
import { DOCTORS } from "../data/doctors";
import { BLOGS, INGREDIENTS } from "../data/blogs";
import {
  Product, CartItem, Appointment, UserProfile, Address, Order, BannerConfig, Coupon, AdminBlog
} from "../types";

interface StoreContextValue {
  // Data
  products: Product[];
  doctors: typeof DOCTORS;
  blogs: typeof BLOGS;
  ingredients: typeof INGREDIENTS;
  appointments: Appointment[];

  // Cart & wishlist
  cart: CartItem[];
  wishlist: Product[];
  couponCode: string;
  appliedDiscount: number;
  setCouponCode: (v: string) => void;
  addToCart: (product: Product, quantity: number, subscriptionType: "once" | "monthly" | "bi-monthly") => void;
  updateCartQuantity: (productId: string, subscriptionType: "once" | "monthly" | "bi-monthly", quantity: number) => void;
  removeFromCart: (productId: string, subscriptionType: "once" | "monthly" | "bi-monthly") => void;
  clearCart: () => void;
  toggleWishlist: (product: Product) => void;
  applyCoupon: (code: string) => { success: boolean; message: string };

  // Cart totals
  cartSubtotal: number;
  cartCount: number;
  shippingCost: number;
  discountAmount: number;
  cartTotal: number;

  // User
  userProfile: UserProfile | null;
  login: (name: string, email: string) => void;
  logout: () => void;
  addAddress: (address: Address) => void;
  removeAddress: (addressId: string) => void;
  setDefaultAddress: (addressId: string) => void;
  placeOrder: (address: Address, paymentMethod: string) => Order | null;

  // Doctor bookings
  bookAppointment: (apt: Appointment) => void;

  // Admin
  updateStock: (productId: string, newStock: number) => void;
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (productId: string) => void;
  bulkDeleteProducts: (productIds: string[]) => void;
  adminOrders: any[];
  adminCustomers: any[];
  adminLeads: any[];
  adminBlogs: AdminBlog[];
  bannerConfig: BannerConfig;
  setBannerConfig: (config: BannerConfig) => void;
  adminCoupons: Coupon[];
  setAdminCoupons: (coupons: Coupon[]) => void;
  adminAppointments: Appointment[];
  setAdminAppointments: (apts: Appointment[]) => void;
}

const StoreContext = createContext<StoreContextValue | undefined>(undefined);

const DEFAULT_ADDRESS: Address = {
  id: "add-101",
  type: "Home",
  street: "12, Vedic Nagar, Bypass Road",
  city: "Haridwar",
  state: "Uttarakhand",
  zip: "249401",
  isDefault: true
};

const MOCK_ADMIN_LEADS = [
  { id: "L-201", name: "Rahul Menon", company: "AyurCare Clinics", email: "rahul@ayurcare.in", phone: "+91 9876543212", location: "Kochi, KL", enquiry: "Interested in opening a franchise in Kochi.", date: "Oct 24, 2024", status: "New", source: "Website" },
  { id: "L-202", name: "Sneha Reddy", company: "Reddy Wellness", email: "sneha.r@reddywellness.com", phone: "+91 9876543213", location: "Hyderabad, TS", enquiry: "Looking for wholesale supply of Siddha medicines.", date: "Oct 23, 2024", status: "Contacted", source: "Trade Show" },
  { id: "L-203", name: "Vikram Singh", company: "Singh Pharma Distributors", email: "vikram@singhpharma.in", phone: "+91 9876543214", location: "Delhi, DL", enquiry: "Want to become a distributor for North India.", date: "Oct 20, 2024", status: "Qualified", source: "Referral" },
];

const MOCK_ADMIN_BLOGS: AdminBlog[] = [
  {
    id: "B-101",
    title: "The Power of Ayurveda in Daily Wellness",
    category: "Ayurveda",
    author: "IGO Pharma Team",
    date: "20 May 2025 10:30 AM",
    status: "Published",
    featured: true,
    views: 1245,
    image: "/images/blogs/ayurveda.jpg",
    readTime: "5 min read",
    snippet: "Discover how ancient Ayurvedic practices can transform your everyday health and bring natural balance to your life.",
    seoScore: 85
  },
  {
    id: "B-102",
    title: "5 Herbal Ingredients That Boost Immunity Naturally",
    category: "Immunity",
    author: "Dr. Meera Sharma",
    date: "18 May 2025 09:15 AM",
    status: "Published",
    featured: true,
    views: 980,
    image: "/images/blogs/immunity.jpg",
    readTime: "4 min read",
    snippet: "A comprehensive guide to the top 5 herbs that have been proven to enhance your body's natural defense mechanisms.",
    seoScore: 92
  },
  {
    id: "B-103",
    title: "Stress Management the Ayurvedic Way",
    category: "Wellness",
    author: "IGO Pharma Team",
    date: "15 May 2025 04:45 PM",
    status: "Published",
    featured: true,
    views: 1102,
    image: "/images/blogs/stress.jpg",
    readTime: "6 min read",
    snippet: "Learn traditional techniques and herbal remedies to combat modern-day stress and anxiety.",
    seoScore: 78
  },
  {
    id: "B-104",
    title: "Detox Your Body with Ayurvedic Detoxifiers",
    category: "Detox",
    author: "Dr. Arjun Nair",
    date: "10 May 2025 11:00 AM",
    status: "Draft",
    featured: false,
    views: 0,
    image: "/images/blogs/detox.webp",
    readTime: "7 min read",
    snippet: "Step-by-step guide to naturally cleansing your body using time-tested Ayurvedic detoxification methods.",
    seoScore: 65
  },
  {
    id: "B-105",
    title: "Top 7 Ayurvedic Ingredients for Healthy Skin",
    category: "Skin Care",
    author: "IGO Pharma Team",
    date: "08 May 2025 02:30 PM",
    status: "Draft",
    featured: false,
    views: 0,
    image: "/images/blogs/skincare.jpg",
    readTime: "5 min read",
    snippet: "Unveil the secret to glowing skin with these 7 powerful Ayurvedic ingredients you can find in your kitchen.",
    seoScore: 70
  },
  {
    id: "B-106",
    title: "Ayurvedic Hair Care Routine for Strong & Shiny Hair",
    category: "Hair Care",
    author: "Dr. Meera Sharma",
    date: "05 May 2025 10:20 AM",
    status: "Published",
    featured: false,
    views: 856,
    image: "/images/blogs/haircare.png",
    readTime: "6 min read",
    snippet: "Achieve the lush, vibrant hair you've always wanted with a holistic Ayurvedic hair care regimen.",
    seoScore: 88
  }
];

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
      const firebaseProducts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Product[];
      setProducts(firebaseProducts);
    });
    return () => unsubscribe();
  }, []);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile | null>({
    name: "Ananth Raman",
    email: "ananth@gmail.com",
    phone: "+91 94441 23456",
    addresses: [DEFAULT_ADDRESS],
    rewardPoints: 140,
    walletBalance: 30,
    orders: []
  });

  const [adminOrders] = useState<any[]>([
    { id: "ORD-1234", customer: "Rahul V.", date: "Today", status: "Processing", total: 1250 },
    { id: "ORD-1235", customer: "Priya S.", date: "Yesterday", status: "Shipped", total: 850 },
    { id: "ORD-1236", customer: "Anand M.", date: "2 days ago", status: "Delivered", total: 2100 }
  ]);

  const [adminCustomers] = useState<any[]>([
    { id: "CX-001", name: "Rahul V.", email: "rahul@email.com", totalOrders: 5, spent: 4500 },
    { id: "CX-002", name: "Priya S.", email: "priya@email.com", totalOrders: 2, spent: 1800 },
    { id: "CX-003", name: "Anand M.", email: "anand@email.com", totalOrders: 8, spent: 9200 }
  ]);

  const [adminLeads] = useState<any[]>(MOCK_ADMIN_LEADS);

  const [adminCoupons, setAdminCoupons] = useState<Coupon[]>([
    { code: "AYUR10", discount: 10, type: "percentage", status: "Active", expiryDate: "2026-12-31", usageLimit: 100, usedCount: 45, minPurchase: 500 },
    { code: "WELCOME50", discount: 50, type: "flat", status: "Active", expiryDate: "2026-08-31", usageLimit: 500, usedCount: 120, minPurchase: 1000 }
  ]);

  const [adminAppointments, setAdminAppointments] = useState<Appointment[]>([
    { id: "APT-1", doctorId: "doc-1", doctorName: "Dr. Aditi Sharma", system: "Ayurveda" as any, date: "2026-07-30", timeSlot: "10:00 AM", type: "video", patientName: "Rahul V.", patientPhone: "9876543210", patientEmail: "rahul@test.com", status: "Scheduled", paymentStatus: "Paid" }
  ]);

  const [bannerConfig, setBannerConfig] = useState<BannerConfig>({
    title: "Vedic Science Meets Modern Purity",
    subtitle: "100% ORGANIC & LAB-TESTED REMEDIES",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
    ctaText: "Shop Raw Remedies",
    ctaLink: "/shop",
    publishStatus: "Published"
  });

  const [adminBlogs] = useState<AdminBlog[]>(MOCK_ADMIN_BLOGS);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [couponCode, setCouponCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  const addToCart = (product: Product, quantity: number, subscriptionType: "once" | "monthly" | "bi-monthly") => {
    if (product.stock < quantity) {
      alert(`Limited Stock! Only ${product.stock} units are currently available.`);
      return;
    }
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id && item.subscriptionType === subscriptionType);
      if (existing) {
        return prev.map(item =>
          (item.product.id === product.id && item.subscriptionType === subscriptionType)
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, subscriptionType }];
    });
    setProducts(prevProds => prevProds.map(p => p.id === product.id ? { ...p, stock: p.stock - quantity } : p));
  };

  const updateCartQuantity = (productId: string, subscriptionType: "once" | "monthly" | "bi-monthly", quantity: number) => {
    setCart(prev => {
      const existing = prev.find(i => i.product.id === productId && i.subscriptionType === subscriptionType);
      if (!existing) return prev;
      const diff = quantity - existing.quantity;
      if (diff > 0) {
        const prod = products.find(p => p.id === productId);
        if (prod && prod.stock < diff) {
          alert(`Limited Stock! Only ${prod.stock} more units are available.`);
          return prev;
        }
      }
      setProducts(prevProds => prevProds.map(p => p.id === productId ? { ...p, stock: p.stock - diff } : p));
      return prev.map(i =>
        (i.product.id === productId && i.subscriptionType === subscriptionType)
          ? { ...i, quantity: Math.max(1, quantity) }
          : i
      );
    });
  };

  const removeFromCart = (productId: string, subscriptionType: "once" | "monthly" | "bi-monthly") => {
    const item = cart.find(i => i.product.id === productId && i.subscriptionType === subscriptionType);
    if (!item) return;
    setProducts(prevProds => prevProds.map(p => p.id === productId ? { ...p, stock: p.stock + item.quantity } : p));
    setCart(prev => prev.filter(i => !(i.product.id === productId && i.subscriptionType === subscriptionType)));
  };

  const clearCart = () => {
    setCart([]);
    setAppliedDiscount(0);
    setCouponCode("");
  };

  const toggleWishlist = (product: Product) => {
    setWishlist(prev => {
      if (prev.some(p => p.id === product.id)) {
        return prev.filter(p => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const applyCoupon = (code: string) => {
    const upper = code.toUpperCase();
    if (upper === "VEDIC15") {
      setAppliedDiscount(15);
      setCouponCode(upper);
      return { success: true, message: "Coupon VEDIC15 applied successfully. 15% discount registered." };
    } else if (upper === "AYUSH50") {
      setAppliedDiscount(50);
      setCouponCode(upper);
      return { success: true, message: "Administrative Coupon AYUSH50 applied. 50% discount registered." };
    }
    return { success: false, message: "Invalid Coupon Code. Try using VEDIC15." };
  };

  const cartSubtotal = useMemo(() => cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0), [cart]);
  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);
  const shippingCost = cartSubtotal >= 999 || cartSubtotal === 0 ? 0 : 79;
  const discountAmount = Math.round(cartSubtotal * (appliedDiscount / 100));
  const cartTotal = Math.max(0, cartSubtotal - discountAmount + shippingCost);

  const login = (name: string, email: string) => {
    setUserProfile({
      name,
      email,
      phone: "+1 555-456-7890",
      addresses: [{
        id: "add-120",
        type: "Home",
        street: "15 Golden Lotus Drive",
        city: "San Jose",
        state: "CA",
        zip: "95112",
        isDefault: true
      }],
      rewardPoints: 0,
      walletBalance: 0,
      orders: []
    });
  };

  const logout = () => setUserProfile(null);

  const addAddress = (address: Address) => {
    setUserProfile(prev => {
      if (!prev) return null;
      const addresses = address.isDefault
        ? [...prev.addresses.map(a => ({ ...a, isDefault: false })), address]
        : [...prev.addresses, address];
      return { ...prev, addresses };
    });
  };

  const removeAddress = (addressId: string) => {
    setUserProfile(prev => {
      if (!prev) return null;
      return { ...prev, addresses: prev.addresses.filter(a => a.id !== addressId) };
    });
  };

  const setDefaultAddress = (addressId: string) => {
    setUserProfile(prev => {
      if (!prev) return null;
      return { ...prev, addresses: prev.addresses.map(a => ({ ...a, isDefault: a.id === addressId })) };
    });
  };

  const placeOrder = (address: Address, paymentMethod: string): Order | null => {
    if (cart.length === 0 || !userProfile) return null;
    const newOrder: Order = {
      id: `ord-${Math.floor(Math.random() * 9000) + 1000}`,
      date: new Date().toISOString().split("T")[0],
      items: [...cart],
      subtotal: cartSubtotal,
      discount: discountAmount,
      shipping: shippingCost,
      total: cartTotal,
      status: "Processing",
      paymentMethod,
      address,
      trackingNumber: `SR${Math.floor(Math.random() * 900000) + 100000}IN`,
      carrier: "Shiprocket Express"
    };

    setUserProfile(prev => {
      if (!prev) return null;
      return {
        ...prev,
        rewardPoints: (prev.rewardPoints || 0) + Math.round(cartTotal / 10),
        orders: [newOrder, ...(prev.orders || [])]
      };
    });

    clearCart();
    return newOrder;
  };

  const bookAppointment = (apt: Appointment) => {
    setAppointments(prev => [apt, ...prev]);
  };

  const updateStock = async (productId: string, newStock: number) => {
    await updateDoc(doc(db, "products", productId), { stock: newStock });
  };

  const addProduct = async (newProduct: Product) => {
    await setDoc(doc(db, "products", newProduct.id), newProduct);
  };

  const updateProduct = async (updatedProduct: Product) => {
    await updateDoc(doc(db, "products", updatedProduct.id), updatedProduct as any);
  };

  const deleteProduct = async (productId: string) => {
    await deleteDoc(doc(db, "products", productId));
  };

  const bulkDeleteProducts = async (productIds: string[]) => {
    const batch = writeBatch(db);
    productIds.forEach(id => {
      batch.delete(doc(db, "products", id));
    });
    await batch.commit();
  };

  const value = useMemo(() => ({
    products, doctors: DOCTORS, blogs: BLOGS, ingredients: INGREDIENTS, appointments,
    cart, wishlist, couponCode, appliedDiscount, setCouponCode,
    addToCart, updateCartQuantity, removeFromCart, clearCart, toggleWishlist, applyCoupon,
    cartSubtotal, cartCount, shippingCost, discountAmount, cartTotal,
    userProfile, login, logout, addAddress, removeAddress, setDefaultAddress, placeOrder,
    bookAppointment, updateStock, addProduct, updateProduct, deleteProduct, bulkDeleteProducts,
    adminOrders,
    adminCustomers,
    adminLeads,
    adminBlogs,
    adminCoupons,
    setAdminCoupons,
    adminAppointments,
    setAdminAppointments,
    bannerConfig,
    setBannerConfig
  }), [products, appointments, cart, wishlist, couponCode, appliedDiscount, userProfile, adminOrders, adminCustomers, adminLeads, adminBlogs, adminCoupons, adminAppointments, bannerConfig]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within a StoreProvider");
  return ctx;
}
