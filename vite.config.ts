// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/LMS/', // substitua pelo nome do seu repositório
  plugins: [react()],
});
