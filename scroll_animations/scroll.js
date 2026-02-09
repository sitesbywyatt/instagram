// Fade in, slide in
document.querySelectorAll('.fade-in, .slide-left, .slide-right').forEach(el => {
  new IntersectionObserver(entries => {
    entries.forEach(entry => entry.target.classList.toggle('visible', entry.isIntersecting));
  }, { threshold: 0.15 }).observe(el);
});

// Sticky header shadow on scroll
const header = document.querySelector('.sticky-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// Scroll progress bar
const progressBar = document.querySelector('.scroll-progress');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (window.scrollY / h * 100) + '%';
  });
}
