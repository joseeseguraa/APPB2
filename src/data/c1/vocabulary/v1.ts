import type { PartInfo } from '../../../types'
import { ch, er, g } from '../../helpers'

export const c1Phrasal: PartInfo = {
  slug: 'phrasal-verbs-c1',
  name: 'Phrasal verbs (C1)',
  nameEs: 'Phrasal verbs de nivel avanzado',
  summary: 'bring about, come up against, play down, rule out…',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Los más frecuentes en C1',
      points: [
        'bring about = provocar, causar · come up against = toparse con (un problema)',
        'play down = quitar importancia · rule out = descartar · face up to = afrontar',
        'fall through = fracasar (un plan) · stem from = derivar de · sink in = asimilar (una noticia)',
        'get across = hacer entender · live up to = estar a la altura de · put forward = proponer',
        'weigh up = sopesar · carry out = llevar a cabo · iron out = resolver (detalles)',
        'come across as = dar la impresión de · draw up = redactar (un plan, un contrato)',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-vo-pv-1',
      kind: 'choice',
      title: 'Elige el phrasal verb',
      focus: 'Significado',
      items: [
        ch('The police have not ___ the possibility of murder.', 'ruled out', ['put off', 'played down'], '"Rule out" = descartar.'),
        ch('The minister tried to ___ the seriousness of the crisis.', 'play down', ['bring about', 'fall through'], '"Play down" = quitar importancia.'),
        ch('The deal ___ at the last minute.', 'fell through', ['fell out', 'fell behind'], '"Fall through" = fracasar.'),
        ch("It took a while for the news to ___.", 'sink in', ['set in', 'take in'], '"Sink in" = asimilarse.'),
        ch('The film didn\'t ___ the hype.', 'live up to', ['come up with', 'face up to'], '"Live up to" = estar a la altura de.'),
        ch('Many of his problems ___ a difficult childhood.', 'stem from', ['come about', 'derive in'], '"Stem from" = derivar de.'),
      ],
    },
    {
      id: 'c1-vo-pv-2',
      kind: 'gap',
      title: 'Completa con la partícula',
      focus: 'Una o dos palabras',
      items: [
        g('The new law brought ___ significant changes.', ['about'], '"Bring about" = provocar.'),
        g('You need to face up ___ your responsibilities.', ['to'], '"Face up to" = afrontar.'),
        g('She put ___ an interesting proposal at the meeting.', ['forward'], '"Put forward" = proponer.'),
        g('We still need to iron ___ a few details.', ['out'], '"Iron out" = resolver.'),
        g('He comes ___ as rather arrogant, but he\'s actually shy.', ['across'], '"Come across as" = dar la impresión de.'),
        g('Let\'s weigh ___ the pros and cons before deciding.', ['up'], '"Weigh up" = sopesar.'),
      ],
    },
    {
      id: 'c1-vo-pv-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Partículas',
      items: [
        er('The research was carried [on] by a team of experts.', 'out', '"Carry out" = llevar a cabo.'),
        er('We came up [to] a lot of opposition.', 'against', '"Come up against" = toparse con.'),
        er('The lawyer drew [out] a new contract.', 'up', '"Draw up" = redactar.'),
        er('It was hard to get my point across.', null, 'La frase es correcta.'),
        er('Her success stems [of] years of hard work.', 'from', '"Stem from".'),
      ],
    },
  ],
}

export const c1Collocations: PartInfo = {
  slug: 'collocations-c1',
  name: 'Verb + noun collocations',
  nameEs: 'Colocaciones verbo + sustantivo',
  summary: 'pose a threat, bear in mind, draw a conclusion, meet a deadline',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Colocaciones que salen en la Part 1',
      points: [
        'pose a threat / a question / a challenge · raise awareness / concerns / a question',
        'bear in mind · bear responsibility · draw a conclusion / attention to / a distinction',
        'meet a deadline / a requirement / demand · reach a decision / an agreement / a compromise',
        'pay tribute to · pay a compliment · place emphasis on · take into account',
        'run a risk · strike a balance · hold an opinion / a view · give rise to',
        'cast doubt on · shed light on · come to terms with · make allowances for',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-vo-co-1',
      kind: 'choice',
      title: 'Elige el verbo',
      focus: 'Colocaciones',
      items: [
        ch('Rising sea levels ___ a serious threat to coastal cities.', 'pose', ['make', 'give'], '"Pose a threat".'),
        ch('We need to ___ a balance between work and leisure.', 'strike', ['hit', 'find out'], '"Strike a balance".'),
        ch('The new evidence ___ doubt on his story.', 'casts', ['throws up', 'puts'], '"Cast doubt on".'),
        ch('It is difficult to ___ any firm conclusions from such a small study.', 'draw', ['take', 'make up'], '"Draw a conclusion".'),
        ch('The campaign aims to ___ awareness of mental health.', 'raise', ['rise', 'grow'], '"Raise awareness".'),
        ch('The discovery may ___ light on the origins of the disease.', 'shed', ['give', 'put'], '"Shed light on".'),
      ],
    },
    {
      id: 'c1-vo-co-2',
      kind: 'gap',
      title: 'Escribe el verbo',
      focus: 'Una palabra',
      items: [
        g("Please ___ in mind that the office closes at five.", ['bear', 'keep'], '"Bear / keep in mind".'),
        g('The team worked all night to ___ the deadline.', ['meet'], '"Meet a deadline".'),
        g('After hours of discussion, they finally ___ a compromise.', ['reached'], '"Reach a compromise".'),
        g('The speech ___ tribute to the volunteers.', ['paid'], '"Pay tribute to".'),
        g('The decision ___ rise to widespread protests.', ['gave'], '"Give rise to" = provocar.'),
        g('It took her years to ___ to terms with her loss.', ['come'], '"Come to terms with".'),
      ],
    },
    {
      id: 'c1-vo-co-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Verbo equivocado',
      items: [
        er('You should [make] into account the cost of transport.', 'take', '"Take into account".'),
        er('The report [does] emphasis on prevention.', 'places / puts', '"Place / put emphasis on".'),
        er('Investors run a big risk by putting money into this.', null, 'La frase es correcta: "run a risk".'),
        er('He [made] a very interesting question.', 'raised / asked', '"Raise / ask a question".'),
        er('Who will [carry] responsibility for the failure?', 'bear / take', '"Bear / take responsibility".'),
      ],
    },
  ],
}

export const c1Intensifiers: PartInfo = {
  slug: 'adverb-adjective',
  name: 'Adverb + adjective collocations',
  nameEs: 'Intensificadores: highly, bitterly, deeply…',
  summary: 'highly unlikely, bitterly disappointed, fully aware',
  suggestedMinutes: 5,
  theory: [
    {
      title: 'Combinaciones naturales',
      points: [
        'highly: unlikely, successful, recommended, competitive, qualified',
        'bitterly: disappointed, cold, opposed · deeply: concerned, moved, rooted, regret',
        'fully: aware, booked, understand · utterly / totally: ridiculous, exhausted',
        'painfully: slow, obvious, shy · strikingly: similar, beautiful · widely: available, believed',
        'Con adjetivos extremos (amazing, furious, exhausted) se usa absolutely, no very.',
      ],
      examples: [{ en: 'I was absolutely furious.' }, { en: 'I was very furious.', wrong: true }],
    },
  ],
  exercises: [
    {
      id: 'c1-vo-in-1',
      kind: 'choice',
      title: 'Elige el adverbio',
      focus: 'Intensificadores',
      items: [
        ch('It is ___ unlikely that he will win.', 'highly', ['strongly', 'heavily'], '"Highly unlikely".'),
        ch('The fans were ___ disappointed by the result.', 'bitterly', ['heavily', 'highly'], '"Bitterly disappointed".'),
        ch('I am ___ aware of the risks.', 'fully', ['highly', 'deeply'], '"Fully aware".'),
        ch('These traditions are ___ rooted in the local culture.', 'deeply', ['highly', 'fully'], '"Deeply rooted".'),
        ch('The two cases are ___ similar.', 'strikingly', ['bitterly', 'heavily'], '"Strikingly similar".'),
        ch('After the marathon I was ___ exhausted.', 'absolutely', ['very', 'highly'], 'Con adjetivos extremos: absolutely.'),
      ],
    },
    {
      id: 'c1-vo-in-2',
      kind: 'gap',
      title: 'Escribe el adverbio',
      focus: 'Una palabra',
      items: [
        g('The hotel is ___ booked for the whole summer.', ['fully'], '"Fully booked".'),
        g('It is ___ believed that the painting is a fake.', ['widely'], '"Widely believed".'),
        g('The progress has been ___ slow.', ['painfully'], '"Painfully slow".'),
        g('We were ___ moved by her speech.', ['deeply'], '"Deeply moved".'),
        g('This restaurant comes ___ recommended.', ['highly'], '"Highly recommended".'),
        g('Many residents are ___ opposed to the new airport.', ['bitterly', 'strongly'], '"Bitterly / strongly opposed".'),
      ],
    },
    {
      id: 'c1-vo-in-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Combinaciones',
      items: [
        er('She was [very] furious when she found out.', 'absolutely', 'Adjetivo extremo: absolutely.'),
        er('It\'s [strongly] unlikely to rain today.', 'highly', '"Highly unlikely".'),
        er('He is a highly qualified engineer.', null, 'La frase es correcta.'),
        er('I [deeply] understand your position.', 'fully', '"Fully understand".'),
        er('The answer was [bitterly] obvious.', 'painfully', '"Painfully obvious".'),
      ],
    },
  ],
}

export const c1Idioms: PartInfo = {
  slug: 'idioms',
  name: 'Idioms',
  nameEs: 'Expresiones idiomáticas',
  summary: 'the tip of the iceberg, a blessing in disguise, cut corners',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Expresiones frecuentes en C1',
      points: [
        'the tip of the iceberg = la punta del iceberg · a blessing in disguise = no hay mal que por bien no venga',
        'cut corners = hacer algo deprisa y mal para ahorrar · go the extra mile = esforzarse más de lo necesario',
        'a drop in the ocean = una gota en el océano · the last straw = la gota que colma el vaso',
        'on the spur of the moment = sin pensarlo · in the long run = a la larga',
        'by and large = en general · a far cry from = muy distinto de · up in the air = sin decidir',
        'get the hang of = coger el truco · hit the nail on the head = dar en el clavo',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-vo-id-1',
      kind: 'choice',
      title: 'Elige la expresión',
      focus: 'Significado',
      items: [
        ch('These complaints are just the ___ of the iceberg.', 'tip', ['top', 'point'], '"The tip of the iceberg".'),
        ch('Losing that job was a blessing in ___: I found a much better one.', 'disguise', ['secret', 'hiding'], '"A blessing in disguise".'),
        ch('The builders clearly ___ corners; the walls are already cracking.', 'cut', ['saved', 'turned'], '"Cut corners".'),
        ch('Our plans for the summer are still up in the ___.', 'air', ['sky', 'clouds'], '"Up in the air" = sin decidir.'),
        ch('We booked the trip on the ___ of the moment.', 'spur', ['heat', 'edge'], '"On the spur of the moment".'),
        ch('You\'ve hit the nail on the ___.', 'head', ['top', 'point'], '"Hit the nail on the head" = dar en el clavo.'),
      ],
    },
    {
      id: 'c1-vo-id-2',
      kind: 'gap',
      title: 'Completa la expresión',
      focus: 'Una palabra',
      items: [
        g('A thousand euros is a ___ in the ocean compared to what we need.', ['drop'], '"A drop in the ocean".'),
        g('His rudeness was the last ___; I quit the next day.', ['straw'], '"The last straw".'),
        g('By and ___, the event was a success.', ['large'], '"By and large" = en general.'),
        g('This flat is a far ___ from the luxury apartment in the photos.', ['cry'], '"A far cry from".'),
        g('It took me weeks to get the ___ of the new software.', ['hang'], '"Get the hang of".'),
        g('She always goes the extra ___ for her clients.', ['mile'], '"Go the extra mile".'),
      ],
    },
    {
      id: 'c1-vo-id-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Expresiones',
      items: [
        er('In the [long term run], it will save you money.', 'long run', '"In the long run" o "in the long term".'),
        er('That was the [last drop]; I\'m leaving.', 'last straw', '"The last straw".'),
        er('She went the extra [kilometre] to help us.', 'mile', '"Go the extra mile".'),
        er('By and large, people were happy with the changes.', null, 'La frase es correcta.'),
        er('The noise was [the top] of the iceberg.', 'the tip', '"The tip of the iceberg".'),
      ],
    },
  ],
}
