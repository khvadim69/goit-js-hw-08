// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryContainer = document.querySelector('.gallery');
console.log(galleryContainer);
function createGalleryCardsMarkup(item) {
  return item
    .map(({ preview, original, description }) => {
      return `
    
        <a class="gallery__item" href="${original}";
        >
        <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            title = ${description};
          />
        </a>
    
    `;
    })
    .join('');
}
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
let gallery = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  scrollZoom: false,
});


