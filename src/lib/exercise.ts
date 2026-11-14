import type { Exercise } from '../types'
import { isCorrect } from './answers'

export const LETTERS = ['A', 'B', 'C', 'D'] as const

export function questionCount(ex: Exercise): number {
  return ex.kind === 'kwt' ? ex.items.length : ex.gaps.length
}

/** Respuesta correcta para mostrar al usuario. */
export function correctDisplay(ex: Exercise, i: number): string {
  switch (ex.kind) {
    case 'mc-cloze': {
      const g = ex.gaps[i]
      return `${LETTERS[g.answer]}) ${g.options[g.answer]}`
    }
    case 'open-cloze':
    case 'word-formation':
      return ex.gaps[i].answers.join(' / ')
    case 'kwt':
      return ex.items[i].answers.join(' / ')
  }
}

/** Respuesta del usuario formateada para mostrar. */
export function userDisplay(ex: Exercise, i: number, value: string): string {
  if (!value.trim()) return '(en blanco)'
  if (ex.kind === 'mc-cloze') {
    const idx = Number(value)
    return `${LETTERS[idx]}) ${ex.gaps[i].options[idx]}`
  }
  return value
}

export function explanationFor(ex: Exercise, i: number): string {
  return ex.kind === 'kwt' ? ex.items[i].explanation : ex.gaps[i].explanation
}

export function checkOne(ex: Exercise, i: number, value: string): boolean {
  switch (ex.kind) {
    case 'mc-cloze':
      return value !== '' && Number(value) === ex.gaps[i].answer
    case 'open-cloze':
    case 'word-formation':
      return isCorrect(value, ex.gaps[i].answers)
    case 'kwt':
      return isCorrect(value, ex.items[i].answers)
  }
}

export function checkAll(ex: Exercise, answers: string[]): boolean[] {
  return Array.from({ length: questionCount(ex) }, (_, i) => checkOne(ex, i, answers[i] ?? ''))
}

/** Divide un texto con huecos {n} en trozos de texto y números de hueco (0-based). */
export function splitGaps(text: string): (string | number)[] {
  const out: (string | number)[] = []
  const re = /\{(\d+)\}/g
  let last = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index))
    out.push(Number(m[1]) - 1)
    last = m.index + m[0].length
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}
