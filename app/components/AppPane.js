'use client';
import { ExternalLink, BookOpen, Github, Trophy, Rocket, Shield, Microscope, Users, Briefcase, GraduationCap, MessageSquare, Star, Target, Award, Globe } from 'lucide-react';


export default function AppPane({ id }) {
  
  const timelineData = [
    { year: '2025', title: 'Google Agentic AI Hackathon — Finalist', body: 'Built Sahayak, an AI teaching assistant. Reached finals out of ~5,000 teams.', icon: <Trophy size={16} /> },
    { year: '2025', title: 'nScanner v2 Shipped', body: 'Full-stack network scanning suite with Flask dashboard. Used by my university\'s cybersec club.', icon: <Rocket size={16} /> },
    { year: '2025', title: 'Co-founder & Admin, CyphersNova Community', body: 'Building production-level projects, organizing events, and hosting speaker sessions to foster a community of tech enthusiasts.', icon: <Users size={16} /> },
    { year: '2024', title: 'Cybersecurity Intern @ WhizHack', body: 'Conducted deep vulnerability analysis on client datasets. Wrote 3 production tooling scripts automating threat triage.', icon: <Shield size={16} /> },
    { year: '2024', title: 'Subhead R&D, IEEE Research Committee', body: 'Leading research initiatives within the IEEE student chapter. Driving innovation-focused research across teams.', icon: <Microscope size={16} /> },
    { year: '2024', title: 'Cyber Cypher Taqneeq (NMIMS) — Finalist', body: 'Competed in cybersecurity pentest and forensics track. Finished as a finalist.', icon: <Target size={16} /> },
    { year: '2024', title: 'IEEE TechSafar — Finalist', body: 'Technical innovation competition. Finalist in the research category presenting intelligent systems and security data analytics.', icon: <Award size={16} /> },
    { year: '2024', title: 'Organizing Team, Paradox IIT Madras', body: 'Part of the organizing team for IIT Madras\'s premier technical festival. Managed operations and participant coordination.', icon: <GraduationCap size={16} /> },
    { year: '2024', title: 'Technical Executive, IEC Committee', body: 'Helped organise Taqneeq, NMIMS\'s annual tech fest. Managed technical event logistics and on-ground execution.', icon: <Briefcase size={16} /> },
    { year: '2024', title: 'Finance Executive, MBATech Connect Cell', body: 'Managing finances, budgeting, and operations for the student body bridging management and technology disciplines.', icon: <Briefcase size={16} /> },
    { year: '2024', title: 'Editorial Executive, 4C Marketing Club', body: 'Created and curated digital content for the college\'s marketing and communication club.', icon: <MessageSquare size={16} /> },
    { year: '2024', title: 'Adappt Ideathon IETE — Participant', body: 'Pitched a tech innovation concept at the idea stage.', icon: <Star size={16} /> },
    { year: '2024', title: 'Mumbai MUN — Delegate of Australia', body: 'Developed skills in research, public speaking, diplomatic negotiation, and policy argumentation.', icon: <Globe size={16} /> }
  ];

  switch (id) {


    case 'projects':
      return (
        <div className="app-pane">
          <h2><span className="typewriter-text"> ~/projects/</span></h2>
          
          <div className="projects-grid">
            <style>{`
              .projects-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                gap: 20px;
                padding-top: 10px;
              }
              .projects-grid .app-card {
                margin: 0;
                display: flex;
                flex-direction: column;
                height: 100%;
                justify-content: space-between;
                background: rgba(30, 34, 42, 0.4);
                backdrop-filter: blur(4px);
              }
              .projects-grid h3 {
                font-size: 18px;
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 8px;
              }
              .app-card a:hover {
                background: rgba(255, 255, 255, 0.2) !important;
              }
            `}</style>

          <div className="app-card glow-hover cyan">
            <h3> nScanner  Online Network Scanning Tool</h3>
            <div className="app-meta">Python · Flask · Cybersecurity</div>
            <p>Hybrid network scanner for TCP scanning, reconnaissance, and vulnerability analysis with a Flask dashboard.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag">Python</span>
              <span className="tag green">Flask</span>
              <span className="tag purple">Nmap</span>
            </div>
            <a href="https://github.com/Anushree401/nScanner" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', color: '#fff', textDecoration: 'none', fontSize: '13px', marginTop: '12px', width: 'fit-content' }}><ExternalLink size={14} /> View on GitHub</a>
          </div>

          <div className="app-card glow-hover green">
            <h3> Sahayak  AI Teaching Assistant</h3>
            <div className="app-meta">Google Agentic AI · Firebase · Hackathon Finalist</div>
            <p>Agentic AI teaching assistant for lesson planning and visual aids. Built at the Google Agentic AI Hackathon.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag green">Finalist</span>
              <span className="tag">Firebase</span>
              <span className="tag purple">Agentic AI</span>
            </div>
            <a href="https://github.com/ak-kk-21/VAANGuard-Devs-Sahayak" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', color: '#fff', textDecoration: 'none', fontSize: '13px', marginTop: '12px', width: 'fit-content' }}><ExternalLink size={14} /> View on GitHub</a>
          </div>

          <div className="app-card glow-hover purple">
            <h3> Market Trends Dashboard</h3>
            <div className="app-meta">Python · Plotly · React · Live API Data</div>
            <p>Real-time market trend analysis and anomaly detection dashboard using live API data.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag">Python</span>
              <span className="tag purple">Plotly</span>
              <span className="tag">React</span>
            </div>
            <a href="https://github.com/Anushree401/market-dashboard" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', color: '#fff', textDecoration: 'none', fontSize: '13px', marginTop: '12px', width: 'fit-content' }}><ExternalLink size={14} /> View on GitHub</a>
          </div>

          <div className="app-card glow-hover yellow">
            <h3> Explainable AI Credit Scoring <span style={{ fontSize: 11, opacity: 0.7 }}>(ongoing)</span></h3>
            <div className="app-meta">Research · ML · Interpretability</div>
            <p>Ongoing research on interpretable financial risk prediction models to make AI decisions auditable.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag">ML</span>
              <span className="tag yellow">Explainable AI</span>
              <span className="tag">Python</span>
            </div>
          </div>

          <div className="app-card glow-hover orange">
            <h3>️ Keylogger &amp; Email Bomber</h3>
            <div className="app-meta">Python · Security Research · Sandboxed</div>
            <p>Sandboxed security research project to deeply understand keylogging and email-based attack vectors.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag orange">Learning Only</span>
              <span className="tag">Python</span>
              <span className="tag">Sandboxed</span>
            </div>
            <a href="https://github.com/Anushree401/sandbox-research" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', color: '#fff', textDecoration: 'none', fontSize: '13px', marginTop: '12px', width: 'fit-content' }}><ExternalLink size={14} /> View Repository</a>
          </div>

          <div className="app-card glow-hover pink">
            <h3> Digital Banking Application</h3>
            <div className="app-meta">Full Stack Simulation</div>
            <p>Full stack digital banking simulation covering core processes like funds transfer, loans, and role-based access.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag pink">Banking</span>
              <span className="tag">Full Stack</span>
            </div>
            <a href="https://github.com/Anushree401/Digital-Banking-Application" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', color: '#fff', textDecoration: 'none', fontSize: '13px', marginTop: '12px', width: 'fit-content' }}><ExternalLink size={14} /> View on GitHub</a>
          </div>

          <div className="app-card glow-hover cyan">
            <h3>️ PAFA (Predictive Adversarial Fraud Architecture) <span style={{ fontSize: 11, opacity: 0.7 }}>(ongoing)</span></h3>
            <div className="app-meta">Mobile Malware Security Pipeline</div>
            <p>Automated security pipeline for detecting financial mobile malware using topological machine learning.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag cyan">Security</span>
              <span className="tag">AI</span>
              <span className="tag">Malware Analysis</span>
            </div>
            <a href="https://github.com/Anushree401/apk-analyzer" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', color: '#fff', textDecoration: 'none', fontSize: '13px', marginTop: '12px', width: 'fit-content' }}><ExternalLink size={14} /> View on GitHub</a>
          </div>

          <div className="app-card glow-hover green">
            <h3>️ Web Scraper &amp; Crawler</h3>
            <div className="app-meta">Web Scraping</div>
            <p>Full web crawler that scrapes pages for titles, links, images, and headings to generate structural reports.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag">Scraping</span>
              <span className="tag green">Crawler</span>
            </div>
            <a href="https://github.com/Anushree401/scraper-crawler" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', color: '#fff', textDecoration: 'none', fontSize: '13px', marginTop: '12px', width: 'fit-content' }}><ExternalLink size={14} /> View on GitHub</a>
          </div>

          <div className="app-card glow-hover purple">
            <h3> FastAPI E-Wallet</h3>
            <div className="app-meta">FastAPI · JWT · Transactions</div>
            <p>FastAPI e-commerce system featuring integrated wallets, JWT authentication, and transaction management.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag">FastAPI</span>
              <span className="tag purple">E-commerce</span>
            </div>
            <a href="https://github.com/Anushree401/ewallet" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', color: '#fff', textDecoration: 'none', fontSize: '13px', marginTop: '12px', width: 'fit-content' }}><ExternalLink size={14} /> View on GitHub</a>
          </div>

          <div className="app-card glow-hover yellow">
            <h3> QuickNotes AI</h3>
            <div className="app-meta">MERN Stack · Real-time</div>
            <p>Real-time collaborative notes app using the MERN stack with AI-generated summaries and titles.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag">MERN</span>
              <span className="tag yellow">AI</span>
            </div>
            <a href="https://github.com/Anushree401/QuickNotesAI_Anushree" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', color: '#fff', textDecoration: 'none', fontSize: '13px', marginTop: '12px', width: 'fit-content' }}><ExternalLink size={14} /> View on GitHub</a>
          </div>

          <div className="app-card glow-hover orange">
            <h3> GrabMEDIA</h3>
            <div className="app-meta">CLI · yt-dlp · Python</div>
            <p>Powerful CLI tool built with yt-dlp to download videos, audio, PDFs, and images from direct URLs.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag orange">CLI</span>
              <span className="tag">Python</span>
            </div>
            <a href="https://github.com/Anushree401/GrabMEDIA" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', color: '#fff', textDecoration: 'none', fontSize: '13px', marginTop: '12px', width: 'fit-content' }}><ExternalLink size={14} /> View on GitHub</a>
          </div>

          <div className="app-card glow-hover cyan">
            <h3> TCP Network Scanner</h3>
            <div className="app-meta">Python · python-nmap</div>
            <p>TCP port scanner built with python-nmap to identify running services and scan target hosts.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag cyan">Nmap</span>
              <span className="tag">Python</span>
            </div>
            <a href="https://github.com/Anushree401/TCP-network-scanner" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', color: '#fff', textDecoration: 'none', fontSize: '13px', marginTop: '12px', width: 'fit-content' }}><ExternalLink size={14} /> View on GitHub</a>
          </div>
          </div>
        </div>
      );

    case 'internships':
      return (
        <div className="app-pane">
          <h2><span className="typewriter-text"> ~/internships/</span></h2>

          <div className="app-card glow-hover cyan">
            <h3>Cyber Security Innovation Intern</h3>
            <div className="app-meta">Cyber Secured India · Oct 2025  Jan 2026</div>
            <p>Worked as a Cyber Security Innovation Intern, deeply involved in various research-related tasks to innovate within the cybersecurity domain.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag cyan">Innovation</span>
              <span className="tag">Research</span>
              <span className="tag">Security</span>
            </div>
          </div>

          <div className="app-card glow-hover yellow">
            <h3>Technical Developer Intern</h3>
            <div className="app-meta">Auracle Labs · Ongoing</div>
            <p>Working on real-world AI and software systems, bridging research ideas with production-ready implementations.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag yellow">Applied AI</span>
              <span className="tag">System Integration</span>
              <span className="tag">Experimentation Pipelines</span>
            </div>
          </div>

          <div className="app-card glow-hover green">
            <h3>Cybersecurity Intern @ WhizHack</h3>
            <div className="app-meta">WhizHack · Cybersecurity</div>
            <p>Performed vulnerability analysis using security datasets. Conducted security dataset visualisation and integrated dashboards with backend APIs for real-time data display. Worked hands-on with SQLi, brute force, and threat simulation tools.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag">Python</span>
              <span className="tag green">BurpSuite</span>
              <span className="tag">Nmap</span>
              <span className="tag purple">SQLi</span>
            </div>
          </div>

          <div className="app-card glow-hover purple">
            <h3>Threat Simulation Intern @ 1Stop.ai</h3>
            <div className="app-meta">1Stop.ai · Threat Prism · Full Stack + Security</div>
            <p>Simulated threat scenarios and analyzed attack patterns using Python. Designed RESTful APIs using Express.js and MongoDB. Worked on UI optimization and real-time event rendering for the Threat Prism platform.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag purple">Threat Modelling</span>
              <span className="tag">Express.js</span>
              <span className="tag">MongoDB</span>
              <span className="tag">Python</span>
            </div>
          </div>
        </div>
      );

    case 'academics':
      return (
        <div className="app-pane">
          <h2><span className="typewriter-text"> ~/academics/</span></h2>

          <div className="app-card glow-hover pink">
            <h3>B.Tech Data Science + MBA (MBATech)</h3>
            <div className="app-meta">NMIMS MPSTME · Ongoing (2021-2026)</div>
            <p>Pursuing a 5-year integrated MBATech program specializing in Data Science at NMIMS Mukesh Patel School of Technology Management & Engineering.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag pink">NMIMS</span>
              <span className="tag">B.Tech</span>
              <span className="tag">MBA</span>
            </div>
          </div>

          <div className="app-card glow-hover cyan">
            <h3>IIT Madras Foundation Certification</h3>
            <div className="app-meta">IIT Madras · Programming &amp; Data Science · Completed</div>
            <p>Completed foundational coursework in programming, data science, and web systems through IIT Madras's online BS programme.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag">IIT Madras</span>
              <span className="tag cyan">BS Degree</span>
              <span className="tag">Data Science</span>
            </div>
          </div>
        </div>
      );

    case 'skills':
      return (
        <div className="app-pane">
          <h2><span className="typewriter-text"> ~/skills/</span></h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '10px 0' }}>
          
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
                  {/* Duplicate */}
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
                  {/* Duplicate */}
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
                  {/* Duplicate */}
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
            
            <style>{`
              .marquee-wrapper { width: 100%; overflow: hidden; }
              .marquee-container { display: flex; overflow: hidden; white-space: nowrap; mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); }
              .marquee-content { display: flex; gap: 16px; animation: marquee 20s linear infinite; width: max-content; }
              .marquee-content img { height: 28px; border-radius: 4px; }
              @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(calc(-50% - 8px)); } }
            `}</style>
          </div>
        </div>
      );

    case 'leadership':
    case 'hackathons':
      return (
        <div className="app-pane">
          <h2><span className="typewriter-text"> ~/leadership_&_hackathons/</span></h2>
          <div className="timeline">
            {timelineData.map((t, i) => (
              <div key={i} className="tl-item">
                <div className="tl-year">{t.year}</div>
                <div className="tl-line">
                  <div className="tl-dot" style={{ color: '#8be9fd' }}>{t.icon}</div>
                  {i < timelineData.length - 1 && <div className="tl-connector" style={{ width: '2px', background: 'rgba(80,250,123,0.3)', flex: 1, margin: '4px 0' }} />}
                </div>
                <div className="tl-content" style={{ paddingBottom: '24px' }}>
                  <h3 style={{ color: '#f8f8f2', fontSize: '15px', marginBottom: '4px' }}>{t.title}</h3>
                  <p style={{ color: '#c0c0c0', fontSize: '13px', lineHeight: '1.4' }}>{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'publications':
      return (
        <div className="app-pane">
          <h2><span className="typewriter-text"> ~/publications/</span></h2>

          <div className="app-card glow-hover pink">
            <h3>Research Publication: Food Allergens in India</h3>
            <div className="app-meta">Contributor · ResearchGate</div>
            <p>Contributed to a research paper on food allergens in India, covering evidence, regulation, and current knowledge.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag pink">Research</span>
              <span className="tag">Publication</span>
            </div>
            <a href="https://www.researchgate.net/publication/404289052_Food_Allergens_in_India_Evidence_Regulation_and_the_State_of_Current_Knowledge" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', color: '#fff', textDecoration: 'none', fontSize: '13px', marginTop: '12px', width: 'fit-content' }}><BookOpen size={14} /> View on ResearchGate</a>
          </div>
        </div>
      );

    case 'contact':
      return (
        <div className="app-pane">
          <h2><span className="typewriter-text"> ~/contact.txt</span></h2>

          <div className="app-card glow-hover green">
            <h3>Email</h3>
            <p><a className="contact-link" href="mailto:anushree1606balaji@gmail.com">anushree1606balaji@gmail.com</a></p>
          </div>

          <div className="app-card glow-hover cyan">
            <h3>GitHub</h3>
            <p><a className="contact-link" href="https://github.com/Anushree401" target="_blank" rel="noreferrer">github.com/Anushree401</a></p>
          </div>

          <div className="app-card glow-hover purple">
            <h3>LinkedIn</h3>
            <p><a className="contact-link" href="https://www.linkedin.com/in/anushree-balaji-a71b9a255" target="_blank" rel="noreferrer">linkedin.com/in/anushree-balaji-a71b9a255</a></p>
          </div>

          <div className="app-card glow-hover yellow">
            <h3>Phone</h3>
            <p> +91 91527 92056</p>
          </div>

          <div className="app-card glow-hover orange">
            <h3>Open to</h3>
            <ul>
              <li>Data Science &amp; ML internships</li>
              <li>Cybersecurity roles &amp; research</li>
              <li>Full-stack web development projects</li>
              <li>Research collaborations</li>
            </ul>
          </div>

          <div className="app-card glow-hover pink" style={{ marginTop: 8 }}>
            <p style={{ color: '#50fa7b', fontSize: 12 }}>
               Best reached via email or LinkedIn. Usually responds within 24 hours.
            </p>
          </div>
        </div>
      );

    default:
      return (
        <div className="app-pane">
          <h2><span className="typewriter-text">Unknown section</span></h2>
          <p>No content found for: {id}</p>
        </div>
      );
  }
}
