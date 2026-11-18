import type { PartInfo } from '../../../types'
import { ch, er, g } from '../../helpers'

export const c1Ellipsis: PartInfo = {
  slug: 'ellipsis-substitution',
  name: 'Ellipsis & substitution',
  nameEs: 'Elipsis y sustitución',
  summary: 'I hope so / I hope not, do so, one / ones, neither do I',
  suggestedMinutes: 5,
  theory: [
    {
      title: 'Sustitución',
      points: [
        'So / not después de think, hope, expect, suppose, be afraid: I hope so. I\'m afraid not. I don\'t think so.',
        'Do so = hacerlo (formal): He was asked to leave, and he did so immediately.',
        'One / ones para no repetir un sustantivo contable: I prefer the red one.',
        'So + auxiliar + sujeto (también) / Neither / Nor + auxiliar + sujeto (tampoco).',
      ],
    },
    {
      title: 'Elipsis',
      points: [
        'Se omite lo que ya se ha dicho, dejando el auxiliar: "Have you finished?" "Yes, I have."',
        'Con to: "Would you like to come?" "I\'d love to."',
        'Detrás de conjunciones: He said he would call, but he didn\'t.',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-gr-el-1',
      kind: 'choice',
      title: 'Elige la forma',
      focus: 'Sustitución',
      items: [
        ch('"Will it rain tomorrow?" "I hope ___."', 'not', ["don't", 'no'], 'Negativa: I hope not.'),
        ch('"I can\'t swim." "___ can I."', 'Neither', ['So', 'Either'], 'Tampoco: Neither can I.'),
        ch('Staff are asked to report problems, and many have ___.', 'done so', ['made it', 'done it so'], '"Do so" = hacerlo.'),
        ch("These shoes are too small. Have you got any bigger ___?", 'ones', ['one', 'them'], 'Plural: ones.'),
        ch('"Are you coming?" "I\'d like ___, but I can\'t."', 'to', ['it', 'so'], 'Elipsis con "to".'),
        ch('"Is he angry?" "I\'m afraid ___."', 'so', ['yes', 'it'], 'Afirmativa: I\'m afraid so.'),
      ],
    },
    {
      id: 'c1-gr-el-2',
      kind: 'gap',
      title: 'Completa',
      focus: 'Una palabra',
      items: [
        g('"Did you lock the door?" "I think ___."', ['so'], '"I think so".'),
        g('She said she would help, but she ___ . (no lo hizo; con contracción)', ["didn't"], 'Elipsis: but she didn\'t (help).'),
        g('"I love jazz." "So ___ I."', ['do'], '"So do I".'),
        g('I wanted the blue jacket, but they only had the black ___.', ['one'], 'Singular: one.'),
        g('"Have you ever been to Peru?" "No, I ___ ." (con contracción)', ["haven't"], 'Elipsis con el auxiliar: No, I haven\'t.'),
        g('"Is it going to be expensive?" "I don\'t expect ___."', ['so'], '"I don\'t expect so".'),
      ],
    },
    {
      id: 'c1-gr-el-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Errores típicos',
      items: [
        er('"Is she coming?" "I [don\'t hope so]."', 'hope not', 'Con "hope" la negativa es "I hope not".'),
        er('"I don\'t like coffee." "[Me neither don\'t I]."', 'Neither do I / Me neither', '"Neither do I" o "Me neither".'),
        er('I like these glasses more than the other [one].', 'ones', 'Plural: ones.'),
        er('"Can you help?" "I\'d be happy to."', null, 'La frase es correcta.'),
        er('"I\'ve finished." "So [I have]."', 'have I', '"So have I" (también).'),
      ],
    },
  ],
}

export const c1Determiners: PartInfo = {
  slug: 'articles-determiners',
  name: 'Articles & determiners',
  nameEs: 'Artículos y determinantes avanzados',
  summary: 'the + adjetivo, a few / quite a few, each vs every, either / neither',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Artículos',
      points: [
        'The + adjetivo = grupo de personas: the rich, the elderly, the unemployed.',
        'Sin artículo con conceptos generales: Society, nature, life, history.',
        'The para algo único o ya conocido, también instituciones como lugares: She went to the prison to visit him (no "to prison", que significa ir presa).',
        'A / an con profesiones y con "such / quite / rather": such a pity, quite a surprise.',
      ],
    },
    {
      title: 'Determinantes',
      points: [
        'Few / little (poco, negativo) vs a few / a little (algo, positivo). Quite a few = bastantes.',
        'Each (cada uno por separado, también para 2) vs every (todos, 3 o más).',
        'Either (uno u otro) / neither (ninguno de los dos) / both (los dos).',
        'No + sustantivo / none of + determinante: No student passed. None of the students passed.',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-gr-de-1',
      kind: 'choice',
      title: 'Elige la forma',
      focus: 'Artículos y determinantes',
      items: [
        ch('The government has promised more help for ___.', 'the elderly', ['elderly', 'the elderlies'], '"The + adjetivo" = los mayores.'),
        ch('___ is full of surprises.', 'Life', ['The life', 'A life'], 'Concepto general: sin artículo.'),
        ch('Very ___ people turned up, so the event was cancelled.', 'few', ['a few', 'little'], 'Sentido negativo: few.'),
        ch('There were quite ___ mistakes in the report.', 'a few', ['few', 'a little'], '"Quite a few" = bastantes.'),
        ch('___ of the two candidates was suitable.', 'Neither', ['None', 'Either'], 'Ninguno de los dos: neither.'),
        ch('The teacher spoke to ___ student individually.', 'each', ['every of', 'all'], 'Cada uno por separado: each.'),
      ],
    },
    {
      id: 'c1-gr-de-2',
      kind: 'gap',
      title: 'Completa',
      focus: 'Una palabra (o "-" si no hace falta artículo)',
      items: [
        g('She is ___ most honest person I know.', ['the'], 'Superlativo: the most.'),
        g('___ of my friends could come, so I went alone.', ['none'], '"None of + determinante".'),
        g('I have ___ little money left, so I can buy a coffee. (escribe el artículo)', ['a'], '"A little" = algo de.'),
        g('You can take ___ road; they both go to the village.', ['either'], 'Uno u otro: either.'),
        g('The gap between ___ rich and the poor is growing.', ['the'], '"The rich".'),
        g('___ single person in the room stood up.', ['every'], '"Every single" = absolutamente todos.'),
      ],
    },
    {
      id: 'c1-gr-de-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Errores típicos',
      items: [
        er('[The nature] is beautiful in this region.', 'Nature', 'Concepto general: sin artículo.'),
        er('She is [engineer].', 'an engineer', 'Profesiones con a/an.'),
        er('[Every] of the students received a certificate.', 'Each', '"Each of" (no "every of").'),
        er('Neither answer is correct.', null, 'La frase es correcta.'),
        er('The unemployed [is] finding it hard.', 'are', '"The + adjetivo" es plural.'),
      ],
    },
  ],
}

export const c1Comparison: PartInfo = {
  slug: 'advanced-comparison',
  name: 'Advanced comparison',
  nameEs: 'Comparación avanzada',
  summary: 'nowhere near as, by far, the more… the more, considerably',
  suggestedMinutes: 5,
  theory: [
    {
      title: 'Modificar comparativos',
      points: [
        'Mucho más: far / much / considerably / significantly / a great deal + comparativo.',
        'Un poco más: slightly / a bit / marginally + comparativo.',
        'Superlativo reforzado: by far the best, easily the most…',
        'No ni de lejos: nowhere near as / not nearly as… as. Casi igual: almost / nearly / just as… as.',
        'The + comparativo…, the + comparativo: The sooner, the better.',
        'Cada vez más: more and more / harder and harder.',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-gr-cm-1',
      kind: 'choice',
      title: 'Elige la forma',
      focus: 'Comparación',
      items: [
        ch('This hotel is ___ the best in the city.', 'by far', ['far more', 'very much'], '"By far + superlativo".'),
        ch("The sequel is ___ near as good as the original.", 'nowhere', ['nothing', 'not'], '"Nowhere near as… as".'),
        ch('The ___ you practise, the more confident you become.', 'more', ['most', 'much'], '"The more…, the more…".'),
        ch('Prices are ___ higher than last year: about 1%.', 'marginally', ['considerably', 'far'], 'Diferencia pequeña: marginally.'),
        ch('The exam was ___ more difficult than I expected.', 'considerably', ['very', 'by far'], '"Considerably + comparativo".'),
        ch('It is getting ___ to find affordable housing.', 'harder and harder', ['hard and harder', 'more hard'], '"Cada vez más": comparativo repetido.'),
      ],
    },
    {
      id: 'c1-gr-cm-2',
      kind: 'gap',
      title: 'Completa',
      focus: 'Una palabra',
      items: [
        g('The ___ , the better. (soon)', ['sooner'], '"The sooner, the better".'),
        g("It's not ___ as expensive as people think. (ni de lejos)", ['nearly'], '"Not nearly as… as".'),
        g('She is ___ the most talented player in the team. (con diferencia; 2 palabras)', ['by far', 'easily'], '"By far / easily the most…".'),
        g('This version is a great ___ better than the first one.', ['deal'], '"A great deal + comparativo".'),
        g('He is just ___ stubborn as his father.', ['as'], '"Just as… as".'),
        g('The older he gets, the ___ patient he becomes. (less)', ['less', 'more'], '"The older…, the less / more…".'),
      ],
    },
    {
      id: 'c1-gr-cm-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Errores típicos',
      items: [
        er('This is [very more] interesting than I thought.', 'much more', '"Very" no modifica comparativos.'),
        er('She is by far [the more] intelligent student in the class.', 'the most', '"By far + superlativo".'),
        er('The more you read, [more] you learn.', 'the more', '"The more…, the more…".'),
        er('It was nowhere near as hard as I feared.', null, 'La frase es correcta.'),
        er('Life is getting [more and more expensive and expensive].', 'more and more expensive', '"More and more + adjetivo".'),
      ],
    },
  ],
}

export const c1Participles: PartInfo = {
  slug: 'participle-reduced-clauses',
  name: 'Participle & reduced clauses',
  nameEs: 'Oraciones de participio y reducidas',
  summary: 'Having been told…, Not knowing…, Once finished…, If asked…',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Participios',
      points: [
        'Having + participio = acción anterior: Having finished the report, she went home.',
        'Having been + participio = anterior y pasiva: Having been warned, we took precautions.',
        'Not + participio = negativa: Not wanting to wake him, I left quietly.',
        'Con sujeto propio (absoluto, formal): The weather being fine, we ate outside.',
      ],
    },
    {
      title: 'Oraciones reducidas',
      points: [
        'Conjunción + participio: Once finished, the bridge will be the longest in Europe. If asked, say you don\'t know. While waiting, I read a book.',
        'Cuidado con el sujeto: debe ser el mismo en las dos partes. "Walking home, the rain started" ✗.',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-gr-pr-1',
      kind: 'choice',
      title: 'Elige la forma',
      focus: 'Participios',
      items: [
        ch('___ the warning, they continued their climb.', 'Having ignored', ['Ignored', 'Having been ignored'], 'Acción anterior y activa.'),
        ch('___ by the police, the driver admitted everything.', 'Questioned', ['Questioning', 'Having questioned'], 'Pasiva: fue interrogado.'),
        ch('___ what to do, she called her lawyer.', 'Not knowing', ['Knowing not', 'Not known'], 'Negativa: Not knowing.'),
        ch('Once ___, the form should be returned to reception.', 'completed', ['completing', 'having completed'], 'Reducida pasiva: once (it is) completed.'),
        ch('___ twice before, he was not allowed to take the test again.', 'Having been caught', ['Having caught', 'Caught being'], 'Anterior y pasiva.'),
        ch('The meeting ___ over, everyone went home.', 'being', ['been', 'was being'], 'Participio absoluto con sujeto propio.'),
      ],
    },
    {
      id: 'c1-gr-pr-2',
      kind: 'gap',
      title: 'Completa con una o dos palabras',
      focus: 'Participios',
      items: [
        g('___ lived abroad for years, she speaks four languages. (2 palabras)', ['having lived'], 'Acción anterior: Having lived.'),
        g('If ___ , tell them I\'m not available. (ask)', ['asked'], 'Reducida pasiva: if (you are) asked.'),
        g('While ___ for the bus, I met an old friend. (wait)', ['waiting'], 'Reducida activa.'),
        g('___ been told the news, he was devastated.', ['having'], '"Having been told".'),
        g('___ wanting to cause trouble, I said nothing.', ['not'], 'Negativa.'),
        g('The work ___ done, we celebrated. (participio de be)', ['being'], 'Participio absoluto.'),
      ],
    },
    {
      id: 'c1-gr-pr-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Forma y sujeto',
      items: [
        er('[Having being] told off, the boy started crying.', 'Having been', '"Having been + participio".'),
        er('[Finishing] in 1890, the tower is now a symbol of the city.', 'Finished / Completed', 'Pasiva: la torre fue terminada.'),
        er('[Not having] enough money, so we stayed at home.', 'Not having enough money, we stayed', 'No se combina participio con "so".'),
        er('Once opened, the jar should be kept in the fridge.', null, 'La frase es correcta.'),
        er('[Have finished] the exam, she left the room.', 'Having finished', 'Participio perfecto: Having finished.'),
      ],
    },
  ],
}
