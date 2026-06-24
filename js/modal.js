// js/modal.js — Sistema de panel lateral para definiciones

(function(){
  let overlay, panel, panelBody, currentTermId = null;

  function init(){
    overlay = document.getElementById('modal-overlay');
    panel   = document.getElementById('def-panel');
    if(!overlay || !panel) return;
    panelBody = panel.querySelector('#def-panel-body');

    overlay.addEventListener('click', close);
    panel.querySelector('#def-panel-close').addEventListener('click', close);
    document.addEventListener('keydown', e => { if(e.key==='Escape') close(); });

    document.querySelectorAll('.term-link').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const termId = link.dataset.term;
        if(termId) openDefinition(termId);
      });
    });
  }

  function openDefinition(termId){
    const def = DEFINITIONS[termId];
    if(!def){ console.warn('Definition not found:', termId); return; }
    currentTermId = termId;
    renderPanel(def);
    overlay.classList.add('open');
    panel.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close(){
    overlay.classList.remove('open');
    panel.classList.remove('open');
    document.body.style.overflow = '';
    currentTermId = null;
  }

  function renderPanel(def){
    const relatedLinks = (def.related||[]).map(r => {
      const rel = DEFINITIONS[r];
      if(!rel) return '';
      return `<button class="def-related-btn" onclick="window.openDef('${r}')">${rel.icon} ${rel.title}</button>`;
    }).join('');

    const keyConcepts = (def.key_concepts||[]).map(kc =>
      `<div class="def-concept">
        <div class="def-concept-dot"></div>
        <div class="def-concept-text"><strong>${kc.term}:</strong> ${kc.def}</div>
      </div>`
    ).join('');

    panelBody.innerHTML = `
      <div class="def-cat-badge" style="background:${def.categoryColor}18;color:${def.categoryColor}">
        ${def.category}
      </div>
      <div class="def-panel-icon">${def.icon}</div>
      <h2 class="def-panel-title">${def.title}</h2>
      <p class="def-panel-subtitle">${def.subtitle}</p>

      <div class="def-section">
        <div class="def-section-title">¿Qué es?</div>
        <div class="def-section-content">${def.definition.replace(/\n\n/g,'</p><p>').replace(/^/,'<p>').replace(/$/,'</p>')}</div>
      </div>

      ${def.key_concepts?.length ? `
      <div class="def-section">
        <div class="def-section-title">Conceptos Clave</div>
        <div class="def-concepts">${keyConcepts}</div>
      </div>` : ''}

      <div class="def-section">
        <div class="def-section-title">¿Por qué importa?</div>
        <div class="def-section-content"><p>${def.why_matters}</p></div>
      </div>

      <div class="def-section">
        <div class="def-section-title">En esta Propuesta</div>
        <div class="def-section-content"><p>${def.in_proposal}</p></div>
      </div>

      ${relatedLinks ? `
      <div class="def-section">
        <div class="def-section-title">Conceptos Relacionados</div>
        <div class="def-related-links">${relatedLinks}</div>
      </div>` : ''}

      <div class="def-panel-footer">
        <a href="definitions/${def.id}.html" class="btn-view-full">Ver página completa →</a>
      </div>
    `;
    panel.scrollTop = 0;
  }

  window.openDef = openDefinition;
  window.closeDefPanel = close;

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
