import type { PartInfo } from '../../../types'
import { ch, er, g } from '../../helpers'

export const c1Science: PartInfo = {
  slug: 'science-research',
  name: 'Science & research',
  nameEs: 'Ciencia e investigación',
  summary: 'conduct research, a breakthrough, evidence suggests, findings',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Vocabulario clave',
      points: [
        'conduct / carry out research · a study · a survey · a trial · a sample',
        'findings (resultados) · evidence (incontable) · data · a hypothesis · a theory',
        'a breakthrough = un gran avance · cutting-edge = de vanguardia · groundbreaking',
        'prove / disprove · confirm · challenge a theory · replicate a study',
        'Evidence suggests / indicates that… · There is little evidence to support…',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-vo-sc-1',
      kind: 'choice',
      title: 'Elige la palabra',
      focus: 'Ciencia',
      items: [
        ch('Scientists ___ a study on 2,000 volunteers.', 'conducted', ['made', 'did up'], '"Conduct a study".'),
        ch('The vaccine was hailed as a major ___.', 'breakthrough', ['breakdown', 'break-in'], '"Breakthrough" = gran avance.'),
        ch('There is no ___ that the drug is harmful.', 'evidence', ['evidences', 'proof of'], '"Evidence" es incontable.'),
        ch('Other researchers have failed to ___ the results.', 'replicate', ['repeat back', 'copy out'], '"Replicate a study" = reproducirlo.'),
        ch('The ___ of the study were published in a leading journal.', 'findings', ['founds', 'discoveries of'], '"Findings" = resultados.'),
        ch('This is ___ technology that few companies can afford.', 'cutting-edge', ['sharp-edge', 'front-line'], '"Cutting-edge" = de vanguardia.'),
      ],
    },
    {
      id: 'c1-vo-sc-2',
      kind: 'gap',
      title: 'Completa',
      focus: 'Una palabra',
      items: [
        g('The research was ___ out over five years.', ['carried'], '"Carry out research".'),
        g('Their results ___ the existing theory. (cuestionan)', ['challenge', 'contradict'], '"Challenge a theory".'),
        g('The study used a ___ of 500 teenagers. (muestra)', ['sample'], '"A sample".'),
        g('Evidence ___ that exercise improves memory. (sugiere)', ['suggests', 'indicates', 'shows'], '"Evidence suggests that…".'),
        g('The drug is still undergoing clinical ___.', ['trials'], '"Clinical trials" = ensayos clínicos.'),
        g('Her work was truly ___-breaking.', ['ground'], '"Groundbreaking".'),
      ],
    },
    {
      id: 'c1-vo-sc-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Errores típicos',
      items: [
        er('The police found new [evidences].', 'evidence', 'Incontable: evidence (pieces of evidence).'),
        er('They [made] an experiment with mice.', 'did / carried out / conducted', 'No se dice "make an experiment".'),
        er('The data suggests that the theory is wrong.', null, 'La frase es correcta (data puede ir en singular).'),
        er('The study [probed] that the drug is effective.', 'proved / showed', 'Demostrar: prove. "Probe" es investigar a fondo.'),
        er('This is a [break-through] discovery.', 'groundbreaking', 'Como adjetivo: groundbreaking.'),
      ],
    },
  ],
}

export const c1Society: PartInfo = {
  slug: 'politics-society',
  name: 'Politics & society',
  nameEs: 'Política y sociedad',
  summary: 'policy, legislation, inequality, grassroots, controversial',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Vocabulario clave',
      points: [
        'policy (política concreta) ≠ politics (la política en general) · legislation · a bill · a referendum',
        'introduce / implement / scrap a policy · pass / repeal a law',
        'inequality · poverty · social mobility · marginalised groups · the welfare state',
        'grassroots (movimiento de base) · a campaign · lobby (presionar) · a pressure group',
        'controversial · contentious · a heated debate · public opinion · turnout (participación)',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-vo-so-1',
      kind: 'choice',
      title: 'Elige la palabra',
      focus: 'Sociedad',
      items: [
        ch('The government has announced a new ___ on housing.', 'policy', ['politics', 'police'], '"Policy" = política concreta.'),
        ch('The law was ___ in 2010 after years of protests.', 'repealed', ['repelled', 'replied'], '"Repeal a law" = derogarla.'),
        ch('Voter ___ was the lowest in decades.', 'turnout', ['turnover', 'outturn'], '"Turnout" = participación.'),
        ch('It started as a small ___ movement and grew into a national campaign.', 'grassroots', ['ground-level', 'rootless'], '"Grassroots" = de base.'),
        ch('Companies spend millions ___ politicians.', 'lobbying', ['pressing', 'pushing up'], '"Lobby" = presionar.'),
        ch('The issue remains highly ___.', 'contentious', ['contented', 'contending'], '"Contentious" = polémico.'),
      ],
    },
    {
      id: 'c1-vo-so-2',
      kind: 'gap',
      title: 'Completa',
      focus: 'Una palabra',
      items: [
        g('The new rules will be ___ next year. (aplicadas)', ['implemented', 'introduced'], '"Implement" = poner en práctica.'),
        g('Parliament ___ the bill by a narrow majority. (aprobó)', ['passed'], '"Pass a bill".'),
        g('Education is the key to social ___.', ['mobility'], '"Social mobility".'),
        g('The gap between rich and poor shows growing ___.', ['inequality'], '"Inequality".'),
        g('The government decided to ___ the unpopular tax. (eliminar)', ['scrap', 'abolish'], '"Scrap" = eliminar.'),
        g('The topic sparked a ___ debate. (acalorado)', ['heated', 'fierce', 'lively'], '"A heated debate".'),
      ],
    },
    {
      id: 'c1-vo-so-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Errores típicos',
      items: [
        er('I\'m not interested in [policy]; all politicians are the same.', 'politics', 'La política en general: politics.'),
        er('The government passed a law against smoking in bars.', null, 'La frase es correcta: "pass a law" = aprobar una ley.'),
        er('Many people live in [poorness].', 'poverty', 'Sustantivo: poverty.'),
        er('The minority groups felt [marginated].', 'marginalised', '"Marginalised".'),
        er('The referendum had a [high assistance].', 'high turnout', 'Participación: turnout.'),
      ],
    },
  ],
}

export const c1Business: PartInfo = {
  slug: 'business-economy',
  name: 'Business & the economy',
  nameEs: 'Empresa y economía',
  summary: 'recession, revenue, turnover, launch, go bankrupt',
  suggestedMinutes: 6,
  theory: [
    {
      title: 'Vocabulario clave',
      points: [
        'revenue (ingresos) · profit / loss · turnover (facturación; también rotación de personal) · margin',
        'recession · boom · slump · inflation · growth · the cost of living',
        'launch a product · break into a market · merge with · take over (adquirir) · go bankrupt / go under',
        'a start-up · an entrepreneur · stakeholders · shareholders · a niche market',
        'cut costs · lay off staff (despedir por falta de trabajo) · outsource',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-vo-bu-1',
      kind: 'choice',
      title: 'Elige la palabra',
      focus: 'Economía',
      items: [
        ch('The company ___ a new smartphone last month.', 'launched', ['threw', 'released off'], '"Launch a product".'),
        ch('The country is heading for a ___.', 'recession', ['recess', 'regression'], '"Recession" = recesión.'),
        ch('The firm had to ___ 200 workers.', 'lay off', ['lay down', 'lay out'], '"Lay off" = despedir.'),
        ch('The small café ___ after only six months.', 'went under', ['went down', 'went off'], '"Go under" = quebrar.'),
        ch('A larger rival has ___ the company.', 'taken over', ['taken up', 'overtaken'], '"Take over" = adquirir.'),
        ch('They found a ___ market selling vegan dog food.', 'niche', ['nest', 'corner'], '"Niche market".'),
      ],
    },
    {
      id: 'c1-vo-bu-2',
      kind: 'gap',
      title: 'Completa',
      focus: 'Una palabra',
      items: [
        g('Annual ___ rose to £3 million. (ingresos)', ['revenue', 'turnover', 'income'], '"Revenue".'),
        g('The company made a ___ of £50,000 last year. (pérdidas)', ['loss'], '"Make a loss".'),
        g('The two banks decided to ___ . (fusionarse)', ['merge'], '"Merge": es la palabra que se usa aquí.'),
        g('The cost of ___ keeps rising. (vida)', ['living'], '"The cost of living".'),
        g('Many firms ___ their customer service to other countries. (externalizan)', ['outsource'], '"Outsource".'),
        g('It\'s hard to break ___ the Asian market.', ['into'], '"Break into a market".'),
      ],
    },
    {
      id: 'c1-vo-bu-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Errores típicos',
      items: [
        er('The company [did] a huge profit this year.', 'made', '"Make a profit".'),
        er('Many businesses [went to bankrupt] during the crisis.', 'went bankrupt', '"Go bankrupt" sin "to".'),
        er('Shareholders were pleased with the results.', null, 'La frase es correcta.'),
        er('She is a successful [businessman woman].', 'businesswoman', '"Businesswoman".'),
        er('The firm [fired out] fifty workers.', 'laid off', '"Lay off" (o "fire").'),
      ],
    },
  ],
}

export const c1Media: PartInfo = {
  slug: 'media-communication',
  name: 'Media & communication',
  nameEs: 'Medios de comunicación',
  summary: 'coverage, bias, go viral, a headline, misinformation',
  suggestedMinutes: 5,
  theory: [
    {
      title: 'Vocabulario clave',
      points: [
        'coverage (cobertura) · a headline · a broadsheet / a tabloid · an editorial · a correspondent',
        'bias (sesgo) · biased / impartial · sensationalist · misinformation / disinformation',
        'go viral · a follower · an influencer · clickbait · an echo chamber',
        'make the headlines · hit the front page · break a story · leak information',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-vo-me-1',
      kind: 'choice',
      title: 'Elige la palabra',
      focus: 'Medios',
      items: [
        ch('The election received extensive media ___.', 'coverage', ['covering', 'cover-up'], '"Coverage" = cobertura.'),
        ch('The BBC is supposed to be ___.', 'impartial', ['partial', 'unbiased of'], '"Impartial".'),
        ch('The video ___ viral overnight.', 'went', ['became', 'got'], '"Go viral".'),
        ch('The scandal ___ the headlines for weeks.', 'made', ['did', 'took'], '"Make the headlines".'),
        ch('Someone ___ the documents to the press.', 'leaked', ['dropped', 'filtered out'], '"Leak" = filtrar.'),
        ch('Social media can become an echo ___ where we only hear our own views.', 'chamber', ['room', 'hall'], '"Echo chamber".'),
      ],
    },
    {
      id: 'c1-vo-me-2',
      kind: 'gap',
      title: 'Completa',
      focus: 'Una palabra',
      items: [
        g('The article was clearly ___ against the government. (sesgado)', ['biased'], '"Biased".'),
        g('Our ___ in Paris sent this report. (corresponsal)', ['correspondent'], '"Correspondent".'),
        g('Don\'t click on it; it\'s just ___. (cebo de clics)', ['clickbait'], '"Clickbait".'),
        g('False stories spread deliberately are called ___.', ['disinformation', 'misinformation'], '"Disinformation" (deliberada).'),
        g('The newspaper was the first to ___ the story.', ['break'], '"Break a story" = publicar una exclusiva.'),
        g('The story hit the front ___ of every newspaper.', ['page'], '"The front page".'),
      ],
    },
    {
      id: 'c1-vo-me-3',
      kind: 'error',
      title: 'Encuentra el error',
      focus: 'Errores típicos',
      items: [
        er('I read it in the [periodic].', 'newspaper / paper', 'Periódico: newspaper.'),
        er('The [new] is very worrying.', 'news', '"News" es incontable y lleva verbo en singular.'),
        er('The report was impartial and well researched.', null, 'La frase es correcta.'),
        er('The video [became viral].', 'went viral', '"Go viral".'),
        er('He writes the [editorial article] every Sunday.', 'editorial', '"The editorial".'),
      ],
    },
  ],
}
