import { useCallback, useRef, useState, type ReactNode } from 'react'
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
  splitGaps,
  userDisplay,
} from '../lib/exercise'
import { containsKeyword, countKwtWords } from '../lib/answers'
import { saveAttempt } from '../lib/progress'
import { Breadcrumbs } from '../components/Layout'
import { TimerBadge, useCountdown } from '../components/Timer'
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
  const partShort = part.number ? `Part ${part.number}` : part.name

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: 'Inicio', to: '/' },
          { label: section.name, to: `/s/${section.slug}` },
          { label: partShort, to: partUrl },
          { label: ex.title },
        ]}
      />
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
        partLabel={part.number ? `Part ${part.number} · ${part.name}` : `${section.name} · ${part.name}`}
        partUrl={partUrl}
        nextUrl={next ? `${partUrl}/${next.id}?mode=${mode}` : undefined}
      />
      )}
    </div>
  )
}

interface RunnerProps {
  ex: Exercise
  mode: Mode
  minutes: number
  partLabel: string
  partUrl: string
  nextUrl?: string
}

function Runner({ ex, mode, minutes, partLabel, partUrl, nextUrl }: RunnerProps) {
  const n = questionCount(ex)
  const [answers, setAnswers] = useState<string[]>(() => Array(n).fill(''))
  const [results, setResults] = useState<boolean[] | null>(null)
  const [finished, setFinished] = useState(false)

  const setAnswer = (i: number, v: string) => {
    if (finished) return
    setAnswers((a) => a.map((x, j) => (j === i ? v : x)))
    // en práctica, al cambiar una respuesta se oculta su corrección anterior
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
    if (mode === 'exam') {
      finishedRef.current = true
      setFinished(true)
    }
  }, [ex, n, mode])

  const totalSeconds = minutes * 60
  const left = useCountdown(totalSeconds, mode === 'exam' && !finished, check)

  const retryWrong = () => {
    if (!results) return
    setAnswers((a) => a.map((x, i) => (results[i] ? x : '')))
    setResults(null)
  }
  const restart = () => {
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
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div>
          <p className="text-sm text-slate-500">{partLabel}</p>
          <h1 className="text-2xl font-bold text-navy-900">{ex.title}</h1>
          <p className="text-sm text-slate-500">{ex.focus}</p>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`text-xs font-semibold uppercase tracking-wide rounded-full px-2.5 py-1 ${
              mode === 'exam' ? 'bg-red-50 text-red-700' : 'bg-emerald-50 text-emerald-700'
            }`}
          >
            {mode === 'exam' ? 'Modo examen' : 'Modo práctica'}
          </span>
          {mode === 'exam' && !finished && <TimerBadge left={left} total={totalSeconds} />}
        </div>
      </div>

      {mode === 'practice' && !showFeedback && (
        <p className="text-sm text-slate-600 mb-4">
          Sin límite de tiempo. Pulsa <b>Comprobar</b> cuando quieras para ver qué tienes bien y la explicación de cada
          respuesta.
        </p>
      )}
      {mode === 'exam' && !finished && (
        <p className="text-sm text-slate-600 mb-4">
          Tienes {minutes} minutos, el tiempo recomendado para esta parte en el examen. La corrección aparece al
          entregar o cuando se acabe el tiempo.
        </p>
      )}

      {showFeedback && (
        <ScoreBanner score={score} total={n} />
      )}

      <ExerciseBody ex={ex} answers={answers} results={results} onChange={setAnswer} disabled={finished} />

      {/* Barra de acciones */}
      <div
        className={`${showFeedback ? '' : 'sticky bottom-0 bg-navy-50/95 backdrop-blur border-t border-navy-100'} mt-6 -mx-4 px-4 py-3 flex flex-wrap gap-2 items-center`}
      >
        {!finished && !showFeedback && (
          <>
            <button
              onClick={check}
              className="rounded-xl bg-navy-800 text-white px-5 py-2.5 font-medium hover:bg-navy-700"
            >
              {mode === 'exam' ? 'Entregar' : 'Comprobar'}
            </button>
            {blanks > 0 && (
              <span className="text-sm text-slate-500">
                {blanks} {blanks === 1 ? 'pregunta' : 'preguntas'} sin responder
              </span>
            )}
          </>
        )}
        {mode === 'practice' && showFeedback && (
          <>
            {score < n && (
              <button
                onClick={retryWrong}
                className="rounded-xl bg-navy-800 text-white px-5 py-2.5 font-medium hover:bg-navy-700"
              >
                Reintentar los fallos
              </button>
            )}
            <button
              onClick={restart}
              className="rounded-xl border border-navy-800 text-navy-800 px-5 py-2.5 font-medium hover:bg-white"
            >
              Empezar de nuevo
            </button>
          </>
        )}
        {mode === 'exam' && finished && (
          <Link
            to={`?mode=practice`}
            className="rounded-xl border border-navy-800 text-navy-800 px-5 py-2.5 font-medium hover:bg-white"
          >
            Repetir en modo práctica
          </Link>
        )}
        <span className="flex-1" />
        {showFeedback && nextUrl && (
          <Link to={nextUrl} className="rounded-xl bg-gold-400 text-navy-900 px-5 py-2.5 font-medium hover:bg-gold-300">
            Siguiente ejercicio →
          </Link>
        )}
        {showFeedback && !nextUrl && (
          <Link to={partUrl} className="rounded-xl bg-gold-400 text-navy-900 px-5 py-2.5 font-medium hover:bg-gold-300">
            Volver a la parte
          </Link>
        )}
      </div>
    </div>
  )
}

export function ScoreBanner({ score, total }: { score: number; total: number }) {
  const pct = score / total
  const msg =
    pct === 1 ? '¡Perfecto! 🎉' : pct >= 0.75 ? '¡Muy bien!' : pct >= 0.5 ? 'Vas bien, repasa los fallos.' : 'Sigue practicando: lee las explicaciones.'
  return (
    <div
      className={`mb-5 rounded-2xl p-4 flex items-center gap-4 ${
        pct >= 0.75 ? 'bg-emerald-50 text-emerald-900' : pct >= 0.5 ? 'bg-amber-50 text-amber-900' : 'bg-red-50 text-red-900'
      }`}
    >
      <span className="text-3xl font-bold tabular-nums">
        {score}/{total}
      </span>
      <span className="font-medium">{msg}</span>
    </div>
  )
}

/* ---------- Feedback reutilizable ---------- */

function Feedback({ ex, i, value, ok }: { ex: Exercise; i: number; value: string; ok: boolean }) {
  return (
    <div className={`mt-2 rounded-xl p-3 text-sm ${ok ? 'bg-emerald-50' : 'bg-red-50'}`}>
      {ok ? (
        <p className="font-medium text-emerald-800">✓ Correcto: {correctDisplay(ex, i)}</p>
      ) : (
        <>
          <p className="text-red-800">
            ✗ Tu respuesta:{' '}
            {value.trim() ? <span className="line-through">{userDisplay(ex, i, value)}</span> : <i>en blanco</i>}
          </p>
          <p className="font-medium text-emerald-800">Correcta: {correctDisplay(ex, i)}</p>
        </>
      )}
      <p className="mt-1.5 text-slate-700">{explanationFor(ex, i)}</p>
    </div>
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

/* ---------- Part 1: Multiple-choice cloze ---------- */

function McCloze({ ex, answers, results, onChange, disabled }: PartProps<McClozeExercise>) {
  return (
    <>
      <article className="rounded-2xl bg-white border border-navy-100 p-5 sm:p-7 font-serif text-[1.05rem] leading-8">
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
              className={`inline-flex items-baseline gap-1 mx-0.5 px-2 rounded-md font-sans text-[0.95rem] border ${
                results ? (results[seg] ? 'border-emerald-400 bg-emerald-50' : 'border-red-400 bg-red-50') : 'border-navy-200 bg-navy-50'
              }`}
            >
              <b className="text-navy-700">{seg + 1}</b>
              <span className="min-w-[3.5rem] text-slate-800">
                {answers[seg] !== '' ? ex.gaps[seg].options[Number(answers[seg])] : '……'}
              </span>
            </a>
          ),
        )}
      </article>

      <div className="mt-5 grid gap-3">
        {ex.gaps.map((g, i) => (
          <div key={i} id={`q-${i}`} className="rounded-2xl bg-white border border-navy-100 p-4 scroll-mt-20">
            <p className="text-sm font-semibold text-navy-800 mb-2">Hueco {i + 1}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {g.options.map((opt, j) => {
                const selected = answers[i] === String(j)
                let cls = selected ? 'border-navy-700 bg-navy-800 text-white' : 'border-navy-200 bg-white hover:border-navy-500'
                if (results) {
                  if (j === g.answer) cls = 'border-emerald-500 bg-emerald-50 text-emerald-900'
                  else if (selected) cls = 'border-red-400 bg-red-50 text-red-800'
                  else cls = 'border-slate-200 bg-white text-slate-400'
                }
                return (
                  <button
                    key={j}
                    disabled={disabled}
                    onClick={() => onChange(i, String(j))}
                    className={`rounded-xl border px-3 py-2 text-left text-sm transition ${cls}`}
                  >
                    <b className="mr-1.5">{LETTERS[j]}</b>
                    {opt}
                  </button>
                )
              })}
            </div>
            {results && <Feedback ex={ex} i={i} value={answers[i]} ok={results[i]} />}
          </div>
        ))}
      </div>
    </>
  )
}

/* ---------- Part 2 y 3: Open cloze / Word formation ---------- */

function OpenCloze({
  ex,
  answers,
  results,
  onChange,
  disabled,
}: PartProps<OpenClozeExercise | WordFormationExercise>) {
  const isWf = ex.kind === 'word-formation'
  return (
    <>
      {ex.kind === 'open-cloze' && (
        <p className="text-sm text-slate-600 mb-3">Escribe <b>una sola palabra</b> en cada hueco.</p>
      )}
      {isWf && (
        <p className="text-sm text-slate-600 mb-3">
          Transforma la palabra en <b>MAYÚSCULAS</b> para que encaje en el hueco.
        </p>
      )}
      <article className="rounded-2xl bg-white border border-navy-100 p-5 sm:p-7 font-serif text-[1.05rem] leading-[2.6rem]">
        {splitGaps(ex.text).map((seg, k) => {
          if (typeof seg === 'string') return <span key={k}>{seg}</span>
          const r = results?.[seg]
          return (
            <span key={k} className="inline-flex items-center gap-1 mx-0.5 align-middle">
              <b className="font-sans text-xs text-navy-700">{seg + 1}</b>
              <input
                value={answers[seg]}
                disabled={disabled}
                onChange={(e) => onChange(seg, e.target.value)}
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
                aria-label={`Hueco ${seg + 1}`}
                className={`font-sans text-base w-32 sm:w-36 h-8 px-2 rounded-md border outline-none focus:ring-2 focus:ring-navy-200 ${
                  r === undefined ? 'border-navy-200 bg-navy-50' : r ? 'border-emerald-500 bg-emerald-50' : 'border-red-400 bg-red-50'
                }`}
              />
              {isWf && (
                <span className="font-sans text-xs font-bold tracking-wide text-gold-500 bg-navy-800 rounded px-1.5 py-0.5">
                  {(ex as WordFormationExercise).gaps[seg].stem}
                </span>
              )}
            </span>
          )
        })}
      </article>

      {results && (
        <div className="mt-5 grid gap-3">
          <h2 className="font-semibold text-navy-900">Corrección</h2>
          {ex.gaps.map((_, i) => (
            <div key={i} className="rounded-2xl bg-white border border-navy-100 p-4">
              <p className="text-sm font-semibold text-navy-800">
                Hueco {i + 1}
                {isWf && <span className="ml-2 text-slate-400 font-normal">({(ex as WordFormationExercise).gaps[i].stem})</span>}
              </p>
              <Feedback ex={ex} i={i} value={answers[i]} ok={results[i]} />
            </div>
          ))}
        </div>
      )}
    </>
  )
}

/* ---------- Part 4: Key word transformation ---------- */

function Kwt({ ex, answers, results, onChange, disabled }: PartProps<KwtExercise>) {
  return (
    <>
      <p className="text-sm text-slate-600 mb-3">
        Completa la segunda frase con <b>2 a 5 palabras</b>, incluida la palabra clave, sin cambiarla. Las contracciones
        cuentan como 2 palabras.
      </p>
      <div className="grid gap-3">
        {ex.items.map((it, i) => {
          const words = countKwtWords(answers[i])
          const r = results?.[i]
          return (
            <div key={i} className="rounded-2xl bg-white border border-navy-100 p-4 sm:p-5">
              <p className="text-sm font-semibold text-navy-800 mb-2">{i + 1}.</p>
              <p className="font-serif text-[1.05rem]">{it.original}</p>
              <p className="my-2">
                <span className="inline-block font-bold tracking-widest text-sm text-gold-400 bg-navy-800 rounded-md px-2.5 py-1">
                  {it.keyword}
                </span>
              </p>
              <div className="font-serif text-[1.05rem] leading-10 flex flex-wrap items-center gap-x-2">
                {it.before && <span>{it.before}</span>}
                <input
                  value={answers[i]}
                  disabled={disabled}
                  onChange={(e) => onChange(i, e.target.value)}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck={false}
                  aria-label={`Respuesta ${i + 1}`}
                  className={`font-sans text-base flex-1 min-w-[12rem] h-9 px-2 rounded-md border outline-none focus:ring-2 focus:ring-navy-200 ${
                    r === undefined ? 'border-navy-200 bg-navy-50' : r ? 'border-emerald-500 bg-emerald-50' : 'border-red-400 bg-red-50'
                  }`}
                />
                {it.after !== '.' ? <span>{it.after}</span> : <span>.</span>}
              </div>
              {!results && answers[i].trim() && (
                <p className={`text-xs mt-1 ${words < 2 || words > 5 ? 'text-red-600' : 'text-slate-400'}`}>
                  {words} {words === 1 ? 'palabra' : 'palabras'}
                  {(words < 2 || words > 5) && ' — tienen que ser entre 2 y 5'}
                  {!containsKeyword(answers[i], it.keyword) && ` · falta la palabra clave ${it.keyword}`}
                </p>
              )}
              {results && <Feedback ex={ex} i={i} value={answers[i]} ok={results[i]} />}
            </div>
          )
        })}
      </div>
    </>
  )
}

/* ---------- Frases: elegir / rellenar / detectar error ---------- */

function Card({ n, children }: { n: number; children: ReactNode }) {
  return (
    <div className="rounded-2xl bg-white border border-navy-100 p-4 sm:p-5">
      <p className="text-sm font-semibold text-navy-800 mb-2">{n}.</p>
      {children}
    </div>
  )
}

/** Pinta una frase con ___ sustituido por `slot`. */
function SentenceWithSlot({ sentence, slot }: { sentence: string; slot: ReactNode }) {
  const [a, ...rest] = sentence.split('___')
  return (
    <p className="font-serif text-[1.05rem] leading-10">
      {a}
      {rest.length > 0 && slot}
      {rest.join('___')}
    </p>
  )
}

function Choice({ ex, answers, results, onChange, disabled }: PartProps<ChoiceExercise>) {
  return (
    <>
      <p className="text-sm text-slate-600 mb-3">Elige la opción correcta para cada frase.</p>
      <div className="grid gap-3">
        {ex.items.map((it, i) => {
          const chosen = answers[i] !== '' ? it.options[Number(answers[i])] : null
          return (
            <Card key={i} n={i + 1}>
              <SentenceWithSlot
                sentence={it.sentence}
                slot={
                  <span
                    className={`inline-block min-w-[4.5rem] mx-1 px-2 rounded-md border-b-2 font-sans text-[0.95rem] text-center ${
                      results ? (results[i] ? 'border-emerald-500 bg-emerald-50' : 'border-red-400 bg-red-50') : 'border-navy-500 bg-navy-50'
                    }`}
                  >
                    {chosen ?? '\u00a0'}
                  </span>
                }
              />
              <div className="mt-2 flex flex-wrap gap-2">
                {it.options.map((opt, j) => {
                  const selected = answers[i] === String(j)
                  let cls = selected ? 'border-navy-700 bg-navy-800 text-white' : 'border-navy-200 bg-white hover:border-navy-500'
                  if (results) {
                    if (j === it.answer) cls = 'border-emerald-500 bg-emerald-50 text-emerald-900'
                    else if (selected) cls = 'border-red-400 bg-red-50 text-red-800'
                    else cls = 'border-slate-200 bg-white text-slate-400'
                  }
                  return (
                    <button
                      key={j}
                      disabled={disabled}
                      onClick={() => onChange(i, String(j))}
                      className={`rounded-xl border px-3 py-1.5 text-sm transition ${cls}`}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>
              {results && <Feedback ex={ex} i={i} value={answers[i]} ok={results[i]} />}
            </Card>
          )
        })}
      </div>
    </>
  )
}

function Gap({ ex, answers, results, onChange, disabled }: PartProps<GapExercise>) {
  return (
    <>
      <p className="text-sm text-slate-600 mb-3">
        Escribe la forma correcta. Si hay una palabra entre paréntesis, úsala.
      </p>
      <div className="grid gap-3">
        {ex.items.map((it, i) => {
          const r = results?.[i]
          return (
            <Card key={i} n={i + 1}>
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
                    className={`font-sans text-base w-44 h-8 mx-1 px-2 rounded-md border outline-none focus:ring-2 focus:ring-navy-200 align-middle ${
                      r === undefined ? 'border-navy-200 bg-navy-50' : r ? 'border-emerald-500 bg-emerald-50' : 'border-red-400 bg-red-50'
                    }`}
                  />
                }
              />
              {results && <Feedback ex={ex} i={i} value={answers[i]} ok={results[i]} />}
            </Card>
          )
        })}
      </div>
    </>
  )
}

function ErrorSpot({ ex, answers, results, onChange, disabled }: PartProps<ErrorExercise>) {
  return (
    <>
      <p className="text-sm text-slate-600 mb-3">
        Toca la palabra o expresión que está <b>mal</b>. Si la frase está bien, pulsa <b>“Es correcta”</b>.
      </p>
      <div className="grid gap-3">
        {ex.items.map((it, i) => {
          const { tokens, wrong } = parseErrorSentence(it.sentence)
          const sel = answers[i]
          return (
            <Card key={i} n={i + 1}>
              <p className="font-serif text-[1.05rem] leading-9 flex flex-wrap gap-x-0.5">
                {tokens.map((t, j) => {
                  const selected = sel === String(j)
                  let cls = selected ? 'bg-navy-800 text-white' : 'hover:bg-navy-100'
                  if (results) {
                    if (j === wrong) cls = 'bg-emerald-100 text-emerald-900 underline decoration-wavy decoration-red-500'
                    else if (selected) cls = 'bg-red-100 text-red-800'
                    else cls = ''
                  }
                  return (
                    <button
                      key={j}
                      disabled={disabled}
                      onClick={() => onChange(i, String(j))}
                      className={`rounded px-1 transition ${cls}`}
                    >
                      {t}
                    </button>
                  )
                })}
              </p>
              <button
                disabled={disabled}
                onClick={() => onChange(i, '-1')}
                className={`mt-2 rounded-xl border px-3 py-1.5 text-sm transition ${
                  results && wrong === -1
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                    : sel === '-1'
                    ? results
                      ? results[i]
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                        : 'border-red-400 bg-red-50 text-red-800'
                      : 'border-navy-700 bg-navy-800 text-white'
                    : 'border-navy-200 bg-white hover:border-navy-500'
                }`}
              >
                ✓ Es correcta
              </button>
              {results && <Feedback ex={ex} i={i} value={answers[i]} ok={results[i]} />}
            </Card>
          )
        })}
      </div>
    </>
  )
}

/* ---------- Reading ---------- */

function Paragraphs({ text }: { text: string }) {
  return (
    <>
      {text.split(/\n\s*\n/).map((p, i) => (
        <p key={i} className="mb-4 last:mb-0">
          {p}
        </p>
      ))}
    </>
  )
}

/** Dos columnas en pantallas grandes: texto (con scroll propio) y preguntas. */
function SplitLayout({ text, children }: { text: ReactNode; children: ReactNode }) {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-6 lg:items-start">
      <article className="rounded-2xl bg-white border border-navy-100 p-5 sm:p-7 font-serif text-[1.05rem] leading-8 lg:sticky lg:top-4 lg:max-h-[calc(100vh-2rem)] lg:overflow-y-auto">
        {text}
      </article>
      <div className="mt-5 lg:mt-0 grid gap-3">{children}</div>
    </div>
  )
}

function OptionList({
  options,
  answer,
  value,
  results,
  onPick,
  disabled,
  letters = true,
}: {
  options: string[]
  answer: number
  value: string
  results: boolean
  onPick: (j: number) => void
  disabled: boolean
  letters?: boolean
}) {
  return (
    <div className="grid gap-2">
      {options.map((opt, j) => {
        const selected = value === String(j)
        let cls = selected ? 'border-navy-700 bg-navy-800 text-white' : 'border-navy-200 bg-white hover:border-navy-500'
        if (results) {
          if (j === answer) cls = 'border-emerald-500 bg-emerald-50 text-emerald-900'
          else if (selected) cls = 'border-red-400 bg-red-50 text-red-800'
          else cls = 'border-slate-200 bg-white text-slate-400'
        }
        return (
          <button
            key={j}
            disabled={disabled}
            onClick={() => onPick(j)}
            className={`rounded-xl border px-3 py-2 text-left text-sm transition flex gap-2 ${cls}`}
          >
            {letters && <b className="shrink-0">{LETTERS[j]}</b>}
            <span>{opt}</span>
          </button>
        )
      })}
    </div>
  )
}

function ReadingMc({ ex, answers, results, onChange, disabled }: PartProps<ReadingMcExercise>) {
  return (
    <>
      <p className="text-sm text-slate-600 mb-3">Lee el texto y elige la mejor respuesta (A, B, C o D) para cada pregunta.</p>
      <SplitLayout text={<Paragraphs text={ex.text} />}>
        {ex.questions.map((q, i) => (
          <Card key={i} n={i + 1}>
            <p className="font-medium text-navy-900 mb-2">{q.question}</p>
            <OptionList
              options={q.options}
              answer={q.answer}
              value={answers[i]}
              results={!!results}
              onPick={(j) => onChange(i, String(j))}
              disabled={disabled}
            />
            {results && <Feedback ex={ex} i={i} value={answers[i]} ok={results[i]} />}
          </Card>
        ))}
      </SplitLayout>
    </>
  )
}

function GappedText({ ex, answers, results, onChange, disabled }: PartProps<GappedTextExercise>) {
  const used = new Set(answers.filter((a) => a !== ''))
  const paragraphs = ex.text.split(/\n\s*\n/)
  return (
    <>
      <p className="text-sm text-slate-600 mb-3">
        Faltan {ex.answers.length} frases. Elige la frase (A–{LETTERS[ex.sentences.length - 1]}) que encaja en cada hueco.
        Sobra una.
      </p>
      <SplitLayout
        text={paragraphs.map((p, k) => (
          <p key={k} className="mb-4 last:mb-0">
            {splitGaps(p).map((seg, j) => {
              if (typeof seg === 'string') return <span key={j}>{seg}</span>
              const v = answers[seg]
              const r = results?.[seg]
              return (
                <span
                  key={j}
                  className={`inline-flex flex-wrap items-center gap-1.5 mx-0.5 my-1 px-2 py-0.5 rounded-lg border font-sans text-sm align-middle ${
                    r === undefined ? 'border-navy-200 bg-navy-50' : r ? 'border-emerald-500 bg-emerald-50' : 'border-red-400 bg-red-50'
                  }`}
                >
                  <b className="text-navy-700">{seg + 1}</b>
                  <select
                    value={v}
                    disabled={disabled}
                    onChange={(e) => onChange(seg, e.target.value)}
                    aria-label={`Hueco ${seg + 1}`}
                    className="bg-white border border-navy-200 rounded px-1 py-0.5"
                  >
                    <option value="">—</option>
                    {ex.sentences.map((_, si) => (
                      <option key={si} value={String(si)}>
                        {LETTERS[si]}
                      </option>
                    ))}
                  </select>
                  {v !== '' && <i className="font-serif text-[0.95rem] text-slate-700">{ex.sentences[Number(v)]}</i>}
                </span>
              )
            })}
          </p>
        ))}
      >
        <div className="rounded-2xl bg-white border border-navy-100 p-4">
          <p className="text-sm font-semibold text-navy-800 mb-2">Frases</p>
          <ul className="grid gap-2">
            {ex.sentences.map((s, si) => (
              <li
                key={si}
                className={`flex gap-2 text-sm rounded-lg px-2 py-1.5 ${used.has(String(si)) ? 'bg-navy-50 text-slate-400' : 'text-slate-800'}`}
              >
                <b className="text-navy-700 shrink-0">{LETTERS[si]}</b>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
        {results &&
          ex.answers.map((_, i) => (
            <Card key={i} n={i + 1}>
              <Feedback ex={ex} i={i} value={answers[i]} ok={results[i]} />
            </Card>
          ))}
      </SplitLayout>
    </>
  )
}

function Matching({ ex, answers, results, onChange, disabled }: PartProps<MatchingExercise>) {
  const letters = ex.sections.map((_, i) => LETTERS[i])
  return (
    <>
      <p className="text-sm text-slate-600 mb-3">{ex.intro}</p>
      <SplitLayout
        text={ex.sections.map((sec, i) => (
          <section key={i} className="mb-5 last:mb-0">
            <h3 className="font-sans font-semibold text-navy-900 mb-1">
              <span className="inline-grid place-items-center w-6 h-6 mr-2 rounded bg-navy-800 text-gold-400 text-sm">
                {letters[i]}
              </span>
              {sec.title}
            </h3>
            <p>{sec.text}</p>
          </section>
        ))}
      >
        <p className="text-sm font-semibold text-navy-800">Which person / text…</p>
        {ex.questions.map((q, i) => (
          <div key={i} className="rounded-2xl bg-white border border-navy-100 p-4">
            <div className="flex flex-wrap items-center gap-3">
              <p className="flex-1 min-w-[12rem] text-sm">
                <b className="text-navy-800 mr-1">{i + 1}.</b> {q.statement}
              </p>
              <div className="flex gap-1.5">
                {letters.map((L, j) => {
                  const selected = answers[i] === String(j)
                  let cls = selected ? 'bg-navy-800 text-white border-navy-800' : 'bg-white border-navy-200 hover:border-navy-500'
                  if (results) {
                    if (j === q.answer) cls = 'bg-emerald-50 border-emerald-500 text-emerald-900'
                    else if (selected) cls = 'bg-red-50 border-red-400 text-red-800'
                    else cls = 'bg-white border-slate-200 text-slate-300'
                  }
                  return (
                    <button
                      key={j}
                      disabled={disabled}
                      onClick={() => onChange(i, String(j))}
                      className={`w-9 h-9 rounded-lg border text-sm font-semibold transition ${cls}`}
                    >
                      {L}
                    </button>
                  )
                })}
              </div>
            </div>
            {results && <Feedback ex={ex} i={i} value={answers[i]} ok={results[i]} />}
          </div>
        ))}
      </SplitLayout>
    </>
  )
}
