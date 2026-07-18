import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ShieldCheck, Heart, Award, Globe, Phone } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [currency, setCurrency] = useState("INR (₹)");
  const [lang, setLang] = useState("English (IN)");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    alert(`Thank you for subscribing! We have registered '${email}' to receive seasonal wellness guides & promo offers.`);
    setEmail("");
  };

  return (
    <footer className="bg-stone-900 text-stone-300 font-sans border-t-4 border-emerald-900 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 md:px-8 space-y-16">
        
        {/* Top: Newsletter and Trust Certificates */}
        <div className="grid gap-8 lg:grid-cols-3 items-center border-b border-stone-800 pb-12">
          {/* Brand and Description */}
          <div className="space-y-3.5">
            <Link to="/">
              <Logo size={40} theme="light" />
            </Link>
            <p className="text-xs text-stone-400 leading-relaxed font-light">
              Traditional Siddha &amp; Ayurveda herbal wellness — Kerala Ayurveda stockist plus IGO's own churnam, kashayam, thailam, tablets &amp; personal care. An IGO Group of Companies brand.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-300">Join the Wellness Newsletter</h4>
            <p className="text-[11px] text-stone-400">Receive seasonal wellness guides &amp; 10% off your next refill.</p>
            
            <form onSubmit={handleSubscribe} className="flex h-10 items-center rounded-xl bg-stone-800 border border-stone-700 overflow-hidden px-2 focus-within:border-emerald-700 transition-all">
              <Mail className="h-4.5 w-4.5 text-stone-500 shrink-0" />
              <input 
                type="email" 
                required
                placeholder="patient@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent px-3 text-xs outline-none text-stone-100 placeholder-stone-500"
              />
              <button 
                type="submit" 
                className="rounded-lg bg-emerald-800 text-white px-4 py-1.5 text-xs font-bold hover:bg-emerald-950 transition-colors shrink-0 cursor-pointer"
              >
                Join
              </button>
            </form>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-bold text-stone-400">
            <div className="flex flex-col items-center gap-1.5 p-2 bg-stone-850 rounded-xl">
              <ShieldCheck className="h-5 w-5 text-emerald-500" />
              <span>AYUSH Certified</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 p-2 bg-stone-850 rounded-xl">
              <Award className="h-5 w-5 text-amber-400" />
              <span>WHO-GMP Standard</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 p-2 bg-stone-850 rounded-xl">
              <Heart className="h-5 w-5 text-red-500" />
              <span>Heavy Metal Free</span>
            </div>
          </div>
        </div>

        {/* Middle Segment: Extensive Links Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">

          {/* Col 1: Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><Link to="/about" className="hover:text-amber-300 transition-colors">About Us</Link></li>
              <li><Link to="/knowledge" className="hover:text-amber-300 transition-colors">Blog</Link></li>
              <li><Link to="/brands" className="hover:text-amber-300 transition-colors">Brands</Link></li>
              <li><Link to="/contact" className="hover:text-amber-300 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 2: Categories */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">Categories</h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><Link to="/category/churnam-and-powders" className="hover:text-amber-300 transition-colors">Churnam &amp; Powders</Link></li>
              <li><Link to="/category/kashayam-and-rasayanam" className="hover:text-amber-300 transition-colors">Kashayam &amp; Rasayanam</Link></li>
              <li><Link to="/category/thailam-and-oils" className="hover:text-amber-300 transition-colors">Thailam &amp; Oils</Link></li>
              <li><Link to="/category/tablets-and-capsules" className="hover:text-amber-300 transition-colors">Tablets &amp; Capsules</Link></li>
            </ul>
          </div>

          {/* Col 3: Support / Policies */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">Support</h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><Link to="/privacy-policy" className="hover:text-amber-300 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/pricing-policy" className="hover:text-amber-300 transition-colors">Pricing Policy</Link></li>
              <li><Link to="/return-policy" className="hover:text-amber-300 transition-colors">Return &amp; Refund</Link></li>
              <li><Link to="/terms-conditions" className="hover:text-amber-300 transition-colors">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          {/* Col 4: We may help u */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">We May Help U</h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><Link to="/faq" className="hover:text-amber-300 transition-colors">FAQ</Link></li>
              <li><Link to="/account/orders" className="hover:text-amber-300 transition-colors">Track Your Order</Link></li>
              <li><Link to="/consult" className="hover:text-amber-300 transition-colors">Doctor Consultations</Link></li>
              <li><Link to="/wholesale" className="hover:text-amber-300 transition-colors">Business Partnership</Link></li>
            </ul>
          </div>

          {/* Col 5: Contact Details */}
          <div className="space-y-4 text-xs text-stone-400">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">Contact</h4>
            <p className="leading-relaxed">
              <strong>Head Office:</strong><br />
              No 17, Kovalan Street, 2nd Main Road,<br />
              Uthandi Kanathur, Chennai - 600119, India
            </p>
            <p className="flex items-center gap-1.5">
              <Phone className="h-4 w-4 text-amber-300" />
              +91 73977 89803
            </p>
            <p><strong>Support Email:</strong> bd2@igogroups.com</p>
          </div>

        </div>

        {/* IGO Group Brands cross-links */}
        <div className="space-y-3 border-t border-stone-800 pt-8">
          <h4 className="text-xs font-black uppercase tracking-wider text-white">IGO Group Brands</h4>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-stone-400 font-medium">
            <a href="https://igoagritechfarms.in/" target="_blank" rel="noreferrer" className="hover:text-amber-300 transition-colors">IGO Agritech Farms</a>
            <a href="https://igocropcare.com/" target="_blank" rel="noreferrer" className="hover:text-amber-300 transition-colors">IGO CropCare</a>
            <a href="https://igonursery.com/" target="_blank" rel="noreferrer" className="hover:text-amber-300 transition-colors">IGO Nursery</a>
            <a href="https://igoacademy.in/" target="_blank" rel="noreferrer" className="hover:text-amber-300 transition-colors">IGO Academy</a>
            <a href="https://igofarmloans.com/" target="_blank" rel="noreferrer" className="hover:text-amber-300 transition-colors">IGO Farm Loans</a>
            <a href="https://farmgatemandi.com/" target="_blank" rel="noreferrer" className="hover:text-amber-300 transition-colors">FarmGate Mandi</a>
          </div>
        </div>

        {/* Lower row: Locales settings and Secure payment gateways */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-800 gap-6">
          
          {/* Select locale & Currency selectors */}
          <div className="flex items-center gap-4 text-xs font-bold text-stone-400">
            <div className="flex items-center gap-1">
              <Globe className="h-4 w-4" />
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value)}
                className="bg-stone-850 border border-stone-800 rounded px-2.5 py-1 text-stone-300 text-xs outline-none focus:border-emerald-700"
              >
                <option value="English (US)">English (US)</option>
                <option value="Tamil (Nattu)">Tamil (நாற்று)</option>
                <option value="Hindi (Vedic)">Hindi (वैदिक)</option>
              </select>
            </div>

            <div className="flex items-center gap-1">
              <span>Currency:</span>
              <select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-stone-850 border border-stone-800 rounded px-2.5 py-1 text-stone-300 text-xs outline-none focus:border-emerald-700"
              >
                <option value="USD ($)">USD ($)</option>
                <option value="INR (₹)">INR (₹)</option>
                <option value="AED (د.إ)">AED (د.إ)</option>
              </select>
            </div>
          </div>

          {/* Secure Payment Gateway icons */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold text-stone-500 uppercase">Secure Payments Via:</span>
            <div className="flex gap-1.5 font-mono text-[9px] font-bold">
              <span className="bg-stone-800 text-stone-300 px-2 py-1 rounded border border-stone-700">VISA</span>
              <span className="bg-stone-800 text-stone-300 px-2 py-1 rounded border border-stone-700">MC</span>
              <span className="bg-stone-800 text-stone-300 px-2 py-1 rounded border border-stone-700">STRIPE</span>
              <span className="bg-stone-800 text-stone-300 px-2 py-1 rounded border border-stone-700">PAYPAL</span>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center text-[11px] text-stone-500 pt-4 border-t border-stone-850">
          <p>© {new Date().getFullYear()} IGO Pharma — an IGO Group of Companies brand. All rights reserved. Vetted under the AYUSH Drug Control Codes.</p>
        </div>

      </div>
    </footer>
  );
}
