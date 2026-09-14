"use client";

import { Menu, Moon, Sun, Search, Command } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import AudioPlayer from './AudioPlayer';
import CommandPalette from './CommandPalette';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-navbar border-b-4 border-[var(--color-border)] z-40 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#f2ff44] border-2 border-[var(--color-border)] flex items-center justify-center rotate-45 shadow-[4px_4px_0px_var(--color-border)] transition-shadow duration-300 overflow-hidden relative">
              <img src="/tools/profile.jpg" alt="Profile" className="-rotate-45 min-w-[150%] min-h-[150%] object-cover absolute" />
            </div>
            <Link href="#home">
              <h1 className="heading-neo text-2xl tracking-tight hover:text-[#f2ff44] transition-colors">
                ANUSHREE
              </h1>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-bold text-sm tracking-widest uppercase">
            <Link href="#about" className="hover:underline hover:decoration-[3px] hover:decoration-[#ff5555] hover:underline-offset-[6px] transition-all">About</Link>
            <Link href="#skills" className="hover:underline hover:decoration-[3px] hover:decoration-[#50fa7b] hover:underline-offset-[6px] transition-all">Skills</Link>
            <Link href="#projects" className="hover:underline hover:decoration-[3px] hover:decoration-[#ff5555] hover:underline-offset-[6px] transition-all">Projects</Link>
            <Link href="#research" className="hover:underline hover:decoration-[3px] hover:decoration-[#50fa7b] hover:underline-offset-[6px] transition-all">Research</Link>
            <Link href="#experience" className="hover:underline hover:decoration-[3px] hover:decoration-[#ff5555] hover:underline-offset-[6px] transition-all">Experience</Link>
          </nav>

          <div className="flex items-center gap-3">
            {mounted && (
              <>
                <AudioPlayer />
                
                <button 
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="neo-btn p-2"
                  aria-label="Toggle Theme"
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </>
            )}
            
            <Link href="https://github.com/Anushree401" target="_blank" className="hidden md:flex neo-btn px-4 py-2 gap-2 items-center text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              Github
            </Link>
            <Link href="/resume" className="neo-btn-primary px-5 py-2 text-xs hidden md:flex items-center justify-center">
              Resume
            </Link>
            <button className="md:hidden neo-btn p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <nav className="md:hidden absolute top-20 left-0 w-full bg-[var(--color-bg-primary)] border-b-4 border-[var(--color-border)] flex flex-col font-bold text-lg tracking-widest uppercase p-6 gap-6 shadow-[0px_8px_0px_var(--color-border)] z-40">
            <Link href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</Link>
            <Link href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
            <Link href="#research" onClick={() => setIsMobileMenuOpen(false)}>Research</Link>
            <Link href="#experience" onClick={() => setIsMobileMenuOpen(false)}>Experience</Link>
            <Link href="#leadership" onClick={() => setIsMobileMenuOpen(false)}>Leadership</Link>
            <div className="w-full h-1 bg-[var(--color-border)] my-2"></div>
            <Link href="https://github.com/Anushree401" target="_blank" className="flex items-center gap-2">
              Github
            </Link>
            <Link href="/resume" onClick={() => setIsMobileMenuOpen(false)} className="neo-btn-primary px-6 py-3 text-center mt-2">
              Resume
            </Link>
          </nav>
        )}
      </header>

      {/* Global Command Palette Modal */}
      <CommandPalette 
        isOpen={isCommandPaletteOpen} 
        onClose={() => setIsCommandPaletteOpen(false)} 
      />
    </>
  );
}
