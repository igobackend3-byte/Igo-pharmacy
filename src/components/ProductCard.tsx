import React from "react";
import { Link } from "react-router-dom";
import { Star, ShieldCheck, Heart, ShoppingCart } from "lucide-react";
import { Product } from "../types";

interface ProductCardProps {
  key?: React.Key;
  product: Product;
  onAddToCart: (product: Product) => void;
  onAddToWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export default function ProductCard({
  product,
  onAddToCart,
  onAddToWishlist,
  isWishlisted
}: ProductCardProps) {
  // Determine special badge
  let badgeText = "";
  let badgeColor = "";

  if (product.isBestSeller) {
    badgeText = "Best Seller";
    badgeColor = "bg-amber-400 text-emerald-950 shadow-md";
  } else if (product.isDoctorRecommended) {
    badgeText = "Doctor Recommended";
    badgeColor = "bg-emerald-700 text-white shadow-md";
  } else if (product.isSeasonal) {
    badgeText = "Seasonal Wellness";
    badgeColor = "bg-blue-600 text-white shadow-md";
  } else if (product.isNewArrival) {
    badgeText = "New Arrival";
    badgeColor = "bg-purple-600 text-white shadow-md";
  }

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-stone-100 bg-white p-3 shadow-sm hover:shadow-md transition-all">
      {/* Wishlist toggle */}
      <button
        onClick={() => onAddToWishlist(product)}
        title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        className="absolute top-5 right-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-stone-500 shadow-sm hover:bg-white hover:text-red-500 transition-colors cursor-pointer"
      >
        <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500 animate-pulse' : ''}`} />
      </button>

      {/* Product Image */}
      <Link
        to={`/product/${product.id}`}
        className="relative overflow-hidden rounded-xl bg-stone-50 cursor-pointer h-48 md:h-52 w-full flex items-center justify-center p-4"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {badgeText && (
          <span className={`absolute bottom-3 left-3 rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sm ${badgeColor}`}>
            {badgeText}
          </span>
        )}
      </Link>

      {/* Brand & Systems */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-widest text-amber-700 font-mono">
          {product.system}
        </span>
        <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-700 font-mono">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
          GMP Certified
        </span>
      </div>

      {/* Title */}
      <Link
        to={`/product/${product.id}`}
        className="mt-1 flex-1 text-sm font-bold text-stone-800 hover:text-emerald-700 transition-colors cursor-pointer line-clamp-2 leading-snug"
      >
        {product.name}
      </Link>

      {/* Rating & Reviews */}
      <div className="mt-2.5 flex items-center gap-1.5 text-xs text-stone-500">
        <div className="flex items-center text-amber-400">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          <span className="ml-1 font-bold text-stone-800 font-mono">{product.rating}</span>
        </div>
        <span>•</span>
        <span className="font-medium">({product.reviewsCount} reviews)</span>
      </div>

      {/* Price & Action button */}
      <div className="mt-4 flex items-center justify-between border-t border-stone-50 pt-3">
        <div className="flex items-baseline gap-1.5">
          <span className="text-base font-bold text-emerald-800 font-mono">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-stone-400 line-through font-mono">
              ₹{product.originalPrice}
            </span>
          )}
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-800 text-white hover:bg-emerald-950 transition-colors cursor-pointer shadow-sm"
          title="Add to cart"
        >
          <ShoppingCart className="h-4.5 w-4.5" />
        </button>
      </div>
    </div>
  );
}
