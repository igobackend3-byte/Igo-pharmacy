import React, { useState } from "react";
import { Plus, Check, Trash2, Star } from "lucide-react";
import { useStore } from "../../context/StoreContext";
import { Address } from "../../types";

export default function AddressesTab() {
  const { userProfile, addAddress, removeAddress, setDefaultAddress } = useStore();

  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addressType, setAddressType] = useState<"Home" | "Work" | "Other">("Home");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  if (!userProfile) return null;

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!street || !city || !state || !zip) return;
    const newAddr: Address = {
      id: `add-${Math.floor(Math.random() * 900) + 100}`,
      type: addressType,
      street, city, state, zip,
      isDefault: userProfile.addresses.length === 0
    };
    addAddress(newAddr);
    setShowAddressForm(false);
    setStreet(""); setCity(""); setState(""); setZip("");
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-6 animate-fade-in">
      <div className="flex items-center justify-between border-b border-stone-100 pb-4">
        <div>
          <h3 className="text-lg font-black text-stone-900">Saved Delivery Addresses</h3>
          <p className="text-xs text-stone-500">Manage shipping destinations for express Shiprocket logistics.</p>
        </div>
        <button
          onClick={() => setShowAddressForm(true)}
          className="flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 cursor-pointer"
        >
          <Plus className="h-4 w-4" /> Add Address
        </button>
      </div>

      {showAddressForm && (
        <form onSubmit={handleAddAddress} className="p-4 rounded-xl border border-amber-100 bg-amber-50/20 grid gap-3 sm:grid-cols-2 animate-fade-in">
          <div>
            <label className="block text-[10px] font-bold text-stone-500 uppercase">Address Category</label>
            <select value={addressType} onChange={(e) => setAddressType(e.target.value as any)} className="w-full rounded-lg border border-stone-300 bg-white px-2 py-1.5 text-xs focus:border-emerald-700">
              <option value="Home">Home Address</option>
              <option value="Work">Work / Office</option>
              <option value="Other">Other Location</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-bold text-stone-500 uppercase">Zip / Postal Code</label>
            <input type="text" required placeholder="10001" value={zip} onChange={(e) => setZip(e.target.value)} className="w-full rounded-lg border border-stone-300 bg-white px-2 py-1.5 text-xs focus:border-emerald-700" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-[10px] font-bold text-stone-500 uppercase">Street Address</label>
            <input type="text" required placeholder="123 Wellness Way" value={street} onChange={(e) => setStreet(e.target.value)} className="w-full rounded-lg border border-stone-300 bg-white px-2 py-1.5 text-xs focus:border-emerald-700" />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-stone-500 uppercase">City</label>
            <input type="text" required placeholder="Haridwar" value={city} onChange={(e) => setCity(e.target.value)} className="w-full rounded-lg border border-stone-300 bg-white px-2 py-1.5 text-xs focus:border-emerald-700" />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-stone-500 uppercase">State / Territory</label>
            <input type="text" required placeholder="Uttarakhand" value={state} onChange={(e) => setState(e.target.value)} className="w-full rounded-lg border border-stone-300 bg-white px-2 py-1.5 text-xs focus:border-emerald-700" />
          </div>
          <div className="sm:col-span-2 flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setShowAddressForm(false)} className="rounded-lg border px-4 py-1.5 text-xs font-semibold text-stone-500">Cancel</button>
            <button type="submit" className="rounded-lg bg-emerald-800 text-white px-4 py-1.5 text-xs font-bold">Save Address</button>
          </div>
        </form>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        {userProfile.addresses.map(addr => (
          <div key={addr.id} className="rounded-xl border border-stone-150 p-4 space-y-2.5 relative bg-stone-50">
            <div className="flex items-center justify-between">
              <span className="rounded bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 uppercase tracking-wide">{addr.type}</span>
              {addr.isDefault && (
                <span className="text-[9px] text-amber-700 font-bold flex items-center gap-0.5">
                  <Check className="h-3 w-3" /> Default Shipping
                </span>
              )}
            </div>
            <p className="text-xs text-stone-700 leading-normal font-light">{addr.street}, {addr.city}, {addr.state} - {addr.zip}</p>
            <div className="flex items-center gap-3 pt-1">
              {!addr.isDefault && (
                <button onClick={() => setDefaultAddress(addr.id)} className="flex items-center gap-1 text-[10px] font-bold text-emerald-800 hover:underline cursor-pointer">
                  <Star className="h-3 w-3" /> Set as default
                </button>
              )}
              <button onClick={() => removeAddress(addr.id)} className="flex items-center gap-1 text-[10px] font-bold text-red-600 hover:underline cursor-pointer">
                <Trash2 className="h-3 w-3" /> Remove
              </button>
            </div>
          </div>
        ))}
        {userProfile.addresses.length === 0 && (
          <p className="text-xs text-stone-500 italic">No shipping address defined yet.</p>
        )}
      </div>
    </div>
  );
}
