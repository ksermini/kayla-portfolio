import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isPages = process.env.GH_PAGES === 'true' // dev=/, GH Pages=/kayla-portfolio/

export default defineConfig({
  plugins: [react()],
  base: isPages ? '/kayla-portfolio/' : '/',
})
