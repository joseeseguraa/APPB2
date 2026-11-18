import type { McClozeExercise } from '../../../types'
import { mc } from '../../helpers'

export const c1Part1: McClozeExercise[] = [
  {
    id: 'c1-uoe1-01',
    kind: 'mc-cloze',
    title: 'The rise of the four-day week',
    focus: 'Colocaciones y matices de significado',
    text: `When a handful of companies first experimented with a four-day working week, most economists {1} the idea as a passing fad. Few would have predicted that, within a decade, the scheme would be {2} serious consideration by governments. The results of the early trials were hard to ignore. Productivity remained stable or even rose, while staff reported lower stress levels and a better {3} between work and family life. Employers, for their part, found it easier to attract and {4} talented workers. Critics, however, have been quick to point out that the model does not {5} itself to every sector. Hospitals, schools and restaurants cannot simply close for an extra day, and there is a risk that the benefits will be enjoyed by office workers {6} at the expense of everyone else. Supporters {7} that these difficulties are practical rather than fundamental. Whether they are right remains to be seen, but the debate has already {8} many people to question assumptions about work that they had previously taken for granted.`,
    gaps: [
      mc('c1-uoe1-01-1', 'dismissed', ['rejected', 'discarded', 'refused'], '"Dismiss something as…" = descartar algo por considerarlo… Es la única que funciona con "as".'),
      mc('c1-uoe1-01-2', 'given', ['taken', 'paid', 'shown'], 'Colocación: "give something serious consideration". En pasiva: be given serious consideration.'),
      mc('c1-uoe1-01-3', 'balance', ['equality', 'proportion', 'measure'], '"A balance between work and family life" = conciliación. "Work-life balance" es la expresión habitual.'),
      mc('c1-uoe1-01-4', 'retain', ['maintain', 'sustain', 'reserve'], '"Attract and retain staff" = atraer y retener talento. "Maintain" no se usa con personas en este sentido.'),
      mc('c1-uoe1-01-5', 'lend', ['give', 'offer', 'apply'], 'Expresión fija: "lend itself to something" = prestarse a, ser adecuado para.'),
      mc('c1-uoe1-01-6', 'alone', ['only', 'solely', 'merely'], 'Detrás del sustantivo: "office workers alone" = solo los oficinistas. "Only", "solely" y "merely" irían delante.'),
      mc('c1-uoe1-01-7', 'maintain', ['sustain', 'retain', 'remain'], '"Maintain that…" = sostener, afirmar. Las otras no introducen una opinión con "that".'),
      mc('c1-uoe1-01-8', 'prompted', ['made', 'let', 'had'], '"Prompt somebody to do something" = llevar a alguien a hacer algo. "Make", "let" y "have" van sin "to".'),
    ],
  },
  {
    id: 'c1-uoe1-02',
    kind: 'mc-cloze',
    title: 'The unreliable witness',
    focus: 'Expresiones fijas y phrasal verbs',
    text: `For centuries, courts have {1} great weight on the testimony of eyewitnesses. A confident witness who points at the accused and says "That's the man" can be extremely persuasive. Yet psychologists have long known that human memory is far less {2} than we like to think. Rather than storing events like a video recording, the brain reconstructs them each time we {3} them to mind, filling in gaps with what seems likely. In one well-known experiment, participants who watched a film of a car accident were later asked how fast the cars were going when they "smashed into" each other. Those who heard the word "smashed" gave higher estimates and were more likely to {4} seeing broken glass, although there was none. Such findings have {5} serious questions about convictions based largely on eyewitness evidence. In several countries, police procedures have now been {6} in an attempt to reduce the risk of error: witnesses are told that the suspect may not be in the line-up, and officers who {7} the identification do not know which person is the suspect. These may seem minor changes, but they could make all the {8} to someone wrongly accused.`,
    gaps: [
      mc('c1-uoe1-02-1', 'placed', ['given', 'held', 'made'], 'Colocación: "place (great) weight on something" = dar mucha importancia a algo.'),
      mc('c1-uoe1-02-2', 'reliable', ['trustful', 'credible', 'faithful'], '"Reliable" = fiable, se dice de la memoria, de datos o de máquinas. "Credible" se dice de testigos o historias.'),
      mc('c1-uoe1-02-3', 'call', ['bring up', 'take', 'come'], 'Expresión fija: "call something to mind" = recordar algo.'),
      mc('c1-uoe1-02-4', 'recall', ['remind', 'recognise', 'memorise'], '"Recall + -ing" = recordar haber hecho algo. "Remind" necesita a una persona como objeto.'),
      mc('c1-uoe1-02-5', 'raised', ['risen', 'arisen', 'lifted'], '"Raise questions about" = plantear dudas. "Rise" y "arise" no llevan objeto.'),
      mc('c1-uoe1-02-6', 'revised', ['reviewed', 'renewed', 'restored'], '"Revise procedures" = modificar, corregir. "Review" es revisar sin implicar cambios.'),
      mc('c1-uoe1-02-7', 'conduct', ['lead', 'direct', 'commit'], '"Conduct an identification / an interview / an experiment" = llevar a cabo.'),
      mc('c1-uoe1-02-8', 'difference', ['change', 'contrast', 'distinction'], 'Expresión fija: "make all the difference" = ser decisivo.'),
    ],
  },
]
