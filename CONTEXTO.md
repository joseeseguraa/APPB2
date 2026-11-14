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

## 4. Hoja de ruta
- [x] **F0 – Base:** proyecto, navegación, diseño, workflow de despliegue, CONTEXTO.md
- [x] **F1 – Use of English** P1–P4 + motor (modo práctica / modo examen). Hay 5 ejercicios por parte (20 en total, 140 preguntas), cada uno con una guía de la parte y una explicación por pregunta.
- [ ] **F2 – Grammar y Vocabulary:** temas sueltos con teoría en español y ejercicios variados (huecos, elegir, transformar, corregir errores)
- [ ] **F3 – Reading** P5–P7
- [ ] **F4 – Writing**, separado por tipo (essay, article, email/letter formal e informal, report, review). Cada tipo con estructura párrafo a párrafo, registro, frases útiles, modelo comentado, varios enunciados, temporizador, contador de palabras y checklist de los 4 criterios de corrección.
- [ ] **F5 – Progreso:** estadísticas por parte, puntos débiles, racha, repaso de fallos, exportar/importar
- [ ] **F6 – Speaking** P1–P4: prompts, temporizador, grabación de voz, frases útiles
- [ ] **F7 – Simulacro completo**, sin listening de momento, con puntuación estimada
- [ ] **F8 – Listening** P1–P4 (al final, cuando todo lo demás esté hecho)
- [ ] **F9 – Extras:** más ejercicios de UoE (meta: 10+ por parte), corrección con IA, repetición espaciada

## 5. Estado actual
- **Fase:** F0 y F1 terminadas. Siguiente: **F2 (Grammar y Vocabulary)**.
- **Pendiente de José:** decidir dónde se publica la app. GitHub Pages no funciona con repos privados en cuentas gratuitas. Las opciones son hacer el repo público, pasar a GitHub Pro, o usar Netlify/Vercel/Cloudflare Pages, que son gratis con repos privados. Mientras tanto, el workflow de Pages fallará en el paso de deploy.
- Ideas para más adelante: un ejemplo "0" en cada ejercicio, como en el examen real; poder elegir el tiempo en el modo examen.

## 6. Registro de sesiones
| Fecha | Qué se hizo | Siguiente paso |
|---|---|---|
| 2026-11-14 | Plan inicial y contexto creados | Recibir repo y hacer F0 |
| 2026-11-14 | Formato verificado, plan detallado por fases | Aprobación + acceso al repo |
| 2026-11-14 | F0 + F1: app base y Use of English completo (20 ejercicios, guías, modos práctica/examen, 48 tests) | Decidir hosting · F2 Grammar y Vocabulary |

## 7. Comandos
```
npm install
npm run dev      # desarrollo en local
npm test         # valida el contenido y los correctores
npm run build    # compila a dist/
```
