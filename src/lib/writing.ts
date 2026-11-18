import { storageKey } from './level'
// Borradores de Writing guardados en el navegador.
const key = () => storageKey('writing.v1')

export function countWords(text: string): number {
  return text.trim() ? text.trim().split(/\s+/).length : 0
}

function loadAll(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(key()) ?? '{}') as Record<string, string>
  } catch {
    return {}
  }
}

export function loadDraft(id: string): string {
  return loadAll()[id] ?? ''
}

export function saveDraft(id: string, text: string): void {
  try {
    const all = loadAll()
    if (text) all[id] = text
    else delete all[id]
    localStorage.setItem(key(), JSON.stringify(all))
  } catch {
    /* sin almacenamiento */
  }
}

/** Criterios oficiales de corrección de Cambridge (Writing), explicados en español. */
export const CRITERIA = [
  { name: 'Content', es: '¿Has respondido a todo lo que pide el enunciado, con información relevante?' },
  { name: 'Communicative Achievement', es: '¿El formato y el registro son los adecuados para el tipo de texto y el lector?' },
  { name: 'Organisation', es: '¿Hay párrafos claros y conectores variados?' },
  { name: 'Language', es: '¿Usas vocabulario y gramática variados, propios de tu nivel, con pocos errores?' },
] as const
