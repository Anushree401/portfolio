'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Twemoji from 'react-twemoji';
import BootScreen from './BootScreen';
import DraggableWindow from './DraggableWindow';
import TerminalApp from './TerminalApp';
import ContextMenu from './ContextMenu';
import Particles from './Particles';
import AppPane from './AppPane';
import Dock from './Dock';
import { useBounce } from '../utils/useBounce';
import ClockWidget from './widgets/ClockWidget';
import HighlightWidget from './widgets/HighlightWidget';
import AboutWidget from './widgets/AboutWidget';


// ── Window metadata ───────────────────────────────────────────────
const APP_META = {
  projects:    { title: 'Metasploit — Projects',           icon: '📂', w: 720, h: 490 },
  internships: { title: 'Burp Suite — Internships',        icon: '💼', w: 680, h: 480 },
  skills:      { title: 'Wireshark — Skills',              icon: '⚡', w: 660, h: 520 },
  leadership:  { title: 'Autopsy — Leadership',            icon: '🏆', w: 660, h: 460 },
  hackathons:  { title: 'TShark — Hackathons',             icon: '🎯', w: 700, h: 500 },
  publications:{ title: 'Lynis — Publications',            icon: '📄', w: 680, h: 480 },
  academics:   { title: 'Cewl — Academics',                icon: '🎓', w: 680, h: 480 },
  contact:     { title: 'Nmap — Contact',                  icon: '📡', w: 540, h: 420 },
  terminal:    { title: 'Terminal — kali@anushree:~$',     icon: '⌨️', w: 880, h: 560 },
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
  
  const { bouncing, bounce } = useBounce();

  const maxZRef   = useRef(100);
  const startTime = useRef(Date.now());

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
    e.stopPropagation();
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
  if (!booted) {
    return <BootScreen onDone={() => setBooted(true)} />;
  }

  return (
    <Twemoji options={{ className: 'twemoji', ext: '.svg', folder: 'svg', base: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/' }}>
      <div
        className="kali-env"
      onClick={() => {
        setContextMenu(null);
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        setContextMenu({ x: e.clientX, y: e.clientY });
      }}
    >
      {/* ── Wallpaper ── */}
      <div className="kali-wallpaper" />

      {/* ── Floating particles ── */}
      <Particles />

      {/* ── Top status bar ── */}
      <div className="kali-topbar">
        <div className="topbar-left">
          <span className="topbar-status">● System Status: ONLINE</span>
          <span className="topbar-hint">Double-click icons · Right-click desktop · Alt+Tab</span>
        </div>
        <span className="topbar-clock">
          {isMounted ? formatTime() : ''}
        </span>
      </div>

      {/* ── Widget Grid ── */}
      <div className="widget-grid">
        <div className="wg-col-left">
          <ClockWidget />
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
            win={{ id: 'main', title: `Anushree OS`, icon: '💻', ...mainWindow }}
            onClose={() => { setTabs([]); setActiveTab(null); setMainWindow(null); }}
            onFocus={() => {}}
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
              <span className="taskbar-icon">💻</span>
              Anushree OS
            </div>
          )}
        </div>
        <div className="taskbar-right">
          {isMounted && (
            <span className="taskbar-uptime">⏱ {formatUptime(uptime)}</span>
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
