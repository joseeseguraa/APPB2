import { useMemo, useState } from 'react'
import { dailyCards } from '../lib/cards'
import { addMistake, dateKey, loadDaily, saveDaily } from '../lib/review'
import QuizSession from '../components/QuizSession'
import { btn, PageHeader, Panel } from '../components/ui'

export default function DailyPage() {
  const today = dateKey()
  const cards = useMemo(() => dailyCards(today), [today])
  const [playing, setPlaying] = useState(false)
  const [, refresh] = useState(0)
  const results = loadDaily()
  const todays = results[today]

  // últimos 7 días
  const week = Array.from({ length: 7 }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - (6 - i))
    const k = dateKey(d)
    return { k, d, r: results[k] }
  })

  if (playing) {
    return (
      <div>
        <PageHeader icon="daily" title="Reto diario" />
        <QuizSession
          cards={cards}
          allowSave
          onAnswer={(c, ok) => !ok && addMistake(c.exId, c.q)}
          onFinish={(score) => {
            // se guarda el primer intento del día (o una mejora)
            if (!todays || score > todays.score) saveDaily(today, score, cards.length)
          }}
          endExtra={
            <div className="mt-4 text-ink-2 space-y-3">
              <p>Mañana tendrás 10 preguntas nuevas.</p>
              <button
                onClick={() => {
                  setPlaying(false)
                  refresh((n) => n + 1)
                }}
                className={btn('primary', 'sm')}
              >
                Volver al reto
              </button>
            </div>
          }
        />
      </div>
    )
  }

  return (
    <div className="max-w-4xl">
      <PageHeader
        icon="daily"
        title="Reto diario"
        lead="Diez preguntas variadas de Use of English, Grammar y Vocabulary. Cada día son distintas, y son las mismas para todo el que use la app ese día."
      />
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] items-start">
        <Panel className="p-6">
          {todays ? (
            <>
              <p className="text-sm text-ink-2">Tu resultado de hoy</p>
              <p className="text-[2.5rem] leading-none font-bold tabular-nums tracking-[-0.03em] mt-1">
                {todays.score}
                <span className="text-ink-3 text-2xl font-semibold">/{todays.total}</span>
              </p>
              <p className="text-ink-2 mt-2">Vuelve mañana para un reto nuevo.</p>
              <button onClick={() => setPlaying(true)} className={`${btn('secondary', 'sm')} mt-5`}>
                Repetir el reto de hoy
              </button>
            </>
          ) : (
            <>
              <p className="font-bold text-lg">El reto de hoy está listo</p>
              <p className="text-ink-2 mt-1">Unos 5 minutos. Las preguntas que falles se guardarán en Mis errores.</p>
              <button onClick={() => setPlaying(true)} className={`${btn('primary')} mt-5`}>
                Empezar el reto
              </button>
            </>
          )}
        </Panel>

        <aside>
          <h2 className="font-bold mb-3">Esta semana</h2>
          <div className="grid grid-cols-7 gap-1.5">
            {week.map(({ k, d, r }) => (
              <div key={k} className="text-center">
                <div
                  className={`aspect-square rounded-md grid place-items-center text-xs font-bold tabular-nums ${
                    r ? (r.score >= 7 ? 'bg-ok text-on-ink' : r.score >= 5 ? 'bg-warn text-on-ink' : 'bg-bad text-on-ink') : 'bg-line text-ink-3'
                  } ${k === today ? 'ring-2 ring-offset-2 ring-ink-3' : ''}`}
                  title={r ? `${r.score}/${r.total}` : 'Sin hacer'}
                >
                  {r ? r.score : ''}
                </div>
                <p className="text-[0.7rem] text-ink-3 mt-1">{d.toLocaleDateString('es-ES', { weekday: 'short' }).replace('.', '')}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  )
}
