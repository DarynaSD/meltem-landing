const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".stay-in-touch");
const modalBtnClose = document.querySelector(".modal-close-btn");

const handleModal = () => {
  modal.classList.toggle("is-hidden");
};

modalBtnOpen.addEventListener("click", handleModal);
modalBtnClose.addEventListener("click", handleModal);