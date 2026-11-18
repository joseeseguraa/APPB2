import { storageKey } from './level'
// Conversión de puntuación de práctica a la Cambridge English Scale (B2 First).
// Puntos de referencia publicados por Cambridge English ("Converting practice test scores
// to Cambridge English Scale scores", B2 First). Entre puntos se interpola de forma lineal,
// así que el resultado es una ESTIMACIÓN, no una nota oficial.

type Points = [raw: number, scale: number][]

export const SCALE_POINTS = {
  reading: [[10, 122], [16, 140], [24, 160], [37, 180], [42, 190]] as Points, // Parts 1, 5, 6, 7 · /42
  useOfEnglish: [[7, 122], [11, 140], [18, 160], [24, 180], [28, 190]] as Points, // Parts 2, 3, 4 · /28
  writing: [[10, 122], [16, 140], [24, 160], [34, 180], [40, 190]] as Points, // 2 tareas × 20 · /40
}

export const MAX_RAW = { reading: 42, useOfEnglish: 28, writing: 40 }

/** Devuelve la puntuación en la escala (122–190) o null si queda por debajo del mínimo que se informa. */
export function toScale(raw: number, points: Points): number | null {
  if (raw < points[0][0]) return null
  for (let i = 1; i < points.length; i++) {
    const [r0, s0] = points[i - 1]
    const [r1, s1] = points[i]
    if (raw <= r1) return Math.round(s0 + ((raw - r0) / (r1 - r0)) * (s1 - s0))
  }
  return points[points.length - 1][1]
}

export function gradeFor(scale: number | null): { label: string; cefr: string; tone: 'green' | 'amber' | 'red' } {
  if (scale === null || scale < 140) return { label: 'Sin certificado', cefr: '—', tone: 'red' }
  if (scale < 160) return { label: 'Level B1', cefr: 'B1', tone: 'amber' }
  if (scale < 173) return { label: 'Grade C', cefr: 'B2', tone: 'green' }
  if (scale < 180) return { label: 'Grade B', cefr: 'B2', tone: 'green' }
  return { label: 'Grade A', cefr: 'C1', tone: 'green' }
}

/* ---------- Resultados de simulacros guardados ---------- */

const key = () => storageKey('mocks.v1')

export interface MockResult {
  /** nº de simulacro y prueba */
  id: string
  at: string
  raw: Record<string, number>
  scale: Record<string, number | null>
}

export function loadMocks(): Record<string, MockResult> {
  try {
    return JSON.parse(localStorage.getItem(key()) ?? '{}') as Record<string, MockResult>
  } catch {
    return {}
  }
}

export function saveMock(r: MockResult): void {
  try {
    const all = loadMocks()
    all[r.id] = r
    localStorage.setItem(key(), JSON.stringify(all))
  } catch {
    /* sin almacenamiento */
  }
}
