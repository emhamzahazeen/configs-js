import { defineConfig } from 'vite';
import VueI18n from '@intlify/unplugin-vue-i18n/vite';

export default (localeFilePaths) =>
  defineConfig({
    plugins: [
      VueI18n({
        compositionOnly: true,
        fullInstall: true,
        include: localeFilePaths,
        runtimeOnly: true
      })
    ]
  });
