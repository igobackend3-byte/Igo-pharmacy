/* ============================================
   IGO Pharmacy — Firebase data layer (optional)
   ============================================
   Activates ONLY when window.IGO_FIREBASE_CONFIG is set
   (js/firebase-config.js). Behaviour when active:

   1. PRODUCTS  — loads the "products" collection from Firestore.
      If documents exist, they replace the static catalog and the
      shop/trending grids re-render live.
   2. LEADS     — every enquiry/newsletter form submission is saved
      to the "leads" collection (in addition to the WhatsApp handoff).
   3. ORDERS    — WhatsApp checkouts are logged to "orders".

   With no config, this file does nothing — the site keeps
   working from the static catalog. See FIREBASE-SETUP.md.
============================================ */
(function(){
  'use strict';
  var cfg = window.IGO_FIREBASE_CONFIG;
  if (!cfg || !cfg.projectId) return; // not connected yet — static mode

  var SDK = 'https://www.gstatic.com/firebasejs/10.12.2/';

  function load(src){
    return new Promise(function(res, rej){
      var s = document.createElement('script');
      s.src = src; s.onload = res; s.onerror = rej;
      document.head.appendChild(s);
    });
  }

  load(SDK + 'firebase-app-compat.js')
    .then(function(){ return load(SDK + 'firebase-firestore-compat.js'); })
    .then(function(){
      firebase.initializeApp(cfg);
      var db = firebase.firestore();

      // ---- Public API used by main.js / cart.js ----
      window.IGO_DB = {
        saveLead: function(data){
          try{
            return db.collection('leads').add(Object.assign({
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
              source: location.pathname.split('/').pop() || 'index.html'
            }, data));
          }catch(e){ return Promise.resolve(); }
        },
        saveOrder: function(items, total){
          try{
            return db.collection('orders').add({
              items: items, total: total, status: 'whatsapp-pending',
              createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
          }catch(e){ return Promise.resolve(); }
        }
      };

      // ---- Live product catalog ----
      db.collection('products').get().then(function(snap){
        if (snap.empty) return; // keep static catalog
        var live = [];
        snap.forEach(function(doc){
          var d = doc.data();
          live.push({
            id: doc.id,
            name: d.name || '',
            price: (typeof d.price === 'number') ? d.price : null,
            mrp: (typeof d.mrp === 'number') ? d.mrp : null,
            img: d.img || '',
            cat: d.cat || 'fertilizers',
            catLabel: d.catLabel || d.cat || '',
            mode: d.mode || (typeof d.price === 'number' ? 'cart' : 'enquire'),
            pack: d.pack || null,
            off: (d.price && d.mrp) ? Math.round((1 - d.price / d.mrp) * 100) : 0,
            hot: !!d.hot
          });
        });
        window.IGO_PRODUCTS = live;
        if (window.IGO_SHOP_REFRESH) window.IGO_SHOP_REFRESH();
      }).catch(function(){ /* offline / rules — stay on static catalog */ });
    })
    .catch(function(){ /* SDK failed to load — stay on static catalog */ });
})();
