import React, { useState } from "react";
import { Search, Filter, Download, FileText, ChevronDown, ArrowLeft, Package, MapPin, CreditCard, Clock } from "lucide-react";
import { useStore } from "../../context/StoreContext";

export default function AdminOrders() {
  const { adminOrders } = useStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  // Since adminOrders contains minimal data right now, we map over it. In a real app, it would use the full Order type.
  const filteredOrders = adminOrders.filter(o => 
    (statusFilter === "All" || o.status === statusFilter) &&
    (o.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
    (o.customer || o.address?.name || "").toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const statuses = ["Processing", "Shipped", "Out for Delivery", "Delivered"];

  const handleExport = () => {
    alert("Exporting orders to CSV (Mock)");
  };

  const handleInvoice = (id: string) => {
    alert(`Generating invoice for ${id} (Mock)`);
  };

  if (selectedOrderId) {
    const order = adminOrders.find(o => o.id === selectedOrderId);
    if (!order) return null;

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setSelectedOrderId(null)}
            className="p-2 bg-white border border-stone-200 rounded-xl text-stone-600 hover:bg-stone-50 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div>
            <h2 className="text-2xl font-black text-stone-800">Order {order.id}</h2>
            <p className="text-sm text-stone-500">{order.date}</p>
          </div>
          <span className={`ml-4 inline-flex px-3 py-1 rounded-full text-sm font-bold ${
            order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-700' :
            order.status === 'Processing' ? 'bg-amber-100 text-amber-700' :
            'bg-blue-100 text-blue-700'
          }`}>
            {order.status}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <h3 className="font-bold text-stone-800 mb-4 flex items-center gap-2">
                <Package className="h-5 w-5 text-emerald-600" /> Products Ordered
              </h3>
              <div className="space-y-4">
                {order.items?.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-stone-100 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 bg-stone-100 rounded-lg flex items-center justify-center font-bold text-stone-400">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-stone-800">{item.name}</p>
                        <p className="text-xs text-stone-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-bold text-stone-800">₹{item.price * item.quantity}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <h3 className="font-bold text-stone-800 mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-emerald-600" /> Order Timeline
              </h3>
              <div className="relative pl-6 border-l-2 border-stone-100 space-y-6">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-emerald-500 border-4 border-white shadow"></div>
                  <p className="font-bold text-stone-800">Order Placed</p>
                  <p className="text-xs text-stone-500">{order.date}</p>
                </div>
                <div className="relative">
                  <div className={`absolute -left-[31px] top-1 h-4 w-4 rounded-full border-4 border-white shadow ${
                    ['Processing', 'Shipped', 'Out for Delivery', 'Delivered'].includes(order.status) ? 'bg-emerald-500' : 'bg-stone-300'
                  }`}></div>
                  <p className="font-bold text-stone-800">Processing</p>
                </div>
                <div className="relative">
                  <div className={`absolute -left-[31px] top-1 h-4 w-4 rounded-full border-4 border-white shadow ${
                    ['Shipped', 'Out for Delivery', 'Delivered'].includes(order.status) ? 'bg-emerald-500' : 'bg-stone-300'
                  }`}></div>
                  <p className="font-bold text-stone-800">Shipped</p>
                </div>
                <div className="relative">
                  <div className={`absolute -left-[31px] top-1 h-4 w-4 rounded-full border-4 border-white shadow ${
                    order.status === 'Delivered' ? 'bg-emerald-500' : 'bg-stone-300'
                  }`}></div>
                  <p className="font-bold text-stone-800">Delivered</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <h3 className="font-bold text-stone-800 mb-4">Customer Details</h3>
              <div className="space-y-3 text-sm">
                <p className="font-bold text-stone-700">{order.customer || order.address?.name || 'Guest User'}</p>
                <div className="flex items-start gap-2 text-stone-600">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                  <p>{order.address?.street || '123 Test St'}, {order.address?.city || 'Chennai'}, {order.address?.state || 'TN'} - {order.address?.pincode || '600001'}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <h3 className="font-bold text-stone-800 mb-4">Payment Summary</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-stone-500">Subtotal</span>
                  <span className="font-bold">₹{order.total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Shipping</span>
                  <span className="font-bold">₹0</span>
                </div>
                <div className="flex justify-between border-t border-stone-100 pt-2 mt-2">
                  <span className="font-black text-stone-800">Total</span>
                  <span className="font-black text-emerald-700 text-lg">₹{order.total}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-stone-600 bg-stone-50 p-3 rounded-xl border border-stone-100">
                <CreditCard className="h-4 w-4" />
                Paid via Razorpay
              </div>
            </div>

            <button 
              onClick={() => handleInvoice(order.id)}
              className="w-full bg-white border border-stone-200 text-stone-700 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-stone-50 transition-colors shadow-sm"
            >
              <FileText className="h-4 w-4" /> Download Invoice
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-black text-stone-800">Orders Management</h2>
        <div className="flex items-center gap-3">
          <button onClick={handleExport} className="bg-white border border-stone-200 text-stone-600 px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-stone-50 transition-colors">
            <Download className="h-4 w-4" /> Export CSV
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
        <div className="p-4 border-b border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 h-5 w-5" />
            <input 
              type="text" 
              placeholder="Search by order ID or customer..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <select 
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="appearance-none bg-white border border-stone-200 rounded-lg pl-4 pr-10 py-2 text-sm font-bold text-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
              >
                <option value="All">All Statuses</option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400 pointer-events-none" />
            </div>
            <button className="px-3 py-2 border border-stone-200 rounded-lg text-sm font-bold text-stone-600 flex items-center gap-2 hover:bg-stone-50">
              <Filter className="h-4 w-4" /> More Filters
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-stone-50 border-b border-stone-200">
              <tr>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Order Details</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Customer</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Total Amount</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Status</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filteredOrders.map(order => (
                <tr key={order.id} className="hover:bg-stone-50 transition-colors">
                  <td className="py-3 px-4">
                    <button 
                      onClick={() => setSelectedOrderId(order.id)}
                      className="text-sm font-bold text-emerald-800 hover:underline cursor-pointer text-left"
                    >
                      {order.id}
                    </button>
                    <p className="text-xs text-stone-500">{order.date}</p>
                  </td>
                  <td className="py-3 px-4">
                    <button 
                      onClick={() => setSelectedOrderId(order.id)}
                      className="text-sm font-bold text-stone-800 hover:underline cursor-pointer text-left"
                    >
                      {order.customer || order.address?.name || 'Guest'}
                    </button>
                  </td>
                  <td className="py-3 px-4 text-sm font-bold text-stone-800">
                    ₹{order.total}
                  </td>
                  <td className="py-3 px-4">
                    <div className="relative inline-block w-36">
                      <select 
                        defaultValue={order.status}
                        className={`appearance-none w-full border border-transparent hover:border-stone-200 rounded-lg pl-3 pr-8 py-1.5 text-xs font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                          order.status === 'Delivered' ? 'bg-emerald-50 text-emerald-700' :
                          order.status === 'Processing' ? 'bg-amber-50 text-amber-700' :
                          'bg-blue-50 text-blue-700'
                        }`}
                      >
                        {statuses.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 text-current pointer-events-none opacity-70" />
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button 
                      onClick={() => handleInvoice(order.id)}
                      className="p-2 text-stone-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Generate Invoice"
                    >
                      <FileText className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredOrders.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-stone-500">No orders found matching your search.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
