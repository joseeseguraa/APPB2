/** Normaliza una respuesta: minúsculas, apóstrofos rectos, espacios simples, sin puntuación final. */
export function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[‘’ʼ`´]/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/[.,!?;:]+$/g, '')
    .trim()
}

/** ¿La respuesta del usuario coincide con alguna de las aceptadas? */
export function isCorrect(user: string, accepted: string[]): boolean {
  const u = normalize(user)
  if (!u) return false
  return accepted.some((a) => normalize(a) === u)
}

/** Cuenta palabras como en Cambridge Part 4: las contracciones cuentan como 2 (can't, I'd, she's). */
export function countKwtWords(s: string): number {
  const n = normalize(s)
  if (!n) return 0
  return n.split(' ').reduce((acc, w) => {
    // contracciones: n't, 'll, 've, 're, 'd, 'm, 's  → 2 palabras
    if (/^[a-z]+('|n')(t|ll|ve|re|d|m|s)$/.test(w) || /n't$/.test(w)) return acc + 2
    return acc + 1
  }, 0)
}

/** Formatea segundos como mm:ss */
export function formatTime(totalSeconds: number): string {
  const s = Math.max(0, Math.floor(totalSeconds))
  const m = Math.floor(s / 60)
  return `${m}:${String(s % 60).padStart(2, '0')}`
}

/** ¿Contiene la palabra clave (sin cambiarla)? Admite contracciones: NEED → needn't. */
export function containsKeyword(answer: string, keyword: string): boolean {
  const kw = keyword.toLowerCase()
  return normalize(answer)
    .split(' ')
    .some((t) => t === kw || t.replace(/(n't|'[a-z]+)$/, '') === kw)
}
