import type { KwtExercise } from '../../../types'

export const c1Part4B: KwtExercise[] = [
  {
    id: 'c1-uoe4-03',
    kind: 'kwt',
    title: 'Set 3',
    focus: 'Pasivas impersonales y causativas',
    items: [
      { original: 'It is said that the castle was built in the twelfth century.', keyword: 'HAVE', before: 'The castle', after: 'built in the twelfth century.', answers: ['is said to have been'], explanation: 'Pasiva impersonal sobre el pasado: is said TO HAVE BEEN + participio.' },
      { original: 'A professional is going to redesign our website.', keyword: 'HAVING', before: 'We', after: 'by a professional.', answers: ['are having our website redesigned'], explanation: 'Causativa: have + objeto + participio. "We are having our website redesigned".' },
      { original: 'Everyone expects the minister to resign soon.', keyword: 'EXPECTED', before: 'The minister', after: 'soon.', answers: ['is expected to resign'], explanation: 'Pasiva impersonal: is expected TO + infinitivo.' },
      { original: 'Someone should have told me about the change of plan.', keyword: 'INFORMED', before: 'I', after: 'about the change of plan.', answers: ['should have been informed'], explanation: 'Modal pasivo en pasado: should have been + participio.' },
      { original: 'They made the children tidy their rooms before going out.', keyword: 'WERE', before: 'The children', after: 'their rooms before going out.', answers: ['were made to tidy'], explanation: 'En pasiva, "make somebody do" pasa a "be made TO do".' },
      { original: 'It is believed that the fire started in the kitchen.', keyword: 'THOUGHT', before: 'The fire', after: 'in the kitchen.', answers: ['is thought to have started'], explanation: 'Pasiva impersonal con "thought" sobre el pasado: is thought to have started.' },
    ],
  },
  {
    id: 'c1-uoe4-04',
    kind: 'kwt',
    title: 'Set 4',
    focus: 'Expresiones idiomáticas',
    items: [
      { original: 'I forgot her name completely.', keyword: 'MIND', before: 'Her name', after: '.', answers: ['slipped my mind', 'completely slipped my mind'], explanation: 'Expresión: "something slips your mind" = se te olvida.' },
      { original: 'He has very little chance of winning the election.', keyword: 'ODDS', before: 'The', after: 'him winning the election.', answers: ['odds are against', 'odds are heavily against', 'odds are very much against'], explanation: '"The odds are against somebody" = lo tiene todo en contra.' },
      { original: 'She was nervous before the interview, but she didn\'t show it.', keyword: 'FACE', before: 'She put on', after: 'she was nervous before the interview.', answers: ['a brave face although', 'a brave face even though', 'a brave face though'], explanation: '"Put on a brave face" = poner buena cara, disimular los nervios o la tristeza.' },
      { original: 'I really don\'t mind whether we eat in or go out.', keyword: 'DIFFERENCE', before: 'It', after: 'me whether we eat in or go out.', answers: ['makes no difference to', "doesn't make any difference to", 'makes absolutely no difference to'], explanation: '"It makes no difference to me" = me da igual.' },
      { original: 'You should think carefully before you decide.', keyword: 'CONSIDERATION', before: 'You should give', after: 'before you decide.', answers: ['it careful consideration', 'the matter careful consideration', 'it some careful consideration'], explanation: '"Give something careful consideration" = pensarlo bien.' },
      { original: 'The concert was cancelled at the last minute.', keyword: 'NOTICE', before: 'The concert was cancelled', after: '.', answers: ['at very short notice', 'at short notice'], explanation: 'Expresión: "at short notice" = con poca antelación.' },
    ],
  },
  {
    id: 'c1-uoe4-05',
    kind: 'kwt',
    title: 'Set 5',
    focus: 'Condicionales mixtas y deseos',
    items: [
      { original: "I didn't study medicine, so I'm not a doctor now.", keyword: 'WOULD', before: 'If I had studied medicine,', after: 'a doctor now.', answers: ['I would be'], explanation: 'Condicional mixta: pasado (had studied) + resultado presente (would be).' },
      { original: "I regret not accepting the job offer.", keyword: 'WISH', before: 'I', after: 'the job offer.', answers: ['wish I had accepted', "wish I'd accepted"], explanation: 'Arrepentimiento sobre el pasado: wish + past perfect.' },
      { original: "It's time you started taking your studies seriously.", keyword: 'HIGH', before: "It's", after: 'taking your studies seriously.', answers: ['high time you started', 'high time you began'], explanation: '"It\'s high time + sujeto + pasado" = ya va siendo hora de que…' },
      { original: 'You can only borrow my car if you promise to be careful.', keyword: 'PROVIDED', before: 'You can borrow my car', after: 'to be careful.', answers: ['provided that you promise', 'provided you promise'], explanation: '"Provided (that)" = siempre que, con la condición de que.' },
      { original: 'People say that he is extremely rich, but I doubt it.', keyword: 'SUPPOSED', before: 'He', after: 'extremely rich, but I doubt it.', answers: ['is supposed to be'], explanation: '"Be supposed to be" = se supone que es, dicen que es.' },
      { original: "I'd prefer you not to smoke in here.", keyword: 'RATHER', before: "I'd", after: 'in here.', answers: ["rather you didn't smoke", 'rather you did not smoke'], explanation: '"I\'d rather + sujeto + pasado" = preferiría que no…' },
    ],
  },
]
