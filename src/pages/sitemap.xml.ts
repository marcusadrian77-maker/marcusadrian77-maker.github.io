import type { APIRoute } from 'astro';
import { SECTOARE, BRANDURI } from '../data/sectoare';

const statice = ['', 'despre-noi/', 'servicii/', 'preturi/', 'contact/', 'intrebari-frecvente-faq-2/',
 'reparatii-televizoare/', 'reparatii-laptopuri-bucuresti/', 'reparatii-macbook/', 'reparatii-boxe-active/',
 'reparatii-monitoare-lcd/', 'reparatii-cuptoare-cu-microunde/', 'reparatii-mentenanta-console-ps4-ps5-xbox-manete/',
 'reparatii-controllere-ps4-ps5-xbox/', 'mentenanta-console-ps4-ps5-xbox/', 'mentenanta-profesionala-pasta-termica/',
 'reparatii-laptop-sector-6/', 'reparatii-macbook-sector-6/', 'reparatii-console-gaming-sector-6/',
 'reparatii-boxe-active-amplificatoare/', 'reparatii-monitoare-sector-6/', 'reparatii-tv-sectoare/',
 'termeni-si-conditii/', 'politica-de-confidentialitate/', 'gdpr/'];

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? 'https://www.reparatiielectronice.ro').toString().replace(/\/$/, '');
  const urls = [
    ...statice.map(p => base + '/' + p),
    ...SECTOARE.map(s => base + '/reparatii-tv-sector-' + s.nr + '/'),
    ...BRANDURI.map(b => base + '/reparatii-tv-' + b.slug + '/'),
  ];
  const azi = new Date().toISOString().slice(0, 10);
  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls.map(u => '  <url><loc>' + u + '</loc><lastmod>' + azi + '</lastmod></url>').join('\n') + '\n</urlset>';
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
