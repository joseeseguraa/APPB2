import type { MatchingExercise } from '../../../types'

const intro = (topic: string, who: string) =>
  `You are going to read four extracts in which ${who} give their views on ${topic}. For questions 1–4, choose from the ${who} A–D. The ${who} may be chosen more than once.`

export const c1Part6C: MatchingExercise[] = [
  {
    id: 'c1-rd6-03',
    kind: 'matching',
    title: 'Artificial intelligence in schools',
    focus: 'Cuatro educadores opinan',
    intro: intro('the use of artificial intelligence in schools', 'educators'),
    marks: 2,
    sections: [
      {
        title: 'A',
        text: `Banning AI tools in schools would be both pointless and counterproductive. Students already use them at home, and pretending otherwise only teaches them to hide what they are doing. Far better to teach them how these tools work, where they fail and how to check what they produce. My main concern lies elsewhere: teachers are being asked to adapt to a technology that changes every few months, with almost no training. Without proper support, even the most enthusiastic staff will struggle to use it well.`,
      },
      {
        title: 'B',
        text: `I worry that we are rushing to adopt AI without asking what it does to learning. Writing an essay is not just about producing a text; it is about learning to think. If a machine does the difficult part, students lose the very struggle that makes them better thinkers. That said, I accept that AI can be extremely useful for teachers themselves, for example in preparing materials or giving quick feedback on grammar. The danger is when it replaces effort rather than supporting it.`,
      },
      {
        title: 'C',
        text: `The debate is often framed as if AI were a threat to education, but I see it as an opportunity. Students who would never ask a question in front of the class will happily ask a chatbot, and many find that it explains things more patiently than a busy teacher can. Of course, it makes mistakes, and students need to understand that. But the same is true of textbooks and websites. What schools lack is not rules but time to train teachers properly, and that is where investment is urgently needed.`,
      },
      {
        title: 'D',
        text: `I have no objection to AI in principle, but I have seen how quickly students come to rely on it. Some can no longer start a piece of writing without asking a program for ideas. Thinking for yourself is a habit, and habits are formed young. For that reason, I would keep AI out of primary schools altogether and introduce it gradually with older students, under close supervision. Teachers, meanwhile, should feel free to use it for their own planning, where it can save hours.`,
      },
    ],
    questions: [
      { statement: 'Which educator shares A\'s view on the lack of preparation for teachers?', answer: 2, explanation: 'A: los profesores tienen que adaptarse "with almost no training". C: lo que falta es "time to train teachers properly".' },
      { statement: 'Which educator has a different opinion from the others about banning AI for some students?', answer: 3, explanation: 'D es el único que propone dejar la IA fuera de primaria. A dice que prohibirla sería contraproducente.' },
      { statement: 'Which educator expresses a similar view to B about AI being useful for teachers\' own work?', answer: 3, explanation: 'B: útil para preparar materiales. D: los profesores pueden usarla para planificar, "where it can save hours".' },
      { statement: 'Which educator shares D\'s concern that students may become too dependent on AI?', answer: 1, explanation: 'D: los alumnos se acostumbran a depender de ella. B: si la máquina hace lo difícil, pierden el esfuerzo que les hace pensar.' },
    ],
  },
  {
    id: 'c1-rd6-04',
    kind: 'matching',
    title: 'Tourism in historic cities',
    focus: 'Cuatro urbanistas opinan',
    intro: intro('mass tourism in historic cities', 'urban planners'),
    marks: 2,
    sections: [
      {
        title: 'A',
        text: `Cities like Venice and Barcelona are victims of their own success. Residents are being priced out of their neighbourhoods as flats are turned into holiday rentals, and local shops are replaced by souvenir stands. Limiting the number of visitors is the only realistic solution, however unpopular it may be with the tourism industry. Daily caps and entry fees have worked elsewhere, and I see no reason why they should not work here. What we cannot do is continue to pretend that growth is always good.`,
      },
      {
        title: 'B',
        text: `Tourism pays for a great deal of what makes these cities special. The money visitors spend helps restore buildings, fund museums and keep public transport running. Restricting numbers risks turning historic centres into exclusive playgrounds for the wealthy. The real problem is not the number of tourists but where they go: everyone crowds into the same three streets. Encouraging visitors to explore other districts and to travel outside the peak season would spread the benefits more fairly.`,
      },
      {
        title: 'C',
        text: `I am in favour of entry fees, but only if the money raised goes directly to residents, for example through affordable housing. Otherwise, they simply become another tax that does nothing to tackle the underlying problem. The most urgent issue, in my view, is short-term rentals. Every apartment rented to tourists is one fewer for local families, and until cities regulate this market strictly, other measures will have little effect.`,
      },
      {
        title: 'D',
        text: `We should be careful about blaming tourists for problems that have many causes. Rising rents in historic cities are also driven by investment, by the decline of traditional industries and by the attraction of city life for young professionals. That said, the explosion of holiday rentals has clearly made things worse, and stricter rules are long overdue. Caps on visitor numbers, however, seem to me a blunt tool that punishes visitors without addressing the real causes.`,
      },
    ],
    questions: [
      { statement: 'Which planner disagrees with A about limiting visitor numbers and proposes spreading visitors more widely instead?', answer: 1, explanation: 'A: limitar visitantes es la única solución. B: el problema es dónde van, no cuántos, y propone repartirlos por otros barrios y temporadas.' },
      { statement: 'Which planner shares C\'s view that holiday rentals need to be strictly controlled?', answer: 3, explanation: 'C: hay que regular los alquileres turísticos. D: "stricter rules are long overdue".' },
      { statement: 'Which planner, like B, suggests that tourism is not the only cause of the problems?', answer: 3, explanation: 'D: los alquileres suben también por inversión, declive industrial y jóvenes profesionales.' },
      { statement: 'Which planner expresses a different view from the others about entry fees?', answer: 2, explanation: 'C acepta las tasas solo si el dinero va a los vecinos; si no, son "another tax". A las defiende sin condiciones, B y D no las apoyan.' },
    ],
  },
  {
    id: 'c1-rd6-05',
    kind: 'matching',
    title: 'Should sport be compulsory at university?',
    focus: 'Cuatro profesores opinan',
    intro: intro('compulsory physical activity for university students', 'lecturers'),
    marks: 2,
    sections: [
      {
        title: 'A',
        text: `Students today spend most of their time sitting: in lectures, in the library, in front of screens. The health consequences are well documented, and universities have a duty of care. Making some form of physical activity compulsory, as part of the timetable, would send a clear message that well-being matters. It need not mean competitive sport; yoga, dance or walking groups would all count. Students may grumble at first, but most would, I suspect, come to appreciate it.`,
      },
      {
        title: 'B',
        text: `Universities are not schools, and students are adults who are entitled to make their own choices. I am all in favour of promoting exercise, and many institutions could do far more to make their sports facilities affordable and welcoming. But compulsion is the wrong approach. People who are forced to exercise rarely continue once the obligation ends, whereas those who choose an activity they enjoy are far more likely to keep it up.`,
      },
      {
        title: 'C',
        text: `The evidence that exercise improves concentration and mental health is overwhelming, and I have seen the effect on my own students. Those who are physically active tend to cope better with exam stress. I would stop short of making it compulsory, though. Instead, universities should build physical activity into everyday life, for example by offering free classes between lectures and designing campuses that encourage walking and cycling.`,
      },
      {
        title: 'D',
        text: `This proposal ignores the realities of student life. Many students work long hours to pay their rent, and some have caring responsibilities at home. Adding a compulsory activity to an already crowded week would put further pressure on precisely those who have the least time. If universities are genuinely concerned about students\' health, they should start by addressing the financial pressures that leave students exhausted in the first place.`,
      },
    ],
    questions: [
      { statement: 'Which lecturer, like A, refers to evidence about the effects of physical activity?', answer: 2, explanation: 'A: las consecuencias para la salud "are well documented". C: "The evidence… is overwhelming".' },
      { statement: 'Which lecturer has a different view from the others about whether compulsory exercise would be appreciated by students?', answer: 0, explanation: 'A cree que los estudiantes acabarían apreciándolo; B, C y D están en contra de la obligatoriedad.' },
      { statement: 'Which lecturer, like B, thinks universities should make exercise easier rather than compulsory?', answer: 2, explanation: 'B: instalaciones asequibles y acogedoras. C: clases gratis entre clases y campus pensados para caminar y pedalear.' },
      { statement: 'Which lecturer raises a concern about students\' lack of time that none of the others mentions?', answer: 3, explanation: 'D: muchos trabajan o cuidan de familiares y no tienen tiempo.' },
    ],
  },
]
