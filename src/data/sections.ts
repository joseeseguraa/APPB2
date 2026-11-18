import type { SectionInfo } from '../types'
import { part1Exercises } from './uoe/part1'
import { part1ExercisesB } from './uoe/part1b'
import { part2Exercises } from './uoe/part2'
import { part2ExercisesB } from './uoe/part2b'
import { part3Exercises } from './uoe/part3'
import { part3ExercisesB } from './uoe/part3b'
import { part4Exercises } from './uoe/part4'
import { part4ExercisesB } from './uoe/part4b'
import { future, narrativeTenses, presentPerfect } from './grammar/tenses'
import { conditionals, passive, reportedSpeech } from './grammar/structures'
import { gerunds, modals, relatives } from './grammar/more'
import { collocations, phrasalVerbs, prepositions } from './vocabulary/words'
import { confusingWords, expressions, falseFriends } from './vocabulary/traps'
import { part5Exercises } from './reading/part5'
import { part6Exercises } from './reading/part6'
import { part7Exercises } from './reading/part7'
import { article, essay, informalEmail } from './writing/types1'
import { formalLetter, report, review } from './writing/types2'

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
        exercises: [...part1Exercises, ...part1ExercisesB],
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
        exercises: [...part2Exercises, ...part2ExercisesB],
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
        exercises: [...part3Exercises, ...part3ExercisesB],
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
        exercises: [...part4Exercises, ...part4ExercisesB],
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
    description: 'Partes 5–7 del Reading & Use of English: opción múltiple, texto con huecos y emparejar.',
    icon: '📖',
    available: true,
    parts: [
      {
        slug: 'part-5',
        number: 5,
        name: 'Multiple choice',
        nameEs: 'Texto largo con preguntas de opción múltiple',
        questions: 6,
        suggestedMinutes: 15,
        guide: {
          format: [
            'Un texto largo (unas 550–650 palabras): un artículo, una novela o un relato en primera persona.',
            '6 preguntas con 4 opciones (A–D). Cada acierto vale 2 puntos.',
            'Las preguntas siguen el orden del texto.',
          ],
          tests: [
            'Comprensión detallada, opiniones y actitudes del autor o de los personajes.',
            'Significado de una palabra o expresión por el contexto.',
            'Referencias: a qué se refiere "it", "this" o "they".',
            'Propósito de un párrafo o idea principal.',
          ],
          strategy: [
            'Lee el texto entero rápido para entender la idea general (2–3 minutos).',
            'Lee la primera pregunta SIN mirar las opciones y localiza la parte del texto que responde.',
            'Contesta con tus palabras y después busca la opción que mejor coincida.',
            'Comprueba por qué las otras tres opciones son incorrectas: suelen usar palabras del texto pero decir otra cosa.',
            'Sigue con la siguiente pregunta: la respuesta estará más adelante en el texto.',
          ],
          pitfalls: [
            'Elegir la opción que repite palabras exactas del texto: la correcta suele ser una paráfrasis.',
            'Elegir algo verdadero que no responde a la pregunta.',
            'Usar tu opinión o tu conocimiento del mundo en vez de lo que dice el texto.',
          ],
        },
        exercises: part5Exercises,
      },
      {
        slug: 'part-6',
        number: 6,
        name: 'Gapped text',
        nameEs: 'Texto con frases que faltan',
        questions: 6,
        suggestedMinutes: 15,
        guide: {
          format: [
            'Un texto del que se han quitado 6 frases. Tienes 7 frases (A–G) para colocar: sobra una.',
            'Cada acierto vale 2 puntos.',
          ],
          tests: [
            'Cómo está organizado un texto: coherencia y cohesión.',
            'Pronombres y referencias (this, they, these, one, the others).',
            'Conectores (but, so, instead, also) y secuencia temporal.',
          ],
          strategy: [
            'Lee el texto con huecos entero para entender la estructura y el hilo.',
            'Lee las 7 frases y subraya pistas: pronombres, conectores, nombres, tiempos verbales.',
            'En cada hueco, lee lo de ANTES y lo de DESPUÉS: la frase tiene que conectar con las dos partes.',
            'Empieza por los huecos más fáciles y deja los dudosos para el final.',
            'Cuando termines, lee el texto completo con tus frases para comprobar que fluye.',
          ],
          pitfalls: [
            'Mirar solo la frase anterior al hueco y olvidar la posterior.',
            'Elegir una frase solo porque trata el mismo tema, sin comprobar las referencias.',
          ],
        },
        exercises: part6Exercises,
      },
      {
        slug: 'part-7',
        number: 7,
        name: 'Multiple matching',
        nameEs: 'Emparejar enunciados con textos',
        questions: 10,
        suggestedMinutes: 15,
        guide: {
          format: [
            'Un texto dividido en secciones (A–D o A–E), o varios textos cortos.',
            '10 enunciados: tienes que decir en qué sección aparece cada idea. Cada acierto vale 1 punto.',
            'Una sección puede ser la respuesta de varios enunciados.',
          ],
          tests: [
            'Encontrar información concreta rápidamente (scanning).',
            'Reconocer una idea expresada con otras palabras (paráfrasis).',
          ],
          strategy: [
            'Lee primero los 10 enunciados y subraya la idea clave de cada uno.',
            'Lee la sección A y marca qué enunciados aparecen en ella. Después sigue con la B, la C, etc.',
            'Busca la IDEA, no las palabras: "felt envious" puede aparecer como "I was really jealous".',
            'Cuidado con las trampas: dos secciones pueden hablar de lo mismo, pero solo una dice exactamente lo que pide el enunciado.',
          ],
          pitfalls: [
            'Elegir una sección porque contiene la misma palabra que el enunciado.',
            'Dedicar demasiado tiempo a una sola pregunta.',
          ],
        },
        exercises: part7Exercises,
      },
    ],
  },
  {
    slug: 'writing',
    name: 'Writing',
    nameEs: 'Expresión escrita',
    description: 'Cada tipo de texto por separado, con estructura, frases útiles, modelo comentado y tareas.',
    icon: '✍️',
    available: true,
    intro: [
      'El examen de Writing dura 1 hora y 20 minutos y tiene 2 partes. En cada una escribes entre 140 y 190 palabras.',
      'Part 1 es obligatoria: un essay. En la Part 2 eliges UNA de tres tareas, que puede ser un article, un email o carta (formal o informal), un report o una review.',
      'Se corrige con 4 criterios, cada uno de 0 a 5 puntos: Content (has respondido a todo), Communicative Achievement (formato y registro adecuados), Organisation (párrafos y conectores) y Language (variedad y corrección).',
      'Consejo: dedica unos 40 minutos a cada parte, con 5 minutos para planificar y 5 para revisar.',
    ],
    parts: [essay, article, informalEmail, formalLetter, report, review],
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
