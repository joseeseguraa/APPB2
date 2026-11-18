import { getLevel, storageKey } from './level'
// Conversión de puntuación de práctica a la Cambridge English Scale (B2 First).
// Puntos de referencia publicados por Cambridge English ("Converting practice test scores
// to Cambridge English Scale scores", B2 First). Entre puntos se interpola de forma lineal,
// así que el resultado es una ESTIMACIÓN, no una nota oficial.

type Points = [raw: number, scale: number][]

const B2_POINTS = {
  reading: [[10, 122], [16, 140], [24, 160], [37, 180], [42, 190]] as Points, // Parts 1, 5, 6, 7 · /42
  useOfEnglish: [[7, 122], [11, 140], [18, 160], [24, 180], [28, 190]] as Points, // Parts 2, 3, 4 · /28
  writing: [[10, 122], [16, 140], [24, 160], [34, 180], [40, 190]] as Points, // 2 tareas × 20 · /40
}

// C1 Advanced ("C1 Advanced: converting practice test scores", Cambridge, 2019). Máximo 210.
const C1_POINTS = {
  reading: [[17, 142], [23, 160], [32, 180], [43, 200], [50, 210]] as Points, // Parts 1, 5, 6, 7, 8 · /50
  useOfEnglish: [[8, 142], [11, 160], [16, 180], [23, 200], [28, 210]] as Points, // Parts 2, 3, 4 · /28
  writing: [[10, 142], [16, 160], [24, 180], [34, 200], [40, 210]] as Points, // 2 tareas × 20 · /40
}

/** Puntos de conversión del nivel activo (para tests: B2 por defecto). */
export const SCALE_POINTS = B2_POINTS
export function scalePoints() {
  return getLevel() === 'c1' ? C1_POINTS : B2_POINTS
}

export const MAX_RAW = { reading: 42, useOfEnglish: 28, writing: 40 }
export function maxRaw() {
  return getLevel() === 'c1' ? { reading: 50, useOfEnglish: 28, writing: 40 } : MAX_RAW
}

/** Puntuación mínima que se informa en el nivel activo. */
export function minScale() {
  return getLevel() === 'c1' ? 142 : 122
}

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
  if (getLevel() === 'c1') {
    if (scale === null || scale < 160) return { label: 'Sin certificado', cefr: '—', tone: 'red' }
    if (scale < 180) return { label: 'Level B2', cefr: 'B2', tone: 'amber' }
    if (scale < 193) return { label: 'Grade C', cefr: 'C1', tone: 'green' }
    if (scale < 200) return { label: 'Grade B', cefr: 'C1', tone: 'green' }
    return { label: 'Grade A', cefr: 'C2', tone: 'green' }
  }
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
