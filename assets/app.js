(() => {
  'use strict';
  const data = window.portfolioData;
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const safeUrl = value => { try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url.href : ''; } catch { return ''; } };
  const external = (url, label) => `<a href="${escape(safeUrl(url))}" target="_blank" rel="noopener noreferrer" class="project-link">${escape(label)} <span aria-hidden="true">↗</span><span class="sr-only"> (nouvel onglet)</span></a>`;
  const tags = items => items.map(item => `<span class="skill-tag">${escape(item)}</span>`).join('');
  document.querySelector('#skills-grid').innerHTML = data.skills.map((group, i) => `<article class="skill-card"><span class="card-number">0${i + 1}</span><h3>${escape(group.title)}</h3><p>${escape(group.description)}</p><div class="tags">${tags(group.items)}</div></article>`).join('');
  document.querySelector('#projects-grid').innerHTML = data.projects.length ? data.projects.map(project => `<article class="project-card bg-white shadow-lg"><div class="project-image${project.contain ? ' contain' : ''}">${project.image ? `<img src="${escape(project.image)}" alt="${escape(project.alt)}" loading="lazy" width="640" height="400">` : `<div class="project-placeholder"><strong>${escape(project.title)}</strong><span>Capture non renseignée</span></div>`}</div><div class="project-content"><p class="eyebrow">${escape(project.category)}</p><h3>${escape(project.title)}</h3><p>${escape(project.description)}</p><div class="tags">${tags(project.technologies)}</div><div class="project-actions">${safeUrl(project.live) ? external(project.live, 'Voir le projet') : '<span class="empty-link">Démo non renseignée</span>'}${safeUrl(project.repository) ? external(project.repository, 'Code source') : '<span class="empty-link">Dépôt non renseigné</span>'}</div></div></article>`).join('') : '<p>Aucun projet présenté pour le moment.</p>';
  document.querySelector('#profiles-grid').innerHTML = data.profiles.map(profile => `<article class="profile-card"><h3>${escape(profile.name)}</h3><p>${escape(profile.description)}</p>${safeUrl(profile.url) ? external(profile.url, profile.label) : '<span class="empty-link">Profil à renseigner</span>'}</article>`).join('');
  const skills = new Set(data.skills.flatMap(group => group.items).map(item => item.toLowerCase())).size;
  const profiles = data.profiles.filter(profile => safeUrl(profile.url)).length;
  const documented = data.projects.filter(project => project.title && project.description && project.technologies.length && (safeUrl(project.live) || safeUrl(project.repository))).length;
  const criteria = [
    { label: 'Présentation personnelle', points: data.presentation.trim() ? 20 : 0, detail: '20 points si une présentation est renseignée.' },
    { label: 'Compétences', points: skills ? 20 : 0, detail: '20 points si au moins une compétence est renseignée.' },
    { label: 'Projets documentés', points: Math.min(documented, 3) * 10, detail: '10 points par projet avec titre, description, technologies et lien ; maximum 30.' },
    { label: 'CV téléchargeable', points: data.cv ? 20 : 0, detail: '20 points si le PDF est renseigné et fourni avec le site.' },
    { label: 'Profils professionnels', points: Math.min(profiles, 2) * 5, detail: '5 points par lien de profil renseigné ; maximum 10.' }
  ];
  const score = criteria.reduce((total, criterion) => total + criterion.points, 0);
  document.querySelector('#portfolio-stats').innerHTML = [[data.projects.length, 'Projets présentés'], [skills, 'Compétences renseignées'], [profiles, 'Profils renseignés'], [`${score} %`, 'Complétude']].map(([value,label]) => `<div class="stat"><strong>${value}</strong><span>${label}</span></div>`).join('');
  document.querySelector('#completion-description').textContent = `${score} % — ${documented} projet(s) documenté(s), ${profiles} profil(s) renseigné(s). Les liens sont comptés, sans connexion aux comptes.`;
  const progress = document.querySelector('#completion-progress'); progress.value = score; progress.textContent = `${score} %`; progress.setAttribute('aria-label', 'Complétude du portfolio');
  document.querySelector('#completion-criteria').innerHTML = criteria.map(criterion => `<li><strong>${escape(criterion.label)} : ${criterion.points} points.</strong> ${escape(criterion.detail)}</li>`).join('');
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
