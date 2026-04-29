// Artemis — Mock Data for Luxsuum
const COMPANY_DATA = {
  name: "Luxsuum",
  legalName: "LUXSUUM S.à r.l.",
  tagline: "Spécialiste du nettoyage de véhicule écologique et manuel",
  status: "active",
  logo: "L",
  sector: "Services automobiles",
  nace: "45.20 — Entretien et réparation de véhicules automobiles",
  founded: "2019",
  employees: "10-19",
  formeJuridique: "Société à responsabilité limitée (S.à r.l.)",
  rcs: "B234567",
  tva: "LU 3456 7890",
  capitalSocial: "12 500 €",

  scores: {
    completeness: 78,
    digitalPresence: 65,
    reputation: 82
  },

  contact: {
    website: "https://www.luxsuum.lu",
    email: "info@luxsuum.lu",
    phone: "+352 621 XXX XXX",
    fax: null
  },

  locations: [
    {
      name: "Luxsuum Kirchberg",
      address: "Centre Commercial Auchan, Luxembourg-Kirchberg",
      lat: 49.6341,
      lng: 6.1568,
      type: "Point de lavage"
    },
    {
      name: "Luxsuum Cloche d'Or",
      address: "Centre Commercial Cloche d'Or, Luxembourg-Gasperich",
      lat: 49.5833,
      lng: 6.1196,
      type: "Point de lavage"
    }
  ],

  hours: {
    lundi: "08:00 – 20:00",
    mardi: "08:00 – 20:00",
    mercredi: "08:00 – 20:00",
    jeudi: "08:00 – 20:00",
    vendredi: "08:00 – 20:00",
    samedi: "08:00 – 20:00",
    dimanche: "Fermé"
  },

  services: [
    "Lavage extérieur (lavage, brillance, protection)",
    "Lavage intérieur (habitacle, sol, vitres)",
    "Nettoyage sièges cuir / tissus",
    "Traitement Polish Carrosserie",
    "Nettoyage et entretien carrosserie oldtimer",
    "Formule VIP (rénovation complète)",
    "Service pick-up à domicile",
    "Formules d'abonnement"
  ],

  whois: {
    domain: "luxsuum.lu",
    registrar: "Restena Foundation",
    created: "2019-03-12",
    expires: "2026-03-12",
    nameservers: ["ns1.wixdns.net", "ns2.wixdns.net"],
    dnssec: "Non signé"
  },

  website: {
    platform: "Wix",
    ssl: true,
    sslExpiry: "2026-08-15",
    responsive: true,
    languages: ["Français"],
    loadTime: "3.2s",
    technologies: ["Wix", "React", "Node.js", "Cloudflare CDN", "Google Analytics", "Google Tag Manager"],
    pages: ["Accueil", "À propos", "Nettoyage intérieur/extérieur", "Formules abonnement", "Prendre RDV", "Contact", "Mentions légales", "CGV", "Politique données"],
    seo: {
      title: "Luxsuum | Nettoyage de véhicule - Car Wash Luxembourg",
      metaDescription: "Luxsuum, le spécialiste du nettoyage de véhicule écologique et manuel.",
      h1: "Luxsuum, le spécialiste du nettoyage de véhicule écologique et manuel",
      robots: "index, follow",
      sitemap: true,
      schemaOrg: false
    }
  },

  social: [
    { platform: "Facebook", handle: "@luxsuum", url: "https://facebook.com/luxsuum", followers: 1240, posts: 89, icon: "fab fa-facebook-f", color: "#1877f2" },
    { platform: "Instagram", handle: "@luxsuum.lu", url: "https://instagram.com/luxsuum.lu", followers: 876, posts: 145, icon: "fab fa-instagram", color: "#e4405f" },
    { platform: "Google Business", handle: "Luxsuum", url: "#", rating: 4.2, reviews: 67, icon: "fab fa-google", color: "#4285f4" },
    { platform: "Editus.lu", handle: "Luxsuum", url: "https://editus.lu", rating: 3.8, reviews: 12, icon: "fas fa-building", color: "#fb923c" }
  ],

  googleBusiness: {
    rating: 4.2,
    totalReviews: 67,
    category: "Service de lavage de voitures",
    verified: true,
    photos: 34,
    responseRate: "72%",
    avgResponseTime: "2 jours",
    ratingDistribution: { 5: 32, 4: 18, 3: 8, 2: 5, 1: 4 }
  },

  reviews: [
    { author: "Marc D.", rating: 5, date: "2026-03-15", text: "Excellent service ! Ma voiture était comme neuve. Le pick-up à domicile est vraiment pratique.", source: "Google" },
    { author: "Sophie L.", rating: 4, date: "2026-02-28", text: "Bon travail dans l'ensemble, juste quelques coins oubliés à l'intérieur. Prix correct.", source: "Google" },
    { author: "Jean-Pierre K.", rating: 3, date: "2026-01-10", text: "Résultat moyen pour le prix demandé. Les sièges n'étaient pas parfaitement nettoyés.", source: "Editus" },
    { author: "Nathalie R.", rating: 5, date: "2025-12-20", text: "Top ! Pratique pendant le shopping à la Cloche d'Or. Je recommande la formule VIP.", source: "Google" }
  ],

  competitors: [
    { name: "Magic Car Wash", location: "Bertrange", rating: 4.0 },
    { name: "Wash&Go Luxembourg", location: "Strassen", rating: 3.9 },
    { name: "Autopflege Lux", location: "Esch-sur-Alzette", rating: 4.3 }
  ],

  timeline: [
    { date: "2019-03", title: "Création de la société", desc: "Immatriculation au RCS Luxembourg" },
    { date: "2019-06", title: "Ouverture Kirchberg", desc: "Premier point de lavage au Centre Commercial Auchan" },
    { date: "2020-11", title: "Ouverture Cloche d'Or", desc: "Expansion au Centre Commercial Cloche d'Or" },
    { date: "2021-04", title: "Lancement service pick-up", desc: "Service de collecte à domicile / bureau" },
    { date: "2023-09", title: "Formules d'abonnement", desc: "Nouveaux packages mensuels lancés" }
  ],

  sources: [
    { name: "Site web officiel", url: "https://luxsuum.lu", status: "ok", lastScan: "2026-04-29", dataPoints: 24 },
    { name: "Google Business Profile", url: "#", status: "ok", lastScan: "2026-04-29", dataPoints: 18 },
    { name: "WHOIS luxsuum.lu", url: "#", status: "ok", lastScan: "2026-04-29", dataPoints: 6 },
    { name: "RCS Luxembourg", url: "#", status: "partial", lastScan: "2026-04-29", dataPoints: 5 },
    { name: "Editus.lu", url: "https://editus.lu", status: "ok", lastScan: "2026-04-29", dataPoints: 10 },
    { name: "Facebook", url: "https://facebook.com/luxsuum", status: "ok", lastScan: "2026-04-29", dataPoints: 8 },
    { name: "Instagram", url: "https://instagram.com/luxsuum.lu", status: "ok", lastScan: "2026-04-29", dataPoints: 6 }
  ]
};
