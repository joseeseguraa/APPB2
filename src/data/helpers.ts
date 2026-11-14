import type { ChoiceItem, ErrorItem, GapItem, McClozeGap } from '../types'

/** Hash simple y determinista (para barajar siempre igual). */
function hash(s: string): number {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

/**
 * Crea un hueco de Part 1. Se escribe la respuesta correcta primero y luego
 * los 3 distractores; las opciones se barajan de forma determinista con `seed`
 * para que la respuesta correcta no esté siempre en la misma letra.
 */
export function mc(
  seed: string,
  correct: string,
  distractors: [string, string, string],
  explanation: string,
): McClozeGap {
  const all = [correct, ...distractors]
  const order = [0, 1, 2, 3].sort(
    (a, b) => hash(`${seed}:${all[a]}`) - hash(`${seed}:${all[b]}`),
  )
  const options = order.map((i) => all[i]) as McClozeGap['options']
  return { options, answer: order.indexOf(0), explanation }
}


/** Ítem de "elegir": respuesta correcta primero; las opciones se barajan de forma determinista. */
export function ch(sentence: string, correct: string, distractors: string[], explanation: string): ChoiceItem {
  const all = [correct, ...distractors]
  const order = all.map((_, i) => i).sort((a, b) => hash(`${sentence}:${all[a]}`) - hash(`${sentence}:${all[b]}`))
  return { sentence, options: order.map((i) => all[i]), answer: order.indexOf(0), explanation }
}

/** Ítem de "rellenar" (respuesta escrita). */
export function g(sentence: string, answers: string[], explanation: string): GapItem {
  return { sentence, answers, explanation }
}

/** Ítem de "detectar el error": la parte mal va entre [ ]. correction = null si la frase es correcta. */
export function er(sentence: string, correction: string | null, explanation: string): ErrorItem {
  return { sentence, correction, explanation }
}

/** Pregunta de Reading Part 5: respuesta correcta primero; se barajan las 4 opciones. */
export function rq(question: string, correct: string, distractors: [string, string, string], explanation: string) {
  const all = [correct, ...distractors]
  const order = all.map((_, i) => i).sort((a, b) => hash(`${question}:${all[a]}`) - hash(`${question}:${all[b]}`))
  return {
    question,
    options: order.map((i) => all[i]) as [string, string, string, string],
    answer: order.indexOf(0),
    explanation,
  }
}

/**
 * Reading Part 6: se escriben las frases en el orden de los huecos (la última es la que sobra)
 * y se barajan como A–G de forma determinista.
 */
export function gapped(seed: string, inOrder: string[], explanations: string[]) {
  const order = inOrder.map((_, i) => i).sort((a, b) => hash(`${seed}:${inOrder[a]}`) - hash(`${seed}:${inOrder[b]}`))
  const sentences = order.map((i) => inOrder[i])
  const answers = inOrder.slice(0, inOrder.length - 1).map((_, gap) => order.indexOf(gap))
  return { sentences, answers, explanations }
}
