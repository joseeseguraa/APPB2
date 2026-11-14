import type { GappedTextExercise } from '../../types'
import { gapped } from '../helpers'

export const part6Exercises: GappedTextExercise[] = [
  {
    id: 'rd6-01',
    kind: 'gapped-text',
    title: 'My first marathon',
    focus: 'Narración, secuencia temporal y causa-efecto',
    text: `Three years ago, I couldn't run for a bus without getting out of breath. Last month, I crossed the finish line of the Valencia Marathon. People keep asking me how I did it, as if there must be some secret. {1}

It started almost by accident. A colleague was organising a team for a charity 5K race and was one person short. I agreed mainly because I didn't want to be the only one who said no. {2} By the end of the race I was walking more than running, and I finished second to last, just ahead of a man dressed as a giant banana.

Strangely, though, I enjoyed it. There was something about the atmosphere – the crowds, the music, the sense that everyone was in it together – that made me want to try again. {3} I downloaded a beginner's app that told me exactly what to do each day, alternating short periods of running with longer periods of walking.

For the first few weeks, progress was painfully slow. {4} But gradually the running periods got longer and the walking periods got shorter, until one morning I realised I had run for thirty minutes without stopping.

After that, I set myself more ambitious targets: a 10K, then a half marathon. Deciding to do a full marathon was a much bigger step. {5} I found a training plan that built up the distance over six months, joined a local running club and, perhaps most importantly, told everyone I knew what I was planning to do, so that it would be too embarrassing to give up.

The race itself was the hardest thing I have ever done. My legs began to ache at around the thirty-kilometre mark, and for the last five kilometres I was just counting my steps. {6} Nothing has ever felt better. My time was nothing special, but that wasn't the point. Three years earlier, I would never have believed it was possible.`,
    ...gapped(
      'rd6-01',
      [
        'The truth is much less exciting: I just kept going, one small step at a time.',
        "I hadn't run anywhere since I'd left school, and it showed.",
        'So the following week, I made a plan.',
        'There were days when I wondered why I was bothering at all.',
        'This time, I knew I couldn\'t just rely on enthusiasm.',
        'And then, suddenly, I saw the finish line and the crowds cheering on both sides.',
        'Fortunately, the weather on the day was perfect for running.',
      ],
      [
        'Antes del hueco: "as if there must be some secret". La frase responde a esa idea: "The truth is much less exciting" (no hay secreto).',
        'Después del hueco: "By the end of the race I was walking more than running". La frase explica por qué: no corría desde el colegio, "and it showed" (y se notó).',
        '"Made me want to try again" → "So the following week, I made a plan" → "I downloaded a beginner\'s app": el plan concreto.',
        '"Progress was painfully slow" + frase negativa + "BUT gradually…": el "but" necesita una idea negativa antes, los días en que pensaba dejarlo.',
        '"A much bigger step" → "This time… couldn\'t just rely on enthusiasm" → por eso buscó un plan de entrenamiento, se apuntó a un club, etc.',
        'Al final de la carrera: "counting my steps" → ve la meta → "Nothing has ever felt better". La frase sobre el tiempo que hacía no conecta con "Nothing has ever felt better", así que es la que sobra.',
      ],
    ),
  },
  {
    id: 'rd6-02',
    kind: 'gapped-text',
    title: 'The return of the wolves',
    focus: 'Artículo divulgativo, referencias (they, these, also)',
    text: `For almost a century, there were no wolves in the national park. The last ones had been hunted until they disappeared, and most people assumed they would never come back. {1} In the 1990s, a group of scientists persuaded the authorities to bring a small number of wolves from Canada and release them into the park.

The decision was extremely controversial. {2} Many feared that the wolves would attack their animals, and some threatened to shoot any that came near their land.

What happened next surprised even the scientists. The wolves did, of course, hunt deer, which had become extremely numerous in their absence. {3} With fewer deer eating them, young trees along the rivers began to grow again for the first time in decades.

These trees, in turn, created new habitats for birds and other animals. Their roots made the river banks stronger, which reduced erosion. {4} Some researchers have even claimed that the wolves changed the shape of the rivers themselves, although others believe this is an exaggeration.

Not all the effects have been positive, and the debate is far from over. {5} Researchers are also still arguing about how much of the recovery was really caused by the wolves, and how much was due to other factors, such as changes in the weather.

Nevertheless, the project has inspired similar schemes elsewhere. {6} Supporters say that, if they are managed carefully, these reintroductions could help to repair ecosystems that humans have damaged. Opponents, meanwhile, remain unconvinced.`,
    ...gapped(
      'rd6-02',
      [
        'They were wrong.',
        'Local farmers, in particular, were strongly opposed to the plan.',
        'But they also changed the behaviour of the deer, which began to avoid certain areas, such as river valleys.',
        'Beavers, which depend on these trees for food and for building their dams, also returned.',
        'Wolves have occasionally killed farm animals outside the park, and some have been shot as a result.',
        'In several European countries, large predators are now being deliberately reintroduced.',
        'Wolves usually live in family groups of between five and ten animals.',
      ],
      [
        '"Most people assumed they would never come back." → "They were wrong." → explicación de cómo volvieron. "They" = most people.',
        '"Controversial" → quiénes se oponían: "local farmers" → "Many feared… attack THEIR animals… near THEIR land". Los pronombres se refieren a los granjeros.',
        '"Did, of course, hunt deer" + "BUT they ALSO changed the behaviour…" → los ciervos evitan los ríos → "With fewer deer eating them, young trees along the rivers…".',
        '"These trees… habitats… river banks" → castores que dependen de "these trees" y construyen presas → por eso "changed the shape of the rivers".',
        '"Not all the effects have been positive" → un efecto negativo (ataques a animales de granja) → "Researchers are ALSO still arguing": "also" añade un segundo problema.',
        '"Similar schemes elsewhere" → otros países europeos → "THESE reintroductions". La frase sobre los grupos familiares no conecta con ningún hueco.',
      ],
    ),
  },
  {
    id: 'rd6-03',
    kind: 'gapped-text',
    title: 'A year without social media',
    focus: 'Experiencia personal, contraste y consecuencias',
    text: `When I told my friends I was going to give up social media for a year, most of them laughed. {1} I had checked my phone more than a hundred times a day for as long as I could remember, often without even noticing I was doing it.

The first week was much harder than I had expected. {2} Waiting for a bus or standing in a queue, my hand would automatically reach for my pocket, only to remember that there was nothing to look at.

By the end of the first month, however, something had changed. {3} I read more books in those four weeks than I had in the previous year, and I rediscovered the pleasure of simply looking out of the window on a train journey.

There were downsides too. {4} Friends would mention a party or a piece of news that everyone else seemed to know about, and I would realise I had missed it completely. A couple of times, I felt genuinely left out.

What I hadn't anticipated was the effect on my friendships. {5} Instead, I had to make an effort: phoning people, arranging to meet them, sending actual cards on their birthdays. I ended up with fewer friends, but much closer ones.

The year finished last month. I have reinstalled one app, which I use for twenty minutes a day. {6} I'm not sure yet whether that will last, but I know that I will never again let my phone decide how I spend my time.`,
    ...gapped(
      'rd6-03',
      [
        "They clearly didn't think I would last a week, and I could understand why.",
        'I had no idea how often I filled empty moments by scrolling.',
        'I found I had far more time than I had thought, and I was starting to use it differently.',
        'The most obvious one was that I was often the last to hear about things.',
        "Without the easy option of liking someone's photos, I could no longer pretend to keep in touch.",
        'The others I have deleted permanently.',
        'Some experts recommend switching off notifications rather than deleting apps completely.',
      ],
      [
        '"Most of them laughed" → no creían que aguantara → "and I could understand why" → explicación: miraba el móvil más de cien veces al día.',
        '"Harder than I had expected" → no sabía cuánto lo usaba para rellenar los ratos muertos → ejemplos concretos: esperando el autobús o en una cola.',
        '"Something had changed" → tenía más tiempo y lo usaba de otra forma → ejemplos: leía más libros y miraba por la ventana.',
        '"There were downsides too" → "the most obvious ONE" (one = downside) → ejemplo: se enteraba la última de las fiestas.',
        '"Effect on my friendships" → ya no podía fingir que mantenía el contacto con un "like" → "INSTEAD, I had to make an effort".',
        '"I have reinstalled ONE app" → "The OTHERS I have deleted permanently". La frase de los expertos es una idea general que no encaja en un relato personal.',
      ],
    ),
  },
]
