// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite'; 

// https://astro.build/config
export default defineConfig({
  site: 'https://ipedrohenrick.dev.br',
  base: '/',
  trailingSlash: 'never',
  integrations: [mdx(), icon()],
  markdown: {
    shikiConfig: {
      theme: 'gruvbox-dark-hard',
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
