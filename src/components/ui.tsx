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
}: {
  title: ReactNode
  lead?: ReactNode
  aside?: ReactNode
  /** número de parte del examen (se muestra en tinta magenta) */
  number?: number
}) {
  return (
    <header className="mb-6 sm:mb-8 flex flex-wrap items-end justify-between gap-4">
      <div className="min-w-0 max-w-2xl flex gap-4 items-start">
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

/* ---------- Iconos mínimos (trazo) ---------- */

export function Icon({ name, className = 'w-5 h-5' }: { name: 'practice' | 'mock' | 'progress' | 'back'; className?: string }) {
  const paths: Record<string, ReactNode> = {
    practice: (
      <>
        <path d="M4 20h4L19 9l-4-4L4 16v4Z" />
        <path d="m13.5 6.5 4 4" />
      </>
    ),
    mock: (
      <>
        <circle cx="12" cy="13" r="7.5" />
        <path d="M12 9.5V13l2.5 2M9.5 2.5h5" />
      </>
    ),
    progress: <path d="M4 19V5M4 19h16M8 15v-4M12 15V8M16 15v-6" />,
    back: <path d="M15 5 8 12l7 7" />,
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      {paths[name]}
    </svg>
  )
}
