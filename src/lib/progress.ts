// Progreso guardado en el navegador (localStorage).
// Más adelante (fase Progreso) se ampliará con estadísticas y repaso de fallos.

const KEY = 'appb2.progress.v1'

export interface AttemptRecord {
  /** aciertos en el último intento */
  score: number
  total: number
  /** mejor puntuación conseguida */
  best: number
  attempts: number
  /** fecha ISO del último intento */
  lastAt: string
  /** índices (0-based) de las preguntas falladas en el último intento */
  wrong: number[]
}

export type ProgressMap = Record<string, AttemptRecord>

export function loadProgress(): ProgressMap {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as ProgressMap) : {}
  } catch {
    return {}
  }
}

export function saveAttempt(exerciseId: string, score: number, total: number, wrong: number[]): void {
  try {
    const all = loadProgress()
    const prev = all[exerciseId]
    all[exerciseId] = {
      score,
      total,
      best: Math.max(score, prev?.best ?? 0),
      attempts: (prev?.attempts ?? 0) + 1,
      lastAt: new Date().toISOString(),
      wrong,
    }
    localStorage.setItem(KEY, JSON.stringify(all))
  } catch {
    // almacenamiento no disponible: la app sigue funcionando sin guardar
  }
}
