import React, { useState } from "react";
import { Search, Plus, Filter, Scissors, Check, X } from "lucide-react";
import { useStore } from "../../context/StoreContext";

export default function AdminCoupons() {
  const { adminCoupons } = useStore();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCoupons = adminCoupons.filter(c => 
    c.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-black text-stone-800">Promo Codes & Offers</h2>
        <button className="bg-emerald-800 text-white px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-emerald-900 transition-colors">
          <Plus className="h-4 w-4" /> Create Coupon
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
        <div className="p-4 border-b border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 h-5 w-5" />
            <input 
              type="text" 
              placeholder="Search by promo code..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <button className="px-3 py-2 border border-stone-200 rounded-lg text-sm font-bold text-stone-600 flex items-center gap-2 hover:bg-stone-50">
            <Filter className="h-4 w-4" /> Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-stone-50 border-b border-stone-200">
              <tr>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Promo Code</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Discount</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Usage</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Expiry</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Status</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filteredCoupons.map(coupon => (
                <tr key={coupon.code} className="hover:bg-stone-50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2 text-sm font-black text-emerald-800">
                      <Scissors className="h-4 w-4 text-emerald-600" />
                      {coupon.code}
                    </div>
                    {coupon.minPurchase && (
                      <p className="text-[10px] text-stone-500 mt-1 uppercase tracking-wider">Min spend: ₹{coupon.minPurchase}</p>
                    )}
                  </td>
                  <td className="py-3 px-4 text-sm font-bold text-stone-800">
                    {coupon.type === 'percentage' ? `${coupon.discount}% OFF` : `₹${coupon.discount} OFF`}
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <span className="font-bold text-stone-800">{coupon.usedCount || 0}</span>
                    <span className="text-stone-500 text-xs"> / {coupon.usageLimit || '∞'}</span>
                  </td>
                  <td className="py-3 px-4 text-sm text-stone-600">
                    {coupon.expiryDate || 'No Expiry'}
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-bold ${
                      coupon.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                      coupon.status === 'Expired' ? 'bg-red-100 text-red-700' :
                      'bg-stone-100 text-stone-700'
                    }`}>
                      {coupon.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-1.5 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Deactivate">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredCoupons.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-stone-500">No promo codes found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
