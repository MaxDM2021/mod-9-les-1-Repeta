//  Что нужно для таймера:
// 1) Нужно задать дедлайн
// 2) Нужно задать текущую дату
// 3) Нужно вычислит разницу
// 4) Разницу нужно в нормальном формате конвертировать для пользователя
// 5) Вывести все на экран

// Деделайн

// ======Таймер===========

// function timer() {

// const deadline = new Date(2023, 0, 1);
// const dayElements = document.querySelector(".days");
// const hoursElements = document.querySelector(".hours");
// const minutesElements = document.querySelector(".minutes");
// const secondsElements = document.querySelector(".seconds");

// const today = new Date();

// const delta = deadline - today;

// const seconds = Math.floor(delta / 1000) % 60;

// const minutes = Math.floor(delta / 1000 / 60) % 60;

// const hours = Math.floor(delta / 1000 / 60 / 60) % 24;

// const days = Math.floor(delta / 1000 / 60 / 60 / 24 );

// dayElements.textContent = days < 10 ? `0${days}`: days;
// hoursElements.textContent = hours < 10 ? `0${hours}`: hours;
// minutesElements.textContent = minutes < 10 ? `0${minutes}`: minutes;
// secondsElements.textContent = seconds < 10 ? `0${seconds}`: seconds;

// }

// setInterval(timer, 1000)

// ==========Секундомер================

function secondsMeter() {
  const dataStart = new Date(2022, 0, 1);
  const dayElements = document.querySelector(".days");
  const hoursElements = document.querySelector(".hours");
  const minutesElements = document.querySelector(".minutes");
  const secondsElements = document.querySelector(".seconds");

  const today = new Date();

  const delta = today - dataStart;

  const seconds = Math.floor(delta / 1000) % 60;

  const minutes = Math.floor(delta / 1000 / 60) % 60;

  const hours = Math.floor(delta / 1000 / 60 / 60) % 24;

  const days = Math.floor(delta / 1000 / 60 / 60 / 24);

  dayElements.textContent = days < 10 ? `0${days}` : days;
  hoursElements.textContent = hours < 10 ? `0${hours}` : hours;
  minutesElements.textContent = minutes < 10 ? `0${minutes}` : minutes;
  secondsElements.textContent = seconds < 10 ? `0${seconds}` : seconds;
}

setInterval(secondsMeter, 1000);

// ========================

// [1, 2, 3, 4, 5].map((element, index, arr) => {});

// const promise = new Promise((resolve, reject) => {
//     resolve(10);
// })

// const promise = new Promise((resolve, reject) => {
//     reject(10);
// })

// console.log('a');
// console.log('b');

//  промис выполняется первее чем setTimeout по приоритету!! если они одновременного готовы

// const result = new Promise ((resolve, reject) => {
//     let total = 0;

//     for (let i = 0; i < 1000000; i++) {
//         total += i;
//     }

//     if (total % 2 === 0) {
//         resolve(total);
//     }else {
//         reject("Error")
//     }
//     })

//     let isLoading = true;

// result
// .then((data) => console.log(data),
// (error) => console.log(error)
// )
// .then((data) => console.log(data),
// (error) => console.log(error)
// )
// .then((data) => console.log(data),
// (error) => console.log(error)
// )
// .finally(() => (isLoading = false));

// addEventListener('click', registerClick);

// console.log(result);

// =============================

function promiseCreator(counter) {
  return (result = new Promise((resolve, reject) => {
    let total = 0;

    for (let i = 0; i < counter; i++) {
      total += i;
    }

    // console.log(total);

    if (total % 2 === 0) {
      resolve(total);
    } else {
      reject("Error");
    }
  }));
}

// ===Вариант записи 1=====
// promiseCreator(10)
// .then((data) => console.log(data))
// .catch((error) => console.log(error));

// promiseCreator(1001)
// .then((data) => console.log(data))
// .catch((error) => console.log(error));

// ===Вариант записи 2=====

//Promise.all - может собирать с разных источников информацию и выдавать в едином окне!!!
// Пример и талицей курса обмена валют с трех банков

// Promise.all([promiseCreator(10), promiseCreator(1001)])
// .then((data) => {
//     console.log("data", data)
// })
// .catch((error) => {
//     console.log("error", error)
// });

// Promise.race - кто первый выполнился, того результат и выдается.(тот кто быстрее!)
// Пример с источниками погоды  с трех сайтов

// Promise.race([promiseCreator(10), promiseCreator(1001)])
// .then((data) => {
//     console.log("data", data)
// })
// .catch((error) => {
//     console.log("error", error)
// });

// Promise.allSettled - обрабатывает все запросы, выдает результат по каждому отдельно
// Самый оптимальный!

Promise.allSettled([promiseCreator(10), promiseCreator(1001)])
.then((data) => {
    console.log("data", data)
})
.catch((error) => {
    console.log("error", error)
});