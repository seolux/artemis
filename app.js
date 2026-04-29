// Artemis — Main Application Logic
document.addEventListener('DOMContentLoaded', () => {
  renderContextBar();
  renderStats();
  renderSidebarNav();
  renderAllPanels();
  initNav();
  animateScores();
});

const TABS = [
  { id: 'general',       icon: 'fas fa-building',     label: 'Général',         group: 'Entreprise' },
  { id: 'digital',       icon: 'fas fa-globe',        label: 'Digital',         group: 'Entreprise' },
  { id: 'reputation',    icon: 'fas fa-star',         label: 'Réputation',      group: 'Entreprise' },
  { id: 'social',        icon: 'fas fa-share-alt',    label: 'Réseaux sociaux', group: 'Entreprise' },
  { id: 'legal',         icon: 'fas fa-gavel',        label: 'Juridique',       group: 'Entreprise' },
  { id: 'certification', icon: 'fas fa-shield-alt',   label: 'Certification',   group: 'Audits' },
  { id: 'seo',           icon: 'fas fa-search',       label: 'Audit SEO',       group: 'Audits' },
  { id: 'geo',           icon: 'fas fa-map-pin',      label: 'Audit GEO',       group: 'Audits' },
  { id: 'competitors',   icon: 'fas fa-trophy',       label: 'Concurrents',     group: 'Analyse' },
  { id: 'sources',       icon: 'fas fa-database',     label: 'Sources',         group: 'Analyse' }
];

function initNav() {
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('panel-' + btn.dataset.tab).classList.add('active');
      // Update breadcrumb
      const tab = TABS.find(t => t.id === btn.dataset.tab);
      document.getElementById('breadcrumb-page').textContent = tab ? tab.label : '';
    });
  });
}

function renderSidebarNav() {
  let html = '';
  let lastGroup = '';
  TABS.forEach((t, i) => {
    if (t.group !== lastGroup) {
      html += `<div class="nav-group-label">${t.group}</div>`;
      lastGroup = t.group;
    }
    html += `<button class="nav-item${i === 0 ? ' active' : ''}" data-tab="${t.id}" title="${t.label}">
      <i class="${t.icon}"></i>
      <span class="nav-label">${t.label}</span>
    </button>`;
  });
  document.getElementById('sidebar-nav').innerHTML = html;
}

function renderContextBar() {
  const d = COMPANY_DATA, c = d.certification;
  const levelInfo = c.levels.find(l => l.id === c.level);
  document.getElementById('context-bar').innerHTML = `
    <div class="ctx-left">
      <div class="ctx-logo">${d.logo}</div>
      <div class="ctx-info">
        <div class="ctx-name">
          ${d.name}
          <span class="status-badge ${d.status}">${d.status === 'active' ? '● Actif' : '● Inactif'}</span>
          <span class="cert-badge ${c.level}"><i class="${levelInfo.icon}"></i> ${levelInfo.label}</span>
        </div>
        <div class="ctx-meta">
          <span><i class="fas fa-map-marker-alt"></i> Luxembourg</span>
          <span><i class="fas fa-industry"></i> ${d.sector}</span>
          <span><i class="fas fa-users"></i> ${d.employees} emp.</span>
          <span><i class="fas fa-globe"></i> <a href="${d.contact.website}" target="_blank">${d.whois.domain}</a></span>
          <span><i class="fas fa-user-tie"></i> ${d.gerant}</span>
        </div>
      </div>
    </div>
    <div class="ctx-scores">
      ${renderScoreCircle(d.scores.completeness, 'Complétude', '--accent')}
      ${renderScoreCircle(d.scores.digitalPresence, 'Digital', '--accent-2')}
      ${renderScoreCircle(d.scores.reputation, 'Réputation', '--accent-4')}
    </div>
    <div class="ctx-breadcrumb">
      <span class="breadcrumb-root"><i class="fas fa-home"></i></span>
      <span class="breadcrumb-sep">›</span>
      <span id="breadcrumb-page">Général</span>
    </div>`;
}

function renderScoreCircle(value, label, colorVar) {
  const r = 20, c = 2 * Math.PI * r, offset = c - (value / 100) * c;
  return `<div class="score-circle">
    <div class="score-ring">
      <svg viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="${r}" fill="none" stroke="var(--border)" stroke-width="3"/>
        <circle cx="24" cy="24" r="${r}" fill="none" stroke="var(${colorVar})" stroke-width="3"
          stroke-dasharray="${c}" stroke-dashoffset="${c}" data-target="${offset}"
          stroke-linecap="round" transform="rotate(-90 24 24)" class="score-arc"/>
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
    { icon: 'fas fa-comment', label: 'Avis', value: d.googleBusiness.totalReviews + 12, color: '#059669', bg: '#ecfdf5' },
    { icon: 'fas fa-search', label: 'SEO', value: d.seo.globalScore + '/100', color: '#dc2626', bg: '#fef2f2' },
    { icon: 'fas fa-map-pin', label: 'GEO', value: d.geo.globalScore + '/100', color: '#db2777', bg: '#fdf2f8' }
  ];
  document.getElementById('stats-row').innerHTML = stats.map((s,i) => `
    <div class="stat-card animate-in" style="animation-delay:${i*0.04}s">
      <div class="stat-icon" style="background:${s.bg};color:${s.color}"><i class="${s.icon}"></i></div>
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>`).join('');
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
