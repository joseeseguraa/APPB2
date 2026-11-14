import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' para que funcione en GitHub Pages (subruta) o en cualquier hosting estático
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
