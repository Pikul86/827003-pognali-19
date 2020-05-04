var modal = document.querySelector(".modal-filter");
var dots = document.querySelector(".dots");
var close = document.querySelector(".catalog-close-top");
var closetwo = document.querySelector(".alphabet__close");
var viewall = document.querySelector(".filter-country__text");


dots.classList.add("dots-delete");
viewall.classList.add("dots-delete");

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  close.classList.add("catalog-close");
  modal.classList.add("modal-delete");
  dots.classList.remove("dots-delete");
  viewall.classList.remove("dots-delete");
});

closetwo.addEventListener("click", function (evt) {
  evt.preventDefault();
  close.classList.add("catalog-close");
  modal.classList.add("modal-delete");
  dots.classList.remove("dots-delete");
  viewall.classList.remove("dots-delete");
});

dots.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-delete");
  dots.classList.add("dots-delete");
  viewall.classList.add("dots-delete");
  close.classList.remove("catalog-close");
});
