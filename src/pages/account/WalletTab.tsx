import React from "react";
import { Wallet, Award } from "lucide-react";
import { useStore } from "../../context/StoreContext";

export default function WalletTab() {
  const { userProfile } = useStore();
  if (!userProfile) return null;

  const points = userProfile.rewardPoints ?? 0;
  const nextTier = 150;
  const progress = Math.min(100, Math.round((points / nextTier) * 100));

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-8 animate-fade-in">
      <div className="border-b border-stone-100 pb-4">
        <h3 className="text-lg font-black text-stone-900">Perks &amp; Loyalty Points</h3>
        <p className="text-xs text-stone-500">Every traditional purchase contributes to your wellness tier perks and rewards.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl bg-gradient-to-tr from-emerald-950 to-emerald-850 text-white p-5 space-y-4 shadow-md">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-emerald-250 uppercase tracking-wider font-mono">IGO Secure Wallet</span>
            <Wallet className="h-5 w-5 text-amber-300" />
          </div>
          <div>
            <span className="text-[10px] text-stone-300">Balance Available</span>
            <p className="text-3xl font-mono font-bold">₹{(userProfile.walletBalance ?? 0).toFixed(2)}</p>
          </div>
          <button
            onClick={() => alert("Simulated: Recharge Wallet gateway loaded.")}
            className="w-full rounded-xl bg-amber-400 py-2 text-xs font-bold text-emerald-950 hover:bg-amber-300 shadow-sm transition-all"
          >
            Add Credits
          </button>
        </div>

        <div className="rounded-2xl bg-gradient-to-tr from-amber-500/20 to-amber-100/30 border border-amber-300 p-5 space-y-4 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wider font-mono">Loyalty Reward Points</span>
            <Award className="h-5 w-5 text-amber-700 animate-pulse" />
          </div>
          <div>
            <p className="text-2xl font-mono font-black text-amber-950">{points} Points</p>
            <span className="text-[10px] text-stone-500 font-semibold block mt-1">
              {points >= nextTier ? "Gold Tier unlocked" : `Sadhana Tier (${nextTier - points} points left to unlock Gold Tier)`}
            </span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-stone-200 overflow-hidden">
            <div className="h-full bg-amber-500 rounded-full" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
