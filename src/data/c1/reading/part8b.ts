import type { MatchingExercise } from '../../../types'

export const c1Part8B: MatchingExercise[] = [
  {
    id: 'c1-rd8-02',
    kind: 'matching',
    title: 'Four new books on science',
    focus: 'Reseñas: opiniones del crítico',
    intro: 'You are going to read four reviews of popular science books. For questions 1–10, choose from the reviews (A–D). The reviews may be chosen more than once.',
    sections: [
      {
        title: 'A  The Clockwork Cell',
        text: `Molecular biology is not an obvious subject for a page-turner, but Helen Marsh has managed something close to one. Her account of how cells repair their own DNA is clear without ever being simplistic, and she has a gift for analogy: the comparison between the cell's repair systems and the maintenance crew of a busy airport is both accurate and memorable. If the book has a weakness, it is the final chapter, in which Marsh speculates about future medical treatments with an optimism that the evidence does not yet support. Readers with no scientific background may need to read some sections twice, but the effort is well rewarded.`,
      },
      {
        title: 'B  Weather Makers',
        text: `Daniel Okafor spent ten years as a meteorologist before turning to writing, and it shows. His explanations of how storms form and why forecasts go wrong are confident and precise, and the many personal anecdotes from his time in the field bring the subject vividly to life. I was less convinced by the sections on climate policy, which feel as if they belong to a different, more polemical book. Okafor is entitled to his views, but his tone becomes noticeably more strident, and readers who do not share his politics may find these passages off-putting. Still, as an introduction to the atmosphere, this is hard to beat.`,
      },
      {
        title: 'C  Numbers in the Wild',
        text: `This collection of essays on the mathematics of nature is uneven. The best pieces, on the spiral patterns of sunflowers and the population cycles of lynx and hare, are elegant and surprising. Others are padded out with historical detail that adds little. Sarah Lindqvist writes well, but she seems unsure who her audience is: some essays assume a familiarity with calculus that most general readers will lack, while others explain basic arithmetic at tedious length. A firmer editorial hand might have produced a shorter and much better book. Even so, mathematically minded readers will find plenty to enjoy.`,
      },
      {
        title: 'D  The Patient Brain',
        text: `Neuroscience has been badly served by popular books that promise to reveal the "secrets" of the mind in ten easy chapters. Tom Reyes avoids this trap. He is refreshingly honest about how much remains unknown, and he takes care to distinguish between well-established findings and interesting but unconfirmed ideas. The result is less exciting than some of its rivals, and the writing is occasionally dry, but it is far more trustworthy. I particularly admired the chapter on memory, which overturns several popular misconceptions. This is a book I would recommend to anyone who has been misled by more sensational accounts.`,
      },
    ],
    questions: [
      { statement: 'The reviewer criticises the writer for being too hopeful about the future.', answer: 0, explanation: 'A: en el último capítulo especula sobre tratamientos futuros "with an optimism that the evidence does not yet support".' },
      { statement: 'The reviewer praises the writer for admitting the limits of current knowledge.', answer: 3, explanation: 'D: "refreshingly honest about how much remains unknown".' },
      { statement: 'The reviewer suggests that the book could have been improved by cutting some material.', answer: 2, explanation: 'C: "A firmer editorial hand might have produced a shorter and much better book".' },
      { statement: 'The reviewer feels that part of the book has a different character from the rest.', answer: 1, explanation: 'B: las secciones sobre política climática parecen de "a different, more polemical book".' },
      { statement: 'The reviewer comments on the writer\'s skill in making comparisons.', answer: 0, explanation: 'A: "a gift for analogy", con la comparación del aeropuerto.' },
      { statement: 'The reviewer says the writer\'s professional experience adds to the book.', answer: 1, explanation: 'B: diez años como meteorólogo, "and it shows", con anécdotas de su trabajo.' },
      { statement: 'The reviewer notes an inconsistency in the level of knowledge expected of readers.', answer: 2, explanation: 'C: unos ensayos suponen saber cálculo y otros explican aritmética básica.' },
      { statement: 'The reviewer admits the book may be less entertaining than others on the subject.', answer: 3, explanation: 'D: "less exciting than some of its rivals… occasionally dry".' },
      { statement: 'The reviewer warns that some readers may find the effort demanding.', answer: 0, explanation: 'A: los lectores sin formación científica quizá tengan que leer algunas partes dos veces.' },
      { statement: 'The reviewer suggests the book corrects false ideas spread by other books.', answer: 3, explanation: 'D: lo recomienda a quien haya sido engañado por libros sensacionalistas, y el capítulo sobre memoria desmonta errores populares.' },
    ],
  },
]
