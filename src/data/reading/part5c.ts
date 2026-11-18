import type { ReadingMcExercise } from '../../types'
import { rq } from '../helpers'

export const part5ExercisesC: ReadingMcExercise[] = [
  {
    id: 'rd5-07',
    kind: 'reading-mc',
    title: 'The piano in the hallway',
    focus: 'Narración personal: sentimientos y significado de expresiones',
    text: `For most of my childhood, the piano in our hallway was simply a piece of furniture. It had belonged to my grandmother, and nobody in the family could play it. My mother used the top of it to store post, keys and the occasional plant, and I learnt to walk past it without seeing it, the way you stop noticing the pattern on a carpet.

That changed the winter I turned fourteen. I was ill for nearly three weeks, too weak to go to school but too restless to stay in bed, and one afternoon, bored beyond belief, I lifted the lid and pressed a key. The note hung in the cold air of the hallway for what seemed like a long time. I pressed another, and then a third, and before I knew it I was trying to pick out a tune I had heard on the radio.

I would like to say that I discovered a hidden talent, but that would not be true. What I discovered was something more useful: the satisfaction of getting slowly better at something difficult. My early efforts were painful to listen to, and my younger brother made sure I knew it. But I kept going, partly out of stubbornness and partly because, for the first time, I had found something that was entirely mine. Nobody had suggested it or signed me up for it. Nobody was checking my progress.

When my parents realised I was serious, they offered to pay for lessons. I hesitated. I was afraid, I think, that a teacher would turn my private pleasure into another kind of homework. In the end I agreed to try, and my fears turned out to be partly justified. Mrs Hale, a strict woman in her seventies, made me spend months on scales and exercises before she would let me near a real piece of music. There were weeks when I hated her.

And yet she gave me something I could never have found on my own. She taught me to listen: not just to the notes, but to the silences between them. "Anyone can play fast," she used to say. "Very few people can play slowly." It took me years to understand what she meant.

I still play most evenings, on the same piano, which now lives in my own flat. I am not a brilliant pianist and never will be. But when I sit down at the end of a difficult day, I find myself thinking of that cold hallway, and of the strange, unexpected gift that a long illness gave me.`,
    questions: [
      rq('What does the writer say about the piano in the first paragraph?', 'It had become part of the background of family life.', ['It was too valuable for the children to touch.', 'His mother wished someone would learn to play it.', 'It reminded the family of his grandmother.'], 'Lo comparaba con el dibujo de una alfombra: dejas de verlo. El piano se usaba para dejar cartas y llaves; nadie le prestaba atención.'),
      rq('Why did the writer first touch the piano?', 'He had nothing else to occupy him.', ['He wanted to play a song for his family.', 'He had heard that it needed tuning.', 'He wanted to annoy his brother.'], 'Estaba enfermo y "bored beyond belief" (aburridísimo). Lo de la canción de la radio vino después.'),
      rq('What was most important to the writer about playing at first?', 'It was an activity that belonged only to him.', ['He was surprised by his natural ability.', 'His family praised his progress.', 'It helped him recover from his illness.'], '"For the first time, I had found something that was entirely mine". Dice expresamente que no descubrió ningún talento oculto.'),
      rq('Why did the writer hesitate when his parents offered to pay for lessons?', 'He was worried playing would start to feel like an obligation.', ['He did not think he was good enough.', 'He knew the lessons would be expensive.', 'He had heard that Mrs Hale was very strict.'], 'Temía que el profesor convirtiera su placer en "another kind of homework" (otra obligación).'),
      rq('What does "my fears turned out to be partly justified" suggest about the lessons?', 'Some parts of them were as unpleasant as he had expected.', ['They were much easier than he had imagined.', 'He decided to stop them after a few weeks.', 'His teacher did not take him seriously.'], 'Parcialmente justificados: meses de escalas y ejercicios, semanas en que la odiaba. Pero luego explica lo que sí le aportó.'),
      rq('What does the writer suggest in the final paragraph?', 'His illness had a positive effect he could not have predicted.', ['He regrets not having become a professional.', 'He would like to teach the piano himself.', 'He no longer enjoys playing as much as before.'], '"The strange, unexpected gift that a long illness gave me": algo bueno e inesperado salió de la enfermedad.'),
    ],
  },
  {
    id: 'rd5-08',
    kind: 'reading-mc',
    title: 'Should we trust online reviews?',
    focus: 'Artículo de opinión: actitud del autor y referencias',
    text: `Before I book a hotel, choose a restaurant or buy a new kettle, I read the reviews. So, it seems, does almost everyone else. Surveys suggest that nine out of ten shoppers check online ratings before making a purchase, and that many trust them as much as a personal recommendation from a friend. This is remarkable when you consider that most of us have no idea who wrote them.

The problem of fake reviews is well known. Some businesses pay people to write glowing comments about their products, or unflattering ones about their competitors. Platforms claim to remove millions of suspicious reviews every year, but critics say this is only a fraction of the total. Yet, in my view, fake reviews are not the biggest problem. The genuine ones can be just as misleading.

Consider who actually writes reviews. Most satisfied customers never bother. The people who do are usually those who have had an unusually good or unusually bad experience, which is why so many products end up with a mixture of five-star and one-star ratings and very little in between. The average figure, which is what most of us look at, may describe nobody's actual experience.

There is also the question of what reviewers are judging. A hotel may receive a poor rating because the guest's flight was delayed, or because it rained all week. A restaurant may be punished for being too expensive by someone who chose it without looking at the menu. These reviews are honest, but they tell us more about the reviewer than about the place.

None of this means that reviews are useless. Read carefully, they can be extremely informative. The trick is to ignore the stars and read what people actually say. If several reviewers independently mention thin walls or slow service, it is probably true. If one person describes the worst night of their life, it is worth asking whether something else was going on.

Perhaps the real lesson is that reviews should be one source of information among many. Before the internet, we relied on friends, guidebooks and our own judgement. Those things have not stopped being useful. A review can tell you whether a hotel is clean; it cannot tell you whether you will like it.`,
    questions: [
      rq('What does the writer find "remarkable" in the first paragraph?', 'People trust the opinions of strangers so much.', ['So many people read reviews before buying.', 'Friends give fewer recommendations than before.', 'Shoppers rarely write reviews themselves.'], 'Lo sorprendente es confiar en reseñas "as much as a personal recommendation" cuando no sabemos quién las escribió.'),
      rq('What is the writer\'s view of fake reviews?', 'They are not the most serious issue with reviews.', ['Platforms are dealing with them effectively.', 'They mainly affect small businesses.', 'They are easy to recognise.'], '"In my view, fake reviews are not the biggest problem": hay otro problema mayor, las reseñas auténticas engañosas.'),
      rq('According to the third paragraph, why can average ratings be misleading?', 'They are based mostly on extreme experiences.', ['Most customers give five stars out of politeness.', 'They are calculated in different ways.', 'They include many fake reviews.'], 'Solo escriben quienes tuvieron una experiencia muy buena o muy mala, así que la media no refleja ninguna experiencia real.'),
      rq('What point does the writer make with the examples of the hotel and the restaurant?', 'Some reviews judge things the business is not responsible for.', ['Customers often lie about their experiences.', 'Expensive places receive more negative reviews.', 'Bad weather affects people\'s mood.'], 'El retraso del vuelo o la lluvia no dependen del hotel. Son reseñas sinceras, pero hablan más del cliente que del sitio.'),
      rq('What does "it" refer to in "it is probably true" in the fifth paragraph?', 'a problem mentioned by several reviewers', ['the number of stars a place receives', 'the worst night of someone\'s life', 'what one reviewer says'], '"It" se refiere a lo que mencionan varios reseñadores por separado (paredes finas, servicio lento).'),
      rq('What is the writer\'s main conclusion?', 'Reviews are useful but should not be the only basis for a decision.', ['People should stop reading reviews altogether.', 'Guidebooks are more reliable than reviews.', 'Platforms should do more to remove fake reviews.'], '"Reviews should be one source of information among many". No dice que sean inútiles.'),
    ],
  },
]
