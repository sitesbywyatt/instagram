// Tilt on mouse move (handles all .card-tilt)
document.querySelectorAll('.card-tilt').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(500px) rotateX(${-y * 15}deg) rotateY(${x * 15}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(500px) rotateX(0) rotateY(0)';
  });
});
