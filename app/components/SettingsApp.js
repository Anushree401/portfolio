import { useState } from 'react';
import { Printer } from 'lucide-react';
import { Palette, Globe, Bell, Accessibility, Info, Volume2 } from 'lucide-react';


export default function SettingsApp({ settings, setSettings }) {
  const [tab, setTab] = useState('appearance');

  return (
    <div className="settings">
      <aside className="settings-tabs">
        <Tab icon={<Palette size={16} />} label="Appearance" active={tab === 'appearance'} onClick={() => setTab('appearance')} />
        <Tab icon={<Globe size={16} />} label="Network"     active={tab === 'network'}     onClick={() => setTab('network')} />
        <Tab icon={<Bell size={16} />} label="Notifications" active={tab === 'notif'}    onClick={() => setTab('notif')} />
        <Tab icon={<Accessibility size={16} />} label="Accessibility" active={tab === 'a11y'}      onClick={() => setTab('a11y')} />
        <Tab icon={<Info size={16} />} label="About"     active={tab === 'about'}       onClick={() => setTab('about')} />
      </aside>

      <main className="settings-pane">
        {tab === 'appearance' && (
          <>
            <h2>Appearance</h2>
            <Field label="Wallpaper">
              <select value={settings.wallpaper} onChange={e => setSettings(s => ({ ...s, wallpaper: e.target.value }))}>
                <option value="dragon">Kali Dragon</option>
                <option value="grid">Neon Grid</option>
                <option value="matrix">Matrix</option>
                <option value="mountains">Mountains</option>
                <option value="solid">Solid Black</option>
              </select>
            </Field>
            <Field label="Accent color">
              <ColorRow value={settings.accent} onChange={c => setSettings(s => ({ ...s, accent: c }))} />
            </Field>
            <Field label="Transparency">
              <input type="range" min="40" max="95" value={settings.opacity}
                     onChange={e => setSettings(s => ({ ...s, opacity: +e.target.value }))} />
              <span className="val">{settings.opacity}%</span>
            </Field>
            <Field label="Font size">
              <input type="range" min="11" max="16" value={settings.fontSize}
                     onChange={e => setSettings(s => ({ ...s, fontSize: +e.target.value }))} />
              <span className="val">{settings.fontSize}px</span>
            </Field>
            <Field label="CRT scanlines">
              <Toggle checked={settings.scanlines} onChange={v => setSettings(s => ({ ...s, scanlines: v }))} />
            </Field>
            <Field label="Reduce motion">
              <Toggle checked={settings.reduceMotion} onChange={v => setSettings(s => ({ ...s, reduceMotion: v }))} />
            </Field>
          </>
        )}

        {tab === 'network' && (
          <>
            <h2>Network</h2>
            <Field label="Status"><span className="status-on">● Connected</span></Field>
            <Field label="Latency"><span>14ms · Mumbai, IN</span></Field>
            <Field label="IP"><span>192.168.1.42</span></Field>
            <Field label="DNS"><span>1.1.1.1, 8.8.8.8</span></Field>
            <Field label="VPN"><Toggle checked={settings.vpn} onChange={v => setSettings(s => ({ ...s, vpn: v }))} /></Field>
            <Field label="Tor mode"><Toggle checked={settings.tor} onChange={v => setSettings(s => ({ ...s, tor: v }))} /></Field>
            <p className="hint">VPN/Tor toggles are cosmetic but feel nice. Make them actual state in your settings store.</p>
          </>
        )}

        {tab === 'notif' && (
          <>
            <h2>Notifications</h2>
            <Field label="Boot sound"><Toggle checked={settings.bootSound} onChange={v => setSettings(s => ({ ...s, bootSound: v }))} /></Field>
            <Field label="Keypress sound"><Toggle checked={settings.keySound} onChange={v => setSettings(s => ({ ...s, keySound: v }))} /></Field>
            <Field label="Window open sound"><Toggle checked={settings.winSound} onChange={v => setSettings(s => ({ ...s, winSound: v }))} /></Field>
            <Field label="Volume">
              <input type="range" min="0" max="100" value={settings.volume}
                     onChange={e => setSettings(s => ({ ...s, volume: +e.target.value }))} />
              <span className="val">{settings.volume}%</span>
            </Field>
            <button className="btn-test" onClick={() => new Audio('/keypress.mp3').play()}><Volume2 size={16} style={{marginRight: 8}}/> Test sound</button>
          </>
        )}

        {tab === 'a11y' && (
          <>
            <h2>Accessibility</h2>
            <Field label="High contrast"><Toggle checked={settings.highContrast} onChange={v => setSettings(s => ({ ...s, highContrast: v }))} /></Field>
            <Field label="Larger text"><Toggle checked={settings.largeText} onChange={v => setSettings(s => ({ ...s, largeText: v }))} /></Field>
            <Field label="Cursor blink rate">
              <input type="range" min="200" max="2000" step="100" value={settings.cursorBlink}
                     onChange={e => setSettings(s => ({ ...s, cursorBlink: +e.target.value }))} />
              <span className="val">{settings.cursorBlink}ms</span>
            </Field>
            <Field label="Disable animations"><Toggle checked={settings.reduceMotion} onChange={v => setSettings(s => ({ ...s, reduceMotion: v }))} /></Field>
          </>
        )}

        {tab === 'about' && (
          <>
            <h2>System information</h2>
            <p className="hint">This page is about the website, not the person.
              For Anushree's bio, <span onClick={() => window.dispatchEvent(new Event('open-about'))} className="inline-link">click here</span> instead.</p>

            <div className="about-card">
              <div className="about-row"><span>Hostname</span><span>anushree.kali</span></div>
              <div className="about-row"><span>OS</span><span>Kali Linux Rolling — Portfolio Edition</span></div>
              <div className="about-row"><span>Kernel</span><span>React 18 · Vite 5</span></div>
              <div className="about-row"><span>Source code</span><a href="https://github.com/Anushree401/portfolio" target="_blank" rel="noreferrer">github.com/Anushree401/portfolio</a></div>
              <div className="about-row"><span>Built with</span><span>React, Next.js, and an unreasonable amount of CSS</span></div>
              <div className="about-row"><span>Last deploy</span><span>{settings.lastDeployed}</span></div>
            </div>

            <h2 style={{ marginTop: 24 }}>Credits</h2>
            <div className="about-card">
              <div className="about-row"><span>Wallpaper</span><span>Kali Linux default</span></div>
              <div className="about-row"><span>Emoji</span><span>Twemoji by Twitter (MIT)</span></div>
              <div className="about-row"><span>Fonts</span><span>JetBrains Mono (Apache 2.0)</span></div>
              <div className="about-row"><span>Icons</span><span>Lucide (ISC)</span></div>
            </div>

            <button className="btn-test" onClick={() => window.print()}><Printer size={16} /> Export system info</button>
            <button className="btn-test" onClick={() => window.location.reload()} style={{ marginLeft: 8 }}>↻ Reboot</button>
          </>
        )}
      </main>
    </div>
  );
}

const Field = ({ label, children }) => (
  <div className="setting-row">
    <div className="setting-label">{label}</div>
    <div className="setting-control">{children}</div>
  </div>
);
const Tab = ({ icon, label, active, onClick }) => (
  <button className={`settings-tab ${active ? 'active' : ''}`} onClick={onClick}>
    <span className="tab-icon">{icon}</span>{label}
  </button>
);
const Toggle = ({ checked, onChange }) => (
  <label className="toggle">
    <input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)} />
    <span className="toggle-slider" />
  </label>
);
const ColorRow = ({ value, onChange }) => {
  const colors = ['#50fa7b', '#8be9fd', '#ff79c6', '#f1fa8c', '#ffb86c', '#bd93f9'];
  return (
    <div className="color-row">
      {colors.map(c => (
        <button key={c}
          className={`color-swatch ${c === value ? 'active' : ''}`}
          style={{ background: c }}
          onClick={() => onChange(c)}
        />
      ))}
    </div>
  );
};
