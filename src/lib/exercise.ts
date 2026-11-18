import type { Exercise } from '../types'
import { isCorrect } from './answers'

export const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] as const

export function questionCount(ex: Exercise): number {
  switch (ex.kind) {
    case 'reading-mc':
    case 'matching':
      return ex.questions.length
    case 'gapped-text':
      return ex.answers.length
    case 'writing':
      return 0
    default:
      return 'items' in ex ? ex.items.length : ex.gaps.length
  }
}

/**
 * Puntos de examen por pregunta (como en el examen real):
 * Parts 1-3 y 7: 1 punto · Part 4: 2 · Parts 5 y 6: 2. Fuera del examen: 1.
 */
export function marksPerQuestion(ex: Exercise): number {
  return ex.kind === 'kwt' || ex.kind === 'reading-mc' || ex.kind === 'gapped-text' ? 2 : 1
}

/** Trocea una frase de "detectar el error" en palabras pulsables. La parte entre [ ] es un solo trozo. */
export function parseErrorSentence(sentence: string): { tokens: string[]; wrong: number } {
  const tokens: string[] = []
  let wrong = -1
  const re = /\[([^\]]+)\]/g
  let last = 0
  let m: RegExpExecArray | null
  const pushWords = (t: string) => t.split(/\s+/).filter(Boolean).forEach((w) => tokens.push(w))
  while ((m = re.exec(sentence))) {
    pushWords(sentence.slice(last, m.index))
    wrong = tokens.length
    tokens.push(m[1])
    last = m.index + m[0].length
  }
  pushWords(sentence.slice(last))
  return { tokens, wrong }
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
    case 'gap':
      return ex.items[i].answers.join(' / ')
    case 'choice':
      return ex.items[i].options[ex.items[i].answer]
    case 'error': {
      const it = ex.items[i]
      if (it.correction === null) return 'La frase es correcta'
      const { tokens, wrong } = parseErrorSentence(it.sentence)
      return `"${tokens[wrong]}" → "${it.correction}"`
    }
    case 'reading-mc': {
      const q = ex.questions[i]
      return `${LETTERS[q.answer]}) ${q.options[q.answer]}`
    }
    case 'gapped-text': {
      const s = ex.answers[i]
      return `${LETTERS[s]}) ${ex.sentences[s]}`
    }
    case 'matching':
      return `${LETTERS[ex.questions[i].answer]} (${ex.sections[ex.questions[i].answer].title})`
    case 'writing':
      return ''
  }
}

/** Respuesta del usuario formateada para mostrar. */
export function userDisplay(ex: Exercise, i: number, value: string): string {
  if (!value.trim()) return '(en blanco)'
  if (ex.kind === 'mc-cloze') {
    const idx = Number(value)
    return `${LETTERS[idx]}) ${ex.gaps[i].options[idx]}`
  }
  if (ex.kind === 'choice') return ex.items[i].options[Number(value)]
  if (ex.kind === 'reading-mc') return `${LETTERS[Number(value)]}) ${ex.questions[i].options[Number(value)]}`
  if (ex.kind === 'gapped-text') return `${LETTERS[Number(value)]}) ${ex.sentences[Number(value)]}`
  if (ex.kind === 'matching') return `${LETTERS[Number(value)]} (${ex.sections[Number(value)].title})`
  if (ex.kind === 'error') {
    if (value === '-1') return 'Dijiste que era correcta'
    return `Marcaste "${parseErrorSentence(ex.items[i].sentence).tokens[Number(value)]}"`
  }
  return value
}

export function explanationFor(ex: Exercise, i: number): string {
  switch (ex.kind) {
    case 'reading-mc':
    case 'matching':
      return ex.questions[i].explanation
    case 'gapped-text':
      return ex.explanations[i]
    case 'writing':
      return ''
    default:
      return 'items' in ex ? ex.items[i].explanation : ex.gaps[i].explanation
  }
}

export function checkOne(ex: Exercise, i: number, value: string): boolean {
  switch (ex.kind) {
    case 'mc-cloze':
      return value !== '' && Number(value) === ex.gaps[i].answer
    case 'open-cloze':
    case 'word-formation':
      return isCorrect(value, ex.gaps[i].answers)
    case 'kwt':
    case 'gap':
      return isCorrect(value, ex.items[i].answers)
    case 'choice':
      return value !== '' && Number(value) === ex.items[i].answer
    case 'error':
      return value !== '' && Number(value) === parseErrorSentence(ex.items[i].sentence).wrong
    case 'reading-mc':
    case 'matching':
      return value !== '' && Number(value) === ex.questions[i].answer
    case 'gapped-text':
      return value !== '' && Number(value) === ex.answers[i]
    case 'writing':
      return false
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

/** Permutación aleatoria de 0..n-1. */
function permutation(n: number, rnd: () => number = Math.random): number[] {
  const p = Array.from({ length: n }, (_, i) => i)
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1))
    ;[p[i], p[j]] = [p[j], p[i]]
  }
  return p
}

function shuffleOpts<T>(options: T[], answer: number): { options: T[]; answer: number } {
  const p = permutation(options.length)
  return { options: p.map((i) => options[i]), answer: p.indexOf(answer) }
}

/**
 * Copia del ejercicio con las opciones barajadas (para que al repetir no se memorice la letra).
 * No cambia el orden de las preguntas, así que los índices de pregunta siguen siendo válidos.
 */
export function shuffleOptions(ex: Exercise): Exercise {
  switch (ex.kind) {
    case 'mc-cloze':
      return {
        ...ex,
        gaps: ex.gaps.map((g) => {
          const s = shuffleOpts(g.options, g.answer)
          return { ...g, options: s.options as typeof g.options, answer: s.answer }
        }),
      }
    case 'choice':
      return { ...ex, items: ex.items.map((it) => ({ ...it, ...shuffleOpts(it.options, it.answer) })) }
    case 'reading-mc':
      return {
        ...ex,
        questions: ex.questions.map((q) => {
          const s = shuffleOpts(q.options, q.answer)
          return { ...q, options: s.options as typeof q.options, answer: s.answer }
        }),
      }
    case 'gapped-text': {
      const p = permutation(ex.sentences.length)
      return { ...ex, sentences: p.map((i) => ex.sentences[i]), answers: ex.answers.map((a) => p.indexOf(a)) }
    }
    default:
      return ex
  }
}
