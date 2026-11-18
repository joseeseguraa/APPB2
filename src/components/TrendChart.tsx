// Pequeña gráfica de línea: % de aciertos por semana (una sola serie, un solo color).
interface Point {
  week: Date
  score: number
  total: number
  pct: number | null
}

const W = 260
const H = 110
const PAD = { l: 26, r: 8, t: 10, b: 20 }

function fmtWeek(d: Date) {
  return d.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' }).replace('.', '')
}

export default function TrendChart({ title, points }: { title: string; points: Point[] }) {
  const iw = W - PAD.l - PAD.r
  const ih = H - PAD.t - PAD.b
  const x = (i: number) => PAD.l + (points.length === 1 ? iw / 2 : (i / (points.length - 1)) * iw)
  const y = (v: number) => PAD.t + ih - (v / 100) * ih

  // tramos continuos (las semanas sin práctica cortan la línea)
  const segments: { i: number; v: number }[][] = []
  let cur: { i: number; v: number }[] = []
  points.forEach((p, i) => {
    if (p.pct === null) {
      if (cur.length) segments.push(cur)
      cur = []
    } else cur.push({ i, v: p.pct })
  })
  if (cur.length) segments.push(cur)

  const withData = points.filter((p) => p.pct !== null)
  const last = withData[withData.length - 1]

  return (
    <figure className="min-w-0">
      <figcaption className="flex items-baseline justify-between gap-2 mb-1">
        <span className="font-semibold text-[0.95rem]">{title}</span>
        <span className="text-sm text-ink-2 tabular-nums">{last ? `${last.pct}% esta última vez` : 'Sin datos'}</span>
      </figcaption>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto overflow-visible" role="img" aria-label={`${title}: aciertos por semana`}>
        {/* rejilla recesiva */}
        {[0, 50, 100].map((v) => (
          <g key={v}>
            <line x1={PAD.l} x2={W - PAD.r} y1={y(v)} y2={y(v)} className="stroke-line" strokeWidth={1} />
            <text x={PAD.l - 6} y={y(v) + 3.5} textAnchor="end" className="fill-ink-3 text-[9px] tabular-nums">
              {v}
            </text>
          </g>
        ))}
        {/* eje x: primera y última semana */}
        <text x={x(0)} y={H - 4} textAnchor="start" className="fill-ink-3 text-[9px]">
          {fmtWeek(points[0].week)}
        </text>
        <text x={x(points.length - 1)} y={H - 4} textAnchor="end" className="fill-ink-3 text-[9px]">
          esta semana
        </text>
        {/* línea */}
        {segments.map((seg, k) =>
          seg.length > 1 ? (
            <polyline
              key={k}
              points={seg.map((p) => `${x(p.i)},${y(p.v)}`).join(' ')}
              fill="none"
              className="stroke-print"
              strokeWidth={2}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          ) : null,
        )}
        {/* puntos con área de toque grande y tooltip nativo */}
        {points.map((p, i) =>
          p.pct === null ? null : (
            <g key={i} className="group">
              <title>{`Semana del ${fmtWeek(p.week)}: ${p.pct}% (${p.score} de ${p.total})`}</title>
              <circle cx={x(i)} cy={y(p.pct)} r={12} fill="transparent" />
              <circle cx={x(i)} cy={y(p.pct)} r={4} className="fill-print stroke-paper" strokeWidth={2} />
            </g>
          ),
        )}
      </svg>
    </figure>
  )
}
