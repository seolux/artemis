// Artemis — Panel Renderers (Part 1: General, Digital, Certification, SEO, GEO)
function panelGeneral() {
  const d = COMPANY_DATA;
  return `<div class="grid-2">
    <div class="card animate-in">
      <div class="card-header"><span class="card-title"><i class="fas fa-id-card"></i> Informations générales</span><span class="source-tag rcs">RCS</span></div>
      <ul class="data-list">
        ${dataRow('Raison sociale', d.legalName)}
        ${dataRow('Nom commercial', d.name)}
        ${dataRow('Forme juridique', d.formeJuridique)}
        ${dataRow('Gérant', d.gerant)}
        ${dataRow('N° RCS', d.rcs)}
        ${dataRow('N° TVA', d.tva)}
        ${dataRow('Capital social', d.capitalSocial)}
        ${dataRow('Siège social', d.siegeSocial)}
        ${dataRow('Objet social', d.objetSocial)}
        ${dataRow('Secteur', d.sector)}
        ${dataRow('Code NACE', d.nace)}
        ${dataRow('Date de création', d.founded)}
        ${dataRow('Effectif', d.employees + ' employés')}
      </ul>
    </div>
    <div class="card animate-in">
      <div class="card-header"><span class="card-title"><i class="fas fa-phone"></i> Contact & Horaires</span><span class="source-tag web">Web</span></div>
      <ul class="data-list">
        ${dataRow('Site web', `<a href="${d.contact.website}" target="_blank">${d.whois.domain}</a>`)}
        ${dataRow('Email', d.contact.email)}
        ${dataRow('Téléphone', d.contact.phone)}
        ${dataRow('Tél. alternatif', d.contact.phoneAlt)}
      </ul>
      <div style="margin-top:20px">
        <div class="card-title" style="margin-bottom:12px"><i class="fas fa-clock"></i> Horaires d'ouverture</div>
        <ul class="data-list">
          ${Object.entries(d.hours).map(([day,h]) => {
            const isClosed = h === 'Fermé';
            return dataRow(day.charAt(0).toUpperCase()+day.slice(1), isClosed ? '<span style="color:var(--accent-5)">'+h+'</span>' : h);
          }).join('')}
        </ul>
      </div>
    </div>
    <div class="card animate-in">
      <div class="card-header"><span class="card-title"><i class="fas fa-map-marker-alt"></i> Emplacements (${d.locations.length})</span></div>
      ${d.locations.map(loc => `
        <div style="padding:14px;background:var(--bg-glass);border-radius:var(--radius-md);margin-bottom:8px;border-left:3px solid ${loc.isPrimary?'var(--accent)':'var(--border)'}">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <div style="font-weight:600;font-size:14px">${loc.name}</div>
            ${loc.isPrimary?'<span style="font-size:10px;padding:2px 6px;background:var(--accent-glow);color:var(--accent-light);border-radius:8px">Principal</span>':''}
          </div>
          <div style="font-size:13px;color:var(--text-secondary);margin-top:4px">${loc.address}</div>
          <div style="font-size:12px;color:var(--text-muted);margin-top:4px"><i class="fas fa-tag"></i> ${loc.type} &nbsp;·&nbsp; <i class="fas fa-location-arrow"></i> ${loc.lat.toFixed(4)}, ${loc.lng.toFixed(4)}</div>
        </div>`).join('')}
      <div class="map-container" style="margin-top:12px"><i class="fas fa-map"></i>&nbsp; Carte interactive (à venir)</div>
    </div>
    <div class="card animate-in">
      <div class="card-header"><span class="card-title"><i class="fas fa-concierge-bell"></i> Services (${d.services.length})</span><span class="source-tag web">Web</span></div>
      ${d.services.map(s => `
        <div style="padding:10px 14px;background:var(--bg-glass);border-radius:var(--radius-sm);margin-bottom:6px;display:flex;justify-content:space-between;align-items:center">
          <div>
            <div style="font-size:13px;font-weight:500;display:flex;align-items:center;gap:6px"><i class="fas fa-check" style="color:var(--accent-4);font-size:10px"></i>${s.name}</div>
            <div style="font-size:12px;color:var(--text-muted);margin-left:18px">${s.detail}</div>
          </div>
          <div style="font-size:12px;color:var(--accent-light);font-weight:500;white-space:nowrap">${s.price}</div>
        </div>`).join('')}
    </div>
  </div>`;
}

function panelCertification() {
  const d = COMPANY_DATA, c = d.certification;
  const levelInfo = c.levels.find(l => l.id === c.level);
  const passCount = c.criteria.filter(x => x.status==='pass').length;
  const total = c.criteria.length;
  return `<div class="grid-2">
    <div class="cert-card animate-in">
      <div style="text-align:center;padding:16px 0">
        <div style="font-size:64px;margin-bottom:8px"><i class="${levelInfo.icon}" style="color:${levelInfo.color}"></i></div>
        <div style="font-size:28px;font-weight:800">${levelInfo.label}</div>
        <div style="font-size:13px;color:var(--text-muted);margin-top:4px">Score de certification : <strong style="color:var(--text-primary)">${c.score}/100</strong></div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:4px">Vérifié le ${c.verifiedAt}</div>
      </div>
      <div class="cert-level-bar">
        ${c.levels.filter(l=>l.id!=='none').map(l => `
          <div class="cert-level-seg" title="${l.label} (${l.min}+)">
            <div class="fill" style="width:${c.score >= l.min ? 100 : (c.score >= l.min-20 ? ((c.score-(l.min-20))/20)*100 : 0)}%;background:${l.color}"></div>
          </div>`).join('')}
      </div>
      <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-muted);margin-bottom:16px">
        ${c.levels.filter(l=>l.id!=='none').map(l => `<span style="color:${c.level===l.id?l.color:'inherit'};font-weight:${c.level===l.id?'600':'400'}">${l.label}</span>`).join('')}
      </div>
      <div style="display:flex;justify-content:center;gap:24px;padding:12px;background:var(--bg-glass);border-radius:var(--radius-md)">
        <div style="text-align:center"><div style="font-size:20px;font-weight:700;color:#34d399">${passCount}</div><div style="font-size:11px;color:var(--text-muted)">Validés</div></div>
        <div style="text-align:center"><div style="font-size:20px;font-weight:700;color:#fbbf24">${c.criteria.filter(x=>x.status==='warning').length}</div><div style="font-size:11px;color:var(--text-muted)">Attention</div></div>
        <div style="text-align:center"><div style="font-size:20px;font-weight:700;color:#f87171">${c.criteria.filter(x=>x.status==='fail').length}</div><div style="font-size:11px;color:var(--text-muted)">Échoués</div></div>
      </div>
    </div>
    <div class="card animate-in">
      <div class="card-header"><span class="card-title"><i class="fas fa-clipboard-check"></i> Critères de certification (${passCount}/${total})</span></div>
      <ul class="cert-criteria">
        ${c.criteria.map(cr => `
          <li>
            <div class="cert-status ${cr.status}"><i class="fas fa-${cr.status==='pass'?'check':cr.status==='warning'?'exclamation':'times'}"></i></div>
            <div style="flex:1">
              <div style="font-weight:500">${cr.name}</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:2px">${cr.detail} <span style="opacity:0.6">— ${cr.source}</span></div>
            </div>
          </li>`).join('')}
      </ul>
    </div>
    <div class="card full animate-in">
      <div class="card-header"><span class="card-title"><i class="fas fa-info-circle"></i> À propos de la Certification Artemis</span></div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px">
        ${c.levels.filter(l=>l.id!=='none').map(l => `
          <div style="padding:16px;background:var(--bg-glass);border-radius:var(--radius-md);text-align:center;border:1px solid ${c.level===l.id?l.color+'44':'var(--border)'}">
            <div style="font-size:28px;margin-bottom:6px"><i class="${l.icon}" style="color:${l.color}"></i></div>
            <div style="font-weight:600;color:${l.color}">${l.label}</div>
            <div style="font-size:12px;color:var(--text-muted);margin-top:4px">Score ≥ ${l.min}</div>
          </div>`).join('')}
      </div>
      <div style="margin-top:16px;font-size:13px;color:var(--text-secondary);line-height:1.7;padding:16px;background:var(--bg-glass);border-radius:var(--radius-md)">
        <strong style="color:var(--text-primary)">🛡️ La certification Artemis</strong> garantit que les données d'une entreprise ont été vérifiées et croisées entre plusieurs sources officielles. Elle évalue l'identité juridique, la cohérence des informations publiques (NAP), la conformité légale du site web, et la qualité de la présence digitale. Plus le score est élevé, plus les données sont fiables et complètes.
      </div>
    </div>
  </div>`;
}

function renderAuditPanel(config, colorVar) {
  return `<div class="grid-2">
    <div class="card animate-in">
      <div class="audit-score-big">
        <div class="big-num" style="color:${scoreColor(config.globalScore)}">${config.globalScore}</div>
        <div class="big-label">Score global sur 100</div>
        <div class="progress-bar" style="margin-top:12px;height:10px"><div class="progress-fill" style="width:${config.globalScore}%;background:${scoreColor(config.globalScore)}"></div></div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:20px">
        ${config.categories.map(cat => `
          <div style="padding:14px;background:var(--bg-glass);border-radius:var(--radius-md);text-align:center">
            <div style="font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px">${cat.name}</div>
            <div style="font-size:24px;font-weight:700;color:${scoreColor(cat.score)};margin-top:4px">${cat.score}</div>
            <div class="progress-bar" style="margin-top:6px"><div class="progress-fill" style="width:${cat.score}%;background:${scoreColor(cat.score)}"></div></div>
          </div>`).join('')}
      </div>
    </div>
    <div class="card animate-in">
      ${config.categories.map(cat => `
        <div class="audit-category">
          <div class="audit-cat-header">
            <span class="audit-cat-name"><i class="${cat.icon}" style="color:var(--accent-light)"></i> ${cat.name}</span>
            <span class="audit-cat-score" style="color:${scoreColor(cat.score)}">${cat.score}/100</span>
          </div>
          ${cat.items.map(it => `
            <div class="audit-item">
              <div class="status-dot ${it.status}"></div>
              <span class="ai-label">${it.label}</span>
              <span class="ai-value">${typeof it.value === 'boolean' ? (it.value ? '✓' : '✗') : it.value}</span>
            </div>`).join('')}
        </div>`).join('')}
    </div>
  </div>`;
}

function panelSEO() { return renderAuditPanel(COMPANY_DATA.seo, '--accent'); }
function panelGEO() { return renderAuditPanel(COMPANY_DATA.geo, '--accent-4'); }

function panelDigital() {
  const d = COMPANY_DATA, w = d.website, wh = d.whois;
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
        ${dataRow('Score Mobile', `<span style="color:${scoreColor(w.mobileScore)}">${w.mobileScore}/100</span>`)}
        ${dataRow('Score Desktop', `<span style="color:${scoreColor(w.desktopScore)}">${w.desktopScore}/100</span>`)}
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
      <div style="margin-top:20px">
        <div class="card-title" style="margin-bottom:12px"><i class="fas fa-code"></i> Technologies détectées (${w.technologies.length})</div>
        <div class="tech-tags">${w.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
      </div>
    </div>
    <div class="card full animate-in">
      <div class="card-header"><span class="card-title"><i class="fas fa-file-alt"></i> Pages indexées (${w.pages.length})</span></div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px">
        ${w.pages.map(p => `<div style="padding:8px 12px;background:var(--bg-glass);border-radius:var(--radius-sm);font-size:13px;color:var(--text-secondary)"><i class="fas fa-file" style="color:var(--text-muted);margin-right:6px;font-size:11px"></i>${p}</div>`).join('')}
      </div>
    </div>
  </div>`;
}
