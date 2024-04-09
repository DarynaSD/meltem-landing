const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".open-menu-btn");
const menuBtnClose = document.querySelector(".close-menu-btn");
const menuLink = document.querySelectorAll(".mobile-item")

const handleMenu = () => {
  mobileMenu.classList.toggle("is-hidden");
};

menuBtnOpen.addEventListener("click", handleMenu);
menuBtnClose.addEventListener("click", handleMenu);

menuLink.forEach(link => {
  link.addEventListener('click', handleMenu);
});