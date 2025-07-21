import { getImagesByQuery } from "./js/pixabay-api.js";
import {createGallery, hideLoader, clearGallery, showLoader } from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export const form = document.querySelector(".form");
export const input = document.querySelector(".search-input");
export const list = document.querySelector(".gallery");
export const loader = document.querySelector(".loader");

document.addEventListener("DOMContentLoaded", () => {
  hideLoader();
});
form.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
    event.preventDefault();
    const chosedName = input.value.trim().toLowerCase();

    if (!chosedName) {
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
    }

    clearGallery();
    showLoader();

    getImagesByQuery(chosedName)
        .then(images => {
            if (!images.length) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!'
                });
                return;
            }

            createGallery(images);
        })
        .catch(error => {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
            console.log(error);
        })
        .finally(() => {
            hideLoader();
            form.reset();
        });
    form.reset();
}