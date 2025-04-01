import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Substitua pelo nome do seu repositório no GitHub
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});