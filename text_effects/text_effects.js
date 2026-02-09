// Text reveal on scroll
document.querySelectorAll('.reveal-text').forEach(el => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.target.classList.toggle('visible', entry.isIntersecting));
  }, { threshold: 0.2 });
  observer.observe(el);
});

// Scramble/decode effect - scrambles then decodes back
function scrambleDecode(el, chars = '!@#$%^&*') {
  const original = el.dataset.original || el.textContent;
  el.dataset.original = original;
  el.textContent = original.split('').map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
  let idx = 0;
  const interval = setInterval(() => {
    el.textContent = original.split('').map((c, i) => 
      i <= idx ? c : chars[Math.floor(Math.random() * chars.length)]
    ).join('');
    idx++;
    if (idx >= original.length) clearInterval(interval);
  }, 50);
}

document.querySelectorAll('.scramble-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.querySelector(btn.dataset.target);
    if (target) scrambleDecode(target);
  });
});
