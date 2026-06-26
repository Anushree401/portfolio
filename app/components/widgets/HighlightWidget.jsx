import { useState } from 'react'

const HIGHLIGHTS = [
  {
    tag: '🏆 HACKATHON',
    title: 'Google Agentic AI — Finalist',
    body: 'Built Sahayak, an AI teaching assistant that helps teachers plan lessons and generate visual aids for low-resource classrooms.',
    cta: 'Read more →',
    link: '#projects',
  },
  {
    tag: '🚀 LAUNCH',
    title: 'nScanner v2 Shipped',
    body: 'Released the second iteration of my network scanning suite — passive + active recon, Flask dashboard, vulnerability reporting.',
    cta: 'See it →',
    link: '#projects',
  },
  {
    tag: '🎓 ACADEMIC',
    title: 'IIT Madras BS — Year 2',
    body: 'Continuing the dual-degree program in Data Science alongside NMIMS MBATech. CGPA: 8.92.',
    cta: 'About me →',
    link: '#about',
  },
  {
    tag: '🔬 RESEARCH',
    title: 'Food Allergens in India',
    body: 'Contributed to a research paper on evidence, regulation, and the state of current knowledge regarding food allergens.',
    cta: 'Read Paper →',
    link: 'https://www.researchgate.net/publication/404289052_Food_Allergens_in_India_Evidence_Regulation_and_the_State_of_Current_Knowledge',
  },
]

export default function HighlightWidget() {
  const [i, setI] = useState(0)
  const h = HIGHLIGHTS[i]

  return (
    <div className="widget widget-highlight">
      <div className="widget-header">
        <span className="widget-icon">⭐</span>
        <span className="widget-title">HIGHLIGHT · {new Date().getFullYear()}</span>
        <div className="highlight-dots">
          {HIGHLIGHTS.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === i ? 'active' : ''}`}
              onClick={() => setI(idx)}
            />
          ))}
        </div>
      </div>

      <div className="widget-body" key={i /* re-trigger fade animation */}>
        <div className="highlight-tag">{h.tag}</div>
        <h3 className="highlight-title">{h.title}</h3>
        <p className="highlight-body">{h.body}</p>
        <a className="highlight-cta" href={h.link}>{h.cta}</a>
      </div>
    </div>
  )
}
