import type { PartInfo } from '../../types'
import { ch, er, g } from '../helpers'

export const relatives: PartInfo = {
  slug: 'relative-clauses',
  name: 'Relative clauses',
  nameEs: 'Oraciones de relativo: who, which, that, whose, where, when, what',
  summary: 'Especificativas y explicativas, cuándo omitir el relativo',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Los pronombres relativos',
      points: [
        'WHO para personas, WHICH para cosas y animales, THAT para personas o cosas (solo en las especificativas).',
        'WHOSE = cuyo/a. Ejemplo: the man whose car was stolen.',
        'WHERE para lugares, WHEN para momentos y WHY después de "the reason".',
        'WHAT = lo que. No va detrás de un sustantivo. Ejemplo: What I need is a holiday.',
      ],
    },
    {
      title: 'Especificativas y explicativas',
      points: [
        'Las especificativas (defining) dicen de quién o de qué hablamos. No llevan comas y admiten "that".',
        'Las explicativas (non-defining) añaden información extra. Van entre comas y NUNCA llevan "that".',
        'En las especificativas puedes omitir el relativo si es el objeto: the book (that) I bought.',
        '"Which" puede referirse a toda la frase anterior: He didn\'t call, which annoyed me.',
      ],
      examples: [
        { en: 'My sister, who lives in Seville, is a teacher.', es: 'Explicativa: va entre comas y con who.' },
        { en: 'My sister, that lives in Seville, is a teacher.', wrong: true },
        { en: 'The book I bought is great.', es: 'Relativo omitido porque es el objeto.' },
      ],
    },
    {
      title: 'Relativos con preposición',
      points: [
        'Lo informal es dejar la preposición al final: the person who I spoke to.',
        'Lo formal es poner la preposición delante, con whom o which: the person to whom I spoke.',
        'Nunca repitas el pronombre: the book that I bought it ✗.',
      ],
    },
  ],
  exercises: [
    {
      id: 'gr-re-1',
      kind: 'choice',
      title: 'Elige el relativo',
      focus: 'Who, which, whose, where…',
      items: [
        ch('The woman ___ lives next door is a doctor.', 'who', ['which', 'whose'], 'Se refiere a una persona y es el sujeto del verbo: who.'),
        ch("That's the man ___ car was stolen.", 'whose', ["who's", 'which'], '"Whose" = cuyo. "Who\'s" es "who is".'),
        ch('Madrid, ___ I was born, is a lively city.', 'where', ['which', 'that'], 'Es un lugar y la frase dice qué pasó allí: where. "That" nunca va en las explicativas.'),
        ch('My brother, ___ lives in London, is coming to visit.', 'who', ['that', 'which'], 'Explicativa (entre comas) sobre una persona: who. "That" no se puede usar con comas.'),
        ch('I failed the exam, ___ was really disappointing.', 'which', ['that', 'what'], '"Which" se refiere a toda la frase anterior.'),
        ch('Do you remember the day ___ we met?', 'when', ['which', 'where'], 'Se refiere a un momento: when.'),
        ch('___ I need is a long holiday.', 'What', ['That', 'Which'], '"What" = lo que. No hay ningún sustantivo delante.'),
        ch('The hotel ___ we stayed was excellent.', 'where', ['which', 'that'], 'Es un lugar y no hay preposición al final: where. Con which haría falta "which we stayed IN".'),
      ],
    },
    {
      id: 'gr-re-2',
      kind: 'gap',
      title: 'Escribe el relativo',
      focus: 'Una palabra',
      items: [
        g('Is this the book ___ you were talking about?', ['that', 'which'], 'Relativo de cosa en una especificativa: that o which. La preposición se queda al final.'),
        g('The film, ___ lasted three hours, was boring.', ['which'], 'Explicativa (entre comas) sobre una cosa: which. "That" no vale con comas.'),
        g('I have a friend ___ father is a pilot.', ['whose'], 'Posesión: whose father = cuyo padre.'),
        g('The people to ___ I spoke were very helpful.', ['whom'], 'Detrás de una preposición, para personas: whom.'),
        g('2020 was the year ___ everything changed.', ['when', 'that'], 'Se refiere a un momento: when. "That" también es posible.'),
        g("He didn't call me, ___ made me angry.", ['which'], '"Which" se refiere a toda la frase anterior (que no llamara).'),
        g("That's the restaurant ___ I had my first date.", ['where'], 'Lugar: where.'),
        g('Everyone ___ came to the party had a great time.', ['who', 'that'], 'Persona y sujeto en una especificativa: who o that.'),
      ],
    },
    {
      id: 'gr-re-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Relativos',
      items: [
        er('My sister, [that] is a teacher, lives in Seville.', 'who', 'En las explicativas (entre comas) no se usa "that".'),
        er('The man [which] helped me was very kind.', 'who / that', '"Which" no se usa para personas.'),
        er('This is the house where I grew up.', null, 'La frase es correcta: where para un lugar.'),
        er('I met a girl [who her] brother plays for Real Madrid.', 'whose', 'Para la posesión se usa "whose", nunca "who + his/her".'),
        er('He gave me some advice, [what] was very useful.', 'which', 'Para referirse a lo anterior detrás de una coma se usa which, no what.'),
        er('The book [that I bought it] is very interesting.', 'that I bought', 'No se repite el objeto: "that" ya ocupa el lugar de "it".'),
      ],
    },
  ],
}

export const modals: PartInfo = {
  slug: 'modals',
  name: 'Modal verbs',
  nameEs: 'Deducción, obligación, consejo y capacidad',
  summary: "must/can't have, mustn't vs don't have to, should have…",
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Deducción (lo que crees que es verdad)',
      points: [
        'Presente: MUST (estoy seguro de que sí), CAN\'T (estoy seguro de que no), MIGHT / MAY / COULD (es posible).',
        'Pasado: modal + HAVE + participio. Ejemplos: must have forgotten, can\'t have seen, might have missed.',
        'El contrario de "must" en deducción es "can\'t", NO "mustn\'t".',
      ],
      examples: [
        { en: "She's been working all day. She must be exhausted." },
        { en: "That can't be Tom - he's in Paris.", es: 'No puede ser Tom.' },
        { en: 'I might have left my keys at work.', es: 'Puede que me haya dejado las llaves en el trabajo.' },
      ],
    },
    {
      title: 'Obligación y prohibición',
      points: [
        'MUST / HAVE TO = es obligatorio.',
        'MUSTN\'T = está prohibido. DON\'T HAVE TO = no es necesario (pero puedes hacerlo).',
        'NEEDN\'T HAVE + participio = lo hiciste, pero no hacía falta. DIDN\'T NEED TO = no hacía falta (normalmente no lo hiciste).',
        'SHOULD HAVE + participio = crítica o arrepentimiento sobre algo que no se hizo.',
      ],
      examples: [
        { en: "You mustn't smoke here.", es: 'Está prohibido fumar aquí.' },
        { en: "You don't have to come.", es: 'No hace falta que vengas.' },
        { en: 'You should have told me!', es: '¡Deberías habérmelo dicho!' },
      ],
    },
    {
      title: 'Capacidad en el pasado',
      points: [
        'COULD = capacidad general en el pasado. Ejemplo: I could swim when I was five.',
        'Para un logro concreto en una ocasión se usa WAS ABLE TO o MANAGED TO, no could.',
      ],
      examples: [
        { en: 'After three attempts, I managed to pass my driving test.' },
        { en: 'After three attempts, I could pass my driving test.', wrong: true },
      ],
    },
  ],
  exercises: [
    {
      id: 'gr-mo-1',
      kind: 'choice',
      title: 'Elige el modal',
      focus: 'Deducción, obligación y capacidad',
      items: [
        ch("You ___ smoke here. It's forbidden.", "mustn't", ["don't have to", "needn't"], 'Prohibición: mustn\'t.'),
        ch("You ___ come if you don't want to.", "don't have to", ["mustn't", "can't"], 'No es necesario: don\'t have to.'),
        ch("She's been working all day. She ___ be exhausted.", 'must', ["can't", 'should'], 'Deducción con mucha seguridad de que es verdad: must.'),
        ch("That ___ be Tom - he's in Paris this week.", "can't", ["mustn't", 'must'], 'Deducción de que algo es imposible: can\'t. "Mustn\'t" expresa prohibición, no deducción.'),
        ch("I'm not sure where my keys are. I ___ have left them at work.", 'might', ['must', "can't"], 'No estás seguro, así que expresas posibilidad: might have + participio.'),
        ch("You ___ have told me it was your birthday! I'd have bought you a present.", 'should', ['must', 'need'], 'Reproche por algo que no se hizo: should have + participio.'),
        ch('After hours of trying, I ___ open the door.', 'managed to', ['could', 'can'], 'Logro concreto en una ocasión: managed to, no could.'),
        ch("He ___ have driven here - he doesn't have a car.", "can't", ["mustn't", "shouldn't"], 'Deducción negativa sobre el pasado: can\'t have + participio.'),
      ],
    },
    {
      id: 'gr-mo-2',
      kind: 'gap',
      title: 'Escribe el modal',
      focus: 'Formas de presente y pasado',
      items: [
        g('I ___ to go to work yesterday because it was a holiday. (not need)', ["didn't need", 'did not need'], 'No era necesario y no fue: didn\'t need to.'),
        g("You ___ wear a seatbelt. It's the law. (have)", ['have to'], 'Obligación externa (la ley): have to.'),
        g('When I was five, I ___ already swim. (can)', ['could'], 'Capacidad general en el pasado: could.'),
        g('She ___ about the meeting - she never misses one. (must / forget)', ['must have forgotten'], 'Deducción sobre el pasado: must have + participio.'),
        g("You ___ harder - now you've failed. (should / study)", ['should have studied'], 'Crítica sobre el pasado: should have + participio.'),
        g("He ___ us - he didn't say hello. (can't / see)", ["can't have seen", 'cannot have seen', "couldn't have seen", 'could not have seen'], 'Deducción negativa sobre el pasado: can\'t have + participio.'),
        g('I ___ finish the report by tomorrow, I promise. (be able to)', ['will be able to', "'ll be able to"], '"Can" no tiene futuro: se usa will be able to.'),
        g("We ___ hurry - we've got plenty of time. (need)", ["needn't", "don't need to", 'need not', 'do not need to'], 'No es necesario: needn\'t o don\'t need to.'),
      ],
    },
    {
      id: 'gr-mo-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Modales',
      items: [
        er("You [mustn't] pay - it's free.", "don't have to", 'Quieres decir que no es necesario, no que esté prohibido.'),
        er("She [must be] at home - I've just seen her in the city centre.", "can't be", 'Estás seguro de que NO está en casa: can\'t be.'),
        er('After three attempts, I [could] pass my driving test.', 'managed to / was able to', 'Un logro concreto en una ocasión no se expresa con could.'),
        er('You should have called me earlier.', null, 'La frase es correcta: reproche con should have + participio.'),
        er('He [must to] leave early tomorrow.', 'must / has to', 'Los modales van seguidos de infinitivo sin "to".'),
        er('They [might had] missed the train.', 'might have', 'Modal en pasado: might HAVE + participio.'),
      ],
    },
  ],
}

export const gerunds: PartInfo = {
  slug: 'gerunds-infinitives',
  name: 'Gerunds & infinitives',
  nameEs: '¿-ing o to + infinitivo?',
  summary: 'Verbos que van con -ing, con to, y los que cambian de significado',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Verbos + -ing',
      points: [
        'enjoy, avoid, mind, finish, keep, consider, suggest, deny, admit, imagine, miss, practise, risk, fancy, can\'t stand, give up, look forward to.',
        'Después de CUALQUIER preposición: good AT swimming, interested IN learning, before leaving.',
        'Expresiones: it\'s worth, it\'s no use, there\'s no point (in), be/get used to.',
      ],
      examples: [
        { en: "I'm looking forward to seeing you.", es: '"To" es aquí una preposición.' },
        { en: "I'm looking forward to see you.", wrong: true },
      ],
    },
    {
      title: 'Verbos + to infinitivo',
      points: [
        'want, decide, hope, plan, manage, refuse, afford, offer, promise, agree, seem, learn, expect, threaten, pretend.',
        'Después de adjetivos: easy to understand, nice to meet you.',
        'Para expresar finalidad: I went out to buy bread.',
      ],
    },
    {
      title: 'Verbos que cambian de significado',
      points: [
        'STOP + -ing = dejar de hacer algo. STOP + to = pararse para hacer otra cosa.',
        'REMEMBER / FORGET + -ing = recordar u olvidar algo que ya pasó. + to = acordarse u olvidarse de hacer algo.',
        'TRY + -ing = probar algo como experimento. TRY + to = intentar, esforzarse.',
        'REGRET + -ing = arrepentirse de algo hecho. REGRET + to = lamentar tener que decir algo (muy formal).',
      ],
      examples: [
        { en: 'I stopped smoking.', es: 'Dejé de fumar.' },
        { en: 'I stopped to smoke.', es: 'Me paré para fumar.' },
        { en: 'Remember to lock the door.', es: 'Acuérdate de cerrar con llave.' },
      ],
    },
  ],
  exercises: [
    {
      id: 'gr-gi-1',
      kind: 'choice',
      title: 'Elige la forma correcta',
      focus: '-ing o to + infinitivo',
      items: [
        ch('I enjoy ___ in the mountains.', 'walking', ['to walk', 'walk'], 'Enjoy + -ing.'),
        ch('We decided ___ a new car.', 'to buy', ['buying', 'buy'], 'Decide + to + infinitivo.'),
        ch("I'm looking forward to ___ you.", 'seeing', ['see', 'have seen'], 'En "look forward to", el "to" es una preposición, así que va seguido de -ing.'),
        ch('He stopped ___ a cigarette because he needed a break.', 'to smoke', ['smoking', 'smoke'], 'Se paró PARA fumar: stop + to. "Stop smoking" significaría dejar de fumar.'),
        ch('I remember ___ him at a party years ago.', 'meeting', ['to meet', 'meet'], 'Recordar algo que ya pasó: remember + -ing.'),
        ch('Remember ___ the lights off before you leave.', 'to turn', ['turning', 'turn'], 'Acordarse de hacer algo que todavía no has hecho: remember + to.'),
        ch("She's very good at ___ problems.", 'solving', ['solve', 'to solve'], 'Después de una preposición (at) va -ing.'),
        ch("I can't afford ___ on holiday this year.", 'to go', ['going', 'go'], 'Afford + to + infinitivo.'),
      ],
    },
    {
      id: 'gr-gi-2',
      kind: 'gap',
      title: 'Escribe la forma correcta',
      focus: 'Patrones verbales',
      items: [
        g('Would you mind ___ the window? (open)', ['opening'], 'Mind + -ing.'),
        g('She refused ___ my question. (answer)', ['to answer'], 'Refuse + to + infinitivo.'),
        g("I've given up ___ meat. (eat)", ['eating'], 'Give up + -ing.'),
        g("It's not worth ___ - the shop is closed. (wait)", ['waiting'], '"It\'s (not) worth" va seguido de -ing.'),
        g('He promised ___ late again. (not / be)', ['not to be'], 'Promise + not to + infinitivo. El "not" va delante de "to".'),
        g('Try ___ your computer - that usually fixes the problem. (restart)', ['restarting'], 'Try + -ing = probar algo para ver si funciona.'),
        g('I regret ___ you that your application has been unsuccessful. (tell)', ['to tell'], 'Regret + to = lamentar tener que comunicar algo. Es muy formal y típico de cartas.'),
        g("She's used to ___ at night. (work)", ['working'], 'Be used to + -ing = estar acostumbrado a.'),
      ],
    },
    {
      id: 'gr-gi-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Gerundios e infinitivos',
      items: [
        er("I'm thinking [to change] my job.", 'of changing / about changing', 'Think OF/ABOUT + -ing.'),
        er('She avoided [to look] at me.', 'looking', 'Avoid + -ing.'),
        er('I want to learn to drive.', null, 'La frase es correcta: want + to y learn + to.'),
        er("He's interested in [learn] Chinese.", 'learning', 'Después de una preposición (in) va -ing.'),
        er('We managed [finishing] on time.', 'to finish', 'Manage + to + infinitivo.'),
        er('Do you fancy [to go] out tonight?', 'going', 'Fancy + -ing.'),
      ],
    },
  ],
}
