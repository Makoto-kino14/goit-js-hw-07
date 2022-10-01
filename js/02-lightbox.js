import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const imagesMarkup = createImgGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

function createImgGallery(item) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
        <li class="gallery__item" >
            <a 
                href="${original}">
            <img    
                class="gallery__image" 
                src="${preview}" 
                alt="${description}"
                width="800"
                height="600" />
            </a>
        </li>
        `;
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
