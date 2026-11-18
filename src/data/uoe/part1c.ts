import type { McClozeExercise } from '../../types'
import { mc } from '../helpers'

export const part1ExercisesC: McClozeExercise[] = [
  {
    id: 'uoe1-11',
    kind: 'mc-cloze',
    title: 'The night shift',
    focus: 'Colocaciones con verbos',
    text: `Around one in six workers in Europe works at night, and scientists are only beginning to understand how this {1} their health. Our bodies are designed to sleep when it is dark, so people who work night shifts are constantly {2} against their natural rhythm. Many find it hard to {3} asleep during the day, especially when the rest of the world is noisy and busy. Over time, a lack of sleep can {4} to serious problems, from heart disease to depression. Nurse Paula Ortega has worked nights for nine years. "The first few months were the hardest," she says. "I {5} to drink far too much coffee." Now she follows a strict routine, wearing dark glasses on the way home and keeping her bedroom completely dark. "It doesn't {6} the problem completely, but it helps." Experts {7} that employers should give night workers regular health checks and, where possible, the {8} to change shifts.`,
    gaps: [
      mc('uoe1-11-1', 'affects', ['effects', 'influences on', 'causes'], '"Affect" es el verbo (afectar). "Effect" es normalmente sustantivo, e "influence" no lleva "on" como verbo.'),
      mc('uoe1-11-2', 'working', ['making', 'doing', 'taking'], 'Trabajan de noche, en contra de su ritmo natural: "work against". "Make", "do" y "take" no forman nada con "against" con este sentido.'),
      mc('uoe1-11-3', 'fall', ['get', 'go', 'become'], 'Colocación fija: "fall asleep" = quedarse dormido. "Go to sleep" existe, pero sin "asleep".'),
      mc('uoe1-11-4', 'lead', ['result', 'cause', 'bring'], '"Lead to" = llevar a, provocar. "Result" necesitaría "in", y "cause" no lleva "to".'),
      mc('uoe1-11-5', 'used', ['got', 'was', 'had'], '"Used to + infinitivo" = hábito pasado que ya no se tiene.'),
      mc('uoe1-11-6', 'solve', ['answer', 'respond', 'reply'], '"Solve a problem" = resolver un problema.'),
      mc('uoe1-11-7', 'recommend', ['tell', 'inform', 'persuade'], '"Recommend that + frase". "Tell", "inform" y "persuade" necesitan un objeto de persona antes (tell somebody that…).'),
      mc('uoe1-11-8', 'opportunity', ['possibility', 'occasion', 'luck'], '"The opportunity to do something" = la oportunidad de hacer algo. "Possibility" iría con "of + -ing".'),
    ],
  },
  {
    id: 'uoe1-12',
    kind: 'mc-cloze',
    title: 'A second-hand revolution',
    focus: 'Vocabulario de consumo',
    text: `Not long ago, buying second-hand clothes was something many people preferred to keep {1}. Today it has become fashionable. Apps that allow people to sell clothes they no longer wear have {2} millions of users, and some charity shops now have queues outside on Saturday mornings. There are several reasons for this {3}. Second-hand clothes are cheaper, of course, but for many young shoppers the environment is just as important. The fashion industry is {4} for a large share of the world's carbon emissions, and producing a single pair of jeans can use thousands of litres of water. Buying used items is a simple way to {5} this impact. Not everyone is convinced, {6}. Some critics argue that the apps simply encourage people to buy even more, {7} that they can always sell what they do not want. Whether the trend will actually reduce consumption {8} to be seen.`,
    gaps: [
      mc('uoe1-12-1', 'quiet', ['silent', 'calm', 'still'], '"Keep something quiet" = no contarlo, mantenerlo en secreto.'),
      mc('uoe1-12-2', 'attracted', ['pulled', 'caught', 'brought'], '"Attract users / customers" = atraer usuarios.'),
      mc('uoe1-12-3', 'shift', ['move', 'turn', 'switch'], '"A shift" = un cambio de tendencia o de actitud. Es la palabra habitual para cambios sociales.'),
      mc('uoe1-12-4', 'responsible', ['guilty', 'blamed', 'accused'], '"Be responsible for" = ser responsable de, causar. "Guilty" iría con "of".'),
      mc('uoe1-12-5', 'reduce', ['drop', 'fall', 'descend'], '"Reduce the impact" = reducir el impacto. "Drop" y "fall" no suelen llevar objeto con este sentido.'),
      mc('uoe1-12-6', 'however', ['although', 'despite', 'whereas'], '"However" puede ir al final, entre comas. "Although", "despite" y "whereas" necesitan una frase detrás.'),
      mc('uoe1-12-7', 'knowing', ['meaning', 'saying', 'telling'], '"Knowing that…" = sabiendo que. Explica por qué compran más.'),
      mc('uoe1-12-8', 'remains', ['stays', 'keeps', 'continues'], 'Expresión fija: "it remains to be seen" = está por ver.'),
    ],
  },
  {
    id: 'uoe1-13',
    kind: 'mc-cloze',
    title: 'The village that went quiet',
    focus: 'Expresiones fijas y linkers',
    text: `Every Sunday from April to October, the Swiss village of Grünwald {1} all cars from its streets. The idea began twenty years ago as a one-day experiment, but it proved so popular that the residents voted to {2} it permanent. Children play football in the main street, older people sit outside cafés, and the only sound is the {3} of bicycle bells. "At first some shopkeepers were against it," says the mayor, Hans Keller. "They were worried they would {4} customers." In fact, the opposite happened: visitors now come from all over the region {5} to experience a day without traffic. Of course, there are {6} problems. Delivery vans have to arrive before seven in the morning, and people with mobility difficulties need special permits. But {7} the whole, Keller says, the village is proud of what it has achieved. "We have shown that it is {8} to live differently, even if it's only one day a week."`,
    gaps: [
      mc('uoe1-13-1', 'bans', ['forbids', 'stops', 'refuses'], '"Ban something from somewhere" = prohibir la presencia de algo en un lugar.'),
      mc('uoe1-13-2', 'make', ['do', 'turn', 'set'], '"Make something permanent" = hacer que algo sea permanente. Make + objeto + adjetivo.'),
      mc('uoe1-13-3', 'ring', ['call', 'shout', 'bang'], '"The ring of a bell" = el sonido de un timbre o campana.'),
      mc('uoe1-13-4', 'lose', ['miss', 'waste', 'drop'], '"Lose customers" = perder clientes. "Miss" es echar de menos o no llegar a tiempo.'),
      mc('uoe1-13-5', 'just', ['even', 'yet', 'still'], '"Just to do something" = solo para hacer algo.'),
      mc('uoe1-13-6', 'some', ['any', 'few', 'little'], 'Frase afirmativa con contable plural: "some problems". "Few" tendría sentido negativo.'),
      mc('uoe1-13-7', 'on', ['in', 'as', 'by'], 'Expresión fija: "on the whole" = en general. "As a whole" también existe, pero con "a", no con "the".'),
      mc('uoe1-13-8', 'possible', ['able', 'capable', 'likely'], '"It is possible to do something" = es posible hacer algo. "Able" y "capable" se dicen de personas.'),
    ],
  },
]
