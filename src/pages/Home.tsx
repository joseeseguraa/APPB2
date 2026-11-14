import { Link } from 'react-router-dom'
import { sections } from '../data/sections'
import { loadProgress } from '../lib/progress'

export default function Home() {
  const progress = loadProgress()

  return (
    <div>
      <section className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
          Prepara el B2 First
        </h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Practica cada parte del examen por separado, con explicaciones en español de cada
          respuesta. Elige una destreza para empezar.
        </p>
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        {sections.map((s) => {
          const exercises = s.parts.flatMap((p) => p.exercises)
          const done = exercises.filter((e) => progress[e.id]).length
          const card = (
            <div
              className={`h-full rounded-2xl border p-5 transition ${
                s.available
                  ? 'bg-white border-navy-100 hover:border-navy-500 hover:shadow-md'
                  : 'bg-white/60 border-dashed border-slate-300'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-3xl" aria-hidden>
                  {s.icon}
                </span>
                {s.available ? (
                  exercises.length > 0 && (
                    <span className="text-xs font-medium text-navy-700 bg-navy-50 rounded-full px-2.5 py-1">
                      {done}/{exercises.length} hechos
                    </span>
                  )
                ) : (
                  <span className="text-xs font-medium text-slate-500 bg-slate-100 rounded-full px-2.5 py-1">
                    Próximamente
                  </span>
                )}
              </div>
              <h2 className={`mt-3 text-lg font-semibold ${s.available ? 'text-navy-900' : 'text-slate-500'}`}>
                {s.name}
              </h2>
              <p className="text-sm text-slate-500">{s.nameEs}</p>
              <p className={`mt-2 text-sm ${s.available ? 'text-slate-600' : 'text-slate-400'}`}>
                {s.description}
              </p>
            </div>
          )
          return s.available ? (
            <Link key={s.slug} to={`/s/${s.slug}`} className="block">
              {card}
            </Link>
          ) : (
            <div key={s.slug}>{card}</div>
          )
        })}
      </div>
    </div>
  )
}
