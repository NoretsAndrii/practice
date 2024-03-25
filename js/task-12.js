import createContent from "./task-12=render";

const shopList = document.querySelector(".shop-list");
const basket = document.querySelector(".basket");

let currentProductData = [];
let totalPrice = 0;
let totalProducts = [];
let priceData = localStorage.getItem("totalPrice");
if (priceData) {
  console.log(priceData);
  totalPrice = JSON.parse(priceData);
  basket.textContent = `Корзина :${totalPrice.toFixed(2)}`;
}
let productData = JSON.parse(localStorage.getItem("totalProducts"));
if (productData) {
  totalProducts = productData;
}

fetch("https://fakestoreapi.com/products")
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  })
  .then((data) => {
    console.log(data);
    shopList.innerHTML = createContent(data);
    currentProductData = [...data];
    console.log(currentProductData);
  })
  .catch((error) => console.log("ERROR:", error));

shopList.addEventListener("click", handleClick);

function handleClick(event) {
  if (event.currentTarget === event.target) return;
  const currentProduct = event.target.closest(".shop-list-item");
  const currentProductId = currentProduct.dataset.id;
  console.log(currentProductId);
  console.log(currentProductData[currentProductId - 1]);
  const currentPrice = currentProductData[currentProductId - 1].price;
  totalPrice += parseFloat(currentPrice);
  localStorage.setItem("totalPrice", totalPrice.toFixed(2));
  basket.textContent = `Корзина :${totalPrice.toFixed(2)}`;
  console.log(currentProduct);
  totalProducts.push(currentProductData[currentProductId - 1]);
  localStorage.setItem("totalProducts", JSON.stringify(totalProducts));

  console.log(currentPrice);
}

// export default function createContent(arr) {
//   const markup = arr
//     .map(
//       (elem) => ` <li class="shop-list-item" data-id="${elem.id}">
//             <h2>${elem.title}</h2>
//             <p class="shop-list-item-price">${elem.price}</p>
//             <p>${elem.category}</p>
//         </li>`
//     )
//     .join("");
//   return markup;
// }
