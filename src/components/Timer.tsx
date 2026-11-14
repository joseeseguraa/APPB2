import { useEffect, useRef, useState } from 'react'
import { formatTime } from '../lib/answers'

/** Cuenta atrás. Llama a onEnd una vez cuando llega a 0. Se detiene con running=false. */
export function useCountdown(seconds: number, running: boolean, onEnd: () => void) {
  const [left, setLeft] = useState(seconds)
  const endRef = useRef(onEnd)
  endRef.current = onEnd

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => {
      setLeft((l) => {
        if (l <= 1) {
          clearInterval(id)
          setTimeout(() => endRef.current(), 0)
          return 0
        }
        return l - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [running])

  return left
}

export function TimerBadge({ left, total }: { left: number; total: number }) {
  const pct = left / total
  const tone = pct > 0.25 ? 'border-line-strong text-ink' : pct > 0.1 ? 'border-warn text-warn' : 'border-bad text-bad'
  return (
    <span
      className={`inline-flex items-center gap-2 h-9 rounded-md border bg-paper px-3 text-[0.95rem] font-semibold tabular-nums ${tone}`}
      aria-label={`Tiempo restante ${formatTime(left)}`}
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
        <circle cx="12" cy="13" r="7.5" />
        <path d="M12 9.5V13l2.5 2M9.5 2.5h5" strokeLinecap="round" />
      </svg>
      {formatTime(left)}
    </span>
  )
}
