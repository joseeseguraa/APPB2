import type { ReadingMcExercise } from '../../types'
import { rq } from '../helpers'

export const part5ExercisesB: ReadingMcExercise[] = [
  {
    id: 'rd5-04',
    kind: 'reading-mc',
    title: 'The last picture house',
    focus: 'Reportaje · motivos, actitudes y referencias',
    text: `When the cinema in the village of Hollin closed in 1998, nobody expected it to open again. The building, a small brick hall with a hundred and twenty seats, was boarded up and slowly forgotten. Pigeons moved in through a broken window, and the faded posters by the entrance became part of the scenery, like the bus stop or the post box. For twenty years, people walked past without really seeing it.

Ruth Ashworth was one of them. She had grown up in Hollin and had seen her first film there, sitting on her father's knee. But it was only when she returned to the village after a career in accountancy that she began to look at the building differently. "I'd spent thirty years telling other people how to run their businesses," she says. "I suppose I wanted to find out whether I could actually do it myself."

The obstacles were considerable. The roof needed replacing, the electrics were dangerous and the projector, which had been left behind when the cinema closed, was so old that nobody could be found who knew how to repair it. The owner of the building, meanwhile, was reluctant to sell. "He thought I was either very rich or slightly mad," Ruth laughs. "I was neither, but I was very persistent."

It took her almost three years to raise the money, most of it from small donations. Local people organised quiz nights and cake sales; a retired electrician offered his services for free; a group of teenagers cleaned out the pigeons in exchange for free tickets for a year. What had begun as one woman's project gradually became something the whole village felt it owned.

The cinema reopened last spring with a showing of a classic black-and-white comedy. Every seat was taken. Since then, it has shown films four nights a week, and on Sunday afternoons it hosts screenings for parents with young children, at which nobody minds if the audience is noisy. Ruth insists that the cinema is not meant to make a profit. "If we cover our costs, I'm happy," she says. "The point was never really the films. It was about giving people a reason to leave their houses and sit in the dark together."

Not everyone has been won over. A few residents have complained about parking, and one neighbour objected to the new sign, which he considers too bright. Ruth takes such criticism calmly. "A village that agrees about everything would be a very strange place," she says. "The important thing is that people are talking about the cinema again. For twenty years, nobody did."`,
    questions: [
      rq('What does the writer suggest about the closed cinema in the first paragraph?', 'People had stopped noticing it.', ['It had become dangerous to walk past.', 'Villagers wanted it to be demolished.', 'It was used as a meeting place.'], 'El cine se volvió parte del paisaje, "like the bus stop", y la gente pasaba "without really seeing it": ya nadie se fijaba en él.'),
      rq('Why did Ruth decide to reopen the cinema?', 'She wanted to test her own business skills.', ['She needed a new source of income.', 'Her father had asked her to.', 'The villagers had asked for her help.'], '"I wanted to find out whether I could actually do it myself": después de aconsejar a otros, quería probarse a sí misma.'),
      rq('What does Ruth mean when she says she was "very persistent"?', 'She did not give up trying to buy the building.', ['She had enough money to buy the building.', 'She accepted the owner\'s first offer.', 'She was not sure the project would work.'], 'El dueño no quería vender. Que fuera "persistent" quiere decir que siguió insistiendo hasta convencerle.'),
      rq('According to the fourth paragraph, how did the project change?', 'The local community began to feel involved in it.', ['It became more expensive than planned.', 'Ruth handed control to a group of volunteers.', 'Teenagers took over the running of the cinema.'], '"What had begun as one woman\'s project gradually became something the whole village felt it owned": todo el pueblo lo sentía como suyo.'),
      rq('What is Ruth\'s main aim for the cinema?', 'To bring people together.', ['To show classic films.', 'To make a reasonable profit.', 'To attract visitors to the village.'], '"The point was never really the films. It was about giving people a reason… to sit in the dark together." Ojo con lo del beneficio: dice expresamente que no busca ganar dinero.'),
      rq('How does Ruth feel about the complaints from some residents?', 'She sees them as a natural part of village life.', ['She is worried they could close the cinema.', 'She thinks the residents are being unfair.', 'She has made changes in response to them.'], '"A village that agrees about everything would be a very strange place": se lo toma con calma y le parece normal.'),
    ],
  },
  {
    id: 'rd5-05',
    kind: 'reading-mc',
    title: 'Starting again at forty',
    focus: 'Experiencia personal · sentimientos y propósito',
    text: `On my fortieth birthday, I handed in my notice at the bank where I had worked for fifteen years, sold most of my furniture and bought a one-way ticket to Lisbon. My colleagues assumed I was having some kind of crisis. My mother, more practically, wanted to know what I was going to do for money. The honest answer was that I had no idea.

It would be nice to say that I had always dreamed of living abroad, but that would not be true. I had been on holiday in Portugal twice and liked it, nothing more. What I had dreamed of, for a long time, was simply not doing the same thing every day for the next twenty-five years. Lisbon was less a destination than a way of making the decision impossible to reverse.

The first months were harder than I had imagined. I had studied Portuguese for a year before leaving and was rather proud of my progress, so it was a shock to discover that I could understand almost nothing anyone said to me. People spoke quickly, swallowed half their words and used expressions that appeared in none of my textbooks. I remember standing in a bakery, pointing at a cake like a small child, and feeling more foolish than I had felt in years.

And yet that feeling, unpleasant as it was, turned out to be the point. At the bank, I had known exactly what I was doing, and I had been quietly bored for a decade. In Lisbon, everything was difficult, and I had never felt more awake. Each small success – a phone call made without help, a joke understood – gave me a pleasure out of all proportion to its size.

Gradually, a life took shape. I found work teaching English, first to children and later to business people, many of whom were facing the same kind of decision I had made. I made friends, slowly, mostly through a walking group that met on Sunday mornings. My Portuguese improved to the point where people sometimes asked me which part of the country I was from, which I chose to take as a compliment.

I do not want to suggest that everyone should do what I did. I was lucky: I had savings, no children and good health. Plenty of people have perfectly good reasons for staying where they are. But I am often asked whether I regret it, and the answer is always the same. The only thing I regret is that I waited so long.`,
    questions: [
      rq('How did the writer\'s mother react to the news?', 'She was concerned about how the writer would support herself.', ['She thought the writer was having a crisis.', 'She encouraged the writer to go.', 'She offered to lend the writer money.'], '"My mother, more practically, wanted to know what I was going to do for money." La "crisis" era lo que pensaban sus compañeros, no su madre.'),
      rq('Why did the writer choose to move to Lisbon?', 'Moving there would force her to stick to her decision.', ['She had always wanted to live in Portugal.', 'She had been offered a job there.', 'She already spoke Portuguese well.'], '"Lisbon was less a destination than a way of making the decision impossible to reverse": irse lejos hacía que no pudiera echarse atrás.'),
      rq('What surprised the writer when she first arrived?', 'How little of the spoken language she could follow.', ['How friendly the people in the shops were.', 'How different the food was from home.', 'How much her Portuguese had improved.'], 'Estaba orgullosa de su nivel, pero "it was a shock to discover that I could understand almost nothing".'),
      rq('In the fourth paragraph, what does the writer mean by "that feeling… turned out to be the point"?', 'The difficulty of her new life was what made it rewarding.', ['She realised she should have stayed at the bank.', 'She learnt to hide her embarrassment.', 'She stopped worrying about making mistakes.'], 'Lo explica a continuación: en el banco se aburría; en Lisboa todo era difícil y "I had never felt more awake". La dificultad era justo lo que buscaba.'),
      rq('Why does the writer mention people asking which part of the country she was from?', 'To show how good her Portuguese had become.', ['To explain why she found it hard to make friends.', 'To suggest that people were confused by her accent.', 'To show that she wanted to travel around Portugal.'], 'La gente pensaba que era portuguesa de alguna región, lo que demuestra que su nivel ya era muy alto. Por eso lo toma "as a compliment".'),
      rq('What is the writer\'s attitude in the final paragraph?', 'She recognises that her situation made the move easier.', ['She believes everyone should follow her example.', 'She has some doubts about her decision.', 'She is planning to return home soon.'], '"I was lucky: I had savings, no children and good health." Reconoce que tenía ventajas y dice expresamente que no todo el mundo debería hacer lo mismo.'),
    ],
  },
  {
    id: 'rd5-06',
    kind: 'reading-mc',
    title: 'Where do our dreams go?',
    focus: 'Divulgación científica · ideas principales y vocabulario en contexto',
    text: `Most of us have had the experience of waking up in the middle of a vivid dream, only to find that within a few minutes it has completely disappeared. We may remember a feeling, or a single image, but the story itself slips away however hard we try to hold on to it. It is such a common experience that we rarely stop to ask why it happens. Yet for scientists who study sleep, it is a genuine puzzle.

One explanation has to do with the chemistry of the sleeping brain. During the stage of sleep in which most vivid dreams occur, levels of a chemical called noradrenaline, which helps the brain to store new memories, are extremely low. In other words, the brain is busy creating experiences but is not in a state to record them. Unless we wake up while the dream is still happening, or shortly afterwards, there is simply nothing there to remember.

Another factor is attention. When we wake up, our minds immediately turn to the day ahead: the alarm, the shower, the meeting at nine o'clock. Dreams are fragile memories, and the slightest distraction seems to be enough to wipe them out. This is why sleep researchers who want to collect dreams ask volunteers to lie still with their eyes closed for a minute after waking, and to describe the dream before doing anything else.

Some people, of course, remember their dreams far more often than others. Studies have found that these "high recallers" tend to wake up more frequently during the night, even if only for a few seconds, which gives their brains more opportunities to store what is happening. They also seem to show more activity in parts of the brain linked to imagination, although whether this is a cause or an effect is not yet clear.

Does it matter that we forget most of our dreams? Not necessarily. Some researchers believe that forgetting is useful, since it would be confusing if our memories of dreams were as strong as our memories of real events. We might find it hard to tell the difference between something that had actually happened and something we had only imagined.

For those who would like to remember more, the advice is simple. Keep a notebook beside your bed, and write down anything you can recall as soon as you wake, before you check your phone. Many people find that, after a week or two, they begin to remember far more than they expected.`,
    questions: [
      rq('What does the writer say about forgetting dreams in the first paragraph?', 'It is so normal that people rarely question it.', ['It mainly happens to people who sleep badly.', 'Scientists have recently explained it.', 'It only affects unpleasant dreams.'], '"It is such a common experience that we rarely stop to ask why it happens." Y para los científicos sigue siendo "a genuine puzzle", no algo ya resuelto.'),
      rq('According to the second paragraph, we forget dreams because', 'the brain is not recording memories during that stage of sleep.', ['dreams are too complicated to remember.', 'we produce too much noradrenaline.', 'we usually wake up after the dream has ended.'], 'Los niveles de noradrenalina, que ayuda a guardar recuerdos, son muy bajos: el cerebro crea experiencias pero "is not in a state to record them".'),
      rq('Why do researchers ask volunteers to lie still after waking?', 'To avoid distractions that could erase the dream.', ['To help them fall asleep again.', 'To measure their brain activity.', 'To make them feel more relaxed.'], 'Los sueños son recuerdos frágiles y "the slightest distraction" basta para borrarlos.'),
      rq('What is said about "high recallers"?', 'They briefly wake up more often during the night.', ['They sleep for longer than other people.', 'They have more vivid dreams than others.', 'Their imagination causes them to dream more.'], '"They tend to wake up more frequently during the night". Lo de la imaginación aún no está claro si es causa o efecto, así que esa opción no es segura.'),
      rq('What does "it" refer to in "it would be confusing"?', 'remembering dreams as clearly as real events', ['forgetting most of our dreams', 'the research on sleep', 'imagining things during the day'], 'La frase completa explica qué sería confuso: "if our memories of dreams were as strong as our memories of real events".'),
      rq('What is the purpose of the final paragraph?', 'To give practical advice to readers.', ['To summarise the scientific research.', 'To warn readers about using phones.', 'To suggest that dreams are important.'], 'Da un consejo concreto (un cuaderno junto a la cama) para quien quiera recordar más.'),
    ],
  },
]
