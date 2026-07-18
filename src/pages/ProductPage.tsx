import React, { useState } from "react";
import { useParams, useNavigate, Link, Navigate } from "react-router-dom";
import {
  Star, ShieldCheck, Heart, ShoppingBag, Share2, Clock,
  Sparkles, AlertCircle, Download, Check, RefreshCcw, ChevronRight
} from "lucide-react";
import { useStore } from "../context/StoreContext";
import ProductCard from "../components/ProductCard";
import { slugify } from "../utils/slug";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, wishlist, addToCart, toggleWishlist } = useStore();

  const product = products.find(p => p.id === id);

  const [activeTab, setActiveTab] = useState<"benefits" | "usage" | "ingredients" | "safety">("benefits");
  const [activeImage, setActiveImage] = useState(product?.image || "");
  const [is360Mode, setIs360Mode] = useState(false);
  const [viewAngle, setViewAngle] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [subscriptionType, setSubscriptionType] = useState<"once" | "monthly" | "bi-monthly">("once");
  const [downloadingReport, setDownloadingReport] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [bundleAdded, setBundleAdded] = useState(false);
  const [addedToast, setAddedToast] = useState(false);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const isWishlisted = wishlist.some(item => item.id === product.id);
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const bundleProduct = relatedProducts[0] || product;
  const bundleTotalPrice = Math.round((product.price + bundleProduct.price) * 0.9);

  const handleDownloadLabReport = () => {
    setDownloadingReport(true);
    setTimeout(() => {
      setDownloadingReport(false);
      alert(`Lab certification report for batch ${Math.floor(Math.random() * 900) + 100} downloaded successfully. (Heavy metals: Negative, Purity index: 99.8%)`);
    }, 1200);
  };

  const handleShare = () => {
    setCopiedShare(true);
    navigator.clipboard.writeText(`${window.location.origin}/product/${product.id}`);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, subscriptionType);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 md:px-8 space-y-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1.5 text-[11px] text-stone-500 font-medium flex-wrap">
        <Link to="/" className="hover:text-emerald-700">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link to="/shop" className="hover:text-emerald-700">Shop</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link to={`/category/${slugify(product.category)}`} className="hover:text-emerald-700">{product.category}</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-emerald-800 font-bold truncate max-w-[220px]">{product.name}</span>
      </nav>

      <div className="flex items-center gap-2">
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 font-mono">
          {product.system}
        </span>
        <span className="flex items-center gap-1 text-xs text-stone-500 font-medium">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          WHO-GMP Standard Quality Certified
        </span>
      </div>

      {/* Top segment: Gallery and core buying specs */}
      <div className="grid gap-8 md:grid-cols-2">

        {/* Visual Column */}
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-2xl bg-stone-50 border border-stone-100 aspect-square flex items-center justify-center">
            {is360Mode ? (
              <div className="relative w-full h-full flex flex-col items-center justify-center p-6">
                <p className="absolute top-4 text-xs font-bold text-emerald-800 uppercase tracking-widest font-mono">Interactive 360° Product View</p>
                <img
                  src={activeImage}
                  alt={product.name}
                  style={{ transform: `rotate(${viewAngle}deg)` }}
                  className="h-3/4 object-contain transition-transform duration-200"
                  referrerPolicy="no-referrer"
                />
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={viewAngle}
                  onChange={(e) => setViewAngle(Number(e.target.value))}
                  className="w-3/4 accent-emerald-800 mt-4 cursor-pointer"
                />
                <p className="text-[10px] text-stone-500 mt-2">Drag slider to rotate product container angle</p>
              </div>
            ) : (
              <img
                src={activeImage}
                alt={product.name}
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            )}

            <button
              onClick={() => setIs360Mode(!is360Mode)}
              className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-emerald-900/90 text-amber-200 px-3 py-1.5 text-xs font-bold shadow-md hover:bg-emerald-950 transition-colors cursor-pointer"
            >
              <RefreshCcw className="h-4 w-4" />
              {is360Mode ? "Standard Photo" : "360° Inspect"}
            </button>
          </div>

          <div className="flex gap-2.5 overflow-x-auto pb-1">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => { setActiveImage(img); setIs360Mode(false); }}
                className={`h-16 w-16 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${activeImage === img && !is360Mode ? 'border-emerald-700 shadow-sm' : 'border-stone-100'}`}
              >
                <img src={img} alt={`Thumbnail ${i + 1}`} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </div>

        {/* Core Buying Details */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest font-mono">{product.brand}</span>
            <h1 className="text-2xl font-black text-stone-900 leading-tight mt-1">{product.name}</h1>

            <div className="mt-3 flex items-center gap-2">
              <div className="flex items-center text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-stone-200'}`} />
                ))}
              </div>
              <span className="text-sm font-extrabold text-stone-800 font-mono">{product.rating}</span>
              <span className="text-xs text-stone-400">({product.reviewsCount} customer ratings)</span>
            </div>
          </div>

          <p className="text-sm text-stone-600 leading-relaxed font-light">{product.description}</p>

          <div className="flex items-center gap-2 text-xs font-semibold">
            <span className={`h-2 w-2 rounded-full ${product.stock > 20 ? 'bg-emerald-600' : product.stock > 0 ? 'bg-amber-500' : 'bg-red-500'}`} />
            {product.stock > 20 ? "In Stock" : product.stock > 0 ? `Only ${product.stock} left in stock` : "Out of Stock"}
          </div>

          {/* Pricing section with Subscription scheduler */}
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-stone-400">Standard Price</span>
                <p className="text-2xl font-extrabold text-emerald-800 font-mono">₹{product.price}</p>
              </div>
              {product.originalPrice && (
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-stone-400">Original Price</span>
                  <p className="text-sm text-stone-400 line-through font-mono">₹{product.originalPrice}</p>
                </div>
              )}
            </div>

            <div className="border-t border-stone-200 pt-3 space-y-2.5">
              <label className="block text-xs font-bold text-stone-700">Buying Options</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setSubscriptionType("once")}
                  className={`rounded-xl border p-2.5 text-center transition-all cursor-pointer ${subscriptionType === "once" ? 'border-emerald-700 bg-emerald-50/50 text-emerald-950 font-bold' : 'border-stone-200 hover:bg-stone-100 text-stone-600'}`}
                >
                  <span className="block text-xs">Buy Once</span>
                  <span className="text-[10px] font-mono text-stone-500">Regular order</span>
                </button>
                <button
                  onClick={() => setSubscriptionType("monthly")}
                  className={`rounded-xl border p-2.5 text-center transition-all cursor-pointer ${subscriptionType === "monthly" ? 'border-emerald-700 bg-emerald-50/50 text-emerald-950 font-bold' : 'border-stone-200 hover:bg-stone-100 text-stone-600'}`}
                >
                  <span className="block text-xs text-emerald-800 font-bold">Subscribe</span>
                  <span className="text-[10px] font-mono text-emerald-600">-15% Monthly</span>
                </button>
                <button
                  onClick={() => setSubscriptionType("bi-monthly")}
                  className={`rounded-xl border p-2.5 text-center transition-all cursor-pointer ${subscriptionType === "bi-monthly" ? 'border-emerald-700 bg-emerald-50/50 text-emerald-950 font-bold' : 'border-stone-200 hover:bg-stone-100 text-stone-600'}`}
                >
                  <span className="block text-xs text-emerald-800 font-bold">Subscribe</span>
                  <span className="text-[10px] font-mono text-emerald-600">-15% Bi-Monthly</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quantity selector and checkout triggers */}
          <div className="flex items-center gap-4">
            <div className="flex h-11 items-center rounded-xl border border-stone-300 bg-white">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3.5 py-2 text-stone-600 hover:text-stone-900 font-bold">-</button>
              <span className="px-3 font-bold text-stone-800 font-mono">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-3.5 py-2 text-stone-600 hover:text-stone-900 font-bold">+</button>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="flex-1 flex h-11 items-center justify-center gap-2 rounded-xl bg-emerald-800 text-white font-bold hover:bg-emerald-950 transition-colors cursor-pointer shadow-md disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ShoppingBag className="h-5 w-5" />
              Add To Basket
            </button>

            <button
              onClick={() => toggleWishlist(product)}
              className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all cursor-pointer ${isWishlisted ? 'border-red-200 bg-red-50 text-red-600' : 'border-stone-300 bg-white text-stone-500 hover:text-red-500'}`}
            >
              <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-red-600' : ''}`} />
            </button>
          </div>

          {addedToast && (
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 flex items-center justify-between text-xs font-bold text-emerald-900 animate-fade-in">
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4" /> Added to your basket</span>
              <button onClick={() => navigate("/cart")} className="text-emerald-800 underline cursor-pointer">View Cart</button>
            </div>
          )}

          {/* Share and lab report actions */}
          <div className="flex flex-wrap items-center justify-between border-t border-stone-100 pt-4 gap-4">
            <button
              onClick={handleDownloadLabReport}
              disabled={downloadingReport}
              className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors disabled:opacity-50 cursor-pointer"
            >
              <Download className="h-4 w-4" />
              {downloadingReport ? "Generating Batch Report..." : "Download Lab Batch Report (Heavy Metal Free)"}
            </button>

            <button onClick={handleShare} className="flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-800 transition-colors cursor-pointer">
              <Share2 className="h-4 w-4" />
              {copiedShare ? "Copied Link!" : "Share Product"}
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Specification Tabs */}
      <div className="border-t border-stone-100 pt-6">
        <div className="flex border-b border-stone-200 overflow-x-auto pb-0.5 gap-2">
          {[
            { id: "benefits", label: "Benefits & Actions" },
            { id: "usage", label: "Usage & Dosage" },
            { id: "ingredients", label: "Key Ingredients" },
            { id: "safety", label: "Safety & Contraindications" }
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={`whitespace-nowrap px-4 py-2 text-sm font-bold border-b-2 transition-all cursor-pointer ${activeTab === t.id ? 'border-emerald-800 text-emerald-950' : 'border-transparent text-stone-500 hover:text-stone-800'}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-4 p-4 rounded-2xl bg-stone-50 border border-stone-100 min-h-36">
          {activeTab === "benefits" && (
            <ul className="space-y-2.5">
              {product.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-stone-700">
                  <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          )}

          {activeTab === "usage" && (
            <div className="space-y-3 text-sm text-stone-700">
              <p><strong>General Instructions:</strong> {product.usage}</p>
              <p><strong>Suggested Dosage:</strong> {product.dosage}</p>
              <div className="flex items-start gap-2 rounded-xl bg-amber-50 p-3 border border-amber-100 text-xs text-amber-800 mt-2">
                <Clock className="h-4.5 w-4.5 shrink-0 mt-0.5" />
                <span>Always consume traditional formulations on a consistent schedule. Consistent timing optimizes systemic bio-absorption.</span>
              </div>
            </div>
          )}

          {activeTab === "ingredients" && (
            <div className="space-y-3">
              <p className="text-xs text-stone-500 font-medium">The complete clinical botanical recipe:</p>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ing, i) => (
                  <span key={i} className="rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-900 border border-emerald-100">
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === "safety" && (
            <div className="space-y-4 text-sm text-stone-700">
              <div className="space-y-2">
                <h4 className="font-bold text-stone-800">Storage Guidelines:</h4>
                <p className="text-xs text-stone-600 font-mono">{product.storage}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-stone-800">Known Contraindications:</h4>
                <div className="flex flex-wrap gap-2">
                  {product.contraindications.map((con, i) => (
                    <span key={i} className="flex items-center gap-1.5 rounded-lg bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-800 border border-red-100">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {con}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-stone-200/60 pt-3">
                <p className="text-[11px] text-stone-500 leading-normal">
                  <strong>Vedic Quality Pledge:</strong> Free from heavy metals (Lead, Cadmium, Arsenic, Mercury), synthetic preservatives, chemical dyes, and GMO elements. Verified via independent high-performance liquid chromatography (HPLC).
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bundle Discount Segment */}
      <div className="rounded-3xl border border-dashed border-amber-300 bg-amber-50/40 p-5 md:p-6 space-y-4">
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-950">
          <Sparkles className="h-3.5 w-3.5" /> Special Wellness Bundle offer
        </span>
        <h3 className="text-lg font-black text-stone-800">Frequently Bought Together</h3>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
          <div className="flex items-center gap-3">
            <img src={product.image} alt={product.name} className="h-16 w-16 rounded-xl object-cover border border-stone-200 bg-white" referrerPolicy="no-referrer" />
            <span className="text-xl font-bold text-stone-400">+</span>
            <img src={bundleProduct.image} alt={bundleProduct.name} className="h-16 w-16 rounded-xl object-cover border border-stone-200 bg-white" referrerPolicy="no-referrer" />
            <div>
              <h4 className="text-sm font-bold text-stone-800 truncate max-w-xs">{product.name} + {bundleProduct.name}</h4>
              <p className="text-xs text-stone-500">Perfect synergies for cellular restoration</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-xs text-stone-400 line-through font-mono">${product.price + bundleProduct.price}</span>
              <p className="text-xl font-black text-emerald-800 font-mono">₹{bundleTotalPrice} <span className="text-xs font-semibold text-amber-700">(Save 10%)</span></p>
            </div>
            {bundleAdded ? (
              <span className="flex items-center gap-1 rounded-xl bg-emerald-100 text-emerald-800 px-4 py-2 text-sm font-bold">
                <Check className="h-4.5 w-4.5" /> Added Bundle
              </span>
            ) : (
              <button
                onClick={() => {
                  addToCart(product, 1, "once");
                  addToCart(bundleProduct, 1, "once");
                  setBundleAdded(true);
                }}
                className="rounded-xl bg-emerald-800 px-4 py-2.5 text-sm font-bold text-white hover:bg-emerald-900 transition-colors shadow-sm cursor-pointer"
              >
                Add Both to Basket
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Reviews & Q&A Segment */}
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-stone-900">Customer Verified Reviews</h3>
          <div className="space-y-3.5">
            {product.reviewsList.map(rev => (
              <div key={rev.id} className="rounded-xl border border-stone-100 p-4 space-y-2 bg-white shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-800">{rev.name}</span>
                  <span className="text-[10px] text-stone-400 font-mono">{rev.date}</span>
                </div>
                <div className="flex items-center text-amber-400 gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-stone-600 leading-normal">{rev.comment}</p>
                {rev.verified && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600">
                    <ShieldCheck className="h-3.5 w-3.5" /> Verified Purchase
                  </span>
                )}
              </div>
            ))}
            {product.reviewsList.length === 0 && (
              <p className="text-xs text-stone-500 italic">No reviews yet. Be the first to review this product.</p>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-stone-900">Questions & Answers</h3>
          <div className="space-y-3.5">
            {product.qaList.length > 0 ? (
              product.qaList.map((qa, i) => (
                <div key={i} className="space-y-1.5 border-l-2 border-amber-300 pl-3">
                  <p className="text-xs font-bold text-stone-800">Q: {qa.question}</p>
                  <p className="text-xs text-stone-600">A: {qa.answer}</p>
                </div>
              ))
            ) : (
              <p className="text-xs text-stone-500 italic">No community questions have been asked yet. Be the first to ask!</p>
            )}

            <div className="rounded-xl border border-stone-100 bg-stone-50 p-4">
              <label className="block text-xs font-bold text-stone-700 mb-2">Have a question about this traditional medicine?</label>
              <div className="flex gap-2">
                <input type="text" placeholder="Ask about dosage, age limit, etc..." className="flex-1 rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-xs outline-none focus:border-emerald-700" />
                <button onClick={() => alert("Your question has been submitted to our board of certified Ayurvedic practitioners.")} className="rounded-lg bg-emerald-800 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-950 cursor-pointer">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div className="space-y-6 border-t border-stone-100 pt-8">
          <h3 className="text-lg font-black text-stone-900">You May Also Like</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map(p => (
              <ProductCard
                key={p.id}
                product={p}
                onAddToCart={(prod) => addToCart(prod, 1, "once")}
                onAddToWishlist={toggleWishlist}
                isWishlisted={wishlist.some(item => item.id === p.id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
