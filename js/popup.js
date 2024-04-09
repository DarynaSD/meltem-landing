const agreeButton = document.querySelector(".agree-button");
const cookiesPopup = document.querySelector(".cookies-popup");
const localStorageKey = "agree-cookies";


const isAgreed = localStorage.getItem(localStorageKey) || "";
console.log("isAgreed", isAgreed)

if (isAgreed) {
    cookiesPopup.classList.add("is-hidden");
}

agreeButton.addEventListener("click", () => {
    localStorage.setItem(localStorageKey, "agreed");
    cookiesPopup.classList.add("is-hidden");
});
