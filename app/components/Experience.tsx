"use client";

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Experience() {
  const experiences = [
    {
      date: "Ongoing",
      title: "Co-Founder",
      role: "Sadyaatra",
      description: "Building an end-to-end, AI-driven travel assistant engineered to unify India's fragmented travel ecosystem into a single cohesive network.",
      color: "pink",
      size: "large"
    },
    {
      date: "Ongoing",
      title: "Co-Founder",
      role: "Museeve",
      description: "Co-founder of Museeve (museeve.beauty), a modern beauty and lifestyle startup.",
      color: "cyan",
      size: "large"
    },
    {
      date: "Oct 1st - July 31st",
      title: "Technical Developer Intern",
      role: "Auracle Labs",
      description: "Working on real-world AI and software systems, bridging research ideas with production-ready implementations.",
      color: "orange",
      size: "large"
    },
    {
      date: "Oct 2025 - Jan 2026",
      title: "Cyber Security Innovation Intern",
      role: "Cyber Security and Digital Forensics UK (CSI)",
      description: "Involved in various research-related tasks to innovate within the cybersecurity domain.",
      color: "cyan",
      size: "medium"
    },
    {
      date: "July 21st - Ongoing (90 Days)",
      title: "Cyber Security Intern",
      role: "Cyber Secured India",
      description: "Ongoing 90-day internship focused on advanced cybersecurity research, defense mechanisms, and simulation labs.",
      color: "yellow",
      size: "medium"
    },
    {
      date: "Past",
      title: "Cybersecurity Intern",
      role: "WhizHack",
      description: "Performed vulnerability analysis using security datasets. Conducted security dataset visualisation and integrated dashboards.",
      color: "green",
      size: "small"
    },
    {
      date: "Past",
      title: "Threat Simulation Intern",
      role: "1Stop.ai | Threat Prism",
      description: "Simulated threat scenarios and analyzed attack patterns using Python. Designed RESTful APIs using Express.js and MongoDB.",
      color: "pink",
      size: "small"
    }
  ];

  const [activeExp, setActiveExp] = useState(experiences[0]);

  const getSizeClasses = (size: string) => {
    switch(size) {
      case 'large': return 'w-48 h-48 md:w-64 md:h-64';
      case 'medium': return 'w-40 h-40 md:w-52 md:h-52';
      case 'small': return 'w-32 h-32 md:w-40 md:h-40';
      default: return 'w-40 h-40';
    }
  };

  return (
    <section id="experience" className="space-y-12">
      <ScrollReveal>
        <h2 className="heading-neo text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-[var(--color-text-primary)] !lowercase font-mono whitespace-nowrap overflow-hidden text-ellipsis w-full">
          $&gt; <span className="text-[var(--color-accent-green-theme)] border-b-8 border-[var(--color-accent-green-theme)]">git log</span><span className="animate-pulse text-[var(--color-accent-green-theme)]">_</span>
        </h2>
      </ScrollReveal>
      
      <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start pt-8">
        
        {/* Bubble Cluster */}
        <div className="flex-1 flex flex-wrap justify-center items-center gap-6 md:gap-8 max-w-4xl relative">
          {experiences.map((exp, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div 
                onMouseEnter={() => setActiveExp(exp)}
                onClick={() => setActiveExp(exp)}
                className={`
                  ${getSizeClasses(exp.size)} 
                  rounded-full border-[4px] border-[var(--color-border)]
                  bg-[var(--color-bg-secondary)] 
                  flex flex-col items-center justify-center p-4 text-center cursor-pointer
                  transition-all duration-300 ease-out
                  hover:-translate-y-2 hover:z-20 relative
                  ${activeExp.role === exp.role ? 'ring-4 ring-offset-4 ring-[var(--color-accent-green-theme)] ring-offset-[var(--color-bg-primary)] scale-105 z-10' : 'scale-100 z-0'}
                `}
                style={{ 
                  boxShadow: activeExp.role === exp.role 
                    ? `12px 12px 0px var(--color-accent-${exp.color}-theme)`
                    : `6px 6px 0px var(--color-accent-${exp.color}-theme)`
                }}
              >
                <h3 className={`heading-neo text-[var(--color-text-primary)] leading-tight mb-2 ${exp.size === 'large' ? 'text-xl md:text-2xl' : exp.size === 'medium' ? 'text-lg md:text-xl' : 'text-base md:text-lg'}`}>
                  {exp.role}
                </h3>
                <span 
                  className={`font-bold uppercase tracking-widest ${exp.size === 'large' ? 'text-xs md:text-sm' : 'text-[10px] md:text-xs'}`} 
                  style={{ color: `var(--color-accent-${exp.color}-theme)` }}
                >
                  {exp.title}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Active Details Card */}
        <div className="w-full lg:w-[400px] xl:w-[500px] lg:sticky lg:top-32">
           <ScrollReveal>
             <div className={`neo-card shadow-${activeExp.color} p-8 border-4 bg-[var(--color-bg-secondary)] transition-all duration-300`}>
                <div className="mb-6 flex flex-wrap gap-4 items-center justify-between">
                  <span className="neo-badge shadow-[2px_2px_0px_var(--color-shadow)] inline-block w-fit whitespace-nowrap">{activeExp.date}</span>
                  <span className="text-[var(--color-text-secondary)] font-bold uppercase tracking-widest text-xs border-2 border-[var(--color-border)] px-3 py-1 rounded-full">{activeExp.size} Duration</span>
                </div>
                <h3 className="heading-neo text-3xl mb-2 text-[var(--color-text-primary)]">{activeExp.title}</h3>
                <p className="font-bold mb-6 uppercase tracking-wider text-sm" style={{ color: `var(--color-accent-${activeExp.color}-theme)` }}>{activeExp.role}</p>
                <p className="text-[var(--color-text-secondary)] font-medium leading-relaxed text-lg">{activeExp.description}</p>
             </div>
           </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
