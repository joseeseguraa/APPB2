import type { MatchingExercise } from '../../types'

export const part7Exercises: MatchingExercise[] = [
  {
    id: 'rd7-01',
    kind: 'matching',
    title: 'Young entrepreneurs',
    focus: 'Cuatro testimonios, paráfrasis de ideas',
    intro: 'Four young people talk about starting their own business. For questions 1–10, choose from the people (A–D).',
    sections: [
      {
        title: 'Sofia',
        text: `I started making jewellery in my student flat, mainly as a way to relax between exams. I opened an online shop almost as a joke, and for the first year I sold practically nothing – maybe twenty pieces in total, most of them to relatives. Then a well-known fashion blogger happened to wear one of my necklaces in a video, and overnight I had more orders than I could cope with. I asked two old school friends to help me, and they still work with me today. People often ask me when the right moment is to start a business. My answer is always the same: there isn't one. If you wait until everything is perfect, you'll never do anything.`,
      },
      {
        title: 'Daniel',
        text: `The idea for my app came from a very ordinary situation. I needed a drill to put up some shelves, and I realised it was ridiculous to buy one I'd use for ten minutes when half my neighbours probably had one sitting in a cupboard. The app lets people lend and borrow tools from others who live nearby. Getting money to develop it was the hardest part – I lost count of the investors who said no, it must have been around forty, before one finally agreed to back me. Things are going well now, but I know a much larger company is working on something similar, and that keeps me awake at night sometimes.`,
      },
      {
        title: 'Amira',
        text: `I've always loved baking, and when I went vegan at sixteen I started experimenting with cakes that didn't use eggs or butter. Friends kept asking me to make them for parties, so I started selling them from home. My parents thought it was a nice hobby but kept reminding me that I needed a "proper job". Things changed when I entered a local competition for young businesspeople and won – the prize money was enough to rent a small shop. The hardest thing is the hours. I work most weekends and I hardly ever see my friends any more. But I'm doing something I love, so I can't really complain.`,
      },
      {
        title: 'Jack',
        text: `I was halfway through a law degree when I realised I was studying for a career I didn't actually want. I'd always been passionate about cycling, so I left university and set up a company organising bike tours in the mountains. For the first two years I lost money, and my business partner decided it wasn't for him and left. Looking back, though, I wouldn't change any of it. Every mistake taught me something – about pricing, about marketing, about people – that I couldn't have learnt any other way. Today the company is doing well, but I honestly think I learnt more from the bad years than the good ones.`,
      },
    ],
    questions: [
      { statement: 'mentions that one particular event transformed their business', answer: 0, explanation: 'Sofia: "a well-known fashion blogger happened to wear one of my necklaces… and overnight I had more orders…".' },
      { statement: 'had relatives who did not take the business seriously at first', answer: 2, explanation: 'Amira: sus padres pensaban que era "a nice hobby" y le recordaban que necesitaba "a proper job". Ojo: Sofia también menciona a familiares, pero como clientes, no como personas que dudaran.' },
      { statement: 'was rejected many times before getting financial support', answer: 1, explanation: 'Daniel: "around forty" inversores le dijeron que no "before one finally agreed to back me".' },
      { statement: 'gave up their studies in order to start the business', answer: 3, explanation: 'Jack: "I was halfway through a law degree… so I left university".' },
      { statement: 'got the idea for the business from a problem in their own life', answer: 1, explanation: 'Daniel: necesitaba un taladro para poner unas estanterías y vio que comprar uno era absurdo.' },
      { statement: 'works with people they knew before starting the business', answer: 0, explanation: 'Sofia: "I asked two old school friends to help me, and they still work with me today".' },
      { statement: 'has had to sacrifice part of their social life', answer: 2, explanation: 'Amira: "I work most weekends and I hardly ever see my friends any more".' },
      { statement: 'is worried about a possible rival', answer: 1, explanation: 'Daniel: "a much larger company is working on something similar, and that keeps me awake at night".' },
      { statement: 'believes that their failures were valuable', answer: 3, explanation: 'Jack: "Every mistake taught me something… I learnt more from the bad years than the good ones".' },
      { statement: 'advises others not to wait for ideal conditions', answer: 0, explanation: 'Sofia: "If you wait until everything is perfect, you\'ll never do anything".' },
    ],
  },
  {
    id: 'rd7-02',
    kind: 'matching',
    title: 'Four museums worth a visit',
    focus: 'Reseñas, información concreta y opiniones',
    intro: 'A travel writer describes four museums. For questions 1–10, choose from the museums (A–D).',
    sections: [
      {
        title: 'The Museum of Everyday Design',
        text: `Don't expect famous paintings here. This small museum is devoted to the ordinary objects we use without thinking: chairs, kettles, telephones, even toothbrushes. What makes it special is that many of the exhibits are there to be picked up and used – you can sit on a hundred years of chairs and decide for yourself which is the most comfortable. You can see everything in about an hour, which leaves plenty of time for the café on the top floor, where the homemade soup is reason enough to visit. Best of all, entry is free.`,
      },
      {
        title: 'The Science Factory',
        text: `This enormous building is aimed squarely at families, and on Saturday and Sunday afternoons it can feel as if every child in the country is inside, pressing every button at once. If you can, go on a weekday morning. Tickets aren't cheap, but they allow unlimited visits for a whole year, so if you live nearby they're excellent value. My own children, who are usually bored by museums within ten minutes, had to be dragged out at closing time.`,
      },
      {
        title: 'The Maritime Museum',
        text: `Housed inside a nineteenth-century sailing ship, this museum gives you a real sense of what life at sea was like. Be warned, though: the stairs between the decks are steep and narrow, and there is no lift, so people who have difficulty walking may struggle. The highlight is the guided tour. The guides are all retired sailors, and the stories they tell about their own years at sea – some funny, some frightening – bring the ship to life in a way that no information panel ever could.`,
      },
      {
        title: 'The Museum of Childhood',
        text: `This charming museum traces the history of toys and games over three centuries. Older visitors will almost certainly find something they once played with, and I have to admit that the sight of a doll identical to one I had as a little girl brought tears to my eyes. The museum has a lively programme of temporary exhibitions, which are replaced every three months, so there's always a reason to come back. Numbers inside are limited, so it's a good idea to reserve a time slot online before you go.`,
      },
    ],
    questions: [
      { statement: 'Visitors are allowed to handle some of the objects on display.', answer: 0, explanation: 'Everyday Design: "many of the exhibits are there to be picked up and used".' },
      { statement: 'It is best avoided at certain times.', answer: 1, explanation: 'Science Factory: los fines de semana por la tarde está lleno; "go on a weekday morning".' },
      { statement: 'Some visitors might find it physically difficult to get around.', answer: 2, explanation: 'Maritime: "the stairs… are steep and narrow, and there is no lift".' },
      { statement: "The staff's own experiences make the visit special.", answer: 2, explanation: 'Maritime: los guías son marineros retirados y cuentan sus propias historias.' },
      { statement: 'The writer describes having an emotional reaction.', answer: 3, explanation: 'Childhood: una muñeca igual a la suya "brought tears to my eyes".' },
      { statement: 'A ticket can be used more than once.', answer: 1, explanation: 'Science Factory: "they allow unlimited visits for a whole year". Ojo con la A: es gratis, pero no hay entrada que reutilizar.' },
      { statement: 'It does not take long to see the whole museum.', answer: 0, explanation: 'Everyday Design: "You can see everything in about an hour".' },
      { statement: 'Visitors are advised to book in advance.', answer: 3, explanation: 'Childhood: "it\'s a good idea to reserve a time slot online before you go".' },
      { statement: 'The writer recommends the food.', answer: 0, explanation: 'Everyday Design: "the homemade soup is reason enough to visit".' },
      { statement: 'Part of what is on show changes regularly.', answer: 3, explanation: 'Childhood: las exposiciones temporales "are replaced every three months".' },
    ],
  },
  {
    id: 'rd7-03',
    kind: 'matching',
    title: 'My gap year',
    focus: 'Experiencias personales, sentimientos y consecuencias',
    intro: 'Four people describe the year they took off between school and university. For questions 1–10, choose from the people (A–D).',
    sections: [
      {
        title: 'Lucía',
        text: `I spent eight months working on a sheep farm in New Zealand. The work was exhausting – up at five, outside in all weathers, lifting things I didn't know I could lift. But my English improved more in those months than in ten years of classes at school, simply because I had no choice but to use it all day. I shared a house with three other young workers from different countries, and we're still in touch; I've been to two of their weddings since. I came home far more independent than when I left.`,
      },
      {
        title: 'Marcus',
        text: `I volunteered at a primary school in a small town in Peru. At first I felt completely useless – I had no teaching experience, my Spanish was basic, and the children seemed to teach me more than I taught them. Gradually, though, I found ways to help, especially with English and sport. The biggest surprise was what it did to my plans. I'd been going to study engineering, but by the end of the year I knew I wanted to be a teacher. I changed my university application as soon as I got home.`,
      },
      {
        title: 'Hannah',
        text: `While my friends were posting photos from beaches in Thailand, I was working full-time at a supermarket in my home town, saving money for university. I'll be honest: there were days when I was really jealous of them. But when I started my degree, I was able to pay for my accommodation without borrowing anything, and now that I've graduated I have no debts at all. Some of my friends are still paying back loans. If I had to choose again, I'd make exactly the same decision.`,
      },
      {
        title: 'Omar',
        text: `I travelled around South-East Asia on my own for six months. I'd spent almost a year planning the route, researching visas and reading every guidebook I could find, so I thought I was well prepared. What I hadn't planned properly was my budget. Halfway through, I ran out of money and had to phone my parents and ask them to send me some – which was pretty embarrassing at nineteen. It was a valuable lesson, though. These days I keep a careful record of everything I spend.`,
      },
    ],
    questions: [
      { statement: 'decided on a different career as a result of the experience', answer: 1, explanation: 'Marcus: iba a estudiar ingeniería y decidió ser profesor.' },
      { statement: 'admits to having felt envious of other people', answer: 2, explanation: 'Hannah: "there were days when I was really jealous of them".' },
      { statement: 'needed help from their family', answer: 3, explanation: 'Omar: "had to phone my parents and ask them to send me some [money]".' },
      { statement: 'improved their knowledge of a foreign language', answer: 0, explanation: 'Lucía: "my English improved more in those months than in ten years of classes". Marcus menciona su español básico, pero no dice que mejorara.' },
      { statement: 'initially doubted whether they were making a useful contribution', answer: 1, explanation: 'Marcus: "At first I felt completely useless".' },
      { statement: 'would not change the choice they made', answer: 2, explanation: 'Hannah: "If I had to choose again, I\'d make exactly the same decision".' },
      { statement: 'spent a long time getting ready for the experience', answer: 3, explanation: 'Omar: "I\'d spent almost a year planning the route…".' },
      { statement: 'did work that was physically demanding', answer: 0, explanation: 'Lucía: "The work was exhausting… lifting things I didn\'t know I could lift".' },
      { statement: 'made friendships that have continued', answer: 0, explanation: 'Lucía: "we\'re still in touch; I\'ve been to two of their weddings since".' },
      { statement: 'became more careful with money afterwards', answer: 3, explanation: 'Omar: "These days I keep a careful record of everything I spend".' },
    ],
  },
]
