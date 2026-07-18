import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Sparkles } from "lucide-react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AIWellnessBot from "./components/AIWellnessBot";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ConsultPage from "./pages/ConsultPage";
import KnowledgePage from "./pages/KnowledgePage";
import B2BPage from "./pages/B2BPage";
import AdminPage from "./pages/AdminPage";
import NotFoundPage from "./pages/NotFoundPage";
import BrandsPage from "./pages/BrandsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import PrivacyPolicyPage from "./pages/policies/PrivacyPolicyPage";
import TermsPage from "./pages/policies/TermsPage";
import ReturnPolicyPage from "./pages/policies/ReturnPolicyPage";
import PricingPolicyPage from "./pages/policies/PricingPolicyPage";

import AccountLayout from "./pages/account/AccountLayout";
import ProfileTab from "./pages/account/ProfileTab";
import AddressesTab from "./pages/account/AddressesTab";
import OrdersTab from "./pages/account/OrdersTab";
import OrderDetailPage from "./pages/account/OrderDetailPage";
import SubscriptionsTab from "./pages/account/SubscriptionsTab";
import WishlistTab from "./pages/account/WishlistTab";
import WalletTab from "./pages/account/WalletTab";
import SecurityTab from "./pages/account/SecurityTab";

export default function App() {
  const [showWellnessBot, setShowWellnessBot] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-850 flex flex-col font-sans selection:bg-emerald-800 selection:text-white">

      <Navbar onOpenAIWellness={() => setShowWellnessBot(true)} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onOpenAIWellness={() => setShowWellnessBot(true)} />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/consult" element={<ConsultPage />} />
          <Route path="/knowledge" element={<KnowledgePage />} />
          <Route path="/wholesale" element={<B2BPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-conditions" element={<TermsPage />} />
          <Route path="/return-policy" element={<ReturnPolicyPage />} />
          <Route path="/pricing-policy" element={<PricingPolicyPage />} />
          <Route path="/admin" element={<AdminPage />} />

          <Route path="/account" element={<AccountLayout />}>
            <Route index element={<ProfileTab />} />
            <Route path="profile" element={<ProfileTab />} />
            <Route path="addresses" element={<AddressesTab />} />
            <Route path="orders" element={<OrdersTab />} />
            <Route path="orders/:orderId" element={<OrderDetailPage />} />
            <Route path="subscriptions" element={<SubscriptionsTab />} />
            <Route path="wishlist" element={<WishlistTab />} />
            <Route path="wallet" element={<WalletTab />} />
            <Route path="security" element={<SecurityTab />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Floating Widget: Click to open AI Wellness chat Anywhere! */}
      <div className="fixed bottom-6 right-6 z-40">
        {showWellnessBot ? (
          <div className="shadow-2xl">
            <AIWellnessBot onClose={() => setShowWellnessBot(false)} />
          </div>
        ) : (
          <button
            onClick={() => setShowWellnessBot(true)}
            className="rounded-full bg-emerald-800 text-amber-200 p-4 shadow-lg hover:bg-emerald-950 hover:scale-105 transition-all cursor-pointer flex items-center justify-center border-2 border-amber-300"
          >
            <Sparkles className="h-6 w-6 animate-pulse" />
          </button>
        )}
      </div>

      <Footer />
    </div>
  );
}
