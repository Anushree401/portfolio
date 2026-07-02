"use client";

import { useEffect, useState } from "react";

export default function CursorGrid() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };
    
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 transition-all duration-300">
      <div 
        className="absolute inset-0 opacity-30" 
        style={{
          backgroundImage: `linear-gradient(var(--color-text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-primary) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: isVisible 
            ? `radial-gradient(300px circle at ${position.x}px ${position.y}px, black 0%, rgba(0,0,0,0.25) 100%)`
            : `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25))`,
          WebkitMaskImage: isVisible 
            ? `radial-gradient(300px circle at ${position.x}px ${position.y}px, black 0%, rgba(0,0,0,0.25) 100%)`
            : `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25))`
        }}
      />
    </div>
  );
}
