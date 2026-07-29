import React, { useState } from "react";
import { Search, Mail, Phone, MapPin, MoreVertical, Shield, ArrowLeft, ShoppingBag, Clock, FileText } from "lucide-react";
import { useStore } from "../../context/StoreContext";

export default function AdminCustomers() {
  const { adminCustomers } = useStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null);

  const filteredCustomers = adminCustomers.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedCustomerId) {
    const customer = adminCustomers.find(c => c.id === selectedCustomerId);
    if (!customer) return null;

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setSelectedCustomerId(null)}
            className="p-2 bg-white border border-stone-200 rounded-xl text-stone-600 hover:bg-stone-50 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl">
              {customer.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-black text-stone-800">{customer.name}</h2>
              <p className="text-sm text-stone-500">Customer since 2024</p>
            </div>
          </div>
          <span className="ml-4 inline-flex px-3 py-1 rounded-full text-sm font-bold bg-emerald-100 text-emerald-700 flex items-center gap-1">
            <Shield className="h-4 w-4" /> Active
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <h3 className="font-bold text-stone-800 mb-4">Contact Info</h3>
              <div className="space-y-3 text-sm text-stone-600">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-emerald-600" /> {customer.email}
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-emerald-600" /> {customer.phone || "+91 9876543210"}
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                  <p>{customer.address || "123 Anna Salai, Chennai, Tamil Nadu - 600001"}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <h3 className="font-bold text-stone-800 mb-4">Value Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-stone-50 p-4 rounded-xl border border-stone-100">
                  <p className="text-xs font-bold text-stone-500 uppercase mb-1">Total Orders</p>
                  <p className="text-2xl font-black text-stone-800">{customer.totalOrders}</p>
                </div>
                <div className="bg-stone-50 p-4 rounded-xl border border-stone-100">
                  <p className="text-xs font-bold text-stone-500 uppercase mb-1">Total Spent</p>
                  <p className="text-2xl font-black text-emerald-700">₹{customer.spent}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <h3 className="font-bold text-stone-800 mb-4 flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-emerald-600" /> Order History
              </h3>
              <div className="space-y-4">
                {[1, 2, 3].map((_, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-stone-100 last:border-0">
                    <div>
                      <p className="font-bold text-stone-800">Order #ORD-{9000 - idx}</p>
                      <p className="text-xs text-stone-500">Oct {15 - idx}, 2024</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-stone-800">₹{Math.floor(Math.random() * 2000) + 500}</p>
                      <span className="text-xs font-bold text-emerald-700">Delivered</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <h3 className="font-bold text-stone-800 mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-emerald-600" /> Recent Activity
              </h3>
              <div className="relative pl-6 border-l-2 border-stone-100 space-y-6">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-emerald-500 border-4 border-white shadow"></div>
                  <p className="font-bold text-stone-800">Placed an order</p>
                  <p className="text-xs text-stone-500">2 days ago</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-blue-500 border-4 border-white shadow"></div>
                  <p className="font-bold text-stone-800">Logged in</p>
                  <p className="text-xs text-stone-500">2 days ago</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-stone-300 border-4 border-white shadow"></div>
                  <p className="font-bold text-stone-800">Account created</p>
                  <p className="text-xs text-stone-500">6 months ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-black text-stone-800">Customers Directory</h2>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
        <div className="p-4 border-b border-stone-200">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 h-5 w-5" />
            <input 
              type="text" 
              placeholder="Search customers by name or email..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-stone-50 border-b border-stone-200">
              <tr>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Customer</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Contact</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Orders</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Total Spent</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Status</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filteredCustomers.map(customer => (
                <tr key={customer.id} className="hover:bg-stone-50 transition-colors">
                  <td className="py-3 px-4">
                    <button onClick={() => setSelectedCustomerId(customer.id)} className="flex items-center gap-3 text-left hover:opacity-80 transition-opacity">
                      <div className="h-10 w-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                        {customer.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-stone-800 hover:underline">{customer.name}</p>
                        <p className="text-xs text-stone-500">ID: {customer.id}</p>
                      </div>
                    </button>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1 text-xs text-stone-600">
                      <div className="flex items-center gap-1.5"><Mail className="h-3 w-3" /> {customer.email}</div>
                      <div className="flex items-center gap-1.5"><Phone className="h-3 w-3" /> {customer.phone || "+91 9876543210"}</div>
                      <div className="flex items-center gap-1.5 text-stone-400"><MapPin className="h-3 w-3" /> {customer.address || "Chennai, TN"}</div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm font-bold text-stone-700">{customer.totalOrders}</td>
                  <td className="py-3 px-4 text-sm font-bold text-emerald-700">₹{customer.spent}</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex px-2 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 flex items-center gap-1 w-max">
                      <Shield className="h-3 w-3" /> Active
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button className="p-2 text-stone-400 hover:text-stone-800 hover:bg-stone-100 rounded-lg transition-colors">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredCustomers.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-stone-500">No customers found matching your search.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
