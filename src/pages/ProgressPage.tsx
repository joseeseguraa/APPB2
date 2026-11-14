import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { sections } from '../data/sections'
import { exportData, importData, loadDays, loadProgress, resetAll, streak, type ProgressMap } from '../lib/progress'
import { Breadcrumbs } from '../components/Layout'

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
  return sections
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
          partName: p.number ? `Part ${p.number} · ${p.name}` : p.name,
          done: recs.length,
          total: p.exercises.length,
          accuracy: tot ? Math.round((score / tot) * 100) : null,
          isWriting: p.exercises[0]?.kind === 'writing',
        }
      }),
    )
}

function Bar({ value, tone = 'navy' }: { value: number; tone?: 'navy' | 'auto' }) {
  const color =
    tone === 'navy' ? 'bg-navy-700' : value >= 75 ? 'bg-emerald-500' : value >= 50 ? 'bg-amber-500' : 'bg-red-500'
  return (
    <div className="h-2 rounded-full bg-navy-100 overflow-hidden">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${Math.min(100, value)}%` }} />
    </div>
  )
}

function StatCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-2xl bg-white border border-navy-100 p-4">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="text-2xl font-bold text-navy-900 tabular-nums">{value}</p>
      {sub && <p className="text-xs text-slate-400">{sub}</p>}
    </div>
  )
}

export default function ProgressPage() {
  const [version, setVersion] = useState(0) // para refrescar tras importar o borrar
  const progress = loadProgress()
  const days = loadDays()
  const stats = computeStats(progress)
  void version

  const allExercises = sections.flatMap((s) => s.parts.flatMap((p) => p.exercises.map((e) => ({ s, p, e }))))
  const doneCount = allExercises.filter(({ e }) => progress[e.id]).length
  const graded = allExercises.filter(({ e }) => e.kind !== 'writing' && progress[e.id])
  const gScore = graded.reduce((a, { e }) => a + progress[e.id].score, 0)
  const gTotal = graded.reduce((a, { e }) => a + progress[e.id].total, 0)
  const accuracy = gTotal ? Math.round((gScore / gTotal) * 100) : null

  const weak = stats
    .filter((s) => !s.isWriting && s.accuracy !== null)
    .sort((a, b) => (a.accuracy ?? 0) - (b.accuracy ?? 0))
    .filter((s) => (s.accuracy ?? 100) < 75)
    .slice(0, 4)

  const toReview = allExercises
    .filter(({ e }) => e.kind !== 'writing' && progress[e.id]?.wrong.length)
    .sort((a, b) => progress[b.e.id].lastAt.localeCompare(progress[a.e.id].lastAt))
    .slice(0, 8)

  const bySection = sections
    .filter((s) => s.available)
    .map((s) => {
      const rows = stats.filter((r) => r.sectionSlug === s.slug)
      const done = rows.reduce((a, r) => a + r.done, 0)
      const total = rows.reduce((a, r) => a + r.total, 0)
      return { s, rows, done, total }
    })

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Inicio', to: '/' }, { label: 'Mi progreso' }]} />
      <h1 className="text-3xl font-bold text-navy-900">📈 Mi progreso</h1>
      <p className="mt-1 text-slate-600">Se calcula con tu último intento de cada ejercicio. Los datos se guardan en este navegador.</p>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatCard label="Ejercicios hechos" value={`${doneCount}`} sub={`de ${allExercises.length}`} />
        <StatCard label="Aciertos" value={accuracy === null ? '—' : `${accuracy}%`} sub="sin contar Writing" />
        <StatCard label="Racha" value={`${streak(days)} ${streak(days) === 1 ? 'día' : 'días'}`} sub="seguidos practicando" />
        <StatCard label="Días de práctica" value={`${days.length}`} sub="en total" />
      </div>

      {doneCount === 0 && (
        <div className="mt-6 rounded-2xl bg-gold-300/30 p-5 text-sm">
          Todavía no has hecho ningún ejercicio. Empieza por{' '}
          <Link to="/s/use-of-english" className="font-semibold underline">
            Use of English
          </Link>{' '}
          y vuelve aquí para ver tu evolución.
        </div>
      )}

      {weak.length > 0 && (
        <section className="mt-8">
          <h2 className="text-lg font-semibold text-navy-900 mb-3">🎯 Tus puntos débiles</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {weak.map((w) => (
              <Link
                key={w.sectionSlug + w.partSlug}
                to={`/s/${w.sectionSlug}/${w.partSlug}`}
                className="rounded-2xl bg-white border border-red-100 p-4 hover:border-red-300 transition"
              >
                <p className="text-xs text-slate-500">{w.sectionName}</p>
                <p className="font-semibold text-navy-900">{w.partName}</p>
                <div className="mt-2 flex items-center gap-3">
                  <div className="flex-1">
                    <Bar value={w.accuracy ?? 0} tone="auto" />
                  </div>
                  <span className="text-sm font-semibold tabular-nums">{w.accuracy}%</span>
                </div>
                <p className="mt-1 text-xs text-navy-700">Repasa la teoría y vuelve a practicar →</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {toReview.length > 0 && (
        <section className="mt-8">
          <h2 className="text-lg font-semibold text-navy-900 mb-3">🔁 Ejercicios con fallos para repetir</h2>
          <div className="grid gap-2">
            {toReview.map(({ s, p, e }) => {
              const r = progress[e.id]
              return (
                <Link
                  key={e.id}
                  to={`/s/${s.slug}/${p.slug}/${e.id}?mode=practice`}
                  className="flex items-center gap-3 rounded-xl bg-white border border-navy-100 px-4 py-3 hover:border-navy-500 transition"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-navy-900 truncate">{e.title}</p>
                    <p className="text-xs text-slate-500 truncate">
                      {s.name} · {p.number ? `Part ${p.number}` : p.name}
                    </p>
                  </div>
                  <span className="text-xs text-red-700 bg-red-50 rounded-full px-2 py-0.5 shrink-0">
                    {r.wrong.length} {r.wrong.length === 1 ? 'fallo' : 'fallos'}
                  </span>
                  <span className="text-sm tabular-nums text-slate-500 shrink-0">
                    {r.score}/{r.total}
                  </span>
                </Link>
              )
            })}
          </div>
        </section>
      )}

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-navy-900 mb-3">Por secciones</h2>
        <div className="grid gap-3">
          {bySection.map(({ s, rows, done, total }) => (
            <details key={s.slug} className="rounded-2xl bg-white border border-navy-100 p-4 group">
              <summary className="cursor-pointer list-none">
                <div className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden>
                    {s.icon}
                  </span>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-navy-900">{s.name}</span>
                      <span className="text-slate-500 tabular-nums">
                        {done}/{total}
                      </span>
                    </div>
                    <div className="mt-1.5">
                      <Bar value={total ? (done / total) * 100 : 0} />
                    </div>
                  </div>
                  <span className="text-slate-400 group-open:rotate-180 transition">▾</span>
                </div>
              </summary>
              <table className="mt-4 w-full text-sm">
                <thead>
                  <tr className="text-left text-xs text-slate-500">
                    <th className="font-medium pb-1">Parte / tema</th>
                    <th className="font-medium pb-1 text-right">Hechos</th>
                    <th className="font-medium pb-1 text-right w-20">{s.slug === 'writing' ? 'Checklist' : 'Aciertos'}</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.partSlug} className="border-t border-navy-50">
                      <td className="py-1.5">
                        <Link to={`/s/${r.sectionSlug}/${r.partSlug}`} className="hover:underline">
                          {r.partName}
                        </Link>
                      </td>
                      <td className="py-1.5 text-right tabular-nums text-slate-500">
                        {r.done}/{r.total}
                      </td>
                      <td
                        className={`py-1.5 text-right tabular-nums font-medium ${
                          r.accuracy === null
                            ? 'text-slate-300'
                            : r.accuracy >= 75
                              ? 'text-emerald-700'
                              : r.accuracy >= 50
                                ? 'text-amber-700'
                                : 'text-red-700'
                        }`}
                      >
                        {r.accuracy === null ? '—' : `${r.accuracy}%`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </details>
          ))}
        </div>
      </section>

      <Backup onChange={() => setVersion((v) => v + 1)} />
    </div>
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
    setMsg(ok ? '✓ Progreso importado correctamente.' : 'Ese archivo no es una copia válida de esta app.')
    if (ok) onChange()
  }

  return (
    <section className="mt-10 rounded-2xl bg-white border border-navy-100 p-5">
      <h2 className="font-semibold text-navy-900">Copia de seguridad</h2>
      <p className="mt-1 text-sm text-slate-600">
        Tu progreso y tus borradores de Writing se guardan solo en este navegador. Descarga una copia para no perderlos o
        para pasarlos a otro dispositivo.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button onClick={download} className="rounded-xl bg-navy-800 text-white px-4 py-2 text-sm font-medium hover:bg-navy-700">
          ⬇ Descargar copia
        </button>
        <button
          onClick={() => fileRef.current?.click()}
          className="rounded-xl border border-navy-800 text-navy-800 px-4 py-2 text-sm font-medium hover:bg-navy-50"
        >
          ⬆ Importar copia
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json"
          className="hidden"
          onChange={(e) => e.target.files?.[0] && upload(e.target.files[0])}
        />
        {!confirmReset ? (
          <button
            onClick={() => setConfirmReset(true)}
            className="rounded-xl border border-red-200 text-red-700 px-4 py-2 text-sm font-medium hover:bg-red-50"
          >
            Borrar todo
          </button>
        ) : (
          <span className="flex items-center gap-2 text-sm">
            ¿Seguro? No se puede deshacer.
            <button
              onClick={() => {
                resetAll()
                setConfirmReset(false)
                setMsg('Progreso borrado.')
                onChange()
              }}
              className="rounded-lg bg-red-600 text-white px-3 py-1.5 font-medium"
            >
              Sí, borrar
            </button>
            <button onClick={() => setConfirmReset(false)} className="rounded-lg border px-3 py-1.5">
              Cancelar
            </button>
          </span>
        )}
      </div>
      {msg && <p className="mt-2 text-sm text-slate-600">{msg}</p>}
    </section>
  )
}
