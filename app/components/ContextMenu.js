'use client';

import { useEffect, useRef } from 'react';

export default function ContextMenu({ x, y, onClose, onOpenTerminal, onRefresh }) {
  const menuRef = useRef(null);

  // Adjust position if near screen edge
  const safeX = typeof window !== 'undefined' ? Math.min(x, window.innerWidth - 220) : x;
  const safeY = typeof window !== 'undefined' ? Math.min(y, window.innerHeight - 180) : y;

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const items = [
    {
      icon: '⌨️',
      label: 'Open Terminal',
      action: () => { onOpenTerminal(); onClose(); },
    },
    { sep: true },
    {
      icon: '↻',
      label: 'Refresh Desktop',
      action: () => { onRefresh(); onClose(); },
    },
    {
      icon: '<Save size={14} />',
      label: 'Save Session',
      action: onClose,
    },
    { sep: true },
    {
      icon: 'ℹ️',
      label: 'About This System',
      action: () => { onOpenTerminal(); onClose(); },
    },
    {
      icon: '<Settings size={14} />️',
      label: 'System Settings',
      action: onClose,
    },
  ];

  return (
    <div
      ref={menuRef}
      className="kali-context-menu"
      style={{ left: safeX, top: safeY }}
      onClick={e => e.stopPropagation()}
    >
      {items.map((item, i) =>
        item.sep ? (
          <div key={i} className="context-sep" />
        ) : (
          <div
            key={i}
            className={`context-item${item.danger ? ' danger' : ''}`}
            onClick={item.action}
          >
            <span className="context-item-icon">{item.icon}</span>
            {item.label}
          </div>
        )
      )}
    </div>
  );
}
