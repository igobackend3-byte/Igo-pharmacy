import React, { useState, useEffect } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import { User, ShoppingBag, RefreshCw, Wallet, Heart, ShieldQuestion, Key } from "lucide-react";
import { useStore } from "../../context/StoreContext";

export default function AccountLayout() {
  const { userProfile, login } = useStore();

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [timer, setTimer] = useState(30);
  const [loginName, setLoginName] = useState("");

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
      login(loginName || "Ananth Raman", emailOrPhone.includes("@") ? emailOrPhone : "ananth@gmail.com");
      setOtpSent(false);
      setOtpValue("");
    } else {
      alert("Invalid OTP code. Please use 1234 to verify your access.");
    }
  };

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
              <button type="submit" className="w-full rounded-xl bg-emerald-800 py-2.5 text-xs font-bold text-white hover:bg-emerald-950 transition-colors cursor-pointer">
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
              <button type="submit" className="w-full rounded-xl bg-emerald-800 py-2.5 text-xs font-bold text-white hover:bg-emerald-950 transition-colors cursor-pointer">
                Verify &amp; Enter Dashboard
              </button>
              <div className="text-center">
                {timer > 0 ? (
                  <span className="text-[10px] text-stone-400">Resend OTP in {timer}s</span>
                ) : (
                  <button type="button" onClick={() => { setOtpSent(false); setOtpValue(""); }} className="text-[10px] font-bold text-emerald-800 hover:underline">
                    Resend Code
                  </button>
                )}
              </div>
            </form>
          )}

          <div className="flex items-center justify-center gap-2 border-t border-stone-100 pt-4">
            <button
              onClick={() => login("Google User", "google-patient@gmail.com")}
              className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-stone-300 py-2 text-xs font-bold text-stone-600 hover:bg-stone-50 transition-colors"
            >
              <Key className="h-4 w-4" /> Google Instant Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  const navItems = [
    { to: "/account/profile", label: "My Profile", icon: User },
    { to: "/account/addresses", label: "Addresses", icon: ShieldQuestion },
    { to: "/account/orders", label: "Purchase Records", icon: ShoppingBag },
    { to: "/account/subscriptions", label: "Wellness Subscriptions", icon: RefreshCw },
    { to: "/account/wishlist", label: "Wishlist", icon: Heart },
    { to: "/account/wallet", label: "IGO Wallet & Perks", icon: Wallet },
    { to: "/account/security", label: "Security & Login", icon: Key }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
      <div className="grid gap-8 lg:grid-cols-4">
        {/* Navigation panel */}
        <AccountSidebar navItems={navItems} />

        {/* Content panel */}
        <div className="lg:col-span-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function AccountSidebar({ navItems }: { navItems: { to: string; label: string; icon: any }[] }) {
  const { userProfile, logout } = useStore();
  if (!userProfile) return null;

  return (
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
        {navItems.map(item => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold rounded-lg transition-all text-left cursor-pointer ${isActive ? 'bg-emerald-850 text-white shadow-sm' : 'text-stone-600 hover:bg-stone-100'}`
              }
            >
              <Icon className="h-4 w-4 shrink-0" />
              {item.label}
            </NavLink>
          );
        })}
      </div>

      <button
        onClick={logout}
        className="w-full text-center border border-red-200 hover:bg-red-50 text-red-600 rounded-lg py-2 text-xs font-bold transition-all cursor-pointer"
      >
        Sign Out
      </button>
    </div>
  );
}
