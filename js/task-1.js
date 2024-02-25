const list = document.querySelector("#categories");
const listItems = document.querySelectorAll(".item");

console.log(listItems.length);

listItems.forEach((item) => {
  console.log(item.firstElementChild.textContent);
  const itemsOfItem = item.querySelectorAll("li");
  console.log(itemsOfItem.length);
});
