const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const sections = [...document.querySelectorAll('main section[id]')];

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

sections.forEach((section) => observer.observe(section));

const counters = document.querySelectorAll('[data-count]');
let countersStarted = false;

const formatCounter = (value, target, original) => {
  if (original.includes('%')) return `${Math.round(value)} %`;
  if (target >= 1000) return Math.round(value).toLocaleString('es-CO').replace(/,/g, '.');
  return Math.round(value).toString();
};

const runCounters = () => {
  if (countersStarted) return;
  countersStarted = true;
  counters.forEach((counter) => {
    const target = Number(counter.dataset.count);
    const original = counter.textContent || '';
    const duration = 1200;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = formatCounter(target * eased, target, original);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  });
};

const metricsObserver = new IntersectionObserver((entries) => {
  if (entries.some((entry) => entry.isIntersecting)) runCounters();
}, { threshold: 0.25 });

const metrics = document.querySelector('.metrics');
if (metrics) metricsObserver.observe(metrics);
