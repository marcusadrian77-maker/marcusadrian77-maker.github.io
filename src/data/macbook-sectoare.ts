// Paginile „Service MacBook Sector 1–5". Sectorul 6 are pagina lui separata
// (reparatii-macbook-sector-6.astro), fiindca acolo e atelierul.
// Fiecare sector are text propriu: drumul pana la atelier, cartierele si un unghi
// practic diferit, ca paginile sa nu fie acelasi sablon repetat.

export type MacSector = {
  nr: number;
  cartiere: string[];
  titluSec: string;
  lead: string;
  metrou: string;
  masina: string;
  unghiTitlu: string;
  unghi: string[];
  faq: { q: string; a: string }[];
};

export const MAC_SECTOARE: MacSector[] = [
  {
    nr: 1,
    cartiere: ['Aviației', 'Băneasa', 'Floreasca', 'Dorobanți', 'Domenii', 'Bucureștii Noi', 'Dămăroaia', '1 Mai', 'Victoriei', 'Primăverii'],
    titluSec: 'MacBook-ul de serviciu, reparat fără să pierdeți o săptămână',
    lead: 'Din Sectorul 1 veniți la atelierul nostru din Militari cu metroul, cu o singură schimbare, sau cu mașina pe Splai. Reparăm MacBook Air și Pro la nivel de componentă, cu diagnosticare gratuită și preț ferm spus înainte.',
    metrou: 'Din Piața Victoriei sau Gara de Nord luați M1 spre Eroilor, iar la Eroilor schimbați pe M3 în direcția Preciziei și coborâți la Gorjului. Din zona Aviației, M2 vă duce până la Piața Unirii, de unde M3 merge direct la Gorjului.',
    masina: 'Cel mai simplu e pe Splaiul Independenței spre vest, apoi pe Bd. Iuliu Maniu, sau prin Orhideelor. În afara orelor de vârf, de obicei 30–40 de minute.',
    unghiTitlu: 'Când MacBook-ul e unealta de lucru',
    unghi: [
      'O bună parte din MacBook-urile din Sectorul 1 sunt laptopuri de lucru: la birou, în Pipera sau în centru, cu fișiere care nu au backup pe care să-l știe cineva. Pentru ele contează două lucruri: să nu stea mult în service și să nu se piardă datele.',
      'De aceea vă spunem de la telefon, după model și simptom, dacă lucrarea se face în 24–48 de ore (baterie, ecran, tastatură, port) sau durează 2–5 zile (placă). La modelele din 2016 încoace, unde stocarea e lipită pe placă, reparația plăcii este și singura cale de a ajunge la date — un motiv în plus să nu acceptați din prima o placă nouă.',
      'Dacă e laptopul firmei, emitem factură pe firmă. Spuneți-ne asta la predare.',
    ],
    faq: [
      { q: 'Emiteți factură pe firmă pentru un MacBook de serviciu?', a: 'Da. Spuneți-ne la predare datele firmei și factura se emite pe firmă, cu reparația și garanția detaliate.' },
      { q: 'Pot aduce laptopul în pauza de prânz?', a: 'Puteți, dacă ne sunați înainte, ca să vă așteptăm. Programul este de luni până vineri, 10:00–19:00. Predarea durează câteva minute; diagnosticarea se face după aceea și vă sunăm cu rezultatul.' },
      { q: 'Veniți să ridicați MacBook-ul din Sectorul 1?', a: 'Nu. Deplasările le facem doar pentru televizoare. MacBook-urile se aduc la atelierul din Militari sau se trimit prin curier.' },
    ],
  },
  {
    nr: 2,
    cartiere: ['Obor', 'Colentina', 'Tei', 'Iancului', 'Pantelimon', 'Ștefan cel Mare', 'Moșilor', 'Floreasca', 'Andronache', 'Fundeni'],
    titluSec: 'Din Obor și Colentina, cu M1 până la atelier',
    lead: 'Din Sectorul 2 ajungeți la atelierul nostru din Militari cu metroul M1 și o schimbare la Eroilor. Reparăm MacBook-uri pe componentă, cu diagnosticare gratuită și preț ferm înainte de lucru.',
    metrou: 'Din Obor, Ștefan cel Mare sau Piața Iancului luați M1 în direcția Gara de Nord și mergeți până la Eroilor. Acolo schimbați pe M3 spre Preciziei și coborâți la Gorjului. Din zona Pantelimon și Iancului puteți lua M1 și în sens invers, spre Dristor și Piața Unirii, cu schimbare tot pe M3.',
    masina: 'Pe Ștefan cel Mare sau pe Mihai Bravu spre centru, apoi Splaiul Independenței și Iuliu Maniu. E drumul cel mai lung dinspre est, așa că e bine să evitați orele de vârf.',
    unghiTitlu: 'Merită drumul pentru un MacBook mai vechi?',
    unghi: [
      'Mulți ne întreabă dacă are rost să traverseze orașul pentru un MacBook din 2015 sau 2017. Răspunsul depinde de ce s-a stricat, nu de an: o baterie umflată, un port de încărcare sau o placă cu o componentă arsă se repară la costuri care au sens chiar și pe un aparat vechi.',
      'Ca să nu faceți drumul degeaba, sunați înainte cu modelul și ce face laptopul. Vă spunem la telefon dacă reparația are sens economic și ce interval de preț să vă așteptați. Diagnosticarea propriu-zisă e gratuită, dar drumul îl faceți dumneavoastră, și preferăm să nu-l faceți pentru un aparat pe care nu merită să-l reparați.',
      'Laptopurile Intel din 2012–2017 sunt și cele pentru care Apple nu mai oferă piese. Pentru ele, reparația pe componentă e de multe ori singura variantă.',
    ],
    faq: [
      { q: 'Merită reparat un MacBook din 2015?', a: 'Depinde de defect. O baterie, un port sau o componentă pe placă au sens chiar și pe un model vechi. Un ecran spart plus o placă defectă, pe același aparat, de obicei nu. Vă spunem la telefon, înainte să veniți.' },
      { q: 'Cât durează drumul cu metroul din Obor?', a: 'Depinde de ora la care plecați, dar traseul e simplu: M1 până la Eroilor, M3 până la Gorjului, apoi câteva minute pe jos. Detaliile de acces sunt pe pagina „cum ajungeți la atelier”.' },
      { q: 'Pot lăsa laptopul și să revin după reparație?', a: 'Da. Îl lăsați la atelier, vă sunăm cu diagnosticul și prețul, iar după reparație vă anunțăm că îl puteți ridica.' },
    ],
  },
  {
    nr: 3,
    cartiere: ['Titan', 'Dristor', 'Vitan', 'Balta Albă', 'Centrul Civic', 'Dudești', 'Nicolae Grigorescu', 'Sălăjan', 'Unirii', 'Lipscani'],
    titluSec: 'Din Titan, Dristor sau Unirii, fără schimbare de metrou',
    lead: 'Din Sectorul 3 aveți cel mai simplu drum cu metroul până la noi: linia M3 merge direct la Gorjului, lângă atelierul din Militari. Reparăm MacBook-uri pe componentă, cu diagnosticare gratuită.',
    metrou: 'De la Nicolae Grigorescu, Dristor, Piața Unirii sau din capătul dinspre Anghel Saligny, urcați în M3 în direcția Preciziei și coborâți la Gorjului, fără nicio schimbare. Din Titan ajungeți întâi la Nicolae Grigorescu.',
    masina: 'Pe Splaiul Independenței de la Unirii spre vest, apoi Iuliu Maniu; din Titan și Vitan, prin Decebal spre Unirii. În afara orelor de vârf, 35–45 de minute.',
    unghiTitlu: 'Lichid vărsat: fiecare oră contează, iar M3 ajută',
    unghi: [
      'Cel mai urgent caz de MacBook este lichidul vărsat. Coroziunea pornește din primele ore, iar șansele de reparație scad cu fiecare zi în care laptopul stă ud. Pentru Sectorul 3, faptul că M3 vine direct la Gorjului înseamnă că puteți fi la noi în aceeași zi, fără mașină și fără schimbări.',
      'Până ajungeți: opriți laptopul din buton, nu-l mai porniți ca să vedeți dacă merge, nu-l puneți la încărcat și nu-l uscați cu foehnul. Întoarceți-l cu tastatura în jos, deschis ca un cort, pe un prosop. Restul îl facem noi: deschidem, curățăm placa și vedem ce a apucat să cedeze.',
      'Tot procesul e explicat pas cu pas în ghidul despre lichidul vărsat pe MacBook.',
    ],
    faq: [
      { q: 'Am vărsat apă pe MacBook. Pot veni azi?', a: 'Da, sunați înainte și veniți în aceeași zi. Între timp nu-l porniți și nu-l încărcați. Cu cât ajunge mai repede, cu atât sunt mai mari șansele ca placa să se salveze doar prin curățare.' },
      { q: 'Cât costă curățarea după lichid?', a: 'Între 450 și 600 de lei dacă nu au ars componente; cu înlocuiri de componente, 600–900 de lei. Diagnosticarea este gratuită.' },
      { q: 'Unde cobor din metrou?', a: 'La Gorjului, pe linia M3. De acolo atelierul e la câteva minute pe jos, în Str. Moinești 7.' },
    ],
  },
  {
    nr: 4,
    cartiere: ['Berceni', 'Tineretului', 'Olteniței', 'Văcărești', 'Giurgiului', 'Brâncoveanu', 'Apărătorii Patriei', 'Timpuri Noi', 'Progresul'],
    titluSec: 'Cel mai lung drum din București — de aceea vă spunem totul la telefon',
    lead: 'Sectorul 4 este cel mai departe de atelierul nostru din Militari. Vă recomandăm să sunați înainte: vă spunem de la telefon cât costă aproximativ și dacă piesa e pe stoc, ca să nu faceți drumul de două ori.',
    metrou: 'Din Berceni, Apărătorii Patriei sau Tineretului luați M2 spre Piața Unirii. La Piața Unirii schimbați pe M3 în direcția Preciziei și coborâți la Gorjului.',
    masina: 'Prin Cantemir și Unirii, apoi Splaiul Independenței spre vest, sau pe Ghencea și prin Rahova dinspre Berceni. E traseul cel mai lung dinspre sud; 40–50 de minute în afara orelor de vârf.',
    unghiTitlu: 'Un singur drum, nu două',
    unghi: [
      'Când drumul durează aproape o oră, contează să nu-l faceți de două ori: o dată ca să aduceți laptopul și încă o dată pentru că piesa trebuie comandată. De aceea, pentru clienții din sud, facem toată socoteala la telefon înainte.',
      'Spuneți-ne modelul (îl găsiți în meniul Apple → Despre acest Mac sau sub laptop, codul care începe cu „A”) și ce face aparatul. Pentru baterie, ecran, tastatură și port verificăm pe loc dacă avem piesa. Pentru defectele de placă nu există „piesă” de verificat, ci diagnostic, dar vă spunem intervalul de preț înainte să plecați de acasă.',
      'Dacă preferați să nu faceți drumul deloc, MacBook-ul se poate trimite și prin curier, cu condițiile de pe pagina dedicată.',
    ],
    faq: [
      { q: 'Aveți piesa pentru MacBook-ul meu?', a: 'Sunați cu modelul exact (codul care începe cu „A”, de sub laptop) și verificăm pe loc pentru baterie, ecran, tastatură și port. Pentru reparațiile de placă se face întâi diagnosticarea.' },
      { q: 'Pot trimite MacBook-ul prin curier în loc să vin?', a: 'Da. Transportul îl plătiți dumneavoastră, în ambele sensuri, iar pentru aparatele venite prin curier se aplică o manoperă minimă de 200 de lei, fără piese. Detaliile sunt pe pagina de reparații prin curier.' },
      { q: 'Cât costă o baterie nouă la MacBook?', a: 'Între 300 și 750 de lei, cu piesă, montaj și calibrare. La MacBook Air, 300–650 de lei; la Pro, 400–750 de lei.' },
    ],
  },
  {
    nr: 5,
    cartiere: ['Rahova', 'Ferentari', 'Cotroceni', '13 Septembrie', 'Sebastian', 'Panduri', 'Antiaeriană', 'Petre Ispirescu', 'Izvor', 'Pieptănari'],
    titluSec: 'Vecinii noștri: din Cotroceni și Rahova, în 15–25 de minute',
    lead: 'Sectorul 5 e lipit de Militari, așa că din Cotroceni, Rahova sau 13 Septembrie ajungeți repede la atelierul nostru. Reparăm MacBook-uri pe componentă, cu diagnosticare gratuită și preț ferm înainte.',
    metrou: 'Din zona Cotroceni și Izvor sunteți aproape de Eroilor: de acolo M3 în direcția Preciziei, câteva stații, până la Gorjului. Din Rahova și Ferentari, unde nu e metrou, mașina sau autobuzul sunt mai practice.',
    masina: 'Sectorul 5 e vecin cu noi: prin Cotroceni și Bd. Iuliu Maniu sau prin Drumul Taberei ajungeți de obicei în 15–25 de minute.',
    unghiTitlu: 'Când merită să treceți doar pentru o verificare',
    unghi: [
      'Pentru că drumul e scurt, clienții din Sectorul 5 vin des și pentru lucruri pe care altfel le-ar amâna: un MacBook care se încinge și merge greu, o baterie care ține două ore, un ventilator care a început să se audă. Sunt exact lucrurile pe care e bine să le prindeți devreme.',
      'Un MacBook care se încinge constant își reduce singur performanța și îmbătrânește bateria mai repede. O curățare cu pastă termică nouă costă 150–320 de lei și se face de regulă în aceeași zi sau a doua zi. O baterie umflată, în schimb, nu trebuie amânată: presează trackpadul și carcasa și poate deforma placa.',
      'Diagnosticarea e gratuită, deci o verificare nu vă costă decât drumul — iar din Sectorul 5, drumul e scurt.',
    ],
    faq: [
      { q: 'Cât costă curățarea și pasta termică la MacBook?', a: 'Între 150 și 320 de lei, în funcție de model. De regulă se face în aceeași zi sau a doua zi.' },
      { q: 'Bateria mea s-a umflat. E urgent?', a: 'Da. O baterie umflată presează trackpadul și carcasa și poate deforma placa. Nu mai încărcați laptopul și aduceți-l cât mai repede.' },
      { q: 'Pot veni fără programare?', a: 'Puteți, în programul de luni până vineri, 10:00–19:00, dar e mai bine să sunați înainte, ca să fim siguri că vă așteptăm.' },
    ],
  },
];
