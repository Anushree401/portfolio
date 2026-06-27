const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'components');

const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F900}-\u{1F9FF}]/gu;

function checkDir(d) {
  const files = fs.readdirSync(d);
  for (const file of files) {
    const full = path.join(d, file);
    if (fs.statSync(full).isDirectory()) {
      checkDir(full);
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      const content = fs.readFileSync(full, 'utf8');
      let m;
      while ((m = emojiRegex.exec(content)) !== null) {
        // Find line number
        const lines = content.substring(0, m.index).split('\n');
        console.log(`${file}:${lines.length} -> ${m[0]}`);
      }
    }
  }
}

checkDir(dir);
