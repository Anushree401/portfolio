"use client";

import { useState } from 'react';
import { Network, Shield, Cpu, Sparkles, Terminal, Activity, Radio, CheckCircle2, Server, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export interface LeadershipNode {
  id: string;
  role: string;
  organization: string;
  date: string;
  status: 'ACTIVE' | 'ALUMNI' | 'VOLUNTEER';
  color: 'yellow' | 'cyan' | 'pink' | 'green' | 'purple' | 'orange';
  ipAddress: string;
  details: string;
  responsibilities: string[];
}

export default function Leadership() {
  const nodes: LeadershipNode[] = [
    {
      id: "gdg",
      role: "Subhead, Cybersecurity",
      organization: "Google Developer Group",
      date: "Ongoing",
      status: "ACTIVE",
      color: "yellow",
      ipAddress: "10.0.1.10",
      details: "Leading cybersecurity workshops, hands-on CTF challenges, and technical sessions for GDG community developers.",
      responsibilities: ["Hands-on CTF challenge design", "Cybersecurity track mentoring", "Event orchestration & workshops"]
    },
    {
      id: "cyphersnova",
      role: "Co-founder & Admin",
      organization: "CyphersNova Community",
      date: "Ongoing",
      status: "ACTIVE",
      color: "cyan",
      ipAddress: "10.0.1.20",
      details: "Directing tech community growth, cross-college hackathons, and student developer collaboration ecosystems.",
      responsibilities: ["Community ecosystem administration", "Hackathon execution & logistics", "Technical mentorship"]
    },
    {
      id: "ieee",
      role: "Subhead, R&D",
      organization: "IEEE Research Committee",
      date: "Ongoing",
      status: "ACTIVE",
      color: "pink",
      ipAddress: "10.0.1.30",
      details: "Overseeing research paper reviews, machine learning hackathons, and domain technical talks within IEEE.",
      responsibilities: ["R&D paper guidance", "Machine learning research track", "Symposium organization"]
    },
    {
      id: "mbatech",
      role: "Finance Executive",
      organization: "MBATech Connect Cell",
      date: "Ongoing",
      status: "ACTIVE",
      color: "green",
      ipAddress: "10.0.1.40",
      details: "Managing committee budgets, corporate sponsorship relations, and financial strategy reporting.",
      responsibilities: ["Budget allocation & accounting", "Sponsorship pitch execution", "Event capital management"]
    },
    {
      id: "iec",
      role: "Technical Executive",
      organization: "IEC Committee",
      date: "Aug '24 - May '25",
      status: "ALUMNI",
      color: "orange",
      ipAddress: "10.0.1.50",
      details: "Built event management web portals and managed technical infrastructure setup for committee summits.",
      responsibilities: ["Web portal maintenance", "On-site tech operations", "Participant data management"]
    },
    {
      id: "4c",
      role: "Editorial Executive",
      organization: "4C Marketing Club",
      date: "Aug '24 - Apr '25",
      status: "ALUMNI",
      color: "purple",
      ipAddress: "10.0.1.60",
      details: "Edited technical blogs, newsletter content, and promotional copy for marketing initiatives.",
      responsibilities: ["Newsletter editorial", "Copywriting & proofing", "Content strategy"]
    },
    {
      id: "paradox",
      role: "Organizing Team",
      organization: "Paradox (IIT Madras)",
      date: "Volunteer",
      status: "VOLUNTEER",
      color: "pink",
      ipAddress: "10.0.1.70",
      details: "Volunteered in operations, logistics, and speaker coordination for IIT Madras flagship tech festival.",
      responsibilities: ["Event logistics execution", "Speaker & participant coordination", "Venue management"]
    }
  ];

  const [activeNodeId, setActiveNodeId] = useState<string>("gdg");
  const selectedNode = nodes.find(n => n.id === activeNodeId) || nodes[0];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'yellow': return { bg: 'bg-[#f1fa8c]', text: 'text-black', border: 'border-[#f1fa8c]', hex: '#f1fa8c' };
      case 'cyan': return { bg: 'bg-[#8be9fd]', text: 'text-black', border: 'border-[#8be9fd]', hex: '#8be9fd' };
      case 'pink': return { bg: 'bg-[#ff79c6]', text: 'text-black', border: 'border-[#ff79c6]', hex: '#ff79c6' };
      case 'green': return { bg: 'bg-[#50fa7b]', text: 'text-black', border: 'border-[#50fa7b]', hex: '#50fa7b' };
      case 'purple': return { bg: 'bg-[#bd93f9]', text: 'text-black', border: 'border-[#bd93f9]', hex: '#bd93f9' };
      case 'orange': return { bg: 'bg-[#ffb86c]', text: 'text-black', border: 'border-[#ffb86c]', hex: '#ffb86c' };
      default: return { bg: 'bg-[#8be9fd]', text: 'text-black', border: 'border-[#8be9fd]', hex: '#8be9fd' };
    }
  };

  const selectedColors = getColorClasses(selectedNode.color);

  // Position coordinates for the 7 nodes in the Network Topology Map (percentage values inside 100% container)
  const nodePositions = [
    { x: 18, y: 22 }, // GDG (top left)
    { x: 82, y: 22 }, // CyphersNova (top right)
    { x: 12, y: 55 }, // IEEE (mid left)
    { x: 88, y: 55 }, // MBATech (mid right)
    { x: 24, y: 84 }, // IEC (bottom left)
    { x: 76, y: 84 }, // 4C (bottom right)
    { x: 50, y: 92 }, // Paradox (bottom center)
  ];

  return (
    <section id="leadership" className="space-y-6">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-4 border-[var(--color-border)] pb-4 gap-4">
          <div>
            <h2 className="heading-neo text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-primary)] !lowercase font-mono whitespace-nowrap overflow-hidden text-ellipsis w-full mb-2">
              $&gt; <span className="text-[var(--color-accent-pink-theme)] border-b-4 md:border-b-8 border-[var(--color-accent-pink-theme)] inline-block pb-1">id -Gn</span><span className="animate-pulse text-[var(--color-accent-pink-theme)]">_</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] font-mono text-xs md:text-sm">
              // bash: id -Gn prints effective group memberships & network topology
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-text-secondary)] border-2 border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3 py-1.5 rounded">
            <Radio size={14} className="text-[#50fa7b] animate-pulse" />
            <span>NETWORK STATUS: 7 NODES ACTIVE</span>
          </div>
        </div>
      </ScrollReveal>

      {/* Network Topology Visualization Box */}
      <ScrollReveal delay={100}>
        <div className="neo-card border-4 border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-4 md:p-6 relative flex flex-col lg:flex-row items-stretch justify-between gap-6 overflow-hidden select-none">
          
          {/* Left Side: Interactive Network Topology Graph */}
          <div className="w-full lg:w-3/5 relative min-h-[420px] md:min-h-[480px] bg-[var(--color-bg-primary)] border-4 border-[var(--color-border)] p-4 rounded flex items-center justify-center overflow-hidden">
            
            {/* SVG Network Edges & Connections */}
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none z-0">
              {/* Grid guide background */}
              <defs>
                <pattern id="netgrid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="var(--color-border)" strokeWidth="0.3" strokeOpacity="0.2" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#netgrid)" />

              {/* Edge Connections from ROOT (50, 48) to each Group Node */}
              {nodes.map((n, idx) => {
                const pos = nodePositions[idx];
                const isSelected = n.id === activeNodeId;
                const nodeColorProps = getColorClasses(n.color);

                return (
                  <g key={n.id}>
                    <line
                      x1="50"
                      y1="48"
                      x2={pos.x}
                      y2={pos.y}
                      stroke={isSelected ? nodeColorProps.hex : 'var(--color-border)'}
                      strokeWidth={isSelected ? '1.2' : '0.6'}
                      strokeDasharray={isSelected ? '2 1' : '1 1.5'}
                      strokeOpacity={isSelected ? 1 : 0.4}
                    />
                    {/* Animated Data Packets along Active Edge */}
                    {isSelected && (
                      <circle r="1" fill={nodeColorProps.hex}>
                        <animateMotion
                          path={`M 50 48 L ${pos.x} ${pos.y}`}
                          dur="1.5s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Central Root Hub Node: ANUSHREE / ROOT */}
            <div 
              className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 z-20 neo-card border-4 border-white bg-black text-white px-4 py-3 rounded-full flex items-center gap-2 shadow-[6px_6px_0px_#ff79c6] animate-pulse"
            >
              <Server size={18} className="text-[#ff79c6]" />
              <div className="flex flex-col">
                <span className="text-[9px] font-mono font-extrabold text-[#50fa7b]">127.0.0.1 (ROOT)</span>
                <span className="text-xs font-mono font-black tracking-wider uppercase">ANUSHREE</span>
              </div>
            </div>

            {/* Topology Nodes */}
            {nodes.map((node, idx) => {
              const pos = nodePositions[idx];
              const isSelected = node.id === activeNodeId;
              const nodeColors = getColorClasses(node.color);

              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                  className={`
                    absolute -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer transition-all duration-300
                    flex flex-col items-center justify-center p-2 rounded-lg border-2 font-mono text-center
                    ${nodeColors.bg} ${nodeColors.text} border-black
                    ${isSelected 
                      ? 'scale-110 ring-4 ring-white ring-offset-2 ring-offset-black shadow-[6px_6px_0px_#000] z-40' 
                      : 'scale-95 hover:scale-105 opacity-85 shadow-[3px_3px_0px_#000]'
                    }
                  `}
                >
                  <span className="text-[8px] font-mono font-bold bg-black text-white px-1.5 py-0.2 rounded mb-0.5">
                    {node.ipAddress}
                  </span>
                  <span className="font-black text-[9px] sm:text-[10px] leading-tight uppercase max-w-[90px] sm:max-w-[110px] truncate">
                    {node.organization}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Side: Node Inspector / Terminal Panel */}
          <div className="w-full lg:w-2/5 z-20 flex flex-col justify-between">
            <div className={`neo-card ${selectedColors.border} border-4 bg-[var(--color-bg-primary)] p-5 md:p-6 flex flex-col gap-4 shadow-[8px_8px_0px_var(--color-border)] h-full justify-between`}>
              
              <div className="space-y-4">
                {/* Node Inspector Header */}
                <div className="flex items-center justify-between border-b-2 border-[var(--color-border)] pb-3">
                  <div className="flex items-center gap-2">
                    <Terminal size={16} style={{ color: selectedColors.hex }} />
                    <span className="font-mono text-xs font-bold text-[var(--color-text-primary)]">
                      NODE_INSPECTOR // {selectedNode.ipAddress}
                    </span>
                  </div>

                  <span 
                    className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 border border-black rounded"
                    style={{ backgroundColor: selectedColors.hex, color: '#000' }}
                  >
                    {selectedNode.status}
                  </span>
                </div>

                {/* Organization & Role */}
                <div>
                  <span className="text-xs font-mono font-bold text-[var(--color-text-secondary)] uppercase block mb-1">
                    {selectedNode.date} • {selectedNode.organization}
                  </span>
                  <h3 className="heading-neo text-xl md:text-2xl text-[var(--color-text-primary)] leading-tight">
                    {selectedNode.role}
                  </h3>
                </div>

                {/* Details Overview */}
                <p className="text-[var(--color-text-primary)] font-medium text-xs sm:text-sm leading-relaxed bg-[var(--color-bg-secondary)] p-3 border-2 border-[var(--color-border)] rounded">
                  {selectedNode.details}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono font-bold text-[var(--color-text-secondary)] uppercase">
                    &gt; Key Responsibilities:
                  </span>
                  <div className="space-y-1">
                    {selectedNode.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-[var(--color-text-primary)]">
                        <CheckCircle2 size={13} style={{ color: selectedColors.hex }} className="shrink-0" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Topology Navigation Footer */}
              <div className="pt-3 border-t border-dashed border-[var(--color-border)] flex items-center justify-between text-[10px] font-mono text-[var(--color-text-secondary)]">
                <span>CLICK TOPOLOGY NODES TO INSPECT</span>
                <span className="font-bold text-[var(--color-text-primary)]">
                  7 / 7 CONNECTED
                </span>
              </div>

            </div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}
