var link = document.querySelector(".top__svg");
var popup = document.querySelector(".menu");
var close = document.querySelector(".menu__close");


popup.classList.add("menu-none");
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("menu-none");
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("menu-none");
});
