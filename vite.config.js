import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  base: './', // For GitHub Pages compatibility
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
