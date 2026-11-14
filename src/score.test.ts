import { describe, expect, it } from 'vitest'
import { gradeFor, SCALE_POINTS, toScale } from './lib/score'
import { streak } from './lib/progress'

describe('escala Cambridge', () => {
  it('coincide con los puntos oficiales', () => {
    expect(toScale(24, SCALE_POINTS.reading)).toBe(160)
    expect(toScale(37, SCALE_POINTS.reading)).toBe(180)
    expect(toScale(18, SCALE_POINTS.useOfEnglish)).toBe(160)
    expect(toScale(34, SCALE_POINTS.writing)).toBe(180)
    expect(toScale(42, SCALE_POINTS.reading)).toBe(190)
  })
  it('interpola y respeta el mínimo', () => {
    expect(toScale(20, SCALE_POINTS.reading)).toBe(150)
    expect(toScale(5, SCALE_POINTS.reading)).toBeNull()
  })
  it('asigna la nota', () => {
    expect(gradeFor(165).label).toBe('Grade C')
    expect(gradeFor(175).label).toBe('Grade B')
    expect(gradeFor(185).cefr).toBe('C1')
    expect(gradeFor(150).cefr).toBe('B1')
  })
})

describe('racha', () => {
  it('cuenta días seguidos hasta hoy o ayer', () => {
    const now = new Date(2026, 10, 14)
    expect(streak(['2026-11-12', '2026-11-13', '2026-11-14'], now)).toBe(3)
    expect(streak(['2026-11-12', '2026-11-13'], now)).toBe(2)
    expect(streak(['2026-11-10'], now)).toBe(0)
  })
})
