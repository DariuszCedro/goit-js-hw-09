const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timer = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function setColor() {
  timer = setInterval(function () {
    body.setAttribute('style', `background:${getRandomHexColor()}`);
  }, 1000);
}

function isActive() {
  startBtn.classList.add('.is-active');
  startBtn.setAttribute('disabled', true);
  stopBtn.classList.remove('.is-active');
  stopBtn.removeAttribute('disabled');
}

function isNotActive() {
  stopBtn.classList.add('.is-active');
  stopBtn.setAttribute('disabled', true);
  startBtn.classList.remove('.is-active');
  startBtn.removeAttribute('disabled');
  clearInterval(timer);
}

startBtn.addEventListener('click', setColor);
startBtn.addEventListener('click', isActive);
stopBtn.addEventListener('click', isNotActive);
