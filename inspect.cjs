const fs = require('fs');
let c = fs.readFileSync('src/data/products.ts', 'utf8');
const start = c.indexOf('id: "skin-012"');
const afterStart = c.indexOf('id: "gut-001"');
console.log('skin-012 block:');
console.log(c.substring(start - 4, afterStart));
