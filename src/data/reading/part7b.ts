import type { MatchingExercise } from '../../types'

export const part7ExercisesB: MatchingExercise[] = [
  {
    id: 'rd7-04',
    kind: 'matching',
    title: 'Learning a language later in life',
    focus: 'Cuatro testimonios · motivos y métodos',
    intro: 'Four adults describe learning a new language. For questions 1–10, choose from the people (A–D).',
    sections: [
      {
        title: 'Helen',
        text: `I started learning Japanese at fifty-five, after my son moved to Osaka and married a woman whose parents speak no English. I couldn't bear the idea of sitting at family meals unable to say anything. I took evening classes for two years, and I'll admit the writing system nearly defeated me. What made the difference was a weekly video call with my daughter-in-law's mother. Neither of us spoke the other's language well, so we had to be very patient, and we laughed a lot. We're good friends now.`,
      },
      {
        title: 'Marco',
        text: `For me, learning German was purely practical: my company opened an office in Munich and I was offered a promotion if I could work there. I hired a private teacher and studied every morning before work, using an app on the train. The first six months were the most tiring of my life. I didn't enjoy it much, to be honest, but it worked. I got the job, and now I use German every day. I still make plenty of mistakes, but people are generally kind about it.`,
      },
      {
        title: 'Priya',
        text: `I had always wanted to read Spanish novels in the original, so when I retired I finally had the time. I didn't take any classes. Instead, I started with children's books, then moved on to simple novels, looking up every word I didn't know. It was slow, but I loved it. My speaking is still quite poor, because I rarely have the chance to practise, but I can read almost anything now. Last year I read a nine-hundred-page novel in Spanish, which I would never have believed possible.`,
      },
      {
        title: 'Tom',
        text: `I'd failed French at school and had always believed I simply wasn't good at languages. Then, at forty, I spent three months in Montreal for work. I had no choice but to speak French, and I discovered that I could actually do it. The key was that nobody was marking me. I made mistakes all the time, but people understood me, and that was enough. I came home with much more confidence, and not just in French. It changed the way I saw myself.`,
      },
    ],
    questions: [
      { statement: 'learnt the language in order to progress in their career', answer: 1, explanation: 'Marco: "I was offered a promotion if I could work there".' },
      { statement: 'had a negative experience of language learning at school', answer: 3, explanation: 'Tom: "I\'d failed French at school and had always believed I simply wasn\'t good at languages".' },
      { statement: 'is better at one language skill than another', answer: 2, explanation: 'Priya: "My speaking is still quite poor… but I can read almost anything now".' },
      { statement: 'formed a close relationship through the language', answer: 0, explanation: 'Helen: con la madre de su nuera, "We\'re good friends now".' },
      { statement: 'found one aspect of the language particularly hard', answer: 0, explanation: 'Helen: "the writing system nearly defeated me".' },
      { statement: 'admits that they did not find the process enjoyable', answer: 1, explanation: 'Marco: "I didn\'t enjoy it much, to be honest, but it worked".' },
      { statement: 'taught themselves without a teacher', answer: 2, explanation: 'Priya: "I didn\'t take any classes", aprendió leyendo. Marco tuvo profesor particular.' },
      { statement: 'gained confidence that went beyond language', answer: 3, explanation: 'Tom: "I came home with much more confidence, and not just in French. It changed the way I saw myself".' },
      { statement: 'was motivated by a wish to communicate with family members', answer: 0, explanation: 'Helen: no quería estar en las comidas familiares sin poder decir nada.' },
      { statement: 'achieved something they had thought was beyond them', answer: 2, explanation: 'Priya: leyó una novela de 900 páginas, "which I would never have believed possible". Tom también se sorprende, pero lo que destaca él es la confianza, no un logro concreto.' },
    ],
  },
  {
    id: 'rd7-05',
    kind: 'matching',
    title: 'Four festivals',
    focus: 'Reseñas · información práctica y opiniones',
    intro: 'A journalist reviews four summer festivals. For questions 1–10, choose from the festivals (A–D).',
    sections: [
      {
        title: 'Harbour Lights',
        text: `This small seaside festival is the ideal choice for families. The music is gentle rather than loud, and there are activities for children all day, from face painting to circus workshops. Tickets are among the cheapest I have seen, and under-twelves get in free. My only complaint is the food: the choice is very limited, so it is worth bringing a picnic. The highlight is the final night, when hundreds of lanterns are released over the water.`,
      },
      {
        title: 'Northfield',
        text: `Northfield is the biggest festival on the list, with more than two hundred acts across eight stages. If you want to see famous names, this is the place, but be prepared for crowds. Getting near the front for the headline acts means arriving hours early. Camping is included in the ticket price, although the showers are often out of order by the second day. Go with friends, and bring good boots: it almost always rains.`,
      },
      {
        title: 'Riverside Words',
        text: `Strictly speaking, this is a literature festival, although there is plenty of music in the evenings. During the day, well-known authors give talks and readings in tents along the river. Many events sell out weeks in advance, so book early. What I liked most was how easy it was to meet the writers: several of them were simply wandering around the site, happy to chat. The organisers have also made a real effort to reduce waste, and there are no plastic cups anywhere.`,
      },
      {
        title: 'Sound Garden',
        text: `Set in the grounds of an old country house, Sound Garden focuses on electronic music and runs non-stop from Friday afternoon to Monday morning. It is not cheap, and the location is difficult to reach without a car, although there is a shuttle bus from the nearest station. The atmosphere, however, is unlike anything else I have experienced: friendly, relaxed and completely without the aggression you sometimes find at larger events. The food stalls are excellent.`,
      },
    ],
    questions: [
      { statement: 'Advance booking is recommended for some events.', answer: 2, explanation: 'Riverside Words: "Many events sell out weeks in advance, so book early".' },
      { statement: 'Children do not have to pay.', answer: 0, explanation: 'Harbour Lights: "under-twelves get in free".' },
      { statement: 'The writer recommends taking your own food.', answer: 0, explanation: 'Harbour Lights: "it is worth bringing a picnic". En Sound Garden, en cambio, la comida es excelente.' },
      { statement: 'It can be hard to get a good view of the main performers.', answer: 1, explanation: 'Northfield: "Getting near the front for the headline acts means arriving hours early".' },
      { statement: 'The weather is usually poor.', answer: 1, explanation: 'Northfield: "it almost always rains".' },
      { statement: 'Visitors can talk informally to the people performing.', answer: 2, explanation: 'Riverside Words: los escritores paseaban por el recinto "happy to chat".' },
      { statement: 'The festival makes an effort to be environmentally friendly.', answer: 2, explanation: 'Riverside Words: "a real effort to reduce waste… no plastic cups".' },
      { statement: 'Getting there without your own transport is not easy.', answer: 3, explanation: 'Sound Garden: "difficult to reach without a car", aunque hay un autobús lanzadera.' },
      { statement: 'Some of the facilities do not work properly.', answer: 1, explanation: 'Northfield: "the showers are often out of order by the second day".' },
      { statement: 'The writer praises the behaviour of the people attending.', answer: 3, explanation: 'Sound Garden: ambiente "friendly, relaxed… without the aggression you sometimes find at larger events".' },
    ],
  },
  {
    id: 'rd7-06',
    kind: 'matching',
    title: 'Working from anywhere',
    focus: 'Cuatro opiniones · ventajas e inconvenientes',
    intro: 'Four people talk about working remotely. For questions 1–10, choose from the people (A–D).',
    sections: [
      {
        title: 'Aisha, graphic designer',
        text: `I've worked from home for six years, and I wouldn't go back. The biggest advantage for me is that I can choose when I work. I'm at my best late at night, which never suited an office. The downside is that it's easy to forget to stop. In the early days I often worked twelve-hour days without noticing. Now I have strict rules: the laptop goes in a drawer at eight o'clock, and I don't check emails at weekends.`,
      },
      {
        title: 'Daniel, software engineer',
        text: `My team is spread across five countries, so working remotely is the only option. Technically it works well, but I miss the casual conversations you have in an office. Ideas often come out of those chats by the coffee machine. We try to make up for it with a virtual coffee break every Friday, which sounds silly but actually helps. Twice a year the whole team meets in person, and those weeks are always the most productive.`,
      },
      {
        title: 'Rosa, accountant',
        text: `I was very sceptical at first. I live in a small flat with two teenagers, and I couldn't imagine getting any work done. In the end I rented a desk in a shared workspace near my home. It costs money, but it gives me the separation between work and home that I need, and I've met interesting people there. I save almost two hours a day by not commuting into the city centre, which has made a huge difference to my quality of life.`,
      },
      {
        title: 'Lewis, sales manager',
        text: `Honestly, remote working isn't for me. I tried it for a year and found it very lonely. I'm someone who gets energy from being around other people, and I struggled to stay motivated on my own. My company now lets us choose, and I go into the office four days a week. I know I'm in the minority, but I think it's important that people are allowed to work in whatever way suits them best.`,
      },
    ],
    questions: [
      { statement: 'had doubts about whether remote working would be possible for them', answer: 2, explanation: 'Rosa: "I was very sceptical at first… I couldn\'t imagine getting any work done".' },
      { statement: 'has introduced personal limits on working hours', answer: 0, explanation: 'Aisha: "the laptop goes in a drawer at eight o\'clock".' },
      { statement: 'misses informal contact with colleagues', answer: 1, explanation: 'Daniel: "I miss the casual conversations you have in an office". Lewis habla de soledad en general, no de las charlas con compañeros.' },
      { statement: 'pays for a place to work', answer: 2, explanation: 'Rosa: alquila un puesto en un espacio compartido, "It costs money".' },
      { statement: 'prefers working at unusual times of day', answer: 0, explanation: 'Aisha: "I\'m at my best late at night".' },
      { statement: 'believes employees should be free to choose how they work', answer: 3, explanation: 'Lewis: "people are allowed to work in whatever way suits them best".' },
      { statement: 'says a less serious activity has had a useful effect', answer: 1, explanation: 'Daniel: la pausa virtual para el café "sounds silly but actually helps".' },
      { statement: 'found it difficult to keep going without other people around', answer: 3, explanation: 'Lewis: "I struggled to stay motivated on my own".' },
      { statement: 'mentions time saved on travel', answer: 2, explanation: 'Rosa: "I save almost two hours a day by not commuting".' },
      { statement: 'has no option but to work remotely', answer: 1, explanation: 'Daniel: su equipo está en cinco países, "remote working is the only option".' },
    ],
  },
]
