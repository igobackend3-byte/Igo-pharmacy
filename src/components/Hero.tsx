import React, { useState } from "react";
import { Sparkles, Leaf, Shield, Award, ArrowRight, Heart } from "lucide-react";
import heroVideo from "../video2.mp4";

interface HeroProps {
  onExploreProducts: () => void;
  onOpenConsultation: () => void;
  onOpenAIWellness: () => void;
}

export default function Hero({ onExploreProducts, onOpenConsultation, onOpenAIWellness }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Vedic Science Meets Modern Purity",
      subtitle: "100% ORGANIC & LAB-TESTED REMEDIES",
      desc: "Restore absolute balance to your body with our premium Ayurvedic formulations. Prescribed by empaneled doctors, crafted in GMP Certified pharmacies, and delivered with love.",
      buttonText: "Shop Raw Remedies",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
      accent: "from-emerald-950 to-emerald-900",
      tag: "Tridosha Equilibrium"
    },
    {
      title: "Discover Your Unique Prakriti Constitution",
      subtitle: "INTELLIGENT AI DOSHA ANALYSIS",
      desc: "Take our advanced constitutional quiz calibrated by classical texts. Instantly decode your physical-mental archetype (Vata, Pitta, Kapha) and receive personalized herbal recommendations.",
      buttonText: "Start AI Quiz",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200",
      accent: "from-amber-950 to-amber-900",
      tag: "AI Guided Health"
    }
  ];

  const handleAction = (index: number) => {
    if (index === 0) {
      onExploreProducts();
    } else {
      onOpenAIWellness();
    }
  };

  return (
    <div className="relative bg-stone-50">
      {/* Background blobs for premium depth */}
      <div className="absolute top-1/4 left-10 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />

      {/* Full-width video banner — no max-width, no side padding */}
      <div className="relative overflow-hidden bg-emerald-950 text-stone-100 shadow-2xl transition-all duration-700 min-h-[500px] flex items-center justify-center w-full">

        {/* Background Video / Image */}
        {activeSlide === 0 ? (
          <video src={heroVideo} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover z-0" />
        ) : (
          <img src={slides[activeSlide].image} alt="Background" className="absolute inset-0 h-full w-full object-cover z-0" />
        )}

        {/* Glassy overlay effect for readability */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/70 via-black/20 to-black/40 z-0" />

        <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16 md:px-16 md:py-24 lg:px-20 text-center w-full">
          {/* Slide Text Content */}
          <div className="space-y-6 max-w-3xl flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-300 backdrop-blur-md">
              <Sparkles className="h-4 w-4" />
              {slides[activeSlide].subtitle}
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl leading-tight font-sans">
              {slides[activeSlide].title}
            </h1>
            <p className="text-base text-stone-200 md:text-lg font-light leading-relaxed">
              {slides[activeSlide].desc}
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button
                onClick={() => handleAction(activeSlide)}
                className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3 text-sm font-bold text-emerald-950 shadow-md hover:bg-amber-300 hover:shadow-lg transition-all cursor-pointer"
              >
                {slides[activeSlide].buttonText}
                <ArrowRight className="h-4.5 w-4.5" />
              </button>
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 rounded-xl border border-stone-200/40 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-bold text-white hover:bg-white/20 transition-all cursor-pointer"
              >
                Consult a Doctor
              </button>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${activeSlide === i ? 'w-8 bg-amber-400' : 'w-2 bg-stone-400/50'}`}
              title={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Feature badges below banner — back inside centered container */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-10">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm border border-stone-100">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
              <Leaf className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-stone-800 uppercase tracking-wider">100% Natural</h3>
              <p className="text-[11px] text-stone-500">Pure raw botanicals</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm border border-stone-100">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-stone-800 uppercase tracking-wider">AYUSH Certified</h3>
              <p className="text-[11px] text-stone-500">Government approved</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm border border-stone-100">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-stone-800 uppercase tracking-wider">Batch Lab-Tested</h3>
              <p className="text-[11px] text-stone-500">No heavy metals</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm border border-stone-100">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
              <Heart className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-stone-800 uppercase tracking-wider">Doctor Backed</h3>
              <p className="text-[11px] text-stone-500">Certified expert advice</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
