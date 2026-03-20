import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/',  // Vercel serves at root; change to '/shari-portfolio/' if using GitHub Pages
  plugins: [react()],
  resolve: {
    alias: {
      'ai/react': path.resolve(__dirname, 'node_modules/ai/react/dist/index.mjs'),
    },
  },
  build: {
    outDir: 'dist',                // Vercel default
  },
})
