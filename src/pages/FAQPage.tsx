import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  { q: "How do I know your products are authentic and safe?", a: "Every formulation is sourced from registered, GMP-certified Ayurvedic, Siddha, and Herbal pharmacies. Each batch is independently tested via HPLC for purity and screened for heavy metals before listing." },
  { q: "What is your delivery timeline?", a: "Standard orders are processed within 24-48 hours and delivered in 3-7 business days depending on location, via our Shiprocket logistics partners. Tracking is available in your account under Purchase Records." },
  { q: "Can I return or exchange a product?", a: "Unopened products in original packaging can be returned within 7 days of delivery. See our Return & Refund policy for full details." },
  { q: "Do you offer doctor consultations?", a: "Yes — free video or WhatsApp consultations with certified AYUSH physicians are available under Doctor Consultations in the main menu." },
  { q: "How does the subscription / auto-refill option work?", a: "Choose 'Subscribe' on any product page to receive automatic monthly or bi-monthly refills at a 15% discount. You can pause or cancel anytime from My Account > Subscriptions." },
  { q: "Is Cash on Delivery (COD) available?", a: "Yes, COD is available at checkout alongside card, UPI, and IGO Wallet payments." },
  { q: "How do I track my order?", a: "Go to My Account > Purchase Records and select an order to see live shipment tracking and status." },
  { q: "Do you ship internationally?", a: "We currently ship across India with select international wholesale/export options — see our Wholesale & Franchising page for bulk and export orders." }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 md:px-8 space-y-8">
      <nav className="flex items-center gap-1.5 text-[11px] text-stone-500 font-medium">
        <Link to="/" className="hover:text-emerald-700">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-emerald-800 font-bold">FAQ</span>
      </nav>

      <div className="text-center space-y-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 font-mono uppercase tracking-wider">
          <HelpCircle className="h-4 w-4" /> Help Center
        </span>
        <h1 className="text-3xl font-black text-emerald-950">Frequently Asked Questions</h1>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq, i) => (
          <div key={i} className="rounded-2xl border border-stone-200 bg-white shadow-sm overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-4 text-left cursor-pointer"
            >
              <span className="text-sm font-bold text-stone-800">{faq.q}</span>
              <ChevronDown className={`h-4 w-4 text-stone-400 shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
            </button>
            {openIndex === i && (
              <div className="px-4 pb-4 text-xs text-stone-600 leading-relaxed font-light animate-fade-in">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center text-xs text-stone-500 pt-4">
        Still have questions? <Link to="/contact" className="text-emerald-800 font-bold hover:underline">Contact our support team</Link>.
      </div>
    </div>
  );
}
