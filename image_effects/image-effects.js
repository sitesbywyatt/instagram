// Image reveal on scroll
document.querySelectorAll('.img-reveal').forEach(el => {
  new IntersectionObserver(entries => {
    entries.forEach(entry => entry.target.classList.toggle('visible', entry.isIntersecting));
  }, { threshold: 0.2 }).observe(el);
});

// Tilt 3D on mouse move
document.querySelectorAll('.img-tilt').forEach(img => {
  img.addEventListener('mousemove', e => {
    const rect = img.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    img.style.transform = `perspective(500px) rotateX(${-y * 15}deg) rotateY(${x * 15}deg)`;
  });
  img.addEventListener('mouseleave', () => {
    img.style.transform = '';
  });
});

// Before/after slider
document.querySelectorAll('.slider-handle').forEach(handle => {
  let isDragging = false;
  const wrap = handle.closest('.slider-wrap');
  const before = wrap.querySelector('.before');
  function update(x) {
    const rect = wrap.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((x - rect.left) / rect.width) * 100));
    handle.style.left = pct + '%';
    before.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
  }
  handle.addEventListener('mousedown', () => isDragging = true);
  document.addEventListener('mouseup', () => isDragging = false);
  document.addEventListener('mousemove', e => {
    if (isDragging && wrap) update(e.clientX);
  });
});

// Lazy load blur
document.querySelectorAll('.img-lazy img').forEach(img => {
  if (img.complete) img.classList.add('loaded');
  else img.addEventListener('load', () => img.classList.add('loaded'));
});
