import type { PartInfo } from '../../types'
import { ch, er, g } from '../helpers'

export const questions: PartInfo = {
  slug: 'questions',
  name: 'Questions & question tags',
  nameEs: 'Preguntas indirectas, de sujeto y question tags',
  summary: 'Could you tell me where…?, Who called?, isn\'t it?',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Preguntas indirectas',
      points: [
        'Se usan para preguntar con educación: Could you tell me…? / Do you know…? / I wonder…',
        'Después de la introducción, el orden es el de una frase afirmativa (sujeto + verbo) y desaparecen do/does/did.',
        'Las preguntas de sí o no usan if o whether.',
      ],
      examples: [
        { en: 'Where is the station? → Could you tell me where the station is?' },
        { en: 'Could you tell me where is the station?', wrong: true },
        { en: 'What time does it start? → Do you know what time it starts?' },
        { en: 'Is it open? → Do you know if it is open?' },
      ],
    },
    {
      title: 'Preguntas de sujeto y de objeto',
      points: [
        'Si la palabra interrogativa (who, what, which) es el SUJETO, no se usa auxiliar: Who called you? What happened?',
        'Si es el OBJETO, sí lleva auxiliar: Who did you call? What did you see?',
      ],
      examples: [
        { en: 'Who wrote this book?', es: '¿Quién escribió este libro? (sujeto)' },
        { en: 'Who did write this book?', wrong: true },
        { en: 'Who did you meet at the party?', es: '¿A quién conociste? (objeto)' },
      ],
    },
    {
      title: 'Question tags',
      points: [
        'Son las coletillas "¿verdad?" / "¿no?". Se forman con el auxiliar de la frase y el pronombre sujeto.',
        'Frase afirmativa → tag negativa: It\'s cold, isn\'t it? Frase negativa → tag afirmativa: You don\'t smoke, do you?',
        'Si no hay auxiliar, se usa do/does/did: She lives here, doesn\'t she?',
        'Casos especiales: I am… → aren\'t I? · Let\'s… → shall we? · Imperativo → will you? · Nobody / everyone → they.',
      ],
      examples: [
        { en: "You've been to Paris, haven't you?" },
        { en: "Let's go, shall we?" },
        { en: "I'm late, aren't I?" },
      ],
    },
  ],
  exercises: [
    {
      id: 'gr-qu-1',
      kind: 'choice',
      title: 'Elige la forma correcta',
      focus: 'Preguntas indirectas y question tags',
      items: [
        ch('Could you tell me where ___?', 'the bank is', ['is the bank', 'does the bank is'], 'Pregunta indirecta: sujeto + verbo (the bank is).'),
        ch('Do you know what time ___?', 'the film starts', ['does the film start', 'starts the film'], 'En las preguntas indirectas desaparece "does".'),
        ch('___ the window? It was open this morning.', 'Who broke', ['Who did break', 'Who did broke'], '"Who" es el sujeto (alguien rompió la ventana): no lleva auxiliar.'),
        ch('___ at the party last night?', 'Who did you see', ['Who you saw', 'Who saw you'], '"Who" es el objeto (tú viste a alguien): lleva auxiliar "did".'),
        ch("It's a beautiful day, ___?", "isn't it", ["is it", "doesn't it"], 'Frase afirmativa con "is" → tag negativa "isn\'t it".'),
        ch("You don't eat meat, ___?", 'do you', ["don't you", 'are you'], 'Frase negativa con "don\'t" → tag afirmativa "do you".'),
        ch("I'm right, ___?", "aren't I", ["amn't I", "isn't I"], 'Con "I am" la tag negativa es "aren\'t I".'),
        ch("Let's order a pizza, ___?", 'shall we', ["don't we", "won't we"], 'Con "Let\'s" la tag es "shall we".'),
      ],
    },
    {
      id: 'gr-qu-2',
      kind: 'gap',
      title: 'Completa la pregunta o la tag',
      focus: 'Una o varias palabras',
      items: [
        g('She lives in Valencia, ___ she?', ["doesn't"], 'Sin auxiliar (lives) se usa does; afirmativa → negativa: doesn\'t she.'),
        g("They haven't arrived yet, ___ they?", ['have'], 'Negativa con "haven\'t" → tag afirmativa "have they".'),
        g('You went to the concert, ___ you?', ["didn't"], 'Pasado simple sin auxiliar → did; afirmativa → "didn\'t you".'),
        g('I wonder ___ he will come to the party. (si)', ['if', 'whether'], 'Pregunta indirecta de sí o no: if / whether.'),
        g('Can you tell me how much ___? (it / cost)', ['it costs'], 'Pregunta indirecta: sujeto + verbo, sin "does".'),
        g('___ happened to your car? (qué)', ['what'], '"What" es el sujeto: What happened? (sin auxiliar).'),
        g("Close the door, ___ you?", ['will', 'would', 'can', 'could'], 'Con un imperativo la tag suele ser "will you?" (también "would/can/could you?").'),
        g("Nobody called, ___ they?", ['did'], '"Nobody" es negativo → tag afirmativa, y el pronombre es "they": did they?'),
      ],
    },
    {
      id: 'gr-qu-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Orden de las preguntas',
      items: [
        er('Do you know where [does she live]?', 'she lives', 'En las preguntas indirectas: sujeto + verbo, sin "does".'),
        er('Who [did tell] you that?', 'told', '"Who" es el sujeto: no lleva auxiliar.'),
        er("You're coming tomorrow, [isn't it]?", "aren't you", 'La tag repite el auxiliar (are) y el sujeto (you).'),
        er('Could you tell me what time it is?', null, 'La frase es correcta: pregunta indirecta con orden afirmativo.'),
        er("She can swim, [doesn't she]?", "can't she", 'Si la frase tiene modal (can), la tag lo repite: can\'t she.'),
        er('I asked him [where was he going].', 'where he was going', 'En estilo indirecto, orden afirmativo: where he was going.'),
      ],
    },
  ],
}
