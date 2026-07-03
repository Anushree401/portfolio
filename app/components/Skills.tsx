import ScrollReveal from './ScrollReveal';

export default function Skills() {
  return (
    <section id="skills" className="space-y-16">
      <ScrollReveal>
        <h2 className="heading-neo text-2xl sm:text-4xl md:text-5xl lg:text-7xl text-[var(--color-text-primary)] !lowercase font-mono whitespace-nowrap">
          $&gt; <span className="text-[var(--color-accent-pink-theme)] border-b-8 border-[var(--color-accent-pink-theme)]">ls tech/</span><span className="animate-pulse text-[var(--color-accent-pink-theme)]">_</span>
        </h2>
      </ScrollReveal>
      
      <div className="space-y-12">
        <ScrollReveal delay={0}>
          <SkillCategory title="AI & ML" color="cyan" skills={['scikit-learn', 'PyTorch', 'NumPy', 'Pandas', 'Matplotlib', 'Plotly', 'TextBlob', 'SHAP', 'LIME', 'Google AI Studio', 'Gemini API', 'Prompt Engineering', 'RAG', 'Function Calling', 'Structured Outputs']} />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <SkillCategory title="CYBERSECURITY" color="green" skills={['Kali Linux', 'Burp Suite', 'Nmap', 'Wireshark', 'Metasploit', 'sqlmap', 'Hydra', 'Hashcat', 'John the Ripper', 'Nikto', 'theHarvester', 'Sublist3r', 'DirBuster', 'Wfuzz', 'Scapy', 'Snort', 'tcpdump', 'Netdiscover', 'CeWL', 'DVWA', 'ExploitDB', 'msfconsole', 'msfvenom', 'OpenSSH', 'nslookup', 'netstat']} />
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <SkillCategory title="DEV & DEVOPS" color="orange" skills={['FastAPI', 'Flask', 'Express.js', 'REST APIs', 'SQLAlchemy', 'Alembic', 'Firebase Admin SDK', 'JWT Authentication', 'OAuth 2.0', 'Google OAuth', 'GitHub OAuth', 'Git', 'GitHub', 'Docker', 'Docker Compose', 'Postman', 'Pytest', 'WSL', 'VirtualBox', 'VMware']} />
        </ScrollReveal>
        <ScrollReveal delay={450}>
          <SkillCategory title="DATABASES" color="pink" skills={['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB Atlas', 'Firestore', 'Supabase', 'Redis', 'Celery']} />
        </ScrollReveal>
      </div>
    </section>
  );
}

function SkillCategory({ title, skills, color }: { title: string, skills: string[], color: string }) {
  return (
    <div className={`neo-card shadow-${color} p-8 lg:p-12 border-4`}>
      <h3 className="heading-neo text-2xl mb-8 flex items-center gap-4 text-[var(--color-text-primary)]">
        <span 
          className="w-4 h-4 border-2 border-[var(--color-border)] flex-shrink-0"
          style={{ backgroundColor: `var(--color-accent-${color}-theme)` }}
        ></span>
        {title}
      </h3>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, i) => (
          <div key={i} className="neo-badge text-sm py-2 px-4 shadow-[3px_3px_0px_var(--color-shadow)] hover:-translate-y-1 hover:shadow-[4px_5px_0px_var(--color-shadow)] transition-all cursor-default">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
