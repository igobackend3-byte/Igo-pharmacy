import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, ChevronRight } from "lucide-react";
import { useStore } from "../context/StoreContext";
import ProductCard from "../components/ProductCard";

export default function WishlistPage() {
  const navigate = useNavigate();
  const { wishlist, addToCart, toggleWishlist } = useStore();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 space-y-6">
      <nav className="flex items-center gap-1.5 text-[11px] text-stone-500 font-medium">
        <Link to="/" className="hover:text-emerald-700">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-emerald-800 font-bold">Your Wishlist</span>
      </nav>

      <h1 className="text-2xl md:text-3xl font-black text-emerald-950">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="rounded-2xl border border-stone-200 bg-white p-16 text-center space-y-4">
          <Heart className="h-14 w-14 mx-auto text-stone-200" />
          <div>
            <h2 className="text-base font-bold text-stone-700">Your wishlist is empty.</h2>
            <p className="text-xs text-stone-400 mt-1">Tap the heart icon on any product to save it here.</p>
          </div>
          <button
            onClick={() => navigate("/shop")}
            className="rounded-xl bg-emerald-800 text-white px-6 py-2.5 text-xs font-bold hover:bg-emerald-950 transition-colors cursor-pointer"
          >
            Browse Products
          </button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {wishlist.map(prod => (
            <ProductCard
              key={prod.id}
              product={prod}
              onAddToCart={(p) => addToCart(p, 1, "once")}
              onAddToWishlist={toggleWishlist}
              isWishlisted={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}
