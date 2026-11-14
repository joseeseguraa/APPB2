import type { PartInfo } from '../../types'
import { ch, er, g } from '../helpers'

export const conditionals: PartInfo = {
  slug: 'conditionals',
  name: 'Conditionals & wish',
  nameEs: 'Condicionales, mixtos, unless, wish, if only y would rather',
  summary: 'Todas las condicionales y cómo expresar deseos',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Los cuatro condicionales',
      points: [
        'Zero (verdades generales): if + presente, presente. Ejemplo: If you heat ice, it melts.',
        'First (posible en el futuro): if + presente, will + infinitivo. Ejemplo: If it rains, we\'ll stay in.',
        'Second (hipotético en el presente o futuro): if + pasado, would + infinitivo. Ejemplo: If I had money, I\'d travel.',
        'Third (hipotético en el pasado): if + past perfect, would have + participio. Ejemplo: If I had studied, I would have passed.',
        'Nunca se pone will ni would en la parte del "if".',
        'En el second conditional se suele usar "were" con todas las personas: If I were you…',
      ],
      examples: [{ en: 'If I would have time, I would help you.', wrong: true, es: 'Correcto: If I had time…' }],
    },
    {
      title: 'Condicionales mixtos',
      points: [
        'Pasado → presente: if + past perfect, would + infinitivo. Ejemplo: If I had studied medicine, I would be a doctor now.',
        'Presente → pasado: if + pasado, would have + participio. Ejemplo: If I were braver, I would have said something.',
      ],
    },
    {
      title: 'Otros conectores',
      points: [
        'UNLESS = if … not. El verbo va en afirmativa: unless you hurry.',
        'AS LONG AS / PROVIDED (THAT) = siempre que, con la condición de que.',
        'IN CASE = por si acaso. No es lo mismo que "if": Take an umbrella in case it rains.',
      ],
    },
    {
      title: 'Wish, if only y would rather',
      points: [
        'Wish / if only + pasado: deseo sobre el presente. Ejemplo: I wish I had more time.',
        'Wish / if only + past perfect: arrepentimiento sobre el pasado. Ejemplo: I wish I hadn\'t said that.',
        'Wish + would: queja sobre lo que hace OTRA persona. Ejemplo: I wish you would stop talking.',
        'Would rather + pasado, cuando hablas de lo que hace otra persona. Ejemplo: I\'d rather you didn\'t smoke here.',
      ],
    },
  ],
  exercises: [
    {
      id: 'gr-co-1',
      kind: 'choice',
      title: 'Elige la forma correcta',
      focus: 'Tipos de condicional y wish',
      items: [
        ch('If you heat ice, it ___.', 'melts', ['would melt', 'melted'], 'Es una verdad general, así que va en zero conditional: presente en las dos partes.'),
        ch("If it ___ tomorrow, we'll stay at home.", 'rains', ['will rain', 'would rain'], 'First conditional: if + presente. Nunca se pone will después de if.'),
        ch("If I ___ you, I'd apologise.", 'were', ['am', 'would be'], 'Second conditional (consejo hipotético): if I were you.'),
        ch('If she had left earlier, she ___ the train.', 'would have caught', ['would catch', 'had caught'], 'Third conditional (pasado irreal): would have + participio.'),
        ch('If I had studied medicine, I ___ a doctor now.', 'would be', ['would have been', 'will be'], 'Condicional mixto: la condición es pasada y el resultado es presente ("now").'),
        ch("I'll lend you the car ___ you drive carefully.", 'as long as', ['unless', 'in case'], '"As long as" = siempre que. Es la condición que pones para prestar el coche.'),
        ch('I wish I ___ more free time.', 'had', ['have', 'would have'], 'Deseo sobre el presente: wish + pasado.'),
        ch("I wish you ___ making that noise! It's really annoying.", 'would stop', ['stopped', 'had stopped'], 'Queja sobre lo que hace otra persona: wish + would.'),
      ],
    },
    {
      id: 'gr-co-2',
      kind: 'gap',
      title: 'Escribe la forma correcta',
      focus: 'Condicionales y deseos',
      items: [
        g("If I ___ the lottery, I'd travel round the world. (win)", ['won'], 'Second conditional: if + pasado.'),
        g("We'll miss the bus unless we ___. (hurry)", ['hurry'], '"Unless" ya es negativo y va seguido de presente en afirmativa.'),
        g('If you ___ me about the problem, I could have helped. (tell)', ['had told'], 'Third conditional: if + past perfect.'),
        g("I wish I ___ so much cake last night. (not / eat)", ["hadn't eaten", 'had not eaten'], 'Arrepentimiento sobre el pasado ("last night"): wish + past perfect.'),
        g('If only I ___ speak Japanese! (can)', ['could'], 'If only + pasado para un deseo sobre el presente. El pasado de "can" es "could".'),
        g('Take an umbrella in ___ it rains.', ['case'], '"In case" = por si acaso.'),
        g("I'd rather you ___ in the house. (not / smoke)", ["didn't smoke", 'did not smoke'], 'Would rather + otra persona + pasado.'),
        g('If he ___ taller, he would have been a great basketball player. (be)', ['were', 'was'], 'Condicional mixto: una característica presente (no es alto) con un resultado pasado. Va "were" o "was".'),
      ],
    },
    {
      id: 'gr-co-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Errores típicos con if y wish',
      items: [
        er("If I [would have] more money, I'd buy a new car.", 'had', 'En la parte del "if" nunca va would: if + pasado.'),
        er('If you [will need] help, call me.', 'need', 'Después de "if" va presente para hablar del futuro.'),
        er('I wish I [have] a bigger house.', 'had', 'Wish + pasado para hablar de un deseo presente.'),
        er('If I had known, I would have told you.', null, 'La frase es correcta: third conditional.'),
        er("You won't pass unless you [don't study].", 'study', '"Unless" ya significa "if not", así que no se añade otra negación.'),
        er('If she [would have asked] me, I would have helped her.', 'had asked', 'Third conditional: if + past perfect, no would have.'),
      ],
    },
  ],
}

export const passive: PartInfo = {
  slug: 'passive',
  name: 'Passive & causative',
  nameEs: 'Pasiva, have something done y pasiva impersonal',
  summary: 'Pasiva en todos los tiempos, have/get sth done, it is said…',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Cómo se forma la pasiva',
      points: [
        'BE (en el tiempo que toque) + participio.',
        'Presente: is made. Pasado: was made. Continuo: is being made. Perfecto: has been made. Futuro: will be made. Modal: should be made / should have been made.',
        'El agente (by…) se pone solo si aporta información.',
        'Se usa cuando importa la acción o el objeto, no quién la hace. Es muy frecuente en textos formales e informes.',
      ],
      examples: [
        { en: 'The bridge was built in 1890.', es: 'El puente se construyó en 1890.' },
        { en: 'A new hospital is being built.', es: 'Se está construyendo un hospital nuevo.' },
      ],
    },
    {
      title: 'Causativa: have / get something done',
      points: [
        'Sirve para decir que OTRA persona hace algo por ti, normalmente un servicio.',
        'Estructura: have + objeto + participio. "Get" es igual pero más informal.',
        'Es el error típico de hispanohablantes: "Me corté el pelo" (en la peluquería) se dice "I had my hair cut", no "I cut my hair".',
      ],
      examples: [
        { en: 'I had my hair cut yesterday.', es: 'Ayer me corté el pelo (en la peluquería).' },
        { en: "We're getting the kitchen painted.", es: 'Nos están pintando la cocina.' },
      ],
    },
    {
      title: 'Pasiva impersonal',
      points: [
        'It is said / believed / thought / known + that… Ejemplo: It is said that he is rich.',
        'Sujeto + is said / believed + to + infinitivo. Ejemplo: He is said to be rich.',
        'Si se refiere al pasado, se usa to have + participio. Ejemplo: He is believed to have left the country.',
      ],
    },
  ],
  exercises: [
    {
      id: 'gr-pa-1',
      kind: 'choice',
      title: 'Elige la forma correcta',
      focus: 'Pasiva en distintos tiempos',
      items: [
        ch('The bridge ___ in 1890.', 'was built', ['built', 'has built'], 'El puente no construyó nada, lo construyeron: pasiva en pasado (was + participio).'),
        ch("My car ___ at the moment, so I'm taking the bus.", 'is being repaired', ['is repairing', 'has repaired'], 'Pasiva en presente continuo: is being + participio.'),
        ch('I ___ my hair cut yesterday.', 'had', ['did', 'made'], 'Causativa: have + objeto + participio. Te lo hizo otra persona.'),
        ch('The winner ___ next week.', 'will be announced', ['will announce', 'is announcing'], 'Pasiva en futuro: will be + participio.'),
        ch('He is believed ___ the country last month.', 'to have left', ['to leave', 'having left'], 'Pasiva impersonal sobre el pasado: to have + participio.'),
        ch('The house ___ since last year.', "hasn't been cleaned", ["hasn't cleaned", "didn't clean"], 'Pasiva en present perfect: has been + participio.'),
        ch('I was ___ a fine for parking in the wrong place.', 'given', ['give', 'giving'], 'Pasiva con objeto de persona: I was given a fine (me pusieron una multa).'),
        ch('You should get your eyes ___.', 'tested', ['test', 'testing'], 'Causativa con get: get + objeto + participio.'),
      ],
    },
    {
      id: 'gr-pa-2',
      kind: 'gap',
      title: 'Escribe la pasiva',
      focus: 'Formar la pasiva',
      items: [
        g('English ___ all over the world. (speak)', ['is spoken'], 'Pasiva en presente simple: is + participio (spoken).'),
        g('The thieves ___ last night. (arrest)', ['were arrested'], 'Pasiva en pasado, en plural: were + participio.'),
        g('A new shopping centre ___ at the moment. (build)', ['is being built'], 'Pasiva en presente continuo: is being + participio.'),
        g('The letter should ___ yesterday. (send)', ['have been sent'], 'Modal en pasado en pasiva: should have been + participio.'),
        g("We're having our kitchen ___ next week. (paint)", ['painted'], 'Causativa: having + objeto + participio.'),
        g('It ___ that the castle is haunted. (say)', ['is said'], 'Pasiva impersonal: It is said that…'),
        g('The documents ___ by the time I arrived. (already / sign)', ['had already been signed'], 'Pasiva en past perfect: had been + participio, con already detrás de had.'),
        g('My bike ___ twice this year. (steal)', ['has been stolen', "'s been stolen"], '"This year" no ha terminado: pasiva en present perfect.'),
      ],
    },
    {
      id: 'gr-pa-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Pasiva y causativa',
      items: [
        er('The museum was opened by the Queen in 1990.', null, 'La frase es correcta: pasiva en pasado con agente.'),
        er('The new hospital [will build] next year.', 'will be built', 'El hospital no construye nada, lo construyen: hace falta pasiva.'),
        er("I [cut my hair] at the hairdresser's yesterday.", 'had my hair cut', 'Si te lo hace otra persona, se usa la causativa: have + objeto + participio.'),
        er('This film [was directing] by a famous director.', 'was directed', 'La pasiva se forma con el participio, no con -ing.'),
        er('The results [have been publish] online.', 'have been published', 'Detrás de "been" va el participio (published).'),
        er('He is said [that he is] very rich.', 'to be', 'Con la persona como sujeto la estructura es "is said TO BE". La otra opción sería "It is said that he is…".'),
      ],
    },
  ],
}

export const reportedSpeech: PartInfo = {
  slug: 'reported-speech',
  name: 'Reported speech & reporting verbs',
  nameEs: 'Estilo indirecto y verbos para contar lo que alguien dijo',
  summary: 'Backshift, preguntas indirectas, suggest, accuse, deny…',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Cambios de tiempo (backshift)',
      points: [
        'Cuando el verbo que introduce está en pasado, el tiempo retrocede un paso: presente → pasado, pasado y present perfect → past perfect, will → would, can → could.',
        'También cambian los pronombres y las referencias de tiempo y lugar: tomorrow → the next day, yesterday → the day before, here → there.',
        'SAY no lleva objeto directo (she said that…). TELL sí lo lleva (she told me that…).',
      ],
      examples: [
        { en: '"I\'m tired." → She said (that) she was tired.' },
        { en: 'She told that she was tired.', wrong: true },
      ],
    },
    {
      title: 'Preguntas indirectas',
      points: [
        'Llevan el orden de una frase afirmativa (sujeto + verbo) y no usan do/does/did.',
        'Las preguntas de sí o no se introducen con if o whether.',
      ],
      examples: [
        { en: 'He asked me where I lived.', es: 'Me preguntó dónde vivía.' },
        { en: 'He asked me where did I live.', wrong: true },
        { en: 'She asked if I liked jazz.' },
      ],
    },
    {
      title: 'Verbos para contar lo que se dijo (muy útiles en la Part 4)',
      points: [
        '+ to infinitivo: agree, offer, promise, refuse, threaten.',
        '+ alguien + to infinitivo: advise, ask, encourage, invite, persuade, remind, tell, warn.',
        '+ -ing: deny, admit, recommend, suggest.',
        '+ preposición + -ing: apologise FOR, accuse somebody OF, insist ON, blame somebody FOR.',
        'SUGGEST nunca va con "somebody to": se dice suggest + -ing o suggest that + sujeto + (should) + verbo.',
      ],
    },
  ],
  exercises: [
    {
      id: 'gr-rs-1',
      kind: 'choice',
      title: 'Elige la forma correcta',
      focus: 'Estilo indirecto y verbos',
      items: [
        ch('"I\'m tired." → She said she ___ tired.', 'was', ['is being', 'were'], 'Backshift: el presente "am" pasa a pasado "was".'),
        ch('He asked me where ___.', 'I lived', ['did I live', 'do I live'], 'En las preguntas indirectas el orden es sujeto + verbo y no se usa did.'),
        ch('They told us ___ late.', 'not to be', ["don't be", 'not being'], 'Para contar una orden negativa: tell + alguien + NOT TO + infinitivo.'),
        ch('My doctor advised me ___ more exercise.', 'to do', ['doing', 'do'], 'Advise + alguien + to + infinitivo.'),
        ch('He apologised ___ late.', 'for being', ['to be', 'being'], 'Apologise FOR + -ing.'),
        ch('She suggested ___ a taxi.', 'taking', ['to take', 'us to take'], 'Suggest + -ing. Nunca "suggest to do" ni "suggest somebody to do".'),
        ch('The man denied ___ the money.', 'stealing', ['to steal', 'steal'], 'Deny + -ing.'),
        ch('"I\'ll help you," he said. → He ___ to help me.', 'offered', ['suggested', 'advised'], 'Offer + to + infinitivo. Suggested y advised no encajan con esa estructura ni con el significado.'),
      ],
    },
    {
      id: 'gr-rs-2',
      kind: 'gap',
      title: 'Completa el estilo indirecto',
      focus: 'Transformar lo que se dijo',
      items: [
        g('"I\'m leaving tomorrow." → She said she was leaving ___.', ['the next day', 'the following day'], '"Tomorrow" pasa a "the next day" o "the following day".'),
        g('"Do you like jazz?" → He asked me ___ I liked jazz.', ['if', 'whether'], 'Las preguntas de sí o no se introducen con if o whether.'),
        g('"Don\'t touch it!" → She told me ___ touch it.', ['not to'], 'Orden negativa: told me NOT TO + infinitivo.'),
        g('"You stole my phone!" → She accused him ___ her phone.', ['of stealing'], 'Accuse somebody OF + -ing.'),
        g('"I won\'t do it." → He refused ___ it.', ['to do'], 'Refuse + to + infinitivo.'),
        g('"I\'ve finished." → She said she ___ finished.', ['had'], 'El present perfect pasa a past perfect: had finished.'),
        g('"Remember to lock the door." → She reminded me ___ the door.', ['to lock'], 'Remind + alguien + to + infinitivo.'),
        g('"Where is the station?" → He asked me where the station ___.', ['was'], 'Pregunta indirecta: sujeto + verbo (the station was) y con backshift.'),
      ],
    },
    {
      id: 'gr-rs-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Say/tell, preguntas indirectas, verbos',
      items: [
        er('She [told] that she was tired.', 'said', '"Tell" necesita objeto (told ME). Sin objeto se usa "said".'),
        er('He asked me where [did I live].', 'I lived', 'Pregunta indirecta: orden afirmativo y sin did.'),
        er('She suggested [me to go] to the doctor.', 'that I (should) go', 'Suggest no admite "somebody to do". Se dice "suggested that I (should) go" o "suggested going".'),
        er('They asked if we wanted to join them.', null, 'La frase es correcta: pregunta de sí o no con if, y orden afirmativo.'),
        er('He [explained me] the problem.', 'explained to me', 'Explain no lleva el objeto de persona directamente: explain something TO somebody.'),
        er('She insisted [to pay] for dinner.', 'on paying', 'Insist ON + -ing.'),
      ],
    },
  ],
}
