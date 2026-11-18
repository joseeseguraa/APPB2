import type { ReadingMcExercise } from '../../../types'
import { rq } from '../../helpers'

export const c1Part5D: ReadingMcExercise[] = [
  {
    id: 'c1-rd5-06',
    kind: 'reading-mc',
    title: 'The problem with productivity',
    focus: 'Ensayo crítico: ironía y postura del autor',
    text: `I have a shelf of books on productivity, and I am ashamed to say I have read most of them. Each promises a system that will finally allow me to get everything done: lists divided into categories, days divided into blocks, tasks ranked by urgency and importance. For a week or two, every system works brilliantly. Then life intervenes, the lists grow longer, and I find myself back where I started, only now with a lingering sense of failure.

It took me an embarrassingly long time to notice the flaw in the whole enterprise. Productivity advice assumes that the problem is inefficiency: that if we organised ourselves better, we would eventually reach the end of our to-do lists and be free. But the to-do list never ends. The more efficiently we work, the more work we tend to attract. Answer emails quickly and you will receive more of them; become known as someone who gets things done and you will be given more things to do.

This is not an argument for laziness. Some tasks genuinely need to be done well and on time, and organisational techniques can help with those. The problem arises when efficiency becomes a goal in itself, rather than a means of creating time for the things that matter. Many of the people I know who are most admired for their productivity are also the most exhausted. They have mastered the art of doing more, but not the art of deciding what is worth doing.

There is, I think, a deeper anxiety at work here. For many of us, being busy has become a source of identity and even of status. To say that you are "flat out" is to signal that you are needed, that your time is valuable. Admitting that you have spare time, by contrast, can feel almost shameful, as if it implied that nobody wanted you. Productivity culture feeds this anxiety by suggesting that every minute is a resource to be exploited.

The alternative is not to abandon planning but to accept, as a starting point, that we will never get everything done. Once that is acknowledged, the question changes. It is no longer "How can I do it all?" but "What will I choose to leave undone?" This is a far more uncomfortable question, because it forces us to disappoint people and to admit our limits. But it is also, I have come to believe, the only honest one.

I have not thrown away my productivity books. They are useful, in their way, for managing the tasks I have chosen. But I no longer expect them to set me free.`,
    questions: [
      rq('How does the writer describe his experience of productivity systems in the first paragraph?', 'They help at first but eventually leave him feeling worse.', ['They have made him far more efficient over time.', 'He has never been able to follow one properly.', 'They are too complicated to be useful.'], 'Funcionan una o dos semanas; luego vuelve al principio "with a lingering sense of failure".'),
      rq('What is the "flaw" the writer identifies in the second paragraph?', 'Working more efficiently tends to create more work.', ['Most systems are based on poor research.', 'People do not follow the advice correctly.', 'Emails are the main cause of inefficiency.'], 'Cuanto más eficiente eres, más trabajo atraes: la lista nunca termina.'),
      rq('In the third paragraph, the writer suggests that some highly productive people', 'have not learnt to identify what is truly important.', ['are less admired than they used to be.', 'deliberately avoid difficult tasks.', 'use the wrong organisational techniques.'], 'Saben hacer más, pero no decidir "what is worth doing".'),
      rq('According to the fourth paragraph, why do people like to appear busy?', 'It makes them feel important and needed.', ['It helps them to avoid criticism at work.', 'It is expected by their employers.', 'It allows them to avoid social events.'], 'Estar ocupado es fuente de identidad y estatus: indica que te necesitan.'),
      rq('What does the writer mean by "the only honest one"?', 'Accepting our limits is more realistic than trying to do everything.', ['People should be honest with their employers about their workload.', 'Planning is a waste of time.', 'It is wrong to disappoint other people.'], 'La pregunta honesta es qué dejar sin hacer, porque nunca se hará todo.'),
      rq('How does the writer now regard his productivity books?', 'As useful tools with limited aims.', ['As completely worthless.', 'As the solution he had been looking for.', 'As harmful to his mental health.'], 'Son útiles para gestionar las tareas elegidas, pero ya no espera que le liberen.'),
    ],
  },
  {
    id: 'c1-rd5-07',
    kind: 'reading-mc',
    title: 'The night shift',
    focus: 'Narrativa: tono, actitudes y referencias',
    text: `My father worked nights for most of my childhood, and for years I thought of him as a kind of ghost. He left the house as I was going to bed and came home as I was getting ready for school, smelling of cold air and engine oil. On weekdays, our only conversation took place in the narrow hallway, as he took off his boots and I put on my shoes. "All right?" he would ask. "All right," I would answer. It did not occur to me that this was strange.

He worked at the bus depot, repairing the vehicles that had broken down during the day so that they would be ready by morning. It was, he once told me, the only job where people noticed you most when you failed. If a bus broke down, passengers complained. If it ran perfectly, nobody gave a thought to the man who had spent the night lying underneath it. He said this without bitterness, as a simple statement of fact.

When I was twelve, I persuaded him to let me come to the depot for one night during the summer holidays. My mother was against the idea, but he seemed oddly pleased. I remember the vast, echoing garage, the yellow lights, the radio playing old songs that nobody seemed to be listening to. The other mechanics treated me with a gruff kindness, offering me tea so strong it was almost undrinkable and showing me how to use tools I was far too small to hold.

What I remember most, though, is my father. At home, he was quiet, almost shy. At the depot, he was someone else entirely: confident, funny, clearly respected. Younger men came to him with problems, and he would listen, nod, and then solve them with an ease that astonished me. I realised, with a strange mixture of pride and sadness, that I had never really known him. The person I met in the hallway each morning was only a fraction of who he was.

Around four in the morning, I fell asleep on a pile of old seat covers. When I woke, the garage was full of daylight, and the buses were leaving one by one. My father was standing by the door, watching them go. "That's the best bit," he said. "Seeing them all go out." I asked him why. He thought for a moment. "Because nobody will ever know," he said, and smiled.

I did not understand him then. I think I do now.`,
    questions: [
      rq('How did the writer feel about the brief conversations in the hallway as a child?', 'He accepted them as normal.', ['He found them deeply upsetting.', 'He tried to make them last longer.', 'He thought his father was avoiding him.'], '"It did not occur to me that this was strange".'),
      rq('What does the father\'s comment about noticing suggest about his job?', 'Good work was usually invisible.', ['He felt underpaid for what he did.', 'Passengers were often rude to him.', 'He was frequently criticised by his managers.'], 'La gente solo se fijaba cuando algo fallaba; si todo funcionaba, nadie pensaba en él.'),
      rq('How did the father react to the idea of the writer visiting the depot?', 'He was unexpectedly happy about it.', ['He agreed reluctantly to please his wife.', 'He was worried it would be dangerous.', 'He refused at first.'], '"He seemed oddly pleased".'),
      rq('What did the writer discover about his father at the depot?', 'He had a side to his character the writer had never seen.', ['He was unhappy with his colleagues.', 'He was less skilled than the writer had believed.', 'He preferred his work to his family.'], 'En casa era callado; en el taller, seguro, divertido y respetado.'),
      rq('What does "that" refer to in "That\'s the best bit"?', 'watching the buses leave in the morning', ['finishing the night shift', 'working with the other mechanics', 'having the writer at the depot'], 'Se refiere a ver salir los autobuses uno a uno.'),
      rq('What does the final line suggest?', 'The writer has since come to share his father\'s view of work.', ['The writer regrets not becoming a mechanic.', 'The writer still finds his father hard to understand.', 'The writer has forgotten most of that night.'], '"I did not understand him then. I think I do now": ahora entiende el valor del trabajo bien hecho que nadie ve.'),
    ],
  },
  {
    id: 'c1-rd5-08',
    kind: 'reading-mc',
    title: 'In defence of the dull',
    focus: 'Artículo: argumento contra la intuición',
    text: `Boring jobs have a bad reputation. We are told, by careers advisers and inspirational speakers alike, to follow our passion, to find work that excites us, to avoid at all costs the fate of the person stuck in a dull office counting down the hours until the weekend. There is something to be said for this advice. Nobody would argue that work should be miserable. But I have come to suspect that the cult of passion has done at least as much harm as good.

For one thing, it sets an impossibly high standard. Very few jobs are exciting most of the time, and even those that appear glamorous from the outside, such as acting, journalism or professional sport, involve long periods of repetitive, unremarkable effort. A young person who expects every working day to be thrilling is likely to be disappointed, and may conclude that something is wrong with them or with their choice of career, when in fact they are simply experiencing what work is like.

There is also a curious snobbery in the idea that only certain kinds of work can be fulfilling. The accountant, the warehouse manager and the person who maintains the city's water pipes are rarely held up as role models, yet the satisfaction of doing such work well can be considerable. Many people find deep contentment in routine, in mastering a set of tasks and in the knowledge that others depend on them. To dismiss such work as dull is to misunderstand where meaning comes from.

Research supports this view. Studies of job satisfaction suggest that what matters most is not whether a job is exciting but whether people feel competent, have some control over how they work and are treated with respect. A predictable job that meets these conditions may be far more satisfying than a creative one in which people feel insecure, overworked or undervalued.

None of this is to suggest that people should not pursue their interests. Passion is a fine thing when it can be combined with a living. But for many people it cannot, and they should not be made to feel that they have failed. A job can be a source of income, stability and quiet pride without being a vocation. The time and energy it leaves free can then be devoted to whatever genuinely excites them.

Perhaps, then, the advice we give young people should be more modest. Not "Find your passion", but "Find something you can do well, with people you respect, that leaves you enough time to live." It is less inspiring, certainly. But it may lead to a great deal more happiness.`,
    questions: [
      rq('What is the writer\'s attitude to the advice to "follow your passion"?', 'He believes it may be more harmful than people realise.', ['He thinks it is completely wrong.', 'He agrees with it entirely.', 'He thinks it is only useful for young people.'], 'Reconoce que tiene algo de razón, pero sospecha que ha hecho tanto daño como bien.'),
      rq('According to the second paragraph, why might young people be disappointed?', 'They expect work to be more consistently exciting than it is.', ['They choose careers that are too competitive.', 'They are not given enough responsibility.', 'They are unwilling to work long hours.'], 'Casi ningún trabajo es emocionante todo el tiempo; esperarlo lleva a la decepción.'),
      rq('What does the writer criticise in the third paragraph?', 'The assumption that only some jobs can be satisfying.', ['The low pay of essential workers.', 'People who look down on accountants.', 'Employers who fail to value routine work.'], 'Habla de "snobbery": creer que solo ciertos trabajos pueden llenar.'),
      rq('What does the research mentioned in the fourth paragraph suggest?', 'Working conditions matter more than how interesting a job is.', ['Creative jobs are always less secure.', 'Most people prefer predictable work.', 'Job satisfaction depends mainly on salary.'], 'Importa sentirse competente, tener control y ser respetado, no que sea emocionante.'),
      rq('In the fifth paragraph, the writer suggests that a job', 'does not need to be someone\'s main source of meaning.', ['should always be related to a person\'s interests.', 'is less important than free time.', 'should be chosen mainly for its salary.'], 'Un trabajo puede dar ingresos, estabilidad y orgullo sin ser una vocación.'),
      rq('How does the writer describe his own proposed advice?', 'Less exciting but more likely to lead to happiness.', ['More inspiring than the traditional advice.', 'Suitable only for people without ambition.', 'Difficult for most young people to follow.'], '"It is less inspiring, certainly. But it may lead to a great deal more happiness".'),
    ],
  },
]
