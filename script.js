

window.onload = function () {
  console.log('hello');

  const cards = document.querySelectorAll('section article');
  console.log('Найдено карточек:', cards.length);

  cards.forEach((card, index) => {
    const title = card.querySelector('h2')?.textContent.trim() ?? '(без названия)';
    const date  = card.querySelector('time')?.textContent.trim() ?? '(без даты)';
    console.log(`Карточка №${index + 1}: ${title} — ${date}`);
  });
};
