const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timer = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function setColor() {
  body.setAttribute('style', `background:${getRandomHexColor()}`);
}

startBtn.addEventListener('click', setColor);

console.log(startBtn);
console.log(stopBtn);
console.log(getRandomHexColor());
console.log(body);
