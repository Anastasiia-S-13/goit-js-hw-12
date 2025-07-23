import{a as g,S as $,i as c}from"./assets/vendor-DRgUjrIE.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const M="51396657-6a58d607ccd7d0682078fb53f";g.defaults.baseURL="https://pixabay.com/api/";async function y(r,e){const o=new URLSearchParams({page:e,per_page:f});return(await g.get(`?key=${M}&q=${r}&image_type=photo&orientation=horizontal&safesearch&${o}`)).data}let d;function L(r){const e=r.map(({webformatURL:o,largeImageURL:i,tags:t,likes:s,views:n,comments:w,downloads:P,id:q})=>`
        <li class="list-item">
            <a class="list-link" href="${i}">
                <img data-id="${q}" class="image-item" alt="${t}" src="${o}">
                <ul class="description">
                        <li class="desc-item">
                            <p class="figcaption">Likes<span class="caption-span">${s}</span></p>
                        </li>
                        <li class="desc-item">
                            <p class="figcaption">Views<span class="caption-span">${n}</span></p>
                        </li>
                        <li class="desc-item">
                            <p class="figcaption">Comments<span class="caption-span">${w}</span></p>
                        </li>
                        <li class="desc-item">
                            <p class="figcaption">Downloads<span class="caption-span">${P}</span></p>
                        </li>
                    </ul>
            </a>
        </li>
        `).join("");S.insertAdjacentHTML("beforeend",e),d?d.refresh():d=new $(".gallery a",{captions:!0,captionSelector:"img",captionsData:"alt",captionPosition:"bottom",captionDelay:250,fadeSpeed:100})}function O(){S.innerHTML=""}function B(){v.classList.remove("hidden")}function b(){v.classList.add("hidden")}function D(){m.classList.remove("hidden")}function u(){m.classList.add("hidden")}const p=document.querySelector(".form"),E=document.querySelector(".search-input"),S=document.querySelector(".gallery"),v=document.querySelector(".loader"),m=document.querySelector(".load-more");let f=15,a=1;const h=Math.ceil(100/f);let l="";document.addEventListener("DOMContentLoaded",()=>{b()});p.addEventListener("submit",R);async function R(r){try{if(r.preventDefault(),l=E.value.trim().toLowerCase(),!l){c.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}a=1,O(),B(),y(l,a).then(e=>{if(!e.hits.length){c.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}L(e.hits),e.totalHits>f?D():u()}).catch(e=>{c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),console.log(e)}).finally(()=>{b(),p.reset()}),p.reset()}catch(e){console.log(e)}}m.addEventListener("click",async()=>{if(a>=h)return u(),c.warning({position:"topRight",message:"We're sorry, but you've reached the end of search results."});const r=document.querySelector(".list-item");try{a+=1;const e=await y(l,a);if(L(e.hits),r){const o=r.getBoundingClientRect().height;scrollBy({top:o*2,behavior:"smooth"})}if(a>=h)return u(),c.warning({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}catch(e){console.log(e)}});
//# sourceMappingURL=index.js.map
