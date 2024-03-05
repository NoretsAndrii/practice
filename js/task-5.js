const addBtn = document.querySelector(".add-ntn");
const input = document.querySelector("input");
const container = document.querySelector(".container");
const box = document.querySelector(".box");
let allChecked = document.querySelectorAll(".checkbox");

addBtn.addEventListener("click", addTask);

// container.addEventListener("click", handlerClick);

function addTask(event) {
  if (input.value.trim() === "") return;
  const newTask = makeTask(input.value);
  container.insertAdjacentHTML("afterbegin", newTask);
  input.value = "";
  console.log(input.value);
  const checked = document.querySelector(".checkbox");
  checked.addEventListener("click", checkedBox);
}

function makeTask(value) {
  return `<div class="task"><p class="task-text"><input class="checkbox" type="checkbox">${value}</p>
    <button class="del-bt" type="button" disabled>Delete</button></div>`;
}

function checkedBox(event) {
  let totalChecked = 0;
  allChecked = document.querySelectorAll(".checkbox");
  allChecked.forEach((elem) => {
    if (elem.checked) {
      totalChecked += 1;
    }
  });
  console.log(totalChecked);
  if (totalChecked > 0) {
    box.innerHTML = `<button class="chek-btn">Сделать выполненным</button>
      <button class="del-btn">удалить</button>`;
    const checkBtn = document.querySelector(".chek-btn");
    const delBtn = document.querySelector(".del-btn");
    checkBtn.addEventListener("click", checkedFun);
    delBtn.addEventListener("click", deleteBtn);
  } else {
    box.innerHTML = "";
  }
}

function checkedFun(event) {
  allChecked.forEach((elem) => {
    if (elem.checked) {
      elem.closest(".task-text").classList.add("crossed");
      elem.checked = false;
      box.innerHTML = "";
    } else {
      elem.classList.remove("crossed");
    }
  });
}

function deleteBtn(event) {
  allChecked.forEach((elem) => {
    if (
      elem.checked &&
      elem.closest(".task-text").classList.contains("crossed")
    ) {
      elem.closest(".task").remove();
    }
  });
}

// function handlerClick(event) {
//   const currentTask = event.target.closest(".task");
//   if (event.target.classList.contains("del-btn")) {
//     currentTask.remove();
//   }
//   const firstEl = currentTask.querySelector(".task-text");
//   const span = currentTask.querySelector(".done");

//   firstEl.classList.toggle("crossed");

//   const delBtn = currentTask.querySelector(".del-btn");
//   if (firstEl.classList.contains("crossed")) {
//     span.innerHTML = "&#10004";
//     delBtn.removeAttribute("disabled");
//     currentTask.style.backgroundColor = "rgb(214, 207, 207)";
//   } else {
//     delBtn.setAttribute("disabled", "true");
//     span.innerHTML = "";
//     currentTask.style.backgroundColor = "transparent";
//   }
// }
