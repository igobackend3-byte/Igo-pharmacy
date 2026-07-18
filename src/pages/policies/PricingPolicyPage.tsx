import React from "react";
import PolicyLayout from "./PolicyLayout";

export default function PricingPolicyPage() {
  return (
    <PolicyLayout
      title="Pricing Policy"
      updated="July 2026"
      intro="Transparency in pricing is core to how we operate. Here's how prices, discounts, and shipping charges are determined."
      sections={[
        { heading: "Product Pricing", body: "All listed prices include applicable taxes unless stated otherwise. Prices may vary slightly between formulations of the same herb due to sourcing, batch certification costs, and manufacturer MRP." },
        { heading: "Discounts & Coupons", body: "Promotional coupon codes (e.g. VEDIC15) apply a percentage discount to your basket subtotal at checkout. Discounts cannot be combined unless explicitly stated, and are subject to change or expiry without notice." },
        { heading: "Subscription Pricing", body: "Subscribing to monthly or bi-monthly auto-refills unlocks a 15% discount versus one-time purchase pricing, applied automatically at each billing cycle." },
        { heading: "Shipping Charges", body: "Orders above $50 qualify for free standard shipping. Orders below this threshold incur a flat $5 shipping fee, calculated at checkout." },
        { heading: "Price Changes", body: "We reserve the right to update product pricing at any time to reflect manufacturer cost changes. Prices at the time of order confirmation are final for that transaction." }
      ]}
    />
  );
}
