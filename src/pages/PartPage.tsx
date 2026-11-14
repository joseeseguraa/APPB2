import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { findPart, findSection } from '../data/sections'
import { loadProgress } from '../lib/progress'
import { Breadcrumbs } from '../components/Layout'
import NotFound from './NotFound'

function GuideBlock({ title, items, tone }: { title: string; items: string[]; tone?: 'warn' }) {
  return (
    <div>
      <h3 className={`font-semibold mb-2 ${tone === 'warn' ? 'text-amber-800' : 'text-navy-800'}`}>{title}</h3>
      <ul className="space-y-1.5 text-sm text-slate-700">
        {items.map((t, i) => (
          <li key={i} className="flex gap-2">
            <span className={tone === 'warn' ? 'text-amber-600' : 'text-navy-500'} aria-hidden>
              {tone === 'warn' ? '⚠' : '•'}
            </span>
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function PartPage() {
  const { section: sSlug, part: pSlug } = useParams()
  const section = findSection(sSlug)
  const part = findPart(sSlug, pSlug)
  const [guideOpen, setGuideOpen] = useState(true)
  if (!section || !part) return <NotFound />
  const progress = loadProgress()
  const { guide, theory } = part
  const short = part.number ? `Part ${part.number}` : part.name

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: 'Inicio', to: '/' },
          { label: section.name, to: `/s/${section.slug}` },
          { label: short },
        ]}
      />
      <h1 className="text-2xl sm:text-3xl font-bold text-navy-900">
        {part.number ? `Part ${part.number} · ${part.name}` : part.name}
      </h1>
      <p className="mt-1 text-slate-600">
        {part.number
          ? `${part.nameEs} · ${part.questions} preguntas · ~${part.suggestedMinutes} min en el examen`
          : part.nameEs}
      </p>

      {theory && <Theory blocks={theory} />}

      {guide && (
      <section className="mt-6 rounded-2xl bg-white border border-navy-100">
        <button
          onClick={() => setGuideOpen((o) => !o)}
          className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
          aria-expanded={guideOpen}
        >
          <span className="font-semibold text-navy-900">📘 Cómo funciona esta parte</span>
          <span className="text-slate-400">{guideOpen ? '▲' : '▼'}</span>
        </button>
        {guideOpen && (
          <div className="px-4 sm:px-5 pb-5 grid gap-5 sm:grid-cols-2">
            <GuideBlock title="Formato" items={guide.format} />
            <GuideBlock title="Qué evalúa" items={guide.tests} />
            <div className="sm:col-span-2">
              <h3 className="font-semibold mb-2 text-navy-800">Estrategia paso a paso</h3>
              <ol className="space-y-1.5 text-sm text-slate-700">
                {guide.strategy.map((t, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="shrink-0 grid place-items-center w-5 h-5 rounded-full bg-navy-100 text-navy-800 text-xs font-semibold">
                      {i + 1}
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ol>
            </div>
            {guide.pitfalls && (
              <div className="sm:col-span-2 rounded-xl bg-amber-50 p-4">
                <GuideBlock title="Errores típicos" items={guide.pitfalls} tone="warn" />
              </div>
            )}
          </div>
        )}
      </section>
      )}

      <h2 className="mt-8 mb-3 text-lg font-semibold text-navy-900">Ejercicios</h2>
      <div className="grid gap-3">
        {part.exercises.map((ex, i) => {
          const rec = progress[ex.id]
          const base = `/s/${section.slug}/${part.slug}/${ex.id}`
          return (
            <div
              key={ex.id}
              className="rounded-2xl bg-white border border-navy-100 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3"
            >
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-400">Ejercicio {i + 1}</p>
                <h3 className="font-semibold text-navy-900">{ex.title}</h3>
                <p className="text-sm text-slate-500">{ex.focus}</p>
                {rec && (
                  <p className="text-xs mt-1 text-emerald-700">
                    Mejor: {rec.best}/{rec.total} · {rec.attempts} {rec.attempts === 1 ? 'intento' : 'intentos'}
                  </p>
                )}
              </div>
              <div className="flex gap-2 shrink-0">
                <Link
                  to={`${base}?mode=practice`}
                  className="flex-1 sm:flex-none text-center rounded-xl bg-navy-800 text-white px-4 py-2 text-sm font-medium hover:bg-navy-700"
                >
                  Práctica
                </Link>
                <Link
                  to={`${base}?mode=exam`}
                  className="flex-1 sm:flex-none text-center rounded-xl border border-navy-800 text-navy-800 px-4 py-2 text-sm font-medium hover:bg-navy-50"
                >
                  ⏱ Examen
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Theory({ blocks }: { blocks: NonNullable<import('../types').PartInfo['theory']> }) {
  const [open, setOpen] = useState(true)
  return (
    <section className="mt-6 rounded-2xl bg-white border border-navy-100">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-navy-900">📘 Teoría</span>
        <span className="text-slate-400">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="px-4 sm:px-5 pb-5 grid gap-6">
          {blocks.map((b, i) => (
            <div key={i}>
              <h3 className="font-semibold text-navy-800 mb-2">{b.title}</h3>
              <ul className="space-y-1.5 text-sm text-slate-700">
                {b.points.map((t, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-navy-500" aria-hidden>•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              {b.examples && (
                <div className="mt-3 grid gap-1.5">
                  {b.examples.map((e, j) => (
                    <div
                      key={j}
                      className={`rounded-lg px-3 py-2 text-sm ${e.wrong ? 'bg-red-50' : 'bg-navy-50'}`}
                    >
                      <p className={`font-serif ${e.wrong ? 'text-red-800 line-through decoration-red-400' : 'text-navy-900'}`}>
                        {e.wrong ? '✗ ' : ''}{e.en}
                      </p>
                      {e.es && <p className="text-slate-500 text-xs mt-0.5">{e.es}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
