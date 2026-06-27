import { User, Circle, GraduationCap, BarChart, ChevronRight, Terminal } from 'lucide-react';

const RESUME_TRACKS = [
  { id: 'cybersec', label: 'cybersecurity', cmd: 'cat resume_cybersec' },
  { id: 'fullstack', label: 'full-stack', cmd: 'cat resume_fullstack' },
  { id: 'data', label: 'data / ML', cmd: 'cat resume_data' },
]

export default function AboutWidget({ onTrack }) {
  return (
    <div className="widget widget-about">
      <div className="widget-header">
        <span className="widget-icon" style={{display: "flex", alignItems: "center"}}><User size={14} /></span>
        <span className="widget-title">ABOUT ME</span>
        <span className="widget-status" style={{display: "flex", alignItems: "center", color: "#50fa7b"}}><Circle size={10} fill="currentColor" strokeWidth={0} /></span>
      </div>

      <div className="widget-body">
        <div className="about-name">Anushree Balaji</div>
        <div className="about-role">Backend · Data · Security</div>
        <div className="about-blurb">
          Building secure, scalable backend systems and exploring
          cybersecurity tooling, always with a data lens.
        </div>

        <div className="about-divider" />

        <div className="about-row" style={{ justifyContent: 'flex-start', gap: '8px' }}><span style={{display: "flex", alignItems: "center"}}><GraduationCap size={14} /></span><span>NMIMS MBATech · IIT Madras BS</span></div>
        <div className="about-row" style={{ justifyContent: 'flex-start', gap: '8px' }}><span style={{display: "flex", alignItems: "center"}}><BarChart size={14} /></span><span>CGPA 8.92</span></div>

        <div className="about-divider" />

        <div className="about-section-title">QUICK LINKS</div>
        <a className="about-link" href="https://github.com/Anushree401" target="_blank" rel="noreferrer">
          <span className="link-arrow" style={{display: "inline-flex", alignItems: "center", marginRight: 4}}><ChevronRight size={14} /></span> github.com/Anushree401
        </a>
        <a className="about-link" href="https://www.linkedin.com/in/anushree-balaji-a71b9a255" target="_blank" rel="noreferrer">
          <span className="link-arrow" style={{display: "inline-flex", alignItems: "center", marginRight: 4}}><ChevronRight size={14} /></span> LinkedIn
        </a>
        <a className="about-link" href="mailto:anushree1606balaji@gmail.com">
          <span className="link-arrow" style={{display: "inline-flex", alignItems: "center", marginRight: 4}}><ChevronRight size={14} /></span> anushree1606balaji@gmail.com
        </a>

        <div className="about-divider" />

        <div className="about-section-title">RESUME TRACK</div>
        <div className="about-track-hint">type in terminal or open via app deck below ↓</div>
        {RESUME_TRACKS.map(t => (
          <div className="about-link terminal-cmd" key={t.id} onClick={() => onTrack?.(t.id)}>
            <span className="link-arrow" style={{display: "inline-flex", alignItems: "center", marginRight: 4}}><Terminal size={12} /></span> {t.cmd}
          </div>
        ))}
      </div>
    </div>
  )
}
