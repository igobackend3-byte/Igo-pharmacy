import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useStore } from "../../context/StoreContext";
import ProductCard from "../../components/ProductCard";

export default function WishlistTab() {
  const { wishlist, addToCart, toggleWishlist } = useStore();

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-6 animate-fade-in">
      <div className="border-b border-stone-100 pb-4">
        <h3 className="text-lg font-black text-stone-900">Your Wishlist</h3>
        <p className="text-xs text-stone-500">Bookmarked formulations you're planning to purchase.</p>
      </div>

      {wishlist.length === 0 ? (
        <div className="text-center py-12 space-y-3">
          <Heart className="h-10 w-10 mx-auto text-stone-200" />
          <p className="text-xs text-stone-500 italic">Your wishlist is empty. Tap the heart icon on any product to save it here.</p>
          <Link to="/shop" className="inline-block rounded-xl bg-emerald-800 text-white px-5 py-2 text-xs font-bold hover:bg-emerald-950">Browse Products</Link>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
