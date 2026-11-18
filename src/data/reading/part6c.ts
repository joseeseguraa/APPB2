import type { GappedTextExercise } from '../../types'
import { gapped } from '../helpers'

export const part6ExercisesC: GappedTextExercise[] = [
  {
    id: 'rd6-07',
    kind: 'gapped-text',
    title: 'The return of the bicycle courier',
    focus: 'Reportaje: referencias y contraste',
    text: `Twenty years ago, bicycle couriers were a familiar sight in big cities, racing between offices with envelopes full of contracts and documents. Then email arrived, and the job almost disappeared. {1} Now, surprisingly, they are back.

The reason is online shopping. As more and more people order food, medicine and clothes to their homes, city streets have become crowded with delivery vans. {2} Bicycles, by contrast, can move easily through traffic, park almost anywhere and produce no pollution at all.

Several cities have started to encourage the change. In some places, delivery companies receive discounts if they use bikes for short journeys, and special loading areas have been created for them. {3} Some of these new bikes can carry up to two hundred kilos, as much as a small van.

For the riders themselves, the job is demanding. Couriers can cover more than eighty kilometres a day, in all weathers, and the pay is often based on the number of deliveries rather than the hours worked. {4} Many say they enjoy the freedom and the feeling of being outdoors rather than stuck behind a desk.

Not everyone welcomes the trend. Pedestrians complain about bikes on pavements, and some shop owners worry about losing parking space for customers. {5} Most cities simply were not designed for so many different types of vehicle to share the same space.

Still, supporters believe that the bicycle will play a central role in the future of city transport. {6} If they are right, the sound of a bicycle bell may soon be as typical of city life as the sound of traffic once was.`,
    ...gapped(
      'rd6-07',
      [
        'Within a few years, most of the riders had found other work.',
        'These cause traffic jams, block cycle lanes and add to air pollution.',
        'Manufacturers have also begun to produce electric cargo bikes.',
        'Despite this, few of them would choose to do anything else.',
        'These conflicts are not easy to resolve.',
        'They point out that the vast majority of urban deliveries are of light items travelling short distances.',
        'The first bicycles appeared in Europe at the beginning of the nineteenth century.',
      ],
      [
        'Llega el email y el trabajo casi desaparece → "Within a few years, most of the riders had found other work". Después: "Now… they are back" (contraste).',
        '"Delivery vans" → "THESE cause traffic jams…" → "Bicycles, BY CONTRAST…": el contraste con las furgonetas necesita que antes se hable de sus problemas.',
        'Las ciudades fomentan el cambio → los fabricantes "ALSO" ayudan con bicis eléctricas de carga → "Some of THESE new bikes can carry…".',
        'El trabajo es duro y mal pagado → "DESPITE THIS, few would choose anything else" → "Many say they enjoy the freedom".',
        'Quejas de peatones y comerciantes → "THESE CONFLICTS are not easy to resolve" → las ciudades no están diseñadas para tantos vehículos.',
        'Los defensores creen en la bici → "THEY point out…" (they = supporters) → "If they are right…". La frase sobre las primeras bicicletas no encaja en ningún hueco: sobra.',
      ],
    ),
  },
  {
    id: 'rd6-08',
    kind: 'gapped-text',
    title: 'My first marathon',
    focus: 'Narración: secuencia temporal y pronombres',
    text: `I have never thought of myself as sporty. At school I was always the last to be chosen for any team, and as an adult my idea of exercise was walking to the bus stop. So when my sister suggested we run a marathon together, I laughed. {1}

Her argument was simple. Our mother had been diagnosed with a heart condition the year before, and my sister wanted to raise money for the hospital that had treated her. {2} I agreed before I had time to change my mind.

The first training run was a disaster. I managed about a kilometre before I had to stop, red-faced and breathing so hard that a passing dog walker asked if I was all right. {3} But my sister had made a training plan, and she was not going to let me give up.

Slowly, almost without noticing, I improved. One kilometre became three, then five, then ten. {4} I started looking forward to my early-morning runs, when the streets were empty and the city was just waking up.

The race itself was harder than anything I had imagined. Around the thirtieth kilometre, my legs simply stopped wanting to move. {5} Then I heard a voice from the crowd shouting my name. It was my mother, holding a sign that my sister had painted.

We crossed the finish line together, six hours after we had started. It was not a fast time, but it did not matter. {6} I have run four more marathons since then, and I still have the sign.`,
    ...gapped(
      'rd6-08',
      [
        'It took her nearly a week to convince me she was serious.',
        'When she asked me to join her, it was impossible to say no.',
        'I went home convinced that I had made a terrible mistake.',
        'Even more surprisingly, I began to enjoy it.',
        'For a few minutes I seriously considered giving up.',
        'Between us, we had raised more than four thousand pounds.',
        'Most professional runners finish in just over two hours.',
      ],
      [
        'Se rió de la idea → "It took HER nearly a week to convince me SHE WAS SERIOUS" → "Her argument was simple".',
        'La hermana quiere recaudar dinero para el hospital → "When she asked me to join her, it was impossible to say no" → "I agreed before I had time to change my mind".',
        'El primer entreno es un desastre → "I went home convinced I had made a terrible mistake" → "BUT my sister had made a plan" (contraste).',
        'Va mejorando → "EVEN MORE SURPRISINGLY, I began to enjoy IT" → empieza a disfrutar de las carreras de madrugada.',
        'En el km 30 las piernas no responden → "I seriously considered giving up" → "THEN I heard a voice…".',
        'Cruzan la meta; el tiempo no importa → "Between us, we had raised more than four thousand pounds" (el objetivo real). La frase de los profesionales no encaja en ningún hueco: sobra.',
      ],
    ),
  },
]
