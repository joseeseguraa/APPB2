import type { OpenClozeExercise } from '../../../types'

export const c1Part2: OpenClozeExercise[] = [
  {
    id: 'c1-uoe2-01',
    kind: 'open-cloze',
    title: 'Why boredom matters',
    focus: 'Inversión, conectores y expresiones fijas',
    text: `Boredom has a bad reputation. We tend to think of it as something to be avoided at {1} costs, especially now that a phone is always within reach. Yet a growing body of research suggests that being bored is {2} from a waste of time. When the mind has nothing to occupy it, it starts to wander, and it is often in {3} moments that new ideas appear. In one study, participants who had first completed a dull task, such as copying numbers from a phone book, came up with more creative answers to a problem {4} those who had gone straight to it. Not {5} does boredom encourage creativity, but it may also push us to look for more meaningful activities. The feeling acts as a signal that {6} we are doing is not satisfying us. The trouble is that we rarely allow that signal to reach us. {7} sooner do we feel a moment of emptiness than we reach for a screen. Perhaps, {8} than trying to escape boredom, we should learn to listen to it.`,
    gaps: [
      { answers: ['all'], explanation: 'Expresión fija: "at all costs" = a toda costa.' },
      { answers: ['far'], explanation: 'Expresión fija: "far from" = lejos de, en absoluto. "Being bored is far from a waste of time".' },
      { answers: ['such', 'these', 'those'], explanation: '"In such moments" = en esos momentos. También "these / those moments".' },
      { answers: ['than'], explanation: 'Comparativo: "more creative answers THAN those who…".' },
      { answers: ['only'], explanation: '"Not only… but (also)" con inversión: Not only does boredom encourage…' },
      { answers: ['what'], explanation: '"What we are doing" = lo que estamos haciendo. Es el sujeto de "is not satisfying us".' },
      { answers: ['no'], explanation: '"No sooner… than" con inversión: No sooner do we feel… than we reach for a screen.' },
      { answers: ['rather'], explanation: '"Rather than + -ing" = en lugar de.' },
    ],
  },
  {
    id: 'c1-uoe2-02',
    kind: 'open-cloze',
    title: 'A language on the brink',
    focus: 'Relativos, determinantes y partículas',
    text: `Of the roughly seven thousand languages spoken in the world today, as {1} as half are expected to disappear by the end of the century. When a language dies, it takes with it a unique way of seeing the world: words for plants, customs and feelings {2} which there is no exact equivalent anywhere else. Linguists have long warned of the danger, but it is only recently that communities themselves have begun to fight back. In parts of Wales, Hawaii and New Zealand, schools now teach children in languages that their grandparents were once punished {3} speaking. The results have been remarkable. Welsh, {4} was in steep decline for most of the twentieth century, is now spoken by a growing number of young people. Not every revival is {5} successful, however. Without a new generation of native speakers, a language can survive only as a subject of study, {6} than as a living means of communication. Experts agree that the key is to make the language useful in everyday life, {7} it is in shops, on social media or at work. {8} all, people are unlikely to make the effort to learn a language they will never use.`,
    gaps: [
      { answers: ['many'], explanation: '"As many as" = nada menos que, hasta. Se usa con cantidades contables para subrayar que son muchas.' },
      { answers: ['for'], explanation: 'Relativo con preposición: "words for which there is no equivalent" (hay un equivalente PARA esas palabras).' },
      { answers: ['for'], explanation: '"Be punished FOR + -ing" = ser castigado por hacer algo.' },
      { answers: ['which'], explanation: 'Relativo no especificativo, entre comas, para una cosa: which. "That" no se usa después de coma.' },
      { answers: ['as', 'so', 'equally'], explanation: '"Not every revival is as / so successful" = no todos los casos tienen tanto éxito.' },
      { answers: ['rather'], explanation: '"Rather than" = en lugar de, más que.' },
      { answers: ['whether'], explanation: '"Whether it is in shops, on social media or at work" = ya sea en tiendas, en redes o en el trabajo.' },
      { answers: ['after'], explanation: 'Expresión fija: "after all" = al fin y al cabo.' },
    ],
  },
]
