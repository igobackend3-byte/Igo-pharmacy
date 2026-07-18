import React, { useState } from "react";
import { Key, Smartphone, LogOut, Trash2 } from "lucide-react";
import { useStore } from "../../context/StoreContext";

export default function SecurityTab() {
  const { logout } = useStore();
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-8 animate-fade-in">
      <div className="border-b border-stone-100 pb-4">
        <h3 className="text-lg font-black text-stone-900">Security &amp; Login</h3>
        <p className="text-xs text-stone-500">Manage how you sign in and keep your wellness profile secure.</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between rounded-xl border border-stone-100 p-4">
          <div className="flex items-center gap-3">
            <Key className="h-5 w-5 text-emerald-700" />
            <div>
              <h4 className="text-xs font-bold text-stone-800">Password / OTP Login</h4>
              <p className="text-[11px] text-stone-400">You currently sign in via secure one-time passcodes.</p>
            </div>
          </div>
          <button onClick={() => alert("Password reset link sent to your registered email.")} className="rounded-lg border px-3 py-1.5 text-xs font-semibold text-stone-600 hover:bg-stone-50 cursor-pointer">
            Reset
          </button>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-stone-100 p-4">
          <div className="flex items-center gap-3">
            <Smartphone className="h-5 w-5 text-emerald-700" />
            <div>
              <h4 className="text-xs font-bold text-stone-800">Two-Factor Authentication</h4>
              <p className="text-[11px] text-stone-400">Add an extra layer of protection to your account.</p>
            </div>
          </div>
          <button
            onClick={() => setTwoFactor(!twoFactor)}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold cursor-pointer ${twoFactor ? 'bg-emerald-800 text-white' : 'border text-stone-600 hover:bg-stone-50'}`}
          >
            {twoFactor ? "Enabled" : "Enable"}
          </button>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-stone-100 p-4">
          <div className="flex items-center gap-3">
            <LogOut className="h-5 w-5 text-emerald-700" />
            <div>
              <h4 className="text-xs font-bold text-stone-800">Sign Out Everywhere</h4>
              <p className="text-[11px] text-stone-400">Log out of all devices currently connected to your account.</p>
            </div>
          </div>
          <button onClick={logout} className="rounded-lg border border-red-200 text-red-600 px-3 py-1.5 text-xs font-semibold hover:bg-red-50 cursor-pointer">
            Sign Out All
          </button>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-red-100 bg-red-50/30 p-4">
          <div className="flex items-center gap-3">
            <Trash2 className="h-5 w-5 text-red-600" />
            <div>
              <h4 className="text-xs font-bold text-red-800">Delete Account</h4>
              <p className="text-[11px] text-red-500/80">Permanently remove your profile, orders, and saved data.</p>
            </div>
          </div>
          <button
            onClick={() => { if (confirm("This will permanently delete your account. Continue?")) { alert("Account deletion request submitted."); logout(); } }}
            className="rounded-lg border border-red-300 text-red-700 px-3 py-1.5 text-xs font-semibold hover:bg-red-100 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
