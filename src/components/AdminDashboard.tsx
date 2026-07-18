import React, { useState } from "react";
import { 
  Sliders, TrendingUp, ShoppingBag, Calendar, Users, Percent, Leaf, 
  Settings, CheckCircle, XCircle, AlertTriangle, Plus, RefreshCw, BarChart3, Search, Edit2 
} from "lucide-react";
import { Product, Appointment, Doctor } from "../types";

interface AdminDashboardProps {
  products: Product[];
  appointments: Appointment[];
  doctors: Doctor[];
  onUpdateStock: (productId: string, newStock: number) => void;
  onAddProduct: (product: Product) => void;
}

export default function AdminDashboard({
  products,
  appointments,
  doctors,
  onUpdateStock,
  onAddProduct
}: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<"sales" | "products" | "appointments" | "coupons" | "seo">("sales");
  const [searchQuery, setSearchQuery] = useState("");

  // Product addition state
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProdName, setNewProdName] = useState("");
  const [newProdPrice, setNewProdPrice] = useState(199);
  const [newProdCat, setNewProdCat] = useState("Kashayam & Rasayanam");
  const [newProdSys, setNewProdSys] = useState<any>("Ayurveda");

  // Coupon state
  const [coupons, setCoupons] = useState([
    { code: "VEDIC15", discount: 15, type: "percentage", status: "Active" },
    { code: "AYUSH50", discount: 50, type: "flat", status: "Active" }
  ]);
  const [newCouponCode, setNewCouponCode] = useState("");
  const [newCouponDiscount, setNewCouponDiscount] = useState(10);

  // SEO state
  const [metaTitle, setMetaTitle] = useState("IGO Pharma | Siddha & Ayurveda Herbal Wellness");
  const [metaDesc, setMetaDesc] = useState("Buy premium certified traditional medicines, raw herbs, and organic wellness tonics with free on-board AYUSH doctor consultations.");

  const handleCreateCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCouponCode) return;
    setCoupons([...coupons, { code: newCouponCode.toUpperCase(), discount: newCouponDiscount, type: "percentage", status: "Active" }]);
    alert(`Promo Code '${newCouponCode.toUpperCase()}' registered successfully.`);
    setNewCouponCode("");
  };

  const handleAddNewProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProdName) return;
    const newProd: Product = {
      id: `prod-${Math.floor(Math.random() * 900) + 100}`,
      name: newProdName,
      brand: "IGO Pharma",
      system: newProdSys,
      category: newProdCat,
      healthConcern: "Immunity",
      price: newProdPrice,
      rating: 4.5,
      reviewsCount: 1,
      image: "https://images.unsplash.com/photo-1512207128881-1b3072c6f6e2?auto=format&fit=crop&q=80&w=300",
      images: ["https://images.unsplash.com/photo-1512207128881-1b3072c6f6e2?auto=format&fit=crop&q=80&w=300"],
      description: "A premium newly formulated organic tonic designed for complete cellular restoration.",
      ingredients: ["Raw herbs", "Purified extracts"],
      benefits: ["Nourishes the digestive fire", "Soothes internal stress"],
      usage: "Take 1 spoon daily",
      dosage: "1 spoon",
      safetyInfo: "Safe for adults",
      contraindications: [],
      storage: "Cool dry place",
      shelfLife: "24 months",
      manufacturer: "IGO Pharma GMP Facility",
      certifications: ["AYUSH Certified", "GMP Quality Approved"],
      stock: 50,
      faqs: [],
      reviewsList: [],
      qaList: []
    };
    onAddProduct(newProd);
    alert(`Product '${newProdName}' added to IGO Pharma master repository.`);
    setNewProdName("");
    setShowAddForm(false);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 space-y-8">
      {/* Upper header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 border-stone-200 gap-4">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-emerald-800 font-mono font-bold">IGO Pharma Enterprise</span>
          <h2 className="text-2xl font-black text-stone-950 flex items-center gap-1.5">
            <Sliders className="h-6 w-6 text-emerald-800" />
            Platform Control Portal
          </h2>
        </div>

        {/* Tab select strip */}
        <div className="flex flex-wrap bg-stone-100 p-0.5 rounded-xl border border-stone-200 text-xs font-semibold">
          {[
            { id: "sales", label: "Sales & Analytics" },
            { id: "products", label: "Inventory Ledger" },
            { id: "appointments", label: "Clinic Appointments" },
            { id: "coupons", label: "Promo Codes" },
            { id: "seo", label: "SEO & Content Manager" }
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={`px-3 py-2 rounded-lg transition-all cursor-pointer ${activeTab === t.id ? 'bg-emerald-850 text-white shadow-sm font-bold' : 'text-stone-500 hover:text-stone-800'}`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* TAB 1: Sales and Analytics Charts */}
      {activeTab === "sales" && (
        <div className="space-y-6 animate-fade-in">
          {/* Dashboard Summary grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-stone-400 font-mono">Gross Sales Revenue</span>
              <p className="text-2xl font-black text-emerald-850 font-mono">₹24,850</p>
              <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-0.5">
                <TrendingUp className="h-3.5 w-3.5" /> +18.4% month-on-month
              </span>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-stone-400 font-mono">Platform Conversions</span>
              <p className="text-2xl font-black text-emerald-850 font-mono">3.42%</p>
              <span className="text-[10px] text-emerald-700 font-bold">Standard industry average: 2.1%</span>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-stone-400 font-mono">Doctor Consultation bookings</span>
              <p className="text-2xl font-black text-emerald-850 font-mono">{appointments.length + 15} Booked</p>
              <span className="text-[10px] text-amber-700 font-bold">85% retention on follow-ups</span>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-stone-400 font-mono">Master Catalog Depth</span>
              <p className="text-2xl font-black text-emerald-850 font-mono">{products.length} Products</p>
              <span className="text-[10px] text-red-600 font-bold flex items-center gap-0.5">
                <AlertTriangle className="h-3.5 w-3.5" /> 2 categories low stock
              </span>
            </div>
          </div>

          {/* Native SVG Sales and traffic visualization charts */}
          <div className="grid gap-6 md:grid-cols-2">
            
            {/* Sales Chart */}
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm space-y-4">
              <div className="flex justify-between items-center border-b pb-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-stone-400">Quarterly Sales Trend ($)</h3>
                <span className="text-[10px] font-bold text-emerald-800 font-mono bg-emerald-50 px-2 py-0.5 rounded">Real-time sync</span>
              </div>
              <div className="flex items-end justify-between h-48 pt-4 px-4 font-mono text-[9px] text-stone-400">
                <div className="flex flex-col items-center gap-1 w-full">
                  <div className="w-8 bg-emerald-800 hover:bg-emerald-950 transition-all rounded-t" style={{ height: "110px" }} />
                  <span>Q1</span>
                </div>
                <div className="flex flex-col items-center gap-1 w-full">
                  <div className="w-8 bg-emerald-800 hover:bg-emerald-950 transition-all rounded-t" style={{ height: "140px" }} />
                  <span>Q2</span>
                </div>
                <div className="flex flex-col items-center gap-1 w-full">
                  <div className="w-8 bg-emerald-800 hover:bg-emerald-950 transition-all rounded-t" style={{ height: "165px" }} />
                  <span>Q3</span>
                </div>
                <div className="flex flex-col items-center gap-1 w-full">
                  <div className="w-8 bg-amber-500 hover:bg-amber-600 transition-all rounded-t" style={{ height: "185px" }} />
                  <span>Q4 (Proj)</span>
                </div>
              </div>
            </div>

            {/* Health Concern Demand Distribution */}
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm space-y-4">
              <div className="flex justify-between items-center border-b pb-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-stone-400">Category Demand Distribution</h3>
                <span className="text-[10px] font-bold text-amber-800 font-mono bg-amber-50 px-2 py-0.5 rounded">Live CTR</span>
              </div>
              <div className="space-y-3 pt-2 text-xs">
                <div>
                  <div className="flex justify-between font-bold text-stone-700 mb-1">
                    <span>Immunity & Supplements</span>
                    <span className="font-mono">42%</span>
                  </div>
                  <div className="h-1.5 w-full bg-stone-150 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-800 rounded-full" style={{ width: "42%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-stone-700 mb-1">
                    <span>Stress & Nervous Tone</span>
                    <span className="font-mono">28%</span>
                  </div>
                  <div className="h-1.5 w-full bg-stone-150 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: "28%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-stone-700 mb-1">
                    <span>Herbal Night Oils & Skin care</span>
                    <span className="font-mono">18%</span>
                  </div>
                  <div className="h-1.5 w-full bg-stone-150 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: "18%" }} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* TAB 2: Products and stock management */}
      {activeTab === "products" && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">Master Inventory Ledger</h3>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="rounded-xl bg-emerald-850 text-white px-4 py-2 text-xs font-bold flex items-center gap-1 cursor-pointer"
            >
              <Plus className="h-4 w-4" /> Add Product
            </button>
          </div>

          {/* Add product form */}
          {showAddForm && (
            <form onSubmit={handleAddNewProduct} className="p-5 rounded-2xl border border-amber-100 bg-amber-50/10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 animate-fade-in">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Product Title *</label>
                <input 
                  type="text" 
                  required
                  placeholder="Triphala Capsules" 
                  value={newProdName}
                  onChange={(e) => setNewProdName(e.target.value)}
                  className="w-full rounded-xl border border-stone-300 bg-white px-3 py-1.5 text-xs outline-none focus:border-emerald-700" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Price ($) *</label>
                <input 
                  type="number" 
                  required
                  value={newProdPrice}
                  onChange={(e) => setNewProdPrice(Number(e.target.value))}
                  className="w-full rounded-xl border border-stone-300 bg-white px-3 py-1.5 text-xs outline-none focus:border-emerald-700" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Traditional System *</label>
                <select 
                  value={newProdSys}
                  onChange={(e) => setNewProdSys(e.target.value as any)}
                  className="w-full rounded-xl border border-stone-300 bg-white px-3 py-1.5 text-xs focus:border-emerald-700"
                >
                  <option value="Ayurveda">Ayurveda</option>
                  <option value="Siddha">Siddha</option>
                  <option value="Herbal">Herbal</option>
                </select>
              </div>

              <div className="sm:col-span-3 flex justify-end gap-2 pt-2 border-t">
                <button type="button" onClick={() => setShowAddForm(false)} className="rounded-lg border px-4 py-1.5 text-xs text-stone-500 font-semibold">Cancel</button>
                <button type="submit" className="rounded-lg bg-emerald-800 text-white px-4 py-1.5 text-xs font-bold">Register Formulation</button>
              </div>
            </form>
          )}

          {/* Products stock editor ledger */}
          <div className="overflow-x-auto rounded-2xl border border-stone-200">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-stone-50 text-stone-400 font-mono uppercase tracking-wider border-b border-stone-200">
                  <th className="p-4">Formulation Name</th>
                  <th className="p-4">System</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Stock Ledger</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 font-medium">
                {products.map(p => (
                  <tr key={p.id} className="hover:bg-stone-50">
                    <td className="p-4 font-bold text-stone-800">{p.name}</td>
                    <td className="p-4 text-amber-700 font-mono font-bold">{p.system}</td>
                    <td className="p-4 text-stone-500">{p.category}</td>
                    <td className="p-4 font-mono font-bold text-emerald-800">₹{p.price}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1 rounded px-2.5 py-0.5 font-bold font-mono ${p.stock < 40 ? 'bg-red-50 text-red-700 animate-pulse' : 'bg-emerald-50 text-emerald-800'}`}>
                        {p.stock} units
                      </span>
                    </td>
                    <td className="p-4 flex gap-1">
                      <button 
                        onClick={() => onUpdateStock(p.id, p.stock + 10)}
                        className="rounded bg-stone-100 px-2 py-1 hover:bg-stone-200 font-bold text-stone-700 cursor-pointer text-[10px]"
                      >
                        +10 stock
                      </button>
                      <button 
                        onClick={() => onUpdateStock(p.id, Math.max(0, p.stock - 5))}
                        className="rounded bg-stone-150 px-2 py-1 hover:bg-stone-250 font-bold text-stone-700 cursor-pointer text-[10px]"
                      >
                        -5 stock
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: Clinic Appointments */}
      {activeTab === "appointments" && (
        <div className="space-y-6 animate-fade-in">
          <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">Clinical Consultation Agenda</h3>
          
          <div className="overflow-x-auto rounded-2xl border border-stone-200">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-stone-50 text-stone-400 font-mono uppercase border-b">
                  <th className="p-4">Appointment ID</th>
                  <th className="p-4">Patient Profile</th>
                  <th className="p-4">Physician Name</th>
                  <th className="p-4">Slot Scheduled</th>
                  <th className="p-4">Platform type</th>
                  <th className="p-4">Link / Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y font-medium text-stone-700">
                {appointments.map(apt => (
                  <tr key={apt.id} className="hover:bg-stone-50">
                    <td className="p-4 font-mono text-stone-500 font-bold">{apt.id}</td>
                    <td className="p-4">
                      <span className="block font-bold text-stone-900">{apt.patientName}</span>
                      <span className="text-[10px] text-stone-400">{apt.patientPhone}</span>
                    </td>
                    <td className="p-4 font-bold text-emerald-900">{apt.doctorName}</td>
                    <td className="p-4 font-mono">{apt.date} • {apt.timeSlot}</td>
                    <td className="p-4">
                      <span className="rounded bg-stone-100 px-2 py-0.5 text-[10px] font-bold text-stone-600 uppercase">
                        {apt.type}
                      </span>
                    </td>
                    <td className="p-4">
                      {apt.meetingLink ? (
                        <a 
                          href={apt.meetingLink} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="rounded bg-emerald-800 px-3 py-1 font-bold text-white hover:bg-emerald-950 text-[10px]"
                        >
                          Join Consultation
                        </a>
                      ) : (
                        <span className="text-stone-400 italic">No link</span>
                      )}
                    </td>
                  </tr>
                ))}
                {appointments.length === 0 && (
                  <tr>
                    <td colSpan={6} className="text-center py-6 text-stone-500 italic">No scheduled doctor appointments found for today.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 4: Coupons Promo Codes Builder */}
      {activeTab === "coupons" && (
        <div className="grid gap-6 md:grid-cols-3 animate-fade-in">
          
          {/* Coupon creator */}
          <div className="md:col-span-1 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm space-y-4 h-fit">
            <h3 className="text-xs font-black text-stone-400 uppercase tracking-wider">Create Promo Code</h3>
            
            <form onSubmit={handleCreateCoupon} className="space-y-3">
              <div>
                <label className="block text-[10px] font-bold text-stone-600">Promo Code String *</label>
                <input 
                  type="text" 
                  required
                  placeholder="SUMMER20"
                  value={newCouponCode}
                  onChange={(e) => setNewCouponCode(e.target.value)}
                  className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-xs outline-none focus:border-emerald-700" 
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-stone-600">Discount Percent (%) *</label>
                <input 
                  type="number" 
                  required
                  min={1}
                  max={100}
                  value={newCouponDiscount}
                  onChange={(e) => setNewCouponDiscount(Number(e.target.value))}
                  className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-xs outline-none focus:border-emerald-700" 
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-emerald-800 py-2.5 text-xs font-bold text-white hover:bg-emerald-950 transition-colors shadow-sm cursor-pointer"
              >
                Register Promo Code
              </button>
            </form>
          </div>

          {/* Active Promo Codes list */}
          <div className="md:col-span-2 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm space-y-4">
            <h3 className="text-xs font-black text-stone-400 uppercase tracking-wider">Active Promo Codes Ledger</h3>
            <div className="divide-y divide-stone-100">
              {coupons.map((c, idx) => (
                <div key={idx} className="flex justify-between items-center py-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-black text-emerald-900 bg-emerald-50 px-3 py-1 rounded border border-emerald-100">
                      {c.code}
                    </span>
                    <span className="text-xs text-stone-500 font-semibold">
                      {c.discount}% discount off cart items
                    </span>
                  </div>
                  <span className="rounded bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider">
                    {c.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* TAB 5: SEO and Content manager */}
      {activeTab === "seo" && (
        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-6 animate-fade-in">
          <div>
            <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">SEO Master Schema & Meta tags</h3>
            <p className="text-xs text-stone-500">Configure global metadata tags, canonical URLs, and sitemaps to optimize organic search engine rankings.</p>
          </div>

          <div className="space-y-4 text-xs">
            <div className="space-y-1">
              <label className="block font-bold text-stone-700">Default Meta Document Title</label>
              <input 
                type="text" 
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-xs outline-none focus:border-emerald-700" 
              />
            </div>

            <div className="space-y-1">
              <label className="block font-bold text-stone-700">Default OpenGraph Meta Description</label>
              <textarea 
                rows={3}
                value={metaDesc}
                onChange={(e) => setMetaDesc(e.target.value)}
                className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-xs outline-none focus:border-emerald-700 font-light" 
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 pt-2 border-t border-stone-100">
              <div className="rounded-xl border p-4 bg-stone-50 border-stone-150 space-y-1">
                <span className="font-bold text-stone-400 uppercase text-[9px] block">XML Sitemap URL</span>
                <span className="font-mono text-[11px] text-stone-700">https://igopharmacy.in/sitemap.xml</span>
              </div>
              <div className="rounded-xl border p-4 bg-stone-50 border-stone-150 space-y-1">
                <span className="font-bold text-stone-400 uppercase text-[9px] block">Robots Protocol configuration</span>
                <span className="font-mono text-[11px] text-stone-700">User-agent: * • Allow: / • Sitemap: sitemap.xml</span>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => alert("Enterprise SEO Configuration and Schema Markup updated successfully across all servers.")}
                className="rounded-xl bg-emerald-800 text-white px-6 py-2.5 font-bold hover:bg-emerald-950 shadow-sm cursor-pointer"
              >
                Save SEO Configurations
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
