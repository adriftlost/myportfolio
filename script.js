// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  });
});

// Animated header on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Easter egg animation on "i use arch btw"
const hint = document.querySelector('.hidden-hint');
let reveal = false;
document.body.addEventListener('keydown', e => {
  if (e.key.toLowerCase() === 'a') {
    if (!reveal) {
      hint.style.opacity = 1;
      hint.style.transition = 'opacity 2s ease';
      setTimeout(() => {
        hint.style.opacity = 0.3;
      }, 3000);
      reveal = true;
    }
  }
});

// Fun pulsing effect every few seconds
setInterval(() => {
  const heroTitle = document.querySelector('#hero h2');
  heroTitle.classList.add('scale-110');
  setTimeout(() => {
    heroTitle.classList.remove('scale-110');
  }, 300);
}, 5000);
