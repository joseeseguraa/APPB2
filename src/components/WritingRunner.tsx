import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import type { PartInfo, WritingTask } from '../types'
import { countWords, CRITERIA, loadDraft, saveDraft } from '../lib/writing'
import { saveAttempt } from '../lib/progress'
import { TimerBadge, useCountdown } from './Timer'
import { WritingModelView } from './WritingModelView'

export function WordCounter({ words, min = 140, max = 190 }: { words: number; min?: number; max?: number }) {
  const tone = words === 0 ? 'text-slate-400' : words < min ? 'text-amber-700' : words <= max ? 'text-emerald-700' : 'text-amber-700'
  const msg = words === 0 ? '' : words < min ? `te faltan ${min - words}` : words <= max ? 'longitud correcta' : `te sobran ${words - max}`
  return (
    <span className={`text-sm font-medium tabular-nums ${tone}`}>
      {words} palabras{msg && ` · ${msg}`} <span className="text-slate-400 font-normal">({min}–{max})</span>
    </span>
  )
}

export function PromptBox({ task }: { task: Pick<WritingTask, 'prompt' | 'notes'> }) {
  return (
    <div className="rounded-2xl bg-white border-2 border-navy-200 p-5 font-serif text-[1.02rem] leading-7 whitespace-pre-line">
      {task.prompt}
      {task.notes && (
        <div className="mt-3 font-sans text-sm">
          <p className="font-semibold">Notes — Write about:</p>
          <ol className="list-decimal list-inside">
            {task.notes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  )
}

interface Props {
  task: WritingTask
  part: PartInfo
  mode: 'practice' | 'exam'
  partUrl: string
  nextUrl?: string
}

export default function WritingRunner({ task, part, mode, partUrl, nextUrl }: Props) {
  const [text, setText] = useState(() => loadDraft(task.id))
  const [showPlan, setShowPlan] = useState(false)
  const [phase, setPhase] = useState<'writing' | 'review'>('writing')
  const [checks, setChecks] = useState<boolean[]>([])
  const [copied, setCopied] = useState(false)
  const [saved, setSaved] = useState(false)
  const items = [...CRITERIA.map((c) => `${c.name} — ${c.es}`), ...(part.checklist ?? [])]

  // guardado automático del borrador
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)
  useEffect(() => {
    clearTimeout(timer.current)
    timer.current = setTimeout(() => saveDraft(task.id, text), 400)
    return () => clearTimeout(timer.current)
  }, [task.id, text])

  const total = part.suggestedMinutes * 60
  const left = useCountdown(total, mode === 'exam' && phase === 'writing', () => setPhase('review'))
  const words = countWords(text)

  const finishReview = () => {
    const done = items.map((_, i) => !!checks[i])
    saveAttempt(task.id, done.filter(Boolean).length, items.length, done.flatMap((ok, i) => (ok ? [] : [i])))
    setSaved(true)
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* el navegador no permite copiar */
    }
  }

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div>
          <p className="text-sm text-slate-500">Writing · {part.name}</p>
          <h1 className="text-2xl font-bold text-navy-900">{task.title}</h1>
          <p className="text-sm text-slate-500">{task.focus}</p>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`text-xs font-semibold uppercase tracking-wide rounded-full px-2.5 py-1 ${
              mode === 'exam' ? 'bg-red-50 text-red-700' : 'bg-emerald-50 text-emerald-700'
            }`}
          >
            {mode === 'exam' ? 'Modo examen' : 'Modo práctica'}
          </span>
          {mode === 'exam' && phase === 'writing' && <TimerBadge left={left} total={total} />}
        </div>
      </div>

      <PromptBox task={task} />

      {mode === 'practice' && (
        <div className="mt-3">
          <button onClick={() => setShowPlan((s) => !s)} className="text-sm font-medium text-navy-700 underline underline-offset-2">
            {showPlan ? 'Ocultar el plan sugerido' : '💡 Ver un plan sugerido párrafo a párrafo'}
          </button>
          {showPlan && (
            <ol className="mt-2 rounded-xl bg-gold-300/30 p-4 text-sm space-y-1.5 list-decimal list-inside">
              {task.plan.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ol>
          )}
        </div>
      )}

      <div className="mt-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={phase === 'review' && mode === 'exam'}
          placeholder="Escribe aquí tu respuesta en inglés…"
          spellCheck={false}
          className="w-full min-h-[22rem] rounded-2xl border border-navy-200 bg-white p-4 sm:p-5 font-serif text-[1.05rem] leading-7 outline-none focus:ring-2 focus:ring-navy-200 disabled:bg-slate-50"
        />
        <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
          <WordCounter words={words} />
          <span className="text-xs text-slate-400">El borrador se guarda solo en este navegador.</span>
        </div>
      </div>

      {phase === 'writing' ? (
        <div className="sticky bottom-0 mt-6 -mx-4 px-4 py-3 bg-navy-50/95 backdrop-blur border-t border-navy-100 flex flex-wrap gap-2 items-center">
          <button
            onClick={() => setPhase('review')}
            disabled={words === 0}
            className="rounded-xl bg-navy-800 text-white px-5 py-2.5 font-medium hover:bg-navy-700 disabled:opacity-40"
          >
            He terminado · autoevaluar
          </button>
        </div>
      ) : (
        <section className="mt-6 grid gap-5">
          <div className="rounded-2xl bg-white border border-navy-100 p-5">
            <h2 className="font-semibold text-navy-900 mb-1">Autoevaluación</h2>
            <p className="text-sm text-slate-600 mb-3">
              Relee tu texto con calma y marca lo que cumples. Son los 4 criterios oficiales de Cambridge y los puntos clave
              de este tipo de texto.
            </p>
            <ul className="grid gap-2">
              {items.map((it, i) => (
                <li key={i}>
                  <label className="flex gap-3 items-start text-sm cursor-pointer rounded-lg p-2 hover:bg-navy-50">
                    <input
                      type="checkbox"
                      checked={!!checks[i]}
                      onChange={(e) => {
                        setSaved(false)
                        setChecks((c) => Object.assign([...c], { [i]: e.target.checked }))
                      }}
                      className="mt-0.5 w-4 h-4 accent-navy-800"
                    />
                    <span className={i < CRITERIA.length ? 'font-medium' : ''}>{it}</span>
                  </label>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                onClick={finishReview}
                className="rounded-xl bg-navy-800 text-white px-4 py-2 text-sm font-medium hover:bg-navy-700"
              >
                {saved ? '✓ Guardada' : `Guardar autoevaluación (${checks.filter(Boolean).length}/${items.length})`}
              </button>
              <button onClick={copy} className="rounded-xl border border-navy-800 text-navy-800 px-4 py-2 text-sm font-medium hover:bg-navy-50">
                {copied ? '✓ Copiado' : 'Copiar mi texto'}
              </button>
              {mode === 'practice' && (
                <button
                  onClick={() => setPhase('writing')}
                  className="rounded-xl border border-navy-200 text-navy-800 px-4 py-2 text-sm font-medium hover:bg-navy-50"
                >
                  Seguir editando
                </button>
              )}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Consejo: si quieres una corrección detallada, copia tu texto y pídesela a un profesor o a Claude indicando
              que es un {part.name.toLowerCase()} para el B2 First.
            </p>
          </div>

          {part.model && (
            <div>
              <h2 className="font-semibold text-navy-900 mb-2">Compara con un modelo comentado</h2>
              <WritingModelView model={part.model} />
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {nextUrl ? (
              <Link to={nextUrl} className="rounded-xl bg-gold-400 text-navy-900 px-5 py-2.5 font-medium hover:bg-gold-300">
                Siguiente tarea →
              </Link>
            ) : (
              <Link to={partUrl} className="rounded-xl bg-gold-400 text-navy-900 px-5 py-2.5 font-medium hover:bg-gold-300">
                Volver a {part.name}
              </Link>
            )}
          </div>
        </section>
      )}
    </div>
  )
}
