import type { PartInfo } from '../../../types'

export const c1Essay: PartInfo = {
  slug: 'essay',
  name: 'Essay',
  nameEs: 'Ensayo argumentativo, Part 1 (obligatoria)',
  summary: 'Part 1, obligatorio, 220–260 palabras',
  suggestedMinutes: 45,
  theory: [
    {
      title: 'Qué es',
      points: [
        'Es la Part 1 del Writing de C1 y es OBLIGATORIA.',
        'Te dan unas notas de una charla o un debate con TRES puntos. Tienes que elegir DOS, decir cuál es más importante (o más eficaz) y justificarlo.',
        'Debajo aparecen algunas opiniones que se oyeron en el debate. Puedes usarlas, pero con tus palabras; no es obligatorio.',
        'Entre 220 y 260 palabras. Se lo escribes a tu profesor o a tu clase.',
      ],
    },
    {
      title: 'Estructura (4–5 párrafos)',
      points: [
        '1. Introducción: presenta el problema general con tus palabras y anuncia los dos puntos que vas a tratar.',
        '2. Primer punto: explica por qué importa, con un ejemplo o una consecuencia concreta. Puedes reconocer una limitación.',
        '3. Segundo punto: lo mismo. Compáralo con el primero.',
        '4. Conclusión: di claramente cuál de los dos es más importante y POR QUÉ. Esta comparación es lo que distingue un essay de C1.',
      ],
    },
    {
      title: 'Lo que se espera en C1',
      points: [
        'Evaluar, no solo describir: matiza ("this is only effective if…", "admittedly…").',
        'Vocabulario preciso y variado: no repitas "important", "problem" o "good"; usa crucial, pressing, beneficial, detrimental, far-reaching.',
        'Estructuras complejas sin forzarlas: inversión (Not only…), frases escindidas (What is needed is…), participios (Having considered…), condicionales mixtas.',
        'Registro formal y sin contracciones.',
      ],
    },
    {
      title: 'Frases útiles',
      points: [
        'Introducir: It is widely acknowledged that… / X has become a pressing issue in recent years.',
        'Evaluar: Arguably, the most effective way to… / This would go a long way towards… / Admittedly, … / This is not to say that…',
        'Comparar: Whereas X addresses the symptoms, Y tackles the root cause. / Of the two, … is by far the more…',
        'Concluir: Having weighed up both options, I would argue that… / On balance, …',
      ],
    },
    {
      title: 'Errores típicos',
      points: [
        'Tratar los tres puntos (pierdes espacio y profundidad) o solo uno.',
        'No decir cuál es más importante, o decirlo sin justificarlo.',
        'Copiar literalmente las opiniones del enunciado.',
        'Pasarse de 260 palabras: el texto pierde control y precisión.',
      ],
    },
  ],
  model: {
    prompt: `Your class has attended a panel discussion on what governments can do to reduce traffic congestion in cities. You have made the notes below.

Ways to reduce congestion:
• charging drivers to enter city centres
• investing in public transport
• encouraging people to work from home

Some opinions expressed in the discussion:
"Charges just punish people who have no alternative."
"Nobody will leave their car if the buses are unreliable."
"Working from home isn't possible for everyone."

Write an essay discussing TWO of the ways in your notes. You should explain which way would be more effective, giving reasons to support your opinion.`,
    text: `Traffic congestion has become one of the most pressing problems facing modern cities, affecting not only journey times but also air quality and public health. While there is no single solution, two measures are frequently proposed: charging drivers to enter city centres and investing in public transport.

Congestion charges have produced impressive results in several European capitals, reducing traffic almost overnight. Their appeal lies in their simplicity: if driving becomes more expensive, fewer people will do it. However, such schemes are open to the criticism that they penalise those who have no realistic alternative, such as shift workers or people living in poorly connected areas. Without other options, a charge may simply become an additional tax on the least privileged.

Investment in public transport, by contrast, addresses the root of the problem. People rarely drive into city centres out of preference; they do so because buses are infrequent, trains are overcrowded or connections are poor. If reliable, affordable alternatives were available, many drivers would abandon their cars voluntarily. Admittedly, this approach is costly and its benefits take years to appear, but they are likely to be far more lasting.

Having weighed up both options, I would argue that investing in public transport is the more effective measure. Charges may deliver quicker results, but they are only fair once a genuine alternative exists. What cities need, therefore, is not to discourage driving but to make it unnecessary.`,
    comments: [
      'Elige DOS de los tres puntos y lo anuncia en la introducción.',
      'Cada párrafo evalúa: dice lo bueno y la limitación ("However, such schemes are open to the criticism…", "Admittedly…").',
      'Usa una de las opiniones del enunciado con sus propias palabras ("penalise those who have no realistic alternative").',
      'La conclusión compara y justifica: cuál es mejor y por qué ("only fair once a genuine alternative exists").',
      'Estructuras de C1: "Having weighed up…", condicional ("If reliable… were available"), frase escindida ("What cities need is…").',
      'Vocabulario preciso: pressing, penalise, the least privileged, root of the problem, lasting.',
    ],
  },
  checklist: [
    'He tratado exactamente DOS de los tres puntos.',
    'He dicho claramente cuál es más eficaz o importante y he explicado por qué.',
    'He evaluado cada punto (ventajas y limitaciones), no solo lo he descrito.',
    'Si he usado las opiniones del enunciado, las he reformulado.',
    'Registro formal, sin contracciones, con vocabulario variado.',
    'Entre 220 y 260 palabras.',
  ],
  exercises: [
    {
      id: 'c1-wr-es-1',
      kind: 'writing',
      title: 'Healthier lifestyles',
      focus: 'Salud pública',
      prompt: `Your class has watched a documentary about how to encourage people to lead healthier lives. You have made the notes below.

Ways to encourage healthier lifestyles:
• taxing unhealthy food
• providing free sports facilities
• health education in schools

Some opinions expressed in the documentary:
"Taxes hit poorer families hardest."
"Facilities are useless if nobody uses them."
"Habits are formed in childhood."

Write an essay discussing TWO of the ways in your notes. You should explain which way would be more effective, giving reasons to support your opinion.`,
      plan: [
        'Introducción: los problemas de salud ligados al estilo de vida (obesidad, sedentarismo) y los dos puntos que vas a tratar.',
        'Punto 1 (p. ej. impuestos): funcionan rápido, pero castigan más a las familias con menos dinero.',
        'Punto 2 (p. ej. educación): efecto lento pero duradero, porque los hábitos se forman de pequeños.',
        'Conclusión: cuál es más eficaz y por qué, quizá con una condición ("provided that…").',
      ],
    },
    {
      id: 'c1-wr-es-2',
      kind: 'writing',
      title: 'Protecting the countryside',
      focus: 'Medio ambiente',
      prompt: `Your class has attended a lecture on how to protect natural areas from damage. You have made the notes below.

Ways to protect natural areas:
• limiting the number of visitors
• stricter laws against pollution
• educating the public

Some opinions expressed in the lecture:
"Nature should be enjoyed by everyone, not just a lucky few."
"Laws are only as good as their enforcement."
"People protect what they understand."

Write an essay discussing TWO of the ways in your notes. You should explain which way would be more effective, giving reasons to support your opinion.`,
      plan: [
        'Introducción: presión creciente sobre parques naturales y costas.',
        'Limitar visitantes: protege de inmediato, pero plantea si la naturaleza debe ser solo para unos pocos.',
        'Leyes más estrictas: disuaden, pero dependen de que se hagan cumplir.',
        'Conclusión: elige una y justifica; puedes reconocer que lo ideal sería combinarlas, pero decide.',
      ],
    },
    {
      id: 'c1-wr-es-3',
      kind: 'writing',
      title: 'Young people and work',
      focus: 'Empleo',
      prompt: `Your class has had a discussion about how to reduce youth unemployment. You have made the notes below.

Ways to reduce youth unemployment:
• more vocational training
• financial incentives for employers
• careers advice in schools

Some opinions expressed in the discussion:
"Not everyone is suited to university."
"Companies will take the money and then let people go."
"Most teenagers have no idea what jobs exist."

Write an essay discussing TWO of the ways in your notes. You should explain which way would be more effective, giving reasons to support your opinion.`,
      plan: [
        'Introducción: el paro juvenil y sus consecuencias a largo plazo.',
        'Formación profesional: da habilidades reales que piden las empresas.',
        'Incentivos a empresas: crean empleo rápido, pero puede ser temporal.',
        'Conclusión: cuál ataca mejor la causa del problema.',
      ],
    },
    {
      id: 'c1-wr-es-4',
      kind: 'writing',
      title: 'Supporting the arts',
      focus: 'Cultura',
      prompt: `Your class has attended a talk on how governments should support the arts. You have made the notes below.

Ways to support the arts:
• funding museums and theatres
• arts education in schools
• grants for individual artists

Some opinions expressed in the talk:
"Free museums are mostly visited by people who could afford to pay."
"Every child deserves the chance to discover a talent."
"Grants often go to the same well-connected people."

Write an essay discussing TWO of the ways in your notes. You should explain which way would be more important, giving reasons to support your opinion.`,
      plan: [
        'Introducción: el valor de la cultura y el debate sobre el dinero público.',
        'Museos y teatros: acceso para todos, aunque quizá beneficien sobre todo a quien ya va.',
        'Educación artística: llega a todos los niños, efecto a largo plazo.',
        'Conclusión: cuál es más importante y por qué.',
      ],
    },
  ],
}
