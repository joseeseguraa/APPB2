import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Icon, type IconName } from './ui'
import { dateKey, dueKeys, loadDaily } from '../lib/review'
import { loadUser } from '../lib/user'
import Welcome from './Welcome'

interface NavItem {
  to: string
  label: string
  icon: IconName
  soon?: boolean
}

const GROUPS: { title?: string; items: NavItem[] }[] = [
  { items: [{ to: '/', label: 'Inicio', icon: 'home' }] },
  {
    title: 'Cada día',
    items: [
      { to: '/reto', label: 'Reto diario', icon: 'daily' },
      { to: '/repaso', label: 'Mis errores', icon: 'review' },
    ],
  },
  {
    title: 'El examen',
    items: [
      { to: '/examen', label: 'Formato y partes', icon: 'exam' },
      { to: '/s/use-of-english', label: 'Use of English', icon: 'uoe' },
      { to: '/s/reading', label: 'Reading', icon: 'reading' },
      { to: '/s/writing', label: 'Writing', icon: 'writing' },
      { to: '/listening', label: 'Listening', icon: 'listening', soon: true },
      { to: '/speaking', label: 'Speaking', icon: 'speaking', soon: true },
    ],
  },
  {
    title: 'Base',
    items: [
      { to: '/s/grammar', label: 'Grammar', icon: 'grammar' },
      { to: '/s/vocabulary', label: 'Vocabulary', icon: 'vocabulary' },
    ],
  },
  {
    title: 'Seguimiento',
    items: [
      { to: '/simulacro', label: 'Simulacros', icon: 'mock' },
      { to: '/progreso', label: 'Mi progreso', icon: 'progress' },
    ],
  },
]

function isActive(pathname: string, to: string) {
  return to === '/' ? pathname === '/' : pathname === to || pathname.startsWith(to + '/')
}

function Wordmark() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="B2 First práctica, inicio">
      <span className="grid place-items-center w-10 h-6 rounded-full border-2 border-print text-print text-[0.7rem] font-extrabold">B2</span>
      <span className="font-bold tracking-[-0.01em] text-[1.05rem]">
        First <span className="font-medium text-ink-3">práctica</span>
      </span>
    </Link>
  )
}

function SideNav({ onNavigate }: { onNavigate?: () => void }) {
  const { pathname } = useLocation()
  const due = dueKeys().length
  const dailyDone = Boolean(loadDaily()[dateKey()])
  return (
    <nav aria-label="Secciones" className="flex flex-col gap-6">
      {GROUPS.map((g, gi) => (
        <div key={gi}>
          {g.title && <p className="px-3 mb-1.5 text-xs font-semibold text-ink-3">{g.title}</p>}
          <ul className="grid gap-0.5">
            {g.items.map((it) => {
              if (it.soon)
                return (
                  <li key={it.to}>
                    <span className="flex items-center gap-3 h-10 px-3 rounded-md text-ink-3 cursor-default">
                      <Icon name={it.icon} className="w-[1.15rem] h-[1.15rem]" />
                      <span className="flex-1 text-[0.95rem]">{it.label}</span>
                      <span className="text-[0.7rem] font-semibold border border-line rounded-full px-2 py-0.5">Pronto</span>
                    </span>
                  </li>
                )
              const active = isActive(pathname, it.to)
              return (
                <li key={it.to}>
                  <NavLink
                    to={it.to}
                    onClick={onNavigate}
                    aria-current={active ? 'page' : undefined}
                    className={`relative flex items-center gap-3 h-10 px-3 rounded-md text-[0.95rem] transition-colors ${
                      active ? 'bg-bg text-ink font-semibold' : 'text-ink-2 hover:text-ink hover:bg-bg/60'
                    }`}
                  >
                    {active && <span className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-print" aria-hidden />}
                    <Icon name={it.icon} className={`w-[1.15rem] h-[1.15rem] ${active ? 'text-print' : ''}`} />
                    <span className="flex-1">{it.label}</span>
                    {it.to === '/repaso' && due > 0 && (
                      <span className="min-w-[1.4rem] h-[1.4rem] px-1.5 grid place-items-center rounded-full bg-print text-white text-[0.7rem] font-bold tabular-nums">
                        {due}
                      </span>
                    )}
                    {it.to === '/reto' && !dailyDone && <span className="w-2 h-2 rounded-full bg-print" aria-label="Pendiente hoy" />}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )
}

const BOTTOM: { to: string; label: string; icon: IconName }[] = [
  { to: '/', label: 'Inicio', icon: 'home' },
  { to: '/simulacro', label: 'Simulacro', icon: 'mock' },
  { to: '/progreso', label: 'Progreso', icon: 'progress' },
]

export default function Layout() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [welcome, setWelcome] = useState(() => !loadUser().onboarded)

  useEffect(() => {
    window.scrollTo(0, 0)
    setOpen(false)
  }, [pathname])

  // Cerrar el menú con Escape y bloquear el scroll de fondo mientras está abierto
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const inPractice = pathname.startsWith('/s/') || pathname === '/examen'

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[16.5rem_1fr]">
      {/* Menú lateral (escritorio) */}
      <div className="hidden lg:block bg-paper border-r border-line">
      <aside className="flex flex-col sticky top-0 h-screen px-4 py-5 overflow-y-auto">
        <div className="px-2 mb-8">
          <Wordmark />
        </div>
        <SideNav />
        <p className="mt-auto pt-8 px-3 text-xs leading-relaxed text-ink-3">
          Material de práctica original. No es contenido oficial de Cambridge English.
        </p>
      </aside>
      </div>

      <div className="min-w-0 flex flex-col min-h-screen">
        {/* Cabecera (móvil y tablet) */}
        <header className="lg:hidden bg-paper border-b border-line sticky top-0 z-30">
          <div className="px-4 sm:px-6 h-14 flex items-center justify-between">
            <Wordmark />
            <button
              onClick={() => setOpen(true)}
              className="grid place-items-center w-10 h-10 -mr-2 rounded-md text-ink hover:bg-bg"
              aria-label="Abrir el menú de secciones"
              aria-expanded={open}
            >
              <Icon name="menu" className="w-6 h-6" />
            </button>
          </div>
        </header>

        <main className="flex-1 w-full max-w-6xl px-4 sm:px-6 lg:px-10 pt-6 sm:pt-8 lg:pt-10 pb-28 lg:pb-16">
          <Outlet />
        </main>
      </div>

      {/* Menú desplegable (móvil y tablet) */}
      <div className={`lg:hidden fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/40 transition-opacity duration-200 ${open ? 'opacity-100' : 'opacity-0'}`}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Secciones"
          className={`absolute inset-y-0 left-0 w-[82%] max-w-xs bg-paper shadow-xl px-4 py-5 overflow-y-auto transition-transform duration-200 ease-out ${
            open ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-2 mb-6">
            <Wordmark />
            <button onClick={() => setOpen(false)} className="grid place-items-center w-10 h-10 -mr-2 rounded-md hover:bg-bg" aria-label="Cerrar el menú">
              <Icon name="close" className="w-5 h-5" />
            </button>
          </div>
          <SideNav onNavigate={() => setOpen(false)} />
        </div>
      </div>

      {welcome && <Welcome onDone={() => setWelcome(false)} />}

      {/* Barra inferior (móvil) */}
      <nav
        className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-paper border-t border-line grid grid-cols-4 pb-[env(safe-area-inset-bottom)]"
        aria-label="Accesos rápidos"
      >
        {BOTTOM.slice(0, 1).map((l) => (
          <BottomLink key={l.to} {...l} active={pathname === '/'} />
        ))}
        <button
          onClick={() => setOpen(true)}
          className={`flex flex-col items-center gap-0.5 py-2 text-[0.72rem] font-semibold ${inPractice ? 'text-print' : 'text-ink-3'}`}
        >
          <Icon name="practice" className="w-6 h-6" />
          Practicar
        </button>
        {BOTTOM.slice(1).map((l) => (
          <BottomLink key={l.to} {...l} active={pathname.startsWith(l.to)} />
        ))}
      </nav>
    </div>
  )
}

function BottomLink({ to, label, icon, active }: { to: string; label: string; icon: IconName; active: boolean }) {
  return (
    <NavLink to={to} className={`flex flex-col items-center gap-0.5 py-2 text-[0.72rem] font-semibold ${active ? 'text-print' : 'text-ink-3'}`}>
      <Icon name={icon} className="w-6 h-6" />
      {label}
    </NavLink>
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
