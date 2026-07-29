import React, { useState } from "react";
import AdminDashboard from "../components/AdminDashboard";
import { useStore } from "../context/StoreContext";
import { LockKeyhole, Sparkles } from "lucide-react";

export default function AdminPage() {
  const { products, appointments, doctors, updateStock, addProduct } = useStore();
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Admin"123') {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid credentials. Access denied.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-stone-900 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl" />
        
        <div className="bg-stone-800/80 backdrop-blur-xl border border-stone-700/50 p-8 rounded-3xl w-full max-w-md shadow-2xl relative z-10 animate-fade-in">
          <div className="flex flex-col items-center mb-8">
            <div className="bg-emerald-950 p-3 rounded-2xl mb-4 border border-emerald-800 shadow-inner">
              <LockKeyhole className="h-8 w-8 text-emerald-400" />
            </div>
            <h1 className="text-2xl font-black text-white text-center flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-amber-400" />
              IGO Command Center
            </h1>
            <p className="text-stone-400 text-sm mt-2 font-medium">Enterprise Administration Portal</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-300">Master Password</label>
              <input
                type="password"
                autoFocus
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter access code"
                className="w-full bg-stone-900/50 border border-stone-600 text-white rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono"
              />
              {error && <p className="text-red-400 text-xs font-bold mt-1 animate-pulse">{error}</p>}
            </div>
            
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl shadow-[0_0_20px_rgba(5,150,105,0.4)] hover:shadow-[0_0_30px_rgba(5,150,105,0.6)] transition-all flex justify-center items-center gap-2 uppercase tracking-wide text-sm cursor-pointer"
            >
              Authorize Access
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-stone-700/50 text-center">
            <p className="text-[10px] text-stone-500 font-mono">Restricted Area. Authorized Personnel Only.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <AdminDashboard
      products={products}
      appointments={appointments}
      doctors={doctors}
      onUpdateStock={updateStock}
      onAddProduct={addProduct}
    />
  );
}
