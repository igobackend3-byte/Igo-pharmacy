import React from "react";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center space-y-5">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800">
        <Leaf className="h-8 w-8" />
      </div>
      <h1 className="text-3xl font-black text-emerald-950">404 — Page Not Found</h1>
      <p className="text-sm text-stone-500">The traditional page you seek has wandered off the path. Let's guide you back.</p>
      <Link to="/" className="inline-block rounded-xl bg-emerald-800 text-white px-6 py-2.5 text-xs font-bold hover:bg-emerald-950">
        Return Home
      </Link>
    </div>
  );
}
