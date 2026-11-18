import type { MatchingExercise } from '../../types'

export const part7ExercisesC: MatchingExercise[] = [
  {
    id: 'rd7-07',
    kind: 'matching',
    title: 'Working from home',
    focus: 'Cuatro testimonios: ventajas, problemas y hábitos',
    intro: 'Four people describe their experience of working from home. For questions 1–10, choose from the people (A–D).',
    sections: [
      {
        title: 'Lucy, graphic designer',
        text: `When my company told us we could work from home permanently, I was delighted. No more ninety-minute commute, no more expensive sandwiches. For the first few months it was wonderful. Then I started to notice that I was talking to nobody all day. I'd go from Monday to Friday without having a proper conversation. In the end I joined a shared office space in town, where I rent a desk three days a week. It costs me money, but I'm a much happier person. I've also become friends with a couple of the other people who work there, which I never expected.`,
      },
      {
        title: 'Daniel, software developer',
        text: `For me, working from home has been nothing but positive. I'm someone who needs silence to concentrate, and the office was always noisy, with phones ringing and people chatting. At home I can work for hours without interruption, and I'm sure I produce more than I used to. The only thing I had to learn was to stop. At first I'd find myself answering emails at eleven at night. Now I have a rule: when I close the laptop at six, that's it. I even put it away in a cupboard so I can't see it.`,
      },
      {
        title: 'Amira, sales manager',
        text: `I have three children, so working from home has been a mixed experience. In some ways it's made life much easier. I can take the kids to school and be back at my desk by nine, and I'm there when they come home. But it's hard to concentrate when there's always something that needs doing in the house. My manager has been very understanding, and I've arranged my hours so I do my most demanding work early in the morning, before anyone else is awake. I'd never go back to the office full-time, though.`,
      },
      {
        title: 'Joe, accountant',
        text: `I was probably the only person in my department who was disappointed when the office closed. I'm twenty-four and I live in a small flat with two flatmates, so I've been working from my bedroom, which isn't ideal. I also feel I've missed out on learning from more experienced colleagues. In an office you pick things up just by listening to other people. Online, you have to ask, and I don't always want to bother people. My company has now started bringing everyone in on Wednesdays, and I've noticed how much more I learn on those days.`,
      },
    ],
    questions: [
      { statement: 'pays for a place to work outside the home', answer: 0, explanation: 'Lucy: "I rent a desk three days a week. It costs me money".' },
      { statement: 'finds it easier to concentrate at home than at work', answer: 1, explanation: 'Daniel: en la oficina había ruido; en casa trabaja horas sin interrupciones. Amira dice lo contrario: le cuesta concentrarse en casa.' },
      { statement: 'believes their career development has suffered', answer: 3, explanation: 'Joe: "I feel I\'ve missed out on learning from more experienced colleagues".' },
      { statement: 'had difficulty separating work from free time', answer: 1, explanation: 'Daniel: respondía emails a las once de la noche; ahora guarda el portátil en un armario.' },
      { statement: 'has organised their working day around other responsibilities', answer: 2, explanation: 'Amira: lleva a los niños al colegio y hace el trabajo más exigente antes de que se despierten.' },
      { statement: 'felt lonely after a while', answer: 0, explanation: 'Lucy: pasaba la semana entera sin una conversación de verdad.' },
      { statement: 'does not have suitable space at home', answer: 3, explanation: 'Joe: trabaja en su dormitorio en un piso compartido, "which isn\'t ideal".' },
      { statement: 'mentions the support of someone at work', answer: 2, explanation: 'Amira: "My manager has been very understanding".' },
      { statement: 'made new friends unexpectedly', answer: 0, explanation: 'Lucy: se ha hecho amiga de gente del espacio compartido, "which I never expected".' },
      { statement: 'reacted differently from their colleagues to the news', answer: 3, explanation: 'Joe: "I was probably the only person in my department who was disappointed".' },
    ],
  },
  {
    id: 'rd7-08',
    kind: 'matching',
    title: 'Four unusual museums',
    focus: 'Guía de viaje: detalles y opiniones',
    intro: 'You are going to read about four small museums. For questions 1–10, choose from the museums (A–D).',
    sections: [
      {
        title: 'The Museum of Broken Things',
        text: `This tiny museum, run by a retired couple in their former bakery, displays objects that people have broken and the stories behind them: a teapot smashed during a family argument, a guitar that fell off a stage. Visitors are invited to bring their own broken objects and write down what happened. The best are added to the collection. It sounds odd, but it's surprisingly moving. Entry is free, although donations are welcome. Open weekends only.`,
      },
      {
        title: 'The Lighthouse Museum',
        text: `Housed in a working lighthouse on a rocky headland, this museum tells the story of the keepers who lived here before the light became automatic. The rooms have been kept exactly as they were in the 1950s. The highlight is the climb to the top, 112 steps, which rewards you with spectacular views, though it is not recommended for anyone who dislikes heights. Guided tours run every hour, and booking is essential in summer as numbers are limited.`,
      },
      {
        title: 'The Toy Library',
        text: `Part museum, part playroom, the Toy Library has over three thousand toys from the last two centuries, and unlike most museums, you can actually play with many of them. Children love it, of course, but it's adults who often stay longest, rediscovering games from their own childhood. There is a small café and a shop selling traditional wooden toys. It gets very busy during school holidays, so come early or late in the day if you can.`,
      },
      {
        title: 'The Sound Archive',
        text: `This modern museum, opened only last year, collects recordings of sounds that are disappearing: old telephones ringing, typewriters, the calls of birds that are now rare. Visitors wear headphones and move through a series of dark rooms where the sounds are played. Some people find the experience relaxing; others find it rather strange. Either way, it is unlike anything else. Allow at least an hour, and note that the museum is closed on Mondays.`,
      },
    ],
    questions: [
      { statement: 'allows visitors to contribute to the collection', answer: 0, explanation: 'Museum of Broken Things: los visitantes pueden traer sus objetos rotos y los mejores se añaden a la colección.' },
      { statement: 'may not suit people with a particular fear', answer: 1, explanation: 'Lighthouse: la subida "is not recommended for anyone who dislikes heights".' },
      { statement: 'is often enjoyed more by adults than expected', answer: 2, explanation: 'Toy Library: "it\'s adults who often stay longest".' },
      { statement: 'has not been open for very long', answer: 3, explanation: 'Sound Archive: "opened only last year".' },
      { statement: 'does not charge an entrance fee', answer: 0, explanation: 'Museum of Broken Things: "Entry is free".' },
      { statement: 'requires visitors to reserve a place at certain times of year', answer: 1, explanation: 'Lighthouse: "booking is essential in summer".' },
      { statement: 'produces different reactions in different visitors', answer: 3, explanation: 'Sound Archive: a unos les relaja y a otros les parece raro.' },
      { statement: 'is located in a building that used to have a different purpose', answer: 0, explanation: 'Museum of Broken Things: está en una antigua panadería. El faro sigue funcionando ("a working lighthouse").' },
      { statement: 'lets visitors touch the items on display', answer: 2, explanation: 'Toy Library: "you can actually play with many of them".' },
      { statement: 'has preserved rooms as they were in the past', answer: 1, explanation: 'Lighthouse: las habitaciones están como en los años 50.' },
    ],
  },
]
