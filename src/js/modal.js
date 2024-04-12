import { createCustomMask } from "./mask";
import { createModalMarkUp } from "./modalMarkup";
import { createPopupMakrup } from "./feedback-popup";

const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelectorAll(".stay-in-touch");

const openModal = () => {
  modal.innerHTML = "";
  modal.insertAdjacentHTML("beforeend", createModalMarkUp());
  createCustomMask();
  modal.classList.toggle("is-hidden");

  const modalBtnClose = document.querySelector(".modal-close-btn");
  const form = document.querySelector(".form-modal");

  console.log(modalBtnClose)
  modalBtnClose.addEventListener("click", closeModal);
  form.addEventListener("submit", openPopup);
};

const closeModal = () => {
  const modalBtnClose = document.querySelector(".modal-close-btn");
  const form = document.querySelector(".form-modal");

	modal.innerHTML = "";
  modal.classList.add("is-hidden");
  modalBtnClose.removeEventListener("click", closeModal);
  form.removeEventListener("submit", openPopup);
};

const openPopup = (event) => {
  event.preventDefault();
  closeModal();

  const fdPopupContainer = document.querySelector(".feedback-popup");
  const fdPopup = document.querySelector(".feedback-popup");

  fdPopupContainer.innerHTML = "";
  fdPopupContainer.insertAdjacentHTML("beforeend", createPopupMakrup());
  fdPopupContainer.classList.toggle("is-hidden");

  setTimeout(() => {
  fdPopupContainer.innerHTML = "";
    fdPopup.classList.add("is-hidden");
  }, 1000)
}


modalBtnOpen.forEach(b => b.addEventListener("click", openModal));
