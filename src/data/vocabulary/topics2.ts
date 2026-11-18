import type { PartInfo } from '../../types'
import { ch, er, g } from '../helpers'

export const wordFormation: PartInfo = {
  slug: 'word-formation',
  name: 'Word formation',
  nameEs: 'Prefijos y sufijos para la Part 3',
  summary: 'un-, dis-, -ness, -ity, -ment, -ful, -ly…',
  suggestedMinutes: 7,
  theory: [
    {
      title: 'Sufijos para formar sustantivos',
      points: [
        '-tion / -sion: decide → decision, explain → explanation, permit → permission',
        '-ment: develop → development, achieve → achievement, employ → employment',
        '-ness: happy → happiness, aware → awareness, kind → kindness',
        '-ity: popular → popularity, possible → possibility, responsible → responsibility',
        '-ance / -ence: appear → appearance, depend → dependence, prefer → preference',
        '-er / -or / -ist / -ant (personas): employ → employer, act → actor, science → scientist, assist → assistant',
        '-th: strong → strength, long → length, wide → width, deep → depth',
      ],
    },
    {
      title: 'Sufijos para formar adjetivos',
      points: [
        '-ful (con) / -less (sin): care → careful / careless, hope → hopeful / hopeless',
        '-able / -ible: rely → reliable, comfort → comfortable, access → accessible',
        '-ous: danger → dangerous, fame → famous, mystery → mysterious',
        '-ive: create → creative, effect → effective, attract → attractive',
        '-al: nature → natural, profession → professional, environment → environmental',
        '-ic: science → scientific, economy → economic, energy → energetic',
        '-y: health → healthy, luck → lucky, noise → noisy',
      ],
    },
    {
      title: 'Prefijos negativos',
      points: [
        'un-: unhappy, unlikely, unusual, unemployed, unexpected',
        'in- / im- / il- / ir-: incorrect, impossible (delante de p/m), illegal (delante de l), irregular (delante de r)',
        'dis-: disagree, disappear, dishonest, disadvantage',
        'mis- (= mal): misunderstand, misbehave, mislead',
        'over- / under- (= demasiado / poco): overcrowded, underpaid',
      ],
    },
    {
      title: 'Verbos y adverbios',
      points: [
        'Verbos con -en, -ise, -ify: short → shorten, modern → modernise, simple → simplify',
        'Verbos con en-: able → enable, large → enlarge, courage → encourage',
        'Adverbios con -ly: careful → carefully. Los adjetivos en -ic hacen -ically (dramatically); los acabados en -le cambian a -ly (possible → possibly).',
      ],
    },
  ],
  exercises: [
    {
      id: 'vo-wf-1',
      kind: 'choice',
      title: 'Elige la forma correcta',
      focus: 'Qué tipo de palabra hace falta',
      items: [
        ch('Her ___ to finish the race impressed everyone.', 'determination', ['determined', 'determine'], 'Detrás de "her" va un sustantivo: determination.'),
        ch('The instructions were very ___, so we got lost.', 'confusing', ['confused', 'confusion'], 'Describe las instrucciones (lo que provoca la confusión): -ing.'),
        ch('It was ___ of you to leave the door open.', 'careless', ['careful', 'carefully'], 'Sentido negativo (fue un descuido): careless.'),
        ch('The company is looking for ___ staff.', 'reliable', ['reliability', 'rely'], 'Delante de un sustantivo va un adjetivo: reliable (fiable).'),
        ch('I completely ___ what she meant.', 'misunderstood', ['disunderstood', 'ununderstood'], '"Mis-" significa "mal": misunderstand (entender mal).'),
        ch("It's ___ to park here; you'll get a fine.", 'illegal', ['unlegal', 'inlegal'], 'Delante de l el prefijo negativo es il-: illegal.'),
        ch('The ___ of the bridge is 200 metres.', 'length', ['long', 'longness'], '"Long" forma el sustantivo con -th: length.'),
        ch('We need to ___ the road because of the traffic.', 'widen', ['widely', 'width'], 'Hace falta un verbo detrás de "to": widen (ensanchar).'),
      ],
    },
    {
      id: 'vo-wf-2',
      kind: 'gap',
      title: 'Transforma la palabra',
      focus: 'Como en la Part 3',
      items: [
        g('The film was a great ___. (SUCCEED)', ['success'], '"A great + sustantivo": success.'),
        g('She is very ___ about the future. (HOPE)', ['hopeful'], '"Be + adjetivo" con sentido positivo: hopeful.'),
        g('There is a ___ of rain this afternoon. (POSSIBLE)', ['possibility'], '"A + sustantivo + of": possibility.'),
        g('He was ___ for three months after the factory closed. (EMPLOY)', ['unemployed'], 'Sin trabajo: UNemployed.'),
        g('The museum has a ___ collection of paintings. (MAGNIFY)', ['magnificent'], 'Adjetivo delante de "collection": magnificent (magnífica).'),
        g('Drink plenty of water to stay ___. (HEALTH)', ['healthy'], '"Stay + adjetivo": healthy.'),
        g('The police are asking for ___ from the public. (ASSIST)', ['assistance'], '"Ask for + sustantivo": assistance (ayuda).'),
        g('The new law has been ___ criticised. (WIDE)', ['widely'], 'Modifica al verbo "criticised": adverbio, widely.'),
      ],
    },
    {
      id: 'vo-wf-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Prefijos y sufijos',
      items: [
        er('I [unagree] with your opinion.', 'disagree', 'El contrario de agree es DISagree.'),
        er('She was very [boring] during the long meeting.', 'bored', 'Cómo se siente una persona: -ed (bored).'),
        er('The [strongness] of the wind surprised us.', 'strength', 'El sustantivo de strong es strength.'),
        er('It was an unforgettable experience.', null, 'La frase es correcta.'),
        er('This exercise is [unpossible].', 'impossible', 'Delante de p el prefijo es im-: impossible.'),
        er('He drove [careful] through the snow.', 'carefully', 'Modifica al verbo "drove": adverbio, carefully.'),
      ],
    },
  ],
}

export const travel: PartInfo = {
  slug: 'travel',
  name: 'Travel & holidays',
  nameEs: 'Viajes, transporte y alojamiento',
  summary: 'trip, journey, travel, check in, book, delay…',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Trip, journey, travel, voyage',
      points: [
        'TRAVEL: verbo (viajar) o sustantivo incontable para el viaje en general (Travel broadens the mind).',
        'TRIP: un viaje completo, ida y vuelta, normalmente corto (a business trip, a day trip).',
        'JOURNEY: el trayecto de un lugar a otro (The journey to work takes an hour).',
        'VOYAGE: viaje largo por mar o por el espacio.',
      ],
      examples: [
        { en: 'How was your trip to London?' },
        { en: 'How was your travel to London?', wrong: true },
      ],
    },
    {
      title: 'Vocabulario útil',
      points: [
        'book a room / a flight = reservar · a booking / reservation',
        'check in / check out = registrarse / dejar el hotel · board a plane = embarcar',
        'a delay = un retraso · be delayed · a cancellation · miss a flight',
        'a return / single ticket (BrE) = ida y vuelta / solo ida · a round trip (AmE)',
        'luggage / baggage (incontables) = equipaje · hand luggage · a suitcase',
        'accommodation (incontable) = alojamiento · a hostel · a campsite · self-catering',
        'sightseeing = hacer turismo · a guided tour · a tourist attraction · off the beaten track',
        'jet lag · a stopover = escala · go abroad = ir al extranjero (sin "to")',
      ],
    },
  ],
  exercises: [
    {
      id: 'vo-tr-1',
      kind: 'choice',
      title: 'Elige la palabra',
      focus: 'Viajes',
      items: [
        ch('How was your ___ to Rome?', 'trip', ['travel', 'voyage'], 'Un viaje concreto, ida y vuelta: trip.'),
        ch('The ___ from my house to the office takes forty minutes.', 'journey', ['trip', 'travel'], 'Trayecto de un lugar a otro: journey.'),
        ch("We'd like to ___ a double room for three nights.", 'book', ['reserve for', 'order'], '"Book a room" = reservar una habitación.'),
        ch('Our flight was ___ by two hours because of fog.', 'delayed', ['late', 'retarded'], '"Be delayed" = sufrir un retraso.'),
        ch('How much ___ are you taking?', 'luggage', ['luggages', 'baggages'], '"Luggage" es incontable: no lleva plural.'),
        ch('She loves going ___ every summer.', 'abroad', ['to abroad', 'in abroad'], '"Go abroad" va sin preposición.'),
        ch('We need to ___ by 11 am, so pack your bags tonight.', 'check out', ['check in', 'check up'], '"Check out" = dejar el hotel.'),
        ch('Finding ___ in the city centre in August is almost impossible.', 'accommodation', ['an accommodation', 'accommodations'], '"Accommodation" es incontable en inglés británico.'),
      ],
    },
    {
      id: 'vo-tr-2',
      kind: 'gap',
      title: 'Escribe la palabra',
      focus: 'Colocaciones de viaje',
      items: [
        g('I always suffer from jet ___ after long flights.', ['lag'], '"Jet lag" = desfase horario.'),
        g('Passengers are now ___ the plane through gate 12. (embarcando)', ['boarding'], '"Board a plane" = embarcar.'),
        g('We spent the day ___ in the old town. (haciendo turismo)', ['sightseeing'], '"Go sightseeing" = hacer turismo.'),
        g('A ___ ticket to Seville, please. Just one way. (solo ida)', ['single', 'one-way'], '"A single (ticket)" = solo ida (BrE).'),
        g('We had a three-hour ___ in Dubai on the way to Bangkok. (escala)', ['stopover', 'layover'], '"A stopover" = una escala.'),
        g("I like to get ___ the beaten track and visit places with no tourists.", ['off'], '"Off the beaten track" = lejos de las rutas turísticas.'),
        g('The flight was ___, so we had to stay another night. (cancelado)', ['cancelled', 'canceled'], '"Be cancelled" = cancelarse.'),
        g('Can I take this bag as hand ___? (equipaje de mano)', ['luggage', 'baggage'], '"Hand luggage" = equipaje de mano.'),
      ],
    },
    {
      id: 'vo-tr-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Errores típicos',
      items: [
        er('I hope you have a good [travel]!', 'trip', 'Para desear buen viaje: have a good trip.'),
        er('We went [to abroad] last summer.', 'abroad', '"Abroad" va sin "to".'),
        er('I lost two [luggages] at the airport.', 'pieces of luggage / bags', '"Luggage" es incontable: two pieces of luggage o two bags.'),
        er('The journey took six hours by train.', null, 'La frase es correcta.'),
        er('We [lost] the flight because of the traffic.', 'missed', 'Perder un vuelo o un tren es "miss".'),
        er('Have you [made the reservation of] the hotel yet?', 'booked', 'Lo natural es "book the hotel".'),
      ],
    },
  ],
}

export const money: PartInfo = {
  slug: 'money-shopping',
  name: 'Money & shopping',
  nameEs: 'Dinero, compras y consumo',
  summary: 'afford, refund, bargain, save up, owe…',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Dinero',
      points: [
        'afford = poder permitirse · can\'t afford to + infinitivo',
        'save (up) for = ahorrar para · savings = ahorros',
        'borrow from / lend to · owe = deber dinero · a loan = un préstamo · a debt = una deuda',
        'earn = ganar trabajando · spend on = gastar en · waste money on = malgastar',
        'be well off = vivir bien · be broke = estar sin blanca · cost a fortune = costar un ojo de la cara',
        'pay in cash / by card · the bill (BrE) = la cuenta · change = el cambio',
      ],
    },
    {
      title: 'Compras',
      points: [
        'a bargain = una ganga · a discount · on sale = rebajado · good value for money',
        'a receipt = un tique · a refund = un reembolso · exchange = cambiar un producto',
        'try on = probarse (ropa) · fit (talla) / suit (favorecer) · match (combinar)',
        'a brand = una marca · window shopping = mirar escaparates · overpriced = demasiado caro',
      ],
      examples: [
        { en: 'This dress doesn\'t fit me; it\'s too small.' },
        { en: 'That colour really suits you.' },
      ],
    },
  ],
  exercises: [
    {
      id: 'vo-mo-1',
      kind: 'choice',
      title: 'Elige la palabra',
      focus: 'Dinero y compras',
      items: [
        ch("I'd love that car, but I can't ___ it.", 'afford', ['allow', 'pay'], '"Can\'t afford" = no poder permitírselo.'),
        ch('Can I ___ this jacket on, please?', 'try', ['prove', 'test'], '"Try on" = probarse ropa.'),
        ch('These shoes were only €20. What a ___!', 'bargain', ['sale', 'price'], '"A bargain" = una ganga.'),
        ch("Keep the ___ in case you want to return it.", 'receipt', ['recipe', 'ticket'], '"Receipt" = tique de compra.'),
        ch('The shoes were broken, so the shop gave me a ___.', 'refund', ['return', 'repayment'], '"A refund" = devolución del dinero.'),
        ch('That colour really ___ you.', 'suits', ['fits', 'matches'], '"Suit" = favorecer. "Fit" es la talla.'),
        ch('I still ___ my brother €50.', 'owe', ['own', 'borrow'], '"Owe" = deber dinero.'),
        ch("I'm ___ up for a new laptop.", 'saving', ['keeping', 'storing'], '"Save up for" = ahorrar para.'),
      ],
    },
    {
      id: 'vo-mo-2',
      kind: 'gap',
      title: 'Escribe la palabra',
      focus: 'Expresiones',
      items: [
        g("I can't go out this weekend; I'm completely ___. (sin dinero)", ['broke'], '"Be broke" = estar sin blanca.'),
        g('This restaurant is good ___ for money.', ['value'], '"Good value for money" = buena relación calidad-precio.'),
        g('Can we have the ___, please? (la cuenta)', ['bill', 'check'], '"The bill" (BrE) / "the check" (AmE).'),
        g('These trousers are too big; they don\'t ___ me.', ['fit'], '"Fit" = quedar bien de talla.'),
        g("Don't ___ your money on things you don't need. (malgastar)", ['waste'], '"Waste money on" = malgastar dinero en.'),
        g('Everything in the shop is ___ sale this week.', ['on'], '"On sale" = rebajado.'),
        g('Can I pay ___ card?', ['by'], '"Pay by card" / "pay in cash".'),
        g('That watch must have cost a ___. (un ojo de la cara)', ['fortune'], '"Cost a fortune" = costar muchísimo.'),
      ],
    },
    {
      id: 'vo-mo-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Errores típicos',
      items: [
        er('Can you [borrow] me €10?', 'lend', 'Prestar a alguien = lend.'),
        er('I spent all my money [in] clothes.', 'on', 'Se gasta dinero ON algo: spent all my money on clothes.'),
        er('The [recipe] says I paid €45.', 'receipt', 'El tique de compra es "receipt". "Recipe" es una receta de cocina.'),
        er('This jacket was a real bargain.', null, 'La frase es correcta.'),
        er('He [wins] €2,000 a month as a nurse.', 'earns', 'El sueldo se "earn".'),
        er('I can\'t afford [going] on holiday this year.', 'to go', '"Afford" va seguido de "to + infinitivo".'),
      ],
    },
  ],
}

export const relationships: PartInfo = {
  slug: 'relationships-feelings',
  name: 'Relationships & feelings',
  nameEs: 'Relaciones, personalidad y emociones',
  summary: 'get on with, reliable, upset, embarrassed, -ed/-ing…',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Relaciones',
      points: [
        'get on (well) with = llevarse bien con · fall out with = enfadarse con · make up = reconciliarse',
        'go out with = salir con (pareja) · split up / break up = romper · get married TO',
        'have a lot in common = tener mucho en común · keep in touch = mantener el contacto',
        'a close friend = un amigo íntimo · an acquaintance = un conocido · a colleague',
      ],
    },
    {
      title: 'Personalidad',
      points: [
        'reliable (fiable) · honest · generous · easy-going (tranquilo, flexible) · outgoing (extrovertido)',
        'shy · bossy (mandón) · moody (de humor cambiante) · stubborn (cabezota) · selfish (egoísta)',
        'sensible (sensato) ≠ sensitive (sensible) · nice / friendly (simpático) ≠ sympathetic (comprensivo)',
      ],
    },
    {
      title: 'Emociones: -ed o -ing',
      points: [
        'Con -ED se describe cómo se siente una persona: I\'m bored, interested, excited, embarrassed, disappointed.',
        'Con -ING se describe lo que provoca la emoción: The film is boring, interesting, exciting, embarrassing, disappointing.',
        'upset = disgustado, afectado · anxious = nervioso, inquieto · relieved = aliviado · grateful = agradecido',
      ],
      examples: [{ en: 'I was bored because the lesson was boring.' }, { en: 'I am boring in this class.', wrong: true, es: 'Significa "soy aburrido".' }],
    },
  ],
  exercises: [
    {
      id: 'vo-rf-1',
      kind: 'choice',
      title: 'Elige la palabra',
      focus: 'Personalidad y emociones',
      items: [
        ch('I was really ___ when I forgot her name in front of everyone.', 'embarrassed', ['embarrassing', 'pregnant'], 'Cómo se siente una persona: -ed.'),
        ch('The end of the film was a bit ___.', 'disappointing', ['disappointed', 'disappoint'], 'Describe la película (lo que provoca la decepción): -ing.'),
        ch("He never changes his mind, even when he's wrong. He's so ___.", 'stubborn', ['sensible', 'reliable'], '"Stubborn" = cabezota.'),
        ch('She always tells everyone what to do. She\'s very ___.', 'bossy', ['outgoing', 'moody'], '"Bossy" = mandón.'),
        ch('We have a lot in ___: we both love music and travelling.', 'common', ['similar', 'same'], '"Have a lot in common" = tener mucho en común.'),
        ch('I don\'t really ___ on with my new flatmate.', 'get', ['go', 'take'], '"Get on with" = llevarse bien con.'),
        ch('I was so ___ when I heard everyone was safe.', 'relieved', ['relieving', 'released'], '"Relieved" = aliviado.'),
        ch("You can always count on him. He's very ___.", 'reliable', ['sensitive', 'moody'], '"Reliable" = fiable, de confianza.'),
      ],
    },
    {
      id: 'vo-rf-2',
      kind: 'gap',
      title: 'Escribe la palabra',
      focus: 'Phrasal verbs y adjetivos',
      items: [
        g('They argued, but they made ___ the next day.', ['up'], '"Make up" = reconciliarse.'),
        g('After five years together, they ___ up last month. (rompieron)', ['split', 'broke'], '"Split up / break up" = romper una relación.'),
        g('Let\'s keep in ___ after the course. (en contacto)', ['touch'], '"Keep in touch" = seguir en contacto.'),
        g("She's very ___: she loves meeting new people. (extrovertida)", ['outgoing', 'sociable'], '"Outgoing" = extrovertido.'),
        g('I\'m really ___ in history. (INTEREST)', ['interested'], 'Cómo te sientes: interested.'),
        g('He gets ___ very easily when people criticise him. (disgustado)', ['upset'], '"Upset" = disgustado, afectado.'),
        g('She never shares anything; she\'s really ___. (egoísta)', ['selfish'], '"Selfish" = egoísta.'),
        g('I\'m very ___ for all your help. (agradecido)', ['grateful', 'thankful'], '"Grateful for" = agradecido por.'),
      ],
    },
    {
      id: 'vo-rf-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Errores típicos',
      items: [
        er('I was very [exciting] about the trip.', 'excited', 'Cómo se siente una persona: -ed.'),
        er('She got married [with] a Canadian.', 'to', 'Get married TO somebody.'),
        er("He's very [sympathetic]: he's always laughing and telling jokes.", 'nice / friendly / fun', '"Sympathetic" es comprensivo. Simpático es "nice" o "friendly".'),
        er('I get on really well with my sister.', null, 'La frase es correcta.'),
        er('This lesson is so [bored].', 'boring', 'Describe la clase (lo que aburre): -ing.'),
        er('She is very [sensible]: she cries at every film.', 'sensitive', 'Sensible (que se emociona) es "sensitive". "Sensible" es sensato.'),
      ],
    },
  ],
}
