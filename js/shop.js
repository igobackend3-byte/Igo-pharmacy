/* ============================================
   IGO Pharmacy — Shop engine
   Renders the product catalog (js/products.js) with
   live search, category filter, sorting and a
   "Trending" strip on the homepage. Static-site
   friendly: no backend, works from file:// too.
   When Firebase is connected (js/firebase.js), the
   catalog is replaced live via IGO_SHOP_REFRESH.
   ============================================ */
(function(){
  'use strict';
  var P = window.IGO_PRODUCTS || [];
  var _apply = null; // set by initShopPage; used by IGO_SHOP_REFRESH
  var LABELS = window.IGO_CAT_LABELS || {};
  var WA = '917397789803';
  var FALLBACK = {
    seeds:      'img/category_seeds_hybrid_1783401471868.webp',
    fertilizers:'img/category_seeds_hybrid_1783401471868.webp',
    pesticides: 'img/category_pesticides_spray_1783401460265.webp',
    equipment:  'img/category_equipment_tractor_1783401493658.webp',
    veterinary: 'img/category_veterinary_cattle_1783401505951.webp'
  };

  function inr(n){ return '₹' + Number(n).toLocaleString('en-IN'); }
  function esc(s){ return String(s).replace(/[&<>"']/g, function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }

  function waEnquireLink(name){
    return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(
      'Hi IGO Pharmacy, I would like a price & availability quote for: ' + name);
  }

  function cardHTML(p){
    var fb = FALLBACK[p.cat] || FALLBACK.seeds;
    var badge = '';
    if (p.hot) badge = '<span class="prod-badge">Best Seller</span>';
    else if (p.off) badge = '<span class="prod-badge sale">Save ' + p.off + '%</span>';
    else if (p.mode === 'enquire') badge = '<span class="prod-badge enq">Bulk / B2B</span>';

    var priceRow, action;
    if (p.mode === 'cart'){
      priceRow = '<div class="prod-price-row"><span class="prod-price">' + inr(p.price) + '</span>'
        + (p.mrp ? '<span class="prod-mrp">' + inr(p.mrp) + '</span>' : '')
        + (p.off ? '<span class="prod-save">' + p.off + '% off</span>' : '') + '</div>';
      action = '<button type="button" data-add-to-cart data-id="' + esc(p.id) + '" data-name="' + esc(p.name)
        + '" data-price="' + p.price + '"' + (p.mrp ? ' data-mrp="' + p.mrp + '"' : '')
        + ' data-img="' + esc(p.img) + '" data-category="' + esc(p.catLabel) + '">Add to Cart</button>';
    } else {
      priceRow = '<div class="prod-price-row"><span class="prod-price enquire">Price on request</span></div>';
      action = '<a class="prod-enquire-btn" href="' + waEnquireLink(p.name) + '" target="_blank" rel="noopener">Get Quote on WhatsApp</a>';
    }
    return '<div class="prod-card" data-shopcat="' + p.cat + '">'
      + '<div class="prod-img-wrap">' + badge
      + '<img src="' + esc(p.img) + '" onerror="this.onerror=null;this.src=\'' + fb + '\';" alt="' + esc(p.name) + ' pack" loading="lazy" decoding="async"></div>'
      + '<div class="prod-body"><div class="prod-cat">' + esc(LABELS[p.cat] || p.catLabel) + '</div>'
      + '<h4>' + esc(p.name) + '</h4>' + priceRow + action + '</div></div>';
  }

  /* ---------- Full shop page ---------- */
  function initShopPage(){
    var grid = document.getElementById('shopGridDyn');
    if (!grid) return;
    var searchEl = document.getElementById('shopSearch');
    var sortEl = document.getElementById('shopSort');
    var countEl = document.getElementById('shopResultCount');
    var emptyEl = document.getElementById('shopEmpty');
    var tabs = document.querySelectorAll('.shop-filter-tab');

    var state = { cat:'all', q:'', sort:'featured' };

    // read ?q= and ?cat= from URL (used by sitewide search)
    try {
      var usp = new URLSearchParams(window.location.search);
      if (usp.get('q'))  { state.q = usp.get('q'); if (searchEl) searchEl.value = state.q; }
      if (usp.get('cat')){ state.cat = usp.get('cat'); }
    } catch(e){}

    function apply(){
      var q = state.q.trim().toLowerCase();
      var items = P.filter(function(p){
        var okCat = state.cat === 'all' || p.cat === state.cat;
        var okQ = !q || (p.name + ' ' + p.catLabel + ' ' + p.cat).toLowerCase().indexOf(q) !== -1;
        return okCat && okQ;
      });
      switch (state.sort){
        case 'price-asc':  items.sort(function(a,b){ return (a.price||1e9) - (b.price||1e9); }); break;
        case 'price-desc': items.sort(function(a,b){ return (b.price||0) - (a.price||0); }); break;
        case 'discount':   items.sort(function(a,b){ return (b.off||0) - (a.off||0); }); break;
        case 'name':       items.sort(function(a,b){ return a.name.localeCompare(b.name); }); break;
        default:           items.sort(function(a,b){ return (b.hot - a.hot) || (b.off - a.off); });
      }
      grid.innerHTML = items.map(cardHTML).join('');
      if (countEl) countEl.textContent = items.length + ' product' + (items.length === 1 ? '' : 's');
      if (emptyEl) emptyEl.style.display = items.length ? 'none' : 'block';
      tabs.forEach(function(t){ t.classList.toggle('active', t.dataset.filter === state.cat); });
    }

    tabs.forEach(function(t){
      t.addEventListener('click', function(){ state.cat = t.dataset.filter; apply(); });
    });
    if (searchEl) searchEl.addEventListener('input', function(){ state.q = searchEl.value; apply(); });
    if (sortEl) sortEl.addEventListener('change', function(){ state.sort = sortEl.value; apply(); });
    apply();
    _apply = apply;
  }

  /* ---------- Homepage trending strip ---------- */
  function initTrending(){
    var grid = document.getElementById('trendingGrid');
    if (!grid) return;
    var items = P.filter(function(p){ return p.hot; }).slice(0, 8);
    if (!items.length) items = P.slice(0, 8);
    grid.innerHTML = items.map(cardHTML).join('');
  }

  document.addEventListener('DOMContentLoaded', function(){
    initShopPage();
    initTrending();
  });

  // Called by js/firebase.js after live products load from Firestore
  window.IGO_SHOP_REFRESH = function(){
    P = window.IGO_PRODUCTS || [];
    if (_apply) _apply();
    initTrending();
  };
})();
