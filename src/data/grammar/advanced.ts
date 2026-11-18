import type { PartInfo } from '../../types'
import { ch, er, g } from '../helpers'

export const usedTo: PartInfo = {
  slug: 'used-to',
  name: 'Used to, be used to, get used to',
  nameEs: 'Soler, estar acostumbrado y acostumbrarse',
  summary: 'I used to live / I\'m used to living / I got used to it',
  suggestedMinutes: 5,
  theory: [
    {
      title: 'Tres estructuras que se parecen',
      points: [
        'USED TO + infinitivo = hábito o estado del pasado que ya no ocurre: I used to smoke (antes fumaba). Negativa: didn\'t use to. Pregunta: Did you use to…?',
        'BE USED TO + -ing / sustantivo = estar acostumbrado: I\'m used to getting up early. Se puede conjugar en cualquier tiempo: I wasn\'t used to the cold.',
        'GET USED TO + -ing / sustantivo = acostumbrarse (proceso): You\'ll soon get used to driving on the left.',
        'En BE / GET USED TO, "to" es una preposición, por eso va seguida de -ing y no de infinitivo.',
      ],
      examples: [
        { en: 'I used to live in London, but now I live in Madrid.' },
        { en: "I'm used to live alone.", wrong: true, es: 'Correcto: I\'m used to living alone.' },
        { en: "It took me months to get used to the noise." },
      ],
    },
    {
      title: 'Would para hábitos pasados',
      points: [
        'WOULD + infinitivo también expresa hábitos repetidos en el pasado: Every summer we would go to the beach.',
        'Con verbos de estado (be, have, live, like, know) solo vale USED TO: I used to have long hair (no "would have").',
      ],
    },
  ],
  exercises: [
    {
      id: 'gr-ut-1',
      kind: 'choice',
      title: 'Elige la forma correcta',
      focus: 'Used to / be used to / get used to',
      items: [
        ch('When I was a child, I ___ hate vegetables.', 'used to', ['was used to', 'got used to'], 'Estado del pasado que ya no es así: used to + infinitivo.'),
        ch("I've lived here for years, so I'm used to ___ the traffic.", 'hearing', ['hear', 'heard'], '"Be used to" va seguido de -ing.'),
        ch("Don't worry, you'll soon ___ used to the new system.", 'get', ['be', 'use'], 'Proceso de acostumbrarse en el futuro: get used to.'),
        ch('___ you use to play any sports at school?', 'Did', ['Were', 'Have'], 'Pregunta de "used to": Did you use to…?'),
        ch('We ___ visit my grandparents every Sunday.', 'would', ['were used to', 'got used to'], 'Hábito repetido del pasado con verbo de acción: would o used to.'),
        ch('She ___ have a dog when she was younger.', 'used to', ['would', 'was used to'], '"Have" (poseer) es un verbo de estado: solo vale "used to".'),
        ch('At first, he wasn\'t used ___ in an office.', 'to working', ['to work', 'working'], '"Be used TO + -ing".'),
        ch("I didn't ___ like coffee, but now I love it.", 'use to', ['used to', 'get used to'], 'En negativa con "didn\'t" se escribe "use to" (sin -d).'),
      ],
    },
    {
      id: 'gr-ut-2',
      kind: 'gap',
      title: 'Completa con la forma correcta',
      focus: 'Una o varias palabras',
      items: [
        g('It took me a long time to get used to ___ on the left. (drive)', ['driving'], '"Get used to + -ing".'),
        g('My dad ___ to work in a bank, but now he runs a café.', ['used'], 'Trabajo del pasado que ya no tiene: used to work.'),
        g("I'm not used ___ so much homework!", ['to'], '"Be used TO + sustantivo".'),
        g('Did you ___ to live near here?', ['use'], 'Pregunta con "did": use to (sin -d).'),
        g("He's lived in Norway for years, so he's ___ to the cold.", ['used'], '"Be used to the cold" = estar acostumbrado al frío.'),
        g('When we were kids, my brother ___ always tell me scary stories. (hábito)', ['would'], 'Hábito repetido del pasado: would + infinitivo.'),
        g("You'll have to get used to ___ up early. (get)", ['getting'], '"Get used to + -ing": getting up.'),
        g("There ___ to be a cinema here, but it closed years ago.", ['used'], '"There used to be" = antes había.'),
      ],
    },
    {
      id: 'gr-ut-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Errores típicos',
      items: [
        er("I'm used to [get up] early.", 'getting up', '"Be used to + -ing".'),
        er('I [use to] go swimming every day when I was young.', 'used to', 'En afirmativa se escribe "used to".'),
        er('She [would have] long hair when she was at school.', 'used to have', 'Con verbos de estado no se usa "would".'),
        er("He's getting used to his new job.", null, 'La frase es correcta.'),
        er("I [am used to live] in a big city, so this village is very quiet for me.", 'am used to living', '"Be used to + -ing".'),
        er("Did you [used to] play the piano?", 'use to', 'Con "did" el verbo va en forma base: use to.'),
      ],
    },
  ],
}

export const emphasis: PartInfo = {
  slug: 'emphasis',
  name: 'Emphasis: cleft sentences & inversion',
  nameEs: 'Frases para enfatizar e inversión',
  summary: 'What I need is…, It was Ana who…, Not only…, Never have I…',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Frases escindidas (cleft sentences)',
      points: [
        'WHAT + sujeto + verbo + IS/WAS…: pone el foco en una parte de la frase. I need a holiday → What I need is a holiday.',
        'IT IS / IT WAS + elemento + WHO / THAT…: Ana broke it → It was Ana who broke it (fue Ana quien…).',
        'ALL I… = lo único que…: All I want is some sleep.',
        'THE THING / THE REASON / THE PLACE: The reason (why) I called is…',
      ],
      examples: [
        { en: 'What surprised me was the price.' },
        { en: "It wasn't me who told her." },
      ],
    },
    {
      title: 'Inversión después de expresiones negativas',
      points: [
        'Al poner al principio ciertas expresiones negativas o restrictivas, el auxiliar va antes del sujeto, como en una pregunta. Es formal y típico del Writing.',
        'Never / Rarely / Seldom: Never have I seen such a mess.',
        'Not only… but also: Not only did she win, but she also broke the record.',
        'Hardly… when / No sooner… than: No sooner had we arrived than it started to rain.',
        'Under no circumstances / At no time / Only then / Not until: Only then did I realise.',
      ],
      examples: [
        { en: 'Not only is it cheap, but it is also very good.' },
        { en: 'Never I have seen such a mess.', wrong: true },
      ],
    },
  ],
  exercises: [
    {
      id: 'gr-em-1',
      kind: 'choice',
      title: 'Elige la forma correcta',
      focus: 'Énfasis e inversión',
      items: [
        ch('___ I need right now is a long holiday.', 'What', ['That', 'Which'], 'Frase escindida: What I need is…'),
        ch('It was my sister ___ found the keys.', 'who', ['what', 'whose'], '"It was + persona + who…".'),
        ch('Never ___ such a beautiful sunset.', 'have I seen', ['I have seen', 'I saw'], 'Después de "Never" al principio: inversión, auxiliar + sujeto.'),
        ch('Not only ___ late, but he also forgot the tickets.', 'was he', ['he was', 'he is'], '"Not only" al principio: inversión (was he).'),
        ch('No sooner had I sat down ___ the phone rang.', 'than', ['when', 'that'], '"No sooner… than" es fijo. "Hardly" va con "when".'),
        ch('___ do we accept cash payments.', 'Under no circumstances', ['In any case', 'In all circumstances'], '"Under no circumstances" = bajo ningún concepto, con inversión.'),
        ch('All I want ___ a bit of peace and quiet.', 'is', ['are', 'it is'], '"All I want is…" = lo único que quiero es…'),
        ch('Only when I got home ___ that I had lost my wallet.', 'did I realise', ['I realised', 'I did realise'], '"Only when…" al principio: inversión en la oración principal.'),
      ],
    },
    {
      id: 'gr-em-2',
      kind: 'gap',
      title: 'Completa la frase',
      focus: 'Una palabra',
      items: [
        g("___ I don't understand is why she left. (lo que)", ['what'], 'Frase escindida con "What".'),
        g('It ___ in 2015 that we first met.', ['was'], '"It was + momento + that…".'),
        g('Rarely ___ he arrive on time. (auxiliar)', ['does'], '"Rarely" al principio: inversión con does.'),
        g('Hardly had we started ___ it began to rain.', ['when'], '"Hardly… when".'),
        g('Not only ___ she speak French, but she also speaks Arabic.', ['does'], '"Not only" al principio: inversión con does.'),
        g('The ___ why I called is to invite you to dinner.', ['reason'], '"The reason why…" = el motivo por el que.'),
        g('At no ___ did anyone tell us the flight was cancelled.', ['time', 'point'], '"At no time" = en ningún momento, con inversión.'),
        g('It was ___ (yo) who sent you the flowers.', ['me', 'I'], '"It was me who…" (en registro formal también "It was I who…").'),
      ],
    },
    {
      id: 'gr-em-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Errores de orden',
      items: [
        er('Never [I have heard] such nonsense.', 'have I heard', 'Inversión después de "Never".'),
        er('Not only [she sings], but she also plays the guitar.', 'does she sing', 'Inversión después de "Not only".'),
        er('[That] I like most about my job is the people.', 'What', 'Frase escindida: "What I like most…".'),
        er('It was Peter who called you.', null, 'La frase es correcta.'),
        er('No sooner had we left [when] it started snowing.', 'than', '"No sooner" va con "than".'),
        er('Only then [I understood] what she meant.', 'did I understand', 'Inversión después de "Only then".'),
      ],
    },
  ],
}

export const participles: PartInfo = {
  slug: 'participle-clauses',
  name: 'Participle clauses',
  nameEs: 'Oraciones con participio (-ing, -ed, having done)',
  summary: 'Walking home, I saw…, Built in 1900, the house…',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Para qué sirven',
      points: [
        'Permiten acortar frases y dan un estilo más elaborado, muy útil en el Writing.',
        'Sujeto de las dos partes = el mismo. Si no, la frase es incorrecta: Walking home, it started to rain ✗ (la lluvia no camina).',
      ],
    },
    {
      title: 'Tipos',
      points: [
        'PRESENT PARTICIPLE (-ing), sentido activo y simultáneo: Walking home, I saw an accident (= While I was walking…).',
        'PAST PARTICIPLE (-ed / irregular), sentido pasivo: Built in 1900, the house needs repairs (= The house, which was built…).',
        'PERFECT PARTICIPLE (having + participio), acción anterior: Having finished the exam, she went home (= After she had finished…).',
        'Negativa: NOT delante: Not knowing what to do, I called my mum.',
        'Relativas reducidas: The man sitting next to me… (= who was sitting), Products made in China… (= which are made).',
      ],
      examples: [
        { en: 'Feeling tired, I went to bed early.' },
        { en: 'Having lost his keys, he had to wait outside.' },
        { en: 'Made by hand, each bag is unique.' },
      ],
    },
  ],
  exercises: [
    {
      id: 'gr-pc-1',
      kind: 'choice',
      title: 'Elige la forma correcta',
      focus: 'Activo, pasivo o anterior',
      items: [
        ch('___ the door, I realised I had left my keys inside.', 'Closing', ['Closed', 'Having been closed'], 'Acción activa y simultánea: Closing.'),
        ch('___ in 1889, the tower was the tallest structure in the world.', 'Built', ['Building', 'Having built'], 'Sentido pasivo (la torre fue construida): Built.'),
        ch('___ the instructions, he started assembling the desk.', 'Having read', ['Read', 'Been reading'], 'Acción anterior a la otra: Having read.'),
        ch('___ what to say, she stayed silent.', 'Not knowing', ['Knowing not', "Don't knowing"], 'Negativa: "not" delante del participio.'),
        ch('The woman ___ to the manager is my aunt.', 'talking', ['talked', 'who talking'], 'Relativa reducida activa: talking (= who is talking).'),
        ch('Most of the products ___ in this shop are local.', 'sold', ['selling', 'having sold'], 'Relativa reducida pasiva: sold (= which are sold).'),
        ch('___ by the news, she started to cry.', 'Shocked', ['Shocking', 'Having shocked'], 'Ella fue impactada por la noticia: sentido pasivo, Shocked.'),
        ch('___ all day, they were exhausted by the evening.', 'Having walked', ['Walked', 'Being walked'], 'Acción anterior y activa: Having walked.'),
      ],
    },
    {
      id: 'gr-pc-2',
      kind: 'gap',
      title: 'Escribe el participio',
      focus: 'Una o dos palabras',
      items: [
        g('___ (feel) hungry, we stopped at a café.', ['feeling'], 'Activo y simultáneo: Feeling.'),
        g('___ (write) in 1813, the novel is still popular today.', ['written'], 'Pasivo: la novela fue escrita. Participio irregular: written.'),
        g('Having ___ (finish) his homework, he went out to play.', ['finished'], '"Having + participio".'),
        g('The boy ___ (sit) in the corner is my cousin.', ['sitting'], 'Relativa reducida activa: sitting.'),
        g('Any items ___ (leave) in the classroom will be thrown away.', ['left'], 'Pasivo: los objetos que se dejen. Participio de leave: left.'),
        g('___ (not want) to wake the baby, she whispered.', ['not wanting'], 'Negativa: Not wanting.'),
        g('___ (see) the film before, I knew how it ended. (dos palabras)', ['having seen'], 'Acción anterior: Having seen.'),
        g('___ (surround) by mountains, the village is very peaceful.', ['surrounded'], 'Pasivo: el pueblo está rodeado. Surrounded.'),
      ],
    },
    {
      id: 'gr-pc-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Forma y sujeto',
      items: [
        er('[Writing] in English, the book is easy to read.', 'Written', 'El libro está escrito (pasivo): Written.'),
        er('[Having finish] the meeting, we went for lunch.', 'Having finished', '"Having + participio".'),
        er('The students [taken] the exam must arrive at nine.', 'taking', 'Los estudiantes hacen el examen (activo): taking.'),
        er('Having lived in Rome for years, she speaks Italian fluently.', null, 'La frase es correcta.'),
        er('[Knowing not] the answer, I guessed.', 'Not knowing', '"Not" va delante del participio.'),
        er('[Boring] by the lecture, he fell asleep.', 'Bored', 'Él estaba aburrido (pasivo, cómo se siente): Bored.'),
      ],
    },
  ],
}
