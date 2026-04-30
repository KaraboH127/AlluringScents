import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for a standard React single-page app.
export default defineConfig({
  base: '/AlluringScents/',
  plugins: [react()]
});
