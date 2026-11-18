// Tema claro / oscuro / según el sistema.
export type ThemePref = 'light' | 'dark' | 'system'
const KEY = 'appb2.theme.v1'

export function loadTheme(): ThemePref {
  try {
    return (localStorage.getItem(KEY) as ThemePref) || 'system'
  } catch {
    return 'system'
  }
}

const media = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)') : null

export function applyTheme(pref: ThemePref = loadTheme()): void {
  const dark = pref === 'dark' || (pref === 'system' && !!media?.matches)
  document.documentElement.classList.toggle('dark', dark)
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#1b1e25' : '#ffffff')
}

export function saveTheme(pref: ThemePref): void {
  try {
    localStorage.setItem(KEY, pref)
  } catch {
    /* sin almacenamiento */
  }
  applyTheme(pref)
}

// Si el tema es "sistema", seguir los cambios del sistema operativo
media?.addEventListener('change', () => loadTheme() === 'system' && applyTheme('system'))
