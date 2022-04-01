const miniMenu = document.querySelector("#minimenu");
const nav = document.querySelector(".header__list");

miniMenu.addEventListener("click", () => {
  nav.classList.toggle("show");
});
