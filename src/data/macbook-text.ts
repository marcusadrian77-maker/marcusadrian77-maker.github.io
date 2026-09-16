// Generatoarele de text pentru paginile de model. Fiecare bloc are mai multe
// formulari, alese dupa pozitia modelului in lista si dupa un decalaj propriu
// fiecarui bloc, ca doua modele apropiate sa nu primeasca acelasi text peste tot.
import { MACURI } from './macbook';
import type { Mac } from './macbook';

const an0 = (m: Mac) => parseInt(m.an.slice(0, 4), 10);
const INDEX = new Map(MACURI.map((m, i) => [m.slug, i]));

const RANG: Record<string, number> = { air: 0, 'pro-13': 1, 'pro-14': 2, 'pro-15': 3, 'pro-16': 4 };

/** Alege o formulare din set. Pozitia modelului in lista, seria din care face parte
 *  si un decalaj propriu fiecarui bloc de text se combina astfel incat doua modele
 *  sa nu primeasca aceleasi variante pe toata pagina. */
function v(m: Mac, optiuni: string[]): string {
  const i = INDEX.get(m.slug) ?? 0;
  const r = RANG[m.slug.replace(/-a\d+$/, '')] ?? 0;
  let h = 0;
  for (const c of optiuni[0].slice(0, 32)) h = (h * 31 + c.charCodeAt(0)) % 9973;
  return optiuni[(i * 7 + h + r) % optiuni.length];
}

export type Familie = 'pro-mic' | 'pro-mare' | 'pro-silicon' | 'air-vechi' | 'air-nou';

export function familie(m: Mac): Familie {
  if (m.slug.startsWith('air')) return m.cpu === 'intel' ? 'air-vechi' : 'air-nou';
  if (m.cpu !== 'intel') return 'pro-silicon';
  return parseFloat(m.diag) >= 15 ? 'pro-mare' : 'pro-mic';
}

export function pretPlaca(m: Mac): string {
  return m.cpu === 'intel' ? '300 – 700 lei' : '400 – 800 lei';
}

/* ---------- title si meta ---------- */

export function titlu(m: Mac): string {
  return `Reparații ${m.scurt} | Service București`;
}

export function descriere(m: Mac): string {
  const cheie = v(m, [
    'placă logică, baterie, port de încărcare',
    'placă la microscop, baterie, ecran',
    'microsoldering, baterie, lichid vărsat',
    'placă logică, ecran, tastatură',
    'reparație pe placă, baterie, porturi',
  ]);
  const final = v(m, [
    'Diagnosticare gratuită, garanție scrisă.',
    'Diagnosticare gratuită, preț ferm dinainte.',
    'Diagnosticare gratuită, garanție 6–12 luni.',
    'Diagnosticare gratuită, piese pe stoc.',
  ]);
  return `Service ${m.scurt} (${m.an}) în București: ${cheie}. ${final}`;
}

/* ---------- introducere ---------- */

export function introducere(m: Mac): string {
  const f = familie(m);
  if (f === 'pro-silicon') {
    return v(m, [
      `${m.nume} din ${m.an} este construit pentru încărcări mari de lucru, iar asta se vede și în felul în care se defectează: rar brusc, de obicei după ani de rulat la temperatură ridicată. Lucrăm pe el la nivel de componentă, în atelierul din Militari.`,
      `${m.nume} (${m.cod}) este un aparat profesional, cu o placă densă pe care fiecare milimetru e ocupat. Tocmai de aceea reparațiile aici se fac sub microscop, cu schema în față — sau nu se fac deloc, ci se înlocuiește placa, la un preț de câteva mii de lei.`,
      `${m.nume}, fabricat în ${m.an}, este genul de aparat pe care nimeni nu-l schimbă ușor: costă mult și încă funcționează bine. Motiv în plus să fie reparat punctual, nu casat pentru o singură componentă arsă.`,
      `${m.nume} (${m.cod}) e un laptop care își ține valoarea ani buni. Când ceva cedează pe placa lui, alegerea nu e între reparație și aruncare, ci între o intervenție de câteva sute de lei și o placă nouă de câteva mii. Noi o facem pe prima.`,
      `Pentru un ${m.nume} din ${m.an}, verdictul „s-a ars placa" nu înseamnă sfârșitul. De cele mai multe ori a cedat o singură componentă, iar aceea se poate găsi și înlocui. Asta facem în atelierul din Sectorul 6, cu microscop și schemă.`,
    ]);
  }
  if (f === 'pro-mare') {
    return v(m, [
      `${m.nume} (${m.cod}) este un model de ${m.diag} din ${m.an}, cu o disipare termică pusă serios la încercare de procesoarele Intel ale perioadei. Cele mai multe aparate de acest fel ajung la noi după ani de ventilatoare zgomotoase, cu praf strâns și pastă uscată.`,
      `${m.nume} din ${m.an} a fost, la vremea lui, cel mai puternic laptop Apple — și, exact din acest motiv, cel mai solicitat termic. Cunoaștem bine placa lui și defectele care se repetă după cinci-șase ani de folosire intensă.`,
      `${m.nume} (${m.cod}) este un aparat de ${m.diag} care se repară foarte bine, cu condiția să nimerească pe mâna cuiva obișnuit cu plăcile Apple. Îl vedem des în atelierul din Militari și știm de unde să începem.`,
      `${m.nume}, produs în ${m.an}, rămâne un laptop puternic pentru montaj, grafică sau programare. Problema lui nu e performanța, ci căldura acumulată în ani — iar acolo se ascund majoritatea defectelor pe care le reparăm.`,
    ]);
  }
  if (f === 'pro-mic') {
    return v(m, [
      `${m.nume} (${m.cod}), fabricat în ${m.an}, este printre cele mai răspândite modele Apple din București — și, tocmai de aceea, printre cele care ajung cel mai des pe masa noastră de lucru.`,
      `${m.nume} din ${m.an} este laptopul compact cu care lucrează jumătate din birourile de creație din oraș. Se strică previzibil, iar asta e o veste bună: știm ce să căutăm înainte să deschidem aparatul.`,
      `${m.nume} (${m.cod}) a fost vândut în cantități mari în ${m.an} și în anii care au urmat, așa că piesele se găsesc, iar reparațiile rămân rezonabile ca preț.`,
      `Un ${m.nume} din ${m.an} ajunge rareori la noi cu un defect pe care să nu-l fi mai văzut. Seria asta are un tipar clar de îmbătrânire, iar cunoașterea lui scurtează mult diagnosticarea.`,
      `${m.nume} (${m.cod}) este aparatul portabil tipic al perioadei: ușor, rapid și foarte strâns construit înăuntru. Reparațiile cer răbdare, dar aproape toate se pot face fără înlocuirea plăcii.`,
    ]);
  }
  if (f === 'air-nou') {
    return v(m, [
      `${m.nume} din ${m.an} este un laptop fără ventilator, subțire și fără piese în mișcare. Se strică rar, dar când o face, aproape totul ține de placă: un port, un controler de alimentare, urmele unui lichid.`,
      `${m.nume} (${m.cod}) este aparatul de zi cu zi al generației Apple Silicon: silențios, cu autonomie mare și fără nimic care să se uzeze mecanic. Defectele lui sunt aproape întotdeauna electronice, iar acolo se lucrează la microscop.`,
      `${m.nume}, apărut în ${m.an}, are o construcție simplă și foarte compactă. Puține lucruri se pot defecta — dar cele care se defectează cer o reparație pe placă, nu o înlocuire de modul.`,
      `${m.nume} (${m.cod}) este un laptop fără vreo piesă care să se uzeze de la sine. Statistic, ce aduce un asemenea aparat în atelier este un accident: un lichid, o cădere, un încărcător nepotrivit.`,
    ]);
  }
  return v(m, [
    `${m.nume} (${m.cod}) din ${m.an} este unul dintre cele mai longevive modele Apple și încă se folosește zilnic în multe case din București. Piesele se găsesc, iar un aparat îngrijit mai merge fără probleme ani buni.`,
    `${m.nume} din ${m.an} face parte din generația Intel care se repară cel mai ieftin. Tocmai fiindcă nu mai are suport de la producător, atelierele independente sunt singura variantă — și, de obicei, singura care are sens financiar.`,
    `${m.nume} (${m.cod}) este aparatul pe care mulți îl țin ca al doilea laptop, pentru mail și documente. La rolul ăsta face față în continuare, cu condiția să i se schimbe la timp piesele consumabile.`,
  ]);
}

export function cumIdentific(m: Mac): string {
  const loc = an0(m) >= 2020
    ? 'în meniul Apple → „Despre acest Mac”, unde apare denumirea completă a modelului'
    : 'pe eticheta imprimată cu litere fine pe partea de jos a carcasei, lângă textul de conformitate';
  return v(m, [
    `Codul ${m.cod} este identificatorul folosit de Apple pentru această serie și singurul mod sigur de a ști ce aparat aveți: aceeași denumire comercială acoperă uneori generații cu plăci care nu au nimic în comun. Îl găsiți ${loc}.`,
    `Denumirea comercială singură nu ne ajută prea mult: la Apple, nume aproape identice acoperă plăci complet diferite. Codul ${m.cod} ne spune însă dintr-o dată ce placă, ce baterie și ce piese trebuie pregătite. Îl găsiți ${loc}.`,
    `Înainte de orice, verificați codul. ${m.cod} este cel care contează, pentru că modele care arată identic pe dinafară pot avea înăuntru componente complet diferite. Se citește ${loc}.`,
    `Când ne scrieți, dați-ne codul, nu doar numele. ${m.cod} identifică exact seria și ne scutește de comenzi greșite de piese. Se citește ${loc}.`,
  ]);
}

/* ---------- generatie ---------- */

export function despreGeneratie(m: Mac): string {
  if (m.cpu !== 'intel') {
    const c = m.cpu.toUpperCase();
    return v(m, [
      `Aparatul face parte din generația Apple Silicon, cu procesor ${c}. Procesorul, memoria și controlerul de stocare sunt integrate în același ansamblu, iar memoria nu se poate suplimenta ulterior. În practică asta înseamnă că reparațiile se fac pe placă, nu prin înlocuirea unui modul.`,
      `Este un model ${c}, deci complet integrat: memoria și stocarea sunt lipite pe placă, împreună cu procesorul. Nu există upgrade, la niciun service și nici la Apple. Ce se poate face este repararea circuitului defect, iar asta cere microscop, aer cald controlat și răbdare.`,
      `Cu procesor ${c}, aparatul aparține arhitecturii în care totul stă pe o singură pastilă. Consumul mic și autonomia vin exact din această integrare — și tot din ea vine și faptul că o reparație se face doar la nivel de componentă.`,
      `Modelul are procesor ${c}, adică arhitectura proprie Apple. Diferența față de un laptop obișnuit e radicală: nu există module de memorie, nu există un disc separat, totul e o singură placă. De aici și felul în care se repară.`,
      `Aparatul e din seria ${c}. Integrarea totală a componentelor îi dă viteza și autonomia, dar înseamnă și că nimic nu se schimbă „bucată cu bucată". Când ceva cedează, se lucrează direct pe circuitul de pe placă.`,
    ]);
  }
  if (an0(m) >= 2018) {
    return v(m, [
      `Este dintre modelele Intel cu cip de securitate T2. Cipul criptează stocarea și controlează pornirea, ceea ce schimbă mult felul în care se lucrează pe aparat: o placă înlocuită nu mai recunoaște datele vechi, iar o intervenție neatentă lasă laptopul funcțional, dar fără informațiile de pe el.`,
      `Modelul are cip T2, introdus de Apple pentru criptare și pornire securizată. Consecința pentru service este directă: stocarea este legată de placa originală, deci repararea plăcii existente nu este o preferință, ci singura cale care păstrează datele.`,
      `Face parte din seria Intel cu T2. Cipul se ocupă de criptarea stocării, de microfon și de pornirea aparatului, iar prezența lui înseamnă că orice lucrare pe placă trebuie făcută cu grijă la partea de securitate, altfel laptopul pornește fără să mai poată accesa nimic.`,
      `Are cipul T2, ceea ce îl plasează în categoria aparatelor la care nu se improvizează. Pornirea și stocarea trec amândouă prin el, iar o reparație corectă presupune să știi dinainte ce atingi și ce nu.`,
    ]);
  }
  return v(m, [
    `Este un model Intel din perioada ${m.an}, de dinaintea cipului T2. Vestea bună pentru reparații: stocarea nu este criptată la nivel de placă, deci recuperarea datelor e mult mai simplă decât la generațiile ulterioare.`,
    `Aparatul vine din perioada Intel de dinainte de T2, ceea ce îl face unul dintre cele mai prietenoase modele Apple pentru service: fără pornire securizată, fără criptare legată de placă, cu diagnosticare directă.`,
    `Fiind fabricat în ${m.an}, nu are încă niciunul dintre cipurile de securitate introduse mai târziu. Pentru cine ajunge în atelier cu el, asta e o veste bună: se lucrează fără restricții și datele rămân accesibile.`,
  ]);
}

/* ---------- tastatura ---------- */

export function despreTastatura(m: Mac): string {
  if (m.tast === 'butterfly') {
    return v(m, [
      `Tastatura este de tip butterfly, mecanismul folosit între 2016 și 2019 și cea mai fragilă componentă a acestei generații. Un fir de praf ajuns sub tastă poate bloca apăsarea sau poate produce litere duplicate. Se curăță și se repară, iar ansamblul se înlocuiește doar când degradarea e avansată.`,
      `Are tastatura butterfly, cea cu cursă foarte scurtă. Problema ei nu este uzura, ci praful: un grăunte ajuns sub mecanism blochează tasta sau o face să scrie de două ori. La ${m.cod} ne ajung des aparate în situația asta, iar în multe cazuri se rezolvă fără piese.`,
      `Mecanismul tastaturii este butterfly, cunoscut pentru sensibilitatea la particule. Simptomul e caracteristic: o tastă care nu răspunde sau care dublează litera, restul funcționând impecabil. Verificăm întâi dacă se poate curăța și abia apoi propunem înlocuirea ansamblului.`,
      `Tastatura butterfly a fost cea mai contestată decizie tehnică a Apple din perioada aceea. Cursa minimă arăta bine pe hârtie, dar lăsa mecanismul expus la praf. Dacă tastele de la ${m.cod} au început să se comporte ciudat, e defectul clasic al seriei.`,
      `Este generația cu tastatură butterfly, unde o singură particulă poate scoate o tastă din funcțiune. Nu e o problemă de folosire greșită, ci de construcție. Tocmai de aceea o tratăm ca pe o lucrare de rutină, nu ca pe o catastrofă.`,
    ]);
  }
  if (m.tast === 'magic') {
    return v(m, [
      `Tastatura este Magic Keyboard, cu mecanism foarfecă — generația care a înlocuit problematicul butterfly. E vizibil mai rezistentă la praf și la uzură, iar defecțiunile pe care le vedem aici vin aproape întotdeauna din altceva: lichid vărsat sau un cablu flex deteriorat la o intervenție anterioară.`,
      `Are Magic Keyboard, adică mecanism foarfecă cu cursă normală. Este o tastatură care nu prea dă bătăi de cap: în afară de lichid vărsat, rareori avem motiv să o atingem. Când totuși cedează, cauza e de obicei un cablu flex prins greșit de cineva înaintea noastră.`,
      `Tastatura de tip Magic Keyboard a rezolvat problemele generației anterioare. La ${m.cod} intervenim pe ea aproape exclusiv după accidente cu lichid, nu din uzură normală.`,
      `Modelul are tastatura cu mecanism foarfecă, revenirea Apple la o soluție care funcționează. Rezistă la praf, are cursă mai lungă și nu cedează de la sine. Statistic, singurul lucru care o strică la ${m.cod} este un pahar răsturnat.`,
    ]);
  }
  return v(m, [
    `Tastatura este cea clasică, cu mecanism foarfecă, dinaintea generației butterfly. Este robustă, iar problemele apar de regulă doar după lichid vărsat. Un avantaj practic: modelele din această perioadă sunt printre cele mai simple de deschis și de întreținut.`,
    `Are tastatura clasică, cu cursă generoasă și mecanism foarfecă. Rezistă foarte bine în timp și se poate înlocui fără complicații, ceea ce nu se poate spune despre generațiile care au urmat.`,
    `Tastatura de aici este cea de dinainte de experimentul butterfly: durabilă, previzibilă și accesibilă la demontare. Un motiv în plus pentru care aparatele din seria asta rămân ieftin de întreținut.`,
  ]);
}

/* ---------- alimentare ---------- */

export function despreAlimentare(m: Mac): string {
  if (m.alim === 'magsafe2') {
    return v(m, [
      `Alimentarea se face prin MagSafe 2, conectorul magnetic care se desprinde dacă cineva se împiedică de cablu. Defecțiunile obișnuite nu sunt la mufa din laptop, ci la cablul încărcătorului, care se uzează lângă conector. Verificați întâi dacă ledul de pe conector se aprinde.`,
      `Are MagSafe 2, adică o mufă magnetică. Este una dintre cele mai bune idei de pe laptopurile Apple, pentru că protejează aparatul la smucituri. Ce cedează, de regulă, e cablul încărcătorului, nu portul din laptop — și asta se vede după ledul stins.`,
      `Încărcarea trece printr-un conector magnetic MagSafe 2. Când aparatul nu mai încarcă, primul suspect este încărcătorul: cablul lui se îndoaie mereu în același loc și se rupe pe dinăuntru, deși pe dinafară arată perfect.`,
    ]);
  }
  if (m.alim === 'magsafe3') {
    return v(m, [
      `Alimentarea se face prin MagSafe 3, magnetic, iar aparatul se poate încărca și prin porturile USB-C. Dacă nu încarcă pe MagSafe, încercați un cablu USB-C: dacă așa funcționează, problema e localizată, iar reparația e mai simplă și mai ieftină decât pare.`,
      `Are MagSafe 3 pentru încărcare, dar acceptă alimentare și pe USB-C. Testul e la îndemâna oricui: dacă pe USB-C încarcă și pe MagSafe nu, defectul e în zona conectorului magnetic, nu în circuitul general de alimentare.`,
      `Încărcarea se face pe MagSafe 3, iar existența unei a doua căi — prin USB-C — ne ajută foarte mult la diagnosticare. Ne spuneți ce se întâmplă pe fiecare dintre ele și restrângem cauza încă de la telefon.`,
      `Apple a readus conectorul magnetic la această generație, sub forma MagSafe 3, fără să renunțe la încărcarea prin USB-C. Pentru service e un avantaj: două căi separate înseamnă că putem izola defectul fără să deschidem aparatul.`,
      `Alimentarea merge pe MagSafe 3 sau, la fel de bine, pe oricare port USB-C. Dacă una dintre căi funcționează și cealaltă nu, ne-ați spus deja jumătate din diagnostic.`,
    ]);
  }
  return v(m, [
    `Alimentarea se face exclusiv prin USB-C, deci portul folosit la încărcare este și cel prin care conectați perifericele — se uzează mai repede. La ${m.cod} vedem des porturi care fac contact doar într-o anumită poziție a cablului. Se repară la nivel de port, fără placă nouă.`,
    `Se încarcă doar pe USB-C. Fiind aceleași porturi și pentru accesorii, uzura mecanică vine mai repede decât la un conector dedicat. Când cablul trebuie așezat într-un anumit fel ca să înceapă încărcarea, portul este cel care trebuie reparat.`,
    `Alimentarea trece prin porturile USB-C, care preiau și transferul de date. E o soluție elegantă, dar cu un cost ascuns: fiecare conectare le uzează puțin. Reparăm portul separat, nu înlocuim placa pentru asta.`,
    `Toată alimentarea vine prin USB-C. Dacă aveți mai multe porturi, încercați-le pe rând înainte de a suna: de multe ori unul singur e obosit, iar asta ne spune de la început unde să ne uităm.`,
  ]);
}

/* ---------- ecran ---------- */

export function despreEcran(m: Mac): string {
  if (m.note === 'flex') {
    return v(m, [
      `La această generație există o slăbiciune binecunoscută a cablurilor flex care alimentează iluminarea: sunt scurte și se tensionează la fiecare deschidere a capacului. Simptomul apare treptat — o bandă de lumină neuniformă jos, apoi iluminarea se stinge complet peste un anumit unghi.`,
      `Ecranul acestei serii are un punct slab documentat: cablurile flexibile ale iluminării trec peste o muchie și se uzează la fiecare închidere a capacului. Veți observa întâi o zonă luminată neuniform în partea de jos, apoi ecranul se stinge când deschideți capacul complet. Nu e nevoie de ecran nou.`,
      `Cablurile care duc curentul spre iluminarea ecranului sunt, la ${m.cod}, prea scurte pentru mișcarea pe care o fac. Se subțiază în ani de deschideri și, într-o zi, ecranul rămâne negru exact când deschideți capacul de tot. Reparația se face pe cablu.`,
      `Este generația cu defectul de cablu de iluminare. Nu are legătură cu felul în care ați folosit aparatul: cablurile se rod mecanic, pur și simplu. Cu cât se intervine mai devreme, cu atât lucrarea e mai simplă.`,
    ]);
  }
  if (m.cpu !== 'intel' || an0(m) >= 2018) {
    return v(m, [
      `Ecranul este un ansamblu complet, în care panoul, sticla și capacul formează o singură piesă. Nu se schimbă doar sticla crăpată, cum se întâmpla la modelele vechi — se înlocuiește ansamblul, iar de aici vine diferența de preț față de un laptop obișnuit.`,
      `Displayul vine ca ansamblu unic: panou, sticlă și capac sunt lipite împreună din fabrică. Consecința e că o crăpătură, oricât de mică, înseamnă înlocuirea întregii părți de sus. Verificăm însă întotdeauna dacă problema chiar este panoul — de multe ori nu este.`,
      `Ecranul se livrează ca un singur bloc, nedemontabil pe componente. Tocmai pentru că este piesa cea mai scumpă a aparatului, nu o propunem înainte de a exclude cablul de iluminare, circuitul de pe placă sau conectorul.`,
      `Partea de sus a aparatului este o piesă unică: panou, sticlă, capac și balamale, toate împreună. De aceea, înainte de a vorbi despre înlocuire, verificăm dacă nu cumva problema vine din placă — se întâmplă mai des decât ați crede.`,
      `Ansamblul de ecran nu se desface în componente la această generație. E și motivul pentru care un service serios nu spune „ecran defect" din prima privire, ci pune aparatul pe masă și verifică de unde vine de fapt lipsa imaginii.`,
    ]);
  }
  return v(m, [
    `Ecranul este de tip Retina, iar la modelele din această perioadă se întâlnește uzura stratului antireflex: pete care par murdărie, dar nu se curăță, apărute de obicei acolo unde tastatura atinge ecranul când capacul e închis. Nu afectează funcționarea, dar se vede.`,
    `La ecranul acestei generații apare uneori degradarea tratamentului antireflex — niște pete mate care nu se șterg. Nu e o defecțiune electronică și nu se agravează brusc; se poate trăi cu ea sau se poate îndepărta controlat tot stratul.`,
    `Panoul de aici e solid, iar problema tipică nu ține de el, ci de stratul de pe suprafață. Petele care par murdărie și nu dispar la ștergere sunt tratamentul antireflex care s-a desprins.`,
  ]);
}

/* ---------- date ---------- */

export function despreRecuperare(m: Mac): string {
  if (m.cpu !== 'intel') {
    return v(m, [
      `La generația Apple Silicon memoria de stocare este lipită pe placă și legată criptografic de procesor. Dacă placa e complet distrusă, datele nu mai pot fi extrase de nimeni — de aceea, la aceste modele, repararea plăcii se încearcă întotdeauna înaintea oricărei alte variante.`,
      `Stocarea stă pe placă și este legată de procesor printr-o cheie care nu se poate transfera. Practic, datele trăiesc sau mor odată cu placa. Din acest motiv abordarea noastră aici este întotdeauna aceeași: reparăm placa existentă, nu o schimbăm.`,
      `Datele sunt inseparabile de placă la modelele Apple Silicon. Nu există varianta „scoatem stocarea și o copiem", pentru că nu există o piesă separată. Când informațiile contează, singura șansă reală este repararea circuitului defect.`,
      `Aici nu se pune problema mutării unui disc în alt aparat: stocarea e parte din placă și e cifrată cu o cheie care ține de procesor. De aceea, dacă aveți lucruri importante pe el, spuneți-ne înainte să începem — schimbă prioritățile lucrării.`,
      `Memoria de stocare face corp comun cu placa și nu poate fi citită separat. Este motivul principal pentru care nu recomandăm nimănui să „încerce ceva" acasă cu un asemenea aparat: o pornire în plus poate transforma o reparație într-o pierdere definitivă.`,
    ]);
  }
  if (an0(m) >= 2018) {
    return v(m, [
      `Din cauza cipului T2, stocarea este criptată și legată de placa originală. O memorie scoasă și mutată în alt aparat nu se mai poate citi. Când datele contează, singura cale este repararea plăcii existente.`,
      `T2 criptează tot ce se scrie pe stocare, cu o cheie care rămâne în placă. Consecința practică: recuperarea datelor trece obligatoriu prin repararea plăcii. Dacă aparatul conține lucruri importante, spuneți-ne de la început — schimbă ordinea în care lucrăm.`,
      `Fiind model cu T2, aparatul își leagă datele de placa originală. O placă nouă pornește, dar nu vede nimic din ce era înainte. Tocmai de asta reparăm întotdeauna placa existentă, chiar când e mai mult de lucru.`,
      `Cipul T2 face din placă și stocare un tot: nu se pot despărți. Un service care vă propune direct schimbarea plăcii vă propune, fără să spună, și pierderea datelor.`,
    ]);
  }
  return v(m, [
    `Fiind un model dinaintea cipului T2, stocarea nu este criptată la nivel de placă. Chiar dacă aparatul nu mai pornește deloc, datele se pot extrage în majoritatea cazurilor — o diferență importantă față de generațiile mai noi.`,
    `Aici recuperarea datelor este simplă: fără criptare legată de placă, informațiile se pot citi și atunci când aparatul e mort de tot. Este unul dintre motivele pentru care modelele din perioada aceasta rămân liniștitoare pentru cine ține lucruri importante pe laptop.`,
    `Stocarea nu e legată criptografic de placă la această generație, deci datele se pot salva chiar și dintr-un aparat care nu mai dă niciun semn. O facem de rutină, înainte de orice altă intervenție.`,
  ]);
}

/* ---------- baterie ---------- */

export function despreBaterie(m: Mac): string {
  const f = familie(m);
  const cicluri = an0(m) >= 2019 ? '1.000' : '800';
  const cap = f === 'air-vechi' || f === 'air-nou'
    ? 'Bateria unui Air are o capacitate mai mică decât la un Pro, iar pierderea de autonomie se simte mai devreme în folosirea zilnică.'
    : 'Bateria unui Pro este voluminoasă și lipită de carcasă cu benzi adezive, așa că înlocuirea cere răbdare și solvent, nu forță.';
  const umflare = v(m, [
    'Semnul care nu trebuie ignorat este trackpadul care începe să apese greu sau se ridică: bateria umflată împinge în el de dedesubt.',
    'Dacă laptopul nu mai stă drept pe masă și se clatină ușor, bateria s-a umflat și trebuie schimbată cât mai repede.',
    'Un capac care nu se mai închide perfect, cu un mic joc pe margine, înseamnă aproape sigur o baterie umflată dedesubt.',
    'Când tastatura pare ușor bombată în mijloc, cauza este tot bateria, care a crescut în volum și împinge în sus.',
    'Trackpadul care nu mai face clic uniform pe toată suprafața este primul semn vizibil al unei baterii umflate.',
  ]);
  const deschidere = v(m, [
    `Bateria este o piesă de consum, proiectată pentru circa ${cicluri} de cicluri complete de încărcare.`,
    `Ca orice acumulator, bateria are o viață finită: în jur de ${cicluri} de cicluri complete, după care capacitatea scade vizibil.`,
    `Producătorul dă bateriei circa ${cicluri} de cicluri de încărcare. După ele nu se strică brusc, dar autonomia se reduce an de an.`,
  ]);
  const final = v(m, [
    'Înlocuirea costă 200 – 500 de lei, cu baterie nouă și calibrare, cu garanție de 12 luni.',
    'Schimbarea ei se încadrează între 200 și 500 de lei, piesă și manoperă, cu 12 luni garanție.',
    'O baterie nouă, montată și calibrată, costă 200 – 500 de lei și vine cu garanție de un an.',
    'Lucrarea costă între 200 și 500 de lei, include calibrarea și are garanție scrisă de 12 luni.',
  ]);
  return `${deschidere} ${cap} ${umflare} ${final}`;
}

/* ---------- defecte ---------- */

export function introDefecte(m: Mac): string {
  return v(m, [
    `În rest, lista de mai jos e cea pe care o vedem efectiv la aparatele ${m.cod} intrate în atelier:`,
    'Celelalte defecte pe care le întâlnim la această serie, în ordinea frecvenței:',
    `Alături de asta, la ${m.cod} se repetă și următoarele situații:`,
    'Pe lângă asta, mai apar constant și următoarele:',
    'Restul tiparului de defecte al seriei arată așa:',
  ]);
}

export function defecteTipice(m: Mac): string[] {
  const d: string[] = [];
  if (m.tast === 'butterfly') d.push(v(m, ['taste blocate sau care scriu de două ori', 'litere care se repetă la o singură apăsare', 'taste care nu mai răspund deloc, una câte una']));
  if (m.note === 'flex') d.push(v(m, ['iluminarea ecranului care se stinge când deschideți capacul', 'bandă de lumină neuniformă pe marginea de jos a ecranului', 'ecran care rămâne întunecat peste un anumit unghi de deschidere']));
  if (m.alim === 'usbc') d.push(v(m, ['port de încărcare care face contact doar într-o anumită poziție', 'cablu de alimentare care trebuie mișcat ca să pornească încărcarea', 'porturi USB-C slăbite, după ani de conectări zilnice']));
  if (m.alim === 'magsafe2') d.push('cablu de încărcare uzat lângă conectorul magnetic');
  if (m.alim === 'magsafe3') d.push(v(m, ['încărcare care pornește pe USB-C, dar nu și pe MagSafe', 'conector magnetic care nu mai ține cablul fixat', 'ledul de pe MagSafe rămas stins, deși cablul e bun']));
  d.push(v(m, ['baterie umflată care împinge trackpadul', 'baterie care ține o oră-două față de o zi întreagă', 'carcasă bombată din cauza bateriei crescute în volum', 'autonomie prăbușită brusc, în câteva săptămâni']));
  d.push(v(m, ['lichid vărsat și coroziunea care urmează', 'urme de lichid pe placă, descoperite după săptămâni', 'daune de la un pahar răsturnat, tratate prea târziu']));
  if (m.cpu === 'intel' && an0(m) >= 2016) d.push(v(m, ['ventilatoare pornite la maximum fără motiv aparent', 'aparat fierbinte care încetinește de la sine', 'închideri bruște sub sarcină, din supraîncălzire', 'zgomot constant de ventilator, chiar în repaus']));
  if (m.cpu !== 'intel') d.push(v(m, ['aparat care nu pornește, fără niciun semn pe ecran', 'laptop mort complet, fără led și fără sunet de pornire', 'pornire imposibilă după o supratensiune pe încărcător']));
  return d.slice(0, 5);
}

export function cazDinAtelier(m: Mac): string {
  if (m.note === 'flex') {
    return v(m, [
      `Un caz tipic pentru ${m.cod}: un client a venit cu ecranul care se stingea doar când deschidea capacul complet, iar la jumătate de unghi funcționa. Alte două ateliere îi spuseseră că are nevoie de ecran nou. Era cablul flex al iluminării, ros de atâtea deschideri — reparat cu o fracțiune din suma aceea.`,
      `Un caz tipic pentru ${m.cod}: o bandă de lumină inegală în partea de jos a ecranului, pe care proprietarul o pusese pe seama vechimii. Era începutul ruperii cablului de iluminare. Prins în faza aceea, s-a rezolvat repede; peste încă un an ar fi însemnat mult mai mult de lucru.`,
      `Un caz tipic pentru ${m.cod}: laptop adus cu deviz de 1.300 de lei pentru „ecran nou", primit în altă parte. La verificare, panoul era perfect — cedase doar cablul care duce curentul spre iluminare. Aparatul a plecat acasă cu o factură de câteva ori mai mică.`,
      `Un caz tipic pentru ${m.cod}: clientul își obișnuise mâna să deschidă capacul doar pe jumătate, ca să aibă imagine. A venit când nici asta nu a mai mers. Cablul de iluminare era rupt, dar restul ecranului intact — lucrare de rutină pentru seria asta.`,
    ]);
  }
  if (m.tast === 'butterfly') {
    return v(m, [
      `Un caz tipic pentru ${m.cod}: tasta „e” scria de două ori la fiecare apăsare. Soluția din manual este înlocuirea întregului ansamblu superior, o lucrare de câteva sute de lei. În jumătate dintre aparatele de acest fel pe care le primim, curățarea sub mecanism și repoziționarea clemei rezolvă problema definitiv.`,
      `Un caz tipic pentru ${m.cod}: bara de spațiu care răspundea doar apăsată în mijloc. Nimic nu se rupsese — se strânsese praf sub mecanismul butterfly. Curățată corect, tastatura a rămas funcțională și astăzi, fără nicio piesă schimbată.`,
      `Un caz tipic pentru ${m.cod}: trei taste moarte și un deviz primit în altă parte pentru schimbarea întregului ansamblu superior, cu tot cu baterie și trackpad. Am curățat mecanismele și am recuperat două dintre ele; pentru a treia am înlocuit doar clema.`,
      `Un caz tipic pentru ${m.cod}: un client convins că a vărsat ceva pe tastatură, pentru că tastele se comportau ciudat. Nu era lichid, era praful clasic al mecanismului butterfly — defectul de serie al generației, nu vina lui.`,
    ]);
  }
  if (m.cpu !== 'intel') {
    return v(m, [
      `Un caz tipic pentru ${m.cod}: aparat fără niciun semn de viață, pe care clientul îl considera pierdut împreună cu datele de pe el. Era un controler de alimentare ars lângă port. Placa reparată la microscop, aparatul pornit, datele intacte — pentru că nici nu a fost nevoie să atingem stocarea.`,
      `Un caz tipic pentru ${m.cod}: laptop care pornea, se auzea sunetul de start, dar ecranul rămânea negru. Diagnosticul pus în altă parte fusese „ecran defect, 1.400 de lei”. În realitate cedase circuitul care alimentează iluminarea, de pe placă. Costul final a fost sub o treime.`,
      `Un caz tipic pentru ${m.cod}: un pahar răsturnat peste tastatură, aparatul șters și pus la loc, aparent funcțional. După trei săptămâni au început să dispară funcțiile, una câte una. Coroziunea lucrase în tot acest timp. Curățată la vreme, placa s-ar fi salvat integral.`,
      `Un caz tipic pentru ${m.cod}: aparat adus după o furtună, cu încărcătorul ars și laptopul mort. Supratensiunea se oprise, ca de obicei, în prima componentă din drum. Am înlocuit-o și aparatul a pornit — fără placă nouă și fără pierderi de date.`,
      `Un caz tipic pentru ${m.cod}: client venit cu oferta unui alt service pentru placă nouă, la un preț apropiat de al unui laptop second-hand. Defectul real era o singură piesă de pe circuitul de alimentare, în scurtcircuit. Schimbată, aparatul funcționează și acum.`,
    ]);
  }
  return v(m, [
    `Un caz tipic pentru ${m.cod}: ventilatoarele porneau la maximum după două minute, iar aparatul se închidea singur la orice sarcină mai mare. Nu placa era vinovată, ci pasta termică uscată și radiatorul îmbâcsit. O curățare completă l-a readus la temperaturi normale.`,
    `Un caz tipic pentru ${m.cod}: laptop adus cu diagnosticul „placă arsă” primit în altă parte. La verificare, o singură componentă de câțiva lei de pe circuitul de alimentare era în scurtcircuit. Schimbată, aparatul a pornit din prima.`,
    `Un caz tipic pentru ${m.cod}: aparat care mergea perfect la birou și se bloca acasă, pe canapea. Textilele acopereau fantele de aerisire, iar temperatura urca imediat. Curățat și cu pastă nouă, problema a dispărut complet.`,
    `Un caz tipic pentru ${m.cod}: performanță scăzută la jumătate față de un aparat identic, fără niciun defect vizibil. Procesorul își reducea singur viteza din cauza căldurii. După curățare și pastă termică nouă, diferența a dispărut.`,
  ]);
}

/* ---------- preturi si proces ---------- */

export function preturiModel(m: Mac): [string, string][] {
  const f = familie(m);
  const ecran = f === 'pro-mare' || f === 'pro-silicon' ? '700 – 1.500 lei' : '500 – 1.200 lei';
  const tastatura = m.tast === 'butterfly' ? '350 – 700 lei' : '300 – 600 lei';
  const port = m.alim === 'magsafe3' ? 'Reparare port MagSafe 3 / USB-C' : m.alim === 'magsafe2' ? 'Reparare mufă MagSafe 2' : 'Reparare port USB-C';
  return [
    ['Diagnosticare', 'GRATUITĂ'],
    ['Curățare + pastă termică', '100 – 200 lei'],
    ['Înlocuire baterie', '200 – 500 lei'],
    [port, '150 – 350 lei'],
    ['Înlocuire tastatură', tastatura],
    ['Reparație placă logică (microsoldering)', pretPlaca(m)],
    ['Înlocuire ansamblu ecran', ecran],
  ];
}

export function notaPret(m: Mac): string {
  return v(m, [
    'Prețurile includ piesa, manopera și garanția scrisă. Diagnosticarea rămâne gratuită chiar dacă alegeți să nu reparați.',
    'În fiecare interval intră piesa, lucrul și garanția. Nu apar costuri suplimentare după ce ați acceptat devizul.',
    'Sumele de mai sus acoperă piesa montată, manopera și garanția. Prețul ferm vi-l comunicăm după diagnosticare, care nu costă nimic.',
    'Intervalele conțin tot: piesă, manoperă, garanție scrisă. Plătiți exact suma pe care ați acceptat-o la telefon sau la atelier.',
    'Fiecare sumă include componenta, lucrul și garanția. Ce vă spunem la deviz este ce plătiți la ridicare, fără ajustări pe parcurs.',
  ]);
}

export function notaProces(m: Mac): string {
  return v(m, [
    `Ne spuneți codul ${m.cod} și ce face aparatul, iar noi vă dăm un interval realist încă de la telefon. Diagnosticarea la atelier este gratuită și fără obligații, reparația se face doar după acordul dumneavoastră, iar predarea vine cu garanție scrisă de 6–12 luni.`,
    `Primul pas este un telefon sau un mesaj pe WhatsApp cu codul ${m.cod} și simptomele. Verificăm disponibilitatea pieselor, vă spunem un interval, apoi diagnosticăm gratuit la atelier și vă comunicăm prețul ferm înainte de orice intervenție.`,
    `Procedura e scurtă: ne trimiteți codul ${m.cod} și descrieți problema, aducem aparatul pe masă, îl diagnosticăm fără costuri și vă dăm prețul exact. Reparăm numai după ce spuneți da, cu garanție de 6–12 luni la predare.`,
    `Începe cu un mesaj în care ne dați codul ${m.cod} și ne spuneți ce se întâmplă. Urmează diagnosticarea gratuită la atelier, apoi devizul. Nimic nu se demontează fără acordul dumneavoastră, iar la predare primiți garanție scrisă.`,
  ]);
}

/* ---------- curier ---------- */

export function despreCurier(m: Mac): string[] {
  const p1 = v(m, [
    `Nu trebuie să fiți din București ca să ajungeți la noi. Un ${m.scurt} se poate trimite prin curier din orice localitate din țară, iar trimiterea se stabilește la telefon: vă spunem adresa atelierului, ce curier e potrivit și cum se împachetează aparatul ca să ajungă întreg.`,
    `Lucrăm cu aparate venite din toată România. Dacă aveți un ${m.cod} și nu sunteți în București, îl expediați prin curier, din orice oraș sau sat, iar noi îl tratăm exact ca pe unul adus personal la atelier.`,
    `Distanța nu este o problemă. Jumătate din aparatele Apple care intră în atelier vin prin curier, din toată țara, și trec prin aceiași pași ca oricare altul: despachetare, diagnosticare gratuită, telefon cu prețul, reparație, test și reambalare.`,
    `Dacă locuiți în altă parte a țării, trimiteți ${m.scurt} prin curier. Se poate din orice localitate, iar primul pas este tot un telefon — nu expediați nimic înainte să vorbim, ca să nu plătiți un transport degeaba.`,
    `Aparatul poate veni la noi prin curier, de oriunde din România. Sunați întâi cu codul ${m.cod} și cu ce face aparatul, apoi vă dăm adresa exactă și indicațiile de ambalare.`,
  ]);
  const p2 = v(m, [
    'Trimiteți aparatul întreg, nu placa scoasă din el: o placă separată nu poate fi testată sub sarcină și nu avem cum să verificăm la final că totul funcționează. Diagnosticarea rămâne gratuită, iar garanția scrisă de 6–12 luni este aceeași ca pentru clienții din București.',
    'Regula e simplă: aparat întreg, nu subansamble. Diagnosticarea nu costă nimic nici pentru coletele din țară, iar la retur primiți aceeași garanție scrisă de 6–12 luni ca oricine vine personal la atelier.',
    'Se trimite aparatul complet, nu doar placa — altfel nu îl putem testa cu adevărat înainte de a vi-l da înapoi. Verificarea este gratuită și pentru aparatele venite din țară, iar garanția rămâne cea obișnuită, 6–12 luni în scris.',
  ]);
  const p3 = v(m, [
    'Două lucruri de știut înainte de a expedia: transportul îl plătiți dumneavoastră, în ambele sensuri, iar pentru aparatele primite prin curier se aplică o manoperă minimă de 200 de lei fără piese. Termenul obișnuit este de 2–5 zile lucrătoare din momentul în care coletul ajunge la noi.',
    'Condițiile, spuse din start: curieratul dus-întors este pe cheltuiala dumneavoastră, iar aparatele venite astfel au o manoperă minimă de 200 de lei, fără piese. Lucrarea durează de regulă 2–5 zile lucrătoare de la primirea coletului.',
    'Ca să nu fie surprize: plătiți transportul în ambele sensuri și există o manoperă minimă de 200 de lei fără piese, valabilă doar pentru aparatele primite prin curier. De la primirea coletului, reparația ia în mod normal 2–5 zile lucrătoare.',
    'Vă spunem condițiile înainte: transportul este al dumneavoastră, în ambele sensuri, iar manopera minimă pentru un aparat venit prin curier este de 200 de lei, fără piese. Socoteala completă o facem împreună la telefon, gratuit, înainte să trimiteți ceva.',
  ]);
  return [p1, p2, p3];
}

/* ---------- intrebari frecvente ---------- */

export function intrebari(m: Mac): { q: string; a: string }[] {
  const q: { q: string; a: string }[] = [];
  q.push({
    q: `Cât costă o reparație de placă la ${m.scurt}?`,
    a: v(m, [
      `Între ${pretPlaca(m)}, în funcție de ce anume a cedat. Lucrăm la nivel de componentă: identificăm circuitul defect la microscop și înlocuim piesa arsă, în loc să comandăm o placă întreagă. Diagnosticarea e gratuită, iar prețul ferm vi-l spunem înainte de a începe.`,
      `Intervalul este ${pretPlaca(m)} și depinde de circuitul afectat. Nu vindem plăci noi pentru o componentă arsă — o căutăm, o înlocuim la microscop și vă predăm același aparat, cu aceleași date. Prețul exact îl aflați după diagnosticarea gratuită.`,
      `${pretPlaca(m)}, în funcție de zona defectă. O placă nouă ar costa de câteva ori mai mult, iar la acest model nici nu ar păstra datele. De aceea reparăm punctual, la nivel de componentă.`,
      `Se încadrează în ${pretPlaca(m)}. Diferența dintre capetele intervalului o dă cât de accesibil este circuitul defect și dacă piesa se găsește imediat. Vă spunem suma exactă după ce punem aparatul pe masă, iar verificarea nu costă nimic.`,
    ]),
  });
  q.push({
    q: v(m, [
      `Cum știu sigur că am un ${m.cod} și nu alt model?`,
      `Unde găsesc codul ${m.cod} pe aparat?`,
      `De ce contează codul exact și nu doar numele modelului?`,
    ]),
    a: v(m, [
      `Codul este scris ${an0(m) >= 2020 ? 'în „Despre acest Mac”, sub denumirea modelului' : 'pe partea de jos a carcasei, cu litere mici'}. Contează, pentru că denumirile comerciale Apple se repetă de la un an la altul, peste plăci complet diferite.`,
      `Îl citiți ${an0(m) >= 2020 ? 'din meniul Apple, la „Despre acest Mac”' : 'de pe eticheta de sub carcasă'}. Verificarea durează câteva secunde și ne scutește pe amândoi de o comandă greșită de piese, pentru că aparate identice la exterior au înăuntru plăci care nu se potrivesc între ele.`,
      `Se vede ${an0(m) >= 2020 ? 'în „Despre acest Mac”' : 'pe spatele aparatului, cu litere fine'}. Vă rugăm să ni-l spuneți exact: la Apple, două modele din ani diferiți pot purta același nume comercial și pot cere piese complet diferite.`,
      `${an0(m) >= 2020 ? 'Îl afișează sistemul, în „Despre acest Mac”' : 'Este tipărit pe partea de jos a carcasei'}. Fără el lucrăm pe presupuneri, iar la Apple presupunerile costă: aceeași denumire acoperă generații cu componente diferite.`,
    ]),
  });
  if (m.tast === 'butterfly') {
    q.push({
      q: 'Se repară tastatura butterfly sau trebuie schimbată toată?',
      a: v(m, [
        'Depinde de cât de avansată e problema. O tastă care scrie dublu sau se blochează din cauza prafului se rezolvă de multe ori prin curățare sub mecanism, fără piese. Când mecanismul e rupt sau au cedat mai multe taste, se înlocuiește ansamblul. Verificarea nu costă nimic.',
        'În multe cazuri se repară. Praful de sub mecanism se poate scoate, iar clema se poate repoziționa, fără nicio piesă nouă. Înlocuirea ansamblului rămâne ultima variantă, pentru situațiile în care mecanismul chiar s-a rupt.',
        'Nu sărim direct la înlocuire. Deschidem, curățăm și testăm fiecare tastă în parte; dacă problema era praful — și de obicei este — lucrarea se oprește acolo. Ansamblul complet se schimbă doar când nu mai e nimic de salvat.',
      ]),
    });
  }
  if (m.note === 'flex') {
    q.push({
      q: 'Ecranul se stinge când deschid capacul. E nevoie de ecran nou?',
      a: v(m, [
        'Aproape niciodată. Este un defect cunoscut al acestei generații: cablurile care alimentează iluminarea sunt scurte și se uzează la fiecare deschidere. Se intervine pe cablu, nu pe ecran, iar diferența de preț este considerabilă.',
        'Nu, în marea majoritate a cazurilor. Panoul e intact, ce cedează sunt cablurile de iluminare. Un service care vă propune direct ecran nou fie nu cunoaște seria, fie preferă lucrarea mai simplă pentru el.',
        'De regulă nu. Simptomul acesta indică aproape întotdeauna cablul de iluminare, nu panoul. Important e să nu așteptați: cu cât cablul se rupe mai mult, cu atât intervenția devine mai laborioasă.',
      ]),
    });
  }
  if (m.cpu !== 'intel') {
    q.push({
      q: 'Se poate mări memoria sau stocarea la acest model?',
      a: v(m, [
        'Nu. La generația Apple Silicon memoria și stocarea sunt integrate în ansamblul procesorului, lipite pe placă. Nu există upgrade, la niciun service și nici la Apple. Ce se poate face este repararea plăcii existente atunci când ceva de pe ea a cedat.',
        'Nu se poate, la nimeni. Memoria și stocarea fac corp comun cu procesorul, iar configurația se alege o singură dată, la cumpărare. Dacă cineva vă promite un upgrade aici, vă promite ceva ce nu există.',
        'Nu, și e bine de știut înainte de a cumpăra un asemenea aparat. Totul e fix din fabrică. În schimb, exact aceeași integrare face ca o reparație pe placă să fie posibilă acolo unde alții spun că nu mai e nimic de făcut.',
      ]),
    });
  } else if (an0(m) >= 2018) {
    q.push({
      q: 'Îmi pierd datele dacă se schimbă placa?',
      a: v(m, [
        'Da, și e important de știut dinainte. Modelul are cip T2, care criptează stocarea și o leagă de placa originală. O placă nouă nu poate citi datele vechi. Tocmai de aceea încercăm întotdeauna repararea plăcii existente.',
        'Da. Stocarea este cifrată cu o cheie care rămâne în placa originală, așa că o placă nouă pornește, dar nu găsește nimic din ce era înainte. Dacă aveți lucruri importante, spuneți-ne de la început.',
        'Din păcate, da — este consecința directă a cipului T2. De aceea abordarea noastră e inversă față de multe ateliere: reparăm placa pe care o aveți, chiar dacă înseamnă mai mult de lucru.',
      ]),
    });
  } else {
    q.push({
      q: 'Dacă nu mai pornește deloc, îmi pot recupera datele?',
      a: v(m, [
        'În majoritatea cazurilor, da. Fiind un model dinaintea cipului T2, stocarea nu este criptată la nivel de placă, deci datele se pot extrage chiar și atunci când aparatul nu mai dă niciun semn.',
        'De obicei da, și fără complicații. La generația aceasta stocarea se poate citi separat de placă, deci un aparat mort nu înseamnă date pierdute.',
      ]),
    });
  }
  q.push({
    q: v(m, ['Am vărsat lichid pe el. Mai are rost să-l aduc?', 'Ce fac dacă am vărsat lichid pe tastatură?', 'Lichidul s-a uscat și pare să meargă. Mai trebuie verificat?']),
    a: v(m, [
      'Are, și cu cât mai repede cu atât mai bine. Opriți-l imediat, nu-l puneți la încărcat și nu-l porniți ca să vedeți dacă merge. Coroziunea avansează cu fiecare oră în care placa stă sub tensiune.',
      'Da. Cel mai important lucru este să nu îl porniți. Lichidul singur strică mai puțin decât lichidul plus curent, iar un aparat adus în prima zi costă de obicei mult mai puțin decât același aparat adus după două săptămâni.',
      'Merită întotdeauna. Chiar dacă pare că funcționează normal după ce s-a uscat, coroziunea continuă în interior și scoate din funcțiune componentele una câte una. Curățarea făcută la timp salvează placa aproape întotdeauna.',
      'Da, chiar dacă pare în regulă. Zahărul sau sarea rămân pe placă după evaporare și atacă traseele luni la rând. O curățare făcută devreme costă puțin; una făcută târziu poate să nu mai ajute.',
    ]),
  });
  q.push({
    q: `Cât durează reparația la ${m.cod}?`,
    a: v(m, [
      'Intervențiile uzuale — baterie, port de încărcare, tastatură, curățare — se fac de regulă în 24–48 de ore. Reparațiile de placă durează 2–5 zile lucrătoare, în funcție de complexitate și de piesele necesare.',
      'Pentru lucrările obișnuite vorbim despre una-două zile. O reparație pe placă cere mai mult, între două și cinci zile lucrătoare, pentru că include și testarea aparatului sub sarcină înainte de predare.',
      'Depinde de intervenție: o baterie sau un port se rezolvă în 24–48 de ore, o placă în 2–5 zile lucrătoare. Termenul realist vi-l spunem la diagnosticare, nu după.',
      'O zi sau două pentru lucrările curente. Reparațiile de placă intră în 2–5 zile lucrătoare, iar dacă piesa trebuie comandată vă spunem dinainte, nu pe parcurs.',
      'Cele mai multe lucrări pleacă a doua zi. Excepția o fac intervențiile pe placă, unde adăugăm timp de testare — între două și cinci zile lucrătoare în total.',
    ]),
  });
  q.push({
    q: v(m, [
      'Nu sunt din București. Pot trimite aparatul prin curier?',
      'Primiți aparate din alte orașe, prin curier?',
      'Locuiesc în altă parte a țării. Cum ajunge aparatul la voi?',
    ]),
    a: v(m, [
      'Da, din orice localitate din România. Trimiteți aparatul întreg prin curier, cu transportul pe cheltuiala dumneavoastră în ambele sensuri. Diagnosticarea rămâne gratuită, manopera minimă pentru coletele din țară este de 200 de lei fără piese, iar garanția scrisă este aceeași, 6–12 luni.',
      'Da. Primim aparate prin curier din toată țara, dar sunați întâi: facem socoteala la telefon și vă spunem dacă merită expediat. Transportul îl plătiți dumneavoastră, dus-întors, iar pentru aparatele primite astfel manopera minimă este de 200 de lei, fără piese.',
      'Se poate din orice colț al țării. Ne sunați, stabilim cum trimiteți, iar aparatul urmează același drum ca oricare altul din atelier. Diagnosticarea e gratuită, manopera minimă la coletele din țară e de 200 de lei fără piese, iar termenul obișnuit e de 2–5 zile lucrătoare de la primire.',
    ]),
  });
  q.push({
    q: `Merită reparat un ${m.scurt} din ${m.an}?`,
    a: an0(m) >= 2020
      ? v(m, [
          'Aproape întotdeauna. Este un aparat încă foarte capabil, iar costul unei reparații punctuale rămâne o fracțiune din prețul unui model nou. Vă spunem sincer și cazurile în care nu merită — de exemplu o placă cu coroziune extinsă în mai multe zone.',
          'Da, în marea majoritate a situațiilor. La vârsta asta aparatul nu are nimic depășit, iar o intervenție punctuală îl readuce la starea inițială pentru o sumă mică față de un model nou. Excepțiile există și vi le spunem deschis.',
          'Merită, cu foarte puține excepții. Un aparat din perioada aceasta acoperă fără probleme orice fel de lucru, iar reparația nu se compară ca preț cu o înlocuire. Dacă totuși dăm peste un caz fără sens economic, aflați asta înainte să cheltuiți ceva.',
        ])
      : v(m, [
          'De cele mai multe ori, da. Un aparat din perioada aceea, reparat corect, mai funcționează ani buni pentru lucrul obișnuit, iar reparația costă o fracțiune dintr-un laptop nou. Când chiar nu merită, v-o spunem deschis.',
          'Da, mai des decât ar crede lumea. Pentru documente, mail și navigare, aparatul este perfect suficient, iar piesele încă se găsesc. Singura situație în care vă descurajăm este o placă distrusă pe suprafețe mari.',
          'În general, da. Alternativa costă de zece ori mai mult, iar reparația se face cu piese disponibile. Vă spunem însă direct dacă aparatul dumneavoastră este printre cazurile în care banii s-ar duce degeaba.',
          'Depinde de ce a cedat, nu de vechime. Dacă ansamblul de ecran e bun, aproape orice altceva se repară rentabil. Regula asta o aplicăm la fel la toate aparatele care intră în atelier.',
        ]),
  });
  return q;
}
