// js/definition-page.js — Renderiza una página de definición autónoma

(function(){
  function render(){
    if(typeof TERM_ID === 'undefined' || typeof DEFINITIONS === 'undefined') return;
    const def = DEFINITIONS[TERM_ID];
    if(!def){ document.getElementById('app').innerHTML = '<p style="padding:40px">Definición no encontrada.</p>'; return; }

    const keyConcepts = (def.key_concepts||[]).map(kc =>
      `<li><strong>${kc.term}:</strong> ${kc.def}</li>`
    ).join('');

    const relatedHtml = (def.related||[]).map(r => {
      const rel = DEFINITIONS[r];
      if(!rel) return '';
      return `<a href="${r}.html" class="related-term-card">
        <span class="related-term-icon">${rel.icon}</span>
        <div class="related-term-info">
          <div class="related-term-name">${rel.title}</div>
          <div class="related-term-cat">${rel.category}</div>
        </div>
      </a>`;
    }).join('');

    document.title = `${def.title} — Glosario | Propuesta Ingeniería de Datos`;

    document.getElementById('app').innerHTML = `
      <div class="def-page-hero">
        <div class="container">
          <nav class="def-page-breadcrumb">
            <a href="../index.html">Propuesta</a>
            <span>›</span>
            <a href="../index.html#glosario">Glosario</a>
            <span>›</span>
            <span>${def.title}</span>
          </nav>
          <div class="def-page-cat">${def.category}</div>
          <div class="def-page-icon">${def.icon}</div>
          <h1 class="def-page-title">${def.title}</h1>
          <p class="def-page-subtitle">${def.subtitle}</p>
        </div>
      </div>

      <div class="def-page-content">
        <div class="def-content-section">
          <div class="def-content-eyebrow">Definición</div>
          <div class="def-content-body">
            ${def.definition.replace(/\n\n/g,'</p><p>').replace(/^/,'<p>').replace(/$/,'</p>')}
          </div>
        </div>

        ${keyConcepts ? `
        <div class="def-content-section">
          <div class="def-content-eyebrow">Conceptos Clave</div>
          <div class="def-content-body"><ul>${keyConcepts}</ul></div>
        </div>` : ''}

        <div class="def-content-section">
          <div class="def-content-eyebrow">¿Por qué importa en Ingeniería de Datos?</div>
          <div class="def-content-body"><p>${def.why_matters}</p></div>
        </div>

        <div class="def-content-section">
          <div class="def-content-eyebrow">Aplicación en esta Propuesta</div>
          <div class="def-content-body"><p>${def.in_proposal}</p></div>
        </div>

        ${relatedHtml ? `
        <div class="def-content-section">
          <div class="def-content-eyebrow">Conceptos Relacionados</div>
          <div class="related-terms-grid">${relatedHtml}</div>
        </div>` : ''}

        <div style="margin-top:16px">
          <a href="../index.html" style="display:inline-flex;align-items:center;gap:8px;color:var(--secondary);font-weight:600;text-decoration:none;font-size:14px">
            ← Volver a la Propuesta
          </a>
        </div>
      </div>
    `;
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
