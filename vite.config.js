/**
 * Project: TiffinFlow Pro
 * Date: February 16, 2026
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [
    react(),
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true
  }
})
