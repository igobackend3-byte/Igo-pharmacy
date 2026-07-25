import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Leaf, BookOpen, FlaskConical, HeartPulse, Lightbulb,
  HelpCircle, ShieldCheck, ArrowRight, Users, Star, CheckCircle
} from "lucide-react";

/* ─── Blog Data ─────────────────────────────────────────────── */
const BLOGS = [
  {
    id: 1,
    day: "20",
    month: "May",
    title: "The Power of Ayurveda in Daily Wellness",
    desc: "Discover how ancient Ayurvedic practices can transform your everyday health and bring natural balance to your life.",
    image: "/images/the power of ayurveda in daily wellness.jpg",
    tag: "Ayurveda",
  },
  {
    id: 2,
    day: "18",
    month: "May",
    title: "5 Herbal Ingredients That Boost Immunity Naturally",
    desc: "Explore the top Ayurvedic herbs known to strengthen immunity and fight illness the natural way.",
    image: "/images/5herbal omgredients that boost immunity naturally.jpg",
    tag: "Immunity",
  },
  {
    id: 3,
    day: "15",
    month: "May",
    title: "Stress Management the Ayurvedic Way",
    desc: "Simple and natural ways Ayurveda helps in balancing stress and improving mental well-being day by day.",
    image: "/images/stress management the ayurvedic way.jpg",
    tag: "Wellness",
  },
  {
    id: 4,
    day: "10",
    month: "May",
    title: "Detox Your Body with Ayurvedic Detoxifiers",
    desc: "Learn how Ayurvedic detox herbs help cleanse your body and improve energy, digestion, and skin health.",
    image: "/images/detox your bosy with ayurvedic detoxifiers.webp",
    tag: "Detox",
  },
];

/* ─── Knowledge Center Cards ─────────────────────────────────── */
const KNOWLEDGE_CARDS = [
  {
    id: "ayurveda-basics",
    icon: Leaf,
    title: "Ayurveda Basics",
    desc: "Understand the principles and philosophy behind Ayurveda.",
  },
  {
    id: "ingredients-az",
    icon: FlaskConical,
    title: "Ingredients A–Z",
    desc: "Know about the powerful herbs and ingredients we use.",
  },
  {
    id: "health-conditions",
    icon: HeartPulse,
    title: "Health Conditions",
    desc: "Ayurvedic insights on common health conditions.",
  },
  {
    id: "wellness-tips",
    icon: Lightbulb,
    title: "Wellness Tips",
    desc: "Daily tips for a balanced lifestyle and natural well-being.",
  },
  {
    id: "faqs",
    icon: HelpCircle,
    title: "FAQs",
    desc: "Find answers to common questions about Ayurveda.",
  },
  {
    id: "safety-quality",
    icon: ShieldCheck,
    title: "Safety & Quality",
    desc: "Learn about our quality standards and safe practices.",
  },
];

/* ─── Tag colour map ─────────────────────────────────────────── */
const TAG_COLORS: Record<string, string> = {
  Ayurveda: "bg-emerald-700",
  Immunity:  "bg-amber-600",
  Wellness:  "bg-teal-700",
  Detox:     "bg-green-700",
};

export default function KnowledgePage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const navigate = useNavigate();

  const visibleBlogs = activeTag
    ? BLOGS.filter((b) => b.tag === activeTag)
    : BLOGS;

  return (
    <div className="bg-[#f8f6f1] min-h-screen pb-16">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-emerald-950" style={{ minHeight: 320 }}>
        <img
          src="/images/blog-knowledge-hero.jpg"
          alt="Blog & Knowledge Center"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center center" }}
        />
        {/* subtle left-side overlay keeps text readable; image stays vivid on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
          <span className="inline-block mb-3 rounded-full bg-amber-400/20 border border-amber-400/40 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-amber-300 font-mono">
            IGO Pharma Knowledge Hub
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-lg">
            Blog &amp; Knowledge Center
          </h1>
          <p className="mt-3 text-sm md:text-base text-stone-200 font-light max-w-md leading-relaxed">
            Insights, Tips &amp; Trusted Ayurvedic Wisdom<br className="hidden md:block" />
            for a Healthier You, Naturally.
          </p>
        </div>
      </section>

      {/* ── Our Blogs ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 mt-12">

        {/* Section header */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-black text-emerald-950">Our Blogs</h2>
            <p className="text-xs text-stone-500 mt-1 font-medium">
              Fresh Ayurvedic insights, wellness guides &amp; health tips
            </p>
          </div>
          <button
            onClick={() => {}}
            className="hidden sm:flex items-center gap-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-950 text-white text-xs font-bold px-4 py-2.5 transition-colors cursor-pointer"
          >
            View All Blogs <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Tag filter pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {["All", "Ayurveda", "Immunity", "Wellness", "Detox"].map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag === "All" ? null : tag)}
              className={`rounded-full px-3 py-1 text-[11px] font-bold transition-all cursor-pointer border ${
                (tag === "All" && activeTag === null) || activeTag === tag
                  ? "bg-emerald-800 text-white border-emerald-800"
                  : "bg-white text-stone-600 border-stone-200 hover:border-emerald-400 hover:text-emerald-800"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Blog card grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visibleBlogs.map((blog) => (
            <article
              key={blog.id}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image with date badge */}
              <div className="relative overflow-hidden" style={{ paddingBottom: "60%" }}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Date badge */}
                <div className="absolute top-3 left-3 bg-emerald-800 text-white rounded-md px-2.5 py-1.5 text-center leading-none shadow-md">
                  <div className="text-base font-black">{blog.day}</div>
                  <div className="text-[9px] font-bold uppercase tracking-wider">{blog.month}</div>
                </div>
                {/* Tag */}
                <span className={`absolute top-3 right-3 ${TAG_COLORS[blog.tag] ?? "bg-emerald-700"} text-white text-[9px] font-black uppercase tracking-wider px-2 py-1 rounded-md`}>
                  {blog.tag}
                </span>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-4">
                <h3 className="text-sm font-black text-stone-900 leading-snug mb-2 group-hover:text-emerald-800 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed font-light flex-1">
                  {blog.desc}
                </p>
                <button
                  onClick={() => {
                    if (blog.id === 1) {
                      navigate('/blog/power-of-ayurveda');
                    } else if (blog.id === 2) {
                      navigate('/blog/immunity-boosters');
                    } else if (blog.id === 3) {
                      navigate('/blog/stress-management');
                    } else if (blog.id === 4) {
                      navigate('/blog/detox-ayurveda');
                    }
                  }}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors cursor-pointer group/btn"
                >
                  Read More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile view-all button */}
        <div className="mt-6 flex sm:hidden justify-center">
          <button
            onClick={() => {}}
            className="flex items-center gap-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-950 text-white text-xs font-bold px-5 py-2.5 transition-colors cursor-pointer"
          >
            View All Blogs <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </section>

      {/* ── Knowledge Center ──────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 mt-16">
        <div className="mb-8">
          <h2 className="text-2xl font-black text-emerald-950">Knowledge Center</h2>
          <p className="text-xs text-stone-500 mt-1 font-medium">
            Your go-to hub for trusted health information
          </p>
        </div>

        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {KNOWLEDGE_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-5 flex flex-col items-center text-center cursor-pointer"
                onClick={() => {}}
              >
                {/* Icon circle */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 border border-emerald-100 mb-3 group-hover:bg-emerald-100 transition-colors">
                  <Icon className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xs font-black text-stone-900 mb-1.5 leading-tight">
                  {card.title}
                </h3>
                <p className="text-[10px] text-stone-500 leading-relaxed font-light flex-1">
                  {card.desc}
                </p>

              </div>
            );
          })}
        </div>
      </section>

      {/* ── Trust Footer Banner ───────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 mt-14">
        <div className="rounded-2xl bg-[#f0ede6] border border-stone-200 px-6 py-7 flex flex-col md:flex-row items-center gap-6 md:gap-0 md:justify-between">

          {/* Quote */}
          <div className="flex items-start gap-3 md:w-72">
            <Leaf className="h-8 w-8 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <p className="text-[10px] text-stone-400 font-bold uppercase tracking-wider mb-1">"</p>
              <p className="text-sm font-black text-stone-800 leading-snug">
                Ayurveda is not just about treating disease,<br />
                it's about nurturing life.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block h-12 w-px bg-stone-300 mx-8" />

          {/* Trust stats */}
          <div className="flex flex-wrap items-center gap-6 md:gap-10 justify-center">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100">
                <CheckCircle className="h-5 w-5 text-emerald-700" />
              </div>
              <div>
                <p className="text-xs font-black text-stone-800">Trusted by Thousands</p>
                <p className="text-[10px] text-stone-500 font-light">Happy customers across the globe.</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100">
                <Leaf className="h-5 w-5 text-emerald-700" />
              </div>
              <div>
                <p className="text-xs font-black text-stone-800">100% Natural</p>
                <p className="text-[10px] text-stone-500 font-light">Pure, safe and effective Ayurvedic solutions.</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100">
                <Users className="h-5 w-5 text-emerald-700" />
              </div>
              <div>
                <p className="text-xs font-black text-stone-800">Expert Guidance</p>
                <p className="text-[10px] text-stone-500 font-light">Backed by experienced Ayurvedic practitioners.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
