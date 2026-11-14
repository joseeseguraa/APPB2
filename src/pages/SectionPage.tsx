import { Link, useParams } from 'react-router-dom'
import { findSection } from '../data/sections'
import { loadProgress } from '../lib/progress'
import { BackLink } from '../components/Layout'
import { Meter, PageHeader, Panel } from '../components/ui'
import NotFound from './NotFound'

export default function SectionPage() {
  const { section: slug } = useParams()
  const section = findSection(slug)
  if (!section || !section.available) return <NotFound />
  const progress = loadProgress()
  const isExam = section.parts.some((p) => p.number)

  return (
    <div className="max-w-4xl">
      <BackLink to="/" label="Inicio" />
      <PageHeader title={section.name} lead={section.description} />

      {section.intro && (
        <div className="mb-8 max-w-2xl space-y-3 text-[0.98rem] leading-relaxed text-ink-2 border-l-2 border-print pl-4">
          {section.intro.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
        </div>
      )}

      <Panel className="divide-y divide-line">
        {section.parts.map((p, idx) => {
          const done = p.exercises.filter((e) => progress[e.id]).length
          const recs = p.exercises.map((e) => progress[e.id]).filter(Boolean)
          const sc = recs.reduce((a, r) => a + r.score, 0)
          const tt = recs.reduce((a, r) => a + r.total, 0)
          const pct = tt ? Math.round((sc / tt) * 100) : null
          return (
            <Link
              key={p.slug}
              to={`/s/${section.slug}/${p.slug}`}
              className="flex items-center gap-4 px-4 sm:px-5 py-4 hover:bg-bg/70 transition-colors first:rounded-t-[var(--radius-panel)] last:rounded-b-[var(--radius-panel)]"
            >
              {isExam ? (
                <span className="shrink-0 grid place-items-center w-10 h-10 rounded-full border-2 border-print text-print font-bold tabular-nums">
                  {p.number}
                </span>
              ) : (
                <span className="shrink-0 w-10 text-center text-ink-3 font-semibold tabular-nums">{idx + 1}</span>
              )}
              <div className="flex-1 min-w-0">
                <h2 className="font-bold text-[1.02rem] leading-snug">{p.number ? `Part ${p.number}: ${p.name}` : p.name}</h2>
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
        })}
      </Panel>
    </div>
  )
}
