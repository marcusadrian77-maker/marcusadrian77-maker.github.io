// Paginile „Service Laptop Sector 1–5". Sectorul 6 are pagina lui statica
// (reparatii-laptop-sector-6.astro), fiindca acolo e atelierul.
// Textele sunt scrise separat de cele pentru MacBook (macbook-sectoare.ts):
// alt unghi pe fiecare sector si alte formulari pentru drum.

export type LaptopSector = {
  nr: number;
  cartiere: string[];
  lead: string;
  drumTitlu: string;
  metrou: string;
  masina: string;
  unghiTitlu: string;
  unghi: string[];
  legatura: { href: string; text: string };
  faq: { q: string; a: string }[];
};

export const LAPTOP_SECTOARE: LaptopSector[] = [
  {
    nr: 1,
    cartiere: ['Dorobanți', 'Floreasca', 'Aviației', 'Băneasa', 'Domenii', '1 Mai', 'Bucureștii Noi', 'Dămăroaia', 'Pajura', 'Piața Victoriei'],
    lead: 'Reparăm laptopuri de orice marcă pentru clienții din Sectorul 1, în atelierul nostru din Militari: Dell, HP, Lenovo, Asus, Acer și restul. Diagnosticarea este gratuită, iar prețul îl știți înainte să începem.',
    drumTitlu: 'Din Sectorul 1 până la atelier',
    metrou: 'De la Piața Victoriei sau Gara de Nord mergeți cu M1 până la Eroilor. Acolo treceți pe M3, direcția Preciziei, și coborâți la Gorjului. Din Aviației și Pipera, M2 vă lasă la Piața Unirii, unde luați tot M3 spre Gorjului.',
    masina: 'Pe Splaiul Independenței spre vest și apoi pe Bd. Iuliu Maniu, ori prin Pasajul Basarab și Orhideelor. În afara aglomerației, în jur de 30–40 de minute.',
    unghiTitlu: 'Laptopul de birou care merge greu',
    unghi: [
      'Multe laptopuri de birou care ajung la service nu sunt stricate. Sunt lente: pornesc în trei minute, se blochează la al cincilea tab, iar ventilatorul se aude din camera cealaltă. Aproape întotdeauna, cauza e una dintre două.',
      'Prima e discul. Un laptop care încă are disc mecanic se schimbă complet cu un SSD; manopera pentru upgrade de SSD sau de memorie este 50–100 de lei, la care se adaugă piesa. A doua e căldura: praful strâns în radiator obligă procesorul să încetinească singur, ca să nu se ardă. O curățare completă cu pastă termică nouă costă 80–150 de lei.',
      'Amândouă se fac de regulă în 24–48 de ore, cu datele și programele păstrate. Înainte să cumpărați un laptop nou pentru că cel vechi „nu mai face față”, merită un telefon.',
    ],
    legatura: { href: '/laptop-se-incalzeste/', text: 'de ce se încălzește un laptop și ce e de făcut' },
    faq: [
      { q: 'Merită un SSD pe un laptop de cinci-șase ani?', a: 'De cele mai multe ori da, dacă restul laptopului e în regulă. E modificarea care se simte cel mai mult la folosire. Manopera este 50–100 de lei, plus prețul SSD-ului, pe care îl alegeți împreună cu noi după capacitate.' },
      { q: 'Se pierd programele și fișierele la trecerea pe SSD?', a: 'De regulă nu, dacă discul vechi mai poate fi citit. Conținutul lui se copiază pe cel nou, astfel că laptopul pornește cum îl știți, doar mai repede. Dacă discul vechi are deja erori, vă spunem înainte ce se poate salva.' },
      { q: 'Veniți să luați laptopul din Sectorul 1?', a: 'Nu. La domiciliu mergem doar pentru televizoare. Laptopul se aduce la atelierul din Militari sau se trimite prin curier.' },
    ],
  },
  {
    nr: 2,
    cartiere: ['Colentina', 'Tei', 'Obor', 'Pantelimon', 'Iancului', 'Moșilor', 'Ștefan cel Mare', 'Vatra Luminoasă', 'Fundeni', 'Andronache'],
    lead: 'Pentru Sectorul 2, service-ul de laptop este la atelierul nostru din Militari, la care ajungeți cu metroul, cu o schimbare. Lucrăm la nivel de componentă, pe orice marcă, cu diagnosticare gratuită.',
    drumTitlu: 'Din Colentina, Obor sau Pantelimon până la noi',
    metrou: 'De la Obor, Ștefan cel Mare sau Piața Iancului, M1 vă duce la Eroilor prin Gara de Nord. La Eroilor luați M3 spre Preciziei și coborâți la Gorjului. Dinspre Pantelimon e mai scurt în sens invers: M1 până la Piața Unirii și de acolo M3.',
    masina: 'Traversați orașul de la est la vest: Mihai Bravu sau Ștefan cel Mare, apoi Splaiul Independenței și Iuliu Maniu. E un drum lung, de făcut în afara orelor de vârf.',
    unghiTitlu: 'Laptopul de gaming care se încinge',
    unghi: [
      'Un laptop de gaming produce de câteva ori mai multă căldură decât unul de birou, într-o carcasă aproape la fel de subțire. De aceea ajunge mai repede la simptomele clasice: ventilatoare la maximum, cadre care scad după jumătate de oră de joc, carcasă pe care nu mai puteți ține mâna, uneori oprire bruscă.',
      'În cele mai multe cazuri nu e nimic ars. Radiatoarele sunt astupate cu praf, iar pasta termică de pe procesor și de pe placa video s-a uscat. Curățarea completă, cu pastă nouă, costă 80–150 de lei și e singura întreținere de care un astfel de laptop chiar are nevoie, cam o dată pe an dacă jucați des.',
      'Când un laptop de gaming merge mult timp supraîncălzit, cedează de obicei partea video de pe placă. Aceea e deja reparație de placă, 200–500 de lei, și nu întotdeauna reușește. Curățarea făcută la timp e mult mai ieftină.',
    ],
    legatura: { href: '/curatare-laptop-praf/', text: 'cum decurge curățarea de praf a unui laptop' },
    faq: [
      { q: 'Cât de des trebuie curățat un laptop de gaming?', a: 'Cam o dată pe an dacă jucați regulat, mai des dacă îl țineți pe pat sau aveți animale în casă. Semnul că e timpul: ventilatoarele se aud mai tare decât la început, la aceleași jocuri.' },
      { q: 'Curățarea anulează garanția laptopului?', a: 'Dacă laptopul e încă în garanția producătorului, întrebați întâi la magazinul de unde l-ați cumpărat, pentru că regulile diferă de la un producător la altul. După garanție, nu mai aveți ce pierde.' },
      { q: 'Aveți piese pentru laptopuri MSI, Asus ROG, Lenovo Legion?', a: 'Curățarea și pasta nu cer piese. Pentru ventilatoare, baterii sau ecrane, sunați cu modelul exact și verificăm dacă piesa e pe stoc sau trebuie comandată.' },
    ],
  },
  {
    nr: 3,
    cartiere: ['Titan', 'Balta Albă', 'Dristor', 'Vitan', 'Dudești', 'Sălăjan', 'Nicolae Grigorescu', 'Unirii', 'Centrul Vechi', 'Muncii'],
    lead: 'Din Sectorul 3 ajungeți la atelierul nostru fără nicio schimbare de metrou: M3 vă lasă la Gorjului, în Militari. Reparăm laptopuri pe componentă, cu diagnosticare gratuită și garanție scrisă.',
    drumTitlu: 'M3, direct din Titan până la Gorjului',
    metrou: 'Urcați în M3, direcția Preciziei, de la Nicolae Grigorescu, Dristor, Timpuri Noi sau Piața Unirii și coborâți la Gorjului. Nu schimbați nimic pe drum. Atelierul e la câteva minute de mers pe jos de la stație.',
    masina: 'De la Unirii, Splaiul Independenței vă scoate spre vest, în Iuliu Maniu. Din Titan și Balta Albă ajungeți la Unirii pe Decebal sau pe Camil Ressu. Socotiți 35–45 de minute fără aglomerație.',
    unghiTitlu: 'Ecran spart: ce se schimbă și cât costă',
    unghi: [
      'Un laptop cu ecranul spart e, de regulă, un laptop perfect sănătos cu o singură piesă stricată. Îl puteți verifica singur: legat la un televizor sau la un monitor, prin HDMI, ar trebui să meargă normal.',
      'Se schimbă panoul, adică partea care afișează imaginea, nu tot capacul. Prețul este 200–600 de lei, cu piesă și manoperă, și depinde de diagonală, de rezoluție și de tipul panoului. Ca să vă dăm prețul exact avem nevoie de modelul laptopului, de pe eticheta de dedesubt.',
      'Dacă ecranul nu e spart, dar are dungi sau pâlpâie când mișcați capacul, cauza e adesea cablul care trece prin balama, nu panoul. Se rezolvă cu mai puțini bani, așa că nu comandați un ecran înainte să ne uităm.',
    ],
    legatura: { href: '/inlocuire-ecran-laptop/', text: 'înlocuirea ecranului de laptop, pe larg' },
    faq: [
      { q: 'Cât durează schimbarea ecranului?', a: 'Dacă panoul pentru modelul dumneavoastră e pe stoc, 24–48 de ore. Dacă trebuie comandat, 3–5 zile. Vă spunem la telefon în care caz sunteți.' },
      { q: 'Pot folosi laptopul cu ecranul spart până vin la service?', a: 'Da, legat la un monitor extern sau la televizor. Aveți doar grijă să nu apăsați pe zona spartă.' },
      { q: 'La ce stație cobor?', a: 'La Gorjului, pe M3. Atelierul e în Str. Moinești 7, la câteva minute pe jos.' },
    ],
  },
  {
    nr: 4,
    cartiere: ['Berceni', 'Apărătorii Patriei', 'Brâncoveanu', 'Olteniței', 'Giurgiului', 'Tineretului', 'Văcărești', 'Piața Sudului', 'Progresul'],
    lead: 'Dintre toate sectoarele, din Sectorul 4 e cel mai mult de mers până la atelierul din Militari. Tocmai de aceea merită câteva verificări acasă și un telefon înainte de drum.',
    drumTitlu: 'Din Berceni până în Militari',
    metrou: 'M2 de la Apărătorii Patriei, Piața Sudului sau Tineretului până la Piața Unirii. Acolo coborâți la M3, direcția Preciziei, și mergeți până la Gorjului.',
    masina: 'Fie prin centru, pe la Unirii și pe Splaiul Independenței, fie pe la sud, prin Rahova și Ghencea. Oricum ați lua-o, puneți 40–50 de minute, mai mult la orele de vârf.',
    unghiTitlu: 'Laptopul nu pornește: ce verificați înainte de drum',
    unghi: [
      'Pentru un drum de aproape o oră, merită să fiți sigur că laptopul chiar trebuie adus. La cele care „nu mai pornesc”, o parte au de fapt altă problemă, pe care o puteți vedea de acasă.',
      'Trei verificări, în ordinea aceasta. Încercați alt încărcător compatibil, dacă aveți de unde: încărcătorul se strică mai des decât laptopul. Țineți apăsat butonul de pornire 30 de secunde, cu încărcătorul scos, apoi porniți din nou. Legați laptopul la televizor prin HDMI: dacă apare imagine acolo, laptopul merge și problema e la ecran.',
      'Dacă nu se schimbă nimic, sunați-ne cu modelul și cu ce ați observat la cele trei verificări. Vă spunem un interval de preț și, pentru mufă sau baterie, dacă piesa e pe stoc. Așa veniți o singură dată, nu de două ori.',
    ],
    legatura: { href: '/laptop-nu-porneste/', text: 'ghidul complet pentru laptopul care nu pornește' },
    faq: [
      { q: 'Laptopul nu mai pornește. Îmi puteți spune prețul la telefon?', a: 'Un interval, da: mufa de alimentare costă 80–200 de lei, bateria 100–250 de lei, reparația pe placa de bază 200–500 de lei. Prețul ferm îl aflați după diagnosticare, care e gratuită.' },
      { q: 'Pot trimite laptopul prin curier din Sectorul 4?', a: 'Da. Transportul îl plătiți dumneavoastră, dus și întors, iar la aparatele venite prin curier manopera minimă este de 200 de lei, fără piese. Condițiile sunt pe pagina de reparații prin curier.' },
      { q: 'Dacă nu merită reparat, plătesc ceva?', a: 'Nu. Diagnosticarea e gratuită și dacă renunțați la reparație.' },
    ],
  },
  {
    nr: 5,
    cartiere: ['Rahova', '13 Septembrie', 'Cotroceni', 'Sebastian', 'Ferentari', 'Panduri', 'Sălaj', 'Antiaeriană', 'Izvor'],
    lead: 'Sectorul 5 se învecinează cu Militari, deci drumul până la atelierul nostru e scurt. Reparăm laptopuri de orice marcă, pe componentă, cu diagnosticare gratuită și preț ferm înainte de lucru.',
    drumTitlu: 'La un sfert de oră de Rahova și Cotroceni',
    metrou: 'Dacă stați spre Cotroceni sau Izvor, urcați la Eroilor în M3, direcția Preciziei, și coborâți la Gorjului după câteva stații. În Rahova, Sebastian și Ferentari nu ajunge metroul, așa că e mai simplu cu mașina sau cu autobuzul.',
    masina: 'Pe Drumul Taberei ori prin Cotroceni și Iuliu Maniu, de obicei 15–25 de minute.',
    unghiTitlu: 'Mufa care joacă și bateria care nu mai ține',
    unghi: [
      'Sunt cele două reparații de laptop care se amână cel mai mult, pentru că laptopul încă merge: încarcă dacă țineți cablul într-un anume fel, ține o jumătate de oră pe baterie. Când drumul e scurt, nu mai e niciun motiv de așteptat.',
      'Mufa de alimentare costă 80–200 de lei, cu piesă și manoperă. Lăsată așa, contactul prost încălzește lipiturile de pe placă, iar o mufă ieftină se transformă într-o reparație de placă de 200–500 de lei. Bateria costă 100–250 de lei; dacă s-a umflat și a început să ridice trackpadul, nu mai e o chestiune de confort.',
      'Amândouă se fac de regulă în 24–48 de ore, dacă piesa e pe stoc. Aduceți și încărcătorul: fără el nu putem verifica tot traseul de încărcare.',
    ],
    legatura: { href: '/laptop-nu-se-incarca/', text: 'cum deosebiți mufa, bateria și încărcătorul' },
    faq: [
      { q: 'Cât costă o baterie nouă de laptop?', a: 'Între 100 și 250 de lei, cu montaj. Prețul depinde de model; sunați cu modelul de pe eticheta de sub laptop și vă spunem exact.' },
      { q: 'Încarcă doar dacă țin cablul strâmb. Mai pot folosi laptopul așa?', a: 'Vă sfătuim să nu. Contactul care se face și se desface încălzește mufa și lipiturile de sub ea. Cu cât așteptați, cu atât crește șansa să se strice și placa.' },
      { q: 'Trebuie să sun înainte?', a: 'Nu e obligatoriu, programul e de luni până vineri, 10:00–19:00. Dar dacă sunați cu modelul, verificăm piesa și vă spunem dacă se poate face până a doua zi.' },
    ],
  },
];
