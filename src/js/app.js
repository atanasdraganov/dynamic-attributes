import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const products = document.querySelectorAll('.product');
  for(let i=0; i<products.length; i++){

    products[i].setAttribute("data-price", $("#1").text())
  }
});
