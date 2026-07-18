import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { useStore } from "../../context/StoreContext";

export default function ProfileTab() {
  const { userProfile } = useStore();
  if (!userProfile) return null;

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-8 animate-fade-in">
        <div className="border-b border-stone-100 pb-4">
          <h3 className="text-lg font-black text-stone-900">Personal Information</h3>
          <p className="text-xs text-stone-500">Your core account details on file with IGO Pharma.</p>
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
          <div className="space-y-1">
            <span className="font-bold text-stone-400 uppercase text-[10px]">Reward Points</span>
            <p className="font-bold text-amber-700 text-sm">{userProfile.rewardPoints ?? 0} pts</p>
          </div>
        </div>
      </div>

      <Link
        to="/account/addresses"
        className="flex items-center justify-between rounded-2xl border border-stone-200 bg-white p-5 shadow-sm hover:border-emerald-600 transition-all"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-stone-800">Manage Delivery Addresses</h4>
            <p className="text-xs text-stone-400">{userProfile.addresses.length} saved address(es)</p>
          </div>
        </div>
        <ArrowRight className="h-4 w-4 text-stone-400" />
      </Link>
    </div>
  );
}
