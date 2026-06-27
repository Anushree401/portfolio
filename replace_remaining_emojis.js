const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'components');

function replaceInFile(filename, replacements, importsStr) {
  const filepath = path.join(dir, filename);
  if (!fs.existsSync(filepath)) return;
  
  let content = fs.readFileSync(filepath, 'utf8');
  
  // Add imports if needed
  if (importsStr && !content.includes(importsStr.split('{ ')[1].split(',')[0])) {
    content = content.replace(/(import .*?['"];\n)/, `$1${importsStr}\n`);
  }
  
  for (const [search, replace] of replacements) {
    // using split join to replace all occurrences
    content = content.split(search).join(replace);
  }
  
  fs.writeFileSync(filepath, content);
}

replaceInFile('ContextMenu.js', [
  ['💾', '<Save size={14} />'],
  ['⚙', '<Settings size={14} />']
], `import { Save, Settings } from 'lucide-react';`);

replaceInFile('DraggableWindow.js', [
  ["{win.maximized ? '❐' : '□'}", "{win.maximized ? <Minimize2 size={12} /> : <Maximize2 size={12} />}"],
  ["✕", "<X size={12} />"]
], `import { Maximize2, Minimize2, X } from 'lucide-react';`);

replaceInFile('Dock.jsx', [
  ["'👤'", "<User size={24} />"],
  ["'⚙'", "<Settings size={24} />"],
  ["'🗑'", "<Trash2 size={24} />"]
], `import { User, Settings, Trash2 } from 'lucide-react';`);

replaceInFile('widgets/HighlightWidget.jsx', [
  ['🏆', '<Trophy size={14} style={{display:"inline-block"}}/>'],
  ['🚀', '<Rocket size={14} style={{display:"inline-block"}}/>'],
  ['🎓', '<GraduationCap size={14} style={{display:"inline-block"}}/>'],
  ['🔬', '<Microscope size={14} style={{display:"inline-block"}}/>']
], `import { Trophy, Rocket, GraduationCap, Microscope } from 'lucide-react';`);

replaceInFile('widgets/ClockWidget.jsx', [
  ["'☾'", "<Moon size={14} />"],
  ["'☁'", "<Cloud size={14} />"],
  ["'⛅'", "<CloudSun size={14} />"],
  ["'🌧'", "<CloudRain size={14} />"],
  ["'⛈'", "<CloudLightning size={14} />"],
  ["'🕐'", "<Clock size={14} />"]
], `import { Moon, Cloud, CloudSun, CloudRain, CloudLightning, Clock } from 'lucide-react';`);

replaceInFile('Notification.js', [
  ['🔔', '<Bell size={14} />'],
  ['✕', '<X size={14} />']
], `import { Bell, X } from 'lucide-react';`);

replaceInFile('TerminalApp.js', [
  ['📁', '<Folder size={14} style={{display:"inline-block", verticalAlign:"middle"}}/>'],
  ['📄', '<FileText size={14} style={{display:"inline-block", verticalAlign:"middle"}}/>'],
  ['✓', '<Check size={14} style={{display:"inline-block", verticalAlign:"middle"}}/>'],
  ['😉', '<Smile size={14} style={{display:"inline-block", verticalAlign:"middle"}}/>'],
  ['✉', '<Mail size={14} style={{display:"inline-block", verticalAlign:"middle"}}/>'],
  ['🚨', '<AlertTriangle size={14} style={{display:"inline-block", verticalAlign:"middle"}}/>']
], `import { Folder, FileText, Check, Smile, Mail, AlertTriangle } from 'lucide-react';`);

replaceInFile('homepage.js', [
  ["'🐉'", "<Flame size={14} />"],
  ["'💻'", "<Terminal size={14} />"]
], `import { Flame } from 'lucide-react';`);

replaceInFile('SettingsApp.js', [
  ['🖨', '<Printer size={16} />']
], `import { Printer } from 'lucide-react';`);

replaceInFile('TrashApp.js', [
  ['⚠', '<AlertTriangle size={14} />'],
  ['🗑', '<Trash2 size={14} />'],
  ['✕', '<X size={14} />']
], `import { AlertTriangle, X } from 'lucide-react';`);

replaceInFile('AboutApp.js', [
  ['✓', '<Check size={16} />']
], `import { Check } from 'lucide-react';`);

console.log("All emojis replaced!");
