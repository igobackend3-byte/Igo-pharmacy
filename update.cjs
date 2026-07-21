const fs = require('fs');
let content = fs.readFileSync('src/data/products.ts', 'utf8');

const newImages = {
    'ayur-001': '/images/new-chyawanprash.png',
    'hair-003': '/images/new-amla-oil.png',
    'hair-004': '/images/new-neem-oil.png',
    'skin-001': '/images/new-alovera-gel.png',
    'skin-002': '/images/new-kumkumadi-tailam.png',
    'skin-004': '/images/new-rosewater.png'
};

content = content.replace(/\s*isBestSeller:\s*true,/g, '');

for (const [pid, img] of Object.entries(newImages)) {
    const imgRegex = new RegExp('(id:\\s*"' + pid + '"[\\s\\S]*?image:\\s*)"[^"]+"', 'm');
    content = content.replace(imgRegex, `$1"${img}"`);
    
    const stockRegex = new RegExp('(id:\\s*"' + pid + '"[\\s\\S]*?stock:\\s*\\d+,)', 'm');
    content = content.replace(stockRegex, `$1\n    isBestSeller: true,`);
}

fs.writeFileSync('src/data/products.ts', content, 'utf8');
console.log('Updated products.ts');
