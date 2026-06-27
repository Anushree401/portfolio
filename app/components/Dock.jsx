import { useState } from 'react';
import { User, Settings, Trash2 } from 'lucide-react';
import Image from 'next/image';

const DOCK_APPS = [
  { id: 'projects',    label: 'Projects',     image: '/tools/metasploit.png', toolName: 'Metasploit' },
  { id: 'skills',      label: 'Skills',       image: '/tools/wireshark.png',  toolName: 'Wireshark'  },
  { id: 'internships', label: 'Internships',  image: '/tools/burp.png',       toolName: 'Burp Suite' },
  { id: 'leadership',  label: 'Leadership',   image: '/tools/autopsy.png',    toolName: 'Autopsy'    },
  { id: 'hackathons',  label: 'Hackathons',   image: '/tools/tshark.png',     toolName: 'TShark'     },
  { id: 'publications',label: 'Publications', image: '/tools/lynis.png',      toolName: 'Lynis'      },
  { id: 'academics',   label: 'Academics',    image: '/tools/cewl.png',       toolName: 'Cewl'       },
  { id: 'contact',     label: 'Contact',      image: '/tools/nmap.png',       toolName: 'Nmap'       },
  { id: 'terminal',    label: 'Terminal',     image: '/tools/terminal.png',   toolName: 'Terminal'   },
];

export default function Dock({ openWindows = [], onOpen, bouncing }) {
  const [hoverIdx, setHoverIdx] = useState(null);

  // The "magical" hover effect: icons scale up & shift apart to make room
  const getScale = (i) => {
    if (hoverIdx === null) return 1;
    if (typeof hoverIdx === 'string') return 1; // handling sys/trash hover
    const dist = Math.abs(i - hoverIdx);
    if (dist === 0) return 1.4;
    if (dist === 1) return 1.2;
    if (dist === 2) return 1.05;
    return 1;
  };

  const isOpen = (id) => openWindows.some(w => w.id === id && !w.minimized);

  return (
    <div className="dock-wrap">
      <div className="dock">
        {DOCK_APPS.map((app, i) => (
          <div
            key={app.id}
            className={`dock-item ${isOpen(app.id) ? 'open' : ''} ${bouncing === app.id ? 'bounce' : ''}`}
            style={{
              transform: `translateY(${(getScale(i) - 1) * -10}px) scale(${getScale(i)})`,
              zIndex: hoverIdx === i ? 10 : 1,
            }}
            onMouseEnter={() => setHoverIdx(i)}
            onMouseLeave={() => setHoverIdx(null)}
            onClick={() => onOpen(app.id)}
            onContextMenu={(e) => e.preventDefault()}
          >
            {hoverIdx === i && <div className="dock-tooltip">{app.label}</div>}
            <div className="dock-icon">
              <Image
                src={app.image}
                alt={app.toolName}
                width={52}
                height={52}
                unoptimized
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                draggable={false}
              />
            </div>
            {isOpen(app.id) && <div className="dock-dot" />}
          </div>
        ))}
        {[{ id: 'about', label: 'About Me', icon: <User size={30} color="var(--accent)" fill="var(--accent)" /> }].map((app, i) => {
          const idx = DOCK_APPS.length + i;
          return (
            <div
              key={app.id}
              className={`dock-item ${isOpen(app.id) ? 'open' : ''} ${bouncing === app.id ? 'bounce' : ''}`}
              style={{
                transform: `translateY(${(getScale(idx) - 1) * -10}px) scale(${getScale(idx)})`,
                zIndex: hoverIdx === idx ? 10 : 1,
              }}
              onMouseEnter={() => setHoverIdx(idx)}
              onMouseLeave={() => setHoverIdx(null)}
              onClick={() => onOpen(app.id)}
              onContextMenu={(e) => e.preventDefault()}
            >
              {hoverIdx === idx && <div className="dock-tooltip">{app.label}</div>}
              <div className="dock-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                {app.icon}
              </div>
              {isOpen(app.id) && <div className="dock-dot" />}
            </div>
          );
        })}
        <div className="dock-separator" />
        {[{ id: 'system', label: 'Settings', icon: <Settings size={30} color="var(--accent)" fill="var(--accent)" /> }, { id: 'trash', label: 'Trash', icon: <Trash2 size={30} color="var(--accent)" fill="var(--accent)" /> }].map((app, i) => {
          const idx = DOCK_APPS.length + 1 + i;
          return (
            <div
              key={app.id}
              className={`dock-item ${isOpen(app.id) ? 'open' : ''} ${bouncing === app.id ? 'bounce' : ''}`}
              style={{
                transform: `translateY(${(getScale(idx) - 1) * -10}px) scale(${getScale(idx)})`,
                zIndex: hoverIdx === idx ? 10 : 1,
              }}
              onMouseEnter={() => setHoverIdx(idx)}
              onMouseLeave={() => setHoverIdx(null)}
              onClick={() => onOpen(app.id)}
              onContextMenu={(e) => e.preventDefault()}
            >
              {hoverIdx === idx && <div className="dock-tooltip">{app.label}</div>}
              <div className="dock-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                {app.icon}
              </div>
              {isOpen(app.id) && <div className="dock-dot" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
