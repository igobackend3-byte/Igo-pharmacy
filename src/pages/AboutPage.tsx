import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Leaf, ShieldCheck, Users, Globe2, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 md:px-8 space-y-10">
      <nav className="flex items-center gap-1.5 text-[11px] text-stone-500 font-medium">
        <Link to="/" className="hover:text-emerald-700">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-emerald-800 font-bold">About Us</span>
      </nav>

      <div className="text-center space-y-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 font-mono uppercase tracking-wider">
          <Leaf className="h-4 w-4" /> Our Story
        </span>
        <h1 className="text-3xl md:text-4xl font-black text-emerald-950">India's Digital Home for Traditional Wellness</h1>
        <p className="text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed font-light">
          IGO Pharma brings together certified Ayurveda, Siddha, and Herbal formulations from registered pharmacies under one roof — vetted for purity, backed by AYUSH physicians, and delivered to your door.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Users, label: "50,000+ Happy Customers", desc: "Trusted by patients across India and abroad." },
          { icon: Globe2, label: "300+ Registered Brands", desc: "Sourced from certified herbal manufacturers." },
          { icon: ShieldCheck, label: "HPLC Lab-Tested", desc: "Every batch is verified free of heavy metals." },
          { icon: Award, label: "AYUSH Certified", desc: "Formulations vetted against government codes." }
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="rounded-2xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-xs font-black text-stone-800">{item.label}</h3>
              <p className="text-[11px] text-stone-500 leading-normal">{item.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-lg font-black text-stone-900">Our Mission</h2>
          <p className="text-sm text-stone-600 leading-relaxed font-light">
            To make authentic, standardized traditional medicine accessible to everyone — free from the guesswork of unverified local remedies. We partner exclusively with GMP-certified pharmacies and independently lab-test every batch we sell.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-lg font-black text-stone-900">Why Patients Choose Us</h2>
          <ul className="space-y-2 text-sm text-stone-600 font-light">
            <li className="flex items-start gap-2"><span className="text-emerald-700 font-bold">•</span> Free on-board consultations with certified AYUSH doctors</li>
            <li className="flex items-start gap-2"><span className="text-emerald-700 font-bold">•</span> Heavy-metal-free, HPLC-verified batch certification on every product</li>
            <li className="flex items-start gap-2"><span className="text-emerald-700 font-bold">•</span> Fast, tracked delivery with Shiprocket logistics partners</li>
            <li className="flex items-start gap-2"><span className="text-emerald-700 font-bold">•</span> Transparent sourcing from 300+ registered herbal companies</li>
          </ul>
        </div>
      </div>

      <div className="rounded-2xl bg-emerald-950 text-white p-8 text-center space-y-3">
        <h2 className="text-xl font-black">Have questions about a formulation?</h2>
        <p className="text-xs text-stone-300 max-w-md mx-auto">Our certified Ayurvedic and Siddha physicians are available for free consultations.</p>
        <Link to="/consult" className="inline-block rounded-xl bg-amber-400 text-emerald-950 px-6 py-2.5 text-xs font-bold hover:bg-amber-300 transition-colors">
          Book a Free Consultation
        </Link>
      </div>
    </div>
  );
}
