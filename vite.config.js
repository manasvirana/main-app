import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      federation({
        name: 'main_app',
        remotes: {
          music_library: `${env.VITE_MUSIC_LIBRARY_URL}` 
        },
        shared: ['react', 'react-dom']
      })
    ],
    build: {
      target: 'esnext'
    }
  }
})
