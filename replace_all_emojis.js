const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'app', 'components');

// 1. homepage.js
let hpPath = path.join(componentsDir, 'homepage.js');
let hpContent = fs.readFileSync(hpPath, 'utf8');

const hpImports = `import { User, Settings, Trash2, Folder, Briefcase, Zap, Trophy, Target, FileText, GraduationCap, Radio, Terminal, Circle } from 'lucide-react';\n`;
if (!hpContent.includes('import { User')) {
  hpContent = hpContent.replace("import Image from 'next/image';", "import Image from 'next/image';\n" + hpImports);
}

hpContent = hpContent.replace("icon: '👤'", "icon: <User size={16} />");
hpContent = hpContent.replace("icon: '⚙'", "icon: <Settings size={16} />");
hpContent = hpContent.replace("icon: '🗑'", "icon: <Trash2 size={16} />");
hpContent = hpContent.replace("icon: '📂'", "icon: <Folder size={16} />");
hpContent = hpContent.replace("icon: '💼'", "icon: <Briefcase size={16} />");
hpContent = hpContent.replace("icon: '⚡'", "icon: <Zap size={16} />");
hpContent = hpContent.replace("icon: '🏆'", "icon: <Trophy size={16} />");
hpContent = hpContent.replace("icon: '🎯'", "icon: <Target size={16} />");
hpContent = hpContent.replace("icon: '📄'", "icon: <FileText size={16} />");
hpContent = hpContent.replace("icon: '🎓'", "icon: <GraduationCap size={16} />");
hpContent = hpContent.replace("icon: '📡'", "icon: <Radio size={16} />");
hpContent = hpContent.replace("icon: '⌨️'", "icon: <Terminal size={16} />");

fs.writeFileSync(hpPath, hpContent);

// 2. SettingsApp.js
let saPath = path.join(componentsDir, 'SettingsApp.js');
let saContent = fs.readFileSync(saPath, 'utf8');

const saImports = `import { Palette, Globe, Bell, Accessibility, Info, Volume2 } from 'lucide-react';\n`;
if (!saContent.includes('import { Palette')) {
  saContent = saContent.replace("import { useState } from 'react';", "import { useState } from 'react';\n" + saImports);
}

saContent = saContent.replace('icon="🎨"', 'icon={<Palette size={16} />}');
saContent = saContent.replace('icon="🌐"', 'icon={<Globe size={16} />}');
saContent = saContent.replace('icon="🔔"', 'icon={<Bell size={16} />}');
saContent = saContent.replace('icon="♿"', 'icon={<Accessibility size={16} />}');
saContent = saContent.replace('icon="ℹ️"', 'icon={<Info size={16} />}');
saContent = saContent.replace('🔊', '<Volume2 size={16} style={{marginRight: 8}}/>');

fs.writeFileSync(saPath, saContent);

// 3. AboutWidget.jsx
let awPath = path.join(componentsDir, 'widgets', 'AboutWidget.jsx');
let awContent = fs.readFileSync(awPath, 'utf8');

const awImports = `import { User, Circle, GraduationCap, BarChart, ChevronRight, Terminal } from 'lucide-react';\n`;
if (!awContent.includes('import { User')) {
  awContent = awContent.replace("const RESUME_TRACKS = [", awImports + "\nconst RESUME_TRACKS = [");
}

awContent = awContent.replace('<span className="widget-icon">👤</span>', '<span className="widget-icon" style={{display: "flex", alignItems: "center"}}><User size={14} /></span>');
awContent = awContent.replace('<span className="widget-status">●</span>', '<span className="widget-status" style={{display: "flex", alignItems: "center", color: "#50fa7b"}}><Circle size={10} fill="currentColor" strokeWidth={0} /></span>');
awContent = awContent.replace('<span>🎓</span>', '<span style={{display: "flex", alignItems: "center"}}><GraduationCap size={14} /></span>');
awContent = awContent.replace('<span>📊</span>', '<span style={{display: "flex", alignItems: "center"}}><BarChart size={14} /></span>');
awContent = awContent.replace(/<span className="link-arrow">▸<\/span>/g, '<span className="link-arrow" style={{display: "inline-flex", alignItems: "center", marginRight: 4}}><ChevronRight size={14} /></span>');
awContent = awContent.replace('<span className="link-arrow">$</span>', '<span className="link-arrow" style={{display: "inline-flex", alignItems: "center", marginRight: 4}}><Terminal size={12} /></span>');

fs.writeFileSync(awPath, awContent);

// 4. TrashApp.js
let taPath = path.join(componentsDir, 'TrashApp.js');
let taContent = fs.readFileSync(taPath, 'utf8');

const taImports = `import { FileText, RefreshCw, Trash2, Folder, Archive } from 'lucide-react';\n`;
if (!taContent.includes('import { FileText')) {
  taContent = taContent.replace("export default function TrashApp({ trash", taImports + "export default function TrashApp({ trash");
}

taContent = taContent.replace("🗑️", ""); // It's in the title/empty state usually
taContent = taContent.replace("♻️ Restore", "<RefreshCw size={14} style={{marginRight: 6}}/> Restore");
taContent = taContent.replace("✕ Delete", "<Trash2 size={14} style={{marginRight: 6}}/> Delete");
taContent = taContent.replace("🗑 Empty Trash", "<Trash2 size={14} style={{marginRight: 6}}/> Empty Trash");

// Replace {t.icon} if it's emoji, actually TrashApp uses t.icon from the app meta or string.
// If it's a string emoji, it will render fine. But we might need to handle it.

fs.writeFileSync(taPath, taContent);

// 5. HighlightWidget.jsx
let hwPath = path.join(componentsDir, 'widgets', 'HighlightWidget.jsx');
if (fs.existsSync(hwPath)) {
  let hwContent = fs.readFileSync(hwPath, 'utf8');
  const hwImports = `import { Zap } from 'lucide-react';\n`;
  if (!hwContent.includes('import { Zap')) {
    hwContent = hwContent.replace("export default function HighlightWidget() {", hwImports + "export default function HighlightWidget() {");
    hwContent = hwContent.replace('<span className="widget-icon">⚡</span>', '<span className="widget-icon" style={{display: "flex", alignItems: "center"}}><Zap size={14} /></span>');
    fs.writeFileSync(hwPath, hwContent);
  }
}

// 6. ClockWidget.jsx
let cwPath = path.join(componentsDir, 'widgets', 'ClockWidget.jsx');
if (fs.existsSync(cwPath)) {
  let cwContent = fs.readFileSync(cwPath, 'utf8');
  const cwImports = `import { Clock } from 'lucide-react';\n`;
  if (!cwContent.includes('import { Clock')) {
    cwContent = cwContent.replace("import { useState, useEffect } from 'react';", "import { useState, useEffect } from 'react';\n" + cwImports);
    cwContent = cwContent.replace('<span className="widget-icon">🕒</span>', '<span className="widget-icon" style={{display: "flex", alignItems: "center"}}><Clock size={14} /></span>');
    fs.writeFileSync(cwPath, cwContent);
  }
}

console.log("Emojis replaced!");
