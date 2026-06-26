import React from 'react';

// Color legend:
// [g] = green   [c] = cyan    [y] = yellow
// [p] = pink    [w] = white   [d] = dim gray   [r] = red
export function renderColored(text) {
  if (typeof text !== 'string') return text;
  const regex = /\[(\w+)\]([\s\S]*?)\[\/\1\]/g;
  const out = [];
  let last = 0, key = 0, m;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(<span key={key++} className={`term-${m[1]}`}>{m[2]}</span>);
    last = regex.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}
