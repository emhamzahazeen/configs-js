import { defineConfig } from 'vite';
import Eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [Eslint({ fix: true })]
});
