import { defineConfig } from 'vite';
import Markdown from 'vite-plugin-vue-markdown';
import LinkAttributes from 'markdown-it-link-attributes';
import Shiki from 'markdown-it-shiki';
export default defineConfig({
  plugins: [
    Markdown({
      headEnabled: true,
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true
      },
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Shiki, {
          theme: {
            dark: 'dracula-soft',
            light: 'nord'
          }
        });
        md.use(LinkAttributes, {
          attrs: {
            rel: 'noopener',
            target: '_blank'
          },
          matcher: (link) => /^https?:\/\//.test(link)
        });
      },
      wrapperClasses: ''
    })
  ]
});
