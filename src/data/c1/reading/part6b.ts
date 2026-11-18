import type { MatchingExercise } from '../../../types'

export const c1Part6B: MatchingExercise[] = [
  {
    id: 'c1-rd6-02',
    kind: 'matching',
    title: 'Homework: help or hindrance?',
    focus: 'Cuatro educadores opinan',
    intro: 'You are going to read four extracts in which teachers give their views on homework. For questions 1–4, choose from the teachers A–D. The teachers may be chosen more than once.',
    marks: 2,
    sections: [
      {
        title: 'Teacher A',
        text: `The research on homework for younger children is fairly clear: it makes very little difference to how well they do at school. For teenagers the picture is different, and well-designed tasks can consolidate what has been learnt in class. The problem is that much of the homework set in schools is not well designed at all. It is given because parents expect it, not because it serves a purpose. I would rather see less homework of higher quality, and I think most students would put in more effort if they could see the point of what they were asked to do.`,
      },
      {
        title: 'Teacher B',
        text: `I am tired of hearing that homework is a waste of time. Independent study is a skill like any other, and students who never practise it arrive at university unable to organise their own learning. Of course some homework is pointless, but that is an argument for better homework, not for none at all. What does worry me is the inequality it can create. A child with a quiet room and educated parents has an enormous advantage over one who shares a bedroom with three siblings, and schools should provide supervised study spaces to reduce that gap.`,
      },
      {
        title: 'Teacher C',
        text: `For primary pupils, I see no justification for regular homework. Children of that age need to play, to read for pleasure and to spend time with their families, and the evidence that homework improves their results is extremely weak. With older students I am less certain. Some benefit from extra practice, but others simply copy answers from the internet, which teaches them nothing. Whatever we decide, the amount of homework should be agreed between teachers so that students are not overwhelmed by several large tasks on the same night.`,
      },
      {
        title: 'Teacher D',
        text: `Homework has become a battleground between parents and schools, and the children are caught in the middle. In my experience, the quality of a task matters far more than its length. A short, thoughtful activity that asks students to apply an idea to their own lives is worth more than hours of exercises. I also think we underestimate how much homework depends on home circumstances. Not every family can offer support or even a table to work at, and it is unfair to mark students down for something that is largely outside their control.`,
      },
    ],
    questions: [
      { statement: 'Which teacher shares A\'s view about the value of homework for young children?', answer: 2, explanation: 'A: para niños pequeños apenas cambia los resultados. C: no ve justificación en primaria y la evidencia es "extremely weak".' },
      { statement: 'Which teacher has a different view from the others about whether homework develops useful skills?', answer: 1, explanation: 'B es el único que defiende que el estudio independiente es una destreza necesaria para la universidad y que no hay que eliminar los deberes.' },
      { statement: 'Which teacher expresses a similar opinion to B about the effect of family circumstances?', answer: 3, explanation: 'B: un niño con habitación tranquila y padres formados tiene ventaja. D: no todas las familias pueden ofrecer apoyo ni una mesa para trabajar.' },
      { statement: 'Which teacher agrees with D that the design of a task is more important than how long it takes?', answer: 0, explanation: 'D: la calidad importa más que la duración. A: prefiere menos deberes de más calidad.' },
    ],
  },
]
