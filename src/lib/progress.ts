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
    logActivity()
  } catch {
    // almacenamiento no disponible: la app sigue funcionando sin guardar
  }
}

/* ---------- Días de actividad y racha ---------- */

const DAYS_KEY = 'appb2.days.v1'

function today(d = new Date()): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export function loadDays(): string[] {
  try {
    return JSON.parse(localStorage.getItem(DAYS_KEY) ?? '[]') as string[]
  } catch {
    return []
  }
}

export function logActivity(): void {
  try {
    const days = new Set(loadDays())
    days.add(today())
    localStorage.setItem(DAYS_KEY, JSON.stringify([...days].sort()))
  } catch {
    /* sin almacenamiento */
  }
}

/** Días seguidos practicando, contando hasta hoy (o hasta ayer si hoy aún no has practicado). */
export function streak(days: string[], now = new Date()): number {
  const set = new Set(days)
  const d = new Date(now)
  if (!set.has(today(d))) d.setDate(d.getDate() - 1)
  let n = 0
  while (set.has(today(d))) {
    n++
    d.setDate(d.getDate() - 1)
  }
  return n
}

/* ---------- Copia de seguridad ---------- */

const PREFIX = 'appb2.'

export function exportData(): string {
  const out: Record<string, unknown> = { app: 'appb2', exportedAt: new Date().toISOString() }
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i)
    if (k?.startsWith(PREFIX)) out[k] = JSON.parse(localStorage.getItem(k) ?? 'null')
  }
  return JSON.stringify(out, null, 2)
}

export function importData(json: string): boolean {
  try {
    const data = JSON.parse(json) as Record<string, unknown>
    if (data.app !== 'appb2') return false
    for (const [k, v] of Object.entries(data)) {
      if (k.startsWith(PREFIX)) localStorage.setItem(k, JSON.stringify(v))
    }
    return true
  } catch {
    return false
  }
}

export function resetAll(): void {
  const keys: string[] = []
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i)
    if (k?.startsWith(PREFIX)) keys.push(k)
  }
  keys.forEach((k) => localStorage.removeItem(k))
}
