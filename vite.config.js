import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Redirige todas las rutas al archivo index.html
    hmr: true,
    historyApiFallback: true,
  },
});