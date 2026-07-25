import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    alert(`Thank you, ${name}. Your message has been received — our support team will respond to ${email} within 24 hours.`);
    setName(""); setEmail(""); setMessage("");
  };

  return (
    <div className="w-full bg-stone-50 min-h-screen pb-16">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] sm:h-[450px]">
        <img 
          src="/images/contact-us-hero.png" 
          alt="Contact Us" 
          className="w-full h-full object-cover object-[center_25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-100/90 via-stone-100/60 to-transparent flex flex-col justify-center px-4 md:px-12 lg:px-24">
          <nav className="flex items-center gap-1.5 text-[11px] text-emerald-800 font-medium mb-4">
            <Link to="/" className="hover:text-emerald-600">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-bold">Contact Us</span>
          </nav>
          <div className="max-w-md space-y-4">
            <h1 className="text-4xl md:text-5xl font-black text-emerald-950">Contact Us</h1>
            <p className="text-sm md:text-base text-stone-800 font-medium">
              We're here to help you on your journey<br />to natural wellness.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Card - Overlapping Hero */}
      <div className="mx-auto max-w-6xl px-4 relative -mt-16 sm:-mt-24 z-10">
        <div className="rounded-2xl bg-white shadow-lg overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Column: Get in Touch */}
          <div className="lg:w-1/2 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-stone-200">
            <h2 className="text-xl font-bold text-emerald-900 mb-8 border-b-2 border-emerald-100 pb-2 inline-block">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-emerald-800 shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-bold text-stone-900">Our Address</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    IGO Pharma Private Limited,<br />
                    No 17, Kovalan Street, 2nd Main Road,<br />
                    Uthandi Kanathur, Chennai - 600119,<br />
                    Tamil Nadu, India.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-emerald-800 shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-bold text-stone-900">Phone Number</h4>
                  <a href="tel:+917397789803" className="text-xs text-stone-600 mt-1 hover:text-emerald-700 block">+91 73977 89803</a>
                  <a href="https://wa.me/917397789803" target="_blank" rel="noreferrer" className="text-xs text-stone-600 mt-1 hover:text-emerald-700 block">WhatsApp: +91 73977 89803</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-emerald-800 shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-bold text-stone-900">Email Address</h4>
                  <a href="mailto:bd2@igogroups.com" className="text-xs text-stone-600 mt-1 hover:text-emerald-700 block">bd2@igogroups.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-emerald-800 shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-bold text-stone-900">Customer Support Hours</h4>
                  <p className="text-xs text-stone-600 mt-1">10:00 AM – 7:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Send Us a Message */}
          <div className="lg:w-1/2 p-8 md:p-12">
            <h2 className="text-xl font-bold text-emerald-900 mb-8 border-b-2 border-emerald-100 pb-2 inline-block">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name *" className="w-full rounded-xl border border-stone-300 px-4 py-3 text-xs outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700" />
                </div>
                <div>
                  <input type="tel" required placeholder="Phone Number *" className="w-full rounded-xl border border-stone-300 px-4 py-3 text-xs outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-1">
                <div>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address *" className="w-full rounded-xl border border-stone-300 px-4 py-3 text-xs outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700" />
                </div>
                <div>
                  <select required className="w-full rounded-xl border border-stone-300 px-4 py-3 text-xs outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 bg-white text-stone-500">
                    <option value="" disabled selected>Select Your Enquiry *</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Product Support">Product Support</option>
                    <option value="Wholesale">Wholesale / Franchising</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <textarea required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message *" className="w-full rounded-xl border border-stone-300 px-4 py-3 text-xs outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700" />
                </div>
              </div>
              <button type="submit" className="rounded-xl bg-emerald-800 text-white px-6 py-3 text-xs font-bold hover:bg-emerald-950 transition-colors cursor-pointer flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Section: Wellness & Map */}
      <div className="mx-auto max-w-6xl px-4 mt-12 grid lg:grid-cols-2 gap-12">
        
        {/* Wellness Matters */}
        <div className="p-4 md:p-6 bg-emerald-50/50 rounded-2xl">
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Your Wellness Matters to Us</h2>
          <p className="text-xs text-stone-700 mb-8 leading-relaxed">
            At IGO Pharma, we believe that better health begins with better choices. From traditional herbal wisdom to carefully developed wellness solutions, we are committed to helping you discover products that support your everyday well-being.
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-emerald-700">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
              </div>
              <span className="text-[10px] font-bold text-emerald-900 uppercase tracking-wider">Traditional Wisdom</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-emerald-700">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 11v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3a4 4 0 0 0 4-4V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a4 4 0 0 0 4 4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-8"/><path d="M12 11v10"/></svg>
              </div>
              <span className="text-[10px] font-bold text-emerald-900 uppercase tracking-wider">Thoughtful Formulations</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-emerald-700">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></svg>
              </div>
              <span className="text-[10px] font-bold text-emerald-900 uppercase tracking-wider">Everyday Wellness</span>
            </div>
          </div>
        </div>

        {/* Find Us Here */}
        <div className="p-4 md:p-6 bg-emerald-50/50 rounded-2xl">
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Find Us Here</h2>
          <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden shadow-sm relative border border-emerald-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.756285409156!2d80.2443015!3d12.9233633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d808f2a1b1b%3A0xc47b9d5c2e9b047!2sIGO%20Agritech%20Farms!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="IGO Farm Map"
            />
            {/* View Larger Map Link Overlay to match design */}
            <div className="absolute top-2 left-2 bg-white px-3 py-2 shadow rounded flex flex-col pointer-events-none">
              <span className="text-sm font-bold text-stone-900">IGO Pharma</span>
              <a href="https://maps.google.com/?q=IGO+Agritech+Farms" target="_blank" rel="noreferrer" className="text-xs text-blue-600 hover:underline pointer-events-auto mt-0.5">View larger map</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
