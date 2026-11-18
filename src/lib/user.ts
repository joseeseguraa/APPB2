// Datos de la persona que usa la app (solo en este navegador).
const KEY = 'appb2.user.v1'

export interface UserData {
  name: string
  onboarded: boolean
}

export function loadUser(): UserData {
  try {
    return { name: '', onboarded: false, ...(JSON.parse(localStorage.getItem(KEY) ?? '{}') as Partial<UserData>) }
  } catch {
    return { name: '', onboarded: false }
  }
}

export function saveUser(u: Partial<UserData>): void {
  try {
    localStorage.setItem(KEY, JSON.stringify({ ...loadUser(), ...u }))
  } catch {
    /* sin almacenamiento */
  }
}
