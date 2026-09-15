import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://rosmarm.github.io',
  base: '/rosmar-cv',
  integrations: [tailwind()],
});
