// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://rirosystems.com",
  redirects: {
    // Unificación: la landing del piloto vive en /ops/piloto
    "/proyecto-piloto": "/ops/piloto",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap({
      // Excluir páginas no indexables (agradecimiento del formulario y 404)
      filter: (page) => !/\/(gracias|404)\/?$/.test(page),
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
});