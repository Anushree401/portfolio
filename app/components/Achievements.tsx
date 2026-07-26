import { Trophy, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Achievements() {
  return (
    <section id="achievements" className="space-y-12">
      <ScrollReveal>
        <h2 className="heading-neo text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-[var(--color-text-primary)] !lowercase font-mono whitespace-nowrap overflow-hidden text-ellipsis w-full">
          $&gt; <span className="text-[var(--color-accent-yellow-theme)] border-b-8 border-[var(--color-accent-yellow-theme)]">echo $MILESTONES</span><span className="animate-pulse text-[var(--color-accent-yellow-theme)]">_</span>
        </h2>
      </ScrollReveal>
      
      <div className="relative space-y-8 pl-10 md:pl-16 mt-8">
        {/* The timeline track */}
        <div className="absolute left-4 md:left-6 top-8 bottom-8 w-1 bg-[var(--color-border)] -translate-x-1/2"></div>
        
        {/* Academics */}
        <ScrollReveal delay={0} className="relative h-full">
          <div className="absolute -left-6 md:-left-10 top-8 w-5 h-5 rounded-full border-[3px] border-[var(--color-border)] bg-[var(--color-accent-cyan-theme)] z-10 -translate-x-1/2"></div>
          <div className="neo-card shadow-cyan p-6 border-4 bg-[var(--color-bg-secondary)]">
            <h3 className="heading-neo text-2xl mb-1 text-[var(--color-text-primary)]">B.Tech Data Science + MBA</h3>
            <p className="text-[var(--color-accent-cyan-theme)] font-bold mb-4 uppercase tracking-wider text-sm">NMIMS MPSTME | 2021-2026</p>
            <p className="text-[var(--color-text-secondary)] font-medium">Pursuing a 5-year integrated MBATech program. CGPA: 8.92</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150} className="relative h-full">
          <div className="absolute -left-6 md:-left-10 top-8 w-5 h-5 rounded-full border-[3px] border-[var(--color-border)] bg-[var(--color-accent-pink-theme)] z-10 -translate-x-1/2"></div>
          <div className="neo-card shadow-pink p-6 border-4 bg-[var(--color-bg-secondary)]">
            <h3 className="heading-neo text-2xl mb-1 text-[var(--color-text-primary)]">IIT Madras Foundation Certification</h3>
            <p className="text-[var(--color-accent-pink-theme)] font-bold mb-4 uppercase tracking-wider text-sm">IIT Madras | Programming & Data Science</p>
            <p className="text-[var(--color-text-secondary)] font-medium">Completed foundational coursework through IIT Madras's online BS programme.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={225} className="relative h-full">
          <div className="absolute -left-6 md:-left-10 top-8 w-5 h-5 rounded-full border-[3px] border-[var(--color-border)] bg-[var(--color-accent-green-theme)] z-10 -translate-x-1/2"></div>
          <div className="neo-card shadow-green p-6 border-4 bg-[var(--color-bg-secondary)]">
            <h3 className="heading-neo text-2xl mb-1 text-[var(--color-text-primary)]">IIT Madras Diploma in Programming</h3>
            <p className="text-[var(--color-accent-green-theme)] font-bold mb-4 uppercase tracking-wider text-sm">IIT Madras | Programming & Data Science</p>
            <p className="text-[var(--color-text-secondary)] font-medium">Completed Diploma coursework in Programming through IIT Madras&apos;s online BS programme.</p>
          </div>
        </ScrollReveal>

        {/* Achievements */}
        <ScrollReveal delay={300} className="relative h-full">
          <div className="absolute -left-6 md:-left-10 top-8 w-5 h-5 rounded-full border-[3px] border-[var(--color-border)] bg-[var(--color-accent-yellow-theme)] z-10 -translate-x-1/2"></div>
          <div className="neo-card shadow-yellow p-6 border-4 bg-[var(--color-bg-secondary)] flex gap-6">
            <div className="hidden md:flex w-16 h-16 border-4 border-[var(--color-border)] flex-shrink-0 items-center justify-center bg-[var(--color-accent-yellow-theme)] text-black shadow-[4px_4px_0px_var(--color-border)]">
              <Trophy size={28} />
            </div>
            <div>
              <h3 className="heading-neo text-2xl mb-1 text-[var(--color-text-primary)]">Finalist: Google Agentic AI</h3>
              <p className="text-[var(--color-text-secondary)] font-medium">Built Sahayak, an AI teaching assistant. Reached finals out of ~5,000 teams.</p>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={450} className="relative h-full">
          <div className="absolute -left-6 md:-left-10 top-8 w-5 h-5 rounded-full border-[3px] border-[var(--color-border)] bg-[var(--color-accent-orange-theme)] z-10 -translate-x-1/2"></div>
          <div className="neo-card shadow-orange p-6 border-4 bg-[var(--color-bg-secondary)] flex gap-6">
            <div className="hidden md:flex w-16 h-16 border-4 border-[var(--color-border)] flex-shrink-0 items-center justify-center bg-[var(--color-accent-orange-theme)] text-black shadow-[4px_4px_0px_var(--color-border)]">
              <Award size={28} />
            </div>
            <div>
              <h3 className="heading-neo text-2xl mb-1 text-[var(--color-text-primary)]">Finalist: Cyber Cypher (Taqneeq)</h3>
              <p className="text-[var(--color-text-secondary)] font-medium">Competed in a UI/UX design track and finished as a finalist.</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={600} className="relative h-full">
          <div className="absolute -left-6 md:-left-10 top-8 w-5 h-5 rounded-full border-[3px] border-[var(--color-border)] bg-[var(--color-accent-green-theme)] z-10 -translate-x-1/2"></div>
          <div className="neo-card shadow-green p-6 border-4 bg-[var(--color-bg-secondary)] flex gap-6">
            <div className="hidden md:flex w-16 h-16 border-4 border-[var(--color-border)] flex-shrink-0 items-center justify-center bg-[var(--color-accent-green-theme)] text-black shadow-[4px_4px_0px_var(--color-border)]">
              <Award size={28} />
            </div>
            <div>
              <h3 className="heading-neo text-2xl mb-1 text-[var(--color-text-primary)]">Finalist: IEEE TechSafar</h3>
              <p className="text-[var(--color-text-secondary)] font-medium">Finalist in the research category presenting research on loss functions.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
