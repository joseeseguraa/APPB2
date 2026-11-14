import { Link, useParams } from 'react-router-dom'
import { findSection } from '../data/sections'
import { loadProgress } from '../lib/progress'
import { Breadcrumbs } from '../components/Layout'
import NotFound from './NotFound'

export default function SectionPage() {
  const { section: slug } = useParams()
  const section = findSection(slug)
  if (!section || !section.available) return <NotFound />
  const progress = loadProgress()

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Inicio', to: '/' }, { label: section.name }]} />
      <h1 className="text-3xl font-bold text-navy-900">
        <span aria-hidden>{section.icon}</span> {section.name}
      </h1>
      <p className="mt-2 text-slate-600">{section.description}</p>

      <div className="mt-6 grid gap-3">
        {section.parts.map((p, idx) => {
          const done = p.exercises.filter((e) => progress[e.id]).length
          return (
            <Link
              key={p.slug}
              to={`/s/${section.slug}/${p.slug}`}
              className="flex items-center gap-4 rounded-2xl bg-white border border-navy-100 p-4 sm:p-5 hover:border-navy-500 hover:shadow-md transition"
            >
              <span className="grid place-items-center shrink-0 w-12 h-12 rounded-xl bg-navy-800 text-gold-400 font-bold text-lg">
                {p.number ?? idx + 1}
              </span>
              <div className="flex-1 min-w-0">
                <h2 className="font-semibold text-navy-900">
                  {p.number ? `Part ${p.number} · ${p.name}` : p.name}
                </h2>
                <p className="text-sm text-slate-500">
                  {p.number
                    ? `${p.nameEs} · ${p.questions} preguntas · ~${p.suggestedMinutes} min`
                    : p.summary ?? p.nameEs}
                </p>
              </div>
              <span className="text-xs font-medium text-navy-700 bg-navy-50 rounded-full px-2.5 py-1 shrink-0">
                {done}/{p.exercises.length}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
