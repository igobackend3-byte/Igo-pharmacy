import React, { useState } from "react";
import { Search, Plus, Filter, RefreshCw, X, Save } from "lucide-react";
import { useStore } from "../../context/StoreContext";

export default function AdminInventory() {
  const { products, updateStock } = useStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [stockInput, setStockInput] = useState<number>(0);

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (p.sku && p.sku.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const openUpdateModal = (id: string, currentStock: number) => {
    setSelectedProductId(id);
    setStockInput(currentStock);
  };

  const handleUpdateStock = () => {
    if (selectedProductId) {
      updateStock(selectedProductId, stockInput);
      setSelectedProductId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-black text-stone-800">Inventory Management</h2>
        <button className="bg-stone-800 text-white px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-stone-900 transition-colors">
          <RefreshCw className="h-4 w-4" /> Sync ERP
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
        <div className="p-4 border-b border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 h-5 w-5" />
            <input 
              type="text" 
              placeholder="Search by SKU or product name..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <button className="px-3 py-2 border border-stone-200 rounded-lg text-sm font-bold text-stone-600 flex items-center gap-2 hover:bg-stone-50">
            <Filter className="h-4 w-4" /> Filter Low Stock
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-stone-50 border-b border-stone-200">
              <tr>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Product Details</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">SKU / Batch</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Supplier</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase text-center">Stock</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filteredProducts.map(product => (
                <tr key={product.id} className="hover:bg-stone-50 transition-colors">
                  <td className="py-3 px-4">
                    <p className="text-sm font-bold text-stone-800">{product.name}</p>
                    <p className="text-xs text-stone-500">Exp: {product.expiryDate || '24 Months'}</p>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-sm font-mono font-bold text-stone-700">{product.sku || `SKU-${product.id.split('-')[1]}`}</p>
                    <p className="text-xs font-mono text-stone-500">Batch: {product.batchNumber || 'BN-0001'}</p>
                  </td>
                  <td className="py-3 px-4 text-sm text-stone-600">{product.supplier || 'IGO Internal'}</td>
                  <td className="py-3 px-4 text-center">
                    <span className={`inline-flex px-3 py-1 rounded-full text-sm font-black ${
                      product.stock > 20 ? 'bg-emerald-100 text-emerald-700' :
                      product.stock > 0 ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {product.stock}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button 
                      onClick={() => openUpdateModal(product.id, product.stock)}
                      className="px-3 py-1.5 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg text-xs font-bold transition-colors"
                    >
                      Update Stock
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Update Stock Modal */}
      {selectedProductId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden">
            <div className="p-4 border-b border-stone-100 flex justify-between items-center bg-stone-50">
              <h3 className="font-bold text-stone-800">Update Stock Level</h3>
              <button onClick={() => setSelectedProductId(null)} className="text-stone-400 hover:text-stone-600">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase mb-1">New Stock Quantity</label>
                <input 
                  type="number" 
                  value={stockInput}
                  onChange={(e) => setStockInput(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono text-lg"
                />
              </div>
              <button 
                onClick={handleUpdateStock}
                className="w-full bg-emerald-800 text-white py-3 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-emerald-900 transition-colors"
              >
                <Save className="h-4 w-4" /> Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
