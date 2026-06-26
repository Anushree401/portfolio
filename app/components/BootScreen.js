'use client';

import { useState, useEffect, useRef } from 'react';

// Exactly 20 lines — each appears at 70ms → all done in ~1.4s
const BOOT_LINES = [
  { text: '[    0.000000] Linux version 6.6.9-amd64 (debian@kali)', type: 'kernel' },
  { text: '[    0.012345] Command line: BOOT_IMAGE=/boot/vmlinuz root=UUID=kali quiet splash', type: 'kernel' },
  { text: '[    0.123456] x86/fpu: Supporting XSAVE feature 0x002: SSE registers', type: 'kernel' },
  { text: '[    0.234567] BIOS-provided physical RAM map: 16384MB available', type: 'kernel' },
  { text: '[    0.345678] PCI: Using configuration type 1 for base access', type: 'kernel' },
  { text: '[    0.456789] cryptd: max_cpu_qlen set to 1000', type: 'kernel' },
  { text: '[    0.678901] ACPI: bus type USB registered', type: 'kernel' },
  { text: '[    1.012345] SCSI subsystem initialized', type: 'kernel' },
  { text: '[    1.234567] usbcore: registered new interface driver usbfs', type: 'kernel' },
  { text: '[    1.345678] NetLabel: Initializing', type: 'kernel' },
  { text: '[    1.456789] Bluetooth: Core ver 2.22 registered', type: 'kernel' },
  { text: '[    1.567890] Loading firewall rules...', type: 'info' },
  { text: '[  OK  ] Started Network Manager.', type: 'ok' },
  { text: '[  OK  ] Reached target Local Encrypted Volumes.', type: 'ok' },
  { text: '[  OK  ] Started Periodic Command Scheduler.', type: 'ok' },
  { text: '[  OK  ] Reached target Multi-User System.', type: 'ok' },
  { text: '[  OK  ] Started Kali GNU/Linux Rolling.', type: 'ok' },
  { text: '[  OK  ] Reached target Graphical Interface.', type: 'ok' },
  { text: '[  OK  ] Started User Manager for UID 1000.', type: 'ok' },
  { text: '[  OK  ] Loading portfolio data... done.', type: 'ok' },
];

const KALI_DRAGON = `
       _,met\\$\\$\\$\\$\\$gg.
    ,g\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$P.
  ,g\\$\\$P"     """Y\\$\\$.".
 ,\\$\\$P'              \`\\$\\$\\$.
',\\$\\$P       ,ggs.     \`\\$\\$b:
\`d\\$\\$'     ,\\$P"'   .    \\$\\$\\$\\$
 \\$\\$P      d\\$'     ,    \\$\\$P
 \\$\\$:      \\$\\$.   -    ,d\\$\\$'
 \\$\\$;      Y\\$b._   _,d\\$P'
 Y\\$\\$.    \`.\`"Y\\$\\$\\$\\$P"'
 \`\\$\\$b      "-.__
  \`Y\\$\\$
   \`Y\\$\\$.
     \`\\$\\$b.
       \`Y\\$\\$b.
          \`"Y\\$b._
              \`""""`;

export default function BootScreen({ onDone }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [progress, setProgress] = useState(0);
  // Store onDone in a ref so the effect below never needs it as a dependency.
  // This prevents the infinite re-run caused by the parent re-rendering (e.g. clock tick)
  // which would create a new onDone reference and re-trigger the effect.
  const onDoneRef = useRef(onDone);
  useEffect(() => { onDoneRef.current = onDone; });

  useEffect(() => {
    // Runs ONCE only — empty deps array is intentional.
    let lineIdx = 0;
    const lineTimer = setInterval(() => {
      if (lineIdx < BOOT_LINES.length) {
        // Capture the element VALUE now — NOT the index.
        // The state updater runs asynchronously; by then lineIdx may have
        // already incremented past bounds, making BOOT_LINES[lineIdx] undefined.
        const line = BOOT_LINES[lineIdx];
        setVisibleLines(prev => [...prev, line]);
        lineIdx++;
      } else {
        clearInterval(lineTimer);
      }
    }, 70);

    // Progress bar fills in ~1.5s (5% per 75ms tick)
    const progTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(progTimer); return 100; }
        return prev + 5;
      });
    }, 75);

    // Transition to desktop at 2s
    const doneTimer = setTimeout(() => onDoneRef.current(), 2000);

    return () => {
      clearInterval(lineTimer);
      clearInterval(progTimer);
      clearTimeout(doneTimer);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="boot-screen">
      <div className="boot-inner">
        <pre className="boot-logo">{`       _,met$$$$$gg.
    ,g$$$$$$$$$$$$$$$P.
  ,g$$P"     """Y$$".
 ,$$P'              \`$$$.
',$$P       ,ggs.     \`$$b:
\`d$$'     ,$P"'   .    $$$$
 $$P      d$'     ,    $$P
 $$:      $$.   -    ,d$$'
 $$;      Y$b._   _,d$P'
 Y$$.    \`.\`"Y$$$$P"'
 \`$$b      "-.__
  \`Y$$
   \`Y$$.
     \`$$b.
       \`Y$$b.
          \`"Y$b._
              \`""""`}</pre>

        <div className="boot-lines-container">
          {visibleLines.map((line, i) => (
            <div key={i} className={`boot-line ${line.type}`}>
              {line.text}
            </div>
          ))}
        </div>

        <div className="boot-progress-wrap">
          <div className="boot-progress-labels">
            <span>Loading system...</span>
            <span>{Math.min(100, Math.round(progress))}%</span>
          </div>
          <div className="boot-progress-track">
            <div
              className="boot-progress-fill"
              style={{ width: `${Math.min(100, progress)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
