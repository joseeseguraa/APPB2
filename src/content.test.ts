import { describe, expect, it } from 'vitest'
import { sections } from './data/sections'
import { containsKeyword, countKwtWords, isCorrect, normalize } from './lib/answers'
import { checkAll, splitGaps } from './lib/exercise'

const allParts = sections.flatMap((s) => s.parts.map((p) => ({ s, p })))
const allExercises = allParts.flatMap(({ p }) => p.exercises)

describe('normalización de respuestas', () => {
  it('ignora mayúsculas, espacios y apóstrofos curvos', () => {
    expect(normalize('  Wishes  She’d Gone. ')).toBe("wishes she'd gone")
    expect(isCorrect('DESPITE', ['despite'])).toBe(true)
    expect(isCorrect('', ['despite'])).toBe(false)
  })
  it('cuenta las contracciones como 2 palabras', () => {
    expect(countKwtWords("wishes she'd gone")).toBe(4)
    expect(countKwtWords("didn't need to bring")).toBe(5)
    expect(countKwtWords('takes after')).toBe(2)
  })
})

describe('contenido', () => {
  it('ids únicos', () => {
    const ids = allExercises.map((e) => e.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  for (const { s, p } of allParts) {
    describe(`${s.slug} / ${p.slug}`, () => {
      it('tiene ejercicios y guía', () => {
        expect(p.exercises.length).toBeGreaterThan(0)
        expect(p.guide.strategy.length).toBeGreaterThan(0)
      })
      for (const ex of p.exercises) {
        it(`${ex.id}: formato correcto`, () => {
          if (ex.kind === 'kwt') {
            expect(ex.items).toHaveLength(p.questions)
            for (const it of ex.items) {
              expect(it.keyword).toBe(it.keyword.toUpperCase())
              expect(it.answers.length).toBeGreaterThan(0)
              expect(it.explanation.length).toBeGreaterThan(20)
              for (const a of it.answers) {
                // la palabra clave aparece y la longitud es 2-5
                expect(containsKeyword(a, it.keyword), `${ex.id} "${a}"`).toBe(true)
                const w = countKwtWords(a)
                expect(w, `${ex.id} "${a}"`).toBeGreaterThanOrEqual(2)
                expect(w, `${ex.id} "${a}"`).toBeLessThanOrEqual(5)
              }
            }
          } else {
            expect(ex.gaps).toHaveLength(p.questions)
            // los huecos {1}..{n} aparecen exactamente una vez y en orden
            const nums = splitGaps(ex.text).filter((x): x is number => typeof x === 'number')
            expect(nums).toEqual(ex.gaps.map((_, i) => i))
            for (const g of ex.gaps) {
              expect(g.explanation.length).toBeGreaterThan(20)
              if (ex.kind === 'mc-cloze') {
                const gg = g as (typeof ex.gaps)[number]
                expect(gg.options).toHaveLength(4)
                expect(new Set(gg.options).size).toBe(4)
                expect(gg.answer).toBeGreaterThanOrEqual(0)
                expect(gg.answer).toBeLessThan(4)
              } else {
                const og = g as { answers: string[]; stem?: string }
                expect(og.answers.length).toBeGreaterThan(0)
                for (const a of og.answers) expect(a.trim().split(/\s+/)).toHaveLength(1)
                if (ex.kind === 'word-formation') expect(og.stem).toBe(og.stem!.toUpperCase())
              }
            }
          }
        })
        it(`${ex.id}: las respuestas modelo puntúan 100%`, () => {
          const model =
            ex.kind === 'kwt'
              ? ex.items.map((it) => it.answers[0])
              : ex.kind === 'mc-cloze'
                ? ex.gaps.map((g) => String(g.answer))
                : ex.gaps.map((g) => g.answers[0])
          expect(checkAll(ex, model).every(Boolean)).toBe(true)
        })
      }
    })
  }

  it('las respuestas de Part 1 no están siempre en la misma letra', () => {
    const p1 = allExercises.filter((e) => e.kind === 'mc-cloze')
    const letters = new Set(p1.flatMap((e) => (e.kind === 'mc-cloze' ? e.gaps.map((g) => g.answer) : [])))
    expect(letters.size).toBe(4)
  })
})
