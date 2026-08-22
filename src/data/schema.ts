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
