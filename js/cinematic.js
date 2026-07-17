/* ═══════════════════════════════════════════════════════════════════════
CINEMATIC LAYER — GSAP ScrollTrigger batch-stagger reveal, modeled on the
igogroups.in "Awards & Achievements" page animation.
Additive only: never touches the site's existing CSS-driven `.reveal`
system in main.js — it skips any element that already carries the
`reveal` class, and simply adds a scroll-triggered, staggered "cards
enter together" choreography on top of the card/tile grids that don't
have any scroll animation yet (product cards, category tiles, the
ecosystem grid, stat cards, roadmap steps, etc).
No-ops entirely if the CDN libraries fail to load or the visitor
prefers reduced motion, so the site works identically either way.
═══════════════════════════════════════════════════════════════════════ */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  document.addEventListener('DOMContentLoaded', function () {

    // ── Sitewide cinematic card stagger — every card/tile grid on this
    // site gets the same "batch enters together, once" choreography. ──
    var cinematicGroups = [
      '.prod-card',        // shop.html product grid
      '.shop-cat-tile',    // shop.html category icon tiles
      '.cat-card-h',       // index.html Shop by Category cards
      '.hp-card',          // index.html Planned Range preview cards
      '.eco-card',         // index.html IGO Group ecosystem grid
      '.well-stat',        // index.html hero stat cards
      '.well-step',        // index.html / wellness.html roadmap timeline steps
      '.ab-pillar',        // about.html core pillar cards
      '.ab-trust-badge',   // about.html group recognition badges
      '.db-offer',         // dealer.html offer cards
      '.contact-card'      // dealer.html / service-consultation.html contact cards
    ];

    var revealedItems = [];
    cinematicGroups.forEach(function (sel) {
      // Elements already carrying the `reveal` class are animated by
      // main.js's native CSS-transition reveal system. Letting GSAP
      // drive opacity on them too means two systems fight over the same
      // property every frame, so those are skipped here.
      var items = gsap.utils.toArray(sel).filter(function (el) {
        return !el.classList.contains('reveal');
      });
      if (!items.length) return;
      gsap.set(items, { opacity: 0, y: 44 });
      revealedItems = revealedItems.concat(items);
      ScrollTrigger.batch(items, {
        start: 'top 90%',
        onEnter: function (batch) {
          gsap.to(batch, { opacity: 1, y: 0, duration: 0.85, stagger: 0.1, ease: 'power3.out' });
        },
        once: true
      });
    });

    // Safety net: if anything above never got revealed (edge cases in
    // batch timing, layout shifts from late-loading images, etc.), force
    // it visible rather than risk permanently-invisible content.
    if (revealedItems.length) {
      setTimeout(function () {
        gsap.to(revealedItems.filter(function (el) { return +getComputedStyle(el).opacity < 1; }), {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.03, ease: 'power2.out'
        });
      }, 2500);
    }

    // ── Hero parallax: hero visual image drifts slower than scroll for
    // depth, same technique as the reference site's hero video/mesh. ──
    var hero = document.querySelector('.sc-hero');
    if (hero) {
      var heroVisual = hero.querySelector('.hero-visual img, .hero-visual');
      if (heroVisual) {
        gsap.to(heroVisual, {
          yPercent: 10, ease: 'none',
          scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true }
        });
      }
    }
  });
})();
