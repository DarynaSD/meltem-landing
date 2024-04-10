const fdPopup = document.querySelector(".feedback-popup");
const fdPopupBtnOpen = document.querySelector(".modal-button");
const modal = document.querySelector(".backdrop");


const handleFdPopup = () => {
    modal.classList.toggle("is-hidden");
    fdPopup.classList.toggle("is-hidden");
      setTimeout(() => {
    fdPopup.classList.add("is-hidden");
  }, 1000)
};

fdPopupBtnOpen.addEventListener("click", handleFdPopup);
