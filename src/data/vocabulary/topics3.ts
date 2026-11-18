import type { PartInfo } from '../../types'
import { ch, er, g } from '../helpers'

export const sportLeisure: PartInfo = {
  slug: 'sport-leisure',
  name: 'Sport & free time',
  nameEs: 'Deporte, aficiones y tiempo libre',
  summary: 'play / go / do, win / beat, take up, a pitch, a referee…',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Play, go o do',
      points: [
        'PLAY + deportes de pelota o de competición: play football, tennis, chess.',
        'GO + deportes acabados en -ing: go swimming, go cycling, go skiing.',
        'DO + otras actividades, artes marciales y ejercicio: do yoga, do karate, do exercise, do athletics.',
      ],
    },
    {
      title: 'Ganar y perder',
      points: [
        'WIN + partido, premio, competición: win a match, win a medal.',
        'BEAT + rival (persona o equipo): We beat them 3–1. No se dice "win somebody".',
        'draw / a draw = empatar / empate · score a goal = marcar un gol · a fan / a supporter',
      ],
      examples: [
        { en: 'Spain beat Italy in the final.' },
        { en: 'Spain won Italy in the final.', wrong: true },
      ],
    },
    {
      title: 'Lugares, personas y aficiones',
      points: [
        'a pitch (fútbol, rugby) · a court (tenis, baloncesto) · a track (atletismo) · a course (golf) · a ring (boxeo)',
        'a referee (fútbol) / an umpire (tenis) · a coach = entrenador · a spectator · an opponent = rival',
        'take up a hobby = empezar · give up = dejarlo · be into something = gustarte mucho · be keen on',
        'spare time / free time = tiempo libre · a way to unwind = una forma de desconectar',
      ],
    },
  ],
  exercises: [
    {
      id: 'vo-sp-1',
      kind: 'choice',
      title: 'Elige la palabra',
      focus: 'Deporte y aficiones',
      items: [
        ch('I ___ yoga twice a week.', 'do', ['play', 'go'], 'Yoga: do.'),
        ch("Let's ___ cycling this weekend.", 'go', ['do', 'play'], 'Actividades en -ing: go.'),
        ch('Real Madrid ___ Barcelona 2–0 last night.', 'beat', ['won', 'gained'], 'Ganar a un rival: beat.'),
        ch('She ___ a gold medal at the Olympics.', 'won', ['beat', 'gained'], 'Ganar un premio: win.'),
        ch('The players walked onto the ___ to loud applause.', 'pitch', ['court', 'track'], 'Campo de fútbol: pitch.'),
        ch('The ___ gave him a yellow card.', 'referee', ['umpire', 'coach'], 'Árbitro de fútbol: referee.'),
        ch("I've decided to ___ up the guitar. I've always wanted to learn.", 'take', ['pick', 'get'], '"Take up" = empezar una afición.'),
        ch("He's really ___ rock climbing at the moment.", 'into', ['in', 'onto'], '"Be into something" = gustarte mucho.'),
      ],
    },
    {
      id: 'vo-sp-2',
      kind: 'gap',
      title: 'Escribe la palabra',
      focus: 'Colocaciones',
      items: [
        g('The match ended in a ___: 1–1. (empate)', ['draw', 'tie'], '"A draw" = un empate.'),
        g('He ___ the winning goal in the last minute. (marcó)', ['scored'], '"Score a goal".'),
        g('Our ___ makes us train every morning at seven. (entrenador)', ['coach', 'trainer'], '"Coach" = entrenador.'),
        g('What do you do in your ___ time?', ['spare', 'free'], '"Spare / free time" = tiempo libre.'),
        g('Two tennis players are on the ___. (pista)', ['court'], 'Pista de tenis: court.'),
        g('She ___ up smoking when she started running.', ['gave'], '"Give up" = dejar algo.'),
        g('Reading is my favourite way to ___ after work. (desconectar)', ['unwind', 'relax'], '"Unwind" = relajarse, desconectar.'),
        g('Thousands of ___ filled the stadium. (espectadores)', ['spectators', 'fans', 'supporters'], '"Spectators" = espectadores.'),
      ],
    },
    {
      id: 'vo-sp-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Errores típicos',
      items: [
        er('We [won] the other team easily.', 'beat', 'Ganar a un rival: beat.'),
        er('I [play] karate on Mondays.', 'do', 'Artes marciales: do.'),
        er('Do you want to [do] swimming tomorrow?', 'go', 'Actividades en -ing: go.'),
        er('She has taken up painting recently.', null, 'La frase es correcta.'),
        er('The [arbiter] made a terrible decision.', 'referee', 'Árbitro: referee (fútbol) o umpire (tenis).'),
        er("He's very keen [of] golf.", 'on', '"Keen ON something".'),
      ],
    },
  ],
}

export const food: PartInfo = {
  slug: 'food-cooking',
  name: 'Food & cooking',
  nameEs: 'Comida, cocina y restaurantes',
  summary: 'recipe, ingredients, boil, fry, a dish, a portion…',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Palabras básicas',
      points: [
        'a recipe = una receta (de cocina) ≠ a receipt = un tique',
        'a dish = un plato (comida preparada) · a plate = el plato físico',
        'a cooker / a stove = la cocina (aparato) · a cook = cocinero/a',
        'a portion / a serving = una ración · a starter, a main course, a dessert',
        'ingredients · a flavour · spicy, bitter, sour, sweet, savoury (salado, no dulce)',
      ],
      examples: [{ en: 'This dish is delicious. Can I have the recipe?' }, { en: 'My brother is a very good cooker.', wrong: true, es: 'Correcto: a very good cook.' }],
    },
    {
      title: 'Cómo se cocina',
      points: [
        'boil (hervir), fry (freír), roast (asar al horno), bake (hornear pan o pasteles), grill (a la parrilla), steam (al vapor)',
        'chop (picar, trocear), slice (cortar en rodajas), peel (pelar), stir (remover), add, mix',
        'overcooked / undercooked · raw = crudo · rare / medium / well done (carne)',
      ],
    },
    {
      title: 'Hábitos y restaurantes',
      points: [
        'have a balanced diet · cut down on sugar · be a vegetarian / vegan · be allergic to',
        'book a table · order · the bill · a tip = propina · a takeaway = comida para llevar',
        'eat out = comer fuera · grab a bite = picar algo rápido',
      ],
    },
  ],
  exercises: [
    {
      id: 'vo-fd-1',
      kind: 'choice',
      title: 'Elige la palabra',
      focus: 'Cocina y comida',
      items: [
        ch('Could you give me the ___ for this cake?', 'recipe', ['receipt', 'prescription'], '"Recipe" = receta de cocina.'),
        ch('Paella is a typical Spanish ___.', 'dish', ['plate', 'food'], 'Plato (comida preparada): dish.'),
        ch('My dad is a fantastic ___.', 'cook', ['cooker', 'kitchener'], 'Persona que cocina: cook. "Cooker" es el aparato.'),
        ch('___ the onions into small pieces.', 'Chop', ['Peel', 'Stir'], '"Chop" = picar, trocear.'),
        ch('I prefer my steak well ___.', 'done', ['made', 'finished'], '"Well done" = muy hecha.'),
        ch('We ___ bread every Sunday morning.', 'bake', ['roast', 'boil'], 'Pan y pasteles: bake.'),
        ch("I'm trying to cut ___ on sugar.", 'down', ['off', 'out'], '"Cut down on" = reducir.'),
        ch("Let's eat ___ tonight. I don't feel like cooking.", 'out', ['outside', 'away'], '"Eat out" = comer fuera.'),
      ],
    },
    {
      id: 'vo-fd-2',
      kind: 'gap',
      title: 'Escribe la palabra',
      focus: 'Vocabulario y colocaciones',
      items: [
        g("Don't eat the chicken; it's still ___ inside. (crudo)", ['raw', 'undercooked'], '"Raw" = crudo.'),
        g('Keep ___ the sauce so it doesn\'t burn. (remover)', ['stirring'], '"Stir" = remover. "Keep + -ing".'),
        g('I like ___ food, the hotter the better. (picante)', ['spicy', 'hot'], '"Spicy" = picante.'),
        g('She left a 10% ___ for the waiter. (propina)', ['tip'], '"A tip" = propina.'),
        g("I'm ___ to nuts, so I have to be careful. (alérgico)", ['allergic'], '"Be allergic to".'),
        g('For the main ___, I\'ll have the fish.', ['course'], '"Main course" = plato principal.'),
        g('Steamed vegetables are healthier than ___ ones. (fritas)', ['fried'], '"Fried" = frito.'),
        g('We ___ a table for eight o\'clock. (reservamos)', ['booked', 'reserved'], '"Book a table".'),
      ],
    },
    {
      id: 'vo-fd-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Errores típicos',
      items: [
        er('My sister is an excellent [cooker].', 'cook', 'La persona es "cook".'),
        er('Can you send me the [receipt] for that soup?', 'recipe', 'Receta de cocina: recipe.'),
        er("The portions in this restaurant are huge.", null, 'La frase es correcta.'),
        er('I usually [take] breakfast at seven.', 'have', 'Comidas: have breakfast / lunch / dinner.'),
        er('This cake is too [sweety].', 'sweet', 'El adjetivo es "sweet".'),
        er('Could you bring us the [account], please?', 'bill', 'La cuenta: the bill (BrE) o the check (AmE).'),
      ],
    },
  ],
}
