import type { PartInfo } from '../../../types'

export const c1Letter: PartInfo = {
  slug: 'email-letter',
  name: 'Email / letter',
  nameEs: 'Email o carta, formal o informal',
  summary: 'Part 2, 220–260 palabras',
  suggestedMinutes: 45,
  theory: [
    {
      title: 'Qué es',
      points: [
        'Una de las opciones de la Part 2. Respondes a una situación: una carta a un periódico, a una empresa, a un director, o un email a un amigo o compañero.',
        'El registro depende del destinatario: formal para alguien que no conoces o una institución, informal para un amigo. En C1 se valora mucho que el registro sea coherente de principio a fin.',
        'Tienes que cubrir TODOS los puntos que pide el enunciado.',
      ],
    },
    {
      title: 'Estructura de una carta formal',
      points: [
        'Saludo: Dear Sir or Madam, (si no sabes el nombre) / Dear Ms Jones,',
        '1. Motivo de la carta: I am writing in response to… / with regard to…',
        '2–3. Desarrollo: un párrafo por cada punto del enunciado, con detalles y argumentos.',
        '4. Lo que esperas que pase: I would be grateful if… / I trust that you will…',
        'Despedida: Yours faithfully (con Sir or Madam) / Yours sincerely (con nombre), y tu nombre completo.',
      ],
    },
    {
      title: 'Estructura de un email informal',
      points: [
        'Saludo: Hi Sam, / Dear Sam,',
        '1. Conexión con el amigo: Great to hear from you! Sorry it\'s taken me so long to reply.',
        '2–3. Respuesta a cada cosa que te pregunta, con detalles personales y consejos.',
        '4. Cierre: Let me know what you decide. / Can\'t wait to see you.',
        'Despedida: Best wishes, / Take care, / Love,',
      ],
    },
    {
      title: 'Frases útiles',
      points: [
        'Formal, quejarse con tacto: I was disappointed to find that… / I feel I must draw your attention to…',
        'Formal, proponer: It might be worth considering… / I would strongly recommend…',
        'Informal, aconsejar: If I were you, I\'d… / Have you thought about…? / Whatever you do, don\'t…',
        'Informal, natural: To be honest, … / Anyway, … / The thing is, …',
      ],
    },
    {
      title: 'Errores típicos',
      points: [
        'Mezclar registros: contracciones y "Hi" en una carta formal, o frases rígidas en un email a un amigo.',
        'Olvidar uno de los puntos que pide el enunciado.',
        'Usar "Yours faithfully" después de "Dear Mr Smith".',
      ],
    },
  ],
  model: {
    prompt: `You have read a newspaper article saying that your town's public library may close because few people use it. You decide to write a letter to the editor of the newspaper. In your letter you should explain why the library is important to the community and suggest how it could attract more users.

Write your letter.`,
    text: `Dear Sir or Madam,

I am writing in response to your article of 12 March, which reported that the council is considering closing the public library on Mill Street due to falling visitor numbers. While I understand the financial pressures facing the council, I believe such a decision would be deeply mistaken.

The library is far more than a place to borrow books. For many elderly residents, it is one of the few places where they can meet others and feel part of the community. It also provides free internet access to families who cannot afford it at home, and a quiet place to study for students who share crowded flats. Losing these services would hit the most vulnerable people in our town hardest.

That said, I accept that the library needs to change if it is to survive. At present, it closes at five o'clock, which makes it inaccessible to anyone who works full-time. Extending opening hours on at least two evenings a week would make a considerable difference. The library could also host regular events, such as reading groups, homework clubs or talks by local writers, which would bring in people who have never thought of visiting. Finally, a modest investment in publicity, particularly on social media, would remind residents of what is available on their doorstep.

I would urge the council to give these ideas a chance before taking a decision that cannot easily be reversed.

Yours faithfully,
Laura Méndez`,
    comments: [
      'Registro formal coherente: sin contracciones, "Dear Sir or Madam" con "Yours faithfully".',
      'El primer párrafo explica el motivo y muestra comprensión ("While I understand…") antes de discrepar: tono diplomático de C1.',
      'Un párrafo para cada punto del enunciado: por qué es importante y cómo atraer usuarios.',
      'Las propuestas son concretas (horarios, actividades, publicidad) y están ordenadas con conectores.',
      'Vocabulario preciso: deeply mistaken, the most vulnerable, on their doorstep, cannot easily be reversed.',
    ],
  },
  checklist: [
    'He elegido un registro (formal o informal) y lo he mantenido en todo el texto.',
    'He respondido a todos los puntos del enunciado, cada uno en su párrafo.',
    'El saludo y la despedida son los adecuados.',
    'He usado frases de cortesía o de cercanía según el destinatario.',
    'Entre 220 y 260 palabras.',
  ],
  exercises: [
    {
      id: 'c1-wr-le-1',
      kind: 'writing',
      title: 'Complaint about a course',
      focus: 'Carta formal de queja',
      prompt: `You recently attended a week-long language course abroad, but it did not match the description in the brochure. Write a letter to the director of the language school. In your letter you should describe the differences between the course advertised and the course you attended, explain how this affected you, and say what action you expect the school to take.

Write your letter.`,
      plan: [
        'Motivo: curso, fechas y que no correspondió a lo anunciado.',
        'Diferencias concretas: tamaño de los grupos, horas de clase, alojamiento, actividades.',
        'Cómo te afectó: no aprendiste lo que esperabas, perdiste dinero o tiempo.',
        'Qué esperas: reembolso parcial, otro curso gratis, una respuesta antes de una fecha. Cierre firme pero educado.',
      ],
    },
    {
      id: 'c1-wr-le-2',
      kind: 'writing',
      title: 'Advice for a friend',
      focus: 'Email informal',
      prompt: `You have received this email from an English friend:

"I've been offered a job in your country, but I'm not sure whether to accept. I'd have to learn the language and I don't know anyone there. What's daily life really like? And what would you do in my position?"

Write your email.`,
      plan: [
        'Saludo cercano y reacción a la noticia.',
        'Cómo es la vida diaria: horarios, carácter de la gente, coste de vida, con ejemplos personales.',
        'El idioma y hacer amigos: consejos prácticos.',
        'Tu recomendación clara ("If I were you…") y despedida ofreciendo ayuda.',
      ],
    },
    {
      id: 'c1-wr-le-3',
      kind: 'writing',
      title: 'Letter to a council',
      focus: 'Carta formal con propuesta',
      prompt: `Your local council is planning to turn a park near your home into a car park. Write a letter to the council. In your letter you should explain why the park is valuable to local residents and suggest an alternative solution to the parking problem.

Write your letter.`,
      plan: [
        'Motivo: el plan del ayuntamiento y tu postura.',
        'Valor del parque: salud, niños, mayores, medio ambiente.',
        'Alternativa: aparcamientos en las afueras con autobús, mejor transporte, zonas de aparcamiento para residentes.',
        'Cierre: pide que reconsideren la decisión y escuchen a los vecinos.',
      ],
    },
    {
      id: 'c1-wr-le-4',
      kind: 'writing',
      title: 'Reference for a colleague',
      focus: 'Carta formal de recomendación',
      prompt: `A colleague of yours has applied for a job as a team leader at another company. The company has asked you to write a letter of reference. In your letter you should describe how long and in what capacity you have known this person, their personal qualities and their skills, and explain why they would be suitable for the job.

Write your letter.`,
      plan: [
        'Presentación: cuánto tiempo y en qué puesto conoces a la persona.',
        'Cualidades personales con ejemplos concretos (fiable, paciente, resolutiva).',
        'Habilidades profesionales: organización, comunicación, experiencia con equipos.',
        'Por qué sería buen líder de equipo y cierre recomendándola sin reservas.',
      ],
    },
  ],
}

export const c1Proposal: PartInfo = {
  slug: 'proposal',
  name: 'Proposal',
  nameEs: 'Propuesta para un superior o un comité',
  summary: 'Part 2, 220–260 palabras',
  suggestedMinutes: 45,
  theory: [
    {
      title: 'Qué es',
      points: [
        'Un texto que propone un plan o una acción a alguien que tiene que tomar una decisión: un director, un comité, un jefe.',
        'Se parece al report, pero mira hacia el FUTURO: el report describe lo que ha pasado; la proposal propone lo que debería hacerse.',
        'Registro formal o neutro, con título y apartados con encabezados.',
      ],
    },
    {
      title: 'Estructura',
      points: [
        'Título: Proposal for… ',
        'Introduction: el objetivo de la propuesta (The aim of this proposal is to…).',
        '2–3 apartados con encabezados según los puntos del enunciado (Current situation, Suggestions, Benefits…).',
        'Conclusion / Recommendation: resume y anima a aceptarla (I strongly recommend that…).',
      ],
    },
    {
      title: 'Frases útiles',
      points: [
        'Objetivo: The purpose of this proposal is to outline… / This proposal sets out…',
        'Proponer: It is proposed that… / One option would be to… / I would suggest that the college (should) invest in…',
        'Beneficios: This would enable students to… / The main advantage of this would be…',
        'Cerrar: If these measures were implemented, … / I am confident that…',
      ],
    },
    {
      title: 'Errores típicos',
      points: [
        'Escribir sin encabezados, como si fuera un essay.',
        'Describir el problema y no proponer nada concreto.',
        'Tono demasiado personal o emocional.',
      ],
    },
  ],
  model: {
    prompt: `The college where you study has received a grant to improve the facilities available to students. The principal has asked students to submit proposals. Write a proposal explaining which facility should be improved, how the money should be spent, and how students would benefit.

Write your proposal.`,
    text: `Proposal for improving the student common room

Introduction
The aim of this proposal is to suggest how the recent grant could best be used to improve student facilities. Having consulted around fifty students, I believe the common room should be the priority.

Current situation
At present, the common room is small, poorly lit and furnished with old, uncomfortable chairs. As a result, it is rarely used, and students tend to spend their breaks in corridors or leave the building altogether. There is nowhere suitable for group work outside the library, where talking is not permitted.

Suggestions
I would recommend that the grant be spent in three ways. Firstly, the room could be extended into the unused storage area next door, almost doubling its size. Secondly, new furniture should be purchased, including several large tables suitable for group projects. Finally, better lighting and a small kitchen area with a kettle and microwave would make the room far more welcoming.

Benefits
These changes would give students a comfortable space to relax, which is particularly important for those with long gaps between classes. The group work area would also ease pressure on the library and encourage students to collaborate. In the long term, a lively common room would help create a stronger sense of community within the college.

Conclusion
Improving the common room would benefit the largest possible number of students at a relatively modest cost. I therefore strongly recommend that this proposal be accepted.`,
    comments: [
      'Título y encabezados claros que siguen los puntos del enunciado.',
      'La introducción da el objetivo y la base de la propuesta ("Having consulted around fifty students").',
      'Las sugerencias son concretas y están ordenadas (Firstly, Secondly, Finally).',
      'Usa el subjuntivo formal: "I would recommend that the grant be spent", "that this proposal be accepted".',
      'Los beneficios están vinculados a cada sugerencia y la conclusión pide una decisión.',
    ],
  },
  checklist: [
    'Tiene título y encabezados.',
    'He propuesto acciones concretas, no solo he descrito el problema.',
    'He explicado los beneficios.',
    'Registro formal, sin contracciones.',
    'Termino con una recomendación clara.',
    'Entre 220 y 260 palabras.',
  ],
  exercises: [
    {
      id: 'c1-wr-pr-1',
      kind: 'writing',
      title: 'A green workplace',
      focus: 'Medio ambiente en la empresa',
      prompt: `Your manager wants the company to become more environmentally friendly and has asked staff for proposals. Write a proposal describing the current situation, suggesting practical changes the company could make, and explaining how these changes would benefit both the company and the environment.

Write your proposal.`,
      plan: [
        'Introducción: objetivo de la propuesta.',
        'Situación actual: papel, energía, transporte de empleados, residuos.',
        'Sugerencias concretas: reciclaje, teletrabajo parcial, bicicletas, proveedores locales.',
        'Beneficios para la empresa (ahorro, imagen) y para el medio ambiente. Recomendación final.',
      ],
    },
    {
      id: 'c1-wr-pr-2',
      kind: 'writing',
      title: 'A cultural festival',
      focus: 'Ocio y comunidad',
      prompt: `Your town council wants to organise a cultural festival to attract more visitors and has invited residents to send proposals. Write a proposal suggesting what kind of festival should be held, what activities it should include and how it could be promoted.

Write your proposal.`,
      plan: [
        'Introducción: objetivo y tipo de festival (música, gastronomía, historia local).',
        'Actividades: para distintas edades, con ejemplos concretos.',
        'Promoción: redes sociales, colaboración con hoteles, prensa regional.',
        'Conclusión: beneficios económicos y para la comunidad.',
      ],
    },
    {
      id: 'c1-wr-pr-3',
      kind: 'writing',
      title: 'Helping new students',
      focus: 'Educación',
      prompt: `The university where you study wants to help international students settle in more quickly. Write a proposal for the student services committee, explaining the main difficulties new international students face and suggesting a programme of support.

Write your proposal.`,
      plan: [
        'Introducción: objetivo y fuente de información (encuesta, experiencia propia).',
        'Dificultades: idioma, alojamiento, burocracia, soledad.',
        'Programa: estudiantes mentores, semana de bienvenida, talleres, intercambio de idiomas.',
        'Recomendación y beneficios para la universidad.',
      ],
    },
    {
      id: 'c1-wr-pr-4',
      kind: 'writing',
      title: 'A better staff canteen',
      focus: 'Trabajo y salud',
      prompt: `The company you work for is planning to renovate the staff canteen. Write a proposal for the management, describing the problems with the current canteen, suggesting improvements, and explaining how these would affect staff well-being.

Write your proposal.`,
      plan: [
        'Introducción: objetivo de la propuesta.',
        'Problemas: comida poco sana, espacio pequeño, horarios, ruido.',
        'Mejoras: menú más variado, zona tranquila, horarios más amplios.',
        'Efecto en el bienestar y la productividad. Recomendación final.',
      ],
    },
  ],
}

export const c1Report: PartInfo = {
  slug: 'report',
  name: 'Report',
  nameEs: 'Informe con encabezados',
  summary: 'Part 2, 220–260 palabras',
  suggestedMinutes: 45,
  theory: [
    {
      title: 'Qué es',
      points: [
        'Un informe para un superior, un comité o una organización sobre algo que ha pasado o que existe: un evento, un servicio, una visita.',
        'Describe y EVALÚA la situación actual y termina con recomendaciones.',
        'Registro formal e impersonal, con título y encabezados.',
      ],
    },
    {
      title: 'Estructura',
      points: [
        'Título: Report on…',
        'Introduction: objetivo del informe y de dónde sale la información (Based on a survey of…).',
        '2–3 apartados con encabezados según el enunciado. Evalúa: qué funcionó y qué no.',
        'Recommendations / Conclusion: qué debería hacerse a partir de lo anterior.',
      ],
    },
    {
      title: 'Frases útiles',
      points: [
        'Objetivo: The purpose of this report is to evaluate… / This report is based on…',
        'Datos: The majority of respondents… / Only a small minority felt that… / It was generally agreed that…',
        'Evaluar: … proved highly successful / … fell short of expectations / … was well received',
        'Recomendar: It is recommended that… / In light of these findings, …',
      ],
    },
    {
      title: 'Errores típicos',
      points: [
        'Escribirlo en primera persona como una historia.',
        'Recomendaciones que no se apoyan en lo que se ha descrito antes.',
        'Olvidar los encabezados.',
      ],
    },
  ],
  model: {
    prompt: `You recently took part in a one-week work experience programme organised by your college. The college director has asked you to write a report on the programme. In your report you should describe what the programme involved, evaluate how useful it was for students, and recommend any changes for next year.

Write your report.`,
    text: `Report on the work experience programme

Introduction
The purpose of this report is to evaluate the work experience programme that took place last month and to suggest improvements. It is based on my own experience and on a survey completed by thirty participating students.

What the programme involved
Students spent five days with local employers, ranging from law firms and hospitals to small businesses. Each student was assigned a supervisor and was expected to complete a short project, which was then presented at college the following week.

Usefulness for students
The programme was well received overall. The majority of respondents said that it had given them a realistic idea of working life and helped them decide on their future studies. Those placed with larger organisations were particularly positive about the responsibility they had been given. However, around a third of students felt that their placement had little connection with their interests, and several reported spending much of the week doing routine tasks such as photocopying.

Recommendations
In light of these findings, I would recommend two changes. Firstly, students should be allowed to state their preferences before placements are allocated, which would make the experience more relevant. Secondly, employers should receive clearer guidance on what students are expected to do, so that the week offers genuine learning opportunities rather than simple administrative work. If these changes were introduced, the programme could become one of the most valuable parts of the college year.`,
    comments: [
      'Título, encabezados y registro impersonal ("It is based on…", "The majority of respondents…").',
      'Indica de dónde sale la información: su experiencia y una encuesta.',
      'Evalúa con equilibrio: lo positivo y los problemas, con cifras aproximadas.',
      'Las recomendaciones responden directamente a los problemas descritos.',
      'Vocabulario de informe: well received, respondents, placements, allocated, in light of these findings.',
    ],
  },
  checklist: [
    'Tiene título y encabezados.',
    'Digo de dónde sale la información.',
    'Evalúo (lo bueno y lo malo), no solo describo.',
    'Las recomendaciones se basan en lo anterior.',
    'Registro formal e impersonal.',
    'Entre 220 y 260 palabras.',
  ],
  exercises: [
    {
      id: 'c1-wr-re-1',
      kind: 'writing',
      title: 'Sports facilities',
      focus: 'Ocio y salud',
      prompt: `The manager of a local sports centre wants to attract more young people and has asked you to write a report. In your report you should describe the facilities currently available, explain why young people do not use them more, and recommend changes.

Write your report.`,
      plan: [
        'Introducción: objetivo y fuente (encuesta a jóvenes, visitas).',
        'Instalaciones actuales: qué hay y en qué estado.',
        'Por qué los jóvenes no van: precio, horarios, actividades poco atractivas.',
        'Recomendaciones concretas basadas en lo anterior.',
      ],
    },
    {
      id: 'c1-wr-re-2',
      kind: 'writing',
      title: 'An international conference',
      focus: 'Trabajo',
      prompt: `You attended an international conference on behalf of your company. Your manager has asked you to write a report. In your report you should outline the main topics of the conference, assess how relevant they are to your company, and recommend whether staff should attend next year.

Write your report.`,
      plan: [
        'Introducción: conferencia, fecha y objetivo del informe.',
        'Temas principales: dos o tres, resumidos.',
        'Relevancia: qué ideas podría aplicar la empresa y cuáles no.',
        'Recomendación: si merece la pena, quién debería ir y por qué.',
      ],
    },
    {
      id: 'c1-wr-re-3',
      kind: 'writing',
      title: 'Public transport in your town',
      focus: 'Ciudad',
      prompt: `An international organisation is collecting information about public transport in different towns. Write a report about public transport in your town. In your report you should describe the main forms of transport, evaluate their strengths and weaknesses, and suggest how they could be improved.

Write your report.`,
      plan: [
        'Introducción: objetivo y fuentes.',
        'Medios de transporte principales: autobús, metro, bicicletas públicas…',
        'Puntos fuertes y débiles: precio, frecuencia, cobertura, accesibilidad.',
        'Sugerencias de mejora.',
      ],
    },
    {
      id: 'c1-wr-re-4',
      kind: 'writing',
      title: 'A volunteering scheme',
      focus: 'Comunidad',
      prompt: `Your college ran a volunteering scheme last term in which students helped local charities. The principal has asked you to write a report. In your report you should describe the activities students took part in, evaluate the benefits for students and for the community, and suggest how the scheme could be developed.

Write your report.`,
      plan: [
        'Introducción: objetivo y fuentes (opiniones de estudiantes y de las organizaciones).',
        'Actividades realizadas.',
        'Beneficios para estudiantes y para la comunidad, y algún problema.',
        'Cómo ampliarlo o mejorarlo.',
      ],
    },
  ],
}

export const c1Review: PartInfo = {
  slug: 'review',
  name: 'Review',
  nameEs: 'Reseña con valoración y recomendación',
  summary: 'Part 2, 220–260 palabras',
  suggestedMinutes: 45,
  theory: [
    {
      title: 'Qué es',
      points: [
        'Una reseña para una revista o una web: de un libro, una película, un restaurante, un museo, una app…',
        'En C1 suele pedirse algo más que describir: comparar dos cosas, valorar si algo cumple un objetivo o si es adecuado para cierto público.',
        'Registro neutro o algo informal, con un estilo atractivo para el lector. Lleva título.',
      ],
    },
    {
      title: 'Estructura',
      points: [
        'Título llamativo.',
        '1. Introducción: qué reseñas y una frase que enganche.',
        '2. Descripción breve (sin contar el final).',
        '3. Evaluación: puntos fuertes y débiles, con ejemplos.',
        '4. Recomendación: a quién se lo recomiendas y por qué.',
      ],
    },
    {
      title: 'Frases útiles',
      points: [
        'Enganchar: If you are looking for…, look no further. / Few films have caused as much debate as…',
        'Valorar: The plot is gripping / predictable. / The performances are outstanding. / It falls short of…',
        'Matizar: Although it is not without its flaws, … / What lets it down is…',
        'Recomendar: I would wholeheartedly recommend it to… / It is well worth a visit, provided that…',
      ],
    },
    {
      title: 'Errores típicos',
      points: [
        'Contar todo el argumento y dejar poco espacio para la opinión.',
        'Usar siempre los mismos adjetivos (good, nice, interesting).',
        'No responder a lo que pide el enunciado (por ejemplo, la comparación).',
      ],
    },
  ],
  model: {
    prompt: `A film website has asked readers to send in reviews of a film based on a book. You should briefly describe the story, compare the film with the book, and say whether you would recommend watching the film without reading the book first.

Write your review.`,
    text: `From page to screen: The Silent Coast

When it was announced that The Silent Coast, one of the most celebrated novels of the decade, was being turned into a film, many readers feared the worst. Having now seen it, I can report that their fears were only partly justified.

The story follows Ana, a young marine biologist who returns to the fishing village where she grew up to investigate the mysterious disappearance of the local dolphins. As she uncovers the truth, she is forced to confront both the village's secrets and her own past.

Visually, the film is stunning. The wild Atlantic coastline is captured so beautifully that it almost becomes a character in its own right, and the lead actress gives a quietly powerful performance. Where the film falls short is in its treatment of the minor characters. In the novel, the villagers are complex and often contradictory people; on screen, several of them are reduced to stereotypes. The director has also cut most of Ana's inner thoughts, which were the heart of the book, so some of her decisions seem puzzling rather than inevitable.

Would I recommend seeing the film without reading the book? On balance, yes. It works perfectly well as a gripping mystery, and viewers who know nothing about the story will not notice what is missing. However, anyone who wants to understand what makes the story truly memorable should read the novel first. It offers a depth that no two-hour film could hope to match.`,
    comments: [
      'Título y una introducción que crea expectativa.',
      'Describe la historia en un solo párrafo, sin contar el final.',
      'Compara libro y película, como pide el enunciado, con puntos fuertes y débiles concretos.',
      'Responde directamente a la pregunta de la recomendación, con matices.',
      'Vocabulario variado: stunning, quietly powerful, falls short, reduced to stereotypes, gripping.',
    ],
  },
  checklist: [
    'Tiene título y una introducción atractiva.',
    'La descripción es breve y sin destripar el final.',
    'He valorado con ejemplos concretos (puntos fuertes y débiles).',
    'He respondido a todo lo que pide el enunciado (comparación, público…).',
    'Termino con una recomendación clara.',
    'Entre 220 y 260 palabras.',
  ],
  exercises: [
    {
      id: 'c1-wr-rv-1',
      kind: 'writing',
      title: 'Two restaurants',
      focus: 'Comparar',
      prompt: `A travel magazine is publishing reviews of places to eat in different cities. Write a review comparing two restaurants in your town that offer different styles of food. Say which one you would recommend to a visitor and why.

Write your review.`,
      plan: [
        'Introducción: el panorama gastronómico de tu ciudad.',
        'Restaurante 1: ambiente, comida, precio.',
        'Restaurante 2: lo mismo, comparando.',
        'Recomendación para un visitante y por qué.',
      ],
    },
    {
      id: 'c1-wr-rv-2',
      kind: 'writing',
      title: 'A language-learning app',
      focus: 'Tecnología',
      prompt: `An education website has asked users to review language-learning apps. Write a review of an app you have used. Describe its main features, evaluate how effective it is for learning a language, and say what kind of learner it would suit best.

Write your review.`,
      plan: [
        'Introducción: por qué la usaste.',
        'Funciones principales.',
        'Eficacia: qué aprendiste y qué no (gramática, hablar, constancia).',
        'Para qué tipo de estudiante es y para cuál no.',
      ],
    },
    {
      id: 'c1-wr-rv-3',
      kind: 'writing',
      title: 'A museum for families',
      focus: 'Cultura',
      prompt: `A website for parents is collecting reviews of museums. Write a review of a museum you have visited. Describe what it offers, evaluate how well it caters for children of different ages, and say whether it is worth the entrance fee.

Write your review.`,
      plan: [
        'Introducción: el museo y una frase que enganche.',
        'Qué ofrece: colecciones, actividades, instalaciones.',
        'Para niños de distintas edades: qué funciona y qué no.',
        'Relación calidad-precio y recomendación.',
      ],
    },
    {
      id: 'c1-wr-rv-4',
      kind: 'writing',
      title: 'A book that changed your mind',
      focus: 'Lectura',
      prompt: `A literary magazine has invited readers to review a book that changed the way they think about something. Write a review describing the book, explaining how it changed your opinion, and saying who else would benefit from reading it.

Write your review.`,
      plan: [
        'Introducción: el libro y qué pensabas antes de leerlo.',
        'De qué trata, en pocas líneas.',
        'Cómo cambió tu opinión, con un ejemplo del libro.',
        'A quién se lo recomiendas.',
      ],
    },
  ],
}
