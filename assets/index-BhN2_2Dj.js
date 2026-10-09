(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=async()=>{let e=document.querySelector(`.menucontainer1`),t=``;try{t=(await(await fetch(`https://lilinozari.github.io/dbjsonpuma/db.json`)).json()).menu.slice(0,6).map(e=>{let t=Math.floor(e.dropdown.length/4),n=e.dropdown.length%4,r=0,i=Array.from({length:4},(i,a)=>{let o=t+ +(a<n),s=e.dropdown.slice(r,r+o);return r+=o,s});return`
         <div class=" w-fit h-full  hover:text-white group transition-all duration-300 relative flex  items-center font-bold text-white ">
         <a href="${e.link}">${e.name}</a>
         <div class="fixed left-1/2 top-[72px] -translate-x-1/2 group-hover:opacity-100 w-[calc(100vw-2rem)] max-w-[1000px] h-70 z-20 transition-opacity duration-300 opacity-0 pointer-events-none group-hover:pointer-events-auto
          bg-black flex flex-col text-white ">
          <div class="w-full h-full py-1 flex flex-row gap-5">
          ${i.map(e=>`
            <div class="flex-1 h-full font-semibold px-3">
              ${e.map(e=>`<a class="block py-1" href="${e.link}">${e.title}</a>`).join(``)}
            </div>
          `).join(``)}
         </div>
         </div>
    </div>
      `}),e.innerHTML=t.join(``)}catch(e){console.log(e)}let n=document.querySelector(`.menudo`);try{t=(await(await fetch(`https://lilinozari.github.io/dbjsonpuma/db.json`)).json()).menu.slice(7,10).map(e=>` <button class="w-10 h-10 items-center flex justify-center rounded-2xl bg-black hover:bg-gray-300">
              <img src="${e.image}" alt="">
              </button>`),n.innerHTML=t.join(``)}catch(e){console.log(e)}},t=async()=>{let e=``,t=document.querySelector(`.probox`);try{e=(await(await fetch(`https://lilinozari.github.io/dbjsonpuma/db.json`)).json()).products.map(e=>`
        <div class="proboxmob flex flex-col w-125 h-full">
    <img src="${e.image}" alt="" class="w-125 h-125 px-8">
    <span class="flex justify-center items-center font-bold mt-5 text-[16px]">${e.name}</span>
    <div class="flex justify-center items-center mt-6">
    <button class="btn btn-secondary w-50 border-none shadow-none hover:bg-gray-900
     bg-black text-white">${e.buttom}</button>
    </div>
  </div>
        `),t.innerHTML=e.join(``)}catch(e){console.log(e)}},n=async()=>{let e=``,t=document.querySelector(`.probox2`);try{e=(await(await fetch(`https://lilinozari.github.io/dbjsonpuma/db.json`)).json()).pro.map(e=>`
              <div class="probox2 flex flex-col w-125 h-full">
    <img src="${e.image}" alt="" class="w-125 h-125 px-8">
    <span class="flex justify-center items-center font-bold mt-5 text-[16px]">${e.name}</span>
    <div class="flex justify-center items-center mt-6">
    <button class="btn btn-secondary w-50 border-none shadow-none hover:bg-gray-900
     bg-black text-white">${e.buttom}</button>
    </div>
  </div>
            `),t.innerHTML=e.join(``)}catch(e){console.log(e)}},r=async()=>{let e=``,t=document.querySelector(`.first`);try{e=(await(await fetch(`https://lilinozari.github.io/dbjsonpuma/db.json`)).json()).footerdesk.slice(0,8).map(e=>`
          <div class="firstitems flex flex-col justify-center items-center ">
    <span class="font-mono text-gray-300 text-[16px] hover:text-white">${e.name}</span>
    </div>
        `),t.innerHTML=e.join(``)}catch(e){console.log(e)}let n=document.querySelector(`.sec`);try{e=(await(await fetch(`https://lilinozari.github.io/dbjsonpuma/db.json`)).json()).footerdesk.slice(8,15).map(e=>`
          <div class="sec flex flex-col justify-center items-center ">
 <div class="secitems hover:text-white text-gray-300 font-mono">${e.name}</div>
    </div>
        `),n.innerHTML=e.join(``)}catch(e){console.log(e)}let r=document.querySelector(`.third`);try{e=(await(await fetch(`https://lilinozari.github.io/dbjsonpuma/db.json`)).json()).footerdesk.slice(16,23).map(e=>`
      
     <div class="secitems hover:text-white text-gray-300 font-mono">${e.name}</div>
        `),r.innerHTML=e.join(``)}catch(e){console.log(e)}let i=document.querySelector(`.forth`);try{e=(await(await fetch(`https://lilinozari.github.io/dbjsonpuma/db.json`)).json()).footerdesk.slice(23,26).map(e=>`

     <div class="secitems hover:text-white text-gray-300 font-mono">${e.name}</div>
     
        `),i.innerHTML=e.join(``)}catch(e){console.log(e)}let a=document.querySelector(`.partyek`);try{e=(await(await fetch(`https://lilinozari.github.io/dbjsonpuma/db.json`)).json()).footerdesk.slice(26,31).map(e=>`
<button class="w-[40px] h-[40px] rounded-2xl flex items-center justify-center hover:bg-gray-400">
    <img src="${e.image}" alt="">
   </button>
     
     
        `),a.innerHTML=e.join(``)}catch(e){console.log(e)}let o=document.querySelector(`.text`);try{e=(await(await fetch(`https://lilinozari.github.io/dbjsonpuma/db.json`)).json()).footerdesk.slice(31,34).map(e=>`

      <span class="font-mono text-[10px] text-white px-5">${e.name}</span>
     
        `),o.innerHTML=e.join(``)}catch(e){console.log(e)}},i=async()=>{let e=``,t=document.querySelector(`.ghesmataval`);try{e=(await(await fetch(`https://lilinozari.github.io/dbjsonpuma/db.json`)).json(``)).footermob.slice(0,4).map(e=>`
     <div class="collapse collapse-arrow bg-black border-none">
  <input type="radio" name="my-accordion-2" checked="checked" />
  <div class="collapse-title font-bold border-none text-white">${e.title}</div>
  <div class="collapse-content text-sm bg-black flex flex-row w-full">
<div class="text w-[50%] text-white font-semibold text-[12px]">${e.dropdown.map(e=>`<div>${e.text}</div>`).join(``)}</div>
<div class="textdo w-[50%] text-white font-semibold text-[12px] ">${e.dropdown.map(e=>`<div>${e.textdo}</div>`).join(``)}</div>
  </div>
</div>

            `),t.innerHTML=e.join(``)}catch(e){console.log(e)}let n=document.querySelector(`.icons`);try{e=(await(await fetch(`https://lilinozari.github.io/dbjsonpuma/db.json`)).json(``)).footermob.slice(4,9).map(e=>`
     <button class="w-10 h-10 rounded-2xl flex items-center justify-center hover:bg-gray-400">
    <img src="${e.image}" alt="">
    </button>

            `),n.innerHTML=e.join(``)}catch(e){console.log(e)}},a=async()=>{let e=``,t=document.querySelector(`.proboxmob`);try{e=(await(await fetch(`https://lilinozari.github.io/dbjsonpuma/db.json`)).json()).goodsmob.map(e=>`
        <img src="${e.image}" alt="" class="w-90 h-90 px-8">
    <span class="flex justify-center items-center font-bold text-[16px] text-black">${e.name}</span>
    <div class="flex justify-center items-center text-black ">
    <button class="btn btn-secondary w-50 border-none shadow-none hover:bg-gray-900
     bg-black text-white mb-3 ">${e.buttom}</button>
    </div>
        
        `),t.innerHTML=e.join(``)}catch(e){console.log(e)}},o=document.querySelector(`.mobilepro`);o.innerHTML=`
 <span class="capitalize font-bold text-2xl mt-4">PERFORMANCE FAVORITES</span>
  <div class="swiper mobileProSwiper bg-white">
      <div class="swiper-wrapper  ">
        <div class="swiper-slide flex flex-col bg-white w-80">
          <img src="./images/pro1.png"  alt="">
          <span class="font-bold mt-2 text-black">HYROX</span>
          <button class="btn btn-secondary w-20 border-none shadow-none hover:bg-gray-900
     bg-black text-white mt-3 lg:text-[16px] text-[8px]">SHOP NOW</button>
        </div>
        <div class="swiper-slide flex flex-col w-80">
          <img src="./images/pro2.png"  alt="">
          <span class="font-bold mt-2 text-black">HYROX</span>
          <button class="btn btn-secondary w-20 border-none shadow-none hover:bg-gray-900
     bg-black text-white mt-3 lg:text-[16px] text-[8px] ">SHOP NOW</button>
        </div>
       <div class="swiper-slide flex flex-col w-80">
          <img src="./images/pro3.png"  alt="">
          <span class="font-bold mt-2 text-black">HYROX</span>
          <button class="btn btn-secondary w-20 border-none shadow-none hover:bg-gray-900
     bg-black text-white mt-3 lg:text-[16px] text-[8px] ">SHOP NOW</button>
        </div>
      </div>
      <div class="swiper-scrollbar"></div>
    </div>
`;var s=document.querySelector(`.firstbackground`);s.innerHTML=`
 <div class=" relative w-full h-full">

    <img src="./images/firstbg.png" alt="puma" class="w-full h-full object-cover">
      <div class="capitalize text-white   absolute flex flex-col top-1/2 right-2 left-2
       md:-translate-y-1/2! lg:top-1/2 lg:right-8">
          <span class="capitalize text-white lg:left-10 lg:top-1/3 mx-auto
            lg:-translate-y-1/2 font-bold text-2xl lg:text-4xl">NEVER NOT SUEDE
              </span>
             <span class="text-xl mx-auto ">
              SUEDE BLOOM
              </span>
              <div class="buttons capitalize mt-3 mx-auto">
                <button class="btn border-none font-bold lg:text-[16px] text-[8px]">SHOP WOMEN</button>
                <button class="btn border-none font-bold lg:text-[16px] text-[8px]">SHOP MEN</button>
                <button class="btn border-none font-bold lg:text-[16px] text-[8px] ">SHOP KIDS</button>
              </div>

      </div>
      
    </div>

`;var c=document.querySelector(`.secondbg`);c.innerHTML=`
<div class="inside relative w-full h-full ">
    <img src="./images/secondbg.png" alt="school" class="w-full h-full object-cover">
     <div class="absolute top-1/2 right-2 left-2 lg:top-1/2 lg:right-8 flex flex-col text-center ">
       <span class="text-black font-bold text-2xl lg:text-4xl">BACK TO SCHOOL</span>
       <span class="font-medium">NEW YEAR , NEW GEAR</span>
        <div class="buttons capitalize mt-3">
               <button class="btn btn-soft btn-secondary bg-black shadow-none border-none text-white hover:bg-gray-900 lg:text-[16px] text-[8px]  ">SHOP WOMEN</button>
               <button class="btn btn-soft btn-secondary bg-black shadow-none border-none text-white hover:bg-gray-900 lg:text-[16px] text-[8px]">SHOP MEN</button>
               <button class="btn btn-soft btn-secondary bg-black shadow-none border-none text-white hover:bg-gray-900 lg:text-[16px] text-[8px]">SHOP KIDS</button>
              </div>
     </div>
  </div>
`;var l=document.querySelector(`.card`);l.innerHTML=`
<h1 class="font-bold text-2xl lg:text-4xl md:text-4xl justify-center flex  w-full">NEW & FEATURED</h1>
  <div class="boxcard w-[90%] lg:h-220 text-black flex flex-col gap-7 lg:flex-row justify-center items-center mx-auto bg-white">
    <div class="card1 w-[50%] flex flex-col justify-center items-center">
      <img src="./images/card1.png"  alt="shoes">
      <span class="font-bold mt-5 text-[20px] text-black">BACK TO SCHOOL</span>
      <span class="text-[14px] font-mono text-black">NEW YEAR. NEW GEAR. </span>
      <button class="btn btn-wide mt-4 bg-black shadow-none border-none  text-white hover:bg-gray-900 lg:text-[16px] text-[8px] ">SHOP MEN</button>
      <button class="btn btn-wide mt-4 bg-black shadow-none border-none text-white hover:bg-gray-900 lg:text-[16px] text-[8px]">SHOP WOMEN</button>
    </div>
    <div class="card2 w-[50%] flex flex-col justify-center items-center ">
      <img src="./images/card2.png" alt="">
      <span class="font-bold mt-5 text-[20px] text-black">SUEDE CODA</span>
      <span class="text-[14px] font-mono text-black">ECHO POINTS </span>
      <button class="btn btn-wide mt-4 bg-black shadow-none border-none text-white hover:bg-gray-900 lg:text-[16px] text-[8px] ">MEN'S SUEDE</button>
      <button class="btn btn-wide mt-4 bg-black shadow-none border-none text-white hover:bg-gray-900 lg:text-[16px] text-[8px]">WOMEN'S SUEDE</button>
    </div>
  </div>
`;var u=document.querySelector(`.hero-swiper`);u.innerHTML=`
<div class="swiper heroSwiper " style="height: 350px; ">
      <div class="swiper-wrapper testParent">
      <div class="swiper-slide"><img src="./images/swiper/swiper1.png" alt=""> </div>
            <div class="swiper-slide"><img src="./images/swiper/swiper2.png" alt=""> </div>
                  <div class="swiper-slide"><img src="./images/swiper/swiper3.png" alt=""> </div>
                        <div class="swiper-slide"><img src="./images/swiper/swiper4.png" alt=""> </div>
                              <div class="swiper-slide"><img src="./images/swiper/swiper5.png" alt=""> </div>
                                    <div class="swiper-slide"><img src="./images/swiper/swiper6.png" alt=""> </div>
      </div>
      <div class="swiper-pagination"></div>
       <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
`,(async()=>{let e=``,t=document.querySelector(`.menucon`);try{e=(await(await fetch(`https://lilinozari.github.io/dbjsonpuma/db.json`)).json()).headermob.map((e,t)=>{let n=`my-drawer-${t}`;return`
      <div class="drawer  w-12.5">
  <input id="${n}" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->
    <label for="${n}" class="btn drawer-button burger and rounded-[20px] bg-black hover:bg-gray-900 border-none shadow-none">
     <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_429_11066)">
<path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_429_11066">
<rect width="24" height="24" fill="white" transform="translate(0 0.000915527)"/>
</clipPath>
</defs>
</svg>
    </label>
  </div>
  <div class="drawer-side w-full h-dvh overflow-y-auto">
    <label for="${n}" aria-label="close sidebar" class="drawer-overlay"></label>
    <div class="menu bg-base-200 min-h-full w-full p-4 flex mx-auto items-center font-bold">
      <!-- Sidebar content here -->
<div class="flex w-full h-full flex-col ">
<button type="button" class="close flex w-[40px] h-[40px] justify-center items-center rounded-full transition-colors hover:bg-gray-300">
<svg width="30px" height="30px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21.32L21 3.32001" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3.32001L21 21.32" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
<div class="mx-auto flex flex-col items-center w-full max-w-[400px]">
<div class="w-full flex flex-col">
  ${e.dropdown.map(e=>`
    <div class="dropdown dropdown-hover relative w-full">
        <div tabindex="0" role="button" class="btn w-full flex-col flex">
            ${e.title}
        </div>

        <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-10 absolute top-full left-0 w-full p-2 shadow">
            ${e.items.map(e=>`
                <li>
                    <a href="${e.link}">
                        ${e.title}
                    </a>
                </li>
            `).join(``)}
        </ul>
    </div>
`).join(``)}
</div>

</div>
    
      </div>
    </div>
  </div>
</div>

        `}),t.innerHTML=`${e.join(``)}
      <div class="drawer shrink-0 w-10">
        <input id="mobile-search-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <label for="mobile-search-drawer" aria-label="Open search" class="btn drawer-button w-[40px] h-[40px] min-h-0 p-0 rounded-[20px] bg-black hover:bg-gray-900 border-none shadow-none">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </label>
        </div>
        <div class="drawer-side w-full">
          <label for="mobile-search-drawer" aria-label="Close search" class="drawer-overlay"></label>
          <div class="menu bg-base-200 min-h-full w-full p-4 flex flex-col items-center">
            <button type="button" class="close self-start flex w-[40px] h-[40px] justify-center items-center rounded-full transition-colors hover:bg-gray-300" aria-label="Close search">
              <svg width="30px" height="30px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 21.32L21 3.32001" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 3.32001L21 21.32" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <form class="mt-8 w-full max-w-xl">
              <label for="mobile-search-input" class="mb-2 block text-lg font-bold">Search</label>
              <input id="mobile-search-input" type="search" placeholder="Search" class="input input-bordered w-full" />
            </form>
          </div>
        </div>
      </div>`,t.querySelectorAll(`.close`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.closest(`.drawer`),n=t&&t.querySelector(`.drawer-toggle`);n&&(n.checked=!1)})})}catch(e){console.log(e)}})(),e(),r(),n(),i(),t(),a(),new Swiper(`.heroSwiper`,{slidesPerView:1,centeredSlides:!0,spaceBetween:30,loop:!0,grabCursor:!0,breakpoints:{1024:{slidesPerView:3}},pagination:{el:`.heroSwiper .swiper-pagination`,clickable:!0},navigation:{nextEl:`.heroSwiper .swiper-button-next`,prevEl:`.heroSwiper .swiper-button-prev`}}),new Swiper(`.mobileProSwiper`,{slidesPerView:1,centeredSlides:!0,spaceBetween:30,loop:!0,grabCursor:!0,scrollbar:{el:`.mobileProSwiper .swiper-scrollbar`,hide:!0}});