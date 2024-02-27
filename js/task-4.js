const container = document.querySelector(".container");
const pEl = document.querySelector(".total");

let total = 0;
container.addEventListener("click", handleClick);

function handleClick(event) {
  if (event.target === event.currentTarget) return;
  const currentProduct = event.target.closest(".card");
  console.log(currentProduct);
  const price = Number(currentProduct.lastElementChild.textContent);
  console.log(price);
  total += price;
  pEl.textContent = `Вартість: ${total}`;
}
