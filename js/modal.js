var modalWindow = document.querySelector(".modal-section");
var buttonBestProduct = document.querySelector(".btn");
var buttonCatalog = document.querySelectorAll(".product-card__link");

var ESC_BUTTON_CODE = 27;

console.log(buttonCatalog);

var openModalWindow = function(evt) {
  evt.preventDefault();
  modalWindow.style.display = modalWindow.style.display = 'block';

}

window.onkeydown = function(evt){
    if(evt.keyCode === ESC_BUTTON_CODE){
        modalWindow.style.display = "none";
    }
};

buttonBestProduct.addEventListener("click", openModalWindow);

for (var i = 0; i < buttonCatalog.length; i++) {
  buttonCatalog[i].addEventListener("click", openModalWindow);
}
