// Cate o fotografie cu o cladire reprezentativa pentru fiecare sector,
// afisata pe paginile /reparatii-tv-sector-N/.
// Toate sunt de pe Wikimedia Commons, cu licenta libera; autorul si licenta
// apar sub fiecare poza. Imaginile sunt decupate la 1200x800 (public/img).
// Am ales doar cladiri vechi (arhitect decedat de peste 70 de ani), fiindca
// Romania nu are libertatea panoramei pentru folosire comerciala.

export type FotoSector = {
  src: string;
  alt: string;
  legenda: string;
  autor: string;
  fisier: string; // titlul fisierului pe Commons
  licenta: string;
  licentaUrl: string;
};

export const FOTO_SECTOR: Record<number, FotoSector> = {
  1: {
    src: '/img/sector-1-ateneul-roman.webp',
    alt: 'Ateneul Român văzut din față, cu coloanele și cupola, în Sectorul 1 din București',
    legenda: 'Ateneul Român, pe Strada Benjamin Franklin, inaugurat în 1888 — una dintre clădirile-simbol ale Sectorului 1.',
    autor: 'Pudelek (Marcin Szala)',
    fisier: 'File:Ateneul Român 1.jpg',
    licenta: 'CC BY-SA 3.0',
    licentaUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
  },
  2: {
    src: '/img/sector-2-foisorul-de-foc.webp',
    alt: 'Foișorul de Foc, turnul de observație al pompierilor de pe Bulevardul Ferdinand, în Sectorul 2 din București',
    legenda: 'Foișorul de Foc, pe Bulevardul Ferdinand I: fostul turn de observație al pompierilor, ridicat la sfârșitul secolului al XIX-lea, azi muzeu și reper al Sectorului 2.',
    autor: 'Britchi Mirela',
    fisier: 'File:Bucuresti, Romania, Foisorul de Foc, Bd. Ferdinand nr. 33, sect. 2 (vedere de ansamblu).JPG',
    licenta: 'CC BY-SA 3.0 RO',
    licentaUrl: 'https://creativecommons.org/licenses/by-sa/3.0/ro/',
  },
  3: {
    src: '/img/sector-3-hanul-lui-manuc.webp',
    alt: 'Hanul lui Manuc văzut din exterior, cu ronduri de flori în față, în Centrul Vechi, Sectorul 3 din București',
    legenda: 'Hanul lui Manuc, în Centrul Vechi: construit în 1808, este unul dintre reperele istorice ale Sectorului 3.',
    autor: 'Britchi Mirela',
    fisier: 'File:Bucuresti, Romania. HANUL LUI MANUC (12) (B-II-m-A-18788).jpg',
    licenta: 'CC BY-SA 4.0',
    licentaUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  4: {
    src: '/img/sector-4-palatul-patriarhiei.webp',
    alt: 'Palatul Patriarhiei de pe Dealul Mitropoliei, cu fațada cu coloane și cupola, în Sectorul 4 din București',
    legenda: 'Palatul Patriarhiei, pe Dealul Mitropoliei: fostul sediu al Camerei Deputaților, terminat în 1907, în Sectorul 4.',
    autor: 'Ștefan Jurcă',
    fisier: 'File:Palatul Camera Deputaților (27832827823).jpg',
    licenta: 'CC BY 2.0',
    licentaUrl: 'https://creativecommons.org/licenses/by/2.0/',
  },
  5: {
    src: '/img/sector-5-palatul-bragadiru.webp',
    alt: 'Fațada Palatului Bragadiru de pe Calea Rahovei, în Sectorul 5 din București',
    legenda: 'Palatul Bragadiru, pe Calea Rahovei: ridicat la începutul secolului XX lângă fosta fabrică de bere, este una dintre clădirile cunoscute ale Sectorului 5.',
    autor: 'Neoclassicism Enthusiast',
    fisier: 'File:147-153, Calea Rahovei, Bucharest (Romania).jpg',
    licenta: 'CC BY-SA 4.0',
    licentaUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  6: {
    src: '/img/sector-6-palatul-cotroceni.webp',
    alt: 'Palatul Cotroceni văzut din grădină, cu un felinar verde în prim-plan, în Sectorul 6 din București',
    legenda: 'Palatul Cotroceni, pe Bulevardul Geniului: fostă reședință regală de la sfârșitul secolului al XIX-lea, azi sediul Președinției și muzeu, în Sectorul 6.',
    autor: 'Rakoon',
    fisier: 'File:DSC-2637-cotroceni-palace-2018.jpg',
    licenta: 'CC0',
    licentaUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
  },
};

export const linkCommons = (fisier: string) =>
  'https://commons.wikimedia.org/wiki/' + encodeURI(fisier.replace(/ /g, '_'));
