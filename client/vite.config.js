import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { // Set up proxy
    proxy: {
      '/api': {
        target: 'https://free-learning-hub-backend.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path
      }
    }
  },
})
