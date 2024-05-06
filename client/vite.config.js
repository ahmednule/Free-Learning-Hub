import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ command }) => {
  const isProduction = command === 'build'; // Check if it's a production build

  const devProxy = {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      rewrite: (path) => path
    }
  };

  const prodProxy = {
    '/api': {
      target: 'https://free-learning-hub-backend.vercel.app',
      changeOrigin: true,
      rewrite: (path) => path.startsWith('/api') ? path.replace('/api', '') : path
    }
  };

  return {
    plugins: [react()],
    server: {
      proxy: isProduction ? prodProxy : devProxy
    }
  };
});
