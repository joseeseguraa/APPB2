import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MOCK_COUNT, mockRue, mockWriting } from '../data/mocks'
import { checkAll, marksPerQuestion, questionCount } from '../lib/exercise'
import { saveAttempt } from '../lib/progress'
import { gradeFor, loadMocks, MAX_RAW, saveMock, SCALE_POINTS, toScale } from '../lib/score'
import { countWords, loadDraft, saveDraft } from '../lib/writing'
import { BackLink } from '../components/Layout'
import { TimerBadge, useCountdown } from '../components/Timer'
import { PromptBox, WordCounter, WritingArea } from '../components/WritingRunner'
import { btn, PageHeader, Panel } from '../components/ui'
import { ActionBar, ExerciseBody } from './ExercisePage'
import NotFound from './NotFound'

/* ---------- Página principal del simulacro ---------- */

export function MockHome() {
  const results = loadMocks()
  return (
    <div className="max-w-5xl">
      <PageHeader
        title="Simulacros"
        lead="Dos pruebas del B2 First con el tiempo oficial y una nota estimada en la escala de Cambridge."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_18rem] items-start">
        <Panel className="divide-y divide-line">
          {Array.from({ length: MOCK_COUNT }, (_, i) => i + 1).map((n) => {
            const rue = results[`${n}-rue`]
            const wr = results[`${n}-writing`]
            return (
              <div key={n} className="p-4 sm:p-5 grid sm:grid-cols-[8rem_1fr] gap-4">
                <div>
                  <h2 className="text-lg font-bold">Simulacro {n}</h2>
                  {(rue || wr) && <p className="text-xs text-ink-3 mt-0.5">Último resultado abajo</p>}
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Link to={`/simulacro/${n}/rue`} className="block rounded-md border border-line p-4 hover:border-ink transition-colors">
                    <p className="font-bold">Reading &amp; Use of English</p>
                    <p className="text-sm text-ink-3">1 h 15 min, 52 preguntas</p>
                    {rue && (
                      <p className="mt-2 text-sm tabular-nums">
                        Reading <b>{rue.scale.reading ?? '<122'}</b>, Use of English <b>{rue.scale.useOfEnglish ?? '<122'}</b>
                      </p>
                    )}
                  </Link>
                  <Link to={`/simulacro/${n}/writing`} className="block rounded-md border border-line p-4 hover:border-ink transition-colors">
                    <p className="font-bold">Writing</p>
                    <p className="text-sm text-ink-3">1 h 20 min, 2 textos</p>
                    {wr && (
                      <p className="mt-2 text-sm tabular-nums">
                        Writing <b>{wr.scale.writing ?? '<122'}</b>
                      </p>
                    )}
                  </Link>
                </div>
              </div>
            )
          })}
        </Panel>

        <aside className="text-[0.95rem] leading-relaxed text-ink-2 space-y-3">
          <h2 className="font-bold text-ink">Cómo se calcula la nota</h2>
          <p>
            Usamos las tablas de conversión que publica Cambridge para B2 First. Por ejemplo, 24 de 42 puntos en Reading equivalen
            a 160, el mínimo para aprobar el B2.
          </p>
          <p>Es una estimación: la nota real depende de cada convocatoria. En Writing sale de tu propia revisión.</p>
          <p className="text-sm text-ink-3">160–172 Grade C, 173–179 Grade B, 180–190 Grade A (C1).</p>
        </aside>
      </div>
    </div>
  )
}

/* ---------- Resultado con escala ---------- */

function ScaleCard({ title, raw, max, scale }: { title: string; raw: number; max: number; scale: number | null }) {
  const g = gradeFor(scale)
  const tone = g.tone === 'green' ? 'text-ok' : g.tone === 'amber' ? 'text-warn' : 'text-bad'
  return (
    <div className="p-5">
      <p className="text-sm text-ink-2">{title}</p>
      <p className={`text-[2.75rem] leading-none font-bold tabular-nums tracking-[-0.03em] mt-2 ${tone}`}>{scale ?? '<122'}</p>
      <p className="text-sm mt-2">
        <b>{g.label}</b>
        {g.cefr !== '—' && `, nivel ${g.cefr}`}
        <span className="text-ink-3">. {raw} de {max} puntos</span>
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
  const go = (t: number) => {
    setTab(t)
    window.scrollTo(0, 0)
  }

  let summary = null
  if (results) {
    const raw = { reading: 0, useOfEnglish: 0 }
    parts.forEach((p, i) => (raw[p.skill] += results[i].filter(Boolean).length * marksPerQuestion(p.ex)))
    summary = (
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Resultado estimado</h2>
        <Panel className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-line">
          <ScaleCard title="Reading (Parts 1, 5, 6 y 7)" raw={raw.reading} max={MAX_RAW.reading} scale={toScale(raw.reading, SCALE_POINTS.reading)} />
          <ScaleCard
            title="Use of English (Parts 2, 3 y 4)"
            raw={raw.useOfEnglish}
            max={MAX_RAW.useOfEnglish}
            scale={toScale(raw.useOfEnglish, SCALE_POINTS.useOfEnglish)}
          />
        </Panel>
        <Panel className="mt-3 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-ink-3">
                <th className="font-medium px-4 pt-3 pb-1.5">Parte</th>
                <th className="font-medium pt-3 pb-1.5 text-right">Aciertos</th>
                <th className="font-medium px-4 pt-3 pb-1.5 text-right">Puntos</th>
              </tr>
            </thead>
            <tbody>
              {parts.map((p, i) => (
                <tr key={i} className="border-t border-line">
                  <td className="px-4 py-2">
                    <button onClick={() => go(i)} className="text-left hover:underline underline-offset-2">
                      <b className="text-print">{p.label}</b> {p.part.name}
                    </button>
                  </td>
                  <td className="py-2 text-right tabular-nums">
                    {results[i].filter(Boolean).length}/{results[i].length}
                  </td>
                  <td className="px-4 py-2 text-right tabular-nums text-ink-2">{results[i].filter(Boolean).length * marksPerQuestion(p.ex)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
        <p className="mt-3 text-sm text-ink-3 max-w-3xl">
          Como en el examen, las Parts 1, 2, 3 y 7 valen 1 punto por pregunta y las Parts 4, 5 y 6 valen 2. En la Part 4 el examen
          real da 1 punto a las respuestas a medias; aquí cuenta entera o nada. Abajo puedes revisar cada parte con sus explicaciones.
        </p>
      </section>
    )
  }

  return (
    <div>
      <BackLink to="/simulacro" label="Simulacros" />
      <header className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-[1.75rem] sm:text-[2rem] leading-tight font-bold tracking-[-0.02em]">
          Simulacro {n}: Reading &amp; Use of English
        </h1>
        {!results && <TimerBadge left={left} total={total} />}
      </header>

      {summary}

      {/* Pestañas de partes */}
      <nav className="sticky top-14 z-20 -mx-4 sm:-mx-6 px-4 sm:px-6 py-2 mb-6 bg-bg/95 backdrop-blur border-b border-line flex gap-1 overflow-x-auto" aria-label="Partes">
        {parts.map((_, i) => {
          const done = answers[i].filter((x) => x.trim()).length
          const r = results?.[i]
          return (
            <button
              key={i}
              onClick={() => go(i)}
              aria-current={tab === i}
              className={`shrink-0 h-10 rounded-md px-3 text-sm transition-colors ${tab === i ? 'bg-ink text-white' : 'hover:bg-paper'}`}
            >
              <b>Part {i + 1}</b>{' '}
              <span className={`tabular-nums ${tab === i ? 'text-white/70' : 'text-ink-3'}`}>
                {r ? `${r.filter(Boolean).length}/${r.length}` : `${done}/${answers[i].length}`}
              </span>
            </button>
          )
        })}
      </nav>

      <p className="text-sm text-ink-3">
        {cur.label}: {cur.part.name}
      </p>
      <h2 className="text-xl font-bold mb-4">{cur.ex.title}</h2>
      <ExerciseBody
        key={tab}
        ex={cur.ex}
        answers={answers[tab]}
        results={results?.[tab] ?? null}
        disabled={results !== null}
        onChange={(q, v) => setAnswers((a) => a.map((arr, i) => (i === tab ? arr.map((x, j) => (j === q ? v : x)) : arr)))}
      />

      <ActionBar>
        {tab > 0 && (
          <button onClick={() => go(tab - 1)} className={btn('secondary')}>
            Part {tab}
          </button>
        )}
        {tab < parts.length - 1 && (
          <button onClick={() => go(tab + 1)} className={btn('secondary')}>
            Part {tab + 2}
          </button>
        )}
        <span className="flex-1" />
        {!results &&
          (!confirming ? (
            <button onClick={() => (blanks > 0 ? setConfirming(true) : submit())} className={btn('primary')}>
              Entregar examen
            </button>
          ) : (
            <span className="flex flex-wrap items-center gap-2 text-sm">
              Quedan {blanks} preguntas sin responder.
              <button onClick={submit} className={btn('primary', 'sm')}>
                Entregar igualmente
              </button>
              <button onClick={() => setConfirming(false)} className={btn('quiet', 'sm')}>
                Seguir respondiendo
              </button>
            </span>
          ))}
        {results && (
          <Link to="/simulacro" className={btn('accent')}>
            Volver a simulacros
          </Link>
        )}
      </ActionBar>
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
  '0: no se entiende o no responde a la tarea',
  '1: muy por debajo de B2',
  '2: cerca de B2, con problemas importantes',
  '3: nivel B2 adecuado',
  '4: claramente por encima del mínimo',
  '5: excelente para un B2',
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
      <BackLink to="/simulacro" label="Simulacros" />
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-[1.75rem] sm:text-[2rem] leading-tight font-bold tracking-[-0.02em]">Simulacro {n}: Writing</h1>
        {phase === 'writing' && <TimerBadge left={left} total={total} />}
      </header>

      {phase === 'done' && (
        <section className="mb-10 max-w-3xl">
          <Panel>
            <ScaleCard title="Writing, estimado a partir de tu revisión" raw={raw} max={MAX_RAW.writing} scale={scale} />
          </Panel>
          <p className="mt-3 text-ink-2">
            Compara tus textos con los modelos comentados de{' '}
            <Link to={`/s/writing/${essay.part.slug}`} className="font-semibold text-print underline underline-offset-2">
              {essay.part.name}
            </Link>
            {chosen && (
              <>
                {' '}y{' '}
                <Link to={`/s/writing/${chosen.part.slug}`} className="font-semibold text-print underline underline-offset-2">
                  {chosen.part.name}
                </Link>
              </>
            )}
            .
          </p>
        </section>
      )}

      <section className="max-w-4xl">
        <h2 className="text-lg font-bold mb-3">
          <span className="text-print">Part 1</span> Essay, obligatorio
        </h2>
        <PromptBox task={essay.task} />
        <WritingArea value={t1} onChange={setT1} disabled={phase !== 'writing'} placeholder="Write your essay here" className="mt-5 !min-h-[18rem]" />
        <div className="mt-2">
          <WordCounter words={countWords(t1)} />
        </div>
      </section>

      <section className="mt-12 max-w-4xl">
        <h2 className="text-lg font-bold mb-3">
          <span className="text-print">Part 2</span> Elige una tarea
        </h2>
        <div className="grid gap-2 sm:grid-cols-3" role="radiogroup">
          {options.map((o, i) => (
            <button
              key={i}
              role="radio"
              aria-checked={choice === i}
              disabled={phase !== 'writing'}
              onClick={() => setChoice(i)}
              className={`rounded-md border p-4 text-left transition-colors ${choice === i ? 'border-ink bg-ink text-white' : 'border-line bg-paper hover:border-ink'}`}
            >
              <b className="block">{o.part.name}</b>
              <span className={`text-sm ${choice === i ? 'text-white/70' : 'text-ink-3'}`}>{o.task.title}</span>
            </button>
          ))}
        </div>
        {chosen && (
          <div className="mt-6">
            <PromptBox task={chosen.task} />
            <WritingArea value={t2} onChange={setT2} disabled={phase !== 'writing'} placeholder="Write your answer here" className="mt-5 !min-h-[18rem]" />
            <div className="mt-2">
              <WordCounter words={countWords(t2)} />
            </div>
          </div>
        )}
      </section>

      {phase === 'review' && (
        <section className="mt-12 max-w-3xl">
          <h2 className="text-xl font-bold">Revisa y puntúa tus textos</h2>
          <p className="text-ink-2 mt-1 mb-5">
            Puntúa cada texto de 0 a 5 en los cuatro criterios de Cambridge, siendo exigente. Si puedes, pide a otra persona que lo
            haga con estos mismos criterios.
          </p>
          {['Part 1: Essay', `Part 2: ${chosen?.part.name ?? 'sin elegir'}`].map((title, t) => (
            <Panel key={t} className="mb-4 p-4 sm:p-5">
              <p className="font-bold mb-3">{title}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {CRITERIA_SHORT.map((c, k) => {
                  const idx = t * 4 + k
                  return (
                    <label key={c} className="text-sm">
                      <span className="block font-semibold mb-1">{c}</span>
                      <select
                        value={marks[idx]}
                        onChange={(e) => setMarks((m) => m.map((x, j) => (j === idx ? Number(e.target.value) : x)))}
                        className="w-full h-10 rounded-md border border-line-strong bg-paper px-2"
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
            </Panel>
          ))}
          <p className="mb-4 tabular-nums">
            Total <b>{raw} de 40</b>, que equivale a unos <b>{scale ?? '<122'}</b> en la escala ({gradeFor(scale).label}).
          </p>
          <button onClick={finish} className={btn('primary')}>
            Guardar resultado
          </button>
        </section>
      )}

      {phase === 'writing' && (
        <ActionBar>
          <button onClick={() => setPhase('review')} disabled={!t1.trim()} className={btn('primary')}>
            He terminado, quiero puntuarlo
          </button>
        </ActionBar>
      )}
    </div>
  )
}
