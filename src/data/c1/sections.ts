import type { SectionInfo } from '../../types'
import type { PartInfo } from '../../types'
import { c1Essay } from './writing/essay'
import { c1Conditionals, c1Cleft, c1Inversion, c1Tenses } from './grammar/g1'
import { c1Modals, c1Passive, c1Relatives, c1Wishes } from './grammar/g2'
import { c1Linking, c1Reporting, c1Subjunctive, c1Verbpatterns } from './grammar/g3'
import { c1Comparison, c1Determiners, c1Ellipsis, c1Participles } from './grammar/g4'
import { c1Collocations, c1Idioms, c1Intensifiers, c1Phrasal } from './vocabulary/v1'
import { c1Confusing, c1Prepositions, c1Register, c1WordFormation } from './vocabulary/v2'
import { c1Business, c1Media, c1Science, c1Society } from './vocabulary/v3'
import { c1Arts, c1Environment, c1Health, c1Law } from './vocabulary/v4'
import { c1Letter, c1Proposal, c1Report, c1Review } from './writing/part2'
import { c1Part1 } from './uoe/part1'
import { c1Part1B } from './uoe/part1b'
import { c1Part1C } from './uoe/part1c'
import { c1Part2 } from './uoe/part2'
import { c1Part2B } from './uoe/part2b'
import { c1Part2C } from './uoe/part2c'
import { c1Part3 } from './uoe/part3'
import { c1Part3B } from './uoe/part3b'
import { c1Part3C } from './uoe/part3c'
import { c1Part3D } from './uoe/part3d'
import { c1Part4 } from './uoe/part4'
import { c1Part4B } from './uoe/part4b'
import { c1Part4C } from './uoe/part4c'
import { c1Part4D } from './uoe/part4d'
import { c1Part5 } from './reading/part5'
import { c1Part5B } from './reading/part5b'
import { c1Part5C } from './reading/part5c'
import { c1Part6 } from './reading/part6'
import { c1Part6B } from './reading/part6b'
import { c1Part6C } from './reading/part6c'
import { c1Part7 } from './reading/part7'
import { c1Part7B } from './reading/part7b'
import { c1Part7C } from './reading/part7c'
import { c1Part8 } from './reading/part8'
import { c1Part8B } from './reading/part8b'
import { c1Part8C } from './reading/part8c'

function grouped(group: string, parts: PartInfo[]): PartInfo[] {
  return parts.map((p) => ({ ...p, group }))
}

/** C1 Advanced: Reading & Use of English (8 partes, 56 preguntas, 1 h 30 min). */
export const c1Sections: SectionInfo[] = [
  {
    slug: 'use-of-english',
    name: 'Use of English',
    nameEs: 'Uso del inglés',
    description: 'Partes 1–4 del Reading & Use of English de C1: colocaciones, gramática, formación de palabras y transformaciones.',
    icon: '🧩',
    available: true,
    parts: [
      {
        slug: 'part-1',
        number: 1,
        name: 'Multiple-choice cloze',
        nameEs: 'Huecos con 4 opciones',
        questions: 8,
        suggestedMinutes: 7,
        guide: {
          format: [
            'Un texto con 8 huecos y 4 opciones (A–D) para cada uno. Cada acierto vale 1 punto.',
            'En C1 esta parte cuenta para la nota de Reading, no para la de Use of English.',
          ],
          tests: [
            'Colocaciones menos frecuentes que en B2 (bear in mind, pose a threat, draw attention to).',
            'Expresiones idiomáticas y phrasal verbs (come to terms with, by and large).',
            'Matices entre sinónimos casi exactos (claim/allege/assert, reluctant/unwilling).',
            'La estructura que sigue a cada palabra (prevent FROM, insist ON, object TO + -ing).',
          ],
          strategy: [
            'Lee el texto entero antes de mirar las opciones.',
            'En C1 las cuatro opciones casi siempre significan lo mismo. Decide por la combinación: qué palabra va con el sustantivo o la preposición que tiene al lado.',
            'Lee la frase completa: a veces la pista está tres o cuatro palabras después del hueco.',
            'Si no conoces la colocación, descarta las opciones que exigen otra estructura gramatical.',
          ],
          pitfalls: [
            'Elegir por significado sin comprobar la preposición que sigue.',
            'Fiarse de la traducción: "jugar un papel" es "play a role", pero "tomar una decisión" es "make a decision".',
          ],
        },
        exercises: [...c1Part1, ...c1Part1B, ...c1Part1C],
      },
      {
        slug: 'part-2',
        number: 2,
        name: 'Open cloze',
        nameEs: 'Huecos sin opciones',
        questions: 8,
        suggestedMinutes: 9,
        guide: {
          format: [
            'Un texto con 8 huecos. Escribes UNA palabra en cada uno. Sin opciones.',
            'Las contracciones no valen y la ortografía tiene que ser correcta.',
          ],
          tests: [
            'Gramática de nivel alto: inversión (Not only, Rarely), comparativas dobles, relativos con preposición (in which, by whom).',
            'Conectores y expresiones fijas (as long as, in spite of, let alone, by no means).',
            'Partes de phrasal verbs y estructuras con it/there (it is worth, there is no point).',
          ],
          strategy: [
            'Lee el texto entero antes de escribir.',
            'Decide qué tipo de palabra falta: auxiliar, preposición, conector, pronombre, artículo, determinante.',
            'Busca estructuras de dos partes: si ves "not only" busca "but", si ves "the more" busca otro "the".',
            'Relee la frase con tu palabra: tiene que ser gramatical y tener sentido.',
          ],
          pitfalls: [
            'Poner una palabra con contenido (un sustantivo, un adjetivo) cuando falta una palabra gramatical.',
            'Olvidar que algunas expresiones llevan artículo: as a result, on the whole, for the time being.',
          ],
        },
        exercises: [...c1Part2, ...c1Part2B, ...c1Part2C],
      },
      {
        slug: 'part-3',
        number: 3,
        name: 'Word formation',
        nameEs: 'Formar palabras a partir de una raíz',
        questions: 8,
        suggestedMinutes: 9,
        guide: {
          format: [
            'Un texto con 8 huecos. Al lado de cada línea hay una palabra en MAYÚSCULAS que tienes que transformar.',
            'Cada acierto vale 1 punto. La ortografía cuenta.',
          ],
          tests: [
            'Cambios dobles y triples: prefijo + sufijo (UNDENIABLY, IRREPLACEABLE).',
            'Cambios internos (DEEP, depth; RESIDE, residential) y palabras compuestas (OUTSTANDING, OVERWHELMING).',
            'Plurales y sentido negativo que solo da el contexto.',
          ],
          strategy: [
            'Decide qué categoría hace falta: sustantivo, adjetivo, verbo o adverbio.',
            'Lee la frase entera para saber si el sentido es positivo o negativo y si hace falta plural.',
            'Piensa en familias de palabras: si conoces "comprehend", piensa en comprehension, comprehensive, incomprehensible.',
          ],
          pitfalls: [
            'Quedarse en el primer cambio cuando hacen falta dos (care, careless, carelessness).',
            'Errores de ortografía en dobles consonantes y en -able/-ible.',
          ],
        },
        exercises: [...c1Part3, ...c1Part3B, ...c1Part3C, ...c1Part3D],
      },
      {
        slug: 'part-4',
        number: 4,
        name: 'Key word transformation',
        nameEs: 'Reescribir una frase con una palabra dada',
        questions: 6,
        suggestedMinutes: 13,
        guide: {
          format: [
            '6 frases. Completas la segunda para que signifique lo mismo que la primera, usando la palabra clave sin cambiarla.',
            'En C1 escribes entre 3 y 6 palabras. Las contracciones cuentan como dos.',
            'Cada pregunta vale 2 puntos y se puede puntuar a medias.',
          ],
          tests: [
            'Expresiones idiomáticas y fijas (take for granted, at short notice, in the dark).',
            'Estructuras de nivel alto: inversión, pasivas impersonales, wish / if only, causativas.',
            'Sustantivos en lugar de verbos: "she decided" → "she came to a decision".',
          ],
          strategy: [
            'Identifica qué parte de la primera frase tiene que cambiar y qué se mantiene igual.',
            'Piensa qué expresión o estructura contiene la palabra clave: en C1 suele ser una expresión fija.',
            'Comprueba tiempos verbales, número de palabras y que no falte información.',
          ],
          pitfalls: [
            'Cambiar la forma de la palabra clave (LOOK → looking).',
            'Dejar fuera un detalle de la frase original (un "always", un "very").',
          ],
        },
        exercises: [...c1Part4, ...c1Part4B, ...c1Part4C, ...c1Part4D],
      },
    ],
  },
  {
    slug: 'reading',
    name: 'Reading',
    nameEs: 'Comprensión lectora',
    description: 'Partes 5–8 del Reading & Use of English de C1: opción múltiple, textos cruzados, párrafos que faltan y emparejar.',
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
            'Un texto largo (unas 650–800 palabras), normalmente de prensa, un ensayo o una novela.',
            '6 preguntas con 4 opciones. Cada acierto vale 2 puntos.',
          ],
          tests: [
            'Opinión, actitud e intención del autor, a menudo implícitas.',
            'Significado de expresiones y de ideas por el contexto, ironía y tono.',
            'Referencias y propósito de párrafos concretos.',
          ],
          strategy: [
            'Lee el texto rápido para captar el tono y la postura del autor.',
            'Localiza la parte que responde a cada pregunta (siguen el orden del texto) y léela con calma.',
            'Responde con tus palabras antes de mirar las opciones.',
            'Desconfía de las opciones que copian palabras del texto: la correcta suele estar reformulada.',
          ],
          pitfalls: [
            'Elegir una afirmación verdadera que no contesta a la pregunta.',
            'No distinguir entre lo que piensa el autor y lo que dice que piensan otros.',
          ],
        },
        exercises: [...c1Part5, ...c1Part5B, ...c1Part5C],
      },
      {
        slug: 'part-6',
        number: 6,
        name: 'Cross-text multiple matching',
        nameEs: 'Cuatro textos y sus opiniones cruzadas',
        questions: 4,
        suggestedMinutes: 10,
        guide: {
          format: [
            'Cuatro textos cortos (A–D) de cuatro autores que opinan sobre el mismo tema.',
            '4 preguntas: qué autor comparte o contradice la opinión de otro sobre un punto concreto. Cada acierto vale 2 puntos.',
          ],
          tests: [
            'Entender opiniones y actitudes, y compararlas entre textos.',
            'Reconocer acuerdo y desacuerdo aunque se expresen con palabras distintas.',
          ],
          strategy: [
            'Lee las 4 preguntas antes que los textos y subraya el tema de cada una.',
            'Lee los cuatro textos y, para cada tema de las preguntas, apunta en el margen qué opina cada autor: a favor, en contra o matizado.',
            'Con esa tabla, responder es comparar: "¿quién piensa distinto que A sobre X?".',
          ],
          pitfalls: [
            'Elegir un autor que habla del tema pero no expresa una opinión clara sobre él.',
            'Olvidar que la pregunta puede pedir la opinión diferente, no la parecida.',
          ],
        },
        exercises: [...c1Part6, ...c1Part6B, ...c1Part6C],
      },
      {
        slug: 'part-7',
        number: 7,
        name: 'Gapped text',
        nameEs: 'Texto con párrafos que faltan',
        questions: 6,
        suggestedMinutes: 15,
        guide: {
          format: [
            'Un texto largo del que se han quitado 6 párrafos. Tienes 7 párrafos (A–G) para colocar: sobra uno.',
            'Cada acierto vale 2 puntos.',
          ],
          tests: [
            'Estructura y coherencia de un texto largo: cómo avanza la argumentación o la historia.',
            'Referencias entre párrafos: nombres, pronombres, sinónimos, conectores y tiempos verbales.',
          ],
          strategy: [
            'Lee el texto principal entero para entender el hilo antes de mirar los párrafos.',
            'Fíjate en el final del párrafo anterior al hueco y en el principio del siguiente: el párrafo correcto tiene que enlazar con los dos.',
            'Subraya en los párrafos A–G las referencias: "this approach", "the second group", "she", "however".',
            'Coloca primero los que tengas claros y comprueba al final que el que sobra no encaja en ningún sitio.',
          ],
          pitfalls: [
            'Elegir un párrafo porque trata el mismo tema sin comprobar las referencias.',
            'No mirar la frase que viene después del hueco.',
          ],
        },
        exercises: [...c1Part7, ...c1Part7B, ...c1Part7C],
      },
      {
        slug: 'part-8',
        number: 8,
        name: 'Multiple matching',
        nameEs: 'Emparejar enunciados con secciones',
        questions: 10,
        suggestedMinutes: 12,
        guide: {
          format: [
            'Un texto dividido en secciones (A–D, A–E o A–F) o varios textos cortos.',
            '10 enunciados: dices en qué sección aparece cada idea. Cada acierto vale 1 punto.',
          ],
          tests: [
            'Localizar información concreta y opiniones expresadas con otras palabras.',
            'Distinguir matices: dos secciones pueden tratar lo mismo, pero solo una dice lo que pide el enunciado.',
          ],
          strategy: [
            'Lee los 10 enunciados y subraya la idea clave de cada uno.',
            'Lee la sección A y marca qué enunciados aparecen. Sigue con las demás.',
            'Comprueba cada enunciado palabra por palabra: "regrets", "was surprised", "had expected" son ideas distintas.',
          ],
          pitfalls: [
            'Elegir una sección porque repite una palabra del enunciado.',
            'Pasar demasiado tiempo en una pregunta: es la parte en la que más rápido se puede sumar.',
          ],
        },
        exercises: [...c1Part8, ...c1Part8B, ...c1Part8C],
      },
    ],
  },
  {
    slug: 'writing',
    name: 'Writing',
    nameEs: 'Expresión escrita',
    description: 'Essay, email o carta, proposal, report y review de nivel C1, con estructura, modelo comentado y tareas.',
    icon: '✍️',
    available: true,
    intro: [
      'El Writing de C1 dura 1 hora y 30 minutos y tiene 2 partes. En cada una escribes entre 220 y 260 palabras.',
      'Part 1 es obligatoria: un essay a partir de unas notas con tres puntos, de los que eliges dos. En la Part 2 eliges UNA de tres tareas: email o carta, proposal, report o review.',
      'Se corrige con los mismos 4 criterios que en B2 (Content, Communicative Achievement, Organisation y Language), de 0 a 5 cada uno, pero con la exigencia de C1: argumentos matizados, vocabulario preciso y estructuras complejas usadas con naturalidad.',
      'Consejo: unos 45 minutos por parte, con 5–10 para planificar y 5 para revisar.',
    ],
    parts: [c1Essay, c1Letter, c1Proposal, c1Report, c1Review],
  },
  {
    slug: 'grammar',
    name: 'Grammar',
    nameEs: 'Gramática',
    description: 'La gramática que separa un B2 de un C1: inversión, frases escindidas, pasivas avanzadas, subjuntivo y más.',
    icon: '📐',
    available: true,
    parts: [
      ...grouped('Tiempos y modales', [c1Tenses, c1Modals, c1Wishes, c1Conditionals]),
      ...grouped('Énfasis y estilo', [c1Inversion, c1Cleft, c1Subjunctive, c1Ellipsis]),
      ...grouped('Estructuras de la frase', [c1Passive, c1Relatives, c1Participles, c1Reporting, c1Verbpatterns]),
      ...grouped('Conectores y determinantes', [c1Linking, c1Comparison, c1Determiners]),
    ],
  },
  {
    slug: 'vocabulary',
    name: 'Vocabulary',
    nameEs: 'Vocabulario',
    description: 'Phrasal verbs, colocaciones, expresiones idiomáticas y vocabulario temático de nivel C1.',
    icon: '📚',
    available: true,
    parts: [
      ...grouped('Palabras que van juntas', [c1Phrasal, c1Collocations, c1Intensifiers, c1Idioms, c1Prepositions]),
      ...grouped('Precisión y registro', [c1WordFormation, c1Confusing, c1Register]),
      ...grouped('Vocabulario por temas', [c1Science, c1Society, c1Business, c1Media, c1Environment, c1Arts, c1Health, c1Law]),
    ],
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
