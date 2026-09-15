// Helperi pentru datele structurate (JSON-LD) folosite pe paginile statice.
import { SITE } from './site';

const D = SITE.domeniu;
const abs = (u: string) => (u.startsWith('http') ? u : D + u);

const FURNIZOR = {
  '@type': 'ElectronicsStore',
  name: 'Marcus Electronics',
  telephone: '+40765461357',
  url: D + '/',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Str. Moinești 7, bl. 134 A',
    addressLocality: 'București',
    addressRegion: 'Sector 6',
    addressCountry: 'RO',
  },
};

const ZONA_ORAS = [
  { '@type': 'City', name: 'București' },
  { '@type': 'AdministrativeArea', name: 'Județul Ilfov' },
];

/** Nod Service pentru o pagină de serviciu. */
export function serviciu(o: {
  nume: string;
  tip: string;
  url: string;
  desc: string;
  sector?: number;
}) {
  return {
    '@type': 'Service',
    serviceType: o.tip,
    name: o.nume,
    url: abs(o.url),
    description: o.desc,
    provider: FURNIZOR,
    areaServed: o.sector
      ? { '@type': 'AdministrativeArea', name: 'Sector ' + o.sector + ', București' }
      : ZONA_ORAS,
    offers: { '@type': 'Offer', priceCurrency: 'RON', url: D + '/preturi/' },
  };
}

/** Nod BreadcrumbList. Primul element este întotdeauna „Acasă”. */
export function breadcrumb(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Acasă', url: '/' }, ...items].map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.url),
    })),
  };
}

/** Nod WebPage tipizat (AboutPage, ContactPage, CollectionPage...). */
export function pagina(tip: string, o: { nume: string; url: string; desc: string }) {
  return {
    '@type': tip,
    name: o.nume,
    url: abs(o.url),
    description: o.desc,
    isPartOf: { '@type': 'WebSite', name: SITE.nume, url: D + '/' },
  };
}

/** Împachetează nodurile într-un @graph cu context. */
export function graf(...noduri: (object | null | false | undefined)[]) {
  return { '@context': 'https://schema.org', '@graph': noduri.filter(Boolean) };
}

export const OFERTE_MARCUS: [string, number, number, string][] = [
  ['Diagnosticare', 0, 0, 'Identificarea defecțiunii, gratuit și fără obligații'],
  ['Reparație televizor — sursă de alimentare', 150, 400, 'Cea mai frecventă defecțiune la TV. Garanție 6–12 luni'],
  ['Reparație televizor — iluminare LED', 150, 400, 'Ecran negru cu sunet prezent. Garanție 6–12 luni'],
  ['Reparație televizor — placă principală', 150, 400, 'Smart TV, software, porturi. Garanție 6–12 luni'],
  ['Înlocuire panou televizor', 400, 1200, 'Depinde de diagonală și tehnologie'],
  ['Laptop — curățare și pastă termică', 80, 150, 'Pentru supraîncălzire și zgomot'],
  ['Laptop — înlocuire ecran', 200, 600, 'În funcție de diagonală și rezoluție'],
  ['Laptop — înlocuire baterie', 100, 250, 'Baterie nouă, cu calibrare'],
  ['MacBook — înlocuire baterie', 200, 500, 'Cu calibrare și verificarea cicluri'],
  ['MacBook — reparație placă logică', 300, 800, 'La nivel de componentă, la microscop'],
  ['Consolă — curățare și pastă termică', 80, 150, 'Inclusă gratuit în orice altă reparație'],
  ['Consolă — reparare port HDMI', 100, 250, 'PS4 și Xbox One. La PS5, 350–400 lei'],
  ['Boxe și amplificatoare — reparație amplificator', 80, 200, 'Cea mai rentabilă categorie de reparații'],
];

export function ofertaCatalog(domeniu: string) {
  return {
    '@type': 'OfferCatalog',
    name: 'Prețuri reparații electronice București',
    url: domeniu + '/preturi/',
    itemListElement: OFERTE_MARCUS.map(([nume, min, max, d], i) => ({
      '@type': 'Offer',
      position: i + 1,
      name: nume,
      description: d,
      priceCurrency: 'RON',
      availability: 'https://schema.org/InStock',
      areaServed: [{ '@type': 'City', name: 'București' }, { '@type': 'AdministrativeArea', name: 'Județul Ilfov' }],
      itemOffered: { '@type': 'Service', name: nume, serviceType: 'Reparații electronice' },
      ...(min === 0 && max === 0
        ? { price: '0', priceSpecification: { '@type': 'PriceSpecification', price: '0', priceCurrency: 'RON' } }
        : { priceSpecification: { '@type': 'PriceSpecification', minPrice: String(min), maxPrice: String(max), priceCurrency: 'RON', valueAddedTaxIncluded: true } }),
    })),
  };
}
