import{a as y,S as O,i as c}from"./assets/vendor-DRgUjrIE.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();const E="51396657-6a58d607ccd7d0682078fb53f";y.defaults.baseURL="https://pixabay.com/api/";async function L(s,e){const r=new URLSearchParams({page:e,per_page:m});return(await y.get(`?key=${E}&q=${s}&image_type=photo&orientation=horizontal&safesearch&${r}`)).data}let f;function b(s){const e=s.map(({webformatURL:r,largeImageURL:i,tags:t,likes:a,views:n,comments:q,downloads:$,id:M})=>`
        <li class="list-item">
            <a class="list-link" href="${i}">
                <img data-id="${M}" class="image-item" alt="${t}" src="${r}">
                <ul class="description">
                        <li class="desc-item">
                            <p class="figcaption">Likes<span class="caption-span">${a}</span></p>
                        </li>
                        <li class="desc-item">
                            <p class="figcaption">Views<span class="caption-span">${n}</span></p>
                        </li>
                        <li class="desc-item">
                            <p class="figcaption">Comments<span class="caption-span">${q}</span></p>
                        </li>
                        <li class="desc-item">
                            <p class="figcaption">Downloads<span class="caption-span">${$}</span></p>
                        </li>
                    </ul>
            </a>
        </li>
        `).join("");h.insertAdjacentHTML("beforeend",e),f?f.refresh():f=new O(".gallery a",{captions:!0,captionSelector:"img",captionsData:"alt",captionPosition:"bottom",captionDelay:250,fadeSpeed:100})}function H(){h.innerHTML=""}function w(){v.classList.remove("hidden")}function d(){v.classList.add("hidden")}function S(){g.classList.remove("hidden")}function l(){g.classList.add("hidden")}const P=document.querySelector(".form"),B=document.querySelector(".search-input"),h=document.querySelector(".gallery"),v=document.querySelector(".loader"),g=document.querySelector(".load-more");let m=15,o=1,u=0,p="";document.addEventListener("DOMContentLoaded",()=>{d()});P.addEventListener("submit",C);async function C(s){try{if(s.preventDefault(),p=B.value.trim().toLowerCase(),!p){c.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}o=1,H(),l(),w();const e=await L(p,o);if(!e.hits.length){c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),d();return}u=Math.ceil(e.totalHits/m),b(e.hits),e.totalHits>m?S():l(),P.reset(),d()}catch(e){c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),console.log(e)}}g.addEventListener("click",async()=>{if(l(),o>=u)return l(),c.warning({position:"topRight",message:"We're sorry, but you've reached the end of search results."});w(),await new Promise(s=>requestAnimationFrame(s));try{o+=1;const s=await L(p,o);u=Math.ceil(s.totalHits/m),b(s.hits),S(),d();const e=h.lastElementChild;if(e){const r=e.getBoundingClientRect().height;scrollBy({top:r*2,behavior:"smooth"})}if(o>=u)return l(),c.warning({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}catch(s){console.log(s),d()}});
//# sourceMappingURL=index.js.map
