const hamburgerContainerEl = document.querySelector("#header__main-nav");
const hamburgerEl = document.querySelector("#header__main-nav--hamburger");
const linksEl = document.querySelector("#header__main-nav--links li");

hamburgerEl.addEventListener("click", () => {
  hamburgerContainerEl.classList.toggle("clicked");
})