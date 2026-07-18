import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, FileText } from "lucide-react";

interface PolicySection {
  heading: string;
  body: string;
}

interface PolicyLayoutProps {
  title: string;
  updated: string;
  intro: string;
  sections: PolicySection[];
}

export default function PolicyLayout({ title, updated, intro, sections }: PolicyLayoutProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 md:px-8 space-y-8">
      <nav className="flex items-center gap-1.5 text-[11px] text-stone-500 font-medium">
        <Link to="/" className="hover:text-emerald-700">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-emerald-800 font-bold">{title}</span>
      </nav>

      <div className="space-y-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 font-mono uppercase tracking-wider">
          <FileText className="h-4 w-4" /> Legal
        </span>
        <h1 className="text-2xl md:text-3xl font-black text-emerald-950">{title}</h1>
        <p className="text-[11px] text-stone-400 font-mono">Last updated: {updated}</p>
        <p className="text-sm text-stone-600 leading-relaxed font-light">{intro}</p>
      </div>

      <div className="space-y-6">
        {sections.map((s, i) => (
          <div key={i} className="space-y-1.5">
            <h2 className="text-sm font-bold text-stone-900">{s.heading}</h2>
            <p className="text-xs text-stone-600 leading-relaxed font-light whitespace-pre-line">{s.body}</p>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-stone-400 pt-4 border-t border-stone-100">
        Questions about this policy? <Link to="/contact" className="text-emerald-800 font-bold hover:underline">Contact us</Link>.
      </p>
    </div>
  );
}
