"use client";

import { useState } from 'react';
import { Sparkles, X, Briefcase, Calendar, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export interface ExperienceType {
  date: string;
  title: string;
  role: string;
  shortRole?: string;
  description: string;
  longDescription?: string;
  highlights?: string[];
  techStack?: string[];
  color: string;
  size: string;
}

export default function Experience() {
  const experiences: ExperienceType[] = [
    {
      date: "Ongoing",
      title: "Co-Founder, CEO",
      role: "Sadhyaatra",
      shortRole: "Sadhyaatra",
      description: "Building an end-to-end, AI-driven travel assistant engineered to unify India's fragmented travel ecosystem into a single cohesive network.",
      longDescription: "Architecting a multi-tenant travel orchestrator platform in India. Integrating real-time route optimization, AI itinerary planning, unified ticketing APIs, and offline itinerary caching for seamless travel experiences across diverse terrains.",
      highlights: [
        "Multi-modal travel route optimization algorithm",
        "Generative AI local guide & itinerary recommendation assistant",
        "Unified ticketing & ecosystem aggregator API integration"
      ],
      techStack: ["Next.js", "Python", "Google Cloud", "AI Agents", "REST APIs"],
      color: "pink",
      size: "large"
    },
    {
      date: "Past",
      title: "Cybersecurity Intern",
      role: "WhizHack",
      shortRole: "WhizHack",
      description: "Performed vulnerability analysis using security datasets. Conducted security dataset visualisation and integrated dashboards.",
      longDescription: "Processed high-volume network attack datasets, built interactive vulnerability dashboards, and performed CVE severity classification.",
      highlights: [
        "Vulnerability dataset visualization & dashboard building",
        "Attack log categorization & threat trend analysis"
      ],
      techStack: ["Python", "Pandas", "Matplotlib", "Cybersecurity"],
      color: "green",
      size: "small"
    },
    {
      date: "Ongoing",
      title: "Co-Founder",
      role: "Museeve",
      shortRole: "Museeve",
      description: "Co-founder of Museeve (https://museeve.beauty), a modern beauty and lifestyle startup.",
      longDescription: "Directing product design, brand architecture, digital presence, and e-commerce infrastructure for Museeve, driving product innovation and digital marketing campaigns.",
      highlights: [
        "E-commerce architecture & digital brand strategy",
        "Direct-to-consumer digital engagement pipelines",
        "Product telemetry and customer acquisition analytics"
      ],
      techStack: ["React", "Next.js", "UX Design", "E-commerce", "Analytics"],
      color: "cyan",
      size: "large"
    },
    {
      date: "July 21st - Ongoing (90 Days)",
      title: "Cyber Security Intern",
      role: "Cyber Secured India",
      shortRole: "Cyber Secured India",
      description: "Ongoing 90-day internship focused on advanced cybersecurity research, defense mechanisms, and simulation labs.",
      longDescription: "Hands-on threat hunting, network traffic monitoring, malware behavioral analysis, and enterprise defense hardening techniques.",
      highlights: [
        "Enterprise SIEM log analysis & threat detection rules",
        "Passive network sniffer & Wi-Fi intrusion mitigation",
        "Automated vulnerability auditing scripts"
      ],
      techStack: ["Wireshark", "Nmap", "Linux", "Network Security"],
      color: "yellow",
      size: "medium"
    },
    {
      date: "Past",
      title: "Threat Simulation Intern",
      role: "1Stop.ai | Threat Prism",
      shortRole: "1Stop.ai",
      description: "Simulated threat scenarios and analyzed attack patterns using Python. Designed RESTful APIs using Express.js and MongoDB.",
      longDescription: "Built automated attack simulation scripts and REST APIs for threat telemetry logging and monitoring dashboards.",
      highlights: [
        "Automated Python attack pattern simulation engine",
        "Express.js & MongoDB threat log database design"
      ],
      techStack: ["Python", "Express.js", "MongoDB", "RESTful APIs"],
      color: "purple",
      size: "small"
    },
    {
      date: "Oct '25 – June '26",
      title: "Full Stack & R&D Intern",
      role: "Auracle Labs",
      shortRole: "Auracle Labs",
      description: "Full Stack and R&D Intern at Auracle Labs contributing to the main website, LMS, CoreOS, user authentication, and fake bot account detection tools.",
      longDescription: "Contributed to building and testing the main website, LMS, and CoreOS. Implemented user login authentication systems and engineered automated tools to detect and block fake bot accounts. Researched and designed the curriculum content for an interactive cryptography course.",
      highlights: [
        "Built & tested main website, LMS, and CoreOS infrastructure",
        "Engineered user login system & automated fake bot account detection tool",
        "Researched & authored lesson plans for interactive cryptography course",
        "Discord community server setup & growth strategy execution"
      ],
      techStack: ["React", "Node.js", "Cryptography", "Bot Detection", "Full Stack"],
      color: "orange",
      size: "large"
    },
    {
      date: "Oct 2025 - Jan 2026",
      title: "Cyber Security Innovation Intern",
      role: "Cyber Security & Digital Forensics UK (CSI)",
      shortRole: "CSI UK",
      description: "Involved in various research-related tasks to innovate within the cybersecurity domain.",
      longDescription: "Researched advanced digital forensic artifact extraction, memory inspection techniques, and threat vector cataloging for UK forensic research initiatives.",
      highlights: [
        "Memory artifact extraction & RAM dumping telemetry",
        "Forensic report synthesis for advanced persistent threats",
        "Vulnerability exposure index formulation"
      ],
      techStack: ["Digital Forensics", "Volatility Framework", "Python", "YARA"],
      color: "cyan",
      size: "medium"
    }
  ];

  const [activeExp, setActiveExp] = useState<ExperienceType>(experiences[0]);
  const [modalExp, setModalExp] = useState<ExperienceType | null>(null);

  const getBubbleStyle = (color: string) => {
    switch(color) {
      case 'pink': return 'bg-[#ff79c6] text-black border-black shadow-[4px_4px_0px_#000]';
      case 'cyan': return 'bg-[#8be9fd] text-black border-black shadow-[4px_4px_0px_#000]';
      case 'orange': return 'bg-[#ffb86c] text-black border-black shadow-[4px_4px_0px_#000]';
      case 'yellow': return 'bg-[#f1fa8c] text-black border-black shadow-[4px_4px_0px_#000]';
      case 'green': return 'bg-[#50fa7b] text-black border-black shadow-[4px_4px_0px_#000]';
      case 'purple': return 'bg-[#bd93f9] text-black border-black shadow-[4px_4px_0px_#000]';
      default: return 'bg-[#8be9fd] text-black border-black shadow-[4px_4px_0px_#000]';
    }
  };

  const getBubbleSize = (size: string) => {
    switch(size) {
      case 'large': return 'w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56';
      case 'medium': return 'w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48';
      case 'small': return 'w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40';
      default: return 'w-40 h-40';
    }
  };

  return (
    <section id="experience" className="space-y-10">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-4 border-[var(--color-border)] pb-6 gap-4">
          <div>
            <h2 className="heading-neo text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-[var(--color-text-primary)] !lowercase font-mono whitespace-nowrap overflow-hidden text-ellipsis w-full mb-3">
              $&gt; <span className="text-[var(--color-accent-green-theme)] border-b-4 md:border-b-8 border-[var(--color-accent-green-theme)] inline-block pb-1">git log --roles</span><span className="animate-pulse text-[var(--color-accent-green-theme)]">_</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] font-medium text-xs md:text-sm font-mono">
              // Click any bubble to inspect role specs
            </p>
          </div>
        </div>
      </ScrollReveal>
      
      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start pt-2">
        
        {/* Packed Organic Bubble Cloud Cluster */}
        <div className="flex-1 flex flex-wrap justify-center items-center -space-x-5 -space-y-5 max-w-2xl py-6 relative">
          {experiences.map((exp, idx) => {
            const isActive = activeExp.role === exp.role;
            // Organic staggered shifts for non-linear packed cloud look
            const staggerClasses = [
              'translate-y-0 z-10',
              'translate-y-6 md:translate-y-8 z-20',
              '-translate-y-3 md:-translate-y-4 z-10',
              'translate-y-8 md:translate-y-12 z-30',
              '-translate-y-2 md:-translate-y-4 z-20',
              'translate-y-4 md:translate-y-6 z-10',
              '-translate-y-6 md:-translate-y-8 z-20'
            ];
            const offset = staggerClasses[idx % staggerClasses.length];

            return (
              <ScrollReveal key={exp.role + idx} delay={idx * 80}>
                <div 
                  onClick={() => {
                    setActiveExp(exp);
                  }}
                  className={`
                    ${getBubbleSize(exp.size)} 
                    ${getBubbleStyle(exp.color)}
                    ${offset}
                    rounded-full border-[3px] md:border-4
                    flex flex-col items-center justify-center p-4 md:p-6 text-center cursor-pointer
                    transition-all duration-300 ease-out overflow-hidden relative group shrink-0
                    ${isActive ? '!scale-110 !z-40 ring-4 ring-white ring-offset-2 ring-offset-black shadow-[10px_10px_0px_#000]' : 'scale-95 hover:scale-105 hover:z-30 opacity-95 hover:opacity-100'}
                  `}
                >
                  <h3 className={`font-mono font-black uppercase tracking-tight leading-none mb-1.5 text-center text-black ${
                    exp.size === 'large' ? 'text-base sm:text-lg md:text-xl font-black' : exp.size === 'medium' ? 'text-sm sm:text-base md:text-lg font-black' : 'text-xs sm:text-sm font-black'
                  }`}>
                    {exp.shortRole || exp.role}
                  </h3>
                  
                  <span className={`font-mono font-extrabold uppercase tracking-wider text-center leading-snug opacity-95 text-black ${
                    exp.size === 'large' ? 'text-xs sm:text-sm font-extrabold' : 'text-[10px] sm:text-xs font-bold'
                  }`}>
                    {exp.title}
                  </span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Active Role Details Preview Panel */}
        <div className="w-full lg:w-[380px] xl:w-[440px] lg:sticky lg:top-28">
           <ScrollReveal>
             <div className={`neo-card shadow-${activeExp.color} p-6 md:p-8 border-4 bg-[var(--color-bg-secondary)] transition-all duration-300`}>
                <div className="mb-4 flex flex-wrap gap-2 items-center justify-between">
                  <span className="neo-badge shadow-[2px_2px_0px_var(--color-shadow)] text-xs font-mono font-bold">{activeExp.date}</span>
                  <span 
                    className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 border border-black rounded"
                    style={{ backgroundColor: `var(--color-accent-${activeExp.color}-theme)`, color: '#000' }}
                  >
                    {activeExp.role}
                  </span>
                </div>

                <h3 className="heading-neo text-2xl md:text-3xl mb-2 text-[var(--color-text-primary)]">{activeExp.title}</h3>
                
                <p className="text-[var(--color-text-secondary)] font-medium leading-relaxed text-sm mb-6">
                  {activeExp.description}
                </p>

                {activeExp.techStack && (
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {activeExp.techStack.map((tech, i) => (
                      <span key={i} className="neo-badge text-[10px] py-0.5 px-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                
                <button
                  onClick={() => setModalExp(activeExp)}
                  className="neo-btn-primary w-full py-3 px-4 flex items-center justify-center gap-2 text-xs font-mono font-bold uppercase"
                >
                  <Sparkles size={14} /> Inspect Full Role Specs <ChevronRight size={14} />
                </button>
             </div>
           </ScrollReveal>
        </div>

      </div>

      {/* Experience Deep Dive Modal */}
      {modalExp && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setModalExp(null)}
        >
          <div 
            className={`neo-card shadow-${modalExp.color} max-w-2xl w-full max-h-[85vh] flex flex-col bg-[var(--color-bg-secondary)] border-4 overflow-hidden animate-in zoom-in-95 duration-200`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b-4 border-[var(--color-border)] flex items-center justify-between bg-[var(--color-bg-primary)]">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase size={16} className="text-[var(--color-accent-green-theme)]" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-text-secondary)]">
                    {modalExp.role} // {modalExp.date}
                  </span>
                </div>
                <h2 className="heading-neo text-2xl md:text-3xl text-[var(--color-text-primary)]">
                  {modalExp.title}
                </h2>
              </div>
              <button 
                onClick={() => setModalExp(null)}
                className="neo-btn p-2 hover:bg-[var(--color-accent-pink-theme)] hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1">
              <div>
                <p className="text-[var(--color-text-secondary)] text-base md:text-lg leading-relaxed font-medium">
                  {modalExp.longDescription || modalExp.description}
                </p>
              </div>

              {/* Deliverables / Highlights */}
              {modalExp.highlights && modalExp.highlights.length > 0 && (
                <div className="p-5 border-3 border-[var(--color-border)] rounded-xl bg-[var(--color-bg-primary)] space-y-3">
                  <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
                    Key Deliverables & Responsibilities
                  </h3>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)] font-medium">
                    {modalExp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[var(--color-accent-green-theme)] font-bold">➢</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack Tags */}
              {modalExp.techStack && (
                <div>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] mb-2">
                    Technologies & Tools Utilized
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {modalExp.techStack.map((tech, idx) => (
                      <span key={idx} className="neo-badge shadow-[2px_2px_0px_var(--color-shadow)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t-4 border-[var(--color-border)] bg-[var(--color-bg-primary)] flex justify-end">
              <button 
                onClick={() => setModalExp(null)}
                className="neo-btn px-6 py-2 text-sm font-bold text-[var(--color-text-primary)]"
              >
                Close Role Specs
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
