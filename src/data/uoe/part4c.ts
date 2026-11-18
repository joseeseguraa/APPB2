import type { KwtExercise } from '../../types'

export const part4ExercisesC: KwtExercise[] = [
  {
    id: 'uoe4-11',
    kind: 'kwt',
    title: 'Set 11',
    focus: 'Patrones verbales y present perfect',
    items: [
      { original: "It's not a good idea to swim here.", keyword: 'ADVISABLE', before: 'It', after: 'to swim here.', answers: ["isn't advisable", 'is not advisable'], explanation: '"Not a good idea" equivale a "not advisable" (no aconsejable).' },
      { original: "I'm sure it was Tom I saw.", keyword: 'MUST', before: 'It', after: 'Tom I saw.', answers: ['must have been'], explanation: 'Deducción segura sobre el pasado: must have been.' },
      { original: "She didn't manage to finish the race.", keyword: 'SUCCEED', before: 'She', after: 'the race.', answers: ["didn't succeed in finishing", 'did not succeed in finishing'], explanation: '"Manage to + infinitivo" equivale a "succeed IN + -ing".' },
      { original: 'It took me two hours to write the essay.', keyword: 'SPENT', before: 'I', after: 'the essay.', answers: ['spent two hours writing'], explanation: '"It took me + tiempo + to do" equivale a "I spent + tiempo + -ing".' },
      { original: "We haven't got any bread left.", keyword: 'RUN', before: 'We', after: 'bread.', answers: ['have run out of', "'ve run out of"], explanation: '"Run out of" = quedarse sin. Present perfect porque el resultado es ahora.' },
      { original: 'The last time I saw her was in 2020.', keyword: 'SINCE', before: 'I', after: '2020.', answers: ["haven't seen her since"], explanation: '"The last time I did X was in…" equivale a "I haven\'t done X since…". Con contracción son 5 palabras.' },
    ],
  },
  {
    id: 'uoe4-12',
    kind: 'kwt',
    title: 'Set 12',
    focus: 'Verbos de estilo indirecto y pasiva',
    items: [
      { original: '"I\'m sorry I lied," said Ben.', keyword: 'APOLOGISED', before: 'Ben', after: '.', answers: ['apologised for lying', 'apologised for having lied'], explanation: '"Apologise FOR + -ing".' },
      { original: '"You should see a doctor," she told me.', keyword: 'ADVISED', before: 'She', after: 'a doctor.', answers: ['advised me to see'], explanation: '"Advise somebody TO do something".' },
      { original: 'Someone has stolen my bike.', keyword: 'BEEN', before: 'My bike', after: '.', answers: ['has been stolen'], explanation: 'Pasiva del present perfect: has been + participio.' },
      { original: 'They will announce the results tomorrow.', keyword: 'ANNOUNCED', before: 'The results', after: 'tomorrow.', answers: ['will be announced'], explanation: 'Pasiva de futuro: will be + participio.' },
      { original: '"I didn\'t break the window," said Tim.', keyword: 'DENIED', before: 'Tim', after: 'the window.', answers: ['denied breaking', 'denied having broken'], explanation: '"Deny + -ing". Ojo: el verbo ya es negativo, así que no se añade "not".' },
      { original: 'People believe the painting is worth millions.', keyword: 'BELIEVED', before: 'The painting', after: 'worth millions.', answers: ['is believed to be'], explanation: 'Pasiva impersonal: is believed TO BE.' },
    ],
  },
  {
    id: 'uoe4-13',
    kind: 'kwt',
    title: 'Set 13',
    focus: 'Condicionales, wish, if only, in case',
    items: [
      { original: "I didn't know you were ill, so I didn't visit you.", keyword: 'KNOWN', before: 'If', after: 'you were ill, I would have visited you.', answers: ['I had known', "I'd known"], explanation: 'Third conditional: if + past perfect.' },
      { original: "I don't have a car, so I can't drive to work.", keyword: 'HAD', before: 'If', after: 'a car, I could drive to work.', answers: ['I had'], explanation: 'Second conditional: if + pasado. Dos palabras también es una respuesta válida.' },
      { original: "It's a pity we don't live nearer the beach.", keyword: 'WISH', before: 'I', after: 'nearer the beach.', answers: ['wish we lived'], explanation: 'Deseo sobre el presente: wish + pasado.' },
      { original: 'I regret spending so much money.', keyword: 'ONLY', before: 'If', after: 'so much money!', answers: ["only I hadn't spent", 'only I had not spent'], explanation: 'Arrepentimiento sobre el pasado: if only + past perfect.' },
      { original: 'You can borrow my laptop, but you must look after it.', keyword: 'LONG', before: 'You can borrow my laptop as', after: 'after it.', answers: ['long as you look'], explanation: '"As long as" = siempre que, con la condición de que.' },
      { original: 'Take your phone because you might get lost.', keyword: 'CASE', before: 'Take your phone', after: 'lost.', answers: ['in case you get'], explanation: '"In case" = por si acaso, seguido de presente.' },
    ],
  },
  {
    id: 'uoe4-14',
    kind: 'kwt',
    title: 'Set 14',
    focus: 'Comparación y expresiones',
    items: [
      { original: "My new flat isn't as big as my old one.", keyword: 'SMALLER', before: 'My new flat', after: 'my old one.', answers: ['is smaller than'], explanation: '"Not as big as" equivale a "smaller than".' },
      { original: 'Nobody in the team runs faster than Ana.', keyword: 'FASTEST', before: 'Ana', after: 'in the team.', answers: ['is the fastest', 'runs the fastest', 'is the fastest runner'], explanation: '"Nobody… faster than" equivale al superlativo: the fastest.' },
      { original: "I haven't seen him for ages.", keyword: 'LONG', before: "It's been", after: 'I saw him.', answers: ['a long time since'], explanation: '"Haven\'t done X for ages" equivale a "It\'s been a long time since I did X".' },
      { original: "It's not worth arguing with her.", keyword: 'POINT', before: "There's", after: 'with her.', answers: ['no point arguing', 'no point in arguing'], explanation: '"There\'s no point (in) + -ing" = no merece la pena.' },
      { original: "This is the first time I've been to Japan.", keyword: 'NEVER', before: 'I', after: 'to Japan before.', answers: ['have never been', "'ve never been"], explanation: '"The first time I\'ve…" equivale a "I have never… before".' },
      { original: 'Could you help me with this box?', keyword: 'HAND', before: 'Could you give', after: 'this box?', answers: ['me a hand with'], explanation: 'Expresión fija: "give somebody a hand (with)" = echar una mano.' },
    ],
  },
  {
    id: 'uoe4-15',
    kind: 'kwt',
    title: 'Set 15',
    focus: 'Phrasal verbs y modales',
    items: [
      { original: 'They postponed the meeting until next week.', keyword: 'OFF', before: 'They', after: 'until next week.', answers: ['put the meeting off', 'put off the meeting'], explanation: '"Put off" = aplazar (postpone).' },
      { original: "I can't tolerate his rudeness any more.", keyword: 'PUT', before: "I can't", after: 'his rudeness any more.', answers: ['put up with'], explanation: '"Put up with" = aguantar, tolerar.' },
      { original: 'She resembles her mother a lot.', keyword: 'TAKES', before: 'She really', after: 'mother.', answers: ['takes after her'], explanation: '"Take after" = parecerse a un familiar mayor.' },
      { original: "I didn't recognise him until he spoke.", keyword: 'ONLY', before: 'I', after: 'he spoke.', answers: ['only recognised him when', 'only recognized him when'], explanation: '"Not… until" equivale a "only… when": solo lo reconocí cuando habló.' },
      { original: 'They cancelled the match because of the rain.', keyword: 'CALLED', before: 'The match', after: 'because of the rain.', answers: ['was called off'], explanation: '"Call off" = cancelar, aquí en pasiva.' },
      { original: "It's possible that the shop is closed.", keyword: 'MAY', before: 'The shop', after: 'closed.', answers: ['may be'], explanation: 'Posibilidad en el presente: may be (puede que esté).' },
    ],
  },
]
