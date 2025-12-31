import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@app': new URL('./src/app', import.meta.url).pathname,
      '@components': new URL('./src/components', import.meta.url).pathname,
      '@modules': new URL('./src/modules', import.meta.url).pathname,
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
})
