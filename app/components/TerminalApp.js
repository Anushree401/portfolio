'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Folder, FileText, Check, Smile, Mail, AlertTriangle } from 'lucide-react';
import { FILES, FILE_TREE, SKILL_TREE } from '../data/files';
import { renderColored } from '../utils/format';
import MatrixRain from './MatrixRain';

const APPS = ['projects', 'internships', 'skills', 'leadership', 'hackathons', 'publications', 'academics', 'contact', 'about'];
const CV_LINKS = {
  cybersec:   'Anushree_Balaji_Resume_Cybersec.pdf',
  fullstack:  'Anushree_Balaji_CV_FullStack.pdf',
  data:       'Anushree_Balaji_CV_DataAnalytics.pdf',
  unified:    'Anushree_Balaji_Resume.pdf',
};

const NEOFETCH = `
       _,met$$$$$gg.        [g]anushree@kali[/g]
    ,g$$$$$$$$$$$$$$$P.     [d]──────────────────────────────[/d]
  ,g$$P"     """Y$$".       [c]OS:[/c] Kali GNU/Linux Rolling
 ,$$P'              \`$$$.   [c]Host:[/c] Portfolio v2.0
',$$P       ,ggs.     \`$$b: [c]Degree:[/c] MBATech CompEngg, NMIMS
\`d$$'     ,$P"'   .    $$$$ [c]Also:[/c] IIT Madras BS (Prog+DS)
 $$P      d$'     ,    $$P  [c]CGPA:[/c] 8.92
 $$:      $$.   -    ,d$$'  [c]Shell:[/c] bash 5.2.15
 $$;      Y$b._   _,d$P'    [c]DE:[/c] React 19 + Next.js
 Y$$.    \`.\`"Y$$$$P"'        [c]WM:[/c] Draggable Windows
 \`$$b      "-.__             [c]Focus:[/c] Data Science + CyberSec
  \`Y$$                       [c]Certified:[/c] IIT Madras (Prog+DS)
   \`Y$$.                     [c]Terminal:[/c] kali-terminal
     \`$$b.                   [c]CPU:[/c] Your Machine™
       \`Y$$b.                [c]Memory:[/c] Your Browser™
          \`"Y$b._
              \`""""
`;

const FORTUNES = [
  'The best way to predict the future is to implement it. — Alan Kay',
  'There are 10 kinds of people: those who get binary and those who don\'t.',
  'A programmer\'s wife tells him: "Run to the store and pick up a loaf of bread. If they have eggs, get a dozen." He comes home with 12 loaves.',
  'It works on my machine. ¯\\_(ツ)_/¯',
  'In Soviet Russia, bug reports YOU.',
  'I would have written a shorter program, but I did not have the time.',
];

const WELCOME = [
  { type: 'output', content: `[g]Kali GNU/Linux Rolling[/g] — [c]kali@anushree[/c]` },
  { type: 'output', content: `[d]Last login: ${new Date().toLocaleString()}[/d]` },
  { type: 'output', content: `` },
  { type: 'output', content: `[y]Available resume tracks:[/y]` },
  { type: 'output', content: `  [g]•[/g] cat [w]resume[/w]             [d]— unified (recommended)[/d]` },
  { type: 'output', content: `  [g]•[/g] cat [w]resume_cybersec[/w]    [d]— security focus[/d]` },
  { type: 'output', content: `  [g]•[/g] cat [w]resume_fullstack[/w]   [d]— web dev focus[/d]` },
  { type: 'output', content: `  [g]•[/g] cat [w]resume_data[/w]        [d]— data / ML focus[/d]` },
  { type: 'output', content: `` },
  { type: 'output', content: `Type [y]'help'[/y] for commands, [y]'tree'[/y] for files, [y]'cv'[/y] to download PDF.` },
  { type: 'output', content: `` },
];

export default function TerminalApp({ openApp }) {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [past, setPast] = useState([]);
  const [hi, setHi] = useState(-1);
  const [matrixMode, setMatrixMode] = useState(false);
  const [hackMode, setHackMode] = useState(false);
  const inputRef = useRef(null);
  const endRef = useRef(null);
  const termRef = useRef(null);

  const playClick = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.connect(g);
      g.connect(ctx.destination);
      o.frequency.value = 800 + Math.random() * 400;
      g.gain.value = 0.02;
      o.start();
      o.stop(ctx.currentTime + 0.02);
    } catch (e) {}
  };

  const handleInputChange = (e) => {
    if (e.target.value.length > input.length) playClick();
    setInput(e.target.value);
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    const saved = localStorage.getItem('term-history');
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        setHistory(WELCOME);
      }
    } else {
      setHistory(WELCOME);
    }
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (history.length > 0) {
      localStorage.setItem('term-history', JSON.stringify(history));
    }
  }, [history]);

  const out = (lines) => lines.map(l => ({ type: 'output', content: l }));

  const run = useCallback((raw) => {
    const cmd = raw.trim();
    const next = [...history, { type: 'input', content: raw }];
    if (!cmd) {
      setHistory([...next, ...out([''])]);
      return;
    }

    const [command, ...args] = cmd.split(/\s+/);
    const arg = args.join(' ');
    const c = command.toLowerCase();
    const lines = [];

    switch (c) {
      case 'help': case 'h': case '?':
        lines.push(`[y]Available commands:[/y]`);
        lines.push(`  [g]help[/g]               List commands`);
        lines.push(`  [g]ls[/g]                 List desktop items`);
        lines.push(`  [g]tree[/g]               Show file structure`);
        lines.push(`  [g]cat[/g] <file>         Read a file`);
        lines.push(`  [g]open[/g] <app>         Open a GUI window`);
        lines.push(`  [g]skills[/g]             Visual skill levels`);
        lines.push(`  [g]cv[/g] [track]         Download resume PDF`);
        lines.push(`  [g]download[/g]           Same as 'cv'`);
        lines.push(`  [g]whoami[/g]             Current user`);
        lines.push(`  [g]neofetch[/g]           System info`);
        lines.push(`  [g]date[/g]               Current date/time`);
        lines.push(`  [g]uname[/g] -a           Kernel info`);
        lines.push(`  [g]echo[/g] <text>        Print text`);
        lines.push(`  [g]history[/g]            Show command history`);
        lines.push(`  [g]clear[/g] / [g]cls[/g]           Clear screen`);
        lines.push(`  [g]matrix[/g]             Enter the matrix`);
        lines.push(`  [g]fortune[/g]            Get your fortune`);
        lines.push(`  [g]cowsay[/g] <text>      Moo!`);
        lines.push(`  [g]theme[/g] <name>       Change OS theme`);
        lines.push(`  [g]hack[/g]               ???`);
        lines.push(``);
        lines.push(`[y]Resume tracks:[/y] resume, resume_cybersec, resume_fullstack, resume_data`);
        lines.push(`[y]Files:[/y] ${Object.keys(FILES).join(', ')}`);
        lines.push(`[y]Apps:[/y] ${APPS.join(', ')}`);
        break;

      case 'ls': case 'dir':
        lines.push(`[c]Desktop:[/c]`);
        APPS.forEach(a => lines.push(`  [g]<Folder size={14} style={{display:"inline-block", verticalAlign:"middle"}}/>[/g]  ${a}/`));
        lines.push(``);
        lines.push(`[c]Resume tracks:[/c]`);
        ['resume.txt', 'resume_cybersec.txt', 'resume_fullstack.txt', 'resume_data.txt']
          .forEach(f => lines.push(`  [y]<FileText size={14} style={{display:"inline-block", verticalAlign:"middle"}}/>[/y]  ${f}`));
        break;

      case 'tree':
        lines.push(FILE_TREE.trim());
        break;

      case 'cat': case 'less': case 'more':
        if (!arg) {
          lines.push(`[r]cat:[/r] missing file operand`);
        } else if (FILES[arg]) {
          lines.push(FILES[arg]);
        } else if (FILES[arg + '.txt']) {
          lines.push(FILES[arg + '.txt']);
        } else {
          lines.push(`[r]cat: ${arg}: No such file or directory[/r]`);
        }
        break;

      case 'open': case 'start': case 'launch':
        if (!arg) {
          lines.push(`[r]open:[/r] missing app name`);
        } else if (APPS.includes(arg)) {
          lines.push(`Opening ${arg}...`);
          setTimeout(() => openApp?.(arg), 200);
        } else {
          lines.push(`[r]open: ${arg}: app not found[/r]. Try: ${APPS.join(', ')}`);
        }
        break;

      case 'skills':
        lines.push(SKILL_TREE.trim());
        break;

      case 'cv': case 'download':
        if (!arg || arg === 'unified' || arg === 'resume') {
          window.open(`/cvs/${CV_LINKS.unified}`, '_blank');
          lines.push(`[g]<Check size={14} style={{display:"inline-block", verticalAlign:"middle"}}/>[/g] Opening unified resume PDF...`);
        } else if (CV_LINKS[arg]) {
          window.open(`/cvs/${CV_LINKS[arg]}`, '_blank');
          lines.push(`[g]<Check size={14} style={{display:"inline-block", verticalAlign:"middle"}}/>[/g] Opening [y]${arg}[/y] resume PDF...`);
        } else {
          lines.push(`[y]Available tracks:[/y] cybersec, fullstack, data, unified`);
          lines.push(`Usage: cv [track]`);
        }
        break;

      case 'whoami': lines.push(`[g]kali[/g]`); break;
      case 'neofetch': lines.push(NEOFETCH.trim()); break;
      case 'date': lines.push(new Date().toString()); break;
      case 'uname': lines.push(`Linux kali 6.6.9-amd64 #1 SMP PREEMPT_DYNAMIC Debian x86_64 GNU/Linux`); break;
      case 'echo': lines.push(arg); break;
      case 'pwd': lines.push(`/home/kali`); break;
      case 'cd': lines.push(arg ? `bash: cd: ${arg}: Permission denied` : ''); break;

      case 'matrix':
        setMatrixMode(true);
        return;
        
      case 'fortune':
        lines.push(FORTUNES[Math.floor(Math.random() * FORTUNES.length)]);
        break;
        
      case 'cowsay':
        const text = arg || 'Moo!';
        lines.push(' ' + '_'.repeat(text.length + 2));
        lines.push('< ' + text + ' >');
        lines.push(' ' + '-'.repeat(text.length + 2));
        lines.push('        \\   ^__^');
        lines.push('         \\  (oo)\\_______');
        lines.push('            (__)\\       )\\/\\');
        lines.push('                ||----w |');
        lines.push('                ||     ||');
        break;

      case 'history':
        if (!past.length) {
          lines.push('No commands in history.');
        } else {
          past.forEach((c, i) => lines.push(`  [d]${String(i + 1).padStart(3)}[/d]  ${c}`));
        }
        break;

      case 'clear': case 'cls':
        setHistory([]);
        setPast([...past, cmd]);
        setHi(-1);
        return;

      case 'hack':
        setHistory([...next, { type: 'output', content: `[y]=== MAINFRAME v2.1 ===[/y]\nA 4-digit numeric code is required.\nNumbers 0-9. You have 8 attempts.\nUse 'submit <code>' to try.\n\nPro tip: read my resume <Smile size={14} style={{display:"inline-block", verticalAlign:"middle"}}/>` }, ...out([''])]);
        setHackMode(true);
        setPast([...past, cmd]);
        setHi(-1);
        return;

      case 'submit':
        if (!hackMode) {
          lines.push(`[r]submit:[/r] not connected to mainframe. run 'hack' first.`);
        } else if (arg === '1606') {
          lines.push(`[g]ACCESS GRANTED[/g]`);
          lines.push(`Welcome back, administrator.`);
          setHackMode(false);
        } else {
          lines.push(`[r]ACCESS DENIED[/r] — Invalid code '${arg}'.`);
        }
        break;

      case 'theme':
        const themes = { kali: '#50fa7b', blu: '#8be9fd', pink: '#ff79c6', mono: '#d0d0d0' };
        if (themes[arg]) {
          document.documentElement.style.setProperty('--accent', themes[arg]);
          lines.push(`[g]<Check size={14} style={{display:"inline-block", verticalAlign:"middle"}}/>[/g] Theme set to ${arg}`);
        } else {
          lines.push(`Usage: theme ` + Object.keys(themes).join('|'));
        }
        break;

      case 'hire':
      case 'sudo':
        if (c === 'hire' || arg.startsWith('hire')) {
          lines.push(`[g]<Check size={14} style={{display:"inline-block", verticalAlign:"middle"}}/>[/g] Initiating handshake protocol...`);
          lines.push(`[g]<Check size={14} style={{display:"inline-block", verticalAlign:"middle"}}/>[/g] Negotiating terms...`);
          lines.push(`[g]<Check size={14} style={{display:"inline-block", verticalAlign:"middle"}}/>[/g] Sending calendar invite to ${arg.split(' ')[1] || 'recruiter'}@...`);
          lines.push(``);
          lines.push(`[y]Thank you for your interest in Anushree Balaji.[/y]`);
          lines.push(`[y]This feature works in real life too:[/y]`);
          lines.push(`[c]<Mail size={14} style={{display:"inline-block", verticalAlign:"middle"}}/>[/c]  anushree1606balaji@gmail.com`);
          lines.push(`[c]⌨[/c]  github.com/Anushree401`);
        } else if (c === 'sudo') {
          lines.push(`[sudo] password for kali:`);
          lines.push(`[r]Sorry, user kali is not in the sudoers file. This incident will be reported. <AlertTriangle size={14} style={{display:"inline-block", verticalAlign:"middle"}}/>[/r]`);
        }
        break;

      case 'man':
        const MAN = {
          cat: `NAME\n       cat — concatenate and print files\n\nSYNOPSIS\n       cat [FILE]...\n\nDESCRIPTION\n       Concatenate FILE(s) to standard output.`,
          ls: `NAME\n       ls — list directory contents\n\nDESCRIPTION\n       List information about the FILEs (the current directory by default).`,
          theme: `NAME\n       theme — change terminal color theme\n\nSYNOPSIS\n       theme [kali|blu|pink|mono]`,
          hack: `NAME\n       hack — infiltrate the mainframe\n\nDESCRIPTION\n       Are you feeling lucky, punk?`,
        };
        if (arg && MAN[arg]) {
          lines.push(MAN[arg]);
        } else {
          lines.push(`What manual page do you want?`);
        }
        break;
        
      case 'ping':
        lines.push(`PING ${arg || 'localhost'} (127.0.0.1): 56 data bytes`);
        lines.push(`64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.042 ms`);
        lines.push(`64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.039 ms`);
        lines.push(`--- ${arg || 'localhost'} ping statistics ---`);
        lines.push(`2 packets transmitted, 2 received, 0% packet loss`);
        break;

      default:
        lines.push(`[r]error:[/r] command not found: [glitch]${command}[/glitch]`);
    }

    lines.forEach(l => next.push({ type: 'output', content: l }));
    next.push({ type: 'output', content: '' });
    setHistory(next);
    setPast([...past, cmd]);
    setHi(-1);
  }, [history, past, openApp]);

  const onKey = (e) => {
    if (e.key === 'Enter') {
      run(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!past.length) return;
      const ni = hi === -1 ? past.length - 1 : Math.max(0, hi - 1);
      setHi(ni);
      setInput(past[ni]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (hi === -1) return;
      const ni = hi + 1;
      if (ni >= past.length) {
        setHi(-1);
        setInput('');
      } else {
        setHi(ni);
        setInput(past[ni]);
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
    } else if (e.key === 'c' && e.ctrlKey) {
      e.preventDefault();
      setHistory(h => [...h, { type: 'input', content: input }, { type: 'output', content: '^C' }, { type: 'output', content: '' }]);
      setInput('');
    } else if (e.key === 'r' && e.ctrlKey) {
      e.preventDefault();
      const match = past.slice().reverse().find(c => c.startsWith(input) || c.includes(input));
      if (match) setInput(match);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const all = [...Object.keys(FILES), ...APPS, 'resume', 'skills', 'tree', 'cv', 'help', 'clear', 'ls', 'neofetch'];
      const matches = all.filter(x => x.startsWith(input));
      if (matches.length === 1) {
        setInput(matches[0]);
      } else if (matches.length > 1) {
        setHistory(h => [
          ...h,
          { type: 'input', content: input },
          ...out([matches.join('   ')]),
          { type: 'output', content: '' }
        ]);
      }
    }
  };

  const Prompt = () => (
    <span className="term-prompt">
      <span style={{ color: 'var(--accent, #50fa7b)' }}>kali@anushree</span>
      <span style={{ color: '#44475a' }}>:</span>
      <span style={{ color: '#8be9fd' }}>~</span>
      <span style={{ color: '#44475a' }}>$</span>
      <span> </span>
    </span>
  );

  if (matrixMode) {
    return <MatrixRain onExit={() => setMatrixMode(false)} />;
  }

  return (
    <div
      ref={termRef}
      className="kali-terminal"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="term-lines">
        {history.map((line, i) => (
          <div key={i} className="term-line">
            {line.type === 'input' ? (
              <>
                <Prompt />
                <span>{line.content}</span>
              </>
            ) : (
              <pre className="term-pre term-out">{renderColored(line.content)}</pre>
            )}
          </div>
        ))}
        <div className="term-input-row">
          <Prompt />
          <input
            ref={inputRef}
            className="term-input"
            value={input}
            onChange={handleInputChange}
            onKeyDown={onKey}
            autoFocus
            spellCheck={false}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
          />
        </div>
        <div ref={endRef} />
      </div>
    </div>
  );
}
