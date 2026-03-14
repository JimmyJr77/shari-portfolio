import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/shari-portfolio/',  // '/' for local dev, '/shari-portfolio/' for GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'docs',                // ← GitHub Pages will serve from docs/
  },
}))
