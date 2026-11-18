import type { MatchingExercise } from '../../../types'

const intro = (topic: string, who: string) =>
  `You are going to read four extracts in which ${who} give their views on ${topic}. For questions 1–4, choose from the ${who} A–D. The ${who} may be chosen more than once.`

export const c1Part6D: MatchingExercise[] = [
  {
    id: 'c1-rd6-06',
    kind: 'matching',
    title: 'Celebrity activism',
    focus: 'Cuatro periodistas opinan',
    intro: intro('celebrities who campaign for political causes', 'journalists'),
    marks: 2,
    sections: [
      { title: 'A', text: `When a famous actor speaks out about climate change or refugees, millions of people pay attention who would never read a scientific report. That reach is valuable, and it would be foolish to dismiss it. My reservation is that celebrities rarely have expert knowledge, and they sometimes simplify complex issues to the point of distortion. The most effective campaigners are those who use their fame to direct attention towards genuine experts rather than speaking on their behalf.` },
      { title: 'B', text: `I find it hard to take seriously a pop star who lectures us about our carbon footprint from the window of a private jet. Hypocrisy of this kind does real damage, because it allows opponents to dismiss the cause along with the messenger. That said, I would defend any celebrity's right to express a view. They are citizens like everyone else, and the idea that they should "stick to entertainment" is both patronising and undemocratic.` },
      { title: 'C', text: `Celebrity involvement can transform the fortunes of a small charity overnight. I have seen organisations that struggled for years suddenly receive more donations in a week than in the previous decade. Whatever the motives of the stars involved, and they are not always pure, the money is real and so are the people it helps. Critics who complain about celebrity activism rarely offer an alternative that works as well.` },
      { title: 'D', text: `My concern is that celebrity activism turns serious political questions into a form of entertainment. Causes become fashionable and then, just as quickly, are forgotten when the next one comes along. Real change requires sustained effort over many years, not a viral video. I also worry about the way famous people are treated as moral authorities simply because they are well known. Being good at acting or singing does not make you an expert on foreign policy.` },
    ],
    questions: [
      { statement: 'Which journalist shares D\'s view that celebrities lack the necessary expertise?', answer: 0, explanation: 'D: ser buen actor no te hace experto. A: los famosos rara vez tienen conocimientos expertos.' },
      { statement: 'Which journalist takes a different view from the others about the practical benefits of celebrity activism?', answer: 2, explanation: 'C es el único que destaca un beneficio material concreto (donaciones) y lo defiende frente a los críticos.' },
      { statement: 'Which journalist, like C, accepts that celebrities\' motives may be questionable?', answer: 1, explanation: 'C: los motivos "are not always pure". B: critica la hipocresía del cantante en jet privado.' },
      { statement: 'Which journalist expresses a similar opinion to A about the power of fame to reach large audiences?', answer: 2, explanation: 'A: millones de personas prestan atención. C: una ONG pequeña puede transformarse de la noche a la mañana gracias a la atención de un famoso.' },
    ],
  },
  {
    id: 'c1-rd6-07',
    kind: 'matching',
    title: 'Is reading fiction a waste of time?',
    focus: 'Cuatro escritores opinan',
    intro: intro('the value of reading fiction', 'writers'),
    marks: 2,
    sections: [
      { title: 'A', text: `There is now good evidence that reading novels improves our ability to understand other people. When we follow a character's thoughts, we practise imagining the world from a perspective that is not our own. It is no coincidence that so many people say a book changed the way they saw a particular group. I would add only that this effect depends on reading serious literature; formulaic thrillers, however enjoyable, offer little of the same benefit.` },
      { title: 'B', text: `I am suspicious of attempts to justify fiction by its usefulness, as if novels were a kind of medicine. People have always read stories for pleasure, and that is reason enough. If reading also happens to make us more empathetic, so much the better, but the research is far less conclusive than its enthusiasts claim. Many highly literate people have behaved appallingly, after all.` },
      { title: 'C', text: `Fiction is one of the few places left where we are asked to concentrate on a single thing for hours. In an age of constant distraction, that alone makes it valuable. I do not much care whether people read literary classics or crime novels; what matters is the habit of sustained attention. A teenager absorbed in a fantasy series is developing a skill that will serve them far better than scrolling through short videos.` },
      { title: 'D', text: `The claim that novels make us better people strikes me as wishful thinking. Readers may feel more empathetic, but there is little evidence that they act more kindly. What fiction does offer, I think, is a way of thinking through difficult experiences at a safe distance: grief, betrayal, failure. That is not a moral benefit so much as a psychological one, and it is available in any genre, from romance to science fiction.` },
    ],
    questions: [
      { statement: 'Which writer shares B\'s doubts about whether reading fiction makes people behave better?', answer: 3, explanation: 'B: la investigación es menos concluyente de lo que se dice. D: hay poca evidencia de que los lectores actúen con más bondad.' },
      { statement: 'Which writer has a different view from A about the type of fiction people read?', answer: 2, explanation: 'A: solo la literatura seria tiene ese efecto. C: da igual clásicos o novela negra; lo que importa es la atención. (D también, pero C lo dice explícitamente.)' },
      { statement: 'Which writer, like A, believes fiction offers a clear psychological benefit?', answer: 3, explanation: 'A: mejora la capacidad de entender a otros. D: permite elaborar experiencias difíciles a distancia, "a psychological one".' },
      { statement: 'Which writer, unlike the others, focuses on the benefits of concentration?', answer: 2, explanation: 'C: la ficción exige concentración sostenida en una época de distracción.' },
    ],
  },
  {
    id: 'c1-rd6-08',
    kind: 'matching',
    title: 'Four-day school weeks',
    focus: 'Cuatro expertos en educación',
    intro: intro('introducing a four-day school week', 'experts'),
    marks: 2,
    sections: [
      { title: 'A', text: `Several rural districts have already moved to a four-day week, mainly to save money on transport and heating, and to attract teachers who are in short supply. Early results suggest that teacher recruitment has indeed improved. However, the effect on pupils is less clear, and some studies show a small decline in maths scores. Before any wider introduction, we need far more reliable data, particularly about the impact on younger children.` },
      { title: 'B', text: `For working parents, a four-day school week would be a logistical nightmare. Who will look after the children on the fifth day? Wealthier families will pay for clubs and activities, while poorer ones will leave children at home or with relatives. The likely result is a wider gap between advantaged and disadvantaged pupils, which is the opposite of what education policy should be trying to achieve.` },
      { title: 'C', text: `Teachers are exhausted, and many are leaving the profession within a few years of qualifying. A four-day week, with longer days, could give them time to plan, rest and recover. I believe it would improve the quality of teaching considerably. Of course, schools would need to provide affordable care on the fifth day for families who need it; otherwise the reform would simply shift the burden onto parents.` },
      { title: 'D', text: `The evidence from countries that have tried shorter weeks is mixed at best. Some pupils clearly benefit from the extra rest, but others, especially those who struggle academically, lose valuable contact time with teachers. Longer school days are not a perfect substitute, because concentration declines in the afternoon. I would rather see the money spent on smaller classes, which have a much stronger record of success.` },
    ],
    questions: [
      { statement: 'Which expert, like A, mentions the benefit for teacher recruitment and retention?', answer: 2, explanation: 'A: mejora la contratación de profesores. C: los profesores abandonan la profesión; la semana corta les daría descanso.' },
      { statement: 'Which expert shares B\'s concern about the impact on families?', answer: 2, explanation: 'B: ¿quién cuida a los niños el quinto día? C: habría que ofrecer cuidado asequible o la carga recaería en los padres.' },
      { statement: 'Which expert has a similar view to A about the possible effect on pupils\' results?', answer: 3, explanation: 'A: algunos estudios muestran un pequeño descenso en matemáticas. D: los alumnos con dificultades pierden tiempo con el profesor.' },
      { statement: 'Which expert proposes an alternative use of resources?', answer: 3, explanation: 'D: preferiría gastar el dinero en clases más pequeñas.' },
    ],
  },
]
