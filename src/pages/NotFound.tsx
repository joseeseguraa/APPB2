import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="text-center py-16">
      <p className="text-5xl mb-4" aria-hidden>🤔</p>
      <h1 className="text-xl font-semibold text-navy-900">No hemos encontrado esta página</h1>
      <Link to="/" className="inline-block mt-4 text-navy-700 underline">
        Volver al inicio
      </Link>
    </div>
  )
}
