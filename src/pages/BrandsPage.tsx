import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Award, ChevronRight } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function BrandsPage() {
  const { products } = useStore();

  const brands = useMemo(() => {
    const map = new Map<string, { count: number; image: string; systems: Set<string> }>();
    products.forEach(p => {
      const existing = map.get(p.brand);
      if (existing) {
        existing.count += 1;
        existing.systems.add(p.system);
      } else {
        map.set(p.brand, { count: 1, image: p.image, systems: new Set([p.system]) });
      }
    });
    return Array.from(map.entries()).map(([name, data]) => ({ name, ...data }));
  }, [products]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 space-y-8">
      <nav className="flex items-center gap-1.5 text-[11px] text-stone-500 font-medium">
        <Link to="/" className="hover:text-emerald-700">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-emerald-800 font-bold">Brands</span>
      </nav>

      <div className="text-center space-y-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 font-mono uppercase tracking-wider">
          <Award className="h-4 w-4" /> Registered Herbal Companies
        </span>
        <h1 className="text-3xl font-black text-emerald-950">Shop by Brand</h1>
        <p className="text-xs text-stone-600 max-w-md mx-auto font-light leading-normal">Every formulation on IGO Pharma is procured from verified, GMP-certified Ayurvedic, Siddha, and Herbal manufacturers.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {brands.map(brand => (
          <Link
            key={brand.name}
            to={`/shop?brand=${encodeURIComponent(brand.name)}`}
            className="group rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-emerald-600 transition-all"
          >
            <div className="h-36 w-full overflow-hidden bg-stone-50">
              <img src={brand.image} alt={brand.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
            </div>
            <div className="p-4 space-y-1.5">
              <h3 className="text-sm font-bold text-stone-900">{brand.name}</h3>
              <p className="text-[11px] text-stone-500">{brand.count} product{brand.count !== 1 ? "s" : ""} • {Array.from(brand.systems).join(", ")}</p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 group-hover:underline pt-1">
                View Products <ChevronRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
