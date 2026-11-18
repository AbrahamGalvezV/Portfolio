import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ruta del repo en GitHub Pages: https://abrahamgalvezv.github.io/Portfolio/
  base: '/Portfolio/',
})
