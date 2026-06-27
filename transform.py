import sys
import re

with open('app/components/AppPane.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Make sure we have lucide icons imported at the top of AppPane.js if they aren't already.
if "from 'lucide-react'" not in content:
    content = "import { Github, ExternalLink, Globe, BookOpen } from 'lucide-react';\n" + content
else:
    # We might need to add Github, ExternalLink etc to the existing import
    if 'ExternalLink' not in content:
        content = content.replace("import {", "import { Github, ExternalLink, Globe, BookOpen,")

def button_html(link, text, icon="<Github size={14} />"):
    return f"""<a href="{link}" target="_blank" rel="noreferrer" style={{{{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', color: '#fff', textDecoration: 'none', fontSize: '13px', marginTop: '12px', width: 'fit-content', transition: 'background 0.2s' }}}}>
                {icon} {text}
              </a>"""

# Define the replacements for projects to cut down text and add buttons
replacements = [
    (
        r'<p>Hybrid passive \+ active network scanner.*? exploitable vectors\.</p>.*?<a className="contact-link" href="(.*?)"[^>]*>.*?</a>',
        r'<p>Hybrid network scanner for TCP scanning, reconnaissance, and vulnerability analysis with a Flask dashboard.</p>\n              ' + button_html(r'\1', 'View on GitHub')
    ),
    (
        r'<p>Built during the Google Agentic AI Hackathon.*? Firebase integration\.</p>.*?<a className="contact-link" href="(.*?)"[^>]*>.*?</a>',
        r'<p>Agentic AI teaching assistant for lesson planning and visual aids. Built at the Google Agentic AI Hackathon.</p>\n              ' + button_html(r'\1', 'View on GitHub')
    ),
    (
        r'<p>Interactive dashboard processing live API data.*? and React frontend\.</p>.*?<a className="contact-link" href="(.*?)"[^>]*>.*?</a>',
        r'<p>Real-time market trend analysis and anomaly detection dashboard using live API data.</p>\n              ' + button_html(r'\1', 'View on GitHub')
    ),
    (
        r'<p>Ongoing research project on interpretable financial risk prediction models.*? financial use-cases\.</p>',
        r'<p>Ongoing research on interpretable financial risk prediction models to make AI decisions auditable.</p>'
    ),
    (
        r'<p>Built purely for learning purposes in a sandboxed, isolated environment.*? Code not disclosed\.</p>.*?<a className="contact-link" href="(.*?)"[^>]*>.*?</a>',
        r'<p>Sandboxed security research project to deeply understand keylogging and email-based attack vectors.</p>\n              ' + button_html(r'\1', 'View Repository')
    ),
    (
        r'<p>Full stack digital banking system with a simulation of core banking processes.*? role-based access\.</p>.*?<a className="contact-link" href="(.*?)"[^>]*>.*?</a>',
        r'<p>Full stack digital banking simulation covering core processes like funds transfer, loans, and role-based access.</p>\n              ' + button_html(r'\1', 'View on GitHub')
    ),
    (
        r'<p>An automated, self-improving security pipeline designed for banking institutions.*? dynamic malware mutations\.</p>.*?<a className="contact-link" href="(.*?)"[^>]*>.*?</a>',
        r'<p>Automated security pipeline for detecting financial mobile malware using topological machine learning.</p>\n              ' + button_html(r'\1', 'View on GitHub')
    ),
    (
        r'<p>A full working web crawler that takes a website URL as input.*? found on each page\.</p>.*?<a className="contact-link" href="(.*?)"[^>]*>.*?</a>',
        r'<p>Full web crawler that scrapes pages for titles, links, images, and headings to generate structural reports.</p>\n              ' + button_html(r'\1', 'View on GitHub')
    ),
    (
        r'<p>A FastAPI-based e-commerce system with integrated wallet functionality.*? transaction management\.</p>.*?<a className="contact-link" href="(.*?)"[^>]*>.*?</a>',
        r'<p>FastAPI e-commerce system featuring integrated wallets, JWT authentication, and transaction management.</p>\n              ' + button_html(r'\1', 'View on GitHub')
    ),
    (
        r'<p>Fast, lightweight MERN stack project designed to be built in 1 hour.*? titles for the notes\.</p>.*?<a className="contact-link" href="(.*?)"[^>]*>.*?</a>',
        r'<p>Real-time collaborative notes app using the MERN stack with AI-generated summaries and titles.</p>\n              ' + button_html(r'\1', 'View on GitHub')
    ),
    (
        r'<p>A powerful command-line tool for downloading videos.*? YouTube audio-only mode\.</p>.*?<a className="contact-link" href="(.*?)"[^>]*>.*?</a>',
        r'<p>Powerful CLI tool built with yt-dlp to download videos, audio, PDFs, and images from direct URLs.</p>\n              ' + button_html(r'\1', 'View on GitHub')
    ),
    (
        r'<p>A TCP port scanner built using Python that leverages python-nmap.*? filtered or closed ports\.</p>.*?<a className="contact-link" href="(.*?)"[^>]*>.*?</a>',
        r'<p>TCP port scanner built with python-nmap to identify running services and scan target hosts.</p>\n              ' + button_html(r'\1', 'View on GitHub')
    ),
]

for pat, repl in replacements:
    content = re.sub(pat, repl, content, flags=re.DOTALL)


# Update leadership section
replacements_leadership = [
    (
        r'<p>Built <strong>Sahayak</strong>, an AI teaching assistant for low-resource classrooms\. Out of ~5,000 teams, reached the finals by demonstrating strong end-to-end agentic workflows\.</p>',
        r'<p>Built <strong>Sahayak</strong>, an AI teaching assistant for low-resource classrooms. Reached the finals out of ~5,000 teams.</p>\n            ' + button_html('https://github.com/ak-kk-21/VAANGuard-Devs-Sahayak', 'View Project')
    ),
    (
        r'<p>Full-stack network scanning suite with Flask dashboard \+ vulnerability reports\. Currently used by my university\'s cybersecurity club for internal network mapping\.</p>',
        r'<p>Full-stack network scanning suite with Flask dashboard. Used by my university\\'s cybersecurity club.</p>\n            ' + button_html('https://github.com/Anushree401/nScanner', 'View Project')
    ),
    (
        r'<p>Conducted deep vulnerability analysis on real client datasets\. Wrote 3 internal tooling scripts that automated threat triage, which are still in production\.</p>',
        r'<p>Conducted vulnerability analysis on client datasets. Wrote 3 production tooling scripts automating threat triage.</p>'
    ),
]

for pat, repl in replacements_leadership:
    content = re.sub(pat, repl, content, flags=re.DOTALL)

# Update Publications section
content = re.sub(
    r'<p>Contributed to a research paper titled "Food Allergens in India: Evidence, Regulation, and the State of Current Knowledge", published on ResearchGate\.</p>.*?<a className="contact-link" href="(.*?)"[^>]*>.*?</a>',
    r'<p>Contributed to a research paper on food allergens in India, covering evidence, regulation, and current knowledge.</p>\n              ' + button_html(r'\1', 'View on ResearchGate', '<BookOpen size={14} />'),
    content, flags=re.DOTALL
)


# Add CSS hover for the buttons
if '.app-card a:hover' not in content:
    content = content.replace("</style>", ".app-card a:hover { background: rgba(255,255,255,0.2) !important; }\n            </style>")

with open('app/components/AppPane.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Transform applied successfully.")
