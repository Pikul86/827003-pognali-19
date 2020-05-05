var modal = document.querySelector(".modal-filter");
var dots = document.querySelector(".dots");
var close = document.querySelector(".catalog-close-top");
var closetwo = document.querySelectorAll(".alphabet__close");
var viewall = document.querySelector(".filter-country__text");

function changeCloseState(evt) {
  evt.preventDefault();
  close.classList.add("catalog-close");
  modal.classList.add("modal-delete");
  dots.classList.remove("dots-delete");
  viewall.classList.remove("dots-delete");
};

dots.classList.add("dots-delete");
viewall.classList.add("dots-delete");

close.addEventListener("click", changeCloseState);

Array.prototype.slice.call(closetwo,0).forEach(element => {
  element.addEventListener("click", changeCloseState);
});

dots.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-delete");
  dots.classList.add("dots-delete");
  viewall.classList.add("dots-delete");
  close.classList.remove("catalog-close");
});
