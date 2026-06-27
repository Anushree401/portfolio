'use client';
import React, { useState } from 'react';
import { ExternalLink, BookOpen, Trophy, Rocket, Shield, Microscope, Users, Briefcase, GraduationCap, MessageSquare, Star, Target, Award, Globe, Brain, Code, ChevronUp } from 'lucide-react';

export default function AppPane({ id }) {
  const [activeSkill, setActiveSkill] = useState(null);

  const timelineData = [
    { year: '2025', title: 'Google Agentic AI Hackathon — Finalist', body: 'Built Sahayak, an AI teaching assistant. Reached finals out of ~5,000 teams.', icon: <Trophy size={16} />, tag: { label: 'Hackathon', color: 'yellow' } },
    { year: '2025', title: 'nScanner v2 Shipped', body: 'Full-stack network scanning suite with Flask dashboard. Used by my university\'s cybersec club.', icon: <Rocket size={16} />, tag: { label: 'Build', color: 'blue' } },
    { year: '2025', title: 'Co-founder & Admin, CyphersNova Community', body: 'Building production-level projects, organizing events, and hosting speaker sessions to foster a community of tech enthusiasts.', icon: <Users size={16} />, tag: { label: 'Leadership', color: 'green' } },
    { year: '2024', title: 'Subhead R&D, IEEE Research Committee', body: 'Leading research initiatives within the IEEE student chapter. Driving innovation-focused research across teams.', icon: <Microscope size={16} />, tag: { label: 'Leadership', color: 'green' } },
    { year: '2024', title: 'Cyber Cypher Taqneeq (NMIMS) — Finalist', body: 'Competed in cybersecurity pentest and forensics track. Finished as a finalist.', icon: <Target size={16} />, tag: { label: 'Hackathon', color: 'yellow' } },
    { year: '2024', title: 'IEEE TechSafar — Finalist', body: 'Technical innovation competition. Finalist in the research category presenting intelligent systems and security data analytics.', icon: <Award size={16} />, tag: { label: 'Hackathon', color: 'yellow' } },
    { year: '2024', title: 'Organizing Team, Paradox IIT Madras', body: 'Part of the organizing team for IIT Madras\'s premier technical festival. Managed operations and participant coordination.', icon: <GraduationCap size={16} />, tag: { label: 'Leadership', color: 'green' } },
    { year: '2024', title: 'Technical Executive, IEC Committee', body: 'Helped organise Taqneeq, NMIMS\'s annual tech fest. Managed technical event logistics and on-ground execution.', icon: <Briefcase size={16} />, tag: { label: 'Leadership', color: 'green' } },
    { year: '2024', title: 'Finance Executive, MBATech Connect Cell', body: 'Managing finances, budgeting, and operations for the student body bridging management and technology disciplines.', icon: <Briefcase size={16} />, tag: { label: 'Leadership', color: 'green' } },
    { year: '2024', title: 'Editorial Executive, 4C Marketing Club', body: 'Created and curated digital content for the college\'s marketing and communication club.', icon: <MessageSquare size={16} />, tag: { label: 'Leadership', color: 'green' } },
    { year: '2024', title: 'Adappt Ideathon IETE — Participant', body: 'Pitched a tech innovation concept at the idea stage.', icon: <Star size={16} />, tag: { label: 'Hackathon', color: 'yellow' } },
    { year: '2024', title: 'Mumbai MUN — Delegate of Australia', body: 'Developed skills in research, public speaking, diplomatic negotiation, and policy argumentation.', icon: <Globe size={16} />, tag: { label: 'Leadership', color: 'green' } }
  ];

  switch (id) {


    case 'projects':
      return (
        <div className="app-pane">
          <h2><span className="typewriter-text"> ~/projects/</span></h2>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: '-10px', marginBottom: '10px', marginLeft: '4px', fontFamily: 'var(--font-jetbrains-mono), monospace', display: 'flex', alignItems: 'center', gap: '4px' }}>Swipe up <ChevronUp size={14} /></p>
          
          <div className="projects-grid" id="projectsGrid">
            <style>{`
              .projects-grid {
                display: flex;
                flex-direction: column;
                overflow-y: auto;
                overflow-x: hidden;
                scroll-snap-type: y mandatory;
                scroll-behavior: smooth;
                gap: 20vh;
                padding: 10vh 0 30vh 0;
                height: 70vh;
                width: 100%;
                -webkit-overflow-scrolling: touch;
              }
              .projects-grid::-webkit-scrollbar {
                display: none;
              }
              .projects-grid .app-card {
                flex: 0 0 auto;
                scroll-snap-align: center;
                scroll-snap-stop: always;
                margin: 0 auto;
                width: 100%;
                max-width: 800px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                background: rgba(255, 255, 255, 0.03);
                backdrop-filter: blur(12px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 24px;
                padding: 40px;
                min-height: 520px;
                transition: transform 0.3s cubic-bezier(0.2, 0.9, 0.3, 1.1), box-shadow 0.3s, border-color 0.3s;
                overflow: hidden;
                position: relative;
              }
              .projects-grid .app-card:hover {
                transform: translateY(-8px);
                box-shadow: 0 20px 40px rgba(0,0,0,0.5);
                border-color: rgba(139, 233, 253, 0.6);
              }
              .projects-grid h3 {
                font-size: 28px;
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 16px;
                font-weight: 700;
              }
              .projects-grid p {
                font-size: 16px;
                line-height: 1.6;
                margin-bottom: 24px;
                max-width: 80%;
              }
              .app-card a {
                transition: all 0.2s ease;
                font-size: 15px !important;
                padding: 10px 20px !important;
                border-radius: 8px !important;
              }
              .app-card a:hover {
                background: rgba(255, 255, 255, 0.15) !important;
                transform: scale(1.05);
              }
              @media (max-width: 768px) {
                .projects-grid .app-card {
                  padding: 24px;
                  min-height: 380px;
                }
                .projects-grid h3 { font-size: 22px; }
                .projects-grid p { max-width: 100%; }
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

          <button
              onClick={() => document.getElementById('projectsGrid')?.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                margin: '0 auto',
                marginTop: '-10vh', /* Compensate for the grid gap */
                padding: '12px 24px',
                background: 'transparent',
                border: '1px solid rgba(139, 233, 253, 0.5)',
                color: '#8be9fd',
                borderRadius: '8px',
                cursor: 'pointer',
                fontFamily: 'var(--font-jetbrains-mono), monospace',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                flexShrink: 0
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(139, 233, 253, 0.1)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'none'; }}
            >
              <ChevronUp size={16} /> Scroll to Top
          </button>
          </div>
        </div>
      );

    case 'internships':
      return (
        <div className="app-pane">
          <h2><span className="typewriter-text"> ~/internships/</span></h2>

          <div className="s-timeline-container">
            <style>{`
              .s-timeline-container {
                width: 100%;
                max-width: 900px;
                margin: 0 auto;
                padding: 40px 20px;
              }
              .s-node {
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;
                padding: 60px 40px;
                margin-top: -4px; /* overlap border edges perfectly */
              }
              .s-node::before {
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                border: 4px solid rgba(139, 233, 253, 0.4);
                z-index: 0;
                box-shadow: 0 0 10px rgba(139, 233, 253, 0.2);
              }
              
              /* ODD NODES (1st, 3rd): Path goes L->R, curves down on Right */
              .s-node:nth-child(odd)::before {
                left: 60px;
                right: 0;
                border-left: none;
                border-bottom: none;
                border-radius: 0 60px 60px 0;
              }
              .s-node:nth-child(odd) {
                justify-content: flex-start;
                padding-right: 120px; /* Space for the right curve */
              }
              
              /* EVEN NODES (2nd, 4th): Path goes R->L, curves down on Left */
              .s-node:nth-child(even)::before {
                left: 0;
                right: 60px;
                border-right: none;
                border-bottom: none;
                border-radius: 60px 0 0 60px;
              }
              .s-node:nth-child(even) {
                justify-content: flex-end;
                padding-left: 120px; /* Space for the left curve */
              }

              .s-arrow {
                position: absolute;
                top: -10px; /* Center vertically on the 4px top border */
                color: #8be9fd;
                z-index: 1;
                filter: drop-shadow(0 0 5px #8be9fd);
              }
              .s-node:nth-child(odd) .s-arrow {
                left: 50%;
                transform: translateX(-50%);
              }
              .s-node:nth-child(even) .s-arrow {
                right: 50%;
                transform: translateX(50%) rotate(180deg); /* Point left */
              }

              .s-node .app-card {
                width: 100%;
                max-width: 550px;
                margin: 0;
                z-index: 2;
                background: rgba(19, 22, 30, 0.85); /* Stronger background to cover the line slightly if it overlaps */
              }

              /* Mobile fallback */
              @media (max-width: 768px) {
                .s-node::before {
                  left: 20px;
                  right: auto;
                  border-right: none !important;
                  border-left: 4px solid rgba(139, 233, 253, 0.4) !important;
                  border-radius: 0 !important;
                }
                .s-node {
                  padding: 30px 0 30px 50px !important;
                  justify-content: flex-start !important;
                  margin-top: 0;
                }
                .s-arrow { display: none; }
              }
            `}</style>
            
            <div className="s-node">
              <div className="s-arrow"><ChevronUp size={24} style={{ transform: 'rotate(90deg)' }} /></div>
              <div className="app-card glow-hover cyan">
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '8px' }}>
                  <h3 style={{ margin: 0, fontSize: '18px' }}>Cyber Security Innovation Intern</h3>
                  <span style={{ fontSize: '12px', padding: '4px 8px', borderRadius: '12px', background: 'rgba(139, 233, 253, 0.1)', color: '#8be9fd', border: '1px solid rgba(139, 233, 253, 0.2)', whiteSpace: 'nowrap', fontFamily: 'var(--font-jetbrains-mono)' }}>Oct '25 – Jan '26</span>
                </div>
                <div className="app-meta" style={{ marginTop: 0 }}>Cyber Secured India</div>
                <p>Worked as a Cyber Security Innovation Intern, deeply involved in various research-related tasks to innovate within the cybersecurity domain.</p>
                <div style={{ marginTop: 8 }}>
                  <span className="tag cyan">Innovation</span>
                  <span className="tag">Research</span>
                  <span className="tag">Security</span>
                </div>
              </div>
            </div>

            <div className="s-node">
              <div className="s-arrow"><ChevronUp size={24} style={{ transform: 'rotate(90deg)' }} /></div>
              <div className="app-card glow-hover yellow">
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '8px' }}>
                  <h3 style={{ margin: 0, fontSize: '18px' }}>Technical Developer Intern</h3>
                  <span style={{ fontSize: '12px', padding: '4px 8px', borderRadius: '12px', background: 'rgba(241, 250, 140, 0.1)', color: '#f1fa8c', border: '1px solid rgba(241, 250, 140, 0.2)', whiteSpace: 'nowrap', fontFamily: 'var(--font-jetbrains-mono)' }}>Ongoing</span>
                </div>
                <div className="app-meta" style={{ marginTop: 0 }}>Auracle Labs</div>
                <p>Working on real-world AI and software systems, bridging research ideas with production-ready implementations.</p>
                <div style={{ marginTop: 8 }}>
                  <span className="tag yellow">Applied AI</span>
                  <span className="tag">System Integration</span>
                </div>
              </div>
            </div>

            <div className="s-node">
              <div className="s-arrow"><ChevronUp size={24} style={{ transform: 'rotate(90deg)' }} /></div>
              <div className="app-card glow-hover green">
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '8px' }}>
                  <h3 style={{ margin: 0, fontSize: '18px' }}>Cybersecurity Intern</h3>
                  <span style={{ fontSize: '12px', padding: '4px 8px', borderRadius: '12px', background: 'rgba(80, 250, 123, 0.1)', color: '#50fa7b', border: '1px solid rgba(80, 250, 123, 0.2)', whiteSpace: 'nowrap', fontFamily: 'var(--font-jetbrains-mono)' }}>Past</span>
                </div>
                <div className="app-meta" style={{ marginTop: 0 }}>WhizHack</div>
                <p>Performed vulnerability analysis using security datasets. Conducted security dataset visualisation and integrated dashboards.</p>
                <div style={{ marginTop: 8 }}>
                  <span className="tag">Python</span>
                  <span className="tag green">BurpSuite</span>
                  <span className="tag purple">SQLi</span>
                </div>
              </div>
            </div>

            <div className="s-node">
              <div className="s-arrow"><ChevronUp size={24} style={{ transform: 'rotate(90deg)' }} /></div>
              <div className="app-card glow-hover purple">
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '8px' }}>
                  <h3 style={{ margin: 0, fontSize: '18px' }}>Threat Simulation Intern</h3>
                  <span style={{ fontSize: '12px', padding: '4px 8px', borderRadius: '12px', background: 'rgba(189, 147, 249, 0.1)', color: '#bd93f9', border: '1px solid rgba(189, 147, 249, 0.2)', whiteSpace: 'nowrap', fontFamily: 'var(--font-jetbrains-mono)' }}>Past</span>
                </div>
                <div className="app-meta" style={{ marginTop: 0 }}>1Stop.ai · Threat Prism</div>
                <p>Simulated threat scenarios and analyzed attack patterns using Python. Designed RESTful APIs using Express.js and MongoDB.</p>
                <div style={{ marginTop: 8 }}>
                  <span className="tag purple">Threat Modelling</span>
                  <span className="tag">Express.js</span>
                  <span className="tag">MongoDB</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      );

    case 'academics':
      return (
        <div className="app-pane">
          <h2><span className="typewriter-text"> ~/academics/</span></h2>

          <div className="academics-grid">
            <style>{`
              .academics-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                gap: 24px;
                padding-top: 10px;
              }
              .academic-card {
                background: linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 20px;
                padding: 32px;
                position: relative;
                overflow: hidden;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
              }
              .academic-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 15px 35px rgba(0,0,0,0.4);
                border-color: rgba(255, 121, 198, 0.5);
              }
              .academic-card.cyan:hover {
                border-color: rgba(139, 233, 253, 0.5);
              }
              .academic-icon {
                width: 48px;
                height: 48px;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 20px;
                background: rgba(255, 255, 255, 0.1);
              }
              .academic-card.pink .academic-icon { color: #ff79c6; box-shadow: 0 0 20px rgba(255, 121, 198, 0.2); }
              .academic-card.cyan .academic-icon { color: #8be9fd; box-shadow: 0 0 20px rgba(139, 233, 253, 0.2); }
              .academic-card h3 {
                font-size: 22px;
                margin-bottom: 8px;
                font-weight: 700;
              }
              .academic-meta {
                color: #8be9fd;
                font-size: 14px;
                margin-bottom: 16px;
                font-family: 'JetBrains Mono', monospace;
              }
            `}</style>
            
            <div className="academic-card pink">
              <div className="academic-icon"><GraduationCap size={24} /></div>
              <h3>B.Tech Data Science + MBA (MBATech)</h3>
              <div className="academic-meta">NMIMS MPSTME · Ongoing (2021-2026)</div>
              <p style={{ color: '#c0c0c0', lineHeight: 1.6, marginBottom: 20 }}>Pursuing a 5-year integrated MBATech program specializing in Data Science at NMIMS Mukesh Patel School of Technology Management & Engineering.</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <span className="tag pink">NMIMS</span>
                <span className="tag">B.Tech</span>
                <span className="tag">MBA</span>
              </div>
            </div>

            <div className="academic-card cyan">
              <div className="academic-icon"><Award size={24} /></div>
              <h3>IIT Madras Foundation Certification</h3>
              <div className="academic-meta">IIT Madras · Programming & Data Science</div>
              <p style={{ color: '#c0c0c0', lineHeight: 1.6, marginBottom: 20 }}>Completed foundational coursework in programming, data science, and web systems through IIT Madras's online BS programme.</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <span className="tag">IIT Madras</span>
                <span className="tag cyan">BS Degree</span>
                <span className="tag">Data Science</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'skills':
      return (
        <div className="app-pane">
          <h2><span className="typewriter-text"> ~/skills/</span></h2>

          <div className="skills-bento">
            <style>{`
              .skills-bento {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 24px;
                padding-top: 20px;
              }
              .skill-category {
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 16px;
                padding: 24px;
                cursor: pointer;
                transition: all 0.3s ease;
                backdrop-filter: blur(12px);
                position: relative;
                overflow: hidden;
              }
              .skill-category:hover, .skill-category.active {
                background: rgba(255, 255, 255, 0.08);
                border-color: rgba(189, 147, 249, 0.5);
                transform: translateY(-4px);
              }
              .skill-category h3 {
                color: #bd93f9;
                font-size: 20px;
                margin-bottom: 8px;
                display: flex;
                align-items: center;
                gap: 8px;
              }
              .skills-list {
                display: flex;
                flex-wrap: wrap;
                gap: 12px;
                max-height: 0;
                opacity: 0;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
              }
              .skill-category.active .skills-list {
                max-height: 500px;
                opacity: 1;
                margin-top: 24px;
              }
              .skills-list img {
                height: 28px;
                border-radius: 4px;
                transition: transform 0.2s;
              }
              .skills-list img:hover {
                transform: scale(1.1);
              }
            `}</style>
            
            <div className={`skill-category ${activeSkill === 'ml' ? 'active' : ''}`} onClick={() => setActiveSkill(activeSkill === 'ml' ? null : 'ml')}>
              <h3><Brain size={20} /> Data Science & ML</h3>
              <p style={{ fontSize: 14, color: '#c0c0c0' }}>Python, Pandas, NumPy, SQL, Explainable AI</p>
              <div className="skills-list">
                <img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white" alt="Python" />
                <img src="https://img.shields.io/badge/Pandas-150458?logo=pandas&logoColor=white" alt="Pandas" />
                <img src="https://img.shields.io/badge/NumPy-013243?logo=numpy&logoColor=white" alt="NumPy" />
                <img src="https://img.shields.io/badge/Matplotlib-11557c?logo=plotly&logoColor=white" alt="Matplotlib" />
                <img src="https://img.shields.io/badge/SQL-003B57?logo=postgresql&logoColor=white" alt="SQL" />
                <img src="https://img.shields.io/badge/Explainable%20AI-8A2BE2?logo=ai&logoColor=white" alt="Explainable AI" />
              </div>
            </div>

            <div className={`skill-category ${activeSkill === 'dev' ? 'active' : ''}`} onClick={() => setActiveSkill(activeSkill === 'dev' ? null : 'dev')}>
              <h3><Code size={20} /> Development</h3>
              <p style={{ fontSize: 14, color: '#c0c0c0' }}>JavaScript, Node.js, Flask, FastAPI, C++</p>
              <div className="skills-list">
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

            <div className={`skill-category ${activeSkill === 'sec' ? 'active' : ''}`} onClick={() => setActiveSkill(activeSkill === 'sec' ? null : 'sec')}>
              <h3><Shield size={20} /> Cybersecurity</h3>
              <p style={{ fontSize: 14, color: '#c0c0c0' }}>Network Security, Pen Testing, SQLi, Nmap, Burp Suite</p>
              <div className="skills-list">
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
      );

    case 'experience':
      return (
        <div className="app-pane">
          <h2><span className="typewriter-text"> ~/experience/</span></h2>
          <div className="experience-grid" id="experienceGrid">
            <style>{`
              .experience-grid {
                display: flex;
                flex-direction: column;
                overflow-y: auto;
                overflow-x: hidden;
                scroll-snap-type: y mandatory;
                scroll-behavior: smooth;
                padding: 10vh 0 30vh 0;
                height: 70vh;
                width: 100%;
                -webkit-overflow-scrolling: touch;
              }
              .experience-grid::-webkit-scrollbar {
                display: none;
              }
              .experience-grid .app-card {
                flex: 0 0 auto;
                scroll-snap-align: center;
                scroll-snap-stop: always;
                margin: 0 auto;
                width: 100%;
                max-width: 800px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                background: rgba(255, 255, 255, 0.03);
                backdrop-filter: blur(12px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 24px;
                padding: 40px;
                min-height: 400px;
                transition: transform 0.3s cubic-bezier(0.2, 0.9, 0.3, 1.1), box-shadow 0.3s, border-color 0.3s;
              }
              .experience-grid .app-card:hover {
                transform: translateY(-8px);
                box-shadow: 0 20px 40px rgba(0,0,0,0.5);
                border-color: rgba(139, 233, 253, 0.6);
              }
              @media (max-width: 768px) {
                .experience-grid .app-card {
                  padding: 24px;
                  min-height: 300px;
                }
              }
            `}</style>
            {timelineData.map((t, i) => {
              const tagColors = {
                yellow: { bg: '241,250,140', text: '#f1fa8c' },
                blue: { bg: '139,233,253', text: '#8be9fd' },
                green: { bg: '80,250,123', text: '#50fa7b' },
              };
              const tagColor = t.tag ? tagColors[t.tag.color] : null;

              return (
                <React.Fragment key={i}>
                  <div className={`app-card glow-hover ${t.tag ? t.tag.color : ''}`}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', justifyContent: 'space-between', marginBottom: '24px' }}>
                      <h3 style={{ margin: 0, fontSize: '24px', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 'bold' }}>
                        <span style={{ color: '#8be9fd', display: 'flex', alignItems: 'center' }}>{t.icon}</span>
                        {t.title}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
                        <span style={{ fontSize: '16px', color: '#a0a0a0', fontFamily: 'var(--font-jetbrains-mono)' }}>{t.year}</span>
                        {t.tag && (
                          <span style={{ fontSize: '12px', padding: '4px 8px', borderRadius: '4px', background: `rgba(${tagColor.bg}, 0.2)`, color: tagColor.text, border: `1px solid rgba(${tagColor.bg}, 0.3)` }}>
                            {t.tag.label}
                          </span>
                        )}
                      </div>
                    </div>
                    <p style={{ margin: 0, color: '#c0c0c0', fontSize: '16px', lineHeight: '1.6' }}>{t.body}</p>
                  </div>

                  {i < timelineData.length - 1 && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '20vh', justifyContent: 'center', margin: '-10px 0' }}>
                       <div style={{ width: '4px', flex: 1, background: 'linear-gradient(to bottom, rgba(139, 233, 253, 0.6), rgba(80, 250, 123, 0.6))', borderRadius: '2px' }} />
                       <ChevronUp size={28} style={{ transform: 'rotate(180deg)', color: 'rgba(80, 250, 123, 0.8)', marginTop: '-8px' }} />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <button
              onClick={() => document.getElementById('experienceGrid')?.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                margin: '0 auto',
                marginTop: '-10vh', /* Compensate for the grid padding/gap */
                padding: '12px 24px',
                background: 'transparent',
                border: '1px solid rgba(139, 233, 253, 0.5)',
                color: '#8be9fd',
                borderRadius: '8px',
                cursor: 'pointer',
                fontFamily: 'var(--font-jetbrains-mono), monospace',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                flexShrink: 0
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(139, 233, 253, 0.1)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'none'; }}
            >
              <ChevronUp size={16} /> Scroll to Top
          </button>
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
            <p style={{ marginTop: '8px' }}>
              <a href="mailto:anushree1606balaji@gmail.com" className="btn-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', color: '#fff', textDecoration: 'none', fontSize: '13px' }}>
                <MessageSquare size={14} /> Send an Email
              </a>
            </p>
          </div>

          <div className="app-card glow-hover cyan">
            <h3>GitHub</h3>
            <p style={{ marginTop: '8px' }}>
              <a href="https://github.com/Anushree401" target="_blank" rel="noreferrer" className="btn-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', color: '#fff', textDecoration: 'none', fontSize: '13px' }}>
                <ExternalLink size={14} /> View GitHub
              </a>
            </p>
          </div>

          <div className="app-card glow-hover purple">
            <h3>LinkedIn</h3>
            <p style={{ marginTop: '8px' }}>
              <a href="https://www.linkedin.com/in/anushree-balaji-a71b9a255" target="_blank" rel="noreferrer" className="btn-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', color: '#fff', textDecoration: 'none', fontSize: '13px' }}>
                <ExternalLink size={14} /> Connect on LinkedIn
              </a>
            </p>
          </div>

          <div className="app-card glow-hover yellow">
            <h3>Phone</h3>
            <p style={{ marginTop: '8px', color: '#c0c0c0', fontSize: '13px' }}>
               +91 91527 92056
            </p>
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
