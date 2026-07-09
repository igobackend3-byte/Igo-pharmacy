/* ============================================
   IGO Pharmacy — Shop Cart (localStorage based)
   No real payment processing. "Checkout" hands off
   to WhatsApp with an itemised order summary so our
   team can confirm stock, pricing and delivery.
   ============================================ */
(function(){
  var CART_KEY = 'igo_cart_v1';
  var WA_NUMBER = '917397789803';

  function getCart(){
    try{
      var raw = localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) : (window.__igoCartMem || []);
    }catch(e){ return window.__igoCartMem || []; }
  }

  function saveCart(items){
    try{ localStorage.setItem(CART_KEY, JSON.stringify(items)); }
    catch(e){ window.__igoCartMem = items; } // private-mode fallback
    renderCartBadge();
  }

  function addToCart(product){
    var items = getCart();
    var existing = items.find(function(i){ return i.id === product.id; });
    if(existing){
      existing.qty += (product.qty || 1);
    }else{
      items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        mrp: product.mrp || null,
        img: product.img,
        category: product.category || '',
        qty: product.qty || 1
      });
    }
    saveCart(items);
    return items;
  }

  function updateQty(id, qty){
    var items = getCart();
    var it = items.find(function(i){ return i.id === id; });
    if(it){
      it.qty = Math.max(1, qty|0);
      saveCart(items);
    }
    return items;
  }

  function removeFromCart(id){
    var items = getCart().filter(function(i){ return i.id !== id; });
    saveCart(items);
    return items;
  }

  function clearCart(){
    saveCart([]);
  }

  function getCartCount(){
    return getCart().reduce(function(sum, i){ return sum + i.qty; }, 0);
  }

  function getCartTotal(){
    return getCart().reduce(function(sum, i){ return sum + (i.price * i.qty); }, 0);
  }

  function renderCartBadge(){
    var count = getCartCount();
    document.querySelectorAll('.cart-count').forEach(function(el){
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  }

  function toast(msg){
    var el = document.getElementById('cartToast');
    if(!el){
      el = document.createElement('div');
      el.id = 'cartToast';
      el.className = 'cart-toast';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(window.__cartToastTimer);
    window.__cartToastTimer = setTimeout(function(){ el.classList.remove('show'); }, 2200);
  }

  function buildWhatsAppOrderLink(){
    var items = getCart();
    if(!items.length) return 'https://wa.me/' + WA_NUMBER;
    var lines = ['Hi IGO Pharmacy, I would like to order:'];
    items.forEach(function(i){
      lines.push('- ' + i.name + ' x' + i.qty + ' (Rs.' + (i.price * i.qty).toLocaleString('en-IN') + ')');
    });
    lines.push('Total: Rs.' + getCartTotal().toLocaleString('en-IN'));
    lines.push('Please confirm stock, final pricing and delivery.');
    return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));
  }

  // Delegate clicks on any [data-add-to-cart] button
  document.addEventListener('click', function(e){
    var btn = e.target.closest('[data-add-to-cart]');
    if(!btn) return;
    e.preventDefault();
    var product = {
      id: btn.getAttribute('data-id'),
      name: btn.getAttribute('data-name'),
      price: parseFloat(btn.getAttribute('data-price')) || 0,
      mrp: parseFloat(btn.getAttribute('data-mrp')) || null,
      img: btn.getAttribute('data-img'),
      category: btn.getAttribute('data-category') || ''
    };
    addToCart(product);
    toast(product.name + ' added to cart');
    var origText = btn.textContent;
    btn.textContent = 'Added ✓';
    btn.classList.add('added');
    setTimeout(function(){ btn.textContent = origText; btn.classList.remove('added'); }, 1400);
  });

  document.addEventListener('DOMContentLoaded', renderCartBadge);
  if(document.readyState !== 'loading') renderCartBadge();

  window.IGO_CART = {
    getCart: getCart,
    addToCart: addToCart,
    updateQty: updateQty,
    removeFromCart: removeFromCart,
    clearCart: clearCart,
    getCartCount: getCartCount,
    getCartTotal: getCartTotal,
    renderCartBadge: renderCartBadge,
    buildWhatsAppOrderLink: buildWhatsAppOrderLink
  };
})();
