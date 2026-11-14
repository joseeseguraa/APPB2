import type { PartInfo } from '../../types'
import { ch, er, g } from '../helpers'

export const presentPerfect: PartInfo = {
  slug: 'present-perfect',
  name: 'Present perfect vs past simple',
  nameEs: 'Pretérito perfecto y pasado simple, for/since, forma continua',
  summary: 'Cuándo usar have done, did y have been doing',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Past simple: pasado terminado y con fecha',
      points: [
        'Se usa para acciones terminadas en un momento concreto del pasado, aunque el momento no se diga pero se entienda.',
        'Va con marcadores como yesterday, last week, in 2019, two years ago y when…?',
        'También para personas que ya han muerto o etapas cerradas (Shakespeare wrote…).',
      ],
      examples: [
        { en: 'I saw Laura yesterday.', es: 'Vi a Laura ayer.' },
        { en: 'I have seen Laura yesterday.', wrong: true, es: 'Con "yesterday" nunca se usa present perfect.' },
      ],
    },
    {
      title: 'Present perfect: pasado conectado con el presente',
      points: [
        'Para experiencias sin decir cuándo: ever, never, before, three times.',
        'Para un resultado que se nota ahora: I\'ve lost my keys (y no las tengo).',
        'Para periodos que no han terminado: today, this week, this year, in my life.',
        'Con just, already y yet: I\'ve just arrived. Have you finished yet?',
      ],
      examples: [
        { en: 'Have you ever been to Japan?', es: '¿Has estado alguna vez en Japón?' },
        { en: "I've already done my homework.", es: 'Ya he hecho los deberes.' },
      ],
    },
    {
      title: 'For / since y la forma continua',
      points: [
        'FOR + periodo (for three years, for ages) y SINCE + punto de inicio (since 2015, since Monday).',
        'Para algo que empezó en el pasado y SIGUE ahora, en inglés se usa present perfect, no presente. Es el error nº 1 de los hispanohablantes.',
        'Present perfect continuous (have been + -ing): pone el énfasis en la duración o en una actividad reciente con efectos visibles.',
        'Los verbos de estado (know, like, believe, own, understand…) no van en forma continua.',
      ],
      examples: [
        { en: "I've lived here since 2015. / I've been living here since 2015.", es: 'Vivo aquí desde 2015.' },
        { en: 'I live here since 2015.', wrong: true },
        { en: "I'm tired because I've been running.", es: 'Estoy cansado porque he estado corriendo.' },
        { en: "I've been knowing her for years.", wrong: true, es: 'Correcto: I\'ve known her for years.' },
      ],
    },
  ],
  exercises: [
    {
      id: 'gr-pp-1',
      kind: 'choice',
      title: 'Elige el tiempo correcto',
      focus: 'Past simple, present perfect y forma continua',
      items: [
        ch('We ___ to Paris last summer.', 'went', ['have gone', 'have been going'], '"Last summer" es un momento terminado del pasado, así que va en past simple.'),
        ch('I ___ sushi three times in my life, and I still don\'t like it.', 'have tried', ['tried', 'was trying'], '"In my life" es un periodo que no ha terminado (sigues vivo): present perfect para experiencias.'),
        ch('She ___ here since 2018.', 'has worked', ['works', 'worked'], 'Empezó en 2018 y sigue: present perfect con "since". En español decimos "trabaja aquí desde", pero en inglés no se usa el presente.'),
        ch('How long ___ English?', 'have you been learning', ['are you learning', 'do you learn'], 'Para preguntar por la duración de algo que sigue en curso: "How long have you been + -ing?".'),
        ch('I ___ him for ten years, so I trust him completely.', "'ve known", ["'ve been knowing", 'know'], '"Know" es un verbo de estado y no se usa en forma continua. Como sigue siendo verdad, va en present perfect simple.'),
        ch('When ___ the news?', 'did you hear', ['have you heard', 'had you heard'], 'Las preguntas con "When" piden un momento concreto, así que van en past simple.'),
        ch("I'm exhausted. I ___ all morning.", "'ve been cleaning", ['cleaned', "'m cleaning"], 'Actividad larga y reciente con un efecto visible ahora (estoy agotado): present perfect continuous.'),
        ch('Shakespeare ___ 39 plays.', 'wrote', ['has written', 'has been writing'], 'Shakespeare murió, así que su obra es una etapa cerrada: past simple.'),
      ],
    },
    {
      id: 'gr-pp-2',
      kind: 'gap',
      title: 'Escribe la forma correcta',
      focus: 'Conjugar con el tiempo adecuado',
      items: [
        g("I ___ my homework yet. (not / finish)", ["haven't finished", 'have not finished'], '"Yet" en negativa va con present perfect: haven\'t finished.'),
        g('They ___ to Madrid two years ago. (move)', ['moved'], '"Ago" siempre va con past simple.'),
        g('She ___ ill since Monday. (be)', ['has been', "'s been"], 'Empezó el lunes y sigue enferma: present perfect con "since".'),
        g("This is the best film I ___. (ever / see)", ['have ever seen', "'ve ever seen"], 'Superlativo + present perfect + ever: the best film I have ever seen.'),
        g("We ___ for over an hour! Where are you? (wait)", ['have been waiting', "'ve been waiting"], 'Duración de algo que sigue ocurriendo (siguen esperando): present perfect continuous.'),
        g('I ___ my phone last night, but luckily someone found it. (lose)', ['lost'], '"Last night" es un momento terminado: past simple. Además, el móvil ya apareció, así que no hay resultado presente.'),
        g('How many cups of coffee ___ today? (you / drink)', ['have you drunk', 'have you had'], '"Today" es un periodo que no ha terminado: present perfect. El participio de drink es "drunk".'),
        g('My grandparents ___ in the same house for fifty years before they sold it. (live)', ['lived', 'had lived'], 'Ya no viven allí (la vendieron), así que es una etapa cerrada: past simple. El past perfect también es correcto porque es anterior a "sold".'),
      ],
    },
    {
      id: 'gr-pp-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Errores típicos de hispanohablantes',
      items: [
        er('I [have seen] him yesterday at the station.', 'saw', 'Con "yesterday" (momento concreto y terminado) se usa past simple.'),
        er('[I am living] here since 2015.', "I've lived / I've been living", 'Algo que empezó en el pasado y continúa va en present perfect, nunca en presente.'),
        er('She has worked at the company [since] three years.', 'for', '"Three years" es un periodo, así que va con FOR. SINCE va con un punto de inicio (since 2021).'),
        er('Have you finished your project yet?', null, 'La frase es correcta: "yet" en preguntas va con present perfect.'),
        er('We [have been knowing] each other since school.', 'have known', '"Know" es un verbo de estado y no admite forma continua.'),
        er('[Did you ever be] to London?', 'Have you ever been', 'Para experiencias en la vida se usa present perfect: Have you ever been…? Además, "did … be" no existe en inglés.'),
      ],
    },
  ],
}

export const narrativeTenses: PartInfo = {
  slug: 'narrative-tenses',
  name: 'Narrative tenses, used to & would',
  nameEs: 'Tiempos para contar historias y hábitos del pasado',
  summary: 'Past continuous, past perfect, used to / would',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Los cuatro tiempos de la narración',
      points: [
        'Past simple: las acciones principales, en orden (He opened the door and went in).',
        'Past continuous (was/were + -ing): el fondo de la escena o una acción en curso que se interrumpe.',
        'Past perfect (had + participio): algo que ocurrió ANTES de otro momento del pasado.',
        'Past perfect continuous (had been + -ing): la duración de algo hasta un momento del pasado.',
      ],
      examples: [
        { en: 'I was having a shower when the phone rang.', es: 'Me estaba duchando cuando sonó el teléfono.' },
        { en: 'When we arrived, the film had already started.', es: 'Cuando llegamos, la película ya había empezado.' },
        { en: 'She was tired because she had been working all day.' },
      ],
    },
    {
      title: 'Used to y would',
      points: [
        'USED TO + infinitivo: hábitos y estados del pasado que ya no ocurren.',
        'WOULD + infinitivo: solo acciones repetidas del pasado, NO estados (live, have, be, like…).',
        'En negativa e interrogativa se escribe "use to", sin d: I didn\'t use to… / Did you use to…?',
        'No los confundas con BE/GET USED TO + -ing, que significa estar o acostumbrarse a algo.',
      ],
      examples: [
        { en: 'I used to have long hair.', es: 'Antes tenía el pelo largo.' },
        { en: 'I would have long hair.', wrong: true, es: '"Have" es un estado: no funciona con would.' },
        { en: 'Every summer my grandmother would take us to the lake.', es: 'Cada verano mi abuela nos llevaba al lago.' },
      ],
    },
  ],
  exercises: [
    {
      id: 'gr-nt-1',
      kind: 'choice',
      title: 'Elige el tiempo correcto',
      focus: 'Narrar en pasado',
      items: [
        ch('While I ___ dinner, the phone rang.', 'was cooking', ['cooked', 'had cooked'], 'La acción larga en curso que se interrumpe va en past continuous.'),
        ch('When we got to the cinema, the film ___, so we missed the beginning.', 'had started', ['started', 'has started'], 'La película empezó ANTES de que llegaran: past perfect.'),
        ch('I ___ play football every Saturday when I was a kid.', 'used to', ['was used to', 'use to'], 'Hábito del pasado: used to + infinitivo. "Was used to" significa "estaba acostumbrado a" y llevaría -ing.'),
        ch('We ___ live in a small flat near the beach.', 'used to', ['would', 'were used to'], '"Live" es un estado, así que no se puede usar con would: solo used to.'),
        ch('She was tired because she ___ all day.', 'had been working', ['was working', 'has worked'], 'Duración de una actividad hasta un momento del pasado (estaba cansada): past perfect continuous.'),
        ch('He ___ down the street when he saw an old friend.', 'was walking', ['walked', 'had walked'], 'Acción de fondo en curso, interrumpida por "saw": past continuous.'),
        ch('Every summer, my grandmother ___ take us to the lake.', 'would', ['used', 'was'], 'Acción repetida en el pasado: would + infinitivo. "Used" necesitaría "to" (used to take).'),
        ch('I ___ the book before, so I knew how it ended.', 'had read', ['was reading', 'have read'], 'Lo leyó antes de otro momento pasado ("knew"): past perfect.'),
      ],
    },
    {
      id: 'gr-nt-2',
      kind: 'gap',
      title: 'Escribe la forma correcta',
      focus: 'Past continuous, past perfect, used to',
      items: [
        g('It ___ when I left the house, so I took an umbrella. (rain)', ['was raining'], 'Situación de fondo en ese momento: past continuous.'),
        g('By the time the police arrived, the thief ___. (escape)', ['had escaped'], '"By the time" + pasado indica que la otra acción ya había terminado: past perfect.'),
        g("I ___ her for years, so I didn't recognise her at first. (not / see)", ["hadn't seen", 'had not seen'], 'Periodo anterior a un momento del pasado (no la reconocí): past perfect.'),
        g('We ___ for six hours when the car finally broke down. (drive)', ['had been driving'], 'Duración hasta un momento del pasado: past perfect continuous.'),
        g("I didn't ___ to like vegetables, but now I love them. (use)", ['use'], 'En negativa con "didn\'t" se escribe "use to", sin d.'),
        g('She ___ the envelope, read the letter and started to cry. (open)', ['opened'], 'Una serie de acciones principales en orden: past simple.'),
        g('What ___ at 10 pm last night? (you / do)', ['were you doing'], 'Acción en curso en un momento concreto del pasado: past continuous.'),
        g('When I got home, I realised I ___ my wallet at the restaurant. (leave)', ['had left'], 'Lo dejó antes de darse cuenta: past perfect.'),
      ],
    },
    {
      id: 'gr-nt-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Narración y hábitos',
      items: [
        er('When I was young, I [would have] long hair.', 'used to have', '"Have" (tener) es un estado. Would solo sirve para acciones repetidas.'),
        er('I [was knowing] the answer, but I didn\'t say anything.', 'knew', '"Know" es un verbo de estado y no va en forma continua.'),
        er('When we arrived, everyone had already left.', null, 'La frase es correcta: se fueron antes de que llegáramos, así que va en past perfect.'),
        er('I [use to] go swimming every morning before work.', 'used to', 'En afirmativa se escribe "used to". "Use to" solo va con did/didn\'t.'),
        er('He was tired because he [has been working] all night.', 'had been working', 'Toda la historia está en pasado, así que hace falta past perfect continuous, no present perfect.'),
        er('By the time I got to the station, the train [left].', 'had left', 'Con "by the time" la otra acción ya había ocurrido: past perfect.'),
      ],
    },
  ],
}

export const future: PartInfo = {
  slug: 'future',
  name: 'Future forms',
  nameEs: 'Will, going to, presente continuo, future continuous y future perfect',
  summary: 'Cómo hablar del futuro según la situación',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Las formas básicas',
      points: [
        'WILL: decisiones tomadas en el momento, promesas, ofrecimientos y predicciones basadas en tu opinión (I think…, probably).',
        'GOING TO: planes o intenciones ya decididos, y predicciones basadas en una evidencia que se ve ahora.',
        'PRESENTE CONTINUO: planes ya organizados con otra persona, hora o lugar (citas, reservas).',
        'PRESENTE SIMPLE: horarios fijos (trenes, películas, clases).',
      ],
      examples: [
        { en: "'The phone's ringing.' 'I'll get it.'", es: 'Decisión espontánea.' },
        { en: "Look at those clouds! It's going to rain.", es: 'Predicción con evidencia.' },
        { en: "I'm meeting Ana at six.", es: 'Plan organizado.' },
        { en: 'The train leaves at 7.45.', es: 'Horario.' },
      ],
    },
    {
      title: 'Future continuous y future perfect',
      points: [
        'WILL BE + -ing: acción en curso en un momento futuro (This time tomorrow I\'ll be flying to Rome).',
        'WILL HAVE + participio: acción terminada ANTES de un momento futuro (By June I\'ll have finished).',
      ],
    },
    {
      title: '¡Ojo con las oraciones temporales!',
      points: [
        'Después de when, as soon as, before, after, until o once, el futuro se expresa con PRESENTE, nunca con will.',
      ],
      examples: [
        { en: "I'll call you when I arrive.", es: 'Te llamaré cuando llegue.' },
        { en: "I'll call you when I will arrive.", wrong: true },
      ],
    },
  ],
  exercises: [
    {
      id: 'gr-fu-1',
      kind: 'choice',
      title: 'Elige la forma de futuro',
      focus: 'Will, going to, presente continuo…',
      items: [
        ch('Look at those clouds! It ___ rain.', "'s going to", ['will', 'rains'], 'Predicción basada en una evidencia que se ve ahora (las nubes): going to.'),
        ch("'The phone's ringing.' 'I ___ get it.'", "'ll", ["'m going to", 'get'], 'Decisión tomada en el momento de hablar: will.'),
        ch("I ___ my dentist at 4 pm tomorrow - it's all arranged.", "'m seeing", ['will see', 'see'], 'Cita ya organizada: presente continuo.'),
        ch('The train ___ at 7.45 tomorrow morning.', 'leaves', ['will be leaving', 'is going to leave'], 'Horario fijo de transporte: presente simple.'),
        ch('Call me as soon as you ___ at the airport.', 'arrive', ['will arrive', 'are going to arrive'], 'Después de "as soon as" se usa presente, aunque hable del futuro.'),
        ch('This time tomorrow, I ___ on a beach in Greece.', "'ll be lying", ["'ll lie", 'lie'], 'Acción en curso en un momento futuro concreto: future continuous.'),
        ch('By the end of the year, we ___ the new bridge.', 'will have finished', ['will finish', 'are finishing'], '"By + momento futuro" = terminado antes de ese momento: future perfect.'),
        ch('I think Spain ___ the match tonight.', 'will win', ['is winning', 'wins'], 'Predicción basada en tu opinión ("I think"): will.'),
      ],
    },
    {
      id: 'gr-fu-2',
      kind: 'gap',
      title: 'Escribe la forma correcta',
      focus: 'Formas de futuro en contexto',
      items: [
        g("I promise I ___ anyone your secret. (not / tell)", ["won't tell", 'will not tell'], 'Las promesas van con will: won\'t tell.'),
        g('We ___ a party on Saturday. Do you want to come? (have)', ['are having', "'re having", 'are going to have', "'re going to have"], 'Plan ya organizado: presente continuo, aunque going to también vale.'),
        g("Don't phone me between 8 and 9 - I ___ the match. (watch)", ["'ll be watching", 'will be watching'], 'Acción en curso durante un periodo del futuro: future continuous.'),
        g('By 2030, I hope scientists ___ a cure. (find)', ['will have found', "'ll have found"], '"By 2030" = antes de ese momento: future perfect.'),
        g("I'll call you when I ___ home. (get)", ['get'], 'Después de "when" el futuro se expresa con presente.'),
        g('Be careful! You ___! (fall)', ["'re going to fall", 'are going to fall'], 'Lo estás viendo a punto de pasar (hay evidencia): going to.'),
        g("'I'm really thirsty.' 'I ___ you a glass of water.' (get)", ["'ll get", 'will get'], 'Ofrecimiento espontáneo: will.'),
        g('What time ___? (the film / start)', ['does the film start'], 'Horario de un evento: presente simple en forma de pregunta.'),
      ],
    },
    {
      id: 'gr-fu-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Errores frecuentes con el futuro',
      items: [
        er("I'll call you when I [will arrive].", 'arrive', 'Después de when, as soon as, before… va presente, no will.'),
        er('This time next week we [will lie] on the beach.', 'will be lying', 'Una acción en curso en un momento futuro concreto va en future continuous.'),
        er("As soon as she [will get] the results, she'll let us know.", 'gets', 'Detrás de "as soon as" va presente simple.'),
        er("I'm going to study medicine at university next year.", null, 'La frase es correcta: going to para una intención ya decidida.'),
        er('[Do you come] to the party on Saturday?', 'Are you coming', 'Para planes organizados se usa el presente continuo, no el presente simple.'),
        er('I think it [rains] tomorrow.', 'will rain', 'Predicción con "I think": will + infinitivo.'),
      ],
    },
  ],
}
