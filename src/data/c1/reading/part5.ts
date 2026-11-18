import type { ReadingMcExercise } from '../../../types'
import { rq } from '../../helpers'

export const c1Part5: ReadingMcExercise[] = [
  {
    id: 'c1-rd5-01',
    kind: 'reading-mc',
    title: 'In praise of the amateur',
    focus: 'Ensayo: actitud del autor, ironía y referencias',
    text: `There is a particular kind of silence that falls over a room when someone admits to doing something badly for pleasure. I have witnessed it at dinner parties when a guest confesses that she paints watercolours, or that he plays the cello in a community orchestra that will never, by any reasonable standard, be good. The silence is not exactly disapproval. It is closer to embarrassment, as if the speaker had revealed a minor medical condition that everyone has agreed to be polite about.

We live in an age that has quietly redefined the hobby as an investment. The person who runs is training for a marathon; the person who bakes is building a following online; the person who learns Italian is improving their employability. Every pastime, it seems, must lead somewhere, and preferably somewhere measurable. The idea of doing something for its own sake, with no ambition to excel or to be seen excelling, has come to seem faintly self-indulgent, if not slightly suspect.

I should declare an interest here. For twenty years I have played the piano with great enthusiasm and very modest results. I have no intention of performing in public, and the few people who have heard me play have been careful to say nothing at all. Yet those hours at the keyboard have given me something that my professional life, for all its rewards, rarely has: the experience of complete absorption in a task whose outcome does not matter.

It would be easy to dismiss this as nostalgia, a longing for some imagined golden age of leisure that never really existed. But the evidence suggests otherwise. Psychologists who study what they call "flow" have found that people are at their happiest not when they are relaxing, but when they are fully engaged in an activity that is challenging but within their reach. Crucially, this state seems to depend on the absence of external judgement. The moment we start to perform for an audience, whether real or imagined, the quality of our attention changes. We begin to watch ourselves from the outside.

This, I suspect, is what social media has done to so many of our pleasures. It is not that people have stopped making things; if anything, they are making more than ever. It is that the making has become inseparable from the showing. The sourdough loaf exists in order to be photographed; the run is not complete until it has been shared. What is lost is not the activity itself but the private space in which it could be enjoyed without reference to anyone else.

None of this is an argument against excellence. The world needs people who are prepared to devote their lives to becoming extraordinarily good at something. But it also needs, I would argue, a great many more people who are content to be mediocre at things they love. The amateur, in the original sense of the word, is simply someone who does something out of love. There is no shame in that, and perhaps, at the next dinner party, we might manage to say so.`,
    questions: [
      rq('How does the writer describe the reaction to people who admit to doing something badly for pleasure?', 'Others feel awkward and avoid commenting.', ['Others openly criticise their lack of ambition.', 'Others are curious to know more about it.', 'Others pretend to share the same interest.'], 'El silencio no es desaprobación sino algo cercano a la vergüenza, como si hubiera confesado una pequeña dolencia de la que todos deciden no hablar por educación.'),
      rq('What does the writer suggest about modern attitudes to hobbies in the second paragraph?', 'They are expected to bring some kind of practical benefit.', ['They are becoming more expensive to pursue.', 'People have less time for them than in the past.', 'People choose them mainly to impress others online.'], 'La afición se ha redefinido como "investment": todo pasatiempo tiene que "lead somewhere", y mejor si es medible.'),
      rq('Why does the writer mention his own piano playing?', 'To show that he values an activity regardless of how well he does it.', ['To prove that amateurs can reach a high standard.', 'To explain why he decided not to play in public.', 'To compare it unfavourably with his professional work.'], 'Toca con entusiasmo y "very modest results", y aun así le da algo valioso: absorción total en una tarea cuyo resultado no importa.'),
      rq('According to the fourth paragraph, what is necessary for the state known as "flow"?', 'Not feeling that one is being evaluated.', ['Choosing a task that is easy to complete.', 'Having a clear goal to aim for.', 'Taking regular breaks to relax.'], '"This state seems to depend on the absence of external judgement". En cuanto actuamos para un público, la atención cambia.'),
      rq('What does the writer believe social media has changed?', 'People now find it difficult to do things without sharing them.', ['People produce fewer things themselves.', 'People are less interested in improving their skills.', 'People prefer watching others to taking part.'], '"The making has become inseparable from the showing": no se ha perdido la actividad, sino el espacio privado para disfrutarla.'),
      rq('What is the writer\'s main purpose in the final paragraph?', 'To defend the right to enjoy doing things imperfectly.', ['To criticise people who aim for excellence.', 'To explain the origin of the word "amateur".', 'To suggest a topic for conversation at dinner parties.'], 'No está en contra de la excelencia; defiende a quienes se contentan con ser mediocres en lo que aman. El origen de "amateur" es solo un apoyo.'),
    ],
  },
]
