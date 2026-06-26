'use client';

import { useState, useRef, useEffect } from 'react';

export default function DraggableWindow({
  win,
  onClose,
  onFocus,
  onMinimize,
  onMaximize,
  onMove,
  children,
}) {
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef(null);
  const winRef = useRef(null);

  useEffect(() => {
    if (!isDragging) return;

    const onMouseMove = (e) => {
      if (!dragOffset.current || !winRef.current) return;
      const newX = Math.max(0, Math.min(
        e.clientX - dragOffset.current.x,
        window.innerWidth - (winRef.current.offsetWidth || win.width)
      ));
      const newY = Math.max(28, Math.min(
        e.clientY - dragOffset.current.y,
        window.innerHeight - 60
      ));
      onMove(win.id, newX, newY);
    };

    const onMouseUp = () => {
      setIsDragging(false);
      dragOffset.current = null;
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging, win.id, win.width, onMove]);

  if (win.minimized) return null;

  const style = win.maximized
    ? {
        left: 0,
        top: 28,
        width: '100vw',
        height: 'calc(100vh - 68px)',
        zIndex: win.z,
        borderRadius: 0,
      }
    : {
        left: win.x,
        top: win.y,
        width: win.width,
        height: win.height,
        zIndex: win.z,
      };

  const handleTitlebarMouseDown = (e) => {
    if (win.maximized) return;
    if (e.target.closest('.kali-window-controls')) return;
    const rect = winRef.current?.getBoundingClientRect();
    if (!rect) return;
    dragOffset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    setIsDragging(true);
    onFocus();
  };

  const handleTitlebarDoubleClick = (e) => {
    if (e.target.closest('.kali-window-controls')) return;
    onMaximize();
  };

  return (
    <div
      ref={winRef}
      className={`kali-window${win.maximized ? ' maximized' : ''}`}
      style={style}
      onMouseDown={(e) => { e.stopPropagation(); onFocus(); }}
    >
      {/* Title Bar */}
      <div
        className="kali-window-titlebar"
        onMouseDown={handleTitlebarMouseDown}
        onDoubleClick={handleTitlebarDoubleClick}
      >
        <div className="kali-window-title">
          <span className="kali-window-icon">{win.icon}</span>
          <span>{win.title}</span>
        </div>
        <div className="kali-window-controls">
          <button
            className="win-btn min-btn"
            title="Minimize"
            onClick={(e) => { e.stopPropagation(); onMinimize(); }}
          >
            ─
          </button>
          <button
            className="win-btn max-btn"
            title={win.maximized ? 'Restore' : 'Maximize'}
            onClick={(e) => { e.stopPropagation(); onMaximize(); }}
          >
            {win.maximized ? '❐' : '□'}
          </button>
          <button
            className="win-btn close-btn"
            title="Close"
            onClick={(e) => { e.stopPropagation(); onClose(); }}
          >
            ✕
          </button>
        </div>
      </div>

      {/* Window Body */}
      <div className="kali-window-body">
        {children}
      </div>
    </div>
  );
}
