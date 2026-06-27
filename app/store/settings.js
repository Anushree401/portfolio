import { useEffect, useState } from 'react';

const DEFAULTS = {
  wallpaper: 'dragon',
  accent: '#50fa7b',
  opacity: 70,
  fontSize: 14,
  scanlines: true,
  reduceMotion: false,
  bootSound: true,
  keySound: true,
  winSound: true,
  volume: 50,
  highContrast: false,
  largeText: false,
  cursorBlink: 1000,
  vpn: false,
  tor: false,
  lastDeployed: new Date().toLocaleDateString(),
};

export function useSettings() {
  const [settings, setSettings] = useState(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = JSON.parse(localStorage.getItem('kali-settings'));
        if (saved && saved.fontSize === 13) saved.fontSize = 14;
        return { ...DEFAULTS, ...saved };
      }
      return DEFAULTS;
    } catch {
      return DEFAULTS;
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('kali-settings', JSON.stringify(settings));
      // Apply to CSS variables live
      const root = document.documentElement;
      root.style.setProperty('--accent', settings.accent);
      root.style.setProperty('--bg-opacity', settings.opacity / 100);
      root.style.setProperty('--font-size', settings.fontSize + 'px');
      
      document.body.classList.toggle('high-contrast', settings.highContrast);
      document.body.classList.toggle('reduce-motion', settings.reduceMotion);
      document.body.classList.toggle('scanlines-on', settings.scanlines);
      document.body.dataset.wallpaper = settings.wallpaper;
    }
  }, [settings]);

  return [settings, setSettings];
}
