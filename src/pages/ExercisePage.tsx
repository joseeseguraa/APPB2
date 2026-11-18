import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { findPart, findSection } from '../data/sections'
import type {
  ChoiceExercise,
  ErrorExercise,
  Exercise,
  GapExercise,
  GappedTextExercise,
  KwtExercise,
  MatchingExercise,
  ReadingMcExercise,
  McClozeExercise,
  OpenClozeExercise,
  WordFormationExercise,
} from '../types'
import {
  checkAll,
  correctDisplay,
  explanationFor,
  LETTERS,
  parseErrorSentence,
  questionCount,
  shuffleOptions,
  splitGaps,
  userDisplay,
} from '../lib/exercise'
import { containsKeyword, countKwtWords } from '../lib/answers'
import { loadProgress, saveAttempt } from '../lib/progress'
import { recordMistakes } from '../lib/review'
import { isReviewable } from '../lib/cards'
import { reportUrl } from '../lib/report'
import { BackLink } from '../components/Layout'
import { TimerBadge, useCountdown } from '../components/Timer'
import { btn, Icon, Lozenge, ModeTag, Panel, type MarkState } from '../components/ui'
import NotFound from './NotFound'
import WritingRunner from '../components/WritingRunner'

type Mode = 'practice' | 'exam'

export default function ExercisePage() {
  const { section: sSlug, part: pSlug, exercise: eId } = useParams()
  const [params] = useSearchParams()
  const mode: Mode = params.get('mode') === 'exam' ? 'exam' : 'practice'
  const section = findSection(sSlug)
  const part = findPart(sSlug, pSlug)
  const idx = part?.exercises.findIndex((e) => e.id === eId) ?? -1
  if (!section || !part || idx < 0) return <NotFound />
  const ex = part.exercises[idx]
  const next = part.exercises[idx + 1]
  const partUrl = `/s/${section.slug}/${part.slug}`
  const partLabel = part.number ? `Part ${part.number}: ${part.name}` : part.name

  return (
    <div>
      <BackLink to={partUrl} label={partLabel} />
      {/* key: reinicia el estado al cambiar de ejercicio o de modo */}
      {ex.kind === 'writing' ? (
        <WritingRunner
          key={`${ex.id}-${mode}`}
          task={ex}
          part={part}
          mode={mode}
          partUrl={partUrl}
          nextUrl={next ? `${partUrl}/${next.id}?mode=${mode}` : undefined}
        />
      ) : (
        <Runner
          key={`${ex.id}-${mode}`}
          ex={ex}
          mode={mode}
          minutes={part.suggestedMinutes}
          partUrl={partUrl}
          nextUrl={next ? `${partUrl}/${next.id}?mode=${mode}` : undefined}
          position={`${idx + 1} de ${part.exercises.length}`}
        />
      )}
    </div>
  )
}

interface RunnerProps {
  ex: Exercise
  mode: Mode
  minutes: number
  partUrl: string
  nextUrl?: string
  position: string
}

/** Barra de acciones fija abajo (por encima de la barra de navegación del móvil). */
export function ActionBar({ children, sticky = true }: { children: ReactNode; sticky?: boolean }) {
  return (
    <div
      className={`${
        sticky ? 'sticky bottom-[calc(3.9rem+env(safe-area-inset-bottom))] sm:bottom-0 z-20 bg-bg/95 backdrop-blur border-t border-line' : ''
      } mt-8 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 py-3 flex flex-wrap gap-2 items-center`}
    >
      {children}
    </div>
  )
}

function Runner({ ex: original, mode, minutes, partUrl, nextUrl, position }: RunnerProps) {
  // Si ya lo has hecho antes, las opciones salen en otro orden para que no memorices la letra
  const [ex, setEx] = useState<Exercise>(() => (loadProgress()[original.id] ? shuffleOptions(original) : original))
  const n = questionCount(ex)
  const [answers, setAnswers] = useState<string[]>(() => Array(n).fill(''))
  const [results, setResults] = useState<boolean[] | null>(null)
  const [finished, setFinished] = useState(false)

  const setAnswer = (i: number, v: string) => {
    if (finished) return
    setAnswers((a) => a.map((x, j) => (j === i ? v : x)))
    // en práctica, al cambiar una respuesta se oculta la corrección anterior
    if (results) setResults(null)
  }

  // refs para leer el estado actual desde el temporizador sin efectos duplicados
  const answersRef = useRef(answers)
  answersRef.current = answers
  const finishedRef = useRef(false)

  const check = useCallback(() => {
    if (finishedRef.current) return
    const r = checkAll(ex, answersRef.current)
    setResults(r)
    saveAttempt(ex.id, r.filter(Boolean).length, n, r.flatMap((ok, i) => (ok ? [] : [i])))
    if (isReviewable(ex)) recordMistakes(ex.id, r)
    if (mode === 'exam') {
      finishedRef.current = true
      setFinished(true)
    }
  }, [ex, n, mode])

  // Ctrl/Cmd + Intro comprueba sin tener que ir al botón
  const checkRef = useRef(check)
  checkRef.current = () => {
    if (!finishedRef.current && results === null) check()
  }
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault()
        checkRef.current()
      }
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [])

  const totalSeconds = minutes * 60
  const left = useCountdown(totalSeconds, mode === 'exam' && !finished, check)

  const retryWrong = () => {
    if (!results) return
    setAnswers((a) => a.map((x, i) => (results[i] ? x : '')))
    setResults(null)
  }
  const restart = () => {
    setEx(shuffleOptions(original))
    setAnswers(Array(n).fill(''))
    setResults(null)
    finishedRef.current = false
    setFinished(false)
  }

  const score = results?.filter(Boolean).length ?? 0
  const blanks = answers.filter((a) => !a.trim()).length
  const showFeedback = results !== null

  return (
    <div>
      <header className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm text-ink-3">Ejercicio {position}</p>
          <h1 className="text-[1.75rem] sm:text-[2rem] leading-tight font-bold tracking-[-0.02em]">{ex.title}</h1>
          <p className="text-ink-2 mt-0.5">{ex.focus}</p>
        </div>
        <div className="flex items-center gap-3">
          <ModeTag mode={mode} />
          {mode === 'exam' && !finished && <TimerBadge left={left} total={totalSeconds} />}
        </div>
      </header>

      {showFeedback ? (
        <ScoreBanner score={score} total={n} />
      ) : (
        <p className="text-[0.95rem] text-ink-2 mb-5 max-w-2xl">
          {mode === 'practice'
            ? 'Sin límite de tiempo. Cuando quieras, pulsa Comprobar para ver qué tienes bien y la explicación de cada respuesta.'
            : `Tienes ${minutes} minutos, el tiempo recomendado para esta parte. La corrección aparece al entregar o cuando se acabe el tiempo.`}
        </p>
      )}

      <ExerciseBody ex={ex} answers={answers} results={results} onChange={setAnswer} disabled={finished} />

      <ActionBar sticky={!showFeedback}>
        {!finished && !showFeedback && (
          <>
            <button onClick={check} className={btn('primary')}>
              {mode === 'exam' ? 'Entregar' : 'Comprobar'}
            </button>
            {blanks > 0 && (
              <span className="text-sm text-ink-3">
                {blanks} {blanks === 1 ? 'pregunta' : 'preguntas'} sin responder
              </span>
            )}
            <span className="hidden lg:inline text-xs text-ink-3 ml-auto">Ctrl + Intro para {mode === 'exam' ? 'entregar' : 'comprobar'}</span>
          </>
        )}
        {mode === 'practice' && showFeedback && (
          <>
            {score < n && (
              <button onClick={retryWrong} className={btn('primary')}>
                Reintentar los fallos
              </button>
            )}
            <button onClick={restart} className={btn('secondary')}>
              Empezar de nuevo
            </button>
          </>
        )}
        {mode === 'exam' && finished && (
          <Link to="?mode=practice" className={btn('secondary')}>
            Repetir sin tiempo
          </Link>
        )}
        <span className="flex-1" />
        {showFeedback && (
          <Link to={nextUrl ?? partUrl} className={btn('accent')}>
            {nextUrl ? 'Siguiente ejercicio' : 'Volver a la lista'}
          </Link>
        )}
      </ActionBar>
    </div>
  )
}

export function ScoreBanner({ score, total }: { score: number; total: number }) {
  const pct = score / total
  const msg =
    pct === 1
      ? 'Todo correcto.'
      : pct >= 0.75
        ? 'Muy bien. Repasa las explicaciones de los fallos.'
        : pct >= 0.5
          ? 'Vas por buen camino. Lee las explicaciones antes de reintentar.'
          : 'Lee con calma las explicaciones y vuelve a intentarlo.'
  const color = pct >= 0.75 ? 'text-ok' : pct >= 0.5 ? 'text-warn' : 'text-bad'
  return (
    <Panel className="mb-6 p-5 flex flex-wrap items-center gap-x-6 gap-y-2">
      <p className={`text-[2.5rem] leading-none font-bold tabular-nums tracking-[-0.03em] ${color}`}>
        {score}
        <span className="text-ink-3 text-2xl font-semibold">/{total}</span>
      </p>
      <p className="text-ink-2 max-w-md">{msg}</p>
    </Panel>
  )
}

/** Pinta cualquier ejercicio (sin barra de acciones). Se reutiliza en el simulacro. */
export function ExerciseBody(props: PartProps<Exercise>) {
  const { ex } = props
  switch (ex.kind) {
    case 'mc-cloze':
      return <McCloze {...props} ex={ex} />
    case 'open-cloze':
    case 'word-formation':
      return <OpenCloze {...props} ex={ex} />
    case 'kwt':
      return <Kwt {...props} ex={ex} />
    case 'choice':
      return <Choice {...props} ex={ex} />
    case 'gap':
      return <Gap {...props} ex={ex} />
    case 'error':
      return <ErrorSpot {...props} ex={ex} />
    case 'reading-mc':
      return <ReadingMc {...props} ex={ex} />
    case 'gapped-text':
      return <GappedText {...props} ex={ex} />
    case 'matching':
      return <Matching {...props} ex={ex} />
    case 'writing':
      return null
  }
}

export interface PartProps<E> {
  ex: E
  answers: string[]
  results: boolean[] | null
  onChange: (i: number, v: string) => void
  disabled: boolean
}

/* ---------- Piezas comunes ---------- */

function Feedback({ ex, i, value, ok }: { ex: Exercise; i: number; value: string; ok: boolean }) {
  return (
    <div className={`mt-3 border-l-[3px] pl-4 py-1 text-[0.95rem] leading-relaxed ${ok ? 'border-ok' : 'border-bad'}`}>
      {ok ? (
        <p className="font-semibold text-ok">Correcto: {correctDisplay(ex, i)}</p>
      ) : (
        <>
          <p className="text-bad">
            Tu respuesta:{' '}
            {value.trim() ? <span className="line-through decoration-1">{userDisplay(ex, i, value)}</span> : <i>en blanco</i>}
          </p>
          <p className="font-semibold text-ok">Correcta: {correctDisplay(ex, i)}</p>
        </>
      )}
      <p className="mt-1 text-ink-2">{explanationFor(ex, i)}</p>
      <ReportLink ex={ex} i={i} value={value} />
    </div>
  )
}

/** Enlace discreto para avisar de un error en la pregunta. */
function ReportLink({ ex, i, value }: { ex: Exercise; i: number; value: string }) {
  // en las tarjetas sueltas el id es "ejercicio#pregunta"
  const [exId, qStr] = ex.id.includes('#') ? ex.id.split('#') : [ex.id, String(i)]
  const href = reportUrl({
    exId,
    q: Number(qStr),
    title: ex.title,
    userAnswer: value.trim() ? userDisplay(ex, i, value) : '',
    correct: correctDisplay(ex, i),
  })
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="mt-2 inline-flex items-center gap-1 text-xs text-ink-3 hover:text-ink underline-offset-2 hover:underline"
    >
      <Icon name="flag" className="w-3.5 h-3.5" />
      ¿Crees que hay un error en esta pregunta? Avísanos
    </a>
  )
}

/** Estado de una casilla según la respuesta y la corrección. */
function markFor(j: number, value: string, answer: number, checked: boolean): MarkState {
  const selected = value === String(j)
  if (!checked) return selected ? 'marked' : 'empty'
  if (j === answer) return selected ? 'correct' : 'missed'
  return selected ? 'wrong' : 'dim'
}

/** Opción con casilla de hoja de respuestas. */
function OptionButton({
  letter,
  label,
  state,
  onClick,
  disabled,
  block = false,
}: {
  letter: string
  label: ReactNode
  state: MarkState
  onClick: () => void
  disabled: boolean
  block?: boolean
}) {
  const text =
    state === 'dim' ? 'text-ink-3' : state === 'wrong' ? 'text-bad' : state === 'correct' || state === 'missed' ? 'text-ok font-semibold' : 'text-ink'
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-pressed={state === 'marked' || state === 'correct' || state === 'wrong'}
      className={`group flex items-start gap-2.5 rounded-md px-2 py-1.5 -mx-2 text-left transition-colors enabled:hover:bg-bg ${block ? 'w-full' : ''}`}
    >
      <span className="pt-[0.1rem]">
        <Lozenge letter={letter} state={state} />
      </span>
      <span className={`text-[0.98rem] leading-snug ${text}`}>{label}</span>
    </button>
  )
}

/** Número de hueco impreso (como en el cuadernillo). */
function GapNo({ n }: { n: number }) {
  return (
    <span className="inline-grid place-items-center min-w-[1.4rem] h-[1.4rem] px-1 rounded-full border-[1.5px] border-print text-print font-sans text-[0.7rem] font-bold align-[0.15em]">
      {n}
    </span>
  )
}

function inputTone(r: boolean | undefined) {
  return r === undefined
    ? 'border-ink-3 focus:border-ink bg-transparent'
    : r
      ? 'border-ok bg-ok-soft text-ok'
      : 'border-bad bg-bad-soft text-bad'
}

function QuestionRow({ n, children }: { n: number; children: ReactNode }) {
  return (
    <div className="flex gap-4 px-4 sm:px-5 py-4">
      <span className="shrink-0 w-6 text-print font-bold tabular-nums pt-0.5">{n}</span>
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  )
}

/* ---------- Part 1: Multiple-choice cloze ---------- */

function McCloze({ ex, answers, results, onChange, disabled }: PartProps<McClozeExercise>) {
  return (
    <div className="grid lg:grid-cols-[minmax(0,1fr)_22rem] gap-6 items-start">
      <Panel className="p-5 sm:p-8 lg:sticky lg:top-6">
        <p className="passage">
          {splitGaps(ex.text).map((seg, k) =>
            typeof seg === 'string' ? (
              <span key={k}>{seg}</span>
            ) : (
              <a
                key={k}
                href={`#q-${seg}`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(`q-${seg}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }}
                className="whitespace-nowrap"
              >
                <GapNo n={seg + 1} />{' '}
                <span
                  className={`inline-block min-w-[4.5rem] border-b-2 font-sans text-[0.95rem] font-semibold text-center ${
                    results ? (results[seg] ? 'border-ok text-ok' : 'border-bad text-bad') : answers[seg] ? 'border-ink' : 'border-line-strong'
                  }`}
                >
                  {answers[seg] !== '' ? ex.gaps[seg].options[Number(answers[seg])] : ' '}
                </span>
              </a>
            ),
          )}
        </p>
      </Panel>

      <Panel className="divide-y divide-line">
        {ex.gaps.map((g, i) => (
          <div key={i} id={`q-${i}`} className="scroll-mt-24">
            <QuestionRow n={i + 1}>
              <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
                {g.options.map((opt, j) => (
                  <OptionButton
                    key={j}
                    letter={LETTERS[j]}
                    label={opt}
                    state={markFor(j, answers[i], g.answer, !!results)}
                    onClick={() => onChange(i, String(j))}
                    disabled={disabled}
                  />
                ))}
              </div>
              {results && <Feedback ex={ex} i={i} value={answers[i]} ok={results[i]} />}
            </QuestionRow>
          </div>
        ))}
      </Panel>
    </div>
  )
}

/* ---------- Part 2 y 3: Open cloze / Word formation ---------- */

function OpenCloze({ ex, answers, results, onChange, disabled }: PartProps<OpenClozeExercise | WordFormationExercise>) {
  const isWf = ex.kind === 'word-formation'
  return (
    <>
      <p className="text-sm text-ink-2 mb-3">
        {isWf ? 'Transforma la palabra en mayúsculas para que encaje en el hueco.' : 'Escribe una sola palabra en cada hueco.'}
      </p>
      <Panel className="p-5 sm:p-8 max-w-3xl">
        <p className="passage !leading-[2.4]">
          {splitGaps(ex.text).map((seg, k) => {
            if (typeof seg === 'string') return <span key={k}>{seg}</span>
            const r = results?.[seg]
            return (
              <span key={k} className="inline-flex items-baseline gap-1.5 mx-0.5 whitespace-nowrap">
                <GapNo n={seg + 1} />
                <input
                  value={answers[seg]}
                  disabled={disabled}
                  onChange={(e) => onChange(seg, e.target.value)}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck={false}
                  aria-label={`Hueco ${seg + 1}`}
                  className={`font-sans text-[1rem] font-medium w-32 sm:w-36 h-8 px-1.5 border-0 border-b-2 rounded-none outline-none ${inputTone(r)}`}
                />
                {isWf && (
                  <span className="font-sans text-[0.72rem] font-bold tracking-wide text-print">
                    {(ex as WordFormationExercise).gaps[seg].stem}
                  </span>
                )}
              </span>
            )
          })}
        </p>
      </Panel>

      {results && (
        <>
          <h2 className="mt-8 mb-3 text-lg font-bold">Corrección</h2>
          <Panel className="divide-y divide-line max-w-3xl">
            {ex.gaps.map((_, i) => (
              <QuestionRow key={i} n={i + 1}>
                {isWf && <p className="text-xs font-bold tracking-wide text-print">{(ex as WordFormationExercise).gaps[i].stem}</p>}
                <Feedback ex={ex} i={i} value={answers[i]} ok={results[i]} />
              </QuestionRow>
            ))}
          </Panel>
        </>
      )}
    </>
  )
}

/* ---------- Part 4: Key word transformation ---------- */

function Kwt({ ex, answers, results, onChange, disabled }: PartProps<KwtExercise>) {
  return (
    <>
      <p className="text-sm text-ink-2 mb-3 max-w-2xl">
        Completa la segunda frase con 2 a 5 palabras, incluida la palabra clave, sin cambiarla. Las contracciones cuentan como
        dos palabras.
      </p>
      <Panel className="divide-y divide-line max-w-3xl">
        {ex.items.map((it, i) => {
          const words = countKwtWords(answers[i])
          const r = results?.[i]
          const badLen = words < 2 || words > 5
          const noKey = !containsKeyword(answers[i], it.keyword)
          return (
            <QuestionRow key={i} n={i + 1}>
              <p className="passage !text-[1.05rem]">{it.original}</p>
              <p className="my-2.5">
                <span className="inline-block font-bold tracking-[0.12em] text-sm text-print border-[1.5px] border-print rounded px-2 py-0.5">
                  {it.keyword}
                </span>
              </p>
              <div className="passage !text-[1.05rem] flex flex-wrap items-baseline gap-x-2 gap-y-1">
                {it.before && <span>{it.before}</span>}
                <input
                  value={answers[i]}
                  disabled={disabled}
                  onChange={(e) => onChange(i, e.target.value)}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck={false}
                  aria-label={`Respuesta ${i + 1}`}
                  className={`font-sans text-[1rem] font-medium flex-1 min-w-[12rem] h-9 px-1.5 border-0 border-b-2 rounded-none outline-none ${inputTone(r)}`}
                />
                <span>{it.after}</span>
              </div>
              {!results && answers[i].trim() && (
                <p className={`text-xs mt-1.5 ${badLen || noKey ? 'text-bad' : 'text-ink-3'}`}>
                  {words} {words === 1 ? 'palabra' : 'palabras'}
                  {badLen && ', tienen que ser entre 2 y 5'}
                  {noKey && `. Falta la palabra clave ${it.keyword}`}
                </p>
              )}
              {results && <Feedback ex={ex} i={i} value={answers[i]} ok={results[i]} />}
            </QuestionRow>
          )
        })}
      </Panel>
    </>
  )
}

/* ---------- Frases: elegir / rellenar / detectar error ---------- */

/** Pinta una frase con ___ sustituido por `slot`. */
function SentenceWithSlot({ sentence, slot }: { sentence: string; slot: ReactNode }) {
  const [a, ...rest] = sentence.split('___')
  return (
    <p className="passage !text-[1.08rem] !leading-[2.1]">
      {a}
      {rest.length > 0 && slot}
      {rest.join('___')}
    </p>
  )
}

function Choice({ ex, answers, results, onChange, disabled }: PartProps<ChoiceExercise>) {
  return (
    <>
      <p className="text-sm text-ink-2 mb-3">Elige la opción correcta para cada frase.</p>
      <Panel className="divide-y divide-line max-w-3xl">
        {ex.items.map((it, i) => {
          const chosen = answers[i] !== '' ? it.options[Number(answers[i])] : null
          return (
            <QuestionRow key={i} n={i + 1}>
              <SentenceWithSlot
                sentence={it.sentence}
                slot={
                  <span
                    className={`inline-block min-w-[5rem] mx-1 border-b-2 font-sans text-[0.98rem] font-semibold text-center ${
                      results ? (results[i] ? 'border-ok text-ok' : 'border-bad text-bad') : chosen ? 'border-ink' : 'border-line-strong'
                    }`}
                  >
                    {chosen ?? ' '}
                  </span>
                }
              />
              <div className="mt-1.5 flex flex-wrap gap-x-5 gap-y-0.5">
                {it.options.map((opt, j) => (
                  <OptionButton
                    key={j}
                    letter={LETTERS[j]}
                    label={opt}
                    state={markFor(j, answers[i], it.answer, !!results)}
                    onClick={() => onChange(i, String(j))}
                    disabled={disabled}
                  />
                ))}
              </div>
              {results && <Feedback ex={ex} i={i} value={answers[i]} ok={results[i]} />}
            </QuestionRow>
          )
        })}
      </Panel>
    </>
  )
}

function Gap({ ex, answers, results, onChange, disabled }: PartProps<GapExercise>) {
  return (
    <>
      <p className="text-sm text-ink-2 mb-3">Escribe la forma correcta. Si hay una pista entre paréntesis, úsala.</p>
      <Panel className="divide-y divide-line max-w-3xl">
        {ex.items.map((it, i) => (
          <QuestionRow key={i} n={i + 1}>
            <SentenceWithSlot
              sentence={it.sentence}
              slot={
                <input
                  value={answers[i]}
                  disabled={disabled}
                  onChange={(e) => onChange(i, e.target.value)}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck={false}
                  aria-label={`Respuesta ${i + 1}`}
                  className={`font-sans text-[1rem] font-medium w-44 h-8 mx-1 px-1.5 border-0 border-b-2 rounded-none outline-none ${inputTone(results?.[i])}`}
                />
              }
            />
            {results && <Feedback ex={ex} i={i} value={answers[i]} ok={results[i]} />}
          </QuestionRow>
        ))}
      </Panel>
    </>
  )
}

function ErrorSpot({ ex, answers, results, onChange, disabled }: PartProps<ErrorExercise>) {
  return (
    <>
      <p className="text-sm text-ink-2 mb-3">Toca la palabra o expresión que está mal. Si la frase está bien, marca “Es correcta”.</p>
      <Panel className="divide-y divide-line max-w-3xl">
        {ex.items.map((it, i) => {
          const { tokens, wrong } = parseErrorSentence(it.sentence)
          const sel = answers[i]
          const noneState: MarkState = markFor(-1, sel, wrong, !!results)
          return (
            <QuestionRow key={i} n={i + 1}>
              <p className="passage !text-[1.08rem] flex flex-wrap gap-x-[0.3em] gap-y-1">
                {tokens.map((t, j) => {
                  const selected = sel === String(j)
                  let cls = selected ? 'bg-ink text-on-ink' : 'enabled:hover:bg-print-soft'
                  if (results) {
                    if (j === wrong) cls = selected ? 'bg-ok text-on-ink' : 'underline decoration-bad decoration-wavy decoration-2 underline-offset-4'
                    else cls = selected ? 'bg-bad text-on-ink' : ''
                  }
                  return (
                    <button key={j} type="button" disabled={disabled} onClick={() => onChange(i, String(j))} className={`rounded px-0.5 -mx-0.5 transition-colors ${cls}`}>
                      {t}
                    </button>
                  )
                })}
              </p>
              <div className="mt-2">
                <OptionButton letter="OK" label="Es correcta" state={noneState} onClick={() => onChange(i, '-1')} disabled={disabled} />
              </div>
              {results && <Feedback ex={ex} i={i} value={answers[i]} ok={results[i]} />}
            </QuestionRow>
          )
        })}
      </Panel>
    </>
  )
}

/* ---------- Reading ---------- */

function Paragraphs({ text }: { text: string }) {
  return (
    <>
      {text.split(/\n\s*\n/).map((p, i) => (
        <p key={i} className="mb-5 last:mb-0">
          {p}
        </p>
      ))}
    </>
  )
}

/** Dos columnas en pantallas grandes: el texto (con scroll propio) y las preguntas. */
function SplitLayout({ text, children }: { text: ReactNode; children: ReactNode }) {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-6 lg:items-start">
      <Panel className="p-5 sm:p-8 passage lg:sticky lg:top-6 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">{text}</Panel>
      <div className="mt-6 lg:mt-0">{children}</div>
    </div>
  )
}

function ReadingMc({ ex, answers, results, onChange, disabled }: PartProps<ReadingMcExercise>) {
  return (
    <>
      <p className="text-sm text-ink-2 mb-3">Lee el texto y elige la mejor respuesta para cada pregunta.</p>
      <SplitLayout text={<Paragraphs text={ex.text} />}>
        <Panel className="divide-y divide-line">
          {ex.questions.map((q, i) => (
            <QuestionRow key={i} n={i + 1}>
              <p className="font-semibold leading-snug mb-2">{q.question}</p>
              <div className="grid gap-0.5">
                {q.options.map((opt, j) => (
                  <OptionButton
                    key={j}
                    block
                    letter={LETTERS[j]}
                    label={opt}
                    state={markFor(j, answers[i], q.answer, !!results)}
                    onClick={() => onChange(i, String(j))}
                    disabled={disabled}
                  />
                ))}
              </div>
              {results && <Feedback ex={ex} i={i} value={answers[i]} ok={results[i]} />}
            </QuestionRow>
          ))}
        </Panel>
      </SplitLayout>
    </>
  )
}

function GappedText({ ex, answers, results, onChange, disabled }: PartProps<GappedTextExercise>) {
  const used = new Set(answers.filter((a) => a !== ''))
  const paragraphs = ex.text.split(/\n\s*\n/)
  return (
    <>
      <p className="text-sm text-ink-2 mb-3">
        Faltan {ex.answers.length} frases. Elige la que encaja en cada hueco; sobra una.
      </p>
      <SplitLayout
        text={paragraphs.map((p, k) => (
          <p key={k} className="mb-5 last:mb-0">
            {splitGaps(p).map((seg, j) => {
              if (typeof seg === 'string') return <span key={j}>{seg}</span>
              const v = answers[seg]
              const r = results?.[seg]
              const tone = r === undefined ? (v ? 'border-ink' : 'border-print/60') : r ? 'border-ok bg-ok-soft' : 'border-bad bg-bad-soft'
              return (
                <span key={j} className={`block my-3 border-l-[3px] pl-3 py-1.5 ${tone}`}>
                  <span className="flex items-center gap-2 font-sans text-sm">
                    <GapNo n={seg + 1} />
                    <select
                      value={v}
                      disabled={disabled}
                      onChange={(e) => onChange(seg, e.target.value)}
                      aria-label={`Hueco ${seg + 1}`}
                      className="h-8 rounded-md border border-line-strong bg-paper px-2 text-sm font-semibold"
                    >
                      <option value="">Elegir frase</option>
                      {ex.sentences.map((_, si) => (
                        <option key={si} value={String(si)}>
                          {LETTERS[si]}
                        </option>
                      ))}
                    </select>
                  </span>
                  {v !== '' && <span className="block mt-1 italic text-ink-2">{ex.sentences[Number(v)]}</span>}
                </span>
              )
            })}
          </p>
        ))}
      >
        <Panel className="p-4 sm:p-5">
          <h3 className="font-bold mb-3">Frases</h3>
          <ul className="grid gap-2.5">
            {ex.sentences.map((s, si) => (
              <li key={si} className={`flex gap-3 text-[0.95rem] leading-snug ${used.has(String(si)) ? 'text-ink-3' : ''}`}>
                <Lozenge letter={LETTERS[si]} state={used.has(String(si)) ? 'marked' : 'empty'} />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </Panel>
        {results && (
          <Panel className="mt-4 divide-y divide-line">
            {ex.answers.map((_, i) => (
              <QuestionRow key={i} n={i + 1}>
                <Feedback ex={ex} i={i} value={answers[i]} ok={results[i]} />
              </QuestionRow>
            ))}
          </Panel>
        )}
      </SplitLayout>
    </>
  )
}

function Matching({ ex, answers, results, onChange, disabled }: PartProps<MatchingExercise>) {
  const letters = ex.sections.map((_, i) => LETTERS[i])
  return (
    <>
      <p className="text-sm text-ink-2 mb-3">{ex.intro}</p>
      <SplitLayout
        text={ex.sections.map((sec, i) => (
          <section key={i} className="mb-7 last:mb-0">
            <h3 className="font-sans font-bold text-[1rem] mb-1.5 flex items-center gap-2">
              <Lozenge letter={letters[i]} state="empty" />
              {sec.title}
            </h3>
            <p>{sec.text}</p>
          </section>
        ))}
      >
        <Panel className="divide-y divide-line">
          {ex.questions.map((q, i) => (
            <QuestionRow key={i} n={i + 1}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <p className="flex-1 min-w-[12rem] leading-snug">{q.statement}</p>
                <div className="flex gap-1">
                  {letters.map((L, j) => (
                    <button
                      key={j}
                      type="button"
                      disabled={disabled}
                      onClick={() => onChange(i, String(j))}
                      aria-label={`${L}, ${ex.sections[j].title}`}
                      className="p-1 rounded enabled:hover:bg-bg"
                    >
                      <Lozenge letter={L} state={markFor(j, answers[i], q.answer, !!results)} />
                    </button>
                  ))}
                </div>
              </div>
              {results && <Feedback ex={ex} i={i} value={answers[i]} ok={results[i]} />}
            </QuestionRow>
          ))}
        </Panel>
      </SplitLayout>
    </>
  )
}
