(() => {
  'use strict';
  const data = window.portfolioData;
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const safeUrl = value => { try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url.href : ''; } catch { return ''; } };
  const external = (url, label) => `<a href="${escape(safeUrl(url))}" target="_blank" rel="noopener noreferrer" class="project-link">${escape(label)} <span aria-hidden="true">↗</span><span class="sr-only"> (nouvel onglet)</span></a>`;
  const tags = items => items.map(item => `<span class="skill-tag">${escape(item)}</span>`).join('');
  document.querySelector('#skills-grid').innerHTML = data.skills.map((group, i) => `<article class="skill-card"><span class="card-number">0${i + 1}</span><h3>${escape(group.title)}</h3><p>${escape(group.description)}</p><div class="skill-levels">${group.items.map((item, index) => `<div class="skill-level"><div class="skill-level-label"><span>${escape(item)}</span><strong>${group.levels[index]} %</strong></div><meter min="0" max="100" value="${group.levels[index]}" aria-label="${escape(item)} : autoévaluation">${group.levels[index]} %</meter></div>`).join('')}</div></article>`).join('');
  const renderProject = (project, index) => {
    const shots = project.gallery || (project.image ? [{ src: project.image, label: project.alt }] : []);
    const preview = project.image
      ? `<img src="${escape(project.image)}" alt="${escape(project.alt)}" loading="lazy" width="640" height="400">`
      : `<div class="project-placeholder"><strong>${escape(project.title)}</strong></div>`;
    const image = shots.length
      ? `<button type="button" class="project-image gallery-trigger${project.contain ? ' contain' : ''}" data-gallery="${index}" aria-label="Voir les captures de ${escape(project.title)}" aria-haspopup="dialog">${preview}<span class="preview-label" aria-hidden="true">${shots.length > 1 ? `${shots.length} captures` : 'Agrandir'} <span>↗</span></span></button>`
      : `<div class="project-image">${preview}</div>`;
    return `<article class="project-card${project.featured ? ' project-featured' : ''} bg-white shadow-lg">${image}<div class="project-content"><p class="eyebrow">${escape(project.category)}</p><h4>${escape(project.title)}</h4><p>${escape(project.description)}</p>${project.technologies.length ? `<div class="tags">${tags(project.technologies)}</div>` : ''}<div class="project-actions">${safeUrl(project.live) ? external(project.live, 'Voir le projet') : ''}${safeUrl(project.repository) ? external(project.repository, 'Code source') : ''}${shots.length > 1 ? `<button type="button" class="project-link" data-gallery="${index}" aria-haspopup="dialog">Parcourir les captures <span aria-hidden="true">↗</span></button>` : ''}</div></div></article>`;
  };
  const projectGroups = [
    { platform: 'web', title: 'Projets web', description: 'Des plateformes et des outils à découvrir dans le navigateur.' },
    { platform: 'mobile', title: 'Applications mobiles', description: 'Des expériences conçues pour le mobile, dont GraphX Lab en version compagnon.' }
  ];
  document.querySelector('#projects-grid').innerHTML = projectGroups.map(group => {
    const cards = data.projects.map((project, index) => project.platform === group.platform ? renderProject(project, index) : '').join('');
    return cards ? `<section class="project-group" aria-labelledby="projects-${group.platform}-title"><div class="project-group-heading"><h3 id="projects-${group.platform}-title">${group.title}</h3><p>${group.description}</p></div><div class="project-group-grid">${cards}</div></section>` : '';
  }).join('') || '<p>Aucun projet présenté pour le moment.</p>';
  document.querySelector('#profiles-grid').innerHTML = data.profiles.filter(profile => safeUrl(profile.url)).map(profile => `<article class="profile-card"><h3>${escape(profile.name)}</h3><p>${escape(profile.description)}</p>${external(profile.url, profile.label)}</article>`).join('');
  const button = document.querySelector('#mobile-menu-btn');
  const menu = document.querySelector('#mobile-menu');
  const closeButton = document.querySelector('#mobile-close');
  function closeMenu(restore = true) { menu.classList.add('hidden'); button.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; if (restore) button.focus(); }
  button.addEventListener('click', () => { menu.classList.remove('hidden'); button.setAttribute('aria-expanded', 'true'); document.body.style.overflow = 'hidden'; closeButton.focus(); });
  closeButton.addEventListener('click', () => closeMenu());
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', event => {
    if (menu.classList.contains('hidden')) return;
    if (event.key === 'Escape') closeMenu();
    if (event.key === 'Tab') {
      const elements = [...menu.querySelectorAll('a[href],button')]; const first = elements[0]; const last = elements.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  matchMedia('(min-width: 768px)').addEventListener('change', event => { if (event.matches) closeMenu(false); });
  const sectionLinks = [...document.querySelectorAll('.nav-link, .mobile-link')];
  if ('IntersectionObserver' in window) {
    const visibleSections = new Map();
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) visibleSections.set(entry.target.id, entry.target);
        else visibleSections.delete(entry.target.id);
      });
      const current = [...visibleSections.values()].sort((a, b) =>
        Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top)
      )[0];
      sectionLinks.forEach(link => {
        if (current && link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
    document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));
  }
  document.querySelector('#contact-form').addEventListener('submit', event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Contact portfolio — ${form.get('name')}`);
    const body = encodeURIComponent(`Nom : ${form.get('name')}\nEmail : ${form.get('email')}\n\n${form.get('message')}`);
    window.location.href = `mailto:ephraimmonga5@gmail.com?subject=${subject}&body=${body}`;
    document.querySelector('#contact-status').textContent = 'Si aucune application ne s’ouvre, écrivez directement à ephraimmonga5@gmail.com.';
  });
  document.querySelector('#year').textContent = new Date().getFullYear();
  if (window.lucide) window.lucide.createIcons();
})();
