import type { WritingModel } from '../types'
import { countWords } from '../lib/writing'
import { Panel } from './ui'

export function WritingModelView({ model }: { model: WritingModel }) {
  return (
    <div className="grid gap-5">
      <details className="text-sm">
        <summary className="cursor-pointer font-semibold text-ink-2 hover:text-ink">Ver el enunciado de este modelo</summary>
        <p className="mt-3 passage !text-[1rem] whitespace-pre-line border-l-2 border-line-strong pl-4">{model.prompt}</p>
      </details>
      <Panel className="p-6 sm:p-9">
        <p className="passage whitespace-pre-line">{model.text}</p>
        <p className="mt-4 text-xs text-ink-3 tabular-nums">{countWords(model.text)} palabras</p>
      </Panel>
      <section>
        <h3 className="font-bold mb-3">Por qué funciona</h3>
        <ul className="space-y-2.5">
          {model.comments.map((c, i) => (
            <li key={i} className="flex gap-3 text-[0.98rem] leading-relaxed">
              <svg viewBox="0 0 20 20" className="w-5 h-5 shrink-0 mt-0.5 text-ok" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path d="m5 10.5 3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
