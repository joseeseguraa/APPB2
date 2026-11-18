import type { Exercise, PartInfo, WritingTask } from '../types'
import { findPart, findSection } from './sections'
import { getLevel } from '../lib/level'

export const MOCK_COUNT = 6

export interface MockPart {
  label: string
  part: PartInfo
  ex: Exercise
  /** a qué componente cuenta en la nota */
  skill: 'reading' | 'useOfEnglish'
}

const C1_RUE_PARTS: [section: string, part: string, skill: MockPart['skill']][] = [
  ['use-of-english', 'part-1', 'reading'],
  ['use-of-english', 'part-2', 'useOfEnglish'],
  ['use-of-english', 'part-3', 'useOfEnglish'],
  ['use-of-english', 'part-4', 'useOfEnglish'],
  ['reading', 'part-5', 'reading'],
  ['reading', 'part-6', 'reading'],
  ['reading', 'part-7', 'reading'],
  ['reading', 'part-8', 'reading'],
]

const RUE_PARTS: [section: string, part: string, skill: MockPart['skill']][] = [
  ['use-of-english', 'part-1', 'reading'],
  ['use-of-english', 'part-2', 'useOfEnglish'],
  ['use-of-english', 'part-3', 'useOfEnglish'],
  ['use-of-english', 'part-4', 'useOfEnglish'],
  ['reading', 'part-5', 'reading'],
  ['reading', 'part-6', 'reading'],
  ['reading', 'part-7', 'reading'],
]

/** Reading & Use of English del simulacro n (1..3): un ejercicio de cada parte. */
export function mockRue(n: number): MockPart[] {
  return (getLevel() === 'c1' ? C1_RUE_PARTS : RUE_PARTS).map(([s, p, skill], i) => {
    const part = findPart(s, p)!
    return { label: `Part ${i + 1}`, part, ex: part.exercises[(n - 1) % part.exercises.length], skill }
  })
}

const PART2_TYPES: string[][] = [
  ['article', 'informal-email', 'review'],
  ['formal-letter', 'report', 'article'],
  ['review', 'formal-letter', 'report'],
]

const C1_PART2_TYPES: string[][] = [
  ['email-letter', 'proposal', 'review'],
  ['report', 'email-letter', 'proposal'],
  ['review', 'report', 'email-letter'],
  ['proposal', 'review', 'report'],
]

/** Writing del simulacro n: essay obligatorio + 3 opciones de Part 2. */
export function mockWriting(n: number): { essay: { part: PartInfo; task: WritingTask }; options: { part: PartInfo; task: WritingTask }[] } {
  const writing = findSection('writing')!
  const get = (slug: string) => {
    const part = writing.parts.find((p) => p.slug === slug)!
    return { part, task: part.exercises[(n - 1) % part.exercises.length] as WritingTask }
  }
  const types = getLevel() === 'c1' ? C1_PART2_TYPES : PART2_TYPES
  return { essay: get('essay'), options: types[(n - 1) % types.length].map(get) }
}
