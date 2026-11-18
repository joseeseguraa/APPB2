import type { GappedTextExercise } from '../../../types'
import { gapped } from '../../helpers'

export const c1Part7B: GappedTextExercise[] = [
  {
    id: 'c1-rd7-02',
    kind: 'gapped-text',
    unit: 'paragraph',
    title: 'Learning to walk again',
    focus: 'Narración: secuencia y referencias',
    text: `When I woke up in hospital after the accident, the first thing I noticed was the silence where my legs should have been. I could see them under the sheet, but I could not feel them, and for several days nobody would tell me whether I ever would again.

{1}

The physiotherapist who came to see me on the fourth morning was a small, cheerful woman called Annie, who seemed entirely unimpressed by my self-pity. She sat at the end of the bed, asked me to try to move my toes, and wrote something down when I failed.

{2}

That was the beginning of eight months of work. At first, the exercises seemed absurdly small: lifting a heel a centimetre off the bed, tightening a muscle for five seconds, standing between two bars while two people held me up. I was used to running ten kilometres before breakfast, and I found the slowness humiliating.

{3}

It was Annie who changed my mind, although she did it so quietly that I barely noticed at the time. One afternoon, after a session in which I had managed nothing at all, she showed me a chart she had been keeping since my first week. Each tiny improvement had been recorded, and taken together, they formed a line that rose steadily upwards.

{4}

From then on, I stopped comparing myself to the person I had been before the accident and started comparing myself to the person I had been the week before. It sounds like a small adjustment, but it made the difference between despair and hope.

{5}

I left the hospital on crutches in the spring. Today I walk with a slight limp that most people do not notice, and last year I completed a five-kilometre race, more slowly than I would once have thought acceptable, but with more pleasure than I have ever felt crossing a finish line.

{6}

I still think about Annie often. I sent her a photograph of me at the finish, and she replied with a single line: "Told you so."`,
    ...gapped(
      'c1-rd7-02',
      [
        'In the absence of information, I imagined the worst. I spent those days staring at the ceiling, convinced that the life I had known was over and that nothing anyone could do would bring it back.',
        '"Good," she said. "Now we know where we\'re starting from." It was the first time anyone had spoken to me as if there were somewhere to go.',
        'I began to resent the whole process. I missed sessions, complained to the nurses and told anyone who would listen that the exercises were a waste of time.',
        'I remember staring at it for a long time. Day by day, I had seen only failure, but the chart told a completely different story.',
        'That is not to say that the rest of my recovery was easy. There were setbacks, including an infection that kept me in bed for three weeks, but I never again lost sight of where I was heading.',
        'The race was not the end of the story, however. What I learnt in that hospital has stayed with me in ways I did not expect, from how I approach my work to how I deal with my children\'s frustrations.',
        'Many patients with similar injuries never recover full movement, and doctors are often reluctant to make predictions in the first few weeks.',
      ],
      [
        'Nadie le decía si volvería a sentir las piernas → "In the ABSENCE OF INFORMATION, I imagined the worst" → la fisioterapeuta del cuarto día rompe esa situación.',
        'Annie apunta algo cuando él falla → "\'Good,\' she said. \'Now we know where we\'re starting from.\'" → "THAT was the beginning of eight months of work".',
        'La lentitud le parece humillante → "I began to RESENT the whole process…" → "It was Annie who CHANGED MY MIND": tiene que haber antes una actitud negativa que cambiar.',
        'Annie le enseña el gráfico → "I remember staring at IT (the chart)…" → "From then on, I stopped comparing myself…".',
        'Cambia de actitud → "That is not to say that the rest of my recovery was easy…" → sale del hospital en primavera.',
        'Termina una carrera de 5 km → "The RACE was not the end of the story…" → sigue pensando en Annie. El párrafo sobre lo que suelen decir los médicos no encaja en ningún hueco: sobra.',
      ],
    ),
  },
]
