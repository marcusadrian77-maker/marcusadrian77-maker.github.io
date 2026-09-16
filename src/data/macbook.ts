// Modele MacBook pentru paginile de service. Textul fiecarei pagini se deriva
// din campurile de mai jos plus variante alese determinist, ca paginile sa nu
// fie acelasi sablon repetat de 22 de ori.

export type Mac = {
  slug: string;      // fara prefix
  nume: string;      // denumirea comerciala
  scurt: string;     // denumire scurta, pentru title
  cod: string;       // identificatorul Apple (A1706 etc.)
  an: string;        // anii de productie
  diag: string;      // diagonala
  cpu: 'intel' | 'm1' | 'm2' | 'm3';
  tast: 'butterfly' | 'magic' | 'clasica';
  alim: 'magsafe2' | 'usbc' | 'magsafe3';
  note?: string;     // particularitate reala a generatiei
  specific: string;  // paragraf tehnic propriu modelului
  simptom: string;   // reclamatia cu care ajunge cel mai des in atelier
};

export const MACURI: Mac[] = [
  // ---------- MacBook Pro 13" Intel ----------
  {
    slug: 'pro-13-a1706', nume: 'MacBook Pro 13" Touch Bar', scurt: 'MacBook Pro 13" A1706', cod: 'A1706',
    an: '2016–2017', diag: '13,3"', cpu: 'intel', tast: 'butterfly', alim: 'usbc', note: 'flex',
    specific: 'A1706 este varianta completă a generației 2016–2017: patru porturi Thunderbolt 3, Touch Bar și cip T1 pentru Touch ID. Are un avantaj practic important față de fratele său A1708 — memoria de stocare stă pe un conector propriu, nu lipită de placă. Când placa are o problemă gravă, stocarea se poate scoate și citi separat, iar datele nu se pierd odată cu aparatul.',
    simptom: 'Cea mai frecventă reclamație pentru A1706: Touch Bar-ul care rămâne stins sau afișează doar o parte din butoane, în timp ce restul laptopului funcționează normal.',
  },
  {
    slug: 'pro-13-a1708', nume: 'MacBook Pro 13" fără Touch Bar', scurt: 'MacBook Pro 13" A1708', cod: 'A1708',
    an: '2016–2017', diag: '13,3"', cpu: 'intel', tast: 'butterfly', alim: 'usbc', note: 'flex',
    specific: 'A1708 este varianta de bază a generației: două porturi Thunderbolt, taste funcționale clasice în locul Touch Bar-ului și, prin urmare, o placă mai simplă. Partea neplăcută este că aici stocarea e lipită direct pe placă. Dacă placa cedează, datele nu se pot scoate mutând un modul în alt aparat — trebuie reparat circuitul, ceea ce noi facem la microscop.',
    simptom: 'Cea mai frecventă reclamație pentru A1708: aparatul care nu mai pornește după ce a stat descărcat complet câteva săptămâni, semn aproape sigur al circuitului de încărcare.',
  },
  {
    slug: 'pro-13-a1989', nume: 'MacBook Pro 13" Touch Bar', scurt: 'MacBook Pro 13" A1989', cod: 'A1989',
    an: '2018–2019', diag: '13,3"', cpu: 'intel', tast: 'butterfly', alim: 'usbc', note: 't2',
    specific: 'A1989 a fost primul Pro de 13 inch cu patru nuclee reale și primul din serie cu cip de securitate T2. Combinația dintre un procesor mai puternic și aceeași carcasă subțire se simte: aparatul lucrează constant la temperaturi mari, iar pasta termică se degradează vizibil mai repede decât la generația anterioară. Multe defecte de placă pe care le vedem aici au în spate ani de supraîncălzire.',
    simptom: 'Cea mai frecventă reclamație pentru A1989: ventilatoare care urlă la sarcini banale și un aparat care încetinește brusc, deși pe hârtie e rapid.',
  },
  {
    slug: 'pro-13-a2159', nume: 'MacBook Pro 13" Touch Bar', scurt: 'MacBook Pro 13" A2159', cod: 'A2159',
    an: '2019', diag: '13,3"', cpu: 'intel', tast: 'butterfly', alim: 'usbc', note: 't2',
    specific: 'A2159 este modelul de intrare din 2019: două porturi Thunderbolt în loc de patru și un procesor cu două nuclee. Are însă Touch Bar și cip T2, deci toate constrângerile modelelor mari. Numărul mic de porturi contează în atelier: aceleași două mufe se folosesc și la încărcare, și la periferice, deci se uzează de două ori mai repede decât la variantele cu patru.',
    simptom: 'Cea mai frecventă reclamație pentru A2159: încărcătorul care trebuie ținut într-o anumită poziție ca aparatul să înceapă încărcarea.',
  },
  {
    slug: 'pro-13-a2251', nume: 'MacBook Pro 13" Touch Bar', scurt: 'MacBook Pro 13" A2251', cod: 'A2251',
    an: '2020', diag: '13,3"', cpu: 'intel', tast: 'magic', alim: 'usbc', note: 't2',
    specific: 'A2251 este varianta superioară din 2020: patru porturi Thunderbolt, procesor Intel de generația a zecea și, în sfârșit, tastatura Magic Keyboard în locul mecanismului butterfly. Este ultimul Pro de 13 inch cu Intel care merită reparat fără rezerve — performanța e încă bună, iar piesele se găsesc ușor. Stocarea rămâne lipită pe placă și legată de T2.',
    simptom: 'Cea mai frecventă reclamație pentru A2251: aparat care se închide singur sub sarcină, de obicei din cauza sistemului de răcire îmbâcsit.',
  },
  {
    slug: 'pro-13-a2289', nume: 'MacBook Pro 13" Touch Bar', scurt: 'MacBook Pro 13" A2289', cod: 'A2289',
    an: '2020', diag: '13,3"', cpu: 'intel', tast: 'magic', alim: 'usbc', note: 't2',
    specific: 'A2289 arată identic cu A2251, dar este versiunea de bază din 2020: două porturi Thunderbolt și un procesor de generația a opta. Confuzia dintre cele două se face des, inclusiv în anunțurile de vânzare, iar piesele nu sunt întotdeauna compatibile între ele. De aceea vă cerem codul exact înainte de a comanda orice componentă.',
    simptom: 'Cea mai frecventă reclamație pentru A2289: un port de încărcare care nu mai ține cablul ferm, după ani în care a fost și singurul port folosit zilnic.',
  },
  {
    slug: 'pro-13-a2338', nume: 'MacBook Pro 13" M1 / M2', scurt: 'MacBook Pro 13" A2338', cod: 'A2338',
    an: '2020–2022', diag: '13,3"', cpu: 'm1', tast: 'magic', alim: 'usbc',
    specific: 'A2338 este singurul Pro cu procesor Apple care a păstrat ventilator activ și Touch Bar. Același cod acoperă atât varianta M1 din 2020, cât și cea M2 din 2022 — arată la fel pe dinafară, dar plăcile diferă. Ventilatorul face ca modelul să reziste mai bine la sarcini lungi decât un Air, însă tot el trage praful înăuntru, iar curățarea periodică chiar contează aici.',
    simptom: 'Cea mai frecventă reclamație pentru A2338: aparat care nu dă niciun semn de viață, fără led și fără sunet, după o pană de curent sau un încărcător de calitate îndoielnică.',
  },
  // ---------- MacBook Pro 15" / 16" Intel ----------
  {
    slug: 'pro-15-a1707', nume: 'MacBook Pro 15" Touch Bar', scurt: 'MacBook Pro 15" A1707', cod: 'A1707',
    an: '2016–2017', diag: '15,4"', cpu: 'intel', tast: 'butterfly', alim: 'usbc', note: 'flex',
    specific: 'A1707 are, pe lângă procesorul Intel, o placă video Radeon separată — iar asta schimbă complet profilul de defecte față de modelele de 13 inch. Placa video produce multă căldură într-o carcasă subțire, iar în timp apar probleme de imagine: artefacte, dungi, ecran rămas negru deși aparatul pornește. Sunt exact reparațiile care se rezolvă pe placă, nu prin înlocuirea ei.',
    simptom: 'Cea mai frecventă reclamație pentru A1707: imagine cu artefacte sau linii colorate care apar la sarcină grafică și dispar la repornire — până când nu mai dispar.',
  },
  {
    slug: 'pro-15-a1990', nume: 'MacBook Pro 15" Touch Bar', scurt: 'MacBook Pro 15" A1990', cod: 'A1990',
    an: '2018–2019', diag: '15,4"', cpu: 'intel', tast: 'butterfly', alim: 'usbc', note: 't2',
    specific: 'A1990 a fost cel mai puternic MacBook Intel de 15 inch și, în același timp, cel mai încercat termic: procesor cu șase nuclee, placă video dedicată și aceeași carcasă subțire. Aparatele care ajung la noi după cinci-șase ani au aproape întotdeauna pasta termică uscată complet și radiatoarele pline. Înainte de a vorbi despre placă, la acest model verificăm întotdeauna răcirea.',
    simptom: 'Cea mai frecventă reclamație pentru A1990: aparat fierbinte, cu ventilatoarele permanent la maximum, care își reduce singur viteza până devine greu de folosit.',
  },
  {
    slug: 'pro-16-a2141', nume: 'MacBook Pro 16"', scurt: 'MacBook Pro 16" A2141', cod: 'A2141',
    an: '2019', diag: '16"', cpu: 'intel', tast: 'magic', alim: 'usbc', note: 't2',
    specific: 'A2141 a fost modelul cu care Apple a corectat două greșeli deodată: a renunțat la tastatura butterfly și a mărit radiatoarele și ventilatoarele. Este, dintre toate Pro-urile Intel, cel mai echilibrat termic. Rămâne totuși un aparat cu placă video separată și cip T2, deci reparațiile de placă cer aparatură serioasă, iar datele sunt legate de placa originală.',
    simptom: 'Cea mai frecventă reclamație pentru A2141: sunet distorsionat sau pocnituri din difuzoare, alături de porniri greoaie după starea de repaus.',
  },
  // ---------- MacBook Pro Apple Silicon ----------
  {
    slug: 'pro-14-a2442', nume: 'MacBook Pro 14" M1 Pro / Max', scurt: 'MacBook Pro 14" A2442', cod: 'A2442',
    an: '2021', diag: '14,2"', cpu: 'm1', tast: 'magic', alim: 'magsafe3',
    specific: 'A2442 a marcat întoarcerea porturilor utile: HDMI, cititor de carduri SD și MagSafe 3, pe lângă cele trei Thunderbolt. Are ecran mini-LED, cu iluminarea împărțită în sute de zone, mult mai complicat decât un panou obișnuit — motiv în plus să nu se schimbe ansamblul atunci când problema e în altă parte. Cele mai multe intervenții pe care le facem aici sunt pe porturi și pe circuitul de alimentare.',
    simptom: 'Cea mai frecventă reclamație pentru A2442: cititorul de carduri sau portul HDMI care nu mai răspund, după ce au fost folosite zilnic la birou.',
  },
  {
    slug: 'pro-16-a2485', nume: 'MacBook Pro 16" M1 Pro / Max', scurt: 'MacBook Pro 16" A2485', cod: 'A2485',
    an: '2021', diag: '16,2"', cpu: 'm1', tast: 'magic', alim: 'magsafe3',
    specific: 'A2485 este varianta mare a generației din 2021, cu una dintre cele mai voluminoase baterii montate vreodată într-un MacBook. Consecința practică: atunci când bateria se degradează sau se umflă, presiunea asupra trackpadului și a carcasei este mai mare decât la orice alt model, iar înlocuirea nu trebuie amânată. Restul aparatului este robust și se repară bine pe placă.',
    simptom: 'Cea mai frecventă reclamație pentru A2485: trackpad devenit greu de apăsat sau carcasă care nu mai stă perfect dreaptă pe masă.',
  },
  {
    slug: 'pro-14-a2779', nume: 'MacBook Pro 14" M2 Pro / Max', scurt: 'MacBook Pro 14" A2779', cod: 'A2779',
    an: '2023', diag: '14,2"', cpu: 'm2', tast: 'magic', alim: 'magsafe3',
    specific: 'A2779 păstrează carcasa modelului din 2021 și schimbă doar placa, cu procesor M2 Pro sau M2 Max. Fiind un aparat recent, defectele pe care le vedem nu sunt de uzură, ci accidentale: lichid vărsat, o cădere, un încărcător necorespunzător. Sunt situații în care intervenția rapidă contează enorm, pentru că placa nu apucă să se corodeze.',
    simptom: 'Cea mai frecventă reclamație pentru A2779: aparat care a luat contact cu lichid și care, deși pare că funcționează, începe după câteva zile să piardă funcții una câte una.',
  },
  {
    slug: 'pro-16-a2780', nume: 'MacBook Pro 16" M2 Pro / Max', scurt: 'MacBook Pro 16" A2780', cod: 'A2780',
    an: '2023', diag: '16,2"', cpu: 'm2', tast: 'magic', alim: 'magsafe3',
    specific: 'A2780 este aparatul de lucru profesional al generației M2: ecran de 16 inch, autonomie mare și o placă densă, cu foarte puțin spațiu liber. Densitatea aceasta înseamnă că o reparație aici se face obligatoriu sub microscop, cu aer cald controlat și cu schema în față. Este genul de lucrare pe care multe ateliere o refuză și o înlocuiesc cu o placă nouă, la un preț apropiat de al unui laptop.',
    simptom: 'Cea mai frecventă reclamație pentru A2780: aparat care nu mai pornește după o cădere de tensiune sau după folosirea unui încărcător de la alt producător.',
  },
  // ---------- MacBook Air ----------
  {
    slug: 'air-a1466', nume: 'MacBook Air 13"', scurt: 'MacBook Air 13" A1466', cod: 'A1466',
    an: '2013–2017', diag: '13,3"', cpu: 'intel', tast: 'clasica', alim: 'magsafe2',
    specific: 'A1466 este cel mai ușor de întreținut MacBook din câte s-au făcut: se deschide cu o șurubelniță, bateria se schimbă simplu, iar memoria de stocare stă pe un conector propriu și se poate înlocui cu una mai mare. Are ecran cu rezoluție mai mică decât modelele Retina, în schimb consumă puțin și ține enorm pe baterie. Pentru navigare, documente și mail este încă un aparat complet suficient.',
    simptom: 'Cea mai frecventă reclamație pentru A1466: autonomie scăzută la o oră-două, după ani de folosire — de departe cea mai ieftină reparație din toată lista.',
  },
  {
    slug: 'air-a1932', nume: 'MacBook Air 13" Retina', scurt: 'MacBook Air 13" A1932', cod: 'A1932',
    an: '2018–2019', diag: '13,3"', cpu: 'intel', tast: 'butterfly', alim: 'usbc', note: 't2',
    specific: 'A1932 a fost redesenarea completă a lui Air: ecran Retina, porturi USB-C și cip T2. A moștenit însă și tastatura butterfly, exact în perioada în care aceasta dădea cele mai multe bătăi de cap. În plus, procesorul de consum redus din el este suficient pentru lucrul obișnuit, dar se sufocă rapid sub sarcină — un motiv în plus ca sistemul de răcire să fie curat.',
    simptom: 'Cea mai frecventă reclamație pentru A1932: taste care scriu dublu sau nu răspund deloc, apărute treptat, una după alta.',
  },
  {
    slug: 'air-a2179', nume: 'MacBook Air 13" Retina', scurt: 'MacBook Air 13" A2179', cod: 'A2179',
    an: '2020', diag: '13,3"', cpu: 'intel', tast: 'magic', alim: 'usbc', note: 't2',
    specific: 'A2179 este ultimul Air cu procesor Intel și primul care a scăpat de tastatura butterfly. A fost pe piață mai puțin de un an, ceea ce îl face relativ rar în atelier, dar și ușor de confundat cu modelul M1 care i-a urmat — arată identic pe dinafară. Piesele diferă, așa că verificăm întotdeauna codul înainte de orice comandă.',
    simptom: 'Cea mai frecventă reclamație pentru A2179: aparat care se încinge și devine lent la lucruri simple, precum videoconferințe sau multe file deschise.',
  },
  {
    slug: 'air-a2337', nume: 'MacBook Air 13" M1', scurt: 'MacBook Air 13" A2337', cod: 'A2337',
    an: '2020–2022', diag: '13,3"', cpu: 'm1', tast: 'magic', alim: 'usbc',
    specific: 'A2337 este aparatul care a schimbat percepția despre Air: fără ventilator, complet silențios, cu o autonomie pe care modelele Intel nu o atingeau nici pe departe. Lipsa pieselor în mișcare înseamnă că nu se strică aproape nimic mecanic. În schimb, tot ce se poate defecta este pe placă, iar acolo se lucrează la nivel de componentă sau deloc.',
    simptom: 'Cea mai frecventă reclamație pentru A2337: ecran rămas negru deși aparatul dă semne că funcționează — se aude sunetul de pornire, tastatura se aprinde.',
  },
  {
    slug: 'air-a2681', nume: 'MacBook Air 13" M2', scurt: 'MacBook Air 13" A2681', cod: 'A2681',
    an: '2022', diag: '13,6"', cpu: 'm2', tast: 'magic', alim: 'magsafe3',
    specific: 'A2681 a abandonat forma în pană a vechilor Air pentru o carcasă plată și a readus MagSafe. Este tot un aparat fără ventilator, deci silențios, dar carcasa mai subțire nu iartă îndoirea: aparatele care ajung la noi după ce au fost purtate într-un rucsac plin au adesea probleme la ansamblul ecranului sau la balamale.',
    simptom: 'Cea mai frecventă reclamație pentru A2681: iluminarea ecranului care pâlpâie sau dispare la anumite unghiuri de deschidere a capacului.',
  },
  {
    slug: 'air-a2941', nume: 'MacBook Air 15" M2', scurt: 'MacBook Air 15" A2941', cod: 'A2941',
    an: '2023', diag: '15,3"', cpu: 'm2', tast: 'magic', alim: 'magsafe3',
    specific: 'A2941 este primul Air cu ecran de 15 inch și cu sistem audio pe șase difuzoare — construit pentru cei care voiau o suprafață mare de lucru fără greutatea unui Pro. Suprafața mare și carcasa subțire fac din ansamblul ecranului cea mai vulnerabilă piesă, mai ales la transport. În rest, fiind fără ventilator, praful nu reprezintă o problemă aici.',
    simptom: 'Cea mai frecventă reclamație pentru A2941: pete sau zone luminoase pe ecran, apărute după ce aparatul a fost transportat închis într-o geantă prea strâmtă.',
  },
  {
    slug: 'air-a3113', nume: 'MacBook Air 13" M3', scurt: 'MacBook Air 13" A3113', cod: 'A3113',
    an: '2024', diag: '13,6"', cpu: 'm3', tast: 'magic', alim: 'magsafe3',
    specific: 'A3113 păstrează carcasa modelului M2 și aduce procesorul M3, care permite în sfârșit conectarea a două monitoare externe, cu capacul închis. Fiind un aparat foarte nou, în atelier ajunge aproape exclusiv din accidente, nu din uzură. Reparațiile aici sunt în general punctuale și rapide, cu condiția să fie aduse repede.',
    simptom: 'Cea mai frecventă reclamație pentru A3113: aparat care nu se mai încarcă pe MagSafe după ce cineva s-a împiedicat de cablu.',
  },
  {
    slug: 'air-a3114', nume: 'MacBook Air 15" M3', scurt: 'MacBook Air 15" A3114', cod: 'A3114',
    an: '2024', diag: '15,3"', cpu: 'm3', tast: 'magic', alim: 'magsafe3',
    specific: 'A3114 combină ecranul de 15 inch cu procesorul M3 și rămâne, la fel ca toți Air-ii recenți, un aparat fără ventilator. Pentru un laptop de această dimensiune, lipsa răcirii active înseamnă că toată căldura pleacă prin carcasă — motiv pentru care nu trebuie ținut pe pătură sau pe pernă la sarcini lungi. Defectele pe care le vedem sunt aproape toate accidentale.',
    simptom: 'Cea mai frecventă reclamație pentru A3114: lichid vărsat pe tastatură, urmat de funcții care încep să dispară una câte una în zilele următoare.',
  },
];
