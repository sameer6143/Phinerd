// ============================================
// Phinerd — site interactions
// ============================================

document.getElementById('year').textContent = new Date().getFullYear();

// --- Mobile nav toggle ---
const navToggle = document.getElementById('nav-toggle');
const header = document.querySelector('.site-header');

navToggle.addEventListener('click', () => {
  const isOpen = header.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    header.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// --- Shortlist stack: tap-to-fan on touch devices (hover handles desktop) ---
const stack = document.getElementById('shortlist-stack');
if (stack) {
  stack.addEventListener('click', () => stack.classList.toggle('fan'));
}

// --- Scroll reveal ---
const revealTargets = document.querySelectorAll(
  '.process-step, .split-copy, .split-aside, .founder-inner, .feature-list li'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window && !prefersReducedMotion) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealTargets.forEach(el => observer.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('is-visible'));
}

// --- Contact form ---
// This page is static (GitHub Pages has no server), so by default the form
// composes a mailto: link with the submitted details.
//
// To collect submissions directly instead, sign up for a free form backend
// such as https://formspree.io, then:
//   1. Add action="https://formspree.io/f/YOUR_ID" method="POST" to the
//      <form id="contact-form"> element in index.html
//   2. Delete (or comment out) the JS block below, since Formspree will
//      handle the submission itself.

const form = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');

if (form && !form.hasAttribute('action')) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const role = form.role.value;
    const message = form.message.value.trim();

    const subject = encodeURIComponent(`Phinerd inquiry — ${role || 'General'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nI am a: ${role}\n\nMessage:\n${message || '(none)'}`
    );

    // Replace with the team's actual inbox address.
    const destination = 'hello@phinerd.com';

    window.location.href = `mailto:${destination}?subject=${subject}&body=${body}`;
    formNote.textContent = 'Opening your email client to send this — thanks for reaching out.';
  });
}
