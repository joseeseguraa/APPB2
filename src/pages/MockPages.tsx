import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MOCK_COUNT, mockRue, mockWriting } from '../data/mocks'
import { checkAll, marksPerQuestion, questionCount } from '../lib/exercise'
import { saveAttempt } from '../lib/progress'
import { gradeFor, loadMocks, MAX_RAW, saveMock, SCALE_POINTS, toScale } from '../lib/score'
import { countWords, loadDraft, saveDraft } from '../lib/writing'
import { Breadcrumbs } from '../components/Layout'
import { TimerBadge, useCountdown } from '../components/Timer'
import { PromptBox, WordCounter } from '../components/WritingRunner'
import { ExerciseBody } from './ExercisePage'
import NotFound from './NotFound'

/* ---------- Página principal del simulacro ---------- */

export function MockHome() {
  const results = loadMocks()
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Inicio', to: '/' }, { label: 'Simulacro' }]} />
      <h1 className="text-3xl font-bold text-navy-900">⏱ Simulacro de examen</h1>
      <div className="mt-3 rounded-2xl bg-white border border-navy-100 p-4 sm:p-5 text-sm text-slate-700 space-y-2">
        <p>
          Cada simulacro reproduce dos pruebas del B2 First con el tiempo oficial: <b>Reading &amp; Use of English</b> (7
          partes, 1 h 15 min) y <b>Writing</b> (essay + una tarea a elegir, 1 h 20 min).
        </p>
        <p>
          Al terminar verás una <b>nota estimada en la escala de Cambridge</b>, calculada con las tablas de conversión que
          publica Cambridge para B2 First. Es una aproximación: la nota real depende de cada convocatoria. En el Writing la
          nota sale de tu autoevaluación.
        </p>
        <p className="text-slate-500">Listening y Speaking se añadirán más adelante.</p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {Array.from({ length: MOCK_COUNT }, (_, i) => i + 1).map((n) => {
          const rue = results[`${n}-rue`]
          const wr = results[`${n}-writing`]
          return (
            <div key={n} className="rounded-2xl bg-white border border-navy-100 p-5 flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-navy-900">Simulacro {n}</h2>
              <Link to={`/simulacro/${n}/rue`} className="rounded-xl bg-navy-800 text-white px-4 py-2.5 text-sm font-medium text-center hover:bg-navy-700">
                Reading &amp; Use of English
                <span className="block text-xs text-navy-200 font-normal">1 h 15 min · 52 preguntas</span>
              </Link>
              <Link to={`/simulacro/${n}/writing`} className="rounded-xl border border-navy-800 text-navy-800 px-4 py-2.5 text-sm font-medium text-center hover:bg-navy-50">
                Writing
                <span className="block text-xs text-slate-500 font-normal">1 h 20 min · 2 textos</span>
              </Link>
              {(rue || wr) && (
                <div className="text-xs text-slate-600 border-t border-navy-50 pt-2 space-y-0.5">
                  <p className="font-medium text-slate-500">Tu último resultado:</p>
                  {rue && (
                    <>
                      <p>Reading: {rue.scale.reading ?? '<122'} · Use of English: {rue.scale.useOfEnglish ?? '<122'}</p>
                    </>
                  )}
                  {wr && <p>Writing: {wr.scale.writing ?? '<122'}</p>}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ---------- Resultado con escala ---------- */

function ScaleCard({ title, raw, max, scale }: { title: string; raw: number; max: number; scale: number | null }) {
  const g = gradeFor(scale)
  const tone = g.tone === 'green' ? 'bg-emerald-50 text-emerald-900' : g.tone === 'amber' ? 'bg-amber-50 text-amber-900' : 'bg-red-50 text-red-900'
  return (
    <div className={`rounded-2xl p-4 ${tone}`}>
      <p className="text-sm font-medium">{title}</p>
      <p className="text-3xl font-bold tabular-nums">{scale ?? '<122'}</p>
      <p className="text-xs">
        {raw}/{max} puntos · {g.label} ({g.cefr})
      </p>
    </div>
  )
}

/* ---------- Reading & Use of English ---------- */

export function MockRue() {
  const n = Number(useParams().n)
  if (!(n >= 1 && n <= MOCK_COUNT)) return <NotFound />
  return <MockRueRunner key={n} n={n} />
}

function MockRueRunner({ n }: { n: number }) {
  const parts = mockRue(n)
  const [tab, setTab] = useState(0)
  const [answers, setAnswers] = useState<string[][]>(() => parts.map((p) => Array(questionCount(p.ex)).fill('')))
  const [results, setResults] = useState<boolean[][] | null>(null)
  const [confirming, setConfirming] = useState(false)
  const answersRef = useRef(answers)
  answersRef.current = answers
  const doneRef = useRef(false)

  const submit = useCallback(() => {
    if (doneRef.current) return
    doneRef.current = true
    const r = parts.map((p, i) => checkAll(p.ex, answersRef.current[i]))
    setResults(r)
    const raw = { reading: 0, useOfEnglish: 0 }
    parts.forEach((p, i) => {
      const ok = r[i].filter(Boolean).length
      raw[p.skill] += ok * marksPerQuestion(p.ex)
      saveAttempt(p.ex.id, ok, r[i].length, r[i].flatMap((x, j) => (x ? [] : [j])))
    })
    saveMock({
      id: `${n}-rue`,
      at: new Date().toISOString(),
      raw,
      scale: { reading: toScale(raw.reading, SCALE_POINTS.reading), useOfEnglish: toScale(raw.useOfEnglish, SCALE_POINTS.useOfEnglish) },
    })
    window.scrollTo(0, 0)
  }, [n, parts])

  const total = 75 * 60
  const left = useCountdown(total, results === null, submit)
  const blanks = answers.reduce((a, arr) => a + arr.filter((x) => !x.trim()).length, 0)
  const cur = parts[tab]

  let summary = null
  if (results) {
    const raw = { reading: 0, useOfEnglish: 0 }
    parts.forEach((p, i) => (raw[p.skill] += results[i].filter(Boolean).length * marksPerQuestion(p.ex)))
    const rs = toScale(raw.reading, SCALE_POINTS.reading)
    const us = toScale(raw.useOfEnglish, SCALE_POINTS.useOfEnglish)
    summary = (
      <section className="mb-6">
        <h2 className="text-xl font-bold text-navy-900 mb-3">Resultado estimado</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <ScaleCard title="Reading (Parts 1, 5, 6, 7)" raw={raw.reading} max={MAX_RAW.reading} scale={rs} />
          <ScaleCard title="Use of English (Parts 2, 3, 4)" raw={raw.useOfEnglish} max={MAX_RAW.useOfEnglish} scale={us} />
        </div>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-sm bg-white rounded-2xl border border-navy-100">
            <tbody>
              {parts.map((p, i) => (
                <tr key={i} className="border-t first:border-t-0 border-navy-50">
                  <td className="px-3 py-2 font-medium">{p.label}</td>
                  <td className="px-3 py-2 text-slate-500">{p.part.name}</td>
                  <td className="px-3 py-2 text-right tabular-nums">
                    {results[i].filter(Boolean).length}/{results[i].length}
                  </td>
                  <td className="px-3 py-2 text-right tabular-nums text-slate-500">
                    {results[i].filter(Boolean).length * marksPerQuestion(p.ex)} pts
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Puntuación como en el examen: Parts 1, 2, 3 y 7 valen 1 punto por pregunta; Parts 4, 5 y 6, 2 puntos. En la Part 4
          el examen real da 1 punto por respuestas a medias; aquí cuenta todo o nada. Revisa cada parte abajo para ver las
          explicaciones.
        </p>
      </section>
    )
  }

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Inicio', to: '/' }, { label: 'Simulacro', to: '/simulacro' }, { label: `${n} · Reading & Use of English` }]} />
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <h1 className="text-2xl font-bold text-navy-900">Simulacro {n} · Reading &amp; Use of English</h1>
        {!results && <TimerBadge left={left} total={total} />}
      </div>

      {summary}

      {/* Pestañas de partes */}
      <nav className="flex gap-1.5 overflow-x-auto pb-2 mb-4 sticky top-0 z-10 bg-navy-50/95 backdrop-blur pt-2 -mx-4 px-4">
        {parts.map((_, i) => {
          const done = answers[i].filter((x) => x.trim()).length
          const r = results?.[i]
          return (
            <button
              key={i}
              onClick={() => {
                setTab(i)
                window.scrollTo(0, 0)
              }}
              className={`shrink-0 rounded-xl px-3 py-1.5 text-sm border transition ${
                tab === i ? 'bg-navy-800 text-white border-navy-800' : 'bg-white border-navy-200 hover:border-navy-500'
              }`}
            >
              <b>{i + 1}</b>{' '}
              <span className={`text-xs ${tab === i ? 'text-navy-200' : 'text-slate-400'}`}>
                {r ? `${r.filter(Boolean).length}/${r.length}` : `${done}/${answers[i].length}`}
              </span>
            </button>
          )
        })}
      </nav>

      <p className="text-sm text-slate-500 mb-1">
        {cur.label} · {cur.part.name}
      </p>
      <h2 className="text-lg font-semibold text-navy-900 mb-3">{cur.ex.title}</h2>
      <ExerciseBody
        key={tab}
        ex={cur.ex}
        answers={answers[tab]}
        results={results?.[tab] ?? null}
        disabled={results !== null}
        onChange={(q, v) => setAnswers((a) => a.map((arr, i) => (i === tab ? arr.map((x, j) => (j === q ? v : x)) : arr)))}
      />

      <div className="sticky bottom-0 mt-6 -mx-4 px-4 py-3 bg-navy-50/95 backdrop-blur border-t border-navy-100 flex flex-wrap gap-2 items-center">
        {tab > 0 && (
          <button onClick={() => { setTab(tab - 1); window.scrollTo(0, 0) }} className="rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm font-medium">
            ← Part {tab}
          </button>
        )}
        {tab < parts.length - 1 && (
          <button onClick={() => { setTab(tab + 1); window.scrollTo(0, 0) }} className="rounded-xl border border-navy-800 text-navy-800 bg-white px-4 py-2.5 text-sm font-medium">
            Part {tab + 2} →
          </button>
        )}
        <span className="flex-1" />
        {!results &&
          (!confirming ? (
            <button onClick={() => (blanks > 0 ? setConfirming(true) : submit())} className="rounded-xl bg-navy-800 text-white px-5 py-2.5 font-medium hover:bg-navy-700">
              Entregar examen
            </button>
          ) : (
            <span className="flex flex-wrap items-center gap-2 text-sm">
              Tienes {blanks} preguntas sin responder.
              <button onClick={submit} className="rounded-xl bg-navy-800 text-white px-4 py-2 font-medium">
                Entregar igualmente
              </button>
              <button onClick={() => setConfirming(false)} className="rounded-xl border px-4 py-2">
                Seguir
              </button>
            </span>
          ))}
        {results && (
          <Link to="/simulacro" className="rounded-xl bg-gold-400 text-navy-900 px-5 py-2.5 font-medium hover:bg-gold-300">
            Volver a simulacros
          </Link>
        )}
      </div>
    </div>
  )
}

/* ---------- Writing ---------- */

export function MockWriting() {
  const n = Number(useParams().n)
  if (!(n >= 1 && n <= MOCK_COUNT)) return <NotFound />
  return <MockWritingRunner key={n} n={n} />
}

const BANDS = [
  '0 · No se entiende o no tiene relación con la tarea',
  '1 · Muy por debajo de B2',
  '2 · Cerca de B2, con problemas importantes',
  '3 · Nivel B2 adecuado',
  '4 · Bien por encima del mínimo',
  '5 · Excelente para B2',
]
const CRITERIA_SHORT = ['Content', 'Communicative Achievement', 'Organisation', 'Language']

function MockWritingRunner({ n }: { n: number }) {
  const { essay, options } = mockWriting(n)
  const [choice, setChoice] = useState<number | null>(null)
  const [t1, setT1] = useState(() => loadDraft(`mock${n}-w1`))
  const [t2, setT2] = useState(() => loadDraft(`mock${n}-w2`))
  const [phase, setPhase] = useState<'writing' | 'review' | 'done'>('writing')
  const [marks, setMarks] = useState<number[]>(Array(8).fill(3))

  useEffect(() => saveDraft(`mock${n}-w1`, t1), [n, t1])
  useEffect(() => saveDraft(`mock${n}-w2`, t2), [n, t2])

  const total = 80 * 60
  const left = useCountdown(total, phase === 'writing', () => setPhase('review'))
  const raw = marks.reduce((a, b) => a + b, 0)
  const scale = toScale(raw, SCALE_POINTS.writing)

  const finish = () => {
    saveMock({ id: `${n}-writing`, at: new Date().toISOString(), raw: { writing: raw }, scale: { writing: scale } })
    setPhase('done')
    window.scrollTo(0, 0)
  }

  const chosen = choice !== null ? options[choice] : null

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Inicio', to: '/' }, { label: 'Simulacro', to: '/simulacro' }, { label: `${n} · Writing` }]} />
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <h1 className="text-2xl font-bold text-navy-900">Simulacro {n} · Writing</h1>
        {phase === 'writing' && <TimerBadge left={left} total={total} />}
      </div>

      {phase === 'done' && (
        <section className="mb-6">
          <ScaleCard title="Writing (estimación a partir de tu autoevaluación)" raw={raw} max={MAX_RAW.writing} scale={scale} />
          <p className="mt-2 text-sm text-slate-600">
            Compara tus textos con los modelos comentados de{' '}
            <Link to={`/s/writing/${essay.part.slug}`} className="underline">
              {essay.part.name}
            </Link>
            {chosen && (
              <>
                {' '}y{' '}
                <Link to={`/s/writing/${chosen.part.slug}`} className="underline">
                  {chosen.part.name}
                </Link>
              </>
            )}
            .
          </p>
        </section>
      )}

      <section>
        <h2 className="text-lg font-semibold text-navy-900 mb-2">Part 1 · Essay (obligatorio)</h2>
        <PromptBox task={essay.task} />
        <textarea
          value={t1}
          onChange={(e) => setT1(e.target.value)}
          disabled={phase !== 'writing'}
          placeholder="Write your essay here…"
          spellCheck={false}
          className="mt-3 w-full min-h-[18rem] rounded-2xl border border-navy-200 bg-white p-4 font-serif text-[1.05rem] leading-7 outline-none focus:ring-2 focus:ring-navy-200 disabled:bg-slate-50"
        />
        <WordCounter words={countWords(t1)} />
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-navy-900 mb-2">Part 2 · Elige UNA tarea</h2>
        <div className="grid gap-2 sm:grid-cols-3">
          {options.map((o, i) => (
            <button
              key={i}
              disabled={phase !== 'writing'}
              onClick={() => setChoice(i)}
              className={`rounded-xl border p-3 text-left text-sm transition ${
                choice === i ? 'border-navy-800 bg-navy-800 text-white' : 'border-navy-200 bg-white hover:border-navy-500'
              }`}
            >
              <b>{o.part.name}</b>
              <span className={`block text-xs ${choice === i ? 'text-navy-200' : 'text-slate-500'}`}>{o.task.title}</span>
            </button>
          ))}
        </div>
        {chosen && (
          <div className="mt-3">
            <PromptBox task={chosen.task} />
            <textarea
              value={t2}
              onChange={(e) => setT2(e.target.value)}
              disabled={phase !== 'writing'}
              placeholder="Write your answer here…"
              spellCheck={false}
              className="mt-3 w-full min-h-[18rem] rounded-2xl border border-navy-200 bg-white p-4 font-serif text-[1.05rem] leading-7 outline-none focus:ring-2 focus:ring-navy-200 disabled:bg-slate-50"
            />
            <WordCounter words={countWords(t2)} />
          </div>
        )}
      </section>

      {phase === 'review' && (
        <section className="mt-8 rounded-2xl bg-white border border-navy-100 p-5">
          <h2 className="font-semibold text-navy-900">Autoevaluación</h2>
          <p className="text-sm text-slate-600 mt-1 mb-4">
            Puntúa cada texto de 0 a 5 en los 4 criterios de Cambridge, siendo honesto. Si puedes, pide a otra persona que lo
            corrija con estos mismos criterios.
          </p>
          {['Part 1 · Essay', `Part 2 · ${chosen?.part.name ?? '—'}`].map((title, t) => (
            <div key={t} className="mb-4">
              <p className="font-medium text-navy-800 mb-2">{title}</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {CRITERIA_SHORT.map((c, k) => {
                  const idx = t * 4 + k
                  return (
                    <label key={c} className="text-sm">
                      <span className="block text-slate-600 mb-1">{c}</span>
                      <select
                        value={marks[idx]}
                        onChange={(e) => setMarks((m) => m.map((x, j) => (j === idx ? Number(e.target.value) : x)))}
                        className="w-full rounded-lg border border-navy-200 bg-white px-2 py-1.5"
                      >
                        {BANDS.map((b, v) => (
                          <option key={v} value={v}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </label>
                  )
                })}
              </div>
            </div>
          ))}
          <p className="text-sm mb-3">
            Total: <b>{raw}/40</b> → escala estimada <b>{scale ?? '<122'}</b> ({gradeFor(scale).label})
          </p>
          <button onClick={finish} className="rounded-xl bg-navy-800 text-white px-5 py-2.5 font-medium hover:bg-navy-700">
            Guardar resultado
          </button>
        </section>
      )}

      {phase === 'writing' && (
        <div className="sticky bottom-0 mt-6 -mx-4 px-4 py-3 bg-navy-50/95 backdrop-blur border-t border-navy-100 flex gap-2">
          <button
            onClick={() => setPhase('review')}
            disabled={!t1.trim()}
            className="rounded-xl bg-navy-800 text-white px-5 py-2.5 font-medium hover:bg-navy-700 disabled:opacity-40"
          >
            He terminado · autoevaluar
          </button>
        </div>
      )}
    </div>
  )
}
