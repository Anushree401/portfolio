"use client";

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const word1 = "LET'S";
  const word2 = "ENCRYPT";
  const word3 = "IT.";
  const totalChars = word1.length + word2.length + word3.length; // 12

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < totalChars) {
      timeout = setTimeout(() => setCharIndex(prev => prev + 1), 150); // Type speed
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(prev => prev - 1), 50); // Backspace speed
    } else if (!isDeleting && charIndex === totalChars) {
      timeout = setTimeout(() => setIsDeleting(true), 15000); // Wait 30 seconds before deleting
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => setIsDeleting(false), 1000); // Wait 1 second before typing again
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, totalChars]);

  const triggerRetype = () => {
    if (!isDeleting && charIndex === totalChars) {
      setIsDeleting(true);
    }
  };

  const renderWord1 = word1.slice(0, Math.min(charIndex, word1.length));
  const renderWord2 = charIndex >= word1.length ? word2.slice(0, Math.min(charIndex - word1.length, word2.length)) : "";
  const renderWord3 = charIndex >= word1.length + word2.length ? word3.slice(0, Math.min(charIndex - word1.length - word2.length, word3.length)) : "";

  const cursorChar = <span className="animate-pulse font-light">|</span>;

  return (
    <section id="home" className="min-h-[calc(100vh-10rem)] flex flex-col items-start justify-center gap-8 relative">
      <div className="flex flex-col gap-3 max-w-4xl z-10 relative">
        <div className="inline-block border-2 border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] px-6 py-2 rounded-xl font-bold lowercase font-mono tracking-widest text-sm shadow-[4px_4px_0px_var(--color-accent-green-theme)] w-fit">
          root@anushree:~$ sudo su<span className="animate-pulse">_</span>
        </div>

        <h1
          className="heading-neo text-[3rem] md:text-[5.5rem] lg:text-[5.5rem] xl:text-[7.5rem] leading-[0.9] break-words hyphens-none max-w-full min-h-[3em] cursor-pointer"
          onClick={triggerRetype}
        >
          <span className="block text-[var(--color-text-primary)]" style={{ textShadow: '4px 4px 0 var(--color-accent-cyan-theme)' }}>
            {renderWord1}{charIndex < word1.length && cursorChar}
          </span>
          {charIndex >= word1.length && (
            <span className="block text-transparent" style={{ WebkitTextStroke: '2px var(--color-border)', textShadow: '4px 4px 0 var(--color-accent-pink-theme)' }}>
              {renderWord2}{charIndex >= word1.length && charIndex < word1.length + word2.length && cursorChar}
            </span>
          )}
          {charIndex >= word1.length + word2.length && (
            <span className="block text-[var(--color-accent-yellow-theme)]" style={{ textShadow: '4px 4px 0 var(--color-border)' }}>
              {renderWord3}{charIndex >= word1.length + word2.length && cursorChar}
            </span>
          )}
        </h1>

        <p className="text-lg md:text-xl font-medium max-w-2xl border-l-4 border-[var(--color-accent-yellow-theme)] pl-6 py-1 text-[var(--color-text-primary)]">
          Backend Developer • Cybersecurity Enthusiast • AI Explorer • Researcher
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a href="#projects" className="neo-btn-primary px-8 py-4 text-lg flex items-center gap-3">
            Explore Work <ArrowRight size={20} />
          </a>
          <a href="#contact" className="neo-btn px-8 py-4 text-lg flex items-center gap-3 bg-[var(--color-bg-secondary)]">
            Get in Touch
          </a>
        </div>
      </div>

      {/* Mobile Wrapper for Profile & Name Box */}
      <div className="relative xl:static w-full flex flex-col items-center xl:block xl:w-auto self-center xl:self-auto mt-16 xl:mt-0">

        {/* Profile Stack Animation */}
        <div className="xl:absolute xl:top-12 xl:right-12 2xl:right-24 flex flex-col items-center gap-6 group z-0 pb-12 xl:pb-0" tabIndex={0}>
          <div className="relative w-72 h-56 md:w-[26rem] md:h-[20rem] cursor-pointer">

            {/* Back Card (Blue) */}
            <div className="absolute inset-0 bg-[#00bcd4] rounded-3xl border-4 border-[var(--color-border)] shadow-[6px_6px_0px_var(--color-border)] transition-all duration-500 origin-bottom-left -translate-x-8 -rotate-6 scale-90 group-hover:-translate-x-32 group-active:-translate-x-32 group-hover:-rotate-12 group-active:-rotate-12 overflow-hidden">
              <img src="/photo.jpeg" alt="Profile Blue" className="w-full h-full object-cover mix-blend-multiply grayscale" />
            </div>

            {/* Middle Card (Pink) */}
            <div className="absolute inset-0 bg-[#e91e63] rounded-3xl border-4 border-[var(--color-border)] shadow-[6px_6px_0px_var(--color-border)] transition-all duration-500 origin-bottom-left -translate-x-4 -rotate-3 scale-95 group-hover:-translate-x-16 group-active:-translate-x-16 group-hover:-rotate-6 group-active:-rotate-6 overflow-hidden">
              <img src="/photo.jpeg" alt="Profile Pink" className="w-full h-full object-cover mix-blend-multiply grayscale" />
            </div>

            {/* Front Card (Orange) */}
            <div className="absolute inset-0 bg-[#ff9800] rounded-3xl border-4 border-[var(--color-border)] shadow-[6px_6px_0px_var(--color-border)] transition-all duration-500 origin-bottom-left z-10 group-hover:rotate-3 group-active:rotate-3 group-hover:scale-105 group-active:scale-105 overflow-hidden">
              <img src="/photo.jpeg" alt="Profile Orange" className="w-full h-full object-cover transition-all duration-500 mix-blend-normal grayscale-0" />
            </div>

            {/* Picture Hole and Hanging Tag Assembly */}
            <div className="absolute bottom-6 left-12 md:bottom-8 md:left-16 w-4 h-4 md:w-5 md:h-5 bg-[var(--color-bg-primary)] rounded-full border-2 border-[var(--color-border)] shadow-[inset_2px_2px_0px_rgba(0,0,0,0.1)] z-20 flex justify-center">

              {/* Swinging Assembly (Thread + Tag) */}
              <div className="origin-top rotate-[-6deg] hover:rotate-[6deg] transition-transform duration-500 flex flex-col items-center cursor-pointer mt-2 z-10 w-max">

                {/* The Thread (visible gap) */}
                <div className="w-2 md:w-2.5 h-28 md:h-36 border-x-[1.5px] border-[var(--color-border)] rounded-full" style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--color-border) 0, var(--color-border) 4px, #fff 4px, #fff 8px)' }}></div>

                {/* The Tag Card */}
                <div className="neo-card shadow-green p-3 pt-6 md:p-5 md:pt-8 flex flex-col items-center relative -mt-4 bg-[var(--color-bg-secondary)] z-10">
                  {/* Tag Hole with thread passing through */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 bg-[var(--color-bg-primary)] rounded-full border-2 border-[var(--color-border)] shadow-[inset_2px_2px_0px_rgba(0,0,0,0.1)] z-10 flex justify-center overflow-hidden">
                    <div className="w-2 md:w-2.5 h-full border-x-[1.5px] border-[var(--color-border)]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--color-border) 0, var(--color-border) 4px, #fff 4px, #fff 8px)' }}></div>
                  </div>

                  <div className="text-xl md:text-3xl font-black heading-neo mt-1">Anushree</div>
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-wider">Balaji</div>
                </div>

              </div>
            </div>

          </div>

          <span className="heading-neo text-xl font-bold tracking-widest text-[var(--color-text-primary)] transition-all duration-500 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
            PROFILE
          </span>
        </div>

      </div>
    </section>
  );
}
