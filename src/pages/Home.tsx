import { Link } from 'react-router-dom'
import { sections } from '../data/sections'
import { loadDays, loadProgress, streak } from '../lib/progress'
import { btn, Icon, IconTile, Meter, Panel, SECTION_ICON, type IconName } from '../components/ui'
import type { Exercise, PartInfo, SectionInfo } from '../types'
import { partStats } from './ExamPage'
import { dateKey, dueKeys, loadDaily } from '../lib/review'
import { loadUser } from '../lib/user'

interface Located {
  s: SectionInfo
  p: PartInfo
  e: Exercise
}

function locate(id: string): Located | null {
  for (const s of sections)
    for (const p of s.parts) {
      const e = p.exercises.find((x) => x.id === id)
      if (e) return { s, p, e }
    }
  return null
}

function partLabel(s: SectionInfo, p: PartInfo) {
  return p.number ? `${s.name}, Part ${p.number}` : `${s.name}, ${p.name}`
}

function greeting() {
  const h = new Date().getHours()
  return h < 6 ? 'Buenas noches' : h < 14 ? 'Buenos días' : h < 21 ? 'Buenas tardes' : 'Buenas noches'
}

function dayKey(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

interface Suggestion {
  icon: IconName
  title: string
  why: string
  to: string
}

export default function Home() {
  const progress = loadProgress()
  const days = loadDays()
  const st = streak(days)
  const done = Object.keys(progress).length
  const allEx = sections.flatMap((s) => s.parts.flatMap((p) => p.exercises))

  const recent = Object.entries(progress)
    .sort((a, b) => b[1].lastAt.localeCompare(a[1].lastAt))
    .map(([id, r]) => ({ loc: locate(id), r }))
    .filter((x): x is { loc: Located; r: (typeof progress)[string] } => x.loc !== null)
    .slice(0, 5)

  const graded = Object.entries(progress).filter(([id]) => locate(id)?.e.kind !== 'writing')
  const sc = graded.reduce((a, [, r]) => a + r.score, 0)
  const tt = graded.reduce((a, [, r]) => a + r.total, 0)
  const accuracy = tt ? Math.round((sc / tt) * 100) : null

  /* ---------- Sugerencias para hoy ---------- */
  const suggestions: Suggestion[] = []
  const due = dueKeys().length
  const daily = loadDaily()[dateKey()]
  if (!daily)
    suggestions.push({ icon: 'daily', title: 'Reto diario', why: '10 preguntas variadas, unos 5 minutos. Cambia cada día.', to: '/reto' })
  if (due > 0)
    suggestions.push({
      icon: 'review',
      title: `Repasa ${due} ${due === 1 ? 'error' : 'errores'}`,
      why: 'Preguntas que fallaste y que toca volver a ver hoy.',
      to: '/repaso',
    })
  const examParts = sections
    .filter((s) => s.slug === 'use-of-english' || s.slug === 'reading')
    .flatMap((s) => s.parts.map((p) => ({ s, p, st: partStats(p, progress) })))

  // 1. La parte del examen más floja (si hay datos)
  const weakest = examParts
    .filter((x) => x.st.pct !== null && x.st.pct < 75)
    .sort((a, b) => (a.st.pct ?? 0) - (b.st.pct ?? 0))[0]
  if (weakest) {
    const next = weakest.p.exercises.find((e) => !progress[e.id]) ?? weakest.p.exercises[0]
    suggestions.push({
      icon: SECTION_ICON[weakest.s.slug],
      title: `Refuerza ${partLabel(weakest.s, weakest.p)}`,
      why: `Llevas un ${weakest.st.pct}% de aciertos. Repasa la guía y haz "${next.title}".`,
      to: `/s/${weakest.s.slug}/${weakest.p.slug}/${next.id}?mode=practice`,
    })
  }

  // 2. Siguiente ejercicio sin hacer en el examen
  const pending = examParts.find((x) => x !== weakest && x.p.exercises.some((e) => !progress[e.id]))
  if (pending) {
    const next = pending.p.exercises.find((e) => !progress[e.id])!
    suggestions.push({
      icon: SECTION_ICON[pending.s.slug],
      title: `${partLabel(pending.s, pending.p)}: ${next.title}`,
      why:
        pending.st.done === 0
          ? 'Aún no has practicado esta parte del examen.'
          : `Te quedan ${pending.st.total - pending.st.done} ejercicios en esta parte.`,
      to: `/s/${pending.s.slug}/${pending.p.slug}/${next.id}?mode=practice`,
    })
  }

  // 3. Un tema de base sin empezar
  const base = sections
    .filter((s) => s.slug === 'grammar' || s.slug === 'vocabulary')
    .flatMap((s) => s.parts.map((p) => ({ s, p })))
    .find(({ p }) => p.exercises.every((e) => !progress[e.id]))
  if (base) {
    suggestions.push({
      icon: SECTION_ICON[base.s.slug],
      title: `${base.s.name}: ${base.p.name}`,
      why: base.p.summary ?? base.p.nameEs,
      to: `/s/${base.s.slug}/${base.p.slug}`,
    })
  }

  // 4. Un writing si aún no hay ninguno
  const writing = sections.find((s) => s.slug === 'writing')!
  if (suggestions.length < 3 && !writing.parts.some((p) => p.exercises.some((e) => progress[e.id]))) {
    suggestions.push({
      icon: 'writing',
      title: 'Writing: tu primer essay',
      why: 'La Part 1 del Writing es obligatoria. Lee la estructura y escribe uno.',
      to: '/s/writing/essay',
    })
  }

  /* ---------- Actividad de los últimos 14 días ---------- */
  const daySet = new Set(days)
  const last14 = Array.from({ length: 14 }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - (13 - i))
    return { d, active: daySet.has(dayKey(d)) }
  })

  const last = recent[0]

  return (
    <div className="max-w-5xl">
      <header className="mb-8">
        <h1 className="text-[2rem] sm:text-[2.4rem] leading-[1.1] font-bold tracking-[-0.025em]">
          {greeting()}
          {loadUser().name && `, ${loadUser().name}`}
        </h1>
        <p className="mt-2 text-ink-2 text-[1.05rem]">
          {done === 0
            ? 'Aquí verás qué te conviene practicar cada día. Empieza por cualquiera de estas propuestas.'
            : 'Esto es lo que te conviene practicar hoy.'}
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_19rem] items-start">
        <div className="grid gap-8 min-w-0">
          {last && (
            <Panel className="p-5 flex flex-wrap items-center gap-4">
              <IconTile name={SECTION_ICON[last.loc.s.slug] ?? 'practice'} tone="ink" />
              <div className="flex-1 min-w-[12rem]">
                <p className="text-sm text-ink-3">Lo último que hiciste</p>
                <p className="font-bold leading-snug">{last.loc.e.title}</p>
                <p className="text-sm text-ink-2">{partLabel(last.loc.s, last.loc.p)}</p>
              </div>
              <Link to={`/s/${last.loc.s.slug}/${last.loc.p.slug}/${last.loc.e.id}?mode=practice`} className={btn('primary', 'sm')}>
                Repetir
              </Link>
            </Panel>
          )}

          <section>
            <h2 className="text-lg font-bold mb-3">Para hoy</h2>
            <Panel className="divide-y divide-line">
              {suggestions.slice(0, 4).map((sg) => (
                <Link key={sg.to} to={sg.to} className="group flex items-center gap-4 px-4 sm:px-5 py-4 hover:bg-bg/60 transition-colors">
                  <IconTile name={sg.icon} />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold leading-snug">{sg.title}</p>
                    <p className="text-sm text-ink-2 mt-0.5">{sg.why}</p>
                  </div>
                  <Icon name="chevron" className="w-5 h-5 text-ink-3 group-hover:text-ink transition-colors shrink-0" />
                </Link>
              ))}
            </Panel>
          </section>

          {recent.length > 0 && (
            <section>
              <h2 className="text-lg font-bold mb-3">Últimos ejercicios</h2>
              <Panel className="divide-y divide-line">
                {recent.map(({ loc, r }) => {
                  const pct = Math.round((r.score / r.total) * 100)
                  const isW = loc.e.kind === 'writing'
                  return (
                    <Link
                      key={loc.e.id}
                      to={`/s/${loc.s.slug}/${loc.p.slug}/${loc.e.id}?mode=practice`}
                      className="flex items-center gap-4 px-4 sm:px-5 py-3 hover:bg-bg/60 transition-colors"
                    >
                      <Icon name={SECTION_ICON[loc.s.slug] ?? 'practice'} className="w-5 h-5 text-ink-3 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold truncate">{loc.e.title}</p>
                        <p className="text-xs text-ink-3 truncate">{partLabel(loc.s, loc.p)}</p>
                      </div>
                      <span
                        className={`text-sm font-bold tabular-nums ${
                          isW ? 'text-ink-2' : pct >= 75 ? 'text-ok' : pct >= 50 ? 'text-warn' : 'text-bad'
                        }`}
                      >
                        {r.score}/{r.total}
                      </span>
                    </Link>
                  )
                })}
              </Panel>
            </section>
          )}
        </div>

        <aside className="grid gap-4">
          <Panel className="p-5">
            <div className="flex items-center gap-3">
              <span className={`grid place-items-center w-11 h-11 rounded-full ${st > 0 ? 'bg-print-soft text-print' : 'bg-bg text-ink-3'}`}>
                <Icon name="flame" className="w-6 h-6" />
              </span>
              <div>
                <p className="text-2xl font-bold tabular-nums leading-none">
                  {st} <span className="text-base font-semibold">{st === 1 ? 'día' : 'días'}</span>
                </p>
                <p className="text-sm text-ink-2 mt-1">{st > 0 ? 'seguidos practicando' : 'Practica hoy para empezar tu racha'}</p>
              </div>
            </div>
            <div className="mt-5 grid gap-1" style={{ gridTemplateColumns: 'repeat(14, minmax(0, 1fr))' }}>
              {last14.map(({ d, active }, i) => (
                <span
                  key={i}
                  title={d.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })}
                  className={`aspect-square rounded-[3px] ${active ? 'bg-print' : 'bg-line'} ${i === 13 ? 'ring-1 ring-offset-1 ring-ink-3' : ''}`}
                />
              ))}
            </div>
            <p className="mt-2 text-xs text-ink-3">Últimas dos semanas</p>
          </Panel>

          <Panel className="p-5 grid grid-cols-2 gap-4">
            <div>
              <p className="text-2xl font-bold tabular-nums leading-none">{done}</p>
              <p className="text-sm text-ink-2 mt-1">de {allEx.length} hechos</p>
            </div>
            <div>
              <p className="text-2xl font-bold tabular-nums leading-none">{accuracy === null ? '—' : `${accuracy}%`}</p>
              <p className="text-sm text-ink-2 mt-1">de aciertos</p>
            </div>
            <Meter value={(done / allEx.length) * 100} className="col-span-2" />
            <Link to="/progreso" className="col-span-2 text-sm font-semibold text-print hover:underline underline-offset-2">
              Ver mi progreso completo
            </Link>
          </Panel>

          <Panel className="p-5 !bg-ink !border-ink text-on-ink">
            <p className="font-bold">¿Listo para medirte?</p>
            <p className="text-on-ink/75 text-sm mt-1 leading-relaxed">Haz un simulacro con el tiempo oficial y obtén una nota estimada.</p>
            <Link to="/simulacro" className={`${btn('secondary', 'sm')} mt-4 !border-transparent`}>
              Ir a simulacros
            </Link>
          </Panel>
        </aside>
      </div>
    </div>
  )
}
