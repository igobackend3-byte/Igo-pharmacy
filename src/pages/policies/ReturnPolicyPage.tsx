import React from "react";
import PolicyLayout from "./PolicyLayout";

export default function ReturnPolicyPage() {
  return (
    <PolicyLayout
      title="Return & Refund Policy"
      updated="July 2026"
      intro="We want you to be fully satisfied with every order. If something isn't right, here's how returns and refunds work."
      sections={[
        { heading: "Eligibility", body: "Unopened, unused products in original packaging can be returned within 7 days of delivery. For safety and hygiene, opened consumable products (capsules, powders, oils, syrups) cannot be returned unless defective or incorrect." },
        { heading: "Damaged or Incorrect Items", body: "If you receive a damaged, expired, or incorrect product, contact support within 48 hours of delivery with photos. We will arrange a free replacement or full refund." },
        { heading: "How to Initiate a Return", body: "Go to My Account > Purchase Records, select the order, and choose 'Request Return', or contact our support team directly with your order ID." },
        { heading: "Refund Timeline", body: "Approved refunds are processed within 5-7 business days to your original payment method, or instantly to your IGO Wallet if selected." },
        { heading: "Subscription Cancellations", body: "Auto-refill subscriptions can be paused or cancelled anytime from My Account > Subscriptions before the next scheduled billing date." }
      ]}
    />
  );
}
