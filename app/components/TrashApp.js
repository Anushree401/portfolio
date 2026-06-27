import { useEffect, useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

import { FileText, RefreshCw, Trash2, Folder, Archive } from 'lucide-react';
export default function TrashApp({ trash, onRestore, onEmpty, onRemove, onClose }) {
  const [confirm, setConfirm] = useState(false);

  useEffect(() => { setConfirm(false); }, [trash]);

  return (
    <div className="trash-app">
      <div className="trash-toolbar">
        <span className="trash-count">{trash.length} item{trash.length !== 1 ? 's' : ''}</span>
        <div className="trash-actions">
          {trash.length > 0 && (
            <>
              <button onClick={() => {
                if (confirm) {
                  onEmpty();
                } else {
                  setConfirm(true);
                }
              }}>
                {confirm ? <><AlertTriangle size={14} /> Click again to confirm</> : <><Trash2 size={14} /> Empty trash</>}
              </button>
            </>
          )}
        </div>
      </div>

      {trash.length === 0 ? (
        <div className="trash-empty">
          <div className="empty-icon"></div>
          <p>Trash is empty</p>
          <small>Closed windows go here. You can restore them.</small>
        </div>
      ) : (
        <div className="trash-grid">
          {trash.map((item, index) => (
            <div key={`${item.id}-${index}`} className="trash-item">
              <div className="trash-icon"><Archive size={16} /></div>
              <div className="trash-name">{item.title}</div>
              <div className="trash-meta">
                deleted {formatTime(item.deletedAt)}
              </div>
              <div className="trash-actions-row">
                <button onClick={() => onRestore(item.id)} className="restore">↩ Restore</button>
                <button onClick={() => onRemove(item.id)} className="perm"><X size={14} /></button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function formatTime(ts) {
  const s = Math.floor((Date.now() - ts) / 1000);
  if (s < 60) return `${s}s ago`;
  if (s < 3600) return `${Math.floor(s/60)}m ago`;
  if (s < 86400) return `${Math.floor(s/3600)}h ago`;
  return `${Math.floor(s/86400)}d ago`;
}
