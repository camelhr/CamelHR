/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [react()],
    server: {
      port: 4242,
      strictPort: true,
      proxy: {
        '/api': {
          target: env.VITE_API_PROXY_TARGET || 'http://localhost:8080',
          changeOrigin: true,
        },
      },
      cors: true,
    },
    test: {
      coverage: {
        provider: 'istanbul',
      },
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/setupTest.ts'],
    },
  }
})
