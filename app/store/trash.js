import { useState, useCallback, useEffect } from 'react';

export function useTrash() {
  const [trash, setTrash] = useState(() => {
    try { 
      if (typeof window !== 'undefined') {
        return JSON.parse(localStorage.getItem('kali-trash') || '[]');
      }
      return [];
    } catch { 
      return [];
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('kali-trash', JSON.stringify(trash));
    }
  }, [trash]);

  const moveToTrash = useCallback((item) => {
    setTrash(t => [{ ...item, deletedAt: Date.now() }, ...t].slice(0, 20));
  }, []);

  const restore = useCallback((id) => {
    let restoredItem = null;
    setTrash(t => {
      const item = t.find(x => x.id === id);
      if (item) {
        restoredItem = item;
      }
      return t.filter(x => x.id !== id);
    });
    // Return a function or find another way since setTrash is async?
    // Actually, we can just find it before calling setTrash.
    const item = trash.find(t => t.id === id);
    return item;
  }, [trash]);

  const empty = useCallback(() => setTrash([]), []);

  const remove = useCallback((id) => {
    setTrash(t => t.filter(x => x.id !== id));
  }, []);

  return { trash, moveToTrash, restore, empty, remove };
}
