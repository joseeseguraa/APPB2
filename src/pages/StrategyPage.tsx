import { getLevel } from '../lib/level'
import { Link } from 'react-router-dom'
import { PageHeader, Panel } from '../components/ui'

interface Tip {
  part: string
  to: string
  minutes: string
  steps: string[]
  trap: string
}

const READING: Tip[] = [
  {
    part: 'Part 1, Multiple-choice cloze',
    to: '/s/use-of-english/part-1',
    minutes: '8 min',
    steps: [
      'Lee el texto entero por encima antes de mirar las opciones: el sentido general descarta muchas.',
      'Mira la palabra que va DESPUÉS del hueco. La preposición o la estructura que sigue (to, of, -ing, that) suele decidir entre dos opciones parecidas.',
      'Piensa en colocaciones fijas: make a decision, take part in, pay attention to.',
    ],
    trap: 'Las cuatro opciones casi siempre significan algo parecido. Lo que cambia es con qué palabras se combinan.',
  },
  {
    part: 'Part 2, Open cloze',
    to: '/s/use-of-english/part-2',
    minutes: '10 min',
    steps: [
      'Decide primero QUÉ TIPO de palabra falta: artículo, preposición, pronombre relativo, auxiliar, conector.',
      'Lee la frase completa, también lo que viene después del hueco: muchas respuestas dependen de la segunda mitad (although… / despite…).',
      'Repasa las palabras más frecuentes: which, who, there, it, been, as, such, so, whether, own, unless.',
    ],
    trap: 'Una sola palabra por hueco. Las contracciones (didn\'t) no valen como una palabra.',
  },
  {
    part: 'Part 3, Word formation',
    to: '/s/use-of-english/part-3',
    minutes: '10 min',
    steps: [
      'Antes de escribir, decide si el hueco necesita sustantivo, adjetivo, verbo o adverbio.',
      'Comprueba si hace falta plural (a few ___S) o un sentido negativo (un-, dis-, -less). Suele haber uno o dos negativos por texto.',
      'Revisa la ortografía letra a letra: una palabra mal escrita es un error.',
    ],
    trap: 'A veces hay que hacer dos cambios a la vez: prefijo y sufijo (UNEXPECTEDLY) o un cambio interno (strong, strength).',
  },
  {
    part: 'Part 4, Key word transformation',
    to: '/s/use-of-english/part-4',
    minutes: '12 min',
    steps: [
      'No cambies la palabra clave y úsala tal cual.',
      'Escribe entre 2 y 5 palabras. Las contracciones cuentan como dos (didn\'t = did not).',
      'Busca la estructura que se está probando: pasiva, estilo indirecto, condicional, wish, phrasal verb, expresión fija.',
      'Lee la frase final completa y comprueba que significa exactamente lo mismo que la original y que el tiempo verbal concuerda.',
    ],
    trap: 'Cada pregunta vale 2 puntos y se puede puntuar a medias. Si no lo tienes entero, escribe lo que sepas: nunca la dejes en blanco.',
  },
  {
    part: 'Part 5, Multiple choice',
    to: '/s/reading/part-5',
    minutes: '13 min',
    steps: [
      'Lee el texto una vez para la idea general.',
      'Las preguntas siguen el orden del texto. Localiza el párrafo de cada una y léelo con atención.',
      'Formula tu respuesta antes de mirar las opciones, y luego busca la que coincide.',
    ],
    trap: 'Las opciones incorrectas suelen repetir palabras exactas del texto. La correcta lo dice con otras palabras.',
  },
  {
    part: 'Part 6, Gapped text',
    to: '/s/reading/part-6',
    minutes: '12 min',
    steps: [
      'Lee el texto sin las frases para entender cómo avanza.',
      'Fíjate en las pistas de unión: pronombres (this, they, it), conectores (however, as a result) y palabras que se repiten.',
      'Comprueba que la frase encaja con lo que va ANTES y con lo que va DESPUÉS del hueco.',
    ],
    trap: 'Sobra una frase. Si dudas entre dos huecos, deja ese par para el final y resuelve antes los seguros.',
  },
  {
    part: 'Part 7, Multiple matching',
    to: '/s/reading/part-7',
    minutes: '10 min',
    steps: [
      'Lee las preguntas antes que los textos y subraya la idea clave de cada una.',
      'Lee el texto buscando esas ideas (scanning). No hace falta entenderlo todo.',
      'Una misma sección puede ser la respuesta de varias preguntas.',
    ],
    trap: 'Es la parte más rápida si vas con las preguntas en la cabeza. Si te quedas sin tiempo, deja esta para el final.',
  },
]

const WRITING = [
  'Tienes 1 h 20 min para dos textos: unos 40 minutos para cada uno.',
  'Dedica los primeros 5–10 minutos a planificar: párrafos, una idea por párrafo, y qué vocabulario y conectores vas a usar.',
  'Part 1 es siempre un essay y tienes que tratar los dos puntos que te dan y añadir una idea tuya.',
  'En la Part 2 elige el tipo de texto que mejor domines, no el tema que más te guste.',
  'Respeta el registro: formal en cartas a desconocidos y reports, informal en emails a amigos.',
  'Guarda 5 minutos al final para revisar concordancias, tiempos verbales, ortografía y el número de palabras (140–190).',
]

const C1_READING: Tip[] = [
  {
    part: 'Part 1, Multiple-choice cloze',
    to: '/s/use-of-english/part-1',
    minutes: '7 min',
    steps: [
      'Lee el texto entero primero: en C1 el sentido general elimina pocas opciones, pero te da el registro.',
      'Las cuatro opciones casi siempre son sinónimos. Decide por la palabra que va al lado (colocación) y por la preposición que sigue.',
      'Si dudas, piensa en qué combinación has leído más veces: "pose a threat", no "make a threat".',
    ],
    trap: 'Elegir la palabra con el significado correcto pero la combinación equivocada.',
  },
  {
    part: 'Part 2, Open cloze',
    to: '/s/use-of-english/part-2',
    minutes: '9 min',
    steps: [
      'Busca estructuras de dos piezas: not only… but, no sooner… than, the more… the more, such… that.',
      'Fíjate en lo que viene detrás: un "than" exige comparativo antes; un verbo invertido exige una expresión negativa.',
      'Repasa las palabras que más salen: whether, whereby, albeit, nor, hardly, rather, as, such, it, there.',
    ],
    trap: 'Una palabra por hueco y sin contracciones. Muchas respuestas son partes de expresiones fijas (by no means, as a result).',
  },
  {
    part: 'Part 3, Word formation',
    to: '/s/use-of-english/part-3',
    minutes: '9 min',
    steps: [
      'Decide la categoría (sustantivo, adjetivo, verbo, adverbio) y si hace falta plural o negativo.',
      'En C1 suelen hacer falta dos o tres cambios: prefijo + sufijo, o un cambio interno (RESIDE → residential).',
      'Comprueba la ortografía letra a letra: -able/-ible y dobles consonantes son los fallos típicos.',
    ],
    trap: 'Quedarse en el primer cambio cuando el texto pide más (care → careless → carelessness).',
  },
  {
    part: 'Part 4, Key word transformation',
    to: '/s/use-of-english/part-4',
    minutes: '13 min',
    steps: [
      'Escribe entre 3 y 6 palabras, con la palabra clave sin cambiarla.',
      'En C1 casi siempre hay una expresión fija o una estructura avanzada: in the dark, take for granted, no sooner, it\'s high time.',
      'Comprueba que no se pierde ningún matiz de la frase original (un "hardly", un "completely").',
    ],
    trap: 'Cada pregunta vale 2 puntos y se puntúa a medias: escribe siempre algo, aunque no estés seguro de todo.',
  },
  {
    part: 'Part 5, Multiple choice',
    to: '/s/reading/part-5',
    minutes: '15 min',
    steps: [
      'Lee el texto entero rápido para captar el tono: ¿es irónico, crítico, nostálgico?',
      'Responde con tus palabras antes de mirar las opciones.',
      'Distingue lo que piensa el autor de lo que cuenta que piensan otros.',
    ],
    trap: 'Opciones que repiten palabras del texto pero dicen otra cosa.',
  },
  {
    part: 'Part 6, Cross-text multiple matching',
    to: '/s/reading/part-6',
    minutes: '10 min',
    steps: [
      'Lee las 4 preguntas y apunta los temas sobre los que se compara a los autores.',
      'Lee los 4 textos y, para cada tema, anota en una tabla qué opina cada uno: a favor, en contra o matizado.',
      'Con la tabla, cada pregunta es una comparación rápida.',
    ],
    trap: 'Elegir a un autor que menciona el tema sin dar una opinión clara sobre él.',
  },
  {
    part: 'Part 7, Gapped text',
    to: '/s/reading/part-7',
    minutes: '15 min',
    steps: [
      'Lee el texto principal entero antes de mirar los párrafos A–G.',
      'Mira el final del párrafo anterior y el principio del siguiente: el párrafo correcto enlaza con los dos.',
      'Subraya referencias: "this approach", "the second", "she", "however", fechas y tiempos verbales.',
    ],
    trap: 'Sobra un párrafo que trata el mismo tema: comprueba las referencias, no solo el tema.',
  },
  {
    part: 'Part 8, Multiple matching',
    to: '/s/reading/part-8',
    minutes: '12 min',
    steps: [
      'Lee los 10 enunciados y subraya la idea exacta (regrets, was surprised, had expected).',
      'Lee sección por sección y marca los enunciados que encajan.',
      'Busca la idea parafraseada, no la palabra repetida.',
    ],
    trap: 'Es la parte más rápida si llevas las preguntas en la cabeza; si vas mal de tiempo, no la dejes en blanco.',
  },
]

const C1_WRITING = [
  'Tienes 1 h 30 min para dos textos de 220 a 260 palabras: unos 45 minutos cada uno.',
  'Part 1 es un essay: elige DOS de los tres puntos, y en la conclusión di cuál es más importante o eficaz y por qué.',
  'Puedes usar las opiniones del enunciado, pero siempre con tus palabras.',
  'En la Part 2 elige el tipo que domines (email o carta, proposal, report o review), no el tema que más te guste.',
  'Lo que diferencia un C1: matizar (admittedly, this is not to say that…), vocabulario preciso y estructuras complejas usadas con naturalidad.',
  'Guarda 5 minutos para revisar registro, concordancias, ortografía y el número de palabras.',
]

const GENERAL = [
  'Los errores no restan puntos. No dejes nunca una pregunta en blanco.',
  'En la hoja de respuestas de Use of English (Parts 2, 3 y 4) se escribe en MAYÚSCULAS, a lápiz.',
  'Pasa las respuestas a la hoja sobre la marcha o reserva 5 minutos al final para hacerlo. No hay tiempo extra.',
  'La ortografía cuenta en las Parts 2, 3 y 4. Escribe con letra clara: si no se lee, no se puntúa.',
  'Si una pregunta te atasca, márcala y sigue. Vuelve a ella al final.',
]

export default function StrategyPage() {
  const c1 = getLevel() === 'c1'
  const reading = c1 ? C1_READING : READING
  const writing = c1 ? C1_WRITING : WRITING
  return (
    <div className="max-w-3xl">
      <PageHeader
        icon="tips"
        title="Estrategia para el examen"
        lead="Cómo repartir el tiempo y qué hacer en cada parte. Practica con estas pautas en el modo examen para llegar con el ritmo hecho."
      />

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Antes de nada</h2>
        <Panel className="divide-y divide-line">
          {GENERAL.map((t) => (
            <p key={t} className="px-5 py-3 text-[0.97rem]">
              {t}
            </p>
          ))}
        </Panel>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-1">Reading & Use of English</h2>
        <p className="text-ink-2 mb-4">{c1 ? '1 h 30 min para 8 partes. Este reparto suma 90 minutos' : '1 h 15 min para 7 partes. Este reparto suma 75 minutos'}; ajústalo a tus puntos fuertes.</p>
        <div className="space-y-4">
          {reading.map((t) => (
            <Panel key={t.part} className="p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="font-bold text-lg">{t.part}</h3>
                <span className="text-sm text-ink-2 tabular-nums">{t.minutes}</span>
              </div>
              <ul className="list-disc pl-5 space-y-1.5 text-[0.97rem]">
                {t.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p className="mt-3 rounded-md bg-print-soft px-3 py-2 text-[0.95rem]">
                <span className="font-semibold text-print-deep">Ojo: </span>
                {t.trap}
              </p>
              <Link to={t.to} className="inline-block mt-3 text-sm font-semibold text-print hover:underline">
                Practicar esta parte
              </Link>
            </Panel>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Writing</h2>
        <Panel className="divide-y divide-line">
          {writing.map((t) => (
            <p key={t} className="px-5 py-3 text-[0.97rem]">
              {t}
            </p>
          ))}
        </Panel>
        <Link to="/s/writing" className="inline-block mt-3 text-sm font-semibold text-print hover:underline">
          Ver los tipos de texto y sus estructuras
        </Link>
      </section>
    </div>
  )
}
