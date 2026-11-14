import { describe, expect, it } from 'vitest'
import { sections } from './data/sections'
import { containsKeyword, countKwtWords, isCorrect, normalize } from './lib/answers'
import { checkAll, parseErrorSentence, questionCount, splitGaps } from './lib/exercise'
import type { Exercise } from './types'

const allParts = sections.flatMap((s) => s.parts.map((p) => ({ s, p })))
const allExercises = allParts.flatMap(({ p }) => p.exercises)

/** Respuestas modelo (la primera aceptada) para cada pregunta. */
function modelAnswers(ex: Exercise): string[] {
  switch (ex.kind) {
    case 'mc-cloze':
      return ex.gaps.map((g) => String(g.answer))
    case 'open-cloze':
    case 'word-formation':
      return ex.gaps.map((g) => g.answers[0])
    case 'kwt':
    case 'gap':
      return ex.items.map((it) => it.answers[0])
    case 'choice':
      return ex.items.map((it) => String(it.answer))
    case 'error':
      return ex.items.map((it) => String(parseErrorSentence(it.sentence).wrong))
  }
}

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
  it('detecta la palabra clave aunque esté contraída', () => {
    expect(containsKeyword("needn't have brought", 'NEED')).toBe(true)
    expect(containsKeyword('wished she had', 'WISHES')).toBe(false)
  })
  it('trocea las frases de detectar error', () => {
    expect(parseErrorSentence('I [have seen] him yesterday.')).toEqual({
      tokens: ['I', 'have seen', 'him', 'yesterday.'],
      wrong: 1,
    })
    expect(parseErrorSentence('All good here.').wrong).toBe(-1)
  })
})

describe('contenido', () => {
  it('ids únicos', () => {
    const ids = allExercises.map((e) => e.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
  it('slugs únicos dentro de cada sección', () => {
    for (const s of sections) expect(new Set(s.parts.map((p) => p.slug)).size).toBe(s.parts.length)
  })

  for (const { s, p } of allParts) {
    describe(`${s.slug} / ${p.slug}`, () => {
      it('tiene ejercicios y guía o teoría', () => {
        expect(p.exercises.length).toBeGreaterThan(0)
        expect(Boolean(p.guide || p.theory)).toBe(true)
      })
      for (const ex of p.exercises) {
        it(`${ex.id}: formato correcto`, () => {
          // las partes de examen tienen el nº oficial de preguntas
          if (p.questions) expect(questionCount(ex)).toBe(p.questions)
          else expect(questionCount(ex)).toBeGreaterThanOrEqual(5)

          switch (ex.kind) {
            case 'kwt':
              for (const it of ex.items) {
                expect(it.keyword).toBe(it.keyword.toUpperCase())
                expect(it.explanation.length).toBeGreaterThan(8)
                for (const a of it.answers) {
                  expect(containsKeyword(a, it.keyword), `${ex.id} "${a}"`).toBe(true)
                  const w = countKwtWords(a)
                  expect(w, `${ex.id} "${a}"`).toBeGreaterThanOrEqual(2)
                  expect(w, `${ex.id} "${a}"`).toBeLessThanOrEqual(5)
                }
              }
              break
            case 'mc-cloze':
            case 'open-cloze':
            case 'word-formation': {
              const nums = splitGaps(ex.text).filter((x): x is number => typeof x === 'number')
              expect(nums).toEqual(ex.gaps.map((_, i) => i))
              for (const g of ex.gaps) {
                expect(g.explanation.length).toBeGreaterThan(8)
                if ('options' in g) {
                  expect(new Set(g.options).size).toBe(4)
                } else {
                  for (const a of g.answers) expect(a.trim().split(/\s+/)).toHaveLength(1)
                  if ('stem' in g) expect(g.stem).toBe(g.stem.toUpperCase())
                }
              }
              break
            }
            case 'choice':
              for (const it of ex.items) {
                expect(it.sentence, ex.id).toContain('___')
                expect(new Set(it.options).size).toBe(it.options.length)
                expect(it.options.length).toBeGreaterThanOrEqual(2)
                expect(it.explanation.length).toBeGreaterThan(8)
              }
              break
            case 'gap':
              for (const it of ex.items) {
                expect(it.sentence.split('___'), `${ex.id}: ${it.sentence}`).toHaveLength(2)
                expect(it.answers.length).toBeGreaterThan(0)
                expect(it.explanation.length).toBeGreaterThan(8)
              }
              break
            case 'error': {
              for (const it of ex.items) {
                const { wrong } = parseErrorSentence(it.sentence)
                // con corrección ⇔ hay una parte marcada
                expect(wrong >= 0, `${ex.id}: ${it.sentence}`).toBe(it.correction !== null)
                expect((it.sentence.match(/\[/g) ?? []).length).toBeLessThanOrEqual(1)
                expect(it.explanation.length).toBeGreaterThan(8)
              }
              expect(ex.items.some((it) => it.correction === null), `${ex.id} sin frase correcta`).toBe(true)
              break
            }
          }
        })
        it(`${ex.id}: las respuestas modelo puntúan 100%`, () => {
          expect(checkAll(ex, modelAnswers(ex)).every(Boolean)).toBe(true)
        })
      }
    })
  }

  it('las respuestas de elección múltiple no están siempre en la misma posición', () => {
    const pos = new Set(
      allExercises.flatMap((e) =>
        e.kind === 'mc-cloze' ? e.gaps.map((g) => g.answer) : e.kind === 'choice' ? e.items.map((i) => i.answer) : [],
      ),
    )
    expect(pos.size).toBe(4)
  })
})
