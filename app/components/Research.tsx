"use client";

import { useState } from 'react';
import { BookOpen, FileText, Activity, ArrowUpRight, CheckCircle2, Clock, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

export default function Research() {
  const papers = [
    {
      id: "01",
      title: "Food Allergens in India: Evidence, Regulation, and the State of Current Knowledge",
      shortTitle: "Food Allergens in India",
      domain: "Public Health & Regulation",
      description: "Contributor to this published research exploring the regulatory landscape, lab testing standards, and current scientific evidence regarding food allergens across India.",
      highlights: [
        "Analyzed national food safety regulatory frameworks (FSSAI) & allergen labeling standards",
        "Evaluated clinical data on allergen prevalence in Indian dietary demographics",
        "Co-authored comprehensive review paper published on ResearchGate"
      ],
      status: "Published",
      color: "green",
      icon: <BookOpen size={22} />,
      link: "https://www.researchgate.net/publication/404289052_Food_Allergens_in_India_Evidence_Regulation_and_the_State_of_Current_Knowledge"
    },
    {
      id: "02",
      title: "Post-Quantum Crypto Steganography",
      shortTitle: "Post-Quantum Crypto Steganography",
      domain: "Cybersecurity & Cryptography",
      description: "Researching advanced techniques to embed encrypted payloads within digital cover media using lattice-based and quantum-resistant cryptographic primitives.",
      highlights: [
        "Investigating lattice-based crypto primitives for covert steganographic channels",
        "Formulating resistance models against quantum-assisted steganalysis algorithms",
        "Developing proof-of-concept Python injection & extraction routines"
      ],
      status: "Ongoing",
      color: "cyan",
      icon: <FileText size={22} />
    },
    {
      id: "03",
      title: "Empirical Analysis of Tata Group (Retail Domain)",
      shortTitle: "Empirical Analysis of Tata Group",
      domain: "Enterprise Data & Analytics",
      description: "Conducting an in-depth empirical analysis evaluating market strategies, supply chain efficiency, and financial growth performance across Tata Group's retail ecosystem.",
      highlights: [
        "Aggregated multi-year retail sector performance metrics & market data",
        "Performed statistical trend analysis and competitive benchmarking models",
        "Formulated data-driven strategic insights for enterprise digital transformation"
      ],
      status: "Ongoing",
      color: "pink",
      icon: <Activity size={22} />
    }
  ];

  const [activePaperIdx, setActivePaperIdx] = useState(0);
  const activePaper = papers[activePaperIdx];

  return (
    <section id="research" className="space-y-10">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-4 border-[var(--color-border)] pb-6 gap-4">
          <div>
            <h2 className="heading-neo text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-[var(--color-text-primary)] !lowercase font-mono whitespace-nowrap mb-3">
              $&gt; <span className="text-[var(--color-accent-orange-theme)] border-b-4 md:border-b-8 border-[var(--color-accent-orange-theme)] inline-block pb-1">cat research.md</span><span className="animate-pulse text-[var(--color-accent-orange-theme)]">_</span>
            </h2>
          </div>
        </div>
      </ScrollReveal>

      {/* Interactive Research Explorer Split View */}
      <ScrollReveal delay={150}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-text-secondary)] px-1">
              // SELECT RESEARCH PAPER ({papers.length})
            </div>

            {papers.map((paper, idx) => {
              const isSelected = activePaperIdx === idx;
              return (
                <button
                  key={paper.id}
                  onClick={() => setActivePaperIdx(idx)}
                  className={`neo-card p-5 border-4 text-left transition-all duration-200 cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? `bg-[var(--color-bg-secondary)] border-[var(--color-border)] shadow-[6px_6px_0px_var(--color-accent-${paper.color}-theme)] -translate-y-1`
                      : 'bg-[var(--color-bg-primary)] opacity-80 hover:opacity-100 hover:bg-[var(--color-bg-secondary)] shadow-[3px_3px_0px_var(--color-border)]'
                  }`}
                >
                  <div 
                    className="w-10 h-10 border-2 border-[var(--color-border)] flex-shrink-0 flex items-center justify-center font-mono font-bold text-sm text-black shadow-[2px_2px_0px_var(--color-border)]"
                    style={{ backgroundColor: `var(--color-accent-${paper.color}-theme)` }}
                  >
                    {paper.id}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-mono text-[11px] font-bold text-[var(--color-text-secondary)] uppercase truncate">
                        {paper.domain}
                      </span>
                      <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 border border-black rounded ${
                        paper.status === 'Published' ? 'bg-[#50fa7b] text-black' : 'bg-[#ffb86c] text-black'
                      }`}>
                        {paper.status}
                      </span>
                    </div>

                    <h3 className="heading-neo text-lg text-[var(--color-text-primary)] leading-tight truncate">
                      {paper.shortTitle}
                    </h3>
                  </div>

                  <ChevronRight 
                    size={18} 
                    className={`self-center transition-transform ${isSelected ? 'translate-x-1 text-[var(--color-accent-yellow-theme)]' : 'text-[var(--color-text-secondary)]'}`} 
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Document Reader Box */}
          <div className="lg:col-span-7">
            <div className={`neo-card shadow-${activePaper.color} border-4 bg-[var(--color-bg-secondary)] p-6 md:p-8 flex flex-col justify-between min-h-[440px]`}>
              
              {/* Window Bar */}
              <div>
                <div className="flex items-center justify-between border-b-2 border-[var(--color-border)] pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500 border border-black inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500 border border-black inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500 border border-black inline-block"></span>
                    <span className="font-mono text-xs font-bold text-[var(--color-text-secondary)] ml-2">
                      paper_{activePaper.id}.md
                    </span>
                  </div>

                  <span className={`neo-badge text-xs font-mono font-bold uppercase ${
                    activePaper.status === 'Published' ? 'bg-[#50fa7b] text-black' : 'bg-[#ffb86c] text-black'
                  }`}>
                    {activePaper.status === 'Published' ? <CheckCircle2 size={12} className="inline mr-1" /> : <Clock size={12} className="inline mr-1" />}
                    {activePaper.status}
                  </span>
                </div>

                {/* Paper Title & Domain */}
                <div className="mb-6">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-accent-pink-theme)] mb-1 block">
                    // DOMAIN: {activePaper.domain}
                  </span>
                  <h3 className="heading-neo text-2xl md:text-3xl text-[var(--color-text-primary)] leading-tight flex items-start gap-3">
                    <span 
                      className="p-2 border-2 border-[var(--color-border)] text-black shrink-0 shadow-[2px_2px_0px_var(--color-border)] mt-1"
                      style={{ backgroundColor: `var(--color-accent-${activePaper.color}-theme)` }}
                    >
                      {activePaper.icon}
                    </span>
                    <span>{activePaper.title}</span>
                  </h3>
                </div>

                {/* Description Paragraph */}
                <p className="text-[var(--color-text-primary)] font-medium text-sm md:text-base leading-relaxed mb-6">
                  {activePaper.description}
                </p>

                {/* Key Research Highlights */}
                <div className="p-4 rounded border-2 border-[var(--color-border)] bg-[var(--color-bg-primary)] mb-8 space-y-2">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-text-secondary)] mb-2">
                    // RESEARCH HIGHLIGHTS & SCOPE
                  </p>
                  {activePaper.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs md:text-sm text-[var(--color-text-primary)] font-medium">
                      <span className="text-[var(--color-accent-yellow-theme)] font-bold">➢</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button Footer */}
              <div className="pt-4 border-t-2 border-[var(--color-border)] flex items-center justify-end">
                {activePaper.link ? (
                  <Link 
                    href={activePaper.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="neo-btn-primary py-3 px-6 text-xs font-mono font-bold uppercase flex items-center gap-3 bg-[var(--color-primary)] text-black hover:scale-105 transition-transform"
                  >
                    <span>Read Paper on ResearchGate</span>
                    <ArrowUpRight size={16} />
                  </Link>
                ) : (
                  <span className="neo-badge text-xs font-mono text-[var(--color-text-secondary)] border-2 border-[var(--color-border)] px-4 py-2">
                    // ACTIVE LAB RESEARCH — PUBLICATION PENDING
                  </span>
                )}
              </div>

            </div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}
