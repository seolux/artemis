// Artemis — Integrated Chatbot
const CHAT_SUGGESTIONS = [
  "Quel est le score SEO de cette entreprise ?",
  "Quels sont les horaires d'ouverture ?",
  "Combien d'avis Google ont-ils ?",
  "Qui est le gérant ?",
  "Quels services proposent-ils ?",
  "Quelle est leur note Google ?",
  "Quels sont leurs concurrents ?",
  "Le site est-il optimisé mobile ?",
  "Quel est leur niveau de certification ?",
  "Quels réseaux sociaux utilisent-ils ?"
];

const CHAT_RESPONSES = {
  // Greeting
  _greeting: [/^(bonjour|hello|salut|hey|hi|coucou)/i, () =>
    `Bonjour ! Je suis l'assistant Artemis. Je peux répondre à toutes vos questions sur **${COMPANY_DATA.name}**. Que souhaitez-vous savoir ?`
  ],
  // SEO
  seo: [/seo|référencement|optimis/i, () => {
    const s = COMPANY_DATA.seo;
    return `**Score SEO global : ${s.globalScore}/100**\n\n${s.categories.map(c =>
      `• ${c.name} : **${c.score}/100** ${c.score >= 70 ? '(Bon)' : c.score >= 40 ? '(Moyen)' : '(Faible)'}`
    ).join('\n')}\n\nLes points critiques sont l'absence de sitemap XML, le manque de contenu textuel, et l'absence de données structurées Schema.org.`;
  }],
  // GEO
  geo: [/geo|local|citation|annuaire/i, () => {
    const g = COMPANY_DATA.geo;
    return `**Score GEO (Local SEO) : ${g.globalScore}/100**\n\n${g.categories.map(c =>
      `• ${c.name} : **${c.score}/100**`
    ).join('\n')}\n\nL'entreprise est bien présente sur Google Business (75/100) mais manque de citations dans les annuaires locaux (52/100). La cohérence NAP nécessite des corrections sur le numéro de téléphone.`;
  }],
  // Rating / Reviews
  note: [/note|avis|review|étoile|rating|réputation/i, () => {
    const gb = COMPANY_DATA.googleBusiness;
    return `**Note Google : ${gb.rating}/5** (${gb.totalReviews} avis)\n\nDistribution :\n${[5,4,3,2,1].map(n =>
      `${'★'.repeat(n)}${'☆'.repeat(5-n)} : ${gb.ratingDistribution[n]} avis`
    ).join('\n')}\n\nIls ont aussi **12 avis sur Editus.lu** avec une note de 3.8/5.\nTaux de réponse aux avis : ${gb.responseRate}`;
  }],
  // Hours
  horaires: [/horaire|heure|ouvert|fermé|quand/i, () => {
    const h = COMPANY_DATA.hours;
    return `**Horaires d'ouverture :**\n\n${Object.entries(h).map(([d,v]) =>
      `• ${d.charAt(0).toUpperCase()+d.slice(1)} : **${v}**`
    ).join('\n')}\n\nLes deux postes (Kirchberg et Cloche d'Or) ont les mêmes horaires.`;
  }],
  // Manager / Legal
  gerant: [/gérant|dirigeant|patron|responsable|qui|manage/i, () =>
    `**Gérant :** ${COMPANY_DATA.gerant}\n\nForme juridique : ${COMPANY_DATA.formeJuridique}\nRCS : ${COMPANY_DATA.rcs}\nCapital social : ${COMPANY_DATA.capitalSocial}`
  ],
  // Services
  services: [/service|prestation|formule|prix|tarif|lavage|nettoyage/i, () => {
    const svcs = COMPANY_DATA.services;
    return `**${svcs.length} services proposés :**\n\n${svcs.map(s =>
      `• **${s.name}** — ${s.detail} → *${s.price}*`
    ).join('\n')}`;
  }],
  // Competitors
  concurrents: [/concurrent|compétit|marché|versus|vs/i, () => {
    const comps = COMPANY_DATA.competitors;
    return `**${comps.length} concurrents identifiés :**\n\n${comps.map(c =>
      `• **${c.name}** (${c.location}) — ${c.rating}★ (${c.reviews} avis) — SEO: ${c.seoScore}, GEO: ${c.geoScore}\n  Forces: ${c.strengths.join(', ')}`
    ).join('\n\n')}\n\n${COMPANY_DATA.name} se positionne avec un avantage sur le service premium et l'approche écologique.`;
  }],
  // Website / Tech
  site: [/site|web|technologie|wix|ssl|mobile|desktop/i, () => {
    const w = COMPANY_DATA.website;
    return `**Site web : ${COMPANY_DATA.whois.domain}**\n\n• Plateforme : **${w.platform}**\n• SSL : ${w.ssl ? 'Actif' : 'Inactif'} (expire le ${w.sslExpiry})\n• Responsive : ${w.responsive ? 'Oui' : 'Non'}\n• Score mobile : **${w.mobileScore}/100**\n• Score desktop : **${w.desktopScore}/100**\n• Temps de chargement : **${w.loadTime}**\n• Technologies : ${w.technologies.join(', ')}`;
  }],
  // Social
  social: [/social|facebook|instagram|linkedin|tiktok|réseau/i, () => {
    const socs = COMPANY_DATA.social;
    return `**Présence sur les réseaux sociaux :**\n\n${socs.map(s =>
      s.status === 'absent'
        ? `• **${s.platform}** — Non présent`
        : `• **${s.platform}** (${s.handle}) — ${s.followers ? s.followers + ' abonnés' : ''} ${s.rating ? s.rating + '★' : ''} ${s.engagement ? '| Engagement: ' + s.engagement : ''}`
    ).join('\n')}\n\nLinkedIn et TikTok sont absents. Le dernier post Facebook date du ${socs[0].lastPost}.`;
  }],
  // Certification
  certification: [/certif|badge|vérifié|niveau|silver|gold|platinum|bronze/i, () => {
    const c = COMPANY_DATA.certification;
    const passed = c.criteria.filter(x => x.status === 'pass').length;
    const warns = c.criteria.filter(x => x.status === 'warning').length;
    const fails = c.criteria.filter(x => x.status === 'fail').length;
    return `**Certification Artemis : ${c.level.toUpperCase()}** (${c.score}/100)\n\n• ${passed} critères validés\n• ${warns} points d'attention\n• ${fails} critères échoués\n\nPour atteindre le niveau Gold (>=80), il faudrait :\n• Publier les données financières\n• Ajouter le balisage Schema.org\n• Harmoniser le numéro de téléphone sur toutes les plateformes\n• Reprendre une activité régulière sur les réseaux sociaux`;
  }],
  // Location
  localisation: [/adresse|locali|où|emplacement|kirchberg|cloche|parking/i, () => {
    const locs = COMPANY_DATA.locations;
    return `**${locs.length} emplacements :**\n\n${locs.map(l =>
      `• **${l.name}** ${l.isPrimary ? '(Principal)' : ''}\n  ${l.address}\n  Coordonnées : ${l.lat}, ${l.lng}`
    ).join('\n\n')}`;
  }],
  // Contact
  contact: [/contact|email|téléphone|appeler|joindre|mail/i, () =>
    `**Contact :**\n\n• Site : [${COMPANY_DATA.whois.domain}](${COMPANY_DATA.contact.website})\n• Email : ${COMPANY_DATA.contact.email}\n• Tél : ${COMPANY_DATA.contact.phone}\n• Tél alt : ${COMPANY_DATA.contact.phoneAlt}`
  ],
  // WHOIS
  whois: [/whois|domaine|dns|registrar|expir/i, () => {
    const w = COMPANY_DATA.whois;
    return `**WHOIS — ${w.domain}**\n\n• Registrar : ${w.registrar}\n• Créé le : ${w.created}\n• Expire le : ${w.expires}\n• Nameservers : ${w.nameservers.join(', ')}\n• DNSSEC : ${w.dnssec}`;
  }],
  // Summary
  resume: [/résumé|résume|overview|synthèse|récap|tout/i, () =>
    `**Synthèse ${COMPANY_DATA.name} :**\n\n• Raison sociale : ${COMPANY_DATA.legalName} — ${COMPANY_DATA.formeJuridique}\n• Emplacements : ${COMPANY_DATA.locations.length} à Luxembourg\n• Employés : ${COMPANY_DATA.employees}\n• Note Google : ${COMPANY_DATA.googleBusiness.rating}/5 (${COMPANY_DATA.googleBusiness.totalReviews} avis Google)\n• Score SEO : ${COMPANY_DATA.seo.globalScore}/100\n• Score GEO : ${COMPANY_DATA.geo.globalScore}/100\n• Certification : ${COMPANY_DATA.certification.level.toUpperCase()} (${COMPANY_DATA.certification.score}/100)\n• Données : ${COMPANY_DATA.sources.reduce((a,s)=>a+s.dataPoints,0)} data points collectés depuis ${COMPANY_DATA.sources.length} sources`
  ],
  // Sources
  sources: [/source|données|data|scrap|collecte/i, () => {
    const srcs = COMPANY_DATA.sources;
    const total = srcs.reduce((a,s) => a+s.dataPoints, 0);
    return `**${srcs.length} sources analysées — ${total} data points :**\n\n${srcs.map(s =>
      `• **${s.name}** — ${s.dataPoints} points ${s.status === 'ok' ? '(Complet)' : '(Partiel)'}`
    ).join('\n')}`;
  }]
};

function getResponse(input) {
  const text = input.trim().toLowerCase();
  if (!text) return null;
  for (const [, [regex, fn]] of Object.entries(CHAT_RESPONSES)) {
    if (regex.test(text)) return fn();
  }
  return `Je n'ai pas trouvé de réponse précise pour "${input}". Essayez de me demander :\n\n• Le score SEO ou GEO\n• Les horaires d'ouverture\n• Les avis et la note Google\n• Les services et tarifs\n• Les concurrents\n• Le niveau de certification\n• Un résumé complet`;
}

function formatMarkdown(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank">$1</a>')
    .replace(/\n/g, '<br>');
}

function initChat() {
  const panel = document.getElementById('chat-panel');
  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send');
  const messages = document.getElementById('chat-messages');
  const suggestionsEl = document.getElementById('chat-suggestions');
  const toggleBtn = document.getElementById('chat-toggle');

  // Render suggestions
  const shuffled = CHAT_SUGGESTIONS.sort(() => 0.5 - Math.random()).slice(0, 4);
  suggestionsEl.innerHTML = shuffled.map(s =>
    `<button class="chat-suggestion">${s}</button>`
  ).join('');

  // Welcome message
  addMessage('bot', `Bonjour ! Je suis l'assistant **Artemis**. Posez-moi n'importe quelle question sur **${COMPANY_DATA.name}** et j'y répondrai à partir des données collectées.`);

  // Toggle panel — only for mobile (≤1024px), on desktop it's always visible
  toggleBtn.addEventListener('click', () => {
    panel.classList.toggle('open');
    toggleBtn.innerHTML = panel.classList.contains('open')
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-comment-dots"></i> Assistant';
  });
  // Collapse button inside the chat header (mobile only)
  const collapseBtn = document.getElementById('chat-collapse');
  if (collapseBtn) {
    collapseBtn.addEventListener('click', () => {
      panel.classList.remove('open');
      toggleBtn.innerHTML = '<i class="fas fa-comment-dots"></i> Assistant';
    });
  }

  // Send
  function send() {
    const text = input.value.trim();
    if (!text) return;
    addMessage('user', text);
    input.value = '';
    // Simulate thinking
    const typingId = addTyping();
    setTimeout(() => {
      removeTyping(typingId);
      const response = getResponse(text);
      addMessage('bot', response);
    }, 400 + Math.random() * 600);
  }
  sendBtn.addEventListener('click', send);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') send(); });

  // Suggestion click
  suggestionsEl.addEventListener('click', e => {
    if (e.target.classList.contains('chat-suggestion')) {
      input.value = e.target.textContent;
      send();
    }
  });

  function addMessage(role, text) {
    const div = document.createElement('div');
    div.className = `chat-msg ${role}`;
    div.innerHTML = `
      <div class="chat-msg-bubble">
        ${role === 'bot' ? '<div class="chat-msg-avatar"><i class="fas fa-robot"></i></div>' : ''}
        <div class="chat-msg-content">${formatMarkdown(text)}</div>
      </div>`;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
    // Refresh suggestions after bot response
    if (role === 'bot') {
      const newSuggestions = CHAT_SUGGESTIONS.sort(() => 0.5 - Math.random()).slice(0, 3);
      suggestionsEl.innerHTML = newSuggestions.map(s =>
        `<button class="chat-suggestion">${s}</button>`
      ).join('');
    }
  }

  function addTyping() {
    const div = document.createElement('div');
    div.className = 'chat-msg bot chat-typing';
    div.id = 'typing-' + Date.now();
    div.innerHTML = `<div class="chat-msg-bubble"><div class="chat-msg-avatar"><i class="fas fa-robot"></i></div><div class="chat-msg-content"><span class="typing-dots"><span></span><span></span><span></span></span></div></div>`;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
    return div.id;
  }

  function removeTyping(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
  }
}

document.addEventListener('DOMContentLoaded', initChat);
