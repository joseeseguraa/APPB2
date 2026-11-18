import { REPO_URL, REPORT_EMAIL } from '../config'

/** Enlace para avisar de un error en una pregunta concreta (email si está configurado; si no, GitHub). */
export function reportUrl(info: { exId: string; q: number; title: string; userAnswer: string; correct: string }): string {
  const title = `Error en ${info.exId}, pregunta ${info.q + 1}`
  const body = [
    `Ejercicio: ${info.title} (${info.exId})`,
    `Pregunta: ${info.q + 1}`,
    `Mi respuesta: ${info.userAnswer || '(en blanco)'}`,
    `Respuesta de la app: ${info.correct}`,
    '',
    'Qué creo que está mal:',
    '',
  ].join('\n')
  if (REPORT_EMAIL) return `mailto:${REPORT_EMAIL}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`
  return `${REPO_URL}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`
}
