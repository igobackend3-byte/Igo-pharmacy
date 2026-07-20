import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Search, Mic, ShoppingBag, Heart, User, Sparkles, Sliders, Menu, X,
  MapPin, Phone, FileText, ChevronDown, ShieldCheck, RefreshCw,
  Award, Users, MessageCircle
} from "lucide-react";
import { useStore } from "../context/StoreContext";
import { slugify } from "../utils/slug";
import Logo from "./Logo";

interface NavbarProps {
  onOpenAIWellness: () => void;
}

export default function Navbar({ onOpenAIWellness }: NavbarProps) {
  const navigate = useNavigate();
  const { products, cartCount, wishlist } = useStore();

  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<"categories" | "conditions" | null>(null);

  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredProducts = searchQuery.trim()
    ? products.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.ingredients.some(i => i.toLowerCase().includes(searchQuery.toLowerCase())) ||
        p.healthConcern.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleVoiceSearch = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice search is not supported in this browser. Please type your query.");
      return;
    }

    setIsListening(true);
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event: any) => {
      const speechToText = event.results[0][0].transcript;
      setSearchQuery(speechToText);
      setIsListening(false);
      setShowSearchResults(true);
    };

    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
  };

  const categories: string[] = Array.from(new Set(products.map(p => p.category)));

  // Five traditional product forms, matching IGO Pharma's real catalog
  // structure (Churnam & Powders / Kashayam & Rasayanam / Thailam & Oils /
  // Tablets & Capsules / Personal & Skin Care).
  const CATEGORY_GROUPS: { label: string; match: (cat: string) => boolean }[] = [
    { label: "Churnam & Powders", match: (c) => ["Churnam & Powders"].includes(c) },
    { label: "Kashayam & Rasayanam", match: (c) => ["Kashayam & Rasayanam"].includes(c) },
    { label: "Thailam & Oils", match: (c) => ["Thailam & Oils"].includes(c) },
    { label: "Tablets & Capsules", match: (c) => ["Tablets & Capsules"].includes(c) }
  ];
  const categoryGroups = CATEGORY_GROUPS
    .map(group => ({ label: group.label, items: categories.filter(group.match) }))
    .filter(group => group.items.length > 0);
  const groupedCats = new Set(categoryGroups.flatMap(g => g.items));
  const otherCats = categories.filter(c => !groupedCats.has(c));

  // Common health conditions, matching IGO Pharma's wellness-concern catalog.
  // Each links into the shop's text search so results stay relevant even
  // beyond our tagged healthConcern values.
  const HEALTH_CONDITIONS = [
    "Pain Relief", "Skin Care", "Brain Health", "Hair Care",
    "Detox & Gut Health", "Women's Health", "Immunity", "Men's Health",
    "Liver Health", "Eye Care", "Stress Management", "Sleep Support",
    "Diabetes Care", "Heart Health", "Respiratory Health", "Weight Management",
    "Joint & Muscle Care"
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-100 bg-stone-50/95 shadow-sm backdrop-blur-md">
      {/* Upper bar with micro information */}
      <div className="flex h-9 w-full items-center justify-between bg-emerald-950 px-4 text-xs font-medium text-amber-50 md:px-8">
        <div className="flex flex-1 items-center overflow-hidden h-full mr-4">
          <div className="relative flex items-center overflow-hidden w-full h-full">
            <div className="animate-marquee-scroll flex shrink-0 items-center justify-around gap-12 min-w-full">
              {[0, 1, 2, 3].map((_, idx) => (
                <span key={idx} className="mx-4 text-xs font-semibold whitespace-nowrap">
                  IGO Pharma | Free Delivery on Orders Above ₹999 | Cash on Delivery Available
                </span>
              ))}
            </div>
            <div className="animate-marquee-scroll flex shrink-0 items-center justify-around gap-12 min-w-full" aria-hidden="true">
              {[0, 1, 2, 3].map((_, idx) => (
                <span key={`dup-${idx}`} className="mx-4 text-xs font-semibold whitespace-nowrap">
                  IGO Pharma | Free Delivery on Orders Above ₹999 | Cash on Delivery Available
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/admin" className="hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1">
            <Sliders className="h-3.5 w-3.5" />
            Enterprise Admin Portal
          </Link>
          <span className="hidden md:inline">|</span>
          <span className="hidden md:inline">Support / WhatsApp: +91 73977 89803</span>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <Link to="/" className="cursor-pointer">
            <Logo size={44} />
          </Link>
        </div>

        {/* Search bar & voice search */}
        <div ref={searchRef} className="relative hidden max-w-md flex-1 px-8 md:block">
          <div className="relative flex h-11 w-full items-center rounded-full border border-stone-200 bg-stone-100 px-4 focus-within:border-emerald-600 focus-within:bg-white transition-all shadow-inner">
            <Search className="h-5 w-5 text-stone-400" />
            <input
              type="text"
              placeholder="Search herbs, medicines, health concerns..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearchResults(true);
              }}
              onFocus={() => setShowSearchResults(true)}
              className="w-full bg-transparent px-3 text-sm text-stone-800 placeholder-stone-400 outline-none"
            />
            <button
              onClick={handleVoiceSearch}
              title="Voice Search"
              className={`p-1 rounded-full transition-colors ${isListening ? 'bg-amber-100 text-emerald-700 animate-bounce' : 'text-stone-400 hover:text-emerald-700'}`}
            >
              <Mic className="h-5 w-5" />
            </button>
          </div>

          {/* Search results overlay */}
          {showSearchResults && searchQuery.trim() && (
            <div className="absolute left-8 right-8 top-12 z-50 max-h-96 overflow-y-auto rounded-2xl border border-stone-200 bg-white p-4 shadow-xl">
              <p className="border-b border-stone-100 pb-2 text-xs font-semibold uppercase tracking-wider text-stone-400">
                Products Found ({filteredProducts.length})
              </p>
              <div className="mt-2 space-y-1.5">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map(p => (
                    <button
                      key={p.id}
                      onClick={() => {
                        navigate(`/product/${p.id}`);
                        setShowSearchResults(false);
                        setSearchQuery("");
                      }}
                      className="flex w-full items-center gap-3 rounded-lg p-2 text-left hover:bg-stone-50 transition-colors"
                    >
                      <img src={p.image} alt={p.name} className="h-10 w-10 rounded-md object-cover border border-stone-100" referrerPolicy="no-referrer" />
                      <div className="flex-1 min-w-0">
                        <h4 className="truncate text-sm font-medium text-stone-800">{p.name}</h4>
                        <span className="text-xs text-amber-700 font-mono">{p.system} • {p.category}</span>
                      </div>
                      <span className="text-sm font-semibold text-emerald-800 font-mono">₹{p.price}</span>
                    </button>
                  ))
                ) : (
                  <p className="py-4 text-center text-sm text-stone-500">No products match your search. Try "Chyawanprash" or "Siddha".</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Navigation Action icons */}
        <div className="flex items-center gap-1.5 md:gap-4.5">
          <button
            onClick={onOpenAIWellness}
            className="group relative flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-3 py-1.5 md:px-4 md:py-2 text-xs font-semibold text-emerald-950 shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <Sparkles className="h-4 w-4 text-emerald-900 group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">AI Sage &amp; Bot</span>
            <span className="absolute -top-1.5 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-300"></span>
            </span>
          </button>

          <Link
            to="/wishlist"
            className="relative p-2.5 text-stone-600 hover:text-emerald-700 transition-colors cursor-pointer"
          >
            <Heart className="h-6 w-6" />
            {wishlist.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm animate-bounce">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link
            to="/cart"
            className="relative p-2.5 text-stone-600 hover:text-emerald-700 transition-colors cursor-pointer"
          >
            <ShoppingBag className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white shadow-sm">
                {cartCount}
              </span>
            )}
          </Link>

          <Link
            to="/account"
            className="p-2.5 text-stone-600 hover:text-emerald-700 transition-colors cursor-pointer flex items-center gap-1"
          >
            <User className="h-6 w-6" />
            <span className="hidden lg:inline text-xs font-medium text-stone-600">My Account</span>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-600 hover:text-emerald-700 md:hidden"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Main mega menu strip */}
      <nav className="hidden border-t border-amber-50/50 bg-stone-100 md:block">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-7 gap-y-1.5 px-8 py-3 text-sm font-medium text-stone-700">
          <Link to="/" className="py-1 hover:text-emerald-700 transition-colors cursor-pointer">
            Home
          </Link>

          {/* Products mega menu, grouped into shopper-friendly families */}
          <div className="relative">
            <button
              onMouseEnter={() => setActiveMegaMenu("categories")}
              className="flex items-center gap-1.5 py-1 text-emerald-800 hover:text-emerald-950 transition-colors cursor-pointer"
            >
              Products
              <ChevronDown className="h-4 w-4" />
            </button>
            {activeMegaMenu === "categories" && (
              <div
                onMouseLeave={() => setActiveMegaMenu(null)}
                className="absolute left-0 top-7 z-50 flex w-[36rem] gap-6 rounded-xl border border-stone-200 bg-white p-5 shadow-xl transition-all"
              >
                {categoryGroups.map(group => (
                  <div key={group.label} className="flex-1 space-y-1.5">
                    <h4 className="text-[10px] font-black uppercase tracking-wider text-amber-700 font-mono mb-2">{group.label}</h4>
                    {group.items.map(cat => (
                      <button
                        key={cat}
                        onClick={() => { navigate(`/category/${slugify(cat)}`); setActiveMegaMenu(null); }}
                        className="block w-full rounded-md px-2 py-1.5 text-left text-xs font-semibold text-stone-600 hover:bg-emerald-50 hover:text-emerald-950 transition-colors"
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                ))}
                {otherCats.length > 0 && (
                  <div className="flex-1 space-y-1.5">
                    <h4 className="text-[10px] font-black uppercase tracking-wider text-amber-700 font-mono mb-2">More</h4>
                    {otherCats.map(cat => (
                      <button
                        key={cat}
                        onClick={() => { navigate(`/category/${slugify(cat)}`); setActiveMegaMenu(null); }}
                        className="block w-full rounded-md px-2 py-1.5 text-left text-xs font-semibold text-stone-600 hover:bg-emerald-50 hover:text-emerald-950 transition-colors"
                      >
                        {cat}
                      </button>
                    ))}
                    <Link
                      to="/shop"
                      onClick={() => setActiveMegaMenu(null)}
                      className="block w-full rounded-md px-2 py-1.5 text-left text-xs font-bold text-emerald-800 hover:bg-emerald-50 transition-colors"
                    >
                      View All Products →
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Health conditions mega menu */}
          <div className="relative">
            <button
              onMouseEnter={() => setActiveMegaMenu("conditions")}
              className="flex items-center gap-1.5 py-1 text-emerald-800 hover:text-emerald-950 transition-colors cursor-pointer"
            >
              Health Conditions
              <ChevronDown className="h-4 w-4" />
            </button>
            {activeMegaMenu === "conditions" && (
              <div
                onMouseLeave={() => setActiveMegaMenu(null)}
                className="absolute left-0 top-7 z-50 grid w-[28rem] grid-cols-3 gap-1 rounded-xl border border-stone-200 bg-white p-3 shadow-xl transition-all"
              >
                {HEALTH_CONDITIONS.map(condition => (
                    <button
                      key={condition}
                      onClick={() => {
                        if (["Hair Care", "Detox & Gut Health", "Eye Care", "Women's Health"].includes(condition)) {
                          navigate(`/category/${slugify(condition)}`);
                        } else {
                          navigate(`/shop?search=${encodeURIComponent(condition)}`);
                        }
                        setActiveMegaMenu(null);
                      }}
                      className="block w-full rounded-md px-3 py-2 text-left text-xs font-semibold text-stone-600 hover:bg-amber-50 hover:text-amber-950 transition-colors"
                    >
                      {condition}
                    </button>
                ))}
              </div>
            )}
          </div>


          <Link to="/consult" className="py-1 hover:text-emerald-700 transition-colors cursor-pointer">
            Doctor Consultations
          </Link>

          <Link to="/knowledge" className="py-1 hover:text-emerald-700 transition-colors cursor-pointer">
            Blog &amp; Knowledge Center
          </Link>

          <Link to="/wholesale" className="py-1 hover:text-emerald-700 transition-colors cursor-pointer">
            Wholesale &amp; Franchising
          </Link>

          <Link to="/about" className="py-1 hover:text-emerald-700 transition-colors cursor-pointer">
            About Us
          </Link>

          <Link to="/contact" className="py-1 hover:text-emerald-700 transition-colors cursor-pointer">
            Contact
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full z-40 border-b border-stone-200 bg-white p-4 shadow-xl md:hidden">
          {/* Mobile search bar */}
          <div className="mb-4 relative flex h-10 w-full items-center rounded-full border border-stone-200 bg-stone-100 px-4">
            <Search className="h-4 w-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search remedies, herbs, cosmetics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent px-3 text-xs outline-none"
            />
            <button onClick={handleVoiceSearch} className="p-1"><Mic className="h-4 w-4 text-stone-400" /></button>
          </div>

          <div className="space-y-3.5 font-medium text-stone-700 text-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mt-2">Categories</p>
            <div className="grid grid-cols-2 gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    navigate(`/category/${slugify(cat)}`);
                    setMobileMenuOpen(false);
                  }}
                  className="block text-left text-xs font-semibold text-stone-600 bg-stone-50 rounded-lg p-2.5 hover:bg-emerald-50"
                >
                  {cat}
                </button>
              ))}
            </div>

            <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mt-4">Health Conditions</p>
            <div className="grid grid-cols-2 gap-2">
              {HEALTH_CONDITIONS.map(condition => (
                <button
                  key={condition}
                  onClick={() => {
                    if (["Hair Care", "Detox & Gut Health", "Eye Care", "Women's Health"].includes(condition)) {
                      navigate(`/category/${slugify(condition)}`);
                    } else {
                      navigate(`/shop?search=${encodeURIComponent(condition)}`);
                    }
                    setMobileMenuOpen(false);
                  }}
                  className="block text-left text-xs font-semibold text-stone-600 bg-stone-50 rounded-lg p-2.5 hover:bg-amber-50"
                >
                  {condition}
                </button>
              ))}
            </div>

            <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mt-4">Consultation &amp; Info</p>
            <button
              onClick={() => { navigate("/consult"); setMobileMenuOpen(false); }}
              className="flex w-full items-center gap-2 py-1.5 hover:text-emerald-700"
            >
              <Phone className="h-4 w-4 text-emerald-700" /> Book Certified Doctors
            </button>
            <button
              onClick={() => { navigate("/knowledge"); setMobileMenuOpen(false); }}
              className="flex w-full items-center gap-2 py-1.5 hover:text-emerald-700"
            >
              <FileText className="h-4 w-4 text-emerald-700" /> Ayurvedic Blog &amp; Remedies
            </button>

            <button
              onClick={() => { navigate("/wholesale"); setMobileMenuOpen(false); }}
              className="flex w-full items-center gap-2 py-1.5 hover:text-emerald-700"
            >
              <MapPin className="h-4 w-4 text-emerald-700" /> B2B Partner Portal
            </button>
            <button
              onClick={() => { navigate("/about"); setMobileMenuOpen(false); }}
              className="flex w-full items-center gap-2 py-1.5 hover:text-emerald-700"
            >
              <Users className="h-4 w-4 text-emerald-700" /> About Us
            </button>
            <button
              onClick={() => { navigate("/contact"); setMobileMenuOpen(false); }}
              className="flex w-full items-center gap-2 py-1.5 hover:text-emerald-700"
            >
              <MessageCircle className="h-4 w-4 text-emerald-700" /> Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
