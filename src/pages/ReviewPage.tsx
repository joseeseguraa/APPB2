import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { cardFor, type Card } from '../lib/cards'
import { answerReview, dueKeys, INTERVALS, loadReview, parseKey } from '../lib/review'
import QuizSession from '../components/QuizSession'
import { btn, PageHeader, Panel } from '../components/ui'

function toCards(keys: string[]): Card[] {
  return keys.map((k) => {
    const { exId, q } = parseKey(k)
    return cardFor(exId, q)
  }).filter((c): c is Card => c !== null)
}

export default function ReviewPage() {
  const [session, setSession] = useState<Card[] | null>(null)
  const [mastered, setMastered] = useState(0)
  const map = useMemo(() => loadReview(), [session])
  const all = Object.keys(map)
  const due = dueKeys(map)
  const next = Object.values(map).map((i) => i.due).sort()[0]
  const byBox = INTERVALS.map((_, b) => all.filter((k) => map[k].box === b).length)

  if (session) {
    return (
      <div>
        <PageHeader icon="review" title="Mis errores" lead="Repasa las preguntas que fallaste. Si aciertas, volverán más adelante; si fallas, mañana." />
        <QuizSession
          cards={session}
          onAnswer={(c, ok) => {
            if (answerReview(c.key, ok)) setMastered((m) => m + 1)
          }}
          endExtra={
            <div className="mt-4 text-ink-2 space-y-3">
              {mastered > 0 && (
                <p>
                  Has dominado <b className="text-ok">{mastered}</b> {mastered === 1 ? 'pregunta' : 'preguntas'}: ya no volverán a salir.
                </p>
              )}
              <button onClick={() => { setSession(null); setMastered(0) }} className={btn('primary', 'sm')}>
                Volver a Mis errores
              </button>
            </div>
          }
        />
      </div>
    )
  }

  const fmt = (d: string) => new Date(d + 'T12:00:00').toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })

  return (
    <div className="max-w-4xl">
      <PageHeader
        icon="review"
        title="Mis errores"
        lead="Las preguntas que fallas en los ejercicios se guardan aquí y te vuelven a salir unos días después hasta que las domines."
      />

      {all.length === 0 ? (
        <Panel className="p-6 max-w-2xl">
          <p className="font-bold">No tienes errores pendientes</p>
          <p className="text-ink-2 mt-1">
            Cuando falles una pregunta en Use of English, Grammar, Vocabulary o Reading (Part 5), aparecerá aquí para que la
            repases en el momento justo.
          </p>
          <Link to="/s/use-of-english" className={`${btn('primary', 'sm')} mt-4`}>
            Practicar Use of English
          </Link>
        </Panel>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] items-start">
          <Panel className="p-6">
            {due.length > 0 ? (
              <>
                <p className="text-[2.5rem] leading-none font-bold tabular-nums tracking-[-0.03em]">{due.length}</p>
                <p className="text-ink-2 mt-1">{due.length === 1 ? 'pregunta para repasar hoy' : 'preguntas para repasar hoy'}</p>
                <button onClick={() => setSession(toCards(due.slice(0, 20)))} className={`${btn('primary')} mt-5`}>
                  {due.length > 20 ? 'Repasar 20 ahora' : 'Empezar el repaso'}
                </button>
              </>
            ) : (
              <>
                <p className="font-bold text-lg">Por hoy has terminado</p>
                <p className="text-ink-2 mt-1">El próximo repaso toca el {fmt(next)}.</p>
                <button onClick={() => setSession(toCards(all.slice(0, 20)))} className={`${btn('secondary', 'sm')} mt-5`}>
                  Repasar igualmente
                </button>
              </>
            )}
          </Panel>

          <aside className="text-[0.95rem] leading-relaxed text-ink-2">
            <h2 className="font-bold text-ink mb-2">Cómo funciona</h2>
            <p>
              Cada pregunta pasa por {INTERVALS.length} niveles. Si aciertas, sube de nivel y vuelve más tarde ({INTERVALS.join(', ')}{' '}
              días). Si fallas, vuelve al principio. Al superar el último nivel, sale de la lista.
            </p>
            <div className="mt-4 grid gap-2">
              {byBox.map((n, b) => (
                <div key={b} className="flex items-center gap-3 text-sm">
                  <span className="w-20 shrink-0">Nivel {b + 1}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-line overflow-hidden">
                    <div className="h-full bg-print rounded-full" style={{ width: `${all.length ? (n / all.length) * 100 : 0}%` }} />
                  </div>
                  <span className="w-6 text-right tabular-nums">{n}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}
