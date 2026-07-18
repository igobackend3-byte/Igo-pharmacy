import React, { useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ChevronRight, Leaf } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { useStore } from "../context/StoreContext";
import { slugify, unslugify } from "../utils/slug";

const CATEGORY_META: Record<string, { image: string; description: string }> = {
  "Kashayam & Rasayanam": {
    image: "https://images.unsplash.com/photo-1512207128881-1b3072c6f6e2?auto=format&fit=crop&q=80&w=1200",
    description: "Classical Kashayam decoctions and Rasayanam jams built on Amla, Giloy, Saffron, and Brahmi — formulated to strengthen immunity, cognition, and cellular resilience."
  },
  "Churnam & Powders": {
    image: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?auto=format&fit=crop&q=80&w=1200",
    description: "Fine traditional Siddha and Ayurvedic herbal powders (Churnam) for digestion, detox, and seasonal viral resilience — prepared from certified raw botanicals."
  },
  "Thailam & Oils": {
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=1200",
    description: "Medicated Thailam and cold-pressed therapeutic oils for hair, scalp, and skin — infused with saffron, sandalwood, and licorice for restorative radiance."
  },
  "Traditional Foods": {
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=1200",
    description: "Raw, unprocessed traditional foods including wild forest honey — nature's carriers (Anupana) for daily wellness and digestion support."
  },
  "Tablets & Capsules": {
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=1200",
    description: "Convenient, clinically standardized tablet and capsule formulations delivering precise, bioavailable doses of adaptogenic herbs like KSM-66 Ashwagandha."
  },
  "Personal & Skin Care": {
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=1200",
    description: "Neem, turmeric, and herbal personal care — gentle traditional formulations for daily skin and body wellness."
  }
};

const DEFAULT_META = {
  image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200",
  description: "Certified traditional formulations, vetted by AYUSH physicians and lab-tested for absolute purity."
};

export default function CategoryPage() {
  const { slug } = useParams();
  const { products, wishlist, addToCart, toggleWishlist } = useStore();

  const categories = useMemo(() => Array.from(new Set(products.map(p => p.category))), [products]);
  const categoryName = slug ? unslugify(slug, categories) : undefined;

  if (!categoryName) {
    return <Navigate to="/shop" replace />;
  }

  const meta = CATEGORY_META[categoryName] || DEFAULT_META;
  const categoryProducts = products.filter(p => p.category === categoryName);

  return (
    <div className="pb-16">
      {/* Banner */}
      <div className="relative h-56 md:h-72 w-full overflow-hidden">
        <img src={meta.image} alt={categoryName} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/50 to-emerald-950/20" />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="mx-auto max-w-7xl w-full px-4 md:px-8 pb-8 space-y-2">
            <nav className="flex items-center gap-1.5 text-[11px] text-stone-200 font-medium">
              <Link to="/" className="hover:text-amber-300">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link to="/shop" className="hover:text-amber-300">Shop</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-amber-300">{categoryName}</span>
            </nav>
            <h1 className="text-2xl md:text-4xl font-black text-white flex items-center gap-2">
              <Leaf className="h-7 w-7 text-amber-300" /> {categoryName}
            </h1>
            <p className="text-xs md:text-sm text-stone-200 max-w-xl font-light leading-relaxed">{meta.description}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8 pt-8 space-y-6">
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <Link
              key={cat}
              to={`/category/${slugify(cat)}`}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${cat === categoryName ? 'bg-emerald-800 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
            >
              {cat}
            </Link>
          ))}
        </div>

        <p className="text-xs text-stone-500 font-semibold">{categoryProducts.length} products in this collection</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categoryProducts.map(prod => (
            <ProductCard
              key={prod.id}
              product={prod}
              onAddToCart={(p) => addToCart(p, 1, "once")}
              onAddToWishlist={toggleWishlist}
              isWishlisted={wishlist.some(item => item.id === prod.id)}
            />
          ))}
          {categoryProducts.length === 0 && (
            <p className="col-span-full text-center py-12 text-sm text-stone-500 italic">No products currently listed in this collection.</p>
          )}
        </div>
      </div>
    </div>
  );
}
