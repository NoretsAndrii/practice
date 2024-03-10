const input = document.querySelector(".render-input");
const usersList = document.querySelector(".users-list");

let users;

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
  users = await usersData();
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
    !elem.textContent.toLowerCase().startsWith(inputValue)
      ? elem.classList.add("hidden")
      : elem.classList.remove("hidden");
  });

  // const inputValue = input.value.trim().toLowerCase();
  // const usersFiltered = users.filter((user) =>
  //   user.name.toLowerCase().startsWith(inputValue)
  // );
  // usersList.innerHTML = createContent(usersFiltered);
}

getUsersData();

input.addEventListener("input", filterUsers);
