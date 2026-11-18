import { Link } from 'react-router-dom'
import { PageHeader, Panel, btn } from './ui'
import { switchLevel } from './LevelPicker'

/** Página de C1 que todavía se está preparando. */
export default function C1Soon({ title, what }: { title: string; what: string }) {
  return (
    <div className="max-w-2xl">
      <PageHeader title={title} lead={`${what} de C1 Advanced está en preparación. Mientras tanto, practica las 8 partes del Reading & Use of English.`} />
      <Panel className="p-5 flex flex-wrap gap-3">
        <Link to="/examen" className={btn('primary')}>
          Ver las partes de C1
        </Link>
        <button onClick={() => switchLevel('b2')} className={btn('secondary')}>
          Volver a B2 First
        </button>
      </Panel>
    </div>
  )
}
