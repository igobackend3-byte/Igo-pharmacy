import React, { useState } from "react";
import {
  Award, Leaf, PhoneCall, Truck, TrendingUp,
  ArrowRight, MessageCircle, ClipboardList, ShoppingBag, BarChart2
} from "lucide-react";

/* â”€â”€ Why Partner icons & data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const WHY_ITEMS = [
  { icon: Award,         title: "Premium Quality",     desc: "100% Ayurvedic, safe & effective products" },
  { icon: ShoppingBag,   title: "Wide Product Range",  desc: "Diverse category covering daily wellness needs" },
  { icon: TrendingUp,    title: "High Demand",         desc: "Trusted by customers across markets" },
  { icon: PhoneCall,     title: "Marketing Support",   desc: "Product brochures, banners & promotional materials" },
  { icon: Truck,         title: "Reliable Supply",     desc: "Timely delivery with secure packaging" },
  { icon: BarChart2,     title: "Business Growth",     desc: "Attractive margins & long-term growth opportunities" },
];

/* â”€â”€ How It Works steps â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const STEPS = [
  { n: "1", title: "Get in Touch",        desc: "Share your business details with us." },
  { n: "2", title: "Review & Onboarding", desc: "Our team will review and onboard you." },
  { n: "3", title: "Place Your Order",    desc: "Choose products and place your wholesale order." },
  { n: "4", title: "Grow Your Business",  desc: "Receive products and grow your business with us." },
];

/* â”€â”€ Product categories â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const PRODUCT_CATS = [
  { name: "Herbal Powders",    sub: "Churnam & Powders",     image: "/images/gut health2.png" },
  { name: "Herbal Oils",       sub: "Thailam & Hair Oils",   image: "/images/amla oil.png" },
  { name: "Herbal Tablets",    sub: "Tablets & Capsules",    image: "/images/amla capsule.png" },
  { name: "Herbal Syrups",     sub: "Kashayam & Syrups",     image: "/images/tulsi syrup.png" },
  { name: "Personal Care",     sub: "Natural Care Products",  image: "/images/herbal facewash.png" },
  { name: "Health & Wellness", sub: "Wellness & Immunity",   image: "/images/immunity.png" },
];

/* â”€â”€ Let's Grow Together stats â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const GROW_STATS = [
  { icon: MessageCircle, title: "Easy Communication", desc: "Dedicated support for partners" },
  { icon: ClipboardList, title: "Flexible MOQ",       desc: "Minimum order quantity" },
  { icon: BarChart2,     title: "Attractive Margins", desc: "Best pricing for our partners" },
];

export default function B2BFranchise() {
  const [name, setName]       = useState("");
  const [phone, setPhone]     = useState("");
  const [email, setEmail]     = useState("");
  const [city, setCity]       = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setName(""); setPhone(""); setEmail(""); setCity(""); setMessage("");
  };

  return (
    <div className="bg-[#f9f7f2] min-h-screen font-sans">

      {/* â•â• HERO â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="relative w-full overflow-hidden bg-[#f0ede6]" style={{ minHeight: 340 }}>
        <img
          src="/images/wholesale.png"
          alt="Wholesale products"
          className="absolute right-0 top-0 h-full w-1/2 object-cover object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f0ede6] via-[#f0ede6]/90 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 py-14 md:py-20">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-stone-500 uppercase tracking-widest mb-5">
            <ArrowRight className="h-3 w-3" /> Wholesale &amp; Distribution
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-emerald-950 leading-tight mb-4 max-w-lg">
            Wholesale &amp; Franchise<br />Opportunities
          </h1>
          <p className="text-sm text-stone-600 leading-relaxed max-w-sm font-medium">
            Partner with IGO Pharma and bring the power of Ayurveda to more lives.
            Grow together with trust, quality &amp; support.
          </p>
        </div>
      </section>

      {/* â•â• WHY PARTNER â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="bg-white py-14 px-6 md:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-black text-stone-900 text-center mb-10">Why Partner with Us?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {WHY_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex flex-col items-center text-center gap-3">
                  <div className="h-14 w-14 rounded-full bg-stone-100 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-emerald-800" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xs font-black text-stone-900 leading-tight">{item.title}</h3>
                  <p className="text-[11px] text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* â•â• HOW IT WORKS + PRODUCT CATEGORIES â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="py-12 px-6 md:px-12">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-[280px_1fr] gap-8 items-start">
          {/* How It Works â€“ dark green card */}
          <div className="bg-emerald-900 rounded-2xl p-7 text-white h-full">
            <h3 className="text-lg font-black mb-6">How It Works</h3>
            <div className="flex flex-col gap-5">
              {STEPS.map((step) => (
                <div key={step.n} className="flex gap-4 items-start">
                  <div className="h-7 w-7 rounded-full bg-white/15 flex items-center justify-center shrink-0 text-xs font-black text-white">
                    {step.n}
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-tight">{step.title}</p>
                    <p className="text-[11px] text-emerald-200 leading-relaxed mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Product Categories */}
          <div>
            <h3 className="text-xl font-black text-stone-900 mb-6 text-center">Our Product Categories</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {PRODUCT_CATS.map((cat) => (
                <div key={cat.name} className="flex flex-col gap-2">
                  <div className="rounded-xl overflow-hidden aspect-square border border-stone-200 bg-white shadow-sm">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-black text-stone-800 leading-tight">{cat.name}</p>
                    <p className="text-[10px] text-stone-500">{cat.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* â•â• LET'S GROW TOGETHER FOOTER BAR â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="bg-white border-t border-stone-200 py-8 px-6 md:px-12">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-8">
          {/* Handshake image */}
          <div className="shrink-0 w-24 h-24 rounded-xl overflow-hidden hidden md:block border border-stone-200">
            <img src="/images/wholesale-handshake.jpg" alt="Partner with IGO" className="w-full h-full object-cover" />
          </div>

          {/* Text */}
          <div className="md:mr-6 text-center md:text-left">
            <h3 className="text-xl font-black text-stone-900">Let's Grow Together</h3>
            <p className="text-xs text-stone-500 mt-1 leading-relaxed max-w-xs">
              We believe in building long-term relationships with our partners. Join the IGO Pharma family
              and make wellness accessible to all.
            </p>
          </div>

          <div className="hidden md:block h-16 w-px bg-stone-200 mx-2 shrink-0" />

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 flex-1">
            {GROW_STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.title} className="flex flex-col items-center text-center gap-1.5 min-w-[80px]">
                  <div className="h-10 w-10 rounded-full bg-stone-100 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-emerald-800" strokeWidth={1.5} />
                  </div>
                  <p className="text-xs font-black text-stone-800">{stat.title}</p>
                  <p className="text-[10px] text-stone-500 leading-tight">{stat.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="hidden md:block h-16 w-px bg-stone-200 mx-2 shrink-0" />

          {/* CTA */}
          <div className="shrink-0">
            <button
              onClick={() => document.getElementById("franchise-form")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-emerald-900 text-white rounded-xl px-6 py-4 text-center cursor-pointer hover:bg-emerald-950 transition-colors shadow-md group"
            >
              <p className="text-xs font-black leading-tight flex items-center gap-1.5">
                <Leaf className="h-4 w-4 text-emerald-300" /> Become a Franchise Partner
              </p>
              <p className="text-[11px] text-emerald-200 font-bold mt-1 flex items-center gap-1 group-hover:gap-2 transition-all">
                Get in Touch <ArrowRight className="h-3.5 w-3.5" />
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* â•â• PARTNERSHIP APPLICATION FORM â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section id="franchise-form" className="py-14 px-6 md:px-12">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <span className="inline-block text-[10px] font-black uppercase tracking-widest text-emerald-700 font-mono mb-2">Apply Now</span>
            <h2 className="text-2xl font-black text-stone-900">Partnership Application Form</h2>
            <p className="text-xs text-stone-500 mt-2">Fill in your details and our team will reach out within 2 business days.</p>
          </div>

          {submitted && (
            <div className="mb-6 rounded-xl bg-emerald-50 border border-emerald-200 px-5 py-4 text-sm font-bold text-emerald-800 text-center">
              âœ… Thank you! Your application has been received. We'll be in touch soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-stone-200 shadow-sm p-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1.5">Full Name *</label>
                <input type="text" required placeholder="Your name" value={name} onChange={e => setName(e.target.value)}
                  className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-xs outline-none focus:border-emerald-600 focus:bg-white transition" />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1.5">Phone Number *</label>
                <input type="tel" required placeholder="+91 00000 00000" value={phone} onChange={e => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-xs outline-none focus:border-emerald-600 focus:bg-white transition" />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1.5">Email Address *</label>
                <input type="email" required placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-xs outline-none focus:border-emerald-600 focus:bg-white transition" />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1.5">City / State *</label>
                <input type="text" required placeholder="Chennai, Tamil Nadu" value={city} onChange={e => setCity(e.target.value)}
                  className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-xs outline-none focus:border-emerald-600 focus:bg-white transition" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5">Partnership Type *</label>
              <select className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-xs outline-none focus:border-emerald-600 focus:bg-white transition">
                <option>Franchise Partner</option>
                <option>Wholesale / Distributor</option>
                <option>Regional Dealer</option>
                <option>Institutional Buyer</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5">Message / Requirements</label>
              <textarea rows={3} placeholder="Tell us about your business and requirements..." value={message} onChange={e => setMessage(e.target.value)}
                className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-xs outline-none focus:border-emerald-600 focus:bg-white transition resize-none" />
            </div>
            <button type="submit"
              className="w-full rounded-xl bg-emerald-900 hover:bg-emerald-950 text-white py-3.5 text-sm font-black tracking-wide transition-colors shadow-md cursor-pointer flex items-center justify-center gap-2">
              Submit Partnership Application <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}

