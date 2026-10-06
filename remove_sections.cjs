const fs = require('fs');
const path = require('path');

const dir = './src/components/home';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(f => {
  const filepath = path.join(dir, f);
  let content = fs.readFileSync(filepath, 'utf8');
  
  const original = content;
  content = content.replace(/[ \t]*<div[^>]*>\s*<span>Section 0\d<\/span>[\s\S]*?<\/div>\n/g, '');
  
  if (original !== content) {
    fs.writeFileSync(filepath, content);
    console.log(`Updated ${f}`);
  }
});
