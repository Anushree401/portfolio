import { useState, useCallback } from 'react';

export function useBounce() {
  const [bouncing, setBouncing] = useState(null);
  const bounce = useCallback((id) => {
    setBouncing(id);
    setTimeout(() => setBouncing(null), 600);
  }, []);
  return { bouncing, bounce };
}
