import type { McClozeGap } from '../types'

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
