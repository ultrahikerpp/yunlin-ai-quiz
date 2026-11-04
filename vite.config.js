import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// GitHub Pages 需要子路徑 /yunlin-ai-quiz/；Vercel 等根網域部署請設環境變數 VITE_BASE=/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/yunlin-ai-quiz/',
})
