import type { WordFormationExercise } from '../../../types'

export const c1Part3: WordFormationExercise[] = [
  {
    id: 'c1-uoe3-01',
    kind: 'word-formation',
    title: 'Citizen scientists',
    focus: 'Prefijos y sufijos dobles',
    text: `In the past, scientific research was carried out almost {1} by professionals in universities and laboratories. Today, thanks to the internet, ordinary people are making a {2} contribution to science. Volunteers count birds in their gardens, classify galaxies from their sofas and report the first flowers of spring, providing data on a scale that would otherwise be {3}. Some projects have attracted hundreds of thousands of participants, whose {4} has surprised even the scientists who set them up. Critics initially questioned the {5} of data collected by amateurs, but studies have shown that, with clear instructions, volunteers can be just as accurate as experts. For many participants, the experience is deeply {6}. It gives them a sense of purpose and a better {7} of how science works. And for researchers, the benefits go beyond data: projects like these help to build public trust in science at a time when {8} is all too common.`,
    gaps: [
      { stem: 'EXCLUDE', answers: ['exclusively'], explanation: 'Adverbio que modifica a "carried out": exclusively (exclusivamente). Cambio interno: exclude → exclusive.' },
      { stem: 'SIGNIFY', answers: ['significant'], explanation: 'Adjetivo delante de "contribution": significant (importante).' },
      { stem: 'AFFORD', answers: ['unaffordable'], explanation: 'Sentido negativo: sin voluntarios sería imposible de pagar. Prefijo un- y sufijo -able.' },
      { stem: 'ENTHUSE', answers: ['enthusiasm'], explanation: 'Después de "whose" hace falta un sustantivo: enthusiasm (entusiasmo). El verbo es "enthuse".' },
      { stem: 'RELY', answers: ['reliability'], explanation: '"The + sustantivo + of": reliability (fiabilidad). Rely → reliable → reliability.' },
      { stem: 'REWARD', answers: ['rewarding'], explanation: '"Deeply + adjetivo": rewarding (gratificante).' },
      { stem: 'UNDERSTAND', answers: ['understanding'], explanation: '"A better + sustantivo + of": understanding (comprensión).' },
      { stem: 'TRUST', answers: ['mistrust', 'distrust'], explanation: 'Sustantivo con sentido negativo: mistrust / distrust (desconfianza).' },
    ],
  },
  {
    id: 'c1-uoe3-02',
    kind: 'word-formation',
    title: 'The architecture of silence',
    focus: 'Cambios internos y palabras compuestas',
    text: `Modern cities are {1} noisy places. Traffic, construction and crowds create a constant background roar that most residents have learnt to ignore. But research suggests that this noise has a {2} effect on our health, raising stress levels and disturbing sleep. In response, a new generation of architects is designing buildings with silence in mind. Their work is not simply about {3} walls. It involves careful thought about the {4} of rooms, the materials used and even the sounds that are allowed in, such as running water or birdsong. One of the most {5} examples is a library in Copenhagen whose reading room seems to float above the street, completely cut off from the noise below. Visitors describe the experience as almost {6}. Of course, such projects are expensive, and critics argue that quiet has become a luxury available only to the {7}. Supporters reply that good acoustic design need not be costly, and that silence should be treated not as a privilege but as a basic {8} of urban life.`,
    gaps: [
      { stem: 'NOTORIOUS', answers: ['notoriously'], explanation: 'Adverbio que modifica a "noisy": notoriously (conocidas por ser ruidosas).' },
      { stem: 'HARM', answers: ['harmful'], explanation: 'Adjetivo delante de "effect": harmful (perjudicial).' },
      { stem: 'THICK', answers: ['thickening', 'thicker'], explanation: '"About + -ing": thickening walls (engrosar las paredes). También "thicker walls" (paredes más gruesas).' },
      { stem: 'ARRANGE', answers: ['arrangement', 'arrangements'], explanation: '"The + sustantivo + of": arrangement (la distribución de las habitaciones).' },
      { stem: 'STRIKE', answers: ['striking'], explanation: '"One of the most + adjetivo": striking (llamativo, impresionante).' },
      { stem: 'SPIRIT', answers: ['spiritual'], explanation: '"Almost + adjetivo": spiritual (espiritual).' },
      { stem: 'WEALTH', answers: ['wealthy'], explanation: '"The + adjetivo" para referirse a un grupo de personas: the wealthy (los ricos).' },
      { stem: 'REQUIRE', answers: ['requirement'], explanation: '"A basic + sustantivo": requirement (requisito, necesidad).' },
    ],
  },
]
