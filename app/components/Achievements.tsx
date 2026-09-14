"use client";

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, Trophy, Award, Sparkles, CheckCircle2, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export interface AchievementItem {
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  institution: string;
  period: string;
  score?: string;
  category: 'cyan' | 'green' | 'pink' | 'yellow' | 'purple';
  categoryLabel: string;
  description: string;
  tags: string[];
  icon: 'education' | 'programming' | 'trophy' | 'award';
}

export default function Achievements() {
  const achievements: AchievementItem[] = [
    {
      id: "btech-mba",
      title: "B.Tech Computer Engineering + MBA",
      shortTitle: "B.TECH COMPUTER ENG. + MBA",
      subtitle: "NMIMS MPSTME",
      institution: "NMIMS MPSTME",
      period: "2021–2026",
      score: "8.92 CGPA",
      category: "cyan",
      categoryLabel: "Education / Degree",
      description: "5-Year Integrated Dual Degree (MBATech) combining Computer Engineering, Software Architecture, and Systems Engineering with Technology Management.",
      tags: ["COMPUTER ENGINEERING", "MBA", "SOFTWARE ARCHITECTURE", "SYSTEMS"],
      icon: "education"
    },
    {
      id: "iit-foundation",
      title: "IIT Madras Foundation Certification",
      shortTitle: "IIT MADRAS FOUNDATION",
      subtitle: "Programming & Data Science",
      institution: "IIT Madras",
      period: "Completed",
      score: "Foundation Level",
      category: "green",
      categoryLabel: "Programming / Data",
      description: "Foundational qualification in Python programming, discrete mathematics, data structures, statistics, and computational logic from IIT Madras.",
      tags: ["IIT MADRAS", "PYTHON", "DATA STRUCTURES", "MATHEMATICS"],
      icon: "programming"
    },
    {
      id: "iit-diploma",
      title: "IIT Madras Diploma in Programming",
      shortTitle: "IIT MADRAS DIPLOMA",
      subtitle: "Programming & Data Science",
      institution: "IIT Madras",
      period: "Completed",
      score: "Diploma Level",
      category: "green",
      categoryLabel: "Programming / Data",
      description: "Diploma coursework covering object-oriented programming, algorithmic efficiency, database management systems, and web applications development.",
      tags: ["IIT MADRAS", "DBMS", "ALGORITHMS", "OOP"],
      icon: "programming"
    },
    {
      id: "google-ai",
      title: "Google Agentic AI — Finalist",
      shortTitle: "GOOGLE AGENTIC AI",
      subtitle: "Built Sahayak AI Assistant",
      institution: "Google Cloud / Firebase",
      period: "Top 5,000 Teams",
      score: "National Finalist",
      category: "yellow",
      categoryLabel: "Recognition / AI",
      description: "Built Sahayak, a generative AI-powered career and skill guidance assistant for students. Selected as a National Finalist out of over 5,000 competing developer teams.",
      tags: ["AI", "AGENTS", "GEMINI", "EDUCATION"],
      icon: "trophy"
    },
    {
      id: "cyber-cypher",
      title: "Cyber Cypher Finalist (Taqneeq)",
      shortTitle: "CYBER CYPHER FINALIST",
      subtitle: "UI/UX & Security Track",
      institution: "Taqneeq Tech Fest",
      period: "Finalist",
      score: "UI/UX Track",
      category: "pink",
      categoryLabel: "Achievement",
      description: "Designed security-focused UI/UX workflows and dashboard interface specs, competing in the Cyber Cypher event track to finish among top finalists.",
      tags: ["CYBERSECURITY", "UI/UX DESIGN", "SECURITY DASHBOARDS"],
      icon: "award"
    },
    {
      id: "ieee-techsafar",
      title: "IEEE TechSafar — Finalist",
      shortTitle: "IEEE TECHSAFAR",
      subtitle: "Research Track (Loss Functions)",
      institution: "IEEE Student Branch",
      period: "Finalist",
      score: "Research Category",
      category: "purple",
      categoryLabel: "Research / Competition",
      description: "Presented research evaluation focusing on mathematical loss functions in deep neural network optimization, finishing as a finalist in the IEEE research track.",
      tags: ["IEEE", "DEEP LEARNING", "NEURAL LOSS FUNCTIONS", "RESEARCH"],
      icon: "award"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isCooldown = useRef(false);

  const total = achievements.length;
  const activeItem = achievements[activeIndex];

  const nextAchievement = () => {
    setActiveIndex(prev => (prev + 1) % total);
  };

  const prevAchievement = () => {
    setActiveIndex(prev => (prev - 1 + total) % total);
  };

  const touchStartX = useRef<number | null>(null);

  // Wheel / Trackpad scroll interaction capture
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      // Prevent browser full page scroll when mouse is hovering over the carousel
      e.preventDefault();

      if (isCooldown.current) return;

      if (Math.abs(e.deltaY) > 15 || Math.abs(e.deltaX) > 15) {
        isCooldown.current = true;

        if (e.deltaY > 0 || e.deltaX > 0) {
          nextAchievement();
        } else {
          prevAchievement();
        }

        setTimeout(() => {
          isCooldown.current = false;
        }, 220); // Throttle threshold for smooth natural snapping
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current === null) return;
      const touchEndX = e.changedTouches[0].clientX;
      const diffX = touchStartX.current - touchEndX;

      if (Math.abs(diffX) > 40) {
        if (diffX > 0) {
          nextAchievement();
        } else {
          prevAchievement();
        }
      }
      touchStartX.current = null;
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    el.addEventListener('touchstart', handleTouchStart, { passive: true });
    el.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      el.removeEventListener('wheel', handleWheel);
      el.removeEventListener('touchstart', handleTouchStart);
      el.removeEventListener('touchend', handleTouchEnd);
    };
  }, [total]);

  // Keyboard Arrow Left/Right Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight') nextAchievement();
      if (e.key === 'ArrowLeft') prevAchievement();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [total]);

  // Color mapping helper
  const getColorClasses = (color: string) => {
    switch(color) {
      case 'cyan': return { bg: 'bg-[#8be9fd]', text: 'text-black', border: 'border-[#00bcd4]', shadow: 'shadow-[8px_8px_0px_#00bcd4]', themeHex: '#8be9fd' };
      case 'green': return { bg: 'bg-[#50fa7b]', text: 'text-black', border: 'border-[#50fa7b]', shadow: 'shadow-[8px_8px_0px_#50fa7b]', themeHex: '#50fa7b' };
      case 'yellow': return { bg: 'bg-[#f1fa8c]', text: 'text-black', border: 'border-[#f1fa8c]', shadow: 'shadow-[8px_8px_0px_#f1fa8c]', themeHex: '#f1fa8c' };
      case 'pink': return { bg: 'bg-[#ff79c6]', text: 'text-black', border: 'border-[#ff79c6]', shadow: 'shadow-[8px_8px_0px_#ff79c6]', themeHex: '#ff79c6' };
      case 'purple': return { bg: 'bg-[#bd93f9]', text: 'text-black', border: 'border-[#bd93f9]', shadow: 'shadow-[8px_8px_0px_#bd93f9]', themeHex: '#bd93f9' };
      default: return { bg: 'bg-[#8be9fd]', text: 'text-black', border: 'border-[#8be9fd]', shadow: 'shadow-[8px_8px_0px_#8be9fd]', themeHex: '#8be9fd' };
    }
  };

  const activeColors = getColorClasses(activeItem.category);

  return (
    <section id="achievements" className="space-y-6">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-4 border-[var(--color-border)] pb-4 gap-4">
          <div>
            <h2 className="heading-neo text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-primary)] !lowercase font-mono whitespace-nowrap overflow-hidden text-ellipsis w-full mb-2">
              $&gt; <span className="text-[var(--color-accent-yellow-theme)] border-b-4 md:border-b-8 border-[var(--color-accent-yellow-theme)] inline-block pb-1">achievements --rotate</span><span className="animate-pulse text-[var(--color-accent-yellow-theme)]">_</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] font-mono text-xs md:text-sm">
              // scroll mouse wheel or swipe to explore
            </p>
          </div>

          {/* Controls & Counter */}
          <div className="flex items-center gap-4">
            <div className="font-mono text-sm font-bold border-2 border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3 py-1 text-[var(--color-text-primary)] rounded">
              0{activeIndex + 1} / 0{total}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevAchievement}
                className="neo-btn p-2 hover:bg-[var(--color-accent-yellow-theme)] hover:text-black transition-colors"
                aria-label="Previous Achievement"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextAchievement}
                className="neo-btn p-2 hover:bg-[var(--color-accent-yellow-theme)] hover:text-black transition-colors"
                aria-label="Next Achievement"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Semicircle Achievement Carousel Container */}
      <ScrollReveal delay={100}>
        <div 
          ref={containerRef}
          className="neo-card border-4 border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-4 md:p-6 lg:p-8 relative min-h-[500px] flex flex-col lg:flex-row items-center justify-between gap-6 overflow-hidden cursor-grab active:cursor-grabbing select-none"
        >
          {/* Left Side: Semicircular Node Orbiting Area */}
          <div className="relative w-full lg:w-1/2 h-[340px] sm:h-[380px] md:h-[420px] z-10 flex items-center justify-center">
            {achievements.map((item, idx) => {
              // Calculate angular position on semicircle relative to active index
              const offsetIndex = (idx - activeIndex + total) % total;
              // Map index offset to symmetric range [-floor(total/2), floor(total/2)]
              let diff = offsetIndex;
              if (diff > total / 2) diff -= total;

              const isCurrent = diff === 0;

              // Angle math: center/apex is 90 deg. Spread step is 35 deg.
              const angleDeg = 90 - (diff * 35);

              // Constrain visible range on arc
              const isVisible = angleDeg >= 10 && angleDeg <= 170;

              // Convert angle to percentage position (X: 0-100%, Y: 0-100%)
              // rx = 36% (14% to 86%), ry = 30% (top at 32%, bottom at 62%)
              const rad = (angleDeg * Math.PI) / 180;
              const posX = 50 + 36 * Math.cos(rad);
              const posY = 62 - 30 * Math.sin(rad);

              const colorProps = getColorClasses(item.category);

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  style={{
                    left: `${posX}%`,
                    top: `${posY}%`,
                    transform: 'translate(-50%, -50%)',
                    opacity: isVisible ? (isCurrent ? 1 : 0.85) : 0,
                    pointerEvents: isVisible ? 'auto' : 'none'
                  }}
                  className={`
                    absolute rounded-full border-[3px] md:border-4 cursor-pointer transition-all duration-500 ease-out
                    flex flex-col items-center justify-center p-3 text-center
                    ${colorProps.bg} ${colorProps.text} border-black
                    ${isCurrent 
                      ? 'w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 !z-30 scale-105 ring-4 ring-white ring-offset-4 ring-offset-black shadow-[10px_10px_0px_#000]' 
                      : 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 z-10 scale-90 hover:scale-100 shadow-[4px_4px_0px_#000]'
                    }
                  `}
                >
                  {isCurrent ? (
                    <div className="flex flex-col items-center justify-center px-2">
                      <span className="text-[10px] sm:text-xs font-mono font-extrabold uppercase bg-black text-white px-2 py-0.5 rounded mb-1">
                        0{idx + 1} — ACTIVE
                      </span>
                      <h3 className="font-mono font-black text-xs sm:text-sm leading-tight uppercase text-black text-center mb-0.5">
                        {item.shortTitle}
                      </h3>
                      <span className="font-mono font-bold text-[9px] sm:text-[10px] text-black opacity-90">
                        {item.subtitle}
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center px-1">
                      <span className="font-mono font-bold text-[9px] opacity-75 mb-0.5">0{idx + 1}</span>
                      <h3 className="font-mono font-black text-[9px] sm:text-[10px] leading-tight uppercase text-black text-center">
                        {item.shortTitle}
                      </h3>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Side: Integrated Active Item Detail Box */}
          <div className="w-full lg:w-1/2 z-20">
            <div className={`neo-card ${activeColors.border} border-4 bg-[var(--color-bg-primary)] p-5 md:p-7 flex flex-col gap-4 shadow-[8px_8px_0px_var(--color-border)] transition-all duration-300`}>
              
              {/* Header Bar */}
              <div className="flex items-center justify-between gap-2 border-b-2 border-[var(--color-border)] pb-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <span 
                    className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 border border-black rounded"
                    style={{ backgroundColor: activeColors.themeHex, color: '#000' }}
                  >
                    {activeItem.categoryLabel}
                  </span>
                  <span className="font-mono text-xs font-bold text-[var(--color-text-secondary)]">
                    {activeItem.institution}
                  </span>
                </div>

                <div className="neo-badge shadow-[2px_2px_0px_var(--color-shadow)] text-xs font-mono font-bold">
                  {activeItem.period} {activeItem.score && `• ${activeItem.score}`}
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="heading-neo text-xl sm:text-2xl md:text-3xl text-[var(--color-text-primary)] leading-tight mb-2">
                  {activeItem.title}
                </h3>
                <p className="text-[var(--color-text-primary)] font-medium text-xs sm:text-sm md:text-base leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              {/* Relevant Tags Footer */}
              <div className="pt-3 border-t border-dashed border-[var(--color-border)] flex items-center justify-between flex-wrap gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {activeItem.tags.map((tag, i) => (
                    <span key={i} className="neo-badge text-[10px] font-mono py-0.5 px-2">
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="text-[10px] font-mono text-[var(--color-text-secondary)] font-bold">
                  SCROLL WHEEL / SWIPE TO ROTATE ↺
                </span>
              </div>

            </div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}
