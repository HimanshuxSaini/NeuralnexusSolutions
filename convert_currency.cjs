const fs = require('fs');
const path = './src/data/siteData.ts';
let data = fs.readFileSync(path, 'utf8');

data = data.replace(/\$([0-9,]+)(k?)/gi, (match, p1, p2) => {
  let num = parseInt(p1.replace(/,/g, ''));
  if (p2 && p2.toLowerCase() === 'k') num *= 1000;
  
  let inrValue = num * 86; // Approx exchange rate
  
  // Round to nearest 1000 for cleaner numbers
  if (inrValue > 10000) {
      inrValue = Math.round(inrValue / 1000) * 1000;
  }
  
  let formatted = inrValue.toLocaleString('en-IN');
  return '₹' + formatted;
});

fs.writeFileSync(path, data);
console.log('Currency converted in siteData.ts');
