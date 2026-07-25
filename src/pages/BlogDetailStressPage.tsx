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
  Moon,
  Sun,
  Wind,
  Heart,
  Brain
} from "lucide-react";

export default function BlogDetailStressPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-[#f8f6f1] min-h-screen pb-16 font-sans">

      {/* ── Breadcrumb ────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-xs font-medium text-stone-500 flex-wrap">
          <Link to="/" className="hover:text-emerald-800 transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/knowledge" className="hover:text-emerald-800 transition-colors">Blog & Knowledge Center</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-stone-400">Wellness</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-emerald-800 font-bold">Stress Management the Ayurvedic Way</span>
        </nav>
      </div>

      {/* ── Hero Section ──────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 py-8">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left: Text */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-emerald-950 leading-tight mb-6">
              Stress Management <br className="hidden md:block" />
              the Ayurvedic Way
            </h1>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Simple and natural ways Ayurveda helps in balancing stress and improving mental well-being day by day.
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs font-bold text-stone-600">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-emerald-800" />
                15 May, 2024
              </div>
              <div className="w-1 h-1 rounded-full bg-stone-300" />
              <div className="flex items-center gap-1.5">
                <Leaf className="h-4 w-4 text-emerald-800" />
                Wellness
              </div>
              <div className="w-1 h-1 rounded-full bg-stone-300" />
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-emerald-800" />
                5 min read
              </div>
            </div>
          </div>
          {/* Right: Hero Image */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[400px]">
              <img
                src="/images/stress management the ayurvedic way.jpg"
                alt="Stress Management the Ayurvedic Way"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 to-transparent mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content + Sidebar ─────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 py-10">
        {/* KEY FIX: items-start ensures the flex children don't stretch,
            which is what allows sticky positioning to work correctly */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* ── Left: Article Content ──────────────────────────── */}
          <div className="flex-1 min-w-0 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100">

            {/* Intro */}
            <div className="mb-10" id="intro">
              <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                In today's fast-paced world, stress has become a common challenge affecting mental, emotional and physical health. Ayurveda, the ancient Indian science of life, offers time-tested natural approaches to manage stress and restore inner balance effectively.
              </p>
            </div>

            {/* Why Stress Management Matters */}
            <div className="mb-10" id="why-it-matters">
              <h2 className="text-2xl font-black text-emerald-950 mb-4 flex items-center gap-3">
                <Leaf className="h-6 w-6 text-emerald-700 shrink-0" />
                Why Ayurvedic Stress Management Matters
              </h2>
              <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                Unlike temporary relief methods, Ayurveda addresses the root cause of stress by balancing the body's doshas — Vata, Pitta and Kapha. When these vital energies are in harmony, the mind stays calm, focused and resilient even under pressure.
              </p>
            </div>

            {/* Key Ayurvedic Herbs */}
            <div className="mb-10" id="ayurvedic-herbs">
              <h2 className="text-2xl font-black text-emerald-950 mb-8 flex items-center gap-3">
                <Leaf className="h-6 w-6 text-emerald-700 shrink-0" />
                Key Ayurvedic Herbs for Stress Relief
              </h2>

              <div className="flex flex-col gap-8">

                {/* 01 Ashwagandha */}
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-full sm:w-48 h-32 rounded-2xl overflow-hidden shrink-0">
                    <img
                      src="/images/ashwaganda image.jpg"
                      alt="Ashwagandha"
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1632054904033-b9eb5c1cc6ce?w=500&h=300&fit=crop'; }}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-emerald-950 text-white text-sm font-bold rounded-lg px-2.5 py-1">01</div>
                      <h3 className="text-lg font-black text-emerald-950">Ashwagandha</h3>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Ashwagandha is a powerful adaptogen that helps the body adapt to stress, lowers cortisol levels and supports mental clarity, stamina and restful sleep.
                    </p>
                  </div>
                </div>

                {/* 02 Brahmi */}
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-full sm:w-48 h-32 rounded-2xl overflow-hidden shrink-0">
                    <img
                      src="/images/brahmi image.jpg"
                      alt="Brahmi"
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=500&h=300&fit=crop'; }}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-emerald-950 text-white text-sm font-bold rounded-lg px-2.5 py-1">02</div>
                      <h3 className="text-lg font-black text-emerald-950">Brahmi</h3>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Brahmi is a renowned brain tonic in Ayurveda. It enhances memory, reduces anxiety and promotes a calm, focused mind — making it ideal for stress relief.
                    </p>
                  </div>
                </div>

                {/* 03 Tulsi */}
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-full sm:w-48 h-32 rounded-2xl overflow-hidden shrink-0">
                    <img
                      src="/images/tulsi image.jpg"
                      alt="Tulsi (Holy Basil)"
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1615557960916-5f4791effe9d?w=500&h=300&fit=crop'; }}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-emerald-950 text-white text-sm font-bold rounded-lg px-2.5 py-1">03</div>
                      <h3 className="text-lg font-black text-emerald-950">Tulsi (Holy Basil)</h3>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Tulsi is a sacred herb with adaptogenic properties that help regulate the body's stress response. It supports mental clarity, immunity and emotional balance naturally.
                    </p>
                  </div>
                </div>

                {/* 04 Ginger */}
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-full sm:w-48 h-32 rounded-2xl overflow-hidden shrink-0">
                    <img
                      src="/images/ginger image.jpg"
                      alt="Ginger"
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1615486511484-92e172054384?w=500&h=300&fit=crop'; }}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-emerald-950 text-white text-sm font-bold rounded-lg px-2.5 py-1">04</div>
                      <h3 className="text-lg font-black text-emerald-950">Ginger</h3>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Ginger has warming and anti-inflammatory properties that help soothe the nervous system, improve digestion and ease physical tension caused by stress.
                    </p>
                  </div>
                </div>

                {/* 05 Shankhpushpi */}
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-full sm:w-48 h-32 rounded-2xl overflow-hidden shrink-0">
                    <img
                      src="/images/shankhpushpi image.webp"
                      alt="Shankhpushpi"
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop'; }}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-emerald-950 text-white text-sm font-bold rounded-lg px-2.5 py-1">05</div>
                      <h3 className="text-lg font-black text-emerald-950">Shankhpushpi</h3>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Shankhpushpi is a traditional nervine tonic used in Ayurveda to calm the mind, reduce mental fatigue and support healthy sleep patterns.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Info Box */}
            <div className="bg-[#f5f7f2] rounded-2xl p-6 md:p-8 flex items-start gap-4 mb-12 border border-emerald-50">
              <div className="w-12 h-12 rounded-full bg-white border border-emerald-100 flex items-center justify-center shrink-0 shadow-sm">
                <Leaf className="h-6 w-6 text-emerald-700" />
              </div>
              <p className="text-stone-700 font-medium text-sm md:text-base leading-relaxed mt-1">
                Incorporating these Ayurvedic herbs through daily teas, herbal supplements or mindful routines can significantly reduce stress and build lasting mental resilience.
              </p>
            </div>

            {/* Ayurvedic Stress Relief Practices */}
            <div className="mb-12" id="practices">
              <h2 className="text-2xl font-black text-emerald-950 mb-6 flex items-center gap-3">
                <Leaf className="h-6 w-6 text-emerald-700 shrink-0" />
                Ayurvedic Practices for a Calmer Mind
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-[#fcfaf5] rounded-xl p-5 flex flex-col items-center text-center border border-amber-50">
                  <Brain className="h-8 w-8 text-emerald-700 mb-3" />
                  <h4 className="font-black text-stone-800 mb-2 text-sm">Meditation</h4>
                  <p className="text-xs text-stone-600">Daily mindfulness and breathing exercises to calm the nervous system.</p>
                </div>
                <div className="bg-[#fcfaf5] rounded-xl p-5 flex flex-col items-center text-center border border-amber-50">
                  <Sun className="h-8 w-8 text-emerald-700 mb-3" />
                  <h4 className="font-black text-stone-800 mb-2 text-sm">Yoga</h4>
                  <p className="text-xs text-stone-600">Gentle yoga postures that release physical tension and restore balance.</p>
                </div>
                <div className="bg-[#fcfaf5] rounded-xl p-5 flex flex-col items-center text-center border border-amber-50">
                  <Wind className="h-8 w-8 text-emerald-700 mb-3" />
                  <h4 className="font-black text-stone-800 mb-2 text-sm">Pranayama</h4>
                  <p className="text-xs text-stone-600">Controlled breathing to regulate energy flow and reduce anxiety.</p>
                </div>
                <div className="bg-[#fcfaf5] rounded-xl p-5 flex flex-col items-center text-center border border-amber-50">
                  <Moon className="h-8 w-8 text-emerald-700 mb-3" />
                  <h4 className="font-black text-stone-800 mb-2 text-sm">Quality Sleep</h4>
                  <p className="text-xs text-stone-600">Adequate, restful sleep is essential for stress recovery and mental clarity.</p>
                </div>
              </div>
            </div>

            {/* Quote Box */}
            <div className="bg-[#f5f7f2] rounded-2xl p-8 relative overflow-hidden mb-12" id="wisdom">
              <div className="absolute -right-4 -bottom-4 opacity-10">
                <Leaf className="h-32 w-32 text-emerald-900" />
              </div>
              <div className="relative z-10 flex gap-4">
                <span className="text-4xl text-emerald-300 font-serif leading-none">"</span>
                <div>
                  <p className="text-stone-800 font-bold text-base md:text-lg italic mb-4 leading-relaxed">
                    The mind is everything. <br />
                    What you think, you become.
                  </p>
                  <p className="text-sm font-bold text-emerald-900 uppercase tracking-wider">
                    — Ayurvedic Wisdom
                  </p>
                </div>
              </div>
            </div>

            {/* Daily Routine */}
            <div className="mb-12" id="daily-routine">
              <h2 className="text-2xl font-black text-emerald-950 mb-6 flex items-center gap-3">
                <Leaf className="h-6 w-6 text-emerald-700 shrink-0" />
                Simple Ayurvedic Daily Routine for Stress
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-[#fcfaf5] rounded-xl p-5 flex flex-col items-center text-center border border-amber-100">
                  <Sun className="h-8 w-8 text-amber-500 mb-3" />
                  <h4 className="font-black text-stone-800 mb-2">Morning</h4>
                  <p className="text-xs text-stone-600">Warm water + Ashwagandha or Tulsi tea</p>
                </div>
                <div className="bg-[#fcfaf5] rounded-xl p-5 flex flex-col items-center text-center border border-amber-100">
                  <Sun className="h-8 w-8 text-amber-600 mb-3" />
                  <h4 className="font-black text-stone-800 mb-2">Afternoon</h4>
                  <p className="text-xs text-stone-600">Light walk + mindful breathing exercises</p>
                </div>
                <div className="bg-[#fcfaf5] rounded-xl p-5 flex flex-col items-center text-center border border-amber-100">
                  <Sun className="h-8 w-8 text-orange-500 mb-3" />
                  <h4 className="font-black text-stone-800 mb-2">Evening</h4>
                  <p className="text-xs text-stone-600">Yoga or gentle stretching + Brahmi tea</p>
                </div>
                <div className="bg-[#fcfaf5] rounded-xl p-5 flex flex-col items-center text-center border border-amber-100">
                  <Moon className="h-8 w-8 text-emerald-700 mb-3" />
                  <h4 className="font-black text-stone-800 mb-2">Night</h4>
                  <p className="text-xs text-stone-600">Meditation + warm milk with Ashwagandha</p>
                </div>
              </div>

              <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                A consistent Ayurvedic routine creates a foundation for mental peace. Small, steady habits compound over time to build a genuinely stress-resilient mind and body.
              </p>
            </div>

            {/* Key Takeaways */}
            <div className="mb-12" id="key-takeaways">
              <h2 className="text-2xl font-black text-emerald-950 mb-4 flex items-center gap-3">
                <Heart className="h-6 w-6 text-emerald-700 shrink-0" />
                Key Takeaways
              </h2>
              <ul className="flex flex-col gap-3">
                {[
                  "Ayurveda treats stress at its root by balancing the body's natural energies.",
                  "Adaptogenic herbs like Ashwagandha and Brahmi significantly reduce cortisol levels.",
                  "Daily practices like yoga, pranayama and meditation complement herbal support.",
                  "Consistent Ayurvedic routines build long-term stress resilience.",
                  "Natural, holistic wellness is always preferable to short-term symptomatic relief.",
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
            <div className="border-t border-stone-100 pt-8 mt-12 flex items-center gap-4 flex-wrap">
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

          {/* ── Right: Sidebar ─────────────────────────────────────
              KEY FIX: `self-start sticky top-24` on this element.
              The parent has `items-start` so flex doesn't stretch
              this sidebar to full height — allowing sticky to work. */}
          <div className="lg:w-[320px] w-full shrink-0 self-start sticky top-24 flex flex-col gap-8">

            {/* Table of Contents */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
              <h3 className="text-lg font-black text-emerald-950 mb-4">Table of Contents</h3>
              <ol className="flex flex-col gap-3 text-sm text-stone-600 font-medium">
                {[
                  "Introduction",
                  "Why It Matters",
                  "Key Ayurvedic Herbs",
                  "Practices for a Calmer Mind",
                  "Daily Ayurvedic Routine",
                  "Key Takeaways",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 hover:text-emerald-800 cursor-pointer transition-colors">
                    <span className="text-emerald-700 shrink-0">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>

            {/* Related Articles */}
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

                <Link to="#" className="flex gap-3 group">
                  <div className="w-20 h-16 rounded-xl overflow-hidden shrink-0">
                    <img
                      src="/images/detox your bosy with ayurvedic detoxifiers.webp"
                      alt="Detox Your Body"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-xs font-bold text-stone-800 group-hover:text-emerald-800 transition-colors leading-snug">
                    Detox Your Body with Ayurvedic Detoxifiers
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
