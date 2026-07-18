import React from "react";
import PolicyLayout from "./PolicyLayout";

export default function TermsPage() {
  return (
    <PolicyLayout
      title="Terms & Conditions"
      updated="July 2026"
      intro="By accessing or using the IGO Pharma website, you agree to the following terms and conditions."
      sections={[
        { heading: "Use of Site", body: "This site is intended for informational and e-commerce purposes only. Content, including health and dosage information, is educational and does not replace professional medical advice. Always consult a certified physician before starting any new formulation." },
        { heading: "Account Responsibility", body: "You are responsible for maintaining the confidentiality of your account and OTP codes. Notify us immediately of any unauthorized use of your account." },
        { heading: "Orders & Pricing", body: "All prices are listed in USD unless otherwise noted and are subject to change without notice. We reserve the right to refuse or cancel any order due to stock, pricing errors, or suspected fraud." },
        { heading: "Intellectual Property", body: "All content, branding, product photography, and formulations described on this site are the property of IGO Pharma and its partner pharmacies and may not be reproduced without permission." },
        { heading: "Limitation of Liability", body: "IGO Pharma is not liable for indirect or incidental damages arising from product use. Products are not intended to diagnose, treat, cure, or prevent any disease unless prescribed by a licensed physician." },
        { heading: "Governing Law", body: "These terms are governed by the laws of India, with exclusive jurisdiction in the courts of Uttarakhand." }
      ]}
    />
  );
}
