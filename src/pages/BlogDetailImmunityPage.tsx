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
  Coffee,
  Pill,
  Salad,
  Activity
} from "lucide-react";

export default function BlogDetailImmunityPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-[#f8f6f1] min-h-screen pb-16 font-sans">
      {/* ── Breadcrumb ────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-xs font-medium text-stone-500">
          <Link to="/" className="hover:text-emerald-800 transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/knowledge" className="hover:text-emerald-800 transition-colors">Blog & Knowledge Center</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-stone-400">Ayurveda</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-emerald-800 font-bold">5 Herbal Ingredients That Boost Immunity Naturally</span>
        </nav>
      </div>

      {/* ── Hero Section ──────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 py-8">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left: Text */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-emerald-950 leading-tight mb-6">
              5 Herbal Ingredients <br className="hidden md:block" />
              That Boost Immunity <br className="hidden md:block" />
              Naturally
            </h1>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Explore the top Ayurvedic herbs known to strengthen immunity and fight illness the natural way.
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs font-bold text-stone-600">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-emerald-800" />
                18 May, 2024
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
          {/* Right: Image */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[400px]">
              <img
                src="/images/5herbal omgredients that boost immunity naturally.jpg"
                alt="5 Herbal Ingredients That Boost Immunity Naturally"
                className="w-full h-full object-cover"
              />
              {/* Soft overlay for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 to-transparent mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content Area ─────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left: Article Content */}
          <div className="flex-1 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100">
            
            {/* Intro */}
            <div className="mb-10">
              <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                A strong immune system is your body's natural defense against infections and illnesses. Ayurveda offers a wealth of herbs and natural ingredients that have been traditionally used for centuries to support immunity and overall wellness.
              </p>
            </div>

            {/* 5 Powerful Herbal Ingredients */}
            <div className="mb-10">
              <h2 className="text-2xl font-black text-emerald-950 mb-8 flex items-center gap-3">
                <Leaf className="h-6 w-6 text-emerald-700" />
                5 Powerful Herbal Ingredients
              </h2>
              
              <div className="flex flex-col gap-8">
                {/* 01 Tulsi */}
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-full sm:w-48 h-32 rounded-2xl overflow-hidden shrink-0">
                    <img src="/images/tulsi image.jpg" alt="Tulsi" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-emerald-950 text-white text-sm font-bold rounded-lg px-2.5 py-1">01</div>
                      <h3 className="text-lg font-black text-emerald-950">Tulsi (Holy Basil)</h3>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Tulsi is known for its adaptogenic and antioxidant properties. It helps the body cope with stress and supports respiratory health and overall immunity.
                    </p>
                  </div>
                </div>

                {/* 02 Turmeric */}
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-full sm:w-48 h-32 rounded-2xl overflow-hidden shrink-0">
                    <img src="/images/turmeric image.jpg" alt="Turmeric" className="w-full h-full object-cover" onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1615486171448-4fb3d7eb38c8?w=500&h=300&fit=crop'} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-emerald-950 text-white text-sm font-bold rounded-lg px-2.5 py-1">02</div>
                      <h3 className="text-lg font-black text-emerald-950">Turmeric</h3>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Curcumin in turmeric has strong antioxidant and anti-inflammatory properties that help support the immune system and overall well-being.
                    </p>
                  </div>
                </div>

                {/* 03 Amla */}
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-full sm:w-48 h-32 rounded-2xl overflow-hidden shrink-0">
                    <img src="/images/amla image.jpg" alt="Amla" className="w-full h-full object-cover" onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1596041695503-496ebf4581f4?w=500&h=300&fit=crop'} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-emerald-950 text-white text-sm font-bold rounded-lg px-2.5 py-1">03</div>
                      <h3 className="text-lg font-black text-emerald-950">Amla (Indian Gooseberry)</h3>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Amla is a rich source of Vitamin C and antioxidants that help strengthen immunity and support healthy digestion and skin.
                    </p>
                  </div>
                </div>

                {/* 04 Ginger */}
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-full sm:w-48 h-32 rounded-2xl overflow-hidden shrink-0">
                    <img src="/images/ginger image.jpg" alt="Ginger" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-emerald-950 text-white text-sm font-bold rounded-lg px-2.5 py-1">04</div>
                      <h3 className="text-lg font-black text-emerald-950">Ginger</h3>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Ginger helps improve digestion, reduces inflammation and supports the body's natural defense mechanism.
                    </p>
                  </div>
                </div>

                {/* 05 Ashwagandha */}
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-full sm:w-48 h-32 rounded-2xl overflow-hidden shrink-0">
                    <img src="/images/ashwaganda image.jpg" alt="Ashwagandha" className="w-full h-full object-cover" onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1632054904033-b9eb5c1cc6ce?w=500&h=300&fit=crop'} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-emerald-950 text-white text-sm font-bold rounded-lg px-2.5 py-1">05</div>
                      <h3 className="text-lg font-black text-emerald-950">Ashwagandha</h3>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Ashwagandha is an adaptogen that helps the body manage stress and supports stamina, strength and immune health.
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
                Incorporating these herbs into your daily routine through tea, powders, capsules or Ayurvedic formulations can help support your body's natural immunity and overall wellness.
              </p>
            </div>

            {/* How to Include These Herbs */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-emerald-950 mb-6 flex items-center gap-3">
                <Leaf className="h-6 w-6 text-emerald-700" />
                How to Include These Herbs in Your Daily Routine
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-[#fcfaf5] rounded-xl p-5 flex flex-col items-center text-center border border-amber-50">
                  <Coffee className="h-8 w-8 text-emerald-700 mb-3" />
                  <h4 className="font-black text-stone-800 mb-2">Herbal Tea</h4>
                  <p className="text-xs text-stone-600">Drink herbal teas made with tulsi, ginger or turmeric.</p>
                </div>
                <div className="bg-[#fcfaf5] rounded-xl p-5 flex flex-col items-center text-center border border-amber-50">
                  <Pill className="h-8 w-8 text-emerald-700 mb-3" />
                  <h4 className="font-black text-stone-800 mb-2">Supplements</h4>
                  <p className="text-xs text-stone-600">Use Ayurvedic supplements as recommended.</p>
                </div>
                <div className="bg-[#fcfaf5] rounded-xl p-5 flex flex-col items-center text-center border border-amber-50">
                  <Salad className="h-8 w-8 text-emerald-700 mb-3" />
                  <h4 className="font-black text-stone-800 mb-2">Healthy Diet</h4>
                  <p className="text-xs text-stone-600">Include amla, spices and other immunity boosters in meals.</p>
                </div>
                <div className="bg-[#fcfaf5] rounded-xl p-5 flex flex-col items-center text-center border border-amber-50">
                  <Activity className="h-8 w-8 text-emerald-700 mb-3" />
                  <h4 className="font-black text-stone-800 mb-2">Lifestyle</h4>
                  <p className="text-xs text-stone-600">Manage stress, get adequate sleep and stay active.</p>
                </div>
              </div>

              <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                Consistency is the key. A balanced lifestyle with the goodness of Ayurvedic herbs can help you build a naturally strong immune system.
              </p>
            </div>

            {/* Share */}
            <div className="border-t border-stone-100 pt-8 mt-12 flex items-center gap-4">
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

          {/* Right: Sidebar */}
          <div className="lg:w-[320px] shrink-0 flex flex-col gap-8">
            
            {/* Table of Contents */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100 sticky top-24">
              <h3 className="text-lg font-black text-emerald-950 mb-4">Table of Contents</h3>
              <ol className="flex flex-col gap-3 text-sm text-stone-600 font-medium">
                <li className="flex gap-3 hover:text-emerald-800 cursor-pointer transition-colors">
                  <span className="text-emerald-700">1.</span> Introduction
                </li>
                <li className="flex gap-3 hover:text-emerald-800 cursor-pointer transition-colors">
                  <span className="text-emerald-700">2.</span> Why Immunity Matters
                </li>
                <li className="flex gap-3 hover:text-emerald-800 cursor-pointer transition-colors">
                  <span className="text-emerald-700">3.</span> 5 Powerful Herbal Ingredients
                </li>
                <li className="flex gap-3 hover:text-emerald-800 cursor-pointer transition-colors">
                  <span className="text-emerald-700">4.</span> How These Herbs Work
                </li>
                <li className="flex gap-3 hover:text-emerald-800 cursor-pointer transition-colors">
                  <span className="text-emerald-700">5.</span> How to Include in Your Daily Routine
                </li>
                <li className="flex gap-3 hover:text-emerald-800 cursor-pointer transition-colors">
                  <span className="text-emerald-700">6.</span> Key Takeaways
                </li>
              </ol>
            </div>

            {/* Related Articles */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
              <h3 className="text-lg font-black text-emerald-950 mb-5">Related Articles</h3>
              
              <div className="flex flex-col gap-5">
                {/* Article 1 */}
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
                
                {/* Article 2 */}
                <Link to="#" className="flex gap-3 group">
                  <div className="w-20 h-16 rounded-xl overflow-hidden shrink-0">
                    <img 
                      src="/images/stress management the ayurvedic way.jpg" 
                      alt="Stress Management" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-xs font-bold text-stone-800 group-hover:text-emerald-800 transition-colors leading-snug">
                    Stress Management the Ayurvedic Way
                  </h4>
                </Link>

                {/* Article 3 */}
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
