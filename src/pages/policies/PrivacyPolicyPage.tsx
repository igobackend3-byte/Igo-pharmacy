import React from "react";
import PolicyLayout from "./PolicyLayout";

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      updated="July 2026"
      intro="IGO Pharma respects your privacy. This policy explains what information we collect, how we use it, and the choices you have."
      sections={[
        { heading: "Information We Collect", body: "We collect information you provide directly (name, email, phone, shipping address) when you create an account, place an order, or book a doctor consultation, along with order history and browsing preferences to improve recommendations." },
        { heading: "How We Use Your Information", body: "Your data is used to process orders, coordinate delivery, provide customer support, personalize product recommendations, and send optional newsletters. We never sell your personal data to third parties." },
        { heading: "Data Security", body: "All payment information is processed through PCI-compliant gateways. Account passwords and OTPs are encrypted. We use industry-standard safeguards to protect your data from unauthorized access." },
        { heading: "Cookies", body: "We use cookies to remember your cart, login session, and preferences. You can disable cookies in your browser, though some features may not function correctly." },
        { heading: "Your Rights", body: "You may request access to, correction of, or deletion of your personal data at any time from My Account > Security & Login, or by contacting our support team." }
      ]}
    />
  );
}
