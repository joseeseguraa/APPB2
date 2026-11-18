// Repaso espaciado de tarjetas de vocabulario.
// Cada tarjeta tiene un nivel (0-5). "Otra vez" la devuelve al 0 y vuelve a salir en la misma sesión;
// "Bien" sube un nivel y "Fácil", dos. El nivel decide cuándo vuelve: 1, 3, 7, 14 o 30 días.
import type { Deck } from '../data/flashcards'
import { logActivity } from './progress'
import { dateKey } from './review'

const KEY = 'appb2.cards.v1'
export const CARD_INTERVALS = [0, 1, 3, 7, 14, 30]
export const LEARNED_LEVEL = 3

export interface CardState {
  level: number
  due: string
}
export type Rating = 'again' | 'good' | 'easy'

export function cardKey(deck: string, en: string) {
  return `${deck}:${en}`
}

export function loadCardStates(): Record<string, CardState> {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '{}')
  } catch {
    return {}
  }
}

function addDays(n: number, from = new Date()) {
  const d = new Date(from)
  d.setDate(d.getDate() + n)
  return dateKey(d)
}

export function rateCard(key: string, rating: Rating, now = new Date()): CardState {
  const all = loadCardStates()
  const cur = all[key]?.level ?? 0
  const level = rating === 'again' ? 0 : Math.min(CARD_INTERVALS.length - 1, cur + (rating === 'easy' ? 2 : 1))
  const next = { level, due: addDays(CARD_INTERVALS[level], now) }
  all[key] = next
  try {
    localStorage.setItem(KEY, JSON.stringify(all))
  } catch {
    /* sin almacenamiento */
  }
  logActivity()
  return next
}

export interface DeckStats {
  total: number
  fresh: number
  due: number
  learned: number
}

export function deckStats(deck: Deck, states = loadCardStates(), today = dateKey()): DeckStats {
  let fresh = 0
  let due = 0
  let learned = 0
  for (const card of deck.cards) {
    const st = states[cardKey(deck.slug, card.en)]
    if (!st) fresh++
    else {
      if (st.due <= today) due++
      if (st.level >= LEARNED_LEVEL) learned++
    }
  }
  return { total: deck.cards.length, fresh, due, learned }
}

/** Tarjetas para una sesión: primero las que toca repasar y después hasta `newLimit` nuevas. */
export function sessionCards(deck: Deck, newLimit = 10, states = loadCardStates(), today = dateKey()) {
  const due = deck.cards.filter((c) => {
    const st = states[cardKey(deck.slug, c.en)]
    return st && st.due <= today
  })
  const fresh = deck.cards.filter((c) => !states[cardKey(deck.slug, c.en)]).slice(0, newLimit)
  return [...due, ...fresh]
}
