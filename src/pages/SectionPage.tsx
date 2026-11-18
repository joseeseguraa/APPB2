import { Link, useParams } from 'react-router-dom'
import { findSection } from '../data/sections'
import { loadProgress, type ProgressMap } from '../lib/progress'
import { Meter, PageHeader, Panel, SECTION_ICON } from '../components/ui'
import type { PartInfo, SectionInfo } from '../types'
import NotFound from './NotFound'

function PartRow({ section, p, index, isExam, progress }: { section: SectionInfo; p: PartInfo; index: number; isExam: boolean; progress: ProgressMap }) {
  const done = p.exercises.filter((e) => progress[e.id]).length
  const recs = p.exercises.map((e) => progress[e.id]).filter(Boolean)
  const sc = recs.reduce((a, r) => a + r.score, 0)
  const tt = recs.reduce((a, r) => a + r.total, 0)
  const pct = tt ? Math.round((sc / tt) * 100) : null
  return (
    <Link
      to={`/s/${section.slug}/${p.slug}`}
      className="flex items-center gap-4 px-4 sm:px-5 py-4 hover:bg-bg/70 transition-colors first:rounded-t-[var(--radius-panel)] last:rounded-b-[var(--radius-panel)]"
    >
      {isExam ? (
        <span className="shrink-0 grid place-items-center w-10 h-10 rounded-full border-2 border-print text-print font-bold tabular-nums">{p.number}</span>
      ) : (
        <span className="shrink-0 w-8 text-center text-ink-3 font-semibold tabular-nums">{index}</span>
      )}
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-[1.02rem] leading-snug">{p.number ? `Part ${p.number}: ${p.name}` : p.name}</h3>
        <p className="text-sm text-ink-2 mt-0.5">{p.number ? p.nameEs : p.summary ?? p.nameEs}</p>
        {p.number && (
          <p className="text-xs text-ink-3 mt-1">
            {p.questions} preguntas en el examen, unos {p.suggestedMinutes} minutos
          </p>
        )}
      </div>
      <div className="shrink-0 w-24 sm:w-32 text-right">
        <p className="text-xs text-ink-3 tabular-nums mb-1.5">
          {done}/{p.exercises.length}
          {pct !== null && <span className="hidden sm:inline">, {pct}%</span>}
        </p>
        <Meter value={pct ?? (done / p.exercises.length) * 100} tone={pct === null ? 'ink' : 'score'} />
      </div>
    </Link>
  )
}

export default function SectionPage() {
  const { section: slug } = useParams()
  const section = findSection(slug)
  if (!section || !section.available) return <NotFound />
  const progress = loadProgress()
  const isExam = section.parts.some((p) => p.number)

  // Agrupar los temas por bloque, manteniendo el orden
  const groups: { title?: string; parts: { p: PartInfo; index: number }[] }[] = []
  section.parts.forEach((p, i) => {
    const last = groups[groups.length - 1]
    if (last && last.title === p.group) last.parts.push({ p, index: i + 1 })
    else groups.push({ title: p.group, parts: [{ p, index: i + 1 }] })
  })

  const totalEx = section.parts.reduce((a, p) => a + p.exercises.length, 0)
  const doneEx = section.parts.reduce((a, p) => a + p.exercises.filter((e) => progress[e.id]).length, 0)

  return (
    <div className="max-w-4xl">
      <PageHeader
        icon={SECTION_ICON[section.slug]}
        title={section.name}
        lead={section.description}
        aside={
          <div className="w-44">
            <p className="text-sm text-ink-2 mb-1.5 tabular-nums">
              {doneEx} de {totalEx} hechos
            </p>
            <Meter value={(doneEx / totalEx) * 100} />
          </div>
        }
      />

      {section.intro && (
        <div className="mb-8 max-w-2xl space-y-3 text-[0.98rem] leading-relaxed text-ink-2 border-l-2 border-print pl-4">
          {section.intro.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
        </div>
      )}

      <div className="grid gap-8">
        {groups.map((g, gi) => (
          <section key={gi}>
            {g.title && <h2 className="text-lg font-bold mb-3">{g.title}</h2>}
            <Panel className="divide-y divide-line">
              {g.parts.map(({ p, index }) => (
                <PartRow key={p.slug} section={section} p={p} index={index} isExam={isExam} progress={progress} />
              ))}
            </Panel>
          </section>
        ))}
      </div>
    </div>
  )
}
