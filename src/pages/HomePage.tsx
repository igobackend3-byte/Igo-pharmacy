import React from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, ShieldCheck, PhoneCall, ArrowRight, PlayCircle } from "lucide-react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { useStore } from "../context/StoreContext";
import { slugify } from "../utils/slug";
import animatedVideo from "../animated video1.mp4";

interface HomePageProps {
  onOpenAIWellness: () => void;
}

export default function HomePage({ onOpenAIWellness }: HomePageProps) {
  const navigate = useNavigate();
  const { products, wishlist, addToCart, toggleWishlist } = useStore();

  const concerns = [
    { name: "Kashayam & Rasayanam", cat: "Kashayam & Rasayanam", image: "https://images.unsplash.com/photo-1512207128881-1b3072c6f6e2?auto=format&fit=crop&q=80&w=350", desc: "Bolster core cellular immunity with wild turmeric & Giloy roots." },
    { name: "Thailam & Hair Oils", cat: "Thailam & Oils", image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&q=80&w=350", desc: "Reverse premature graying & scalp infections with cold-press Brahmi oils." },
    { name: "Skin Elixirs & Thailam", cat: "Thailam & Oils", image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=350", desc: "Enhance facial radiance with organic red saffron & rose extracts." },
    { name: "Churnam & Powders", cat: "Churnam & Powders", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=350", desc: "Ease chronic digestion issues with classical tri-herb blends." }
  ];

  return (
    <div className="space-y-16 pb-16">
      <Hero
        onExploreProducts={() => navigate("/shop")}
        onOpenConsultation={() => navigate("/consult")}
        onOpenAIWellness={onOpenAIWellness}
      />

      {/* Core Values / Standard Certification Highlights */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-stone-200 bg-white p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
            <ShieldCheck className="h-5.5 w-5.5" />
          </div>
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-stone-800">Standardized HPLC Assured</h3>
            <p className="text-xs text-stone-500 leading-normal mt-1 font-light">Every single formulation batch is analyzed via high performance liquid chromatography to guarantee pure active dermo-botanicals.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <Sparkles className="h-5.5 w-5.5" />
          </div>
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-stone-800">Acharya Canonical Recipes</h3>
            <p className="text-xs text-stone-500 leading-normal mt-1 font-light">Vetted and directly sourced based on Charaka Samhita & ancient Siddha Agastya palm leaf formulations for pristine potency.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
            <PhoneCall className="h-5.5 w-5.5" />
          </div>
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-stone-800">Integrated Doctor Board</h3>
            <p className="text-xs text-stone-500 leading-normal mt-1 font-light">Unrestricted access to our certified board of AYUSH physicians. Secure digital files tracking patient histories seamlessly.</p>
          </div>
        </div>
      </div>

      {/* Interactive Theme Selection / Therapeutic Concerns */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 space-y-6">
        <div className="text-center space-y-1.5">
          <span className="text-[10px] font-black uppercase tracking-widest text-amber-700 font-mono">Curated Collections</span>
          <h2 className="text-2xl font-black text-emerald-950">Targeted Holistic Care</h2>
          <p className="text-xs text-stone-500 max-w-md mx-auto leading-normal">Click a traditional concern to instantly browse customized organic dermo-remedies.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {concerns.map(concern => (
            <div
              key={concern.name}
              onClick={() => navigate(`/category/${slugify(concern.cat)}`)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] border cursor-pointer hover:shadow-md transition-all bg-stone-100"
            >
              <img src={concern.image} alt={concern.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col justify-end text-white space-y-1">
                <h3 className="text-sm font-bold">{concern.name}</h3>
                <p className="text-[10px] text-stone-300 leading-normal line-clamp-2 font-light">{concern.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bestselling Formulations Grid */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 space-y-6">
        <div className="flex justify-between items-end border-b pb-4">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 font-mono">Bestselling Formulations</span>
            <h2 className="text-2xl font-black text-emerald-950">Pure Traditional Apothecary</h2>
          </div>
          <button
            onClick={() => navigate("/shop")}
            className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer"
          >
            Browse Master Catalog <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map(prod => (
            <ProductCard
              key={prod.id}
              product={prod}
              onAddToCart={(p) => addToCart(p, 1, "once")}
              onAddToWishlist={toggleWishlist}
              isWishlisted={wishlist.some(item => item.id === prod.id)}
            />
          ))}
        </div>
      </div>

      {/* Premium Hair Care Subdivision */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 space-y-6">
        <div className="flex justify-between items-end border-b pb-4">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 font-mono">Premium Hair Care</span>
            <h2 className="text-2xl font-black text-emerald-950">Nourishing Botanical Hair Rituals</h2>
          </div>
          <button
            onClick={() => navigate("/shop?category=Hair+Care")}
            className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer"
          >
            Browse Hair Care <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.filter(p => p.category === "Hair Care").slice(0, 4).map(prod => (
            <ProductCard
              key={prod.id}
              product={prod}
              onAddToCart={(p) => addToCart(p, 1, "once")}
              onAddToWishlist={toggleWishlist}
              isWishlisted={wishlist.some(item => item.id === prod.id)}
            />
          ))}
        </div>
      </div>

      {/* Natural Skin Care Subdivision */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 space-y-6">
        <div className="flex justify-between items-end border-b pb-4">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 font-mono">Natural Skin Care</span>
            <h2 className="text-2xl font-black text-emerald-950">Pure Herbal Skin Rituals</h2>
          </div>
          <button
            onClick={() => navigate("/shop?category=Skin+Care")}
            className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer"
          >
            Browse Skin Care <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.filter(p => p.category === "Skin Care").slice(0, 4).map(prod => (
            <ProductCard
              key={prod.id}
              product={prod}
              onAddToCart={(p) => addToCart(p, 1, "once")}
              onAddToWishlist={toggleWishlist}
              isWishlisted={wishlist.some(item => item.id === prod.id)}
            />
          ))}
        </div>
      </div>

      {/* Highlight Panel: Interactive AI Ecosystem */}
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="rounded-3xl bg-gradient-to-tr from-emerald-950 to-emerald-850 text-white p-8 md:p-12 grid gap-8 md:grid-cols-2 items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 h-44 w-44 rounded-full bg-amber-400 opacity-10 blur-3xl" />

          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-950 font-mono">
              <Sparkles className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: "3s" }} /> IGO Pharma AI Diagnostics
            </span>
            <h2 className="text-3xl font-black leading-tight">Identify Your Humoral Balance</h2>
            <p className="text-xs text-stone-300 leading-relaxed font-light">
              Ayurveda structures healthy systemic life around Vadham (Vata), Pittham (Pitta), and Kabham (Kapha). Take our clinical, scripturally mapped quiz to diagnose systemic imbalances, receive food pacifiers, and get customized formulations.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => { navigate("/consult"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="rounded-xl bg-amber-400 text-emerald-950 px-6 py-3 text-xs font-bold hover:bg-amber-300 transition-colors shadow-md cursor-pointer"
              >
                Diagnose Prakriti Now
              </button>
              <button
                onClick={onOpenAIWellness}
                className="rounded-xl border border-stone-400/50 hover:bg-white/10 px-6 py-3 text-xs font-bold transition-all cursor-pointer"
              >
                Consult AI Sage
              </button>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] bg-emerald-900/40 relative">
            <video src={animatedVideo} autoPlay muted loop playsInline className="h-full w-full object-cover mix-blend-overlay" />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 space-y-6 text-center">
        <span className="text-[10px] font-bold uppercase tracking-widest text-amber-700 font-mono">Patient Testimonials</span>
        <h2 className="text-2xl font-black text-stone-900">Vetted By Global Practitioners</h2>

        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { name: "Dr. Evelyn Ross", title: "Holistic Physician, Chennai", comment: "The standard quality HPLC certificates and heavy metal free guarantees makes IGO Pharma my primary recommendation for Ashwagandha and raw botanicals." },
            { name: "Prof. S. Ranganathan", title: "Siddha Scholar, Tamil Nadu", comment: "Very impressed by their pristine preservation of traditional Agastya leaf recipes. Their cold-pressed hair tonics are incredibly potent." },
            { name: "Miriam Al-Falasi", title: "Spa Director, Dubai", comment: "The red saffron Kumkumadi face elixir yields spectacular derm-radiance. Our luxury guests adore the glassmorphic bottle branding." }
          ].map((test, i) => (
            <div key={i} className="rounded-2xl border border-stone-200 bg-white p-5 text-left space-y-3 shadow-sm">
              <div className="flex items-center text-amber-400 text-xs">★★★★★</div>
              <p className="text-xs text-stone-600 leading-relaxed font-light italic">"{test.comment}"</p>
              <div>
                <h4 className="text-xs font-bold text-stone-900">{test.name}</h4>
                <span className="text-[10px] text-stone-400 font-medium">{test.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
