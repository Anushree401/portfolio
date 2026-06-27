'use client';

import { useState, useEffect } from 'react';
import { User, Folder, Briefcase, Zap, Trophy, FileText, GraduationCap, Radio, Menu, X, Terminal } from 'lucide-react';
import Image from 'next/image';
import Particles from './Particles';
import AppPane from './AppPane';
import AboutApp from './AboutApp';

const APP_META = {
  about:       { title: 'About',          icon: <User size={18} /> },
  projects:    { title: 'Projects',       icon: <Folder size={18} /> },
  skills:      { title: 'Skills',         icon: <Zap size={18} /> },
  internships: { title: 'Internships',    icon: <Briefcase size={18} /> },
  leadership:  { title: 'Timeline',       icon: <Trophy size={18} /> },
  publications:{ title: 'Publications',   icon: <FileText size={18} /> },
  academics:   { title: 'Academics',      icon: <GraduationCap size={18} /> },
  contact:     { title: 'Contact',        icon: <Radio size={18} /> },
};

export default function ModernPortfolio() {
  const [activeTab, setActiveTab] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navItems = Object.keys(APP_META);

  if (!isMounted) return null;

  return (
    <div className="modern-layout">
      {/* Background */}
      <div className="bg-layer">
        <Image 
          src="/tools/blank_homepage.jpg" 
          alt="Wallpaper" 
          fill 
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.3 }} 
          priority
        />
        <Particles />
      </div>

      {/* Mobile Header */}
      <div className="mobile-header">
        <div className="logo">
          <Terminal size={20} className="text-cyan-400" />
          <span>Anushree Balaji</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="menu-btn">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`main-wrapper ${isMobileMenuOpen ? 'menu-open' : ''}`}>
        {/* Sidebar Nav */}
        <aside className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="sidebar-logo">
            <Terminal size={24} className="text-cyan-400" />
            <div className="logo-text">
              <h2>Anushree Balaji</h2>
              <p>AI / Cybersec / Dev</p>
            </div>
          </div>
          <nav className="nav-menu">
            {navItems.map(id => (
              <button
                key={id}
                className={`nav-item ${activeTab === id ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(id);
                  setIsMobileMenuOpen(false);
                }}
              >
                <span className="nav-icon">{APP_META[id].icon}</span>
                <span className="nav-label">{APP_META[id].title}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="content-area">
          <div className="content-container">
            {activeTab === 'about' ? <AboutApp /> : <AppPane id={activeTab} />}
          </div>
        </main>
      </div>

      <style>{`
        .modern-layout {
          position: relative;
          width: 100vw;
          height: 100dvh;
          overflow: hidden;
          background: #0a0e17;
          color: #c0c0c0;
          font-family: var(--font-geist-sans), sans-serif;
          display: flex;
          flex-direction: column;
        }
        .bg-layer {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }
        .mobile-header {
          display: none;
          position: sticky;
          top: 0;
          z-index: 50;
          height: 80px;
          background: rgba(10, 14, 23, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0 24px;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
        .mobile-header .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'JetBrains Mono', monospace;
          color: #fff;
          font-weight: 700;
          font-size: 18px;
          letter-spacing: -0.5px;
        }
        .menu-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #8be9fd;
          cursor: pointer;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .menu-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.05);
        }
        .main-wrapper {
          display: flex;
          flex: 1;
          height: 100%;
          position: relative;
          z-index: 10;
        }
        .sidebar {
          width: 260px;
          height: 100%;
          background: rgba(15, 20, 30, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-right: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          flex-direction: column;
          padding: 32px 20px;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .sidebar-logo {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 40px;
          padding: 0 12px;
        }
        .logo-text h2 {
          font-family: 'JetBrains Mono', monospace;
          font-size: 16px;
          color: #fff;
          margin: 0 0 4px 0;
        }
        .logo-text p {
          font-size: 12px;
          color: #8be9fd;
          margin: 0;
        }
        .nav-menu {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 16px;
          background: transparent;
          border: 1px solid transparent;
          color: #a0a0a0;
          padding: 12px 16px;
          border-radius: 12px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s ease;
          text-align: left;
        }
        .nav-item:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
        }
        .nav-item.active {
          background: rgba(139, 233, 253, 0.1);
          border: 1px solid rgba(139, 233, 253, 0.3);
          color: #8be9fd;
          box-shadow: 0 4px 15px rgba(139, 233, 253, 0.1);
        }
        .content-area {
          flex: 1;
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 40px;
          scroll-behavior: smooth;
        }
        .content-container {
          max-width: 900px;
          margin: 0 auto;
          background: rgba(19, 22, 30, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(139, 233, 253, 0.2);
          border-radius: 16px;
          min-height: calc(100% - 40px);
          padding: 32px;
          animation: fadeSlideUp 0.4s ease-out;
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Mobile Adjustments */
        @media (max-width: 768px) {
          .modern-layout {
            height: 100dvh;
          }
          .mobile-header {
            display: flex;
          }
          .sidebar {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            z-index: 40;
            transform: translateX(-100%);
            width: 280px;
            background: rgba(15, 20, 30, 0.95);
          }
          .sidebar.open {
            transform: translateX(0);
            box-shadow: 10px 0 30px rgba(0,0,0,0.5);
          }
          .content-area {
            padding: 20px;
          }
          .content-container {
            padding: 20px;
            border-radius: 12px;
            min-height: auto;
          }
        }
      `}</style>
    </div>
  );
}
