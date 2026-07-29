import React from "react";
import { Construction } from "lucide-react";

interface AdminGenericTabProps {
  title: string;
  description?: string;
}

export default function AdminGenericTab({ title, description }: AdminGenericTabProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
      <div className="h-20 w-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-2 border border-emerald-100">
        <Construction className="h-10 w-10" />
      </div>
      <h2 className="text-3xl font-black text-stone-800">{title}</h2>
      <p className="text-stone-500 max-w-md">
        {description || `The ${title} module is currently under development. This area will be available in the next system update.`}
      </p>
      
      <button className="mt-4 bg-white border border-stone-200 text-stone-600 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-stone-50 transition-colors shadow-sm">
        Notify Me When Ready
      </button>
    </div>
  );
}
