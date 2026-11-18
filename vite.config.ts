import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// base './' para que funcione en GitHub Pages (subruta) o en cualquier hosting estático
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    // App instalable y usable sin conexión (service worker + manifest)
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'B2 First práctica',
        short_name: 'B2 First',
        description: 'Prepara el Cambridge B2 First parte por parte, con explicaciones en español.',
        lang: 'es',
        start_url: './',
        scope: './',
        display: 'standalone',
        background_color: '#f2f3f6',
        theme_color: '#ffffff',
        icons: [
          { src: 'pwa-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'pwa-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
      },
    }),
  ],
})
