import { defineConfig } from 'vite';
import Stylelint from 'vite-plugin-stylelint';

export default defineConfig({
  plugins: [Stylelint({ fix: true })]
});
