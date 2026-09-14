"use client";

import { useEffect, useState } from 'react';
import { X, ArrowUpRight, Copy, Check, Terminal, Code2, Sparkles } from 'lucide-react';
import Image from 'next/image';

export interface ProjectType {
  title: string;
  description: string;
  longDescription?: string;
  highlights?: string[];
  tags: string[];
  color: string;
  image: string;
  link: string;
  category?: string;
  cloneCmd?: string;
}

interface ProjectModalProps {
  project: ProjectType | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const cloneCommand = project.cloneCmd || `git clone ${project.link !== '#' ? project.link : 'https://github.com/Anushree401'}.git`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className={`neo-card shadow-${project.color} max-w-3xl w-full max-h-[90vh] flex flex-col bg-[var(--color-bg-secondary)] border-4 overflow-hidden relative animate-in zoom-in-95 duration-200`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 md:p-6 border-b-4 border-[var(--color-border)] flex items-center justify-between bg-[var(--color-bg-primary)]">
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full border-2 border-[var(--color-border)] inline-block" style={{ backgroundColor: `var(--color-accent-${project.color}-theme)` }} />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-text-secondary)]">
              Project Specification // {project.category || 'Cybersecurity'}
            </span>
          </div>
          <button 
            onClick={onClose}
            aria-label="Close modal"
            className="neo-btn p-2 hover:bg-[var(--color-accent-pink-theme)] hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1">
          {/* Banner Image */}
          <div className="relative h-64 md:h-80 w-full border-4 border-[var(--color-border)] rounded-xl overflow-hidden bg-black shadow-[4px_4px_0px_var(--color-shadow)]">
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover"
            />
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="neo-badge bg-[var(--color-bg-primary)] shadow-[2px_2px_0px_var(--color-border)]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Title & Overview */}
          <div>
            <h2 className="heading-neo text-2xl md:text-4xl text-[var(--color-text-primary)] mb-3">
              {project.title}
            </h2>
            <p className="text-[var(--color-text-secondary)] text-base md:text-lg leading-relaxed font-medium">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Features / Specs */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="p-5 border-3 border-[var(--color-border)] rounded-xl bg-[var(--color-bg-primary)] space-y-3">
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[var(--color-text-primary)] flex items-center gap-2">
                <Sparkles size={16} className="text-[var(--color-accent-yellow-theme)]" /> Technical Highlights
              </h3>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)] font-medium">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[var(--color-accent-cyan-theme)] font-bold">➢</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Terminal Command Box */}
          <div className="border-3 border-[var(--color-border)] rounded-xl bg-black p-4 text-green-400 font-mono text-xs md:text-sm space-y-2">
            <div className="flex items-center justify-between text-gray-400 border-b border-gray-800 pb-2">
              <span className="flex items-center gap-2">
                <Terminal size={14} /> Quick Terminal Clone
              </span>
              <button 
                onClick={copyToClipboard}
                className="flex items-center gap-1 hover:text-white transition-colors text-xs font-sans px-2 py-1 border border-gray-700 rounded bg-gray-900"
              >
                {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <p className="overflow-x-auto whitespace-nowrap py-1">
              $ {cloneCommand}
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 md:p-6 border-t-4 border-[var(--color-border)] bg-[var(--color-bg-primary)] flex flex-wrap items-center justify-between gap-4">
          <button 
            onClick={onClose}
            className="neo-btn px-6 py-2 text-sm text-[var(--color-text-primary)]"
          >
            Close Window
          </button>
          
          {project.link !== '#' ? (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="neo-btn-primary px-6 py-3 flex items-center gap-2 text-sm font-bold"
            >
              <Code2 size={18} /> View Repository <ArrowUpRight size={18} />
            </a>
          ) : (
            <div className="neo-btn px-6 py-3 opacity-50 cursor-not-allowed text-sm">
              In Active Research & Development
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
