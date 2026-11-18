# CONTEXTO — App de preparación B2 First (Cambridge)

> Documento vivo. Claude lo lee al empezar cada sesión y lo actualiza al terminar.
> Copia espejo en el proyecto de Claude "APP PREPARACIÓN B2".
> Repo: https://github.com/joseeseguraa/APPB2

## 1. Objetivo
App web para practicar el **Cambridge B2 First (FCE)** **por destrezas y por partes sueltas**: Use of English, Grammar, Vocabulary, Reading, Writing, Speaking y, al final, Listening. También tendrá simulacros cronometrados y seguimiento del progreso. La interfaz está en español y el contenido de examen en inglés.

**Preferencias de José:**
- Mucha variedad de ejercicios, siempre con una explicación en español.
- Writing separado por tipo de texto, con la estructura de cada uno explicada.
- Listening se deja para el final.

## 2. Formato oficial del examen (verificado en nov-2026, cambridgeenglish.org)
| Paper | Duración | Partes / preguntas | Peso |
|---|---|---|---|
| Reading & Use of English | 1h 15min | 7 partes / 52 preguntas | 40 % |
| Writing | 1h 20min | 2 partes | 20 % |
| Listening | ~40 min | 4 partes / 30 preguntas (cada audio se oye 2 veces) | 20 % |
| Speaking | ~14 min (en pareja) | 4 partes | 20 % |

- **UoE P1** Multiple-choice cloze (8) · **P2** Open cloze (8) · **P3** Word formation (8) · **P4** Key word transformation (6 ítems, 2–5 palabras)
- **Reading P5** Multiple choice (6) · **P6** Gapped text (6) · **P7** Multiple matching (10)
- **Writing P1** Essay obligatorio (140–190 palabras) · **P2** a elegir entre article / email-letter / report / review (140–190)
- **Listening P1** 8 extractos con 3 opciones (8) · **P2** Sentence completion (10) · **P3** Multiple matching (5) · **P4** Multiple choice (7)
- **Speaking P1** Entrevista (2 min) · **P2** Long turn con 2 fotos (1 min + 30 s) · **P3** Tarea colaborativa (2 + 1 min) · **P4** Discusión (4 min)

Escala Cambridge: 160–179 = B2 · 180–190 = C1 · 140–159 = B1.

## 3. Decisiones técnicas (aprobadas)
- React 19 + Vite + TypeScript + Tailwind v4. React Router con **HashRouter** (las URLs llevan `#/`).
- `base: './'` en Vite, para que funcione en cualquier hosting estático.
- **Contenido en archivos TypeScript tipados** en `src/data/<sección>/partN.ts`. Se eligió TS en lugar de JSON para que el compilador detecte errores. Los tipos están en `src/types.ts`.
- Tipos de ejercicio: `mc-cloze`, `open-cloze`, `word-formation`, `kwt` (formato de examen) y `choice`, `gap`, `error` (práctica por frases). En `error` la parte incorrecta va entre `[ ]`, y si la frase es correcta `correction` es `null`.
- Un `PartInfo` puede ser una parte del examen (number, questions, guide) o un tema (theory, summary).
- Para escribir contenido se usan los helpers `ch()`, `g()` y `er()`, que están en `src/data/helpers.ts`.
- Part 1: se escribe la respuesta correcta y 3 distractores con `mc()` (`src/data/helpers.ts`), que baraja las opciones de forma determinista.
- Huecos en los textos: `{1}`, `{2}`…
- Progreso en `localStorage`, clave `appb2.progress.v1` (`src/lib/progress.ts`).
- Corrección (`src/lib/answers.ts`, `src/lib/exercise.ts`): ignora mayúsculas, espacios y apóstrofos curvos, y acepta varias respuestas válidas.
- Tests (`src/content.test.ts`) que validan todo el contenido: número de huecos, opciones, que cada explicación existe, Part 4 entre 2 y 5 palabras con la palabra clave, y que las respuestas modelo puntúan 100 %.
- Despliegue: `.github/workflows/deploy.yml` (tests + build + GitHub Pages en cada push a `main`).

### Estructura
```
src/
  types.ts                 tipos de ejercicios y secciones
  data/sections.ts         índice de secciones/partes + guías de cada parte
  data/helpers.ts          mc() para Part 1
  data/uoe/part1..4.ts     contenido de Use of English
  data/grammar/*.ts        temas de gramática (teoría + ejercicios)
  data/vocabulary/*.ts     temas de vocabulario (teoría + ejercicios)
  data/reading/part5..7.ts textos de Reading
  data/writing/types1..2.ts tipos de Writing (teoría, modelo, checklist, tareas)
  components/WritingRunner.tsx  editor de Writing
  lib/writing.ts           borradores (localStorage appb2.writing.v1) y criterios
  lib/score.ts             conversión a escala Cambridge + resultados de simulacros
  data/mocks.ts            qué ejercicios forman cada simulacro
  pages/ProgressPage.tsx   /progreso
  pages/MockPages.tsx      /simulacro, /simulacro/:n/rue, /simulacro/:n/writing
  lib/answers.ts           normalizar, comprobar, contar palabras
  lib/exercise.ts          utilidades comunes del motor
  lib/progress.ts          localStorage
  components/Layout.tsx    cabecera, breadcrumbs
  components/Timer.tsx     cuenta atrás (modo examen)
  pages/Home, SectionPage, PartPage (guía + lista), ExercisePage (motor)
```

### Cómo añadir contenido
1. Añade un objeto al array de `src/data/<sección>/partN.ts` con un `id` único.
2. Ejecuta `npm test`: si algo está mal formado, el test lo indica.

## 3b. Sistema visual (rediseño del 14-nov-2026)
Inspirado en la **hoja de respuestas de Cambridge**. Las opciones se ven como las casillas ovaladas impresas que se rellenan a lápiz.
- **Colores** (`src/index.css`, `@theme`):
  - `bg` #F2F3F6 y `paper` #FFF.
  - `ink` #23262D (grafito: texto y marcas del alumno). `ink-2` y `ink-3` para texto secundario.
  - `print` #A3245F (tinta magenta: números de parte, casillas, huecos).
  - `ok` #17784A, `bad` #B3261E y `warn` #8A5A00, con sus versiones `-soft`.
- **Fuentes** (autoalojadas con @fontsource): Schibsted Grotesk para la interfaz y Newsreader para los textos (clase `.passage`).
- **Componentes** (`src/components/ui.tsx`):
  - `btn()`: variantes primary, accent, secondary, quiet y danger.
  - `Lozenge`: la casilla de la hoja de respuestas.
  - También `Meter`, `PageHeader`, `Panel`, `Tabs`, `ModeTag` e `Icon`.
- **Navegación** (18-nov):
  - En escritorio, menú lateral fijo agrupado en Inicio, El examen (Formato y partes, Use of English, Reading, Writing, Listening y Speaking con "Pronto"), Base (Grammar, Vocabulary) y Seguimiento (Simulacros, Mi progreso).
  - En móvil, cabecera con botón de menú (menú desplegable) y una barra inferior con Inicio, Practicar (abre el menú), Simulacro y Progreso.
  - El inicio es un panel con último ejercicio, sugerencias "Para hoy", últimos ejercicios, racha de 14 días y resumen.
  - El mapa del examen está en `/examen`.
  - Los temas de Grammar y Vocabulary se agrupan por bloques con el campo `group` de `PartInfo`.
  - Se vuelve atrás con `BackLink`.
- **Reglas:**
  - Sin emojis, sin separadores " · ", sin flechas en los botones y sin etiquetas en mayúsculas.
  - Las listas van como índice de cuadernillo, en un `Panel` con divisores, no como tarjetas iguales.
  - El foco del teclado es visible y se respeta `prefers-reduced-motion`.

## 4. Hoja de ruta
- [x] **F0 – Base:** proyecto, navegación, diseño, workflow de despliegue, CONTEXTO.md
- [x] **F1 – Use of English** P1–P4 + motor (modo práctica / modo examen). Hay 5 ejercicios por parte (20 en total, 140 preguntas), cada uno con una guía de la parte y una explicación por pregunta.
- [x] **F2a – Grammar:** 9 temas (present perfect, narrativos, futuro, condicionales/wish, pasiva/causativa, estilo indirecto, relativos, modales, gerundio/infinitivo). Cada tema tiene teoría con ejemplos y 3 ejercicios: elegir, escribir y detectar el error. En total 27 ejercicios y 198 preguntas.
- [x] **F2b – Vocabulary:** 6 temas (phrasal verbs, make/do/have/take, preposiciones dependientes, false friends, confusing words, fixed expressions). Cada uno tiene teoría y 3 ejercicios: 18 ejercicios y 132 preguntas. Más adelante: word families, phrasal verbs II, vocabulario por temas (trabajo, medio ambiente, tecnología…).
- [x] **F3 – Reading** P5–P7: 3 textos por parte (9 ejercicios). Tipos `reading-mc`, `gapped-text` y `matching`. En pantallas grandes el texto y las preguntas se ven en dos columnas.
- [x] **F4 – Writing**: 6 tipos separados (essay, article, email informal, carta formal, report, review). Cada uno tiene teoría (qué es, estructura, registro, frases útiles, errores), un modelo comentado de 140–190 palabras y 4 tareas con plan sugerido. El editor tiene contador de palabras, temporizador en modo examen, borrador automático y autoevaluación con los 4 criterios + checklist del tipo.
- [x] **F5 – Progreso** (`/progreso`): ejercicios hechos, % de aciertos, racha y días de práctica (`appb2.days.v1`), puntos débiles (<75 %), ejercicios con fallos para repetir, tabla por sección, y copia de seguridad (exportar/importar JSON, borrar todo).
- [ ] **F6 – Speaking** P1–P4: prompts, temporizador, grabación de voz, frases útiles (lo deja José para el final)
- [x] **F7 – Simulacro** (`/simulacro`): 3 simulacros. Reading & UoE (7 partes, 75 min, pestañas por parte) y Writing (essay + elegir 1 de 3, 80 min, autoevaluación 0–5 × 4 criterios). La nota se estima en la escala Cambridge con los puntos de conversión oficiales de B2 First (`src/lib/score.ts`), interpolando entre ellos. Resultados en `appb2.mocks.v1`. Pendiente: Listening y Speaking en el simulacro.
- [ ] **F8 – Listening** P1–P4 (al final, cuando todo lo demás esté hecho)
- [x] **F10 – Para compartir con amigos** (18-nov):
  - Bienvenida en 3 pasos con nombre (`appb2.user.v1`, `components/Welcome.tsx`). El nombre se cambia en Mi progreso.
  - Enlace "Avísanos" en cada corrección (`lib/report.ts`). Los avisos llegan por correo a José (`REPORT_EMAIL` en `src/config.ts`). Si se vacía, abren una incidencia en GitHub.
  - App instalable y sin conexión con vite-plugin-pwa: manifest, service worker e iconos en `public/pwa-*.png`.
  - **Mis errores** (`/repaso`, `lib/review.ts`, `appb2.review.v1`): las preguntas falladas se repasan en 4 niveles (1, 3, 7 y 14 días). Gapped text y matching no entran porque dependen de todo el texto.
  - **Reto diario** (`/reto`, `appb2.daily.v1`): 10 preguntas al día (4 de UoE, 3 de Grammar, 3 de Vocabulary), iguales para todos según la fecha. Los fallos van a Mis errores.
  - Las preguntas sueltas se construyen con `lib/cards.ts` (cualquier pregunta pasa a ser un ejercicio de 1 ítem) y se practican con `components/QuizSession.tsx`.
  - Writing: botón para copiar el texto con instrucciones de corrección para una IA (`aiPrompt` en WritingRunner).
- [x] **F12 – Pulido** (18-nov):
  - Las opciones se barajan al repetir un ejercicio y en el reto y el repaso (`shuffleOptions` en `lib/exercise.ts`).
  - 6 simulacros.
  - Gráfica de evolución semanal por destreza en Mi progreso (`appb2.history.v1`, `components/TrendChart.tsx`).
  - Modo oscuro (`html.dark` en `index.css`, `lib/theme.ts`, `appb2.theme.v1`). Sobre fondos de color se usa `text-on-ink`, nunca `text-white`.
  - Revisión de calidad de las ~820 preguntas sueltas: se aceptan más respuestas alternativas válidas y se reescribieron 3 ítems ambiguos.
- [x] **F13 – Aprender más** (18-nov, José pide funcionalidad para aprender, nada de logros ni "enganche"):
  - **Tarjetas** (`/tarjetas`, `data/flashcards.ts`, `lib/flashcards.ts`, `appb2.cards.v1`): 7 mazos (phrasal verbs, collocations, false friends, preposiciones, familias de palabras, conectores y expresiones), 212 tarjetas inglés-español con ejemplo. Repaso espaciado con niveles 0–5 (0, 1, 3, 7, 14, 30 días); se considera aprendida desde el nivel 3. Teclas: espacio para girar, 1/2/3 para valorar.
  - Grammar +1 tema: Questions & question tags (`grammar/questions.ts`). Vocabulary +4: Word formation (prefijos y sufijos para la Part 3), Travel, Money & shopping y Relationships & feelings (`vocabulary/topics2.ts`).
  - Part 4: 5 sets nuevos (`uoe/part4c.ts`), 15 en total.
  - **Estrategia** (`/estrategia`, `pages/StrategyPage.tsx`): reparto del tiempo por parte (suma 75 min, igual que `suggestedMinutes` de cada parte), pasos y trampas de cada parte, Writing y reglas de la hoja de respuestas.
  - Teclado: en preguntas sueltas (reto y Mis errores) letras o números para elegir, Intro para comprobar y pasar; en ordenador el cursor va solo al hueco. En los ejercicios completos, Ctrl/Cmd + Intro comprueba.
- [ ] **F11 – Ranking entre amigos** (al final, a petición de José): necesita un servidor (Supabase o Firebase). Hay que decidirlo con él antes.
- [ ] **F9 – Extras:** más contenido (hecho en parte el 18-nov: UoE 10 por parte, Reading 6 por parte, Grammar 12 temas, Vocabulary 10 temas), corrección con IA, repetición espaciada

## 5. Estado actual
- **Fase:** está todo hecho menos Speaking (F6), Listening (F8) y el ranking (F11). José prefiere seguir aplazando Speaking (18-nov). Siguiente: lo que pida José.
- **Contenido actual:** 168 ejercicios o tareas: UoE 45 (10 por parte, 15 en la Part 4), Reading 18 (6 por parte), Grammar 39 (13 temas), Vocabulary 42 (14 temas) y Writing 24 (los 6 tipos del B2 First adulto). Además, 6 simulacros y 212 tarjetas en 7 mazos.
- **Preferencia (18-nov):** nada de logros, compartir resultados ni funciones de "enganche". Solo cosas que ayuden a aprender.
- **Preferencias de José (18-nov):** sin plan de estudio ni cuenta atrás de examen. En Writing basta con tener todos los tipos (la "story" solo existe en B2 First for Schools, así que no se incluye).
- La app está publicada en https://joseeseguraa.github.io/APPB2/ (repo público, despliegue con GitHub Actions).
- Ideas para más adelante: un ejemplo "0" en cada ejercicio, como en el examen real; poder elegir el tiempo en el modo examen.

## 6. Registro de sesiones
| Fecha | Qué se hizo | Siguiente paso |
|---|---|---|
| 2026-11-14 | Plan inicial y contexto creados | Recibir repo y hacer F0 |
| 2026-11-14 | Formato verificado, plan detallado por fases | Aprobación + acceso al repo |
| 2026-11-14 | F0 + F1: app base y Use of English completo (20 ejercicios, guías, modos práctica/examen, 48 tests) | Decidir hosting · F2 Grammar y Vocabulary |
| 2026-11-14 | F2a Grammar: 9 temas con teoría + 3 tipos nuevos de ejercicio (elegir, escribir, detectar error). 114 tests | José hace el repo público · F2b Vocabulary |
| 2026-11-14 | F2b Vocabulary: 6 temas, 18 ejercicios. 156 tests. Todos los ejercicios revisados en el navegador | F3 Reading |
| 2026-11-14 | F3 Reading (9 textos) + F4 Writing (6 tipos, 24 tareas, modelos). 208 tests | F5 Progreso + F7 Simulacro |
| 2026-11-14 | F5 Progreso + F7 Simulacro (3 simulacros con nota estimada). 212 tests. Revisados en el navegador todos los ejercicios, las tareas y los simulacros | Speaking / Listening / más contenido |
| 2026-11-14 | Rediseño completo de la interfaz (sistema "hoja de respuestas", sección 3b). 212 tests. Revisado en móvil y escritorio | Speaking / Listening / más contenido |
| 2026-11-18 | Opciones barajadas, 6 simulacros, gráfica de evolución, modo oscuro y revisión de calidad del contenido. 325 tests | Lo que pida José (Speaking aplazado) |
| 2026-11-18 | Bienvenida, avisos de errores, PWA, Mis errores, Reto diario, corrección de writing con IA. 324 tests | Speaking (F6), después Listening y el ranking |
| 2026-11-18 | Menú lateral + inicio tipo panel + página /examen. UoE de 5 a 10 por parte, Reading de 3 a 6, Grammar +3 temas (comparison, linking words, quantifiers & articles) y Vocabulary +4 temas (work, environment, technology, health). 319 tests | Speaking / Listening / más contenido |
| 2026-11-18 | Tarjetas con repaso espaciado, 5 temas nuevos (questions, word formation, travel, money, relationships), 5 sets de Part 4, página de estrategia y atajos de teclado. 372 tests | Más contenido para aprender (Reading, Part 1–3), Speaking aplazado |

## 7. Comandos
```
npm install
npm run dev      # desarrollo en local
npm test         # valida el contenido y los correctores
npm run build    # compila a dist/
```
