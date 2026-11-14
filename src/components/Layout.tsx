import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-navy-800 text-white">
        <div className="mx-auto max-w-4xl px-4 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid place-items-center w-8 h-8 rounded-lg bg-gold-400 text-navy-900 text-sm font-bold">
              B2
            </span>
            <span>First · Práctica</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 mx-auto w-full max-w-4xl px-4 py-6 sm:py-10">
        <Outlet />
      </main>
      <footer className="text-center text-xs text-slate-500 py-6 px-4">
        Material de práctica original. No es contenido oficial de Cambridge English.
      </footer>
    </div>
  )
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav className="text-sm text-slate-500 mb-4 flex flex-wrap gap-1">
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <span aria-hidden>›</span>}
          {it.to ? (
            <Link to={it.to} className="hover:text-navy-700 underline-offset-2 hover:underline">
              {it.label}
            </Link>
          ) : (
            <span className="text-slate-700">{it.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
