import type { KwtExercise } from '../../types'

export const part4ExercisesB: KwtExercise[] = [
  {
    id: 'uoe4-06',
    kind: 'kwt',
    title: 'Set 6',
    focus: 'Present perfect, wish, such, pasiva impersonal, verbos',
    items: [
      { original: 'I last went to the cinema two months ago.', keyword: 'BEEN', before: 'I', after: 'the cinema for two months.', answers: ["haven't been to", 'have not been to'], explanation: '"Last did X + time ago" equivale a "haven\'t done X for + periodo". Con lugares, "been to".' },
      { original: "It's a pity I can't speak Italian.", keyword: 'WISH', before: 'I', after: 'speak Italian.', answers: ['wish I could'], explanation: 'Deseo sobre el presente con capacidad: wish + could.' },
      { original: 'The film was so boring that I fell asleep.', keyword: 'SUCH', before: 'It', after: 'film that I fell asleep.', answers: ['was such a boring'], explanation: '"So + adjetivo" equivale a "such + a + adjetivo + sustantivo".' },
      { original: 'They think the thief escaped through the window.', keyword: 'THOUGHT', before: 'The thief', after: 'escaped through the window.', answers: ['is thought to have'], explanation: 'Pasiva impersonal sobre algo pasado: is thought TO HAVE + participio.' },
      { original: '"Don\'t forget to buy bread," my mum said to me.', keyword: 'REMINDED', before: 'My mum', after: 'bread.', answers: ['reminded me to buy'], explanation: '"Don\'t forget to…" equivale a "remind somebody to + infinitivo".' },
      { original: "We couldn't play tennis because of the rain.", keyword: 'PREVENTED', before: 'The rain', after: 'tennis.', answers: ['prevented us from playing'], explanation: '"Prevent somebody FROM + -ing" = impedir que alguien haga algo.' },
    ],
  },
  {
    id: 'uoe4-07',
    kind: 'kwt',
    title: 'Set 7',
    focus: 'Preferencias, comparativos, have to, enough',
    items: [
      { original: "I'd prefer you not to tell anyone.", keyword: 'RATHER', before: 'I', after: 'tell anyone.', answers: ["would rather you didn't", "'d rather you didn't", 'would rather you did not'], explanation: 'Would rather + OTRA persona + pasado: I\'d rather you didn\'t tell…' },
      { original: 'She found the instructions difficult to understand.', keyword: 'DIFFICULTY', before: 'She', after: 'the instructions.', answers: ['had difficulty understanding', 'had difficulty in understanding'], explanation: '"Have difficulty (in) + -ing" = tener dificultades para hacer algo.' },
      { original: 'Who does this car belong to?', keyword: 'OWNS', before: 'Who', after: '?', answers: ['owns this car'], explanation: '"Belong to somebody" equivale a "somebody owns it". "Who" es el sujeto, así que no lleva auxiliar "does".' },
      { original: "I didn't expect the exam to be so easy.", keyword: 'EASIER', before: 'The exam was', after: 'expected.', answers: ['easier than I had', 'easier than I', "easier than I'd"], explanation: '"So easy" (más de lo esperado) pasa a "easier than I (had) expected".' },
      { original: "It isn't necessary for you to come early.", keyword: 'HAVE', before: 'You', after: 'come early.', answers: ["don't have to", 'do not have to'], explanation: 'Falta de obligación: don\'t have to.' },
      { original: 'He was too ill to go to work.', keyword: 'WELL', before: "He wasn't", after: 'to go to work.', answers: ['well enough'], explanation: '"Too + adjetivo" equivale a "not + adjetivo contrario + enough": not well enough.' },
    ],
  },
  {
    id: 'uoe4-08',
    kind: 'kwt',
    title: 'Set 8',
    focus: 'Pasiva con modal, estilo indirecto, condicional, regret',
    items: [
      { original: 'Someone should fix the broken window.', keyword: 'FIXED', before: 'The broken window', after: '.', answers: ['should be fixed'], explanation: 'Pasiva con modal: should BE + participio.' },
      { original: '"Are you going to the party?" Sam asked me.', keyword: 'WHETHER', before: 'Sam asked me', after: 'to the party.', answers: ['whether I was going'], explanation: 'Pregunta indirecta de sí o no: whether + orden afirmativo + backshift.' },
      { original: 'Without your help, I would have failed.', keyword: 'IF', before: 'I would have failed', after: 'me.', answers: ["if you hadn't helped", 'if you had not helped'], explanation: '"Without your help" equivale a "if you hadn\'t helped me" (third conditional).' },
      { original: "She's sorry she didn't study harder.", keyword: 'REGRETS', before: 'She', after: 'harder.', answers: ['regrets not studying', 'regrets not having studied'], explanation: '"Regret + (not) + -ing" para lamentar algo del pasado.' },
      { original: 'Mark started working here in 2019.', keyword: 'HAS', before: 'Mark', after: '2019.', answers: ['has worked here since', 'has been working here since'], explanation: 'Empezó y sigue: present perfect + since + punto de inicio.' },
      { original: "I'm sure she didn't take your phone.", keyword: "CAN'T", before: 'She', after: 'your phone.', answers: ["can't have taken"], explanation: 'Deducción negativa sobre el pasado: can\'t have + participio.' },
    ],
  },
  {
    id: 'uoe4-09',
    kind: 'kwt',
    title: 'Set 9',
    focus: 'Expresiones fijas y sugerencias',
    items: [
      { original: "I don't mind whether we eat in or out.", keyword: 'DIFFERENCE', before: 'It', after: 'to me whether we eat in or out.', answers: ['makes no difference', "doesn't make any difference", 'does not make any difference'], explanation: '"It makes no difference to me" = me da igual.' },
      { original: 'The train was late because of the snow.', keyword: 'DUE', before: "The train's delay", after: 'the snow.', answers: ['was due to'], explanation: '"Be due to" = deberse a.' },
      { original: 'Please could you open the window?', keyword: 'MIND', before: 'Would', after: 'the window?', answers: ['you mind opening'], explanation: '"Would you mind + -ing?" = ¿te importaría…?' },
      { original: "I've never seen such a beautiful sunset.", keyword: 'MOST', before: "It's the", after: 'I have ever seen.', answers: ['most beautiful sunset'], explanation: '"Never… such a" equivale a "the most… I have ever seen".' },
      { original: "Let's go to the beach this weekend.", keyword: 'HOW', before: '', after: 'to the beach this weekend?', answers: ['how about going', 'how about we go'], explanation: 'Sugerencia: "How about + -ing?"' },
      { original: 'Tom is likely to win the race.', keyword: 'PROBABLY', before: 'Tom', after: 'the race.', answers: ['will probably win'], explanation: '"Be likely to" equivale a "will probably". El adverbio va entre "will" y el verbo.' },
    ],
  },
  {
    id: 'uoe4-10',
    kind: 'kwt',
    title: 'Set 10',
    focus: 'Condiciones, despite, first time, pasiva',
    items: [
      { original: "We'll go out unless it rains.", keyword: 'AS', before: "We'll go out", after: "doesn't rain.", answers: ['as long as it', 'so long as it'], explanation: '"Unless it rains" equivale a "as long as it doesn\'t rain".' },
      { original: 'Although he was tired, he kept working.', keyword: 'DESPITE', before: '', after: 'tired, he kept working.', answers: ['despite being', 'despite feeling'], explanation: '"Despite + -ing": despite being tired.' },
      { original: "I haven't eaten sushi before.", keyword: 'FIRST', before: "It's the", after: 'eaten sushi.', answers: ['first time I have', "first time I've"], explanation: '"It\'s the first time + present perfect".' },
      { original: 'They made him wait for an hour.', keyword: 'MADE', before: 'He', after: 'wait for an hour.', answers: ['was made to'], explanation: 'En pasiva, "make somebody do" lleva "to": he was made TO wait.' },
      { original: 'You must finish the report by Friday.', keyword: 'HAS', before: 'The report', after: 'by Friday.', answers: ['has to be finished'], explanation: 'Obligación en pasiva: has to BE + participio.' },
      { original: "It's the first time I've visited Rome.", keyword: 'NEVER', before: 'I', after: 'Rome before.', answers: ['have never visited', "'ve never visited", 'have never been to', "'ve never been to"], explanation: '"It\'s the first time I\'ve…" equivale a "I have never… before".' },
    ],
  },
]
