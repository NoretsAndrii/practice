const addBtn = document.querySelector(".add-ntn");
const input = document.querySelector("input");
const container = document.querySelector(".container");

addBtn.addEventListener("click", addTask);

container.addEventListener("click", deleteTask);

function addTask(event) {
  if (input.value.trim() === "") return;
  const newTask = makeTask(input.value);
  container.insertAdjacentHTML("beforeend", newTask);
  input.value = "";
  console.log(input.value);
}

function makeTask(value) {
  return `<div class="task"><p>${value}</p>
    <button class="del-btn" type="buyyon">Delete</button></div>`;
}

function deleteTask(event) {
  if (!event.target.classList.contains("del-btn")) return console.log("UPS");
  const currentTask = event.target.closest(".task");
  currentTask.remove();
}
