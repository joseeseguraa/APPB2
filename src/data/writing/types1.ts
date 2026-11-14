import type { PartInfo } from '../../types'

export const essay: PartInfo = {
  slug: 'essay',
  name: 'Essay',
  nameEs: 'Redacción de opinión, Part 1 (obligatoria)',
  summary: 'Part 1, obligatorio, 140–190 palabras',
  suggestedMinutes: 40,
  theory: [
    {
      title: 'Qué es',
      points: [
        'Es la Part 1 del Writing y es OBLIGATORIA: todo el mundo escribe un essay.',
        'Te dan una pregunta y dos notas sobre las que TIENES que escribir, más una tercera idea que debes aportar tú ("your own idea").',
        'Hay que escribir entre 140 y 190 palabras. Normalmente se lo escribes a tu profesor de inglés.',
        'Tienes que dar tu opinión y justificarla con argumentos y ejemplos.',
      ],
    },
    {
      title: 'Estructura párrafo a párrafo (5 párrafos)',
      points: [
        '1. Introducción (2–3 frases): presenta el tema con tus palabras, sin copiar la pregunta, y anuncia que vas a analizar distintos puntos de vista. No hace falta dar tu opinión todavía.',
        '2. Nota 1: una idea principal + explicación + ejemplo.',
        '3. Nota 2: lo mismo. Puedes incluir el otro punto de vista (However, some people argue…).',
        '4. Tu propia idea: un aspecto diferente de las notas. ¡Es obligatorio! Si falta, pierdes puntos de Content.',
        '5. Conclusión: resume y da tu opinión clara (In conclusion, I firmly believe…).',
      ],
    },
    {
      title: 'Registro y estilo',
      points: [
        'Neutro o formal: sin contracciones (do not, it is), sin expresiones coloquiales y sin "you know" ni "stuff".',
        'Usa conectores variados: Firstly, In addition, Moreover, However, On the other hand, Nevertheless, As a result, Therefore.',
        'Incluye estructuras B2: pasivas, condicionales, oraciones de relativo, "not only… but also".',
      ],
    },
    {
      title: 'Frases útiles',
      points: [
        'Introducir: It is often said that… · Nowadays, more and more people… · There is no doubt that…',
        'Opinar: In my opinion… · I firmly believe that… · From my point of view… · It seems to me that…',
        'Contrastar: On the one hand… On the other hand… · However, … · Although… · Despite the fact that…',
        'Añadir: What is more, … · Furthermore, … · Not only… but also…',
        'Ejemplificar: For example, … · For instance, … · such as…',
        'Concluir: In conclusion, … · To sum up, … · All things considered, … · On balance, …',
      ],
    },
    {
      title: 'Errores típicos',
      points: [
        'Olvidar la tercera idea o repetir con otras palabras una de las notas.',
        'Copiar la pregunta en la introducción.',
        'No dar una opinión clara en la conclusión.',
        'Escribir un solo bloque de texto sin párrafos.',
      ],
    },
  ],
  model: {
    prompt: `In your English class you have been talking about technology. Now your English teacher has asked you to write an essay.

Has technology made our lives better?

Notes — Write about:
1. communication
2. work
3. ............ (your own idea)`,
    text: `There is no doubt that technology has transformed the way we live. However, whether all of these changes have been positive is a matter of debate.

On the one hand, technology has revolutionised communication. Thanks to smartphones and video calls, we can stay in touch with relatives who live on the other side of the world, which was almost impossible a few decades ago.

Similarly, technology has made many jobs more efficient. Tasks that used to take days, such as sending documents, can now be completed in minutes. Nevertheless, it has also led to people being expected to answer emails at any time, which can increase stress.

Another important aspect is health. Modern medical technology allows doctors to diagnose illnesses earlier and treat them more effectively, which has helped millions of people to live longer.

In conclusion, although technology has some disadvantages, I firmly believe that it has improved our lives overall. The key is to use it wisely rather than letting it control us.`,
    comments: [
      'La introducción presenta el tema con otras palabras y anuncia el debate, pero no copia la pregunta.',
      'Cada nota tiene su propio párrafo, con una idea clara y un ejemplo.',
      'El párrafo 3 incluye el otro punto de vista ("Nevertheless…"), lo que hace el argumento más equilibrado.',
      'La tercera idea (la salud) es diferente de las notas, como pide el enunciado.',
      'Conectores variados: On the one hand, Similarly, Nevertheless, Another important aspect, In conclusion.',
      'Estructuras B2: present perfect, relativas con "which", "used to", pasiva ("being expected"), "rather than + -ing".',
      'No hay contracciones: el registro es neutro y formal.',
    ],
  },
  checklist: [
    'He escrito sobre las DOS notas y he añadido una tercera idea propia y diferente.',
    'Mi opinión queda clara en la conclusión.',
    'Tengo 5 párrafos: introducción, 3 de desarrollo y conclusión.',
    'No he usado contracciones ni expresiones coloquiales.',
    'He usado al menos 5 conectores distintos.',
    'He incluido ejemplos que apoyan mis argumentos.',
  ],
  exercises: [
    {
      id: 'wr-es-1',
      kind: 'writing',
      title: 'School uniforms',
      focus: 'Educación',
      prompt: `In your English class you have been talking about school life. Now your English teacher has asked you to write an essay.

Should students have to wear a school uniform?`,
      notes: ['cost for families', 'expressing your personality', '............ (your own idea)'],
      plan: [
        'Introducción: en muchos países los uniformes son obligatorios y en otros no; es un tema que divide a la gente.',
        'Coste: ¿es más barato un uniforme que comprar ropa de moda? Da un ejemplo concreto.',
        'Personalidad: los jóvenes quieren expresarse con la ropa, pero el uniforme evita la presión por las marcas.',
        'Tu idea: por ejemplo, el sentido de pertenencia al centro, la igualdad entre alumnos o la comodidad.',
        'Conclusión: tu opinión clara, a favor o en contra, con un resumen del motivo principal.',
      ],
    },
    {
      id: 'wr-es-2',
      kind: 'writing',
      title: 'City or countryside?',
      focus: 'Vivienda y estilo de vida',
      prompt: `In your English class you have been talking about where people live. Now your English teacher has asked you to write an essay.

Is it better to live in a city or in the countryside?`,
      notes: ['job opportunities', 'quality of life', '............ (your own idea)'],
      plan: [
        'Introducción: cada vez más gente se muda a las ciudades, aunque algunos hacen el camino contrario.',
        'Trabajo: las ciudades ofrecen más oportunidades, aunque el teletrabajo está cambiando esto.',
        'Calidad de vida: tranquilidad, aire limpio y naturaleza frente al estrés y el tráfico.',
        'Tu idea: por ejemplo, el ocio y la cultura, el precio de la vivienda o los servicios (hospitales, transporte).',
        'Conclusión: depende de la etapa de la vida, pero termina con tu preferencia.',
      ],
    },
    {
      id: 'wr-es-3',
      kind: 'writing',
      title: 'Public transport',
      focus: 'Medio ambiente y gobierno',
      prompt: `In your English class you have been talking about the environment. Now your English teacher has asked you to write an essay.

Should governments spend more money on public transport?`,
      notes: ['pollution', 'cost', '............ (your own idea)'],
      plan: [
        'Introducción: el tráfico es un problema creciente en las ciudades y hay debate sobre cómo solucionarlo.',
        'Contaminación: más transporte público significa menos coches y aire más limpio.',
        'Coste: es una inversión cara, pero a largo plazo puede ahorrar dinero (salud, carreteras).',
        'Tu idea: por ejemplo, las personas sin coche (jóvenes, mayores), los atascos o las zonas rurales.',
        'Conclusión: tu opinión, quizá con una condición (siempre que se gestione bien…).',
      ],
    },
    {
      id: 'wr-es-4',
      kind: 'writing',
      title: 'Social media and young people',
      focus: 'Tecnología',
      prompt: `In your English class you have been talking about the internet. Now your English teacher has asked you to write an essay.

Does social media do more harm than good to young people?`,
      notes: ['friendships', 'mental health', '............ (your own idea)'],
      plan: [
        'Introducción: casi todos los jóvenes usan redes sociales a diario, y sus efectos preocupan a padres y expertos.',
        'Amistades: facilitan el contacto, pero pueden sustituir las relaciones cara a cara.',
        'Salud mental: la comparación constante y la presión por la imagen frente al apoyo de comunidades.',
        'Tu idea: por ejemplo, el aprendizaje, las noticias falsas, la privacidad o la creatividad.',
        'Conclusión: equilibrada pero clara, por ejemplo que el problema no son las redes sino el uso que se hace de ellas.',
      ],
    },
  ],
}

export const article: PartInfo = {
  slug: 'article',
  name: 'Article',
  nameEs: 'Artículo para una revista o web, Part 2',
  summary: 'Part 2, opcional, 140–190 palabras',
  suggestedMinutes: 40,
  theory: [
    {
      title: 'Qué es',
      points: [
        'Un texto para una revista, un periódico o una web en inglés. El enunciado suele ser un anuncio: "Articles wanted!".',
        'El objetivo es INTERESAR y ENTRETENER al lector, no solo informar.',
        'Suele pedir tu experiencia personal y tu opinión sobre un tema.',
      ],
    },
    {
      title: 'Estructura',
      points: [
        'Título atractivo: corto, con gancho. Puede ser una pregunta, un juego de palabras o una frase intrigante.',
        'Introducción: engancha al lector con una pregunta retórica, un dato sorprendente o una anécdota.',
        'Desarrollo (2–3 párrafos): responde a TODAS las preguntas del anuncio, con detalles y ejemplos personales.',
        'Conclusión: cierra con una reflexión, una recomendación o una pregunta al lector.',
      ],
    },
    {
      title: 'Registro y estilo',
      points: [
        'Semiformal o informal: se permiten contracciones (it\'s, you\'ll) y un tono cercano.',
        'Habla directamente al lector con "you": Have you ever wondered…? Imagine…',
        'Usa adjetivos vivos (stunning, unforgettable, breathtaking) en lugar de "good" o "nice".',
        'Varía la longitud de las frases: alguna muy corta para dar efecto.',
      ],
    },
    {
      title: 'Frases útiles',
      points: [
        'Enganchar: Have you ever…? · Imagine… · Believe it or not, … · Let me tell you about…',
        'Contar: I\'ll never forget the first time… · What I love most about… is…',
        'Opinar: To be honest, … · As far as I\'m concerned, … · If you ask me, …',
        'Cerrar: So, what are you waiting for? · Give it a try – you won\'t regret it! · Who knows? Maybe…',
      ],
    },
    {
      title: 'Errores típicos',
      points: [
        'Olvidar el título.',
        'Escribir como un essay: demasiado formal, sin personalidad y sin dirigirte al lector.',
        'No responder a todas las preguntas del anuncio.',
      ],
    },
  ],
  model: {
    prompt: `You have seen this announcement in an English-language magazine:

ARTICLES WANTED!
A PLACE I LOVE
Tell us about a place that is special to you. Why is it important to you? Would you recommend it to other people?
The best articles will be published next month.

Write your article.`,
    text: `My secret corner of the city

Everyone has a place where they feel completely at home. Mine isn't a famous monument or a beautiful beach – it's a tiny bookshop hidden in a side street in the old town.

The first time I walked in, I was fourteen and trying to escape the rain. I ended up staying for three hours. The shop is a maze of narrow corridors, with books piled from floor to ceiling and a cat that sleeps on whichever shelf it likes. The owner, an elderly man called Andrés, always seems to know exactly which book you need, even when you don't.

Why is it so special to me? Because it's the one place where I can switch off completely. No phones, no noise, just the smell of old paper and the sound of pages turning.

Would I recommend it? Absolutely – as long as you aren't in a hurry. Go on a rainy afternoon, ask Andrés for a suggestion and let yourself get lost. You won't regret it.`,
    comments: [
      'El título crea curiosidad ("secret corner").',
      'La introducción sorprende: no es un monumento ni una playa, sino una librería diminuta.',
      'Responde a las tres preguntas del anuncio: describe el lugar, explica por qué es especial y lo recomienda.',
      'Usa preguntas retóricas para estructurar el texto ("Why is it so special to me?", "Would I recommend it?").',
      'Hay frases cortas para dar efecto ("No phones, no noise…") y detalles concretos (el gato, Andrés).',
      'El registro es informal, con contracciones, y se dirige al lector ("You won\'t regret it").',
    ],
  },
  checklist: [
    'Tengo un título atractivo.',
    'La introducción engancha (pregunta, sorpresa, anécdota).',
    'He respondido a TODAS las preguntas del anuncio.',
    'Me dirijo al lector y uso al menos una pregunta retórica.',
    'Uso adjetivos variados y expresivos.',
    'La conclusión deja una reflexión o una recomendación.',
  ],
  exercises: [
    {
      id: 'wr-ar-1',
      kind: 'writing',
      title: 'A person who inspired me',
      focus: 'Personas',
      prompt: `You have seen this announcement on an English-language website:

ARTICLES WANTED!
SOMEONE WHO INSPIRED ME
Who is a person who has had a big influence on your life? How did they influence you? What is the most important thing you learnt from them?

Write your article.`,
      plan: [
        'Título con gancho (p. ej. "The teacher who changed my mind").',
        'Introducción: pregunta retórica ("Has anyone ever changed the way you see the world?") y presenta a la persona.',
        'Quién es y cómo la conociste, con algún detalle concreto o una anécdota.',
        'Cómo te influyó y qué es lo más importante que aprendiste.',
        'Conclusión: reflexión final o mensaje al lector.',
      ],
    },
    {
      id: 'wr-ar-2',
      kind: 'writing',
      title: 'Can sport change your life?',
      focus: 'Deporte y aficiones',
      prompt: `You see this announcement in an international student magazine:

CAN A SPORT OR HOBBY CHANGE YOUR LIFE?
Tell us about a sport or hobby that is important to you. How did you start? How has it changed you?
We will publish the most interesting articles.

Write your article.`,
      plan: [
        'Título: una pregunta o una frase sorprendente.',
        'Introducción: un momento clave (p. ej. "I\'ll never forget the day I…").',
        'Cómo empezaste.',
        'Cómo te ha cambiado: carácter, salud, amigos, confianza…',
        'Conclusión: anima al lector a probar algo nuevo.',
      ],
    },
    {
      id: 'wr-ar-3',
      kind: 'writing',
      title: "Technology I couldn't live without",
      focus: 'Tecnología',
      prompt: `You see this announcement on a website for young people:

ARTICLES WANTED
THE TECHNOLOGY I COULDN'T LIVE WITHOUT
What piece of technology is most important in your daily life? Why? What would your life be like without it?

Write your article.`,
      plan: [
        'Título original (evita "My mobile phone").',
        'Introducción: imagina un día sin ese aparato o esa app.',
        'Qué es y cómo lo usas en tu día a día.',
        'Cómo sería tu vida sin él. Usa second conditional: If I didn\'t have…, I would…',
        'Conclusión con humor o con una reflexión.',
      ],
    },
    {
      id: 'wr-ar-4',
      kind: 'writing',
      title: 'The perfect weekend',
      focus: 'Ocio',
      prompt: `You see this announcement in an English-language magazine:

THE PERFECT WEEKEND
What would your perfect weekend be like? Where would you go, who would you be with and what would you do?
Write us an article and you could win a weekend away!

Write your article.`,
      plan: [
        'Título que invite a leer.',
        'Introducción: contraste con un fin de semana normal.',
        'Dónde y con quién. Usa would y descripciones.',
        'Qué harías, contado en orden: viernes por la noche, sábado, domingo.',
        'Conclusión: pregunta al lector cuál sería el suyo.',
      ],
    },
  ],
}

export const informalEmail: PartInfo = {
  slug: 'informal-email',
  name: 'Email / letter (informal)',
  nameEs: 'Email o carta a un amigo, Part 2',
  summary: 'Part 2, opcional, 140–190 palabras',
  suggestedMinutes: 40,
  theory: [
    {
      title: 'Qué es',
      points: [
        'Respondes al email de un amigo o conocido que te pide consejo, información u opinión.',
        'Normalmente el enunciado incluye un fragmento del email original con 2 o 3 preguntas. Tienes que responder a TODAS.',
      ],
    },
    {
      title: 'Estructura',
      points: [
        'Saludo: Hi Sam, / Dear Sam,',
        'Apertura (1–2 frases): agradece el email o comenta algo de lo que te contó. Thanks for your email! / Great to hear from you!',
        'Un párrafo para cada pregunta, con consejos o información concreta.',
        'Cierre: una frase amable o un plan. Can\'t wait to see you! / Let me know if you need anything else.',
        'Despedida + tu nombre: Best wishes, / Love, / See you soon,',
      ],
    },
    {
      title: 'Registro y estilo',
      points: [
        'Informal: contracciones, phrasal verbs, exclamaciones y preguntas directas.',
        'Conectores informales: Anyway, … · By the way, … · As for…, … · Oh, and…',
        'Para dar consejos: You should… · Why don\'t you…? · If I were you, I\'d… · It\'s worth + -ing',
      ],
    },
    {
      title: 'Errores típicos',
      points: [
        'Responder solo a algunas preguntas.',
        'Ser demasiado formal (Dear Sir, I am writing to…).',
        'Olvidar el saludo, la despedida o la firma.',
      ],
    },
  ],
  model: {
    prompt: `This is part of an email you have received from your English friend, Sam:

"I'm planning to visit your country next summer for two weeks. Which places do you think I should visit? What's the best way to travel around? And what food should I definitely try?"

Write your email.`,
    text: `Hi Sam,

Great to hear from you! I'm so glad you've finally decided to come to Spain – you're going to love it.

If you've only got two weeks, I'd spend a few days in Madrid and then head south to Andalusia. Seville and Granada are absolutely stunning, especially the Alhambra, but book your tickets in advance because they sell out really quickly.

As for getting around, the high-speed train is definitely the best option. It's fast, comfortable and not too expensive if you buy your tickets early. I wouldn't bother hiring a car unless you want to explore the countryside.

And the food! You can't leave without trying a proper paella, but have it at lunchtime, like the locals do. You should also try tapas – just order a few different plates and share them.

By the way, I'll be in Madrid at the end of July, so let me know if you're there too and we can meet up!

Can't wait to see you!
Best wishes,
Lucía`,
    comments: [
      'Abre con una reacción natural al email ("Great to hear from you!").',
      'Hay un párrafo para cada una de las tres preguntas: lugares, transporte y comida.',
      'Consejos con estructuras variadas: I\'d…, book…, I wouldn\'t bother + -ing, You can\'t leave without + -ing, You should…',
      'Conectores informales: As for…, And…!, By the way.',
      'Cierra con un plan concreto y una despedida cálida.',
    ],
  },
  checklist: [
    'He respondido a TODAS las preguntas del email.',
    'Tengo saludo, apertura, cierre, despedida y firma.',
    'El tono es informal: contracciones, exclamaciones, phrasal verbs.',
    'He dado consejos con estructuras variadas (should, why don\'t you, if I were you…).',
    'Cada pregunta tiene su propio párrafo.',
  ],
  exercises: [
    {
      id: 'wr-ie-1',
      kind: 'writing',
      title: 'A part-time job',
      focus: 'Consejo',
      prompt: `This is part of an email you have received from your English friend, Alex:

"I'm thinking of getting a part-time job while I'm studying. Do you think it's a good idea? What kind of job would you recommend? And how many hours a week do you think I could work without it affecting my studies?"

Write your email.`,
      plan: [
        'Saludo y reacción a la noticia.',
        '¿Es buena idea? Da tu opinión con alguna ventaja y algún inconveniente.',
        'Qué trabajo le recomiendas y por qué.',
        'Cuántas horas, con un consejo práctico.',
        'Cierre (Good luck! Let me know how it goes) y firma.',
      ],
    },
    {
      id: 'wr-ie-2',
      kind: 'writing',
      title: 'A weekend visit',
      focus: 'Planes',
      prompt: `This is part of an email you have received from your English-speaking friend, Jo:

"I'm coming to stay with you for a weekend next month – I can't wait! What shall we do while I'm there? Is there anything special I should bring? And what's the easiest way to get from the airport to your house?"

Write your email.`,
      plan: [
        'Saludo y entusiasmo por la visita.',
        'Planes para el fin de semana: un par de propuestas concretas.',
        'Qué debe traer (ropa para el tiempo, algo para una actividad…).',
        'Cómo llegar desde el aeropuerto: indicaciones claras y sencillas.',
        'Cierre y firma.',
      ],
    },
    {
      id: 'wr-ie-3',
      kind: 'writing',
      title: 'Your new school',
      focus: 'Novedades',
      prompt: `This is part of an email you have received from your English friend, Chris:

"I heard you've just started at a new school (or job)! How's it going? What are the people like? Is there anything you don't like about it?"

Write your email.`,
      plan: [
        'Saludo y gracias por preguntar.',
        'Cómo te va: cuenta impresiones y alguna anécdota de los primeros días.',
        'La gente: compañeros y profesores o jefes.',
        'Lo que no te gusta, con un toque de humor.',
        'Pregúntale por su vida, despídete y firma.',
      ],
    },
    {
      id: 'wr-ie-4',
      kind: 'writing',
      title: 'An argument with a friend',
      focus: 'Relaciones',
      prompt: `This is part of an email you have received from your English friend, Sam:

"I've had a big argument with my best friend about something silly and now we're not speaking. I feel terrible. What do you think I should do? Has anything like this ever happened to you?"

Write your email.`,
      plan: [
        'Saludo y muestra empatía (Oh no, I\'m so sorry to hear that…).',
        'Consejos concretos: hablar en persona, pedir perdón, dar tiempo…',
        'Tu experiencia: cuenta una historia parecida en pasado.',
        'Ánimo y oferta de ayuda.',
        'Cierre y firma.',
      ],
    },
  ],
}
