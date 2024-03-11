// * Якщо імейл і пароль користувача збігаються, при сабміті зберігай дані з форми
// * у локальне сховище і змінюй кнопку login на logout і роби поля введення
// * Недоступними для зміни.
// * При перезавантаженні сторінки, якщо користувач залогінений, ми повинні бачити logout-кнопку
// * та недоступні для зміни поля з даними користувача.
// * Клік по кнопці logout повертає все в початковий вигляд і видаляє дані користувача
// * З локального сховища.
// *
// * Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// * повідомляти про помилку.

const user = {
  email: "user@gmail.com",
  password: "12345",
};

const formSubmit = document.querySelector("#login-form");

const dataOfUser = JSON.parse(localStorage.getItem("userLoginData"));
console.log(dataOfUser);
if (dataOfUser) {
  formSubmit.elements.button.textContent = "Logout";
  formSubmit.elements.email.disabled = true;
  formSubmit.elements.email.value = dataOfUser.email;
  formSubmit.elements.password.disabled = true;
  formSubmit.elements.password.value = dataOfUser.password;
}

formSubmit.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  if (formElements.password.disabled) {
    formElements.button.textContent = "Login";
    formElements.email.disabled = false;
    formElements.password.disabled = false;
    localStorage.removeItem("userLoginData");
    formSubmit.reset();
    return;
  }
  const email = formElements.email.value.trim().toLowerCase();
  const password = formElements.password.value.trim().toLowerCase();
  if (email !== user.email || password !== user.password)
    return alert("Невірне им'я аба пароль");
  const userData = {
    email,
    password,
  };
  localStorage.setItem("userLoginData", JSON.stringify(userData));
  formElements.button.textContent = "Logout";
  formElements.email.disabled = true;
  formElements.password.disabled = true;
}
