import type { MatchingExercise } from '../../../types'

export const c1Part6: MatchingExercise[] = [
  {
    id: 'c1-rd6-01',
    kind: 'matching',
    title: 'Should museums return objects to their countries of origin?',
    focus: 'Cuatro opiniones sobre el mismo tema',
    intro: 'You are going to read four extracts in which experts give their views on museums returning cultural objects. For questions 1–4, choose from the experts A–D. The experts may be chosen more than once.',
    marks: 2,
    sections: [
      {
        title: 'Expert A',
        text: `The case for returning objects taken during colonial rule seems to me overwhelming. These items were often removed by force or under conditions in which no genuine consent was possible, and their continued display in European capitals sends a message about who owns history. The usual objection, that the countries of origin lack the facilities to look after them, is not only patronising but increasingly inaccurate: many have built world-class museums in recent years. Where I would urge caution is in the process itself. Returns should be negotiated carefully, with proper research into each object's history, rather than announced as political gestures.`,
      },
      {
        title: 'Expert B',
        text: `I understand the moral argument, but I worry that the debate has become too simple. Great museums were founded on the principle that visitors should be able to see the cultures of the world side by side, and that principle still has value. If every object were sent back to the place it came from, we would lose something important. That said, there are clearly cases where an object has such deep religious or national significance that keeping it abroad is impossible to justify. In those cases, return should happen, and quickly. The rest could be shared through long-term loans and joint exhibitions.`,
      },
      {
        title: 'Expert C',
        text: `Museums have spent decades insisting that they are the best guardians of these collections, and that claim no longer convinces anyone. Several countries now have conservation expertise that equals or exceeds what is available in Europe. What concerns me more is the speed at which decisions are being made. Under pressure from campaigners and the media, some institutions have agreed to return objects without fully establishing where they came from or who has the right to receive them. A badly handled return can create new injustices, and that helps nobody.`,
      },
      {
        title: 'Expert D',
        text: `I am sceptical of the idea that an object "belongs" to a modern nation simply because it was made on territory that the nation now occupies. Borders and identities change over centuries, and many artefacts were traded perfectly legally. At the same time, I accept that some acquisitions were clearly theft, and those objects should go back without delay. Nor am I convinced that every country claiming an object is currently in a position to conserve it properly. My main objection is to the assumption that museums in former colonial powers cannot be trusted with world heritage. Many of them have cared for these objects for generations and made them available to millions of people.`,
      },
    ],
    questions: [
      { statement: 'Which expert has a different view from A about whether museums in the countries of origin can look after the objects?', answer: 3, explanation: 'A dice que el argumento de que no pueden cuidarlos es paternalista e inexacto. D cree que los museos europeos sí son dignos de confianza y han cuidado los objetos durante generaciones: la postura contraria. C coincide con A.' },
      { statement: 'Which expert shares C\'s concern about how decisions to return objects are made?', answer: 0, explanation: 'C se preocupa por la rapidez y por devolver sin investigar el origen. A pide negociar con cuidado e investigar la historia de cada objeto, "rather than announced as political gestures".' },
      { statement: 'Which expert expresses a similar view to D about objects that were clearly stolen?', answer: 1, explanation: 'D: lo robado debe volver "without delay". B: en los casos claros, la devolución debe hacerse "and quickly".' },
      { statement: 'Which expert, unlike the others, sees value in displaying objects from different cultures together?', answer: 1, explanation: 'B defiende el principio de ver las culturas del mundo "side by side" y propone préstamos en lugar de devoluciones generales.' },
    ],
  },
]
