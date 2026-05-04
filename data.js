// Artemis — Enriched Company Data: Luxsuum
const COMPANY_DATA = {
  // ── Identity ──
  name: "Luxsuum",
  legalName: "LUXSUUM S.à r.l.",
  tagline: "Spécialiste du nettoyage de véhicule écologique et manuel",
  status: "active",
  logo: "L",
  sector: "Services automobiles — Nettoyage de véhicules",
  nace: "45.20 — Entretien et réparation de véhicules automobiles",
  founded: "2019",
  employees: "10-19",
  formeJuridique: "Société à responsabilité limitée (S.à r.l.)",
  rcs: "B234567",
  tva: "LU 3456 7890",
  capitalSocial: "12 500 €",
  gerant: "M. Silva Pereira",
  siegeSocial: "2, rue du Commerce, L-1234 Luxembourg",
  objetSocial: "Nettoyage, lavage et entretien de véhicules automobiles, vente de produits d'entretien",

  // ── Scores ──
  scores: { completeness: 78, digitalPresence: 65, reputation: 82 },

  // ── Artemis Certification ──
  certification: {
    level: "silver", // none | bronze | silver | gold | platinum
    score: 72,
    verifiedAt: "2026-04-29",
    criteria: [
      { name: "Identité juridique vérifiée", status: "pass", source: "RCS Luxembourg", detail: "RCS B234567 confirmé" },
      { name: "Adresse physique confirmée", status: "pass", source: "Google Maps + RCS", detail: "2 emplacements vérifiés" },
      { name: "Site web actif et SSL valide", status: "pass", source: "Scan Artemis", detail: "luxsuum.lu — SSL valide jusqu'au 15/08/2026" },
      { name: "Cohérence NAP (Nom, Adresse, Tél)", status: "warning", source: "Cross-source", detail: "Numéro de téléphone différent sur Editus vs site web" },
      { name: "Google Business Profile vérifié", status: "pass", source: "Google", detail: "Profil vérifié par Google" },
      { name: "Avis clients authentiques (>10)", status: "pass", source: "Google + Editus", detail: "79 avis au total" },
      { name: "Mentions légales conformes", status: "pass", source: "Site web", detail: "CGV, mentions légales, politique données présentes" },
      { name: "Données financières disponibles", status: "fail", source: "RCS / LBR", detail: "Bilans non publiés ou non accessibles" },
      { name: "Réseaux sociaux actifs", status: "warning", source: "Facebook + Instagram", detail: "Dernière publication > 30 jours" },
      { name: "Schema.org / données structurées", status: "fail", source: "Scan Artemis", detail: "Aucun balisage Schema.org détecté" }
    ],
    levels: [
      { id: "none", label: "Non certifié", min: 0, icon: "fas fa-times-circle", color: "#64748b" },
      { id: "bronze", label: "Bronze", min: 40, icon: "fas fa-certificate", color: "#cd7f32" },
      { id: "silver", label: "Silver", min: 60, icon: "fas fa-certificate", color: "#94a3b8" },
      { id: "gold", label: "Gold", min: 80, icon: "fas fa-certificate", color: "#fbbf24" },
      { id: "platinum", label: "Platinum", min: 95, icon: "fas fa-gem", color: "#818cf8" }
    ]
  },

  // ── SEO Audit ──
  seo: {
    globalScore: 42,
    categories: [
      { name: "Technique", score: 55, icon: "fas fa-cog", items: [
        { label: "SSL / HTTPS", value: true, status: "pass" },
        { label: "Responsive Mobile", value: true, status: "pass" },
        { label: "Temps de chargement", value: "3.2s", status: "warning", detail: "Objectif < 2.5s" },
        { label: "Core Web Vitals", value: "Échoue", status: "fail", detail: "LCP: 4.1s, CLS: 0.18" },
        { label: "Sitemap XML", value: "Absent", status: "fail" },
        { label: "Robots.txt", value: "Présent", status: "pass" },
        { label: "Canonical URLs", value: "Non défini", status: "fail" },
        { label: "Compression GZIP", value: true, status: "pass" }
      ]},
      { name: "Contenu", score: 35, icon: "fas fa-file-alt", items: [
        { label: "Balise Title optimisée", value: "Partiel", status: "warning", detail: "Trop long (72 caractères)" },
        { label: "Meta Description", value: "Présente", status: "pass" },
        { label: "Structure Hn", value: "Incorrect", status: "fail", detail: "Multiple H1, pas de H2" },
        { label: "Contenu textuel", value: "Faible", status: "fail", detail: "< 300 mots sur la page d'accueil" },
        { label: "Images Alt Text", value: "Manquant", status: "fail", detail: "0/8 images avec alt text" },
        { label: "Maillage interne", value: "Basique", status: "warning", detail: "6 liens internes seulement" },
        { label: "Blog / Contenu frais", value: "Absent", status: "fail" }
      ]},
      { name: "Autorité", score: 28, icon: "fas fa-link", items: [
        { label: "Domain Authority", value: "12/100", status: "fail" },
        { label: "Backlinks", value: "23", status: "warning", detail: "Faible volume" },
        { label: "Domaines référents", value: "8", status: "fail" },
        { label: "Trust Flow", value: "9", status: "fail" },
        { label: "Citation Flow", value: "15", status: "warning" }
      ]},
      { name: "Données structurées", score: 10, icon: "fas fa-code", items: [
        { label: "Schema.org LocalBusiness", value: "Absent", status: "fail" },
        { label: "Schema.org Organization", value: "Absent", status: "fail" },
        { label: "Open Graph", value: "Partiel", status: "warning", detail: "og:title et og:description présents" },
        { label: "Twitter Cards", value: "Absent", status: "fail" }
      ]}
    ]
  },

  // ── GEO / Local SEO ──
  geo: {
    globalScore: 58,
    categories: [
      { name: "Google Business Profile", score: 75, icon: "fab fa-google", items: [
        { label: "Profil revendiqué", value: true, status: "pass" },
        { label: "Catégorie principale", value: "Car Wash", status: "pass" },
        { label: "Description complète", value: true, status: "pass" },
        { label: "Photos (>10)", value: "34 photos", status: "pass" },
        { label: "Horaires à jour", value: true, status: "pass" },
        { label: "Posts récents", value: "Aucun post", status: "fail" },
        { label: "Q&A actif", value: "2 questions", status: "warning" },
        { label: "Services listés", value: "Partiel", status: "warning" }
      ]},
      { name: "Citations & Annuaires", score: 52, icon: "fas fa-list-alt", items: [
        { label: "Editus.lu", value: "Présent", status: "pass" },
        { label: "Yellow.lu", value: "Absent", status: "fail" },
        { label: "Yelp Luxembourg", value: "Absent", status: "fail" },
        { label: "TripAdvisor", value: "N/A", status: "neutral" },
        { label: "Waze", value: "Présent", status: "pass" },
        { label: "Apple Maps", value: "Absent", status: "fail" },
        { label: "Bing Places", value: "Absent", status: "fail" },
        { label: "Pages Jaunes / PJ.lu", value: "Absent", status: "fail" }
      ]},
      { name: "Cohérence NAP", score: 65, icon: "fas fa-map-marker-alt", items: [
        { label: "Nom identique partout", value: "Oui", status: "pass" },
        { label: "Adresse cohérente", value: "Partiel", status: "warning", detail: "Format d'adresse différent sur Editus" },
        { label: "Téléphone cohérent", value: "Non", status: "fail", detail: "+352 621 vs +352 26 sur Editus" },
        { label: "Site web cohérent", value: "Oui", status: "pass" }
      ]},
      { name: "Avis & Réputation locale", score: 70, icon: "fas fa-star", items: [
        { label: "Volume d'avis Google", value: "67 avis", status: "pass" },
        { label: "Note moyenne Google", value: "4.2/5", status: "pass" },
        { label: "Taux de réponse aux avis", value: "72%", status: "warning", detail: "Objectif > 90%" },
        { label: "Avis Editus", value: "12 avis", status: "warning" },
        { label: "Avis récents (<3 mois)", value: "8 avis", status: "pass" },
        { label: "Sentiment global", value: "Positif (78%)", status: "pass" }
      ]}
    ]
  },

  // ── Contact ──
  contact: {
    website: "https://www.luxsuum.lu",
    email: "info@luxsuum.lu",
    phone: "+352 621 XXX XXX",
    phoneAlt: "+352 26 XX XX XX"
  },

  locations: [
    { name: "Luxsuum Kirchberg", address: "Centre Commercial Auchan, 5 rue Alphonse Weicker, L-2721 Luxembourg-Kirchberg", lat: 49.6341, lng: 6.1568, type: "Point de lavage", isPrimary: true },
    { name: "Luxsuum Cloche d'Or", address: "Centre Commercial Cloche d'Or, 2 rue Robert Stumper, L-2557 Luxembourg-Gasperich", lat: 49.5833, lng: 6.1196, type: "Point de lavage", isPrimary: false }
  ],

  hours: {
    lundi: "08:00 – 20:00", mardi: "08:00 – 20:00", mercredi: "08:00 – 20:00",
    jeudi: "08:00 – 20:00", vendredi: "08:00 – 20:00", samedi: "08:00 – 20:00", dimanche: "Fermé"
  },

  services: [
    { name: "Lavage extérieur", detail: "Lavage, brillance, protection", price: "À partir de 35€" },
    { name: "Lavage intérieur", detail: "Habitacle, sol, vitres", price: "À partir de 45€" },
    { name: "Nettoyage sièges cuir", detail: "Traitement et entretien cuir", price: "À partir de 60€" },
    { name: "Nettoyage sièges tissu", detail: "Shampooing et extraction", price: "À partir de 50€" },
    { name: "Polish carrosserie", detail: "Correction micro-rayures", price: "Sur devis" },
    { name: "Entretien Oldtimer", detail: "Nettoyage carrosserie classique", price: "Sur devis" },
    { name: "Formule VIP", detail: "Rénovation complète int./ext.", price: "À partir de 180€" },
    { name: "Service pick-up", detail: "Collecte à domicile / bureau", price: "Gratuit" },
    { name: "Abonnement mensuel", detail: "Formules régulières", price: "À partir de 99€/mois" }
  ],

  // ── WHOIS ──
  whois: {
    domain: "luxsuum.lu", registrar: "Restena Foundation", created: "2019-03-12",
    expires: "2026-03-12", nameservers: ["ns1.wixdns.net", "ns2.wixdns.net"], dnssec: "Non signé"
  },

  // ── Website Tech ──
  website: {
    platform: "Wix", ssl: true, sslExpiry: "2026-08-15", responsive: true,
    languages: ["Français"], loadTime: "3.2s", mobileScore: 58, desktopScore: 72,
    technologies: ["Wix", "React", "Node.js", "Cloudflare CDN", "Google Analytics", "Google Tag Manager", "Facebook Pixel", "Wix Bookings"],
    pages: ["Accueil", "À propos", "Nettoyage intérieur/extérieur", "Formules abonnement", "Prendre RDV", "Contact", "Mentions légales", "CGV", "Politique données"],
    seoMeta: {
      title: "Luxsuum | Nettoyage de véhicule - Car Wash Luxembourg",
      metaDescription: "Luxsuum, le spécialiste du nettoyage de véhicule écologique et manuel.",
      h1: "Luxsuum, le spécialiste du nettoyage de véhicule écologique et manuel",
      robots: "index, follow", sitemap: false, schemaOrg: false
    }
  },

  // ── Social Media ──
  social: [
    { platform: "Facebook", handle: "@luxsuum", url: "https://facebook.com/luxsuum", followers: 1240, posts: 89, lastPost: "2026-03-02", engagement: "1.8%", icon: "fab fa-facebook-f", color: "#1877f2" },
    { platform: "Instagram", handle: "@luxsuum.lu", url: "https://instagram.com/luxsuum.lu", followers: 876, posts: 145, lastPost: "2026-02-18", engagement: "2.4%", icon: "fab fa-instagram", color: "#e4405f" },
    { platform: "Google Business", handle: "Luxsuum", url: "#", rating: 4.2, reviews: 67, icon: "fab fa-google", color: "#4285f4" },
    { platform: "Editus.lu", handle: "Luxsuum", url: "https://editus.lu", rating: 3.8, reviews: 12, icon: "fas fa-building", color: "#fb923c" },
    { platform: "LinkedIn", handle: "—", url: "#", followers: 0, status: "absent", icon: "fab fa-linkedin-in", color: "#0a66c2" },
    { platform: "TikTok", handle: "—", url: "#", followers: 0, status: "absent", icon: "fab fa-tiktok", color: "#010101" }
  ],

  // ── Google Business ──
  googleBusiness: {
    rating: 4.2, totalReviews: 67, category: "Service de lavage de voitures",
    secondaryCategories: ["Nettoyage auto intérieur", "Service de détailing automobile"],
    verified: true, photos: 34, responseRate: "72%", avgResponseTime: "2 jours",
    ratingDistribution: { 5: 32, 4: 18, 3: 8, 2: 5, 1: 4 },
    attributes: ["Accepte les cartes", "Parking gratuit", "Accès handicapé", "Wi-Fi", "Paiement mobile"]
  },

  // ── Reviews ──
  reviews: [
    { author: "Marc D.", rating: 5, date: "2026-03-15", text: "Excellent service ! Ma voiture était comme neuve après la formule VIP. Le pick-up à domicile est vraiment pratique pour ceux qui travaillent au Kirchberg.", source: "Google", helpful: 4 },
    { author: "Sophie L.", rating: 4, date: "2026-02-28", text: "Bon travail dans l'ensemble. Quelques coins oubliés à l'intérieur mais l'extérieur était impeccable. Prix correct pour la qualité.", source: "Google", helpful: 2 },
    { author: "Jean-Pierre K.", rating: 3, date: "2026-01-10", text: "Résultat moyen pour le prix demandé. Les sièges en tissu n'étaient pas parfaitement nettoyés. Le temps d'attente était aussi assez long.", source: "Editus", helpful: 1 },
    { author: "Nathalie R.", rating: 5, date: "2025-12-20", text: "Top ! Super pratique pendant le shopping à la Cloche d'Or. En 2h c'était fait, résultat impeccable. Je recommande la formule VIP.", source: "Google", helpful: 7 },
    { author: "Thomas W.", rating: 2, date: "2025-11-05", text: "Déçu par la prestation. Le tarif final était plus élevé que le devis initial. Des traces de produit non essuyées sur le tableau de bord.", source: "Google", helpful: 3 },
    { author: "Julie M.", rating: 5, date: "2025-10-18", text: "Fidèle depuis l'ouverture. Toujours un travail soigné et une équipe agréable. L'abonnement mensuel vaut vraiment le coup !", source: "Google", helpful: 5 }
  ],

  // ── Competitors (enriched) ──
  competitors: [
    {
      name: "Magic Car Wash", location: "Bertrange", domain: "magiccarwash.lu",
      rating: 4.0, reviews: 89, employees: "5-9", founded: "2017",
      services: ["Lavage ext.", "Lavage int.", "Polish"], priceRange: "€€",
      seoScore: 38, geoScore: 62, certLevel: "bronze",
      social: { facebook: 890, instagram: 450 },
      strengths: ["Volume d'avis élevé", "Prix compétitifs"],
      weaknesses: ["Pas de service premium", "Site web basique"]
    },
    {
      name: "Wash&Go Luxembourg", location: "Strassen", domain: "washgo.lu",
      rating: 3.9, reviews: 145, employees: "20-49", founded: "2015",
      services: ["Lavage auto", "Lavage rouleaux", "Self-service", "Aspirateurs"], priceRange: "€",
      seoScore: 52, geoScore: 71, certLevel: "silver",
      social: { facebook: 2100, instagram: 980 },
      strengths: ["Grande capacité", "Self-service 24/7", "LinkedIn actif"],
      weaknesses: ["Lavage automatique uniquement", "Avis mitigés"]
    },
    {
      name: "Autopflege Lux", location: "Esch-sur-Alzette", domain: "autopflegelux.lu",
      rating: 4.5, reviews: 52, employees: "1-4", founded: "2021",
      services: ["Detailing", "Céramique", "PPF", "Polish"], priceRange: "€€€",
      seoScore: 61, geoScore: 55, certLevel: "gold",
      social: { facebook: 620, instagram: 1850 },
      strengths: ["Spécialiste detailing", "Forte présence Instagram", "Note élevée"],
      weaknesses: ["Petite structure", "Un seul emplacement", "Peu d'avis"]
    },
    {
      name: "CleanCar Luxembourg", location: "Howald", domain: "cleancar.lu",
      rating: 3.7, reviews: 210, employees: "20-49", founded: "2012",
      services: ["Lavage ext.", "Lavage int.", "Self-service", "Abonnements"], priceRange: "€",
      seoScore: 45, geoScore: 78, certLevel: "silver",
      social: { facebook: 3200, instagram: 750 },
      strengths: ["Historique solide", "Beaucoup d'avis", "Multi-sites"],
      weaknesses: ["Note moyenne basse", "Nombreux avis négatifs"]
    }
  ],

  // ── Timeline ──
  timeline: [
    { date: "2019-03", title: "Création de LUXSUUM S.à r.l.", desc: "Immatriculation au RCS Luxembourg — B234567", icon: "fas fa-rocket" },
    { date: "2019-06", title: "Ouverture Kirchberg", desc: "Premier poste de lavage — Centre Commercial Auchan Kirchberg", icon: "fas fa-store" },
    { date: "2020-03", title: "Pandémie COVID-19", desc: "Fermeture temporaire, reprise avec protocole sanitaire", icon: "fas fa-virus" },
    { date: "2020-11", title: "Expansion Cloche d'Or", desc: "Ouverture du 2ème poste — Centre Commercial Cloche d'Or", icon: "fas fa-expand-arrows-alt" },
    { date: "2021-04", title: "Service pick-up lancé", desc: "Collecte et livraison à domicile / bureau", icon: "fas fa-truck" },
    { date: "2023-09", title: "Formules d'abonnement", desc: "Lancement des packages mensuels pour fidéliser la clientèle", icon: "fas fa-redo" },
    { date: "2025-06", title: "Repositionnement écologique", desc: "Mise en avant des produits biodégradables, réduction eau", icon: "fas fa-leaf" }
  ],

  // ── Sources ──
  sources: [
    { name: "Site web officiel", url: "luxsuum.lu", type: "Web Scraping", status: "ok", lastScan: "2026-04-29", dataPoints: 32, icon: "fas fa-globe", dataRecovered: ["Meta tags", "Mentions légales", "Contenu textuel", "Images"], crawlabilityScore: 85, crawlabilityNotes: "Structure HTML standard (Wix), pas de blocage agressif détecté." },
    { name: "Google Business Profile", url: "google.com/maps", type: "API / Scraping", status: "ok", lastScan: "2026-04-29", dataPoints: 22, icon: "fab fa-google", dataRecovered: ["Note moyenne", "Avis clients", "Horaires", "Photos", "Catégorie"], crawlabilityScore: 40, crawlabilityNotes: "Scraping difficile (captchas, changements DOM), préférable via API payante." },
    { name: "WHOIS luxsuum.lu", url: "whois.lu", type: "Base de données", status: "ok", lastScan: "2026-04-29", dataPoints: 8, icon: "fas fa-server", dataRecovered: ["Registrar", "Date de création", "Date d'expiration", "Serveurs DNS"], crawlabilityScore: 95, crawlabilityNotes: "Accès très facile via protocole WHOIS ou API Restena." },
    { name: "RCS Luxembourg", url: "lbr.lu", type: "Registre public", status: "partial", lastScan: "2026-04-29", dataPoints: 7, icon: "fas fa-gavel", dataRecovered: ["N° RCS", "Raison sociale", "Siège social", "Gérant"], crawlabilityScore: 20, crawlabilityNotes: "Forte protection anti-bot, structure PDF complexe pour l'extraction." },
    { name: "Editus.lu", url: "editus.lu", type: "Annuaire", status: "ok", lastScan: "2026-04-29", dataPoints: 14, icon: "fas fa-book", dataRecovered: ["Adresse", "Téléphone", "Secteur", "Avis locaux"], crawlabilityScore: 75, crawlabilityNotes: "Structure HTML sémantique, mais rate limiting potentiel sur les IP." },
    { name: "Facebook", url: "facebook.com/luxsuum", type: "Réseau social", status: "ok", lastScan: "2026-04-29", dataPoints: 10, icon: "fab fa-facebook", dataRecovered: ["Abonnés", "Posts récents", "Contact"], crawlabilityScore: 30, crawlabilityNotes: "Scraping web bloqué sans compte, nécessite l'API Graph restreinte." },
    { name: "Instagram", url: "instagram.com/luxsuum.lu", type: "Réseau social", status: "ok", lastScan: "2026-04-29", dataPoints: 8, icon: "fab fa-instagram", dataRecovered: ["Followers", "Engagement", "Hashtags"], crawlabilityScore: 25, crawlabilityNotes: "Forte protection, redirection login systématique, API stricte." },
    { name: "Cloche d'Or Shopping", url: "clochedor-shopping.lu", type: "Web Scraping", status: "ok", lastScan: "2026-04-29", dataPoints: 4, icon: "fas fa-shopping-bag", dataRecovered: ["Emplacement", "Horaires", "Description courte"], crawlabilityScore: 90, crawlabilityNotes: "Site vitrine simple, extraction directe possible sans blocage." },
    { name: "Recommend.lu", url: "recommend.lu", type: "Annuaire / Avis", status: "ok", lastScan: "2026-04-29", dataPoints: 6, icon: "fas fa-thumbs-up", dataRecovered: ["Profil existant", "Recommandations"], crawlabilityScore: 80, crawlabilityNotes: "DOM facilement parsable, pas de mesures anti-scraping identifiées." },
    { name: "PageSpeed Insights", url: "pagespeed.web.dev", type: "API", status: "ok", lastScan: "2026-04-29", dataPoints: 12, icon: "fas fa-tachometer-alt", dataRecovered: ["Score SEO", "Chargement", "Core Web Vitals"], crawlabilityScore: 100, crawlabilityNotes: "API Google gratuite et documentée, intégration directe et fiable." }
  ]
};
