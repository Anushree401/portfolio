"use client";

import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/track.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3; // Lower volume by default
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
      className="flex items-center gap-2 px-3 py-2 bg-[var(--color-bg-primary)] border-2 border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] transition-colors font-mono text-sm tracking-widest relative"
    >
      {isPlaying ? <Volume2 size={18} className="text-[#50fa7b]" /> : <VolumeX size={18} />}
      <span className="mr-2">{isPlaying ? 'PLAYING' : 'SILENT'}</span>
      <div className="absolute right-[-2px] top-[-2px] bottom-[-2px] w-[6px] bg-[#ff5555] border-2 border-[var(--color-border)]" />
    </button>
  );
}
