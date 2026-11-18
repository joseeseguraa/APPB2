import { Link } from 'react-router-dom'
import { findPart } from '../data/sections'
import { getLevel, levelInfo } from '../lib/level'
import { loadProgress, type ProgressMap } from '../lib/progress'
import { Meter, PageHeader, Panel } from '../components/ui'
import type { PartInfo } from '../types'

/** % de aciertos en una parte (último intento de cada ejercicio). */
export function partStats(part: PartInfo | undefined, progress: ProgressMap) {
  if (!part) return { done: 0, total: 0, pct: null as number | null }
  const recs = part.exercises.map((e) => progress[e.id]).filter(Boolean)
  const s = recs.reduce((a, r) => a + r.score, 0)
  const t = recs.reduce((a, r) => a + r.total, 0)
  return { done: recs.length, total: part.exercises.length, pct: t ? Math.round((s / t) * 100) : null }
}

interface Cell {
  n: number
  name: string
  to?: string
  part?: PartInfo
}

type Paper = { name: string; time: string; weight: string; about: string; cells: Cell[] }

function papers(): Paper[] {
  const c1 = getLevel() === 'c1'
  const rue: Cell[] = [
    { n: 1, name: 'Multiple-choice cloze', to: '/s/use-of-english/part-1', part: findPart('use-of-english', 'part-1') },
    { n: 2, name: 'Open cloze', to: '/s/use-of-english/part-2', part: findPart('use-of-english', 'part-2') },
    { n: 3, name: 'Word formation', to: '/s/use-of-english/part-3', part: findPart('use-of-english', 'part-3') },
    { n: 4, name: 'Key word transformation', to: '/s/use-of-english/part-4', part: findPart('use-of-english', 'part-4') },
    { n: 5, name: 'Multiple choice', to: '/s/reading/part-5', part: findPart('reading', 'part-5') },
    ...(c1
      ? [
          { n: 6, name: 'Cross-text multiple matching', to: '/s/reading/part-6', part: findPart('reading', 'part-6') },
          { n: 7, name: 'Gapped text', to: '/s/reading/part-7', part: findPart('reading', 'part-7') },
          { n: 8, name: 'Multiple matching', to: '/s/reading/part-8', part: findPart('reading', 'part-8') },
        ]
      : [
          { n: 6, name: 'Gapped text', to: '/s/reading/part-6', part: findPart('reading', 'part-6') },
          { n: 7, name: 'Multiple matching', to: '/s/reading/part-7', part: findPart('reading', 'part-7') },
        ]),
  ]
  const essay = findPart('writing', 'essay')
  return [
    {
      name: 'Reading & Use of English',
      time: c1 ? '1 h 30 min' : '1 h 15 min',
      weight: '40% de la nota',
      about: c1
        ? '8 partes y 56 preguntas. La Part 1 y las Parts 5–8 cuentan para Reading; las Parts 2–4, para Use of English.'
        : '7 partes y 52 preguntas. Las cuatro primeras evalúan gramática y vocabulario; las tres últimas, comprensión lectora.',
      cells: rue,
    },
    {
      name: 'Writing',
      time: c1 ? '1 h 30 min' : '1 h 20 min',
      weight: '20% de la nota',
      about: c1
        ? 'Dos textos de 220 a 260 palabras: un essay obligatorio y una tarea a elegir entre tres (email o carta, proposal, report o review).'
        : 'Dos textos de 140 a 190 palabras: un essay obligatorio y una tarea a elegir entre tres.',
      cells: [
        { n: 1, name: 'Essay', to: essay ? '/s/writing/essay' : undefined, part: essay },
        { n: 2, name: c1 ? 'Email, carta, proposal, report o review' : 'Article, email, carta, report o review', to: essay ? '/s/writing' : undefined },
      ],
    },
    {
      name: 'Listening',
      time: 'unos 40 min',
      weight: '20% de la nota',
      about: '4 partes y 30 preguntas. Cada grabación se escucha dos veces.',
      cells: (c1
        ? ['Extractos cortos', 'Completar frases', 'Opción múltiple', 'Emparejar']
        : ['Extractos cortos', 'Completar frases', 'Emparejar', 'Opción múltiple']
      ).map((name, i) => ({ n: i + 1, name })),
    },
    {
      name: 'Speaking',
      time: c1 ? '15 min' : '14 min',
      weight: '20% de la nota',
      about: 'En pareja con otro candidato y ante dos examinadores.',
      cells: ['Entrevista', 'Comparar fotos', 'Tarea en pareja', 'Discusión'].map((name, i) => ({ n: i + 1, name })),
    },
  ]
}

function ExamCell({ cell, progress }: { cell: Cell; progress: ProgressMap }) {
  const st = partStats(cell.part, progress)
  const inner = (
    <>
      <span className={`text-sm font-bold tabular-nums ${cell.to ? 'text-print' : 'text-ink-3'}`}>Part {cell.n}</span>
      <span className={`block text-[0.9rem] leading-snug mt-0.5 ${cell.to ? 'text-ink' : 'text-ink-3'}`}>{cell.name}</span>
      {cell.part && (
        <span className="block mt-3">
          <Meter value={st.pct ?? 0} tone={st.pct === null ? 'ink' : 'score'} />
          <span className="block mt-1 text-xs text-ink-3 tabular-nums">
            {st.pct === null ? `${st.total} ${st.total === 1 ? "ejercicio" : "ejercicios"}` : `${st.pct}% de aciertos`}
          </span>
        </span>
      )}
      {!cell.to && <span className="block mt-3 text-xs text-ink-3">Próximamente</span>}
    </>
  )
  return cell.to ? (
    <Link to={cell.to} className="block p-3.5 rounded-md hover:bg-bg transition-colors">
      {inner}
    </Link>
  ) : (
    <div className="p-3.5">{inner}</div>
  )
}

export default function ExamPage() {
  const progress = loadProgress()
  const PAPERS = papers()
  const c1 = getLevel() === 'c1'
  return (
    <div className="max-w-5xl">
      <PageHeader
        icon="exam"
        title={`El examen ${levelInfo().exam}`}
        lead={`Cuatro pruebas y unas ${c1 ? '4 horas' : '3 horas y media'} en total. Entra en cualquier parte para ver su guía y practicarla.`}
      />
      <div className="grid gap-5">
        {PAPERS.map((paper) => (
          <Panel key={paper.name}>
            <div className="px-5 pt-5 pb-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h2 className="text-lg font-bold">{paper.name}</h2>
              <p className="text-sm text-ink-3 tabular-nums">
                {paper.time}, {paper.weight}
              </p>
              <p className="basis-full text-[0.95rem] text-ink-2 leading-relaxed">{paper.about}</p>
            </div>
            <div className={`grid grid-cols-2 sm:grid-cols-4 ${paper.cells.length > 7 ? 'lg:grid-cols-8' : 'lg:grid-cols-7'} gap-0.5 px-2 pb-2 border-t border-line pt-2`}>
              {paper.cells.map((c) => (
                <ExamCell key={c.n} cell={c} progress={progress} />
              ))}
            </div>
          </Panel>
        ))}
      </div>
      <p className="mt-6 text-sm text-ink-3 max-w-2xl">
        {c1
          ? 'Cada prueba se puntúa en la escala de Cambridge (de 142 a 210). Para aprobar el C1 hace falta una media de 180; con 200 o más obtienes un C2.'
          : 'Cada prueba se puntúa en la escala de Cambridge (de 122 a 190). Para aprobar el B2 hace falta una media de 160.'}
      </p>
    </div>
  )
}
