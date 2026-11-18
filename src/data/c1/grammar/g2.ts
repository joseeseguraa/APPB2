import type { PartInfo } from '../../../types'
import { ch, er, g } from '../../helpers'

export const c1Wishes: PartInfo = {
  slug: 'wishes-unreal-past',
  name: 'Wish, if only & unreal past',
  nameEs: 'Deseos y pasado irreal',
  summary: "I wish you wouldn't…, It's high time…, I'd rather you…",
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Wish / if only',
      points: [
        'Presente: wish + pasado: I wish I knew the answer. (Con be: I wish I were…)',
        'Pasado: wish + past perfect: I wish I hadn\'t said that.',
        'Quejarse de algo que otro hace: wish + would: I wish you would stop interrupting. (No con uno mismo: I wish I would ✗)',
        'If only es igual pero más intenso.',
      ],
    },
    {
      title: 'Otras estructuras con pasado irreal',
      points: [
        'It\'s (high / about) time + sujeto + pasado: It\'s high time we left.',
        'Would rather / would sooner + sujeto + pasado: I\'d rather you didn\'t smoke here.',
        'As if / as though + pasado (irreal): He talks as if he owned the place.',
        'Suppose / imagine + pasado: Imagine you lived on a desert island.',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-gr-wi-1',
      kind: 'choice',
      title: 'Elige la forma correcta',
      focus: 'Pasado irreal',
      items: [
        ch("I wish I ___ to that party last night. It was awful.", "hadn't gone", ["didn't go", "wouldn't go"], 'Arrepentimiento sobre el pasado: past perfect.'),
        ch('I wish you ___ leaving your clothes on the floor.', 'would stop', ['stopped', 'had stopped'], 'Queja sobre un hábito de otra persona: wish + would.'),
        ch("It's high time the government ___ something about it.", 'did', ['does', 'will do'], '"It\'s high time + pasado".'),
        ch("I'd rather you ___ anyone about this.", "didn't tell", ["don't tell", "not to tell"], '"Would rather + sujeto + pasado".'),
        ch('He behaves as if he ___ the boss.', 'were', ['is being', 'has been'], '"As if + pasado irreal": were.'),
        ch('If only I ___ how to fix it, I would help you.', 'knew', ['know', 'would know'], 'Deseo sobre el presente: pasado.'),
      ],
    },
    {
      id: 'c1-gr-wi-2',
      kind: 'gap',
      title: 'Completa con el verbo',
      focus: 'Forma correcta',
      items: [
        g('I wish I ___ more time to read. (have)', ['had'], 'Deseo presente: pasado.'),
        g("If only we ___ the earlier train! (catch)", ['had caught'], 'Arrepentimiento pasado: past perfect.'),
        g("It's about time you ___ a job. (get)", ['got'], '"It\'s about time + pasado".'),
        g("I'd sooner you ___ here tonight. (stay)", ['stayed'], '"Would sooner + sujeto + pasado".'),
        g('I wish the neighbours ___ so much noise. (not / make)', ["wouldn't make", 'would not make', "didn't make"], 'Queja sobre otros: wouldn\'t make.'),
        g('Imagine you ___ to live abroad. Where would you go? (have)', ['had'], '"Imagine + pasado".'),
      ],
    },
    {
      id: 'c1-gr-wi-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Errores típicos',
      items: [
        er('I wish I [would be] taller.', 'were', 'Con uno mismo no se usa "would": I wish I were.'),
        er("It's time we [go] home.", 'went', '"It\'s time + pasado".'),
        er("I'd rather you [don't] mention it.", "didn't", '"Would rather + sujeto + pasado".'),
        er('If only I had listened to your advice.', null, 'La frase es correcta.'),
        er('I wish I [didn\'t eat] so much yesterday.', "hadn't eaten", 'Pasado: past perfect.'),
      ],
    },
  ],
}

export const c1Passive: PartInfo = {
  slug: 'advanced-passive',
  name: 'Advanced passive forms',
  nameEs: 'Pasivas avanzadas',
  summary: 'is said to have…, get + participle, having been…',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Pasivas impersonales',
      points: [
        'It is said / believed / thought / reported that…',
        'Sujeto + is said to + infinitivo (presente): He is said to be very rich.',
        'Sujeto + is said to have + participio (pasado): He is said to have made a fortune.',
        'There is said to be… / There are thought to have been…',
      ],
    },
    {
      title: 'Otras formas',
      points: [
        'Get + participio (más informal, a menudo algo inesperado o negativo): He got fired. My bike got stolen.',
        'Infinitivo y gerundio pasivos: I hate being interrupted. She expects to be promoted. He admitted having been bribed.',
        'Have / get something done: We had the roof repaired. / Experiencia negativa: She had her bag stolen.',
        'Verbos con dos objetos: I was given a prize / A prize was given to me.',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-gr-pa-1',
      kind: 'choice',
      title: 'Elige la forma correcta',
      focus: 'Pasivas',
      items: [
        ch('The painting is believed ___ in the 1500s.', 'to have been painted', ['to be painted', 'having painted'], 'Pasado: to have been + participio.'),
        ch('I really dislike ___ what to do.', 'being told', ['to tell', 'telling'], 'Gerundio pasivo: being told.'),
        ch('She ___ her passport stolen while on holiday.', 'had', ['was', 'got been'], 'Experiencia negativa: have something done.'),
        ch('There are thought ___ over a hundred survivors.', 'to be', ['being', 'to been'], '"There are thought to be…".'),
        ch('He ___ caught cheating in the exam.', 'got', ['had', 'made'], 'Pasiva con get (informal).'),
        ch('The suspect denied ___ at the scene.', 'having been', ['to have been', 'being been'], '"Deny + gerundio perfecto".'),
      ],
    },
    {
      id: 'c1-gr-pa-2',
      kind: 'gap',
      title: 'Completa',
      focus: 'Formas pasivas',
      items: [
        g('The minister is reported ___ resigned. (dos palabras)', ['to have'], 'Pasado: is reported to have + participio.'),
        g('Nobody likes ___ laughed at.', ['being'], 'Gerundio pasivo.'),
        g('We need to get the car ___ before the trip. (service)', ['serviced'], '"Get something done".'),
        g('I was ___ a second chance by my boss. (give)', ['given'], 'Pasiva con dos objetos.'),
        g('She expects ___ promoted next year.', ['to be'], 'Infinitivo pasivo: to be promoted.'),
        g('It ___ thought that the fire was started deliberately.', ['is', 'was'], 'Pasiva impersonal: It is thought that…'),
      ],
    },
    {
      id: 'c1-gr-pa-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Formas',
      items: [
        er('He is said [to be won] the lottery last year.', 'to have won', 'Pasado activo: to have won.'),
        er('I hate [to be waited] for.', 'being kept waiting', 'Lo natural es "being kept waiting" (que me hagan esperar).'),
        er('We had our house [paint] last month.', 'painted', '"Have something + participio".'),
        er('The work is expected to be finished by Friday.', null, 'La frase es correcta.'),
        er('There [is believed to be] many problems with the plan.', 'are believed to be', 'Concordancia con "many problems".'),
      ],
    },
  ],
}

export const c1Modals: PartInfo = {
  slug: 'modals-speculation',
  name: 'Modals: speculation & past',
  nameEs: 'Modales de deducción y en pasado',
  summary: "must have, can't have, needn't have, was bound to",
  suggestedMinutes: 7,
  theory: [
    {
      title: 'Deducción',
      points: [
        'Seguro que sí: must (have done). Seguro que no: can\'t / couldn\'t (have done).',
        'Posible: may / might / could (have done). Poco probable: might not / may not.',
        'Expectativa: should / ought to (have done): The parcel should arrive tomorrow. It should have arrived by now.',
        'Expresiones: be bound to (seguro que), be likely / unlikely to, there\'s every chance that.',
      ],
    },
    {
      title: 'Necesidad y obligación en pasado',
      points: [
        'Needn\'t have done = lo hiciste y no hacía falta: I needn\'t have cooked; they\'d already eaten.',
        'Didn\'t need to do = no hacía falta (normalmente no se hizo): I didn\'t need to cook, so I relaxed.',
        'Should have done = crítica o arrepentimiento: You should have told me.',
        'Was / were to have done = algo planeado que no ocurrió: She was to have married in June, but…',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-gr-mo-1',
      kind: 'choice',
      title: 'Elige el modal',
      focus: 'Deducción y pasado',
      items: [
        ch("He ___ seen us; he didn't even look up.", "can't have", ["mustn't have", "needn't have"], 'Deducción negativa segura: can\'t have.'),
        ch('The lights are off. They ___ gone to bed.', 'must have', ['should have', 'can have'], 'Deducción positiva segura.'),
        ch('I ___ bought so much food; only three people came.', "needn't have", ["didn't need to", "mustn't have"], 'Lo hice y no hacía falta: needn\'t have.'),
        ch("It's a great film. You're ___ to love it.", 'bound', ['sure of', 'certain for'], '"Be bound to" = seguro que.'),
        ch('The train ___ have arrived by now. I wonder what happened.', 'should', ['must', 'can'], 'Expectativa no cumplida: should have.'),
        ch("I'm not sure where she is. She ___ be stuck in traffic.", 'might', ['must', "can't"], 'Posibilidad: might.'),
      ],
    },
    {
      id: 'c1-gr-mo-2',
      kind: 'gap',
      title: 'Completa',
      focus: 'Una o dos palabras',
      items: [
        g("You ___ have told me it was a formal dinner! I'm wearing jeans. (crítica)", ['should', 'could', 'might'], 'Crítica: should have / could have told me.'),
        g("She ___ have left already. Her coat's still here. (no puede ser)", ["can't", 'cannot', "couldn't"], 'Deducción negativa: can\'t have.'),
        g("We ___ to hurry, so we took the scenic route. (no hacía falta; 2 palabras)", ["didn't need", 'did not need'], 'No hacía falta y no se hizo: didn\'t need to.'),
        g("The meeting ___ to have taken place yesterday, but it was cancelled.", ['was'], 'Plan no realizado: was to have taken place.'),
        g("There's every ___ that prices will rise again.", ['chance', 'likelihood', 'possibility'], '"There\'s every chance that…".'),
        g("They ___ have got lost. They've never been here before. (posible)", ['may', 'might', 'could'], 'Posibilidad en el pasado.'),
      ],
    },
    {
      id: 'c1-gr-mo-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Modales',
      items: [
        er("He [mustn't have] heard you; he's wearing headphones.", "can't have", 'Deducción negativa: can\'t have (no mustn\'t).'),
        er('You [must have] called me; I would have picked you up.', 'should have', 'Crítica: should have.'),
        er('She needn\'t have worried; everything went fine.', null, 'La frase es correcta: se preocupó sin necesidad.'),
        er('It [can] have been John; he was in Paris that day.', "can't", 'Deducción negativa: can\'t have.'),
        er('They are [bound to winning] the league this year.', 'bound to win', '"Be bound to + infinitivo".'),
      ],
    },
  ],
}

export const c1Relatives: PartInfo = {
  slug: 'advanced-relatives',
  name: 'Advanced relative clauses',
  nameEs: 'Relativas avanzadas',
  summary: 'whereby, in which case, most of whom, which (toda la frase)',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Relativos con preposición y cuantificadores',
      points: [
        'Formal: preposición + whom / which: the person to whom I spoke, the company for which she works.',
        'Cuantificador + of + whom / which: She has three brothers, all of whom live abroad. I read ten books, none of which I liked.',
        'Whose para cosas y personas: a city whose history goes back 2,000 years.',
      ],
    },
    {
      title: 'Otros relativos útiles',
      points: [
        'Which referido a toda la frase anterior: He passed the exam, which surprised everyone.',
        'Whereby = mediante el cual: a system whereby employees share profits.',
        'In which case / at which point / by which time: You may be late, in which case call me.',
        'Whatever / whoever / wherever = lo que sea, quien sea, donde sea.',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-gr-re-1',
      kind: 'choice',
      title: 'Elige el relativo',
      focus: 'Relativas',
      items: [
        ch('The man to ___ I was talking turned out to be the director.', 'whom', ['who', 'that'], 'Detrás de preposición: whom.'),
        ch('She has two sisters, both of ___ are doctors.', 'whom', ['who', 'them'], '"Both of whom".'),
        ch('He apologised, ___ I thought was very decent of him.', 'which', ['what', 'that'], '"Which" referido a toda la frase.'),
        ch('They introduced a scheme ___ staff can work flexible hours.', 'whereby', ['wherever', 'whereas'], '"Whereby" = mediante el cual.'),
        ch('The flight may be delayed, in ___ case we will call you.', 'which', ['what', 'that'], '"In which case" = en cuyo caso.'),
        ch("It's a company ___ products are sold all over the world.", 'whose', ['which', "who's"], '"Whose" para cosas también.'),
      ],
    },
    {
      id: 'c1-gr-re-2',
      kind: 'gap',
      title: 'Completa',
      focus: 'Una palabra',
      items: [
        g('I applied for ten jobs, none of ___ replied.', ['which'], '"None of which".'),
        g('We arrived at midnight, by ___ time everyone was asleep.', ['which'], '"By which time".'),
        g('___ told you that was lying. (quienquiera)', ['whoever'], '"Whoever" = quienquiera que.'),
        g('The hotel at ___ we stayed was excellent.', ['which'], 'Preposición + which.'),
        g('He said nothing, ___ made me even more suspicious.', ['which'], '"Which" referido a la frase.'),
        g('There were forty guests, most of ___ I had never met.', ['whom'], '"Most of whom".'),
      ],
    },
    {
      id: 'c1-gr-re-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Relativos',
      items: [
        er('He lent me £50, [what] was very kind of him.', 'which', '"Which" referido a la frase anterior.'),
        er('I have many friends, most of [them] live nearby.', 'whom', 'Relativo: most of whom.'),
        er('The person [to who] I sent the email never replied.', 'to whom', 'Detrás de preposición: whom.'),
        er('The village where I grew up has changed completely.', null, 'La frase es correcta.'),
        er('The house, [that] was built in 1820, needs repairs.', 'which', 'En relativas entre comas no se usa "that".'),
      ],
    },
  ],
}
