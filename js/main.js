// js/main.js — Interactividad de la página principal

// ====== SCROLL PROGRESS ======
const progressBar = document.querySelector('.scroll-progress');
window.addEventListener('scroll', () => {
  if(!progressBar) return;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = ((window.scrollY / total) * 100) + '%';
}, { passive: true });

// ====== SCROLL ANIMATIONS ======
const animObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.animate-on-scroll').forEach(el => animObs.observe(el));

// ====== KPI COUNTER ANIMATION ======
function animateCounter(el){
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const isDecimal = String(target).includes('.');
  const duration = 1800;
  const start = performance.now();
  function tick(now){
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;
    el.textContent = prefix + (isDecimal ? value.toFixed(1) : Math.floor(value)) + suffix;
    if(progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const kpiObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      animateCounter(e.target);
      kpiObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.kpi-value[data-target]').forEach(el => kpiObs.observe(el));

// ====== PHASE TABS ======
const phaseTabs = document.querySelectorAll('.phase-tab');
const phaseContents = document.querySelectorAll('.phase-content');

phaseTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const phase = tab.dataset.phase;
    phaseTabs.forEach(t => t.classList.remove('active'));
    phaseContents.forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    const content = document.getElementById('phase-' + phase);
    if(content){
      content.classList.add('active');
      // Re-animate impact bars
      content.querySelectorAll('.impact-fill').forEach(bar => {
        bar.style.width = '0';
        const w = bar.dataset.width;
        setTimeout(() => { bar.style.width = w; }, 100);
      });
      // On mobile, scroll smoothly to phase content after transition
      if(window.innerWidth <= 640){
        setTimeout(() => {
          content.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 80);
      }
    }
  });
});

// Trigger first phase bars on load
window.addEventListener('load', () => {
  const firstContent = document.querySelector('.phase-content.active');
  if(firstContent){
    firstContent.querySelectorAll('.impact-fill').forEach(bar => {
      setTimeout(() => { bar.style.width = bar.dataset.width; }, 400);
    });
  }
});

// ====== ACTIVE NAV LINK ON SCROLL ======
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

const sectionObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      navLinks.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id);
      });
    }
  });
}, { rootMargin: '-40% 0px -40% 0px' });

sections.forEach(s => sectionObs.observe(s));
