import React, { createContext, useContext, useState, useMemo } from "react";
import { PRODUCTS } from "../data/products";
import { DOCTORS } from "../data/doctors";
import { BLOGS, INGREDIENTS } from "../data/blogs";
import {
  Product, CartItem, Appointment, UserProfile, Address, Order
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

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
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

  const updateStock = (productId: string, newStock: number) => {
    setProducts(prev => prev.map(p => p.id === productId ? { ...p, stock: newStock } : p));
  };

  const addProduct = (newProduct: Product) => {
    setProducts(prev => [newProduct, ...prev]);
  };

  const value: StoreContextValue = {
    products, doctors: DOCTORS, blogs: BLOGS, ingredients: INGREDIENTS, appointments,
    cart, wishlist, couponCode, appliedDiscount, setCouponCode,
    addToCart, updateCartQuantity, removeFromCart, clearCart, toggleWishlist, applyCoupon,
    cartSubtotal, cartCount, shippingCost, discountAmount, cartTotal,
    userProfile, login, logout, addAddress, removeAddress, setDefaultAddress, placeOrder,
    bookAppointment, updateStock, addProduct
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within a StoreProvider");
  return ctx;
}
