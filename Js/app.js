

const productButton = document.querySelector("#buy");
const payment = document.querySelector(".payments");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.visibility="visible";

});

close.addEventListener("click", () => {
  payment.style.visibility="hidden";
});
