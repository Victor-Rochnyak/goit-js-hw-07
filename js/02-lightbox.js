import { galleryItems } from './gallery-items.js';


const imageItem = ({ original, preview, description }) => {
    
    const linkEl = document.createElement('a');
    linkEl.classList.add('gallery__link');
    linkEl.href = `${original}`;

    const imageEl = document.createElement('img');
    imageEl.classList.add('gallery__image');
    imageEl.src = `${preview}`;
    imageEl.alt = `${description}`;
    linkEl.append(imageEl);
    return linkEl;
}
const imageCard = galleryItems.map(imageItem);

const galleryEl = document.querySelector('.gallery');
galleryEl.append(...imageCard);

galleryEl.addEventListener("click", onImageClick);
function onImageClick(event) {
    blockStandartAction(event);
}

function blockStandartAction(event) {
    event.preventDefault();
}

var lightbox = new SimpleLightbox('.gallery a',{
    
    nav: true,
    close: true,
    caption: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});





