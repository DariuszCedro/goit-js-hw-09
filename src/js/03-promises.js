let delays = document.querySelector('[name="delay"]');
let step = document.querySelector('[name="step"]');
let amount = document.querySelector('[name="amount"]');
let btn = document.querySelector('button');

let position = 10;
let delay = 5000;

function handleDelay(event) {
  delayValue = event.currentTarget.value;
  return delayValue;
}

function handleStep(event) {
  let stepValue = event.currentTarget.value;
  console.log(stepValue);
  return stepValue;
}

function handleAmount(event) {
  amountValue = event.currentTarget.value;
  console.log(amountValue);
  return amountValue;
}

function createPromise(position, delay) {
  for (let i = 1; i <= position; i++) {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      console.log('Success! Value passed to resolve function');
    } else {
      console.log('Error! Error passed to reject function');
    }
  }
}

function handleSubmit(event) {
  event.preventDefault();
  amount.addEventListener('input', handleAmount);
  delays.addEventListener('input', handleDelay);
  step.addEventListener('input', handleStep);

  createPromise(position, delay);
}

btn.addEventListener('click', handleSubmit);
