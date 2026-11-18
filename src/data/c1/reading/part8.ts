import type { MatchingExercise } from '../../../types'

export const c1Part8: MatchingExercise[] = [
  {
    id: 'c1-rd8-01',
    kind: 'matching',
    title: 'Changing careers',
    focus: 'Cuatro testimonios: motivos, dudas y resultados',
    intro: 'You are going to read about four people who changed careers in their forties. For questions 1–10, choose from the people (A–D). The people may be chosen more than once.',
    sections: [
      {
        title: 'A  Rachel: from lawyer to carpenter',
        text: `For fifteen years I worked in a corporate law firm, and by most measures I was successful. But I spent my weekends making furniture, and gradually I realised that those two days were the only time I felt fully myself. The decision to leave took almost three years. I kept finding reasons to wait: the mortgage, my pension, what my colleagues would think. In the end it was a health scare that forced my hand. I now earn about a third of what I used to, and I won't pretend that hasn't been difficult. But I sleep well, and for the first time in my adult life I'm proud of what I produce at the end of the day.`,
      },
      {
        title: 'B  Tomasz: from banker to primary teacher',
        text: `People assume I left banking because I was burnt out, but that's not quite true. I enjoyed the work; I just stopped believing it mattered. Teaching appealed to me because the results are so direct. Retraining was much harder than I'd expected, though. I was older than most of the tutors on my course, and being told how to do things by people half my age required a degree of humility I didn't know I had. The first year in the classroom nearly finished me off. What kept me going was the support of an experienced colleague who had made a similar change herself, years before.`,
      },
      {
        title: 'C  Mei: from engineer to nurse',
        text: `I'd always been interested in medicine, but my parents had pushed me towards engineering because it seemed more secure. When my father became seriously ill, I spent months in hospitals and found myself watching the nurses rather than the doctors. They were the ones who made the real difference to how he felt. I applied for a nursing degree the week after his funeral. Friends warned me I was making a decision based on grief, and perhaps I was, but six years later I've never once regretted it. My engineering background has turned out to be surprisingly useful, too: I'm the person on the ward everyone asks when a machine stops working.`,
      },
      {
        title: 'D  Gareth: from journalist to winemaker',
        text: `I'd written about wine for years before I tried making it, so I suppose I thought I knew what I was getting into. I didn't. Writing about a harvest and being responsible for one are completely different things, and in our second year a late frost destroyed almost half the grapes. That was the moment I seriously considered giving up. My wife, who had been doubtful about the whole plan from the start, was the one who persuaded me to carry on. We've had good years since then, but I've learnt that this is a job in which you are never fully in control, and I've had to accept that.`,
      },
    ],
    questions: [
      { statement: 'delayed making the change for a long time', answer: 0, explanation: 'Rachel: "The decision to leave took almost three years. I kept finding reasons to wait".' },
      { statement: 'found that skills from a previous job are still valuable', answer: 2, explanation: 'Mei: su formación de ingeniera resulta útil cuando una máquina deja de funcionar.' },
      { statement: 'was encouraged to continue by someone who had initially had doubts', answer: 3, explanation: 'Gareth: su mujer, que dudaba del plan desde el principio, le convenció para seguir.' },
      { statement: 'says that a common explanation for their decision is mistaken', answer: 1, explanation: 'Tomasz: la gente cree que lo dejó por estar quemado, "but that\'s not quite true".' },
      { statement: 'admits that the change has had financial consequences', answer: 0, explanation: 'Rachel: gana un tercio de lo que ganaba, "I won\'t pretend that hasn\'t been difficult".' },
      { statement: 'was influenced by observing other people at work', answer: 2, explanation: 'Mei: en el hospital se fijaba en las enfermeras, que eran las que de verdad cambiaban cómo se sentía su padre.' },
      { statement: 'had to adjust to being taught by younger people', answer: 1, explanation: 'Tomasz: aprender de gente que tenía la mitad de su edad exigió una humildad que no sabía que tenía.' },
      { statement: 'discovered that their previous knowledge was less useful than expected', answer: 3, explanation: 'Gareth: creía saber en qué se metía porque escribía sobre vino. "I didn\'t."' },
      { statement: 'acknowledges that their decision may have been affected by emotion', answer: 2, explanation: 'Mei: sus amigos le dijeron que decidía desde el duelo, "and perhaps I was".' },
      { statement: 'has learnt to accept a lack of control over their work', answer: 3, explanation: 'Gareth: "you are never fully in control, and I\'ve had to accept that".' },
    ],
  },
]
