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
    var fb = p.img || 'img/igo-organic-pharmacy-brand.jpg';
    var saving = p.mrp && p.price ? Math.round(((p.mrp - p.price) / p.mrp) * 100) : 0;
    var badge = '';
    if (p.available === false) badge = '<span class="prod-badge" style="background:#888;">Out of Stock</span>';
    else if (saving > 0) badge = '<span class="prod-badge">Save ' + saving + '%</span>';
    else if (p.brand) badge = '<span class="prod-badge" style="background:#1b4d3e;">' + esc(p.brand) + '</span>';

    var priceRow = '';
    if (p.price) {
      priceRow = '<div class="prod-price-section"><span class="prod-price">₹' + Number(p.price).toLocaleString('en-IN') + '</span>'
        + (p.mrp ? '<span class="prod-mrp">₹' + Number(p.mrp).toLocaleString('en-IN') + '</span>' : '') + '</div>';
    }
    
    var action = '<div class="prod-actions">' +
      '<a href="product.html?id=' + encodeURIComponent(p.id) + '" class="btn btn-outline">View Details</a>' +
      '<button type="button" data-add-to-cart data-id="' + esc(p.id) + '" data-name="' + esc(p.name)
        + '" data-price="' + (p.price || 0) + '"' + (p.mrp ? ' data-mrp="' + p.mrp + '"' : '')
        + ' data-img="' + esc(p.img) + '" data-category="' + esc(p.catLabel || p.cat) + '" class="btn btn-primary">Add Cart</button>' +
      '</div>';
    
    var brandLine = p.brand ? '<div class="prod-brand" style="font-size:11px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;color:var(--green);margin-bottom:2px;">' + esc(p.brand) + '</div>' : '';
    var ratingLine = '';
    if (window.IGO_REVIEWS){
      var rs = window.IGO_REVIEWS.summary(p.id);
      ratingLine = '<div style="font-size:11.5px;color:var(--gray);margin-bottom:4px;">' + window.IGO_REVIEWS.starsHTML(rs.rating, 11) + ' ' + rs.rating + ' (' + rs.count + ')</div>';
    }
    return '<div class="prod-card" data-shopcat="' + p.cat + '">'
      + '<div class="prod-img-wrap">' + badge
      + '<img src="' + esc(p.img) + '" onerror="this.onerror=null;this.src=\'img/igo-organic-pharmacy-brand.jpg\';" alt="' + esc(p.name) + '" loading="lazy" decoding="async"></div>'
      + '<div class="prod-info">' + brandLine + '<h3 class="prod-name">' + esc(p.name) + '</h3>' + ratingLine
      + '<p class="prod-desc">' + esc(p.brief || p.catLabel) + '</p>'
      + priceRow + action + '</div></div>';
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

    var brandTabs = document.querySelectorAll('.shop-brand-tab');
    var concernEl = document.getElementById('shopConcern');
    var state = { cat:'all', q:'', sort:'featured', brand:'all', concern:'all' };

    // populate concern dropdown from catalog
    if (concernEl){
      var concerns = [];
      P.forEach(function(p){ if (p.concern && concerns.indexOf(p.concern) === -1) concerns.push(p.concern); });
      concerns.sort().forEach(function(c){
        var o = document.createElement('option'); o.value = c; o.textContent = c;
        concernEl.appendChild(o);
      });
      concernEl.addEventListener('change', function(){ state.concern = concernEl.value; apply(); });
    }

    // read ?q=, ?cat= and ?brand= from URL (used by sitewide search)
    try {
      var usp = new URLSearchParams(window.location.search);
      if (usp.get('q'))  { state.q = usp.get('q'); if (searchEl) searchEl.value = state.q; }
      if (usp.get('cat')){ state.cat = usp.get('cat'); }
      if (usp.get('brand')){ state.brand = usp.get('brand'); }
      if (usp.get('concern')){ state.concern = usp.get('concern'); if (concernEl) concernEl.value = state.concern; }
      if (window.location.hash && window.location.hash.length > 1) { state.cat = window.location.hash.slice(1); }
    } catch(e){}

    function apply(){
      var q = state.q.trim().toLowerCase();
      var items = P.filter(function(p){
        var okCat = state.cat === 'all' || p.cat === state.cat;
        var okBrand = state.brand === 'all' || (p.brand || '') === state.brand;
        var okConcern = state.concern === 'all' || (p.concern || '') === state.concern;
        var okQ = !q || (p.name + ' ' + p.catLabel + ' ' + p.cat + ' ' + (p.brand||'') + ' ' + (p.concern||'') + ' ' + (p.brief||'')).toLowerCase().indexOf(q) !== -1;
        return okCat && okBrand && okConcern && okQ;
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
      brandTabs.forEach(function(t){ t.classList.toggle('active', t.dataset.brand === state.brand); });
    }

    tabs.forEach(function(t){
      t.addEventListener('click', function(){ state.cat = t.dataset.filter; apply(); });
    });
    brandTabs.forEach(function(t){
      t.addEventListener('click', function(){ state.brand = t.dataset.brand; apply(); });
    });
    // category tiles double as filters
    document.querySelectorAll('.shop-cat-tile[data-filter]').forEach(function(t){
      t.addEventListener('click', function(){ state.cat = t.dataset.filter; apply();
        var g = document.getElementById('shopGridDyn'); if (g) g.scrollIntoView({behavior:'smooth'}); });
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
