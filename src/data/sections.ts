import type { SectionInfo } from '../types'
import { part1Exercises } from './uoe/part1'
import { part2Exercises } from './uoe/part2'
import { part3Exercises } from './uoe/part3'
import { part4Exercises } from './uoe/part4'
import { future, narrativeTenses, presentPerfect } from './grammar/tenses'
import { conditionals, passive, reportedSpeech } from './grammar/structures'
import { gerunds, modals, relatives } from './grammar/more'
import { collocations, phrasalVerbs, prepositions } from './vocabulary/words'
import { confusingWords, expressions, falseFriends } from './vocabulary/traps'

export const sections: SectionInfo[] = [
  {
    slug: 'use-of-english',
    name: 'Use of English',
    nameEs: 'Uso del inglés',
    description: 'Partes 1–4 del Reading & Use of English: vocabulario, gramática y formación de palabras.',
    icon: '🧩',
    available: true,
    parts: [
      {
        slug: 'part-1',
        number: 1,
        name: 'Multiple-choice cloze',
        nameEs: 'Huecos con 4 opciones',
        questions: 8,
        suggestedMinutes: 8,
        guide: {
          format: [
            'Un texto con 8 huecos. En cada hueco eliges entre 4 opciones (A, B, C o D).',
            'Cada respuesta correcta vale 1 punto.',
          ],
          tests: [
            'Colocaciones: qué palabras van juntas (make a difference, take risks).',
            'Expresiones fijas y phrasal verbs (break even, point out).',
            'Matices de significado entre palabras parecidas (role/job/task).',
            'Qué preposición o estructura acompaña a cada palabra (keen ON, succeed IN, manage TO).',
          ],
          strategy: [
            'Lee primero el texto entero sin mirar las opciones para entender de qué va.',
            'En cada hueco, mira las palabras de ANTES y de DESPUÉS: muchas veces la preposición que sigue decide la respuesta.',
            'Descarta las opciones que no encajan gramaticalmente y luego elige por significado.',
            'Si dudas entre dos, pregúntate cuál "suena" a expresión fija. Las 4 opciones suelen tener significados parecidos, y la clave está en la combinación.',
            'Al terminar, vuelve a leer el texto completo con tus respuestas.',
          ],
          pitfalls: [
            'Traducir del español: "hacer una diferencia" ✗ → "make a difference" ✓.',
            'Confundir make y do, o say y tell.',
            'Fijarse solo en el significado y olvidar la preposición que sigue.',
          ],
        },
        exercises: part1Exercises,
      },
      {
        slug: 'part-2',
        number: 2,
        name: 'Open cloze',
        nameEs: 'Huecos sin opciones',
        questions: 8,
        suggestedMinutes: 10,
        guide: {
          format: [
            'Un texto con 8 huecos. Escribes UNA sola palabra en cada uno y no te dan opciones.',
            'Las contracciones (can\'t, it\'s) cuentan como dos palabras, así que no valen.',
            'La ortografía tiene que ser correcta.',
          ],
          tests: [
            'Sobre todo gramática: preposiciones, artículos, pronombres, relativos, auxiliares.',
            'Conectores (although, despite, unless, however).',
            'Partes de phrasal verbs y expresiones fijas (put OFF, OF course, AT all).',
          ],
          strategy: [
            'Lee el texto entero antes de escribir nada.',
            'En cada hueco, decide primero QUÉ TIPO de palabra falta: ¿un verbo auxiliar, una preposición, un relativo, un conector?',
            'Mira si la frase ya tiene verbo. Si falta un auxiliar (had, would, been), lo notarás.',
            'Comprueba el sentido de toda la frase: los conectores dependen de si hay contraste, causa o adición.',
            'Relee al final para comprobar la ortografía.',
          ],
          pitfalls: [
            'Escribir dos palabras (in which, even though) cuando solo cabe una.',
            'Confundir for y since, o despite y although.',
            'Olvidar la preposición final de una estructura (focus ON, deal WITH).',
          ],
        },
        exercises: part2Exercises,
      },
      {
        slug: 'part-3',
        number: 3,
        name: 'Word formation',
        nameEs: 'Formación de palabras',
        questions: 8,
        suggestedMinutes: 10,
        guide: {
          format: [
            'Un texto con 8 huecos. Al lado de cada hueco hay una palabra en MAYÚSCULAS.',
            'Tienes que transformar esa palabra (añadiendo prefijos o sufijos, o cambiándola) para que encaje.',
          ],
          tests: [
            'Sufijos para formar sustantivos (-tion, -ment, -ness, -ity), adjetivos (-ful, -able, -ive, -ous) y adverbios (-ly).',
            'Prefijos negativos: un-, in-, im-, ir-, il-, dis-, mis-.',
            'Plurales, participios y cambios ortográficos (explain → explanation).',
          ],
          strategy: [
            'Decide qué TIPO de palabra hace falta: ¿sustantivo, adjetivo, adverbio o verbo?',
            'Pistas: detrás de un artículo o posesivo va un sustantivo; delante de un sustantivo, un adjetivo; un adverbio modifica a un verbo o a un adjetivo.',
            'Comprueba si el sentido es NEGATIVO y hace falta un prefijo (unlikely, disappeared).',
            'Mira si hace falta plural (-s) o un tiempo verbal (-ed).',
            'Cuidado con la ortografía: es la causa más frecuente de perder puntos.',
          ],
          pitfalls: [
            'Olvidar el prefijo negativo: es una trampa clásica de esta parte.',
            'Olvidar la -s del plural.',
            'Confundir -ed y -ing: bored (cómo te sientes) frente a boring (lo que te aburre).',
          ],
        },
        exercises: part3Exercises,
      },
      {
        slug: 'part-4',
        number: 4,
        name: 'Key word transformation',
        nameEs: 'Transformaciones con palabra clave',
        questions: 6,
        suggestedMinutes: 15,
        guide: {
          format: [
            '6 ítems. Te dan una frase, una PALABRA CLAVE y una segunda frase incompleta.',
            'Completa la segunda frase con 2 a 5 palabras, incluida la palabra clave, para que signifique lo mismo que la primera.',
            'NO puedes cambiar la palabra clave. Las contracciones cuentan como 2 palabras.',
            'Cada ítem vale hasta 2 puntos: se puntúa por partes.',
          ],
          tests: [
            'Gramática: pasivas, estilo indirecto, condicionales, wish, comparativos, modales.',
            'Vocabulario: phrasal verbs, expresiones fijas, verbos con preposición.',
          ],
          strategy: [
            'Mira qué palabra clave te dan: suele indicar la estructura (WISH → wish + past perfect; SAID → is said to be).',
            'Fíjate en qué viene antes y después del hueco para mantener el tiempo verbal y el sujeto.',
            'Escribe tu respuesta y cuenta las palabras: entre 2 y 5.',
            'Lee la frase completa y comprueba que significa EXACTAMENTE lo mismo que la original.',
            'Si no sabes la respuesta entera, escribe la parte que sepas: puede valer 1 punto.',
          ],
          pitfalls: [
            'Cambiar la forma de la palabra clave (escribir "wished" cuando te dan WISHES).',
            'Pasarte de 5 palabras.',
            'Olvidar información de la frase original (un "not", un tiempo verbal).',
          ],
        },
        exercises: part4Exercises,
      },
    ],
  },
  {
    slug: 'grammar',
    name: 'Grammar',
    nameEs: 'Gramática',
    description: 'Temas de gramática B2 explicados en español, con ejercicios variados.',
    icon: '📐',
    available: true,
    parts: [
      presentPerfect,
      narrativeTenses,
      future,
      conditionals,
      passive,
      reportedSpeech,
      relatives,
      modals,
      gerunds,
    ],
  },
  {
    slug: 'vocabulary',
    name: 'Vocabulary',
    nameEs: 'Vocabulario',
    description: 'Phrasal verbs, collocations, preposiciones, falsos amigos y expresiones fijas.',
    icon: '📚',
    available: true,
    parts: [phrasalVerbs, collocations, prepositions, falseFriends, confusingWords, expressions],
  },
  {
    slug: 'reading',
    name: 'Reading',
    nameEs: 'Comprensión lectora',
    description: 'Partes 5–7: opción múltiple, texto con huecos y emparejar.',
    icon: '📖',
    available: false,
    parts: [],
  },
  {
    slug: 'writing',
    name: 'Writing',
    nameEs: 'Expresión escrita',
    description: 'Essay, article, email/letter, report y review: estructura, frases útiles y modelos.',
    icon: '✍️',
    available: false,
    parts: [],
  },
  {
    slug: 'speaking',
    name: 'Speaking',
    nameEs: 'Expresión oral',
    description: 'Las 4 partes con temporizador, preguntas y grabación de tu voz.',
    icon: '🗣️',
    available: false,
    parts: [],
  },
  {
    slug: 'listening',
    name: 'Listening',
    nameEs: 'Comprensión auditiva',
    description: 'Las 4 partes del examen de listening.',
    icon: '🎧',
    available: false,
    parts: [],
  },
]

export function findSection(slug?: string) {
  return sections.find((s) => s.slug === slug)
}

export function findPart(sectionSlug?: string, partSlug?: string) {
  return findSection(sectionSlug)?.parts.find((p) => p.slug === partSlug)
}
