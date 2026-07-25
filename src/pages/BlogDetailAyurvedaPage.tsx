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
  Sun,
  Moon,
  Coffee,
  Activity
} from "lucide-react";

export default function BlogDetailAyurvedaPage() {
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
          <span className="text-emerald-800 font-bold">The Power of Ayurveda in Daily Wellness</span>
        </nav>
      </div>

      {/* ── Hero Section ──────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 py-8">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left: Text */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-emerald-950 leading-tight mb-6">
              The Power of <br className="hidden md:block" />
              Ayurveda in Daily <br className="hidden md:block" />
              Wellness
            </h1>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Discover how ancient Ayurvedic practices can transform your everyday health and bring natural balance to your life.
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs font-bold text-stone-600">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-emerald-800" />
                20 May, 2024
              </div>
              <div className="w-1 h-1 rounded-full bg-stone-300" />
              <div className="flex items-center gap-1.5">
                <Leaf className="h-4 w-4 text-emerald-800" />
                Ayurveda
              </div>
              <div className="w-1 h-1 rounded-full bg-stone-300" />
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-emerald-800" />
                5 min read
              </div>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[400px]">
              <img
                src="/images/the power of ayurveda in daily wellness.jpg"
                alt="The Power of Ayurveda in Daily Wellness"
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
            
            {/* Section 1 */}
            <div className="mb-12" id="section-1">
              <h2 className="text-2xl font-black text-emerald-950 mb-4 flex items-center gap-3">
                <Leaf className="h-6 w-6 text-emerald-700" />
                Ayurveda: A Way of Life
              </h2>
              <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                Ayurveda is more than just a system of medicine — it is a way of living in harmony with nature. By following simple daily wellness practices, we can support our body, mind, and overall well-being naturally.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12" id="section-2">
              <h2 className="text-2xl font-black text-emerald-950 mb-6 flex items-center gap-3">
                <Leaf className="h-6 w-6 text-emerald-700" />
                Ayurveda in Everyday Life
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 rounded-full bg-[#f4f7f2] flex items-center justify-center mb-3">
                    <Coffee className="h-7 w-7 text-emerald-700" />
                  </div>
                  <p className="text-xs font-bold text-stone-800">Start your day with warm herbal water</p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 rounded-full bg-[#f4f7f2] flex items-center justify-center mb-3">
                    <Leaf className="h-7 w-7 text-emerald-700" />
                  </div>
                  <p className="text-xs font-bold text-stone-800">Include fresh and natural ingredients in your diet</p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 rounded-full bg-[#f4f7f2] flex items-center justify-center mb-3">
                    <Moon className="h-7 w-7 text-emerald-700" />
                  </div>
                  <p className="text-xs font-bold text-stone-800">Follow a regular sleep routine</p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 rounded-full bg-[#f4f7f2] flex items-center justify-center mb-3">
                    <Activity className="h-7 w-7 text-emerald-700" />
                  </div>
                  <p className="text-xs font-bold text-stone-800">Practice yoga and meditation</p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12" id="section-3">
              <h2 className="text-2xl font-black text-emerald-950 mb-4 flex items-center gap-3">
                <Leaf className="h-6 w-6 text-emerald-700" />
                Why Choose Ayurvedic Wellness?
              </h2>
              <p className="text-stone-600 leading-relaxed text-sm md:text-base mb-8">
                Ayurvedic wellness focuses on balance rather than temporary solutions. Natural herbs and traditional practices can become part of a healthy lifestyle when used mindfully and consistently.
              </p>
              
              {/* Quote Box */}
              <div className="bg-[#f5f7f2] rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 opacity-10">
                  <Leaf className="h-32 w-32 text-emerald-900" />
                </div>
                <div className="relative z-10 flex gap-4">
                  <span className="text-4xl text-emerald-300 font-serif leading-none">“</span>
                  <div>
                    <p className="text-stone-800 font-bold text-base md:text-lg italic mb-4 leading-relaxed">
                      When diet is wrong, medicine is of no use. <br />
                      When diet is correct, medicine is of no need.
                    </p>
                    <p className="text-sm font-bold text-emerald-900 uppercase tracking-wider">
                      — Ayurvedic Wisdom
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12" id="section-4">
              <h2 className="text-2xl font-black text-emerald-950 mb-6 flex items-center gap-3">
                <Leaf className="h-6 w-6 text-emerald-700" />
                Simple Ayurvedic Wellness Routine
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-[#fcfaf5] rounded-xl p-5 flex flex-col items-center text-center border border-amber-100">
                  <Sun className="h-8 w-8 text-amber-500 mb-3" />
                  <h4 className="font-black text-stone-800 mb-2">Morning</h4>
                  <p className="text-xs text-stone-600">Warm water +<br/>mindful breathing</p>
                </div>
                <div className="bg-[#fcfaf5] rounded-xl p-5 flex flex-col items-center text-center border border-amber-100">
                  <Sun className="h-8 w-8 text-amber-600 mb-3" />
                  <h4 className="font-black text-stone-800 mb-2">Afternoon</h4>
                  <p className="text-xs text-stone-600">Nutritious<br/>natural food</p>
                </div>
                <div className="bg-[#fcfaf5] rounded-xl p-5 flex flex-col items-center text-center border border-amber-100">
                  <Sun className="h-8 w-8 text-orange-500 mb-3" />
                  <h4 className="font-black text-stone-800 mb-2">Evening</h4>
                  <p className="text-xs text-stone-600">Light activity<br/>or yoga</p>
                </div>
                <div className="bg-[#fcfaf5] rounded-xl p-5 flex flex-col items-center text-center border border-amber-100">
                  <Moon className="h-8 w-8 text-emerald-700 mb-3" />
                  <h4 className="font-black text-stone-800 mb-2">Night</h4>
                  <p className="text-xs text-stone-600">Relaxation and<br/>quality sleep</p>
                </div>
              </div>

              <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                Small daily habits can create meaningful changes in your overall wellness. Embrace the power of Ayurveda and live a healthier, more balanced life every day.
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
                  <span className="text-emerald-700">1.</span> Ayurveda: A Way of Life
                </li>
                <li className="flex gap-3 hover:text-emerald-800 cursor-pointer transition-colors">
                  <span className="text-emerald-700">2.</span> Ayurveda in Everyday Life
                </li>
                <li className="flex gap-3 hover:text-emerald-800 cursor-pointer transition-colors">
                  <span className="text-emerald-700">3.</span> Why Choose Ayurvedic Wellness?
                </li>
                <li className="flex gap-3 hover:text-emerald-800 cursor-pointer transition-colors">
                  <span className="text-emerald-700">4.</span> Simple Ayurvedic Wellness Routine
                </li>
                <li className="flex gap-3 hover:text-emerald-800 cursor-pointer transition-colors">
                  <span className="text-emerald-700">5.</span> Key Takeaways
                </li>
              </ol>
            </div>

            {/* Related Articles */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
              <h3 className="text-lg font-black text-emerald-950 mb-5">Related Articles</h3>
              
              <div className="flex flex-col gap-5">
                {/* Article 1 */}
                <Link to="#" className="flex gap-3 group">
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
