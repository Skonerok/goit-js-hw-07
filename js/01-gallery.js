// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// 2. Реалізація делегування на div.gallery і отримання url великого зображення.
// 3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. 
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// 4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// 5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. 
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
// 6. Додай закриття модального вікна після натискання клавіші Escape.


import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainerRef = document.querySelector('.gallery');
// const cardSet = createGallery(galleryItems);

galleryContainerRef.insertAdjacentHTML('beforeend', createGallery(galleryItems));

galleryContainerRef.addEventListener('click', onGalleryContainerClick);

function createGallery(galleryItems) {
return galleryItems.map(({preview, original, description}) => {
    return `
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
    `
}).join('');
};

function onGalleryContainerClick(event) {
    blockBrowserAction(event);

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    // open modal
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
    instance.show();

    // close modal
    galleryContainerRef.addEventListener('keydown', (evt) => {
        if (evt.code === 'Escape') {
            instance.close();
        };
    });
};

function blockBrowserAction(event) {
    event.preventDefault();
};