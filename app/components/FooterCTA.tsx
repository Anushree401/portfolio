import ScrollReveal from './ScrollReveal';

export default function FooterCTA() {
  return (
    <section id="contact" className="py-20 border-t-4 border-[var(--color-border)]">
      <ScrollReveal>
        <div 
          className="neo-card shadow-green p-12 md:p-20 text-black border-4 flex flex-col items-center text-center gap-8 backdrop-blur-xl"
          style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent-yellow-theme) 85%, transparent)' }}
        >
          <h2 className="heading-neo text-2xl sm:text-4xl md:text-5xl lg:text-7xl text-black !lowercase font-mono break-words leading-snug">
            $&gt; <span className="border-b-4 md:border-b-8 border-black">ping anushree.dev</span><span className="animate-pulse text-black">_</span>
          </h2>
          <p className="text-xl font-medium max-w-2xl text-black">
            I'm always open to discussing new projects, creative ideas, or opportunities in Data Science and Cybersecurity.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anushree1606balaji@gmail.com" target="_blank" rel="noopener noreferrer" className="neo-btn-primary px-8 py-4 text-xl border-4 !shadow-[6px_6px_0px_black] hover:!shadow-[8px_8px_0px_black] active:!shadow-[0px_0px_0px_black]">
              EMAIL
            </a>
            <a href="https://github.com/Anushree401" target="_blank" className="neo-btn px-8 py-4 text-xl border-4 !shadow-[6px_6px_0px_black] hover:!shadow-[8px_8px_0px_black] active:!shadow-[0px_0px_0px_black] bg-white text-black">
              GITHUB
            </a>
            <a href="https://www.linkedin.com/in/anushree-balaji-a71b9a255" target="_blank" className="neo-btn px-8 py-4 text-xl border-4 !shadow-[6px_6px_0px_black] hover:!shadow-[8px_8px_0px_black] active:!shadow-[0px_0px_0px_black] bg-[#0077b5] text-white">
              LINKEDIN
            </a>
          </div>
        </div>
      </ScrollReveal>
      
      <div className="mt-16 text-center text-sm font-bold uppercase tracking-widest text-[var(--color-text-secondary)]">
        &copy; 2026 Anushree Balaji. All rights reserved.
      </div>
    </section>
  );
}
