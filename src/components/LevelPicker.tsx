import { useEffect, useRef } from 'react'
import { LEVELS, setLevel, type Level } from '../lib/level'

const ABOUT: Record<Level, { title: string; text: string }> = {
  b2: { title: 'B2 First', text: 'Nivel intermedio alto. Reading & Use of English en 7 partes, textos de 140–190 palabras.' },
  c1: { title: 'C1 Advanced', text: 'Nivel avanzado. Reading & Use of English en 8 partes, textos de 220–260 palabras.' },
}

/** Cambia de nivel y vuelve al inicio. Se recarga para que todo lea el progreso del nivel nuevo. */
export function switchLevel(level: Level) {
  setLevel(level)
  window.location.hash = '#/'
  window.location.reload()
}

/** Pantalla para elegir nivel (la primera vez, o desde el menú). */
export default function LevelPicker({ current, onClose }: { current?: Level; onClose?: () => void }) {
  const first = useRef<HTMLButtonElement>(null)
  useEffect(() => first.current?.focus(), [])
  return (
    <div className="fixed inset-0 z-[60] grid place-items-center p-4 bg-black/50" role="dialog" aria-modal="true" aria-labelledby="lp-title">
      <div className="w-full max-w-lg bg-paper rounded-xl shadow-xl p-6 sm:p-8">
        <h2 id="lp-title" className="text-2xl font-bold tracking-tight">¿Qué examen preparas?</h2>
        <p className="text-ink-2 mt-1.5">Cada nivel tiene sus propios ejercicios, errores y progreso. Puedes cambiar cuando quieras desde el menú.</p>
        <div className="grid gap-3 mt-6">
          {(Object.keys(LEVELS) as Level[]).map((l, i) => (
            <button
              key={l}
              ref={i === 0 ? first : undefined}
              onClick={() => (l === current && onClose ? onClose() : switchLevel(l))}
              className={`text-left rounded-lg border-2 p-4 transition-colors hover:border-print ${l === current ? 'border-print bg-print-soft' : 'border-line'}`}
            >
              <span className="flex items-center gap-3">
                <span className="grid place-items-center w-11 h-7 rounded-full border-2 border-print text-print text-xs font-extrabold">{LEVELS[l].code}</span>
                <span className="font-bold text-lg">{ABOUT[l].title}</span>
                {l === current && <span className="ml-auto text-sm font-semibold text-print">Actual</span>}
              </span>
              <span className="block text-sm text-ink-2 mt-2">{ABOUT[l].text}</span>
            </button>
          ))}
        </div>
        {onClose && (
          <button onClick={onClose} className="mt-5 text-sm font-semibold text-ink-2 hover:text-ink">
            Cancelar
          </button>
        )}
      </div>
    </div>
  )
}
