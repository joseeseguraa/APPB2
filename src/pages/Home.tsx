import { Link } from 'react-router-dom'
import { findPart, findSection, sections } from '../data/sections'
import { loadDays, loadProgress, streak, type ProgressMap } from '../lib/progress'
import { btn, Meter, Panel } from '../components/ui'
import type { PartInfo } from '../types'

/** % de aciertos en una parte (último intento de cada ejercicio) y nº de ejercicios hechos. */
function partStats(part: PartInfo | undefined, progress: ProgressMap) {
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

const PAPERS: { name: string; time: string; cells: Cell[] }[] = [
  {
    name: 'Reading & Use of English',
    time: '1 h 15 min',
    cells: [
      { n: 1, name: 'Multiple-choice cloze', to: '/s/use-of-english/part-1', part: findPart('use-of-english', 'part-1') },
      { n: 2, name: 'Open cloze', to: '/s/use-of-english/part-2', part: findPart('use-of-english', 'part-2') },
      { n: 3, name: 'Word formation', to: '/s/use-of-english/part-3', part: findPart('use-of-english', 'part-3') },
      { n: 4, name: 'Key word transformation', to: '/s/use-of-english/part-4', part: findPart('use-of-english', 'part-4') },
      { n: 5, name: 'Multiple choice', to: '/s/reading/part-5', part: findPart('reading', 'part-5') },
      { n: 6, name: 'Gapped text', to: '/s/reading/part-6', part: findPart('reading', 'part-6') },
      { n: 7, name: 'Multiple matching', to: '/s/reading/part-7', part: findPart('reading', 'part-7') },
    ],
  },
  {
    name: 'Writing',
    time: '1 h 20 min',
    cells: [
      { n: 1, name: 'Essay', to: '/s/writing/essay', part: findPart('writing', 'essay') },
      { n: 2, name: 'Article, email, report o review', to: '/s/writing' },
    ],
  },
  {
    name: 'Listening',
    time: '40 min',
    cells: ['Extractos cortos', 'Completar frases', 'Emparejar', 'Opción múltiple'].map((name, i) => ({ n: i + 1, name })),
  },
  {
    name: 'Speaking',
    time: '14 min',
    cells: ['Entrevista', 'Fotos', 'Tarea en pareja', 'Discusión'].map((name, i) => ({ n: i + 1, name })),
  },
]

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
            {st.pct === null ? `${st.total} ejercicios` : `${st.pct}% de aciertos`}
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

export default function Home() {
  const progress = loadProgress()
  const days = loadDays()
  const st = streak(days)
  const doneCount = Object.keys(progress).length

  // último ejercicio trabajado, para "Continuar"
  const last = Object.entries(progress).sort((a, b) => b[1].lastAt.localeCompare(a[1].lastAt))[0]
  let lastLink: { to: string; title: string; where: string } | null = null
  if (last) {
    for (const s of sections)
      for (const p of s.parts) {
        const e = p.exercises.find((x) => x.id === last[0])
        if (e)
          lastLink = {
            to: `/s/${s.slug}/${p.slug}/${e.id}?mode=practice`,
            title: e.title,
            where: p.number ? `${s.name}, Part ${p.number}` : `${s.name}, ${p.name}`,
          }
      }
  }

  const grammar = findSection('grammar')!
  const vocab = findSection('vocabulary')!

  return (
    <div>
      <section className="mb-8 sm:mb-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-2xl">
          <h1 className="text-[2rem] sm:text-[2.6rem] leading-[1.1] font-bold tracking-[-0.025em] text-balance">
            Prepara el B2 First parte por parte
          </h1>
          <p className="mt-3 text-ink-2 text-[1.05rem] leading-relaxed">
            Cada parte del examen con su guía, ejercicios originales y la explicación en español de cada respuesta.
          </p>
        </div>
        {doneCount > 0 && (
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <div>
              <p className="text-2xl font-bold tabular-nums leading-none">{st}</p>
              <p className="text-xs text-ink-3 mt-1">{st === 1 ? 'día seguido' : 'días seguidos'}</p>
            </div>
            <div>
              <p className="text-2xl font-bold tabular-nums leading-none">{doneCount}</p>
              <p className="text-xs text-ink-3 mt-1">ejercicios hechos</p>
            </div>
            {lastLink && (
              <Link to={lastLink.to} className={btn('primary')} title={lastLink.where}>
                Continuar con {lastLink.title}
              </Link>
            )}
          </div>
        )}
      </section>

      <h2 className="text-lg font-bold mb-3">El examen</h2>
      <Panel className="divide-y divide-line mb-10">
        {PAPERS.map((paper) => (
          <div key={paper.name} className={`grid md:grid-cols-[13rem_1fr] ${paper.cells[0].to ? '' : 'pb-4 sm:pb-0'}`}>
            <div className="px-4 pt-4 md:py-5 md:border-r border-line">
              <p className="font-bold leading-snug">{paper.name}</p>
              <p className="text-sm text-ink-3">
                {paper.time}
                {!paper.cells[0].to && <span className="sm:hidden">, próximamente</span>}
              </p>
            </div>
            <div
              className={`${paper.cells[0].to ? 'grid' : 'hidden sm:grid'} grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-0.5 p-1.5 md:p-2`}
            >
              {paper.cells.map((c) => (
                <ExamCell key={c.n} cell={c} progress={progress} />
              ))}
            </div>
          </div>
        ))}
      </Panel>

      <div className="grid gap-4 lg:grid-cols-3">
        {[grammar, vocab].map((sec) => {
          const ex = sec.parts.flatMap((p) => p.exercises)
          const done = ex.filter((e) => progress[e.id]).length
          return (
            <Link key={sec.slug} to={`/s/${sec.slug}`} className="group">
              <Panel className="p-5 h-full group-hover:border-line-strong transition-colors">
                <h2 className="text-lg font-bold">{sec.name}</h2>
                <p className="text-ink-2 text-[0.95rem] mt-1 leading-relaxed">{sec.description}</p>
                <div className="mt-4 flex items-center gap-3">
                  <Meter value={(done / ex.length) * 100} className="flex-1" />
                  <span className="text-xs text-ink-3 tabular-nums shrink-0">{`${sec.parts.length} temas, ${done}/${ex.length} hechos`}</span>
                </div>
              </Panel>
            </Link>
          )
        })}
        <Panel className="p-5 !bg-ink !border-ink text-white">
          <h2 className="text-lg font-bold">Simulacro completo</h2>
          <p className="text-white/75 text-[0.95rem] mt-1 leading-relaxed">
            Reading &amp; Use of English y Writing con el tiempo oficial y una nota estimada en la escala de Cambridge.
          </p>
          <Link to="/simulacro" className={`${btn('secondary', 'sm')} mt-4 !border-transparent`}>
            Ver simulacros
          </Link>
        </Panel>
      </div>
    </div>
  )
}
