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
  const tone = pct > 0.25 ? 'bg-navy-800 text-white' : pct > 0.1 ? 'bg-amber-500 text-white' : 'bg-red-600 text-white'
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-mono font-semibold ${tone}`}>
      ⏱ {formatTime(left)}
    </span>
  )
}
