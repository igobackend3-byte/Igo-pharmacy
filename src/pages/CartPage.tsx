import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Trash2, ShoppingBag, ShieldCheck, ChevronRight, Minus, Plus, Tag } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function CartPage() {
  const navigate = useNavigate();
  const {
    cart, updateCartQuantity, removeFromCart, applyCoupon, couponCode,
    appliedDiscount, cartSubtotal, shippingCost, discountAmount, cartTotal
  } = useStore();

  const [couponInput, setCouponInput] = useState("");
  const [couponMessage, setCouponMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const result = applyCoupon(couponInput);
    setCouponMessage({ type: result.success ? "success" : "error", text: result.message });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 space-y-6">
      <nav className="flex items-center gap-1.5 text-[11px] text-stone-500 font-medium">
        <Link to="/" className="hover:text-emerald-700">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-emerald-800 font-bold">Shopping Basket</span>
      </nav>

      <h1 className="text-2xl md:text-3xl font-black text-emerald-950">Your Shopping Basket</h1>

      {cart.length === 0 ? (
        <div className="rounded-2xl border border-stone-200 bg-white p-16 text-center space-y-4">
          <ShoppingBag className="h-14 w-14 mx-auto text-stone-200" />
          <div>
            <h2 className="text-base font-bold text-stone-700">Your traditional basket is empty.</h2>
            <p className="text-xs text-stone-400 mt-1">Explore our master apothecary catalog to add certified formulations.</p>
          </div>
          <button
            onClick={() => navigate("/shop")}
            className="rounded-xl bg-emerald-800 text-white px-6 py-2.5 text-xs font-bold hover:bg-emerald-950 transition-colors cursor-pointer"
          >
            Browse Products
          </button>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-3 items-start">
          {/* Items list */}
          <div className="lg:col-span-2 rounded-2xl border border-stone-200 bg-white divide-y divide-stone-100 shadow-sm">
            {cart.map((item, idx) => (
              <div key={idx} className="flex gap-4 p-5">
                <Link to={`/product/${item.product.id}`}>
                  <img src={item.product.image} alt={item.product.name} className="h-20 w-20 rounded-xl object-cover border" referrerPolicy="no-referrer" />
                </Link>
                <div className="flex-1 min-w-0 space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Link to={`/product/${item.product.id}`} className="text-sm font-bold text-stone-850 hover:text-emerald-700 transition-colors line-clamp-2">
                        {item.product.name}
                      </Link>
                      <p className="text-[11px] text-stone-400 font-medium mt-0.5">{item.product.brand} • {item.product.system}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id, item.subscriptionType)}
                      className="text-stone-400 hover:text-red-500 cursor-pointer shrink-0"
                      title="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <span className="inline-block rounded bg-stone-100 px-2 py-0.5 text-[10px] font-bold text-stone-500 uppercase">
                    {item.subscriptionType === "once" ? "One-time purchase" : `Auto-refill: ${item.subscriptionType}`}
                  </span>

                  <div className="flex items-center justify-between pt-1.5">
                    <div className="flex h-8 items-center rounded-lg border border-stone-300 bg-white">
                      <button
                        onClick={() => updateCartQuantity(item.product.id, item.subscriptionType, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="px-2 h-full flex items-center text-stone-600 hover:text-stone-900 disabled:opacity-30 cursor-pointer"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="px-3 text-xs font-bold text-stone-800 font-mono">{item.quantity}</span>
                      <button
                        onClick={() => updateCartQuantity(item.product.id, item.subscriptionType, item.quantity + 1)}
                        className="px-2 h-full flex items-center text-stone-600 hover:text-stone-900 cursor-pointer"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <span className="text-sm font-black text-emerald-800 font-mono">₹{item.product.price * item.quantity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-5 lg:sticky lg:top-24">
            <h3 className="text-sm font-black text-stone-900 uppercase tracking-wider border-b pb-3">Order Summary</h3>

            <form onSubmit={handleApplyCoupon} className="space-y-2">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
                  <input
                    type="text"
                    placeholder="Coupon code (try VEDIC15)"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    className="w-full rounded-xl border border-stone-300 bg-white pl-9 pr-3 py-2 text-xs outline-none focus:border-emerald-700"
                  />
                </div>
                <button type="submit" className="rounded-xl bg-emerald-800 text-white px-4 py-2 text-xs font-bold hover:bg-emerald-950">Apply</button>
              </div>
              {couponMessage && (
                <p className={`text-[11px] font-semibold ${couponMessage.type === "success" ? "text-emerald-700" : "text-red-600"}`}>
                  {couponMessage.text}
                </p>
              )}
            </form>

            <div className="space-y-2 text-xs text-stone-600 font-semibold border-t border-stone-100 pt-4">
              <div className="flex justify-between">
                <span>Basket Subtotal:</span>
                <span className="font-mono text-stone-800">₹{cartSubtotal}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="flex justify-between text-emerald-800">
                  <span>Promo Discount ({appliedDiscount}% - {couponCode}):</span>
                  <span className="font-mono">-₹{discountAmount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span className="font-mono text-stone-800">{shippingCost === 0 ? 'FREE' : `₹${shippingCost}`}</span>
              </div>
              <div className="flex justify-between text-base font-black text-stone-900 border-t pt-3 mt-2">
                <span>Estimated Total:</span>
                <span className="font-mono text-emerald-950">₹{cartTotal}</span>
              </div>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full rounded-xl bg-emerald-800 text-white py-3 text-xs font-bold hover:bg-emerald-950 shadow-md cursor-pointer transition-colors"
            >
              Proceed to Checkout
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-stone-400 font-semibold pt-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" /> Secure checkout • Heavy-metal free certified batches
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
