export default function createContent(arr) {
  const markup = arr
    .map(
      (elem) => ` <li class="shop-list-item" data-id="${elem.id}">
            <h2>${elem.title}</h2>
            <img class="shop-list-item-img" src="${elem.image}" alt="">
            <p class="shop-list-item-price">${elem.price}</p>
            <p>${elem.category}</p>
        </li>`
    )
    .join("");
  return markup;
}

export function createContentBasket(arr) {
  const markup = arr
    .map(
      (elem) => ` <li class="shop-list-item" data-id="${elem.id}">
            <button class="delete-product-btn" type="button"></button>
            <h2>${elem.title}</h2>
            <img class="shop-list-item-img" src="${elem.image}" alt="">
            <p class="shop-list-item-price">${elem.price}</p>
            <p>${elem.category}</p>
        </li>`
    )
    .join("");
  return markup;
}
