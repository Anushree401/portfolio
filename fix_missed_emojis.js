const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'components');

function replaceInFile(filename, replacements, newImports) {
  const filepath = path.join(dir, filename);
  if (!fs.existsSync(filepath)) return;
  
  let content = fs.readFileSync(filepath, 'utf8');
  
  if (newImports && !content.includes(newImports.split('{ ')[1].split(',')[0])) {
    content = content.replace(/(import .*?['"];\n)/, `$1${newImports}\n`);
  }
  
  for (const [search, replace] of replacements) {
    content = content.split(search).join(replace);
  }
  
  fs.writeFileSync(filepath, content);
}

replaceInFile('homepage.js', [
  ['💻', '<Terminal size={14} />'],
  ['⏱', '<Timer size={14} />'],
  ['▸', '<ChevronRight size={14} />']
], `import { Timer, ChevronRight } from 'lucide-react';`);

replaceInFile('widgets/ClockWidget.jsx', [
  ['🕐', '<Clock size={14} />']
], ``); // Clock was already imported in the previous script

replaceInFile('widgets/HighlightWidget.jsx', [
  ['⭐', '<Star size={14} />']
], `import { Star } from 'lucide-react';`);

console.log("Fixed the missed emojis without quotes!");
