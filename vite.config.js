import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'main-app-or-music-library', 
      remotes: {
        
        music_library: 'http://localhost:4174/assets/remoteEntry.js'
      },
      exposes: {
        
        './MusicLibrary': './src/MusicLibrary.jsx'
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    target: 'esnext'
  }
})
