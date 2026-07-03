"use client";

import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/track.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3; // Lower volume by default
    
    // Attempt to autoplay
    audioRef.current.play().catch(() => {
      // Browsers block autoplay without interaction; silently revert state
      setIsPlaying(false);
    });
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Audio playback failed", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button 
      onClick={togglePlay}
      className="neo-btn flex items-center gap-2 px-3 md:px-4 py-2 font-mono text-[10px] md:text-xs font-bold tracking-widest"
    >
      {isPlaying ? <Volume2 size={18} className="text-[var(--color-accent-green-theme)]" /> : <VolumeX size={18} className="text-[var(--color-accent-red-theme)]" />}
      <span className="hidden sm:inline">{isPlaying ? 'PLAYING' : 'SILENT'}</span>
    </button>
  );
}
