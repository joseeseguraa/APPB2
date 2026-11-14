import type { PartInfo } from '../../types'
import { ch, er, g } from '../helpers'

export const phrasalVerbs: PartInfo = {
  slug: 'phrasal-verbs',
  name: 'Phrasal verbs',
  nameEs: 'Los phrasal verbs más frecuentes en el B2',
  summary: 'Relaciones, trabajo, problemas y viajes',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Qué son y cómo se colocan',
      points: [
        'Un phrasal verb es un verbo + partícula (up, off, out…) con un significado propio, a menudo muy distinto del verbo solo.',
        'Separables: el objeto puede ir en medio o detrás (turn the TV off / turn off the TV). Si el objeto es un PRONOMBRE, va siempre en medio: turn it off, nunca turn off it.',
        'Inseparables: el objeto siempre va detrás (look after the kids). Los de tres palabras siempre son inseparables (put up with, run out of).',
      ],
      examples: [
        { en: 'Turn it off, please.' },
        { en: 'Turn off it, please.', wrong: true },
      ],
    },
    {
      title: 'Relaciones y familia',
      points: [
        'get on (well) with = llevarse bien con · fall out with = enfadarse con · make up = reconciliarse',
        'look after = cuidar · take after = parecerse a un familiar · bring up = criar · grow up = crecer',
        'split up = separarse o romper una pareja',
      ],
    },
    {
      title: 'Estudios y trabajo',
      points: [
        'carry on = continuar · give up = dejar, rendirse · take up = empezar una afición',
        'set up = montar o crear · put off = aplazar · hand in = entregar · catch up = ponerse al día',
        'fall behind = quedarse atrás · look into = investigar · figure out = descifrar, entender',
      ],
    },
    {
      title: 'Problemas y soluciones',
      points: [
        'find out = descubrir, enterarse · point out = señalar · come up with = idear, ocurrírsele',
        'deal with = ocuparse de · sort out = resolver · turn down = rechazar',
        'put up with = aguantar · run out of = quedarse sin · cut down on = reducir',
        'break down = averiarse · get over = superar, recuperarse de',
      ],
    },
    {
      title: 'Viajes',
      points: [
        'set off = salir de viaje · take off = despegar · check in / check out = registrarse / dejar el hotel',
        'pick up = recoger · see off = despedir (en la estación o el aeropuerto) · get away = escaparse unos días',
      ],
    },
  ],
  exercises: [
    {
      id: 'vo-pv-1',
      kind: 'choice',
      title: 'Elige el phrasal verb',
      focus: 'Significado en contexto',
      items: [
        ch('I was ___ by my grandparents in a small village.', 'brought up', ['grown up', 'taken up'], '"Bring up" = criar, y aquí va en pasiva. "Grow up" (crecer) no tiene objeto, así que no admite pasiva.'),
        ch('We ___ early to avoid the traffic.', 'set off', ['took off', 'put off'], '"Set off" = salir de viaje. "Take off" es despegar y "put off" es aplazar.'),
        ch("I don't really ___ with my sister - we argue all the time.", 'get on', ['get by', 'get over'], '"Get on with" = llevarse bien con alguien.'),
        ch('The plane ___ at 6 am.', 'took off', ['set off', 'went off'], 'Los aviones "take off" (despegan). "Go off" se usa para alarmas, bombas o comida que se estropea.'),
        ch("Could you ___ the dog while I'm away?", 'look after', ['look for', 'look into'], '"Look after" = cuidar. "Look for" es buscar y "look into" es investigar.'),
        ch('She ___ the job offer because the salary was too low.', 'turned down', ['turned up', 'turned off'], '"Turn down" = rechazar una oferta. "Turn up" es aparecer o subir el volumen.'),
        ch('It took me weeks to ___ my cold.', 'get over', ['get through', 'get on'], '"Get over" = recuperarse de una enfermedad o superar algo.'),
        ch('The police are ___ the robbery.', 'looking into', ['looking up', 'looking after'], '"Look into" = investigar. "Look up" es buscar en un diccionario o en internet.'),
      ],
    },
    {
      id: 'vo-pv-2',
      kind: 'gap',
      title: 'Escribe la partícula',
      focus: 'up, out, down, in…',
      items: [
        g("I've run ___ of milk. Can you buy some?", ['out'], '"Run out of" = quedarse sin algo.'),
        g('Please hand ___ your essays by Friday.', ['in'], '"Hand in" = entregar un trabajo.'),
        g('She took ___ yoga last year and loves it.', ['up'], '"Take up" = empezar una afición.'),
        g("If you don't understand a word, look it ___ in the dictionary.", ['up'], '"Look up" = buscar información. Con el pronombre "it" en medio, porque es separable.'),
        g('Our car broke ___ on the motorway.', ['down'], '"Break down" = averiarse.'),
        g('I missed two weeks of school and now I need to catch ___.', ['up'], '"Catch up" = ponerse al día.'),
        g('He came ___ with a brilliant idea.', ['up'], '"Come up with" = ocurrírsele una idea.'),
        g("We fell ___ last year, but now we're friends again.", ['out'], '"Fall out (with)" = enfadarse, pelearse.'),
      ],
    },
    {
      id: 'vo-pv-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Significado y posición',
      items: [
        er("Can you [turn off it]? It's too loud.", 'turn it off', 'Con un pronombre, la partícula va detrás: turn it off.'),
        er("I'm really looking forward to the weekend.", null, 'La frase es correcta: look forward to + sustantivo.'),
        er('My son [looks after] his father - they have the same eyes.', 'takes after', 'Parecerse a un familiar es "take after". "Look after" es cuidar.'),
        er('I need to [give up] my essay before Friday.', 'hand in', 'Entregar un trabajo es "hand in". "Give up" es rendirse o dejar algo.'),
        er('We have run [out] milk.', 'out of', 'Es un phrasal verb de tres partes: run out OF.'),
        er("I can't [put up] his rudeness any longer.", 'put up with', 'Aguantar es "put up WITH".'),
      ],
    },
  ],
}

export const collocations: PartInfo = {
  slug: 'make-do-have-take',
  name: 'Make, do, have, take',
  nameEs: 'Colocaciones con los verbos más traicioneros',
  summary: 'make a mistake, do homework, take a photo…',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'MAKE: crear, producir',
      points: [
        'make a mistake, a decision, a choice, an effort, progress, money, a noise, friends, an excuse, a complaint, a suggestion, a phone call, a difference, sure, the bed',
      ],
      examples: [{ en: 'I made a mistake.', es: 'Cometí un error.' }, { en: 'I did a mistake.', wrong: true }],
    },
    {
      title: 'DO: tareas y actividades',
      points: [
        'do homework, housework, the washing-up, the shopping, a course, research, business, exercise, sport, your best, somebody a favour, damage, harm, good',
      ],
      examples: [{ en: 'Could you do me a favour?', es: '¿Me haces un favor?' }],
    },
    {
      title: 'HAVE: experiencias y comidas',
      points: [
        'have a shower, a bath, breakfast, lunch, a rest, a good time, fun, a look, an argument, a chat, a party, a baby, a dream',
      ],
    },
    {
      title: 'TAKE',
      points: [
        'take a photo, a break, a seat, an exam, part, place, care, a risk, notes, advice, time, responsibility, a decision (también vale make)',
        'Ojo: en español "hacer una foto" y "hacer un examen", pero en inglés se dice take a photo y take an exam.',
      ],
      examples: [{ en: 'Can I take a photo?' }, { en: 'Can I do a photo?', wrong: true }],
    },
  ],
  exercises: [
    {
      id: 'vo-co-1',
      kind: 'choice',
      title: 'Elige el verbo',
      focus: 'make / do / have / take',
      items: [
        ch('I ___ a lot of mistakes in my last test.', 'made', ['did', 'took'], 'Siempre se dice "make a mistake".'),
        ch('Could you ___ me a favour?', 'do', ['make', 'give'], 'Siempre se dice "do somebody a favour".'),
        ch("Let's ___ a break - we've been working for hours.", 'take', ['make', 'do'], '"Take a break" = hacer un descanso. "Have a break" también es correcto.'),
        ch("She's ___ a lot of progress with her English.", 'made', ['done', 'taken'], 'Siempre se dice "make progress".'),
        ch('I usually ___ the housework at weekends.', 'do', ['make', 'take'], 'Las tareas domésticas van con do: do the housework.'),
        ch('Can I ___ a photo of you?', 'take', ['make', 'do'], 'En inglés se dice "take a photo", aunque en español digamos "hacer".'),
        ch('We ___ a great time at the party.', 'had', ['made', 'did'], 'Para decir que lo pasaste bien: have a good/great time.'),
        ch('The meeting will ___ place on Monday.', 'take', ['have', 'make'], '"Take place" = tener lugar, celebrarse.'),
      ],
    },
    {
      id: 'vo-co-2',
      kind: 'gap',
      title: 'Escribe el verbo',
      focus: 'make / do / have / take en la forma correcta',
      items: [
        g('Have you ___ your homework yet? (make / do)', ['done'], 'Siempre se dice "do homework". El participio de do es "done".'),
        g("I'm going to ___ a shower before dinner. (have / make)", ['have', 'take'], '"Have a shower" (en EE. UU. también se dice "take a shower").'),
        g("Don't ___ so much noise! The baby's sleeping. (make / do)", ['make'], 'Siempre se dice "make a noise".'),
        g("You should ___ the doctor's advice. (take / make)", ['take'], '"Take advice" = seguir un consejo.'),
        g('He ___ a lot of money when he sold his company. (make / do)', ['made'], 'Para ganar dinero, se dice "make money".'),
        g('A walk in the fresh air will ___ you good. (make / do)', ['do'], '"Do somebody good" = sentarle bien a alguien.'),
        g('Make ___ you lock the door when you leave.', ['sure'], '"Make sure" = asegurarse.'),
        g('Smoking can ___ serious damage to your health. (make / do)', ['do', 'cause'], 'Se dice "do damage" (o "cause damage"), pero nunca "make damage".'),
      ],
    },
    {
      id: 'vo-co-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Traducciones literales del español',
      items: [
        er('I [did] a mistake in the exam.', 'made', 'Se dice "make a mistake".'),
        er('Can I [do] a photo?', 'take', 'Se dice "take a photo".'),
        er('We [made] an exam yesterday.', 'took / did', 'Un examen se "take". Do an exam también se oye. Nunca se dice "make an exam".'),
        er('She made a big effort to finish on time.', null, 'La frase es correcta: make an effort.'),
        er('I need to [make] some exercise.', 'do / take', 'Se dice "do exercise". "Make exercise" no existe.'),
        er("Let's [do] a party for her birthday!", 'have / throw', 'Una fiesta se "have" o "throw".'),
      ],
    },
  ],
}

export const prepositions: PartInfo = {
  slug: 'dependent-prepositions',
  name: 'Dependent prepositions',
  nameEs: 'Preposiciones que acompañan a adjetivos, verbos y sustantivos',
  summary: 'good at, depend on, married to, increase in…',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Adjetivo + preposición',
      points: [
        'good/bad AT · interested IN · afraid/proud/tired/aware/fond OF · keen ON · responsible/famous FOR',
        'similar TO · married TO · different FROM (o TO) · angry WITH (una persona) · angry ABOUT (una cosa) · worried ABOUT',
      ],
    },
    {
      title: 'Verbo + preposición',
      points: [
        'depend/rely/insist/concentrate ON · apply/apologise/pay/wait FOR · belong/listen TO · consist OF · succeed IN · complain ABOUT',
        'ARRIVE IN (ciudad o país) / ARRIVE AT (edificio, estación, aeropuerto). Nunca "arrive to".',
        'Sin preposición: enter (a room), discuss (a topic), marry (somebody), reach (a place).',
      ],
      examples: [
        { en: 'It depends on the weather.', es: 'Depende del tiempo.' },
        { en: 'It depends of the weather.', wrong: true },
      ],
    },
    {
      title: 'Sustantivo + preposición',
      points: [
        'reason FOR · demand FOR · solution TO · increase/rise/fall IN · effect ON · cause OF · advantage OF · attitude TOWARDS',
      ],
    },
  ],
  exercises: [
    {
      id: 'vo-pr-1',
      kind: 'choice',
      title: 'Elige la preposición',
      focus: 'Adjetivos, verbos y sustantivos',
      items: [
        ch("I'm not very good ___ maths.", 'at', ['in', 'on'], 'Good/bad AT something.'),
        ch('It depends ___ the weather.', 'on', ['of', 'from'], 'Depend ON. Es un error muy típico decir "depend of", por traducción del español.'),
        ch("She's married ___ a doctor.", 'to', ['with', 'by'], 'Married TO somebody, no "with".'),
        ch('We arrived ___ Madrid at midnight.', 'in', ['to', 'at'], 'Arrive IN con ciudades y países. Nunca "arrive to".'),
        ch('This book belongs ___ me.', 'to', ['of', 'for'], 'Belong TO.'),
        ch('Are you interested ___ joining the club?', 'in', ['on', 'for'], 'Interested IN.'),
        ch("There's been an increase ___ prices.", 'in', ['of', 'on'], 'An increase IN something. "An increase of" va con cantidades (an increase of 5%).'),
        ch('Who is responsible ___ this mess?', 'for', ['of', 'about'], 'Responsible FOR.'),
      ],
    },
    {
      id: 'vo-pr-2',
      kind: 'gap',
      title: 'Escribe la preposición',
      focus: 'Una palabra',
      items: [
        g("I'm really proud ___ you.", ['of'], 'Proud OF.'),
        g('He applied ___ a job in London.', ['for'], 'Apply FOR a job.'),
        g('My opinion is different ___ yours.', ['from', 'to'], 'Different FROM (también TO en inglés británico). Nunca "different of".'),
        g("I can't concentrate ___ my work with this noise.", ['on'], 'Concentrate ON.'),
        g("She's afraid ___ spiders.", ['of'], 'Afraid OF.'),
        g('We complained ___ the noise.', ['about'], 'Complain ABOUT something.'),
        g('Is there a solution ___ this problem?', ['to'], 'A solution TO a problem.'),
        g('The team consists ___ eleven players.', ['of'], 'Consist OF.'),
      ],
    },
    {
      id: 'vo-pr-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Traducciones del español',
      items: [
        er('It depends [of] you.', 'on', 'Depend ON.'),
        er("I'm always thinking [in] you.", 'of / about', 'Think OF/ABOUT somebody. "Think in" se usa para idiomas (think in English).'),
        er('She got married [with] her boyfriend.', 'to', 'Get married TO somebody.'),
        er('We arrived [to] the airport late.', 'at', 'Arrive AT con edificios y aeropuertos.'),
        er("He's very keen on football.", null, 'La frase es correcta: keen ON.'),
        er('Please [enter in] the room quietly.', 'enter', '"Enter" no lleva preposición: enter the room.'),
      ],
    },
  ],
}
