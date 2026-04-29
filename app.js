// Artemis — Application Logic
document.addEventListener('DOMContentLoaded', () => {
  renderCompanyHero();
  renderStats();
  renderTabs();
  renderAllPanels();
  initTabs();
  animateScores();
});

// ---- Tab System ----
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });
}

// ---- Company Hero ----
function renderCompanyHero() {
  const d = COMPANY_DATA;
  document.getElementById('company-hero').innerHTML = `
    <div class="company-header-card animate-in">
      <div class="company-top">
        <div class="company-logo-wrap">${d.logo}</div>
        <div class="company-info">
          <div class="company-name">
            ${d.name}
            <span class="status-badge ${d.status}">${d.status === 'active' ? '● Actif' : '● Inactif'}</span>
          </div>
          <div class="company-tagline">${d.tagline}</div>
          <div class="company-meta">
            <span class="meta-item"><i class="fas fa-map-marker-alt"></i> Luxembourg</span>
            <span class="meta-item"><i class="fas fa-industry"></i> ${d.sector}</span>
            <span class="meta-item"><i class="fas fa-users"></i> ${d.employees} employés</span>
            <span class="meta-item"><i class="fas fa-calendar"></i> Fondée en ${d.founded}</span>
            <span class="meta-item"><i class="fas fa-globe"></i> <a href="${d.contact.website}" target="_blank" style="color:var(--accent-light);text-decoration:none">${d.whois.domain}</a></span>
          </div>
        </div>
        <div class="company-scores">
          ${renderScoreCircle(d.scores.completeness, 'Complétude', '--accent')}
          ${renderScoreCircle(d.scores.digitalPresence, 'Digital', '--accent-2')}
          ${renderScoreCircle(d.scores.reputation, 'Réputation', '--accent-4')}
        </div>
      </div>
    </div>`;
}

function renderScoreCircle(value, label, colorVar) {
  const r = 26, c = 2 * Math.PI * r, offset = c - (value / 100) * c;
  return `<div class="score-circle">
    <div class="score-ring">
      <svg viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="${r}" fill="none" stroke="var(--border)" stroke-width="4"/>
        <circle cx="32" cy="32" r="${r}" fill="none" stroke="var(${colorVar})" stroke-width="4"
          stroke-dasharray="${c}" stroke-dashoffset="${c}" data-target="${offset}"
          stroke-linecap="round" transform="rotate(-90 32 32)" class="score-arc"/>
      </svg>
      <span class="score-val">${value}</span>
    </div>
    <div class="score-label">${label}</div>
  </div>`;
}

function animateScores() {
  document.querySelectorAll('.score-arc').forEach(arc => {
    const target = arc.dataset.target;
    setTimeout(() => { arc.style.transition = 'stroke-dashoffset 1.2s ease'; arc.style.strokeDashoffset = target; }, 300);
  });
}

// ---- Stats Row ----
function renderStats() {
  const d = COMPANY_DATA;
  const stats = [
    { icon: 'fas fa-database', label: 'Data Points', value: d.sources.reduce((a,s) => a+s.dataPoints, 0), color: 'var(--accent)' },
    { icon: 'fas fa-satellite-dish', label: 'Sources', value: d.sources.length, color: 'var(--accent-2)' },
    { icon: 'fas fa-star', label: 'Note Google', value: d.googleBusiness.rating + '/5', color: 'var(--accent-3)' },
    { icon: 'fas fa-comment', label: 'Avis', value: d.googleBusiness.totalReviews, color: 'var(--accent-4)' },
    { icon: 'fas fa-map-pin', label: 'Emplacements', value: d.locations.length, color: 'var(--accent-6)' },
    { icon: 'fas fa-share-alt', label: 'Réseaux sociaux', value: d.social.length, color: 'var(--accent-5)' }
  ];
  document.getElementById('stats-row').innerHTML = stats.map((s,i) => `
    <div class="stat-card animate-in" style="animation-delay:${i*0.05}s">
      <div class="stat-icon" style="background:${s.color}22;color:${s.color}">${iconEl(s.icon)}</div>
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>`).join('');
}

// ---- Tabs ----
function renderTabs() {
  const tabs = [
    { id: 'general', icon: 'fas fa-building', label: 'Général' },
    { id: 'digital', icon: 'fas fa-globe', label: 'Digital' },
    { id: 'reputation', icon: 'fas fa-star', label: 'Réputation' },
    { id: 'social', icon: 'fas fa-share-alt', label: 'Réseaux sociaux' },
    { id: 'legal', icon: 'fas fa-gavel', label: 'Juridique' },
    { id: 'sources', icon: 'fas fa-database', label: 'Sources' }
  ];
  document.getElementById('tab-nav').innerHTML = tabs.map((t,i) =>
    `<button class="tab-btn${i===0?' active':''}" data-tab="panel-${t.id}">${iconEl(t.icon)} ${t.label}</button>`
  ).join('');
}

// ---- All Panels ----
function renderAllPanels() {
  const area = document.getElementById('content-area');
  area.innerHTML = `
    <div id="panel-general" class="tab-panel active">${panelGeneral()}</div>
    <div id="panel-digital" class="tab-panel">${panelDigital()}</div>
    <div id="panel-reputation" class="tab-panel">${panelReputation()}</div>
    <div id="panel-social" class="tab-panel">${panelSocial()}</div>
    <div id="panel-legal" class="tab-panel">${panelLegal()}</div>
    <div id="panel-sources" class="tab-panel">${panelSources()}</div>
  `;
}

// ---- Panel: General ----
function panelGeneral() {
  const d = COMPANY_DATA;
  return `<div class="grid-2">
    <div class="card animate-in">
      <div class="card-header"><span class="card-title"><i class="fas fa-id-card"></i> Informations générales</span><span class="source-tag rcs">RCS</span></div>
      <ul class="data-list">
        ${dataRow('Raison sociale', d.legalName)}
        ${dataRow('Nom commercial', d.name)}
        ${dataRow('Forme juridique', d.formeJuridique)}
        ${dataRow('N° RCS', d.rcs)}
        ${dataRow('N° TVA', d.tva)}
        ${dataRow('Capital social', d.capitalSocial)}
        ${dataRow('Secteur', d.sector)}
        ${dataRow('Code NACE', d.nace)}
        ${dataRow('Date de création', d.founded)}
        ${dataRow('Effectif', d.employees + ' employés')}
      </ul>
    </div>
    <div class="card animate-in">
      <div class="card-header"><span class="card-title"><i class="fas fa-phone"></i> Contact</span><span class="source-tag web">Web</span></div>
      <ul class="data-list">
        ${dataRow('Site web', `<a href="${d.contact.website}" target="_blank">${d.whois.domain}</a>`)}
        ${dataRow('Email', d.contact.email)}
        ${dataRow('Téléphone', d.contact.phone)}
      </ul>
      <div style="margin-top:20px">
        <div class="card-title" style="margin-bottom:12px"><i class="fas fa-clock"></i> Horaires d'ouverture</div>
        <ul class="data-list">
          ${Object.entries(d.hours).map(([day,h]) => dataRow(day.charAt(0).toUpperCase()+day.slice(1), h)).join('')}
        </ul>
      </div>
    </div>
    <div class="card animate-in">
      <div class="card-header"><span class="card-title"><i class="fas fa-map-marker-alt"></i> Emplacements</span></div>
      ${d.locations.map(loc => `
        <div style="padding:12px;background:var(--bg-glass);border-radius:var(--radius-md);margin-bottom:8px">
          <div style="font-weight:600;font-size:14px">${loc.name}</div>
          <div style="font-size:13px;color:var(--text-secondary);margin-top:2px">${loc.address}</div>
          <div style="font-size:12px;color:var(--text-muted);margin-top:4px"><i class="fas fa-tag"></i> ${loc.type}</div>
        </div>`).join('')}
      <div class="map-container" style="margin-top:12px"><i class="fas fa-map"></i>&nbsp; Carte interactive (à venir)</div>
    </div>
    <div class="card animate-in">
      <div class="card-header"><span class="card-title"><i class="fas fa-concierge-bell"></i> Services</span><span class="source-tag web">Web</span></div>
      ${d.services.map(s => `<div style="padding:8px 12px;background:var(--bg-glass);border-radius:var(--radius-sm);margin-bottom:6px;font-size:13px;display:flex;align-items:center;gap:8px"><i class="fas fa-check" style="color:var(--accent-4);font-size:11px"></i>${s}</div>`).join('')}
    </div>
  </div>`;
}

// ---- Panel: Digital ----
function panelDigital() {
  const d = COMPANY_DATA;
  const w = d.website, wh = d.whois;
  return `<div class="grid-2">
    <div class="card animate-in">
      <div class="card-header"><span class="card-title"><i class="fas fa-globe"></i> Site Web</span><span class="source-tag web">Web</span></div>
      <ul class="data-list">
        ${dataRow('Plateforme', w.platform)}
        ${dataRow('SSL', w.ssl ? '<span style="color:var(--accent-4)">✓ Actif</span>' : '<span style="color:var(--accent-5)">✗ Inactif</span>')}
        ${dataRow('Expiration SSL', w.sslExpiry)}
        ${dataRow('Responsive', w.responsive ? '✓ Oui' : '✗ Non')}
        ${dataRow('Langues', w.languages.join(', '))}
        ${dataRow('Temps de chargement', w.loadTime)}
      </ul>
    </div>
    <div class="card animate-in">
      <div class="card-header"><span class="card-title"><i class="fas fa-search"></i> SEO</span></div>
      <ul class="data-list">
        ${dataRow('Title', w.seo.title)}
        ${dataRow('Meta Description', w.seo.metaDescription)}
        ${dataRow('H1', w.seo.h1)}
        ${dataRow('Robots', w.seo.robots)}
        ${dataRow('Sitemap', w.seo.sitemap ? '✓ Oui' : '✗ Non')}
        ${dataRow('Schema.org', w.seo.schemaOrg ? '✓ Oui' : '<span style="color:var(--accent-5)">✗ Non</span>')}
      </ul>
    </div>
    <div class="card animate-in">
      <div class="card-header"><span class="card-title"><i class="fas fa-server"></i> WHOIS</span><span class="source-tag whois">WHOIS</span></div>
      <ul class="data-list">
        ${dataRow('Domaine', wh.domain)}
        ${dataRow('Registrar', wh.registrar)}
        ${dataRow('Créé le', wh.created)}
        ${dataRow('Expire le', wh.expires)}
        ${dataRow('Nameservers', wh.nameservers.join(', '))}
        ${dataRow('DNSSEC', wh.dnssec)}
      </ul>
    </div>
    <div class="card animate-in">
      <div class="card-header"><span class="card-title"><i class="fas fa-code"></i> Technologies détectées</span></div>
      <div class="tech-tags">${w.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
      <div style="margin-top:20px">
        <div class="card-title" style="margin-bottom:12px"><i class="fas fa-file-alt"></i> Pages indexées</div>
        ${w.pages.map(p => `<div style="font-size:13px;padding:6px 0;border-bottom:1px solid var(--border);color:var(--text-secondary)">${p}</div>`).join('')}
      </div>
    </div>
  </div>`;
}

// ---- Panel: Reputation ----
function panelReputation() {
  const d = COMPANY_DATA, gb = d.googleBusiness;
  const maxR = Math.max(...Object.values(gb.ratingDistribution));
  return `<div class="grid-2">
    <div class="card animate-in">
      <div class="card-header"><span class="card-title"><i class="fab fa-google"></i> Google Business Profile</span><span class="source-tag google">Google</span></div>
      <div style="text-align:center;padding:16px 0">
        <div style="font-size:48px;font-weight:800">${gb.rating}</div>
        <div class="stars" style="justify-content:center;margin:8px 0">${renderStars(gb.rating)}</div>
        <div style="font-size:13px;color:var(--text-muted)">${gb.totalReviews} avis</div>
      </div>
      <ul class="data-list">
        ${dataRow('Catégorie', gb.category)}
        ${dataRow('Vérifié', gb.verified ? '<span style="color:var(--accent-4)">✓ Oui</span>' : '✗ Non')}
        ${dataRow('Photos', gb.photos)}
        ${dataRow('Taux de réponse', gb.responseRate)}
        ${dataRow('Temps de réponse moyen', gb.avgResponseTime)}
      </ul>
    </div>
    <div class="card animate-in">
      <div class="card-header"><span class="card-title"><i class="fas fa-chart-bar"></i> Distribution des notes</span></div>
      ${[5,4,3,2,1].map(n => {
        const count = gb.ratingDistribution[n];
        const pct = (count / gb.totalReviews * 100).toFixed(0);
        return `<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
          <span style="font-size:13px;width:20px;text-align:right">${n}★</span>
          <div class="progress-bar" style="flex:1"><div class="progress-fill" style="width:${pct}%;background:var(--accent-3)"></div></div>
          <span style="font-size:12px;color:var(--text-muted);width:36px">${count}</span>
        </div>`;
      }).join('')}
      <div style="margin-top:24px">
        <div class="card-title" style="margin-bottom:12px"><i class="fas fa-trophy"></i> Concurrents</div>
        ${d.competitors.map(c => `<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border);font-size:13px">
          <span>${c.name} <span style="color:var(--text-muted)">— ${c.location}</span></span>
          <span>${renderStars(c.rating)} ${c.rating}</span>
        </div>`).join('')}
      </div>
    </div>
    <div class="card full animate-in">
      <div class="card-header"><span class="card-title"><i class="fas fa-comments"></i> Derniers avis</span></div>
      ${d.reviews.map(r => `
        <div class="review-item">
          <div class="review-header">
            <div class="review-avatar">${r.author.charAt(0)}</div>
            <div><div class="review-author">${r.author}</div><div class="review-date">${r.date} — ${r.source}</div></div>
            <div style="margin-left:auto">${renderStars(r.rating)}</div>
          </div>
          <div class="review-text">${r.text}</div>
        </div>`).join('')}
    </div>
  </div>`;
}

// ---- Panel: Social ----
function panelSocial() {
  const d = COMPANY_DATA;
  return `<div class="social-grid">
    ${d.social.map(s => `
      <div class="social-card animate-in">
        <div class="social-icon" style="background:${s.color}22;color:${s.color}"><i class="${s.icon}"></i></div>
        <div class="social-info">
          <div class="social-name">${s.platform}</div>
          <div class="social-handle">${s.handle}</div>
          <div class="social-stats">
            ${s.followers ? `<span class="social-stat"><strong>${formatNum(s.followers)}</strong> abonnés</span>` : ''}
            ${s.posts ? `<span class="social-stat"><strong>${s.posts}</strong> posts</span>` : ''}
            ${s.rating ? `<span class="social-stat"><strong>${s.rating}</strong> ★ (${s.reviews})</span>` : ''}
          </div>
        </div>
      </div>`).join('')}
  </div>`;
}

// ---- Panel: Legal ----
function panelLegal() {
  const d = COMPANY_DATA;
  return `<div class="grid-2">
    <div class="card animate-in">
      <div class="card-header"><span class="card-title"><i class="fas fa-balance-scale"></i> Informations juridiques</span><span class="source-tag rcs">RCS</span></div>
      <ul class="data-list">
        ${dataRow('Raison sociale', d.legalName)}
        ${dataRow('Forme juridique', d.formeJuridique)}
        ${dataRow('N° RCS', d.rcs)}
        ${dataRow('N° TVA', d.tva)}
        ${dataRow('Capital social', d.capitalSocial)}
        ${dataRow('Date d\'immatriculation', d.founded)}
      </ul>
    </div>
    <div class="card animate-in">
      <div class="card-header"><span class="card-title"><i class="fas fa-history"></i> Chronologie</span></div>
      <div class="timeline">
        ${d.timeline.map(t => `
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">${t.date}</div>
            <div class="timeline-title">${t.title}</div>
            <div class="timeline-desc">${t.desc}</div>
          </div>`).join('')}
      </div>
    </div>
  </div>`;
}

// ---- Panel: Sources ----
function panelSources() {
  const d = COMPANY_DATA;
  const total = d.sources.reduce((a,s) => a+s.dataPoints, 0);
  return `<div class="card full animate-in">
    <div class="card-header">
      <span class="card-title"><i class="fas fa-satellite-dish"></i> Sources de données (${d.sources.length})</span>
      <span style="font-size:13px;color:var(--text-muted)">${total} data points collectés</span>
    </div>
    <div style="display:grid;gap:8px">
      ${d.sources.map(s => `
        <div style="display:flex;align-items:center;gap:16px;padding:14px 16px;background:var(--bg-glass);border-radius:var(--radius-md)">
          <div style="width:8px;height:8px;border-radius:50%;background:${s.status==='ok'?'var(--accent-4)':'var(--accent-3)'}"></div>
          <div style="flex:1">
            <div style="font-size:14px;font-weight:500">${s.name}</div>
            <div style="font-size:12px;color:var(--text-muted)">${s.url}</div>
          </div>
          <div style="font-size:13px;color:var(--text-secondary)">${s.dataPoints} points</div>
          <div style="font-size:12px;color:var(--text-muted)">${s.lastScan}</div>
          <div style="font-size:11px;padding:3px 8px;border-radius:10px;background:${s.status==='ok'?'rgba(16,185,129,0.15)':'rgba(245,158,11,0.15)'};color:${s.status==='ok'?'#34d399':'#fbbf24'}">${s.status==='ok'?'Complet':'Partiel'}</div>
        </div>`).join('')}
    </div>
  </div>`;
}

// ---- Helpers ----
function dataRow(key, val) {
  return `<li class="data-item"><span class="data-key">${key}</span><span class="data-value">${val}</span></li>`;
}
function renderStars(rating) {
  return Array.from({length:5}, (_,i) => `<span class="star${i < Math.round(rating) ? '' : ' empty'}">★</span>`).join('');
}
function formatNum(n) {
  return n >= 1000 ? (n/1000).toFixed(1)+'K' : n;
}
function iconEl(cls) {
  return `<i class="${cls}"></i>`;
}
