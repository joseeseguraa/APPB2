import type { PartInfo } from '../../../types'
import { ch, er, g } from '../../helpers'

export const c1Prepositions: PartInfo = {
  slug: 'dependent-prepositions-c1',
  name: 'Dependent prepositions (C1)',
  nameEs: 'Preposiciones que acompañan a palabras',
  summary: 'conducive to, susceptible to, in favour of, at odds with',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Adjetivos',
      points: [
        'conducive to · susceptible to · prone to · oblivious to · indifferent to',
        'conscious of · wary of · devoid of · indicative of · tolerant of',
        'compatible with · fraught with · preoccupied with · synonymous with',
        'immune to/from · exempt from · distinct from · reliant on · intent on',
      ],
    },
    {
      title: 'Sustantivos y expresiones',
      points: [
        'a tendency towards · an insight into · a stake in · a bearing on',
        'at odds with · in line with · in favour of · with a view to + -ing',
        'on the verge of · in the wake of · at the expense of · in the light of',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-vo-pr-1',
      kind: 'choice',
      title: 'Elige la preposición',
      focus: 'Adjetivos',
      items: [
        ch('A noisy office is hardly conducive ___ concentration.', 'to', ['for', 'with'], '"Conducive to".'),
        ch('Elderly people are more susceptible ___ infections.', 'to', ['of', 'at'], '"Susceptible to".'),
        ch('The plan is fraught ___ difficulties.', 'with', ['of', 'by'], '"Fraught with".'),
        ch('Be wary ___ anyone who promises quick profits.', 'of', ['about', 'from'], '"Wary of".'),
        ch('His name has become synonymous ___ quality.', 'with', ['to', 'of'], '"Synonymous with".'),
        ch('Charities are exempt ___ paying this tax.', 'from', ['of', 'to'], '"Exempt from".'),
      ],
    },
    {
      id: 'c1-vo-pr-2',
      kind: 'gap',
      title: 'Escribe la preposición',
      focus: 'Expresiones',
      items: [
        g('The company is on the verge ___ bankruptcy.', ['of'], '"On the verge of".'),
        g('His views are at odds ___ those of his party.', ['with'], '"At odds with".'),
        g('The book offers a fascinating insight ___ life in the 1920s.', ['into'], '"An insight into".'),
        g('In the wake ___ the scandal, the director resigned.', ['of'], '"In the wake of".'),
        g('Prices will rise in line ___ inflation.', ['with'], '"In line with".'),
        g('She seemed completely oblivious ___ the danger.', ['to', 'of'], '"Oblivious to / of".'),
      ],
    },
    {
      id: 'c1-vo-pr-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Preposiciones',
      items: [
        er('This decision has no bearing [in] the outcome.', 'on', '"A bearing on".'),
        er('He is prone [of] making careless mistakes.', 'to', '"Prone to".'),
        er('They bought the land with a view [of] building houses.', 'to', '"With a view to + -ing".'),
        er('Economic growth was achieved at the expense of the environment.', null, 'La frase es correcta.'),
        er('The city is heavily reliant [of] tourism.', 'on', '"Reliant on".'),
      ],
    },
  ],
}

export const c1WordFormation: PartInfo = {
  slug: 'word-formation-c1',
  name: 'Word formation (C1)',
  nameEs: 'Formación de palabras avanzada para la Part 3',
  summary: 'mis-, under-, -hood, -ship, -ise, dobles cambios',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Prefijos con significado',
      points: [
        'mis- (mal): misinterpret, misconception · over- / under- (demasiado / poco): overestimate, underfunded',
        'out- (superar): outnumber, outweigh, outgrow · counter- (en contra): counterproductive',
        'non- / anti- / pro-: non-existent, anti-social, pro-European · re-: reconsider',
      ],
    },
    {
      title: 'Sufijos menos obvios',
      points: [
        'Sustantivos: -hood (childhood, likelihood), -ship (hardship, leadership), -dom (freedom, wisdom), -ism, -ure (failure, exposure), -age (shortage, leakage)',
        'Verbos: -ise (prioritise, minimise), -ify (clarify, intensify), -en (worsen, broaden), en- (enable, endanger)',
        'Cambios dobles y triples: COMPARE → incomparable → incomparably; RESPECT → disrespectful; ACCEPT → unacceptably.',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-vo-wf-1',
      kind: 'choice',
      title: 'Elige la palabra',
      focus: 'Prefijos y sufijos',
      items: [
        ch('There is a common ___ that bats are blind.', 'misconception', ['disconception', 'unconception'], '"Mis-" = mal: misconception (idea equivocada).'),
        ch('The benefits far ___ the risks.', 'outweigh', ['overweigh', 'upweigh'], '"Outweigh" = superar en peso o importancia.'),
        ch('Punishing them would be ___; it would only make things worse.', 'counterproductive', ['unproductive', 'misproductive'], '"Counterproductive" = contraproducente.'),
        ch('What is the ___ of rain tomorrow?', 'likelihood', ['likeliness', 'likeship'], '"Likelihood" = probabilidad.'),
        ch('The country faced years of economic ___.', 'hardship', ['hardness', 'hardhood'], '"Hardship" = penurias.'),
        ch('We need to ___ our tasks and do the urgent ones first.', 'prioritise', ['priorify', 'enprior'], '"Prioritise" = priorizar.'),
      ],
    },
    {
      id: 'c1-vo-wf-2',
      kind: 'gap',
      title: 'Transforma la palabra',
      focus: 'Como en la Part 3',
      items: [
        g('The hospital has been seriously ___ for years. (FUND)', ['underfunded'], 'Poco financiado: under- + participio.'),
        g('The government wants to ___ the impact of the new tax. (MINIMUM)', ['minimise', 'minimize'], 'Verbo: minimise.'),
        g('His behaviour was completely ___. (ACCEPT)', ['unacceptable'], 'Sentido negativo: unacceptable.'),
        g('Could you ___ what you mean? (CLEAR)', ['clarify'], 'Verbo con -ify: clarify.'),
        g('There is a ___ of qualified nurses. (SHORT)', ['shortage'], 'Sustantivo con -age: shortage.'),
        g('The protesters were ___ by the police three to one. (NUMBER)', ['outnumbered'], '"Outnumber" = superar en número.'),
      ],
    },
    {
      id: 'c1-vo-wf-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Forma',
      items: [
        er('His [childship] was very happy.', 'childhood', 'Sufijo -hood: childhood.'),
        er('Don\'t [disinterpret] what I said.', 'misinterpret', '"Mis-" = mal.'),
        er('The situation is likely to worsen next year.', null, 'La frase es correcta.'),
        er('Smoking can [danger] your health.', 'endanger', 'Verbo con en-: endanger.'),
        er('Her comments were rather [unrespectful].', 'disrespectful', 'El negativo de respectful es disrespectful.'),
      ],
    },
  ],
}

export const c1Confusing: PartInfo = {
  slug: 'confusing-words-c1',
  name: 'Commonly confused words (C1)',
  nameEs: 'Palabras que se confunden en C1',
  summary: 'affect/effect, imply/infer, principal/principle, continual/continuous',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Parejas difíciles',
      points: [
        'imply (insinuar, el que habla) / infer (deducir, el que escucha)',
        'continual (repetido, con pausas) / continuous (sin interrupción)',
        'principal (principal; director) / principle (principio)',
        'economic (de la economía) / economical (que ahorra)',
        'historic (importante en la historia) / historical (del pasado)',
        'sensible (sensato) / sensitive (sensible) · comprehensive (completo) / comprehensible (comprensible)',
        'eligible (que cumple requisitos) / legible (que se puede leer) · alternate (alterno) / alternative (alternativo)',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-vo-cw-1',
      kind: 'choice',
      title: 'Elige la palabra',
      focus: 'Parejas',
      items: [
        ch('Are you ___ that I\'m lying?', 'implying', ['inferring', 'implicating'], '"Imply" = insinuar.'),
        ch('From his silence, I ___ that he disagreed.', 'inferred', ['implied', 'deduced of'], '"Infer" = deducir.'),
        ch('This small car is very ___ to run.', 'economical', ['economic', 'economy'], '"Economical" = que gasta poco.'),
        ch('The fall of the Berlin Wall was a ___ moment.', 'historic', ['historical', 'history'], '"Historic" = de gran importancia histórica.'),
        ch('I object to it on ___.', 'principle', ['principal', 'principles of'], '"On principle" = por principio.'),
        ch('The report gives a ___ overview of the problem.', 'comprehensive', ['comprehensible', 'comprehending'], '"Comprehensive" = completo, exhaustivo.'),
      ],
    },
    {
      id: 'c1-vo-cw-2',
      kind: 'gap',
      title: 'Escribe la palabra',
      focus: 'Una palabra',
      items: [
        g('I\'m tired of these ___ interruptions. (repetidas; empieza por "c")', ['continual', 'constant'], '"Continual" = repetido una y otra vez.'),
        g('Only students over 18 are ___ to vote. (que cumplen los requisitos)', ['eligible'], '"Eligible".'),
        g('Her handwriting is barely ___. (que se puede leer)', ['legible', 'readable'], '"Legible".'),
        g('The new tax will have a big ___ on small businesses. (efecto)', ['effect', 'impact'], '"Effect" es el sustantivo.'),
        g('We meet on ___ Mondays. (alternos)', ['alternate'], '"Alternate" = alterno, uno sí uno no.'),
        g('It would be ___ to book in advance. (sensato)', ['sensible', 'wise'], '"Sensible" = sensato.'),
      ],
    },
    {
      id: 'c1-vo-cw-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Palabras confundidas',
      items: [
        er('The new policy will [effect] millions of people.', 'affect', 'El verbo es "affect".'),
        er('Historical documents show that the town was founded in 1300.', null, 'La frase es correcta.'),
        er('There was a [continual] flow of water from the broken pipe.', 'continuous', 'Sin interrupción: continuous.'),
        er('Is there an [alternate] route we could take?', 'alternative', 'Otra opción: alternative.'),
        er('The school [principle] gave a speech.', 'principal', 'Director: principal.'),
      ],
    },
  ],
}

export const c1Register: PartInfo = {
  slug: 'formal-informal',
  name: 'Formal & informal register',
  nameEs: 'Registro formal e informal',
  summary: 'obtain / get, commence / start, require / need',
  suggestedMinutes: 5,
  theory: [
    {
      title: 'Equivalencias',
      points: [
        'get → obtain / receive · start → commence · end → terminate / conclude · need → require',
        'help → assist · ask → enquire / request · tell → inform · buy → purchase · enough → sufficient',
        'think about → consider · find out → ascertain / discover · put off → postpone · go up → increase',
        'In formal writing: sin contracciones, sin phrasal verbs coloquiales y con estructuras impersonales (It is recommended that…).',
        'En C1 se valora saber pasar de un registro a otro: un email a un amigo con "commence" suena raro.',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-vo-rg-1',
      kind: 'choice',
      title: 'Elige el equivalente formal',
      focus: 'Registro',
      items: [
        ch('Applicants must ___ (get) permission from their employer.', 'obtain', ['catch', 'grab'], '"Obtain" = conseguir (formal).'),
        ch('The ceremony will ___ (start) at 10 a.m.', 'commence', ['kick off', 'get going'], '"Commence" = comenzar (formal).'),
        ch('Please ___ (tell) us of any change of address.', 'inform', ['let know', 'say'], '"Inform" = informar.'),
        ch('Staff are happy to ___ (help) customers with disabilities.', 'assist', ['give a hand', 'back up'], '"Assist" = ayudar (formal).'),
        ch('The meeting has been ___ (put off) until Friday.', 'postponed', ['delayed off', 'pushed'], '"Postpone" = aplazar.'),
        ch('Visitors ___ (need) a valid passport.', 'require', ['want', 'got to have'], '"Require" = necesitar (formal).'),
      ],
    },
    {
      id: 'c1-vo-rg-2',
      kind: 'gap',
      title: 'Escribe el equivalente formal',
      focus: 'Una palabra',
      items: [
        g('Tickets may be ___ (bought) online.', ['purchased'], '"Purchase" = comprar.'),
        g('We would like to ___ (ask) about your prices.', ['enquire', 'inquire'], '"Enquire" = preguntar, pedir información.'),
        g('The evidence was not ___ (enough) to convict him.', ['sufficient'], '"Sufficient".'),
        g('The contract was ___ (ended) after six months.', ['terminated'], '"Terminate".'),
        g('We will ___ (think about) your application carefully.', ['consider'], '"Consider".'),
        g('Costs have ___ (gone up) by 10%.', ['increased', 'risen'], '"Increase".'),
      ],
    },
    {
      id: 'c1-vo-rg-3',
      kind: 'error',
      title: 'Encuentra el error de registro',
      focus: 'Carta formal',
      items: [
        er('Dear Sir or Madam, I [wanna] complain about the service.', 'wish to / would like to', 'Registro formal: I wish to / I would like to.'),
        er('I would be grateful if you could [get back to me ASAP].', 'reply at your earliest convenience', 'Formal: at your earliest convenience.'),
        er('Please find attached a copy of my CV.', null, 'La frase es correcta y formal.'),
        er('The hotel was [a bit of a rip-off].', 'overpriced', 'Coloquial; formal: overpriced.'),
        er('[Anyway,] I look forward to hearing from you.', '(eliminar)', '"Anyway" es informal; en carta formal se omite.'),
      ],
    },
  ],
}
