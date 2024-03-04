const input = document.querySelector(".render-input");
const usersList = document.querySelector(".users-list");

async function usersData() {
  return await fetch(`https://jsonplaceholder.typicode.com/users`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

async function getUsersData() {
  const users = await usersData();
  console.log(users);
  usersList.innerHTML = createContent(users);
}

function createContent(arr) {
  return arr.map(({ name }) => `<li class="user-item">${name}</li>`).join("");
}

function filterUsers(event) {
  const usersListItem = document.querySelectorAll(".user-item");
  if (!input.value.trim()) {
    document
      .querySelectorAll(".hidden")
      .forEach((elem) => elem.classList.remove("hidden"));
    input.value = "";
    return;
  }
  const inputValue = input.value.trim().toLowerCase();
  usersListItem.forEach((elem) => {
    console.log(1);
    !elem.innerText.toLowerCase().startsWith(inputValue)
      ? elem.classList.add("hidden")
      : elem.classList.remove("hidden");
  });
}

getUsersData();

input.addEventListener("input", filterUsers);
