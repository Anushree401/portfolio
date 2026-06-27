import React from 'react';
import { User, Github, Linkedin, Mail, Zap, Terminal, Code, Cpu } from 'lucide-react';

export default function QuickViewWidget() {
  return (
    <div className="widget quick-view-widget">
      <div className="widget-header">
        <User size={14} className="widget-icon" />
        <span>Quick View</span>
      </div>

      <div className="quick-view-content" style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px', color: '#c8c8c8' }}>
        
        {/* Status */}
        <div className="qv-section" style={{ borderBottom: '1px solid rgba(80, 250, 123, 0.2)', paddingBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#50fa7b', display: 'inline-block', boxShadow: '0 0 8px #50fa7b' }}></span>
            <strong style={{ color: '#50fa7b', fontSize: '13px' }}>Current Status</strong>
          </div>
          <p style={{ margin: 0, fontSize: '12px', lineHeight: '1.4' }}>
            Actively building backend systems, auditing security, and seeking new internship opportunities.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="qv-section">
          <strong style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#bd93f9', fontSize: '13px', marginBottom: '8px' }}>
            <Cpu size={14} /> Core Stack
          </strong>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {['Python', 'Node.js', 'SQL', 'MongoDB', 'Docker', 'Linux'].map(tech => (
              <span key={tech} style={{ background: 'rgba(189, 147, 249, 0.15)', color: '#bd93f9', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', border: '1px solid rgba(189, 147, 249, 0.3)' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Recent Projects */}
        <div className="qv-section">
          <strong style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#8be9fd', fontSize: '13px', marginBottom: '8px' }}>
            <Terminal size={14} /> Recent Work
          </strong>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <li style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Code size={12} color="#8be9fd" /> <span>Secure Auth Service</span>
            </li>
            <li style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Code size={12} color="#8be9fd" /> <span>Real-time Chat App</span>
            </li>
          </ul>
        </div>

        {/* Contact Links */}
        <div className="qv-section" style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid rgba(80, 250, 123, 0.2)', display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <a href="https://github.com/Anushree401" target="_blank" rel="noreferrer" style={{ color: '#fff', opacity: 0.7, transition: '0.2s' }} onMouseOver={e => e.currentTarget.style.opacity = 1} onMouseOut={e => e.currentTarget.style.opacity = 0.7}>
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/anushree-balaji" target="_blank" rel="noreferrer" style={{ color: '#fff', opacity: 0.7, transition: '0.2s' }} onMouseOver={e => e.currentTarget.style.opacity = 1} onMouseOut={e => e.currentTarget.style.opacity = 0.7}>
            <Linkedin size={18} />
          </a>
          <a href="mailto:anushreebalaji04@gmail.com" style={{ color: '#fff', opacity: 0.7, transition: '0.2s' }} onMouseOver={e => e.currentTarget.style.opacity = 1} onMouseOut={e => e.currentTarget.style.opacity = 0.7}>
            <Mail size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
