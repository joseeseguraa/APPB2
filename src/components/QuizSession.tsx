import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { Card } from '../lib/cards'
import { checkAll, shuffleOptions } from '../lib/exercise'
import type { Exercise } from '../types'
import { ExerciseBody } from '../pages/ExercisePage'
import { btn, Meter, Panel } from './ui'

interface Props {
  cards: Card[]
  /** se llama al comprobar cada tarjeta */
  onAnswer?: (card: Card, ok: boolean) => void
  /** se llama al terminar con el nº de aciertos */
  onFinish?: (score: number) => void
  /** contenido extra en la pantalla final */
  endExtra?: ReactNode
}

/** Nº de opciones de una tarjeta de una sola pregunta (0 si se escribe). */
function optionCount(ex: Exercise): number {
  switch (ex.kind) {
    case 'mc-cloze':
      return ex.gaps[0]?.options.length ?? 0
    case 'choice':
      return ex.items[0]?.options.length ?? 0
    case 'reading-mc':
      return ex.questions[0]?.options.length ?? 0
    default:
      return 0
  }
}

/** Sesión de preguntas sueltas, una a una, con corrección inmediata. */
export default function QuizSession({ cards, onAnswer, onFinish, endExtra }: Props) {
  const [i, setI] = useState(0)
  const [value, setValue] = useState<string[]>([''])
  const [result, setResult] = useState<boolean[] | null>(null)
  const [log, setLog] = useState<boolean[]>([])
  // opciones barajadas una vez por sesión
  const [shuffled] = useState(() => cards.map((c) => shuffleOptions(c.ex)))
  const done = i >= cards.length

  // Atajos: A-D o 1-4 para elegir, Intro para comprobar y pasar a la siguiente
  const keyRef = useRef<(e: KeyboardEvent) => void>(() => {})
  useEffect(() => {
    const h = (e: KeyboardEvent) => keyRef.current(e)
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [])

  // En ordenador, si la pregunta es para escribir, el cursor ya está en el hueco
  const boxRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!window.matchMedia?.('(pointer: fine)').matches) return
    boxRef.current?.querySelector<HTMLInputElement>('input[type="text"], input:not([type])')?.focus()
  }, [i])

  if (done) {
    const score = log.filter(Boolean).length
    const failed = cards.filter((_, k) => !log[k])
    return (
      <div className="max-w-2xl">
        <Panel className="p-6 sm:p-8">
          <p className="text-sm text-ink-2">Resultado</p>
          <p className={`text-[3rem] leading-none font-bold tabular-nums tracking-[-0.03em] mt-1 ${score / cards.length >= 0.7 ? 'text-ok' : score / cards.length >= 0.5 ? 'text-warn' : 'text-bad'}`}>
            {score}
            <span className="text-ink-3 text-3xl font-semibold">/{cards.length}</span>
          </p>
          {endExtra}
        </Panel>
        {failed.length > 0 && (
          <section className="mt-8">
            <h2 className="text-lg font-bold mb-1">Las que has fallado</h2>
            <p className="text-sm text-ink-2 mb-3">Se han añadido a Mis errores para que vuelvan a salirte en unos días.</p>
            <Panel className="divide-y divide-line">
              {failed.map((c) => (
                <Link key={c.key} to={`/s/${c.section.slug}/${c.part.slug}/${c.exId}?mode=practice`} className="block px-4 sm:px-5 py-3 hover:bg-bg/60">
                  <p className="font-semibold">{c.source.title}</p>
                  <p className="text-xs text-ink-3">
                    {c.section.name}, {c.part.number ? `Part ${c.part.number}` : c.part.name}, pregunta {c.q + 1}
                  </p>
                </Link>
              ))}
            </Panel>
          </section>
        )}
      </div>
    )
  }

  const card = cards[i]
  const view = shuffled[i]
  const check = () => {
    const r = checkAll(view, value)
    setResult(r)
    onAnswer?.(card, r[0])
  }
  const next = () => {
    const newLog = [...log, !!result?.[0]]
    setLog(newLog)
    setResult(null)
    setValue([''])
    setI(i + 1)
    if (i + 1 >= cards.length) onFinish?.(newLog.filter(Boolean).length)
    window.scrollTo(0, 0)
  }

  const nOpts = optionCount(view)
  keyRef.current = (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return
    const typing = e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement
    if (e.key === 'Enter') {
      if (e.target instanceof HTMLButtonElement) return
      e.preventDefault()
      if (result === null) {
        if (value[0].trim()) check()
      } else next()
      return
    }
    if (typing || result !== null || nOpts === 0) return
    const k = e.key.toLowerCase()
    const idx = k >= '1' && k <= '9' ? Number(k) - 1 : k.length === 1 && k >= 'a' && k <= 'z' ? k.charCodeAt(0) - 97 : -1
    if (idx >= 0 && idx < nOpts) setValue([String(idx)])
  }

  return (
    <div className="max-w-3xl" ref={boxRef}>
      <div className="flex items-center gap-4 mb-5">
        <Meter value={(i / cards.length) * 100} className="flex-1" />
        <span className="text-sm text-ink-2 tabular-nums shrink-0">
          {i + 1} de {cards.length}
        </span>
      </div>
      <p className="text-sm text-ink-3 mb-2">
        {card.section.name}, {card.part.number ? `Part ${card.part.number}` : card.part.name}. De «{card.source.title}»
      </p>
      <ExerciseBody
        key={card.key}
        ex={view}
        answers={value}
        results={result}
        disabled={result !== null}
        onChange={(_, v) => setValue([v])}
      />
      <div className="sticky bottom-[calc(3.9rem+env(safe-area-inset-bottom))] sm:bottom-0 z-20 mt-6 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 py-3 bg-bg/95 backdrop-blur border-t border-line flex gap-2 items-center">
        {result === null ? (
          <>
            <button onClick={check} disabled={!value[0].trim()} className={btn('primary')}>
              Comprobar
            </button>
            <span className="hidden sm:inline text-xs text-ink-3">
              {nOpts > 0 ? 'Teclado: letras para elegir, Intro para comprobar' : 'Intro para comprobar'}
            </span>
          </>
        ) : (
          <>
            <span className={`font-semibold ${result[0] ? 'text-ok' : 'text-bad'}`}>{result[0] ? 'Correcto' : 'Incorrecto'}</span>
            <span className="flex-1" />
            <button onClick={next} className={btn('accent')}>
              {i + 1 < cards.length ? 'Siguiente pregunta' : 'Ver resultado'}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
