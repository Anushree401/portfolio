"use client";

import { useState, useEffect } from 'react';
import resumeData from '../data/resumeData.json';
import Link from 'next/link';
import { ArrowLeft, Printer, Loader2, RefreshCw } from 'lucide-react';

export default function ResumePage() {
  const [isCompiling, setIsCompiling] = useState(true);
  const [compileStep, setCompileStep] = useState(0);

  const logs = [
    "pdflatex -interaction=nonstopmode -halt-on-error resume.tex",
    "This is pdfTeX, Version 3.141592653-2.6-1.40.25 (TeX Live 2024)",
    "entering extended mode...",
    "[1/5] Parsing app/data/resumeData.json (Education, Experience, Projects)...",
    "[2/5] Loading LaTeX packages: hyperref, titlesec, tabularx, glyphtounicode...",
    "[3/5] Injecting Jake's Resume layout & Computer Modern font metrics...",
    "[4/5] Formatting Jake's Resume title header & contact links...",
    "[5/5] Generating ATS-optimized 1-page PDF document...",
    "Output written on resume.pdf (1 page, 48219 bytes).",
    "✓ LaTeX Compilation Successful! Rendering document..."
  ];

  const runCompiler = () => {
    setIsCompiling(true);
    setCompileStep(0);

    const timer1 = setTimeout(() => setCompileStep(2), 120);
    const timer2 = setTimeout(() => setCompileStep(4), 280);
    const timer3 = setTimeout(() => setCompileStep(6), 440);
    const timer4 = setTimeout(() => setCompileStep(8), 600);
    const timer5 = setTimeout(() => {
      setIsCompiling(false);
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 50);
    }, 750);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    return runCompiler();
  }, []);

  useEffect(() => {
    if (!isCompiling) {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [isCompiling]);

  const handlePrint = () => {
    window.print();
  };

  if (isCompiling) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-[#50fa7b] font-mono flex flex-col items-center justify-center p-6 select-none">
        <div className="neo-card border-4 border-[#50fa7b] bg-black p-6 sm:p-8 max-w-2xl w-full shadow-[12px_12px_0px_#50fa7b] space-y-4">
          
          {/* Terminal Window Header Bar */}
          <div className="flex items-center justify-between border-b-2 border-[#50fa7b] pb-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5555]"></div>
              <div className="w-3 h-3 rounded-full bg-[#f1fa8c]"></div>
              <div className="w-3 h-3 rounded-full bg-[#50fa7b]"></div>
              <span className="text-xs text-white ml-2 font-bold">pdflatex_compiler.sh</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#8be9fd]">
              <Loader2 className="animate-spin" size={14} />
              <span>COMPILING LATEX...</span>
            </div>
          </div>

          {/* Terminal Output Log Stream */}
          <div className="space-y-2 text-xs sm:text-sm font-mono min-h-[220px]">
            {logs.slice(0, compileStep + 1).map((log, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-[#8be9fd] shrink-0">&gt;</span>
                <span className={index === logs.length - 1 ? 'text-[#f1fa8c] font-bold' : 'text-white'}>
                  {log}
                </span>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#222] border-2 border-[#50fa7b] h-4 rounded overflow-hidden p-0.5 mt-4">
            <div 
              className="bg-[#50fa7b] h-full transition-all duration-300 ease-out"
              style={{ width: `${((compileStep + 1) / logs.length) * 100}%` }}
            ></div>
          </div>

          <div className="text-[10px] text-gray-400 text-center font-mono pt-2">
            // Building ATS-compliant document using Jake's Resume LaTeX engine
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111] text-black pt-6 pb-16 px-4 sm:px-8 print:p-0 print:bg-white print:min-h-0">
      
      {/* Top Control Bar (Hidden on Print) */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between font-mono print:hidden flex-wrap gap-4">
        <Link 
          href="/" 
          className="neo-btn px-4 py-2 bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] text-xs flex items-center gap-2 hover:bg-[#f1fa8c] hover:text-black transition-colors"
        >
          <ArrowLeft size={16} />
          <span>BACK TO PORTFOLIO</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={runCompiler}
            className="neo-btn px-4 py-2 bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] text-xs flex items-center gap-2 hover:bg-[#8be9fd] hover:text-black transition-colors"
            title="Re-run LaTeX Compiler"
          >
            <RefreshCw size={14} />
            <span>RE-COMPILE</span>
          </button>

          <button
            onClick={handlePrint}
            className="neo-btn-primary px-5 py-2 text-xs flex items-center gap-2 font-bold shadow-[4px_4px_0px_#000]"
          >
            <Printer size={16} />
            <span>PRINT / DOWNLOAD PDF</span>
          </button>
        </div>
      </div>

      {/* Jake's Resume LaTeX Layout Document Container */}
      <div className="print-container max-w-4xl mx-auto bg-white p-8 sm:p-12 md:p-14 shadow-2xl rounded-sm border border-gray-200 print:shadow-none print:border-none print:p-0 print:max-w-none text-[10.5pt] font-serif leading-snug">
        
        {/* HEADER SECTION - EXACT MATCH WITH JAKE'S RESUME FORMAT */}
        <header className="text-center mb-6 pb-2 pt-1 border-b-0">
          <h1 className="text-3xl sm:text-4xl font-serif text-black mb-2 font-normal tracking-wide">
            Anushree Balaji
          </h1>
          <div className="text-xs font-serif text-gray-800 flex items-center justify-center flex-wrap gap-1">
            <span>+91 91527 92056</span>
            <span className="mx-1.5">|</span>
            <a href="mailto:anushree1606balaji@gmail.com" className="underline underline-offset-2">
              anushree1606balaji@gmail.com
            </a>
            <span className="mx-1.5">|</span>
            <a href="https://linkedin.com/in/anushree-balaji-a71b9a255" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
              linkedin.com/in/anushree-balaji
            </a>
            <span className="mx-1.5">|</span>
            <a href="https://github.com/Anushree401" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
              github.com/Anushree401
            </a>
          </div>
        </header>

        {/* EDUCATION SECTION */}
        <section className="mb-4">
          <h2 className="text-[11.5pt] font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2 font-serif">
            Education
          </h2>
          <div className="space-y-2">
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="text-[10pt]">
                <div className="flex justify-between font-bold text-black">
                  <span>{edu.institution}</span>
                  <span>{edu.location}</span>
                </div>
                <div className="flex justify-between italic text-gray-800">
                  <span>{edu.degree}</span>
                  <span>{edu.period}</span>
                </div>
                {edu.details && (
                  <p className="text-[9.5pt] text-gray-700 mt-0.5">{edu.details}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="mb-4">
          <h2 className="text-[11.5pt] font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2 font-serif">
            Experience
          </h2>
          <div className="space-y-3">
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="text-[10pt]">
                <div className="flex justify-between font-bold text-black">
                  <span>{exp.role}</span>
                  <span>{exp.period}</span>
                </div>
                <div className="flex justify-between italic text-gray-800 mb-1">
                  <span>{exp.company}</span>
                  <span>{exp.location}</span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-0.5 text-gray-800 text-[9.5pt]">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="leading-snug">{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="mb-4">
          <h2 className="text-[11.5pt] font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2 font-serif">
            Projects
          </h2>
          <div className="space-y-3">
            {resumeData.projects.map((proj, idx) => (
              <div key={idx} className="text-[10pt]">
                <div className="flex justify-between text-black">
                  <span>
                    <strong className="font-bold">{proj.name}</strong> | <em className="italic font-normal">{proj.tools}</em>
                  </span>
                  <span className="font-normal">{proj.period}</span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-0.5 text-gray-800 text-[9.5pt] mt-0.5">
                  {proj.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="leading-snug">{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PUBLICATIONS & HONORS SECTION */}
        <section className="mb-4">
          <h2 className="text-[11.5pt] font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2 font-serif">
            Publications & Honors
          </h2>
          <div className="space-y-1 text-[10pt]">
            {resumeData.publications.map((pub, idx) => (
              <div key={`pub-${idx}`} className="flex justify-between text-black">
                <div>
                  <span className="font-bold">"{pub.title}"</span> — <em className="italic">{pub.publisher}</em>
                </div>
                <span>{pub.period}</span>
              </div>
            ))}
            {resumeData.achievements.map((ach, idx) => (
              <div key={`ach-${idx}`} className="flex justify-between text-black">
                <div>
                  <strong className="font-bold">{ach.title}: </strong>
                  <span className="text-gray-800">{ach.details}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNICAL SKILLS SECTION */}
        <section className="mb-1">
          <h2 className="text-[11.5pt] font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2 font-serif">
            Technical Skills
          </h2>
          <div className="text-[10pt] space-y-1 text-gray-800">
            <div>
              <strong className="font-bold text-black">Languages: </strong>
              <span>{resumeData.skills.languages}</span>
            </div>
            <div>
              <strong className="font-bold text-black">Frameworks & Libraries: </strong>
              <span>{resumeData.skills.frameworks}</span>
            </div>
            <div>
              <strong className="font-bold text-black">Security & InfoSec Tools: </strong>
              <span>{resumeData.skills.securityTools}</span>
            </div>
            <div>
              <strong className="font-bold text-black">Developer Tools: </strong>
              <span>{resumeData.skills.devTools}</span>
            </div>
          </div>
        </section>

      </div>

      {/* Global CSS for Print Media (Suppresses Browser Header/Footer and Enforces 1-Page Layout) */}
      <style jsx global>{`
        @media print {
          @page {
            size: letter portrait;
            margin: 0 !important;
          }
          html, body {
            background-color: #fff !important;
            color: #000 !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
          }
          .print-container {
            padding: 0.4in 0.5in !important;
            margin: 0 !important;
            max-width: 100% !important;
            box-shadow: none !important;
            border: none !important;
          }
          .print-hidden {
            display: none !important;
          }
        }
      `}</style>

    </div>
  );
}
