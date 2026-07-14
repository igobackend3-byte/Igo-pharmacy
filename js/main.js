// IGO Pharmacy — site interactions (static site, no backend)
// v2 rebuild: catalog-aware search + WhatsApp form handoff

function toggleFaq(el){
  const item = el.parentElement;
  document.querySelectorAll('.faq-item').forEach(i=>{ if(i!==item) i.classList.remove('open'); });
  item.classList.toggle('open');
}

function prefillEnquiry(topic){
  const msg = document.getElementById('enquiryMessage');
  if(msg) msg.value = 'I need help with: ' + topic;
  const section = document.getElementById('contact');
  if(section) section.scrollIntoView({behavior:'smooth'});
}

const IGO_WA_NUMBER = '917397789803';

function handleSubmit(e){
  e.preventDefault();
  const form = e.target;
  const lines = ['Hi IGO Pharmacy, new enquiry from the website:'];
  form.querySelectorAll('input, select, textarea').forEach(el=>{
    if(!el.value || el.type === 'submit') return;
    const label = (form.querySelector('label[for="'+el.id+'"]') || {}).textContent
      || el.name || el.placeholder || el.id || 'Field';
    lines.push(label.trim() + ': ' + el.value.trim());
  });
  // Save to Firestore too, when Firebase is connected (js/firebase-config.js)
  if(window.IGO_DB){
    const data = {};
    form.querySelectorAll('input, select, textarea').forEach(el=>{
      if(el.value && el.type !== 'submit') data[el.name || el.id || 'field'] = el.value.trim();
    });
    window.IGO_DB.saveLead(data);
  }
  window.open('https://wa.me/' + IGO_WA_NUMBER + '?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
  let note = form.querySelector('.form-status');
  if(!note){
    note = document.createElement('p');
    note.className = 'form-status';
    form.appendChild(note);
  }
  note.textContent = 'Opening WhatsApp with your enquiry — press Send there and our team will reply within 24 hours.';
  return false;
}

function handleNewsletter(e){
  e.preventDefault();
  const form = e.target;
  const email = (form.querySelector('input[type="email"], input') || {}).value || '';
  if(window.IGO_DB) window.IGO_DB.saveLead({type:'newsletter', email: email});
  window.open('https://wa.me/' + IGO_WA_NUMBER + '?text=' + encodeURIComponent(
    'Hi IGO Pharmacy, please add me to your crop-care tips & offers list. Email: ' + email), '_blank', 'noopener');
  return false;
}

function initChipTabs(){
  const tabs = document.querySelectorAll('.chip-tab');
  tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
      tabs.forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.chip-panel').forEach(p=>p.classList.remove('active'));
      const target = document.getElementById(tab.dataset.panel);
      if(target) target.classList.add('active');
    });
  });
}

function initShopFilter(){
  if(document.getElementById('shopGridDyn')) return;
  const tabs = document.querySelectorAll('.shop-filter-tab');
  const cards = document.querySelectorAll('.prod-grid .prod-card[data-shopcat]');
  const countEl = document.getElementById('shopResultCount');
  if(!tabs.length || !cards.length) return;

  function applyFilter(cat){
    let visible = 0;
    cards.forEach(card=>{
      const show = cat === 'all' || card.dataset.shopcat === cat;
      card.style.display = show ? '' : 'none';
      if(show) visible++;
    });
    if(countEl) countEl.textContent = visible + ' product' + (visible === 1 ? '' : 's');
  }

  tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
      tabs.forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
      applyFilter(tab.dataset.filter);
    });
  });

  const initial = document.querySelector('.shop-filter-tab.active');
  applyFilter(initial ? initial.dataset.filter : 'all');
}

function initMobileNav(){
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  if(!menuToggle || !mobileNav) return;
  menuToggle.addEventListener('click', ()=>{
    mobileNav.classList.toggle('open');
  });
  mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>mobileNav.classList.remove('open')));
}

function initSearch(){
  const toggle = document.getElementById('searchToggle');
  const panel = document.getElementById('searchPanel');
  const form = document.getElementById('searchForm');
  const input = document.getElementById('searchInput');
  const msg = document.getElementById('searchMsg');
  if(!toggle || !panel || !form || !input) return;

  toggle.addEventListener('click', ()=>{
    panel.classList.toggle('open');
    if(panel.classList.contains('open')) setTimeout(()=>input.focus(), 60);
  });

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const q = input.value.trim().toLowerCase();
    if(msg) msg.textContent = '';
    if(!q) return;

    const catalog = window.IGO_PRODUCTS || [];
    const prodHits = catalog.filter(p => (p.name + ' ' + p.catLabel + ' ' + p.cat).toLowerCase().includes(q));
    if(prodHits.length){
      if(document.getElementById('shopGridDyn')){
        const shopSearch = document.getElementById('shopSearch');
        if(shopSearch){
          shopSearch.value = q;
          shopSearch.dispatchEvent(new Event('input'));
          panel.classList.remove('open');
          shopSearch.scrollIntoView({behavior:'smooth', block:'center'});
          return;
        }
      }
      window.location.href = 'shop.html?q=' + encodeURIComponent(q);
      return;
    }

    const items = Array.from(document.querySelectorAll('#categories .cat-card, #services .service-card, .chip'));
    const hit = items.find(el => el.textContent.toLowerCase().includes(q));

    if(hit){
      const chipPanel = hit.closest('.chip-panel');
      if(chipPanel && !chipPanel.classList.contains('active')){
        const tabBtn = document.querySelector('.chip-tab[data-panel="'+chipPanel.id+'"]');
        if(tabBtn) tabBtn.click();
      }
      panel.classList.remove('open');
      setTimeout(()=>{
        hit.scrollIntoView({behavior:'smooth', block:'center'});
        hit.classList.add('search-hit');
        setTimeout(()=>hit.classList.remove('search-hit'), 2000);
      }, 60);
      return;
    }

    const linkItems = Array.from(document.querySelectorAll('nav.main-nav .nav-dropdown a, .blog-card'));
    const linkHit = linkItems.find(el => el.textContent.toLowerCase().includes(q));
    if(linkHit && linkHit.getAttribute('href')){
      window.location.href = linkHit.getAttribute('href');
      return;
    }

    if(msg) msg.textContent = 'No matches found on this site yet. Try "pesticide", "seeds", "sprayer", "rice", or "mastitis" — or send us an enquiry below.';
  });
}

function initMobileNavDropdowns(){
  const toggles = document.querySelectorAll('.mobile-nav .drop-toggle-m');
  toggles.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const item = btn.parentElement;
      item.classList.toggle('open-sub');
    });
  });
}

function initHeaderScroll(){
  const header = document.getElementById('siteHeader');
  if(!header) return;
  window.addEventListener('scroll', ()=>{
    header.classList.toggle('scrolled', window.scrollY > 20);
  });
}

function initReveal(){
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.12});
  revealEls.forEach(el=>io.observe(el));
}

function initCounters(){
  const counters = document.querySelectorAll('.count');
  const cio = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const duration = 1400;
        const start = performance.now();
        function tick(now){
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const val = Math.floor(eased * target);
          el.textContent = val.toLocaleString('en-IN');
          if(progress < 1) requestAnimationFrame(tick);
          else el.textContent = target.toLocaleString('en-IN');
        }
        requestAnimationFrame(tick);
        cio.unobserve(el);
      }
    });
  }, {threshold:0.5});
  counters.forEach(el=>cio.observe(el));
}

document.addEventListener('DOMContentLoaded', ()=>{
  initChipTabs();
  initMobileNav();
  initMobileNavDropdowns();
  initSearch();
  initHeaderScroll();
  initReveal();
  initCounters();
  initShopFilter();
});
