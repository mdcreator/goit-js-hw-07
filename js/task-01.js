// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега h2) и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

// const categoriesEl = document.querySelector('#categories');
// console.log('categoriesEl', categoriesEl);

const categoriesItemsEl = document.querySelectorAll('li.item');
// console.log('categoriesItemsEl', categoriesItemsEl);

const showElementsQuantity = elements =>
  `В списке ${elements.length} категории.`;
console.log(showElementsQuantity(categoriesItemsEl));

categoriesItemsEl.forEach(element => {
  const titleEl = element.querySelector('h2');
  const quantityEl = element.querySelectorAll('li');

  console.log(
    `Категория: ${titleEl.textContent}
    Количество элементов: ${quantityEl.length}`,
  );
});
