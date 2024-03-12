const startBtn = document.querySelector(".start-btn");
const timer = document.querySelector(".timer");
const stopBtn = document.querySelector(".stop-btn");

let intervslId = null;
let timerTime = 0;
let totalTimer = 0;
let startTime;

startBtn.addEventListener("click", handleClick);
stopBtn.addEventListener("click", clickSpotBtn);

function clickSpotBtn(event) {
  if (stopBtn.hasAttribute("data-clear-btn")) {
    totalTimer = 0;
    stopBtn.textContent = "Stop";
    delete stopBtn.dataset.clearBtn;
    startBtn.textContent = "Start";
    delete startBtn.dataset.contBtn;
    timer.textContent = "00:00:00";
    stopBtn.disabled = true;
    return;
  }
  clearInterval(intervslId);
  startBtn.disabled = false;
  startBtn.textContent = "Continue";
  startBtn.dataset.contBtn = "continue";
  totalTimer = timerTime;
  timerTime = 0;
  stopBtn.textContent = "Clear";
  stopBtn.dataset.clearBtn = "clear";
}

function handleClick(event) {
  if (startBtn.hasAttribute("data-cont-btn")) {
    addInterval();

    startBtn.disabled = true;
    stopBtn.textContent = "Stop";
    delete stopBtn.dataset.clearBtn;

    return;
  }
  addInterval();

  console.log(timerTime);
  startBtn.disabled = true;
}

function addInterval() {
  stopBtn.disabled = false;

  startTime = Date.now();
  intervslId = setInterval(() => {
    let currentTime = Date.now();
    timerTime = currentTime - startTime + totalTimer;
    console.log(timerTime);
    timer.textContent = convertMsToTime(timerTime);
  }, 1000);
}

function convertMsToTime(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  hours = hours % 24;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
}
