// Pequeno script para interatividade: nav toggle, filtro de projetos e modal
document.addEventListener('DOMContentLoaded', () => {
  // Year auto
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('primary-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      if (nav.style.display === 'block') {
        nav.style.display = '';
      } else {
        nav.style.display = 'block';
      }
    });
  }

  // Project filter
  const filter = document.getElementById('project-filter');
  if (filter) {
    filter.addEventListener('change', (e) => {
      const value = e.target.value;
      const projects = document.querySelectorAll('.project');
      projects.forEach(p => {
        const tags = (p.dataset.tags || '').split(',');
        if (value === 'all' || tags.includes(value)) {
          p.style.display = '';
        } else {
          p.style.display = 'none';
        }
      });
    });
  }

  // Modal logic for "Ver detalhes"
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');

  document.querySelectorAll('.project-more').forEach(btn => {
    btn.addEventListener('click', (ev) => {
      ev.preventDefault();
      const id = btn.dataset.id;
      // Exemplos de conteúdo - personalize
      const content = {
        p1: `<h2>Projeto 1 — Título</h2><p>Detalhes do projeto 1: objetivo, responsabilidades, resultado. Link: <a href="#" target="_blank">ver repositório</a>.</p><p><strong>Tecnologias:</strong> HTML, CSS, JS</p>`,
        p2: `<h2>Projeto 2 — Título</h2><p>Detalhes do projeto 2: análise de dados, metodologias, resultados.</p><p><strong>Tecnologias:</strong> Python, Pandas</p>`
      };
      modalBody.innerHTML = content[id] || '<p>Detalhes não disponíveis.</p>';
      modal.hidden = false;
      modal.setAttribute('aria-hidden', 'false');
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modal.hidden = true;
      modal.setAttribute('aria-hidden', 'true');
    });
  }

  // Fechar modal com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.hidden) {
      modal.hidden = true;
      modal.setAttribute('aria-hidden', 'true');
    }
  });
});