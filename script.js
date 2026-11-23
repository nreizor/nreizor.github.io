

window.onload = function() {


    console.log('hello');
// Находим все карточки товаров на странице
const cards = document.querySelectorAll('section article');

// Перебираем каждую карточку через forEach
cards.forEach((card, index) => {
  // Извлекаем название и дату внутри текущей карточки
  const title = card.querySelector('h2').textContent.trim();
  const date = card.querySelector('time').textContent.trim();

  // Выводим результат по каждой карточке отдельно
  console.log(`Карточка №${index + 1}: ${title} — ${date}`);
});


}