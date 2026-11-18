import { beforeEach, describe, expect, it } from 'vitest'
import { allCards, contextSentence, dailyCards } from './lib/cards'
import { checkAll } from './lib/exercise'
import { answerReview, dueKeys, INTERVALS, loadReview, recordMistakes } from './lib/review'

// localStorage mínimo para los tests (Node no lo tiene)
class MemStorage {
  private m = new Map<string, string>()
  get length() {
    return this.m.size
  }
  key(i: number) {
    return [...this.m.keys()][i] ?? null
  }
  getItem(k: string) {
    return this.m.get(k) ?? null
  }
  setItem(k: string, v: string) {
    this.m.set(k, v)
  }
  removeItem(k: string) {
    this.m.delete(k)
  }
  clear() {
    this.m.clear()
  }
}

beforeEach(() => {
  ;(globalThis as unknown as { localStorage: MemStorage }).localStorage = new MemStorage()
})

describe('tarjetas sueltas', () => {
  it('extrae la frase del hueco', () => {
    const t = 'First sentence {1} here. The second one has {2} gap. And {3} more.'
    expect(contextSentence(t, 1)).toBe('The second one has ___ gap.')
    expect(contextSentence(t, 0)).toBe('First sentence ___ here.')
  })

  it('todas las tarjetas tienen un hueco o pregunta y su respuesta modelo es correcta', () => {
    const cards = allCards()
    expect(cards.length).toBeGreaterThan(500)
    for (const c of cards) {
      const ex = c.ex
      let model = ''
      if (ex.kind === 'choice') model = String(ex.items[0].answer)
      else if (ex.kind === 'gap') {
        model = ex.items[0].answers[0]
        expect(ex.items[0].sentence.split('___'), c.key).toHaveLength(2)
      } else if (ex.kind === 'kwt') model = ex.items[0].answers[0]
      else if (ex.kind === 'error') {
        const m = ex.items[0].sentence.match(/\[/)
        model = m ? String(ex.items[0].sentence.split(' ').findIndex((w) => w.startsWith('['))) : '-1'
        continue // se comprueba en content.test
      }
      expect(checkAll(ex, [model])[0], c.key).toBe(true)
    }
  })

  it('el reto diario tiene 10 preguntas, siempre las mismas para una fecha', () => {
    const a = dailyCards('2026-11-18')
    const b = dailyCards('2026-11-18')
    const c = dailyCards('2026-11-19')
    expect(a).toHaveLength(10)
    expect(a.map((x) => x.key)).toEqual(b.map((x) => x.key))
    expect(a.map((x) => x.key)).not.toEqual(c.map((x) => x.key))
    expect(new Set(a.map((x) => x.key)).size).toBe(10)
  })
})

describe('repaso espaciado', () => {
  it('guarda los fallos y los saca al dominarlos', () => {
    recordMistakes('uoe1-01', [true, false, true])
    const map = loadReview()
    expect(Object.keys(map)).toEqual(['uoe1-01#1'])
    // no toca hoy, sí mañana
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const tk = `${tomorrow.getFullYear()}-${String(tomorrow.getMonth() + 1).padStart(2, '0')}-${String(tomorrow.getDate()).padStart(2, '0')}`
    expect(dueKeys(map)).toHaveLength(0)
    expect(dueKeys(map, tk)).toEqual(['uoe1-01#1'])
    // acertar en todas las cajas lo saca de la lista
    let mastered = false
    for (let i = 0; i < INTERVALS.length; i++) mastered = answerReview('uoe1-01#1', true)
    expect(mastered).toBe(true)
    expect(loadReview()).toEqual({})
  })

  it('fallar en el repaso lo devuelve al principio', () => {
    recordMistakes('gr-pp-1', [false])
    answerReview('gr-pp-1#0', true)
    expect(loadReview()['gr-pp-1#0'].box).toBe(1)
    answerReview('gr-pp-1#0', false)
    expect(loadReview()['gr-pp-1#0'].box).toBe(0)
    expect(loadReview()['gr-pp-1#0'].lapses).toBe(2)
  })
})

import { sections } from './data/sections'
import { shuffleOptions } from './lib/exercise'

describe('barajar opciones', () => {
  it('mantiene la respuesta correcta en todos los ejercicios', () => {
    for (const s of sections)
      for (const p of s.parts)
        for (const ex of p.exercises) {
          const sh = shuffleOptions(ex)
          if (sh.kind === 'mc-cloze' && ex.kind === 'mc-cloze')
            sh.gaps.forEach((g, i) => expect(g.options[g.answer]).toBe(ex.gaps[i].options[ex.gaps[i].answer]))
          if (sh.kind === 'choice' && ex.kind === 'choice')
            sh.items.forEach((it, i) => expect(it.options[it.answer]).toBe(ex.items[i].options[ex.items[i].answer]))
          if (sh.kind === 'reading-mc' && ex.kind === 'reading-mc')
            sh.questions.forEach((q, i) => expect(q.options[q.answer]).toBe(ex.questions[i].options[ex.questions[i].answer]))
          if (sh.kind === 'gapped-text' && ex.kind === 'gapped-text')
            sh.answers.forEach((a, i) => expect(sh.sentences[a]).toBe(ex.sentences[ex.answers[i]]))
        }
  })
})
