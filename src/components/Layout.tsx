import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Icon } from './ui'

const NAV = [
  { to: '/', label: 'Practicar', icon: 'practice' as const },
  { to: '/simulacro', label: 'Simulacro', icon: 'mock' as const },
  { to: '/progreso', label: 'Progreso', icon: 'progress' as const },
]

/** "Practicar" está activo en el inicio y en todas las secciones de práctica. */
function useActive() {
  const { pathname } = useLocation()
  return (to: string) => (to === '/' ? pathname === '/' || pathname.startsWith('/s/') : pathname.startsWith(to))
}

export default function Layout() {
  const { pathname } = useLocation()
  const isActive = useActive()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-paper border-b border-line sticky top-0 z-30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5" aria-label="B2 First, inicio">
            <span className="grid place-items-center w-10 h-6 rounded-full border-2 border-print text-print text-[0.7rem] font-extrabold">
              B2
            </span>
            <span className="font-bold tracking-[-0.01em] text-[1.05rem]">
              First <span className="font-medium text-ink-3">práctica</span>
            </span>
          </Link>
          <nav className="hidden sm:flex items-center gap-1" aria-label="Principal">
            {NAV.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={`h-9 px-3.5 inline-flex items-center rounded-md text-[0.95rem] font-medium transition-colors ${
                  isActive(l.to) ? 'bg-bg text-ink' : 'text-ink-2 hover:text-ink'
                }`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1 mx-auto w-full max-w-6xl px-4 sm:px-6 pt-6 sm:pt-10 pb-28 sm:pb-16">
        <Outlet />
      </main>

      <footer className="hidden sm:block border-t border-line text-xs text-ink-3 py-6">
        <div className="mx-auto max-w-6xl px-6">Material de práctica original. No es contenido oficial de Cambridge English.</div>
      </footer>

      {/* Barra inferior en móvil */}
      <nav
        className="sm:hidden fixed bottom-0 inset-x-0 z-30 bg-paper border-t border-line grid grid-cols-3 pb-[env(safe-area-inset-bottom)]"
        aria-label="Principal"
      >
        {NAV.map((l) => {
          const active = isActive(l.to)
          return (
            <NavLink
              key={l.to}
              to={l.to}
              className={`flex flex-col items-center gap-0.5 py-2 text-[0.72rem] font-semibold ${active ? 'text-print' : 'text-ink-3'}`}
            >
              <Icon name={l.icon} className="w-6 h-6" />
              {l.label}
            </NavLink>
          )
        })}
      </nav>
    </div>
  )
}

/** Enlace para volver al nivel anterior. */
export function BackLink({ to, label }: { to: string; label: string }) {
  return (
    <Link to={to} className="inline-flex items-center gap-1 text-sm font-medium text-ink-2 hover:text-ink mb-4 -ml-1">
      <Icon name="back" className="w-4 h-4" />
      {label}
    </Link>
  )
}

/** Compatibilidad con las páginas que pasan migas: se muestra solo la vuelta al nivel anterior. */
export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  const parent = [...items].reverse().find((i) => i.to)
  return parent ? <BackLink to={parent.to!} label={parent.label} /> : null
}
