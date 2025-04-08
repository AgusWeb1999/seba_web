import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/seba_web/', // Cambia esto al nombre de tu repositorio
  server: {
    hmr: true,
    historyApiFallback: true,
  }, 
});