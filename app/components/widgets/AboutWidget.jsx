const RESUME_TRACKS = [
  { id: 'cybersec', label: 'cybersecurity', cmd: 'cat resume_cybersec' },
  { id: 'fullstack', label: 'full-stack', cmd: 'cat resume_fullstack' },
  { id: 'data', label: 'data / ML', cmd: 'cat resume_data' },
]

export default function AboutWidget({ onTrack }) {
  return (
    <div className="widget widget-about">
      <div className="widget-header">
        <span className="widget-icon">👤</span>
        <span className="widget-title">ABOUT ME</span>
        <span className="widget-status">●</span>
      </div>

      <div className="widget-body">
        <div className="about-name">Anushree Balaji</div>
        <div className="about-role">Backend · Data · Security</div>
        <div className="about-blurb">
          Building secure, scalable backend systems and exploring
          cybersecurity tooling, always with a data lens.
        </div>

        <div className="about-divider" />

        <div className="about-row"><span>🎓</span><span>NMIMS MBATech · IIT Madras BS</span></div>
        <div className="about-row"><span>📊</span><span>CGPA 8.92</span></div>

        <div className="about-divider" />

        <div className="about-section-title">QUICK LINKS</div>
        <a className="about-link" href="https://github.com/Anushree401" target="_blank" rel="noreferrer">
          <span className="link-arrow">▸</span> github.com/Anushree401
        </a>
        <a className="about-link" href="https://www.linkedin.com/in/anushree-balaji-a71b9a255" target="_blank" rel="noreferrer">
          <span className="link-arrow">▸</span> LinkedIn
        </a>
        <a className="about-link" href="mailto:anushree1606balaji@gmail.com">
          <span className="link-arrow">▸</span> anushree1606balaji@gmail.com
        </a>

        <div className="about-divider" />

        <div className="about-section-title">RESUME TRACK</div>
        <div className="about-track-hint">type in terminal or open via app deck below ↓</div>
        {RESUME_TRACKS.map(t => (
          <div className="about-link terminal-cmd" key={t.id} onClick={() => onTrack?.(t.id)}>
            <span className="link-arrow">$</span> {t.cmd}
          </div>
        ))}
      </div>
    </div>
  )
}
