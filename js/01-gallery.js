import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesMarkup = createImgGallery(galleryItems);
const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

function createImgGallery(items) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
            <div class='gallery__item'>
                <a class='gallery__link'
                    href=''>
                    <img 
                        class='gallery__img'
                        src='${preview}'
                        data-source='${original}'
                        alt='${description}'
                    />
                </a>
            </div>`;
    })
        .join('');
}


const picturePopper = (event) => {
  event.preventDefault();

  if (event.target.classList.contains("gallery")) return;
    const highResolutionPicLink = event.target.dataset.source;
    
    const instance = basicLightbox.create(`
    <img src="${highResolutionPicLink}"width="800" height="600">`);

  instance.show();
};

galleryContainer.addEventListener("click", picturePopper);

