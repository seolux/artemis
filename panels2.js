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
    <div style="display:grid;gap:8px">
      ${d.sources.map(s => `
        <div style="display:flex;align-items:center;gap:16px;padding:14px 16px;background:var(--bg-glass);border-radius:var(--radius-md)">
          <div style="width:32px;height:32px;border-radius:var(--radius-sm);background:var(--bg-card);display:grid;place-items:center;color:var(--accent-light)"><i class="${s.icon}"></i></div>
          <div style="flex:1">
            <div style="font-size:14px;font-weight:500">${s.name}</div>
            <div style="font-size:12px;color:var(--text-muted)">${s.url}</div>
          </div>
          <div style="text-align:center"><div style="font-size:16px;font-weight:600">${s.dataPoints}</div><div style="font-size:10px;color:var(--text-muted)">points</div></div>
          <div style="font-size:12px;color:var(--text-muted)">${s.lastScan}</div>
          <div style="font-size:11px;padding:3px 10px;border-radius:10px;background:${s.status==='ok'?'#ecfdf5':'#fffbeb'};color:${s.status==='ok'?'#059669':'#d97706'}">${s.status==='ok'?'✓ Complet':'⚠ Partiel'}</div>
        </div>`).join('')}
    </div>
  </div>`;
}
