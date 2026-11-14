import type { WritingModel } from '../types'
import { countWords } from '../lib/writing'

export function WritingModelView({ model }: { model: WritingModel }) {
  return (
    <div className="grid gap-3">
      <details className="rounded-xl bg-navy-50 p-4 text-sm">
        <summary className="cursor-pointer font-medium text-navy-800">Ver el enunciado del modelo</summary>
        <p className="mt-2 whitespace-pre-line font-serif">{model.prompt}</p>
      </details>
      <div className="rounded-2xl bg-white border border-navy-100 p-5 sm:p-6">
        <p className="font-serif text-[1.05rem] leading-7 whitespace-pre-line">{model.text}</p>
        <p className="mt-3 text-xs text-slate-400">{countWords(model.text)} palabras</p>
      </div>
      <div className="rounded-2xl bg-emerald-50 p-5">
        <p className="font-semibold text-emerald-900 mb-2">¿Por qué funciona?</p>
        <ul className="space-y-1.5 text-sm text-slate-700">
          {model.comments.map((c, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-emerald-600" aria-hidden>
                ✓
              </span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
