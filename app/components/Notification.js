'use client';

import { useState, useEffect } from 'react';

export default function Notification() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show notification shortly after boot/mount
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000);

    // Auto-hide after 10 seconds
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 12000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="kali-notification">
      <div className="notification-header">
        <span className="notification-title">🔔 System Alert</span>
        <button className="notification-close" onClick={() => setVisible(false)}>✕</button>
      </div>
      <div className="notification-body">
        <p><strong>Welcome to Kali Desktop!</strong></p>
        <ul>
          <li>Click icons in the bottom dock to open apps.</li>
          <li>Right-click anywhere for context menu.</li>
          <li>Drag windows by their title bars.</li>
        </ul>
      </div>
    </div>
  );
}
