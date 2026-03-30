// ===== CONTACT FORM SUBMISSION =====
function handleContactSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('contact-success');
  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const message = document.getElementById('contact-message').value.trim();
  if (!name || !email || !message) return;

  form.style.opacity = '0.5';
  form.style.pointerEvents = 'none';
  setTimeout(() => {
    form.style.display = 'none';
    successMsg.style.display = 'block';
  }, 700);
}

// ===== NEWSLETTER FORM =====
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  const btn = e.target.querySelector('button');
  if (!input.value.trim()) return;
  btn.textContent = 'Subscribed!';
  btn.style.backgroundColor = '#27ae60';
  btn.style.borderColor = '#27ae60';
  input.value = '';
  setTimeout(() => {
    btn.textContent = 'Subscribe';
    btn.style.backgroundColor = '';
    btn.style.borderColor = '';
  }, 3000);
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), index * 90);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  elements.forEach(el => observer.observe(el));
}

// ===== NAVBAR SCROLL EFFECT =====
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 60
      ? '0 4px 20px rgba(0,0,0,0.12)'
      : '0 2px 15px rgba(0,0,0,0.06)';
  }, { passive: true });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initNavbarScroll();

  const contactForm = document.getElementById('contact-form');
  if (contactForm) contactForm.addEventListener('submit', handleContactSubmit);

  document.querySelectorAll('.newsletter-form').forEach(f => f.addEventListener('submit', handleNewsletterSubmit));

  // Smooth active nav detection
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    if (link.getAttribute('data-page') === page) link.classList.add('active');
  });
});
