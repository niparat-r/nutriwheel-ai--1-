import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  base: '/nutriwheel-ai--1-/',
  // Use '.' as the environment directory to avoid TypeScript errors with process.cwd()
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],

    define: {

      // Allows usage of process.env.API_KEY in the browser for this specific app structure
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});
