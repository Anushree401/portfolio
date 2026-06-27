const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app', 'components', 'AboutApp.js');
let content = fs.readFileSync(filePath, 'utf8');

// Add imports
content = content.replace(
  "import { useState } from 'react';",
  "import { useState } from 'react';\nimport { Trophy, Rocket, Microscope, Shield, TriangleAlert, GraduationCap, Bot, Search, LineChart, Brain, Waves, Lock, MapPin, Circle, Download, Mail, Github, Linkedin, Dna, Briefcase, Zap, Target } from 'lucide-react';"
);

// TIMELINE
content = content.replace("emoji: '🏆'", "icon: <Trophy size={16} />");
content = content.replace("emoji: '🚀'", "icon: <Rocket size={16} />");
content = content.replace("emoji: '🔬'", "icon: <Microscope size={16} />");
content = content.replace("emoji: '🛡️'", "icon: <Shield size={16} />");
content = content.replace("emoji: '⚠️'", "icon: <TriangleAlert size={16} />");
content = content.replace("emoji: '🎓'", "icon: <GraduationCap size={16} />");
content = content.replace("<div className=\"tl-dot\">{t.emoji}</div>", "<div className=\"tl-dot\">{t.icon}</div>");

// PROJECTS
content = content.replace("emoji: '🤖'", "icon: <Bot size={18} />");
content = content.replace("emoji: '🔍'", "icon: <Search size={18} />");
content = content.replace("emoji: '📈'", "icon: <LineChart size={18} />");
content = content.replace("emoji: '🧠'", "icon: <Brain size={18} />");
content = content.replace("emoji: '🌊'", "icon: <Waves size={18} />");
content = content.replace("emoji: '🔐'", "icon: <Lock size={18} />");
content = content.replace("<span className=\"pc-emoji\">{p.emoji}</span>", "<span className=\"pc-emoji\">{p.icon}</span>");

// Pills
content = content.replace("<span className=\"pill\">📍 Mumbai, India</span>", "<span className=\"pill\"><MapPin size={14} /> Mumbai, India</span>");
content = content.replace("<span className=\"pill\">🎓 NMIMS · IIT Madras</span>", "<span className=\"pill\"><GraduationCap size={14} /> NMIMS · IIT Madras</span>");
content = content.replace("<span className=\"pill\">🟢 Open to opportunities</span>", "<span className=\"pill\"><Circle size={10} fill=\"currentColor\" strokeWidth={0} /> Open to opportunities</span>");

// Buttons
content = content.replace("📥 Download resume", "<Download size={14} /> Download resume");
content = content.replace("✉ Email me", "<Mail size={14} /> Email me");
content = content.replace("⌨ GitHub", "<Github size={14} /> GitHub");
content = content.replace("⚇ LinkedIn", "<Linkedin size={14} /> LinkedIn");

// Tabs
content = content.replace(
  "{t === 'story' && '🧬'} {t === 'experience' && '💼'} {t === 'projects' && '🚀'}\n            {t === 'skills' && '⚡'} {t === 'looking-for' && '🎯'}",
  "{t === 'story' && <Dna size={16} />} {t === 'experience' && <Briefcase size={16} />} {t === 'projects' && <Rocket size={16} />}\n            {t === 'skills' && <Zap size={16} />} {t === 'looking-for' && <Target size={16} />}"
);

fs.writeFileSync(filePath, content);
