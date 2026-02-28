import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // base: '/' — default; use root for username.github.io or custom domain
  site: 'https://dylantyates.com',

  vite: {
    plugins: [tailwindcss()]
  }
});