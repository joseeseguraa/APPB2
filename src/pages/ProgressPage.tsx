import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { currentSections } from '../data/sections'
import { exportData, importData, loadDays, loadHistory, loadProgress, resetAll, skillOf, streak, weeklyAccuracy, type ProgressMap } from '../lib/progress'
import TrendChart from '../components/TrendChart'
import { btn, Meter, PageHeader, Panel } from '../components/ui'
import { loadUser, saveUser } from '../lib/user'

interface PartStat {
  sectionSlug: string
  sectionName: string
  partSlug: string
  partName: string
  done: number
  total: number
  /** % de aciertos en el último intento de cada ejercicio hecho (null si no hay datos) */
  accuracy: number | null
  isWriting: boolean
}

function computeStats(progress: ProgressMap): PartStat[] {
  return currentSections()
    .filter((s) => s.available)
    .flatMap((s) =>
      s.parts.map((p) => {
        const recs = p.exercises.map((e) => progress[e.id]).filter(Boolean)
        const score = recs.reduce((a, r) => a + r.score, 0)
        const tot = recs.reduce((a, r) => a + r.total, 0)
        return {
          sectionSlug: s.slug,
          sectionName: s.name,
          partSlug: p.slug,
          partName: p.number ? `Part ${p.number}: ${p.name}` : p.name,
          done: recs.length,
          total: p.exercises.length,
          accuracy: tot ? Math.round((score / tot) * 100) : null,
          isWriting: p.exercises[0]?.kind === 'writing',
        }
      }),
    )
}

function pctTone(v: number | null) {
  return v === null ? 'text-ink-3' : v >= 75 ? 'text-ok' : v >= 50 ? 'text-warn' : 'text-bad'
}

export default function ProgressPage() {
  const [version, setVersion] = useState(0) // para refrescar tras importar o borrar
  void version
  const progress = loadProgress()
  const days = loadDays()
  const stats = computeStats(progress)
  const st = streak(days)

  const allExercises = currentSections().flatMap((s) => s.parts.flatMap((p) => p.exercises.map((e) => ({ s, p, e }))))
  const doneCount = allExercises.filter(({ e }) => progress[e.id]).length
  const graded = allExercises.filter(({ e }) => e.kind !== 'writing' && progress[e.id])
  const gScore = graded.reduce((a, { e }) => a + progress[e.id].score, 0)
  const gTotal = graded.reduce((a, { e }) => a + progress[e.id].total, 0)
  const accuracy = gTotal ? Math.round((gScore / gTotal) * 100) : null

  const weak = stats
    .filter((s) => !s.isWriting && s.accuracy !== null && s.accuracy < 75)
    .sort((a, b) => (a.accuracy ?? 0) - (b.accuracy ?? 0))
    .slice(0, 4)

  const toReview = allExercises
    .filter(({ e }) => e.kind !== 'writing' && progress[e.id]?.wrong.length)
    .sort((a, b) => progress[b.e.id].lastAt.localeCompare(progress[a.e.id].lastAt))
    .slice(0, 8)

  const bySection = currentSections()
    .filter((s) => s.available)
    .map((s) => {
      const rows = stats.filter((r) => r.sectionSlug === s.slug)
      return { s, rows, done: rows.reduce((a, r) => a + r.done, 0), total: rows.reduce((a, r) => a + r.total, 0) }
    })

  const figures = [
    { value: `${doneCount}`, label: `de ${allExercises.length} ejercicios hechos` },
    { value: accuracy === null ? '—' : `${accuracy}%`, label: 'de aciertos, sin contar Writing' },
    { value: `${st}`, label: st === 1 ? 'día seguido practicando' : 'días seguidos practicando' },
    { value: `${days.length}`, label: days.length === 1 ? 'día de práctica en total' : 'días de práctica en total' },
  ]

  return (
    <div className="max-w-5xl">
      <PageHeader icon="progress" title="Mi progreso" lead="Se calcula con tu último intento de cada ejercicio y se guarda en este navegador." />

      <Panel className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-line mb-10">
        {figures.map((f) => (
          <div key={f.label} className="p-5">
            <p className="text-[2rem] leading-none font-bold tabular-nums tracking-[-0.03em]">{f.value}</p>
            <p className="text-sm text-ink-2 mt-2 leading-snug">{f.label}</p>
          </div>
        ))}
      </Panel>

      <Trends />

      {doneCount === 0 && (
        <Panel className="p-6 mb-10 max-w-2xl">
          <p className="font-bold">Aún no hay nada que mostrar</p>
          <p className="text-ink-2 mt-1">Haz tu primer ejercicio y aquí verás tus aciertos, tus puntos débiles y lo que conviene repasar.</p>
          <Link to="/s/use-of-english" className={`${btn('primary', 'sm')} mt-4`}>
            Empezar con Use of English
          </Link>
        </Panel>
      )}

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-8 mb-10">
        {weak.length > 0 && (
          <section>
            <h2 className="text-lg font-bold mb-1">Dónde más fallas</h2>
            <p className="text-sm text-ink-2 mb-3">Partes con menos del 75% de aciertos. Repasa la guía antes de volver a practicar.</p>
            <Panel className="divide-y divide-line">
              {weak.map((w) => (
                <Link key={w.sectionSlug + w.partSlug} to={`/s/${w.sectionSlug}/${w.partSlug}`} className="block px-4 sm:px-5 py-3.5 hover:bg-bg/60">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-semibold leading-snug">
                      {w.partName}
                      <span className="block text-xs font-normal text-ink-3">{w.sectionName}</span>
                    </p>
                    <span className={`text-lg font-bold tabular-nums ${pctTone(w.accuracy)}`}>{w.accuracy}%</span>
                  </div>
                  <Meter value={w.accuracy ?? 0} tone="score" className="mt-2" />
                </Link>
              ))}
            </Panel>
            {weak.some((w) => w.sectionSlug !== 'reading') && (
              <Link
                to={`/practica?f=failed&p=${weak
                  .filter((w) => w.sectionSlug !== 'reading')
                  .map((w) => `${w.sectionSlug}/${w.partSlug}`)
                  .join(',')}`}
                className={`${btn('secondary', 'sm')} mt-3`}
              >
                Practicar lo que fallaste en estas partes
              </Link>
            )}
          </section>
        )}

        {toReview.length > 0 && (
          <section>
            <h2 className="text-lg font-bold mb-1">Para repetir</h2>
            <p className="text-sm text-ink-2 mb-3">Ejercicios recientes en los que fallaste alguna pregunta.</p>
            <Panel className="divide-y divide-line">
              {toReview.map(({ s, p, e }) => {
                const r = progress[e.id]
                return (
                  <Link key={e.id} to={`/s/${s.slug}/${p.slug}/${e.id}?mode=practice`} className="flex items-center gap-3 px-4 sm:px-5 py-3 hover:bg-bg/60">
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold truncate">{e.title}</p>
                      <p className="text-xs text-ink-3 truncate">
                        {s.name}, {p.number ? `Part ${p.number}` : p.name}
                      </p>
                    </div>
                    <span className="text-sm tabular-nums text-bad font-semibold shrink-0">
                      {r.wrong.length} {r.wrong.length === 1 ? 'fallo' : 'fallos'}
                    </span>
                  </Link>
                )
              })}
            </Panel>
          </section>
        )}
      </div>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-3">Por secciones</h2>
        <Panel className="divide-y divide-line">
          {bySection.map(({ s, rows, done, total }) => (
            <details key={s.slug} className="group">
              <summary className="cursor-pointer list-none px-4 sm:px-5 py-4 flex items-center gap-4 hover:bg-bg/60">
                <span className="w-40 sm:w-48 font-bold shrink-0">{s.name}</span>
                <Meter value={total ? (done / total) * 100 : 0} className="flex-1" />
                <span className="text-sm text-ink-3 tabular-nums w-14 text-right shrink-0">
                  {done}/{total}
                </span>
                <svg viewBox="0 0 20 20" className="w-4 h-4 text-ink-3 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path d="m5 8 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <table className="w-full text-sm mb-3">
                <thead>
                  <tr className="text-left text-xs text-ink-3">
                    <th className="font-medium px-4 sm:px-5 pb-1.5">Parte o tema</th>
                    <th className="font-medium pb-1.5 text-right">Hechos</th>
                    <th className="font-medium px-4 sm:px-5 pb-1.5 text-right">{s.slug === 'writing' ? 'Revisión' : 'Aciertos'}</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.partSlug} className="border-t border-line">
                      <td className="px-4 sm:px-5 py-2">
                        <Link to={`/s/${r.sectionSlug}/${r.partSlug}`} className="hover:underline underline-offset-2">
                          {r.partName}
                        </Link>
                      </td>
                      <td className="py-2 text-right tabular-nums text-ink-2">
                        {r.done}/{r.total}
                      </td>
                      <td className={`px-4 sm:px-5 py-2 text-right tabular-nums font-semibold ${pctTone(r.accuracy)}`}>
                        {r.accuracy === null ? '—' : `${r.accuracy}%`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </details>
          ))}
        </Panel>
      </section>

      <Profile />
      <Backup onChange={() => setVersion((v) => v + 1)} />
    </div>
  )
}

const SKILLS = [
  { slug: 'use-of-english', name: 'Use of English' },
  { slug: 'reading', name: 'Reading' },
  { slug: 'grammar', name: 'Grammar' },
  { slug: 'vocabulary', name: 'Vocabulary' },
]

/** Evolución: % de aciertos por semana en cada destreza (últimas 8 semanas). */
function Trends() {
  const history = loadHistory()
  if (history.filter((h) => skillOf(h.id) !== 'writing').length === 0) return null
  const data = SKILLS.map((sk) => ({ ...sk, points: weeklyAccuracy(history, sk.slug) }))
  return (
    <section className="mb-10">
      <h2 className="text-lg font-bold mb-1">Evolución</h2>
      <p className="text-sm text-ink-2 mb-3">Porcentaje de aciertos por semana en las últimas 8 semanas. Pasa el ratón por un punto para ver el detalle.</p>
      <Panel className="p-5 grid gap-x-8 gap-y-6 sm:grid-cols-2">
        {data.map((d) => (
          <TrendChart key={d.slug} title={d.name} points={d.points} />
        ))}
      </Panel>
      <details className="mt-2 text-sm">
        <summary className="cursor-pointer text-ink-2 hover:text-ink">Ver los datos en una tabla</summary>
        <div className="overflow-x-auto mt-2">
          <table className="text-sm tabular-nums">
            <thead>
              <tr className="text-xs text-ink-3 text-left">
                <th className="font-medium pr-4 pb-1">Semana del</th>
                {data.map((d) => (
                  <th key={d.slug} className="font-medium pr-4 pb-1 text-right">
                    {d.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data[0].points.map((p, i) => (
                <tr key={i} className="border-t border-line">
                  <td className="pr-4 py-1">{p.week.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}</td>
                  {data.map((d) => (
                    <td key={d.slug} className="pr-4 py-1 text-right">
                      {d.points[i].pct === null ? '—' : `${d.points[i].pct}%`}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </section>
  )
}

function Profile() {
  const [name, setName] = useState(() => loadUser().name)
  const [saved, setSaved] = useState(false)
  return (
    <section className="max-w-2xl mb-10">
      <h2 className="text-lg font-bold">Tu nombre</h2>
      <form
        className="mt-3 flex flex-wrap gap-2"
        onSubmit={(e) => {
          e.preventDefault()
          saveUser({ name: name.trim() })
          setSaved(true)
        }}
      >
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value)
            setSaved(false)
          }}
          maxLength={30}
          placeholder="Tu nombre"
          aria-label="Tu nombre"
          className="h-9 w-56 rounded-md border border-line-strong bg-paper px-3 outline-none focus:border-ink"
        />
        <button type="submit" className={btn('secondary', 'sm')}>
          {saved ? 'Guardado' : 'Guardar'}
        </button>
      </form>
    </section>
  )
}

function Backup({ onChange }: { onChange: () => void }) {
  const fileRef = useRef<HTMLInputElement>(null)
  const [msg, setMsg] = useState<string | null>(null)
  const [confirmReset, setConfirmReset] = useState(false)

  const download = () => {
    const blob = new Blob([exportData()], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `b2-progreso-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
    setMsg('Copia descargada.')
  }

  const upload = async (f: File) => {
    const ok = importData(await f.text())
    setMsg(ok ? 'Progreso importado.' : 'Ese archivo no es una copia de esta app. Elige el .json que descargaste desde aquí.')
    if (ok) onChange()
  }

  return (
    <section className="max-w-2xl">
      <h2 className="text-lg font-bold">Copia de seguridad</h2>
      <p className="mt-1 text-ink-2">
        Tu progreso y tus borradores de Writing solo están en este navegador. Descarga una copia para no perderlos o para pasarlos a otro dispositivo.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button onClick={download} className={btn('primary', 'sm')}>
          Descargar copia
        </button>
        <button onClick={() => fileRef.current?.click()} className={btn('secondary', 'sm')}>
          Importar copia
        </button>
        <input ref={fileRef} type="file" accept="application/json,.json" className="hidden" onChange={(e) => e.target.files?.[0] && upload(e.target.files[0])} />
        {!confirmReset ? (
          <button onClick={() => setConfirmReset(true)} className={btn('danger', 'sm')}>
            Borrar todo
          </button>
        ) : (
          <span className="flex flex-wrap items-center gap-2 text-sm">
            Se borrará todo el progreso y no se puede deshacer.
            <button
              onClick={() => {
                resetAll()
                setConfirmReset(false)
                setMsg('Progreso borrado.')
                onChange()
              }}
              className={`${btn('danger', 'sm')} !bg-bad !text-on-ink`}
            >
              Borrar todo
            </button>
            <button onClick={() => setConfirmReset(false)} className={btn('quiet', 'sm')}>
              Cancelar
            </button>
          </span>
        )}
      </div>
      {msg && <p className="mt-3 text-sm text-ink-2">{msg}</p>}
    </section>
  )
}
