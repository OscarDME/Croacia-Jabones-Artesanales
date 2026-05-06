// lib/copy.js — Sav vidljivi sadržaj landing stranice.
// Sve tekstualne promjene rade se ovdje. Komponente čitaju samo iz ovog objekta.

export const copy = {
  metadata: {
    title: "EcoHerbal — Izradi ručno rađene sapune koji se prodaju sami od sebe",
    description:
      "EcoHerbal tečaj izrade sapuna i prirodne kozmetike: nauči stvarati prirodne sapune uz preko 27 priručnika, 500 recepata i 8 BESPLATNIH bonusa. Doživotni pristup uz 80% popusta.",
    lang: "hr",
  },

  brand: {
    name: "EcoHerbal",
    tagline: "Prirodna eko ljepota",
  },

  hero: {
    banner: "OVA PONUDA + BESPLATNI BONUSI ISTJEČE ZA:",
    timerLabels: { days: "Dana", hours: "Sati", minutes: "Min", seconds: "Sek" },
    kicker: "Više od 2.586 osoba već stvara svoje proizvode",
    headlinePre: "STRUČNJAKINJA ZA KOZMETIKU OTKRIVA",
    headlineHighlight: "kako izraditi neodoljive sapune,",
    headlinePost: "koji njeguju tvoju kožu od prvog dana",
    supporting:
      "Idealno za sve koji žele započeti ODMAH i ostvariti stvarni prihod prodajom vlastitih prirodnih sapuna.",
    cta: "Želim pristup odmah 🧼",
    imageAlt: "Žena s njegovanom i blistavom kožom zahvaljujući EcoHerbal prirodnoj kozmetici",
    trustChips: [
      { icon: "⭐", text: "Preko 2.586 polaznica" },
      { icon: "🎁", text: "8 BESPLATNIH bonusa" },
      { icon: "🛡️", text: "7 dana garancije" },
    ],
  },

  instructorIntro: {
    quote:
      "Osmislila sam ekskluzivan tečaj baš za tebe – tebe koja voliš stvarati vlastitim rukama i želiš usvojiti vještinu koja donosi konkretnu zaradu.",
  },

  soapCarousel: {
    items: [
      { image: "/carousel/soap-1.webp", alt: "Svježe izrađeni ručno rađeni sapuni" },
      { image: "/carousel/soap-2.webp", alt: "Sapuni s mramornim efektom" },
      { image: "/carousel/soap-3.webp", alt: "Sapun s dekorativnim zelenim valom" },
      { image: "/carousel/soap-4.webp", alt: "Prirodni sapun s lavandom" },
      { image: "/carousel/soap-5.webp", alt: "Raznovrsni ručno rađeni sapuni" },
      { image: "/carousel/soap-6.webp", alt: "Detalji ukrasnih sapuna" },
    ],
  },

  benefits: {
    headline:
      "...možeš započeti s MALIM BUDŽETOM i ostvariti ove PREDNOSTI!",
    items: [
      { icon: "Leaf", text: "Koristi potpuno prirodne i sigurne sastojke." },
      { icon: "ShieldCheck", text: "Zaboravi na suhu kožu, iritacije i alergije." },
      { icon: "Sparkles", text: "Stvori svaki sapun koji možeš zamisliti." },
      { icon: "TrendingUp", text: "Pretvori svoj hobi u stvarni izvor prihoda." },
    ],
    checklist: [
      "Nema više propalih recepata",
      "Nije potrebno nikakvo predznanje",
      "Bez strogih rasporeda i stresa",
    ],
    imageAlt: "Ruke drže svježe izrađene ručno rađene sapune",
  },

  trending: {
    kicker: "TREND ZA 2026.",
    headline:
      "u samo nekoliko dana naučit ćeš raditi moderne sapune koji se prodaju sami od sebe",
    imageAlt: "Ručno rađeni sapuni s modernim mramornim efektom",
  },

  courseContent: {
    headline: "ovdje ćemo te naučiti svemu",
    subheadline: "upoznaj se s cijelim sadržajem",
    sectionLabel: "u više od 27 e-knjiga pronaći ćeš...",
    paragraphs: [
      {
        bold: "Pristup kompletnom znanju",
        rest: " kako bi mogla dizajnirati, izrađivati i čuvati prirodne sapune kao pravi profesionalac.",
      },
      {
        bold: "Kraj metodi pokušaja i pogrešaka:",
        rest:
          " slijedi jasan i provjeren vodič s praktičnim savjetima koji ti doslovno štede vrijeme i živce.",
      },
    ],
  },

  megapack: {
    kicker: "MEGA PAKET",
    headline: "mega paket uključuje",
    items: [
      { bold: "Detaljan vodič korak po korak", rest: " od početnice do profesionalke" },
      { bold: "500 recepata", rest: " za apsolutno svaki tip kože" },
      { bold: "Izradu vlastitih", rest: " eteričnih ulja" },
      { bold: "Upute za pravljenje", rest: " prirodnih tekućih sapuna" },
    ],
    imageAlt: "Mockup EcoHerbal mega paketa za ručno rađene sapune",
  },

  bonuses: {
    kicker: "BESPLATNI BONUSI",
    headline: "Ako iskoristiš priliku danas, dobivaš 8 BESPLATNIH bonusa!",
    subheadline: "27 priručnika u digitalnom PDF formatu spremnih za preuzimanje.",
    badge: "BONUS #",
    freeLabel: "BESPLATNO",
    items: [
      { image: "/bonuses/bonus-1.webp", title: "Kozmetika za tijelo", desc: "Prirodni recepti za cjelokupnu njegu tijela." },
      { image: "/bonuses/bonus-2.webp", title: "Kozmetika za lice", desc: "Kreme, serumi i tonici za blistavu kožu." },
      { image: "/bonuses/bonus-3.webp", title: "Prirodni dezodorans", desc: "Nježne, učinkovite formule bez trunke kemije." },
      { image: "/bonuses/bonus-4.webp", title: "Kruta vodica za usta", desc: "Pobrini se za zdravlje zubi prirodnim sastojcima." },
      { image: "/bonuses/bonus-5.webp", title: "Prirodna pasta za zube", desc: "Dubinsko čišćenje bez fluora i sulfata." },
      { image: "/bonuses/bonus-6.webp", title: "Soli za kupanje", desc: "Opusti se uz domaće aromatične soli." },
      { image: "/bonuses/bonus-7.webp", title: "Kruti šampon", desc: "Zdrava kosa, bez štetne plastične ambalaže." },
      { image: "/bonuses/bonus-8.webp", title: "Ručno rađene svijeće", desc: "Cijeli bonus tečaj o izradi ukrasnih svijeća." },
    ],
    footer: "Svi bonusi isporučuju se 100% digitalno istog trena.",
  },

  features: {
    headline: "Sve što dobivaš",
    subheadline: "Puni pristup, materijali za preuzimanje (PDF) i službeni certifikat.",
    items: [
      { icon: "Wifi", title: "100% online", desc: "Pristupi lekcijama kad god želiš i odakle god želiš." },
      { icon: "FolderOpen", title: "Sadržaj na Google Driveu", desc: "Organizirano tako da napreduješ bez ikakvih komplikacija." },
      { icon: "Infinity", title: "Doživotni pristup tečaju", desc: "Uči vlastitim tempom, bez ikakvih vremenskih ograničenja." },
      { icon: "BookOpen", title: "E-knjige su tvoje zauvijek", desc: "Preuzmi ih ili ih čitaj online kad god ti odgovara." },
      { icon: "Award", title: "Certifikat o sudjelovanju", desc: "Potvrdi svoje novo znanje službenim priznanjem." },
      { icon: "ShieldCheck", title: "Garancija od 7 dana", desc: "Ako nisi zadovoljna, vraćamo ti svaki cent." },
    ],
  },

  primaryPricing: {
    discountBadge: "80% POPUSTA",
    valuedAtLabel: "Prava vrijednost programa je",
    regularPrice: "44,50 €",
    offerPrice: "8,90 €",
    cta: "PREUZMI SVOJ POPUST",
    payInfo: "Jednokratno plaćanje za doživotni pristup",
    imageAlt: "Mockup EcoHerbal programa uz ekskluzivni popust",
    socialImageAlt: "Screenshotovi stvarnih poruka naših zadovoljnih polaznica",
  },

  socialProof: {
    headline: "NE PROPUSTI OVU PRILIKU!",
    subheadlinePre: "Više od",
    countHighlight: "2.586 osoba",
    subheadlinePost: "već uživa u izradi vlastitih kozmetičkih proizvoda!",
  },

  reviewScreenshots: {
    headline: "Stvarne poruke naših polaznica",
    subheadline: "Ovakve poruke svakodnevno dobivamo na WhatsApp.",
    onlineLabel: "online",
    typingLabel: "tipka…",
    items: [
      {
        name: "Katarina",
        timeLabel: "10:24",
        messages: [
          { text: "Napravila sam prve sapune po tvom vodiču! 🌸" },
          { text: "Ispali su predivni, a koža mi je super mekana ✨" },
          { text: "Kad ćeš dodati još recepata?" },
        ],
      },
      {
        name: "Lucija",
        timeLabel: "jučer",
        messages: [
          { text: "Prodala sam 12 sapuna na sajmu u subotu 😱" },
          { text: "Ljudi su doslovno poludjeli za njima, nisam mogla vjerovati 🙌" },
          { text: "Hvala na tečaju, stvarno ❤️" },
        ],
      },
      {
        name: "Silvija",
        timeLabel: "12:05",
        messages: [
          { text: "Krenula sam prije 2 tjedna i već imam svoj mali brend 💕" },
          { text: "Recepti se prate bez ikakvih problema" },
          { text: "A BESPLATNI bonusi zlata vrijede 🎁" },
        ],
      },
      {
        name: "Vesna",
        timeLabel: "danas",
        messages: [
          { text: "Hej! Samo ti želim javiti da sam upravo zatvorila jednu prodaju" },
          { text: "10 sapuna za jedan lokalni eko dućan 🌿" },
          { text: "Tisuću puta hvala, popravila si mi dan 🌷" },
        ],
      },
    ],
  },

  curriculum: {
    headline: "Sadržaj tečaja",
    subheadline: "Klikni na padajuće izbornike i pregledaj sve što te čeka.",
    courses: [
      {
        title: "Tečaj | Ručno rađeni sapuni",
        lessons: [
          "EcoHerbal sapuni mod. 1",
          "EcoHerbal sapuni mod. 2",
          "Izrada sapuna mod. 1",
          "Izrada sapuna mod. 2",
          "Osnovne tehnike rada",
          "Sastojci i procesi",
          "Nevjerojatni sastojci i njihova svojstva",
        ],
      },
      {
        title: "Tečaj | 500 recepata za sapune",
        lessons: [
          "E-knjiga (PDF) sa 500 jedinstvenih recepata.",
          "Vodič za prilagodbu sastojaka.",
        ],
      },
      {
        title: "Tečaj | Izradi vlastite tekuće sapune",
        lessons: [
          "Detaljan vodič korak po korak za izradu vlastitih tekućih sapuna na bazi glicerina.",
        ],
      },
      {
        title: "Tečaj | Izradi vlastita eterična ulja",
        lessons: [
          "Detaljan vodič korak po korak za kreiranje vlastitih eteričnih ulja.",
        ],
      },
      {
        title: "BESPLATNI BONUS | Tečaj za ručno rađene svijeće",
        lessons: [
          "Izrada svijeća 1",
          "Izrada svijeća 2",
          "Svijeće od pčelinjeg voska",
          "Svijeće od sojinog voska",
          "Ukrašavanje svijeća",
          "Vodič za ručno rađene svijeće",
          "Ekstra: Lava lampe",
        ],
      },
      {
        title: "BESPLATNI BONUS | Prirodna kozmetika",
        lessons: [
          "BESPLATNI BONUS Kozmetika za tijelo",
          "BESPLATNI BONUS Kozmetika za lice",
          "BESPLATNI BONUS Dezodorans",
          "BESPLATNI BONUS Kruta vodica za usta",
          "BESPLATNI BONUS Pasta za zube",
          "BESPLATNI BONUS Soli za kupanje",
          "BESPLATNI BONUS Kruti šampon",
        ],
      },
    ],
  },

  urgencyBanner: {
    discount: "80% POPUSTA",
    plus: "+ 8 BESPLATNIH bonusa",
    middle: "uz tvoju kupnju do",
    deadline: "14. PROSINCA",
    or: "ili do isteka preostalih",
    slots: "26 MJESTA",
  },

  finalCta: {
    preHeadline: "TVOJ TRENUTAK JE SADA",
    urgencyTop: "80% POPUSTA",
    headline: "Zgrabi DANAS EcoHerbal mega paket uz brutalan popust",
    subUrgency:
      "Više od 2.586 osoba već stvara vlastite sapune i kozmetiku. Danas je tvoj red.",
    bundleList: [
      "Cjeloviti tečaj za ručno rađene sapune (4 modula)",
      "500 jedinstvenih recepata za svaki tip kože",
      "Tečaj za tekuće sapune korak po korak",
      "Tečaj za eterična ulja",
      "BONUS — Cijeli tečaj o izradi ručno rađenih svijeća",
      "BONUS — 7 priručnika za prirodnu kozmetiku",
      "Doživotni pristup (PDF/online) + Certifikat o sudjelovanju",
    ],
    guaranteeText:
      "Potpuna garancija od 7 dana. Ako ti se tečaj ne svidi, vraćamo ti 100% novca bez ikakvih dodatnih pitanja.",
    guaranteeImageAlt: "Pečat za 7 dana garancije",
    regularPriceLabel: "Prije",
    regularPrice: "44,50 €",
    offerPrice: "8,90 €",
    discountBadge: "80% POPUSTA",
    urgencyText: "Jednokratno plaćanje za doživotni pristup",
    bottomUrgency: "Ova ponuda istječe čim tajmer dođe do nule.",
    button: "ŽELIM MEGA PAKET ODMAH",
    trustRow: "100% sigurno plaćanje · Trenutni pristup · 7 dana garancije",
  },

  instructorBio: {
    name: "Jelena Kovačić",
    title: "Stručnjakinja za prirodnu kozmetiku",
    bio: "Bok, ja sam Jelena. Prirodnom kozmetikom i izradom sapuna bavim se već više od 8 godina. Ono što je počelo kao osobna potreba da njegujem kožu bez agresivne kemije, pretvorilo se u moju najveću strast... a potom i u moj način života. Tijekom godina razvila sam desetke vlastitih formula i pomogla brojnim ženama poput tebe da naprave prve korake u ovom fascinantnom svijetu. Od toga kako izraditi prvi sapun sa sastojcima koje već imaš kod kuće, do pretvaranja te umjetnosti u profitabilan i održiv posao. Znam kako je to krenuti od nule, bez iskustva, u strahu od grešaka ili ne znajući odakle uopće početi. Zato u ovom tečaju dijelim s tobom baš sve što sam naučila – jasno, praktično i bez nepotrebnih komplikacija.",
    imageAlt: "Jelena Kovačić, stručnjakinja za prirodnu kozmetiku i ručno rađene sapune",
    portfolioImages: [
      "/instructor-portfolio/work-1.webp",
      "/instructor-portfolio/work-2.webp",
      "/instructor-portfolio/work-3.webp",
    ],
    portfolioAlts: [
      "Ručno rađeni sapuni koje je dizajnirala Jelena",
      "Rad u radionici za izradu prirodne kozmetike",
      "Gotovi proizvodi spremni za pakiranje i prodaju",
    ],
    yearsLabel: "Više od 8 godina",
    yearsText: "izrade prirodne kozmetike",
    studentsLabel: "Preko 2.586",
    studentsText: "zadovoljnih polaznica",
  },

  testimonials: {
    headline: "Uz sve to, moći ćeš zatražiti i svoj certifikat",
    subheadline: "Pogledaj što kažu oni koji su već prošli EcoHerbal tečaj.",
    productLabel: "EcoHerbal — Tečaj za ručno rađene sapune",
    reviewedLabel: "je napisala recenziju za",
    actions: { like: "Sviđa mi se", comment: "Komentiraj", share: "Podijeli" },
    items: [
      {
        name: "Ana Horvat",
        handle: "@ana_horvat",
        text: "Tečaj mi se jako svidio. Radila sam sve točno onako kako nas je instruktorica učila i u manje od mjesec dana uspjela sam pokrenuti vlastiti posao i ostvariti prve prodaje. Sada radim sve više sapuna i čak razmišljam o otvaranju male trgovine. Hvala na ovom tečaju, stvarno se isplati.",
      },
      {
        name: "Maja Knežević",
        handle: "",
        text: "Prije tjedan dana završila sam tečaj i jednostavno sam oduševljena. Već sam napravila prve sapune, isprobali smo ih doma i svi smo očarani kako su dobri. Sada pripremam sve da ih počnem prodavati, baš kako su nas učili. Par prijatelja od prijatelja već želi kupiti od mene. Puno vam hvala na ovoj prilici. Vrijedi svakog centa.",
      },
      {
        name: "Snježana Jurić",
        handle: "",
        text: "Ostavljam ovaj komentar jer sam tečaj završila prije nekog vremena i odmah nakon toga se bacila u posao. Iskreno, stvari su krenule nevjerojatno dobro, a jučer sam sklopila ugovor s jednim brendom da počnu prodavati neke od mojih proizvoda. Nikad nisam mislila da ću doći do ovoga, tako da ogromno HVALA. Ovaj tečaj je vrhunska investicija.",
      },
      {
        name: "Dejan Novak",
        handle: "@dejan_n",
        text: "Odličan sadržaj, jako jasno i profesionalno objašnjeno. Bonus pokloni... ako ih možete ugrabiti, obavezno to napravite. Prepuni su vrijednih informacija. Svako dobro i hvala vam što ste nam omogućili ovo znanje za pokretanje posla.",
      },
    ],
    cta: "ŽELIM ZAPOČETI DANAS",
  },

  closingProof: {
    headlinePre: "Naše polaznice već stvaraju proizvode za",
    headlineHighlight: "manje od 3 dana",
    headlinePost: ". Što ti čekaš?",
    ctaLabel: "ZAPOČNI DANAS",
  },

  guarantee: {
    badgeLabel: "7 DANA GARANCIJE",
    headline: "BEZ BRIGE, MI PREUZIMAMO RIZIK UMESTO TEBE.",
    text: "Imat ćeš tjedan dana da isprobaš tečaj, i ako ti se kojim slučajem ne svidi ili ne ispuni tvoja očekivanja, vraćamo ti 100% novca.",
    badgeAlt: "Pečat za 7 dana garancije od EcoHerbala",
    certs: [
      { icon: "Award", label: "Službeni certifikat" },
      { icon: "ShieldCheck", label: "100% sigurno plaćanje" },
      { icon: "Lock", label: "Zaštićeni podaci" },
      { icon: "BadgeCheck", label: "Provjerena kvaliteta" },
    ],
  },

  faq: {
    headline: "Često postavljana pitanja",
    subheadline: "Sve što trebaš znati prije nego što započneš.",
    items: [
      {
        q: "Je li plaćanje sigurno?",
        a: "Da, plaćanje se vrši preko platforme Hotmart, jedne od najsigurnijih i najpriznatijih digitalnih platformi na svijetu, koja posluje u preko 160 zemalja i koristi najmodernije sigurnosne certifikate. Tvoji podaci za plaćanje bit će u potpunosti zaštićeni i 100% povjerljivi, što ti jamči sigurnu i pouzdanu kupnju.",
      },
      {
        q: "Mogu li završiti tečaj ako ne znam baš ništa o ovome?",
        a: "Naravno! Sve e-knjige su maksimalno detaljne i realno, jedino što ti treba je volja. Cijeli proces je jako jednostavan i koristit ćeš vrlo praktične alate.",
      },
      {
        q: "Mogu li pristupiti tečaju s bilo kojeg uređaja?",
        a: "Da, tečaju možeš pristupiti s bilo kojeg uređaja! Bilo da si na računalu, tabletu ili mobitelu, moći ćeš uživati u sadržaju bez obzira na to koji operativni sustav koristiš – Windows, macOS, iOS ili Android. Osim toga, imaš opciju preuzeti aplikaciju Hotmart kako bi ti pristup s mobitela bio još lakši.",
      },
      {
        q: "Je li skupo započeti s ovim?",
        a: "Ne! Prirodna kozmetika zahtijeva vrlo nisko početno ulaganje, a mi te učimo kako koristiti pristupačne materijale kako bi mogla započeti bez nepotrebnih troškova.",
      },
      {
        q: "Kada tečaj počinje?",
        a: "Čim kupiš tečaj, na e-mail dobivaš link za pristup (i digitalne knjige u PDF formatu) koji ti omogućuje da odmah uđeš na platformu i prelaziš lekcije kada god poželiš. Tečaj ti ostaje na raspolaganju doživotno.",
      },
      {
        q: "Što sve tečaj uključuje?",
        a: "Tečaj uključuje doživotni pristup, e-knjige s uputama korak po korak, materijale spremne za preuzimanje (PDF), tehničku podršku i certifikat po završetku.",
      },
      {
        q: "Dajete li certifikat?",
        a: "Naravno, nakon što završiš tečaj i javiš nam se e-mailom sa zahtjevom, odmah ti šaljemo tvoj zasluženi certifikat.",
      },
    ],
  },

  footer: {
    brand: "CREARIS",
    copyright: "Copyright © crearis.online ® 2026",
    disclaimer:
      "Ova web stranica nije dio Facebookove web stranice ili Facebook Inc. Nadalje, ovu stranicu ni na koji način NE podržava niti sponzorira Facebook.",
    trademark: "FACEBOOK je registrirani zaštitni znak tvrtke FACEBOOK, Inc.",
  },
};