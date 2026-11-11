import { defineConfig } from 'astro/config';
import { writeFileSync, readFileSync, existsSync } from 'node:fs';

// Cloudflare Pages: redirecturile din `redirects` devin 301 reale prin dist/_redirects
// (pe GitHub Pages erau doar pagini cu meta-refresh + noindex).
// Regulile existente din public/_redirects se pastreaza, iar cele din config se adauga dupa ele.
function cloudflareRedirects() {
  let map = {};
  return {
    name: 'cloudflare-redirects',
    hooks: {
      'astro:config:done': ({ config }) => { map = config.redirects || {}; },
      'astro:build:done': ({ dir }) => {
        const file = new URL('_redirects', dir);
        const existing = existsSync(file) ? readFileSync(file, 'utf8').trimEnd() + '\n' : '';
        const lines = Object.entries(map).map(([from, to]) => {
          const dest = typeof to === 'string' ? to : to.destination;
          const rule = `${from} ${dest} 301`;
          // si varianta fara slash final, ca sa nu treaca prin 308 + 301
          return from.length > 1 && from.endsWith('/') ? `${rule}\n${from.slice(0, -1)} ${dest} 301` : rule;
        });
        writeFileSync(file, existing + '# Generate din astro.config.mjs\n' + lines.join('\n') + '\n');
        console.log(`[cloudflare-redirects] ${lines.length} reguli din config adaugate in _redirects`);
      },
    },
  };
}

export default defineConfig({
  site: 'https://www.reparatiielectronice.ro',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [cloudflareRedirects()],
  redirects: {
    // 11 nov 2026: MacBook pe sectoare 1–5 unite cu pagina principala (canibalizare)
    '/reparatii-macbook-sector-1/': '/reparatii-macbook/',
    '/reparatii-macbook-sector-2/': '/reparatii-macbook/',
    '/reparatii-macbook-sector-3/': '/reparatii-macbook/',
    '/reparatii-macbook-sector-4/': '/reparatii-macbook/',
    '/reparatii-macbook-sector-5/': '/reparatii-macbook/',
    // Mostenite din WordPress (Rank Math)
    '/reparatii-laptopuri/': '/reparatii-laptopuri-bucuresti/',
    '/reparatii-mentenanta-console-ps4-ps5-xbox-manete/': '/reparatii-console-gaming-sector-6/',
    '/mentenanta-periodica/': '/curatare-laptop-praf/',
    '/mentenanta-profesionala-pasta-termica/': '/mentenanta-console-ps4-ps5-xbox/',
    '/intrebari-frecvente-faq/': '/intrebari-frecvente-faq-2/',
    // Erori 404 din Search Console (aug 2026)
    // Slugurile vechi de sector (structura WordPress) -> structura noua
    '/reparatii-televizoare-sector-1/': '/reparatii-tv-sector-1/',
    '/reparatii-televizoare-sector-2/': '/reparatii-tv-sector-2/',
    '/reparatii-televizoare-sector-3/': '/reparatii-tv-sector-3/',
    '/reparatii-televizoare-sector-4/': '/reparatii-tv-sector-4/',
    '/reparatii-televizoare-sector-5/': '/reparatii-tv-sector-5/',
    '/reparatii-televizoare-sector-6/': '/reparatii-tv-sector-6/',
    '/sector-3/': '/reparatii-tv-sector-3/',
    // Sluguri vechi de servicii
    '/reparatii-laptopuri-3/': '/reparatii-laptopuri-bucuresti/',
    // URL vechi de PlayStation: trimis la pagina PS5, nu la hub.
    // Motiv: acumuleaza 1.528 afisari (poz. 9,8) si 85 de afisari pe "reparatii ps5" (poz. 14,5),
    // in timp ce hub-ul sta la 26,8. Autoritatea merge unde exista continut pe PS5.
    '/service-reparatii-console-playstation/': '/reparatii-ps5-bucuresti/',
    // Articole de blog disparute la relansare -> ghidurile noi pe aceeasi tema
    '/2026/05/05/televizor-samsung-nu-porneste-cauze-solutii/': '/televizor-samsung-nu-porneste/',
    '/2026/05/07/curatare-laptop-praf-cat-de-des-de-ce-conteaza/': '/curatare-laptop-praf/',
    '/2026/05/14/ps5-se-opreste-singur-supraincalzire-cauze-solutii/': '/ps5-se-opreste-singur/',
    '/2026/05/16/macbook-ecran-negru-cauze-solutii/': '/macbook-ecran-negru/',
    // Adrese vechi pe care Google le mai cere (404 in Statistici accesare, sept. 2026)
    '/reparatii-televizoare-bucuresti/': '/reparatii-televizoare/',
    '/reparatii-televizoare-bucuresti/reparatii-televizoare-sector-4/': '/reparatii-tv-sector-4/',
    '/reparatii-tablete-bucuresti/': '/',
    '/Reparatii/': '/',
  },
});
