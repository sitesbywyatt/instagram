document.querySelectorAll('.like-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('liked');
    btn.textContent = btn.classList.contains('liked') ? '❤️' : '🤍';
  });
});

document.querySelectorAll('.add-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('added');
    btn.textContent = 'Added to cart';
  });
});

document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    const text = btn.dataset.copy || '';
    await navigator.clipboard.writeText(text);
    const orig = btn.textContent;
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.textContent = orig;
    }, 2000);
  });
});

document.querySelectorAll('.trigger-error').forEach(btn => {
  btn.addEventListener('click', () => {
    const input = document.querySelector(btn.dataset.target);
    if (input) {
      input.classList.add('input-error');
      setTimeout(() => input.classList.remove('input-error'), 500);
    }
  });
});

document.querySelectorAll('.star-rating').forEach(rating => {
  const stars = rating.querySelectorAll('span');
  stars.forEach((star, i) => {
    star.addEventListener('click', () => {
      stars.forEach((s, j) => s.classList.toggle('active', j <= i));
    });
    star.addEventListener('mouseenter', () => {
      stars.forEach((s, j) => s.classList.toggle('hover', j <= i));
    });
    star.addEventListener('mouseleave', () => {
      stars.forEach(s => s.classList.remove('hover'));
    });
  });
});
