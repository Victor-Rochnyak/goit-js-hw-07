import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

const imageItem = ({original, preview,description }) =>{
const divEl = document.createElement('div');
divEl.classList.add('gallery__item')

const linkEl = document.createElement('a');
linkEl.classList.add('gallery__link');
linkEl.href = `"${original}"`;

const imageEl = document.createElement('img');
imageEl.classList.add('gallery__image');
imageEl.src = `${preview}`;
imageEl.dataset.source = `${original}`;
imageEl.alt = `${description}`;
linkEl.append(imageEl);
return linkEl;
}

const imageCard = galleryItems.map(imageItem);

const galleryEl = document.querySelector('.gallery');
galleryEl.append(...imageCard);


galleryEl.addEventListener("click", onImageClick);

function blockStandartAction(event) {
  event.preventDefault();
}


function onImageClick(event) {
  blockStandartAction(event);

  const isImageContainer = event.target.classList.contains("gallery__image");
  if (!isImageContainer) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  galleryEl.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
// productEl.append(nameEl, descrEl, priceEl);

//   return productEl;
// };

// const elements = products.map(makeProductCard);

// console.log(elements);
// productsContainerEl.append(...elements);




// import { galleryItems } from './gallery-items.js';
// console.log(galleryItems);
// const galleryDiv = document.querySelector('.gallery');
// function createGalleryItems(items) {
//     return items
//     .map(
//         (item) => `<div class="gallery__item">
//     <a class="gallery__link" href="${item.original}">
//       <img
//         class="gallery__image"
//         src="${item.preview}"
//         data-source="${item.original}"
//         alt="${item.description}"
//       />
//     </a>
//   </div>`
//   )
//     .join('');
// }
// productEl.append(nameEl, descrEl, priceEl);

//   return productEl;
// };

// const elements = products.map(makeProductCard);

// console.log(elements);
// productsContainerEl.append(...elements);