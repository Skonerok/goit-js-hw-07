// Зроби галерею використовуючи бібліотеку SimpleLightbox, яка візьме на себе обробку кліків 
// по зображеннях, відкриття і закриття модального вікна, а також гортання зображень за допомогою клавіатури.
// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. 
// Використовуй готовий код з першого завдання.
// 2. Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. 
// Необхідно додати посилання на два файли: simple - lightbox.min.js і simple - lightbox.min.css.
// 3. Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery. 
// Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
// 4. Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. 
// Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.


import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
// const cardSet = createGallery(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', createGallery(galleryItems));

galleryRef.addEventListener('click', onGalleryClick);

function createGallery(galleryItems) {
return galleryItems.map(({preview, original, description}) => {
    return `
<a 
class="gallery__item" 
href="${original}">
<img 
class="gallery__image" 
src="${preview}" 
alt="${description}" />
</a>
    `
}).join('');
};

const lightbox = new SimpleLightbox('.gallery a', {
captionsData: 'alt',
captionsDelay: 250,
});

function onGalleryClick(event) {
    blockBrowserAction(event);
    if (event.target.nodeName !== 'IMG') {
        return;
    }
};
function blockBrowserAction(event) {
    event.preventDefault();
};
