const shopList = document.querySelector(".shop-list");
const basket = document.querySelector(".basket");

export const totalProducts = [];

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    shopList.innerHTML = createContent(data);
    console.log(data);
  });

shopList.addEventListener("click", handleClick);

function handleClick(event) {
  if (event.currentTarget === event.target) return;
  const currentProduct = event.target.closest(".shop-list-item");
  const currentPrice = currentProduct.querySelector(
    ".shop-list-item-price"
  ).textContent;
  totalProducts.push(currentProduct);
  console.log(...totalProducts);
  console.log(currentProduct);
  console.log(currentPrice);
}

function createContent(arr) {
  const markup = arr
    .map(
      (elem) => ` <li class="shop-list-item">
            <h2>${elem.title}</h2>
            <p class="shop-list-item-price">${elem.price}</p>
            <p>${elem.category}</p>
        </li>`
    )
    .join("");
  return markup;
}
