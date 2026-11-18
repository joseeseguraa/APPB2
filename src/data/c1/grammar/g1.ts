import type { PartInfo } from '../../../types'
import { ch, er, g } from '../../helpers'

export const c1Tenses: PartInfo = {
  slug: 'advanced-tenses',
  name: 'Perfect & continuous forms',
  nameEs: 'Tiempos perfectos y continuos avanzados',
  summary: 'had been doing, will have done, will be doing',
  suggestedMinutes: 7,
  theory: [
    {
      title: 'Perfect continuous',
      points: [
        'Present perfect continuous: actividad que empezó antes y sigue o acaba de terminar, con énfasis en la duración o en el resultado visible: I\'ve been working all day, I\'m exhausted.',
        'Past perfect continuous: actividad en curso antes de otro momento del pasado: She had been waiting for an hour when he finally called.',
        'Con verbos de estado (know, own, believe) no se usa la forma continua: I\'ve known her for years.',
      ],
    },
    {
      title: 'Futuro perfecto y futuro continuo',
      points: [
        'Future perfect (will have done): algo terminado antes de un momento futuro: By 2030, we will have finished the project.',
        'Future perfect continuous: duración hasta un momento futuro: In June I\'ll have been living here for ten years.',
        'Future continuous (will be doing): acción en curso en un momento futuro, o planes ya decididos: This time tomorrow I\'ll be flying to Lima. / Will you be using the car tonight? (pregunta educada).',
      ],
      examples: [{ en: 'By the time you arrive, we will have eaten.' }, { en: 'By the time you will arrive, we will have eaten.', wrong: true, es: 'Después de "by the time", presente.' }],
    },
  ],
  exercises: [
    {
      id: 'c1-gr-te-1',
      kind: 'choice',
      title: 'Elige el tiempo',
      focus: 'Perfectos y continuos',
      items: [
        ch('Your eyes are red. ___ ?', 'Have you been crying', ['Did you cry', 'Have you cried'], 'Resultado visible de una actividad reciente: present perfect continuous.'),
        ch('By the end of the year, she ___ over fifty countries.', 'will have visited', ['will visit', 'will be visiting'], 'Algo completado antes de un momento futuro: future perfect.'),
        ch('They ___ for hours when the rescue team finally found them.', 'had been walking', ['were walking', 'have been walking'], 'Duración de una actividad antes de un momento del pasado: past perfect continuous.'),
        ch('This time next week, I ___ on a beach in Greece.', 'will be lying', ['will have lain', 'will lie'], 'Acción en curso en un momento del futuro: future continuous.'),
        ch('I ___ him since we were at school together.', 'have known', ['have been knowing', 'know'], '"Know" es verbo de estado: no se usa en continuo.'),
        ch('___ the printer this afternoon? I need to print something.', 'Will you be using', ['Will you have used', 'Are you going to have used'], 'Future continuous para preguntar con educación por planes.'),
      ],
    },
    {
      id: 'c1-gr-te-2',
      kind: 'gap',
      title: 'Completa con el verbo',
      focus: 'Forma correcta',
      items: [
        g('By next June, I ___ here for exactly ten years. (live)', ['will have been living', "'ll have been living", 'will have lived'], 'Duración hasta un momento futuro: future perfect continuous.'),
        g('When I got home, I realised someone ___ into the house. (break)', ['had broken'], 'Acción terminada antes de otra en el pasado: past perfect.'),
        g('She was out of breath because she ___ . (run)', ['had been running'], 'Actividad reciente con resultado visible en el pasado: past perfect continuous.'),
        g("Don't call at eight; we ___ dinner then. (have)", ['will be having', "'ll be having"], 'Acción en curso en un momento futuro.'),
        g('By the time the film starts, we ___ all the popcorn. (eat)', ['will have eaten', "'ll have eaten"], 'Terminado antes de un momento futuro.'),
        g('How long have you ___ for this company? (work)', ['been working'], 'Present perfect continuous: How long have you been working…?'),
      ],
    },
    {
      id: 'c1-gr-te-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Errores típicos',
      items: [
        er('I [am living] here since 2015.', 'have been living', 'Con "since", present perfect (continuous).'),
        er('By the time we [will get] there, the shop will have closed.', 'get', 'Después de "by the time", presente con valor de futuro.'),
        er('She [has been owning] that car for years.', 'has owned', '"Own" es verbo de estado.'),
        er('They had been arguing for hours before they finally agreed.', null, 'La frase es correcta.'),
        er('In two years I [will finish] my degree, so I can start working.', 'will have finished', 'Terminado antes de un momento futuro: future perfect.'),
      ],
    },
  ],
}

export const c1Inversion: PartInfo = {
  slug: 'inversion',
  name: 'Inversion',
  nameEs: 'Inversión para enfatizar',
  summary: 'Seldom have I…, Had I known…, So great was…',
  suggestedMinutes: 7,
  theory: [
    {
      title: 'Después de expresiones negativas o restrictivas',
      points: [
        'Never / Rarely / Seldom / Little: Little did they know what was about to happen.',
        'Not only… but also / No sooner… than / Hardly… when / Scarcely… when.',
        'Not until / Only when / Only after / Only by: Only by working together can we solve this.',
        'Under no circumstances / On no account / In no way / At no time.',
        'El auxiliar va antes del sujeto. Si no hay auxiliar, se usa do/does/did.',
      ],
    },
    {
      title: 'Condicionales sin if',
      points: [
        'Had + sujeto + participio = If… had: Had I known, I would have come.',
        'Should + sujeto + verbo = If… (por casualidad): Should you need help, call me.',
        'Were + sujeto + to + verbo = If… were to: Were the government to raise taxes, there would be protests.',
        'La negativa no se contrae: Had I not seen it… (no "Hadn\'t I seen it").',
      ],
    },
    {
      title: 'Con so / such',
      points: [
        'So + adjetivo + be + sujeto + that: So great was the demand that tickets sold out in minutes.',
        'Such + be + sustantivo + that: Such was the noise that we couldn\'t sleep.',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-gr-in-1',
      kind: 'choice',
      title: 'Elige la forma correcta',
      focus: 'Inversión',
      items: [
        ch('Little ___ that she would one day become president.', 'did she imagine', ['she imagined', 'she did imagine'], 'Inversión después de "Little".'),
        ch('___ I known about the strike, I would have taken a different route.', 'Had', ['If', 'Should'], 'Condicional sin "if": Had I known…'),
        ch('___ you require any further information, please contact us.', 'Should', ['Would', 'Had'], '"Should you require…" = si necesita.'),
        ch('So ___ that nobody could hear the speaker.', 'loud was the music', ['the music was loud', 'was the music loud'], '"So + adjetivo + be + sujeto".'),
        ch('Only after the test results came back ___ how serious it was.', 'did we realise', ['we realised', 'we did realise'], 'Inversión en la oración principal después de "Only after…".'),
        ch('___ the company to close, hundreds of jobs would be lost.', 'Were', ['Was', 'Should'], '"Were + sujeto + to + infinitivo" = if… were to.'),
      ],
    },
    {
      id: 'c1-gr-in-2',
      kind: 'gap',
      title: 'Completa con una palabra',
      focus: 'Auxiliares e inicios',
      items: [
        g('Seldom ___ we see such dedication in young players.', ['do', 'have'], 'Inversión con presente: Seldom do we see…'),
        g('___ was the storm that the ferry was cancelled.', ['such'], '"Such was the + sustantivo + that".'),
        g('Not until the next morning ___ I notice the damage.', ['did'], 'Inversión: Not until… did I notice.'),
        g('___ she not been so stubborn, they would have reached an agreement.', ['had'], '"Had she not been…" = If she hadn\'t been…'),
        g('Under no circumstances ___ the doors be left unlocked.', ['should', 'must', 'may', 'can'], 'Inversión con modal.'),
        g('Scarcely had the plane landed ___ the passengers stood up.', ['when', 'before'], '"Scarcely… when".'),
      ],
    },
    {
      id: 'c1-gr-in-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Orden y forma',
      items: [
        er('[Hadn\'t I seen] the sign, I would have driven straight on.', 'Had I not seen', 'En la condicional invertida, la negativa no se contrae.'),
        er('Rarely [we have] had such a successful year.', 'have we', 'Inversión después de "Rarely".'),
        er('Only by changing our habits [we can] reduce waste.', 'can we', 'Inversión después de "Only by…".'),
        er('Should you have any questions, do not hesitate to ask.', null, 'La frase es correcta.'),
        er('So [the demand was great] that they opened a second factory.', 'great was the demand', '"So + adjetivo + be + sujeto".'),
      ],
    },
  ],
}

export const c1Cleft: PartInfo = {
  slug: 'cleft-fronting',
  name: 'Cleft sentences & fronting',
  nameEs: 'Frases escindidas y anteposición',
  summary: 'What annoys me is…, It was only when…, All I did was…',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Frases escindidas',
      points: [
        'It-cleft: It + be + elemento + that/who: It was the noise that kept me awake. It wasn\'t until midnight that he arrived.',
        'Wh-cleft: What + frase + be: What I need is time. What happened was (that) the bus broke down.',
        'Con verbo: What she did was (to) call the police. All I did was ask a question.',
        'Otras: The reason (why)… is that… / The place where… / The thing that…',
      ],
    },
    {
      title: 'Anteposición (fronting)',
      points: [
        'Se pone delante algo que normalmente va después para enfatizarlo o enlazar con lo anterior: Strange though it may seem, I enjoyed it.',
        'Adjetivo/adverbio + as/though + sujeto + verbo = aunque: Tired as she was, she kept working.',
        'Lugar + verbo + sujeto (estilo literario): In the corner stood an old piano.',
      ],
      examples: [{ en: 'Much as I admire him, I can\'t agree.' }, { en: 'Hard as he tried, he couldn\'t open it.' }],
    },
  ],
  exercises: [
    {
      id: 'c1-gr-cl-1',
      kind: 'choice',
      title: 'Elige la forma correcta',
      focus: 'Énfasis',
      items: [
        ch('___ surprised me most was how calm she was.', 'What', ['That', 'It'], 'Wh-cleft: What surprised me…'),
        ch("It wasn't until I left home ___ I appreciated my parents.", 'that', ['when', 'then'], '"It wasn\'t until… that…".'),
        ch('All he did ___ complain about the weather.', 'was', ['did', 'is'], '"All he did was + infinitivo".'),
        ch('___ as it may sound, I actually enjoy doing housework.', 'Strange', ['Strangely', 'How strange'], '"Adjetivo + as + sujeto + verbo" = aunque.'),
        ch('___ I admire his talent, I find him difficult to work with.', 'Much as', ['As much', 'So much'], '"Much as" = por mucho que.'),
        ch('In the middle of the room ___ a huge wooden table.', 'stood', ['it stood', 'was standing it'], 'Anteposición de lugar con inversión del verbo.'),
      ],
    },
    {
      id: 'c1-gr-cl-2',
      kind: 'gap',
      title: 'Completa con una palabra',
      focus: 'Estructuras de énfasis',
      items: [
        g('___ was Maria who suggested the idea, not me.', ['it'], 'It-cleft: It was Maria who…'),
        g('What I did ___ phone the manager directly.', ['was'], '"What I did was + infinitivo".'),
        g('The ___ why I left is that I wanted a new challenge.', ['reason'], '"The reason why…".'),
        g('Tired ___ he was, he insisted on finishing the report.', ['as', 'though'], '"Adjetivo + as/though + sujeto" = aunque.'),
        g('___ I want is a bit of peace and quiet.', ['all', 'what'], '"All I want is…" / "What I want is…".'),
        g("It's not the money ___ worries me; it's the time.", ['that', 'which'], 'It-cleft: It\'s not the money that…'),
      ],
    },
    {
      id: 'c1-gr-cl-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Forma',
      items: [
        er('[That] I need is a holiday.', 'What', 'Wh-cleft con "What".'),
        er('It was only when I saw her face [when] I understood.', 'that', 'It-cleft: It was only when… that…'),
        er('[As much] as I would like to help, I can\'t.', 'Much', '"Much as I would like to…".'),
        er('What happened was that the train broke down.', null, 'La frase es correcta.'),
        er('All I did [it was] ask a simple question.', 'was', '"All I did was ask…", sin "it".'),
      ],
    },
  ],
}

export const c1Conditionals: PartInfo = {
  slug: 'advanced-conditionals',
  name: 'Mixed conditionals & alternatives to if',
  nameEs: 'Condicionales mixtas y alternativas a if',
  summary: 'If I had…, I would be…, provided that, but for, supposing',
  suggestedMinutes: 7,
  theory: [
    {
      title: 'Condicionales mixtas',
      points: [
        'Pasado → presente: If I had taken that job, I would be living in Paris now.',
        'Presente → pasado: If she weren\'t so shy, she would have spoken to him at the party.',
      ],
    },
    {
      title: 'Alternativas a if',
      points: [
        'Provided / providing (that), as long as, on condition that = siempre que.',
        'Unless = si no. Suppose / supposing = ¿y si…?',
        'But for + sustantivo = si no hubiera sido por: But for your help, I would have failed.',
        'Otherwise = si no, de lo contrario: Leave now; otherwise you\'ll miss the bus.',
        'In case = por si acaso (no es condicional): Take an umbrella in case it rains.',
        'Even if = aunque (incluso si). Whether or not = tanto si… como si no.',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-gr-co-1',
      kind: 'choice',
      title: 'Elige la forma correcta',
      focus: 'Mixtas y alternativas',
      items: [
        ch('If I had listened to my parents, I ___ a doctor now.', 'would be', ['would have been', 'will be'], 'Mixta: pasado → presente.'),
        ch('If he ___ so lazy, he would have finished the project on time.', "weren't", ["hadn't been", "isn't"], 'Mixta: rasgo presente → resultado pasado.'),
        ch('___ your support, I would never have finished the marathon.', 'But for', ['Except', 'Unless'], '"But for + sustantivo" = si no hubiera sido por.'),
        ch("You can borrow the car ___ you don't drive on the motorway.", 'provided', ['unless', 'in case'], '"Provided" = siempre que.'),
        ch('Take a map ___ your phone runs out of battery.', 'in case', ['provided', 'unless'], '"In case" = por si acaso.'),
        ch("Hurry up; ___ we'll be late.", 'otherwise', ['unless', 'even if'], '"Otherwise" = si no.'),
      ],
    },
    {
      id: 'c1-gr-co-2',
      kind: 'gap',
      title: 'Completa',
      focus: 'Una o dos palabras',
      items: [
        g("___ you won the lottery, what would you do first? (supón que)", ['suppose', 'supposing'], '"Suppose / Supposing" = ¿y si…?'),
        g("I'll go to the party ___ you come with me. (siempre que; 2 palabras)", ['as long as', 'so long as', 'provided that', 'providing that'], 'Condición: as long as / provided that.'),
        g("___ or not you agree, the decision has been made.", ['whether'], '"Whether or not" = tanto si… como si no.'),
        g("I wouldn't do it ___ if you paid me. (ni aunque)", ['even'], '"Even if" = ni aunque.'),
        g("If I ___ (not / miss) the train, I would be at home now.", ["hadn't missed", 'had not missed'], 'Mixta: pasado → presente.'),
        g("You won't get in ___ you have a ticket.", ['unless'], '"Unless" = a menos que.'),
      ],
    },
    {
      id: 'c1-gr-co-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Errores típicos',
      items: [
        er('If I [would have] more free time, I would learn Japanese.', 'had', 'En la oración con if va el pasado (had), no "would".'),
        er("I'll lend you the money [unless] you pay me back next week.", 'provided / as long as', 'El sentido es "siempre que", no "a menos que".'),
        er('Take a jacket [if] it gets cold later.', 'in case', 'Precaución: in case.'),
        er('But for the rain, we would have had a great day.', null, 'La frase es correcta.'),
        er('If she [would have known], she would have told us.', 'had known', 'En la oración con if, nunca "would have": had known.'),
      ],
    },
  ],
}
