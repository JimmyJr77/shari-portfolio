import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/shari-portfolio/',        // ← your repo name
  plugins: [react()],
  build: {
    outDir: 'docs',                // ← GitHub Pages will serve from docs/
  },
})
