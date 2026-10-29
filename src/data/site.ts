export const SITE = {
  nume: 'Marcus Electronics',
  firma: 'SC Marcus Electronics SRL',
  domeniu: 'https://www.reparatiielectronice.ro',
  telefon: '0765.461.357',
  telefonHref: 'tel:+40765461357',
  telefon2: '0720.667.800',
  telefon2Href: 'tel:+40720667800',
  whatsapp: 'https://wa.me/40765461357',
  email: 'reparatielectronice@yahoo.com',
  adresa: 'Str. Moinești 7, bl. 134 A, Militari, Sector 6, București',
  adresaScurta: 'Militari, Sector 6, București',
  program: 'Luni–Vineri: 10:00–19:00',
  zonaDomiciliu: 'București și Ilfov',
};
export const NAV_SERVICII = [
  { href: '/reparatii-televizoare/', label: 'Reparații Televizoare' },
  { href: '/reparatii-tv-sectoare/', label: 'TV la Domiciliu — pe Sectoare' },
  { href: '/reparatii-laptopuri-bucuresti/', label: 'Reparații Laptopuri' },
  { href: '/reparatii-macbook/', label: 'Reparații MacBook & iMac' },
  { href: '/reparatii-console-gaming-sector-6/', label: 'Reparații Console Gaming' },
  { href: '/reparatii-boxe-active/', label: 'Boxe Active & Amplificatoare' },
  { href: '/reparatii-soundbar/', label: 'Reparații Soundbar' },
  { href: '/reparatii-monitoare-lcd/', label: 'Reparații Monitoare' },
  { href: '/reparatii-cuptoare-cu-microunde/', label: 'Cuptoare cu Microunde' },
  { href: '/mentenanta-console-ps4-ps5-xbox/', label: 'Mentenanță Console PS5, PS4, Xbox' },
  { href: '/curatare-laptop-praf/', label: 'Curățare Laptop de Praf' },
  { href: '/reparatii-prin-curier/', label: 'Reparații prin Curier — toată țara' },
];
export const NAV = [
  { href: '/', label: 'Acasă' },
  { href: '/despre-noi/', label: 'Despre Noi' },
  { href: '/servicii/', label: 'Servicii' },
  { href: '/preturi/', label: 'Prețuri' },
  { href: '/intrebari-frecvente-faq-2/', label: 'FAQ' },
  { href: '/contact/', label: 'Contact' },
];
export const SCHEMA_LOCALBUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'ElectronicsStore',
  '@id': 'https://www.reparatiielectronice.ro/#business',
  name: 'Marcus Electronics — Reparații Electronice',
  legalName: 'MARCUS ELECTRONICS SRL',
  alternateName: 'Marcus Electronics',
  taxID: '18426506',
  vatID: 'RO18426506',
  foundingDate: '2006-02-27',
  identifier: { '@type': 'PropertyValue', propertyID: 'Nr. Registrul Comerțului', value: 'J40/3220/2006' },
  url: 'https://www.reparatiielectronice.ro/',
  telephone: '+40765461357',
  email: 'reparatielectronice@yahoo.com',
  priceRange: '$$',
  address: { '@type': 'PostalAddress', streetAddress: 'Str. Moinești 7, bl. 134 A', postalCode: '061231', addressLocality: 'București', addressRegion: 'Sector 6', addressCountry: 'RO' },
  geo: { '@type': 'GeoCoordinates', latitude: 44.4318013, longitude: 26.0191044 },
  contactPoint: [
    { '@type': 'ContactPoint', telephone: '+40765461357', contactType: 'customer service', areaServed: 'RO', availableLanguage: 'ro' },
    { '@type': 'ContactPoint', telephone: '+40720667800', contactType: 'customer service', areaServed: 'RO', availableLanguage: 'ro' },
  ],
  sameAs: [
    'https://www.google.com/maps?cid=8478287421888488271',
    'https://www.google.com/maps?cid=3284667601974338277',
    'https://www.reparatiitvbucuresti.ro/',
  ],
  subjectOf: {
    '@type': 'NewsArticle',
    headline: 'Doctor de gadgeturi: cât te costă să-ți repari electronicele',
    url: 'https://evz.ro/doctor-de-gadgeturi-cat-te-costa-sa-ti-repari-electronicele-925023.html',
    datePublished: '2011-03-28',
    publisher: { '@type': 'Organization', name: 'Evenimentul Zilei' },
  },
  openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '10:00', closes: '19:00' },
  areaServed: ['București', 'Ilfov'],
};

// test
// test
// x
// x
