import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this project from /SPR/; every other host (custom
  // domain, local dev) should stay at root.
  base: process.env.GITHUB_PAGES ? '/SPR/' : '/',
  plugins: [react(), tailwindcss()],
})
