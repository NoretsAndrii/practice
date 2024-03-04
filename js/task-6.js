const list = document.querySelector(".list-digit");
const digits = document.querySelectorAll(".digit");

const randomNumber = getRandomIntInclusive(1000, 9999);
const arrRandomNumber = String(randomNumber).split("");

digits.forEach((elem) => {
  elem.addEventListener("click", handlerClick);
});

function handlerClick(event) {
  console.log("hello");
  let strNow = event.target.innerText;
  let numNow = Number(strNow);
  numNow === 9 ? (numNow = 0) : (numNow += 1);
  strNow = String(numNow);
  event.target.innerText = strNow;
  const id = event.target.dataset.id;
  if (strNow === arrRandomNumber[id]) {
    digits[id].classList.add("red");
    digits[id].style.cursor = "not-allowed";
    digits[id].removeEventListener("click", handlerClick);
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
}

console.log(digits);
console.log(arrRandomNumber);

// debugger;
for (let i = 0; i < 4; i += 1) {
  console.log(Number(digits[i].innerText));
  if (arrRandomNumber[i] === digits[i].innerText) {
    console.log("+++");
    digits[i].classList.add("red");
    digits[i].style.cursor = "not-allowed";
    digits[i].removeEventListener("click", handlerClick);
  }
}
