import type { GappedTextExercise } from '../../../types'
import { gapped } from '../../helpers'

export const c1Part7: GappedTextExercise[] = [
  {
    id: 'c1-rd7-01',
    kind: 'gapped-text',
    unit: 'paragraph',
    title: 'Mapping the ocean floor',
    focus: 'Divulgación: referencias entre párrafos',
    text: `It is often said that we know more about the surface of the Moon than about the bottom of our own oceans. Like many familiar claims, this one is not quite accurate, but it is closer to the truth than most people would expect. Until recently, less than a quarter of the seabed had been mapped in any detail.

{1}

The reason is simple: water is very good at blocking the signals that we normally use to measure distance. Satellites can photograph every hill and valley on dry land, but light and radio waves fade within a few metres of the ocean surface. To see the bottom, scientists have to rely on sound.

{2}

The trouble is that this method is painfully slow. A ship can map only a narrow strip of seabed as it moves, and the deep ocean covers more than 300 million square kilometres. At the rate of a single vessel, the job would take several centuries.

{3}

This is the thinking behind an international project launched in 2017, which aims to produce a complete map of the ocean floor by 2030. Rather than relying on a few dedicated research ships, it collects data from fishing boats, cargo vessels and even private yachts that are fitted with simple sonar equipment.

{4}

Already, the results have changed the picture considerably. Since the project began, the proportion of the seabed mapped to a modern standard has roughly doubled. Researchers have discovered previously unknown underwater mountains, some of them thousands of metres high.

{5}

But the benefits go far beyond scientific curiosity. Accurate maps help predict how tsunamis will travel, where undersea cables can be laid safely and how ocean currents carry heat around the planet, which is vital for understanding climate change.

{6}

Some scientists worry that a detailed map could also make it easier for mining companies to target the deep sea, where fragile ecosystems have remained undisturbed for millions of years. Knowledge, as always, can be used in more than one way.`,
    ...gapped(
      'c1-rd7-01',
      [
        'That figure may seem surprising in an age when almost every street on the planet can be viewed online. Yet mapping the deep ocean presents challenges that have nothing to do with a lack of interest.',
        'Ships equipped with sonar send pulses of sound down to the seabed and measure how long the echo takes to return. The longer the delay, the deeper the water. By repeating this thousands of times, a detailed picture of the landscape below gradually emerges.',
        'Clearly, a different approach was needed. If the work could not be done faster, perhaps it could be shared among many more people.',
        'Each of these contributes a small piece of the puzzle. On its own, the data from one fishing trip is of little value, but combined with that from thousands of others, it begins to fill the gaps.',
        'These features matter more than they might seem. Underwater mountains influence the movement of water and nutrients, and they are often home to rich communities of marine life.',
        'Not everyone, however, sees the project in an entirely positive light.',
        'Exploring the deep sea is also extremely expensive, and many governments have reduced their funding for marine research in recent years.',
      ],
      [
        'El primer párrafo da la cifra ("less than a quarter") → "THAT FIGURE may seem surprising…" y anuncia que el problema no es falta de interés → "The reason is simple" explica cuál es.',
        '"Scientists have to rely on SOUND" → el párrafo explica cómo funciona el sonar → "THIS METHOD is painfully slow".',
        'Llevaría siglos con un solo barco → "Clearly, a different approach was needed… shared among many more people" → "THIS IS THE THINKING behind an international project".',
        'Barcos de pesca, mercantes y yates → "EACH OF THESE contributes a small piece of the puzzle" → "Already, the results have changed the picture".',
        'Han descubierto montañas submarinas → "THESE FEATURES matter more than they might seem" → "BUT the benefits go far beyond scientific curiosity".',
        'Tras los beneficios → "Not everyone, HOWEVER, sees the project in an entirely positive light" → "SOME SCIENTISTS WORRY…". El párrafo sobre el coste y la financiación no encaja en ningún hueco: sobra.',
      ],
    ),
  },
]
