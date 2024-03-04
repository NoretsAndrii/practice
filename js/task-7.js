const input = document.querySelector(".render-input");
const usersList = document.querySelector(".users-list");

function usersData() {
  return fetch(`https://jsonplaceholder.typicode.com/users`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}
let arrUsersName;

async function getUsersData() {
  const users = await usersData();
  console.log(users);
  arrUsersName = users.map(({ name }) => name);
  console.log(arrUsersName);
  usersList.innerHTML = createContent(arrUsersName);
}

getUsersData();

function createContent(arr) {
  return arr.map((name) => `<li class="user-item">${name}</li>`).join("");
}

input.addEventListener("input", handlerInput);

function handlerInput(event) {
  console.log(arrUsersName);
  const inputValue = input.value.trim().toLowerCase();
  const filterUsersName = arrUsersName.filter((userName) =>
    userName.toLowerCase().startsWith(inputValue)
  );
  console.log(filterUsersName);
  usersList.innerHTML = createContent(filterUsersName);
}
