import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for Netlify SPA deployment.
export default defineConfig({
  // Netlify serves the app from the domain root, not a repo subpath.
  base: '/',
  plugins: [react()]
});
