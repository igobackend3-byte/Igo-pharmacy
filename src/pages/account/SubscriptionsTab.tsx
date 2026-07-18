import React from "react";
import { useStore } from "../../context/StoreContext";

export default function SubscriptionsTab() {
  const { userProfile, cart } = useStore();
  if (!userProfile) return null;

  const activeSubscriptions = cart.filter(item => item.subscriptionType !== "once");

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-6 animate-fade-in">
      <div className="border-b border-stone-100 pb-4">
        <h3 className="text-lg font-black text-stone-900">Wellness Repeat Subscriptions</h3>
        <p className="text-xs text-stone-500">Scheduled refills for chronic herbal care at 15% discount. Cancel or pause at any time.</p>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50/10 p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex gap-3">
            <div className="h-12 w-12 rounded-xl bg-stone-50 overflow-hidden border">
              <img src="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=150" alt="Ashwagandha" referrerPolicy="no-referrer" />
            </div>
            <div>
              <span className="rounded bg-emerald-250 text-emerald-800 text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider font-mono">Monthly Auto-refill</span>
              <h4 className="text-sm font-bold text-stone-850">KSM-66 Organic Ashwagandha Capsules</h4>
              <p className="text-xs text-stone-400 font-medium">Refills every 28 days • Scheduled: Aug 15, 2026</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right font-mono">
              <span className="text-[10px] text-stone-400">Refill Cost</span>
              <p className="text-sm font-black text-emerald-800">₹1,899 <span className="text-[10px] text-stone-400">(-15%)</span></p>
            </div>
            <button
              onClick={() => alert("Refill paused. Refill rescheduled for Sept 12, 2026.")}
              className="rounded-lg border px-3 py-1.5 text-xs font-semibold text-stone-600 hover:bg-stone-50 cursor-pointer"
            >
              Pause
            </button>
            <button
              onClick={() => { if (confirm("Are you sure you want to cancel this wellness auto-refill subscription?")) alert("Subscription successfully cancelled."); }}
              className="rounded-lg border border-red-200 text-red-600 px-3 py-1.5 text-xs font-semibold hover:bg-red-50 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>

        {activeSubscriptions.length > 0 && (
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider">In your current basket</h4>
            {activeSubscriptions.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between rounded-xl border border-stone-100 p-3 text-xs">
                <span className="font-semibold text-stone-700">{item.product.name} • {item.subscriptionType}</span>
                <span className="font-mono font-bold text-emerald-800">₹{item.product.price}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
