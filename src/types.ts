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

export type Exercise =
  | McClozeExercise
  | OpenClozeExercise
  | WordFormationExercise
  | KwtExercise

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

export interface PartInfo {
  /** slug para la URL, p. ej. "part-1" */
  slug: string
  number: number
  name: string
  nameEs: string
  questions: number
  /** minutos recomendados en el examen para esta parte */
  suggestedMinutes: number
  guide: PartGuide
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
