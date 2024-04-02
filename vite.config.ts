/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4242,
    strictPort: true,
  },
  test: {
    coverage: {
      provider: 'istanbul',
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/setupTest.ts'],
  },
})
