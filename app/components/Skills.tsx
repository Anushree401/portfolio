"use client";

import { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  X, 
  Terminal, 
  Shield, 
  Database, 
  Cpu, 
  Code, 
  Key, 
  Network
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

// Official SimpleIcons Slugs Mapping
const techIconSlugMap: Record<string, string> = {
  // AI & ML
  'scikit-learn': 'scikitlearn',
  'PyTorch': 'pytorch',
  'NumPy': 'numpy',
  'Pandas': 'pandas',
  'Plotly': 'plotly',
  'Google AI Studio': 'google',
  'Gemini API': 'googlegemini',

  // Cybersecurity
  'Kali Linux': 'kalilinux',
  'Burp Suite': 'portswigger',
  'Wireshark': 'wireshark',
  'Metasploit': 'metasploit',
  
  // Dev & DevOps
  'FastAPI': 'fastapi',
  'Flask': 'flask',
  'Express.js': 'express',
  'Firebase Admin SDK': 'firebase',
  'JWT Authentication': 'jsonwebtokens',
  'Google OAuth': 'google',
  'GitHub OAuth': 'github',
  'Git': 'git',
  'GitHub': 'github',
  'Docker': 'docker',
  'Docker Compose': 'docker',
  'Postman': 'postman',
  'Pytest': 'pytest',
  'WSL': 'linux',
  'VirtualBox': 'virtualbox',
  'VMware': 'vmware',

  // Databases
  'PostgreSQL': 'postgresql',
  'MySQL': 'mysql',
  'SQLite': 'sqlite',
  'MongoDB Atlas': 'mongodb',
  'Firestore': 'firebase',
  'Supabase': 'supabase',
  'Redis': 'redis',
  'Celery': 'celery',
};

function FallbackTechIcon({ name }: { name: string }) {
  const lower = name.toLowerCase();
  if (lower.includes('auth') || lower.includes('oauth') || lower.includes('jwt') || lower.includes('hydra') || lower.includes('hashcat') || lower.includes('john')) {
    return <Key size={14} className="text-yellow-400" />;
  }
  if (lower.includes('sql') || lower.includes('db') || lower.includes('rag') || lower.includes('data')) {
    return <Database size={14} className="text-cyan-400" />;
  }
  if (lower.includes('security') || lower.includes('nikto') || lower.includes('exploit') || lower.includes('snort') || lower.includes('dvwa')) {
    return <Shield size={14} className="text-emerald-400" />;
  }
  if (lower.includes('net') || lower.includes('nmap') || lower.includes('tcp') || lower.includes('sublist3r') || lower.includes('wifi')) {
    return <Network size={14} className="text-orange-400" />;
  }
  if (lower.includes('api') || lower.includes('code') || lower.includes('wfuzz') || lower.includes('script') || lower.includes('func')) {
    return <Code size={14} className="text-pink-400" />;
  }
  if (lower.includes('ai') || lower.includes('prompt') || lower.includes('model') || lower.includes('shap') || lower.includes('lime')) {
    return <Cpu size={14} className="text-purple-400" />;
  }
  return <Terminal size={14} className="text-gray-400" />;
}

function TechLogo({ name }: { name: string }) {
  const [imgError, setImgError] = useState(false);
  const slug = techIconSlugMap[name];

  if (slug && !imgError) {
    return (
      <img
        src={`https://cdn.simpleicons.org/${slug}`}
        alt={name}
        className="w-4 h-4 object-contain filter group-hover:scale-110 transition-transform"
        onError={() => setImgError(true)}
      />
    );
  }

  return <FallbackTechIcon name={name} />;
}

// Tech Stack Descriptions & Documentation Map
interface TechDetail {
  desc: string;
  docsUrl: string;
  category: string;
}

const techDetailsMap: Record<string, TechDetail> = {
  // AI & ML
  'scikit-learn': {
    desc: 'Python library for machine learning, providing simple and efficient tools for predictive data analysis, classification, regression, and clustering.',
    docsUrl: 'https://scikit-learn.org/',
    category: 'AI & ML'
  },
  'PyTorch': {
    desc: 'Open-source deep learning framework providing flexible tensor computation with strong GPU acceleration and dynamic computational graphs.',
    docsUrl: 'https://pytorch.org/docs/',
    category: 'AI & ML'
  },
  'NumPy': {
    desc: 'Core scientific computing package in Python providing multi-dimensional arrays, linear algebra routines, and high-performance mathematical operations.',
    docsUrl: 'https://numpy.org/doc/',
    category: 'AI & ML'
  },
  'Pandas': {
    desc: 'Data analysis and manipulation library offering fast, flexible data structures like DataFrames for processing structured tabular datasets.',
    docsUrl: 'https://pandas.pydata.org/docs/',
    category: 'AI & ML'
  },
  'Matplotlib': {
    desc: 'Comprehensive visualization library for creating static, animated, and interactive figures and plots in Python.',
    docsUrl: 'https://matplotlib.org/stable/contents.html',
    category: 'AI & ML'
  },
  'Plotly': {
    desc: 'Interactive graphing library for generating publication-quality web-based data charts and dashboards.',
    docsUrl: 'https://plotly.com/python/',
    category: 'AI & ML'
  },
  'TextBlob': {
    desc: 'Simplified natural language processing (NLP) library for text processing, sentiment analysis, POS tagging, and translation.',
    docsUrl: 'https://textblob.readthedocs.io/',
    category: 'AI & ML'
  },
  'SHAP': {
    desc: 'Explainable AI (XAI) framework based on game-theoretic Shapley values to explain and visualize machine learning model outputs.',
    docsUrl: 'https://shap.readthedocs.io/',
    category: 'AI & ML'
  },
  'LIME': {
    desc: 'Local Interpretable Model-agnostic Explanations toolkit designed to explain individual predictions of machine learning models.',
    docsUrl: 'https://github.com/marcotcr/lime',
    category: 'AI & ML'
  },
  'Google AI Studio': {
    desc: 'Web-based prototyping environment for experimenting with Gemini models, system instructions, prompt tuning, and structured outputs.',
    docsUrl: 'https://aistudio.google.com/',
    category: 'AI & ML'
  },
  'Gemini API': {
    desc: 'Google\'s multimodal generative AI API powering text generation, code synthesis, image analysis, and complex tool execution.',
    docsUrl: 'https://ai.google.dev/docs',
    category: 'AI & ML'
  },
  'Prompt Engineering': {
    desc: 'Technique of crafting structured system prompts, context constraints, and few-shot examples to optimize AI response accuracy.',
    docsUrl: 'https://www.promptingguide.ai/',
    category: 'AI & ML'
  },
  'RAG': {
    desc: 'Retrieval-Augmented Generation pattern combining vector databases with generative LLMs to ground AI responses in custom knowledge bases.',
    docsUrl: 'https://aws.amazon.com/what-is/retrieval-augmented-generation/',
    category: 'AI & ML'
  },
  'Function Calling': {
    desc: 'Capability of LLMs to dynamically output structured JSON arguments to execute external tools, APIs, and client-side functions.',
    docsUrl: 'https://ai.google.dev/gemini-api/docs/function-calling',
    category: 'AI & ML'
  },
  'Structured Outputs': {
    desc: 'Enforcing deterministic JSON Schema adherence on AI responses for reliable parsing and system integration.',
    docsUrl: 'https://ai.google.dev/gemini-api/docs/structured-output',
    category: 'AI & ML'
  },

  // Cybersecurity
  'Kali Linux': {
    desc: 'Debian-based Linux distribution pre-loaded with security auditing, penetration testing, and forensic investigation tools.',
    docsUrl: 'https://www.kali.org/docs/',
    category: 'Cybersecurity'
  },
  'Burp Suite': {
    desc: 'Industry-standard web application security testing proxy used for intercepting, modifying, and analyzing HTTP/HTTPS traffic.',
    docsUrl: 'https://portswigger.net/burp/documentation',
    category: 'Cybersecurity'
  },
  'Nmap': {
    desc: 'Network discovery and security scanner used to discover open ports, running services, operating systems, and host vulnerabilities.',
    docsUrl: 'https://nmap.org/docs.html',
    category: 'Cybersecurity'
  },
  'Wireshark': {
    desc: 'Packet analysis utility for capturing, filtering, and deep-inspecting network protocol traffic in real time.',
    docsUrl: 'https://www.wireshark.org/docs/',
    category: 'Cybersecurity'
  },
  'Metasploit': {
    desc: 'Penetration testing framework enabling vulnerability discovery, payload creation, and automated exploit execution.',
    docsUrl: 'https://docs.metasploit.com/',
    category: 'Cybersecurity'
  },
  'sqlmap': {
    desc: 'Automated tool for detecting and exploiting SQL injection flaws to extract database schemas and take control of database servers.',
    docsUrl: 'https://sqlmap.org/',
    category: 'Cybersecurity'
  },
  'Hydra': {
    desc: 'Fast, parallelized network login cracker supporting numerous protocols (SSH, FTP, HTTP, RDP) for credential auditing.',
    docsUrl: 'https://github.com/vanhauser-thc/thc-hydra',
    category: 'Cybersecurity'
  },
  'Hashcat': {
    desc: 'Advanced GPU-accelerated password recovery utility supporting hundreds of hashing algorithms.',
    docsUrl: 'https://hashcat.net/wiki/',
    category: 'Cybersecurity'
  },
  'John the Ripper': {
    desc: 'High-performance password cracker designed to detect weak passwords across multiple operating systems and hash types.',
    docsUrl: 'https://www.openwall.com/john/doc/',
    category: 'Cybersecurity'
  },
  'Nikto': {
    desc: 'Open-source web server scanner for detecting dangerous files, outdated server components, and misconfigurations.',
    docsUrl: 'https://cirt.net/Nikto2',
    category: 'Cybersecurity'
  },
  'theHarvester': {
    desc: 'OSINT reconnaissance tool for gathering emails, subdomains, hosts, employee names, and open ports from public sources.',
    docsUrl: 'https://github.com/laramies/theHarvester',
    category: 'Cybersecurity'
  },
  'Sublist3r': {
    desc: 'Python security tool designed to enumerate subdomains using OSINT and multiple search engines.',
    docsUrl: 'https://github.com/aboul3la/Sublist3r',
    category: 'Cybersecurity'
  },
  'DirBuster': {
    desc: 'Multi-threaded web application brute-force scanner for discovering hidden directories and file names on target servers.',
    docsUrl: 'https://www.owasp.org/',
    category: 'Cybersecurity'
  },
  'Wfuzz': {
    desc: 'Web application security fuzzer used to discover unlinked resources, hidden parameters, headers, and web vulnerabilities.',
    docsUrl: 'https://wfuzz.readthedocs.io/',
    category: 'Cybersecurity'
  },
  'Scapy': {
    desc: 'Python packet manipulation library capable of forging, sniffing, dissecting, and transmitting custom network packets.',
    docsUrl: 'https://scapy.readthedocs.io/',
    category: 'Cybersecurity'
  },
  'Snort': {
    desc: 'Open-source Network Intrusion Detection and Prevention System (IDS/IPS) performing real-time traffic analysis and packet logging.',
    docsUrl: 'https://www.snort.org/documents',
    category: 'Cybersecurity'
  },
  'tcpdump': {
    desc: 'Command-line packet analyzer for capturing and parsing TCP/IP network traffic directly from interfaces.',
    docsUrl: 'https://www.tcpdump.org/manpages/tcpdump.1.html',
    category: 'Cybersecurity'
  },
  'Netdiscover': {
    desc: 'Active/passive network address discovery tool designed for wireless and local networks without DHCP using ARP requests.',
    docsUrl: 'https://github.com/alexxy/netdiscover',
    category: 'Cybersecurity'
  },
  'CeWL': {
    desc: 'Custom word list generator that crawls target web pages to compile custom dictionaries for password cracking.',
    docsUrl: 'https://digi.ninja/projects/cewl.php',
    category: 'Cybersecurity'
  },
  'DVWA': {
    desc: 'Damn Vulnerable Web Application environment designed for security professionals to test web security skills legally.',
    docsUrl: 'https://github.com/digininja/DVWA',
    category: 'Cybersecurity'
  },
  'ExploitDB': {
    desc: 'CVE-compliant public archive of exploits and vulnerable software maintained by Offensive Security.',
    docsUrl: 'https://www.exploit-db.com/',
    category: 'Cybersecurity'
  },
  'msfconsole': {
    desc: 'Command-line interface to the Metasploit Framework for configuring targets, exploits, and payload payloads.',
    docsUrl: 'https://docs.metasploit.com/',
    category: 'Cybersecurity'
  },
  'msfvenom': {
    desc: 'Metasploit payload generator and encoder tool for generating customized shellcode and binaries.',
    docsUrl: 'https://docs.metasploit.com/',
    category: 'Cybersecurity'
  },
  'OpenSSH': {
    desc: 'Encrypted connectivity toolsuite implementing SSH protocol for remote login, file transfer, and port forwarding.',
    docsUrl: 'https://www.openssh.com/manual.html',
    category: 'Cybersecurity'
  },
  'nslookup': {
    desc: 'Command-line network utility for querying Domain Name System (DNS) servers and resolving IP addresses.',
    docsUrl: 'https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/nslookup',
    category: 'Cybersecurity'
  },
  'netstat': {
    desc: 'Network monitoring utility displaying active TCP/UDP sockets, open ports, and routing statistics.',
    docsUrl: 'https://man7.org/linux/man-pages/man8/netstat.8.html',
    category: 'Cybersecurity'
  },

  // Dev & DevOps
  'FastAPI': {
    desc: 'High-performance, modern Python web framework for building APIs with automatic OpenAPI documentation and async support.',
    docsUrl: 'https://fastapi.tiangolo.com/',
    category: 'Dev & DevOps'
  },
  'Flask': {
    desc: 'Lightweight WSGI Python web microframework designed for fast API development and microservices.',
    docsUrl: 'https://flask.palletsprojects.com/',
    category: 'Dev & DevOps'
  },
  'Express.js': {
    desc: 'Minimalist web application framework for Node.js powering RESTful HTTP microservices.',
    docsUrl: 'https://expressjs.com/',
    category: 'Dev & DevOps'
  },
  'REST APIs': {
    desc: 'Architectural pattern for designing stateless web APIs using HTTP methods (GET, POST, PUT, DELETE) and JSON data payloads.',
    docsUrl: 'https://restfulapi.net/',
    category: 'Dev & DevOps'
  },
  'SQLAlchemy': {
    desc: 'Python Object-Relational Mapping (ORM) library connecting object models directly to relational database schemas.',
    docsUrl: 'https://www.sqlalchemy.org/',
    category: 'Dev & DevOps'
  },
  'Alembic': {
    desc: 'Database migration management tool built specifically for SQLAlchemy schemas.',
    docsUrl: 'https://alembic.sqlalchemy.org/',
    category: 'Dev & DevOps'
  },
  'Firebase Admin SDK': {
    desc: 'Server-side Node/Python SDK for privileged authentication management, Firestore access, and push notifications.',
    docsUrl: 'https://firebase.google.com/docs/admin/setup',
    category: 'Dev & DevOps'
  },
  'JWT Authentication': {
    desc: 'JSON Web Token open standard (RFC 7519) for transmitting digitally signed authentication claims securely between parties.',
    docsUrl: 'https://jwt.io/introduction',
    category: 'Dev & DevOps'
  },
  'OAuth 2.0': {
    desc: 'Industry-standard delegation protocol enabling secure, scoped third-party access without exposing credentials.',
    docsUrl: 'https://oauth.net/2/',
    category: 'Dev & DevOps'
  },
  'Google OAuth': {
    desc: 'Authentication integration allowing users to log in securely using their Google identity.',
    docsUrl: 'https://developers.google.com/identity/protocols/oauth2',
    category: 'Dev & DevOps'
  },
  'GitHub OAuth': {
    desc: 'Identity service providing secure user login and authorization via GitHub developer accounts.',
    docsUrl: 'https://docs.github.com/en/apps/oauth-apps',
    category: 'Dev & DevOps'
  },
  'Git': {
    desc: 'Distributed version control system for tracking source code changes and collaborating on software projects.',
    docsUrl: 'https://git-scm.com/doc',
    category: 'Dev & DevOps'
  },
  'GitHub': {
    desc: 'Cloud platform for code hosting, pull request reviews, automated CI/CD actions, and project management.',
    docsUrl: 'https://docs.github.com/',
    category: 'Dev & DevOps'
  },
  'Docker': {
    desc: 'Container platform packaging software applications and dependencies into isolated runtime environments.',
    docsUrl: 'https://docs.docker.com/',
    category: 'Dev & DevOps'
  },
  'Docker Compose': {
    desc: 'Tool for defining and running multi-container Docker applications via declarative YAML configurations.',
    docsUrl: 'https://docs.docker.com/compose/',
    category: 'Dev & DevOps'
  },
  'Postman': {
    desc: 'API client platform for building, testing, automating, and documenting REST/GraphQL HTTP endpoints.',
    docsUrl: 'https://learning.postman.com/docs/getting-started/overview/',
    category: 'Dev & DevOps'
  },
  'Pytest': {
    desc: 'Python testing framework for writing clean, scalable unit tests, fixtures, and automated test suites.',
    docsUrl: 'https://docs.pytest.org/',
    category: 'Dev & DevOps'
  },
  'WSL': {
    desc: 'Windows Subsystem for Linux enabling developers to run native Linux utilities and ELF binaries on Windows.',
    docsUrl: 'https://learn.microsoft.com/en-us/windows/wsl/',
    category: 'Dev & DevOps'
  },
  'VirtualBox': {
    desc: 'Cross-platform virtualization software for running isolated guest operating systems.',
    docsUrl: 'https://www.virtualbox.org/wiki/Documentation',
    category: 'Dev & DevOps'
  },
  'VMware': {
    desc: 'Hypervisor environment for enterprise virtualization and multi-OS infrastructure isolation.',
    docsUrl: 'https://docs.vmware.com/',
    category: 'Dev & DevOps'
  },

  // Databases
  'PostgreSQL': {
    desc: 'Advanced open-source relational database management system supporting ACID compliance, JSON queries, and robust indexes.',
    docsUrl: 'https://www.postgresql.org/docs/',
    category: 'Databases'
  },
  'MySQL': {
    desc: 'Widely used open-source relational database management system optimized for fast web application transactions.',
    docsUrl: 'https://dev.mysql.com/doc/',
    category: 'Databases'
  },
  'SQLite': {
    desc: 'Self-contained, serverless, zero-configuration embedded SQL database engine.',
    docsUrl: 'https://www.sqlite.org/docs.html',
    category: 'Databases'
  },
  'MongoDB Atlas': {
    desc: 'Cloud-hosted NoSQL document database service for flexible JSON document storage and querying.',
    docsUrl: 'https://www.mongodb.com/docs/atlas/',
    category: 'Databases'
  },
  'Firestore': {
    desc: 'Scalable cloud NoSQL database from Firebase with real-time listeners and offline data persistence.',
    docsUrl: 'https://firebase.google.com/docs/firestore',
    category: 'Databases'
  },
  'Supabase': {
    desc: 'Open-source Firebase alternative featuring PostgreSQL, auto-generated REST/Realtime APIs, and Auth.',
    docsUrl: 'https://supabase.com/docs',
    category: 'Databases'
  },
  'Redis': {
    desc: 'In-memory key-value data structure store used as a high-speed cache, pub/sub broker, and session store.',
    docsUrl: 'https://redis.io/docs/',
    category: 'Databases'
  },
  'Celery': {
    desc: 'Asynchronous task queue for executing background workers and distributed job processing in Python.',
    docsUrl: 'https://docs.celeryq.dev/',
    category: 'Databases'
  }
};

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const handleSkillClick = (skill: string) => {
    setSelectedSkill(skill);
  };

  const aiSkills = ['scikit-learn', 'PyTorch', 'NumPy', 'Pandas', 'Matplotlib', 'Plotly', 'TextBlob', 'SHAP', 'LIME', 'Google AI Studio', 'Gemini API', 'Prompt Engineering', 'RAG', 'Function Calling', 'Structured Outputs'];
  const cyberSkills = ['Kali Linux', 'Burp Suite', 'Nmap', 'Wireshark', 'Metasploit', 'sqlmap', 'Hydra', 'Hashcat', 'John the Ripper', 'Nikto', 'theHarvester', 'Sublist3r', 'DirBuster', 'Wfuzz', 'Scapy', 'Snort', 'tcpdump', 'Netdiscover', 'CeWL', 'DVWA', 'ExploitDB', 'msfconsole', 'msfvenom', 'OpenSSH', 'nslookup', 'netstat'];
  const devSkills = ['FastAPI', 'Flask', 'Express.js', 'REST APIs', 'SQLAlchemy', 'Alembic', 'Firebase Admin SDK', 'JWT Authentication', 'OAuth 2.0', 'Google OAuth', 'GitHub OAuth', 'Git', 'GitHub', 'Docker', 'Docker Compose', 'Postman', 'Pytest', 'WSL', 'VirtualBox', 'VMware'];
  const dbSkills = ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB Atlas', 'Firestore', 'Supabase', 'Redis', 'Celery'];

  const selectedSkillInfo = selectedSkill ? techDetailsMap[selectedSkill] || {
    desc: `${selectedSkill} is a key tool/technology utilized in software engineering, cybersecurity, or data architecture projects.`,
    docsUrl: `https://www.google.com/search?q=${encodeURIComponent(selectedSkill + ' official documentation')}`,
    category: 'Engineering Tool'
  } : null;

  return (
    <section id="skills" className="space-y-10">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-4 border-[var(--color-border)] pb-6 gap-4">
          <div>
            <h2 className="heading-neo text-2xl sm:text-4xl md:text-5xl lg:text-7xl text-[var(--color-text-primary)] !lowercase font-mono whitespace-nowrap mb-3">
              $&gt; <span className="text-[var(--color-accent-pink-theme)] border-b-4 md:border-b-8 border-[var(--color-accent-pink-theme)] inline-block pb-1">ls tech/</span><span className="animate-pulse text-[var(--color-accent-pink-theme)]">_</span>
            </h2>
          </div>
        </div>
      </ScrollReveal>

      {/* Main Container with Marquee Streams */}
      <div className="space-y-12">
        <ScrollReveal delay={0}>
          <SkillCategory 
            title="AI & ML" 
            color="cyan" 
            onSkillClick={handleSkillClick}
            skills={aiSkills} 
            speed="normal"
          />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <SkillCategory 
            title="CYBERSECURITY" 
            color="green" 
            onSkillClick={handleSkillClick}
            skills={cyberSkills} 
            speed="fast"
          />
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <SkillCategory 
            title="DEV & DEVOPS" 
            color="orange" 
            onSkillClick={handleSkillClick}
            skills={devSkills} 
            speed="normal"
          />
        </ScrollReveal>
        <ScrollReveal delay={450}>
          <SkillCategory 
            title="DATABASES" 
            color="pink" 
            onSkillClick={handleSkillClick}
            skills={dbSkills} 
            speed="fast"
          />
        </ScrollReveal>
      </div>

      {/* Tech Stack Info Modal */}
      {selectedSkill && selectedSkillInfo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-150"
          onClick={() => setSelectedSkill(null)}
        >
          <div 
            className="neo-card shadow-pink max-w-lg w-full p-6 border-4 bg-[var(--color-bg-secondary)] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="neo-badge bg-[var(--color-accent-yellow-theme)] text-black font-mono font-bold text-xs uppercase px-2.5 py-1 border border-black">
                {selectedSkillInfo.category}
              </span>
              <button 
                onClick={() => setSelectedSkill(null)} 
                className="neo-btn p-1.5 hover:bg-red-500 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>
            
            <h3 className="heading-neo text-2xl md:text-3xl mb-3 text-[var(--color-text-primary)] flex items-center gap-3">
              <TechLogo name={selectedSkill} />
              <span>{selectedSkill}</span>
            </h3>

            <div className="p-4 mb-6 rounded border-2 border-[var(--color-border)] bg-[var(--color-bg-primary)] shadow-inner">
              <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent-pink-theme)] font-bold mb-1">
                // WHAT IT MEANS & DOES
              </p>
              <p className="text-sm text-[var(--color-text-primary)] font-medium leading-relaxed">
                {selectedSkillInfo.desc}
              </p>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedSkill(null)}
                className="neo-btn py-2 px-4 text-xs font-mono font-bold uppercase text-[var(--color-text-primary)]"
              >
                Close
              </button>
              <a 
                href={selectedSkillInfo.docsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="neo-btn-primary py-2 px-4 text-xs font-mono font-bold uppercase flex items-center gap-2 bg-[var(--color-primary)] text-black hover:scale-105 transition-transform"
              >
                <span>Official Documentation</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function SkillCategory({ 
  title, 
  skills, 
  color, 
  speed,
  onSkillClick 
}: { 
  title: string, 
  skills: string[], 
  color: string, 
  speed: 'normal' | 'fast',
  onSkillClick: (s: string) => void 
}) {
  // Duplicate array x3 to create a seamless infinite horizontal loop right-to-left
  const marqueeItems = [...skills, ...skills, ...skills];

  return (
    <div className={`neo-card shadow-${color} p-6 lg:p-8 border-4 overflow-hidden relative group`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="heading-neo text-xl md:text-2xl flex items-center gap-3 text-[var(--color-text-primary)]">
          <span 
            className="w-4 h-4 border-2 border-[var(--color-border)] flex-shrink-0"
            style={{ backgroundColor: `var(--color-accent-${color}-theme)` }}
          ></span>
          {title}
          <span className="text-xs font-mono font-normal text-[var(--color-text-secondary)]">
            ({skills.length} tools)
          </span>
        </h3>
      </div>

      {/* Horizontal Right-to-Left Marquee Strip with Side Fade Masks */}
      <div className="relative w-full overflow-hidden py-2">
        <div 
          className={`flex gap-3 w-max ${
            speed === 'fast' ? 'animate-marquee-horizontal-fast' : 'animate-marquee-horizontal'
          }`}
        >
          {marqueeItems.map((skill, i) => (
            <button
              key={`${skill}-${i}`} 
              onClick={() => onSkillClick(skill)}
              className="group/badge neo-badge text-xs md:text-sm py-2 px-3.5 flex items-center gap-2.5 shadow-[3px_3px_0px_var(--color-shadow)] hover:-translate-y-1 hover:shadow-[5px_6px_0px_var(--color-shadow)] hover:bg-[var(--color-accent-yellow-theme)] hover:text-black transition-all cursor-pointer whitespace-nowrap bg-[var(--color-bg-primary)] border-2 border-[var(--color-border)]"
            >
              <TechLogo name={skill} />
              <span className="font-mono font-semibold">{skill}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
