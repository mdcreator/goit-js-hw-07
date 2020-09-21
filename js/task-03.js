// Задание 3
// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки. Добавь
// минимальное оформление галzереи флексбоксами или гридами через css-классы.

const magicBtn = document.querySelector('.js-magic-btn-03');
magicBtn.addEventListener('click', () => {
  const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const imagesEl = document.querySelector('#gallery');

  //   galleryImagesEl.forEach(element => {
  //     const listEl = element.querySelector('li');
  //     const imageEl = element.querySelectorAll('img');

  // imagesEl.insertAdjacentHTML('beforebegin', '<h2>Галерея</h2>');
  // imagesEl.insertAdjacentHTML('afterbegin', '<li><img src = $></li>');
  // imagesEl.insertAdjacentHTML('beforeend', '<li>beforeend item</li>');

  // const elements = images.map(element => {
  //   const listEl = document.createElement('li');
  //   const galleryImage = ({ url, alt }) =>
  //     '<li><img src = ${img.url} alt = ${img.alt}</li>';
  //   //   listEl.textContent = element;
  //   return listEl;
  // });

  // imagesEl.append(...elements);
  // imagesEl.insertAdjacentHTML('beforebegin', '<h2>Галерея</h2>');

  // const galleryImage = ({url, alt}) =>'<li><img src = ${img.url} alt = ${img.alt class='img'></li>';

  const elements = images.map(img => {
    const listEl = document.createElement('li');
    listEl.insertAdjacentHTML(
      'beforeend',
      `<img src="${img.url}" alt="${img.alt}" width="300">`,
    );
    return listEl;
  });

  imagesEl.append(...elements);
  imagesEl.insertAdjacentHTML('beforebegin', '<h2>Галерея</h2>');
});
