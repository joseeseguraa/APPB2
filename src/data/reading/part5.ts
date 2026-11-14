import type { ReadingMcExercise } from '../../types'
import { rq } from '../helpers'

export const part5Exercises: ReadingMcExercise[] = [
  {
    id: 'rd5-01',
    kind: 'reading-mc',
    title: 'An unexpected hobby',
    focus: 'Narrativa en primera persona · actitudes y referencias',
    text: `When my neighbour Margaret asked me if I would like to help her with her bees, my first instinct was to say no. I had been stung once as a child and had spent the rest of my life running away from anything with wings. But Margaret was eighty-one, her hands were no longer steady, and she had nobody else to ask. "Just come and watch," she said. "You don't have to touch anything." Somehow, I found myself agreeing.

That first Saturday, I stood several metres behind her, wearing a borrowed suit that was far too big for me, while she calmly lifted the lid of the hive. I had expected chaos: an angry cloud of insects pouring out to attack us. Instead, the bees carried on with their work as if we weren't there. Margaret talked to them in a low voice, the way you might talk to a nervous horse, and moved so slowly that I began to feel impatient. It was only later that I understood that this slowness was the whole point.

Over the following months, I went from watching to holding the frames, and eventually to doing most of the work myself while Margaret supervised from a garden chair. She was a demanding teacher. If I moved too quickly or dropped something, she would shake her head without saying a word, which was somehow worse than being told off. But she was also generous with her knowledge, which she had built up over sixty years, and she never once made me feel stupid for asking the same question twice.

What surprised me most was the effect the bees had on the rest of my life. My job in marketing involves constant deadlines and a phone that never stops ringing. At the hive, none of that mattered. You simply cannot rush bees, and after a while I found I didn't want to. I started to notice things I had walked past for years: which flowers were opening in which month, how the weather changed the mood of the colony. My friends said I seemed calmer, although I suspect they were mainly pleased that I had finally found a topic of conversation other than work.

Margaret died last spring. In her will, she left me her two hives, her old suit – which, unlike the borrowed one, fitted me perfectly – and a notebook full of observations written in her small, careful handwriting. I have read it so many times that I could probably recite parts of it. On the first page she had written a single sentence: "The bees will teach you more than I can."

I didn't understand what she meant at the time. Now, three years after that first nervous Saturday, I think I do. I still get stung occasionally, and it still hurts. But I no longer run away.`,
    questions: [
      rq('Why did the writer agree to help Margaret?', 'She felt that Margaret needed her help.', ['She wanted to overcome her fear of bees.', 'She was curious about how hives work.', 'Margaret promised her it would be completely safe.'], 'Párrafo 1: Margaret tenía 81 años, "her hands were no longer steady" y "she had nobody else to ask". La escritora acepta porque Margaret la necesita. Superar el miedo es una trampa: es una consecuencia final, no el motivo. Y Margaret solo dijo que no tenía que tocar nada, no que fuera totalmente seguro.'),
      rq('During her first visit, the writer was surprised that', 'the bees seemed to ignore them.', ['Margaret was not wearing protective clothing.', 'the hive was much smaller than she had imagined.', 'Margaret became impatient with her.'], 'Párrafo 2: esperaba caos, pero las abejas "carried on with their work as if we weren\'t there". La impaciente era la escritora, no Margaret.'),
      rq('What does the writer mean by "this slowness was the whole point"?', 'Moving slowly is essential when working with bees.', ['Margaret was too old to move any faster.', 'She had wasted her time on that first visit.', 'Learning to keep bees would take a long time.'], 'La frase se aclara en el párrafo 4: "You simply cannot rush bees". La lentitud era la técnica correcta, no una limitación de Margaret.'),
      rq('What does the writer say about Margaret as a teacher?', 'She showed disapproval without needing to speak.', ['She often lost her temper with her pupil.', 'She rarely explained what she was doing.', 'She got annoyed when the writer repeated questions.'], 'Párrafo 3: "she would shake her head without saying a word". Lo de enfadarse por las preguntas repetidas es lo contrario de lo que dice el texto ("never once made me feel stupid for asking the same question twice").'),
      rq('In the fourth paragraph, the writer suggests that her friends', 'were relieved that she talked less about her job.', ['were bored by her conversations about bees.', 'thought that she should change jobs.', 'wanted to try beekeeping themselves.'], '"They were mainly pleased that I had finally found a topic of conversation other than work": estaban contentos de que por fin hablara de algo que no fuera el trabajo.'),
      rq('What does "it" refer to in "I could probably recite parts of it"?', 'the notebook', ['the will', 'the old suit', 'the first page'], 'Pregunta de referencia: "it" retoma lo último mencionado que se puede leer, "a notebook full of observations". Se recitan partes de un cuaderno, no de un traje ni de una sola frase.'),
    ],
  },
  {
    id: 'rd5-02',
    kind: 'reading-mc',
    title: 'Working less, achieving more?',
    focus: 'Artículo de opinión · ideas principales y opiniones',
    text: `When Tom Hughes, the founder of a small software company in Bristol, announced that his staff would only be working four days a week, several of his clients assumed the business was in trouble. "One of them rang me to ask if we were about to close," he laughs. "The idea that you could cut working hours without cutting anything else just didn't make sense to people."

Two years later, the company is still open – and more profitable than ever. Employees work from Monday to Thursday, with no reduction in pay, and Hughes insists that the amount of work they produce has actually increased. He is not alone. Over the past decade, dozens of trials in different countries have reported similar results: staff who are less stressed, take fewer days off sick, and are less likely to leave for other jobs.

The explanation, according to researchers, is not that people suddenly start working harder. It is that they stop wasting time. "In a typical office, a surprising proportion of the day is spent in meetings that have no clear purpose, or answering emails that didn't need to be sent," says Dr Rachel Okafor, an expert in workplace psychology. "When you have one day less, you become much more ruthless about what actually matters."

Not everyone is convinced, however. Critics point out that the trials have mostly involved office-based companies that volunteered to take part, and which may therefore have been more likely to succeed. It is much harder, they argue, to see how a hospital, a school or a restaurant could close for an extra day each week without either employing more staff or reducing the service it offers. Others worry that squeezing five days of work into four may simply lead to longer, more exhausting days.

Hughes accepts that his model will not suit every business. He also admits that the first few months were difficult. "We had to completely rethink how we worked. Some people found it hard to let go of habits they'd had for years, and a couple of clients did leave us." But he has no intention of going back. "The biggest change isn't in the numbers," he says. "It's that people come in on Monday morning actually wanting to be here. You can't put a price on that."

Whether the four-day week becomes the norm remains to be seen. What is clear is that the debate has moved on. A few years ago, the idea was dismissed as unrealistic. Now, the question for many employers is no longer whether it could work, but how.`,
    questions: [
      rq('What does the writer say about Hughes\'s clients in the first paragraph?', 'Some of them were worried about the company\'s future.', ['Most of them asked for lower prices.', 'They wanted to introduce the same system.', 'Several complained about the quality of the work.'], '"Several of his clients assumed the business was in trouble" y uno llamó para preguntar si iban a cerrar.'),
      rq('According to the second paragraph, trials in other countries found that employees', 'were absent from work less often.', ['were paid more than before.', 'worked longer hours on the remaining days.', 'preferred working from home.'], '"Take fewer days off sick" = faltan menos al trabajo. Es una paráfrasis, como casi siempre en esta parte.'),
      rq('Dr Okafor believes a shorter week works because', 'people concentrate on the tasks that really matter.', ['employees are more motivated to work harder.', 'companies stop holding meetings altogether.', 'staff feel that they are trusted more.'], '"You become much more ruthless about what actually matters". Además, el texto dice explícitamente que NO es porque la gente trabaje más duro.'),
      rq('What concern do critics raise in the fourth paragraph?', 'The results may not apply to every type of workplace.', ['The trials were too short to be reliable.', 'Employees would not want to work longer days.', 'Companies would have to reduce salaries.'], 'Hablan de hospitales, colegios y restaurantes, y de que las empresas del estudio se ofrecieron voluntarias: los resultados no se pueden generalizar.'),
      rq('What does Hughes say about the change at his company?', 'It took time for everyone to get used to it.', ['It had no real disadvantages.', 'All of his clients were in favour of it.', 'He is considering returning to a five-day week.'], '"The first few months were difficult… Some people found it hard to let go of habits". No es verdad que no hubiera inconvenientes ni que todos los clientes estuvieran a favor (perdió algunos), y tampoco piensa volver atrás ("no intention of going back").'),
      rq('What is the writer\'s main point in the final paragraph?', 'Attitudes towards the idea have changed.', ['The four-day week will soon be normal everywhere.', 'Most employers still reject the idea.', 'More research is needed before any decision.'], '"The debate has moved on": antes se consideraba poco realista y ahora se discute cómo aplicarlo. Decir que pronto será lo normal es demasiado fuerte, porque el texto dice "remains to be seen".'),
    ],
  },
  {
    id: 'rd5-03',
    kind: 'reading-mc',
    title: 'The audition',
    focus: 'Relato · sentimientos del personaje y significado implícito',
    text: `Leo had been waiting outside the audition room for forty minutes when he finally decided to leave. It was not a decision he was proud of. He had practised the speech every evening for three weeks, recording himself on his phone and watching it back until his flatmate threatened to throw the phone out of the window. He knew every word, every pause. And yet, sitting on the hard plastic chair, listening to the confident voices coming through the door, he had become convinced that he had no business being there.

He had got as far as the stairs when a woman carrying a pile of scripts almost walked into him. "Are you Leo Marsh?" she asked, glancing at the list in her hand. "You're next." He opened his mouth to say that there had been some mistake, that he was just leaving, but she was already holding the door open for him. It seemed easier to go in than to explain.

The room was smaller than he had imagined, and much less frightening. Instead of the row of stern judges he had pictured, there were just two people sitting behind a table, one of them eating a sandwich. The director, a tall man with grey hair, smiled and asked him to begin whenever he was ready.

Leo would later find it difficult to describe exactly what happened next. He remembered taking a deep breath, and then he remembered the director saying "Thank you", and in between there was nothing at all. It was as if somebody else had performed the speech for him. When he came out, the woman with the scripts gave him a strange look. "Are you all right?" she asked. "You look as if you've seen a ghost."

He was on the bus home when his phone rang. He almost didn't answer it – he assumed it was his flatmate asking him to buy milk. Instead, it was the director's assistant, asking whether he would be free to come back the following day and read for one of the main roles. Leo said yes, thanked her three times, and then sat staring out of the window for the rest of the journey, missing his stop by two kilometres.

Years later, when he had become well known and journalists asked him for advice for young actors, he always told them the same thing. "Don't trust the voice that tells you to go home," he would say. "It's usually wrong. And if it isn't, you'll find out soon enough anyway."`,
    questions: [
      rq('Why did Leo decide to leave at first?', 'He had lost confidence in his ability.', ['He had not prepared well enough.', 'He was tired of waiting so long.', 'His flatmate had told him not to go.'], '"He had become convinced that he had no business being there": dejó de creer que mereciera estar allí. No es que no se hubiera preparado (llevaba tres semanas ensayando) y los 40 minutos son solo el contexto, no el motivo.'),
      rq('Why did Leo go into the audition room?', 'It seemed simpler than explaining that he was leaving.', ['He suddenly felt ready to perform.', 'The woman persuaded him that he was good enough.', 'He realised he had misunderstood the list.'], '"It seemed easier to go in than to explain." Lo dice el texto casi literalmente.'),
      rq('What surprised Leo about the room?', 'It was more relaxed than he had expected.', ['There were more judges than he had imagined.', 'The director seemed very serious.', 'It was much bigger than he had pictured.'], 'Era más pequeña y "much less frightening", con alguien comiendo un sándwich: un ambiente relajado. Las otras opciones dicen lo contrario del texto.'),
      rq('What does the fourth paragraph tell us about Leo\'s performance?', 'He cannot clearly remember it.', ['He was disappointed with it.', 'He knew immediately that it had gone well.', 'He forgot some of the words.'], '"In between there was nothing at all": no recuerda nada entre la respiración y el "Thank you".'),
      rq('Why did Leo miss his stop?', 'He was thinking about the news he had just received.', ['He was still talking on the phone.', 'He had fallen asleep on the bus.', 'He did not know the area well.'], 'Se queda "staring out of the window" después de la llamada: estaba absorto por la buena noticia.'),
      rq('What is the main idea of Leo\'s advice to young actors?', 'Self-doubt should not make you give up.', ['You should always trust your instincts.', 'You should not accept every role you are offered.', 'Careful preparation is the key to success.'], '"Don\'t trust the voice that tells you to go home": no hagas caso a la inseguridad. "Fiarse siempre del instinto" es justo lo contrario.'),
    ],
  },
]
