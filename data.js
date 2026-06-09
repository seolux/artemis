// moon — Enriched Company Data: Luxsuum
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

  // ── moon Certification ──
  certification: {
    level: "silver", // none | bronze | silver | gold | platinum
    score: 72,
    verifiedAt: "2026-04-29",
    criteria: [
      { name: "Identité juridique vérifiée", status: "pass", source: "RCS Luxembourg", detail: "RCS B234567 confirmé" },
      { name: "Adresse physique confirmée", status: "pass", source: "Google Maps + RCS", detail: "2 emplacements vérifiés" },
      { name: "Site web actif et SSL valide", status: "pass", source: "Scan moon", detail: "luxsuum.lu — SSL valide jusqu'au 15/08/2026" },
      { name: "Cohérence NAP (Nom, Adresse, Tél)", status: "warning", source: "Cross-source", detail: "Numéro de téléphone différent sur Editus vs site web" },
      { name: "Google Business Profile vérifié", status: "pass", source: "Google", detail: "Profil vérifié par Google" },
      { name: "Avis clients authentiques (>10)", status: "pass", source: "Google + Editus", detail: "79 avis au total" },
      { name: "Mentions légales conformes", status: "pass", source: "Site web", detail: "CGV, mentions légales, politique données présentes" },
      { name: "Données financières disponibles", status: "fail", source: "RCS / LBR", detail: "Bilans non publiés ou non accessibles" },
      { name: "Réseaux sociaux actifs", status: "warning", source: "Facebook + Instagram", detail: "Dernière publication > 30 jours" },
      { name: "Schema.org / données structurées", status: "fail", source: "Scan moon", detail: "Aucun balisage Schema.org détecté" }
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
    {
      name: "Site web officiel",
      url: "luxsuum.lu",
      type: "Web Scraping (Headless Browser)",
      status: "ok",
      lastScan: "2026-04-29",
      dataPoints: 47,
      icon: "fas fa-globe",
      dataRecovered: [
        "Title tag", "Meta description", "Meta keywords", "Canonical URL", "Robots directives",
        "Structure Hn (H1–H6)", "Contenu textuel (toutes pages)", "Liens internes", "Liens externes",
        "Images (URLs + alt text)", "Favicon", "Open Graph tags (og:title, og:image…)",
        "Mentions légales", "CGV", "Politique de données", "Adresses physiques",
        "Numéros de téléphone", "Email de contact", "Horaires d'ouverture",
        "Liste des services + tarifs", "Formulaire de réservation (structure)",
        "Liens réseaux sociaux (footer)", "Langues disponibles", "Hreflang tags",
        "Schema.org (détection)", "Sitemap.xml (détection)", "Robots.txt (contenu)"
      ],
      crawlabilityScore: 72,
      crawlabilityNotes: "Site Wix (SPA React) nécessitant un headless browser (Playwright/Puppeteer) pour le rendu JS. Le contenu est chargé dynamiquement côté client. Pas de robots.txt bloquant, pas de CAPTCHA. Les images sont servies depuis static.wixstatic.com. Sitemap.xml absent. Extraction possible mais lente (3-5s/page pour le rendu JS complet)."
    },
    {
      name: "Google Business Profile",
      url: "google.com/maps",
      type: "API Places + Scraping",
      status: "ok",
      lastScan: "2026-04-29",
      dataPoints: 38,
      icon: "fab fa-google",
      dataRecovered: [
        "Nom commercial", "Adresse complète (rue, CP, ville, pays)", "Coordonnées GPS (lat/lng)",
        "Numéro de téléphone", "Site web", "Catégorie principale", "Catégories secondaires",
        "Note moyenne (rating)", "Nombre total d'avis", "Distribution des notes (1–5★)",
        "Texte complet des avis", "Auteur + date de chaque avis", "Réponses du propriétaire",
        "Horaires d'ouverture (par jour)", "Horaires spéciaux / jours fériés",
        "Photos (URLs haute résolution)", "Nombre de photos",
        "Statut de vérification (Claimed)", "Attributs (paiement, accessibilité, Wi-Fi…)",
        "Popular Times (affluence par heure)", "Temps d'attente estimé",
        "URL Google Maps (CID)", "Place ID"
      ],
      crawlabilityScore: 35,
      crawlabilityNotes: "Scraping direct fortement protégé : CAPTCHAs, rate limiting IP, DOM obfusqué et changeant fréquemment. L'API Places (New) de Google fournit la plupart des données mais est payante (~$17/1000 requêtes Detail). L'API Q&A a été dépréciée en novembre 2025. Les avis complets nécessitent soit l'API soit un service tiers (Outscraper, SerpAPI). Score bas car dépendance forte à l'API payante."
    },
    {
      name: "WHOIS luxsuum.lu",
      url: "dns.lu",
      type: "Protocole WHOIS / API",
      status: "ok",
      lastScan: "2026-04-29",
      dataPoints: 12,
      icon: "fas fa-server",
      dataRecovered: [
        "Nom de domaine", "Statut du domaine (actif/inactif)", "Type de registrant (personne morale)",
        "Nom du registrant (personne morale)", "Adresse du registrant (pays)",
        "Registrar (bureau d'enregistrement)", "Date de création du domaine",
        "Date de dernière modification", "Date d'expiration",
        "Serveurs DNS (NS1, NS2…)", "Statut DNSSEC (signé/non signé)",
        "Contact technique (masqué RGPD)"
      ],
      crawlabilityScore: 92,
      crawlabilityNotes: "Registre .lu opéré par la Fondation Restena (dns.lu). Accès gratuit via protocole WHOIS (port 43) ou interface web. Données des personnes morales publiques (nom, adresse). Contacts individuels masqués par défaut (conformité RGPD). Demande de divulgation possible via formulaire dns.lu pour cas légitimes. Aucune limitation de débit constatée pour des requêtes raisonnables."
    },
    {
      name: "RCS Luxembourg (LBR)",
      url: "lbr.lu",
      type: "Registre public",
      status: "partial",
      lastScan: "2026-04-29",
      dataPoints: 18,
      icon: "fas fa-gavel",
      dataRecovered: [
        "N° RCS (B234567)", "Raison sociale complète", "Forme juridique (S.à r.l.)",
        "Siège social (adresse)", "Date d'immatriculation", "Statut (active/radiée)",
        "Objet social (description activité)", "Capital social",
        "Gérant(s) / Administrateur(s)", "Associé(s) (si publié)",
        "Publications au RESA (actes constitutifs, modifications)",
        "Comptes annuels (PDF, si déposés)", "Statuts (PDF)",
        "Extrait RCS (payant, certifié)", "Code NACE",
        "N° TVA intracommunautaire", "Date de clôture exercice",
        "Historique des modifications"
      ],
      crawlabilityScore: 15,
      crawlabilityNotes: "Le portail LBR (lbr.lu) est conçu pour la consultation manuelle uniquement. Forte protection anti-bot (WAF, rate limiting strict, sessions authentifiées). Les documents déposés (statuts, comptes annuels) sont en PDF non-OCR, rendant l'extraction automatique très difficile. La consultation de base est gratuite, mais les extraits certifiés sont payants. Le RBE (Registre des Bénéficiaires Effectifs) n'est plus accessible au public (arrêt CJUE). Scraping automatisé explicitement interdit par les CGU."
    },
    {
      name: "Editus.lu",
      url: "editus.lu",
      type: "Annuaire professionnel",
      status: "ok",
      lastScan: "2026-04-29",
      dataPoints: 21,
      icon: "fas fa-book",
      dataRecovered: [
        "Nom commercial", "Raison sociale", "Adresse complète (formatée)",
        "Numéro(s) de téléphone", "Numéro de fax", "Email de contact",
        "Site web", "Secteur d'activité / catégorie", "Sous-catégories",
        "Description de l'entreprise", "Horaires d'ouverture",
        "Coordonnées GPS", "Avis clients Editus (note + texte)",
        "Nombre d'avis", "Photos de l'établissement",
        "Logo entreprise", "Liens réseaux sociaux",
        "Marques / enseignes associées", "N° TVA",
        "Certifications / labels", "Zone de chalandise"
      ],
      crawlabilityScore: 55,
      crawlabilityNotes: "Structure HTML sémantique et bien organisée (données structurées Schema.org LocalBusiness). Cependant, Editus.lu applique un rate limiting IP, et le scraping automatisé est interdit par les CGU et protégé par le droit européen des bases de données (directive 96/9/CE). Les données professionnelles restent soumises au RGPD. Un partenariat API officiel via Editus/POST Luxembourg est la voie recommandée pour l'accès programmatique."
    },
    {
      name: "Facebook Page",
      url: "facebook.com/luxsuum",
      type: "API Graph (restreinte)",
      status: "ok",
      lastScan: "2026-04-29",
      dataPoints: 16,
      icon: "fab fa-facebook",
      dataRecovered: [
        "Nom de la page", "Catégorie de la page", "Nombre d'abonnés (followers)",
        "Nombre de likes de la page", "Photo de profil (URL)", "Photo de couverture (URL)",
        "Description / À propos", "Adresse (si renseignée)", "Téléphone (si public)",
        "Site web", "Email (si public)", "Horaires d'ouverture",
        "Derniers posts publics (texte, images, date)", "Nombre de réactions/commentaires/partages par post",
        "Évaluations / recommandations", "Date de création de la page"
      ],
      crawlabilityScore: 25,
      crawlabilityNotes: "Scraping web direct bloqué : redirection login systématique, détection d'automatisation (TLS fingerprinting, behavioral analysis). L'API Graph v21.0 reste disponible mais avec des restrictions sévères post-Cambridge Analytica : accès limité aux pages que vous administrez. Les données publiques (nombre d'abonnés, posts publics) sont visibles en navigateur mais difficilement extractibles à grande échelle. Services tiers (Apify, PhantomBuster) offrent des solutions mais avec risque de ban."
    },
    {
      name: "Instagram",
      url: "instagram.com/luxsuum.lu",
      type: "Scraping + API Graph IG",
      status: "partial",
      lastScan: "2026-04-29",
      dataPoints: 14,
      icon: "fab fa-instagram",
      dataRecovered: [
        "Nom d'utilisateur (@luxsuum.lu)", "Nom affiché", "Bio (description)",
        "Lien en bio (URL)", "Nombre de followers", "Nombre d'abonnements (following)",
        "Nombre de publications", "Photo de profil (URL)",
        "Compte vérifié (badge bleu)", "Compte professionnel/créateur",
        "Posts récents (images, captions, dates)", "Nombre de likes par post",
        "Nombre de commentaires par post", "Hashtags utilisés (par post)"
      ],
      crawlabilityScore: 18,
      crawlabilityNotes: "L'API Basic Display a été définitivement supprimée le 4 décembre 2024. Seule l'API Instagram Graph (via Facebook Business) reste disponible, limitée aux comptes professionnels liés. Le scraping web est très protégé : redirection login obligatoire, détection anti-bot avancée (fingerprinting JS), et IP blocking agressif. Les données publiques de profil (bio, followers, posts) sont techniquement visibles mais nécessitent des solutions de contournement fragiles. Score très bas car extraction non fiable."
    },
    {
      name: "Cloche d'Or Shopping",
      url: "clochedor-shopping.lu",
      type: "Web Scraping",
      status: "ok",
      lastScan: "2026-04-29",
      dataPoints: 7,
      icon: "fas fa-shopping-bag",
      dataRecovered: [
        "Nom de la boutique / enseigne", "Emplacement dans le centre (étage, zone)",
        "Horaires d'ouverture du magasin", "Horaires du centre commercial",
        "Description courte de l'activité", "Catégorie commerciale",
        "Coordonnées (téléphone si listé)"
      ],
      crawlabilityScore: 88,
      crawlabilityNotes: "Site vitrine statique avec structure HTML simple et prévisible. Pas de JavaScript lourd, pas de mesures anti-scraping détectées. Données facilement extractibles par un parser HTML basique (BeautifulSoup, Cheerio). Pas de robots.txt restrictif. Les données sont mises à jour manuellement par la gestion du centre, donc fraîcheur variable."
    },
    {
      name: "Recommend.lu",
      url: "recommend.lu",
      type: "Annuaire / Avis",
      status: "ok",
      lastScan: "2026-04-29",
      dataPoints: 9,
      icon: "fas fa-thumbs-up",
      dataRecovered: [
        "Profil entreprise (existant/non)", "Nom commercial", "Catégorie d'activité",
        "Adresse", "Nombre de recommandations", "Texte des recommandations",
        "Note globale", "Auteur des recommandations", "Date des recommandations"
      ],
      crawlabilityScore: 78,
      crawlabilityNotes: "DOM facilement parsable avec une structure HTML classique côté serveur (SSR). Pas de mesures anti-scraping agressives identifiées (pas de CAPTCHA, pas de rate limiting strict). Le robots.txt est permissif. Toutefois, le volume de données est limité pour les petites entreprises. Les données sont publiques mais les CGU du site doivent être vérifiées avant extraction automatisée."
    },
    {
      name: "PageSpeed Insights",
      url: "pagespeed.web.dev",
      type: "API Google (gratuite)",
      status: "ok",
      lastScan: "2026-04-29",
      dataPoints: 24,
      icon: "fas fa-tachometer-alt",
      dataRecovered: [
        "Score Performance (0–100)", "Score Accessibilité", "Score Bonnes Pratiques", "Score SEO",
        "First Contentful Paint (FCP)", "Largest Contentful Paint (LCP)",
        "Cumulative Layout Shift (CLS)", "Total Blocking Time (TBT)",
        "Speed Index", "Time to Interactive (TTI)", "Interaction to Next Paint (INP)",
        "Time to First Byte (TTFB)",
        "Opportunités d'optimisation (liste détaillée)", "Diagnostics (liste détaillée)",
        "Poids total de la page (Ko)", "Nombre de requêtes HTTP",
        "Ressources bloquant le rendu", "Images non optimisées (liste)",
        "JavaScript inutilisé (Ko)", "CSS inutilisé (Ko)",
        "Stratégie Mobile", "Stratégie Desktop",
        "Données terrain CrUX (si disponibles)", "Screenshot du rendu"
      ],
      crawlabilityScore: 98,
      crawlabilityNotes: "API Google officielle, gratuite et parfaitement documentée. Nécessite une clé API (Google Cloud Console). Limite : 25 000 requêtes/jour gratuites (stratégie mobile/desktop comptées séparément). Powered by Lighthouse v13.x. Les données terrain (CrUX) ne sont disponibles que pour les sites à fort trafic — luxsuum.lu n'en dispose probablement pas. Intégration directe via REST API, réponse JSON complète en 10-30s."
    },
    {
      name: "BuiltWith / Wappalyzer",
      url: "builtwith.com",
      type: "API / Extension",
      status: "ok",
      lastScan: "2026-04-29",
      dataPoints: 18,
      icon: "fas fa-layer-group",
      dataRecovered: [
        "CMS / Plateforme (Wix)", "Framework JS (React)", "Serveur web (Cloudflare)",
        "CDN utilisé (Cloudflare CDN)", "Analytics (Google Analytics GA4)",
        "Tag Manager (Google Tag Manager)", "Pixel publicitaire (Facebook Pixel)",
        "Outils de réservation (Wix Bookings)", "Système de paiement (si détecté)",
        "Hébergeur / infrastructure", "Certificat SSL (émetteur, validité)",
        "Fonts web utilisées", "Librairies JavaScript",
        "Widgets / plugins tiers", "Technologie email (provider)",
        "Version du CMS (si exposée)", "Score de dépenses technologiques",
        "Historique des changements technologiques"
      ],
      crawlabilityScore: 90,
      crawlabilityNotes: "BuiltWith : base de données massive, API payante (Enterprise), fournit l'historique des technologies. Wappalyzer : détection temps réel via analyse des headers HTTP, cookies, signatures JS et méta-tags. Extension navigateur gratuite, API payante pour le volume. Détection passive et non intrusive — aucun risque de blocage. Score élevé car les deux outils fonctionnent sans interaction avec le site cible."
    },
    {
      name: "SSL / CT Logs (crt.sh)",
      url: "crt.sh",
      type: "Base de données publique",
      status: "ok",
      lastScan: "2026-04-29",
      dataPoints: 10,
      icon: "fas fa-lock",
      dataRecovered: [
        "Certificat SSL actuel (émetteur, validité)", "Date d'émission du certificat",
        "Date d'expiration du certificat", "Algorithme de signature",
        "Sous-domaines découverts (via SAN)", "Historique des certificats émis",
        "Autorité de certification (CA)", "Empreinte SHA-256",
        "Statut DNSSEC", "Chaîne de confiance complète"
      ],
      crawlabilityScore: 95,
      crawlabilityNotes: "Les Certificate Transparency Logs sont publics par design (RFC 6962). crt.sh offre une interface web, une API JSON et un accès SQL direct (PostgreSQL, port 5432, user guest). Aucune limitation pour des requêtes raisonnables. Données complètes et vérifiables pour tout domaine. Très utile pour découvrir des sous-domaines et vérifier l'infrastructure SSL."
    },
    {
      name: "DNS / MX Records",
      url: "dns.google",
      type: "Protocole DNS",
      status: "ok",
      lastScan: "2026-04-29",
      dataPoints: 8,
      icon: "fas fa-network-wired",
      dataRecovered: [
        "Enregistrements A (IPv4)", "Enregistrements AAAA (IPv6)",
        "Enregistrements MX (serveur mail)", "Enregistrements TXT (SPF, DKIM, DMARC)",
        "Enregistrements CNAME", "Enregistrements NS (serveurs de noms)",
        "TTL des enregistrements", "Provider email identifié (via MX)"
      ],
      crawlabilityScore: 100,
      crawlabilityNotes: "Protocole DNS ouvert et public, aucune restriction d'accès. Requêtes via dig, nslookup, ou API DoH (dns.google, Cloudflare 1.1.1.1). Les enregistrements SPF/DKIM/DMARC révèlent le provider email. Les enregistrements MX pour luxsuum.lu pointent vers Wix (mx*.wixdns.net), confirmant l'utilisation de Wix pour l'email. Extraction instantanée et gratuite."
    },
    {
      name: "Waze",
      url: "waze.com",
      type: "Application / Scraping",
      status: "ok",
      lastScan: "2026-04-29",
      dataPoints: 6,
      icon: "fas fa-map-marked-alt",
      dataRecovered: [
        "Point d'intérêt listé (oui/non)", "Nom affiché", "Adresse",
        "Coordonnées GPS", "Catégorie commerciale", "Lien de navigation"
      ],
      crawlabilityScore: 30,
      crawlabilityNotes: "Waze (propriété Google) ne propose pas d'API publique pour l'extraction de données commerciales. Les informations sont accessibles uniquement via l'application mobile ou l'éditeur de carte. Le scraping web est techniquement difficile (app mobile native, WebGL pour la carte web). Les données de base (présence, nom, localisation) peuvent être vérifiées manuellement."
    }
  ]
};
