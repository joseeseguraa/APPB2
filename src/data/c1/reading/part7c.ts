import type { GappedTextExercise } from '../../../types'
import { gapped } from '../../helpers'

export const c1Part7C: GappedTextExercise[] = [
  {
    id: 'c1-rd7-03',
    kind: 'gapped-text',
    unit: 'paragraph',
    title: 'The secret language of bees',
    focus: 'Divulgación: secuencia lógica',
    text: `In the 1940s, an Austrian scientist called Karl von Frisch made a discovery so surprising that many of his colleagues refused to believe it. Honeybees, he claimed, could tell each other exactly where to find food, using a kind of dance.

{1}

Von Frisch noticed that when a bee returned to the hive after finding a rich source of nectar, it performed a series of movements on the honeycomb. If the food was close, the bee simply ran in circles. If it was further away, the dance became more complex.

{2}

The angle of this central run, relative to the vertical, indicated the direction of the food relative to the sun. The length of the run indicated the distance. Other bees, crowding round in the darkness of the hive, followed the dancer and then flew directly to the food.

{3}

For decades, critics argued that the bees were not really reading the dance at all. Perhaps, they suggested, the returning bee carried the scent of the flowers, and the others simply followed their noses. The debate continued until the 1990s, when researchers finally settled it using a small robot bee.

{4}

The results were conclusive. Bees that watched the robot flew in the direction it had indicated, even though it carried no scent and had never been near the food. Von Frisch, who had died in 1982, was proved right.

{5}

More recent research has revealed further subtleties. Young bees appear to learn the dance by watching older ones, and their early attempts are less precise. In other words, the dance is not entirely instinctive; it improves with experience.

{6}

Bees, of course, are not the only animals with complex communication systems. But few have been studied so thoroughly, and few have changed our understanding of animal minds so profoundly.`,
    ...gapped(
      'c1-rd7-03',
      [
        'His evidence came from years of patient observation, carried out with glass-walled hives that allowed him to watch the insects at work.',
        'In this so-called "waggle dance", the bee moved forward in a straight line while shaking its body, then looped back to the starting point and repeated the movement.',
        'It was an extraordinary claim, but not everyone was convinced.',
        'Controlled by a computer, the robot was placed inside a hive, where it performed the waggle dance with great accuracy, pointing towards a feeding station the bees had never visited.',
        'Since then, the waggle dance has become one of the best-known examples of animal communication, appearing in textbooks around the world.',
        'This finding has intriguing implications. It suggests that even insects, whose behaviour was long assumed to be fixed, can be shaped by learning.',
        'Bees are also able to recognise individual human faces, although this ability seems to have nothing to do with the dance.',
      ],
      [
        'Von Frisch hizo una afirmación → "HIS EVIDENCE came from years of patient observation…" → "Von Frisch NOTICED that…".',
        'Si la comida está lejos, "the dance became more complex" → describe ese "waggle dance" y su recorrido recto → "The angle of THIS CENTRAL RUN…".',
        'Las demás abejas vuelan a la comida → "an extraordinary claim, BUT NOT EVERYONE WAS CONVINCED" → "For decades, CRITICS argued…".',
        '"Using a small robot bee" → "Controlled by a computer, THE ROBOT…" → "The results were conclusive".',
        'Von Frisch tenía razón → "SINCE THEN, the waggle dance has become one of the best-known examples…" → "MORE RECENT research…".',
        'La danza mejora con la experiencia → "THIS FINDING has intriguing implications… shaped by learning" → cierre sobre otros animales. El párrafo sobre reconocer caras humanas no tiene relación con la danza: sobra.',
      ],
    ),
  },
  {
    id: 'c1-rd7-04',
    kind: 'gapped-text',
    unit: 'paragraph',
    title: 'My year without a car',
    focus: 'Experiencia personal: causa y contraste',
    text: `When my old car finally broke down for good, I did something that surprised my friends and, if I am honest, myself. Instead of buying another one, I decided to try living without a car for a year.

{1}

The first few weeks were harder than I had expected. A trip to the supermarket, which used to take twenty minutes, now involved a bus, a long walk and a heavy rucksack. I missed the freedom of being able to go anywhere at any time, and I resented every minute spent waiting at bus stops in the rain.

{2}

The turning point came when I bought a second-hand bicycle with a large basket. Suddenly, short journeys became quick and even enjoyable. I discovered parts of my town I had driven past for years without noticing, and I began to arrive at work feeling more awake than I ever had after sitting in traffic.

{3}

There were, of course, moments when a car would have been invaluable. When my mother was taken to hospital in another city, I spent three hours on trains to reach her, a journey that would have taken an hour by road. On that occasion, I seriously questioned what I was doing.

{4}

Financially, the results were striking. Without insurance, fuel, repairs and parking, I saved several thousand pounds over the year, even after paying for occasional taxis and car hire. I also lost weight without making any other effort, simply because I was walking and cycling every day.

{5}

When the year ended, I had to decide whether to buy a car again. In the end, I joined a car-sharing scheme, which lets me book a vehicle for the rare occasions when I really need one.

{6}

I do not pretend that my experience would work for everyone. I live in a town with reasonable public transport and no young children to ferry around. But I suspect that many people who believe they could not manage without a car might be surprised.`,
    ...gapped(
      'c1-rd7-04',
      [
        'The decision was partly financial and partly environmental, but mostly, I think, I was curious to see whether it could be done.',
        'More than once in that first month, I came close to giving up and visiting a car dealer.',
        'The bicycle also changed my social life in unexpected ways. I started cycling with a group of neighbours at weekends, and several of them have become close friends.',
        'Even so, I came to the conclusion that occasional emergencies did not justify the expense of owning a car for the rest of the year.',
        'Perhaps the most surprising change, though, was psychological. I had stopped seeing journeys as wasted time to be got through as quickly as possible.',
        'It has worked well. I use it perhaps once a month, and I have no intention of owning a car again.',
        'Electric cars are becoming cheaper every year, and many people believe they will soon replace petrol vehicles completely.',
      ],
      [
        'Decidió vivir un año sin coche → "THE DECISION was partly financial…" explica por qué → "The first few weeks were harder".',
        'Las primeras semanas fueron duras → "More than once in that first month, I came close to giving up" → "The TURNING POINT came when…".',
        'La bici hace los trayectos agradables → "The bicycle ALSO changed my social life" → "There were, OF COURSE, moments when a car would have been invaluable".',
        'Se replanteó lo que hacía en la emergencia → "EVEN SO, I came to the conclusion that occasional emergencies did not justify…" → resultados económicos.',
        'Ahorro y pérdida de peso → "Perhaps the most surprising change, THOUGH, was psychological" → la decisión al acabar el año.',
        'Se apuntó a un servicio de coche compartido → "IT has worked well" → reflexión final. El párrafo sobre coches eléctricos no encaja en la historia: sobra.',
      ],
    ),
  },
]
