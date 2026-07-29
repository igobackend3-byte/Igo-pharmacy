import React from "react";
import { TrendingUp, Users, ShoppingBag, AlertTriangle, ArrowRight } from "lucide-react";
import { useStore } from "../../context/StoreContext";
import { AdminTab } from "./AdminSidebar";

interface AdminOverviewProps {
  setActiveTab: (tab: AdminTab) => void;
}

export default function AdminOverview({ setActiveTab }: AdminOverviewProps) {
  const { adminOrders, products, adminCustomers, adminLeads } = useStore();

  const totalSales = adminOrders.reduce((sum, order) => sum + (order.total || 0), 0);
  const lowStockProducts = products.filter(p => p.stock < 10);
  const recentOrders = adminOrders.slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-black text-stone-800">Dashboard Overview</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div 
          onClick={() => setActiveTab("sales_history")}
          className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 hover:border-emerald-300 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl group-hover:bg-emerald-200 transition-colors">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-stone-500 uppercase group-hover:text-emerald-700 transition-colors">Total Sales</p>
              <h3 className="text-2xl font-black text-stone-900">₹{totalSales.toLocaleString()}</h3>
            </div>
          </div>
        </div>
        
        <div 
          onClick={() => setActiveTab("orders")}
          className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 hover:border-amber-300 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-100 text-amber-700 rounded-xl group-hover:bg-amber-200 transition-colors">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-stone-500 uppercase group-hover:text-amber-700 transition-colors">Total Orders</p>
              <h3 className="text-2xl font-black text-stone-900">{adminOrders.length}</h3>
            </div>
          </div>
        </div>

        <div 
          onClick={() => setActiveTab("customers")}
          className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 text-blue-700 rounded-xl group-hover:bg-blue-200 transition-colors">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-stone-500 uppercase group-hover:text-blue-700 transition-colors">Customers</p>
              <h3 className="text-2xl font-black text-stone-900">{adminCustomers.length}</h3>
            </div>
          </div>
        </div>

        <div 
          onClick={() => setActiveTab("inventory")}
          className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 hover:border-red-300 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-100 text-red-700 rounded-xl group-hover:bg-red-200 transition-colors">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-stone-500 uppercase group-hover:text-red-700 transition-colors">Low Stock</p>
              <h3 className="text-2xl font-black text-stone-900">{lowStockProducts.length} items</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Mock Chart Area */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-stone-800">Monthly Sales (Last 6 Months)</h3>
              <div className="flex gap-4">
                <div className="text-right">
                  <p className="text-xs text-stone-500 font-bold uppercase">Total Revenue</p>
                  <p className="text-lg font-black text-emerald-700">₹1,220,000</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-stone-500 font-bold uppercase">Growth</p>
                  <p className="text-lg font-black text-emerald-600">+26.5%</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-64 w-full">
              {/* Y-Axis Labels */}
              <div className="absolute left-0 top-0 bottom-6 w-12 flex flex-col justify-between text-xs text-stone-400 font-bold pb-2">
                <span>350k</span>
                <span>262k</span>
                <span>175k</span>
                <span>87k</span>
                <span>0</span>
              </div>
              
              {/* Chart SVG */}
              <div className="absolute left-12 right-0 top-0 bottom-6">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 500 200">
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  
                  {/* Grid Lines */}
                  {[0, 50, 100, 150, 200].map(y => (
                    <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="#f5f5f4" strokeWidth="1" strokeDasharray="4 4" />
                  ))}

                  {/* Area */}
                  <path 
                    d="M 0 131.43 L 100 111.43 L 200 80 L 300 97.15 L 400 60 L 500 22.86 L 500 200 L 0 200 Z" 
                    fill="url(#colorSales)" 
                    className="animate-[fade-in_1s_ease-out]"
                  />
                  
                  {/* Line */}
                  <path 
                    d="M 0 131.43 L 100 111.43 L 200 80 L 300 97.15 L 400 60 L 500 22.86" 
                    fill="none" 
                    stroke="#10b981" 
                    strokeWidth="3"
                    className="animate-[dash_1.5s_ease-out]"
                    strokeDasharray="1000"
                    strokeDashoffset="0"
                  />
                  
                  <style>{`
                    @keyframes dash {
                      from { stroke-dashoffset: 1000; }
                      to { stroke-dashoffset: 0; }
                    }
                    @keyframes fade-in {
                      from { opacity: 0; }
                      to { opacity: 1; }
                    }
                  `}</style>
                </svg>

                {/* Data Points / Tooltips */}
                <div className="absolute inset-0 flex justify-between">
                  {[
                    { month: "Jan", sales: 120000, x: "0%", y: "65.71%" },
                    { month: "Feb", sales: 155000, x: "20%", y: "55.71%" },
                    { month: "Mar", sales: 210000, x: "40%", y: "40.00%" },
                    { month: "Apr", sales: 180000, x: "60%", y: "48.57%" },
                    { month: "May", sales: 245000, x: "80%", y: "30.00%" },
                    { month: "Jun", sales: 310000, x: "100%", y: "11.43%" }
                  ].map((data, i) => (
                    <div key={i} className="absolute group" style={{ left: data.x, top: data.y, transform: 'translate(-50%, -50%)' }}>
                      <div className="w-3 h-3 bg-white border-2 border-emerald-500 rounded-full shadow cursor-pointer group-hover:scale-150 transition-transform"></div>
                      <div className="opacity-0 group-hover:opacity-100 absolute bottom-6 left-1/2 -translate-x-1/2 bg-stone-800 text-white text-xs px-2 py-1 rounded transition-opacity whitespace-nowrap z-10 pointer-events-none">
                        ₹{data.sales.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* X-Axis Labels */}
              <div className="absolute left-12 right-0 bottom-0 h-6 flex justify-between text-xs text-stone-500 font-bold">
                <span className="-translate-x-1/2">Jan</span>
                <span className="-translate-x-1/2">Feb</span>
                <span className="-translate-x-1/2">Mar</span>
                <span className="-translate-x-1/2">Apr</span>
                <span className="-translate-x-1/2">May</span>
                <span className="-translate-x-1/2">Jun</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-stone-800">Recent Orders</h3>
              <button 
                onClick={() => setActiveTab("orders")}
                className="text-emerald-700 text-sm font-bold flex items-center gap-1 hover:underline cursor-pointer"
              >
                View All <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-stone-50 border-y border-stone-200">
                  <tr>
                    <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Order ID</th>
                    <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Customer</th>
                    <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Status</th>
                    <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {recentOrders.map(order => (
                    <tr key={order.id} className="hover:bg-stone-50/50">
                      <td className="py-3 px-4 text-sm font-bold text-stone-800">{order.id}</td>
                      <td className="py-3 px-4 text-sm text-stone-600">{order.customer || order.address?.name || 'Guest'}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex px-2 py-1 rounded-full text-xs font-bold ${
                          order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-700' :
                          order.status === 'Processing' ? 'bg-amber-100 text-amber-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm font-bold text-emerald-700 text-right">₹{order.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
            <h3 className="font-bold text-stone-800 mb-4">Low Stock Alerts</h3>
            {lowStockProducts.length === 0 ? (
              <p className="text-sm text-stone-500">Inventory looks healthy!</p>
            ) : (
              <div className="space-y-3">
                {lowStockProducts.map(p => (
                  <div key={p.id} className="flex justify-between items-center bg-red-50 p-3 rounded-lg border border-red-100">
                    <span className="text-sm font-bold text-stone-800">{p.name}</span>
                    <span className="text-xs font-bold text-red-700 bg-red-100 px-2 py-1 rounded-full">Only {p.stock} left</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
            <h3 className="font-bold text-stone-800 mb-4">Recent Leads</h3>
            <div className="space-y-3">
              {adminLeads.slice(0, 3).map(lead => (
                <div key={lead.id} className="flex justify-between items-center p-3 rounded-lg border border-stone-100 hover:bg-stone-50">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-stone-800">{lead.email}</span>
                    <span className="text-xs text-stone-500">{lead.source}</span>
                  </div>
                  <span className="text-xs text-stone-400">{lead.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
