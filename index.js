import{a as p,S as h,i as n}from"./assets/vendor-DRgUjrIE.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const L="51396657-6a58d607ccd7d0682078fb53f";p.defaults.baseURL="https://pixabay.com/api/";function S(a){return p.get(`?key=${L}&q=${a}&per_page=9&image_type=photo&orientation=horizontal&safesearch`).then(s=>s.data.hits).catch(s=>console.log(s))}let c;function b(a){const s=a.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,views:o,comments:f,downloads:g,id:y})=>`
        <li class="list-item">
            <a class="list-link" href="${i}">
                <img data-id="${y}" class="image-item" alt="${e}" src="${r}">
                <ul class="description">
                        <li class="desc-item">
                            <p class="figcaption">Likes<span class="caption-span">${t}</span></p>
                        </li>
                        <li class="desc-item">
                            <p class="figcaption">Views<span class="caption-span">${o}</span></p>
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
        `).join("");d.innerHTML=s,c?c.refresh():c=new h(".gallery a",{captions:!0,captionSelector:"img",captionsData:"alt",captionPosition:"bottom",captionDelay:250,fadeSpeed:100})}function $(){d.innerHTML=""}function q(){m.classList.remove("hidden")}function u(){m.classList.add("hidden")}const l=document.querySelector(".form"),P=document.querySelector(".search-input"),d=document.querySelector(".gallery"),m=document.querySelector(".loader");document.addEventListener("DOMContentLoaded",()=>{u()});l.addEventListener("submit",v);function v(a){a.preventDefault();const s=P.value.trim().toLowerCase();if(!s){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}$(),q(),S(s).then(r=>{if(!r.length){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}b(r)}).catch(r=>{n.error({message:"Sorry, there are no images matching your search query. Please try again!"}),console.log(r)}).finally(()=>{u(),l.reset()}),l.reset()}
//# sourceMappingURL=index.js.map
