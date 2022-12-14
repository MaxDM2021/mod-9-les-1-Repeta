const refs = {
  startBtn: document.querySelector("button[data-action-start]"),
  stopBtn: document.querySelector("button[data-action-stop]"),

};

class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;

    this.init();
  }

  init() {
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }

  start() {
    if (this.isActive) {
      return;
    }
    const startTime = Date.now();
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = this.getTimeComponents(deltaTime);

      //   updateClockface(time);
      this.onTick(time);
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }
  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }
  // Добавляет к часам минутам и секундам нолик
  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const timer = new Timer({
  onTick: updateClockface,
});

refs.startBtn.addEventListener("click", timer.start.bind(timer));
refs.stopBtn.addEventListener("click", timer.stop.bind(timer));

function updateClockface({ hours, mins, secs }) {
  refs.clockface.textContent = `${hours}: ${mins}: ${secs}`;
}












// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";

// refs = {
//     startBtn: document.querySelector('button[data-start]'),
//     clockfaceDays: document.querySelector('[data-days]'),
//     clockfaceHours: document.querySelector('[data-hours]'),
//     clockfaceMinutes: document.querySelector('[data-minutes]'),
//     clockfaceSeconds: document.querySelector('[data-seconds]'),
//     flatpickrSelect: document.querySelector('input[type="text"]'),
//   }

// let choseDate = [];
// const currentDate = new Date();

// refs.startBtn.setAttribute('disabled', true);

// const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//       if (selectedDates[0] < currentDate) {
//         window.alert('Please choose a date in the future');
//       }
//       choseDate = selectedDates[0];
//       refs.startBtn.removeAttribute('disabled', true);
//       refs.startBtn.addEventListener('click', countDelta);
//     },
//   };

// flatpickr(refs.flatpickrSelect, options);


// function countDelta() {
//     const deltatime = choseDate - currentDate;

//     setInterval(convertMs(deltatime), 1000)
// }


//    function convertMs(ms) {
//         // Number of milliseconds per unit of time
//         const second = 1000;
//         const minute = second * 60;
//         const hour = minute * 60;
//         const day = hour * 24;
      
//         // Remaining days
//         const days = pad.Math.floor(ms / day);
//         // Remaining hours
//         const hours = pad.Math.floor((ms % day) / hour);
//         // Remaining minutes
//         const minutes = pad.Math.floor(((ms % day) % hour) / minute);
//         // Remaining seconds
//         const seconds = pad.Math.floor((((ms % day) % hour) % minute) / second);
      
//         return { days, hours, minutes, seconds };
//       }

//     // Добавляет к часам минутам и секундам нолик
//     function pad(value) {
//       return String(value).padStart(2, "0");
//     }

