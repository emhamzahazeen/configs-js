import { defineConfig } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';
export default defineConfig({
  plugins: [
    AutoImport({
      dirs: ['src/composables', 'src/stores'],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json'
      },
      imports: ['vue', 'vue-router', 'vue-i18n', 'vue/macros', '@vueuse/head', '@vueuse/core'],
      vueTemplate: true
    })
  ]
});
