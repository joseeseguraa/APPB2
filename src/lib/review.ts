import { storageKey } from './level'
// "Mis errores": repaso espaciado de preguntas falladas (sistema de cajas de Leitner).
// Cada pregunta fallada entra en la caja 0. Si aciertas en el repaso, sube de caja y vuelve
// más tarde (1, 3, 7 y 14 días). Al acertar en la última caja, se da por dominada y sale.
import { logActivity } from './progress'

const key = () => storageKey('review.v1')
export const INTERVALS = [1, 3, 7, 14] // días hasta el siguiente repaso, por caja

export interface ReviewItem {
  /** caja actual (0 = recién fallada) */
  box: number
  /** fecha (YYYY-MM-DD) a partir de la cual toca repasar */
  due: string
  /** veces que se ha fallado */
  lapses: number
}

export type ReviewMap = Record<string, ReviewItem>

export function itemKey(exId: string, q: number) {
  return `${exId}#${q}`
}

export function parseKey(key: string): { exId: string; q: number } {
  const i = key.lastIndexOf('#')
  return { exId: key.slice(0, i), q: Number(key.slice(i + 1)) }
}

export function dateKey(d = new Date()): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function addDays(days: number, from = new Date()): string {
  const d = new Date(from)
  d.setDate(d.getDate() + days)
  return dateKey(d)
}

export function loadReview(): ReviewMap {
  try {
    return JSON.parse(localStorage.getItem(key()) ?? '{}') as ReviewMap
  } catch {
    return {}
  }
}

function save(map: ReviewMap) {
  try {
    localStorage.setItem(key(), JSON.stringify(map))
  } catch {
    /* sin almacenamiento */
  }
}

/** Registra los fallos de un ejercicio: entran (o vuelven) a la caja 0 para repasar mañana. */
export function recordMistakes(exId: string, results: boolean[], reviewable: (q: number) => boolean = () => true): void {
  const map = loadReview()
  results.forEach((ok, q) => {
    if (ok || !reviewable(q)) return
    const k = itemKey(exId, q)
    map[k] = { box: 0, due: addDays(1), lapses: (map[k]?.lapses ?? 0) + 1 }
  })
  save(map)
}

/** Resultado de una pregunta en el repaso. Devuelve true si queda dominada (sale de la lista). */
export function answerReview(key: string, ok: boolean, now = new Date()): boolean {
  const map = loadReview()
  const it = map[key]
  if (!it) return false
  let mastered = false
  if (ok) {
    const box = it.box + 1
    if (box >= INTERVALS.length) {
      delete map[key]
      mastered = true
    } else map[key] = { ...it, box, due: addDays(INTERVALS[box], now) }
  } else {
    map[key] = { box: 0, due: addDays(1, now), lapses: it.lapses + 1 }
  }
  save(map)
  logActivity()
  return mastered
}

export function dueKeys(map: ReviewMap = loadReview(), today = dateKey()): string[] {
  return Object.entries(map)
    .filter(([, it]) => it.due <= today)
    .sort((a, b) => a[1].due.localeCompare(b[1].due) || b[1].lapses - a[1].lapses)
    .map(([k]) => k)
}

/* ---------- Reto diario ---------- */

const dailyKey = () => storageKey('daily.v1')

export function loadDaily(): Record<string, { score: number; total: number }> {
  try {
    return JSON.parse(localStorage.getItem(dailyKey()) ?? '{}')
  } catch {
    return {}
  }
}

export function saveDaily(date: string, score: number, total: number) {
  try {
    const all = loadDaily()
    all[date] = { score, total }
    localStorage.setItem(dailyKey(), JSON.stringify(all))
    logActivity()
  } catch {
    /* sin almacenamiento */
  }
}

/** Añade una sola pregunta fallada (por ejemplo, desde el reto diario). */
export function addMistake(exId: string, q: number): void {
  const map = loadReview()
  const k = itemKey(exId, q)
  map[k] = { box: 0, due: addDays(1), lapses: (map[k]?.lapses ?? 0) + 1 }
  save(map)
}
