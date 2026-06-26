'use client';

import { useMemo } from 'react';

export default function Particles({ count = 28 }) {
  const particles = useMemo(() => (
    Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 2.5 + 1,
      left: Math.random() * 100,
      duration: Math.random() * 28 + 18,
      delay: Math.random() * 20,
    }))
  ), [count]);

  return (
    <div className="particles-layer">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
