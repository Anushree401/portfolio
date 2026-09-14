"use client";

import { useEffect, useState } from 'react';
import { Search, X, Terminal, ArrowRight, ExternalLink, Moon, Sun, FileText, Code, Briefcase, GraduationCap } from 'lucide-react';
import { useTheme } from 'next-themes';

const Github = ({ size = 18, className }: { size?: number; className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface CommandItem {
  id: string;
  title: string;
  subtitle?: string;
  category: 'Navigation' | 'Projects' | 'Actions';
  icon: any;
  action: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { theme, setTheme } = useTheme();

  const handleNavigate = (hash: string) => {
    onClose();
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const commands: CommandItem[] = [
    // Navigation
    { id: 'nav-about', title: 'Jump to About Section', subtitle: 'Who I am & Security background', category: 'Navigation', icon: Terminal, action: () => handleNavigate('#about') },
    { id: 'nav-skills', title: 'Jump to Skills & Tools', subtitle: 'Cybersecurity, Python, Kotlin, C++', category: 'Navigation', icon: Code, action: () => handleNavigate('#skills') },
    { id: 'nav-projects', title: 'Jump to Projects', subtitle: '10+ open-source & security tools', category: 'Navigation', icon: Code, action: () => handleNavigate('#projects') },
    { id: 'nav-research', title: 'Jump to Research', subtitle: 'Malware & Threat Intelligence papers', category: 'Navigation', icon: GraduationCap, action: () => handleNavigate('#research') },
    { id: 'nav-experience', title: 'Jump to Experience', subtitle: 'Auracle Labs, CSI UK, Cyber Secured India', category: 'Navigation', icon: Briefcase, action: () => handleNavigate('#experience') },

    // Projects Direct Launch
    { id: 'p-apvm', title: 'Project: APVM Security Suite', subtitle: 'Android process & vulnerability analyzer', category: 'Projects', icon: Code, action: () => { handleNavigate('#projects'); } },
    { id: 'p-malware', title: 'Project: AI Malware Platform', subtitle: 'Explainable AI & multi-agent sandbox', category: 'Projects', icon: Code, action: () => { handleNavigate('#projects'); } },
    { id: 'p-attack-sim', title: 'Project: Security Simulation Lab', subtitle: 'DoS & Wireless deauth flooding simulator', category: 'Projects', icon: Code, action: () => { handleNavigate('#projects'); } },
    { id: 'p-nscanner', title: 'Project: nScanner', subtitle: 'Hybrid port scanner with Gemini AI summaries', category: 'Projects', icon: Code, action: () => { handleNavigate('#projects'); } },

    // Actions
    { id: 'act-resume', title: 'Open Resume (PDF)', subtitle: 'View full curriculum vitae', category: 'Actions', icon: FileText, action: () => { window.open('/resume.pdf', '_blank'); onClose(); } },
    { id: 'act-github', title: 'Open GitHub Profile', subtitle: 'github.com/Anushree401', category: 'Actions', icon: Github, action: () => { window.open('https://github.com/Anushree401', '_blank'); onClose(); } },
    { id: 'act-theme', title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`, subtitle: 'Toggle website color palette', category: 'Actions', icon: theme === 'dark' ? Sun : Moon, action: () => { setTheme(theme === 'dark' ? 'light' : 'dark'); onClose(); } }
  ];

  const filteredCommands = commands.filter(cmd => 
    cmd.title.toLowerCase().includes(query.toLowerCase()) || 
    (cmd.subtitle && cmd.subtitle.toLowerCase().includes(query.toLowerCase())) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent or custom dispatcher
        }
      }
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + (filteredCommands.length || 1)) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="neo-card shadow-yellow max-w-2xl w-full bg-[var(--color-bg-secondary)] border-4 overflow-hidden relative animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Command Search Bar Header */}
        <div className="p-4 border-b-4 border-[var(--color-border)] flex items-center gap-3 bg-[var(--color-bg-primary)]">
          <Terminal size={22} className="text-[var(--color-accent-yellow-theme)]" />
          <input
            type="text"
            autoFocus
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent outline-none font-mono text-base md:text-lg text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)]"
          />
          <button onClick={onClose} className="neo-btn p-1 text-xs">
            <X size={18} />
          </button>
        </div>

        {/* Command Results */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="p-8 text-center text-[var(--color-text-secondary)] font-mono text-sm">
              No matching commands found for &quot;{query}&quot;
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const Icon = cmd.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={cmd.id}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-3 rounded-lg border-2 flex items-center justify-between cursor-pointer transition-all duration-150 ${
                    isSelected 
                      ? 'bg-[var(--color-primary)] text-black border-[var(--color-border)] shadow-[2px_2px_0px_var(--color-shadow)] translate-x-1' 
                      : 'border-transparent hover:bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded border border-[var(--color-border)] ${isSelected ? 'bg-black text-yellow-300' : 'bg-[var(--color-bg-primary)]'}`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-sm font-mono">{cmd.title}</p>
                      {cmd.subtitle && (
                        <p className={`text-xs ${isSelected ? 'text-gray-900 font-medium' : 'text-[var(--color-text-secondary)]'}`}>
                          {cmd.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="neo-badge text-[10px] uppercase">{cmd.category}</span>
                    <ArrowRight size={14} className={isSelected ? 'opacity-100' : 'opacity-30'} />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="p-3 border-t-2 border-[var(--color-border)] bg-[var(--color-bg-primary)] flex items-center justify-between text-xs font-mono text-[var(--color-text-secondary)]">
          <div className="flex items-center gap-4">
            <span><kbd className="neo-badge px-1 py-0.5 text-[10px]">↑↓</kbd> Navigate</span>
            <span><kbd className="neo-badge px-1 py-0.5 text-[10px]">↵</kbd> Select</span>
            <span><kbd className="neo-badge px-1 py-0.5 text-[10px]">ESC</kbd> Close</span>
          </div>
          <span className="text-[var(--color-accent-cyan-theme)] font-bold">⌘K Launcher</span>
        </div>
      </div>
    </div>
  );
}
