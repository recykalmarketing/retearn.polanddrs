export type Locale = "pl" | "en";

export type SiteContent = {
  langName: string;
  nav: {
    rvm: string;
    smallStore: string;
    features: string;
    retailers: string;
    benefits: string;
    howItWorks: string;
    about: string;
    faq: string;
    meeting: string;
    menu: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
    proof: Array<{ value: string; label: string }>;
    note: string;
  };
  smallRetail: {
    label: string;
    title: string;
    description: string;
    items: Array<{ title: string; text: string; icon: "layout" | "checkout" | "capacity" | "monitor" }>;
    cta: string;
  };
  rvm: {
    label: string;
    title: string;
    description: string;
    features: Array<{ number: string; title: string; subtext?: string; text: string; icon: "scan" | "inlet" | "screen" | "voucher" | "monitor" }>;
    specsTitle: string;
    specs: Array<{ label: string; value: string }>;
    cta: string;
    disclaimer: string;
  };
  retailers: {
    label: string;
    title: string;
    description: string;
    benefits: Array<{ title: string; text: string; icon: "return" | "automation" | "control" }>;
    strip: string[];
    cta: string;
  };
  journey: {
    title: string;
    steps: Array<{ number: string; title: string; text: string }>;
  };
  about: {
    label: string;
    title: string;
    paragraphs: string[];
    proof: Array<{ title: string; text: string }>;
    cta: string;
  };
  faq: {
    label: string;
    title: string;
    items: Array<{ q: string; a: string }>;
  };
  form: {
    label: string;
    title: string;
    description: string;
    fields: {
      fullName: string;
      company: string;
      email: string;
      phone: string;
      location: string;
      storeSize: string;
      storeCount: string;
      message: string;
      consent: string;
    };
    options: {
      size: string[];
      count: string[];
    };
    submit: string;
    submitting: string;
    successTitle: string;
    successText: string;
    reassurance: string;
    error: string;
  };
  footer: {
    statement: string;
    copyright: string;
    privacy: string;
    cookies: string;
  };
};

export const content: Record<Locale, SiteContent> = {
  pl: {
    langName: "Polski",
    nav: {
      rvm: "RVM",
      smallStore: "Idealny dla małych sklepów",
      features: "Funkcje i specyfikacja",
      retailers: "Dla detalistów",
      benefits: "Korzyści dla sklepu",
      howItWorks: "Jak działa zwrot",
      about: "O nas",
      faq: "FAQ",
      meeting: "Umów rozmowę",
      menu: "Menu"
    },
    hero: {
      eyebrow: "KOMPAKTOWY RVM DLA MAŁYCH SKLEPÓW",
      title: "Automat kaucyjny, który mieści się w Twoim sklepie.",
      description: "Kompaktowy automat RVM dla małych punktów detalicznych w Polsce. Pomaga klientom zwracać kwalifikujące się opakowania bez angażowania kasy w każdą transakcję.",
      primary: "Umów 30-minutową rozmowę",
      secondary: "Zobacz automat",
      proof: [
        { value: "Do 200", label: "Pojemność wewnętrzna" },
        { value: "QR 360°", label: "Odczyt z różnych kierunków" },
        { value: "Kompaktowy", label: "Dla małych sklepów" },
        { value: "Online", label: "Monitoring urządzenia" }
      ],
      note: "Końcowa konfiguracja i integracje są ustalane dla wybranego operatora systemu kaucyjnego."
    },
    smallRetail: {
      label: "DOPASOWANY DO MAŁEGO HANDLU",
      title: "Zaprojektowany do sklepów, w których każdy metr ma znaczenie.",
      description: "Prosty punkt zwrotu dla sklepów convenience, lokalnych marketów i małych sieci detalicznych.",
      items: [
        { title: "Pasuje do mniejszej przestrzeni", text: "Kompaktowy format pomaga wykorzystać wejście, koniec alejki lub wolny narożnik.", icon: "layout" },
        { title: "Ogranicza obsługę przy kasie", text: "Klient korzysta z urządzenia samodzielnie zamiast angażować pracownika w każdy zwrot.", icon: "checkout" },
        { title: "Pojemność do 200 opakowań", text: "Wewnętrzna pojemność została dopasowana do punktów o mniejszej liczbie zwrotów.", icon: "capacity" },
        { title: "Łatwy monitoring", text: "Sprawdzaj status i poziom zapełnienia, zanim wpłyną na obsługę klientów.", icon: "monitor" }
      ],
      cta: "Omów lokalizację w swoim sklepie"
    },
    rvm: {
      label: "RVM",
      title: "Wszystko, czego potrzebuje mały punkt zwrotu.",
      description: "Pięć kluczowych funkcji. Bez zbędnej złożoności.",
      features: [
        { number: "01", title: "Skaner QR 360°", text: "Kod może zostać odczytany z różnych kierunków bez dokładnego ustawiania opakowania.", icon: "scan" },
        { number: "02", title: "Jedno miejsce zwrotu", text: "Podświetlony otwór pomaga klientowi szybko zrozumieć, gdzie umieścić opakowanie.", icon: "inlet" },
        { number: "03", title: "Wskazówki na ekranie", text: "Interfejs prowadzi użytkownika od rozpoczęcia do zakończenia zwrotu.", icon: "screen" },
        { number: "04", title: "Natychmiastowy kupon nagrody", subtext: "Drukowany od razu po zakończeniu zwrotu", text: "Klient otrzymuje wydrukowany kupon do wykorzystania przy kasie lub w aplikacji.", icon: "voucher" },
        { number: "05", title: "Połączony monitoring", text: "Sprawdzaj stan urządzenia, aktywność i poziom zapełnienia zdalnie.", icon: "monitor" }
      ],
      specsTitle: "Potwierdzone informacje o produkcie",
      specs: [
        { label: "Zastosowanie", value: "Małe sklepy detaliczne" },
        { label: "Pojemność", value: "Do 200 opakowań" },
        { label: "Skanowanie", value: "Skaner QR 360°" },
        { label: "Obsługa klienta", value: "Interfejs dotykowy" },
        { label: "Status urządzenia", value: "Monitoring online" },
        { label: "Integracja", value: "Ustalana ze sklepem i operatorem" }
      ],
      cta: "Zobacz RVM podczas prezentacji",
      disclaimer: "Wymiary, zakres opakowań, sposób rozliczenia i wymagania instalacyjne zostaną potwierdzone dla konkretnego wdrożenia w Polsce."
    },
    retailers: {
      label: "DLA DETALISTÓW",
      title: "Zwroty mają pomagać klientom, nie komplikować pracy sklepu.",
      description: "Wygodny punkt zwrotu może wspierać codzienną relację z klientem i ograniczać ręczną obsługę opakowań.",
      benefits: [
        { title: "Zatrzymaj klientów blisko sklepu", text: "Lokalny punkt zwrotu daje klientom dodatkowy powód, aby wrócić do Twojego sklepu.", icon: "return" },
        { title: "Mniej ręcznej obsługi", text: "Automat ogranicza potrzebę przyjmowania każdego opakowania bezpośrednio przy kasie.", icon: "automation" },
        { title: "Więcej kontroli", text: "Status i poziom zapełnienia pomagają reagować, zanim zwroty zostaną przerwane.", icon: "control" }
      ],
      strip: ["Dla jednego sklepu", "Dla małych sieci", "Planowanie integracji", "Monitoring urządzenia"],
      cta: "Zaplanuj punkt zwrotu"
    },
    journey: {
      title: "Trzy kroki dla klienta.",
      steps: [
        { number: "01", title: "Zeskanuj", text: "Skaner QR 360° odczytuje kod opakowania." },
        { number: "02", title: "Włóż", text: "Klient umieszcza opakowanie w urządzeniu." },
        { number: "03", title: "Zakończ", text: "Zwrot kończy się zgodnie z procesem sklepu i operatora." }
      ]
    },
    about: {
      label: "O NAS",
      title: "Technologia stojąca za zwrotem.",
      paragraphs: [
        "Retearn jest częścią Recykal i rozwija połączone rozwiązania do zbiórki, identyfikacji i odzysku materiałów.",
        "Dla polskiego handlu koncentrujemy się na kompaktowym RVM dopasowanym do potrzeb małego sklepu i wymagań wybranego operatora."
      ],
      proof: [
        { title: "Część Recykal", text: "Doświadczenie w technologii gospodarki obiegu zamkniętego." },
        { title: "Połączona technologia", text: "Urządzenia, dane i monitoring w jednym systemie." },
        { title: "Elastyczna konfiguracja", text: "Dopasowanie do sklepu i ekosystemu operatora." }
      ],
      cta: "Poznaj Retearn podczas rozmowy"
    },
    faq: {
      label: "FAQ",
      title: "Najczęstsze pytania detalistów",
      items: [
        { q: "Jaka jest pojemność urządzenia?", a: "Urządzenie mieści do 200 opakowań. Jest to pojemność wewnętrzna, a nie dzienny limit zwrotów." },
        { q: "Jak działa skaner QR 360°?", a: "Skaner odczytuje kod z różnych kierunków, dzięki czemu klient nie musi ustawiać opakowania względem jednego czytnika." },
        { q: "Czy RVM jest przeznaczony dla małych sklepów?", a: "Tak. Urządzenie jest projektowane przede wszystkim dla małych sklepów i punktów o mniejszej liczbie zwrotów." },
        { q: "Czy automat jest certyfikowany dla Polski?", a: "Końcowa konfiguracja, integracja i wymagania zgodności zostaną potwierdzone dla konkretnego operatora i wdrożenia." },
        { q: "Czy możemy zacząć od jednego sklepu?", a: "Tak. Pierwsza rozmowa może dotyczyć jednego sklepu lub ograniczonego pilota." }
      ]
    },
    form: {
      label: "UMÓW ROZMOWĘ",
      title: "Sprawdźmy, czy RVM pasuje do Twojego sklepu.",
      description: "30-minutowa rozmowa o przestrzeni, przewidywanej liczbie zwrotów i możliwym sposobie wdrożenia.",
      fields: {
        fullName: "Imię i nazwisko",
        company: "Nazwa sklepu / firmy",
        email: "Służbowy adres e-mail",
        phone: "Numer telefonu",
        location: "Miasto lub kod pocztowy",
        storeSize: "Powierzchnia sklepu",
        storeCount: "Liczba sklepów",
        message: "Wiadomość",
        consent: "Zgadzam się na kontakt w sprawie zapytania i zapoznałem(-am) się z polityką prywatności."
      },
      options: {
        size: ["Poniżej 100 m²", "100–199 m²", "200 m² lub więcej"],
        count: ["1", "2–5", "6–20", "Ponad 20"]
      },
      submit: "Wybierz termin rozmowy",
      submitting: "Wysyłanie…",
      successTitle: "Dziękujemy. Wybierz termin.",
      successText: "Twoje dane zostały zapisane. Teraz wybierz dogodny termin rozmowy.",
      reassurance: "Rozmowa będzie dotyczyła Twojego sklepu — bez ogólnej prezentacji sprzedażowej.",
      error: "Nie udało się wysłać formularza. Spróbuj ponownie."
    },
    footer: {
      statement: "Kompaktowe automaty kaucyjne i połączona technologia dla małych sklepów detalicznych.",
      copyright: "© Retearn / Recykal. Wszelkie prawa zastrzeżone.",
      privacy: "Polityka prywatności",
      cookies: "Polityka cookies"
    }
  },
  en: {
    langName: "English",
    nav: {
      rvm: "RVM",
      smallStore: "Perfect for Small Stores",
      features: "Features & Specifications",
      retailers: "For Retailers",
      benefits: "Retailer Benefits",
      howItWorks: "How Returns Work",
      about: "About Us",
      faq: "FAQ",
      meeting: "Book a Meeting",
      menu: "Menu"
    },
    hero: {
      eyebrow: "COMPACT RVM FOR SMALL RETAILERS",
      title: "A return machine that fits your store.",
      description: "A compact RVM for small retail locations in Poland. It helps customers return eligible containers without involving the checkout in every transaction.",
      primary: "Book a 30-minute meeting",
      secondary: "Explore the RVM",
      proof: [
        { value: "Up to 200", label: "Internal capacity" },
        { value: "360° QR", label: "Multi-directional scanning" },
        { value: "Compact", label: "Made for small stores" },
        { value: "Online", label: "Connected monitoring" }
      ],
      note: "Final configuration and integrations are defined for the selected DRS operator."
    },
    smallRetail: {
      label: "MADE FOR SMALL RETAIL",
      title: "Designed for stores where every square metre matters.",
      description: "A practical return point for convenience stores, local markets and small retail chains.",
      items: [
        { title: "Fits smaller retail spaces", text: "A compact format for entrances, aisle ends and underused corners.", icon: "layout" },
        { title: "Reduces checkout handling", text: "Customers use the machine independently instead of involving staff in every return.", icon: "checkout" },
        { title: "Capacity up to 200 containers", text: "Internal capacity sized for lower-volume retail locations.", icon: "capacity" },
        { title: "Easy monitoring", text: "Check status and capacity before they affect customer returns.", icon: "monitor" }
      ],
      cta: "Discuss your store layout"
    },
    rvm: {
      label: "RVM",
      title: "Everything a small return point needs.",
      description: "Five essential capabilities. No unnecessary complexity.",
      features: [
        { number: "01", title: "360° QR scanner", text: "Read codes from different directions without carefully aligning the container.", icon: "scan" },
        { number: "02", title: "One clear return inlet", text: "The illuminated opening makes it clear where the customer should place the container.", icon: "inlet" },
        { number: "03", title: "On-screen guidance", text: "The interface guides customers from starting to completing the return.", icon: "screen" },
        { number: "04", title: "Instant reward voucher", subtext: "Printed the moment the return completes", text: "Customers receive a printed voucher to redeem at checkout or in the app.", icon: "voucher" },
        { number: "05", title: "Connected monitoring", text: "View machine status, activity and capacity remotely.", icon: "monitor" }
      ],
      specsTitle: "Confirmed product information",
      specs: [
        { label: "Recommended use", value: "Small retail stores" },
        { label: "Internal capacity", value: "Up to 200 containers" },
        { label: "Scanning", value: "360° QR scanner" },
        { label: "Customer guidance", value: "Touchscreen interface" },
        { label: "Device status", value: "Connected monitoring" },
        { label: "Integration", value: "Defined with the retailer and operator" }
      ],
      cta: "See the RVM in a live demo",
      disclaimer: "Dimensions, eligible containers, refund flow and installation requirements will be confirmed for the specific Polish deployment."
    },
    retailers: {
      label: "FOR RETAILERS",
      title: "Returns should help customers—not complicate store operations.",
      description: "A convenient return point can support everyday customer relationships while reducing manual container handling.",
      benefits: [
        { title: "Keep customers close to your store", text: "A local return point gives customers another reason to come back.", icon: "return" },
        { title: "Less manual handling", text: "The machine reduces the need to process every container directly at checkout.", icon: "automation" },
        { title: "Greater control", text: "Status and capacity monitoring help you respond before returns are interrupted.", icon: "control" }
      ],
      strip: ["For one store", "For small retail chains", "Integration planning", "Machine monitoring"],
      cta: "Plan your return point"
    },
    journey: {
      title: "Three steps for the customer.",
      steps: [
        { number: "01", title: "Scan", text: "The 360° QR scanner reads the container code." },
        { number: "02", title: "Insert", text: "The customer places the container into the machine." },
        { number: "03", title: "Complete", text: "The return is completed according to the retailer and operator workflow." }
      ]
    },
    about: {
      label: "ABOUT US",
      title: "The technology behind every return.",
      paragraphs: [
        "Retearn is part of Recykal and develops connected solutions for material collection, identification and recovery.",
        "For Polish retail, we focus on a compact RVM configured around the needs of small stores and the selected DRS operator."
      ],
      proof: [
        { title: "Part of Recykal", text: "Experience in circular-economy technology." },
        { title: "Connected technology", text: "Devices, data and monitoring in one system." },
        { title: "Flexible configuration", text: "Adapted to the retailer and operator ecosystem." }
      ],
      cta: "Meet Retearn in a call"
    },
    faq: {
      label: "FAQ",
      title: "Questions small retailers ask",
      items: [
        { q: "What is the machine capacity?", a: "The machine holds up to 200 containers. This is its internal capacity, not a daily return limit." },
        { q: "How does the 360° QR scanner work?", a: "The scanner reads the code from different directions, so customers do not need to align the container with one reader." },
        { q: "Is the RVM designed for small stores?", a: "Yes. It is primarily designed for small retail stores and lower-volume return locations." },
        { q: "Is the machine certified for Poland?", a: "Final configuration, integration and compliance requirements will be confirmed for the selected operator and deployment." },
        { q: "Can we begin with one store?", a: "Yes. The first discussion can focus on a single store or a limited pilot." }
      ]
    },
    form: {
      label: "BOOK A MEETING",
      title: "Let’s see whether the RVM fits your store.",
      description: "A focused 30-minute discussion about your space, expected return activity and possible deployment approach.",
      fields: {
        fullName: "Full name",
        company: "Store or company name",
        email: "Work email",
        phone: "Phone number",
        location: "City or postcode",
        storeSize: "Store size",
        storeCount: "Number of stores",
        message: "Message",
        consent: "I agree to be contacted about this enquiry and have read the privacy policy."
      },
      options: {
        size: ["Below 100 m²", "100–199 m²", "200 m² or more"],
        count: ["1", "2–5", "6–20", "More than 20"]
      },
      submit: "Choose a meeting time",
      submitting: "Sending…",
      successTitle: "Thank you. Choose a time.",
      successText: "Your details have been recorded. Now choose a suitable meeting slot.",
      reassurance: "The conversation will focus on your store—not a generic sales presentation.",
      error: "We could not submit the form. Please try again."
    },
    footer: {
      statement: "Compact reverse vending machines and connected technology for small retail stores.",
      copyright: "© Retearn / Recykal. All rights reserved.",
      privacy: "Privacy Policy",
      cookies: "Cookie Policy"
    }
  }
};
