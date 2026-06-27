const fs = require('fs');

let content = fs.readFileSync('app/components/AppPane.js', 'utf8');

if (!content.includes("from 'lucide-react'")) {
    content = "import { Github, ExternalLink, Globe, BookOpen } from 'lucide-react';\n" + content;
} else if (!content.includes('ExternalLink')) {
    content = content.replace('import {', 'import { Github, ExternalLink, Globe, BookOpen,');
}

function buttonHtml(link, text, icon = '<Github size={14} />') {
    return `<a href="${link}" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', color: '#fff', textDecoration: 'none', fontSize: '13px', marginTop: '12px', width: 'fit-content', transition: 'background 0.2s' }}>${icon} ${text}</a>`;
}

// 1. Projects updates
content = content.replace(
    /<p>Hybrid passive \+ active network scanner.*? exploitable vectors\.<\/p>[\s\S]*?<a className="contact-link" href="(.*?)"[^>]*>.*?<\/a>/g,
    '<p>Hybrid network scanner for TCP scanning, reconnaissance, and vulnerability analysis with a Flask dashboard.</p>\n              ' + buttonHtml('$1', 'View on GitHub')
);

content = content.replace(
    /<p>Built during the Google Agentic AI Hackathon.*? Firebase integration\.<\/p>[\s\S]*?<a className="contact-link" href="(.*?)"[^>]*>.*?<\/a>/g,
    '<p>Agentic AI teaching assistant for lesson planning and visual aids. Built at the Google Agentic AI Hackathon.</p>\n              ' + buttonHtml('$1', 'View on GitHub')
);

content = content.replace(
    /<p>Interactive dashboard processing live API data.*? and React frontend\.<\/p>[\s\S]*?<a className="contact-link" href="(.*?)"[^>]*>.*?<\/a>/g,
    '<p>Real-time market trend analysis and anomaly detection dashboard using live API data.</p>\n              ' + buttonHtml('$1', 'View on GitHub')
);

content = content.replace(
    /<p>Ongoing research project on interpretable financial risk prediction models.*? financial use-cases\.<\/p>/g,
    '<p>Ongoing research on interpretable financial risk prediction models to make AI decisions auditable.</p>'
);

content = content.replace(
    /<p>Built purely for learning purposes in a sandboxed, isolated environment.*? Code not disclosed\.<\/p>[\s\S]*?<a className="contact-link" href="(.*?)"[^>]*>.*?<\/a>/g,
    '<p>Sandboxed security research project to deeply understand keylogging and email-based attack vectors.</p>\n              ' + buttonHtml('$1', 'View Repository', '<ExternalLink size={14} />')
);

content = content.replace(
    /<p>Full stack digital banking system with a simulation of core banking processes.*? role-based access\.<\/p>[\s\S]*?<a className="contact-link" href="(.*?)"[^>]*>.*?<\/a>/g,
    '<p>Full stack digital banking simulation covering core processes like funds transfer, loans, and role-based access.</p>\n              ' + buttonHtml('$1', 'View on GitHub')
);

content = content.replace(
    /<p>An automated, self-improving security pipeline designed for banking institutions.*? dynamic malware mutations\.<\/p>[\s\S]*?<a className="contact-link" href="(.*?)"[^>]*>.*?<\/a>/g,
    '<p>Automated security pipeline for detecting financial mobile malware using topological machine learning.</p>\n              ' + buttonHtml('$1', 'View on GitHub')
);

content = content.replace(
    /<p>A full working web crawler that takes a website URL as input.*? found on each page\.<\/p>[\s\S]*?<a className="contact-link" href="(.*?)"[^>]*>.*?<\/a>/g,
    '<p>Full web crawler that scrapes pages for titles, links, images, and headings to generate structural reports.</p>\n              ' + buttonHtml('$1', 'View on GitHub')
);

content = content.replace(
    /<p>A FastAPI-based e-commerce system with integrated wallet functionality.*? transaction management\.<\/p>[\s\S]*?<a className="contact-link" href="(.*?)"[^>]*>.*?<\/a>/g,
    '<p>FastAPI e-commerce system featuring integrated wallets, JWT authentication, and transaction management.</p>\n              ' + buttonHtml('$1', 'View on GitHub')
);

content = content.replace(
    /<p>Fast, lightweight MERN stack project designed to be built in 1 hour.*? titles for the notes\.<\/p>[\s\S]*?<a className="contact-link" href="(.*?)"[^>]*>.*?<\/a>/g,
    '<p>Real-time collaborative notes app using the MERN stack with AI-generated summaries and titles.</p>\n              ' + buttonHtml('$1', 'View on GitHub')
);

content = content.replace(
    /<p>A powerful command-line tool for downloading videos.*? YouTube audio-only mode\.<\/p>[\s\S]*?<a className="contact-link" href="(.*?)"[^>]*>.*?<\/a>/g,
    '<p>Powerful CLI tool built with yt-dlp to download videos, audio, PDFs, and images from direct URLs.</p>\n              ' + buttonHtml('$1', 'View on GitHub')
);

content = content.replace(
    /<p>A TCP port scanner built using Python that leverages python-nmap.*? filtered or closed ports\.<\/p>[\s\S]*?<a className="contact-link" href="(.*?)"[^>]*>.*?<\/a>/g,
    '<p>TCP port scanner built with python-nmap to identify running services and scan target hosts.</p>\n              ' + buttonHtml('$1', 'View on GitHub')
);

// 2. Leadership updates
content = content.replace(
    /<p>Built <strong>Sahayak<\/strong>, an AI teaching assistant for low-resource classrooms\. Out of ~5,000 teams, reached the finals by demonstrating strong end-to-end agentic workflows\.<\/p>/g,
    '<p>Built <strong>Sahayak</strong>, an AI teaching assistant for low-resource classrooms. Reached the finals out of ~5,000 teams.</p>\n            ' + buttonHtml('https://github.com/ak-kk-21/VAANGuard-Devs-Sahayak', 'View Project')
);

content = content.replace(
    /<p>Full-stack network scanning suite with Flask dashboard \+ vulnerability reports\. Currently used by my university's cybersecurity club for internal network mapping\.<\/p>/g,
    '<p>Full-stack network scanning suite with Flask dashboard. Used by my university\\'s cybersecurity club.</p>\n            ' + buttonHtml('https://github.com/Anushree401/nScanner', 'View Project')
);

content = content.replace(
    /<p>Conducted deep vulnerability analysis on real client datasets\. Wrote 3 internal tooling scripts that automated threat triage, which are still in production\.<\/p>/g,
    '<p>Conducted vulnerability analysis on client datasets. Wrote 3 production tooling scripts automating threat triage.</p>'
);

// 3. Publications
content = content.replace(
    /<p>Contributed to a research paper titled "Food Allergens in India: Evidence, Regulation, and the State of Current Knowledge", published on ResearchGate\.<\/p>[\s\S]*?<a className="contact-link" href="(.*?)"[^>]*>.*?<\/a>/g,
    '<p>Contributed to a research paper on food allergens in India, covering evidence, regulation, and current knowledge.</p>\n              ' + buttonHtml('$1', 'View on ResearchGate', '<BookOpen size={14} />')
);

if (!content.includes('.app-card a:hover')) {
    content = content.replace('</style>', '.app-card a:hover { background: rgba(255,255,255,0.2) !important; }\n            </style>');
}

fs.writeFileSync('app/components/AppPane.js', content, 'utf8');
console.log('Transform complete.');
