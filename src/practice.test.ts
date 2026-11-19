import { describe, expect, it } from 'vitest'
import { filterCards, partKey, pickBalanced, practiceCards } from './lib/cards'

describe('práctica a medida', () => {
  const all = practiceCards()

  it('no incluye Reading (depende del texto) y hay preguntas de sobra', () => {
    expect(all.length).toBeGreaterThan(300)
    expect(all.some((c) => c.source.kind === 'reading-mc')).toBe(false)
  })

  it('reparte las preguntas entre las partes elegidas', () => {
    const keys = [...new Set(all.map((c) => partKey(c.section, c.part)))].slice(0, 4)
    const pool = all.filter((c) => keys.includes(partKey(c.section, c.part)))
    const picked = pickBalanced(pool, 20)
    expect(picked).toHaveLength(20)
    expect(new Set(picked.map((c) => c.key)).size).toBe(20)
    for (const k of keys) expect(picked.filter((c) => partKey(c.section, c.part) === k).length).toBe(5)
  })

  it('no repite y se queda en lo que hay si piden más', () => {
    const pool = all.slice(0, 7)
    expect(pickBalanced(pool, 30)).toHaveLength(7)
  })

  it('filtra sin hacer y falladas', () => {
    const c = all[0]
    const progress = { [c.exId]: { wrong: [c.q] } }
    expect(filterCards(all, 'new', progress, {}).some((x) => x.exId === c.exId)).toBe(false)
    const failed = filterCards(all, 'failed', progress, { [all[50].key]: {} })
    expect(failed.map((x) => x.key).sort()).toEqual([c.key, all[50].key].sort())
  })
})
