import ScrollReveal from './ScrollReveal';

export default function Experience() {
  const experiences = [
    {
      date: "July 21st - Ongoing (90 Days)",
      title: "Cyber Security Intern",
      role: "Cyber Secured India",
      description: "Ongoing 90-day internship focused on advanced cybersecurity research, defense mechanisms, and simulation labs.",
      color: "yellow"
    },
    {
      date: "Oct 2025 - Jan 2026",
      title: "Cyber Security Innovation Intern",
      role: "Cyber Security and Digital Forensics UK (CSI)",
      description: "Involved in various research-related tasks to innovate within the cybersecurity domain.",
      color: "cyan"
    },
    {
      date: "Oct 1st - July 31st",
      title: "Technical Developer Intern",
      role: "Auracle Labs",
      description: "Working on real-world AI and software systems, bridging research ideas with production-ready implementations.",
      color: "orange"
    },
    {
      date: "Past",
      title: "Cybersecurity Intern",
      role: "WhizHack",
      description: "Performed vulnerability analysis using security datasets. Conducted security dataset visualisation and integrated dashboards.",
      color: "green"
    },
    {
      date: "Past",
      title: "Threat Simulation Intern",
      role: "1Stop.ai | Threat Prism",
      description: "Simulated threat scenarios and analyzed attack patterns using Python. Designed RESTful APIs using Express.js and MongoDB.",
      color: "pink"
    }
  ];

  return (
    <section id="experience" className="space-y-12">
      <ScrollReveal>
        <h2 className="heading-neo text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-[var(--color-text-primary)] !lowercase font-mono whitespace-nowrap">
          $&gt; <span className="text-[var(--color-accent-green-theme)] border-b-8 border-[var(--color-accent-green-theme)]">git log</span><span className="animate-pulse text-[var(--color-accent-green-theme)]">_</span>
        </h2>
      </ScrollReveal>
      
      <div className="relative space-y-8 pl-10 md:pl-16 mt-8">
        {/* The timeline track */}
        <div className="absolute left-4 md:left-6 top-8 bottom-8 w-1 bg-[var(--color-border)] -translate-x-1/2"></div>
        
        {experiences.map((exp, idx) => (
          <ScrollReveal key={idx} delay={idx * 150} className="relative h-full">
            {/* The timeline node */}
            <div 
              className="absolute -left-6 md:-left-10 top-8 w-5 h-5 rounded-full border-[3px] border-[var(--color-border)] z-10 -translate-x-1/2"
              style={{ backgroundColor: `var(--color-accent-${exp.color}-theme)` }}
            ></div>
            
            <div className={`neo-card shadow-${exp.color} p-6 border-4 bg-[var(--color-bg-secondary)] flex flex-col h-full`}>
              <div className="mb-4">
                <span className="neo-badge shadow-[2px_2px_0px_var(--color-shadow)] inline-block w-fit whitespace-nowrap">{exp.date}</span>
              </div>
              <div>
                <h3 className="heading-neo text-2xl mb-1 text-[var(--color-text-primary)]">{exp.title}</h3>
                <p className={`text-[var(--color-accent-${exp.color}-theme)] font-bold mb-4 uppercase tracking-wider text-sm`}>{exp.role}</p>
                <p className="text-[var(--color-text-secondary)] font-medium leading-relaxed">{exp.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
