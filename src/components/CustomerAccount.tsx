import React, { useState, useEffect } from "react";
import { 
  User, Shield, Wallet, Award, MapPin, ShoppingBag, RefreshCw, Key, 
  Check, Edit2, Plus, Clock, HelpCircle, Truck, Trash2, Calendar 
} from "lucide-react";
import { UserProfile, Order, Address, CartItem } from "../types";

interface CustomerAccountProps {
  userProfile: UserProfile | null;
  onLogin: (name: string, email: string) => void;
  onLogout: () => void;
  onUpdateAddress: (address: Address) => void;
  onCancelSubscription: (productId: string) => void;
}

export default function CustomerAccount({
  userProfile,
  onLogin,
  onLogout,
  onUpdateAddress,
  onCancelSubscription
}: CustomerAccountProps) {
  // Login states
  const [authMethod, setAuthMethod] = useState<"otp" | "google">("otp");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [timer, setTimer] = useState(30);
  const [loginName, setLoginName] = useState("");

  // UI state inside dashboard
  const [activeTab, setActiveTab] = useState<"profile" | "orders" | "subscriptions" | "wallet">("profile");
  
  // Address form
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addressType, setAddressType] = useState<"Home" | "Work" | "Other">("Home");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  useEffect(() => {
    let interval: any;
    if (otpSent && timer > 0) {
      interval = setInterval(() => setTimer(t => t - 1), 1000);
    } else if (timer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [otpSent, timer]);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailOrPhone.trim()) return;
    setOtpSent(true);
    setTimer(30);
    alert("Vedic Secure OTP sent: 1234 (Simulated)");
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otpValue === "1234") {
      onLogin(loginName || "Ananth Raman", emailOrPhone.includes("@") ? emailOrPhone : "ananth@gmail.com");
      setOtpSent(false);
      setOtpValue("");
    } else {
      alert("Invalid OTP code. Please use 1234 to verify your access.");
    }
  };

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!street || !city || !state || !zip) return;
    const newAddr: Address = {
      id: `add-${Math.floor(Math.random() * 900) + 100}`,
      type: addressType,
      street,
      city,
      state,
      zip,
      isDefault: userProfile?.addresses.length === 0
    };
    onUpdateAddress(newAddr);
    setShowAddressForm(false);
    setStreet("");
    setCity("");
    setState("");
    setZip("");
  };

  // Logged-out screen
  if (!userProfile) {
    return (
      <div className="mx-auto max-w-md py-12 px-4">
        <div className="rounded-2xl border border-amber-100 bg-white p-6 md:p-8 shadow-md space-y-6">
          <div className="text-center space-y-1.5">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
              <User className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 font-sans">Access Your Wellness Profile</h3>
            <p className="text-xs text-stone-500">Log in securely to view historic orders, rewards, and manage AYUSH doctor files.</p>
          </div>

          {!otpSent ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Your Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Ananth Raman"
                  value={loginName}
                  onChange={(e) => setLoginName(e.target.value)}
                  className="w-full rounded-xl border border-stone-300 px-3 py-2 text-xs outline-none focus:border-emerald-700" 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Mobile Phone or Email</label>
                <input 
                  type="text" 
                  required
                  placeholder="+1 234-567-8900 or patient@gmail.com"
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  className="w-full rounded-xl border border-stone-300 px-3 py-2 text-xs outline-none focus:border-emerald-700" 
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-emerald-800 py-2.5 text-xs font-bold text-white hover:bg-emerald-950 transition-colors cursor-pointer"
              >
                Request Secure OTP
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <p className="text-center text-xs text-stone-500">We have sent a secure 4-digit code to <strong>{emailOrPhone}</strong>. Use code <strong>1234</strong> to verify.</p>
              
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Enter Verification Code</label>
                <input 
                  type="text" 
                  required
                  maxLength={4}
                  placeholder="••••"
                  value={otpValue}
                  onChange={(e) => setOtpValue(e.target.value)}
                  className="w-full text-center tracking-widest rounded-xl border border-stone-300 px-3 py-2.5 text-sm font-bold font-mono outline-none focus:border-emerald-700" 
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-emerald-800 py-2.5 text-xs font-bold text-white hover:bg-emerald-950 transition-colors cursor-pointer"
              >
                Verify & Enter Dashboard
              </button>

              <div className="text-center">
                {timer > 0 ? (
                  <span className="text-[10px] text-stone-400">Resend OTP in {timer}s</span>
                ) : (
                  <button 
                    type="button" 
                    onClick={() => { setOtpSent(false); setOtpValue(""); }}
                    className="text-[10px] font-bold text-emerald-800 hover:underline"
                  >
                    Resend Code
                  </button>
                )}
              </div>
            </form>
          )}

          <div className="flex items-center justify-center gap-2 border-t border-stone-100 pt-4">
            <button
              onClick={() => {
                onLogin("Google User", "google-patient@gmail.com");
              }}
              className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-stone-300 py-2 text-xs font-bold text-stone-600 hover:bg-stone-50 transition-colors"
            >
              <Key className="h-4 w-4" /> Google Instant Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Active Dashboard
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
      <div className="grid gap-8 lg:grid-cols-4">
        
        {/* Navigation panel */}
        <div className="lg:col-span-1 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm space-y-6 self-start">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50 text-emerald-800 font-extrabold text-lg">
              {userProfile.name[0]}
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-800 truncate">{userProfile.name}</h4>
              <span className="text-[10px] font-mono text-stone-400 truncate block">{userProfile.email}</span>
            </div>
          </div>

          <div className="space-y-1">
            {[
              { id: "profile", label: "My Profile", icon: User },
              { id: "orders", label: "Purchase Records", icon: ShoppingBag },
              { id: "subscriptions", label: "Wellness Subscriptions", icon: RefreshCw },
              { id: "wallet", label: "IGO Wallet & Perks", icon: Wallet }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold rounded-lg transition-all text-left cursor-pointer ${activeTab === tab.id ? 'bg-emerald-850 text-white shadow-sm' : 'text-stone-600 hover:bg-stone-100'}`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <button
            onClick={onLogout}
            className="w-full text-center border border-red-200 hover:bg-red-50 text-red-600 rounded-lg py-2 text-xs font-bold transition-all cursor-pointer"
          >
            Sign Out
          </button>
        </div>

        {/* Content panel */}
        <div className="lg:col-span-3">
          
          {/* PROFILE VIEW */}
          {activeTab === "profile" && (
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-8 animate-fade-in">
              <div className="border-b border-stone-100 pb-4">
                <h3 className="text-lg font-black text-stone-900">Personal Information</h3>
                <p className="text-xs text-stone-500">Configure addresses and contact points for express Shiprocket logistics.</p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 text-xs text-stone-700">
                <div className="space-y-1">
                  <span className="font-bold text-stone-400 uppercase text-[10px]">Patient Name</span>
                  <p className="font-bold text-stone-850 text-sm">{userProfile.name}</p>
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-stone-400 uppercase text-[10px]">Email Address</span>
                  <p className="font-bold text-stone-850 text-sm">{userProfile.email}</p>
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-stone-400 uppercase text-[10px]">Phone Number</span>
                  <p className="font-bold text-stone-850 text-sm">{userProfile.phone || "+1 555-456-7890"}</p>
                </div>
              </div>

              {/* Delivery Addresses */}
              <div className="space-y-4 pt-4 border-t border-stone-100">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-stone-850">Saved Delivery Addresses</h4>
                  <button 
                    onClick={() => setShowAddressForm(true)}
                    className="flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 cursor-pointer"
                  >
                    <Plus className="h-4 w-4" /> Add Address
                  </button>
                </div>

                {/* New address form */}
                {showAddressForm && (
                  <form onSubmit={handleAddAddress} className="p-4 rounded-xl border border-amber-100 bg-amber-50/20 grid gap-3 sm:grid-cols-2 animate-fade-in">
                    <div>
                      <label className="block text-[10px] font-bold text-stone-500 uppercase">Address Category</label>
                      <select 
                        value={addressType}
                        onChange={(e) => setAddressType(e.target.value as any)}
                        className="w-full rounded-lg border border-stone-300 bg-white px-2 py-1.5 text-xs focus:border-emerald-700"
                      >
                        <option value="Home">Home Address</option>
                        <option value="Work">Work / Office</option>
                        <option value="Other">Other Location</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-stone-500 uppercase">Zip / Postal Code</label>
                      <input 
                        type="text" 
                        required
                        placeholder="10001"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        className="w-full rounded-lg border border-stone-300 bg-white px-2 py-1.5 text-xs focus:border-emerald-700" 
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[10px] font-bold text-stone-500 uppercase">Street Address</label>
                      <input 
                        type="text" 
                        required
                        placeholder="123 Wellness Way"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        className="w-full rounded-lg border border-stone-300 bg-white px-2 py-1.5 text-xs focus:border-emerald-700" 
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-stone-500 uppercase">City</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Haridwar"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full rounded-lg border border-stone-300 bg-white px-2 py-1.5 text-xs focus:border-emerald-700" 
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-stone-500 uppercase">State / Territory</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Uttarakhand"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="w-full rounded-lg border border-stone-300 bg-white px-2 py-1.5 text-xs focus:border-emerald-700" 
                      />
                    </div>

                    <div className="sm:col-span-2 flex justify-end gap-2 pt-2">
                      <button 
                        type="button" 
                        onClick={() => setShowAddressForm(false)}
                        className="rounded-lg border px-4 py-1.5 text-xs font-semibold text-stone-500"
                      >
                        Cancel
                      </button>
                      <button 
                        type="submit" 
                        className="rounded-lg bg-emerald-800 text-white px-4 py-1.5 text-xs font-bold"
                      >
                        Save Address
                      </button>
                    </div>
                  </form>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  {userProfile.addresses.map(addr => (
                    <div key={addr.id} className="rounded-xl border border-stone-150 p-4 space-y-2 relative bg-stone-50">
                      <div className="flex items-center justify-between">
                        <span className="rounded bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 uppercase tracking-wide">
                          {addr.type}
                        </span>
                        {addr.isDefault && (
                          <span className="text-[9px] text-amber-700 font-bold flex items-center gap-0.5">
                            <Check className="h-3 w-3" /> Default Shipping
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-stone-700 leading-normal font-light">
                        {addr.street}, {addr.city}, {addr.state} - {addr.zip}
                      </p>
                    </div>
                  ))}
                  {userProfile.addresses.length === 0 && (
                    <p className="text-xs text-stone-500 italic">No shipping address defined yet.</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* PURCHASE RECORDS VIEW */}
          {activeTab === "orders" && (
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-6 animate-fade-in">
              <div className="border-b border-stone-100 pb-4">
                <h3 className="text-lg font-black text-stone-900">Purchase Records</h3>
                <p className="text-xs text-stone-500">Track and view invoices for current and past traditional remedies orders.</p>
              </div>

              <div className="space-y-5">
                {userProfile.orders?.map(order => (
                  <div key={order.id} className="rounded-2xl border border-stone-150 p-4 space-y-4 bg-white shadow-sm">
                    {/* Header bar */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs font-mono border-b pb-2.5 border-stone-100 gap-2">
                      <div>
                        <span className="font-bold text-stone-850">Order #{order.id}</span>
                        <span className="text-stone-400 ml-3">{order.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-emerald-100 text-emerald-800 text-[10px] px-2.5 py-0.5 font-bold uppercase">
                          {order.status}
                        </span>
                        <button 
                          onClick={() => alert(`Invoices generated for Order #${order.id}. Downloading pdf...`)}
                          className="text-[10px] text-emerald-800 hover:underline font-bold"
                        >
                          Invoice PDF
                        </button>
                      </div>
                    </div>

                    {/* Products lists */}
                    <div className="space-y-2">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="font-mono text-stone-400 font-bold">{item.quantity}x</span>
                            <span className="font-semibold text-stone-800 truncate">{item.product.name}</span>
                          </div>
                          <span className="font-mono font-bold text-stone-700">${item.product.price * item.quantity}</span>
                        </div>
                      ))}
                    </div>

                    {/* Shiprocket delivery tracking simulator */}
                    <div className="rounded-xl bg-stone-50 border border-stone-100 p-3.5 space-y-2">
                      <h4 className="text-[10px] uppercase font-bold text-stone-400 flex items-center gap-1">
                        <Truck className="h-4 w-4 text-emerald-700" />
                        Shiprocket Real-Time Logistics Tracking
                      </h4>

                      <div className="grid grid-cols-4 text-center text-[10px] font-bold text-stone-400 relative">
                        {["Processing", "Shipped", "Out for Delivery", "Delivered"].map((st, i) => {
                          const steps = ["Processing", "Shipped", "Out for Delivery", "Delivered"];
                          const currentIdx = steps.indexOf(order.status);
                          const active = i <= currentIdx;
                          return (
                            <div key={st} className="space-y-1">
                              <span className={`mx-auto block h-4 w-4 rounded-full ${active ? 'bg-emerald-700 text-white' : 'bg-stone-200'}`} />
                              <span className={active ? 'text-emerald-950' : ''}>{st}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
                {(!userProfile.orders || userProfile.orders.length === 0) && (
                  <p className="text-xs text-stone-500 italic py-6 text-center">No orders have been submitted yet.</p>
                )}
              </div>
            </div>
          )}

          {/* ACTIVE WELLNESS SUBSCRIPTIONS */}
          {activeTab === "subscriptions" && (
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-6 animate-fade-in">
              <div className="border-b border-stone-100 pb-4">
                <h3 className="text-lg font-black text-stone-900">Wellness Repeat Subscriptions</h3>
                <p className="text-xs text-stone-500">Scheduled refills for chronic herbal care at 15% discount. Cancel or pause at any time.</p>
              </div>

              {/* Mock active subscription cards */}
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
                      onClick={() => {
                        alert("refill paused. Refill rescheduled for Sept 12, 2026.");
                      }}
                      className="rounded-lg border px-3 py-1.5 text-xs font-semibold text-stone-600 hover:bg-stone-50 cursor-pointer"
                    >
                      Pause
                    </button>
                    <button 
                      onClick={() => {
                        if (confirm("Are you sure you want to cancel this wellness auto-refill subscription?")) {
                          alert("Subscription successfully cancelled.");
                        }
                      }}
                      className="rounded-lg border border-red-200 text-red-600 px-3 py-1.5 text-xs font-semibold hover:bg-red-50 cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* IGO WALLET & PERKS */}
          {activeTab === "wallet" && (
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-8 animate-fade-in">
              <div className="border-b border-stone-100 pb-4">
                <h3 className="text-lg font-black text-stone-900">Perks & Loyalty Points</h3>
                <p className="text-xs text-stone-500">Every traditional purchase contributes to your wellness tier perks and rewards.</p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {/* Wallet Balance */}
                <div className="rounded-2xl bg-gradient-to-tr from-emerald-950 to-emerald-850 text-white p-5 space-y-4 shadow-md">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-emerald-250 uppercase tracking-wider font-mono">IGO Secure Wallet</span>
                    <Wallet className="h-5 w-5 text-amber-300" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-300">Balance Available</span>
                    <p className="text-3xl font-mono font-bold">₹1,250.00</p>
                  </div>
                  <button 
                    onClick={() => alert("Simulated: Recharge Wallet gateway loaded.")}
                    className="w-full rounded-xl bg-amber-400 py-2 text-xs font-bold text-emerald-950 hover:bg-amber-300 shadow-sm transition-all"
                  >
                    Add Credits
                  </button>
                </div>

                {/* Loyalty Tier */}
                <div className="rounded-2xl bg-gradient-to-tr from-amber-500/20 to-amber-100/30 border border-amber-300 p-5 space-y-4 flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-amber-900 uppercase tracking-wider font-mono">Loyalty Reward Points</span>
                    <Award className="h-5 w-5 text-amber-700 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-2xl font-mono font-black text-amber-950">140 Points</p>
                    <span className="text-[10px] text-stone-500 font-semibold block mt-1">Sadhana Tier (10 points left to unlock Gold Tier)</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-stone-200 overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: "90%" }} />
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
