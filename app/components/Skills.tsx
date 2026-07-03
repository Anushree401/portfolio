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
          <SkillCategory title="AI & ML" color="cyan" skills={['scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'Plotly', 'PyTorch', 'TextBlob', 'Google AI Studio', 'Gemini API', 'OpenAI API', 'MCP', 'Function Calling', 'Prompt Engineering', 'RAG', 'Structured Outputs']} />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <SkillCategory title="CYBERSECURITY" color="green" skills={['Nmap', 'Burp Suite', 'Hydra', 'Nikto', 'theHarvester', 'Wireshark', 'John the Ripper', 'dirbuster', 'zphisher', 'hashcat', 'sublist3r', 'snort', 'msfconsole', 'msfvenom', 'tcpdump', 'exploitdb', 'dvwa', 'netdiscover', 'openssh', 'nslookup', 'netstat', 'sqlmap', 'cewl', 'scapy', 'wfuzz', 'Metasploit', 'OWASP Top 10', 'Kali Linux']} />
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <SkillCategory title="DEV & DEVOPS" color="orange" skills={['SQLAlchemy', 'Alembic', 'Firebase Admin SDK', 'JWT Authentication', 'OAuth 2.0 (Google Sign-In)', 'Github Signin', 'Git', 'GitHub', 'Docker', 'Docker Compose', 'WSL', 'VirtualBox', 'VMware', 'PostgreSQL', 'MongoDB Atlas', 'Supabase', 'Firebase', 'Pytest', 'Postman', 'FastAPI', 'Flask', 'Express.js', 'REST APIs', 'ORM Design', 'Database Testing', 'API Testing', 'Environment Variables (.env)', 'Backend Configuration', 'Database Migrations', 'Dependency Management (pip, requirements.txt)']} />
        </ScrollReveal>
        <ScrollReveal delay={450}>
          <SkillCategory title="DATABASES" color="pink" skills={['PostgreSQL', 'MySQL', 'SQLite', 'Firestore', 'MongoDB Atlas', 'Supabase', 'Redis', 'Celery']} />
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
