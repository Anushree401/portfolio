import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

export default function Projects() {
  const projects = [
    {
      title: "APK Analyzer (PAFA)",
      description: "Automated security pipeline designed for banking institutions to detect financial mobile malware using an Agentic AI warfare loop and Gemini for threat summarization.",
      tags: ["Security", "Agentic AI", "Malware Analysis"],
      color: "cyan",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com/Anushree401/apk-analyzer"
    },
    {
      title: "BrokeBank",
      description: "Full stack digital banking system simulating core processes such as account management, funds transfer, loans, fixed deposits, and role-based workflows.",
      tags: ["Full Stack", "Banking", "Simulation"],
      color: "green",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com/Anushree401/Digital-Banking-Application"
    },
    {
      title: "Wi-Fi Security Monitor",
      description: "Passive Wi-Fi security monitoring system that detects anomalous and potentially malicious behavior in enterprise wireless environments.",
      tags: ["Cybersecurity", "Network", "Monitoring"],
      color: "pink",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      title: "SpidCrawl",
      description: "A comprehensive web crawler that takes a URL, traverses all pages, and scrapes titles, links, images, and headings to generate structural reports.",
      tags: ["Python", "Web Scraping", "Crawler"],
      color: "orange",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com/Anushree401/scraper-crawler"
    },
    {
      title: "GrabMEDIA",
      description: "A powerful CLI tool built with yt-dlp, urllib, and Python threading for multi-threaded downloads of videos, audio, PDFs, and images from YouTube and direct URLs.",
      tags: ["Python", "CLI", "yt-dlp"],
      color: "yellow",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com/Anushree401/GrabMEDIA"
    },
    {
      title: "nScanner",
      description: "Hybrid network scanner for TCP scanning, reconnaissance, and vulnerability analysis featuring Gemini Generative AI summaries and a Flask dashboard.",
      tags: ["Python", "Generative AI", "Nmap"],
      color: "cyan",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com/Anushree401/nScanner"
    },
    {
      title: "Sahayak AI",
      description: "A personalized AI-powered career guidance platform for students in India leveraging Google Cloud's generative AI and Firebase to provide tailored career paths, skill recommendations, and preparation strategies.",
      tags: ["Firebase", "Agentic AI"],
      color: "green",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com/ak-kk-21/VAANGuard-Devs-Sahayak"
    },
    {
      title: "Market Trends Dashboard",
      description: "Real-time market trend analysis and anomaly detection dashboard using live API data and Plotly.",
      tags: ["Python", "Plotly", "React"],
      color: "pink",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com/Anushree401/market-dashboard"
    }
  ];

  return (
    <section id="projects" className="space-y-16">
      <ScrollReveal>
        <div className="flex justify-between items-end border-b-4 border-[var(--color-border)] pb-6">
          <h2 className="heading-neo text-3xl md:text-5xl lg:text-7xl text-[var(--color-text-primary)] !lowercase font-mono whitespace-nowrap">
            $&gt; <span className="text-[var(--color-accent-cyan-theme)] border-b-8 border-[var(--color-accent-cyan-theme)]">cd ~/projects</span><span className="animate-pulse text-[var(--color-accent-cyan-theme)]">_</span>
          </h2>
          <a href="https://github.com/Anushree401?tab=repositories" target="_blank" rel="noopener noreferrer" className="hidden md:flex neo-btn px-6 py-2 gap-2 text-sm text-[var(--color-text-primary)]">
            View All <ArrowUpRight size={16} />
          </a>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projects.map((project, idx) => (
          <ScrollReveal key={idx} delay={(idx % 2) * 150} className="h-full">
            <ProjectCard {...project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ title, description, tags, color, image, link }: any) {
  return (
    <div className={`neo-card shadow-${color} border-4 flex flex-col h-full bg-[var(--color-bg-secondary)] group`}>
      <div className="relative h-64 w-full border-b-4 border-[var(--color-border)] overflow-hidden bg-black">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-all duration-500 opacity-100 grayscale-0 xl:opacity-60 xl:grayscale xl:group-hover:opacity-100 xl:group-hover:grayscale-0"
        />
      </div>
      <div className="p-8 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag: string, i: number) => (
            <span key={i} className="neo-badge shadow-[2px_2px_0px_var(--color-shadow)]">{tag}</span>
          ))}
        </div>
        <h3 className="heading-neo text-3xl mb-4 text-[var(--color-text-primary)]">{title}</h3>
        <p className="text-[var(--color-text-secondary)] font-medium leading-relaxed mb-8 flex-1">{description}</p>
        
        {link === "#" ? (
          <div className="neo-btn w-fit px-6 py-3 flex items-center gap-2 opacity-50 cursor-not-allowed">
            Coming Soon
          </div>
        ) : (
          <a href={link} target="_blank" rel="noopener noreferrer" className="neo-btn w-fit px-6 py-3 flex items-center gap-2">
            View Source <ArrowUpRight size={18} />
          </a>
        )}
      </div>
    </div>
  );
}
