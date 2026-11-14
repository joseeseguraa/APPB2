import type { PartInfo } from '../../types'

export const formalLetter: PartInfo = {
  slug: 'formal-letter',
  name: 'Email / letter (formal)',
  nameEs: 'Carta o email formal: solicitud o queja · Part 2',
  summary: 'Part 2 · opcional · 140–190 palabras',
  suggestedMinutes: 40,
  theory: [
    {
      title: 'Qué es',
      points: [
        'Una carta o email a alguien que no conoces o a una institución.',
        'Los tipos más frecuentes son la solicitud de un trabajo, una beca o un curso (application) y la queja (complaint).',
        'El enunciado suele ser un anuncio con requisitos. Tienes que demostrar que cumples TODOS.',
      ],
    },
    {
      title: 'Estructura',
      points: [
        'Saludo: Dear Sir or Madam, (si no sabes el nombre) / Dear Mr Jones, / Dear Ms Smith,',
        'Párrafo 1, el motivo: I am writing to apply for… / I am writing to complain about…',
        'Párrafos 2–3: experiencia y cualidades relacionadas con cada requisito, o los problemas detallados si es una queja.',
        'Párrafo final: petición o acción esperada. I would be grateful if you could… / I would appreciate a full refund.',
        'Cierre: I look forward to hearing from you.',
        'Despedida: Yours faithfully, (si empezaste con Sir/Madam) / Yours sincerely, (si usaste el nombre) + nombre completo.',
      ],
    },
    {
      title: 'Registro y estilo',
      points: [
        'Formal: SIN contracciones, sin phrasal verbs coloquiales y sin exclamaciones.',
        'Vocabulario formal: receive (get), require (need), assist (help), purchase (buy), inform (tell), however (but).',
        'Peticiones indirectas y educadas: I would be grateful if…, Could you please…?',
      ],
    },
    {
      title: 'Frases útiles',
      points: [
        'Solicitud: I am writing in response to your advertisement… · I believe I would be suitable for this position because… · I have experience in… · I would welcome the opportunity to…',
        'Queja: I am writing to express my dissatisfaction with… · To make matters worse, … · I trust you will deal with this matter promptly. · I would like to request a full refund.',
      ],
    },
    {
      title: 'Errores típicos',
      points: [
        'Usar contracciones o un tono demasiado coloquial.',
        'Mezclar "Dear Sir or Madam" con "Yours sincerely".',
        'No responder a todos los requisitos del anuncio.',
      ],
    },
  ],
  model: {
    prompt: `You see this advertisement:

SUMMER JOBS AT ADVENTURE CAMP
We are looking for young people to help at our international summer camp for children aged 8–14.
You need to:
• speak English well
• enjoy working with children
• be able to help organise outdoor activities

Write to Mr Jones, the camp director, explaining why you would be suitable for the job.`,
    text: `Dear Mr Jones,

I am writing to apply for the position of assistant at your international summer camp, which I saw advertised on your website.

I am a nineteen-year-old student of Primary Education at the University of Valencia, and I have a good level of English, as I passed the B2 First exam last year. I also spent a summer in Ireland, where my fluency improved considerably.

As far as working with children is concerned, I have been a volunteer at a youth club for the past two years. My responsibilities include supervising groups of up to fifteen children and helping them with their homework.

In addition, I am a keen climber and a qualified lifeguard, so I would be able to help organise a range of outdoor activities safely.

I consider myself patient, responsible and energetic, qualities which I believe are essential for this job. I would be grateful if you could send me further information about the dates and accommodation.

I look forward to hearing from you.

Yours sincerely,
Laura Martínez`,
    comments: [
      'Empieza con el nombre del destinatario, así que termina con "Yours sincerely".',
      'El párrafo 1 dice claramente por qué escribe.',
      'Cada requisito del anuncio (inglés, niños, actividades) tiene su propio párrafo con pruebas concretas.',
      'Registro formal: sin contracciones, "As far as… is concerned", "I would be grateful if…".',
      'Termina con una petición educada y la fórmula de cierre estándar.',
    ],
  },
  checklist: [
    'El saludo y la despedida concuerdan (Sir/Madam → faithfully; nombre → sincerely).',
    'El primer párrafo explica el motivo de la carta.',
    'He cubierto TODOS los requisitos o puntos del enunciado.',
    'No hay contracciones ni expresiones coloquiales.',
    'Termino con una petición clara y "I look forward to hearing from you".',
  ],
  exercises: [
    {
      id: 'wr-fl-1',
      kind: 'writing',
      title: 'Complaint: online order',
      focus: 'Queja',
      prompt: `You recently bought a pair of trainers from an online shop. When they arrived, they were the wrong size and one of them was damaged. You phoned the customer service line, but nobody answered.

Write an email to the company explaining the problems and saying what you would like them to do.`,
      plan: [
        'Dear Sir or Madam + motivo: queja por un pedido (fecha y número de pedido).',
        'Problema 1 (talla equivocada) y problema 2 (zapatilla dañada), con detalles.',
        'Problema 3: el servicio de atención al cliente no contesta ("To make matters worse…").',
        'Qué quieres: cambio o reembolso, con un plazo.',
        'I look forward to your prompt reply. Yours faithfully, + nombre completo.',
      ],
    },
    {
      id: 'wr-fl-2',
      kind: 'writing',
      title: 'Application: café job',
      focus: 'Solicitud de trabajo',
      prompt: `You see this advertisement in an English-language newspaper:

STAFF WANTED – THE GREEN CUP CAFÉ
We are looking for friendly, hard-working people to work weekends in our busy café, which is popular with international tourists.
• Do you speak English and at least one other language?
• Do you have any experience of working with the public?
• Are you available in July and August?

Write your letter of application.`,
      plan: [
        'Dear Sir or Madam + motivo: solicitar el puesto anunciado (dónde lo viste).',
        'Idiomas: tu nivel de inglés y otros idiomas, con alguna prueba.',
        'Experiencia de cara al público: trabajos o voluntariado.',
        'Disponibilidad en verano y cualidades personales.',
        'Petición (entrevista) + cierre formal + Yours faithfully.',
      ],
    },
    {
      id: 'wr-fl-3',
      kind: 'writing',
      title: 'Application: scholarship',
      focus: 'Solicitud de beca',
      prompt: `You see this announcement on the website of a language school in London:

SCHOLARSHIPS AVAILABLE
We are offering three scholarships for a four-week summer English course. To apply, write to the director, Ms Carter, telling us:
• why you want to improve your English
• what you would contribute to the school
• how you would use the experience in the future

Write your letter.`,
      plan: [
        'Dear Ms Carter + motivo.',
        'Por qué quieres mejorar tu inglés (estudios, trabajo, sueños).',
        'Qué aportarías: actividades, cultura de tu país, actitud…',
        'Cómo usarías la experiencia en el futuro.',
        'Agradecimiento + I look forward to hearing from you. Yours sincerely, + nombre.',
      ],
    },
    {
      id: 'wr-fl-4',
      kind: 'writing',
      title: 'Complaint: hotel stay',
      focus: 'Queja',
      prompt: `You recently stayed for three nights at a hotel that described itself on its website as "quiet, modern and close to the beach". Your experience was very different.

Write a letter to the hotel manager explaining what was wrong and what you expect the hotel to do.`,
      plan: [
        'Dear Sir or Madam + motivo (fechas de la estancia).',
        'Contrasta lo que prometía la web con la realidad: ruido, instalaciones antiguas, distancia a la playa.',
        'Cómo afectó a tus vacaciones y cómo reaccionó el personal.',
        'Qué esperas: reembolso parcial o disculpa.',
        'Cierre formal + Yours faithfully.',
      ],
    },
  ],
}

export const report: PartInfo = {
  slug: 'report',
  name: 'Report',
  nameEs: 'Informe con apartados · Part 2',
  summary: 'Part 2 · opcional · 140–190 palabras',
  suggestedMinutes: 40,
  theory: [
    {
      title: 'Qué es',
      points: [
        'Un informe para un superior (director, jefe, profesor) o para un comité.',
        'Su objetivo es presentar información de forma clara y hacer recomendaciones. No pretende entretener.',
        'Se basa en hechos: "I asked other students…", "According to a survey…".',
      ],
    },
    {
      title: 'Estructura (con títulos)',
      points: [
        'Título: "Report on…".',
        'Introduction: el objetivo del informe (The aim of this report is to…) y cómo has obtenido la información.',
        '2–3 apartados con TÍTULO propio que respondan a los puntos del enunciado. Puedes usar viñetas.',
        'Recommendation(s) / Conclusion: lo que propones y por qué.',
      ],
    },
    {
      title: 'Registro y estilo',
      points: [
        'Formal e impersonal: sin contracciones, con pasivas (It was found that…) y sin emociones.',
        'Puedes usar "I" para la recomendación final (I would recommend…).',
        'Vocabulario de datos: the majority of, a large number of, over half, only a few.',
      ],
    },
    {
      title: 'Frases útiles',
      points: [
        'Introducción: The aim/purpose of this report is to… · This report is based on…',
        'Datos: Most students felt that… · It was found that… · According to the survey, … · The majority of those asked…',
        'Recomendar: I would recommend that… · It would be advisable to… · I suggest + -ing · In view of the above, …',
      ],
    },
    {
      title: 'Errores típicos',
      points: [
        'No poner títulos en los apartados.',
        'Escribir como un artículo o un essay, con opiniones emocionales.',
        'Olvidar las recomendaciones.',
      ],
    },
  ],
  model: {
    prompt: `Your college wants to improve its facilities for students. The principal has asked you to write a report. In your report you should:
• describe the current facilities
• say which ones need improving
• suggest how the money should be spent

Write your report.`,
    text: `Report on student facilities

Introduction
The aim of this report is to describe the facilities currently available at our college, identify those that need improving and recommend how the money should be spent. It is based on a survey of eighty students.

Current facilities
On the whole, students are satisfied with the library, which is well equipped and open until late. The sports hall is also popular, although some of the equipment is old.

Areas for improvement
The main complaint concerns the canteen. Over two thirds of the students surveyed said that the food was expensive and that there was not enough space at lunchtime. In addition, many mentioned that there are very few places to study in groups.

Recommendations
In view of the above, I would recommend spending most of the money on enlarging the canteen and offering cheaper, healthier meals. It would also be advisable to convert one of the empty classrooms into a group study area. If these changes were made, students' experience of the college would improve considerably.`,
    comments: [
      'Título y apartados con encabezado, como pide el formato de informe.',
      'La introducción dice el objetivo y la fuente de información (una encuesta).',
      'Cada apartado responde a uno de los tres puntos del enunciado.',
      'Lenguaje de datos: "On the whole", "Over two thirds of the students surveyed", "many mentioned".',
      'Recomendaciones con estructuras formales: "I would recommend + -ing", "It would also be advisable to…" y un second conditional al final.',
    ],
  },
  checklist: [
    'Tengo título y apartados con encabezados.',
    'La introducción explica el objetivo del informe.',
    'He tratado TODOS los puntos del enunciado.',
    'El tono es formal e impersonal (pasivas, datos, sin contracciones).',
    'Hay recomendaciones claras al final.',
  ],
  exercises: [
    {
      id: 'wr-re-1',
      kind: 'writing',
      title: 'After-school activities',
      focus: 'Centro educativo',
      prompt: `The director of your language school wants to know what students think about the after-school activities the school offers. You have been asked to write a report. You should:
• describe the activities that are offered
• say which are the most and least popular, and why
• suggest one new activity

Write your report.`,
      plan: [
        'Título "Report on after-school activities".',
        'Introduction: objetivo + fuente ("I spoke to twenty students…").',
        'Current activities: lista breve, puede ir con viñetas.',
        'Popularity: las más y menos populares, con razones y datos.',
        'Recommendation: una actividad nueva y su beneficio.',
      ],
    },
    {
      id: 'wr-re-2',
      kind: 'writing',
      title: 'Tourist attractions in your town',
      focus: 'Turismo',
      prompt: `A group of British students is going to spend a day in your town. The organiser has asked you to write a report. You should:
• describe two or three places they could visit
• explain why these places would interest young people
• give advice about eating and getting around

Write your report.`,
      plan: [
        'Título + Introduction (objetivo).',
        'Places to visit: 2–3 lugares con una breve descripción.',
        'Why they would enjoy them: razones pensadas para jóvenes.',
        'Practical advice: comida y transporte.',
        'Conclusion: un itinerario recomendado.',
      ],
    },
    {
      id: 'wr-re-3',
      kind: 'writing',
      title: 'Greener ways to travel',
      focus: 'Medio ambiente',
      prompt: `Your school wants to encourage students to travel to school in a more environmentally friendly way. The head teacher has asked you to write a report. You should:
• describe how students currently travel to school
• explain why some students do not use greener options
• recommend ways to encourage change

Write your report.`,
      plan: [
        'Título + Introduction con la fuente (encuesta).',
        'Current situation: datos ("The majority… by car").',
        'Obstacles: distancia, seguridad, falta de carriles bici…',
        'Recommendations: 2–3 medidas concretas (aparcamiento de bicis, autobús escolar, incentivos).',
      ],
    },
    {
      id: 'wr-re-4',
      kind: 'writing',
      title: 'A school trip',
      focus: 'Evaluación de una actividad',
      prompt: `Your class recently went on a trip to a museum or a place of interest. Your teacher has asked you to write a report about the trip. You should:
• describe what you did
• say what students liked and did not like
• suggest how future trips could be improved

Write your report.`,
      plan: [
        'Título + Introduction (objetivo y fecha del viaje).',
        'The visit: qué se hizo, en orden y de forma breve.',
        'Students\' opinions: lo positivo y lo negativo (con datos).',
        'Recommendations for future trips.',
      ],
    },
  ],
}

export const review: PartInfo = {
  slug: 'review',
  name: 'Review',
  nameEs: 'Reseña de una película, libro, restaurante… · Part 2',
  summary: 'Part 2 · opcional · 140–190 palabras',
  suggestedMinutes: 40,
  theory: [
    {
      title: 'Qué es',
      points: [
        'La opinión sobre algo que has visto, leído, probado o visitado: una película, una serie, un libro, un restaurante, una app, un concierto…',
        'Tiene que DESCRIBIR y también EVALUAR, y terminar con una recomendación.',
        'El lector decide con tu reseña si le interesa o no.',
      ],
    },
    {
      title: 'Estructura',
      points: [
        'Título: el nombre de lo que reseñas y, si quieres, un subtítulo valorativo.',
        'Introducción: qué es, dónde o cuándo lo viste o probaste, y una primera impresión.',
        'Descripción: argumento (sin destripar el final), comida, ambiente, funciones…',
        'Evaluación: puntos fuertes y débiles, con ejemplos.',
        'Recomendación: ¿a quién se lo recomiendas y por qué? (I would highly recommend it to anyone who…)',
      ],
    },
    {
      title: 'Registro y estilo',
      points: [
        'Semiformal y expresivo: puedes usar alguna contracción.',
        'Muchos adjetivos de opinión: gripping, predictable, mouth-watering, overpriced, user-friendly, breathtaking.',
        'Adverbios que matizan: absolutely, rather, quite, slightly, extremely.',
        'Para contar argumentos se usa el presente: The film tells the story of…',
      ],
    },
    {
      title: 'Frases útiles',
      points: [
        'Película o libro: It is set in… · The story revolves around… · The plot is gripping/predictable · The acting is superb',
        'Restaurante: The menu offers… · The service was attentive/slow · good value for money',
        'Evaluar: What I liked most was… · The only drawback was… · Although…, … · On the downside, …',
        'Recomendar: I would highly recommend… · It\'s well worth seeing/visiting · If you enjoy…, you\'ll love… · Give it a miss if…',
      ],
    },
    {
      title: 'Errores típicos',
      points: [
        'Contar todo el argumento sin dar opinión.',
        'Destripar el final (spoilers).',
        'Olvidar la recomendación final.',
      ],
    },
  ],
  model: {
    prompt: `You see this announcement on an English-language website:

REVIEWS WANTED
RESTAURANTS
Have you eaten at a restaurant recently that you would recommend (or not)? Write a review telling us about the food, the service and the atmosphere, and say whether you would recommend it to other people.

Write your review.`,
    text: `La Huerta: fresh, friendly and full of flavour

Last Saturday I went to La Huerta, a small family-run restaurant near the market, to celebrate my sister's birthday, and I have to say it was one of the best meals I've had in a long time.

The menu is short but imaginative, and almost everything is made with vegetables from the owners' own farm. My starter, a cold tomato soup with fresh basil, was absolutely delicious, and the rice with seasonal vegetables that followed was even better. The only disappointment was the dessert, which was rather too sweet for my taste.

The staff were friendly and attentive without being intrusive, and our waiter was happy to explain how each dish had been prepared. The atmosphere is relaxed and cosy, although it can get quite noisy when the restaurant is full.

Overall, I would highly recommend La Huerta to anyone who appreciates simple, honest food. Prices are reasonable, but make sure you book in advance, especially at weekends.`,
    comments: [
      'El título incluye el nombre y una valoración ("fresh, friendly and full of flavour").',
      'La introducción sitúa al lector (qué, dónde, cuándo) y adelanta una opinión.',
      'Responde a los tres puntos del enunciado: comida, servicio y ambiente.',
      'Equilibra lo positivo con lo negativo ("The only disappointment…", "although it can get quite noisy").',
      'Adjetivos y adverbios variados: imaginative, absolutely delicious, rather too sweet, attentive, cosy.',
      'Termina con una recomendación clara y un consejo práctico.',
    ],
  },
  checklist: [
    'El título incluye el nombre de lo que reseño.',
    'He descrito Y he evaluado (no solo he contado).',
    'He mencionado al menos un punto negativo para equilibrar.',
    'Uso adjetivos y adverbios de opinión variados.',
    'Termino con una recomendación clara (a quién y por qué).',
  ],
  exercises: [
    {
      id: 'wr-rv-1',
      kind: 'writing',
      title: 'A film or series',
      focus: 'Cine y televisión',
      prompt: `You see this announcement in an English-language magazine:

REVIEWS WANTED
Have you seen a film or a TV series recently that you think other young people would enjoy? Write a review telling us what it is about, what you liked and didn't like about it, and who you would recommend it to.

Write your review.`,
      plan: [
        'Título: el nombre y una valoración breve.',
        'Introducción: qué es (género), dónde lo viste y una primera impresión.',
        'De qué trata, en presente, sin spoilers.',
        'Lo que te gustó y lo que no (actuación, guion, banda sonora…).',
        'Recomendación: a quién y por qué.',
      ],
    },
    {
      id: 'wr-rv-2',
      kind: 'writing',
      title: 'A book',
      focus: 'Lectura',
      prompt: `Your college magazine has asked students to send in reviews of a book they have read and enjoyed. Write a review saying what the book is about, what makes it special and why other students should read it.

Write your review.`,
      plan: [
        'Título con el nombre del libro.',
        'Introducción: autor, género y cómo llegaste al libro.',
        'Argumento y personajes, sin destripar el final.',
        'Qué lo hace especial: estilo, mensaje, personajes.',
        'Por qué deberían leerlo otros estudiantes.',
      ],
    },
    {
      id: 'wr-rv-3',
      kind: 'writing',
      title: 'An app',
      focus: 'Tecnología',
      prompt: `You see this announcement on a technology website:

APP REVIEWS WANTED
Tell us about an app that you use regularly. What does it do? How easy is it to use? Is there anything that could be improved? Would you recommend it?

Write your review.`,
      plan: [
        'Título: nombre de la app y una valoración.',
        'Introducción: qué es y cuánto tiempo llevas usándola.',
        'Qué hace y cómo la usas.',
        'Facilidad de uso y lo que se podría mejorar.',
        'Recomendación con matices (Ideal for…, but if you…).',
      ],
    },
    {
      id: 'wr-rv-4',
      kind: 'writing',
      title: 'A concert or event',
      focus: 'Ocio',
      prompt: `You see this announcement on a website for young people:

REVIEWS WANTED
Have you been to a concert, festival or sports event recently? Write a review describing the event, saying what was good and bad about it, and whether you would go again.

Write your review.`,
      plan: [
        'Título con el nombre del evento.',
        'Introducción: qué, dónde, cuándo y con quién.',
        'Descripción: ambiente, momentos destacados.',
        'Lo bueno y lo malo (organización, precio, sonido, colas…).',
        '¿Volverías? Recomendación final.',
      ],
    },
  ],
}
