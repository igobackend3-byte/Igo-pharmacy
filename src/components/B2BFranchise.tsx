import React, { useState } from "react";
import { Leaf, Award, MapPin, Sparkles, Building, Download, HelpCircle, FileText, Globe2, Briefcase } from "lucide-react";

export default function B2BFranchise() {
  const [b2bTab, setB2bTab] = useState<"wholesale" | "franchise">("wholesale");

  // Form states
  const [companyName, setCompanyName] = useState("");
  const [partnerType, setPartnerType] = useState("Distributor");
  const [gstIn, setGstIn] = useState("");
  const [country, setCountry] = useState("United States");
  const [msg, setMsg] = useState("");

  const handleB2BSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for registering. Our B2B Export and Partner Board has received your application for '${companyName}' (${partnerType}). A representative will contact you within 2 business days.`);
    setCompanyName("");
    setGstIn("");
    setMsg("");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 space-y-12">
      
      {/* Page Title */}
      <div className="text-center space-y-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 font-mono uppercase tracking-wider">
          <Briefcase className="h-4 w-4" /> Global Business Board
        </span>
        <h2 className="text-3xl font-black text-emerald-950">Partnerships & Wholesale</h2>
        <p className="text-sm text-stone-600 max-w-xl mx-auto leading-relaxed">
          Expand the footprint of certified, premium Siddha and Ayurvedic medicine across North America, Europe, and the Middle East. Partner with India's leading organic pharmacy.
        </p>

        {/* B2B sub-nav */}
        <div className="mx-auto max-w-xs flex bg-stone-100 p-0.5 rounded-lg border mt-6">
          <button
            onClick={() => setB2bTab("wholesale")}
            className={`flex-1 py-2 text-xs font-bold rounded-md transition-all cursor-pointer ${b2bTab === "wholesale" ? 'bg-emerald-800 text-white shadow-sm' : 'text-stone-500 hover:text-stone-800'}`}
          >
            Wholesale / Export
          </button>
          <button
            onClick={() => setB2bTab("franchise")}
            className={`flex-1 py-2 text-xs font-bold rounded-md transition-all cursor-pointer ${b2bTab === "franchise" ? 'bg-emerald-800 text-white shadow-sm' : 'text-stone-500 hover:text-stone-800'}`}
          >
            Franchise Partner
          </button>
        </div>
      </div>

      {/* Grid structure: Left Info, Right Application Form */}
      <div className="grid gap-8 lg:grid-cols-2">
        
        {/* Left Column: Business Benefits and Models */}
        <div className="space-y-6">
          {b2bTab === "wholesale" ? (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-stone-900">Wholesale, Dealership & Global Export</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                IGO Pharma exports standardized herbal powders, raw ingredients, massage oils, and classical AYUSH formulations to over 15 countries. We accommodate high-volume customized batches for bulk retailers.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3.5 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Globe2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider">FDA & European Compliance</h4>
                    <p className="text-xs text-stone-500 leading-normal font-light">Our export batches undergo rigorous USDA Organic, NPOP India, and ISO heavy metal testing before custom clearance.</p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider">Tiered Bulk Discounts</h4>
                    <p className="text-xs text-stone-500 leading-normal font-light">Receive up to 45% profit margins on bulk ordering tiers exceeding ₹4,00,000 per shipment batch.</p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Building className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider">Dedicated Account Managers</h4>
                    <p className="text-xs text-stone-500 leading-normal font-light">Get full logistics tracking support across Shiprocket Cargo, Blue Dart, and Air/Sea freight operators.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-amber-50 border border-amber-200/50 p-4 flex justify-between items-center">
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-amber-950">Wholesale Product Catalog 2026</h4>
                  <p className="text-[10px] text-stone-500 font-medium">Download full specifications & botanical sheets</p>
                </div>
                <button 
                  onClick={() => alert("IGO Pharma Wholesale PDF Catalog and price listings downloading...")}
                  className="rounded-lg bg-emerald-800 text-white px-3 py-1.5 text-xs font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Download className="h-4 w-4" /> Download PDF
                </button>
              </div>
            </div>
          ) : (
            /* FRANCHISE INFO PANEL */
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-bold text-stone-900">Why Partner With IGO Pharma?</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Launch a modern, nature-inspired IGO Pharma wellness store + integrated Panchakarma consultation clinic in your city. Our franchise model offers solid return on investments with complete backend stock integration.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3.5 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider">Premium Interior Branding & Blueprint</h4>
                    <p className="text-xs text-stone-500 leading-normal font-light">We provide complete architectural blueprints detailing earthy wood finishes, glass display cabinets, and calming clinic lighting layouts.</p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider">Staff Training & Onboarding</h4>
                    <p className="text-xs text-stone-500 leading-normal font-light">We recruit and certify your retail staff and connect you with certified Ayurvedic and Siddha doctors for integrated clinics.</p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider">Exclusive Territorial Rights</h4>
                    <p className="text-xs text-stone-500 leading-normal font-light">Secure sole operational rights across a 5-mile radius to safeguard your local retail and treatment revenues.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-emerald-50 border border-emerald-150 p-4 flex justify-between items-center">
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-emerald-950">Franchise Investment Brochure</h4>
                  <p className="text-[10px] text-stone-500 font-medium">Includes ROI calculations and layout formats</p>
                </div>
                <button 
                  onClick={() => alert("IGO Pharma Franchise Business Prospectus downloading...")}
                  className="rounded-lg bg-emerald-800 text-white px-3 py-1.5 text-xs font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Download className="h-4 w-4" /> Download Prospectus
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Application Form */}
        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-stone-900 border-b pb-2">Partnership Application Form</h3>
          
          <form onSubmit={handleB2BSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Company / Retail Store Name *</label>
              <input 
                type="text" 
                required
                placeholder="Organic Foods LLC"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full rounded-xl border border-stone-300 px-3 py-2 text-xs outline-none focus:border-emerald-700" 
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Select Partnership Type *</label>
                <select 
                  value={partnerType}
                  onChange={(e) => setPartnerType(e.target.value)}
                  className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-xs outline-none focus:border-emerald-700"
                >
                  <option value="Distributor">Global Distributor</option>
                  <option value="Dealer">Regional Dealer</option>
                  <option value="Retailer">Offline Herbal Retailer</option>
                  <option value="Franchisee">Franchise Store Investor</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Business Registration / GST *</label>
                <input 
                  type="text" 
                  required
                  placeholder="GSTIN/VAT/EIN code"
                  value={gstIn}
                  onChange={(e) => setGstIn(e.target.value)}
                  className="w-full rounded-xl border border-stone-300 px-3 py-2 text-xs outline-none focus:border-emerald-700" 
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Operation Country *</label>
                <input 
                  type="text" 
                  required
                  placeholder="United States"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full rounded-xl border border-stone-300 px-3 py-2 text-xs outline-none focus:border-emerald-700" 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Target Annual Order Volume *</label>
                <select className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-xs focus:border-emerald-700">
                  <option>₹4 Lakh to ₹12 Lakh</option>
                  <option>₹12 Lakh to ₹40 Lakh</option>
                  <option>Exceeding ₹40 Lakh</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Detail Your Regional Footprint & Goals</label>
              <textarea 
                rows={3}
                placeholder="Mention active retail channels, therapeutic clinic space, etc."
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                className="w-full rounded-xl border border-stone-300 px-3 py-2 text-xs outline-none focus:border-emerald-700"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-800 py-3 text-xs font-bold text-white hover:bg-emerald-950 transition-colors shadow-md cursor-pointer"
            >
              Submit Business Proposal
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
