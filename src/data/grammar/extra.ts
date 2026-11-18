import type { PartInfo } from '../../types'
import { ch, er, g } from '../helpers'

export const comparison: PartInfo = {
  slug: 'comparison',
  name: 'Comparison, so/such, too/enough',
  nameEs: 'Comparativos, superlativos, so/such y too/enough',
  summary: 'Comparar, intensificar y expresar exceso o suficiencia',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Comparativos y superlativos',
      points: [
        'Adjetivos cortos: -er / the -est (cheap, cheaper, the cheapest). Los que acaban en -y cambian a -ier (easy, easier).',
        'Adjetivos largos: more / the most (more expensive, the most expensive).',
        'Irregulares: good, better, the best · bad, worse, the worst · far, further, the furthest.',
        'Igualdad: as + adjetivo + as. Negativa: not as/so + adjetivo + as.',
        'Para matizar: much / far / a lot + comparativo (much better) y slightly / a bit + comparativo (slightly cheaper).',
        'Cambio progresivo: comparativo + and + comparativo (better and better, more and more expensive).',
        '"The + comparativo…, the + comparativo": the sooner, the better.',
      ],
      examples: [
        { en: 'This flat is far bigger than the last one.', es: 'Este piso es mucho más grande que el anterior.' },
        { en: 'The more you practise, the easier it gets.', es: 'Cuanto más practicas, más fácil resulta.' },
        { en: 'She is more taller than me.', wrong: true },
      ],
    },
    {
      title: 'So y such',
      points: [
        'SO + adjetivo o adverbio: so cold, so quickly.',
        'SUCH + (a/an) + (adjetivo) + sustantivo: such a cold day, such nice people.',
        'Con "that" expresan una consecuencia: It was so cold that we stayed in.',
        'So much / so many + sustantivo: so much noise, so many people.',
      ],
    },
    {
      title: 'Too y enough',
      points: [
        'TOO + adjetivo = demasiado (con sentido negativo): too expensive to buy.',
        'Adjetivo + ENOUGH = suficientemente: old enough to vote. Ojo: enough va DETRÁS del adjetivo.',
        'ENOUGH + sustantivo: enough money, enough time.',
      ],
      examples: [
        { en: "He isn't old enough to drive." },
        { en: "He isn't enough old to drive.", wrong: true },
      ],
    },
  ],
  exercises: [
    {
      id: 'gr-cp-1',
      kind: 'choice',
      title: 'Elige la forma correcta',
      focus: 'Comparativos, so/such, too/enough',
      items: [
        ch('This exam was ___ than the one last year.', 'much harder', ['more hard', 'much more harder'], '"Hard" es corto: harder. Para intensificar se pone "much" delante.'),
        ch("It's ___ film I've ever seen.", 'the worst', ['the baddest', 'the most bad'], '"Bad" es irregular: worse, the worst.'),
        ch('It was ___ lovely day that we went to the beach.', 'such a', ['so', 'so a'], 'Con un sustantivo detrás (day) se usa "such a".'),
        ch("The tea is ___ to drink. I'll wait a minute.", 'too hot', ['hot enough', 'so hot'], '"Too + adjetivo + to" = demasiado… para. Expresa un problema.'),
        ch("We didn't have ___ to finish the test.", 'enough time', ['time enough', 'too much time'], '"Enough" va DELANTE de los sustantivos: enough time.'),
        ch('The ___ you leave, the less traffic you\'ll find.', 'earlier', ['earliest', 'more early'], '"The + comparativo…, the + comparativo": the earlier…, the less…'),
        ch('My new phone is ___ as my old one.', 'twice as fast', ['two times faster as', 'twice faster'], 'Para multiplicar: "twice/three times AS + adjetivo + AS".'),
        ch('There were ___ people that we couldn\'t get in.', 'so many', ['such many', 'so much'], '"People" es contable y plural: so many.'),
      ],
    },
    {
      id: 'gr-cp-2',
      kind: 'gap',
      title: 'Escribe la forma correcta',
      focus: 'Comparar y matizar',
      items: [
        g("Prices keep getting ___. (high, cada vez más)", ['higher and higher'], 'Cambio progresivo: comparativo + and + comparativo.'),
        g("This is ___ restaurant in town. (good)", ['the best'], 'Superlativo irregular de good: the best.'),
        g("He isn't ___ to lift that box. (strong)", ['strong enough'], 'Adjetivo + enough.'),
        g("The new model is slightly ___ than the old one. (expensive)", ['more expensive'], 'Adjetivo largo: more expensive. "Slightly" matiza: un poco más caro.'),
        g("I've never met ___ friendly people. (gente tan)", ['such'], '"Such + adjetivo + sustantivo plural" (sin artículo): such friendly people.'),
        g("The film wasn't ___ the book. (good, igual de)", ['as good as', 'so good as'], 'Negativa de igualdad: not as… as.'),
        g("She speaks English ___ than her brother. (fluently)", ['more fluently'], 'Los adverbios en -ly forman el comparativo con more.'),
        g("It was ___ a long journey that we were exhausted. (such / so)", ['such'], 'Con "a + adjetivo + sustantivo" se usa such: such a long journey.'),
      ],
    },
    {
      id: 'gr-cp-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Errores típicos al comparar',
      items: [
        er('My sister is [more taller] than me.', 'taller', 'No se combinan "more" y "-er".'),
        er("He isn't [enough old] to vote.", 'old enough', '"Enough" va DETRÁS del adjetivo.'),
        er("It was [so] good film that I saw it twice.", 'such a', 'Con un sustantivo detrás (film) se usa "such a".'),
        er('This is the most interesting book I have ever read.', null, 'La frase es correcta: superlativo + present perfect + ever.'),
        er('Madrid is bigger [that] Valencia.', 'than', 'Los comparativos van con "than", no con "that".'),
        er('The more you sleep, [the more you feel better].', 'the better you feel', 'Estructura: the + comparativo + sujeto + verbo. "Better" ya es el comparativo.'),
      ],
    },
  ],
}

export const linkers: PartInfo = {
  slug: 'linking-words',
  name: 'Linking words',
  nameEs: 'Conectores de contraste, causa, finalidad, resultado y adición',
  summary: 'although, despite, so that, as a result, whereas…',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Contraste',
      points: [
        'ALTHOUGH / EVEN THOUGH / THOUGH + sujeto + verbo: Although it rained, we went out.',
        'DESPITE / IN SPITE OF + sustantivo o -ing: Despite the rain… / Despite being tired…',
        'Despite the fact that + sujeto + verbo.',
        'HOWEVER / NEVERTHELESS: van al empezar una nueva frase, seguidos de coma.',
        'WHEREAS / WHILE: comparan dos ideas opuestas en la misma frase (I love tea, whereas my wife prefers coffee).',
      ],
      examples: [
        { en: 'Despite being tired, she kept working.' },
        { en: 'Despite she was tired, she kept working.', wrong: true },
      ],
    },
    {
      title: 'Causa y resultado',
      points: [
        'Causa: because / as / since + oración; because of / due to + sustantivo.',
        'Resultado: so (informal), therefore, as a result, consequently (formales, al empezar una frase).',
      ],
    },
    {
      title: 'Finalidad',
      points: [
        'TO + infinitivo / IN ORDER TO + infinitivo: I went out to buy bread.',
        'SO THAT + sujeto + can/could/will/would: I left early so that I could catch the train.',
        'Negativa: so as not to / in order not to + infinitivo.',
        'Nunca "for + infinitivo" para la finalidad: I came here for to study ✗.',
      ],
    },
    {
      title: 'Adición',
      points: [
        'In addition, … · Moreover, … · Furthermore, … · What is more, … (al empezar una frase)',
        'As well as + sustantivo o -ing: As well as being cheap, it is fast.',
        'Not only… but also…',
      ],
    },
  ],
  exercises: [
    {
      id: 'gr-lk-1',
      kind: 'choice',
      title: 'Elige el conector',
      focus: 'Contraste, causa, finalidad',
      items: [
        ch('___ the bad weather, the match went ahead.', 'Despite', ['Although', 'However'], 'Delante de un sustantivo (the bad weather) va "despite".'),
        ch('___ it was late, we decided to walk home.', 'Although', ['Despite', 'In spite of'], 'Delante de una oración completa (it was late) va "although".'),
        ch("I'm saving money ___ I can travel next summer.", 'so that', ['in order to', 'because'], '"So that + sujeto + can" expresa finalidad.'),
        ch('The flight was cancelled ___ a technical problem.', 'due to', ['because', 'so'], '"Due to" o "because of" + sustantivo. "Because" necesitaría una oración.'),
        ch('My brother loves football, ___ I find it boring.', 'whereas', ['despite', 'so that'], '"Whereas" compara dos ideas opuestas en la misma frase.'),
        ch('The company lost money. ___, several workers lost their jobs.', 'As a result', ['Although', 'Whereas'], 'Resultado, al principio de una frase nueva: As a result,…'),
        ch('She went to the library ___ some books.', 'to borrow', ['for borrow', 'for to borrow'], 'Finalidad: to + infinitivo. Nunca "for to".'),
        ch('___ being expensive, the hotel was very uncomfortable.', 'As well as', ['Although', 'However'], '"As well as + -ing" = además de.'),
      ],
    },
    {
      id: 'gr-lk-2',
      kind: 'gap',
      title: 'Escribe el conector',
      focus: 'Una o varias palabras',
      items: [
        g('In ___ of the noise, I managed to sleep.', ['spite'], '"In spite of" = a pesar de.'),
        g('I wrote it down so as ___ to forget.', ['not'], 'Finalidad negativa: so as NOT to + infinitivo.'),
        g('He was ill. ___, he went to work. (sin embargo)', ['however', 'nevertheless'], 'Contraste al comienzo de una frase, con coma: However / Nevertheless.'),
        g('Not ___ is the hotel cheap, but it is also very central.', ['only'], '"Not only… but also". Al empezar la frase hay inversión (is the hotel).'),
        g("We stayed at home ___ it was raining. (porque)", ['because', 'as', 'since'], 'Causa + oración: because / as / since.'),
        g('Despite the ___ that he trained hard, he lost the race.', ['fact'], '"Despite the fact that" + oración.'),
        g('I took a taxi ___ order to arrive on time.', ['in'], '"In order to" = para, con el fin de.'),
        g("___ to the strike, there were no buses. (debido)", ['due', 'owing'], '"Due to / owing to" + sustantivo = debido a.'),
      ],
    },
    {
      id: 'gr-lk-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Conectores',
      items: [
        er('[Despite] she studied hard, she failed.', 'Although', 'Delante de sujeto + verbo va "although". "Despite" va con sustantivo o -ing.'),
        er('I came to England [for to] learn English.', 'to', 'La finalidad se expresa con "to + infinitivo".'),
        er('[Because of] it was raining, we stayed in.', 'Because / As', '"Because of" va con un sustantivo. Con una oración se usa "because".'),
        er('Although it was expensive, we bought it.', null, 'La frase es correcta.'),
        er('He is rich. [Although], he is not happy.', 'However', 'Al empezar una frase nueva para contrastar se usa "However,". "Although" necesita dos oraciones unidas.'),
        er('I left early [so that to] avoid the traffic.', 'to / in order to', '"So that" va con sujeto + verbo. Con infinitivo se usa "to" o "in order to".'),
      ],
    },
  ],
}

export const quantifiers: PartInfo = {
  slug: 'quantifiers-articles',
  name: 'Quantifiers & articles',
  nameEs: 'Much/many, few/little, each/every, both/either/neither y artículos',
  summary: 'Contables, incontables y cuándo usar a, the o nada',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Contables e incontables',
      points: [
        'MANY / (A) FEW + contables en plural: many books, a few friends.',
        'MUCH / (A) LITTLE + incontables: much time, a little money.',
        'A LOT OF / LOTS OF valen para los dos tipos.',
        'A FEW / A LITTLE = algunos, un poco (sentido positivo). FEW / LITTLE = pocos, poco (sentido negativo).',
        'Incontables típicos en inglés: advice, information, news, furniture, equipment, luggage, research, homework, travel, accommodation. No llevan "a" ni plural.',
      ],
      examples: [
        { en: 'Can you give me some advice?', es: '¿Me das un consejo?' },
        { en: 'Can you give me an advice?', wrong: true },
      ],
    },
    {
      title: 'Each, every, both, either, neither, all, none',
      points: [
        'EACH (cada uno, por separado) y EVERY (todos, en general) + sustantivo singular.',
        'BOTH = los dos. EITHER = cualquiera de los dos. NEITHER = ninguno de los dos (verbo en afirmativa).',
        'NONE OF + plural o incontable = ninguno de.',
      ],
    },
    {
      title: 'Artículos',
      points: [
        'A/AN: primera mención o "uno cualquiera", y con profesiones: She\'s a doctor.',
        'THE: algo ya mencionado o único (the sun), y con superlativos y ordinales (the first).',
        'Sin artículo: para hablar en general con plurales o incontables (Dogs are loyal. Life is short.) y con comidas, idiomas, deportes y la mayoría de países y ciudades.',
        'Error típico: en español decimos "la gente" o "la vida", pero en inglés se dice "People are…" y "Life is…", sin "the".',
      ],
      examples: [
        { en: 'I love music.', es: 'Me encanta la música.' },
        { en: 'I love the music.', wrong: true, es: 'Solo es correcto si hablas de una música concreta.' },
      ],
    },
  ],
  exercises: [
    {
      id: 'gr-qa-1',
      kind: 'choice',
      title: 'Elige el cuantificador',
      focus: 'Contables, incontables y artículos',
      items: [
        ch("We haven't got ___ time left.", 'much', ['many', 'a few'], '"Time" es incontable: much.'),
        ch('I only have ___ friends in this city, but they are very close.', 'a few', ['a little', 'much'], '"Friends" es contable plural, con sentido positivo: a few.'),
        ch('Can you give me some ___ about the course?', 'information', ['informations', 'an information'], '"Information" es incontable: no lleva plural ni "an".'),
        ch('___ of my parents speaks English; they only speak Spanish.', 'Neither', ['Either', 'Both'], '"Neither" = ninguno de los dos, con el verbo en afirmativa.'),
        ch('___ student has to bring a dictionary.', 'Every', ['All', 'Both'], '"Every" + sustantivo en singular.'),
        ch('___ is very important for young children.', 'Sleep', ['The sleep', 'A sleep'], 'Para hablar en general de un incontable, sin artículo.'),
        ch('My sister is ___ engineer.', 'an', ['the', '(nada)'], 'Las profesiones llevan "a/an": She\'s an engineer.'),
        ch('There was ___ furniture in the room: just a bed.', 'very little', ['very few', 'a few'], '"Furniture" es incontable. "Very little" = muy poco.'),
      ],
    },
    {
      id: 'gr-qa-2',
      kind: 'gap',
      title: 'Escribe la palabra',
      focus: 'Una palabra',
      items: [
        g('How ___ people came to the party?', ['many'], '"People" es contable plural: how many.'),
        g('I need ___ advice about my CV.', ['some'], '"Advice" es incontable: some advice.'),
        g("You can take ___ of the two buses; they both go to the centre.", ['either'], '"Either" = cualquiera de los dos.'),
        g('___ of the students passed: they all failed.', ['none'], '"None of" = ninguno de.'),
        g('___ people think the city is too expensive. (la mayoría)', ['most'], '"Most people" (la mayoría de la gente), sin "of the".'),
        g("I've got ___ little money left, so we can get a coffee. (un poco)", ['a'], '"A little" = un poco, con sentido positivo.'),
        g('___ sun rises in the east.', ['the'], 'Cosas únicas llevan "the": the sun, the moon.'),
        g('She plays ___ piano beautifully.', ['the'], 'Con instrumentos musicales se usa "the": play the piano. Con deportes no: play tennis.'),
      ],
    },
    {
      id: 'gr-qa-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Artículos e incontables',
      items: [
        er('[The life] is too short to worry.', 'Life', 'En general y en abstracto, sin artículo.'),
        er('We bought [a new furniture] for the flat.', 'some new furniture', '"Furniture" es incontable: no lleva "a".'),
        er('There are [less] cars in the city centre now.', 'fewer', 'Con contables en plural se usa "fewer". "Less" va con incontables.'),
        er('Every student has their own locker.', null, 'La frase es correcta: every + singular.'),
        er('I have [much] friends in Madrid.', 'many / a lot of', '"Friends" es contable: many o a lot of.'),
        er('[Neither of them don\'t] like coffee.', "Neither of them likes", '"Neither" ya es negativo: el verbo va en afirmativa.'),
      ],
    },
  ],
}
