// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// 2. Реалізація делегування на div.gallery і отримання url великого зображення.
// 3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. 
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// 4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// 5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. 
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.


import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');
const cardSet = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardSet);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGallery(galleryItems) {
return galleryItems.map(({preview, original, description}) => {
    return `
    <div class="gallery">
        <div class="gallery__item">
<a class="gallery__link" 
href="${original}">
<img 
class="gallery__image" 
src="${preview}" 
data-source="${original}" 
alt="${description}" />
</a>
        </div>
    </div>
    `
}).join('');
}

function onGalleryContainerClick(event) {
    if(!event.target.classList.contains('gallery__item')) {
        return;
    }
    console.log(event.target);
}