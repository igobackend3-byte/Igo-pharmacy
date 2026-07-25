import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Calendar,
  Clock,
  ChevronRight,
  Facebook,
  Twitter,
  Link2,
  Leaf,
  Zap,
  Shield,
  Utensils,
  Sparkles,
  Weight,
  Coffee,
  Wind,
  Sun,
  Moon,
} from "lucide-react";

export default function BlogDetailDetoxPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-[#f8f6f1] min-h-screen pb-16 font-sans">

      {/* ── Breadcrumb ─────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-xs font-medium text-stone-500 flex-wrap">
          <Link to="/" className="hover:text-emerald-800 transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/knowledge" className="hover:text-emerald-800 transition-colors">Blog & Knowledge Center</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-stone-400">Ayurveda</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-emerald-800 font-bold">Detox Your Body with Ayurvedic Detoxifiers</span>
        </nav>
      </div>

      {/* ── Hero Section ───────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 py-8">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left: Text */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-emerald-950 leading-tight mb-6">
              Detox Your Body <br className="hidden md:block" />
              with Ayurvedic <br className="hidden md:block" />
              Detoxifiers
            </h1>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Explore natural Ayurvedic detoxifiers that help cleanse your body, remove toxins and restore balance for a healthier, more vibrant you.
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs font-bold text-stone-600">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-emerald-800" />
                10 May, 2024
              </div>
              <div className="w-1 h-1 rounded-full bg-stone-300" />
              <div className="flex items-center gap-1.5">
                <Leaf className="h-4 w-4 text-emerald-800" />
                Ayurveda
              </div>
              <div className="w-1 h-1 rounded-full bg-stone-300" />
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-emerald-800" />
                6 min read
              </div>
            </div>
          </div>
          {/* Right: Hero Image */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[400px]">
              <img
                src="/images/detox your bosy with ayurvedic detoxifiers.webp"
                alt="Detox Your Body with Ayurvedic Detoxifiers"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 to-transparent mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content + Sidebar ──────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 py-10">
        {/* items-start is critical for sticky sidebar to work */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* ── Left: Article Content ──────────────────────── */}
          <div className="flex-1 min-w-0 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100">

            {/* Intro Info Box */}
            <div className="bg-[#f5f7f2] rounded-2xl p-6 flex items-start gap-4 mb-10 border border-emerald-50" id="intro">
              <div className="w-12 h-12 rounded-full bg-white border border-emerald-100 flex items-center justify-center shrink-0 shadow-sm">
                <Leaf className="h-6 w-6 text-emerald-700" />
              </div>
              <p className="text-stone-700 font-medium text-sm md:text-base leading-relaxed mt-1">
                In today's modern lifestyle, our bodies accumulate toxins from pollution, processed foods, stress and irregular habits. Ayurveda offers time-tested herbs and practices that support the body's natural detoxification and promote overall well-being.
              </p>
            </div>

            {/* Why Detoxify? */}
            <div className="mb-12" id="why-detoxify">
              <h2 className="text-2xl font-black text-emerald-950 mb-6 flex items-center gap-3">
                <Leaf className="h-6 w-6 text-emerald-700 shrink-0" />
                Why Detoxify?
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {[
                  { icon: Zap, label: "Improves Energy", desc: "Helps you feel lighter, more active and refreshed." },
                  { icon: Shield, label: "Boosts Immunity", desc: "Strengthens your body's natural defense mechanism." },
                  { icon: Utensils, label: "Better Digestion", desc: "Supports healthy digestion and nutrient absorption." },
                  { icon: Sparkles, label: "Clearer Skin", desc: "Helps reduce skin issues and promotes a natural glow." },
                  { icon: Weight, label: "Supports Weight Management", desc: "Helps in maintaining a healthy weight naturally." },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="bg-[#f9f8f4] rounded-xl p-4 flex flex-col items-center text-center border border-stone-100">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-3">
                      <Icon className="h-5 w-5 text-emerald-700" />
                    </div>
                    <h4 className="text-xs font-black text-stone-800 mb-1 leading-snug">{label}</h4>
                    <p className="text-[11px] text-stone-500 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Ayurvedic Detoxifiers */}
            <div className="mb-12" id="top-detoxifiers">
              <h2 className="text-2xl font-black text-emerald-950 mb-6 flex items-center gap-3">
                <Leaf className="h-6 w-6 text-emerald-700 shrink-0" />
                Top Ayurvedic Detoxifiers
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {/* Amla */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden mb-3">
                    <img
                      src="/images/amla image.jpg"
                      alt="Amla"
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1596041695503-496ebf4581f4?w=300&h=300&fit=crop'; }}
                    />
                  </div>
                  <h4 className="text-sm font-black text-emerald-950 mb-1">Amla</h4>
                  <p className="text-[11px] text-stone-500 leading-relaxed">Rich in Vitamin C and antioxidants, helps cleanse the body and supports immunity.</p>
                </div>

                {/* Neem */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden mb-3">
                    <img
                      src="/images/neem image.jpg"
                      alt="Neem"
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1603903631918-a3f68f2e97c2?w=300&h=300&fit=crop'; }}
                    />
                  </div>
                  <h4 className="text-sm font-black text-emerald-950 mb-1">Neem</h4>
                  <p className="text-[11px] text-stone-500 leading-relaxed">Known for its purifying properties, helps in cleansing the blood naturally.</p>
                </div>

                {/* Turmeric */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden mb-3">
                    <img
                      src="/images/turmeric image.jpg"
                      alt="Turmeric"
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1615486171448-4fb3d7eb38c8?w=300&h=300&fit=crop'; }}
                    />
                  </div>
                  <h4 className="text-sm font-black text-emerald-950 mb-1">Turmeric</h4>
                  <p className="text-[11px] text-stone-500 leading-relaxed">Powerful anti-inflammatory and antioxidant that supports liver health.</p>
                </div>

                {/* Coriander */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden mb-3">
                    <img
                      src="/images/coriander image.jpg"
                      alt="Coriander"
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1591189824344-9efb6ea0da8f?w=300&h=300&fit=crop'; }}
                    />
                  </div>
                  <h4 className="text-sm font-black text-emerald-950 mb-1">Coriander</h4>
                  <p className="text-[11px] text-stone-500 leading-relaxed">Helps flush out toxins, supports digestion and maintains body balance.</p>
                </div>

                {/* Giloy */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden mb-3">
                    <img
                      src="/images/giloy image.jpg"
                      alt="Giloy"
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=300&h=300&fit=crop'; }}
                    />
                  </div>
                  <h4 className="text-sm font-black text-emerald-950 mb-1">Giloy</h4>
                  <p className="text-[11px] text-stone-500 leading-relaxed">A powerful herb that helps detoxify the body and boost immunity.</p>
                </div>
              </div>
            </div>

            {/* Quote Box */}
            <div className="bg-[#f5f7f2] rounded-2xl p-8 relative overflow-hidden mb-12">
              <div className="absolute -right-4 -bottom-4 opacity-10">
                <Leaf className="h-32 w-32 text-emerald-900" />
              </div>
              <div className="relative z-10 flex gap-4">
                <span className="text-4xl text-emerald-300 font-serif leading-none">"</span>
                <div>
                  <p className="text-stone-800 font-bold text-base md:text-lg italic mb-4 leading-relaxed">
                    Detoxification is a way of giving your body the reset it deserves.<br />
                    Nourish right, cleanse gently and live lighter.
                  </p>
                  <p className="text-sm font-bold text-emerald-900 uppercase tracking-wider">
                    — Ayurvedic Wisdom
                  </p>
                </div>
              </div>
            </div>

            {/* Simple Ways to Detox Daily */}
            <div className="mb-12" id="simple-ways">
              <h2 className="text-2xl font-black text-emerald-950 mb-6 flex items-center gap-3">
                <Leaf className="h-6 w-6 text-emerald-700 shrink-0" />
                Simple Ways to Detox Daily
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
                {[
                  { icon: Coffee, label: "Warm Water", desc: "Start your day with warm water and lemon." },
                  { icon: Wind, label: "Herbal Drinks", desc: "Include herbal teas like ginger, tulsi or coriander tea." },
                  { icon: Utensils, label: "Eat Clean", desc: "Choose fresh, whole foods and avoid processed meals." },
                  { icon: Sun, label: "Stay Active", desc: "Regular yoga and exercise help sweat out toxins." },
                  { icon: Moon, label: "Good Sleep", desc: "Adequate sleep helps the body repair and detox." },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="bg-[#fcfaf5] rounded-xl p-5 flex flex-col items-center text-center border border-amber-50">
                    <Icon className="h-8 w-8 text-emerald-700 mb-3" />
                    <h4 className="font-black text-stone-800 mb-2 text-sm">{label}</h4>
                    <p className="text-xs text-stone-600">{desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                Ayurveda believes in cleansing the body gently and naturally. By following these simple practices and using Ayurvedic herbs, you can support your body's natural detoxification and live a healthier life.
              </p>
            </div>

            {/* Signs Your Body Needs Detox */}
            <div className="mb-12" id="signs-detox">
              <h2 className="text-2xl font-black text-emerald-950 mb-4 flex items-center gap-3">
                <Leaf className="h-6 w-6 text-emerald-700 shrink-0" />
                Signs Your Body Needs a Detox
              </h2>
              <ul className="flex flex-col gap-3">
                {[
                  "Persistent fatigue or low energy throughout the day.",
                  "Frequent bloating, indigestion or irregular bowel movements.",
                  "Dull, blemished skin or unexplained breakouts.",
                  "Brain fog, poor concentration or mood swings.",
                  "Frequent colds, infections or a weakened immune response.",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-stone-600">
                    <span className="mt-1 h-4 w-4 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0">
                      <span className="h-2 w-2 rounded-full bg-emerald-600 block" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Takeaways */}
            <div className="mb-12" id="key-takeaways">
              <h2 className="text-2xl font-black text-emerald-950 mb-4 flex items-center gap-3">
                <Leaf className="h-6 w-6 text-emerald-700 shrink-0" />
                Key Takeaways
              </h2>
              <ul className="flex flex-col gap-3">
                {[
                  "Ayurvedic detoxification is gentle, natural and supports long-term wellness.",
                  "Herbs like Amla, Neem, Turmeric and Giloy are powerful natural cleansers.",
                  "Daily habits — warm water, clean eating, yoga and rest — amplify detox results.",
                  "Consistency over time creates lasting improvements in energy, skin and digestion.",
                  "Always choose natural, Ayurvedic-backed formulations for safe and effective detox.",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-stone-600">
                    <span className="mt-1 h-4 w-4 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0">
                      <span className="h-2 w-2 rounded-full bg-emerald-600 block" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Share */}
            <div className="border-t border-stone-100 pt-8 flex items-center gap-4 flex-wrap">
              <span className="text-sm font-bold text-stone-800">Share this article:</span>
              <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="h-4 w-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
                <Twitter className="h-4 w-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors">
                <Leaf className="h-4 w-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center hover:bg-stone-300 transition-colors">
                <Link2 className="h-4 w-4" />
              </button>
            </div>

          </div>

          {/* ── Right: Sidebar ──────────────────────────────────
              self-start + sticky top-24 for proper scroll behaviour */}
          <div className="lg:w-[320px] w-full shrink-0 self-start sticky top-24 flex flex-col gap-8">

            {/* Table of Contents */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
              <h3 className="text-lg font-black text-emerald-950 mb-4">Table of Contents</h3>
              <ol className="flex flex-col gap-3 text-sm text-stone-600 font-medium">
                {[
                  "Why Detoxify?",
                  "Top Ayurvedic Detoxifiers",
                  "Simple Ways to Detox Daily",
                  "Signs Your Body Needs Detox",
                  "Tips for Better Detox",
                  "Key Takeaways",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 hover:text-emerald-800 cursor-pointer transition-colors">
                    <span className="text-emerald-700 shrink-0">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>

            {/* Related Articles — NO CTA */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
              <h3 className="text-lg font-black text-emerald-950 mb-5">Related Articles</h3>
              <div className="flex flex-col gap-5">
                <Link to="/blog/power-of-ayurveda" className="flex gap-3 group">
                  <div className="w-20 h-16 rounded-xl overflow-hidden shrink-0">
                    <img
                      src="/images/the power of ayurveda in daily wellness.jpg"
                      alt="The Power of Ayurveda in Daily Wellness"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-xs font-bold text-stone-800 group-hover:text-emerald-800 transition-colors leading-snug">
                    The Power of Ayurveda in Daily Wellness
                  </h4>
                </Link>

                <Link to="/blog/stress-management" className="flex gap-3 group">
                  <div className="w-20 h-16 rounded-xl overflow-hidden shrink-0">
                    <img
                      src="/images/stress management the ayurvedic way.jpg"
                      alt="Stress Management the Ayurvedic Way"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-xs font-bold text-stone-800 group-hover:text-emerald-800 transition-colors leading-snug">
                    Stress Management the Ayurvedic Way
                  </h4>
                </Link>

                <Link to="/blog/immunity-boosters" className="flex gap-3 group">
                  <div className="w-20 h-16 rounded-xl overflow-hidden shrink-0">
                    <img
                      src="/images/5herbal omgredients that boost immunity naturally.jpg"
                      alt="5 Herbal Ingredients"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-xs font-bold text-stone-800 group-hover:text-emerald-800 transition-colors leading-snug">
                    5 Herbal Ingredients That Boost Immunity Naturally
                  </h4>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
