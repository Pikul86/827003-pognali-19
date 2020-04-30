var modal = document.querySelector(".modal-filter");
var dots = document.querySelector(".dots");
var close = document.querySelector(".catalog-close-top");
var closebottom = document.querySelector(".close");
var closebuttondown = document.querySelector(".best-companion__button--down");
var checkbox = document.querySelector(".best-companion__checkbox");
var btntransport = document.querySelector(".btn-transport__companion");

modal.classList.add("modal-delete");
close.classList.add("catalog-close");

dots.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-delete");
  dots.classList.add("dots-delete");
  close.classList.remove("catalog-close");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  close.classList.add("catalog-close");
  modal.classList.add("modal-delete");
  dots.classList.remove("dots-delete");
});

closebottom.addEventListener("click", function (evt) {
  close.classList.add("catalog-close");
  modal.classList.add("modal-delete");
  dots.classList.remove("dots-delete");
});
