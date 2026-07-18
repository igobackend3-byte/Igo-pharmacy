import React, { useState } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { ChevronRight, MapPin, CreditCard, CheckCircle2, Plus, Wallet, Truck, Banknote } from "lucide-react";
import { useStore } from "../context/StoreContext";
import { Address } from "../types";

const STEPS = ["Address", "Payment", "Review"];

export default function CheckoutPage() {
  const navigate = useNavigate();
  const {
    userProfile, cart, addAddress, placeOrder,
    cartSubtotal, shippingCost, discountAmount, cartTotal, appliedDiscount
  } = useStore();

  const [step, setStep] = useState(0);
  const [selectedAddressId, setSelectedAddressId] = useState<string>(
    userProfile?.addresses.find(a => a.isDefault)?.id || userProfile?.addresses[0]?.id || ""
  );
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "card" | "upi" | "wallet">("card");
  const [placing, setPlacing] = useState(false);

  const [addrType, setAddrType] = useState<"Home" | "Work" | "Other">("Home");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  if (cart.length === 0) return <Navigate to="/cart" replace />;
  if (!userProfile) return <Navigate to="/account?redirect=checkout" replace />;

  const selectedAddress = userProfile.addresses.find(a => a.id === selectedAddressId);

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!street || !city || !state || !zip) return;
    const newAddr: Address = {
      id: `add-${Math.floor(Math.random() * 900) + 100}`,
      type: addrType,
      street, city, state, zip,
      isDefault: userProfile.addresses.length === 0
    };
    addAddress(newAddr);
    setSelectedAddressId(newAddr.id);
    setShowNewAddressForm(false);
    setStreet(""); setCity(""); setState(""); setZip("");
  };

  const handlePlaceOrder = () => {
    if (!selectedAddress) {
      alert("Please select or add a shipping address.");
      setStep(0);
      return;
    }
    setPlacing(true);
    const paymentLabel = { cod: "Cash on Delivery", card: "Credit / Debit Card", upi: "UPI", wallet: "IGO Wallet" }[paymentMethod];
    setTimeout(() => {
      const order = placeOrder(selectedAddress, paymentLabel);
      setPlacing(false);
      if (order) {
        navigate(`/account/orders/${order.id}?justPlaced=1`);
      }
    }, 900);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 space-y-6">
      <nav className="flex items-center gap-1.5 text-[11px] text-stone-500 font-medium">
        <Link to="/" className="hover:text-emerald-700">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link to="/cart" className="hover:text-emerald-700">Basket</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-emerald-800 font-bold">Checkout</span>
      </nav>

      <h1 className="text-2xl md:text-3xl font-black text-emerald-950">Secure Checkout</h1>

      {/* Step indicator */}
      <div className="flex items-center gap-2">
        {STEPS.map((s, i) => (
          <React.Fragment key={s}>
            <div className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold ${i === step ? 'bg-emerald-800 text-white' : i < step ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-100 text-stone-400'}`}>
              {i < step ? <CheckCircle2 className="h-3.5 w-3.5" /> : <span>{i + 1}</span>}
              {s}
            </div>
            {i < STEPS.length - 1 && <div className={`h-0.5 w-8 ${i < step ? 'bg-emerald-300' : 'bg-stone-200'}`} />}
          </React.Fragment>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-3 items-start">
        <div className="lg:col-span-2 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-6">

          {/* STEP 1: Address */}
          {step === 0 && (
            <div className="space-y-5 animate-fade-in">
              <h2 className="text-sm font-black text-stone-900 uppercase tracking-wider flex items-center gap-1.5"><MapPin className="h-4.5 w-4.5 text-emerald-700" /> Shipping Address</h2>

              <div className="grid gap-3 sm:grid-cols-2">
                {userProfile.addresses.map(addr => (
                  <button
                    key={addr.id}
                    onClick={() => setSelectedAddressId(addr.id)}
                    className={`text-left rounded-xl border p-4 space-y-1.5 transition-all cursor-pointer ${selectedAddressId === addr.id ? 'border-emerald-700 bg-emerald-50/50 ring-1 ring-emerald-700' : 'border-stone-200 hover:border-stone-300'}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="rounded bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 uppercase tracking-wide">{addr.type}</span>
                      {addr.isDefault && <span className="text-[9px] text-amber-700 font-bold">Default</span>}
                    </div>
                    <p className="text-xs text-stone-700 leading-normal font-light">{addr.street}, {addr.city}, {addr.state} - {addr.zip}</p>
                  </button>
                ))}

                <button
                  onClick={() => setShowNewAddressForm(!showNewAddressForm)}
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-dashed border-stone-300 p-4 text-xs font-bold text-stone-500 hover:border-emerald-600 hover:text-emerald-700 cursor-pointer"
                >
                  <Plus className="h-4 w-4" /> Add New Address
                </button>
              </div>

              {showNewAddressForm && (
                <form onSubmit={handleAddAddress} className="p-4 rounded-xl border border-amber-100 bg-amber-50/20 grid gap-3 sm:grid-cols-2 animate-fade-in">
                  <div>
                    <label className="block text-[10px] font-bold text-stone-500 uppercase">Address Category</label>
                    <select value={addrType} onChange={(e) => setAddrType(e.target.value as any)} className="w-full rounded-lg border border-stone-300 bg-white px-2 py-1.5 text-xs focus:border-emerald-700">
                      <option value="Home">Home</option>
                      <option value="Work">Work / Office</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-stone-500 uppercase">Zip / Postal Code</label>
                    <input type="text" required value={zip} onChange={(e) => setZip(e.target.value)} placeholder="10001" className="w-full rounded-lg border border-stone-300 bg-white px-2 py-1.5 text-xs focus:border-emerald-700" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] font-bold text-stone-500 uppercase">Street Address</label>
                    <input type="text" required value={street} onChange={(e) => setStreet(e.target.value)} placeholder="123 Wellness Way" className="w-full rounded-lg border border-stone-300 bg-white px-2 py-1.5 text-xs focus:border-emerald-700" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-stone-500 uppercase">City</label>
                    <input type="text" required value={city} onChange={(e) => setCity(e.target.value)} placeholder="Haridwar" className="w-full rounded-lg border border-stone-300 bg-white px-2 py-1.5 text-xs focus:border-emerald-700" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-stone-500 uppercase">State</label>
                    <input type="text" required value={state} onChange={(e) => setState(e.target.value)} placeholder="Uttarakhand" className="w-full rounded-lg border border-stone-300 bg-white px-2 py-1.5 text-xs focus:border-emerald-700" />
                  </div>
                  <div className="sm:col-span-2 flex justify-end gap-2 pt-1">
                    <button type="button" onClick={() => setShowNewAddressForm(false)} className="rounded-lg border px-4 py-1.5 text-xs font-semibold text-stone-500">Cancel</button>
                    <button type="submit" className="rounded-lg bg-emerald-800 text-white px-4 py-1.5 text-xs font-bold">Save Address</button>
                  </div>
                </form>
              )}

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => selectedAddress ? setStep(1) : alert("Please select a shipping address.")}
                  className="rounded-xl bg-emerald-800 text-white px-6 py-2.5 text-xs font-bold hover:bg-emerald-950 cursor-pointer"
                >
                  Continue to Payment
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Payment */}
          {step === 1 && (
            <div className="space-y-5 animate-fade-in">
              <h2 className="text-sm font-black text-stone-900 uppercase tracking-wider flex items-center gap-1.5"><CreditCard className="h-4.5 w-4.5 text-emerald-700" /> Payment Method</h2>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { id: "card", label: "Credit / Debit Card", icon: CreditCard, desc: "Visa, Mastercard, Amex" },
                  { id: "upi", label: "UPI", icon: Banknote, desc: "GPay, PhonePe, Paytm" },
                  { id: "wallet", label: "IGO Wallet", icon: Wallet, desc: `Balance: ₹${userProfile.walletBalance ?? 0}` },
                  { id: "cod", label: "Cash on Delivery", icon: Truck, desc: "Pay when it arrives" }
                ].map(pm => {
                  const Icon = pm.icon;
                  return (
                    <button
                      key={pm.id}
                      onClick={() => setPaymentMethod(pm.id as any)}
                      className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-all cursor-pointer ${paymentMethod === pm.id ? 'border-emerald-700 bg-emerald-50/50 ring-1 ring-emerald-700' : 'border-stone-200 hover:border-stone-300'}`}
                    >
                      <Icon className="h-5 w-5 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-xs font-bold text-stone-800">{pm.label}</span>
                        <span className="block text-[10px] text-stone-400 font-medium">{pm.desc}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {paymentMethod === "card" && (
                <div className="grid gap-3 sm:grid-cols-2 p-4 rounded-xl border border-stone-100 bg-stone-50">
                  <input placeholder="Card Number" className="sm:col-span-2 rounded-lg border border-stone-300 bg-white px-3 py-2 text-xs outline-none focus:border-emerald-700" />
                  <input placeholder="MM/YY" className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-xs outline-none focus:border-emerald-700" />
                  <input placeholder="CVV" className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-xs outline-none focus:border-emerald-700" />
                  <p className="sm:col-span-2 text-[10px] text-stone-400">This is a demo checkout — no real payment is processed.</p>
                </div>
              )}

              <div className="flex justify-between pt-2">
                <button onClick={() => setStep(0)} className="rounded-xl border border-stone-300 px-6 py-2.5 text-xs font-bold text-stone-600 hover:bg-stone-50 cursor-pointer">Back</button>
                <button onClick={() => setStep(2)} className="rounded-xl bg-emerald-800 text-white px-6 py-2.5 text-xs font-bold hover:bg-emerald-950 cursor-pointer">Review Order</button>
              </div>
            </div>
          )}

          {/* STEP 3: Review */}
          {step === 2 && (
            <div className="space-y-5 animate-fade-in">
              <h2 className="text-sm font-black text-stone-900 uppercase tracking-wider">Review &amp; Place Order</h2>

              <div className="rounded-xl border border-stone-100 bg-stone-50 p-4 space-y-1.5">
                <span className="text-[10px] font-bold uppercase text-stone-400">Deliver to</span>
                <p className="text-xs text-stone-700 font-medium">{selectedAddress?.street}, {selectedAddress?.city}, {selectedAddress?.state} - {selectedAddress?.zip}</p>
                <button onClick={() => setStep(0)} className="text-[10px] font-bold text-emerald-800 hover:underline">Change</button>
              </div>

              <div className="rounded-xl border border-stone-100 bg-stone-50 p-4 space-y-1.5">
                <span className="text-[10px] font-bold uppercase text-stone-400">Payment Method</span>
                <p className="text-xs text-stone-700 font-medium capitalize">{paymentMethod === "cod" ? "Cash on Delivery" : paymentMethod === "card" ? "Credit / Debit Card" : paymentMethod === "upi" ? "UPI" : "IGO Wallet"}</p>
                <button onClick={() => setStep(1)} className="text-[10px] font-bold text-emerald-800 hover:underline">Change</button>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase text-stone-400">Items ({cart.length})</span>
                {cart.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <span className="text-stone-700 font-semibold truncate">{item.quantity}x {item.product.name}</span>
                    <span className="font-mono font-bold text-stone-800">₹{item.product.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={placing}
                className="w-full rounded-xl bg-emerald-800 text-white py-3 text-xs font-bold hover:bg-emerald-950 shadow-md cursor-pointer transition-colors disabled:opacity-60"
              >
                {placing ? "Placing your order..." : `Place Order — ₹${cartTotal}`}
              </button>
            </div>
          )}
        </div>

        {/* Order summary sidebar */}
        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-4 lg:sticky lg:top-24">
          <h3 className="text-sm font-black text-stone-900 uppercase tracking-wider border-b pb-3">Order Summary</h3>
          <div className="space-y-2 text-xs text-stone-600 font-semibold">
            <div className="flex justify-between"><span>Subtotal:</span><span className="font-mono text-stone-800">₹{cartSubtotal}</span></div>
            {appliedDiscount > 0 && (
              <div className="flex justify-between text-emerald-800"><span>Discount:</span><span className="font-mono">-₹{discountAmount}</span></div>
            )}
            <div className="flex justify-between"><span>Shipping:</span><span className="font-mono text-stone-800">{shippingCost === 0 ? 'FREE' : `₹${shippingCost}`}</span></div>
            <div className="flex justify-between text-base font-black text-stone-900 border-t pt-3 mt-2">
              <span>Total:</span><span className="font-mono text-emerald-950">₹{cartTotal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
