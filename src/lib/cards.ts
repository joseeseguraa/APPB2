// Convierte cualquier pregunta de la app en una "tarjeta": un ejercicio de UNA sola pregunta
// que se puede practicar suelta (en "Mis errores" y en el reto diario).
import { currentSections } from '../data/sections'
import type { Exercise, PartInfo, SectionInfo } from '../types'
import { itemKey } from './review'

export interface Card {
  key: string
  exId: string
  q: number
  /** ejercicio sintético de una pregunta */
  ex: Exercise
  section: SectionInfo
  part: PartInfo
  source: Exercise
}

/** Frase del texto que contiene el hueco n (0-based), con ese hueco como ___ y los demás como … */
export function contextSentence(text: string, gap: number): string {
  const marker = `{${gap + 1}}`
  const pos = text.indexOf(marker)
  if (pos < 0) return text
  const before = text.slice(0, pos)
  const ends = [...before.matchAll(/[.!?]["”’]?\s+/g)]
  const start = ends.length ? ends[ends.length - 1].index! + ends[ends.length - 1][0].length : 0
  const after = text.slice(pos)
  const m = after.match(/[.!?]["”’]?(?=\s|$)/)
  const end = m ? pos + m.index! + m[0].length : text.length
  return text
    .slice(start, end)
    .replace(marker, '___')
    .replace(/\{\d+\}/g, '…')
    .trim()
}

/** ¿Se puede practicar esta pregunta suelta? (Part 6 y Part 7 dependen de todo el texto). */
export function isReviewable(ex: Exercise): boolean {
  return ex.kind !== 'gapped-text' && ex.kind !== 'matching' && ex.kind !== 'writing'
}

export function buildCard(ex: Exercise, q: number): Exercise | null {
  const id = itemKey(ex.id, q)
  const base = { id, title: ex.title, focus: ex.focus }
  switch (ex.kind) {
    case 'mc-cloze': {
      const g = ex.gaps[q]
      return { ...base, kind: 'choice', items: [{ sentence: contextSentence(ex.text, q), options: [...g.options], answer: g.answer, explanation: g.explanation }] }
    }
    case 'open-cloze': {
      const g = ex.gaps[q]
      return { ...base, kind: 'gap', items: [{ sentence: contextSentence(ex.text, q), answers: g.answers, explanation: g.explanation }] }
    }
    case 'word-formation': {
      const g = ex.gaps[q]
      return { ...base, kind: 'gap', items: [{ sentence: `${contextSentence(ex.text, q)} (${g.stem})`, answers: g.answers, explanation: g.explanation }] }
    }
    case 'kwt':
    case 'choice':
    case 'gap':
    case 'error':
      return { ...ex, id, items: [ex.items[q]] } as Exercise
    case 'reading-mc': {
      const r = ex.questions[q]
      return { ...base, kind: 'choice', items: [{ sentence: r.question, options: [...r.options], answer: r.answer, explanation: r.explanation }] }
    }
    default:
      return null
  }
}

let index: Map<string, { section: SectionInfo; part: PartInfo; ex: Exercise }> | null = null
function getIndex() {
  if (!index) {
    index = new Map()
    for (const section of currentSections()) for (const part of section.parts) for (const ex of part.exercises) index.set(ex.id, { section, part, ex })
  }
  return index
}

export function cardFor(exId: string, q: number): Card | null {
  const found = getIndex().get(exId)
  if (!found) return null
  const ex = buildCard(found.ex, q)
  if (!ex) return null
  return { key: itemKey(exId, q), exId, q, ex, section: found.section, part: found.part, source: found.ex }
}

/** Todas las tarjetas posibles (para el reto diario). */
export function allCards(): Card[] {
  const out: Card[] = []
  for (const [exId, { ex }] of getIndex()) {
    if (!isReviewable(ex)) continue
    const n = 'items' in ex ? ex.items.length : 'gaps' in ex ? ex.gaps.length : ex.kind === 'reading-mc' ? ex.questions.length : 0
    for (let q = 0; q < n; q++) {
      const c = cardFor(exId, q)
      if (c) out.push(c)
    }
  }
  return out
}

/** Generador pseudoaleatorio determinista (mismo reto para todos el mismo día). */
function seeded(seed: string) {
  let h = 2166136261
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619)
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507)
    h = Math.imul(h ^ (h >>> 13), 3266489909)
    return ((h ^= h >>> 16) >>> 0) / 4294967296
  }
}

/** 10 preguntas variadas para el reto del día: mezcla de Use of English, Grammar, Vocabulary y Reading. */
export function dailyCards(date: string, count = 10): Card[] {
  const rnd = seeded(`reto-${date}`)
  const pool = allCards().filter((c) => c.source.kind !== 'reading-mc') // las de Reading dependen del texto
  // repartir entre secciones para que haya variedad
  const bySection = new Map<string, Card[]>()
  for (const c of pool) bySection.set(c.section.slug, [...(bySection.get(c.section.slug) ?? []), c])
  const quotas: Record<string, number> = { 'use-of-english': 4, grammar: 3, vocabulary: 3 }
  const picked: Card[] = []
  for (const [slug, n] of Object.entries(quotas)) {
    const list = [...(bySection.get(slug) ?? [])]
    for (let i = 0; i < n && list.length; i++) picked.push(list.splice(Math.floor(rnd() * list.length), 1)[0])
  }
  // si un nivel aún tiene pocas secciones, completar con lo que haya
  const rest = pool.filter((c) => !picked.includes(c))
  while (picked.length < count && rest.length) picked.push(rest.splice(Math.floor(rnd() * rest.length), 1)[0])
  // barajar el orden final
  for (let i = picked.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1))
    ;[picked[i], picked[j]] = [picked[j], picked[i]]
  }
  return picked.slice(0, count)
}

/* ---------- Práctica a medida ---------- */

export type PracticeFilter = 'all' | 'new' | 'failed'

/** Clave de una parte o tema para la práctica a medida: "seccion/parte". */
export function partKey(section: SectionInfo, part: PartInfo): string {
  return `${section.slug}/${part.slug}`
}

/** Preguntas sueltas que se pueden practicar fuera de su texto (sin Reading, que depende del texto). */
export function practiceCards(): Card[] {
  return allCards().filter((c) => c.source.kind !== 'reading-mc')
}

/**
 * Filtra las preguntas de la práctica a medida.
 * - new: ejercicios que todavía no se han hecho nunca.
 * - failed: preguntas falladas en el último intento del ejercicio o pendientes en Mis errores.
 */
export function filterCards(
  cards: Card[],
  filter: PracticeFilter,
  progress: Record<string, { wrong: number[] }>,
  review: Record<string, unknown>,
): Card[] {
  if (filter === 'new') return cards.filter((c) => !progress[c.exId])
  if (filter === 'failed') return cards.filter((c) => progress[c.exId]?.wrong.includes(c.q) || c.key in review)
  return cards
}

/** Elige n preguntas al azar, repartidas lo más posible entre las partes o temas elegidos. */
export function pickBalanced(cards: Card[], n: number, rnd: () => number = Math.random): Card[] {
  const groups = new Map<string, Card[]>()
  for (const c of cards) {
    const k = partKey(c.section, c.part)
    groups.set(k, [...(groups.get(k) ?? []), c])
  }
  const lists = [...groups.values()].map((l) => [...l])
  const picked: Card[] = []
  // por turnos: una pregunta de cada parte hasta llegar a n
  while (picked.length < n && lists.some((l) => l.length)) {
    for (let i = lists.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1))
      ;[lists[i], lists[j]] = [lists[j], lists[i]]
    }
    for (const l of lists) {
      if (picked.length >= n || !l.length) continue
      picked.push(l.splice(Math.floor(rnd() * l.length), 1)[0])
    }
  }
  for (let i = picked.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1))
    ;[picked[i], picked[j]] = [picked[j], picked[i]]
  }
  return picked
}
