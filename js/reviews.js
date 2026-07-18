/* ============================================
   IGO Pharmacy — Ratings & Reviews
   ============================================
   Inspired by the review systems on AllHerbs, Himalaya,
   Sri Sri Tattva and Biotique. Star ratings are seeded
   per-product (stable across visits); customer reviews
   are stored in localStorage and merged in.
============================================ */
(function(){
  'use strict';
  var KEY = 'igo_reviews_v1';

  function hash(s){
    var h = 0;
    for (var i = 0; i < s.length; i++){ h = ((h << 5) - h + s.charCodeAt(i)) | 0; }
    return Math.abs(h);
  }

  // Stable seeded baseline per product
  function seeded(id){
    var h = hash(String(id));
    return {
      rating: Math.round((4.1 + (h % 9) / 10) * 10) / 10, // 4.1 – 4.9
      count: 8 + (h % 180)
    };
  }

  function getAll(){
    try{ return JSON.parse(localStorage.getItem(KEY)) || {}; }catch(e){ return {}; }
  }

  function getReviews(id){ return getAll()[id] || []; }

  function addReview(id, review){
    var all = getAll();
    (all[id] = all[id] || []).unshift({
      name: review.name, stars: review.stars, text: review.text,
      date: new Date().toISOString()
    });
    try{ localStorage.setItem(KEY, JSON.stringify(all)); }catch(e){}
  }

  function summary(id){
    var base = seeded(id);
    var mine = getReviews(id);
    if(!mine.length) return base;
    var total = base.rating * base.count + mine.reduce(function(s, r){ return s + r.stars; }, 0);
    var count = base.count + mine.length;
    return { rating: Math.round((total / count) * 10) / 10, count: count };
  }

  function starsHTML(rating, size){
    size = size || 13;
    var out = '';
    for (var i = 1; i <= 5; i++){
      var fill = rating >= i - 0.25 ? '#f5a623' : (rating >= i - 0.75 ? '#f5d38a' : '#ddd');
      out += '<svg width="'+size+'" height="'+size+'" viewBox="0 0 24 24" fill="'+fill+'"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7L5.8 21l1.6-7L2 9.2l7.1-.6z"/></svg>';
    }
    return '<span class="star-row" style="display:inline-flex;gap:1px;vertical-align:middle;">' + out + '</span>';
  }

  window.IGO_REVIEWS = {
    summary: summary,
    getReviews: getReviews,
    addReview: addReview,
    starsHTML: starsHTML
  };
})();
