/**
 * Click effects - add .btn-clicked on click, remove after effect plays
 */
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    // Ripple effect for .btn-ripple
    if (this.classList.contains('btn-ripple')) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
      this.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    }

    // Add click class for CSS effects (plays effect without holding)
    this.classList.add('btn-clicked');
    const duration = this.dataset.effectDuration ? parseInt(this.dataset.effectDuration, 10) : 1000;
    setTimeout(() => this.classList.remove('btn-clicked'), duration);
  });
});
