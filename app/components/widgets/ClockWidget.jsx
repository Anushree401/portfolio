import { useState, useEffect } from 'react'

const WEATHER_OPTS = ['☾ clear', '☁ cloudy', '⛅ partly cloudy', '🌧 rain', '⛈ storm']

export default function ClockWidget() {
  const [now, setNow] = useState(new Date())
  const [tick, setTick] = useState(0)

  // Focus timer state
  const [focus, setFocus] = useState(25 * 60) // 25 min pomodoro
  const [running, setRunning] = useState(false)

  const [mounted, setMounted] = useState(false)

  // System clock & meters tick
  useEffect(() => {
    setMounted(true)
    const t = setInterval(() => {
      setNow(new Date())
      setTick(x => x + 1) // forces CPU/MEM bars to animate
    }, 1000)
    return () => clearInterval(t)
  }, [])

  // Focus timer tick
  useEffect(() => {
    if (!running) return
    const t = setInterval(() => setFocus(f => f > 0 ? f - 1 : 0), 1000)
    return () => clearInterval(t)
  }, [running])

  // Simulated live metrics (sinusoidal, so they look alive)
  const cpu = mounted ? Math.round(12 + Math.sin(tick / 7) * 4 + Math.random() * 3) : 12
  const mem = mounted ? Math.round(3.2 + Math.sin(tick / 13) * 0.6 + Math.random() * 0.4) : 3.2
  const uptime = mounted && typeof performance !== 'undefined' ? Math.floor(performance.now() / 1000) : 0
  const mm = Math.floor(uptime / 60), ss = uptime % 60

  // Focus timer string
  const fm = Math.floor(focus / 60)
  const fs = focus % 60
  const focusStr = `${fm.toString().padStart(2, '0')}:${fs.toString().padStart(2, '0')}`

  // Use the day-of-year to pick a stable "weather" so it doesn't flicker
  const weather = WEATHER_OPTS[Math.floor((tick + now.getDate()) / 300) % WEATHER_OPTS.length]

  if (!mounted) {
    return <div className="widget widget-clock" style={{ minHeight: '300px' }}></div>
  }

  return (
    <div className="widget widget-clock">
      <div className="widget-header">
        <span className="widget-icon">🕐</span>
        <span className="widget-title">CLOCK</span>
        <span className="widget-status">●</span>
      </div>

      <div className="widget-body">
        <div className="big-time">{now.toLocaleTimeString('en-US', { hour12: true })}</div>
        <div className="big-date">{now.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</div>

        <div className="clock-row"><span>Uptime</span><span>{mm}m {ss}s</span></div>
        <div className="clock-row"><span>Weather</span><span>{weather}</span></div>

        <div className="meter">
          <span className="meter-label">CPU</span>
          <div className="meter-bar"><div className="meter-fill" style={{ width: `${cpu}%` }} /></div>
          <span className="meter-val">{cpu}%</span>
        </div>
        <div className="meter">
          <span className="meter-label">MEM</span>
          <div className="meter-bar"><div className="meter-fill mem" style={{ width: `${(mem / 8) * 100}%` }} /></div>
          <span className="meter-val">{mem.toFixed(1)}G</span>
        </div>

        {/* Focus Timer Section */}
        <div className="focus-timer-section" style={{ marginTop: '16px', borderTop: '1px solid rgba(80,250,123,0.15)', paddingTop: '10px' }}>
          <div className="clock-row">
            <span style={{ color: '#ff79c6', fontWeight: 600 }}>FOCUS TIMER</span>
            <span style={{ fontFamily: 'monospace', fontSize: '13px' }}>{focusStr}</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
            <button 
              onClick={() => setRunning(!running)} 
              className="highlight-cta" 
              style={{ padding: '2px 8px', fontSize: '10px', background: 'transparent', cursor: 'pointer' }}
            >
              {running ? 'Pause' : 'Start'}
            </button>
            <button 
              onClick={() => { setRunning(false); setFocus(25 * 60); }} 
              className="highlight-cta" 
              style={{ padding: '2px 8px', fontSize: '10px', background: 'transparent', cursor: 'pointer', borderColor: 'rgba(255, 121, 198, 0.4)', color: '#ff79c6' }}
            >
              Reset
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
