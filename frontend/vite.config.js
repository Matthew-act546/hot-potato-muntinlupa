import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'node:process';

process.env.SASS_SUPPRESS_DEPRECATION_WARNINGS = 'true';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/hot-potato-muntinlupa",
  server: {
    port: 3333, 
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    }
  },
})
