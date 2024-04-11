const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".stay-in-touch");
const modalBtnClose = document.querySelector(".modal-close-btn");

const openModal = () => {
  modal.innerHTML = "";
	modal.insertAdjacentHTML("beforeend", createModalMarkUp());
  modal.classList.toggle("is-hidden");
};

const closeModal = () => {
	modal.innerHTML = "";
	modal.classList.add("is-hidden");
};

const createModalMarkUp = () => {
  return `
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
            pattern="^\+[0-9]{12}"
            required
          />
          <div class="flag-img"></div>
        </div>

        <button class="button primary modal-button" type="submit ">
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
    `
}

modalBtnOpen.addEventListener("click", openModal);
modalBtnClose.addEventListener("click", closeModal);