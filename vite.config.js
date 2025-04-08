import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/seba_web/' : '/', // Usa '/seba_web/' solo en producción
  server: {
    hmr: true,
    historyApiFallback: true,
  },
});