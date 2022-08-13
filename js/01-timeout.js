
// const logMessage = () => {
//     console.log('Лог при вызове callback-функции через 3секунды');
// };

// console.log('До вызова setTimeout');

// // =========Вызов функции через 2секунды (если сможешь) или после выполнения всего синхронного кода=======

// setTimeout( x => {
//     console.log (x);
//     console.log('1 - Внутри callback для setTineout');
// }, 2000, 5,);

// setTimeout(y => {
//     console.log (y);
//     console.log('2 - Внутри callback для setTineout');
// }, 1000, 50,);

// console.log('После вызова setTimeout');

// =======Очистка timeout c clearTimeout(timeoutId)=======

// const logger = time => {
//     console.log(`Лог через ${time}ms, потому что не отменили таймаут`);
// }

// const timerId = setTimeout(logger, 2000, 2000);

// console.log(timerId);

// const shouldCanselTimer = Math.random() > 0.3;
// console.log(shouldCanselTimer);

// if (shouldCanselTimer) {
//     clearTimeout(timerId);
// }

// ===========Метод setInterval(callback, delay, args)=============
// Через каждые 2000мс вызов функции

// const logger = time => console.log(`Лог каждые ${time}ms - ${Date.now()}`);

// console.log('До вызова setInterval');
// setInterval(logger, 2000, 2000);
// console.log('После вызова setInterval')


// =======Очистка интервала с clearInterval(intervalID)================

// const logger = time => console.log(`Лог каждые ${time}ms - ${Date.now()}`);

// const intervalId = setInterval(logger, 2000, 2000);
// const shouldCanselInterval = Math.random() > 0.3;
// console.log(shouldCanselInterval);


// if (shouldCanselInterval){
//     clearInterval(intervalId);
// }


// ===============================

console.log('До вызова setTimeout');

setTimeout(() => {console.log('вызов отложенной');}, 2000);

console.log('После вызова setTimeout')