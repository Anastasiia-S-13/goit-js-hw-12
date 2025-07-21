import { list, loader, } from "../main"; 
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox;

export function createGallery(images) {
    const galleryMarkup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads, id }) => {
        return `
        <li class="list-item">
            <a class="list-link" href="${largeImageURL}">
                <img data-id="${id}" class="image-item" alt="${tags}" src="${webformatURL}">
                <ul class="description">
                        <li class="desc-item">
                            <p class="figcaption">Likes<span class="caption-span">${likes}</span></p>
                        </li>
                        <li class="desc-item">
                            <p class="figcaption">Views<span class="caption-span">${views}</span></p>
                        </li>
                        <li class="desc-item">
                            <p class="figcaption">Comments<span class="caption-span">${comments}</span></p>
                        </li>
                        <li class="desc-item">
                            <p class="figcaption">Downloads<span class="caption-span">${downloads}</span></p>
                        </li>
                    </ul>
            </a>
        </li>
        `
    }).join("");
    list.innerHTML = galleryMarkup;
    if (lightbox) {
                lightbox.refresh();
            } else {
                lightbox = new SimpleLightbox('.gallery a', {
                    captions: true,
                    captionSelector: 'img',
                    captionsData: 'alt',
                    captionPosition: 'bottom',
                    captionDelay: 250,
                    fadeSpeed: 100,
                })
            }
};


export function clearGallery() {
    list.innerHTML = "";
}


export function showLoader() {
    loader.classList.remove("hidden");
}

export function hideLoader() {
    loader.classList.add("hidden");
}