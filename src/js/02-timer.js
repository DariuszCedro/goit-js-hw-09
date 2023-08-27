import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const btn = document.querySelector('.button');
const timeD = document.querySelector('span[data-days]');
const timeH = document.querySelector('span[data-hours]');
const timeM = document.querySelector('span[data-minutes]');
const timeS = document.querySelector('span[data-seconds]');
let today = new Date();
let timer = null;

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.padStart(2, '0');
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= today) {
      btn.setAttribute('disabled', true);
      alert('Please choose a date in the future');
    } else {
      btn.removeAttribute('disabled');

      function setTime() {
        btn.setAttribute('disabled', true);
        timer = setInterval(function () {
          today = new Date();
          let count = selectedDates[0] - today;

          if (count <= 0) {
            clearInterval(timer);
          }

          const times = convertMs(count);
          if (count >= 0) {
            let sec = times.seconds.toString();
            let min = times.minutes.toString();
            let hr = times.hours.toString();
            let ds = times.days.toString();
            timeD.textContent = addLeadingZero(ds);
            timeH.textContent = addLeadingZero(hr);
            timeM.textContent = addLeadingZero(min);
            timeS.textContent = addLeadingZero(sec);
          }
        }, 1000);
      }

      btn.addEventListener('click', setTime);
    }
  },
};

flatpickr('#datetime-picker', options);
