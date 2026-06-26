import { useEffect, useRef } from 'react'

const CHARS = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789'

export default function MatrixRain({ onExit }) {
  const ref = useRef(null)

  useEffect(() => {
    const c = ref.current
    const ctx = c.getContext('2d')
    c.width = c.offsetWidth
    c.height = c.offsetHeight

    const fontSize = 14
    const cols = Math.floor(c.width / fontSize)
    const drops = Array(cols).fill(0)
    let raf, alive = true

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.06)'
      ctx.fillRect(0, 0, c.width, c.height)
      ctx.fillStyle = '#50fa7b'
      ctx.font = `${fontSize}px monospace`
      for (let i = 0; i < drops.length; i++) {
        const ch = CHARS[Math.floor(Math.random() * CHARS.length)]
        ctx.fillText(ch, i * fontSize, drops[i] * fontSize)
        if (drops[i] * fontSize > c.height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      }
      if (alive) raf = requestAnimationFrame(draw)
    }
    draw()

    const esc = (e) => {
      if (e.key === 'Escape') { alive = false; cancelAnimationFrame(raf); onExit?.() }
    }
    window.addEventListener('keydown', esc)
    return () => { alive = false; cancelAnimationFrame(raf); window.removeEventListener('keydown', esc); onExit?.() }
  }, [onExit])

  return (
    <div className="matrix-wrap">
      <canvas ref={ref} />
      <div className="matrix-hint">Press ESC to exit</div>
    </div>
  )
}
