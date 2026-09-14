"use client";

import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Prevent double instantiation in React StrictMode
    if (!audioRef.current) {
      const audio = new Audio('/track.mp3');
      audio.loop = true;
      audio.volume = 0.3;
      audioRef.current = audio;

      // Attempt to autoplay
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Browsers block autoplay without prior user interaction
        setIsPlaying(false);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) {
      const audio = new Audio('/track.mp3');
      audio.loop = true;
      audio.volume = 0.3;
      audioRef.current = audio;
    }
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(e => console.error("Audio playback failed", e));
    }
  };

  return (
    <button 
      onClick={togglePlay}
      className="neo-btn flex items-center gap-2 px-3 md:px-4 py-2 font-mono text-[10px] md:text-xs font-bold tracking-widest cursor-pointer"
      title={isPlaying ? "Mute Background Audio" : "Play Background Audio"}
    >
      {isPlaying ? <Volume2 size={18} className="text-[var(--color-accent-green-theme)] animate-pulse" /> : <VolumeX size={18} className="text-[var(--color-accent-red-theme)]" />}
      <span className="hidden sm:inline">{isPlaying ? 'PLAYING' : 'MUTED'}</span>
    </button>
  );
}
