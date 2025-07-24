import { getImagesByQuery } from "./js/pixabay-api.js";
import {createGallery, hideLoader, clearGallery, showLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export const form = document.querySelector(".form");
export const input = document.querySelector(".search-input");
export const list = document.querySelector(".gallery");
export const loader = document.querySelector(".loader");
export const btnLoadMore = document.querySelector(".load-more");

export let perPage = 15;
let page = 1;
let totalPages = 0;
let chosedName = "";

document.addEventListener("DOMContentLoaded", () => {
    hideLoader();
});
form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
    try {
        event.preventDefault();
        chosedName = input.value.trim().toLowerCase();
        if (!chosedName) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
            return;
        };
        page = 1;
        clearGallery();
        hideLoadMoreButton();
        showLoader();
        const data = await getImagesByQuery(chosedName, page);
        if (!data.hits.length) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!'
            });
            hideLoader();
            return;
        }
        totalPages = Math.ceil(data.totalHits / perPage);
        createGallery(data.hits);
        if (data.totalHits > perPage) {
            showLoadMoreButton();
        } else {
            hideLoadMoreButton();
        };
        form.reset();
        hideLoader();
        
    } catch(error) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
                console.log(error);
            };
};

btnLoadMore.addEventListener("click", async () => {
    hideLoadMoreButton();
    if (page >= totalPages) {
        hideLoadMoreButton();
        return iziToast.warning({
            position: "topRight",
            message: "We're sorry, but you've reached the end of search results."
        })
    }

    showLoader();
    await new Promise(resolve => requestAnimationFrame(resolve)); 

    try {
        page += 1;
        const data = await getImagesByQuery(chosedName, page);
        totalPages = Math.ceil(data.totalHits / perPage);
        createGallery(data.hits);
        showLoadMoreButton();
        hideLoader();
        const lastItem = list.lastElementChild;

        if (lastItem) {
            const elemHeight = lastItem.getBoundingClientRect().height;
            scrollBy({
                top: elemHeight * 2,
                behavior: "smooth"
            });
        };

        if (page >= totalPages) {
            hideLoadMoreButton();
            return iziToast.warning({
                position: "topRight",
                message: "We're sorry, but you've reached the end of search results."
            })
        }
    } catch (error) {
        console.log(error);
        hideLoader();
    }
});