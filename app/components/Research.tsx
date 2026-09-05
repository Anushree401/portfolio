"use client";

import { BookOpen, FileText, Activity } from 'lucide-react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Research() {
  const papers = [
    {
      title: "Food Allergens in India: Evidence, Regulation, and the State of Current Knowledge",
      description: "Contributor to this research exploring the regulatory landscape and current evidence regarding food allergens in India.",
      status: "Published",
      color: "green",
      icon: <BookOpen size={24} />,
      link: "https://www.researchgate.net/publication/404289052_Food_Allergens_in_India_Evidence_Regulation_and_the_State_of_Current_Knowledge"
    },
    {
      title: "Post-Quantum Crypto Steganography",
      description: "Researching methods to strengthen crypto steganography systems against future threats, with a specific focus on post-quantum cryptographic methods.",
      status: "Ongoing",
      color: "cyan",
      icon: <FileText size={24} />
    },
    {
      title: "Empirical Analysis of Tata Group (Retail Domain)",
      description: "Conducting an in-depth empirical analysis focusing on the market strategies and performance of the Tata Group within the retail sector.",
      status: "Ongoing",
      color: "pink",
      icon: <Activity size={24} />
    }
  ];

  return (
    <section id="research" className="space-y-12">
      <ScrollReveal>
        <h2 className="heading-neo text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-[var(--color-text-primary)] !lowercase font-mono whitespace-nowrap">
          $&gt; <span className="text-[var(--color-accent-orange-theme)] border-b-8 border-[var(--color-accent-orange-theme)]">cat research.md</span><span className="animate-pulse text-[var(--color-accent-orange-theme)]">_</span>
        </h2>
      </ScrollReveal>
      
      <div className="grid grid-cols-1 pb-8 relative">
        {/* Invisible spacers to establish exact natural row heights */}
        {papers.map((paper, idx) => (
          <div 
            key={`spacer-${idx}`} 
            className="opacity-0 pointer-events-none mb-12"
            style={{ gridRowStart: idx + 1, gridColumnStart: 1 }}
          >
            <div className={`neo-card p-6 md:p-8 border-4 flex flex-col md:flex-row gap-6 items-start h-full`}>
              <div className="w-14 h-14 border-2 flex-shrink-0 hidden md:flex"></div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="heading-neo text-2xl leading-tight">{paper.title}</h3>
                </div>
                <span className="inline-block mb-4 neo-badge">{paper.status}</span>
                <p className="font-medium leading-relaxed mb-6">{paper.description}</p>
                {paper.link && <div className="neo-btn px-5 py-2">Read Paper</div>}
              </div>
            </div>
          </div>
        ))}

        {/* The actual sticky wrappers */}
        {papers.map((paper, idx) => (
          <div 
            key={`sticky-${idx}`}
            style={{ 
              gridRowStart: idx + 1,
              gridRowEnd: papers.length + 2, // All wrappers end at the exact same bottom boundary
              gridColumnStart: 1,
              zIndex: idx 
            }}
          >
            <div 
              className="sticky transition-all duration-300"
              style={{ 
                top: `calc(6rem + ${idx * 4}rem)`
              }}
            >
              <div className={`neo-card shadow-${paper.color} p-6 md:p-8 border-4 flex flex-col md:flex-row gap-6 items-start h-full bg-[var(--color-bg-secondary)]`}>
                <div 
                  className="w-14 h-14 border-2 border-[var(--color-border)] flex-shrink-0 items-center justify-center text-black shadow-[3px_3px_0px_var(--color-shadow)] hidden md:flex"
                  style={{ backgroundColor: `var(--color-accent-${paper.color}-theme)` }}
                >
                  {paper.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="heading-neo text-2xl text-[var(--color-text-primary)] leading-tight">{paper.title}</h3>
                  </div>
                  <span className={`inline-block mb-4 neo-badge shadow-[2px_2px_0px_var(--color-shadow)] ${paper.status === 'Published' ? 'bg-[#50fa7b] text-black' : 'bg-[#ffb86c] text-black'}`}>
                    {paper.status}
                  </span>
                  <p className="text-[var(--color-text-secondary)] font-medium leading-relaxed mb-6">
                    {paper.description}
                  </p>
                  
                  {paper.link && (
                    <Link href={paper.link} target="_blank" className="neo-btn w-fit px-5 py-2 flex items-center gap-2 text-sm bg-[var(--color-bg-primary)]">
                      Read Paper <ArrowUpRight size={16} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
