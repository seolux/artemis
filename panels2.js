// Artemis — Panel Renderers (Part 2: Reputation, Social, Legal, Competitors, Sources)

function panelReputation() {
  const d = COMPANY_DATA, gb = d.googleBusiness;
  return `<div class="grid-2">
    <div class="card animate-in">
      <div class="card-header"><span class="card-title"><i class="fab fa-google"></i> Google Business Profile</span><span class="source-tag google">Google</span></div>
      <div style="text-align:center;padding:16px 0">
        <div style="font-size:48px;font-weight:800">${gb.rating}</div>
        <div class="stars" style="justify-content:center;margin:8px 0">${renderStars(gb.rating)}</div>
        <div style="font-size:13px;color:var(--text-muted)">${gb.totalReviews} avis</div>
      </div>
      <ul class="data-list">
        ${dataRow('Catégorie principale', gb.category)}
        ${dataRow('Catégories secondaires', gb.secondaryCategories.join(', '))}
        ${dataRow('Vérifié', gb.verified ? '<span style="color:#059669">✓ Oui</span>' : '✗ Non')}
        ${dataRow('Photos', gb.photos)}
        ${dataRow('Taux de réponse', gb.responseRate)}
        ${dataRow('Temps de réponse', gb.avgResponseTime)}
        ${dataRow('Attributs', gb.attributes.join(', '))}
      </ul>
    </div>
    <div class="card animate-in">
      <div class="card-header"><span class="card-title"><i class="fas fa-chart-bar"></i> Distribution des notes</span></div>
      ${[5,4,3,2,1].map(n => {
        const count = gb.ratingDistribution[n];
        const pct = (count / gb.totalReviews * 100).toFixed(0);
        return `<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="font-size:13px;width:24px;text-align:right;color:var(--text-secondary)">${n}★</span>
          <div class="progress-bar" style="flex:1;height:8px"><div class="progress-fill" style="width:${pct}%;background:var(--accent-3)"></div></div>
          <span style="font-size:12px;color:var(--text-muted);width:28px">${count}</span>
          <span style="font-size:11px;color:var(--text-muted);width:32px">${pct}%</span>
        </div>`;
      }).join('')}
      <div style="margin-top:16px;padding:12px;background:var(--bg-glass);border-radius:var(--radius-md)">
        <div style="font-size:13px;color:var(--text-secondary)"><i class="fas fa-chart-line" style="color:var(--accent-light);margin-right:6px"></i> Sentiment global : <strong style="color:#059669">Positif (78%)</strong></div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:4px">Basé sur l'analyse de ${gb.totalReviews} avis Google + 12 avis Editus</div>
      </div>
    </div>
    <div class="card full animate-in">
      <div class="card-header"><span class="card-title"><i class="fas fa-comments"></i> Derniers avis (${d.reviews.length})</span></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
        ${d.reviews.map(r => `
          <div class="review-item">
            <div class="review-header">
              <div class="review-avatar">${r.author.charAt(0)}</div>
              <div style="flex:1"><div class="review-author">${r.author}</div><div class="review-date">${r.date} · ${r.source}</div></div>
              <div>${renderStars(r.rating)}</div>
            </div>
            <div class="review-text">${r.text}</div>
            <div class="review-helpful"><i class="fas fa-thumbs-up"></i> ${r.helpful} personnes ont trouvé cet avis utile</div>
          </div>`).join('')}
      </div>
    </div>
  </div>`;
}

function panelSocial() {
  const d = COMPANY_DATA;
  return `<div class="social-grid">
    ${d.social.map(s => `
      <div class="social-card ${s.status==='absent'?'absent':''} animate-in">
        <div class="social-icon" style="background:${s.color}22;color:${s.color}"><i class="${s.icon}"></i></div>
        <div class="social-info">
          <div style="display:flex;align-items:center;gap:8px">
            <div class="social-name">${s.platform}</div>
            ${s.status==='absent'?'<span style="font-size:10px;padding:2px 6px;background:#fef2f2;color:#dc2626;border-radius:8px">Non présent</span>':''}
          </div>
          <div class="social-handle">${s.handle}</div>
          <div class="social-stats">
            ${s.followers ? `<span class="social-stat"><strong>${formatNum(s.followers)}</strong> abonnés</span>` : ''}
            ${s.posts ? `<span class="social-stat"><strong>${s.posts}</strong> posts</span>` : ''}
            ${s.rating ? `<span class="social-stat"><strong>${s.rating}</strong> ★ (${s.reviews})</span>` : ''}
            ${s.engagement ? `<span class="social-stat"><strong>${s.engagement}</strong> engage.</span>` : ''}
            ${s.lastPost ? `<span class="social-stat">Dernier post: ${s.lastPost}</span>` : ''}
          </div>
        </div>
      </div>`).join('')}
  </div>`;
}

function panelCompetitors() {
  const d = COMPANY_DATA;
  const luxRow = { name: d.name, location: 'Luxembourg-Ville', rating: d.googleBusiness.rating, reviews: d.googleBusiness.totalReviews,
    employees: d.employees, founded: d.founded, seoScore: d.seo.globalScore, geoScore: d.geo.globalScore, certLevel: d.certification.level,
    social: { facebook: d.social[0].followers, instagram: d.social[1].followers }, isSelf: true };
  const all = [luxRow, ...d.competitors];

  return `<div class="card full animate-in">
    <div class="card-header"><span class="card-title"><i class="fas fa-trophy"></i> Analyse concurrentielle (${d.competitors.length} concurrents)</span></div>
    <div style="overflow-x:auto">
      <table class="comp-table">
        <thead><tr>
          <th>Entreprise</th><th>Lieu</th><th>Note</th><th>Avis</th><th>Employés</th><th>Fondée</th>
          <th>SEO</th><th>GEO</th><th>Certification</th><th>Facebook</th><th>Instagram</th>
        </tr></thead>
        <tbody>
          ${all.map(c => {
            const certColor = c.certLevel==='gold'?'var(--cert-gold)':c.certLevel==='silver'?'var(--cert-silver)':c.certLevel==='bronze'?'var(--cert-bronze)':'var(--text-muted)';
            return `<tr style="${c.isSelf?'background:var(--accent-glow)':''}">
              <td><span class="comp-name">${c.isSelf?'<i class="fas fa-arrow-right" style="color:var(--accent-light);font-size:10px"></i>':''} ${c.name}</span></td>
              <td style="color:var(--text-secondary)">${c.location}</td>
              <td><span style="color:${c.rating>=4.2?'#059669':c.rating>=3.8?'#d97706':'#dc2626'}">${c.rating} ★</span></td>
              <td>${c.reviews}</td>
              <td style="color:var(--text-secondary)">${c.employees}</td>
              <td style="color:var(--text-secondary)">${c.founded}</td>
              <td><span style="color:${scoreColor(c.seoScore)};font-weight:600">${c.seoScore}</span></td>
              <td><span style="color:${scoreColor(c.geoScore)};font-weight:600">${c.geoScore}</span></td>
              <td><span class="comp-pill" style="background:${certColor}22;color:${certColor}">${c.certLevel}</span></td>
              <td>${formatNum(c.social.facebook)}</td>
              <td>${formatNum(c.social.instagram)}</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
  </div>
  <div class="grid-2" style="margin-top:20px">
    ${d.competitors.map(c => `
      <div class="card animate-in">
        <div class="card-header">
          <span class="card-title">${c.name}</span>
          <span style="font-size:12px;color:var(--text-muted)">${c.location}</span>
        </div>
        <div style="display:flex;gap:16px;margin-bottom:12px">
          <div style="text-align:center;flex:1;padding:8px;background:var(--bg-glass);border-radius:var(--radius-sm)"><div style="font-size:18px;font-weight:700">${c.rating}★</div><div style="font-size:11px;color:var(--text-muted)">${c.reviews} avis</div></div>
          <div style="text-align:center;flex:1;padding:8px;background:var(--bg-glass);border-radius:var(--radius-sm)"><div style="font-size:18px;font-weight:700;color:${scoreColor(c.seoScore)}">${c.seoScore}</div><div style="font-size:11px;color:var(--text-muted)">SEO</div></div>
          <div style="text-align:center;flex:1;padding:8px;background:var(--bg-glass);border-radius:var(--radius-sm)"><div style="font-size:18px;font-weight:700;color:${scoreColor(c.geoScore)}">${c.geoScore}</div><div style="font-size:11px;color:var(--text-muted)">GEO</div></div>
        </div>
        <div style="font-size:12px;margin-bottom:8px"><strong style="color:#059669">+ Forces :</strong> <span style="color:var(--text-secondary)">${c.strengths.join(', ')}</span></div>
        <div style="font-size:12px"><strong style="color:#dc2626">− Faiblesses :</strong> <span style="color:var(--text-secondary)">${c.weaknesses.join(', ')}</span></div>
      </div>`).join('')}
  </div>`;
}

function panelLegal() {
  const d = COMPANY_DATA;
  return `<div class="grid-2">
    <div class="card animate-in">
      <div class="card-header"><span class="card-title"><i class="fas fa-balance-scale"></i> Informations juridiques</span><span class="source-tag rcs">RCS</span></div>
      <ul class="data-list">
        ${dataRow('Raison sociale', d.legalName)}
        ${dataRow('Forme juridique', d.formeJuridique)}
        ${dataRow('Gérant', d.gerant)}
        ${dataRow('N° RCS', d.rcs)}
        ${dataRow('N° TVA', d.tva)}
        ${dataRow('Capital social', d.capitalSocial)}
        ${dataRow('Siège social', d.siegeSocial)}
        ${dataRow('Objet social', d.objetSocial)}
        ${dataRow("Date d'immatriculation", d.founded)}
      </ul>
    </div>
    <div class="card animate-in">
      <div class="card-header"><span class="card-title"><i class="fas fa-history"></i> Chronologie</span></div>
      <div class="timeline">
        ${d.timeline.map(t => `
          <div class="timeline-item">
            <div class="timeline-dot"><i class="${t.icon}"></i></div>
            <div class="timeline-date">${t.date}</div>
            <div class="timeline-title">${t.title}</div>
            <div class="timeline-desc">${t.desc}</div>
          </div>`).join('')}
      </div>
    </div>
  </div>`;
}

function panelSources() {
  const d = COMPANY_DATA;
  const total = d.sources.reduce((a,s) => a+s.dataPoints, 0);
  return `<div class="card full animate-in">
    <div class="card-header">
      <span class="card-title"><i class="fas fa-satellite-dish"></i> Sources de données (${d.sources.length})</span>
      <span style="font-size:13px;color:var(--text-muted)">${total} data points collectés</span>
    </div>
    <div style="overflow-x:auto">
      <table class="comp-table" style="min-width: 900px; margin-top: 10px;">
        <thead><tr>
          <th style="width:25%">Source & Type</th>
          <th style="width:15%">Statut & Scan</th>
          <th style="width:30%">Données récupérées</th>
          <th style="width:10%;text-align:center">Points</th>
          <th style="width:20%">Note de Crawlabilité</th>
        </tr></thead>
        <tbody>
          ${d.sources.map(s => {
            const crawlColor = s.crawlabilityScore >= 80 ? '#059669' : s.crawlabilityScore >= 50 ? '#d97706' : '#dc2626';
            const crawlBg = s.crawlabilityScore >= 80 ? '#ecfdf5' : s.crawlabilityScore >= 50 ? '#fffbeb' : '#fef2f2';
            
            return `<tr>
              <td>
                <div style="display:flex;align-items:center;gap:12px">
                  <div style="width:32px;height:32px;border-radius:var(--radius-sm);background:var(--bg-glass);display:grid;place-items:center;color:var(--accent-light);flex-shrink:0"><i class="${s.icon}"></i></div>
                  <div>
                    <div style="font-size:14px;font-weight:600">${s.name}</div>
                    <div style="font-size:11px;color:var(--text-muted)">${s.url} • <span style="color:var(--text-secondary)">${s.type}</span></div>
                  </div>
                </div>
              </td>
              <td>
                <div style="margin-bottom:4px">
                  <span style="font-size:11px;padding:3px 8px;border-radius:10px;background:${s.status==='ok'?'#ecfdf5':'#fffbeb'};color:${s.status==='ok'?'#059669':'#d97706'}">${s.status==='ok'?'✓ Complet':'⚠ Partiel'}</span>
                </div>
                <div style="font-size:11px;color:var(--text-muted)">${s.lastScan}</div>
              </td>
              <td>
                <div style="display:flex;flex-wrap:wrap;gap:4px">
                  ${s.dataRecovered.map(tag => `<span style="font-size:10px;padding:2px 6px;background:var(--bg-glass);border:1px solid var(--border);border-radius:4px;color:var(--text-secondary)">${tag}</span>`).join('')}
                </div>
              </td>
              <td style="text-align:center">
                <span style="font-size:16px;font-weight:600;color:var(--accent-light)">${s.dataPoints}</span>
              </td>
              <td>
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
                  <div class="progress-bar" style="flex:1;height:6px;background:var(--bg-glass)"><div class="progress-fill" style="width:${s.crawlabilityScore}%;background:${crawlColor}"></div></div>
                  <span style="font-size:12px;font-weight:600;color:${crawlColor}">${s.crawlabilityScore}/100</span>
                </div>
                <div style="font-size:10px;color:var(--text-muted);line-height:1.3" title="${s.crawlabilityNotes}">
                  ${s.crawlabilityNotes}
                </div>
              </td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
  </div>`;
}

function panelAPI() {
  return `<div class="card full animate-in">
    <div class="card-header" style="margin-bottom:8px">
      <span class="card-title"><i class="fas fa-code"></i> API & Model Context Protocol (MCP)</span>
      <span class="cert-badge platinum"><i class="fas fa-crown"></i> Enterprise Only</span>
    </div>
    <div style="font-size:13px;color:var(--text-secondary);margin-bottom:24px">
      Artemis by Editus.lu fournit un accès programmatique complet aux données d'intelligence d'entreprise pour intégrer ces informations directement dans vos CRM, ERP ou assistants IA.
    </div>

    <div class="grid-2">
      <!-- REST API -->
      <div style="background:var(--bg-secondary);border:1px solid var(--border);border-radius:var(--radius-md);padding:20px">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
          <div style="width:36px;height:36px;border-radius:8px;background:#eef2ff;color:#4f46e5;display:grid;place-items:center;font-size:16px"><i class="fas fa-server"></i></div>
          <div><div style="font-size:14px;font-weight:600">REST API v2</div><div style="font-size:11px;color:var(--text-muted)">Format JSON / Accès direct</div></div>
        </div>
        <div style="font-size:12px;color:var(--text-secondary);margin-bottom:12px">Recherchez des entreprises, obtenez les scores SEO/GEO et récupérez les données légales via notre API REST haute disponibilité.</div>
        <div style="background:#1e1e1e;color:#d4d4d4;padding:12px;border-radius:6px;font-family:var(--font-mono);font-size:11px;overflow-x:auto;line-height:1.5">
<span style="color:#569cd6">curl</span> -X GET "https://api.artemis.lu/v2/companies/LUXSUUM" \\
     -H <span style="color:#ce9178">"Authorization: Bearer YOUR_API_KEY"</span>
        </div>
        <button class="btn-outline" style="margin-top:16px;width:100%;justify-content:center">Documentation API</button>
      </div>

      <!-- MCP -->
      <div style="background:var(--bg-secondary);border:1px solid var(--border);border-radius:var(--radius-md);padding:20px">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
          <div style="width:36px;height:36px;border-radius:8px;background:#ecfdf5;color:#059669;display:grid;place-items:center;font-size:16px"><i class="fas fa-microchip"></i></div>
          <div><div style="font-size:14px;font-weight:600">Model Context Protocol</div><div style="font-size:11px;color:var(--text-muted)">Intégration LLM (Claude, ChatGPT...)</div></div>
        </div>
        <div style="font-size:12px;color:var(--text-secondary);margin-bottom:12px">Permettez à vos agents IA de requêter Artemis pour rédiger des analyses concurrentielles ou valider des prospects en langage naturel.</div>
        <div style="background:#1e1e1e;color:#d4d4d4;padding:12px;border-radius:6px;font-family:var(--font-mono);font-size:11px;overflow-x:auto;line-height:1.5">
<span style="color:#dcdcaa">call</span>:<span style="color:#9cdcfe">artemis_api:get_company</span> {
  <span style="color:#ce9178">"rcs"</span>: <span style="color:#b5cea8">"B234567"</span>,
  <span style="color:#ce9178">"include_competitors"</span>: <span style="color:#569cd6">true</span>
}
        </div>
        <button class="btn-outline" style="margin-top:16px;width:100%;justify-content:center">Installer le Serveur MCP</button>
      </div>
    </div>
  </div>`;
}
