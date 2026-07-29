import React, { useState } from "react";
import { Search, Download, Filter, FileText } from "lucide-react";
import { useStore } from "../../context/StoreContext";

export default function AdminSalesHistory() {
  const { adminOrders } = useStore();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSales = adminOrders.filter(o => 
    o.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
    (o.customer || o.address?.name || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleExport = () => {
    alert("Exporting Sales History to CSV (Mock)");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-stone-800">Sales History</h2>
          <p className="text-stone-500 text-sm">Comprehensive ledger of all completed transactions.</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={handleExport} className="bg-emerald-800 text-white px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-emerald-900 transition-colors">
            <Download className="h-4 w-4" /> Export Report
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
        <div className="p-4 border-b border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 h-5 w-5" />
            <input 
              type="text" 
              placeholder="Search by Invoice ID, Order ID, or Customer..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <button className="px-3 py-2 border border-stone-200 rounded-lg text-sm font-bold text-stone-600 flex items-center gap-2 hover:bg-stone-50">
            <Filter className="h-4 w-4" /> Filter Date Range
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-stone-50 border-b border-stone-200">
              <tr>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Date & Time</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Invoice / Order ID</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Customer</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Payment Status</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase text-right">Revenue</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase text-right">Invoice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filteredSales.map(order => (
                <tr key={order.id} className="hover:bg-stone-50 transition-colors">
                  <td className="py-3 px-4 text-sm text-stone-600">{order.date}</td>
                  <td className="py-3 px-4">
                    <p className="text-sm font-bold text-emerald-800">{order.invoiceUrl || `INV-${order.id.split('-')[1]}`}</p>
                    <p className="text-xs text-stone-500">Ord: {order.id}</p>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-sm font-bold text-stone-800">{order.customer || order.address?.name || 'Guest'}</p>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex px-2 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700">
                      Paid
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm font-black text-emerald-700 text-right">
                    ₹{order.total}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button 
                      onClick={() => alert(`Opening invoice for ${order.id}`)}
                      className="p-2 text-stone-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="View Invoice"
                    >
                      <FileText className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredSales.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-stone-500">No sales records found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
