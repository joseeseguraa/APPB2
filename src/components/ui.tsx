import type { ReactNode } from 'react'

/* ---------- Botones ---------- */

type Variant = 'primary' | 'secondary' | 'quiet' | 'danger' | 'accent'

/** Clases de botón reutilizables en <button> y <Link>. */
export function btn(variant: Variant = 'primary', size: 'md' | 'sm' = 'md'): string {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors disabled:opacity-40 disabled:pointer-events-none whitespace-nowrap'
  const sizes = { md: 'h-11 px-5 text-[0.95rem]', sm: 'h-9 px-3.5 text-sm' }
  const variants: Record<Variant, string> = {
    primary: 'bg-ink text-white hover:bg-black',
    accent: 'bg-print text-white hover:bg-print-deep',
    secondary: 'bg-paper text-ink border border-line-strong hover:border-ink',
    quiet: 'text-ink-2 hover:text-ink hover:bg-line/60',
    danger: 'bg-paper text-bad border border-bad/30 hover:bg-bad-soft',
  }
  return `${base} ${sizes[size]} ${variants[variant]}`
}

/* ---------- Casilla de hoja de respuestas ---------- */

export type MarkState = 'empty' | 'marked' | 'correct' | 'wrong' | 'missed' | 'dim'

/**
 * La casilla ovalada de la hoja de respuestas de Cambridge.
 * empty: impresa en magenta · marked: rellenada a lápiz (grafito) · correct/wrong: corregida.
 */
export function Lozenge({ letter, state }: { letter: string; state: MarkState }) {
  const styles: Record<MarkState, string> = {
    empty: 'border-print/70 text-print bg-paper',
    marked: 'border-ink bg-ink text-white',
    correct: 'border-ok bg-ok text-white',
    wrong: 'border-bad bg-bad text-white',
    missed: 'border-ok text-ok bg-ok-soft border-dashed',
    dim: 'border-line-strong text-ink-3 bg-paper',
  }
  return (
    <span
      aria-hidden
      className={`inline-grid place-items-center shrink-0 w-9 h-[1.35rem] rounded-full border-[1.5px] text-[0.72rem] font-bold tracking-wide transition-colors ${styles[state]}`}
    >
      {letter}
    </span>
  )
}

/* ---------- Medidor ---------- */

export function Meter({ value, tone = 'ink', className = '' }: { value: number; tone?: 'ink' | 'score'; className?: string }) {
  const v = Math.max(0, Math.min(100, value))
  const color = tone === 'ink' ? 'bg-ink' : v >= 75 ? 'bg-ok' : v >= 50 ? 'bg-warn' : 'bg-bad'
  return (
    <div className={`h-1.5 rounded-full bg-line overflow-hidden ${className}`} role="presentation">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${v}%` }} />
    </div>
  )
}

/* ---------- Cabecera de página ---------- */

export function PageHeader({
  title,
  lead,
  aside,
  number,
  icon,
}: {
  title: ReactNode
  lead?: ReactNode
  aside?: ReactNode
  /** número de parte del examen (se muestra en tinta magenta) */
  number?: number
  /** icono de sección (si no hay número de parte) */
  icon?: IconName
}) {
  return (
    <header className="mb-6 sm:mb-8 flex flex-wrap items-end justify-between gap-4">
      <div className="min-w-0 max-w-2xl flex gap-4 items-start">
        {number === undefined && icon && <IconTile name={icon} />}
        {number !== undefined && (
          <span className="shrink-0 grid place-items-center w-12 h-12 rounded-full border-2 border-print text-print text-xl font-bold tabular-nums">
            {number}
          </span>
        )}
        <div className="min-w-0">
          <h1 className="text-[1.75rem] sm:text-[2.1rem] leading-tight font-bold tracking-[-0.02em]">{title}</h1>
          {lead && <p className="mt-1.5 text-ink-2 text-[1.02rem] leading-relaxed">{lead}</p>}
        </div>
      </div>
      {aside}
    </header>
  )
}

/* ---------- Panel ---------- */

export function Panel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`bg-paper border border-line rounded-[var(--radius-panel)] ${className}`}>{children}</div>
}

/* ---------- Pestañas ---------- */

export function Tabs<T extends string>({
  value,
  onChange,
  items,
}: {
  value: T
  onChange: (v: T) => void
  items: { value: T; label: ReactNode }[]
}) {
  return (
    <div role="tablist" className="flex gap-6 border-b border-line mb-6 overflow-x-auto">
      {items.map((it) => (
        <button
          key={it.value}
          role="tab"
          aria-selected={value === it.value}
          onClick={() => onChange(it.value)}
          className={`-mb-px pb-2.5 pt-1 text-[0.95rem] font-semibold border-b-2 transition-colors whitespace-nowrap ${
            value === it.value ? 'border-print text-ink' : 'border-transparent text-ink-3 hover:text-ink-2'
          }`}
        >
          {it.label}
        </button>
      ))}
    </div>
  )
}

/* ---------- Etiqueta de modo ---------- */

export function ModeTag({ mode }: { mode: 'practice' | 'exam' }) {
  return mode === 'exam' ? (
    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-print">
      <span className="w-2 h-2 rounded-full bg-print" aria-hidden /> Modo examen
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-2">
      <span className="w-2 h-2 rounded-full bg-ink-3" aria-hidden /> Práctica libre
    </span>
  )
}

/* ---------- Iconos de trazo (24×24) ---------- */

export type IconName =
  | 'home'
  | 'exam'
  | 'uoe'
  | 'reading'
  | 'writing'
  | 'grammar'
  | 'vocabulary'
  | 'listening'
  | 'speaking'
  | 'mock'
  | 'progress'
  | 'practice'
  | 'menu'
  | 'close'
  | 'back'
  | 'chevron'
  | 'flame'
  | 'check'
  | 'review'
  | 'daily'
  | 'flag'
  | 'copy'

const ICONS: Record<IconName, ReactNode> = {
  home: <path d="M4 10.5 12 4l8 6.5V20h-5.5v-5.5h-5V20H4v-9.5Z" />,
  exam: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3h6v1M9 10h6M9 14h6M9 18h3" />
    </>
  ),
  uoe: (
    <>
      <rect x="3.5" y="6" width="17" height="12" rx="2" />
      <path d="M7.5 12h2.5M14 12h2.5M11.5 9.5v5" />
    </>
  ),
  reading: (
    <>
      <path d="M3.5 5.5c3-1 6-1 8.5 1v13c-2.5-2-5.5-2-8.5-1v-13Z" />
      <path d="M20.5 5.5c-3-1-6-1-8.5 1v13c2.5-2 5.5-2 8.5-1v-13Z" />
    </>
  ),
  writing: (
    <>
      <path d="M4 20h4L19 9l-4-4L4 16v4Z" />
      <path d="m13.5 6.5 4 4" />
    </>
  ),
  grammar: (
    <>
      <path d="M4 19 8.5 6h1L14 19M5.6 14.5h6.8" />
      <path d="M16 12.5c.6-1 1.6-1.5 2.6-1.3 1.1.2 1.6 1 1.6 2.1V19M20.2 15.2c-2.6-.2-4.4.4-4.4 2 0 1.3 1.6 2.2 4.4 1.1" />
    </>
  ),
  vocabulary: (
    <>
      <rect x="4" y="5" width="11" height="14" rx="1.5" />
      <path d="M18 7.5v12a1.5 1.5 0 0 1-1.5 1.5H8M7.5 9.5h4M7.5 13h4" />
    </>
  ),
  listening: (
    <>
      <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
      <rect x="3.5" y="14" width="4" height="6" rx="1.5" />
      <rect x="16.5" y="14" width="4" height="6" rx="1.5" />
    </>
  ),
  speaking: (
    <>
      <rect x="9" y="3.5" width="6" height="11" rx="3" />
      <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3" />
    </>
  ),
  mock: (
    <>
      <circle cx="12" cy="13" r="7.5" />
      <path d="M12 9.5V13l2.5 2M9.5 2.5h5" />
    </>
  ),
  progress: <path d="M4 19V5M4 19h16M8 15v-4M12 15V8M16 15v-6" />,
  practice: (
    <>
      <path d="M4 20h4L19 9l-4-4L4 16v4Z" />
      <path d="m13.5 6.5 4 4" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  back: <path d="M15 5 8 12l7 7" />,
  chevron: <path d="m9 5 7 7-7 7" />,
  flame: <path d="M12 21c-3.9 0-6.5-2.6-6.5-6 0-3.6 3-5.6 3.8-9 2 1.3 3 3 3.2 4.6.9-.6 1.5-1.6 1.6-2.8 2.4 1.7 4.4 4.3 4.4 7.2 0 3.4-2.6 6-6.5 6Z" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  review: (
    <>
      <path d="M4.5 12a7.5 7.5 0 0 1 13-5.1M19.5 12a7.5 7.5 0 0 1-13 5.1" />
      <path d="M17.5 3v4h-4M6.5 21v-4h4" />
    </>
  ),
  daily: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3v4M16 3v4M4 10h16M10.5 13.5l-1.5 3h3l-1.5 3" />
    </>
  ),
  flag: <path d="M5.5 21V4.5M5.5 4.5h11l-2 4 2 4h-11" />,
  copy: (
    <>
      <rect x="8.5" y="8.5" width="11" height="11" rx="2" />
      <path d="M15.5 8.5V6a1.5 1.5 0 0 0-1.5-1.5H6A1.5 1.5 0 0 0 4.5 6v8A1.5 1.5 0 0 0 6 15.5h2.5" />
    </>
  ),
}

export function Icon({ name, className = 'w-5 h-5' }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      {ICONS[name]}
    </svg>
  )
}

/** Icono de sección dentro de una baldosa (cabeceras de página). */
export function IconTile({ name, tone = 'print' }: { name: IconName; tone?: 'print' | 'ink' }) {
  return (
    <span
      className={`shrink-0 grid place-items-center w-11 h-11 rounded-lg ${tone === 'print' ? 'bg-print-soft text-print' : 'bg-ink text-white'}`}
    >
      <Icon name={name} className="w-[1.35rem] h-[1.35rem]" />
    </span>
  )
}

/** Icono asociado a cada sección por su slug. */
export const SECTION_ICON: Record<string, IconName> = {
  'use-of-english': 'uoe',
  reading: 'reading',
  writing: 'writing',
  grammar: 'grammar',
  vocabulary: 'vocabulary',
  listening: 'listening',
  speaking: 'speaking',
}
