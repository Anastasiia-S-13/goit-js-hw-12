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
const totalPages = Math.ceil(100 / perPage);
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
        showLoader();
        getImagesByQuery(chosedName, page)
            .then(data => {
                if (!data.hits.length) {
                    iziToast.error({
                        message: 'Sorry, there are no images matching your search query. Please try again!'
                    });
                    return;
                }
                createGallery(data.hits);
                if (data.totalHits > perPage) {
                    showLoadMoreButton();
                } else {
                    hideLoadMoreButton();
                }
    
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

    } catch (error) {
        console.log(error);
    };
}

btnLoadMore.addEventListener("click", async () => {
    if (page >= totalPages) {
        hideLoadMoreButton();
        return iziToast.warning({
            position: "topRight",
            message: "We're sorry, but you've reached the end of search results."
        })
    }
    const elem = document.querySelector(".list-item");

    try {
        page += 1;
        const data = await getImagesByQuery(chosedName, page);
        createGallery(data.hits);
        if (elem) {
        const elemHeight = elem.getBoundingClientRect().height;
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
    }
});