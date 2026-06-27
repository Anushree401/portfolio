'use client';

import { useState, useEffect } from 'react';
import { Bell, X, AlertTriangle } from 'lucide-react';

export default function Notification() {
  const [visible, setVisible] = useState(false);
  const [mobileVisible, setMobileVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = typeof window !== 'undefined' && window.innerWidth <= 900;
    setIsMobile(checkMobile);

    // Show notification shortly after boot/mount
    const timer = setTimeout(() => {
      setVisible(true);
      if (checkMobile) setMobileVisible(true);
    }, 2000);

    // Auto-hide after 10-12 seconds
    const hideTimer = setTimeout(() => {
      setVisible(false);
      setMobileVisible(false);
    }, 12000);

    const handleShow = () => {
      setVisible(true);
      if (typeof window !== 'undefined' && window.innerWidth <= 900) {
        setMobileVisible(true);
      }
      setTimeout(() => {
        setVisible(false);
        setMobileVisible(false);
      }, 10000);
    };
    window.addEventListener('show-notification', handleShow);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
      window.removeEventListener('show-notification', handleShow);
    };
  }, []);

  if (!visible && !mobileVisible) return null;

  return (
    <div className="kali-notifications-wrapper">
      {visible && (
        <div className="kali-notification">
          <div className="notification-header">
            <span className="notification-title"><Bell size={14} /> System Alert</span>
            <button className="notification-close" onClick={() => setVisible(false)}><X size={14} /></button>
          </div>
          <div className="notification-body">
            <p><strong>Welcome to Kali Desktop!</strong></p>
            <ul>
              <li>Click icons in the bottom dock to open apps.</li>
              <li>On mobile, scroll the bottom dock horizontally for more apps.</li>
              <li>Right-click anywhere for context menu.</li>
              <li>Drag windows by their title bars.</li>
            </ul>
          </div>
        </div>
      )}

      {isMobile && mobileVisible && (
        <div className="kali-notification" style={{ borderLeft: '3px solid #ff79c6', animationDelay: '0.2s' }}>
          <div className="notification-header">
            <span className="notification-title" style={{ color: '#ff79c6' }}><AlertTriangle size={14} /> Mobile Warning</span>
            <button className="notification-close" onClick={() => setMobileVisible(false)}><X size={14} /></button>
          </div>
          <div className="notification-body">
            <p style={{ color: '#ff79c6', marginBottom: '8px' }}><strong>✨ Optimal Performance ✨</strong></p>
            <p style={{ lineHeight: '1.5' }}>Woah there, hacker! 🕵️‍♂️ While you can browse on your phone, it is <strong>highly recommended</strong> to use a Desktop for the true, uncompromised 1337 experience. 💻🚀</p>
          </div>
        </div>
      )}
    </div>
  );
}
