import { useState } from 'react';
import { Check } from 'lucide-react';
import { Trophy, Rocket, Microscope, Shield, TriangleAlert, GraduationCap, Bot, Search, LineChart, Brain, Waves, Lock, MapPin, Circle, Download, Mail, Code, User, Dna, Briefcase, Zap, Target } from 'lucide-react';

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

const STACK = [
  { cat: 'Languages', items: ['Python', 'SQL (Postgres)', 'JavaScript', 'R', 'C++', 'Bash'] },
  { cat: 'Data & ML', items: ['Pandas', 'NumPy', 'scikit-learn', 'PyTorch', 'TensorFlow', 'Plotly'] },
  { cat: 'Web Stack', items: ['React', 'Node.js', 'Express.js', 'Flask', 'FastAPI', 'MongoDB', 'Next.js'] },
  { cat: 'Cybersecurity', items: ['Nmap', 'Burp Suite', 'Wireshark', 'Metasploit', 'OWASP ZAP', 'Hydra'] },
  { cat: 'Tools', items: ['Git', 'Docker', 'Firebase', 'Vercel', 'Postman', 'Linux (Kali)'] },
];

const PROJECTS = [
  { name: 'Sahayak', tag: 'AI · Hackathon Finalist', desc: 'AI teaching assistant for low-resource classrooms. Built during Google Agentic AI hackathon.', icon: <Bot size={18} /> },
  { name: 'nScanner', tag: 'Security · Web', desc: 'Full-stack network scanning suite — passive + active recon, Flask dashboard.', icon: <Search size={18} /> },
  { name: 'Market Trends Dashboard', tag: 'Data · Plotly', desc: 'Live API + forecasting + anomaly detection for real-time market insights.', icon: <LineChart size={18} /> },
  { name: 'Explainable AI Credit Scoring', tag: 'Research · XAI', desc: 'Interpretable ML models for credit risk prediction. Ongoing.', icon: <Brain size={18} /> },
  { name: 'SamudraManthan', tag: 'Research · ML', desc: 'eDNA biodiversity classification from fisheries datasets.', icon: <Waves size={18} /> },
  { name: 'Crypto-Steganography', tag: 'Research · Crypto', desc: 'Steganographer with strong encryption.', icon: <Lock size={18} /> },
];

export default function AboutApp({ onClose, onAction }) {
  const [tab, setTab] = useState('story');

  return (
    <div className="about-app">
      {/* === HERO === */}
      <div className="about-hero">
        <div className="about-avatar">
          <img src="/tools/profile.jpg" alt="Anushree Balaji" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="about-hero-text">
          <h1>Anushree Balaji</h1>
          <p className="about-tagline">
            Backend · Data · Security — building the kind of systems I'd want to audit.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div className="about-pills" style={{ marginBottom: 0 }}>
              <span className="pill"><GraduationCap size={14} /> NMIMS · IIT Madras</span>
              <span className="pill"><Circle size={10} fill="currentColor" strokeWidth={0} /> Open to opportunities</span>
            </div>
            <div className="about-cta-row">
              <button className="cta primary" onClick={() => onAction('cv')}><Download size={14} /> Download resume</button>
              <button className="cta" onClick={() => onAction('email')}><Mail size={14} /> Email me</button>
              <button className="cta ghost" onClick={() => onAction('github')}><Code size={14} /> GitHub</button>
              <button className="cta ghost" onClick={() => onAction('linkedin')}><User size={14} /> LinkedIn</button>
            </div>
          </div>
        </div>
      </div>

      {/* === TABS === */}
      <nav className="about-tabs">
        {['story', 'experience', 'projects', 'skills', 'looking-for'].map(t => (
          <button key={t}
            className={`about-tab ${tab === t ? 'active' : ''}`}
            onClick={() => setTab(t)}>
            {t === 'story' && <Dna size={16} />} {t === 'experience' && <Briefcase size={16} />} {t === 'projects' && <Rocket size={16} />}
            {t === 'skills' && <Zap size={16} />} {t === 'looking-for' && <Target size={16} />}
            <span> {t.replace('-', ' ')}</span>
          </button>
        ))}
      </nav>

      <div className="about-content">
        {/* === STORY === */}
        {tab === 'story' && (
          <div className="about-pane">
            <p className="lede">
              I'm a 2nd-year <strong>MBATech Computer Engineering</strong> student at NMIMS MPSTME and
              simultaneously pursuing a <strong>BS in Data Science</strong> from IIT Madras.
              I'm the kind of person who reads RFCs for fun and has strong opinions about database indexes.
            </p>

            <h2>What I'm about</h2>
            <p>
              I sit at the intersection of <em>backend systems</em>, <em>data</em>, and <em>cybersecurity</em>.
              My favorite work is the kind where correctness matters more than cleverness — auth flows,
              encryption, audit trails, and the boring infrastructure that keeps things safe.
            </p>
            <p>
              I started with Python for data analysis, got curious about how systems break (not just how
              they run), and ended up building tools that do both. Right now I'm deep in:
            </p>
            <ul className="focus-list">
              <li><span className="dot" /> Secure-by-default backend design (RBAC, JWT, audit logs)</li>
              <li><span className="dot" /> Machine learning that explains itself (XAI)</li>
              <li><span className="dot" /> Building tools that automate security workflows</li>
              <li><span className="dot" /> Learning Rust because someone on the internet told me to</li>
            </ul>

            <h2>Outside the screen</h2>
            <p>
              Quiet at first, intensely curious underneath, and the kind of person who keeps chasing difficult things until they make sense.
            </p>
          </div>
        )}

        {/* === EXPERIENCE === */}
        {tab === 'experience' && (
          <div className="about-pane">
            <h2>Where I've worked</h2>
            <div className="timeline">
              {TIMELINE.map((t, i) => (
                <div key={i} className="tl-item">
                  <div className="tl-year">{t.year}</div>
                  <div className="tl-line">
                    <div className="tl-dot">{t.icon}</div>
                    {i < TIMELINE.length - 1 && <div className="tl-connector" />}
                  </div>
                  <div className="tl-content">
                    <h3>{t.title}</h3>
                    <p>{t.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* === PROJECTS === */}
        {tab === 'projects' && (
          <div className="about-pane">
            <h2>Things I've built</h2>
            <div className="project-grid">
              {PROJECTS.map(p => (
                <div key={p.name} className="project-card">
                  <div className="pc-head">
                    <span className="pc-emoji">{p.icon}</span>
                    <span className="pc-tag">{p.tag}</span>
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <button className="pc-link" onClick={() => onAction('open', 'projects')}>View on desktop →</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* === SKILLS === */}
        {tab === 'skills' && (
          <div className="about-pane">
            <h2>What I work with</h2>
            <div className="skills-grid">
              {STACK.map(s => (
                <div key={s.cat} className="skill-block">
                  <div className="sb-title">{s.cat}</div>
                  <div className="sb-items">
                    {s.items.map(i => <span key={i} className="chip">{i}</span>)}
                  </div>
                </div>
              ))}
            </div>
            <p className="footnote">
              Levels vary — I'm sharpest in Python/SQL/data-stack, intermediate in security tooling
              and modern web, actively learning Rust and PyTorch.
              <span onClick={() => onAction('open', 'skills')} className="inline-link" style={{ marginLeft: 6 }}> See detailed levels →</span>
            </p>
          </div>
        )}

        {/* === LOOKING FOR === */}
        {tab === 'looking-for' && (
          <div className="about-pane">
            <h2>What I'm looking for</h2>
            <div className="looking-grid">
              <div className="looking-card good">
                <div className="lc-icon"><Check size={16} /></div>
                <h3>Excited about</h3>
                <ul>
                  <li>Backend / platform engineering internships (Summer 2026)</li>
                  <li>Security engineering / red team roles</li>
                  <li>ML engineering where interpretability matters</li>
                  <li>Research collaborations on XAI / threat detection</li>
                  <li>Open-source maintainer positions</li>
                </ul>
              </div>
              <div className="looking-card neutral">
                <div className="lc-icon">○</div>
                <h3>Open to</h3>
                <ul>
                  <li>Backend Security Engineer</li>
                  <li>Data engineering / analytics</li>
                  <li>Hackathon collaborations</li>
                  <li>Mentoring juniors in cybersec / data</li>
                </ul>
              </div>
              <div className="looking-card bad">
                <div className="lc-icon">×</div>
                <h3>Not looking for</h3>
                <ul>
                  <li>Pure frontend / design roles</li>
                  <li>Anything non-technical</li>
                  <li>"Unpaid exposure" internships</li>
                </ul>
              </div>
            </div>

            <div className="cta-banner">
              <div className="cta-banner-text">
                <strong>Like what you see?</strong>
                <span>I respond to every well-written email within 24 hours.</span>
              </div>
              <button className="cta primary" onClick={() => onAction('email')}>Send a real email →</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
