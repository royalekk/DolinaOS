import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Jeśli używasz Tailwind 4

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/DolinaOS/', // To jest kluczowe dla GitHub Pages!
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
});
