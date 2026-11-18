import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { decks, findDeck, type FlashCard } from '../data/flashcards'
import { cardKey, deckStats, rateCard, sessionCards, type Rating } from '../lib/flashcards'
import { BackLink } from '../components/Layout'
import { btn, Meter, PageHeader, Panel } from '../components/ui'
import NotFound from './NotFound'

/* ---------- Lista de mazos ---------- */

export function FlashcardsHome() {
  const all = decks.map((d) => ({ d, st: deckStats(d) }))
  const due = all.reduce((a, x) => a + x.st.due, 0)
  return (
    <div className="max-w-4xl">
      <PageHeader
        icon="cards"
        title="Tarjetas de vocabulario"
        lead="Repasa vocabulario clave con tarjetas. Las que te cuestan vuelven pronto; las que te sabes, cada vez más tarde."
        aside={
          due > 0 ? (
            <p className="text-sm text-ink-2">
              <b className="text-ink text-lg tabular-nums">{due}</b> para repasar hoy
            </p>
          ) : undefined
        }
      />
      <Panel className="divide-y divide-line">
        {all.map(({ d, st }) => (
          <Link key={d.slug} to={`/tarjetas/${d.slug}`} className="flex items-center gap-4 px-4 sm:px-5 py-4 hover:bg-bg/60 transition-colors">
            <div className="flex-1 min-w-0">
              <h2 className="font-bold leading-snug">{d.name}</h2>
              <p className="text-sm text-ink-2 mt-0.5">{d.description}</p>
              <p className="text-xs text-ink-3 mt-1 tabular-nums">
                {st.total} tarjetas, {st.learned} aprendidas
                {st.due > 0 && <b className="text-print">, {st.due} para hoy</b>}
              </p>
            </div>
            <div className="w-24 sm:w-32 shrink-0">
              <Meter value={(st.learned / st.total) * 100} />
            </div>
          </Link>
        ))}
      </Panel>
      <p className="mt-4 text-sm text-ink-3 max-w-2xl">
        Cada sesión incluye las tarjetas que toca repasar y hasta 10 nuevas. Una tarjeta cuenta como aprendida cuando la has acertado
        varias veces seguidas en días distintos.
      </p>
    </div>
  )
}

/* ---------- Sesión de estudio ---------- */

export function FlashcardsSession() {
  const deck = findDeck(useParams().deck)
  if (!deck) return <NotFound />
  return <Session key={deck.slug} deckSlug={deck.slug} />
}

function Session({ deckSlug }: { deckSlug: string }) {
  const deck = findDeck(deckSlug)!
  const [queue, setQueue] = useState<FlashCard[]>(() => sessionCards(deck))
  const [shown, setShown] = useState(false)
  const [reverse, setReverse] = useState(false)
  const [done, setDone] = useState({ good: 0, again: 0 })
  const card = queue[0]

  const rate = (r: Rating) => {
    if (!card) return
    rateCard(cardKey(deck.slug, card.en), r)
    setDone((d) => ({ good: d.good + (r === 'again' ? 0 : 1), again: d.again + (r === 'again' ? 1 : 0) }))
    setShown(false)
    // "Otra vez": vuelve a salir unas tarjetas más tarde en esta misma sesión
    setQueue((q) => {
      const rest = q.slice(1)
      if (r !== 'again') return rest
      const pos = Math.min(rest.length, 3)
      return [...rest.slice(0, pos), q[0], ...rest.slice(pos)]
    })
  }

  // Atajos de teclado: espacio para girar, 1/2/3 para valorar
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === 'INPUT') return
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        setShown(true)
      } else if (shown && e.key === '1') rate('again')
      else if (shown && e.key === '2') rate('good')
      else if (shown && e.key === '3') rate('easy')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const front = card ? (reverse ? card.es : card.en) : ''
  const back = card ? (reverse ? card.en : card.es) : ''

  return (
    <div className="max-w-2xl">
      <BackLink to="/tarjetas" label="Tarjetas" />
      <header className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-[1.75rem] leading-tight font-bold tracking-[-0.02em]">{deck.name}</h1>
          <p className="text-sm text-ink-2 mt-1 tabular-nums">
            {queue.length} {queue.length === 1 ? 'tarjeta pendiente' : 'tarjetas pendientes'} en esta sesión
          </p>
        </div>
        <button onClick={() => setReverse((r) => !r)} className={btn('secondary', 'sm')} aria-pressed={reverse}>
          {reverse ? 'Español → inglés' : 'Inglés → español'}
        </button>
      </header>

      {!card ? (
        <Panel className="p-6 sm:p-8">
          <p className="text-lg font-bold">Sesión terminada</p>
          <p className="text-ink-2 mt-1">
            {done.good + done.again === 0
              ? 'No hay tarjetas para repasar ahora mismo en este mazo. Vuelve mañana o prueba otro mazo.'
              : `Has repasado ${done.good} ${done.good === 1 ? 'tarjeta' : 'tarjetas'}. Las que te costaron volverán a salir pronto.`}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link to="/tarjetas" className={btn('primary', 'sm')}>
              Volver a los mazos
            </Link>
            <button onClick={() => setQueue(deck.cards.slice().sort(() => Math.random() - 0.5).slice(0, 15))} className={btn('secondary', 'sm')}>
              Repasar 15 al azar
            </button>
          </div>
        </Panel>
      ) : (
        <>
          <button
            onClick={() => setShown(true)}
            className="w-full text-left"
            aria-label={shown ? 'Tarjeta girada' : 'Girar la tarjeta'}
          >
            <Panel className={`p-6 sm:p-10 min-h-[16rem] flex flex-col justify-center transition-colors ${shown ? '' : 'hover:border-line-strong'}`}>
              <p className={`text-[1.6rem] sm:text-[1.9rem] leading-tight font-bold tracking-[-0.02em] ${reverse ? '' : 'font-serif'}`}>{front}</p>
              {shown ? (
                <div className="mt-6 pt-5 border-t border-line">
                  <p className={`text-lg leading-snug ${reverse ? 'font-serif font-bold' : ''}`}>{back}</p>
                  {card.ex && <p className="passage !text-[1.02rem] text-ink-2 mt-3 italic">{card.ex}</p>}
                </div>
              ) : (
                <p className="mt-6 text-sm text-ink-3">Piensa la respuesta y toca la tarjeta (o pulsa espacio) para girarla.</p>
              )}
            </Panel>
          </button>

          {shown && (
            <div className="mt-4 grid grid-cols-3 gap-2">
              <button onClick={() => rate('again')} className={`${btn('danger')} !h-14 flex-col !gap-0`}>
                Otra vez <span className="text-xs font-normal opacity-70">No me la sabía (1)</span>
              </button>
              <button onClick={() => rate('good')} className={`${btn('secondary')} !h-14 flex-col !gap-0`}>
                Bien <span className="text-xs font-normal text-ink-3">Me costó un poco (2)</span>
              </button>
              <button onClick={() => rate('easy')} className={`${btn('primary')} !h-14 flex-col !gap-0`}>
                Fácil <span className="text-xs font-normal opacity-70">La sabía (3)</span>
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
