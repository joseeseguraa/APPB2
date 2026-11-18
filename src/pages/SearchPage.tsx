import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { currentSections } from '../data/sections'
import { currentDecks } from '../data/flashcards'
import { PageHeader, Panel } from '../components/ui'

interface Hit {
  to: string
  where: string
  title: string
  text: string
}

/** Quita tildes y pasa a minúsculas para buscar sin preocuparse de la escritura. */
const fold = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

function buildIndex(): Hit[] {
  const hits: Hit[] = []
  for (const s of currentSections()) {
    for (const p of s.parts) {
      const to = `/s/${s.slug}/${p.slug}`
      const where = `${s.name}: ${p.name}`
      hits.push({ to, where, title: p.name, text: [p.nameEs, p.summary].filter(Boolean).join('. ') })
      for (const b of p.theory ?? []) {
        for (const pt of b.points) hits.push({ to, where, title: b.title, text: pt })
        for (const ex of b.examples ?? []) if (!ex.wrong) hits.push({ to, where, title: b.title, text: ex.es ? `${ex.en} (${ex.es})` : ex.en })
      }
      if (p.guide) for (const pt of [...p.guide.strategy, ...(p.guide.pitfalls ?? [])]) hits.push({ to, where, title: 'Guía de la parte', text: pt })
    }
  }
  for (const d of currentDecks())
    for (const c of d.cards) hits.push({ to: `/tarjetas/${d.slug}`, where: `Tarjetas: ${d.name}`, title: c.en, text: c.ex ? `${c.es}. ${c.ex}` : c.es })
  return hits
}

function Highlight({ text, q }: { text: string; q: string }) {
  const i = fold(text).indexOf(fold(q))
  if (!q || i < 0) return <>{text}</>
  return (
    <>
      {text.slice(0, i)}
      <mark className="bg-print-soft text-ink rounded-sm px-0.5">{text.slice(i, i + q.length)}</mark>
      {text.slice(i + q.length)}
    </>
  )
}

const SUGGESTIONS = ['used to', 'inversion', 'make', 'although', 'phrasal', 'wish', 'look', 'preposition']

export default function SearchPage() {
  const index = useMemo(buildIndex, [])
  const [q, setQ] = useState('')
  const query = q.trim()
  const results = useMemo(() => {
    if (query.length < 2) return []
    const f = fold(query)
    return index.filter((h) => fold(`${h.title} ${h.text}`).includes(f)).slice(0, 60)
  }, [index, query])

  return (
    <div className="max-w-3xl">
      <PageHeader icon="search" title="Buscar" lead="Busca en la teoría de Grammar y Vocabulary, en las guías de cada parte y en las tarjetas. Sirve en inglés y en español." />
      <input
        type="search"
        autoFocus
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Por ejemplo: used to, sin embargo, phrasal verbs con up"
        aria-label="Buscar"
        className="w-full h-12 rounded-lg border border-line-strong bg-paper px-4 text-[1.05rem] focus:outline-none focus:border-print"
      />
      {query.length < 2 ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {SUGGESTIONS.map((s) => (
            <button key={s} onClick={() => setQ(s)} className="rounded-full border border-line px-3 py-1 text-sm hover:border-ink">
              {s}
            </button>
          ))}
        </div>
      ) : (
        <>
          <p className="mt-4 mb-2 text-sm text-ink-3" aria-live="polite">
            {results.length === 0 ? 'No hay resultados. Prueba con otra palabra.' : `${results.length}${results.length === 60 ? '+' : ''} resultados`}
          </p>
          {results.length > 0 && (
            <Panel className="divide-y divide-line">
              {results.map((h, i) => (
                <Link key={i} to={h.to} className="block px-5 py-3.5 hover:bg-bg/60">
                  <span className="block text-xs text-ink-3">{h.where}</span>
                  <span className="block font-semibold mt-0.5">
                    <Highlight text={h.title} q={query} />
                  </span>
                  <span className="block text-[0.95rem] text-ink-2 mt-0.5">
                    <Highlight text={h.text} q={query} />
                  </span>
                </Link>
              ))}
            </Panel>
          )}
        </>
      )}
    </div>
  )
}
