document.addEventListener('DOMContentLoaded', function () {
  const noBtn = document.getElementById('noBtn');
  const yesBtn = document.getElementById('yesBtn');
  const message = document.getElementById('message');
  const container = document.querySelector('.container');
  const buttonsContainer = document.querySelector('.buttons');

  if (!noBtn || !yesBtn || !message || !container || !buttonsContainer) {
    console.error('Один или несколько элементов не найдены.');
    return;
  }

  // 🏃‍♂️ "Нет" убегает
  noBtn.addEventListener('mouseenter', moveButton);
  noBtn.addEventListener('focus', moveButton);

  function moveButton() {
    const containerRect = buttonsContainer.getBoundingClientRect();
    const padding = 20;

    const maxX = containerRect.width - noBtn.offsetWidth - padding;
    const maxY = containerRect.height - noBtn.offsetHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  }

  // 💖 "Да"
  yesBtn.addEventListener('click', function () {
    container.style.opacity = 0;

    setTimeout(() => {
      container.classList.add('hidden');
      message.classList.add('show');

      for (let i = 0; i < 15; i++) {
        createHeart();
      }
    }, 600);
  });

  // 💞 Сердечки
  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.innerText = '💖';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
});