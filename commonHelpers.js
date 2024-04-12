import{S as f,I as g}from"./assets/vendor-23adcde2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const b=document.querySelector(".mobile-menu"),y=document.querySelector(".open-menu-btn"),v=document.querySelector(".close-menu-btn"),L=document.querySelectorAll(".mobile-item"),l=()=>{b.classList.toggle("is-hidden")};y.addEventListener("click",l);v.addEventListener("click",l);L.forEach(t=>{t.addEventListener("click",l)});const h=document.querySelector(".agree-button"),d=document.querySelector(".cookies-popup"),u="agree-cookies",m=localStorage.getItem(u)||"";console.log("isAgreed",m);m&&d.classList.add("is-hidden");h.addEventListener("click",()=>{localStorage.setItem(u,"agreed"),d.classList.add("is-hidden")});new f(".image-slider",{pagination:{el:".swiper-pagination",type:"progressbar"}});const k=()=>{const t=document.getElementById("user-tel");console.log("mask element">>t);const n=g(t,{mask:"+{380}-00-000-00-00"});console.log("mask">>n)},q=()=>`
  <div class="modal">
    <div class="modal-text-wrapper">
      <h2 class="modal-title title">Залишайте заявку</h2>
      <p class="modal-text accent-dark">
        Ми зв&apos;яжемося з вами найближчим часом.
      </p>
      <form class="form-modal" name="contact-form" autocomplete="off">
        <label class="label">
<input
            class="input"
            type="text"
            name="userName"
            id="user-name"
            placeholder="Ваше ім'я*"
            required />
</label >

        <div class="input-wrapper">
          <label class="label" for="user-tel"></label>
          <input
            class="input input-tel"
            type="text"
            name="user-tel"
            id="user-tel"
            placeholder="+380-00-000-00-00*"
            pattern="[+]d{3}s[(]d{2}[)]sd{3}[-]d{2}[-]d{2}"
            minlength="17"
            maxlength="17"
            required
          />
          <div class="flag-img"></div>
        </div>

        <button class="button primary modal-button" type="submit">
          Відправить
        </button>
      </form>
      <p class="contact-policy">
        Натискаючи кнопку &quot;Надіслати&quot;, ви погоджуєтесь з
        <a class="contact-policy-link" href="#"
          >Правилами обробки персональних даних</a
        >.
      </p>
    </div>

    <button class="close-menu-btn modal-close-btn" type="button">
      <svg class="close-svg">
        <use href="./img/sprite.svg#icon-close-burger"></use>
      </svg>
    </button>
  </div>
    `,S=()=>`
  <svg class="feedback-svg">
      <use href="./img/sprite.svg#icon-quality"></use>
    </svg>
    <p class="feedback-text">Дякуємо за заявку!</p>
    <p>Ваші дані успішно надіслані!</p>
  `,c=document.querySelector(".backdrop"),M=document.querySelectorAll(".stay-in-touch"),E=()=>{c.innerHTML="",c.insertAdjacentHTML("beforeend",q()),k(),c.classList.toggle("is-hidden");const t=document.querySelector(".modal-close-btn"),o=document.querySelector(".form-modal");console.log(t),t.addEventListener("click",a),o.addEventListener("submit",p)},a=()=>{const t=document.querySelector(".modal-close-btn"),o=document.querySelector(".form-modal");c.innerHTML="",c.classList.add("is-hidden"),t.removeEventListener("click",a),o.removeEventListener("submit",p)},p=t=>{t.preventDefault(),a();const o=document.querySelector(".feedback-popup"),n=document.querySelector(".feedback-popup");o.innerHTML="",o.insertAdjacentHTML("beforeend",S()),o.classList.toggle("is-hidden"),setTimeout(()=>{o.innerHTML="",n.classList.add("is-hidden")},1e3)};M.forEach(t=>t.addEventListener("click",E));
//# sourceMappingURL=commonHelpers.js.map
