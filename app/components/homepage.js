'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Timer, ChevronRight } from 'lucide-react';
import { Flame } from 'lucide-react';
import Image from 'next/image';
import { User, Settings, Trash2, Folder, Briefcase, Zap, Trophy, Target, FileText, GraduationCap, Radio, Terminal, Circle, Menu } from 'lucide-react';

import Twemoji from 'react-twemoji';
import BootScreen from './BootScreen';
import DraggableWindow from './DraggableWindow';
import TerminalApp from './TerminalApp';
import ContextMenu from './ContextMenu';
import Particles from './Particles';
import AppPane from './AppPane';
import Dock from './Dock';
import { useBounce } from '../utils/useBounce';
import QuickViewWidget from './widgets/QuickViewWidget';
import HighlightWidget from './widgets/HighlightWidget';
import AboutWidget from './widgets/AboutWidget';
import Notification from './Notification';
import MatrixRain from './MatrixRain';
import { useSettings } from '../store/settings';
import { useTrash } from '../store/trash';
import AboutApp from './AboutApp';
import SettingsApp from './SettingsApp';
import TrashApp from './TrashApp';

// ── Window metadata ───────────────────────────────────────────────
const APP_META = {
  about:       { title: 'About Anushree',                  icon: <User size={16} />, w: 720, h: 580 },
  system:      { title: 'Settings',                        icon: <Settings size={16} />, w: 780, h: 540 },
  trash:       { title: 'Trash',                           icon: <Trash2 size={16} />, w: 600, h: 500 },
  projects:    { title: 'Metasploit — Projects',           icon: <Folder size={16} />, w: 720, h: 490 },
  internships: { title: 'Burp Suite — Internships',        icon: <Briefcase size={16} />, w: 680, h: 480 },
  skills:      { title: 'Wireshark — Skills',              icon: <Zap size={16} />, w: 660, h: 520 },
  leadership:  { title: 'Autopsy — Leadership',            icon: <Trophy size={16} />, w: 660, h: 460 },
  hackathons:  { title: 'TShark — Hackathons',             icon: <Target size={16} />, w: 700, h: 500 },
  publications:{ title: 'Lynis — Publications',            icon: <FileText size={16} />, w: 680, h: 480 },
  academics:   { title: 'Cewl — Academics',                icon: <GraduationCap size={16} />, w: 680, h: 480 },
  contact:     { title: 'Nmap — Contact',                  icon: <Radio size={16} />, w: 540, h: 420 },
  terminal:    { title: 'Terminal — kali@anushree:~$',     icon: <Terminal size={16} />, w: 880, h: 560 },
};

export default function KaliDesktop() {
  const [booted, setBooted]           = useState(false);
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [mainWindow, setMainWindow] = useState(null);
  const [contextMenu, setContextMenu] = useState(null);
  const [currentTime, setCurrentTime]   = useState(null);
  const [uptime, setUptime]             = useState(0);
  const [isMounted, setIsMounted]       = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [isStaticView, setIsStaticView] = useState(false);
  const [isStaticMenuOpen, setIsStaticMenuOpen] = useState(false);
  
  const { bouncing, bounce } = useBounce();
  const [settings, setSettings] = useSettings();
  const { trash, moveToTrash, restore, empty, remove } = useTrash();

  const maxZRef   = useRef(100);
  const startTime = useRef(Date.now());

  // Auto-scale the OS so it looks identical regardless of screen size or browser zoom
  useEffect(() => {
    const handleResize = () => {
      // 1536px is a standard 100% baseline for a 16:9 laptop screen.
      // By dividing the actual viewport width by 1536, we get a scale factor.
      // If the user zooms in (Ctrl++), innerWidth shrinks, so the zoom shrinks, neutralizing it!
      const isMobile = window.innerWidth <= 900;
      setIsMobileDevice(isMobile);
      const zoomLevel = Math.min(Math.max(window.innerWidth / 1536, 0.4), 1.5);
      document.documentElement.style.setProperty('--os-zoom', zoomLevel);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // trigger immediately
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ── Clock & uptime — only start AFTER boot to prevent re-renders during BootScreen
  useEffect(() => {
    if (!booted) return; // no state updates while boot screen is showing
    setIsMounted(true);
    setCurrentTime(new Date());
    const t = setInterval(() => {
      setCurrentTime(new Date());
      setUptime(Math.floor((Date.now() - startTime.current) / 1000));
    }, 1000);
    return () => clearInterval(t);
  }, [booted]);

  // ── Open terminal shortly after boot ────────────────────────
  // (Disabled so the widgets are visible on a clean desktop immediately)
  // useEffect(() => {
  //   if (!booted) return;
  //   const t = setTimeout(() => openApp('terminal'), 700);
  //   return () => clearTimeout(t);
  // }, [booted]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Keyboard shortcuts ───────────────────────────────────────
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') {
        setContextMenu(null);
      }
      if (e.altKey && e.key === 'Tab') {
        e.preventDefault();
        setTabs(prev => {
          if (prev.length < 2) return prev;
          setActiveTab(current => {
            const idx = prev.findIndex(t => t.id === current);
            return prev[(idx + 1) % prev.length].id;
          });
          return prev;
        });
      }
    };
    window.addEventListener('keydown', handler);

    // Konami code
    const code = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    let i = 0;
    const onKonami = (e) => {
      if (e.key === code[i]) {
        i++;
        if (i === code.length) {
          alert('🐉 30 lives unlocked. Just kidding — but you found the Konami code.');
          i = 0;
        }
      } else {
        i = 0;
      }
    };
    window.addEventListener('keydown', onKonami);

    return () => {
      window.removeEventListener('keydown', handler);
      window.removeEventListener('keydown', onKonami);
    };
  }, []);

  // ── Window management ─────────────────────────────────────────
  const openApp = useCallback((id) => {
    const meta = APP_META[id];
    if (!meta) return;
    
    bounce(id);

    setTabs(prev => {
      if (prev.find(t => t.id === id)) return prev;
      return [...prev, { id, title: meta.title, icon: meta.icon }];
    });
    setActiveTab(id);

    setMainWindow(prev => {
      if (!prev) {
        let targetW = 960;
        let targetH = 640;
        let safeX = 80;
        let safeY = 60;
        
        if (typeof window !== 'undefined') {
          targetW = Math.min(targetW, window.innerWidth - 20);
          targetH = Math.min(targetH, window.innerHeight - 80);
          safeX = Math.max(0, (window.innerWidth - targetW) / 2);
          safeY = Math.max(28, (window.innerHeight - targetH) / 2);
        }
        return {
          x: safeX,
          y: safeY,
          width: targetW,
          height: targetH,
          minimized: false,
          maximized: typeof window !== 'undefined' && window.innerWidth <= 768, // Auto-maximize on small screens
          z: 100,
        };
      }
      return { ...prev, minimized: false };
    });
  }, [bounce]);

  const closeTab = (id, e) => {
    if (e) e.stopPropagation();
    
    const win = tabs.find(w => w.id === id);
    if (win) moveToTrash({ id: win.id, title: win.title, icon: win.icon, type: 'window' });

    setTabs(prev => {
      const filtered = prev.filter(t => t.id !== id);
      if (filtered.length === 0) {
        setMainWindow(null);
        setActiveTab(null);
      } else if (activeTab === id) {
        setActiveTab(filtered[filtered.length - 1].id);
      }
      return filtered;
    });
  };

  // ── Helpers ──────────────────────────────────────────────────
  const formatTime = () => {
    if (!currentTime) return '';
    return currentTime.toLocaleString('en-US', {
      weekday: 'short', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      hour12: true,
    });
  };

  const formatUptime = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    if (h > 0) return `${h}h ${m}m`;
    if (m > 0) return `${m}m ${sec}s`;
    return `${sec}s`;
  };

  // ── Boot gate ────────────────────────────────────────────────
  if (!booted && !isMobileDevice) {
    return <BootScreen onDone={() => setBooted(true)} />;
  }

  // ── Mobile & Static View Fallback ──────────────────────────────────────
  if (isStaticView || isMobileDevice) {
    const staticApps = Object.keys(APP_META).filter(k => !['terminal', 'system', 'trash'].includes(k));

    return (
      <div className="static-view-container" style={{ height: '100dvh', overflowY: 'auto', scrollBehavior: 'smooth', background: '#0a0e1a', color: '#c0c0c0', padding: '20px', paddingTop: 'env(safe-area-inset-top, 20px)', paddingBottom: 'env(safe-area-inset-bottom, 20px)', fontFamily: '"JetBrains Mono", monospace' }}>
        
        {!isMobileDevice && (
          <button onClick={() => setIsStaticView(false)} style={{ position: 'sticky', top: '20px', left: '20px', zIndex: 100, marginBottom: '20px', padding: '6px 12px', background: 'rgba(80, 250, 123, 0.15)', color: '#50fa7b', border: '1px solid #50fa7b', borderRadius: '6px', cursor: 'pointer', fontFamily: '"JetBrains Mono", monospace', fontSize: '13px', fontWeight: 'bold', boxShadow: '0 0 12px rgba(80, 250, 123, 0.3)', backdropFilter: 'blur(4px)' }}>
            [ ⬅ Back to OS ]
          </button>
        )}
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '800px', margin: '0 auto', paddingBottom: '100px' }}>
          
          {/* Mobile Hero (Quick View) */}
          <div style={{ marginBottom: '10px' }}>
            <QuickViewWidget />
          </div>

          {staticApps.map(id => {
            let AppContent;
            if (id === 'about') AppContent = <AboutApp />;
            else AppContent = <AppPane id={id} />;

            return (
              <div id={`static-${id}`} key={id} style={{ background: '#13161e', border: '1px solid rgba(80, 250, 123, 0.4)', borderRadius: '8px', padding: '0', overflow: 'hidden', minHeight: '400px' }}>
                {AppContent}
              </div>
            );
          })}
        </div>

        {/* Floating Right Menu Toggle */}
        <button 
          onClick={() => setIsStaticMenuOpen(!isStaticMenuOpen)}
          style={{ position: 'fixed', right: '20px', bottom: '20px', zIndex: 101, background: 'rgba(13, 17, 23, 0.9)', color: '#8be9fd', border: '1px solid rgba(80, 250, 123, 0.4)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}
        >
          <Menu size={24} />
        </button>

        {/* Floating Right Menu */}
        <div style={{ position: 'fixed', right: '30px', bottom: '80px', display: isStaticMenuOpen ? 'flex' : 'none', flexDirection: 'column', gap: '12px', zIndex: 100, background: 'rgba(13, 17, 23, 0.95)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(80, 250, 123, 0.2)', backdropFilter: 'blur(10px)', boxShadow: '0 10px 30px rgba(0,0,0,0.8)' }}>
          {staticApps.map(id => (
            <a 
              key={id} 
              href={`#static-${id}`}
              onClick={() => setIsStaticMenuOpen(false)}
              className="static-nav-btn"
              style={{
                position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '8px', color: '#8be9fd', transition: 'all 0.2s', textDecoration: 'none'
              }}
            >
              {APP_META[id].icon}
              <span className="static-nav-label">
                {APP_META[id].title.includes('—') ? APP_META[id].title.split('—')[1].trim() : APP_META[id].title.trim()}
              </span>
            </a>
          ))}
        </div>
        <style>{`
          .static-nav-btn:hover {
            background: rgba(139, 233, 253, 0.2);
            color: #fff !important;
            transform: scale(1.1);
          }
          .static-nav-label {
            position: absolute;
            right: 100%;
            margin-right: 14px;
            background: rgba(13, 17, 23, 0.95);
            color: #fff;
            padding: 6px 10px;
            border-radius: 6px;
            font-size: 12px;
            white-space: nowrap;
            opacity: 0;
            pointer-events: none;
            transform: translateX(10px);
            transition: all 0.2s ease;
            border: 1px solid rgba(139, 233, 253, 0.3);
            box-shadow: 0 4px 12px rgba(0,0,0,0.5);
          }
          .static-nav-btn:hover .static-nav-label {
            opacity: 1;
            transform: translateX(0);
          }
        `}</style>
      </div>
    );
  }

  const WALLPAPERS = {
    dragon:   "url('/tools/blank_homepage.jpg') center/cover no-repeat",
    grid:     'linear-gradient(135deg, #0a0e1a 0%, #1a0f2e 50%, #0a0e1a 100%)',
    matrix:   '#000',
    mountains: 'url(/mountains.jpg) center/cover no-repeat',
    solid:    '#000',
  };

  return (
    <Twemoji options={{ className: 'twemoji', ext: '.svg', folder: 'svg', base: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/' }}>
      <div
        className={`kali-env ${settings.highContrast ? 'high-contrast' : ''} ${settings.largeText ? 'large-text' : ''}`}
        style={{ 
          opacity: isMounted ? 1 : 0,
          '--accent': settings.accent || '#50fa7b',
          '--font-size': `${settings.fontSize || 14}px`,
          '--bg-opacity': (settings.opacity || 70) / 100,
        }}
        onClick={(e) => {
          setContextMenu(null);
        }}
        onDoubleClick={(e) => {
          if (!e.target.closest('.kali-window') && !e.target.closest('.dock-wrap') && !e.target.closest('.kali-taskbar')) {
            setMainWindow(w => w ? { ...w, z: 100 } : null);
          }
        }}
        onContextMenu={(e) => {
          e.preventDefault();
          setContextMenu({ x: e.clientX, y: e.clientY });
        }}
      >
        <style>{`
          .kali-env {
            font-size: var(--font-size, 13px);
            --window-bg: rgba(13, 17, 23, var(--bg-opacity, 0.65));
            zoom: var(--os-zoom, 1);
            width: calc(100vw / var(--os-zoom, 1));
            height: calc(100dvh / var(--os-zoom, 1));
          }
          .app-window { background: var(--window-bg) !important; }
          .kali-env.high-contrast { filter: contrast(1.5); }
          .kali-env.large-text { --font-size: 16px; }
          ${settings.scanlines ? `
          .kali-env::after {
            content: ''; position: fixed; inset: 0;
            background: repeating-linear-gradient(0deg, transparent 0, transparent 2px, rgba(0,0,0,0.1) 3px);
            pointer-events: none; z-index: 9999;
          }
          ` : ''}
          ${settings.reduceMotion ? `
          * { animation: none !important; transition: none !important; }
          ` : ''}
        `}</style>
      {/* ── Wallpaper ── */}
      <div className="kali-wallpaper" style={{ background: WALLPAPERS[settings.wallpaper] || '#000' }} />
      {settings.wallpaper === 'matrix' && <MatrixRain />}

      {/* ── Floating particles ── */}
      <Particles />

      {/* ── Top status bar ── */}
      <div className="kali-topbar">
        <div className="topbar-left">
          <span className="topbar-status">● System Status: ONLINE</span>
          <span className="topbar-hint">Double-click icons · Right-click desktop · Alt+Tab</span>
          <button onClick={() => setIsStaticView(true)} style={{ background: 'transparent', border: '1px solid rgba(139, 233, 253, 0.5)', color: '#8be9fd', borderRadius: '4px', padding: '2px 8px', fontSize: '10px', cursor: 'pointer' }}>Static View</button>
        </div>
        <span className="topbar-clock" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={() => window.dispatchEvent(new Event('show-notification'))} style={{ background: 'transparent', border: 'none', color: '#a0a0a0', cursor: 'pointer', fontSize: '10px', padding: 0 }} title="System Help">
            [?]
          </button>
          {isMounted ? formatTime() : ''}
        </span>
      </div>

      <Notification />

      {/* ── Widget Grid ── */}
      <div className="widget-grid">
        <div className="wg-col-left">
          <QuickViewWidget />
          <HighlightWidget />
        </div>
        <div className="wg-col-right">
          <AboutWidget onTrack={(id) => openApp('terminal')} />
        </div>
      </div>

      {/* ── Dock ── */}
      <Dock openWindows={tabs} onOpen={openApp} bouncing={bouncing} />

      {/* ── Unified Tabbed Window */}
        {mainWindow && tabs.length > 0 && (
          <DraggableWindow
            win={{ id: 'main', title: `Anushree OS`, icon: <Terminal size={14} />, ...mainWindow }}
            onClose={() => { setTabs([]); setActiveTab(null); setMainWindow(null); }}
            onFocus={() => setMainWindow(w => w ? { ...w, z: 1000 } : null)}
            onMinimize={() => setMainWindow(w => ({ ...w, minimized: true }))}
            onMaximize={() => setMainWindow(w => ({ ...w, maximized: !w.maximized }))}
            onMove={(id, x, y) => setMainWindow(w => ({ ...w, x, y }))}
          >
            <div className="main-window-container">
              <div className="tab-bar">
                {tabs.map(t => (
                  <div 
                    key={t.id} 
                    className={`tab ${activeTab === t.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(t.id)}
                  >
                    <span className="tab-icon">{t.icon}</span>
                    <span className="tab-title">{t.title.split('—')[0].trim()}</span>
                    <div className="tab-close" onClick={(e) => closeTab(t.id, e)}>×</div>
                  </div>
                ))}
              </div>
              <div className="tab-content">
                {tabs.map(t => (
                  <div key={t.id} style={{ display: activeTab === t.id ? 'block' : 'none', height: '100%' }}>
                    {t.id === 'terminal' ? (
                      <TerminalApp openApp={openApp} />
                    ) : t.id === 'about' ? (
                      <AboutApp 
                        onClose={() => closeTab('about')}
                        onAction={(action, arg) => {
                          switch (action) {
                            case 'cv':       window.open('/cvs/Anushree_Balaji_Resume.pdf', '_blank'); break;
                            case 'email':    window.location.href = 'mailto:anushree1606balaji@gmail.com'; break;
                            case 'github':   window.open('https://github.com/Anushree401', '_blank'); break;
                            case 'linkedin': window.open('https://www.linkedin.com/in/anushree-balaji-a71b9a255', '_blank'); break;
                            case 'open':     openApp(arg); break;
                          }
                        }}
                      />
                    ) : t.id === 'system' ? (
                      <SettingsApp settings={settings} setSettings={setSettings} />
                    ) : t.id === 'trash' ? (
                      <TrashApp 
                        trash={trash}
                        onRestore={(itemId) => {
                          const item = restore(itemId);
                          if (item) openApp(item.id);
                        }}
                        onEmpty={() => { empty(); closeTab('trash'); }}
                        onRemove={remove}
                        onClose={() => closeTab('trash')}
                      />
                    ) : (
                      <AppPane id={t.id} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </DraggableWindow>
        )}

      <div className="kali-taskbar">
        <div className="taskbar-apps">
          {mainWindow && tabs.length > 0 && (
            <div
              className={`taskbar-btn${mainWindow.minimized ? ' minimized' : ' active'}`}
              onClick={() => setMainWindow(w => ({ ...w, minimized: !w.minimized }))}
            >
              <span className="taskbar-icon"><Terminal size={14} /></span>
              Anushree OS
            </div>
          )}
        </div>
        <div className="taskbar-right">
          <div className="taskbar-profile" onClick={() => openApp('about')}>
            <span className="profile-dot" />
            <span>kali@anushree</span>
            <span className="profile-arrow"><ChevronRight size={14} /></span>
          </div>
          {isMounted && (
            <span className="taskbar-uptime"><Timer size={14} /> {formatUptime(uptime)}</span>
          )}
          <span className="taskbar-shortcut">Alt+Tab</span>
          {isMounted && currentTime && (
            <span style={{ color: '#8be9fd' }}>
              {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
            </span>
          )}
        </div>
      </div>

      {/* ── Context menu ── */}
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={() => setContextMenu(null)}
          onOpenTerminal={() => openApp('terminal')}
          onRefresh={() => {
            if (typeof window !== 'undefined') window.location.reload();
          }}
        />
      )}
    </div>
    </Twemoji>
  );
}
