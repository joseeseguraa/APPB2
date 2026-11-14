// Tipos de contenido de la app.
// Convención de huecos en los textos: {1}, {2}, ... (el número es el índice del hueco, empezando en 1)

/** Use of English Part 1 — Multiple-choice cloze (8 huecos, 4 opciones) */
export interface McClozeGap {
  options: [string, string, string, string]
  /** índice 0-3 de la opción correcta */
  answer: number
  /** explicación en español de por qué es esa y no las otras */
  explanation: string
}
export interface McClozeExercise {
  id: string
  kind: 'mc-cloze'
  title: string
  /** tema o foco principal, p. ej. "Collocations", "Phrasal verbs" */
  focus: string
  text: string
  gaps: McClozeGap[]
}

/** Use of English Part 2 — Open cloze (8 huecos, una palabra) */
export interface OpenGap {
  /** respuestas aceptadas (la primera es la principal) */
  answers: string[]
  explanation: string
}
export interface OpenClozeExercise {
  id: string
  kind: 'open-cloze'
  title: string
  focus: string
  text: string
  gaps: OpenGap[]
}

/** Use of English Part 3 — Word formation (8 huecos con palabra raíz) */
export interface WordFormationGap extends OpenGap {
  /** palabra raíz en MAYÚSCULAS, como en el examen */
  stem: string
}
export interface WordFormationExercise {
  id: string
  kind: 'word-formation'
  title: string
  focus: string
  text: string
  gaps: WordFormationGap[]
}

/** Use of English Part 4 — Key word transformation (6 ítems, 2-5 palabras) */
export interface KwtItem {
  /** frase original */
  original: string
  /** palabra clave en MAYÚSCULAS (no se puede cambiar) */
  keyword: string
  /** frase reescrita: texto antes y después del hueco */
  before: string
  after: string
  /** respuestas aceptadas (2-5 palabras, contracciones cuentan como 2) */
  answers: string[]
  explanation: string
}
export interface KwtExercise {
  id: string
  kind: 'kwt'
  title: string
  focus: string
  items: KwtItem[]
}

/* ---------- Ejercicios de práctica por frases (Grammar / Vocabulary) ---------- */

/** Elegir la opción correcta. El hueco en la frase se marca con ___ */
export interface ChoiceItem {
  sentence: string
  options: string[]
  /** índice de la opción correcta */
  answer: number
  explanation: string
}
export interface ChoiceExercise {
  id: string
  kind: 'choice'
  title: string
  focus: string
  items: ChoiceItem[]
}

/** Escribir la respuesta. El hueco se marca con ___ (puede llevar pista entre paréntesis) */
export interface GapItem {
  sentence: string
  answers: string[]
  explanation: string
}
export interface GapExercise {
  id: string
  kind: 'gap'
  title: string
  focus: string
  items: GapItem[]
}

/**
 * Detectar el error. La parte incorrecta va entre corchetes: "I [have seen] him yesterday."
 * Si la frase es correcta, no lleva corchetes y `correction` es null.
 */
export interface ErrorItem {
  sentence: string
  correction: string | null
  explanation: string
}
export interface ErrorExercise {
  id: string
  kind: 'error'
  title: string
  focus: string
  items: ErrorItem[]
}

export type Exercise =
  | McClozeExercise
  | OpenClozeExercise
  | WordFormationExercise
  | KwtExercise
  | ChoiceExercise
  | GapExercise
  | ErrorExercise

/** Bloque de teoría de un tema de gramática o vocabulario */
export interface TheoryBlock {
  title: string
  points: string[]
  examples?: { en: string; es?: string; wrong?: boolean }[]
}

/** Guía de una parte del examen (en español) */
export interface PartGuide {
  /** qué es y cómo es en el examen */
  format: string[]
  /** qué evalúa */
  tests: string[]
  /** estrategia paso a paso */
  strategy: string[]
  /** errores típicos de hispanohablantes */
  pitfalls?: string[]
}

/**
 * Una "parte" puede ser una parte real del examen (con number, questions y guide)
 * o un tema de práctica (Grammar/Vocabulary) con teoría.
 */
export interface PartInfo {
  /** slug para la URL, p. ej. "part-1" o "conditionals" */
  slug: string
  /** número de la parte en el examen (solo partes de examen) */
  number?: number
  name: string
  nameEs: string
  /** nº de preguntas por ejercicio en el examen (solo partes de examen) */
  questions?: number
  /** minutos para el modo examen */
  suggestedMinutes: number
  guide?: PartGuide
  theory?: TheoryBlock[]
  /** frase corta para la lista de temas */
  summary?: string
  exercises: Exercise[]
}

export interface SectionInfo {
  slug: string
  name: string
  nameEs: string
  description: string
  icon: string
  available: boolean
  parts: PartInfo[]
}
