/* ============================================
   IGO Pharmacy — Payment configuration
   ============================================
   RAZORPAY (online payment — UPI, cards, netbanking):
   1. Create an account at https://razorpay.com
   2. Dashboard → Settings → API Keys → Generate Key
   3. Paste your Key ID below (starts with rzp_test_ or rzp_live_)

   Until a key is set, the Razorpay option on checkout shows as
   "coming soon" and customers can order via COD or WhatsApp.
============================================ */

window.IGO_RAZORPAY_KEY = null; // e.g. "rzp_test_XXXXXXXXXXXX"

/* Free shipping threshold and flat shipping fee (INR) */
window.IGO_SHIPPING = { freeAbove: 999, flatFee: 60 };
