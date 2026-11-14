import { Link } from 'react-router-dom'
import { btn } from '../components/ui'

export default function NotFound() {
  return (
    <div className="py-16 max-w-md">
      <h1 className="text-2xl font-bold">Esta página no existe</h1>
      <p className="mt-2 text-ink-2">Puede que el enlace esté mal escrito o que el ejercicio haya cambiado de sitio.</p>
      <Link to="/" className={`${btn('primary')} mt-6`}>
        Ir al inicio
      </Link>
    </div>
  )
}
