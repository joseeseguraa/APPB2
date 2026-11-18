import { useEffect, useRef, useState } from 'react'
import { saveUser } from '../lib/user'
import { btn, Icon, type IconName } from './ui'

const HOW: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'exam',
    title: 'Practica cada parte del examen',
    text: 'Use of English, Reading y Writing con el formato real, más Grammar y Vocabulary. Cada respuesta tiene su explicación en español.',
  },
  {
    icon: 'daily',
    title: 'Un poco cada día',
    text: 'El reto diario son 10 preguntas en 5 minutos. Lo que falles va a Mis errores y te vuelve a salir hasta que lo domines.',
  },
  {
    icon: 'mock',
    title: 'Mide tu nivel',
    text: 'Haz un simulacro con el tiempo oficial y obtén una nota estimada en la escala de Cambridge.',
  },
]

/** Bienvenida en tres pasos la primera vez que se abre la app. */
export default function Welcome({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (step === 0) inputRef.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [step])

  const finish = () => {
    saveUser({ name: name.trim(), onboarded: true })
    onDone()
  }

  return (
    <div className="fixed inset-0 z-[60] bg-black/60 grid place-items-center p-4" role="dialog" aria-modal="true" aria-labelledby="welcome-title">
      <div className="w-full max-w-lg bg-paper rounded-xl shadow-2xl overflow-hidden">
        <div className="h-1 bg-line">
          <div className="h-full bg-print transition-all duration-300" style={{ width: `${((step + 1) / 3) * 100}%` }} />
        </div>
        <div className="p-6 sm:p-8">
          {step === 0 && (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setStep(1)
              }}
            >
              <span className="grid place-items-center w-14 h-8 rounded-full border-2 border-print text-print text-sm font-extrabold mb-5">B2</span>
              <h2 id="welcome-title" className="text-2xl font-bold tracking-[-0.02em]">
                Te damos la bienvenida
              </h2>
              <p className="text-ink-2 mt-2 leading-relaxed">Una app para preparar el Cambridge B2 First a tu ritmo, gratis y sin registrarte.</p>
              <label className="block mt-6">
                <span className="text-sm font-semibold">¿Cómo te llamas?</span>
                <input
                  ref={inputRef}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  maxLength={30}
                  className="mt-1.5 w-full h-11 rounded-md border border-line-strong px-3 text-base outline-none focus:border-ink"
                />
                <span className="block text-xs text-ink-3 mt-1.5">Solo se usa para saludarte. No sale de este dispositivo.</span>
              </label>
              <div className="mt-6 flex gap-2">
                <button type="submit" className={btn('primary')}>
                  Continuar
                </button>
              </div>
            </form>
          )}

          {step === 1 && (
            <>
              <h2 id="welcome-title" className="text-2xl font-bold tracking-[-0.02em]">
                {name.trim() ? `${name.trim()}, así funciona` : 'Así funciona'}
              </h2>
              <ul className="mt-5 grid gap-5">
                {HOW.map((h) => (
                  <li key={h.title} className="flex gap-4">
                    <span className="shrink-0 grid place-items-center w-10 h-10 rounded-lg bg-print-soft text-print">
                      <Icon name={h.icon} />
                    </span>
                    <div>
                      <p className="font-semibold">{h.title}</p>
                      <p className="text-sm text-ink-2 mt-0.5 leading-relaxed">{h.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex gap-2">
                <button onClick={() => setStep(2)} className={btn('primary')}>
                  Continuar
                </button>
                <button onClick={() => setStep(0)} className={btn('quiet')}>
                  Atrás
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2 id="welcome-title" className="text-2xl font-bold tracking-[-0.02em]">
                Antes de empezar
              </h2>
              <ul className="mt-4 space-y-3 text-[0.97rem] leading-relaxed text-ink-2">
                <li>
                  <b className="text-ink">Tu progreso se guarda en este navegador.</b> Si cambias de móvil u ordenador, descarga una copia desde Mi
                  progreso.
                </li>
                <li>
                  <b className="text-ink">Instálala como una app.</b> En el móvil, abre el menú del navegador y elige «Añadir a pantalla de inicio».
                  Funciona sin conexión.
                </li>
                <li>
                  <b className="text-ink">¿Ves un error en un ejercicio?</b> Debajo de cada corrección hay un enlace para avisar.
                </li>
              </ul>
              <div className="mt-7 flex gap-2">
                <button onClick={finish} className={btn('accent')}>
                  Empezar a practicar
                </button>
                <button onClick={() => setStep(1)} className={btn('quiet')}>
                  Atrás
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
