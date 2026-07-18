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
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 space-y-8">
      <nav className="flex items-center gap-1.5 text-[11px] text-stone-500 font-medium">
        <Link to="/" className="hover:text-emerald-700">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-emerald-800 font-bold">Contact Us</span>
      </nav>

      <div className="text-center space-y-2">
        <h1 className="text-3xl font-black text-emerald-950">We're Here to Help</h1>
        <p className="text-xs text-stone-600 max-w-md mx-auto font-light">Reach out for order support, product questions, or wholesale enquiries.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1 space-y-4">
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm flex items-start gap-3">
            <Phone className="h-5 w-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-stone-800">Call / WhatsApp</h4>
              <p className="text-xs text-stone-500">+91 73977 89803</p>
            </div>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm flex items-start gap-3">
            <Mail className="h-5 w-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-stone-800">Email Support</h4>
              <p className="text-xs text-stone-500">bd2@igogroups.com</p>
            </div>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm flex items-start gap-3">
            <MapPin className="h-5 w-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-stone-800">Headquarters</h4>
              <p className="text-xs text-stone-500">No 17, Kovalan Street, 2nd Main Road, Uthandi Kanathur, Chennai - 600119, Tamil Nadu, India</p>
            </div>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm flex items-start gap-3">
            <Clock className="h-5 w-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-stone-800">Support Hours</h4>
              <p className="text-xs text-stone-500">Mon - Sat: 9:00 AM - 7:00 PM IST</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="lg:col-span-2 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-4">
          <h3 className="text-sm font-black text-stone-900 uppercase tracking-wider flex items-center gap-1.5"><MessageCircle className="h-4.5 w-4.5 text-emerald-700" /> Send Us a Message</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Your Name *</label>
              <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" className="w-full rounded-xl border border-stone-300 px-3 py-2 text-xs outline-none focus:border-emerald-700" />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Email Address *</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@gmail.com" className="w-full rounded-xl border border-stone-300 px-3 py-2 text-xs outline-none focus:border-emerald-700" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">Message *</label>
            <textarea required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can we help you today?" className="w-full rounded-xl border border-stone-300 px-3 py-2 text-xs outline-none focus:border-emerald-700" />
          </div>
          <button type="submit" className="rounded-xl bg-emerald-800 text-white px-6 py-2.5 text-xs font-bold hover:bg-emerald-950 transition-colors cursor-pointer">
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );
}
