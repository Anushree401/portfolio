import ScrollReveal from './ScrollReveal';

export default function Leadership() {
  const leaderships = [
    {
      date: "Ongoing",
      title: "Subhead, Cybersecurity",
      role: "Google Developer Group",
      description: "",
      color: "yellow"
    },
    {
      date: "Ongoing",
      title: "Co-founder & Admin",
      role: "CyphersNova Community",
      description: "",
      color: "cyan"
    },
    {
      date: "Ongoing",
      title: "Subhead, R&D",
      role: "IEEE Research Committee",
      description: "",
      color: "pink"
    },
    {
      date: "Ongoing",
      title: "Finance Executive",
      role: "MBATech Connect Cell",
      description: "",
      color: "green"
    },
    {
      date: "Aug '24 - May '25",
      title: "Technical Executive",
      role: "IEC Committee",
      description: "",
      color: "orange"
    },
    {
      date: "Aug '24 - Apr '25",
      title: "Editorial Executive",
      role: "4C Marketing Club",
      description: "",
      color: "cyan"
    },
    {
      date: "Volunteer",
      title: "Organizing Team",
      role: "Paradox (IIT Madras)",
      description: "",
      color: "pink"
    }
  ];

  return (
    <section id="leadership" className="space-y-12">
      <ScrollReveal>
        <h2 className="heading-neo text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl text-[var(--color-text-primary)] !lowercase font-mono whitespace-nowrap overflow-hidden text-ellipsis w-full">
          $&gt; <span className="text-[var(--color-accent-pink-theme)] border-b-8 border-[var(--color-accent-pink-theme)]">id -Gn</span><span className="animate-pulse text-[var(--color-accent-pink-theme)]">_</span>
        </h2>
      </ScrollReveal>
      
      <div className="relative space-y-8 pl-10 md:pl-16 mt-8">
        {/* The timeline track */}
        <div className="absolute left-4 md:left-6 top-8 bottom-8 w-1 bg-[var(--color-border)] -translate-x-1/2"></div>
        
        {leaderships.map((item, idx) => (
          <ScrollReveal key={idx} delay={idx * 150} className="relative h-full">
            {/* The timeline node */}
            <div 
              className="absolute -left-6 md:-left-10 top-8 w-5 h-5 rounded-full border-[3px] border-[var(--color-border)] z-10 -translate-x-1/2"
              style={{ backgroundColor: `var(--color-accent-${item.color}-theme)` }}
            ></div>
            
            <div className={`neo-card shadow-${item.color} p-6 border-4 bg-[var(--color-bg-secondary)] flex flex-col`}>
              <div className="mb-4">
                <span className="neo-badge shadow-[2px_2px_0px_var(--color-shadow)] inline-block w-fit whitespace-nowrap">{item.date}</span>
              </div>
              <div>
                <h3 className="heading-neo text-2xl mb-1 text-[var(--color-text-primary)]">{item.title}</h3>
                <p className={`font-bold uppercase tracking-wider text-sm ${item.description ? 'mb-4' : ''}`} style={{ color: `var(--color-accent-${item.color}-theme)` }}>{item.role}</p>
                {item.description && <p className="text-[var(--color-text-secondary)] font-medium leading-relaxed">{item.description}</p>}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
