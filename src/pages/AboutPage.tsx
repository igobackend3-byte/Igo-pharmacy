import React from "react";
import { Link } from "react-router-dom";
import { Leaf, ShieldCheck, Users, Target, Eye, Handshake, MapPin, Calendar, HeartHandshake, Home, FlaskConical, Pill, Sprout } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf7]">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: 520 }}>
        {/* Background image */}
        <img
          src="/images/about-us-hero.jpg"
          alt="IGO Group – Growing Together"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ objectPosition: "center 40%" }}
        />
        {/* Subtle overlay – left-weighted so text stays readable, right side stays vivid */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-white/10" />

        <div className="relative z-10 pt-12 pb-16 px-4 md:px-8">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-black text-emerald-900 mb-4 uppercase tracking-tight">About Us</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-8 leading-tight">
              Growing Together.<br />Building a Better Tomorrow.
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-8">
                <p className="text-stone-700 leading-relaxed text-lg font-medium">
                  IGO Group is driven by a strong passion for agriculture and a deep commitment to farmer welfare, natural living, and sustainable growth. What started as a vision to support farmers has today grown into a diversified organization creating value across multiple sectors.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 pt-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-100 rounded-full">
                      <Sprout className="h-6 w-6 text-emerald-800" />
                    </div>
                    <span className="font-bold text-emerald-900 text-sm leading-tight">Rooted in<br />Agriculture</span>
                  </div>
                  <div className="hidden sm:block w-px bg-emerald-200 h-10 self-center"></div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-100 rounded-full">
                      <HeartHandshake className="h-6 w-6 text-emerald-800" />
                    </div>
                    <span className="font-bold text-emerald-900 text-sm leading-tight">Built on Trust &<br />Relationships</span>
                  </div>
                  <div className="hidden sm:block w-px bg-emerald-200 h-10 self-center"></div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-100 rounded-full">
                      <Leaf className="h-6 w-6 text-emerald-800" />
                    </div>
                    <span className="font-bold text-emerald-900 text-sm leading-tight">Committed to<br />Sustainable Future</span>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="/images/about/about us.png" alt="IGO Farming" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Journey & Stats */}
      <div className="bg-[#f6f4eb] py-16 px-4 md:px-8 border-y border-stone-200">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 mt-2">
              <Sprout className="h-16 w-16 text-emerald-600/30" strokeWidth={1.5} />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-emerald-900 uppercase tracking-widest">Our Journey</h2>
              <p className="text-stone-700 leading-relaxed font-medium">
                From humble beginnings, IGO Group has grown step by step with the support of thousands of farmers, partners, and well-wishers. Our consistent hard work, innovation, and customer trust have helped us build a strong foundation in agriculture and beyond.
              </p>
              <p className="text-stone-700 leading-relaxed font-medium">
                Today, we are proud to be a brand that stands for quality, integrity, and long-term relationships.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Users, label: "10,000+", desc: "Happy Farmers" },
              { icon: Handshake, label: "500+", desc: "Business Partners" },
              { icon: MapPin, label: "20+", desc: "States Presence" },
              { icon: Calendar, label: "15+", desc: "Years of Trust" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4 bg-[#fdfbf7] p-5 rounded-2xl shadow-sm border border-stone-200/50 hover:border-emerald-200 transition-colors">
                <stat.icon className="h-10 w-10 text-emerald-700 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="text-2xl font-black text-emerald-950">{stat.label}</div>
                  <div className="text-xs font-bold text-stone-500 uppercase tracking-wider">{stat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ecosystem Banner */}
      <div className="bg-emerald-950 text-white py-20 px-4 md:px-8 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10">
           <img src="/images/about/a complete agriculture ecosystem.jpg" alt="Background" className="w-full h-full object-cover mix-blend-overlay grayscale" />
         </div>
         <div className="relative mx-auto max-w-6xl text-center space-y-14">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-widest leading-tight text-white">A Complete Agriculture Ecosystem,<br />Not a Single Business</h2>
              <p className="text-emerald-100/80 max-w-3xl mx-auto text-base md:text-lg font-light leading-relaxed">
                IGO Group is more than just a company – it is a complete agriculture ecosystem. We work across multiple areas to strengthen the entire agri value chain and create opportunities for farmers, partners, and communities.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-4">
              {[
                { icon: Leaf, label: "AGRICULTURE" },
                { icon: Home, label: "AGRI ESTATES" },
                { icon: FlaskConical, label: "HERBAL &\nNATURAL PRODUCTS" },
                { icon: Pill, label: "PHARMA &\nWELLNESS" },
                { icon: Handshake, label: "FRANCHISE\nOPPORTUNITIES" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-4 text-center group">
                  <div className="h-20 w-20 rounded-full border border-emerald-400/30 flex items-center justify-center bg-emerald-900/40 backdrop-blur-md group-hover:bg-emerald-800 transition-colors">
                    <item.icon className="h-8 w-8 text-emerald-300" strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-widest whitespace-pre-line text-emerald-50">{item.label}</span>
                </div>
              ))}
            </div>
         </div>
      </div>

      {/* Business Verticals */}
      <div className="bg-[#fdfbf7] py-20 px-4 md:px-8 relative">
        <div className="mx-auto max-w-7xl space-y-16">
          <div className="text-center flex items-center justify-center gap-6">
            <div className="h-px w-24 bg-emerald-200"></div>
            <h2 className="text-2xl font-black text-emerald-950 uppercase tracking-widest">Our Business Verticals</h2>
            <div className="h-px w-24 bg-emerald-200"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "AGRICULTURE", img: "/images/about/argiculture.webp", icon: Leaf, desc: "High-quality inputs, expert guidance, and modern solutions to improve yield and farmer income." },
              { title: "AGRI ESTATES", img: "/images/about/agri estates.jpg", icon: Home, desc: "Premium farmland projects that offer great returns and a secure future." },
              { title: "HERBAL & NATURAL PRODUCTS", img: "/images/about/herbal and natural products.jpg", icon: FlaskConical, desc: "Natural, safe, and effective products for healthier living." },
              { title: "PHARMA & WELLNESS", img: "/images/about/pharma & wellness.jpg", icon: Pill, desc: "Quality wellness and pharma products supporting a healthy and happy life." },
              { title: "FRANCHISE OPPORTUNITIES", img: "/images/about/franchies opportunites.jpg", icon: Handshake, desc: "Profitable business opportunities with complete support and a trusted brand." }
            ].map((vertical, i) => (
              <div key={i} className="bg-[#f6f4eb] rounded-2xl shadow-sm border border-stone-200/50 flex flex-col group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Image — no overflow-hidden so icon is never clipped */}
                <div className="h-36 rounded-t-2xl overflow-hidden">
                  <img src={vertical.img} alt={vertical.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                {/* Icon badge — sits outside the image div, pulled up over the image edge */}
                <div className="flex justify-center -mt-7 relative z-10">
                  <div className="h-14 w-14 bg-emerald-900 rounded-full flex items-center justify-center border-4 border-[#f6f4eb] shadow-md">
                    <vertical.icon className="h-6 w-6 text-emerald-100" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="pt-4 pb-8 px-5 text-center flex-1 flex flex-col">
                  <h3 className="text-[13px] font-black text-emerald-950 mb-3 uppercase tracking-widest">{vertical.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed font-medium flex-1">{vertical.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision, Mission, Why Choose */}
      <div className="bg-white py-20 px-4 md:px-8 border-y border-stone-200">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-3 gap-8">
          <div className="bg-[#fdfbf7] p-8 lg:p-10 rounded-[2rem] border border-stone-200/60 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-5 mb-6">
              <div className="h-14 w-14 bg-emerald-900 rounded-full flex items-center justify-center text-emerald-50 shadow-inner">
                <Eye className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-black text-emerald-950 uppercase tracking-widest">Our Vision</h3>
            </div>
            <p className="text-stone-700 leading-relaxed font-medium">
              To be a global leader in sustainable agriculture and allied sectors, creating prosperity for farmers, partners, and the nation.
            </p>
          </div>
          <div className="bg-[#fdfbf7] p-8 lg:p-10 rounded-[2rem] border border-stone-200/60 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-5 mb-6">
              <div className="h-14 w-14 bg-emerald-900 rounded-full flex items-center justify-center text-emerald-50 shadow-inner">
                <Target className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-black text-emerald-950 uppercase tracking-widest">Our Mission</h3>
            </div>
            <p className="text-stone-700 leading-relaxed font-medium">
              To empower farmers and entrepreneurs through innovation, quality, and integrity while delivering value to society and protecting nature.
            </p>
          </div>
          <div className="bg-[#fdfbf7] p-8 lg:p-10 rounded-[2rem] border border-stone-200/60 shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-center gap-5 mb-6">
              <div className="h-14 w-14 bg-emerald-900 rounded-full flex items-center justify-center text-emerald-50 shadow-inner">
                <ShieldCheck className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-black text-emerald-950 uppercase tracking-widest">Why Choose IGO?</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Strong Agriculture Background",
                "Quality Products & Services",
                "Transparent & Ethical Business",
                "Complete Support & Training",
                "Long-Term Business Relationships"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-stone-700 text-sm font-bold">
                  <span className="text-emerald-700 mt-0.5">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Sustainable Growth */}
      <div className="bg-[#f6f4eb] py-20 px-4 md:px-8">
        <div className="mx-auto max-w-5xl bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-stone-200/50 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0 relative group">
            <img src="/images/about/our commitment to sustainable growth.jpg" alt="Sustainable Growth" className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-8 border-[#f6f4eb] group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute -bottom-2 right-4 h-16 w-16 bg-emerald-900 rounded-full flex items-center justify-center text-emerald-100 border-4 border-white shadow-lg">
              <Leaf className="h-7 w-7" strokeWidth={1.5} />
            </div>
          </div>
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-2xl font-black text-emerald-950 uppercase tracking-widest">Our Commitment to<br className="hidden md:block" />Sustainable Growth</h2>
            <p className="text-stone-600 leading-relaxed max-w-2xl font-medium text-lg">
              We believe in growing responsibly – by caring for our soil, supporting our farmers, and building a better future for generations to come. Sustainability is not just our goal, it is our way of life.
            </p>
          </div>
          <div className="flex-shrink-0 hidden lg:block">
            <img src="/images/about/our commintent  to sustainable growth1.jpg" alt="Tree" className="w-48 h-48 rounded-2xl object-cover shadow-inner opacity-80" />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-emerald-950 text-white py-14 px-4 md:px-8 border-t-[8px] border-emerald-800">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
               <div className="h-px w-12 bg-emerald-400"></div>
               <h2 className="text-lg md:text-xl font-black uppercase tracking-widest text-emerald-50">Be a Part of the IGO Growth Journey</h2>
               <div className="h-px w-12 bg-emerald-400 md:hidden"></div>
            </div>
            <p className="text-emerald-200/80 font-medium text-base md:text-lg max-w-xl">Join hands with IGO Group and grow together in a journey of trust, growth, and success.</p>
          </div>
          <Link to="/franchise" className="inline-block flex-shrink-0 rounded-full border-2 border-emerald-400 bg-transparent hover:bg-emerald-400 hover:text-emerald-950 text-emerald-50 px-8 py-4 text-xs font-black uppercase tracking-widest transition-all duration-300">
            Explore Franchise Opportunities
          </Link>
        </div>
      </div>
    </div>
  );
}
