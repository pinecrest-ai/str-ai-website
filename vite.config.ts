import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3000,
    open: true
  },
  preview: {
    port: parseInt(process.env.PORT || '3000'),
    host: '0.0.0.0'
  }
})
