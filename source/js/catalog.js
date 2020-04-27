var modal = document.querySelector(".modal-filter");
var dots = document.querySelector(".dots");
var close = document.querySelector(".catalog-close-top");
var closebottom = document.querySelector(".close");

modal.classList.add("modal-none");
close.classList.add("catalog-close-none");

dots.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-none");
  dots.classList.add("dots-none");
  close.classList.remove("catalog-close-none");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  close.classList.add("catalog-close-none");
  modal.classList.add("modal-none");
  dots.classList.remove("dots-none");
});
closebottom.addEventListener("click", function (evt) {
  close.classList.add("catalog-close-none");
  modal.classList.add("modal-none");
  dots.classList.remove("dots-none");
});
