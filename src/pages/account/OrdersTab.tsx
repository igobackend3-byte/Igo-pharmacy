import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useStore } from "../../context/StoreContext";

export default function OrdersTab() {
  const { userProfile } = useStore();
  if (!userProfile) return null;

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-6 animate-fade-in">
      <div className="border-b border-stone-100 pb-4">
        <h3 className="text-lg font-black text-stone-900">Purchase Records</h3>
        <p className="text-xs text-stone-500">Track and view invoices for current and past traditional remedies orders.</p>
      </div>

      <div className="space-y-4">
        {userProfile.orders?.map(order => (
          <Link
            key={order.id}
            to={`/account/orders/${order.id}`}
            className="flex flex-col sm:flex-row justify-between sm:items-center rounded-2xl border border-stone-150 p-4 gap-3 bg-white shadow-sm hover:border-emerald-600 transition-all"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="font-bold text-stone-850">Order #{order.id}</span>
                <span className="text-stone-400">{order.date}</span>
              </div>
              <p className="text-[11px] text-stone-500">{order.items.length} item(s) • ₹{order.total}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-emerald-100 text-emerald-800 text-[10px] px-2.5 py-0.5 font-bold uppercase">{order.status}</span>
              <ChevronRight className="h-4 w-4 text-stone-400" />
            </div>
          </Link>
        ))}
        {(!userProfile.orders || userProfile.orders.length === 0) && (
          <div className="text-center py-12 space-y-3">
            <p className="text-xs text-stone-500 italic">No orders have been submitted yet.</p>
            <Link to="/shop" className="inline-block rounded-xl bg-emerald-800 text-white px-5 py-2 text-xs font-bold hover:bg-emerald-950">Start Shopping</Link>
          </div>
        )}
      </div>
    </div>
  );
}
