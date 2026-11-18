import type { PartInfo } from '../../../types'
import { ch, er, g } from '../../helpers'

export const c1Environment: PartInfo = {
  slug: 'environment-sustainability',
  name: 'Environment & sustainability',
  nameEs: 'Medio ambiente y sostenibilidad',
  summary: 'carbon footprint, renewable, deplete, biodiversity',
  suggestedMinutes: 5,
  theory: [
    {
      title: 'Vocabulario clave',
      points: [
        'carbon footprint · emissions · fossil fuels · renewable energy · net zero',
        'deplete resources (agotar) · deforestation · biodiversity · habitat loss · endangered species',
        'sustainable · eco-friendly · biodegradable · single-use plastic',
        'tackle / combat climate change · mitigate (mitigar) · adapt to · offset emissions',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-vo-en-1',
      kind: 'choice',
      title: 'Elige la palabra',
      focus: 'Medio ambiente',
      items: [
        ch('Flying greatly increases your carbon ___.', 'footprint', ['footstep', 'trace'], '"Carbon footprint".'),
        ch('We are ___ the planet\'s resources faster than they can be replaced.', 'depleting', ['deploying', 'deleting'], '"Deplete" = agotar.'),
        ch('The country aims to reach net ___ by 2050.', 'zero', ['nothing', 'null'], '"Net zero".'),
        ch('Wetlands support an extraordinary level of ___.', 'biodiversity', ['biology', 'variety life'], '"Biodiversity".'),
        ch('Some airlines let passengers ___ their emissions by planting trees.', 'offset', ['set off', 'outset'], '"Offset emissions" = compensar.'),
        ch('The new measures will help ___ the effects of flooding.', 'mitigate', ['militate', 'migrate'], '"Mitigate" = mitigar.'),
      ],
    },
    {
      id: 'c1-vo-en-2',
      kind: 'gap',
      title: 'Completa',
      focus: 'Una palabra',
      items: [
        g('Coal, oil and gas are ___ fuels.', ['fossil'], '"Fossil fuels".'),
        g('Many shops have banned single-___ plastic bags.', ['use'], '"Single-use".'),
        g('Governments must do more to ___ climate change. (combatir)', ['tackle', 'combat', 'fight'], '"Tackle climate change".'),
        g('This packaging is fully ___. (biodegradable)', ['biodegradable'], '"Biodegradable".'),
        g('Deforestation is causing serious habitat ___.', ['loss', 'destruction'], '"Habitat loss".'),
        g('Wind and solar are ___ sources of energy.', ['renewable', 'clean', 'green'], '"Renewable".'),
      ],
    },
    {
      id: 'c1-vo-en-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Errores típicos',
      items: [
        er('We must reduce the [emitions] of CO2.', 'emissions', 'Ortografía: emissions.'),
        er('The tiger is an [in danger] species.', 'endangered', '"Endangered species".'),
        er('Renewable energy is becoming cheaper every year.', null, 'La frase es correcta.'),
        er('This product is very [ecological friendly].', 'eco-friendly', '"Eco-friendly / environmentally friendly".'),
        er('We need to [fight against to] pollution.', 'fight / fight against', '"Fight pollution" o "fight against pollution".'),
      ],
    },
  ],
}

export const c1Arts: PartInfo = {
  slug: 'arts-culture',
  name: 'Arts & culture',
  nameEs: 'Arte y cultura',
  summary: 'acclaimed, a masterpiece, thought-provoking, an exhibition',
  suggestedMinutes: 5,
  theory: [
    {
      title: 'Vocabulario para reviews',
      points: [
        'critically acclaimed · a masterpiece · a box-office hit / flop · a sequel · a remake',
        'thought-provoking · gripping · moving · overrated · pretentious · predictable',
        'an exhibition · a gallery · a performance · a premiere · the cast · the plot · the setting',
        'stage a play · curate an exhibition · receive rave reviews (críticas entusiastas)',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-vo-ar-1',
      kind: 'choice',
      title: 'Elige la palabra',
      focus: 'Cultura',
      items: [
        ch('The film was a box-office ___; hardly anyone went to see it.', 'flop', ['fail', 'drop'], '"A flop" = un fracaso.'),
        ch('The novel received ___ reviews from critics.', 'rave', ['raving', 'brave'], '"Rave reviews".'),
        ch('It\'s a ___ documentary that makes you question your habits.', 'thought-provoking', ['thought-making', 'mind-provoking'], '"Thought-provoking".'),
        ch('The ___ includes several famous actors.', 'cast', ['casting', 'crew of'], '"The cast" = el reparto.'),
        ch('The museum is ___ an exhibition of Goya\'s drawings.', 'staging', ['making', 'doing'], '"Stage an exhibition / a play".'),
        ch('Everyone says it\'s brilliant, but I thought it was ___.', 'overrated', ['overestimated of', 'overvalued at'], '"Overrated" = sobrevalorado.'),
      ],
    },
    {
      id: 'c1-vo-ar-2',
      kind: 'gap',
      title: 'Completa',
      focus: 'Una palabra',
      items: [
        g('The painting is considered a ___. (obra maestra)', ['masterpiece'], '"Masterpiece".'),
        g('The plot was so ___ that I guessed the ending. (previsible)', ['predictable'], '"Predictable".'),
        g('The film is set in 1920s Paris; the ___ is beautiful.', ['setting'], '"The setting" = ambientación.'),
        g('She ___ the exhibition at the new gallery. (comisarió)', ['curated'], '"Curate an exhibition".'),
        g('The world ___ of the film took place in London.', ['premiere'], '"Premiere" = estreno.'),
        g('It was a ___ story; I couldn\'t stop reading. (absorbente)', ['gripping'], '"Gripping".'),
      ],
    },
    {
      id: 'c1-vo-ar-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Errores típicos',
      items: [
        er('The [argument] of the film is very complicated.', 'plot', 'Argumento: plot.'),
        er('We went to an [exposition] of modern art.', 'exhibition', 'Exposición: exhibition.'),
        er('The film was critically acclaimed.', null, 'La frase es correcta.'),
        er('The [actuation] of the lead actor was superb.', 'performance', 'Actuación: performance.'),
        er('The book is very [emotioning].', 'moving', 'Emocionante: moving.'),
      ],
    },
  ],
}

export const c1Health: PartInfo = {
  slug: 'health-psychology',
  name: 'Health & psychology',
  nameEs: 'Salud y psicología',
  summary: 'well-being, cope with, resilience, burnout, sedentary',
  suggestedMinutes: 5,
  theory: [
    {
      title: 'Vocabulario clave',
      points: [
        'well-being · mental health · resilience · burnout · anxiety · self-esteem',
        'cope with · deal with · overcome · recover from · relapse',
        'a sedentary lifestyle · chronic (crónico) · acute · symptoms · a diagnosis · side effects',
        'boost the immune system · lower the risk of · be prone to · take a toll on',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-vo-he-1',
      kind: 'choice',
      title: 'Elige la palabra',
      focus: 'Salud',
      items: [
        ch('Long working hours can take a ___ on your health.', 'toll', ['tax', 'price'], '"Take a toll on" = pasar factura.'),
        ch('She suffered from ___ after years of stress at work.', 'burnout', ['burn-up', 'outburn'], '"Burnout" = agotamiento profesional.'),
        ch('A ___ lifestyle increases the risk of heart disease.', 'sedentary', ['sedative', 'seated'], '"Sedentary".'),
        ch('The drug has few side ___.', 'effects', ['affects', 'results'], '"Side effects".'),
        ch('Children need to develop ___ to deal with setbacks.', 'resilience', ['resistance of', 'reliance'], '"Resilience".'),
        ch('He has ___ pain in his back that never goes away.', 'chronic', ['chronical', 'acute'], '"Chronic" = crónico.'),
      ],
    },
    {
      id: 'c1-vo-he-2',
      kind: 'gap',
      title: 'Completa',
      focus: 'Una palabra',
      items: [
        g('It took her months to ___ from the operation.', ['recover'], '"Recover from".'),
        g('Regular exercise can ___ your mood. (mejorar, impulsar)', ['boost', 'improve', 'lift'], '"Boost": es la palabra que se usa aquí.'),
        g('He finds it hard to ___ with criticism.', ['cope', 'deal'], '"Cope with".'),
        g('Low self-___ can affect every area of life.', ['esteem'], '"Self-esteem".'),
        g('The doctor made a ___ after several tests. (diagnóstico)', ['diagnosis'], '"Diagnosis".'),
        g('Smokers are more ___ to lung disease. (propensos)', ['prone', 'susceptible', 'vulnerable'], '"Prone to".'),
      ],
    },
    {
      id: 'c1-vo-he-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Errores típicos',
      items: [
        er('I have a terrible [constipation]; I can\'t stop sneezing.', 'cold', 'Resfriado: cold. "Constipation" es estreñimiento.'),
        er('She [overcame to] her fear of flying.', 'overcame', '"Overcome" no lleva "to".'),
        er('Mental health is just as important as physical health.', null, 'La frase es correcta.'),
        er('The [recipe] says to take two pills a day.', 'prescription', 'Receta médica: prescription.'),
        er('He is [sensible] to cold weather.', 'sensitive', 'Sensible al frío: sensitive.'),
      ],
    },
  ],
}

export const c1Law: PartInfo = {
  slug: 'law-crime',
  name: 'Law & crime',
  nameEs: 'Ley y delito',
  summary: 'convict, acquit, sentence, a deterrent, commit an offence',
  suggestedMinutes: 5,
  theory: [
    {
      title: 'Vocabulario clave',
      points: [
        'commit a crime / an offence · arrest · charge somebody with · be accused of',
        'a trial · the jury · the verdict · convict (declarar culpable) / acquit (absolver)',
        'sentence somebody to · a fine · community service · a suspended sentence',
        'a deterrent (algo que disuade) · rehabilitation · reoffend · the law-abiding majority',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-vo-la-1',
      kind: 'choice',
      title: 'Elige la palabra',
      focus: 'Justicia',
      items: [
        ch('He was ___ with theft.', 'charged', ['accused', 'blamed'], '"Charge somebody WITH".'),
        ch('The jury ___ her of all charges; she was innocent.', 'acquitted', ['convicted', 'sentenced'], '"Acquit" = absolver.'),
        ch('He was ___ to five years in prison.', 'sentenced', ['condemned at', 'punished to'], '"Sentence somebody to".'),
        ch('Do long prison sentences act as a ___?', 'deterrent', ['determinant', 'detergent'], '"Deterrent" = elemento disuasorio.'),
        ch('Most people are ___ citizens.', 'law-abiding', ['law-obeying', 'legal-keeping'], '"Law-abiding".'),
        ch('Without support, many ex-prisoners ___.', 'reoffend', ['recommit', 'reprison'], '"Reoffend" = reincidir.'),
      ],
    },
    {
      id: 'c1-vo-la-2',
      kind: 'gap',
      title: 'Completa',
      focus: 'Una palabra',
      items: [
        g('He was found guilty and had to pay a heavy ___. (multa)', ['fine'], '"A fine".'),
        g('The ___ of the trial will be announced tomorrow. (veredicto)', ['verdict'], '"Verdict".'),
        g('She was ___ of fraud and sent to prison. (declarada culpable)', ['convicted'], '"Convict".'),
        g('He was ordered to do 200 hours of community ___.', ['service'], '"Community service".'),
        g('Prisons should focus on ___ rather than punishment.', ['rehabilitation'], '"Rehabilitation".'),
        g('It\'s an ___ to drive without insurance. (infracción)', ['offence', 'offense'], '"An offence".'),
    ],
    },
    {
      id: 'c1-vo-la-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Errores típicos',
      items: [
        er('He [made] a serious crime.', 'committed', '"Commit a crime".'),
        er('She was accused [for] stealing.', 'of', '"Accused OF".'),
        er('The judge sentenced him to six months.', null, 'La frase es correcta.'),
        er('The [jurors] decision was unanimous.', "jury's", 'El jurado (como grupo): the jury\'s decision.'),
        er('He was [condemned] to pay a fine.', 'ordered', 'Lo natural es "ordered to pay a fine".'),
      ],
    },
  ],
}
