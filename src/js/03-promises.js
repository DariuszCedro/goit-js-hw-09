import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const initialDelay = parseInt(event.target.delay.value);
  const step = parseInt(event.target.step.value);
  const amount = parseInt(event.target.amount.value);

  for (let i = 1; i <= amount; i++) {
    const delay = step * (i - 1) + initialDelay;
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
