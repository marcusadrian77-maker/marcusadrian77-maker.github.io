import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://www.reparatiielectronice.ro',
  trailingSlash: 'always',
  build: { format: 'directory' },
  redirects: {
    // Mostenite din WordPress (Rank Math)
    '/reparatii-laptopuri/': '/reparatii-laptopuri-bucuresti/',
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
    '/service-reparatii-console-playstation/': '/reparatii-mentenanta-console-ps4-ps5-xbox-manete/',
    // Articole de blog disparute la relansare -> pagina de serviciu pe aceeasi tema
    '/2026/05/05/televizor-samsung-nu-porneste-cauze-solutii/': '/reparatii-tv-samsung/',
    '/2026/05/07/curatare-laptop-praf-cat-de-des-de-ce-conteaza/': '/mentenanta-profesionala-pasta-termica/',
    '/2026/05/14/ps5-se-opreste-singur-supraincalzire-cauze-solutii/': '/mentenanta-console-ps4-ps5-xbox/',
    '/2026/05/16/macbook-ecran-negru-cauze-solutii/': '/reparatii-macbook/',
  },
});
