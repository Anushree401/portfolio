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
      className="flex items-center gap-1.5 pl-1.5 pr-3 md:pl-2.5 md:pr-4 py-1.5 bg-[var(--color-bg-primary)] border-2 border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] transition-colors font-mono text-[10px] md:text-xs tracking-widest relative rounded-xl overflow-hidden"
    >
      {isPlaying ? <Volume2 size={14} className="text-[#50fa7b]" /> : <VolumeX size={14} />}
      <span className="hidden sm:inline">{isPlaying ? 'PLAYING' : 'SILENT'}</span>
      <div className="absolute right-[-2px] top-[-2px] bottom-[-2px] w-[5px] bg-[#ff5555] border-y-2 border-r-2 border-[var(--color-border)]" />
    </button>
  );
}
