import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const imagesMarkup = createImgGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

function createImgGallery(item) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `<a 
            class="gallery__item" 
            href="${original}">
        <img    
            class="gallery__image" 
            src="${preview}" 
            alt="${description}"
            width="800"
            height="600" />
    </a>`;
    })
    .join("");
}


const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition:"bottom",
    captionDelay: 250,
    captionType: "alt",
    docClose: "true",
});
