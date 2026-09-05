"use client";

import { Shield, Brain, Database, Terminal } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section id="about" className="space-y-16">
      <div className="flex flex-col gap-6">
        <ScrollReveal>
          <h2 className="heading-neo text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-[var(--color-text-primary)] !lowercase font-mono whitespace-nowrap">
            $&gt; <span className="text-[var(--color-accent-yellow-theme)] border-b-8 border-[var(--color-accent-yellow-theme)]">whoami</span><span className="animate-pulse text-[var(--color-accent-yellow-theme)]">_</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed border-l-4 border-[var(--color-border)] pl-6 text-[var(--color-text-primary)]">
            Creating systems that make sense is one of my passions. If it's backend development, security software, or some artificial intelligence experimentation, I love taking complicated issues and solving them through simple logic. Off the clock, I'll be napping, learning about something I don't know anything about, or playing with cats.
          </p>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ScrollReveal delay={0} className="h-full">
          <AboutCard
            icon={<Brain size={32} />}
            title="AI & ML"
            desc="Building Agentic & Generative AI workflows. Extracting insights using Python, Pandas, and SQL."
            color="cyan"
          />
        </ScrollReveal>
        <ScrollReveal delay={150} className="h-full">
          <AboutCard
            icon={<Shield size={32} />}
            title="Cybersecurity"
            desc="Network security, pentesting, vulnerability analysis, and threat simulation."
            color="pink"
          />
        </ScrollReveal>
        <ScrollReveal delay={300} className="h-full">
          <AboutCard
            icon={<Terminal size={32} />}
            title="Development"
            desc="Building robust apps with Node, Express, Flask, and React."
            color="green"
          />
        </ScrollReveal>
        <ScrollReveal delay={450} className="h-full">
          <AboutCard
            icon={<Database size={32} />}
            title="Databases"
            desc="Managing structured and unstructured data with PostgreSQL and MongoDB."
            color="orange"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}

function AboutCard({ icon, title, desc, color }: any) {
  return (
    <div className={`neo-card shadow-${color} p-8 flex flex-col gap-6 bg-[var(--color-bg-secondary)] h-full`}>
      <div className="w-16 h-16 border-4 border-[var(--color-border)] rounded-lg flex items-center justify-center bg-[var(--color-bg-primary)] shadow-[4px_4px_0px_var(--color-border)]">
        {icon}
      </div>
      <div>
        <h3 className="heading-neo text-2xl mb-4 text-[var(--color-text-primary)]">{title}</h3>
        <p className="text-[var(--color-text-secondary)] font-medium leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
