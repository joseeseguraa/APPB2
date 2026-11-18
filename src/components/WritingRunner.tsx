import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import type { PartInfo, WritingTask } from '../types'
import { countWords, CRITERIA, loadDraft, saveDraft } from '../lib/writing'
import { saveAttempt } from '../lib/progress'
import { TimerBadge, useCountdown } from './Timer'
import { WritingModelView } from './WritingModelView'
import { btn, Icon, ModeTag, Panel } from './ui'

export function WordCounter({ words, min = 140, max = 190 }: { words: number; min?: number; max?: number }) {
  const ok = words >= min && words <= max
  const tone = words === 0 ? 'text-ink-3' : ok ? 'text-ok' : 'text-warn'
  const msg = words === 0 ? `Entre ${min} y ${max} palabras` : words < min ? `faltan ${min - words}` : words <= max ? 'longitud correcta' : `sobran ${words - max}`
  return (
    <span className={`text-sm font-semibold tabular-nums ${tone}`}>
      {words > 0 && `${words} palabras, `}
      {msg}
    </span>
  )
}

/** Enunciado tal como aparece en el cuadernillo del examen. */
export function PromptBox({ task }: { task: Pick<WritingTask, 'prompt' | 'notes'> }) {
  return (
    <div className="border-l-[3px] border-print pl-5 py-1 max-w-3xl">
      <p className="passage !text-[1.05rem] whitespace-pre-line">{task.prompt}</p>
      {task.notes && (
        <div className="mt-3 text-[0.95rem]">
          <p className="font-semibold">Notes. Write about:</p>
          <ol className="mt-1 space-y-0.5">
            {task.notes.map((n, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-print font-bold tabular-nums">{i + 1}.</span> {n}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  )
}

/** Área de escritura con aspecto de hoja. */
export function WritingArea({
  value,
  onChange,
  disabled,
  placeholder = 'Escribe aquí tu respuesta en inglés',
  className = '',
}: {
  value: string
  onChange: (v: string) => void
  disabled?: boolean
  placeholder?: string
  className?: string
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      placeholder={placeholder}
      spellCheck={false}
      className={`w-full min-h-[22rem] rounded-[var(--radius-panel)] border border-line bg-paper p-5 sm:p-7 passage outline-none focus:border-ink-3 disabled:text-ink-2 placeholder:text-ink-3 placeholder:font-sans placeholder:text-base ${className}`}
    />
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
  const items = [...CRITERIA.map((c) => ({ title: c.name, text: c.es })), ...(part.checklist ?? []).map((t) => ({ title: '', text: t }))]

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

  const [copiedAi, setCopiedAi] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* el navegador no permite copiar */
    }
  }
  const copyForAi = async () => {
    try {
      await navigator.clipboard.writeText(aiPrompt(part.name, task, text))
      setCopiedAi(true)
      setTimeout(() => setCopiedAi(false), 2500)
    } catch {
      /* el navegador no permite copiar */
    }
  }

  return (
    <div>
      <header className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm text-ink-3">Writing, {part.name}</p>
          <h1 className="text-[1.75rem] sm:text-[2rem] leading-tight font-bold tracking-[-0.02em]">{task.title}</h1>
          <p className="text-ink-2 mt-0.5">{task.focus}</p>
        </div>
        <div className="flex items-center gap-3">
          <ModeTag mode={mode} />
          {mode === 'exam' && phase === 'writing' && <TimerBadge left={left} total={total} />}
        </div>
      </header>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_20rem] gap-8 items-start">
        <div className="min-w-0">
          <PromptBox task={task} />

          <div className="mt-6">
            <WritingArea value={text} onChange={setText} disabled={phase === 'review' && mode === 'exam'} />
            <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
              <WordCounter words={words} />
              <span className="text-xs text-ink-3">El borrador se guarda solo en este navegador.</span>
            </div>
          </div>
        </div>

        {mode === 'practice' && (
          <aside className="lg:sticky lg:top-6">
            <button onClick={() => setShowPlan((s) => !s)} className={btn('secondary', 'sm')} aria-expanded={showPlan}>
              {showPlan ? 'Ocultar el plan' : 'Ver un plan párrafo a párrafo'}
            </button>
            {showPlan && (
              <ol className="mt-4 space-y-3">
                {task.plan.map((p, i) => (
                  <li key={i} className="flex gap-3 text-[0.95rem] leading-relaxed">
                    <span className="shrink-0 grid place-items-center w-6 h-6 rounded-full border-[1.5px] border-print text-print text-xs font-bold">
                      {i + 1}
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ol>
            )}
          </aside>
        )}
      </div>

      {phase === 'writing' ? (
        <div className="sticky bottom-[calc(3.9rem+env(safe-area-inset-bottom))] sm:bottom-0 z-20 mt-8 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 py-3 bg-bg/95 backdrop-blur border-t border-line flex gap-2">
          <button onClick={() => setPhase('review')} disabled={words === 0} className={btn('primary')}>
            He terminado, quiero revisarlo
          </button>
        </div>
      ) : (
        <section className="mt-10 grid gap-10 max-w-3xl">
          <div>
            <h2 className="text-xl font-bold">Revisa tu texto</h2>
            <p className="text-ink-2 mt-1 mb-4">
              Relee con calma y marca lo que cumples. Los cuatro primeros puntos son los criterios oficiales de Cambridge.
            </p>
            <Panel className="divide-y divide-line">
              {items.map((it, i) => (
                <label key={i} className="flex gap-3 items-start px-4 sm:px-5 py-3 cursor-pointer hover:bg-bg/60">
                  <input
                    type="checkbox"
                    checked={!!checks[i]}
                    onChange={(e) => {
                      setSaved(false)
                      setChecks((c) => Object.assign([...c], { [i]: e.target.checked }))
                    }}
                    className="mt-1 w-4 h-4 accent-[var(--color-ink)]"
                  />
                  <span className="text-[0.97rem] leading-snug">
                    {it.title && <b className="block">{it.title}</b>}
                    <span className={it.title ? 'text-ink-2' : ''}>{it.text}</span>
                  </span>
                </label>
              ))}
            </Panel>
            <div className="mt-4 flex flex-wrap gap-2">
              <button onClick={finishReview} className={btn('primary')}>
                {saved ? 'Revisión guardada' : `Guardar revisión (${checks.filter(Boolean).length} de ${items.length})`}
              </button>
              <button onClick={copy} className={btn('secondary')}>
                {copied ? 'Texto copiado' : 'Copiar mi texto'}
              </button>
              {mode === 'practice' && (
                <button onClick={() => setPhase('writing')} className={btn('quiet')}>
                  Seguir editando
                </button>
              )}
            </div>
          </div>

          <Panel className="p-5 sm:p-6">
            <h2 className="text-lg font-bold">Corrígelo con IA, gratis</h2>
            <p className="text-ink-2 mt-1 text-[0.97rem] leading-relaxed">
              Copia tu texto junto con unas instrucciones preparadas y pégalo en Claude, ChatGPT o Gemini. Te dará una nota en cada
              criterio de Cambridge, tus errores corregidos y una versión mejorada.
            </p>
            <button onClick={copyForAi} className={`${btn('accent')} mt-4`}>
              <Icon name="copy" className="w-4 h-4" />
              {copiedAi ? 'Copiado. Ahora pégalo en el chat' : 'Copiar texto e instrucciones'}
            </button>
          </Panel>


          {part.model && (
            <div>
              <h2 className="text-xl font-bold mb-4">Compara con un modelo comentado</h2>
              <WritingModelView model={part.model} />
            </div>
          )}

          <div>
            <Link to={nextUrl ?? partUrl} className={btn('accent')}>
              {nextUrl ? 'Siguiente tarea' : `Volver a ${part.name}`}
            </Link>
          </div>
        </section>
      )}
    </div>
  )
}

/** Instrucciones para que una IA corrija el texto con los criterios de Cambridge. */
export function aiPrompt(typeName: string, task: Pick<WritingTask, 'prompt' | 'notes'>, text: string): string {
  const notes = task.notes ? `\nNotes: ${task.notes.map((n, i) => `${i + 1}. ${n}`).join('  ')}` : ''
  return `Actúa como examinador del Cambridge B2 First (FCE). Corrige este ${typeName.toLowerCase()} de la prueba de Writing.

ENUNCIADO:
${task.prompt}${notes}

MI TEXTO (${text.trim().split(/\s+/).length} palabras):
${text.trim()}

Responde en español y con este formato:
1. Nota de 0 a 5 en cada criterio oficial (Content, Communicative Achievement, Organisation, Language), con una frase que la justifique, y el total sobre 20.
2. Los errores de gramática y vocabulario: la frase original, la corrección y una breve explicación.
3. Tres consejos concretos para subir la nota.
4. Una versión mejorada de mi texto, de nivel B2 alto, entre 140 y 190 palabras.`
}
