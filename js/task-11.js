const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formEl = event.currentTarget.elements;
  const delay = formEl.delay.value;
  const promisStatus = formEl.state.value;
  console.log(promisStatus);

  createPromise(delay, promisStatus)
    .then((massege) => console.log(massege))
    .catch((error) => console.log(error));
}

function createPromise(delay, status) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === "fulfilled") {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
  return promise;
}
