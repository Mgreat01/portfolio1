(() => {
  'use strict';
  const dialog = document.querySelector('#project-gallery');
  const title = document.querySelector('#gallery-title');
  const image = document.querySelector('#gallery-image');
  const caption = document.querySelector('#gallery-caption');
  const count = document.querySelector('#gallery-count');
  const thumbnails = document.querySelector('#gallery-thumbnails');
  const previous = document.querySelector('#gallery-prev');
  const next = document.querySelector('#gallery-next');
  const close = document.querySelector('#gallery-close');
  let shots = [];
  let current = 0;
  let opener = null;
  let savedOverflow = '';

  function show(index) {
    current = (index + shots.length) % shots.length;
    const shot = shots[current];
    image.src = shot.src;
    image.alt = shot.label;
    image.classList.toggle('mobile-capture', shot.format === 'mobile');
    caption.textContent = shot.label;
    count.textContent = `${current + 1} / ${shots.length}`;
    [...thumbnails.children].forEach((button, position) => {
      button.setAttribute('aria-pressed', String(position === current));
    });
  }

  document.querySelector('#projects-grid').addEventListener('click', event => {
    const trigger = event.target.closest('[data-gallery]');
    if (!trigger) return;
    const project = window.portfolioData.projects[Number(trigger.dataset.gallery)];
    if (!project) return;
    shots = project.gallery || (project.image ? [{ src: project.image, label: project.alt }] : []);
    if (!shots.length) return;
    // Une image reste consultable sur les navigateurs sans dialogue natif.
    if (typeof dialog.showModal !== 'function') {
      window.open(shots[0].src, '_blank', 'noopener,noreferrer');
      return;
    }
    opener = trigger;
    title.textContent = project.title;
    thumbnails.replaceChildren();
    shots.forEach((shot, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('aria-label', shot.label);
      button.setAttribute('aria-pressed', 'false');
      const thumbnail = document.createElement('img');
      thumbnail.src = shot.src;
      thumbnail.alt = '';
      thumbnail.loading = 'lazy';
      button.append(thumbnail);
      button.addEventListener('click', () => show(index));
      thumbnails.append(button);
    });
    previous.disabled = next.disabled = shots.length < 2;
    thumbnails.hidden = shots.length < 2;
    show(0);
    savedOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    close.focus();
  });
  previous.addEventListener('click', () => show(current - 1));
  next.addEventListener('click', () => show(current + 1));
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      show(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.style.overflow = savedOverflow;
    opener?.focus();
  });
})();
