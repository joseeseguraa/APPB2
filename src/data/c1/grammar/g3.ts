import type { PartInfo } from '../../../types'
import { ch, er, g } from '../../helpers'

export const c1Reporting: PartInfo = {
  slug: 'reporting-verbs',
  name: 'Reporting verbs & patterns',
  nameEs: 'Verbos de estilo indirecto y sus estructuras',
  summary: 'accuse of, insist on, urge to, deny -ing, suggest that',
  suggestedMinutes: 7,
  theory: [
    {
      title: 'Patrones',
      points: [
        'Verbo + to: agree, offer, refuse, threaten, promise, claim.',
        'Verbo + objeto + to: advise, urge, warn, remind, persuade, encourage, invite.',
        'Verbo + -ing: deny, admit, recommend, suggest, regret.',
        'Verbo + preposición + -ing: apologise for, insist on, object to, confess to.',
        'Verbo + objeto + preposición + -ing: accuse of, blame for, congratulate on, criticise for, thank for.',
        'Verbo + that: explain, point out, insist, suggest (that somebody (should) do).',
      ],
      examples: [{ en: 'She suggested that we leave early.' }, { en: 'She suggested us to leave early.', wrong: true }],
    },
  ],
  exercises: [
    {
      id: 'c1-gr-rv-1',
      kind: 'choice',
      title: 'Elige el patrón',
      focus: 'Reporting verbs',
      items: [
        ch('They accused him ___ the documents.', 'of leaking', ['for leaking', 'to leak'], '"Accuse somebody OF + -ing".'),
        ch('She insisted ___ the bill.', 'on paying', ['to pay', 'for paying'], '"Insist ON + -ing".'),
        ch('The doctor urged ___ smoking.', 'him to give up', ['him giving up', 'that him give up'], '"Urge somebody TO do".'),
        ch('He denied ___ the money.', 'taking', ['to take', 'of taking'], '"Deny + -ing".'),
        ch('My boss suggested ___ the report again.', 'that I check', ['me to check', 'me checking'], '"Suggest that somebody do" o "suggest + -ing". Nunca "suggest me to".'),
        ch('She blamed her brother ___ the vase.', 'for breaking', ['of breaking', 'to break'], '"Blame somebody FOR".'),
      ],
    },
    {
      id: 'c1-gr-rv-2',
      kind: 'gap',
      title: 'Completa con una palabra',
      focus: 'Preposiciones y partículas',
      items: [
        g('He apologised ___ keeping us waiting.', ['for'], '"Apologise FOR".'),
        g('They congratulated her ___ winning the award.', ['on'], '"Congratulate ON".'),
        g('I object ___ being treated like a child.', ['to'], '"Object TO + -ing".'),
        g('She threatened ___ call the police.', ['to'], '"Threaten TO do".'),
        g('He warned us ___ to swim there.', ['not'], '"Warn somebody NOT to do".'),
        g('The suspect confessed ___ stealing the car.', ['to'], '"Confess TO + -ing".'),
      ],
    },
    {
      id: 'c1-gr-rv-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Patrones',
      items: [
        er('She suggested [me to apply] for the job.', 'that I apply / me applying', '"Suggest" no lleva objeto + to.'),
        er('He admitted [to have broken] the window.', 'breaking / having broken', '"Admit + -ing".'),
        er('They persuaded me [joining] the club.', 'to join', '"Persuade somebody TO do".'),
        er('She reminded me to lock the door.', null, 'La frase es correcta.'),
        er('He recommended [us to try] the fish.', 'trying / that we try', '"Recommend + -ing" o "that".'),
      ],
    },
  ],
}

export const c1Verbpatterns: PartInfo = {
  slug: 'verb-patterns-meaning',
  name: 'Verb patterns that change meaning',
  nameEs: 'Verbos que cambian de significado con -ing o to',
  summary: 'remember, stop, try, regret, mean, go on, need',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Cambian de significado',
      points: [
        'Remember / forget + -ing (algo pasado) vs + to (algo que hay que hacer).',
        'Stop + -ing (dejar de) vs stop + to (parar para hacer algo).',
        'Try + -ing (probar a ver qué pasa) vs try + to (intentar con esfuerzo).',
        'Regret + -ing (arrepentirse) vs regret + to (lamentar comunicar: We regret to inform you…).',
        'Mean + -ing (implicar) vs mean + to (tener intención).',
        'Go on + -ing (seguir con lo mismo) vs go on + to (pasar a hacer otra cosa).',
        'Need + -ing (= necesita ser…, pasivo): The car needs washing.',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-gr-vp-1',
      kind: 'choice',
      title: 'Elige la forma',
      focus: '-ing o to',
      items: [
        ch('I regret ___ you that your application has been unsuccessful.', 'to inform', ['informing', 'to have informed'], '"Regret to inform" = lamentar comunicar.'),
        ch('Taking this job would mean ___ to another city.', 'moving', ['to move', 'move'], '"Mean + -ing" = implicar.'),
        ch("I didn't mean ___ you. I'm sorry.", 'to upset', ['upsetting', 'upset'], '"Mean to" = tener intención.'),
        ch('After the introduction, the speaker went on ___ the main problem.', 'to discuss', ['discussing', 'discuss'], '"Go on to" = pasar a otra cosa.'),
        ch("If the door won't open, try ___ it harder.", 'pushing', ['to push', 'push'], '"Try + -ing" = prueba a ver si funciona.'),
        ch('I clearly remember ___ the keys on the table.', 'leaving', ['to leave', 'leave'], 'Recuerdo de algo pasado: -ing.'),
      ],
    },
    {
      id: 'c1-gr-vp-2',
      kind: 'gap',
      title: 'Completa con el verbo',
      focus: 'Forma correcta',
      items: [
        g("Don't forget ___ the lights off when you leave. (turn)", ['to turn'], 'Algo que hay que hacer: to.'),
        g('We stopped ___ a coffee on the way. (have)', ['to have'], 'Parar PARA hacer algo: to.'),
        g('He went on ___ even after the teacher told him to be quiet. (talk)', ['talking'], 'Seguir con lo mismo: -ing.'),
        g('The windows need ___ . (clean)', ['cleaning', 'to be cleaned'], '"Need + -ing" con sentido pasivo.'),
        g('I tried ___ the window, but it was stuck. (open)', ['to open'], 'Intentar con esfuerzo: to.'),
        g("I'll never forget ___ the Grand Canyon for the first time. (see)", ['seeing'], 'Recuerdo de algo pasado: -ing.'),
      ],
    },
    {
      id: 'c1-gr-vp-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Errores típicos',
      items: [
        er('I stopped [to smoke] five years ago and feel much better.', 'smoking', 'Dejar de fumar: stop + -ing.'),
        er('Remember [locking] the door when you go out.', 'to lock', 'Algo que hay que hacer: to.'),
        er('I regret [to tell] her my secret; now everyone knows.', 'telling', 'Arrepentirse de algo hecho: -ing.'),
        er('The grass needs cutting.', null, 'La frase es correcta.'),
        er('Have you tried [to restart] the computer? That usually fixes it.', 'restarting', 'Probar algo a ver si funciona: -ing.'),
      ],
    },
  ],
}

export const c1Subjunctive: PartInfo = {
  slug: 'subjunctive-formal',
  name: 'Subjunctive & formal structures',
  nameEs: 'Subjuntivo y estructuras formales',
  summary: 'It is essential that he be…, I insist that she leave…',
  suggestedMinutes: 5,
  theory: [
    {
      title: 'El subjuntivo en inglés',
      points: [
        'Después de verbos y adjetivos de importancia, sugerencia u obligación, en registro formal, el verbo va en forma base para todas las personas: It is essential that every student attend. I suggest that he be informed.',
        'Verbos: insist, recommend, suggest, demand, request, propose. Adjetivos: essential, vital, crucial, important, imperative.',
        'Alternativa más común (británica): should + infinitivo: It is essential that he should attend.',
        'Negativa: not + forma base: They requested that we not use our phones.',
        'Expresiones fijas: be that as it may, come what may, so be it, if need be.',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-gr-su-1',
      kind: 'choice',
      title: 'Elige la forma',
      focus: 'Subjuntivo',
      items: [
        ch('It is vital that every passenger ___ a valid ticket.', 'have', ['has', 'having'], 'Subjuntivo: forma base (have).'),
        ch('The committee recommended that the plan ___ rejected.', 'be', ['is', 'was'], 'Subjuntivo pasivo: be + participio.'),
        ch('She insisted that he ___ immediately.', 'leave', ['leaves', 'to leave'], 'Subjuntivo: forma base.'),
        ch('They requested that we ___ photographs inside.', 'not take', ["don't take", 'not to take'], 'Negativa del subjuntivo: not + forma base.'),
        ch('___ that as it may, we still need a decision.', 'Be', ['Being', 'Is'], 'Expresión fija: Be that as it may = sea como sea.'),
        ch("I'll finish this project, come what ___.", 'may', ['might', 'can'], 'Expresión fija: come what may = pase lo que pase.'),
      ],
    },
    {
      id: 'c1-gr-su-2',
      kind: 'gap',
      title: 'Completa',
      focus: 'Forma base o should',
      items: [
        g('It is essential that she ___ on time. (be)', ['be', 'should be'], 'Subjuntivo: be.'),
        g('The doctor recommended that he ___ more exercise. (take)', ['take', 'should take'], 'Forma base.'),
        g('We can work at the weekend if need ___ .', ['be'], 'Expresión fija: if need be.'),
        g('I propose that the meeting ___ postponed.', ['be'], 'Subjuntivo pasivo.'),
        g('It is imperative that nobody ___ the building. (leave)', ['leave', 'should leave'], 'Forma base.'),
        g('She demanded that the manager ___ her personally. (call)', ['call', 'should call'], 'Forma base.'),
      ],
    },
    {
      id: 'c1-gr-su-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Formas',
      items: [
        er('It is crucial that he [arrives] before nine.', 'arrive', 'Subjuntivo: forma base (arrive).'),
        er('They suggested that she [is] given the role.', 'be', 'Subjuntivo pasivo: be given.'),
        er('I insist that you [don\'t] tell anyone.', 'not', 'Negativa del subjuntivo: that you not tell.'),
        er('It is important that every voice be heard.', null, 'La frase es correcta.'),
        er('The judge ordered that the prisoner [was] released.', 'be', 'Subjuntivo: be released.'),
      ],
    },
  ],
}

export const c1Linking: PartInfo = {
  slug: 'advanced-linking',
  name: 'Advanced linking & discourse markers',
  nameEs: 'Conectores y marcadores de nivel C1',
  summary: 'albeit, notwithstanding, hence, whereas, insofar as',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Contraste y concesión',
      points: [
        'Albeit + adjetivo/adverbio = aunque: a small, albeit important, change.',
        'Notwithstanding / despite / in spite of + sustantivo.',
        'Whereas / while = mientras que (contraste entre dos cosas).',
        'Even so / nonetheless / nevertheless = aun así.',
      ],
    },
    {
      title: 'Causa, consecuencia y otros',
      points: [
        'Hence / thus / consequently / therefore = por tanto. Hence también va con sustantivo: hence the delay.',
        'Owing to / due to / on account of + sustantivo = debido a.',
        'Insofar as / inasmuch as = en la medida en que.',
        'Given (that) = dado que. Seeing as = ya que (informal).',
        'As regards / with regard to / in terms of = en cuanto a.',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-gr-li-1',
      kind: 'choice',
      title: 'Elige el conector',
      focus: 'Conectores',
      items: [
        ch('The results were encouraging, ___ limited.', 'albeit', ['although', 'despite'], '"Albeit + adjetivo".'),
        ch('The road was closed, ___ the long delays.', 'hence', ['therefore', 'thus that'], '"Hence + sustantivo".'),
        ch('___ the bad weather, the event went ahead.', 'Notwithstanding', ['Although', 'Whereas'], '"Notwithstanding + sustantivo".'),
        ch('My brother loves sport, ___ I prefer reading.', 'whereas', ['however', 'despite'], 'Contraste entre dos cosas: whereas.'),
        ch('___ that we have little time, we should focus on the essentials.', 'Given', ['Owing', 'Due'], '"Given that" = dado que.'),
        ch('The flight was cancelled ___ a technical fault.', 'owing to', ['because', 'hence'], '"Owing to + sustantivo".'),
      ],
    },
    {
      id: 'c1-gr-li-2',
      kind: 'gap',
      title: 'Completa',
      focus: 'Una palabra',
      items: [
        g('The plan is risky. ___, it is our only option. (aun así)', ['nevertheless', 'nonetheless', 'still'], '"Nevertheless" = aun así.'),
        g('With ___ to your recent letter, …', ['regard', 'reference', 'respect'], '"With regard to" = en relación con.'),
        g('The project failed ___ account of poor management.', ['on'], '"On account of" = debido a.'),
        g('I agree with you insofar ___ the costs are concerned.', ['as'], '"Insofar as".'),
        g('In ___ of quality, this is the best model. (en cuanto a)', ['terms'], '"In terms of".'),
        g('___ as you are here, you might as well help. (ya que, informal)', ['seeing'], '"Seeing as" = ya que.'),
      ],
    },
    {
      id: 'c1-gr-li-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Conectores',
      items: [
        er('[Despite of] the rain, we went for a walk.', 'Despite / In spite of', '"Despite" no lleva "of".'),
        er('[Although] the delay, the meeting started on time.', 'Despite', '"Although" va con frase; con sustantivo, "despite".'),
        er('He was tired, [albeit] he kept working.', 'but / although', '"Albeit" va con adjetivo o adverbio, no con una frase.'),
        er('Prices have risen sharply; hence the protests.', null, 'La frase es correcta.'),
        er('The match was cancelled [due to it rained].', 'because it rained / due to the rain', '"Due to" va con sustantivo.'),
      ],
    },
  ],
}
