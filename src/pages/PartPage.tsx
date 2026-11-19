import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { findPart, findSection } from '../data/sections'
import { loadProgress } from '../lib/progress'
import { BackLink } from '../components/Layout'
import { btn, PageHeader, Panel, Tabs } from '../components/ui'
import { WritingModelView } from '../components/WritingModelView'
import { Guide, Theory } from '../components/TheoryView'
import NotFound from './NotFound'

type Tab = 'exercises' | 'guide' | 'model'

export default function PartPage() {
  const { section: sSlug, part: pSlug } = useParams()
  const section = findSection(sSlug)
  const part = findPart(sSlug, pSlug)
  const [tab, setTab] = useState<Tab>('exercises')
  if (!section || !part) return <NotFound />
  const progress = loadProgress()
  const isWriting = part.exercises[0]?.kind === 'writing'

  const tabs: { value: Tab; label: string }[] = [
    { value: 'exercises', label: isWriting ? `Tareas (${part.exercises.length})` : `Ejercicios (${part.exercises.length})` },
    { value: 'guide', label: part.theory ? 'Teoría' : 'Cómo funciona' },
  ]
  if (part.model) tabs.push({ value: 'model', label: 'Modelo comentado' })

  return (
    <div className="max-w-4xl">
      <BackLink to={`/s/${section.slug}`} label={section.name} />
      <PageHeader
        number={part.number}
        title={part.number ? part.name : part.name}
        lead={
          part.number ? (
            <>
              {part.nameEs}. {part.questions} preguntas, unos {part.suggestedMinutes} minutos en el examen.
            </>
          ) : (
            part.nameEs
          )
        }
      />

      <Tabs value={tab} onChange={setTab} items={tabs} />

      {tab === 'exercises' && (
        <>
          {!part.number && part.theory && (
            <p className="mb-4 text-sm text-ink-2">
              ¿Primera vez con este tema? Lee antes la{' '}
              <button onClick={() => setTab('guide')} className="font-semibold text-print underline underline-offset-2">
                teoría
              </button>
              .
            </p>
          )}
          <Panel className="divide-y divide-line">
            {part.exercises.map((ex, i) => {
              const rec = progress[ex.id]
              const base = `/s/${section.slug}/${part.slug}/${ex.id}`
              return (
                <div key={ex.id} className="px-4 sm:px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex gap-4 flex-1 min-w-0">
                    <span className="shrink-0 w-6 pt-0.5 text-ink-3 font-semibold tabular-nums">{i + 1}</span>
                    <div className="min-w-0">
                      <h3 className="font-bold leading-snug">{ex.title}</h3>
                      <p className="text-sm text-ink-2">{ex.focus}</p>
                      {rec && (
                        <p className="text-xs mt-1 text-ok font-medium tabular-nums">
                          {isWriting
                            ? `Autoevaluación: ${rec.best}/${rec.total}`
                            : `Mejor resultado: ${rec.best}/${rec.total}, ${rec.attempts} ${rec.attempts === 1 ? 'intento' : 'intentos'}`}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0 pl-10 sm:pl-0">
                    <Link to={`${base}?mode=practice`} className={btn('primary', 'sm')}>
                      {isWriting ? 'Escribir' : 'Practicar'}
                    </Link>
                    <Link to={`${base}?mode=exam`} className={btn('secondary', 'sm')}>
                      Con tiempo
                    </Link>
                  </div>
                </div>
              )
            })}
          </Panel>
        </>
      )}

      {tab === 'guide' && (part.theory ? <Theory blocks={part.theory} /> : part.guide && <Guide guide={part.guide} />)}

      {tab === 'model' && part.model && (
        <div className="max-w-3xl">
          <WritingModelView model={part.model} />
        </div>
      )}
    </div>
  )
}
