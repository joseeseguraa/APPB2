// Teoría de un tema y guía de una parte del examen (en la página de la parte y dentro de las sesiones de preguntas).
import type { PartGuide, TheoryBlock } from '../types'

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-[0.98rem] leading-relaxed text-ink">
      {items.map((t, i) => (
        <li key={i} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.7em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-print/70">
          {t}
        </li>
      ))}
    </ul>
  )
}

export function Guide({ guide }: { guide: PartGuide }) {
  return (
    <div className="grid gap-8 max-w-3xl">
      <div className="grid sm:grid-cols-2 gap-8">
        <section>
          <h2 className="font-bold mb-3">Formato</h2>
          <Bullets items={guide.format} />
        </section>
        <section>
          <h2 className="font-bold mb-3">Qué evalúa</h2>
          <Bullets items={guide.tests} />
        </section>
      </div>
      <section>
        <h2 className="font-bold mb-3">Estrategia paso a paso</h2>
        <ol className="space-y-3">
          {guide.strategy.map((t, i) => (
            <li key={i} className="flex gap-3 text-[0.98rem] leading-relaxed">
              <span className="shrink-0 grid place-items-center w-6 h-6 mt-0.5 rounded-full border-[1.5px] border-print text-print text-xs font-bold">
                {i + 1}
              </span>
              <span>{t}</span>
            </li>
          ))}
        </ol>
      </section>
      {guide.pitfalls && (
        <section className="bg-warn-soft rounded-[var(--radius-panel)] p-5">
          <h2 className="font-bold mb-3 text-warn">Errores típicos</h2>
          <Bullets items={guide.pitfalls} />
        </section>
      )}
    </div>
  )
}

export function Theory({ blocks }: { blocks: TheoryBlock[] }) {
  return (
    <div className="grid gap-10 max-w-3xl">
      {blocks.map((b, i) => (
        <section key={i}>
          <h2 className="text-xl font-bold tracking-[-0.01em] mb-3">{b.title}</h2>
          <Bullets items={b.points} />
          {b.examples && (
            <div className="mt-4 grid gap-2">
              {b.examples.map((e, j) => (
                <div key={j} className={`border-l-2 pl-4 py-1 ${e.wrong ? 'border-bad' : 'border-ok'}`}>
                  <p className={`passage !text-[1.05rem] !leading-snug ${e.wrong ? 'text-bad line-through decoration-1' : ''}`}>
                    {e.en}
                  </p>
                  {e.es && <p className="text-sm text-ink-2 mt-0.5">{e.es}</p>}
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  )
}
