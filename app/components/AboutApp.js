import { Check } from 'lucide-react';
import { Trophy, Rocket, Microscope, Shield, TriangleAlert, GraduationCap, Bot, Search, LineChart, Brain, Waves, Lock, MapPin, Circle, Download, Mail, Code, User, Dna, Briefcase, Zap, Target } from 'lucide-react';
import Image from 'next/image';

const TIMELINE = [
  {
    year: '2025', title: 'Google Agentic AI Hackathon — Finalist',
    body: 'Built Sahayak, an AI teaching assistant for low-resource classrooms. Out of ~5,000 teams.', icon: <Trophy size={16} />
  },
  {
    year: '2025', title: 'nScanner v2 shipped',
    body: 'Full-stack network scanning suite with Flask dashboard + vulnerability reports. Used by my uni\'s cybersec club.', icon: <Rocket size={16} />
  },
  {
    year: '2024', title: 'Joined IEEE Research Committee as Subhead',
    body: 'R&D for the largest student technical body. Mentored 12 juniors on their first research papers.', icon: <Microscope size={16} />
  },
  {
    year: '2024', title: 'Cybersecurity Intern @ WhizHack',
    body: 'Vulnerability analysis on real client datasets. Wrote 3 internal tooling scripts that are still in production.', icon: <Shield size={16} />
  },
  {
    year: '2024', title: 'Threat Prism @ 1Stop.ai',
    body: 'Simulated attack patterns. Built Python analyzers that reduced triage time by 60%.', icon: <TriangleAlert size={16} />
  },
  {
    year: '2024', title: 'Started MBATech @ NMIMS MPSTME',
    body: 'CGPA 8.92. Simultaneously pursuing BS in Data Science at IIT Madras.', icon: <GraduationCap size={16} />
  },
];

export default function AboutApp({ onClose, onAction }) {
  return (
    <div className="about-app" style={{ display: 'flex', flexDirection: 'column', gap: '32px', paddingBottom: '60px', overflowY: 'auto', height: '100%', scrollBehavior: 'smooth', background: 'transparent' }}>
      
      {/* === TYPING SVG === */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '20px', paddingTop: '40px' }}>
        <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&duration=2800&pause=1200&color=F75C7E&center=true&vCenter=true&width=900&lines=Hi%2C+I'm+Anushree+Balaji+%3A%29;AI+%7C+Cybersecurity+%7C+Full+Stack;Always+Building%2C+Always+Learning" alt="Typing SVG" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>

      {/* === HERO / QUICK VIEW === */}
      <div className="about-hero" style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', textAlign: 'center', background: 'transparent', padding: '0 20px' }}>
        <div style={{ position: 'relative', width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', border: '3px solid rgba(80, 250, 123, 0.6)' }}>
          <Image src="/tools/photo.jpg" alt="Anushree Balaji" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="about-hero-text" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 style={{ margin: 0, color: '#f8f8f2', fontSize: '24px', fontWeight: 'bold' }}>Anushree Balaji</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#50fa7b', display: 'inline-block', boxShadow: '0 0 8px #50fa7b' }}></span>
            <span style={{ color: '#50fa7b', fontSize: '14px' }}>Available for internships</span>
          </div>
          <p className="about-tagline" style={{ marginTop: '16px', maxWidth: '500px', color: '#c0c0c0', lineHeight: '1.5' }}>
            Backend · Data · Security — building the kind of systems I'd want to audit.
          </p>
          <div className="about-cta-row" style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '24px', flexWrap: 'wrap' }}>
            <button className="cta primary" onClick={() => onAction('cv')}><Download size={14} /> Resume</button>
            <button className="cta" onClick={() => onAction('email')}><Mail size={14} /> Email</button>
            <a href="https://github.com/Anushree401" target="_blank" rel="noreferrer" className="cta ghost" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}><Code size={14} /> GitHub</a>
            <a href="https://linkedin.com/in/anushree-balaji" target="_blank" rel="noreferrer" className="cta ghost" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}><User size={14} /> LinkedIn</a>
          </div>
        </div>
      </div>

      {/* === STORY BOX === */}
      <div className="about-pane" style={{ background: 'rgba(19, 22, 30, 0.6)', border: '1px solid rgba(80, 250, 123, 0.2)', padding: '24px', borderRadius: '12px', margin: '0 20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#50fa7b', margin: 0, fontSize: '18px' }}><Dna size={20} /> My Story</h2>
        
        <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExczRnbDBhZHRkYnVzdzU1ZDkzOXI4NmF6NXR5ZGtubWo2M2ppeWt6dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2i7jspnRBYgg6v4Oki/giphy.gif" alt="Hacker Banner" style={{ maxWidth: '100%', borderRadius: '12px', border: '1px solid rgba(80, 250, 123, 0.4)', alignSelf: 'center' }} />
        
        <p className="lede" style={{ color: '#f8f8f2', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
          I sit at the intersection of <strong>backend systems</strong>, <strong>data</strong>, and <strong>cybersecurity</strong>. I love building innovative, intelligent systems that merge analytics and defense, focusing on correctness over cleverness.
        </p>
      </div>

      {/* === TECH STACK SHIELDS === */}
      <div className="about-pane" style={{ margin: '0 20px', overflow: 'hidden' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#8be9fd', margin: '0 0 16px 0', fontSize: '18px' }}><Zap size={20} /> My Tech Stack</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div className="marquee-wrapper">
            <strong style={{ color: '#bd93f9', marginBottom: '8px', display: 'block', fontSize: '14px' }}>Data Science & ML</strong>
            <div className="marquee-container">
              <div className="marquee-content">
                <img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white" alt="Python" />
                <img src="https://img.shields.io/badge/Pandas-150458?logo=pandas&logoColor=white" alt="Pandas" />
                <img src="https://img.shields.io/badge/NumPy-013243?logo=numpy&logoColor=white" alt="NumPy" />
                <img src="https://img.shields.io/badge/Matplotlib-11557c?logo=plotly&logoColor=white" alt="Matplotlib" />
                <img src="https://img.shields.io/badge/SQL-003B57?logo=postgresql&logoColor=white" alt="SQL" />
                <img src="https://img.shields.io/badge/Explainable%20AI-8A2BE2?logo=ai&logoColor=white" alt="Explainable AI" />
                {/* Duplicate for infinite loop */}
                <img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white" alt="Python" />
                <img src="https://img.shields.io/badge/Pandas-150458?logo=pandas&logoColor=white" alt="Pandas" />
                <img src="https://img.shields.io/badge/NumPy-013243?logo=numpy&logoColor=white" alt="NumPy" />
                <img src="https://img.shields.io/badge/Matplotlib-11557c?logo=plotly&logoColor=white" alt="Matplotlib" />
                <img src="https://img.shields.io/badge/SQL-003B57?logo=postgresql&logoColor=white" alt="SQL" />
                <img src="https://img.shields.io/badge/Explainable%20AI-8A2BE2?logo=ai&logoColor=white" alt="Explainable AI" />
              </div>
            </div>
          </div>

          <div className="marquee-wrapper">
            <strong style={{ color: '#bd93f9', marginBottom: '8px', display: 'block', fontSize: '14px' }}>Development</strong>
            <div className="marquee-container">
              <div className="marquee-content" style={{ animationDirection: 'reverse', animationDuration: '25s' }}>
                <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D" alt="VueJS" />
                <img src="https://shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=000&style=flat-square" alt="Javascript" />
                <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
                <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" alt="NodeJS" />
                <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=Flask&logoColor=white" alt="Flask" />
                <img src="https://img.shields.io/badge/C++-00599C?style=flat-square&logo=C%2B%2B&logoColor=white" alt="C++" />
                <img src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi" alt="FastAPI" />
                <img src="https://img.shields.io/badge/-MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
                <img src="https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
                {/* Duplicate for infinite loop */}
                <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D" alt="VueJS" />
                <img src="https://shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=000&style=flat-square" alt="Javascript" />
                <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
                <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" alt="NodeJS" />
                <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=Flask&logoColor=white" alt="Flask" />
                <img src="https://img.shields.io/badge/C++-00599C?style=flat-square&logo=C%2B%2B&logoColor=white" alt="C++" />
                <img src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi" alt="FastAPI" />
                <img src="https://img.shields.io/badge/-MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
                <img src="https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
              </div>
            </div>
          </div>

          <div className="marquee-wrapper">
            <strong style={{ color: '#bd93f9', marginBottom: '8px', display: 'block', fontSize: '14px' }}>Cybersecurity</strong>
            <div className="marquee-container">
              <div className="marquee-content" style={{ animationDuration: '22s' }}>
                <img src="https://img.shields.io/badge/Network%20Security-006400?logo=protonvpn&logoColor=white" alt="Network Security" />
                <img src="https://img.shields.io/badge/Pen%20Testing-1E90FF?logo=hackaday&logoColor=white" alt="Penetration Testing" />
                <img src="https://img.shields.io/badge/SQLi-DC143C?logo=mysql&logoColor=white" alt="SQLi" />
                <img src="https://img.shields.io/badge/Brute%20Force-8B0000?logo=shield&logoColor=white" alt="Brute Force" />
                <img src="https://img.shields.io/badge/Nmap-4682B4?logo=wireshark&logoColor=white" alt="Nmap" />
                <img src="https://img.shields.io/badge/Burp%20Suite-F37626?logo=burpsuite&logoColor=white" alt="Burp Suite" />
                <img src="https://img.shields.io/badge/Wireshark-1E90FF?logo=wireshark&logoColor=white" alt="Wireshark" />
                <img src="https://img.shields.io/badge/Metasploit-000000?logo=metasploit&logoColor=white" alt="Metasploit" />
                {/* Duplicate for infinite loop */}
                <img src="https://img.shields.io/badge/Network%20Security-006400?logo=protonvpn&logoColor=white" alt="Network Security" />
                <img src="https://img.shields.io/badge/Pen%20Testing-1E90FF?logo=hackaday&logoColor=white" alt="Penetration Testing" />
                <img src="https://img.shields.io/badge/SQLi-DC143C?logo=mysql&logoColor=white" alt="SQLi" />
                <img src="https://img.shields.io/badge/Brute%20Force-8B0000?logo=shield&logoColor=white" alt="Brute Force" />
                <img src="https://img.shields.io/badge/Nmap-4682B4?logo=wireshark&logoColor=white" alt="Nmap" />
                <img src="https://img.shields.io/badge/Burp%20Suite-F37626?logo=burpsuite&logoColor=white" alt="Burp Suite" />
                <img src="https://img.shields.io/badge/Wireshark-1E90FF?logo=wireshark&logoColor=white" alt="Wireshark" />
                <img src="https://img.shields.io/badge/Metasploit-000000?logo=metasploit&logoColor=white" alt="Metasploit" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === GITHUB STATS === */}
      <div className="about-pane" style={{ margin: '0 20px' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ff79c6', margin: '0 0 16px 0', fontSize: '18px' }}><Code size={20} /> GitHub Stats</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          <img src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=Anushree401&layout=compact&theme=radical&hide_border=true" alt="Top Languages" style={{ maxWidth: '100%', borderRadius: '8px' }} />
          <div style={{ width: '100%', overflowX: 'auto', background: 'rgba(13, 17, 23, 0.5)', borderRadius: '8px', padding: '12px' }}>
            <img src="https://raw.githubusercontent.com/Anushree401/Anushree401/output/github-contribution-grid-snake-dark.svg" alt="Snake animation" style={{ maxWidth: 'none', display: 'block', margin: '0 auto' }} />
          </div>
          <img src="https://gh-trophy.cdnsoft.net/?username=Anushree401&theme=dark_dimmed" alt="GitHub Trophies" style={{ maxWidth: '100%' }} />
        </div>
      </div>

      {/* === EXPERIENCE === */}
      <div className="about-pane" style={{ margin: '0 20px' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f1fa8c', margin: '0 0 16px 0', fontSize: '18px' }}><Briefcase size={20} /> Experience</h2>
        <div className="timeline">
          {TIMELINE.map((t, i) => (
            <div key={i} className="tl-item">
              <div className="tl-year">{t.year}</div>
              <div className="tl-line">
                <div className="tl-dot">{t.icon}</div>
                {i < TIMELINE.length - 1 && <div className="tl-connector" />}
              </div>
              <div className="tl-content">
                <h3 style={{ color: '#f8f8f2' }}>{t.title}</h3>
                <p style={{ color: '#c0c0c0' }}>{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
        }
        .marquee-container {
          display: flex;
          overflow: hidden;
          white-space: nowrap;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .marquee-content {
          display: flex;
          gap: 16px;
          animation: marquee 20s linear infinite;
          width: max-content;
        }
        .marquee-content img {
          height: 28px;
          border-radius: 4px;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 8px)); }
        }
      `}</style>
    </div>
  );
}
