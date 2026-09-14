"use client";

import { useState, useRef } from 'react';
import { ArrowUpRight, Sparkles, Filter, Maximize2, ChevronLeft, ChevronRight, Layers, LayoutGrid } from 'lucide-react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import ProjectModal, { ProjectType } from './ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [viewMode, setViewMode] = useState<'flashcard' | 'grid'>('flashcard');
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollDeck = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -460 : 460;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const projects: ProjectType[] = [
    {
      title: "Android Process, Permission, and Vulnerability Manager (APVM)",
      description: "Centralized Android cybersecurity application for monitoring application processes, auditing permissions, and identifying security vulnerabilities via static APK analysis.",
      longDescription: "APVM is an end-to-end security suite designed for mobile security auditors and Android developers. It performs deep static byte-code analysis of Android applications (APKs), inspects declared vs requested runtime permissions, decompiles manifest entry points, and flags known CVEs and unsafe API calls in real-time.",
      highlights: [
        "Static APK parsing & smali bytecode vulnerability scanning",
        "Automated permission risk scoring engine",
        "Process telemetry & runtime behavior logging"
      ],
      tags: ["Android Security", "Static Analysis", "Kotlin", "Python"],
      color: "cyan",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com/Anushree401/apk-analyzer",
      category: "Cybersecurity",
      cloneCmd: "git clone https://github.com/Anushree401/apk-analyzer.git"
    },
    {
      title: "AI Malware Analysis & Simulation Platform",
      description: "Automated SOC triage platform replacing manual analysis with an explainable, multi-agent AI workflow. Fuses static analysis, AI vision (binary-to-image), and dynamic behavioral sandbox telemetry.",
      longDescription: "This platform transforms binary malware triage by converting executable binaries into grayscale byte images and analyzing them using vision transformers and convolutional neural networks alongside multi-agent LLM analysis to deliver human-understandable threat intelligence reports.",
      highlights: [
        "Binary-to-Image visualization & deep neural classification",
        "Multi-agent LLM SOC analyst reasoning pipeline",
        "Dynamic sandbox telemetry ingestion & automated YARA generation"
      ],
      tags: ["Malware Analysis", "Explainable AI", "Multi-Agent Systems"],
      color: "purple",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com/Anushree401/ai-image-malware",
      category: "AI & ML",
      cloneCmd: "git clone https://github.com/Anushree401/ai-image-malware.git"
    },
    {
      title: "Security & Attack Simulation Lab",
      description: "Laboratory playground for network security attack simulations including raw socket multi-threaded DoS traffic engines and 802.11 Wi-Fi Deauth/Beacon flooding with real-time kernel telemetry dashboards.",
      longDescription: "Engineered for defensive security research, this simulation lab implements high-throughput packet craft engines leveraging raw Linux sockets to simulate synthetic volumetric attacks, wireless deauthentication frames, and kernel telemetry collection.",
      highlights: [
        "Multi-threaded raw socket frame generation engine",
        "802.11 wireless deauthentication & beacon flooding test suites",
        "Real-time eBPF and Linux kernel telemetry monitoring dashboard"
      ],
      tags: ["Security", "DoS Simulation", "Kernel Telemetry", "C++"],
      color: "yellow",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com/Anushree401/attack-simuation",
      category: "Cybersecurity",
      cloneCmd: "git clone https://github.com/Anushree401/attack-simuation.git"
    },
    {
      title: "nScanner",
      description: "Hybrid network scanner for TCP scanning, reconnaissance, and vulnerability analysis featuring Gemini Generative AI summaries and a Flask dashboard.",
      longDescription: "nScanner combines high-speed port scanning and service fingerprinting with Google Gemini AI to auto-generate concise executive summaries of network attack surfaces and recommendations.",
      highlights: [
        "Asynchronous TCP/UDP port scanner & OS fingerprinting",
        "Generative AI threat assessment & executive report builder",
        "Responsive web dashboard with real-time WebSocket output"
      ],
      tags: ["Python", "Generative AI", "Nmap"],
      color: "cyan",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com/Anushree401/nScanner",
      category: "Cybersecurity",
      cloneCmd: "git clone https://github.com/Anushree401/nScanner.git"
    },
    {
      title: "BrokeBank",
      description: "Full stack digital banking system simulating core processes such as account management, funds transfer, loans, fixed deposits, and role-based workflows.",
      longDescription: "A modern fintech application built with robust transactional consistency, supporting multi-tier user role management, secure fund transfers, automated interest calculations, and audit logging.",
      highlights: [
        "ACID-compliant banking transaction simulator",
        "Role-based access control (Admin, Auditor, Customer)",
        "Fixed deposit & loan lifecycle calculation workflows"
      ],
      tags: ["Full Stack", "Banking", "Simulation"],
      color: "green",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com/Anushree401/Digital-Banking-Application",
      category: "Full Stack",
      cloneCmd: "git clone https://github.com/Anushree401/Digital-Banking-Application.git"
    },
    {
      title: "Wi-Fi Security Monitor",
      description: "Passive Wi-Fi security monitoring system that detects anomalous and potentially malicious behavior in enterprise wireless environments.",
      longDescription: "Monitors 802.11 radio channels in monitor mode to identify rogue access points, evil twin attacks, handshake captures, and anomalous packet rate spikes.",
      highlights: [
        "Passive 802.11 frame sniffer & packet inspector",
        "Evil Twin & Rogue Access Point heuristic detection",
        "Automated alert dispatch via webhooks"
      ],
      tags: ["Cybersecurity", "Network", "Monitoring"],
      color: "pink",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
      link: "#",
      category: "Cybersecurity"
    },
    {
      title: "SpidCrawl",
      description: "A comprehensive web crawler that takes a URL, traverses all pages, and scrapes titles, links, images, and headings to generate structural reports.",
      longDescription: "High-performance web crawling engine capable of traversing multi-depth DOM structures, detecting broken links, building sitemaps, and extracting metadata into JSON/CSV formats.",
      highlights: [
        "Multi-threaded asynchronous web crawler engine",
        "SEO and metadata structural analyzer",
        "Sitemap graph visualization exporter"
      ],
      tags: ["Python", "Web Scraping", "Crawler"],
      color: "orange",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com/Anushree401/scraper-crawler",
      category: "Systems & CLI",
      cloneCmd: "git clone https://github.com/Anushree401/scraper-crawler.git"
    },
    {
      title: "GrabMEDIA",
      description: "A powerful CLI tool built with yt-dlp, urllib, and Python threading for multi-threaded downloads of videos, audio, PDFs, and images from YouTube and direct URLs.",
      longDescription: "CLI media harvester built for power users, providing parallel download streams, quality selection, playlist parsing, and robust error recovery.",
      highlights: [
        "Multi-threaded chunked downloader engine",
        "Support for playlists, YouTube, and arbitrary media streams",
        "Built-in metadata tagging & post-processing"
      ],
      tags: ["Python", "CLI", "yt-dlp"],
      color: "yellow",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com/Anushree401/GrabMEDIA",
      category: "Systems & CLI",
      cloneCmd: "git clone https://github.com/Anushree401/GrabMEDIA.git"
    },
    {
      title: "Sahayak AI",
      description: "A personalized AI-powered career guidance platform for students in India leveraging Google Cloud's generative AI and Firebase to provide tailored career paths, skill recommendations, and preparation strategies.",
      longDescription: "Platform designed to help students discover personalized learning paths, industry skill mapping, and AI mentor guidance powered by Firebase and Google Cloud Vertex AI.",
      highlights: [
        "Generative career pathing engine using Gemini API",
        "Firebase real-time synchronization and user analytics",
        "Interactive skill gap analysis assessment"
      ],
      tags: ["Firebase", "Agentic AI"],
      color: "green",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com/ak-kk-21/VAANGuard-Devs-Sahayak",
      category: "AI & ML",
      cloneCmd: "git clone https://github.com/ak-kk-21/VAANGuard-Devs-Sahayak.git"
    },
    {
      title: "Market Trends Dashboard",
      description: "Real-time market trend analysis and anomaly detection dashboard using live API data and Plotly.",
      longDescription: "Financial & tech market monitoring dashboard displaying live time-series plots, moving averages, and statistical anomaly detection on high-frequency market data.",
      highlights: [
        "Live WebSocket API data stream integration",
        "Plotly interactive chart visualizer",
        "Z-score based financial anomaly detector"
      ],
      tags: ["Python", "Plotly", "React"],
      color: "pink",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com/Anushree401/market-dashboard",
      category: "Full Stack",
      cloneCmd: "git clone https://github.com/Anushree401/market-dashboard.git"
    }
  ];

  const categories = ['All', 'Cybersecurity', 'AI & ML', 'Systems & CLI', 'Full Stack'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="space-y-12">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-4 border-[var(--color-border)] pb-6 gap-6">
          <div>
            <h2 className="heading-neo text-3xl md:text-5xl lg:text-7xl text-[var(--color-text-primary)] !lowercase font-mono whitespace-nowrap mb-3">
              $&gt; <span className="text-[var(--color-accent-cyan-theme)] border-b-4 md:border-b-8 border-[var(--color-accent-cyan-theme)] inline-block pb-1">cd ~/projects</span><span className="animate-pulse text-[var(--color-accent-cyan-theme)]">_</span>
            </h2>
          </div>
          <a href="https://github.com/Anushree401?tab=repositories" target="_blank" rel="noopener noreferrer" className="neo-btn px-6 py-2 gap-2 text-sm text-[var(--color-text-primary)] self-start md:self-auto flex items-center">
            View All <ArrowUpRight size={16} />
          </a>
        </div>
      </ScrollReveal>

      {/* Category Filter & Deck Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none w-full sm:w-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-text-secondary)] flex items-center gap-1 mr-1">
            <Filter size={14} /> Filter:
          </span>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`py-1.5 px-3.5 rounded-lg text-xs font-mono font-bold tracking-wider transition-all duration-200 cursor-pointer border-2 border-[var(--color-border)] whitespace-nowrap ${isActive
                    ? '!bg-[var(--color-accent-yellow-theme)] !text-black shadow-[3px_3px_0px_var(--color-border)] -translate-y-0.5'
                    : 'bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] shadow-[2px_2px_0px_var(--color-border)] hover:bg-[var(--color-bg-secondary)] hover:-translate-y-0.5'
                  }`}
              >
                {cat} {cat !== 'All' && `(${projects.filter(p => p.category === cat).length})`}
              </button>
            );
          })}
        </div>

        {/* View Mode & Flashcard Deck Controls */}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          {/* Deck Scroll Controls (Visible in Flashcard mode) */}
          {viewMode === 'flashcard' && (
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scrollDeck('left')}
                className="neo-btn p-2 hover:bg-[var(--color-accent-cyan-theme)] hover:text-black transition-colors"
                title="Previous Flashcard"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scrollDeck('right')}
                className="neo-btn p-2 hover:bg-[var(--color-accent-cyan-theme)] hover:text-black transition-colors"
                title="Next Flashcard"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}

          {/* View Toggle */}
          <div className="flex items-center rounded-lg border-2 border-[var(--color-border)] p-0.5 bg-[var(--color-bg-primary)]">
            <button
              onClick={() => setViewMode('flashcard')}
              className={`px-2.5 py-1 text-xs font-mono font-bold flex items-center gap-1.5 rounded transition-all ${
                viewMode === 'flashcard' 
                  ? 'bg-[var(--color-primary)] text-black font-extrabold shadow-[2px_2px_0px_var(--color-border)]' 
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              <Layers size={13} /> Deck
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-2.5 py-1 text-xs font-mono font-bold flex items-center gap-1.5 rounded transition-all ${
                viewMode === 'grid' 
                  ? 'bg-[var(--color-primary)] text-black font-extrabold shadow-[2px_2px_0px_var(--color-border)]' 
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              <LayoutGrid size={13} /> Grid
            </button>
          </div>
        </div>
      </div>

      {/* Projects Display: Flashcard Deck vs Grid */}
      {viewMode === 'flashcard' ? (
        <div className="relative w-full">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 px-1 scrollbar-none scroll-smooth items-stretch"
          >
            {filteredProjects.map((project, idx) => (
              <div 
                key={project.title} 
                className="snap-center w-[85vw] max-w-[440px] md:max-w-[480px] flex-shrink-0 flex flex-col"
              >
                <ProjectCard
                  project={project}
                  onOpen={() => setSelectedProject(project)}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.title} delay={(idx % 2) * 150} className="h-full">
              <ProjectCard
                project={project}
                onOpen={() => setSelectedProject(project)}
              />
            </ScrollReveal>
          ))}
        </div>
      )}

      {/* Interactive Modal Popup */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

function ProjectCard({ project, onOpen }: { project: ProjectType; onOpen: () => void }) {
  const { title, description, tags, color, image, link, category } = project;

  return (
    <div
      onClick={onOpen}
      className={`neo-card shadow-${color} border-4 flex flex-col h-full bg-[var(--color-bg-secondary)] group cursor-pointer hover:border-[var(--color-accent-yellow-theme)] transition-all`}
    >
      <div className="relative h-64 w-full border-b-4 border-[var(--color-border)] overflow-hidden bg-black">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-500 opacity-100 grayscale-0 xl:opacity-60 xl:grayscale xl:group-hover:opacity-100 xl:group-hover:grayscale-0"
        />
        {category && (
          <div className="absolute bottom-4 left-4 neo-badge bg-[var(--color-bg-primary)] text-xs shadow-[2px_2px_0px_var(--color-shadow)]">
            {category}
          </div>
        )}
      </div>

      <div className="p-8 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag: string, i: number) => (
            <span key={i} className="neo-badge shadow-[2px_2px_0px_var(--color-shadow)]">{tag}</span>
          ))}
        </div>
        <h3 className="heading-neo text-2xl md:text-3xl mb-4 text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-cyan-theme)] transition-colors">
          {title}
        </h3>
        <p className="text-[var(--color-text-secondary)] font-medium leading-relaxed mb-8 flex-1">
          {description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t-2 border-[var(--color-border)]">
          <span className="text-xs font-mono font-medium text-[var(--color-text-secondary)] flex items-center gap-1.5 group-hover:text-[var(--color-text-primary)] transition-colors">
            <Sparkles size={14} className="text-[var(--color-accent-yellow-theme)]" /> Click card for specs
          </span>

          {link !== "#" ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="neo-btn-primary px-4 py-2 flex items-center gap-2 text-xs"
            >
              Source <ArrowUpRight size={14} />
            </a>
          ) : (
            <span className="neo-badge opacity-60 text-xs">R&D</span>
          )}
        </div>
      </div>
    </div>
  );
}
