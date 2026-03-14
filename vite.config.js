import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/shari-portfolio/',  // '/' for local dev, '/shari-portfolio/' for GitHub Pages
  plugins: [react()],
  resolve: {
    alias: {
      'ai/react': path.resolve(__dirname, 'node_modules/ai/react/dist/index.mjs'),
    },
  },
  build: {
    outDir: 'docs',                // ← GitHub Pages will serve from docs/
  },
}))
