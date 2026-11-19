// Práctica a medida: el alumno elige partes y temas, cuántas preguntas y cuáles (todas, sin hacer o falladas).
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { filterCards, partKey, pickBalanced, practiceCards, type Card, type PracticeFilter } from '../lib/cards'
import { addMistake, loadReview } from '../lib/review'
import { loadProgress, logActivity } from '../lib/progress'
import { storageKey } from '../lib/level'
import QuizSession from '../components/QuizSession'
import { btn, PageHeader, Panel } from '../components/ui'
import type { PartInfo, SectionInfo } from '../types'

const COUNTS = [10, 20, 30] as const
const FILTERS: { v: PracticeFilter; label: string; hint: string }[] = [
  { v: 'all', label: 'Todas', hint: 'Cualquier pregunta de lo que elijas.' },
  { v: 'new', label: 'Sin hacer', hint: 'Solo de ejercicios que todavía no has hecho.' },
  { v: 'failed', label: 'Falladas', hint: 'Las que fallaste en tu último intento o tienes en Mis errores.' },
]

interface Saved {
  parts: string[]
  count: number
  filter: PracticeFilter
}

const prefKey = () => storageKey('practice.v1')

function loadPrefs(): Saved | null {
  try {
    const raw = localStorage.getItem(prefKey())
    return raw ? (JSON.parse(raw) as Saved) : null
  } catch {
    return null
  }
}

function savePrefs(p: Saved) {
  try {
    localStorage.setItem(prefKey(), JSON.stringify(p))
  } catch {
    /* sin almacenamiento */
  }
}

interface Row {
  key: string
  part: PartInfo
}
interface Block {
  section: SectionInfo
  groups: { title?: string; rows: Row[] }[]
}

function partLabel(part: PartInfo) {
  return part.number ? `Part ${part.number}: ${part.name}` : part.name
}

export default function PracticePage() {
  const all = useMemo(() => practiceCards(), [])
  const [session, setSession] = useState<Card[] | null>(null)
  const [params] = useSearchParams()
  // ?p=seccion/parte,...&f=failed (enlace desde Mi progreso) tiene prioridad sobre la última selección
  const [prefs] = useState<Saved | null>(() => {
    const saved = loadPrefs()
    const p = params.get('p')
    const f = params.get('f') as PracticeFilter | null
    if (!p && !f) return saved
    return {
      parts: p ? p.split(',') : (saved?.parts ?? []),
      count: saved?.count ?? 20,
      filter: f && FILTERS.some((x) => x.v === f) ? f : (saved?.filter ?? 'all'),
    }
  })
  const [selected, setSelected] = useState<Set<string>>(() => new Set(prefs?.parts ?? []))
  const [count, setCount] = useState<number>(prefs?.count ?? 20)
  const [filter, setFilter] = useState<PracticeFilter>(prefs?.filter ?? 'all')

  // preguntas disponibles con el filtro actual, por parte o tema
  const filtered = useMemo(() => filterCards(all, filter, loadProgress(), loadReview()), [all, filter, session])
  const perPart = useMemo(() => {
    const m = new Map<string, number>()
    for (const c of filtered) {
      const k = partKey(c.section, c.part)
      m.set(k, (m.get(k) ?? 0) + 1)
    }
    return m
  }, [filtered])

  // bloques por sección, con los temas agrupados como en la lista de cada sección
  const blocks = useMemo(() => {
    const out: Block[] = []
    const seen = new Set<string>()
    for (const c of all) {
      const k = partKey(c.section, c.part)
      if (seen.has(k)) continue
      seen.add(k)
      let b = out.find((x) => x.section.slug === c.section.slug)
      if (!b) out.push((b = { section: c.section, groups: [] }))
      let g = b.groups.find((x) => x.title === c.part.group)
      if (!g) b.groups.push((g = { title: c.part.group, rows: [] }))
      g.rows.push({ key: k, part: c.part })
    }
    return out
  }, [all])

  const available = filtered.filter((c) => selected.has(partKey(c.section, c.part)))
  const n = Math.min(count, available.length)

  const toggle = (keys: string[], on: boolean) => {
    const s = new Set(selected)
    keys.forEach((k) => (on ? s.add(k) : s.delete(k)))
    setSelected(s)
  }

  const start = () => {
    savePrefs({ parts: [...selected], count, filter })
    setSession(pickBalanced(available, n))
  }

  if (session) {
    return (
      <div>
        <PageHeader icon="practice" title="Práctica a medida" />
        <QuizSession
          cards={session}
          allowSave
          onAnswer={(c, ok) => !ok && addMistake(c.exId, c.q)}
          onFinish={() => logActivity()}
          endExtra={
            <div className="mt-4 flex flex-wrap gap-2">
              <button onClick={start} className={btn('primary', 'sm')} disabled={available.length === 0}>
                Otra tanda igual
              </button>
              <button onClick={() => setSession(null)} className={btn('secondary', 'sm')}>
                Cambiar la selección
              </button>
            </div>
          }
        />
      </div>
    )
  }

  return (
    <div className="max-w-4xl pb-4">
      <PageHeader
        icon="practice"
        title="Práctica a medida"
        lead="Elige las partes del examen y los temas que quieres trabajar, y practica sus preguntas sueltas y mezcladas. Las que falles irán a Mis errores."
      />

      <section className="mb-8">
        <h2 className="font-bold mb-3">Qué preguntas</h2>
        <div role="radiogroup" aria-label="Qué preguntas" className="grid sm:grid-cols-3 gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.v}
              role="radio"
              aria-checked={filter === f.v}
              onClick={() => setFilter(f.v)}
              className={`text-left rounded-lg border px-4 py-3 transition-colors ${
                filter === f.v ? 'border-print bg-paper shadow-[inset_0_0_0_1px_var(--color-print)]' : 'border-line bg-paper hover:border-line-strong'
              }`}
            >
              <span className="block font-semibold">{f.label}</span>
              <span className="block text-sm text-ink-2 mt-0.5">{f.hint}</span>
            </button>
          ))}
        </div>
      </section>

      {blocks.map((b) => {
        const keys = b.groups.flatMap((g) => g.rows.map((r) => r.key))
        const allOn = keys.every((k) => selected.has(k))
        return (
          <section key={b.section.slug} className="mb-8">
            <div className="flex items-baseline justify-between gap-3 mb-3">
              <h2 className="font-bold">{b.section.name}</h2>
              <button onClick={() => toggle(keys, !allOn)} className="text-sm font-semibold text-print hover:underline">
                {allOn ? 'Quitar todo' : 'Elegir todo'}
              </button>
            </div>
            <Panel className="divide-y divide-line">
              {b.groups.map((g, gi) => (
                <div key={gi}>
                  {g.title && <p className="px-4 sm:px-5 pt-3 pb-1 text-xs font-semibold text-ink-3">{g.title}</p>}
                  <ul className={g.title ? 'pb-1' : 'divide-y divide-line'}>
                    {g.rows.map((r) => {
                      const avail = perPart.get(r.key) ?? 0
                      return (
                        <li key={r.key}>
                          <label className="flex items-center gap-3 px-4 sm:px-5 py-2.5 cursor-pointer hover:bg-bg/60">
                            <input
                              type="checkbox"
                              checked={selected.has(r.key)}
                              onChange={(e) => toggle([r.key], e.target.checked)}
                              className="w-4 h-4 accent-[var(--color-print)] shrink-0"
                            />
                            <span className="flex-1 min-w-0">
                              <span className="block font-medium leading-snug">{partLabel(r.part)}</span>
                              {r.part.nameEs && <span className="block text-xs text-ink-3">{r.part.nameEs}</span>}
                            </span>
                            <span className={`text-xs tabular-nums shrink-0 ${avail ? 'text-ink-3' : 'text-ink-3/60'}`}>
                              {avail} {avail === 1 ? 'pregunta' : 'preguntas'}
                            </span>
                          </label>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </Panel>
          </section>
        )
      })}

      <div className="sticky bottom-[calc(3.9rem+env(safe-area-inset-bottom))] sm:bottom-0 z-20 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 py-3 bg-bg/95 backdrop-blur border-t border-line flex flex-wrap gap-3 items-center">
        <div role="radiogroup" aria-label="Número de preguntas" className="grid grid-cols-3 gap-0.5 p-0.5 rounded-md bg-line/60">
          {COUNTS.map((c) => (
            <button
              key={c}
              role="radio"
              aria-checked={count === c}
              onClick={() => setCount(c)}
              className={`h-8 px-3 rounded text-sm font-semibold tabular-nums ${count === c ? 'bg-paper text-ink shadow-sm' : 'text-ink-3 hover:text-ink'}`}
            >
              {c}
            </button>
          ))}
        </div>
        <span className="text-sm text-ink-2 flex-1 min-w-[10rem]">
          {selected.size === 0
            ? 'Elige al menos una parte o tema.'
            : available.length === 0
              ? 'No hay preguntas con este filtro.'
              : `${available.length} disponibles${available.length < count ? `: la tanda será de ${available.length}` : ''}.`}
        </span>
        <button onClick={start} disabled={n === 0} className={btn('primary')}>
          Empezar
        </button>
      </div>
    </div>
  )
}
