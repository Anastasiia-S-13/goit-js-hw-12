import{a as p,S as h,i as n}from"./assets/vendor-DRgUjrIE.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const L="51396657-6a58d607ccd7d0682078fb53f";p.defaults.baseURL="https://pixabay.com/api/";async function S(r,s){const a=new URLSearchParams({per_page,page:s});return(await p.get(`?key=${L}&q=${r}&image_type=photo&orientation=horizontal&safesearch&${a}`)).data}let c;function b(r){const s=r.map(({webformatURL:a,largeImageURL:o,tags:e,likes:t,views:i,comments:f,downloads:g,id:y})=>`
        <li class="list-item">
            <a class="list-link" href="${o}">
                <img data-id="${y}" class="image-item" alt="${e}" src="${a}">
                <ul class="description">
                        <li class="desc-item">
                            <p class="figcaption">Likes<span class="caption-span">${t}</span></p>
                        </li>
                        <li class="desc-item">
                            <p class="figcaption">Views<span class="caption-span">${i}</span></p>
                        </li>
                        <li class="desc-item">
                            <p class="figcaption">Comments<span class="caption-span">${f}</span></p>
                        </li>
                        <li class="desc-item">
                            <p class="figcaption">Downloads<span class="caption-span">${g}</span></p>
                        </li>
                    </ul>
            </a>
        </li>
        `).join("");d.innerHTML=s,c?c.refresh():c=new h(".gallery a",{captions:!0,captionSelector:"img",captionsData:"alt",captionPosition:"bottom",captionDelay:250,fadeSpeed:100})}function $(){d.innerHTML=""}function P(){m.classList.remove("hidden")}function u(){m.classList.add("hidden")}const l=document.querySelector(".form"),q=document.querySelector(".search-input"),d=document.querySelector(".gallery"),m=document.querySelector(".loader");document.addEventListener("DOMContentLoaded",()=>{u()});l.addEventListener("submit",w);function w(r){r.preventDefault();const s=q.value.trim().toLowerCase();if(!s){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}$(),P(),S(s).then(a=>{if(!a.length){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}b(a)}).catch(a=>{n.error({message:"Sorry, there are no images matching your search query. Please try again!"}),console.log(a)}).finally(()=>{u(),l.reset()}),l.reset()}
//# sourceMappingURL=index.js.map
