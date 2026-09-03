// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

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
  integrations: [react()],
});