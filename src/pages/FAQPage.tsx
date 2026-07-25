import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Leaf, CheckCircle, Heart } from "lucide-react";

const CATEGORIES = [
  { id: "Skin Care", icon: "👩‍🦰", color: "text-pink-600", bg: "bg-pink-50", border: "border-pink-200" },
  { id: "Hair Care", icon: "💇‍♀️", color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200" },
  { id: "Gut Health", icon: "🧬", color: "text-amber-700", bg: "bg-amber-50", border: "border-amber-200" },
  { id: "Immunity", icon: "🛡️", color: "text-green-700", bg: "bg-green-50", border: "border-green-200" },
  { id: "Women's Health", icon: "🌸", color: "text-purple-700", bg: "bg-purple-50", border: "border-purple-200" }
];

const FAQS = [
  { cat: "Skin Care", icon: "✨", color: "text-pink-500", bg: "bg-pink-100", q: "What products are available for skin care?", a: "We offer a wide range of herbal skin care solutions including face washes, moisturizers, creams, and natural formulations for bright, clear and healthy skin." },
  { cat: "Hair Care", icon: "🌿", color: "text-emerald-600", bg: "bg-emerald-100", q: "Which products can help support healthy hair and scalp care?", a: "Our hair care range includes herbal oils, shampoos, and serums formulated with traditional herbs to strengthen roots, reduce hair fall, and promote a healthy scalp." },
  { cat: "Gut Health", icon: "🧬", color: "text-amber-600", bg: "bg-amber-100", q: "What products are available for gut and digestive wellness?", a: "We provide Ayurvedic detoxifiers, digestive syrups, and herbal powders designed to improve digestion, balance gut flora, and support overall gastrointestinal health." },
  { cat: "Immunity", icon: "🛡️", color: "text-green-600", bg: "bg-green-100", q: "How can I choose the right immunity-support products?", a: "Our immunity boosters like Chyawanprash, Giloy, and Tulsi supplements are perfect for daily use. You can select based on your age and specific health requirements." },
  { cat: "Women's Health", icon: "👩", color: "text-purple-600", bg: "bg-purple-100", q: "Do you offer products for women's wellness?", a: "Yes, we have specialized herbal formulations that address hormonal balance, energy, and overall vitality for women at different stages of life." },
  { cat: "General", icon: "🍃", color: "text-green-600", bg: "bg-green-100", q: "Are our products made with natural and herbal ingredients?", a: "Absolutely. All our products are crafted using 100% natural, herbal, and Ayurvedic ingredients without harmful chemicals or synthetic additives." },
  { cat: "General", icon: "🥣", color: "text-blue-500", bg: "bg-blue-100", q: "How do I find the right product for my wellness needs?", a: "You can browse by 'Health Conditions' in our menu, use our search feature, or book a free consultation with our certified Ayurvedic doctors for personalized advice." },
  { cat: "General", icon: "🛒", color: "text-teal-600", bg: "bg-teal-100", q: "How can I place an order for our products?", a: "Simply add your desired items to the cart, proceed to checkout, and choose your preferred payment method including Cash on Delivery or secure online payment." }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = activeCategory ? FAQS.filter(f => f.cat === activeCategory || f.cat === "General") : FAQS;

  return (
    <div className="min-h-screen bg-stone-50 pb-20 relative overflow-hidden">
      {/* Global Dotted Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 z-0" style={{ backgroundImage: 'radial-gradient(#22c55e 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Header & Categories Wrapper with Background Image */}
      <div 
        className="relative w-full bg-cover bg-center pt-12 pb-12 px-4 md:px-8"
        style={{ backgroundImage: "url('/images/faq-header-bg.png')" }}
      >
        {/* Subtle Light Overlay for Text Readability */}
        <div className="absolute inset-0 bg-stone-50/60 z-0 pointer-events-none"></div>
        
        <div className="mx-auto max-w-7xl relative z-10">
          {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white border border-emerald-200 px-4 py-1.5 text-xs font-bold text-emerald-800 uppercase tracking-widest shadow-sm">
            <Leaf className="h-4 w-4" /> FAQ
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-emerald-950 flex flex-wrap items-center justify-center gap-3">
            <span className="text-emerald-500 text-3xl hidden md:inline">🌿</span>
            Your Wellness Questions, Answered
            <span className="text-emerald-500 text-3xl hidden md:inline">🌿</span>
          </h1>
          <p className="text-stone-600 text-lg font-medium">Everything you need to know about our herbal wellness products.</p>
          <div className="flex justify-center">
             <div className="h-px w-24 bg-emerald-200 relative mt-4">
                <Leaf className="absolute -top-2.5 left-1/2 -translate-x-1/2 h-5 w-5 text-emerald-400 bg-stone-50 px-1" />
             </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
              className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-bold shadow-sm transition-all cursor-pointer hover:scale-105
                ${activeCategory === cat.id ? 'bg-white border-emerald-500 ring-2 ring-emerald-200' : 'bg-white hover:bg-stone-50'}
                ${cat.border}
              `}
            >
              <div className={`flex h-6 w-6 items-center justify-center rounded-full ${cat.bg} ${cat.color} text-xs`}>
                {cat.icon}
              </div>
              <span className="text-stone-800">{cat.id}</span>
            </button>
          ))}
        </div>
      </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 relative z-10">
        {/* Two Column Layout */}
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          
          {/* Left Column - Accordion */}
          <div className="rounded-3xl border-2 border-emerald-100 bg-white/80 backdrop-blur-sm p-6 shadow-xl">
            <div className="space-y-3">
              {filteredFaqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={i} className={`rounded-xl transition-all ${isOpen ? 'bg-stone-50 border border-emerald-100 shadow-sm' : 'border border-transparent hover:bg-stone-50'}`}>
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between p-4 text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${faq.bg} ${faq.color} shadow-sm text-lg`}>
                          {faq.icon}
                        </div>
                        <span className="text-[15px] font-bold text-stone-800 pr-4">{faq.q}</span>
                      </div>
                      <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-600' : 'text-stone-400'}`} />
                    </button>
                    <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <div className="pl-18 pr-6 pb-5 text-sm text-stone-600 leading-relaxed font-medium">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Visual Collage */}
          <div className="relative h-[600px] hidden lg:block w-full">
            {/* Skin Care */}
            <div className="absolute top-0 left-12 w-48 h-48 rounded-full border-[6px] border-white shadow-xl overflow-hidden group hover:scale-105 transition-transform z-20">
              <img src="/images/skin care.jpg" alt="Skin Care" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-bold text-pink-700 shadow-sm whitespace-nowrap flex items-center gap-1.5 border border-pink-100">
                <span className="text-pink-500">🍃</span> Skin Care
              </div>
            </div>
            
            {/* Hair Care */}
            <div className="absolute top-4 right-8 w-56 h-56 rounded-full border-[6px] border-white shadow-xl overflow-hidden group hover:scale-105 transition-transform z-10">
              <img src="/images/hair care.png" alt="Hair Care" className="w-full h-full object-cover" />
              <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-bold text-emerald-800 shadow-sm whitespace-nowrap flex items-center gap-1.5 border border-emerald-100">
                <span className="text-emerald-600">🌿</span> Hair Care
              </div>
            </div>

            {/* Gut Health */}
            <div className="absolute top-44 left-0 w-52 h-52 rounded-full border-[6px] border-white shadow-xl overflow-hidden group hover:scale-105 transition-transform z-30">
              <img src="/images/better digestion happier you.png" alt="Gut Health" className="w-full h-full object-cover" />
              <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-bold text-amber-800 shadow-sm whitespace-nowrap flex items-center gap-1.5 border border-amber-100">
                <span className="text-amber-600">🧬</span> Gut Health
              </div>
            </div>

            {/* Immunity */}
            <div className="absolute top-60 right-1/4 w-44 h-44 rounded-full border-[6px] border-white shadow-xl overflow-hidden group hover:scale-105 transition-transform z-40">
              <img src="/images/immunity.png" alt="Immunity" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-bold text-green-800 shadow-sm whitespace-nowrap flex items-center gap-1.5 border border-green-100">
                <span className="text-green-600">🛡️</span> Immunity
              </div>
            </div>

            {/* Women's Health */}
            <div className="absolute bottom-16 right-0 w-48 h-48 rounded-full border-[6px] border-white shadow-xl overflow-hidden group hover:scale-105 transition-transform z-20">
              <img src="/images/women's health.jpg" alt="Women's Health" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-bold text-purple-800 shadow-sm whitespace-nowrap flex items-center gap-1.5 border border-purple-100">
                <span className="text-purple-600">🌸</span> Women's Health
              </div>
            </div>

            {/* Center Background/Leaves */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-100/40 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-12 bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-emerald-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-emerald-800 rounded-full flex items-center justify-center text-white"><Leaf className="h-5 w-5" /></div>
            <div>
              <p className="text-sm font-bold text-stone-800 leading-tight">100% Herbal & Natural</p>
              <p className="text-xs text-stone-500">Pure ingredients for pure wellness</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-emerald-800 rounded-full flex items-center justify-center text-white"><CheckCircle className="h-5 w-5" /></div>
            <div>
              <p className="text-sm font-bold text-stone-800 leading-tight">Safe & Scientifically Formulated</p>
              <p className="text-xs text-stone-500">Backed by traditional wisdom</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-emerald-800 rounded-full flex items-center justify-center text-white"><Leaf className="h-5 w-5" /></div>
            <div>
              <p className="text-sm font-bold text-stone-800 leading-tight">Holistic Wellness</p>
              <p className="text-xs text-stone-500">For a healthier lifestyle</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-emerald-800 rounded-full flex items-center justify-center text-white"><Heart className="h-5 w-5" /></div>
            <div>
              <p className="text-sm font-bold text-stone-800 leading-tight">Trusted by Thousands</p>
              <p className="text-xs text-stone-500">Because your health matters</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
