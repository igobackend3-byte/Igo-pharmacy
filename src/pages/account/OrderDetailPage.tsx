import React from "react";
import { useParams, useSearchParams, Link, Navigate } from "react-router-dom";
import { Truck, CheckCircle2, ChevronRight, PartyPopper, MapPin, CreditCard } from "lucide-react";
import { useStore } from "../../context/StoreContext";

const STEPS = ["Processing", "Shipped", "Out for Delivery", "Delivered"];

export default function OrderDetailPage() {
  const { orderId } = useParams();
  const [searchParams] = useSearchParams();
  const { userProfile } = useStore();

  if (!userProfile) return <Navigate to="/account" replace />;

  const order = userProfile.orders?.find(o => o.id === orderId);
  if (!order) return <Navigate to="/account/orders" replace />;

  const justPlaced = searchParams.get("justPlaced") === "1";
  const currentIdx = STEPS.indexOf(order.status);

  return (
    <div className="space-y-6">
      <nav className="flex items-center gap-1.5 text-[11px] text-stone-500 font-medium">
        <Link to="/account/orders" className="hover:text-emerald-700">Purchase Records</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-emerald-800 font-bold">#{order.id}</span>
      </nav>

      {justPlaced && (
        <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-5 flex items-center gap-3">
          <PartyPopper className="h-6 w-6 text-emerald-700 shrink-0" />
          <div>
            <h3 className="text-sm font-black text-emerald-950">Order placed successfully!</h3>
            <p className="text-xs text-emerald-800">Your tracking ID is {order.trackingNumber}. We'll notify you as your formulations ship.</p>
          </div>
        </div>
      )}

      <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-stone-100 pb-4">
          <div>
            <h2 className="text-lg font-black text-stone-900">Order #{order.id}</h2>
            <p className="text-xs text-stone-400 font-mono">Placed on {order.date}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-emerald-100 text-emerald-800 text-[10px] px-2.5 py-0.5 font-bold uppercase">{order.status}</span>
            <button
              onClick={() => alert(`Invoice generated for Order #${order.id}. Downloading PDF...`)}
              className="text-[10px] text-emerald-800 hover:underline font-bold"
            >
              Invoice PDF
            </button>
          </div>
        </div>

        {/* Tracking timeline */}
        <div className="rounded-xl bg-stone-50 border border-stone-100 p-5 space-y-4">
          <h4 className="text-[10px] uppercase font-bold text-stone-400 flex items-center gap-1">
            <Truck className="h-4 w-4 text-emerald-700" />
            {order.carrier || "Shiprocket"} Real-Time Logistics Tracking
          </h4>
          <div className="grid grid-cols-4 text-center text-[10px] font-bold text-stone-400 relative">
            {STEPS.map((st, i) => {
              const active = i <= currentIdx;
              return (
                <div key={st} className="space-y-1">
                  <span className={`mx-auto flex h-6 w-6 items-center justify-center rounded-full ${active ? 'bg-emerald-700 text-white' : 'bg-stone-200'}`}>
                    {active ? <CheckCircle2 className="h-3.5 w-3.5" /> : null}
                  </span>
                  <span className={active ? 'text-emerald-950' : ''}>{st}</span>
                </div>
              );
            })}
          </div>
          {order.trackingNumber && (
            <p className="text-[11px] text-stone-500 text-center font-mono">Tracking ID: {order.trackingNumber}</p>
          )}
        </div>

        {/* Address & payment */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-stone-100 p-4 space-y-1.5">
            <span className="text-[10px] font-bold uppercase text-stone-400 flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Shipping Address</span>
            <p className="text-xs text-stone-700 font-light">{order.address?.street}, {order.address?.city}, {order.address?.state} - {order.address?.zip}</p>
          </div>
          <div className="rounded-xl border border-stone-100 p-4 space-y-1.5">
            <span className="text-[10px] font-bold uppercase text-stone-400 flex items-center gap-1"><CreditCard className="h-3.5 w-3.5" /> Payment Method</span>
            <p className="text-xs text-stone-700 font-light">{order.paymentMethod}</p>
          </div>
        </div>

        {/* Items */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-stone-800">Items in this order</h4>
          {order.items.map((item, idx) => (
            <Link key={idx} to={`/product/${item.product.id}`} className="flex items-center justify-between text-xs py-2 border-b border-stone-50 hover:bg-stone-50 rounded px-1 -mx-1">
              <div className="flex items-center gap-2 min-w-0">
                <img src={item.product.image} className="h-9 w-9 rounded object-cover border" referrerPolicy="no-referrer" />
                <span className="font-mono text-stone-400 font-bold">{item.quantity}x</span>
                <span className="font-semibold text-stone-800 truncate">{item.product.name}</span>
              </div>
              <span className="font-mono font-bold text-stone-700">₹{item.product.price * item.quantity}</span>
            </Link>
          ))}
        </div>

        {/* Totals */}
        <div className="space-y-1.5 text-xs text-stone-600 font-semibold border-t border-stone-100 pt-4">
          <div className="flex justify-between"><span>Subtotal:</span><span className="font-mono">₹{order.subtotal}</span></div>
          {order.discount > 0 && <div className="flex justify-between text-emerald-800"><span>Discount:</span><span className="font-mono">-₹{order.discount}</span></div>}
          <div className="flex justify-between"><span>Shipping:</span><span className="font-mono">{order.shipping === 0 ? 'FREE' : `₹${order.shipping}`}</span></div>
          <div className="flex justify-between text-sm font-black text-stone-900 border-t pt-2 mt-1"><span>Total:</span><span className="font-mono">₹{order.total}</span></div>
        </div>
      </div>
    </div>
  );
}
