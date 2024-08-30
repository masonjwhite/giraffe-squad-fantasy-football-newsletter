import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/giraffe-squad-fantasy-football/weeks/1',
  plugins: [react()],
});
