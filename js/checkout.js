/* ============================================
   IGO Pharmacy — Checkout & Orders engine
   ============================================
   End-to-end order flow on a static site:
   - Address + contact validation
   - Payment: Cash on Delivery, Razorpay (when key set
     in js/payment-config.js), or WhatsApp order
   - Orders saved to localStorage ("My Orders") and to
     Firebase "orders" collection when connected.
============================================ */
(function(){
  'use strict';
  var ORDERS_KEY = 'igo_orders_v1';
  var WA_NUMBER = '917397789803';

  function money(n){ return '₹' + Number(n).toLocaleString('en-IN'); }

  function getOrders(){
    try{
      var raw = localStorage.getItem(ORDERS_KEY);
      return raw ? JSON.parse(raw) : [];
    }catch(e){ return []; }
  }

  function saveOrders(list){
    try{ localStorage.setItem(ORDERS_KEY, JSON.stringify(list)); }catch(e){}
  }

  function genOrderId(){
    var d = new Date();
    var ymd = String(d.getFullYear()).slice(2)
      + String(d.getMonth()+1).padStart(2,'0')
      + String(d.getDate()).padStart(2,'0');
    var rand = Math.random().toString(36).slice(2,6).toUpperCase();
    return 'IGO-' + ymd + '-' + rand;
  }

  function shippingFor(subtotal){
    var s = window.IGO_SHIPPING || { freeAbove: 999, flatFee: 60 };
    return subtotal >= s.freeAbove ? 0 : s.flatFee;
  }

  function createOrder(customer, payMethod, payStatus, extra){
    var items = window.IGO_CART.getCart();
    var subtotal = window.IGO_CART.getCartTotal();
    var shipping = shippingFor(subtotal);
    var order = {
      id: genOrderId(),
      createdAt: new Date().toISOString(),
      customer: customer,
      items: items,
      subtotal: subtotal,
      shipping: shipping,
      total: subtotal + shipping,
      payment: { method: payMethod, status: payStatus },
      status: payStatus === 'paid' ? 'confirmed' : 'pending-confirmation'
    };
    if (extra) Object.assign(order.payment, extra);

    var list = getOrders();
    list.unshift(order);
    saveOrders(list);

    // Push to Firebase when connected (fire-and-forget)
    try{
      if (window.IGO_DB && window.IGO_DB.saveFullOrder) window.IGO_DB.saveFullOrder(order);
      else if (window.IGO_DB && window.IGO_DB.saveOrder) window.IGO_DB.saveOrder(order.items, order.total);
    }catch(e){}

    return order;
  }

  function getOrder(id){
    return getOrders().find(function(o){ return o.id === id; }) || null;
  }

  function orderWhatsAppLink(order){
    var lines = ['Hi IGO Pharmacy, I placed order *' + order.id + '*:'];
    order.items.forEach(function(i){
      lines.push('- ' + i.name + ' x' + i.qty + ' (' + money(i.price * i.qty) + ')');
    });
    lines.push('Subtotal: ' + money(order.subtotal));
    lines.push('Shipping: ' + (order.shipping ? money(order.shipping) : 'FREE'));
    lines.push('Total: ' + money(order.total));
    lines.push('Payment: ' + order.payment.method.toUpperCase() + ' (' + order.payment.status + ')');
    var c = order.customer;
    lines.push('Deliver to: ' + c.name + ', ' + c.address + ', ' + c.city + ', ' + c.state + ' - ' + c.pincode + '. Ph: ' + c.phone);
    return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));
  }

  /* ---- Razorpay ---- */
  function razorpayReady(){ return !!window.IGO_RAZORPAY_KEY; }

  function loadRazorpay(){
    return new Promise(function(res, rej){
      if (window.Razorpay) return res();
      var s = document.createElement('script');
      s.src = 'https://checkout.razorpay.com/v1/checkout.js';
      s.onload = res; s.onerror = rej;
      document.head.appendChild(s);
    });
  }

  function payWithRazorpay(customer, onSuccess, onFail){
    var subtotal = window.IGO_CART.getCartTotal();
    var total = subtotal + shippingFor(subtotal);
    loadRazorpay().then(function(){
      var rzp = new window.Razorpay({
        key: window.IGO_RAZORPAY_KEY,
        amount: Math.round(total * 100), // paise
        currency: 'INR',
        name: 'IGO Pharmacy',
        description: 'Order payment',
        prefill: { name: customer.name, email: customer.email || '', contact: customer.phone },
        notes: { address: customer.address + ', ' + customer.city },
        theme: { color: '#1b4d3e' },
        handler: function(resp){
          var order = createOrder(customer, 'razorpay', 'paid', { paymentId: resp.razorpay_payment_id });
          onSuccess(order);
        },
        modal: { ondismiss: function(){ if(onFail) onFail('Payment window closed.'); } }
      });
      rzp.on('payment.failed', function(resp){
        if(onFail) onFail(resp.error && resp.error.description || 'Payment failed.');
      });
      rzp.open();
    }).catch(function(){ if(onFail) onFail('Could not load the payment gateway. Check your connection.'); });
  }

  window.IGO_ORDERS = {
    getOrders: getOrders,
    getOrder: getOrder,
    createOrder: createOrder,
    orderWhatsAppLink: orderWhatsAppLink,
    shippingFor: shippingFor,
    razorpayReady: razorpayReady,
    payWithRazorpay: payWithRazorpay,
    money: money
  };
})();
