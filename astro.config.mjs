import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://www.reparatiielectronice.ro',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
