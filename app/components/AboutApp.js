import { Check } from 'lucide-react';
import { Trophy, Rocket, Microscope, Shield, TriangleAlert, GraduationCap, Bot, Search, LineChart, Brain, Waves, Lock, MapPin, Circle, Download, Mail, Code, User, Dna, Briefcase, Zap, Target } from 'lucide-react';
import Image from 'next/image';

export default function AboutApp({ onClose, onAction }) {
  return (
    <div className="about-app" style={{ display: 'flex', flexDirection: 'column', gap: '32px', paddingBottom: '60px', overflowY: 'auto', height: '100%', scrollBehavior: 'smooth', background: 'transparent' }}>
      
      {/* === HERO / QUICK VIEW === */}
      <div className="about-hero" style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', textAlign: 'center', background: 'transparent', padding: '0 20px', paddingTop: '40px' }}>
        <div style={{ position: 'relative', width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', border: '3px solid rgba(80, 250, 123, 0.6)' }}>
          <Image src="/tools/photo.jpg" alt="Anushree Balaji" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="about-hero-text" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 style={{ margin: 0, color: '#f8f8f2', fontSize: '24px', fontWeight: 'bold' }}>Anushree Balaji</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#50fa7b', display: 'inline-block', boxShadow: '0 0 8px #50fa7b' }}></span>
            <span style={{ color: '#50fa7b', fontSize: '14px' }}>Available for internships</span>
          </div>
          
          <div style={{ marginTop: '16px', height: '40px', display: 'flex', alignItems: 'center' }}>
            <img src="https://readme-typing-svg.herokuapp.com?font=JetBrains+Mono&size=16&duration=3000&pause=1000&color=c0c0c0&center=true&vCenter=true&width=500&lines=Backend+·+Data+·+Security;building+the+kind+of+systems+I'd+want+to+audit." alt="Typing SVG" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>

          <div className="about-cta-row" style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '24px', marginBottom: '32px', flexWrap: 'wrap' }}>
            <a href="/cvs/Anushree_Balaji_Resume.pdf" target="_blank" rel="noreferrer" className="cta primary" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}><Download size={14} /> Resume</a>
            <a href="mailto:anushreebalaji2004@gmail.com" className="cta" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}><Mail size={14} /> Email</a>
            <a href="https://github.com/Anushree401" target="_blank" rel="noreferrer" className="cta ghost" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}><Code size={14} /> GitHub</a>
            <a href="https://linkedin.com/in/anushree-balaji" target="_blank" rel="noreferrer" className="cta ghost" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}><User size={14} /> LinkedIn</a>
          </div>
        </div>
      </div>

      {/* === STORY BOX === */}
      <div className="about-pane" style={{ background: 'rgba(19, 22, 30, 0.6)', border: '1px solid rgba(80, 250, 123, 0.2)', padding: '24px', borderRadius: '12px', margin: '0 20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#50fa7b', margin: 0, fontSize: '18px' }}><Dna size={20} /> My Story</h2>
        
        <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExczRnbDBhZHRkYnVzdzU1ZDkzOXI4NmF6NXR5ZGtubWo2M2ppeWt6dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2i7jspnRBYgg6v4Oki/giphy.gif" alt="Hacker Banner" style={{ width: '100%', maxHeight: '160px', objectFit: 'cover', borderRadius: '12px', border: '1px solid rgba(80, 250, 123, 0.4)', alignSelf: 'center' }} />
        
        <p className="lede" style={{ color: '#f8f8f2', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
          I sit at the intersection of <strong>backend systems</strong>, <strong>data</strong>, and <strong>cybersecurity</strong>. I love building innovative, intelligent systems that merge analytics and defense, focusing on correctness over cleverness.
        </p>

        {/* QUICK LINKS MARQUEE */}
        <div className="marquee-wrapper" style={{ marginTop: '16px', marginBottom: '8px' }}>
          <div className="marquee-container">
            <div className="marquee-content quick-links">
              <button className="tag" style={{ cursor: 'pointer', fontSize: '14px', padding: '6px 16px' }} onClick={() => onAction('projects')}>~/projects</button>
              <button className="tag cyan" style={{ cursor: 'pointer', fontSize: '14px', padding: '6px 16px' }} onClick={() => onAction('internships')}>~/internships</button>
              <button className="tag green" style={{ cursor: 'pointer', fontSize: '14px', padding: '6px 16px' }} onClick={() => onAction('experience')}>~/experience</button>
              <button className="tag purple" style={{ cursor: 'pointer', fontSize: '14px', padding: '6px 16px' }} onClick={() => onAction('academics')}>~/academics</button>
              <button className="tag yellow" style={{ cursor: 'pointer', fontSize: '14px', padding: '6px 16px' }} onClick={() => onAction('publications')}>~/publications</button>
              
              {/* Duplicated for smooth infinite loop */}
              <button className="tag" style={{ cursor: 'pointer', fontSize: '14px', padding: '6px 16px' }} onClick={() => onAction('projects')}>~/projects</button>
              <button className="tag cyan" style={{ cursor: 'pointer', fontSize: '14px', padding: '6px 16px' }} onClick={() => onAction('internships')}>~/internships</button>
              <button className="tag green" style={{ cursor: 'pointer', fontSize: '14px', padding: '6px 16px' }} onClick={() => onAction('experience')}>~/experience</button>
              <button className="tag purple" style={{ cursor: 'pointer', fontSize: '14px', padding: '6px 16px' }} onClick={() => onAction('academics')}>~/academics</button>
              <button className="tag yellow" style={{ cursor: 'pointer', fontSize: '14px', padding: '6px 16px' }} onClick={() => onAction('publications')}>~/publications</button>
            </div>
          </div>
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
          align-items: center;
          gap: 16px;
          animation: marquee 20s linear infinite;
          width: max-content;
        }
        .marquee-content:hover {
          animation-play-state: paused;
        }
        .marquee-content img {
          height: 28px;
          border-radius: 4px;
        }
        .marquee-content.quick-links button {
          transition: transform 0.2s;
        }
        .marquee-content.quick-links button:hover {
          transform: scale(1.1);
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 8px)); }
        }
      `}</style>
    </div>
  );
}
