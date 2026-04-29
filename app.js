// Artemis — Main Application Logic
document.addEventListener('DOMContentLoaded', () => {
  renderCompanyHero();
  renderStats();
  renderTabs();
  renderAllPanels();
  initTabs();
  animateScores();
});

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

function renderCompanyHero() {
  const d = COMPANY_DATA, c = d.certification;
  const levelInfo = c.levels.find(l => l.id === c.level);
  document.getElementById('company-hero').innerHTML = `
    <div class="company-header-card animate-in">
      <div class="company-top">
        <div class="company-logo-wrap">${d.logo}</div>
        <div class="company-info">
          <div class="company-name">
            ${d.name}
            <span class="status-badge ${d.status}">${d.status === 'active' ? '● Actif' : '● Inactif'}</span>
            <span class="cert-badge ${c.level}" title="Certification Artemis: ${levelInfo.label}">
              <i class="${levelInfo.icon}"></i> ${levelInfo.label} Certified
            </span>
          </div>
          <div class="company-tagline">${d.tagline}</div>
          <div class="company-meta">
            <span class="meta-item"><i class="fas fa-map-marker-alt"></i> Luxembourg</span>
            <span class="meta-item"><i class="fas fa-industry"></i> ${d.sector}</span>
            <span class="meta-item"><i class="fas fa-users"></i> ${d.employees} employés</span>
            <span class="meta-item"><i class="fas fa-calendar"></i> Fondée en ${d.founded}</span>
            <span class="meta-item"><i class="fas fa-globe"></i> <a href="${d.contact.website}" target="_blank">${d.whois.domain}</a></span>
            <span class="meta-item"><i class="fas fa-user-tie"></i> ${d.gerant}</span>
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
    setTimeout(() => { arc.style.transition = 'stroke-dashoffset 1.2s ease'; arc.style.strokeDashoffset = arc.dataset.target; }, 300);
  });
}

function renderStats() {
  const d = COMPANY_DATA;
  const stats = [
    { icon: 'fas fa-database', label: 'Data Points', value: d.sources.reduce((a,s) => a+s.dataPoints, 0), color: '#4f46e5', bg: '#eef2ff' },
    { icon: 'fas fa-satellite-dish', label: 'Sources', value: d.sources.length, color: '#0891b2', bg: '#ecfeff' },
    { icon: 'fas fa-star', label: 'Note Google', value: d.googleBusiness.rating + '/5', color: '#d97706', bg: '#fffbeb' },
    { icon: 'fas fa-comment', label: 'Avis totaux', value: d.googleBusiness.totalReviews + 12, color: '#059669', bg: '#ecfdf5' },
    { icon: 'fas fa-search', label: 'Score SEO', value: d.seo.globalScore + '/100', color: '#dc2626', bg: '#fef2f2' },
    { icon: 'fas fa-map-pin', label: 'Score GEO', value: d.geo.globalScore + '/100', color: '#db2777', bg: '#fdf2f8' },
    { icon: 'fas fa-certificate', label: 'Certification', value: d.certification.level.toUpperCase(), color: '#6366f1', bg: '#eef2ff' }
  ];
  document.getElementById('stats-row').innerHTML = stats.map((s,i) => `
    <div class="stat-card animate-in" style="animation-delay:${i*0.05}s">
      <div class="stat-icon" style="background:${s.bg || '#eef2ff'};color:${s.color}"><i class="${s.icon}"></i></div>
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>`).join('');
}

function renderTabs() {
  const tabs = [
    { id: 'general', icon: 'fas fa-building', label: 'Général' },
    { id: 'certification', icon: 'fas fa-certificate', label: 'Certification' },
    { id: 'seo', icon: 'fas fa-search', label: 'Audit SEO' },
    { id: 'geo', icon: 'fas fa-map-pin', label: 'Audit GEO' },
    { id: 'digital', icon: 'fas fa-globe', label: 'Digital' },
    { id: 'reputation', icon: 'fas fa-star', label: 'Réputation' },
    { id: 'social', icon: 'fas fa-share-alt', label: 'Réseaux sociaux' },
    { id: 'competitors', icon: 'fas fa-trophy', label: 'Concurrents' },
    { id: 'legal', icon: 'fas fa-gavel', label: 'Juridique' },
    { id: 'sources', icon: 'fas fa-database', label: 'Sources' }
  ];
  document.getElementById('tab-nav').innerHTML = tabs.map((t,i) =>
    `<button class="tab-btn${i===0?' active':''}" data-tab="panel-${t.id}"><i class="${t.icon}"></i> ${t.label}</button>`
  ).join('');
}

function renderAllPanels() {
  document.getElementById('content-area').innerHTML = `
    <div id="panel-general" class="tab-panel active">${panelGeneral()}</div>
    <div id="panel-certification" class="tab-panel">${panelCertification()}</div>
    <div id="panel-seo" class="tab-panel">${panelSEO()}</div>
    <div id="panel-geo" class="tab-panel">${panelGEO()}</div>
    <div id="panel-digital" class="tab-panel">${panelDigital()}</div>
    <div id="panel-reputation" class="tab-panel">${panelReputation()}</div>
    <div id="panel-social" class="tab-panel">${panelSocial()}</div>
    <div id="panel-competitors" class="tab-panel">${panelCompetitors()}</div>
    <div id="panel-legal" class="tab-panel">${panelLegal()}</div>
    <div id="panel-sources" class="tab-panel">${panelSources()}</div>
  `;
}

// ── Helpers ──
function dataRow(key, val) {
  return `<li class="data-item"><span class="data-key">${key}</span><span class="data-value">${val}</span></li>`;
}
function renderStars(rating) {
  return Array.from({length:5}, (_,i) => `<span class="star${i < Math.round(rating) ? '' : ' empty'}">★</span>`).join('');
}
function formatNum(n) { return n >= 1000 ? (n/1000).toFixed(1)+'K' : n; }
function scoreColor(s) { return s >= 70 ? '#059669' : s >= 40 ? '#d97706' : '#dc2626'; }
