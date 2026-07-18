import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useStore } from "../context/StoreContext";

export default function ShopPage() {
  const { products, wishlist, addToCart, toggleWishlist } = useStore();
  const [searchParams, setSearchParams] = useSearchParams();

  const activeCategory = searchParams.get("category") || "All";
  const activeConcern = searchParams.get("concern") || "All";
  const activeBrand = searchParams.get("brand") || "All";
  const searchTerm = searchParams.get("search") || "";
  const [selectedSystemFilter, setSelectedSystemFilter] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("featured");

  const categories = useMemo(() => ["All", ...Array.from(new Set(products.map(p => p.category)))], [products]);
  const concerns = useMemo(() => ["All", ...Array.from(new Set(products.map(p => p.healthConcern)))], [products]);
  const brands = useMemo(() => ["All", ...Array.from(new Set(products.map(p => p.brand)))], [products]);

  const filteredProducts = useMemo(() => {
    let list = products.filter(p => {
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      const matchesConcern = activeConcern === "All" || p.healthConcern === activeConcern;
      const matchesBrand = activeBrand === "All" || p.brand === activeBrand;
      const matchesSystem = selectedSystemFilter === "All" || p.system === selectedSystemFilter;
      const matchesSearch = !searchTerm ||
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase())) ||
        p.healthConcern.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesConcern && matchesBrand && matchesSystem && matchesSearch;
    });

    if (sortBy === "price-low") list = [...list].sort((a, b) => a.price - b.price);
    else if (sortBy === "price-high") list = [...list].sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") list = [...list].sort((a, b) => b.rating - a.rating);

    return list;
  }, [products, activeCategory, activeConcern, activeBrand, searchTerm, selectedSystemFilter, sortBy]);

  const updateParam = (key: string, value: string) => {
    const next = new URLSearchParams(searchParams);
    if (value === "All") next.delete(key);
    else next.set(key, value);
    setSearchParams(next);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-black text-emerald-950">Master Botanical Apothecary</h1>
        <p className="text-xs text-stone-600 max-w-md mx-auto font-light leading-normal">Pristine certified traditional formulation. Free from heavy metals, chemical colors, or synthetic preservatives.</p>
      </div>

      {/* Filters bar */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-white border rounded-2xl p-4 gap-4 shadow-sm">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">System:</span>
          {["All", "Ayurveda", "Siddha", "Herbal"].map(sys => (
            <button
              key={sys}
              onClick={() => setSelectedSystemFilter(sys)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${selectedSystemFilter === sys ? 'bg-emerald-800 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
            >
              {sys}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Category:</span>
            <select
              value={activeCategory}
              onChange={(e) => updateParam("category", e.target.value)}
              className="rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-xs outline-none focus:border-emerald-700 font-bold text-stone-700"
            >
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Concern:</span>
            <select
              value={activeConcern}
              onChange={(e) => updateParam("concern", e.target.value)}
              className="rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-xs outline-none focus:border-emerald-700 font-bold text-stone-700"
            >
              {concerns.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Brand:</span>
            <select
              value={activeBrand}
              onChange={(e) => updateParam("brand", e.target.value)}
              className="rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-xs outline-none focus:border-emerald-700 font-bold text-stone-700"
            >
              {brands.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-xs outline-none focus:border-emerald-700 font-bold text-stone-700"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      <p className="text-xs text-stone-500 font-semibold">{filteredProducts.length} products found</p>

      {/* Shop Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map(prod => (
          <ProductCard
            key={prod.id}
            product={prod}
            onAddToCart={(p) => addToCart(p, 1, "once")}
            onAddToWishlist={toggleWishlist}
            isWishlisted={wishlist.some(item => item.id === prod.id)}
          />
        ))}
        {filteredProducts.length === 0 && (
          <p className="col-span-full text-center py-12 text-sm text-stone-500 italic">No matching traditional formulations found.</p>
        )}
      </div>
    </div>
  );
}
