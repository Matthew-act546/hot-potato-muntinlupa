import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'module';

// Suppress SCSS deprecation warnings
const require = createRequire(import.meta.url);
require('sass').info = () => {}; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change if needed
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    }
  },
})
