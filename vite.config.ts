import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Aapke GitHub repository ka naam 'PORTFOLLIO' hai, toh base path yahan set hoga
  base: '/PORTFOLLIO/',
  plugins: [react()],
})
