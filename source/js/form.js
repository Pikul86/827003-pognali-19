var modal = document.querySelector(".modal-countries");
var down = document.querySelector(".countries__down--three");
var close = document.querySelector(".countries-close--three");
var button = document.querySelector(".countries-container__button");

modal.classList.add("modal-delete");

down.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-delete");
  close.classList.add("button-delete");
});

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-delete");
  close.classList.remove("button-delete");
});
