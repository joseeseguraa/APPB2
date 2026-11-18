// Nivel activo (B2 First o C1 Advanced). Cada nivel guarda su propio progreso.
export type Level = 'b2' | 'c1'

const KEY = 'appb2.level.v1'

export function hasChosenLevel(): boolean {
  try {
    return localStorage.getItem(KEY) !== null
  } catch {
    return true
  }
}

export function getLevel(): Level {
  try {
    const raw = localStorage.getItem(KEY)
    return raw === '"c1"' || raw === 'c1' ? 'c1' : 'b2'
  } catch {
    return 'b2'
  }
}

export function setLevel(level: Level): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(level))
  } catch {
    /* sin almacenamiento */
  }
}

/** Clave de localStorage para el nivel activo. B2 conserva las claves de siempre. */
export function storageKey(name: string): string {
  return getLevel() === 'b2' ? `appb2.${name}` : `appb2.c1.${name}`
}

export interface LevelInfo {
  level: Level
  code: string
  exam: string
  /** Palabras de cada texto de Writing */
  words: [number, number]
  /** Palabras en la Part 4 (Key word transformation) */
  kwtWords: [number, number]
  readingMinutes: number
  writingMinutes: number
  /** Puntuación para aprobar en la escala de Cambridge */
  pass: number
}

export const LEVELS: Record<Level, LevelInfo> = {
  b2: { level: 'b2', code: 'B2', exam: 'B2 First', words: [140, 190], kwtWords: [2, 5], readingMinutes: 75, writingMinutes: 80, pass: 160 },
  c1: { level: 'c1', code: 'C1', exam: 'C1 Advanced', words: [220, 260], kwtWords: [3, 6], readingMinutes: 90, writingMinutes: 90, pass: 180 },
}

export function levelInfo(): LevelInfo {
  return LEVELS[getLevel()]
}
