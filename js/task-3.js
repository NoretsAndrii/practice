const input = document.querySelector(".input");
const pEl = document.querySelector(".text");

input.addEventListener("blur", hendleFocus);

function hendleFocus(event) {
  const arrText = pEl.textContent.split(" ");
  let inputValue = event.target.value;
  if (!arrText.includes(inputValue)) {
    pEl.textContent += ` ${inputValue}`;
  }
  event.target.value = "";
}
