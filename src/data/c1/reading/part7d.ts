import type { GappedTextExercise } from '../../../types'
import { gapped } from '../../helpers'

export const c1Part7D: GappedTextExercise[] = [
  {
    id: 'c1-rd7-05',
    kind: 'gapped-text',
    unit: 'paragraph',
    title: 'Restoring a medieval bridge',
    focus: 'Reportaje: problema y solución',
    text: `When the engineer Clara Holm first saw the old stone bridge at Varnby, it was held together, as she puts it, "by habit and moss". Built in the fourteenth century, it had survived floods, wars and centuries of traffic, but a crack had appeared in its central arch, and the council was considering demolition.

{1}

Holm, who specialises in historic structures, persuaded them to wait. She spent the following winter studying the bridge in detail, using laser scanners to map every stone and ground-penetrating radar to see what lay beneath the surface.

{2}

The cause turned out to be surprisingly modern. In the 1970s, the bridge had been strengthened with a layer of concrete, which was meant to protect it. In fact, it had done the opposite. Concrete does not flex in the way that old stone and lime mortar do, and as the bridge moved slightly with changes in temperature, stresses had built up in the arch.

{3}

Removing the concrete was a delicate task. It had to be broken away by hand, piece by piece, to avoid damaging the stones beneath. The work took nearly two years, much longer than anyone had expected, and costs rose accordingly.

{4}

Once the concrete had gone, the original stones were repaired with lime mortar mixed according to medieval recipes. Holm's team even sourced stone from the same quarry that had supplied the original builders, which had been closed for over a century and had to be specially reopened.

{5}

Today, the bridge carries only pedestrians and cyclists, but it is structurally sounder than it has been for decades. The crack has closed, and sensors embedded in the stones will warn engineers of any future movement.

{6}

For Holm, the project offers a lesson that goes beyond engineering. "We often assume that modern materials are always better," she says. "Sometimes the people who built these structures understood things that we have forgotten."`,
    ...gapped(
      'c1-rd7-05',
      [
        'Replacing it with a modern structure would have been cheaper and quicker, and some councillors argued that sentiment should not stand in the way of safety.',
        'What she found was not what anyone had expected. The original medieval structure was largely sound; the problem lay in a repair carried out much more recently.',
        'In other words, the very measure intended to save the bridge had been slowly destroying it.',
        'At several points, the council came close to abandoning the project. It was only a public campaign by local residents, who raised a substantial sum themselves, that kept it going.',
        'This attention to authenticity was not merely a matter of appearance. Stone from a different source might have expanded and contracted at a different rate, creating new stresses.',
        'The project has since attracted interest from engineers across Europe, many of whom face similar problems with historic bridges strengthened in the twentieth century.',
        'Medieval builders often worked without written plans, relying instead on experience passed down from master to apprentice.',
      ],
      [
        'El ayuntamiento pensaba demolerlo → "Replacing IT with a modern structure would have been cheaper… some councillors argued…" → "Holm… persuaded THEM to wait".',
        'Estudió el puente con escáneres y radar → "What she FOUND was not what anyone had expected… a repair carried out much more recently" → "The cause turned out to be surprisingly MODERN".',
        'El hormigón generó tensiones → "In other words, the very measure intended to save the bridge had been slowly destroying it" → retirar el hormigón.',
        'Costes y plazos se dispararon → "At several points, the council came close to ABANDONING the project…" → "ONCE the concrete had gone…".',
        'Piedra de la misma cantera → "THIS ATTENTION TO AUTHENTICITY was not merely a matter of appearance…" → "Today, the bridge…".',
        'El puente está mejor que nunca → "The project has since attracted interest from engineers across Europe…" → la lección de Holm. El párrafo sobre los constructores sin planos no encaja: sobra.',
      ],
    ),
  },
  {
    id: 'c1-rd7-06',
    kind: 'gapped-text',
    unit: 'paragraph',
    title: 'Learning to listen',
    focus: 'Experiencia profesional: reflexión',
    text: `For the first ten years of my career as a doctor, I prided myself on being efficient. I could see a patient, make a diagnosis and write a prescription in under ten minutes. My waiting room was never full for long, and my managers were delighted.

{1}

The patient who changed my mind was an elderly man who came to see me about headaches. I examined him, found nothing seriously wrong and was about to send him away with painkillers when he mentioned, almost in passing, that his wife had died three months earlier.

{2}

I put down my pen and asked him to tell me about her. He talked for twenty minutes, while my next patients waited and my schedule fell apart. At the end, he thanked me, and said it was the first time anyone had asked.

{3}

That conversation made me realise how much I had been missing. I had been treating symptoms efficiently while overlooking the people who had them. I began to change the way I worked, starting each appointment with an open question and, crucially, waiting for the answer.

{4}

The change was not without cost. My appointments now overran regularly, and I had to have some difficult conversations with my managers, who were concerned about waiting times.

{5}

Over time, however, something unexpected happened. Because I was understanding problems better the first time, patients came back less often. My overall workload actually fell.

{6}

I still have to be efficient; the system leaves me no choice. But I have learnt that the most important part of an appointment often comes in the last minute, when the patient has their hand on the door and says, "Oh, and there's one more thing."`,
    ...gapped(
      'c1-rd7-06',
      [
        'Looking back, I can see that speed had become a source of pride in itself, and that I rarely stopped to consider what it was costing my patients.',
        'Something in the way he said it made me stop. It occurred to me that the headaches might have less to do with his body than with his grief.',
        'He came back a month later, not with headaches but to tell me that he had joined a bereavement group. The headaches, he said, had more or less disappeared.',
        'It is remarkable how often patients will tell you what is really wrong if you simply give them the space to do so.',
        'At one point I was formally warned that my performance was falling below expected standards, which, after years of praise, came as a considerable shock.',
        'Colleagues who had been sceptical began to ask me how I had managed it, and a few started experimenting with longer appointments themselves.',
        'Many doctors now use computer programs that suggest possible diagnoses based on a patient\'s symptoms.',
      ],
      [
        'Sus jefes estaban encantados con su rapidez → "Looking back… speed had become a source of pride… what it was costing my patients" → "The patient who CHANGED MY MIND…".',
        'El paciente menciona que su mujer murió → "Something in the way he SAID IT made me stop…" → "I put down my pen and asked him to tell me about her".',
        '"The first time anyone had asked" → "He came back a month later… the headaches had more or less disappeared" → "THAT CONVERSATION made me realise…".',
        'Empieza cada cita con una pregunta abierta y espera → "It is remarkable how often patients will tell you what is really wrong…" → "The change was NOT WITHOUT COST".',
        'Conversaciones difíciles con sus jefes → "At one point I was formally WARNED…" → "Over time, HOWEVER, something unexpected happened".',
        'Su carga de trabajo bajó → "COLLEAGUES who had been sceptical began to ask me how I had managed IT" → reflexión final. El párrafo sobre programas de diagnóstico no encaja: sobra.',
      ],
    ),
  },
  {
    id: 'c1-rd7-07',
    kind: 'gapped-text',
    unit: 'paragraph',
    title: 'The return of the wolf',
    focus: 'Divulgación: debate y consecuencias',
    text: `A century ago, wolves had been almost entirely wiped out across western Europe, hunted to near extinction by farmers and governments who saw them as a threat. Today, they are returning in remarkable numbers, and they are not waiting for permission.

{1}

The recovery has been driven largely by legal protection. Since the 1990s, wolves have been strictly protected under European law, which makes it illegal to hunt them in most circumstances. At the same time, the abandonment of farmland in many rural areas has created large stretches of wild landscape in which wild deer and boar have multiplied.

{2}

Not everyone has welcomed their return. For sheep farmers in particular, wolves represent a serious threat to their livelihoods. In some regions, hundreds of animals are killed each year, and farmers complain that compensation payments are slow and inadequate.

{3}

Conservationists argue that the solution lies not in killing wolves but in changing farming practices. Electric fences, guard dogs and shepherds who stay with their flocks overnight can dramatically reduce attacks, as farmers in Italy and Spain have long known.

{4}

The debate has become increasingly political. In several countries, rural parties have campaigned to weaken the legal protection of wolves, arguing that decisions are being made by city dwellers who will never have to live with the consequences.

{5}

There is also growing evidence that wolves bring ecological benefits. By hunting deer, they can reduce damage to young trees and allow forests to regenerate. In some areas, their presence appears to have changed the behaviour of deer, which now avoid open valleys where they are more vulnerable.

{6}

Whatever the outcome of the political debate, one thing seems certain: the wolf is back, and Europeans will have to learn, once again, how to share the landscape with it.`,
    ...gapped(
      'c1-rd7-07',
      [
        'Packs have been recorded in Germany, France and even the outskirts of Rome. In 2012, a wolf was sighted in the Netherlands for the first time in over a hundred years.',
        'With plentiful prey and no one to hunt them, wolves have been able to spread rapidly, travelling hundreds of kilometres in search of new territory.',
        'Some also fear for their own safety, although attacks on humans by healthy wild wolves are extremely rare in Europe.',
        'These methods, however, are expensive and time-consuming, and many farmers in regions where wolves disappeared generations ago have lost the knowledge of how to use them.',
        'Supporters of protection reply that wolves are part of Europe\'s natural heritage, and that the costs of living with them should be shared by society as a whole.',
        'Such effects are difficult to measure precisely, and some scientists caution against exaggerating them. Nevertheless, they suggest that the wolf\'s return may be good news for more than just wolves.',
        'Wolves are highly social animals that live in family groups, usually consisting of a breeding pair and their offspring.',
      ],
      [
        '"They are not waiting for permission" → ejemplos de su expansión: Alemania, Francia, Roma, Países Bajos → "The RECOVERY has been driven…".',
        'Más ciervos y jabalíes → "With PLENTIFUL PREY and no one to hunt them, wolves have been able to spread…" → "Not everyone has welcomed their return".',
        'Ganaderos amenazados → "Some ALSO fear for their own safety…" → "Conservationists argue that the solution…".',
        'Vallas, perros y pastores → "THESE METHODS, however, are expensive…" → "The debate has become increasingly political".',
        'Partidos rurales critican a los urbanitas → "SUPPORTERS of protection REPLY…" → "There is ALSO growing evidence…".',
        'Cambian el comportamiento de los ciervos → "SUCH EFFECTS are difficult to measure…" → conclusión. El párrafo sobre la vida social de los lobos no encaja: sobra.',
      ],
    ),
  },
  {
    id: 'c1-rd7-08',
    kind: 'gapped-text',
    unit: 'paragraph',
    title: 'My first novel',
    focus: 'Narración: proceso y emociones',
    text: `I started writing my first novel at the age of twenty-three, convinced that it would take me a year. It took nine. During that time I changed jobs three times, moved flat twice and came close to abandoning the whole project more often than I can remember.

{1}

The first draft was, in a word, terrible. I had been so eager to reach the end that I had ignored every problem along the way: characters who changed personality from one chapter to the next, a plot full of holes, an ending that made no sense.

{2}

So I started again, this time more slowly. I made detailed notes on each character and planned the plot in advance, chapter by chapter. The second draft was better, but it was also lifeless, as if all the planning had squeezed the energy out of it.

{3}

It was a friend who suggested I try writing the third draft by hand. I thought the idea was ridiculous, but I was desperate enough to try anything. To my surprise, it worked. Writing slowly, I found myself listening to the characters rather than telling them what to do.

{4}

Finding a publisher was another battle. I sent the manuscript to more than forty agents, and most did not reply at all. Those who did were polite but discouraging.

{5}

The book was finally published when I was thirty-two. It sold modestly, received a handful of kind reviews and was quickly forgotten by almost everyone except me.

{6}

People sometimes ask whether it was worth it, given how few copies it sold. I always give the same answer. Those nine years taught me how to write, and, more importantly, how to keep going when everything suggests you should stop.`,
    ...gapped(
      'c1-rd7-08',
      [
        'Looking back, I am not sure what kept me going, except perhaps a stubborn refusal to admit that I had wasted so much time.',
        'I put it in a drawer for six months, unable to look at it. When I finally reread it, I realised that the only thing worth keeping was the main character.',
        'I had made the classic mistake of the inexperienced writer: in trying to fix everything, I had planned out all the surprises.',
        'For the first time, the book began to feel alive, and I wrote with an enthusiasm I had not felt since the very beginning.',
        'Then, just as I was about to give up, an agent called to say she had read it twice and wanted to represent me.',
        'It did not matter. I had already begun my second novel, and this one took only three years.',
        'Most successful novelists publish several books before they achieve any commercial success.',
      ],
      [
        'Estuvo a punto de abandonar muchas veces → "Looking back, I am not sure what KEPT ME GOING…" → "The first draft was, in a word, terrible".',
        'El primer borrador era terrible → "I put IT in a drawer… the only thing worth keeping was the main character" → "SO I STARTED AGAIN".',
        'El segundo borrador era plano por la planificación → "I had made the classic mistake… I had planned out all the surprises" → la amiga sugiere escribir a mano.',
        'Escribir a mano funcionó → "For the first time, the book began to feel ALIVE…" → "Finding a publisher was ANOTHER battle".',
        'Los agentes eran desalentadores → "THEN, just as I was about to give up, an agent called…" → publicado a los 32.',
        'El libro se olvidó enseguida → "IT DID NOT MATTER. I had already begun my second novel…" → reflexión final. El párrafo sobre novelistas de éxito no encaja: sobra.',
      ],
    ),
  },
]
