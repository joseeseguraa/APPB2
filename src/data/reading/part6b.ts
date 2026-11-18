import type { GappedTextExercise } from '../../types'
import { gapped } from '../helpers'

export const part6ExercisesB: GappedTextExercise[] = [
  {
    id: 'rd6-04',
    kind: 'gapped-text',
    title: 'Learning to sail',
    focus: 'Narración · referencias y secuencia',
    text: `I had never been on a sailing boat until last summer, when a friend persuaded me to join her on a week-long course on the south coast. I agreed mainly because I couldn't think of a good excuse. {1}

On the first morning, our instructor, a calm woman called Jo, gathered the six of us on the beach and explained the basic parts of the boat. I tried hard to concentrate, but the vocabulary seemed endless. {2} By lunchtime I had forgotten most of it.

That afternoon we went out on the water for the first time. Jo had warned us that we would probably capsize at least once, and she was right. {3} The water was freezing, and I came up spluttering and laughing at the same time.

Over the next few days, things slowly began to make sense. I learnt to read the wind by watching the surface of the water, and to feel when the sail was set correctly. {4} Jo rarely gave us direct instructions; instead she would ask questions until we worked out the answer ourselves.

By Thursday, we were allowed to take the boats out without her. {5} My friend and I sailed out of the bay and along the coast, and for an hour we didn't say a word. We didn't need to.

On the last day, Jo handed each of us a certificate. It was a small piece of card with our names written on it, but I have kept it on my desk ever since. {6} Next summer I am planning to go back and do the advanced course.`,
    ...gapped(
      'rd6-04',
      [
        'I had no idea that it would turn out to be one of the best weeks of my life.',
        'Every rope, it seemed, had at least two names, and none of them were obvious.',
        'In fact, it happened within ten minutes of leaving the beach.',
        'Much of this was down to the way we were taught.',
        'It was the moment I had been waiting for all week.',
        'It reminds me that it is never too late to try something completely new.',
        'Most sailing accidents happen because people ignore the weather forecast.',
      ],
      [
        'Fue a regañadientes ("couldn\'t think of a good excuse"), y la frase añade el contraste: acabó siendo una de sus mejores semanas.',
        '"The vocabulary seemed endless" → ejemplo: cada cuerda tenía dos nombres → "By lunchtime I had forgotten most of IT" (it = ese vocabulario).',
        '"We would probably capsize… and she was right" → la frase precisa cuándo: "IN FACT, it happened within ten minutes" → el agua helada.',
        '"Things began to make sense" → "Much of THIS was down to the way we were taught" → explicación del método de Jo (preguntas en vez de órdenes).',
        '"Allowed to take the boats out without her" → "the moment I had been waiting for" → describe esa salida en silencio.',
        'El certificado sigue en su mesa → "It REMINDS me…" → "Next summer…". La frase sobre accidentes no encaja en ningún hueco: sobra.',
      ],
    ),
  },
  {
    id: 'rd6-05',
    kind: 'gapped-text',
    title: 'The secret life of city foxes',
    focus: 'Divulgación · contraste y ejemplos',
    text: `Anyone who has walked through a British city late at night has probably seen one: a thin, red shape crossing the road or disappearing behind a row of bins. Urban foxes are now so common that many people barely notice them. {1}

Foxes first began to move into towns in large numbers in the 1930s, when new suburbs with large gardens were being built on the edges of cities. {2} Gardens offered shelter, and there was plenty of food in the form of insects, fruit and the leftovers people threw away.

Today, urban foxes live in almost every major city in the country. {3} City foxes tend to be bolder than their country cousins, and they have learnt to cross roads, avoid traffic and even use bridges.

Not everyone is pleased to share their neighbourhood with them. {4} Others complain about the noise foxes make at night, which can sound alarmingly like a person screaming.

However, researchers who study urban foxes say that many of these fears are exaggerated. {5} In fact, they generally avoid people and are far more likely to run away than to cause any trouble.

Whatever we think of them, it seems that urban foxes are here to stay. {6} For those who enjoy wildlife, that is good news. For those who would rather not find their bins knocked over in the morning, it may be less welcome.`,
    ...gapped(
      'rd6-05',
      [
        'Yet less than a century ago, they were almost never seen in urban areas.',
        'For the foxes, these new neighbourhoods were ideal.',
        'Some have even adapted their behaviour to life among humans.',
        'Some residents worry that foxes might attack pets or small children.',
        'Attacks on people are extremely rare.',
        'Attempts to remove them have usually failed, as new foxes quickly move in to take their place.',
        'Foxes are closely related to wolves and domestic dogs.',
      ],
      [
        '"Now so common that people barely notice them" + "YET less than a century ago they were almost never seen" → contraste ahora/antes, que introduce la historia del párrafo siguiente.',
        '"New suburbs with large gardens" → "THESE new neighbourhoods were ideal" → "Gardens offered shelter…".',
        '"Live in almost every major city" → "Some have even adapted their behaviour" → ejemplos: más atrevidos, cruzan carreteras, usan puentes.',
        '"Not everyone is pleased" → "SOME residents worry…" → "OTHERS complain about the noise". La pareja some/others es la pista.',
        '"Many of these fears are exaggerated" → "Attacks on people are extremely rare" → "In fact, they generally avoid people".',
        '"Here to stay" → los intentos de eliminarlos fracasan → buenas noticias para unos, malas para otros. La frase sobre lobos y perros es un dato suelto que no conecta: sobra.',
      ],
    ),
  },
  {
    id: 'rd6-06',
    kind: 'gapped-text',
    title: 'My grandmother\'s recipe book',
    focus: 'Recuerdo personal · pronombres y causa',
    text: `When my grandmother died, she left me a battered notebook full of recipes, most of them written in pencil and many decorated with stains of oil and tomato sauce. For a long time I couldn't bring myself to open it. {1}

When I finally did, about a year later, I was surprised by how little it resembled a normal cookbook. {2} Instead, there were notes such as "enough flour to make it feel soft" or "cook until it smells right".

At first this drove me mad. I am the kind of cook who likes to follow instructions exactly, and I had no idea what "soft" or "right" were supposed to mean. {3} The results were, to put it kindly, disappointing.

It was my mother who finally helped me. She had watched my grandmother cook for decades and understood her system perfectly. {4} Standing next to me in the kitchen, she showed me how the dough should feel and what the sauce should smell like.

Slowly, I began to understand that the book had never been intended as a set of instructions. {5} My grandmother had learnt to cook by watching her own mother, and she expected anyone who used the book to learn in the same way.

I now cook from it almost every week. {6} I have started adding my own notes in the margins, also in pencil, for whoever inherits it next.`,
    ...gapped(
      'rd6-06',
      [
        'It felt too personal, as if I would be reading her private letters.',
        'There were almost no exact quantities or cooking times.',
        'I tried a few dishes anyway, guessing as I went along.',
        'More importantly, she knew that it could not be learnt from a page.',
        'It was a reminder, written for someone who already knew what to do.',
        'Some of the dishes still don\'t taste quite like hers, but they are getting closer.',
        'Most modern recipes are tested many times before they are published.',
      ],
      [
        '"Couldn\'t bring myself to open it" → la razón: "It felt too personal, as if…".',
        '"Little it resembled a normal cookbook" → no había cantidades exactas → "INSTEAD, there were notes such as…".',
        '"I had no idea what soft or right meant" → aun así probó, adivinando → "The RESULTS were disappointing".',
        'La madre entendía el sistema y, "more importantly", sabía que no se aprendía leyendo → por eso se lo enseñó de pie a su lado en la cocina.',
        '"Never been intended as a set of instructions" → "It was a reminder, written for someone who already knew what to do" → la abuela aprendió mirando.',
        '"I now cook from it almost every week" → aún no le sale igual, pero se acerca. La frase sobre recetas modernas no conecta con nada: sobra.',
      ],
    ),
  },
]
