import { createContentBasket } from "./task-12=render";

const basketList = document.querySelector(".basket-list");
const clearBasketBtn = document.querySelector(".clear-basket-btn");
const bascetTotalPrice = document.querySelector(".bascet-total-price");

let totalProducts = [];
let totalPrice = 0;

const data = localStorage.getItem("totalProducts");
if (data) {
  totalProducts = JSON.parse(data);
  console.log(totalProducts);
  basketList.innerHTML = createContentBasket(totalProducts);
}

const dataPrice = localStorage.getItem("totalPrice");
if (dataPrice) {
  totalPrice = JSON.parse(dataPrice);
  bascetTotalPrice.textContent = `Total: ${totalPrice.toFixed(2)}`;
} else bascetTotalPrice.textContent = `Total: 0`;

clearBasketBtn.addEventListener("click", onClearBasket);
basketList.addEventListener("click", onDeleteProduct);

function onClearBasket(event) {
  basketList.innerHTML = "";
  localStorage.removeItem("totalProducts");
  localStorage.removeItem("totalPrice");
  bascetTotalPrice.textContent = `Total: 0`;
}

function onDeleteProduct(event) {
  if (!event.target.classList.contains("delete-product-btn")) return;
  const currentProduct = event.target.closest(".shop-list-item");
  const currentProductId = currentProduct.dataset.id;
  const productForDelete = totalProducts.find(
    (elem) => elem.id === parseInt(currentProductId)
  );
  totalPrice -= productForDelete.price.toFixed(2);
  console.log(totalPrice);
  bascetTotalPrice.textContent = `Total: ${totalPrice.toFixed(2)}`;
  localStorage.setItem("totalPrice", totalPrice.toFixed(2));

  const indexProductForDelete = totalProducts.indexOf(productForDelete);
  console.log(indexProductForDelete);
  currentProduct.remove();
  totalProducts.splice(indexProductForDelete, 1);
  console.log(totalProducts);
  localStorage.setItem("totalProducts", JSON.stringify(totalProducts));
}
