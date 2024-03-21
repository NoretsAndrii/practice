import { totalProducts } from "./task-12";

const basketList = document.querySelector(".basket-list");
console.log(totalProducts);

basketList.append(...totalProducts);
