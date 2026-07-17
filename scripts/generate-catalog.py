#!/usr/bin/env python3
"""
IGO Pharmacy — catalog generator.
Reads ka-catalog.json (crawled from keralaayurveda.com) and writes js/products.js:
  - 8 original IGO Pharmacy products (own brand)
  - + all Kerala Ayurveda stocked products (brand: "Kerala Ayurveda")
Images point to img/kerala-ayurveda/<handle>.<ext> (from kerala-ayurveda-images.zip).
Run from the site root:  python3 scripts/generate-catalog.py
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'ka-catalog.json')
OUT = os.path.join(ROOT, 'js', 'products.js')
IMGDIR = os.path.join(ROOT, 'img', 'kerala-ayurveda')

IGO_PRODUCTS = [
 {"id":"triphala-churnam","name":"Triphala Churnam","cat":"churnam","catLabel":"Churnam & Powders","brand":"IGO Pharmacy","price":320,"mrp":450,"img":"img/igo-organic-pharmacy-brand.jpg","brief":"Classical three-fruit powder blend, supports digestive wellness.","benefits":["Digestive support","Natural detox","Gentle laxative"],"dosage":"1-2 tsp twice daily with warm water","pack":"100g"},
 {"id":"ashwagandha-powder","name":"Ashwagandha Powder","cat":"churnam","catLabel":"Churnam & Powders","brand":"IGO Pharmacy","price":280,"mrp":399,"img":"img/igo-organic-pharmacy-brand.jpg","brief":"Root powder from Withania somnifera, supports stress relief and vitality.","benefits":["Stress relief","Energy support","Adaptogenic"],"dosage":"1-2 grams twice daily with warm milk","pack":"100g"},
 {"id":"amla-powder","name":"Amla (Nellikai) Powder","cat":"churnam","catLabel":"Churnam & Powders","brand":"IGO Pharmacy","price":240,"mrp":350,"img":"img/igo-organic-pharmacy-brand.jpg","brief":"Indian gooseberry powder, rich in Vitamin C for immunity.","benefits":["Immunity boost","Hair health","Antioxidant"],"dosage":"1 tsp twice daily with honey","pack":"100g"},
 {"id":"neem-powder","name":"Neem Powder","cat":"churnam","catLabel":"Churnam & Powders","brand":"IGO Pharmacy","price":200,"mrp":300,"img":"img/igo-organic-pharmacy-brand.jpg","brief":"Traditional leaf powder for skin and blood purification.","benefits":["Blood purifier","Skin health","Antibacterial"],"dosage":"1/2-1 tsp once daily","pack":"100g"},
 {"id":"turmeric-powder","name":"Turmeric (Manjal) Powder","cat":"churnam","catLabel":"Churnam & Powders","brand":"IGO Pharmacy","price":180,"mrp":280,"img":"img/igo-organic-pharmacy-brand.jpg","brief":"Golden spice with curcumin for inflammation support and wellness.","benefits":["Anti-inflammatory","Joint support","Antioxidant"],"dosage":"1/2-1 tsp twice daily with warm milk","pack":"100g"},
 {"id":"brahmi-powder","name":"Brahmi Powder","cat":"churnam","catLabel":"Churnam & Powders","brand":"IGO Pharmacy","price":260,"mrp":380,"img":"img/igo-organic-pharmacy-brand.jpg","brief":"Brain-supporting herb for focus and mental clarity.","benefits":["Mental clarity","Memory support","Stress relief"],"dosage":"1 tsp once or twice daily","pack":"100g"},
 {"id":"nannari-kashayam","name":"Nannari Kashayam","cat":"kashayam","catLabel":"Kashayam & Rasayanam","brand":"IGO Pharmacy","price":420,"mrp":599,"img":"img/igo-organic-pharmacy-brand.jpg","brief":"Traditional Tamil Nadu decoction from Indian sarsaparilla root.","benefits":["Cooling","Summer wellness","Blood purifier"],"dosage":"30 ml twice daily before meals","pack":"200ml"},
 {"id":"chyawanprash-igo","name":"Chyawanprash","cat":"kashayam","catLabel":"Kashayam & Rasayanam","brand":"IGO Pharmacy","price":480,"mrp":680,"img":"img/igo-organic-pharmacy-brand.jpg","brief":"Classic amla-based rasayana jam for daily immunity.","benefits":["Immunity","Energy","Daily wellness"],"dosage":"1 tsp daily, morning","pack":"500g"},
]

CAT_LABELS = {
  'churnam': 'Churnam & Powders',
  'kashayam': 'Kashayam & Rasayanam',
  'thailam': 'Thailam & Oils',
  'tablets': 'Tablets & Capsules',
  'personal': 'Personal & Skin Care',
}

def map_cat(title, ptype):
    t = title.lower()
    ty = (ptype or '').lower()
    if any(k in t for k in ['face cream','face pack','face oil','kit','combo','pack ','ritual set','soap','shampoo']) or 'skin care' in ty and ('cream' in t or 'pack' in t):
        return 'personal'
    if any(k in t for k in ['tablet','capsule','gulika','pills','vatakam','guggulu','pearls']):
        return 'tablets'
    if any(k in t for k in ['thailam','keram',' kuzhambu','kuzhambu ','castor oil',' oil','oil-','avarthy','avarti','balm','cream','lepam','ointment']):
        return 'thailam'
    if any(k in t for k in ['choornam','churnam','granules','powder']):
        return 'churnam'
    if any(k in t for k in ['kwath','arishta','asava','lehyam','leyham','rasayanam','ghritham','gritham','syrup','drink','gulam','kashayam','prash']):
        return 'kashayam'
    # fallback by product type
    if ty in ('skin care','hair care','oral care'):
        return 'personal'
    return 'kashayam'

def pack_from_title(title):
    m = re.search(r'\(([^)]+)\)', title)
    return m.group(1) if m else None

def clean_name(title):
    # strip long marketing suffixes after | or "for ..." keep concise
    name = title.split('|')[0].strip()
    if len(name) > 70:
        name = re.split(r'\bfor\b', name)[0].strip(' -–,')
    return name

def main():
    if not os.path.exists(SRC):
        sys.exit('ka-catalog.json not found in site root — move it from Downloads first.')
    data = json.load(open(SRC, encoding='utf-8'))
    have_imgs = set(os.listdir(IMGDIR)) if os.path.isdir(IMGDIR) else set()
    out, seen = [], set()
    for p in data:
        h = re.sub(r'[^a-z0-9\-_]', '', p['handle'])
        if h in seen: continue
        seen.add(h)
        price = float(p['price']) if p.get('price') else None
        mrp = float(p['mrp']) if p.get('mrp') else None
        if not price: continue
        if not mrp or mrp <= price: mrp = None
        fname = h + '.' + p.get('ext', 'jpg')
        img = 'img/kerala-ayurveda/' + fname if (not have_imgs or fname in have_imgs) else 'img/igo-organic-pharmacy-brand.jpg'
        cat = map_cat(p['title'], p.get('type'))
        brief = (p.get('desc') or '')[:180].rsplit(' ', 1)[0]
        item = {
            'id': 'ka-' + h,
            'name': clean_name(p['title']),
            'cat': cat,
            'catLabel': CAT_LABELS[cat],
            'brand': 'Kerala Ayurveda',
            'concern': p.get('type') or None,
            'price': int(price) if price == int(price) else price,
            'mrp': (int(mrp) if mrp == int(mrp) else mrp) if mrp else None,
            'img': img,
            'brief': brief,
            'desc': p.get('desc') or '',
            'pack': pack_from_title(p['title']),
            'gallery': ['https://cdn.shopify.com' + g + '?width=600' for g in (p.get('gallery') or [])[1:4]],
            'available': bool(p.get('available', True)),
            'hot': 1 if any(str(t).startswith('score:') for t in (p.get('tags') or [])) else 0,
            'off': int(round((1 - price / mrp) * 100)) if mrp else 0,
        }
        out.append(item)

    for pr in IGO_PRODUCTS:
        pr['hot'] = 0
        pr['off'] = int(round((1 - pr['price'] / pr['mrp']) * 100)) if pr.get('mrp') else 0
        pr['available'] = True
    products = IGO_PRODUCTS + out
    lines = []
    for pr in products:
        lines.append(' ' + json.dumps(pr, ensure_ascii=False))
    js = ('// IGO Pharmacy — product catalog (auto-generated by scripts/generate-catalog.py)\n'
          '// IGO Pharmacy own-brand products + Kerala Ayurveda stocked range ('
          + str(len(out)) + ' products crawled ' + '2026-07-17' + ').\n'
          'window.IGO_CAT_LABELS = ' + json.dumps(CAT_LABELS) + ';\n'
          'window.IGO_PRODUCTS = [\n' + ',\n'.join(lines) + '\n];\n')
    open(OUT, 'w', encoding='utf-8').write(js)
    print('Wrote', OUT, 'with', len(products), 'products (', len(out), 'Kerala Ayurveda )')
    from collections import Counter
    print(Counter([p['cat'] for p in products]))

if __name__ == '__main__':
    main()
