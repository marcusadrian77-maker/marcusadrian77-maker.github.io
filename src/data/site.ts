export const SITE = {
  nume: 'Marcus Electronics',
  firma: 'SC Marcus Electronics SRL',
  domeniu: 'https://www.reparatiielectronice.ro',
  telefon: '0765.461.357',
  telefonHref: 'tel:+40765461357',
  whatsapp: 'https://wa.me/40765461357',
  email: 'reparatielectronice@yahoo.com',
  adresa: 'Str. Moinești 7, bl. 134 A, Militari, Sector 6, București',
  adresaScurta: 'Militari, Sector 6, București',
  program: 'Luni–Sâmbătă: 09:00–20:00',
  zonaDomiciliu: 'București și Ilfov',
};
export const NAV_SERVICII = [
  { href: '/reparatii-televizoare/', label: 'Reparații Televizoare' },
  { href: '/reparatii-tv-sectoare/', label: 'TV la Domiciliu — pe Sectoare' },
  { href: '/reparatii-laptopuri-bucuresti/', label: 'Reparații Laptopuri' },
  { href: '/reparatii-macbook/', label: 'Reparații MacBook & iMac' },
  { href: '/reparatii-mentenanta-console-ps4-ps5-xbox-manete/', label: 'Reparații Console Gaming' },
  { href: '/reparatii-boxe-active/', label: 'Boxe Active & Amplificatoare' },
  { href: '/reparatii-monitoare-lcd/', label: 'Reparații Monitoare' },
  { href: '/reparatii-cuptoare-cu-microunde/', label: 'Cuptoare cu Microunde' },
  { href: '/mentenanta-profesionala-pasta-termica/', label: 'Mentenanță Pastă Termică' },
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
  name: 'Marcus Electronics — Reparații Electronice',
  url: 'https://www.reparatiielectronice.ro/',
  telephone: '+40765461357',
  email: 'reparatielectronice@yahoo.com',
  priceRange: '$$',
  address: { '@type': 'PostalAddress', streetAddress: 'Str. Moinești 7, bl. 134 A', addressLocality: 'București', addressRegion: 'Sector 6', addressCountry: 'RO' },
  openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '09:00', closes: '20:00' },
  areaServed: ['București', 'Ilfov'],
};
